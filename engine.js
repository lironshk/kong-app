import {
  equipmentSchema, hasEquipment
}
from './training-evidence.js?v=31';
export const RULE_VERSION = 'foundation-0.3.0';
import {
  exercises
}
from './data/exercises.js?v=31';
export {
  exercises
};
const available =(e, p) => hasEquipment(e, p.equipment);
const GOALS = ['strength', 'endurance', 'core', 'skills'];
const number =(v, min, max) => typeof v === 'number' && Number.isFinite(v) && v >= min && v <= max;
export const RULE_SOURCES = [ {
  id: 'acsm-2026', url: 'https://acsm.org/resistance-training-guidelines-update-2026/', application:
  'Individualized consistent resistance training; exact app targets remain product hypotheses.'
}, {
  id: 'who-2020', url: 'https://www.who.int/initiatives/behealthy/physical-activity/', application:
  'Major muscle groups on two or more days weekly; not validation of exact app dosage.'
}];
export function validateProfile(p, minutes = p?.minutes) {
  const errors = [];
  if (!p || p.adult !== true || p.limits) errors.push('המסלול העצמאי מיועד למבוגרים ללא מגבלה מדווחת. נדרשת התאמה מקצועית לפני האימון.');
  if (!number(minutes, 10, 90)) errors.push('לבחור משך אימון בין 10 ל־90 דקות.');
  for (const key of['push', 'pull', 'legs', 'core']) if (!number(p?.[key], 0, key === 'core' ? 600: 200)) errors.push(
  'יש להזין יכולת מספרית תקינה: ' + key + '.');
  if (!Array.isArray(p?.equipment) || p.equipment.some(x => !equipmentSchema.includes(x))) errors.push('לבחור ציוד מתוך הרשימה הזמינה.');
  if (!GOALS.includes(p?.goal)) errors.push('לבחור מטרה תקינה.');
  return errors;
}
const titles = {
  strength: [ ['בסיס חזק', 'Strong foundations'], ['כוח בשליטה', 'Strength with control'], ['בונים יציבות',
  'Building stability']], endurance: [ ['קצב שאפשר לשמור', 'A sustainable rhythm'], ['עוד תנועה, בשליטה',
  'Move with control'], ['סיבולת בתנועה', 'Movement endurance']], core: [ ['מרכז יציב', 'A steady centre'],
  ['שליטה מהמרכז', 'Control from the centre'], ['יציבות לכל הגוף', 'Whole-body stability']], skills: [ ['בסיס לסקיל הבא',
  'Foundations for your next skill'], ['שליטה לפני גובה', 'Control before height'], ['דיוק בתנועה',
  'Movement precision']]
};
// Matching is deliberately exact: substitution, assistance, load and side totals are distinct.
const dateTime = value => typeof value === 'string' && value.trim() ? Date.parse(value): NaN;
const logTime = l => dateTime(l?.completed_at);
const sortedLogs = logs =>(Array.isArray(logs) ? logs: []).filter(l => Number.isFinite(logTime(l))).slice().sort((a,
b) => logTime(a) - logTime(b));
const conditionText = value => value == null ? '': typeof value === 'string' ? value.trim(): null;
const nativePrescription = s => !s.planned_exercise_id || s.planned_exercise_id === s.performed_exercise_id;
const baselineMatch =(s, e) => nativePrescription(s) && s.performed_exercise_id === e.id && s.unit ===(e.unit || 'reps') && conditionText(s.
assistance) === '' && conditionText(s.setup) === '' && Number(s.added_load || 0) === 0 &&(s.side_allocation || null) ===(e.perSide ?
'total_both_sides': null) && Number.isFinite(s.target) && s.target > 0 && Number.isFinite(s.actual) && s.actual >= 0;
function painReview(logs, reviewedAt) {
  const last = logs.filter(l => l.pain === true).at(- 1);
  return last && !(Number.isFinite(dateTime(reviewedAt)) && dateTime(reviewedAt) >= logTime(last)) ? last: null;
}
function earnedTarget(e, entries, logs) {
  let earned = 0;
  for (const {
    log, sets
  }
  of entries) {
    if (log.completed !== true || log.pain === true || ! ['normal', 'easy'].includes(log.effort) || sets.some(s => s.quality !== 'good' || s.
    actual < s.target)) continue;
    const approval = log.plan?.adaptation?.approvedProgressions?.find(a => a.exerciseId === e.id);
    if (!approval) continue;
    const planned =(log.plan?.blocks || []).filter(b => b.phase === 'work' && b.id === e.id);
    if (!planned.length || sets.length < planned.length || sets.some(s => s.target !== approval.target) || planned.some(b => b.target !==
    approval.target)) continue;
    const prior = logs.filter(l => logTime(l) < logTime(log));
    const checkpoint = progressionCheckpoint(e.id, prior, {
      now: new Date(logTime(log)), conditions: {
        unit: e.unit || 'reps', assistance: '', added_load: 0, setup: '', side_allocation: e.perSide ? 'total_both_sides': null
      }
    });
    if (checkpoint.eligible && checkpoint.suggestedTarget === approval.target && Array.isArray(approval.evidenceLogIds) && approval.
    evidenceLogIds.length === checkpoint.evidenceLogIds.length && approval.evidenceLogIds.every((id,
    i) => id === checkpoint.evidenceLogIds[i])) earned = Math.max(earned, approval.target);
  }
  return earned;
}
export function adaptTarget(e, target, logs, {
  retainEarned = true, maxTarget = 30
} = {
}) {
  const entries = logs.map(log =>( {
    log, sets:(log.sets || []).filter(s => baselineMatch(s, e))
  })).filter(x => x.sets.length);
  const latest = entries.at(- 1);
  if (!latest) return {
    target, evidence: null
  };
  const {
    log, sets
  } = latest;
  // A successful, explicitly approved dose is earned. Merely logging a high target
  // never raises the baseline. Later hard/uncertain/under-target work still lowers it.
  const historicalCeiling = Math.min(target, ... entries.flatMap(row => row.sets.map(s => s.target)));
  const established = retainEarned ? Math.min(maxTarget, Math.max(historicalCeiling, earnedTarget(e,
  entries, logs))): historicalCeiling;
  const ceiling = Math.min(established, ... sets.map(s => s.target));
  const causes = [log.effort === 'hard' ? 'hard': null, sets.some(s => s.quality === 'uncertain') ? 'form': null,
  sets.some(s => s.actual < s.target) ? 'under-target': null].filter(Boolean);
  const step = e.perSide ? 2: 1;
  const reduced = causes.length ? Math.max(step, Math.floor(ceiling * .8 / step) * step): ceiling;
  return {
    target: Math.min(established, reduced), evidence: {
      exerciseId: e.id, sourceLogId: log.id || null, sourceDate: log.completed_at, comparableCount: sets.length,
      causes, previousTarget: ceiling, target: Math.min(established, reduced), earnedTarget: established > target ? established: null
    }
  };
}
export function plan(p, minutes = p?.minutes, readiness = 'normal', context = {
}) {
  const now = context.now ?? new Date();
  const logs = sortedLogs(context.history ?? p?.logs).filter(l => logTime(l) <= + now);
  const pain = painReview(logs, context.painReviewedAt ?? p?.painReviewedAt);
  // Only an explicit capability reassessment starts a fresh comparison baseline.
  // Pain review deliberately uses the full history, including earlier assessments.
  const assessmentAt = dateTime(p?.assessmentAt);
  const comparisonLogs = Number.isFinite(assessmentAt) ? logs.filter(l => logTime(l) >= assessmentAt): logs;
  const errors = validateProfile(p, minutes);
  if (pain) errors.unshift('קיים דיווח כאב ביומן. נדרשת בדיקת מוכנות מפורשת לפני יצירת אימון חדש.');
  if (readiness === 'pain') errors.unshift('דווח כאב. לעצור לפני אימון ולפנות לבדיקה מתאימה לפני החזרה.');
  if (! ['normal', 'tired', 'pain'].includes(readiness)) errors.push('לבחור מצב מוכנות תקין.');
  if (errors.length) return {
    blocked: true, reason: errors.join(' '), errors, blocks: [], rule_version: RULE_VERSION, adaptation: {
      status: pain ? 'review': 'blocked', automaticProgression: false, sourceLogId: pain?.id || null, sourceDate: pain?.completed_at || null,
      comparableCount: 0, reasonHe: errors.join(' '), reasonEn: pain ?
      'A pain report requires an explicit readiness review before a new session.': 'This profile or readiness is not supported.'
    }
  };
  const dayIndex = Number.isInteger(context.dayIndex) ?((context.dayIndex % 7) + 7) % 7: 0;
  const weekIndex = Number.isInteger(context.weekIndex) ? Math.max(0, context.weekIndex): 0;
  const days = Array.isArray(p.days) ? [... new Set(p.days.filter(x => Number.isInteger(x) && x >= 0 && x < 7))].sort((a,
  b) => a - b): [0, 2, 4];
  const sessionIndex = Number.isInteger(context.sessionIndex) ? Math.max(0, context.sessionIndex): Math.max(0,
  days.indexOf(dayIndex));
  const variant =(sessionIndex + weekIndex) % 3;
  const pick = id => exercises.find(e => e.id === id);
  const tired = readiness === 'tired';
  const push = p.push >= 8 && !tired ? 'push': p.equipment.includes('lowbar') ? 'incline-push': p.equipment.includes('wall') ? 'wall-push':
  'knee-push';
  const pull = p.pull >= 5 && p.equipment.includes('bar') && !tired ? 'pull': p.equipment.includes('lowbar') ? 'row': p.equipment.includes('band'
  ) ? 'band-row': null;
  const legs = 'squat';
  const core = p.core >= 20 && !tired ? 'plank': 'deadbug';
  const accessory = p.goal === 'core' ?(core === 'deadbug' ? 'bird-dog': 'deadbug'): variant === 1 ? 'hinge': variant === 2 ? 'calf': 'bridge';
  let ids = [push, pull, legs, core, accessory].filter(Boolean);
  if (variant === 1) ids = [legs, pull, push, core, accessory].filter(Boolean);
  if (variant === 2) ids = [pull, push, legs, core, accessory].filter(Boolean);
  if (p.goal === 'core') ids = [core, ... ids.filter(x => x !== core)];
  if (p.goal === 'skills' && p.skillGoal === 'first-pullup' && pull) ids = [pull, core, ... ids.filter(x => x !== pull && x !== core)];
  else if (p.goal === 'skills') ids = [core, push, ... ids.filter(x => x !== core && x !== push)];
  let chosen = ids.map(pick).filter(e => e && !e.advancedOnly);
  if (minutes < 15) chosen = chosen.filter(e => e.id !== accessory);
  const recovery = context.recovery === true;
  const warm = Math.min(300, Math.max(120, Math.round(minutes * 60 * .12)));
  const cool = 60, work = minutes < 15 ? 30: tired ? 30: p.goal === 'endurance' ? 45: 40;
  const rest = minutes < 15 ? 60: tired ? 80: p.goal === 'endurance' ? 45: 80;
  const slot = work + rest;
  const maxRounds = 3;
  // Allocate whole rounds. An optional accessory can be omitted before building,
  // but a push/pull/legs/core round is never truncated after generation.
  if (chosen.length * slot > minutes * 60 - warm - cool) chosen = chosen.filter(e => e.id !== accessory);
  const rounds = recovery ? 0: Math.min(tired ? 2: maxRounds, Math.floor((minutes * 60 - warm - cool) /(chosen.length * slot)));
  let blocks = [ {
    id: 'warm', he: 'חימום ותנועה', en: 'Warm-up and movement', phase: 'warm', seconds: warm, cue:
    'הליכה נינוחה במקום, סיבובי כתפיים וסקוואטים קלים בטווח נוח. להתחיל לאט ולהעלות קצב בהדרגה.', target: null
  }];
  const targetFor = e => {
    if (e.unit === 'seconds') {
      const budget = e.perSide ? Math.max(2, work - 10): work;
      const raw = Math.min(25, budget, Math.max(5, Math.floor(p.core * .5)));
      return e.perSide ? Math.max(2, Math.floor(raw / 2) * 2): raw;
    }
    const capability = e.group === 'push' ? p.push: e.group === 'pull' ? p.pull: e.group === 'legs' ? p.legs: 0;
    if ( ['pull', 'chin'].includes(e.id)) return Math.max(1, Math.min(6, Math.floor(capability * .5)));
    if (e.perSide) return Math.min(8, Math.max(2, Math.floor(work / 6) * 2));
    // Capacity in a full push/pull does not establish capacity in a different variation.
    if ( ['wall-push', 'incline-push', 'knee-push', 'band-row', 'row'].includes(e.id)) return 2;
    if ( ['deadbug', 'bridge'].includes(e.id)) return tired || p.core === 0 ? 2: 4;
    return capability === 0 ? 2: Math.max(3, Math.min(p.goal === 'endurance' ? 12: 8, Math.floor(capability *(tired?.4: .6)) || 4));
  };
  const evidence = new Map();
  const approvedProgressions = [];
  const adaptedTarget = e => {
    const adjusted = adaptTarget(e, targetFor(e), comparisonLogs, {
      retainEarned: !tired, maxTarget: e.unit === 'seconds' ? work: 30
    });
    if (adjusted.evidence) evidence.set(e.id, adjusted.evidence);
    const approved = context.confirmedTargets?.[e.id];
    if (!tired && approved) {
      const checkpoint = progressionCheckpoint(e.id, logs, {
        assessmentAt: p.assessmentAt, conditions: {
          unit: e.unit || 'reps', assistance: '', added_load: 0, setup: '', side_allocation: e.perSide ? 'total_both_sides': null
        }, now: context.now ?? new Date()
      });
      const sameEvidence = Array.isArray(approved.evidenceLogIds) && approved.evidenceLogIds.length === checkpoint.evidenceLogIds.length &&
      approved.evidenceLogIds.every((id, i) => id === checkpoint.evidenceLogIds[i]);
      if (checkpoint.eligible && sameEvidence && approved.target === checkpoint.suggestedTarget && checkpoint.suggestedTarget <=(e.unit ===
      'seconds' ? work: 30)) {
        if (!approvedProgressions.some(x => x.exerciseId === e.id)) approvedProgressions.push( {
          exerciseId: e.id, target: approved.target, evidenceLogIds: [... approved.evidenceLogIds]
        });
        return approved.target;
      }
    }
    return adjusted.target;
  };
  if (recovery) {
    blocks.push( {
      id: 'recovery', he: 'תנועה קלה והתאוששות', en: 'Easy movement and recovery', phase: 'recovery', seconds: Math.min(600,
      minutes * 60 - warm - cool), cue: 'הליכה קלה בקצב שמאפשר שיחה ותנועות נוחות ללא כאב. אין צורך באימון כוח נוסף היום.',
      target: null
    });
  } else for (let r = 0;
  r < rounds;
  r++) for (const e of chosen) {
    blocks.push( {
      ... e, phase: 'work', round: r + 1, set: r + 1, seconds: work, target: adaptedTarget(e), unit: e.unit || 'reps',
      rir: '2–3', side_allocation: e.perSide ? 'total_both_sides': null
    });
    blocks.push( {
      id: e.id + '-rest', he: 'מנוחה והכנה', en: 'Rest and prepare', phase: 'rest', seconds: rest, target: null,
      cue: 'לנשום בנוחות. להאריך את המנוחה לפי הצורך; זמן האימון הוא הערכה.'
    });
  }
  blocks.push( {
    id: 'cool', he: 'סיום ונשימה', en: 'Cool down', phase: 'cool', seconds: cool, cue: 'להאט בהדרגה. לנשום ברוגע ולבדוק איך הגוף מרגיש.',
    target: null
  });
  const[titleHe, titleEn] = recovery ? ['מרווח לנשימה', 'Room to recover']: titles[p.goal][variant];
  const total_seconds = blocks.reduce((n, b) => n + b.seconds, 0);
  const comparisons = [... evidence.values()].filter(e => blocks.some(b => b.phase === 'work' && b.id === e.exerciseId));
  const reductions = comparisons.filter(e => e.causes.length);
  const newest = comparisons.slice().sort((a, b) => Date.parse(a.sourceDate) - Date.parse(b.sourceDate)).at(- 1);
  const comparableCount = comparisons.reduce((n, e) => n + e.comparableCount, 0);
  const reasonHe = approvedProgressions.length ? 'יעד חדש אושר במפורש למפגש הזה על סמך שלושה אימונים בתנאים תואמים. לא בוצעה פתיחת דרגה או סקיל.'
  : reductions.length ? (
    `יעדי הביצוע הופחתו לפי ` +
    `${comparableCount}` +
    ` סטים באותם תנאים ביומן (הרישום האחרון: ` +
    `${newest.sourceDate.slice(0, 10)}` +
    `), בעקבות מאמץ גבוה, שליטה לא בטוחה או ביצוע מתחת ליעד. אין העלאת דרגה אוטומטית.`
  ): newest ? (
    `נשמרת אותה רמה לפי ` +
    `${comparableCount}` +
    ` סטים בתנאים תואמים (הרישום האחרון: ` +
    `${newest.sourceDate.slice(0, 10)}` +
    `). אין העלאת דרגה אוטומטית.`
  ): 'טרם נמצאו סטים בתנאים תואמים. היעדים מבוססים על הפרופיל; אין העלאת דרגה אוטומטית.';
  const adaptation = {
    approvedProgressions, status: recovery ? 'recovery': approvedProgressions.length ? 'approved': reductions.length ? 'reduced': newest ?
    'repeat': 'baseline', automaticProgression: false, sourceLogId: newest?.sourceLogId || null, sourceDate: newest?.sourceDate || null,
    comparableCount, comparisons, reasonHe, reasonEn: approvedProgressions.length ? (
      'A new target was explicitly approved for this session using three matching sessions. No ' +
      'exercise or skill level was unlocked.'
    ): reductions.length ? (
      `Targets reduced using ` +
      `${comparableCount}` +
      ` comparable sets; latest log ` +
      `${newest.sourceDate.slice(0, 10)}` +
      `. Hard effort, uncertain form or below-target performance prompted the reduction. No automatic ` +
      `progression.`
    ): newest ? (
      `Same level retained using ` +
      `${comparableCount}` +
      ` comparable sets; latest log ` +
      `${newest.sourceDate.slice(0, 10)}` +
      `. No automatic progression.`
    ): 'No comparable sets yet. Profile-based targets; no automatic progression.'
  };
  const warning = !pull ? 'לא אושר ציוד משיכה מתאים. אין כאן תחליף שקול לאימון משיכה.': null;
  const skillNote = p.goal === 'skills' ? 'נבנה בסיס כללי בלבד. עמידת ידיים, מאסל־אפ ופרונט לבר אינם נפתחים אוטומטית על סמך דיווח עצמי.': null;
  return {
    rule_version: RULE_VERSION, adaptation, minutes, total_seconds, unused_seconds: minutes * 60 - total_seconds,
    blocks, missing_pull: !pull, available: chosen.every(e => available(e, p)), title: titleHe, titleHe,
    titleEn, focus: recovery ? 'recovery': p.goal, rounds, dayIndex, sessionIndex, weekIndex, recovery,
    readiness, exerciseIds: blocks.filter(b => b.phase === 'work').map(b => b.id), sets: blocks.filter(b => b.phase === 'work').length,
    warnings: [warning, skillNote].filter(Boolean), skillNote, sources: RULE_SOURCES, reason: [adaptation.reasonHe,
    recovery ? 'יום תנועה קלה בין אימוני כוח.': 'בחירה לפי היכולת המדווחת, הציוד הזמין והמטרה שלך.',
    tired ? 'היום הופחתו הדרגה והנפח.': 'לשמור כ־2–3 חזרות אפשריות במאגר ולעצור אם הטכניקה נשברת.', warning,
    skillNote, 'הספים והמינונים הם כללי מוצר מתועדים, שטרם עברו אישור מאמן אישי.'].filter(Boolean).join(' ')
  };
}
export function weekPlan(p, weekIndex = 0) {
  const days = [... new Set((p.days || []).filter(d => Number.isInteger(d) && d >= 0 && d < 7))].sort((a,
  b) => a - b);
  const strengthDays = [];
  return days.map((dayIndex, sessionIndex) => {
    const recovery = strengthDays.length >= 3 || strengthDays.some(d => Math.abs(d - dayIndex) === 1 || Math.abs(d - dayIndex) === 6);
    if (!recovery) strengthDays.push(dayIndex);
    return plan(p, p.dayMinutes?.[dayIndex] ?? p.minutes, 'normal', {
      dayIndex, sessionIndex, weekIndex, recovery
    });
  });
}
export function recommendation(log) {
  return log.pain ? 'דווח כאב: לעצור את התרגיל ולפנות לבדיקה מתאימה לפני חזרה אליו. לא תוצע העלאת עומס.': log.effort === 'hard' ?
  'האימון היה מאתגר. לחזור על אותה רמה או לבחור יום קל; לבדוק התאוששות לפני האימון הבא.': log.sets?.some(s => s.quality === 'uncertain') ?
  'לחזור על אותה וריאציה ולהתמקד בטכניקה לפני שינוי עומס.':
  'לשמור על אותה וריאציה כדי להשוות ביצועים. עלייה ברמה דורשת כמה ביצועים עקביים והערכת טכניקה.';
}
export function nextAction(logs = [], context = {
}) {
  const ordered = sortedLogs(logs).filter(l => logTime(l) <= +(context.now ?? new Date())), pain = painReview(ordered,
  context.painReviewedAt), latest = ordered.at(- 1);
  if (pain) return {
    status: 'review', message: recommendation(pain), sourceLogId: pain.id || null, sourceDate: pain.completed_at,
    automaticProgression: false
  };
  return latest ? {
    status: latest.effort === 'hard' ? 'recover': 'repeat', message: latest.pain ?
    'דיווח הכאב עבר בדיקת מוכנות מפורשת. להתחיל בזהירות ולעצור אם כאב חוזר.': recommendation(latest),
    automaticProgression: false
  }: {
    status: 'start', message: 'להתחיל בהיכרות עם התנועה. הביצוע הראשון הוא נקודת ההשוואה שלך.', automaticProgression: false
  };
}
export function remaining(timer, now = Date.now()) {
  if (!timer || !Number.isFinite(timer.left)) return 0;
  const elapsed = timer.running && Number.isFinite(timer.started) ? Math.max(0, now - timer.started) / 1000: 0;
  return Math.max(0, timer.left - elapsed);
}
/** Exact conditions are intentionally conservative. Suggest a dose, never a new skill. */
export function progressionCheckpoint(exerciseId, logs = [], {
  conditions, assessmentAt, now = new Date()
} = {
}) {
  const e = exercises.find(e => e.id === exerciseId);
  const latestSet = sortedLogs(logs).filter(l => logTime(l) <= + now).flatMap(l => l.sets || []).filter(s => s.performed_exercise_id ===
  exerciseId).at(- 1);
  conditions = conditions ?? latestSet ?? {
  };
  const unit = conditions.unit ?? e?.unit ?? 'reps', assistance = conditionText(conditions.assistance),
  addedLoad = Number(conditions.added_load || 0), setup = conditionText(conditions.setup), side = conditions.side_allocation ??(e?.perSide ?
  'total_both_sides': null);
  const base = {
    exerciseId, unit, conditions: {
      unit, assistance, added_load: addedLoad, setup, side_allocation: side
    }, status: 'building', eligible: false, automaticProgression: false, sessionCount: 0, evidenceLogIds: [],
    currentTarget: null, suggestedTarget: null, reasonHe:
    'נדרשים שלושה אימונים בימים נפרדים, באותה וריאציה ובאותם תנאים, עם ביצוע מלא ושליטה מדווחת.', reasonEn: (
      'Record three sessions on separate days with the same variation and conditions, full targets ' +
      'and reported control.'
    )
  };
  if (!e || e.advancedOnly || assistance === null || setup === null || !Number.isFinite(addedLoad)) return {
    ... base, status: 'unavailable', reasonHe: 'אין הצעת התקדמות אוטומטית לתרגיל הזה או לתנאים האלה.',
    reasonEn: 'No progression proposal is available for this exercise or these conditions.'
  };
  const assessment = dateTime(assessmentAt);
  const comparable = sortedLogs(logs).filter(l => logTime(l) <= + now).filter(l => !Number.isFinite(assessment) || dateTime(l.completed_at) >=
  assessment).map(log =>( {
    log, sets:(log.sets || []).filter(s => nativePrescription(s) && s.performed_exercise_id === exerciseId && s.unit === unit && conditionText(s.
    setup) === setup && conditionText(s.assistance) === assistance && Number(s.added_load || 0) === addedLoad &&(s.side_allocation || null) ===
    side && Number.isFinite(s.target) && s.target > 0 && Number.isFinite(s.actual) && s.actual >= 0)
  })).filter(x => x.sets.length);
  const latest = comparable.at(- 1);
  if (!latest) return base;
  const currentTarget = Math.min(... latest.sets.map(s => s.target));
  const recent = [];
  const dates = new Set();
  for (const row of comparable.slice().reverse()) {
    const prescribed =(row.log.plan?.blocks || []).filter(b => b.phase === 'work' && b.id === exerciseId);
    const allPrescribedLogged = !prescribed.length || row.sets.length >= prescribed.length;
    const good = allPrescribedLogged && row.log.pain !== true && row.log.completed === true && ['easy',
    'normal'].includes(row.log.effort) && row.sets.every(s => s.quality === 'good' && s.actual >= s.target && s.target === currentTarget);
    if (!good) break;
    const d = new Intl.DateTimeFormat('en-CA', {
      timeZone: 'Asia/Jerusalem'
    }).format(new Date(row.log.completed_at));
    if (!dates.has(d)) {
      recent.unshift(row);
      dates.add(d)
    }
    if (recent.length === 3) break;
  }
  const lastPain = sortedLogs(logs).filter(l => logTime(l) <= + now).filter(l => l.pain === true).at(- 1);
  const evidence = recent.map(x => x.log.id).filter(id => typeof id === 'string' && id);
  const fresh = + now - dateTime(latest.log.completed_at) <= 21 * 86400000;
  const eligible = recent.length === 3 && new Set(evidence).size === 3 && fresh &&(!lastPain || dateTime(lastPain.completed_at) < dateTime(recent
  [0].log.completed_at));
  const step = unit === 'seconds' ?(e.perSide ? 2: 5):(e.perSide ? 2: 1);
  return {
    ... base, currentTarget, sessionCount: recent.length, evidenceLogIds: evidence, eligible, status: eligible ? 'ready': !fresh ? 'reassess':
    'building', suggestedTarget: eligible ? currentTarget + step: null, reasonHe: eligible ? (
      'שלושה אימונים נפרדים באותם תנאים הושלמו בשליטה מדווחת. אפשר לאשר יעד מעט גבוה יותר; זו הצעה, ' +
      'לא בדיקת טכניקה.'
    ): !fresh ? 'חלפו יותר משלושה שבועות מהביצוע המקביל האחרון. לחזור להערכת היכולת לפני שינוי יעד.': base.reasonHe,
    reasonEn: eligible ? (
      'Three separate sessions under matching conditions met their targets with reported control. A ' +
      'small increase can be explicitly approved; this is not a technique assessment.'
    ): !fresh ? 'The last comparable session was over three weeks ago. Reassess before changing the target.': base.reasonEn
  };
}
