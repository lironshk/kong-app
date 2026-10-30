// Editorial defaults pending qualified review. Intake doses stay provisional; the squat family has one explicit conservative step.
import {
  exercises
}
from './data/exercises.js?v=31';
const byId = id => exercises.find(e => e.id === id);
export const equipmentSchema = ['wall', 'band', 'lowbar', 'bar', 'parallettes', 'rings', 'parallel',
'box', 'anchor', 'pole', 'bench'];
export const hasEquipment =(e, equipment = []) => !!e &&(e.equipmentRequirements || [e.equipment]).some(option => option.every(x => equipment.
includes(x)));
export const conditionsKnown = s => typeof s.setup === 'string' && !!s.setup.trim() && typeof s.assistance === 'string' && !!s.assistance.trim()
&& !!s.range_of_motion && !!s.execution_standard && s.tempo && ['eccentric', 'concentric', 'pause'].every(k => Number.isFinite(s.tempo[k]) && s.
tempo[k] >= 0 && s.tempo[k] <= 30);
export const evidenceKey = s => JSON.stringify( [s.performed_exercise_id, s.unit, s.setup, s.assistance,
s.range_of_motion, s.execution_standard, s.tempo, s.added_load || 0, s.side_allocation || null]);
export function loadingExposure(e, s = {
}, log = {
}) {
  if (!e || !(s.actual > 0)) return {
    loaded: false, hours: 0, keys: []
  };
  const demanding = log.effort === 'hard' || s.effort === 'hard' || log.unfamiliarEccentric || s.novel_eccentric || e.novelEccentric || e.
  demandingStraightArm || log.lingeringFatigue;
  const reserve =(s.unit || e.unit) === 'seconds' ? s.technical_reserve_seconds: s.rir;
  const easy = !demanding && Number.isFinite(reserve) && reserve > 3 &&(s.quality === 'good') &&(log.effort === 'easy' || s.effort === 'easy' ||
  log.plan?.easyPractice === true);
  return {
    loaded: !easy, unknown: !Number.isFinite(reserve), hours: demanding ? 72: 48, keys: [...(e.movementPattern === 'scapular_control' ? []: [e.
    movementPattern]), e.movementSubtype, ...(e.loadingTags || [])]
  };
}
export function recoveryState(logs = [], now = new Date()) {
  const blocked = new Set(), last = {
  };
  for (const log of logs) {
    const elapsed = + now - Date.parse(log.completed_at);
    if (!Number.isFinite(elapsed) || elapsed < 0) continue;
    for (const s of log.sets || []) {
      const x = loadingExposure(byId(s.performed_exercise_id), s, log);
      if (!x.loaded) continue;
      for (const key of x.keys) {
        if (!last[key] || Date.parse(last[key]) < Date.parse(log.completed_at)) last[key] = log.completed_at;
        if (elapsed < x.hours * 36e5) blocked.add(key);
      }
    }
  }
  return {
    blocked, last
  };
}
export const isBlocked =(e, state) => [...(e.movementPattern === 'scapular_control' ? []: [e.movementPattern]),
e.movementSubtype, ... e.loadingTags].some(k => state.blocked.has(k));
export function reviewedClearance(profile, e, now = new Date()) {
  if (!e) return false;
  const c = profile.exerciseClearances?.[e.id];
  return !!(c?.reviewer?.trim() && c.qualification?.trim() && Number.isFinite(Date.parse(c.reviewedAt)) && Date.parse(c.reviewedAt) <= + now &&
  conditionsKnown(c) && Number.isFinite(c.target) && c.target > 0 && Number.isInteger(c.sets) && c.sets > 0 && c.sets <= 5 && Number.isFinite(c.
  restSeconds) && c.restSeconds >= 180 && c.restSeconds <= 300 &&(!c.expiresAt || Date.parse(c.expiresAt) > + now));
}
// Accessory bands apply at intake and calibration; evidence below a floor is never raised.
export function prescriptionBand(e, goal = 'strength') {
  if (e.unit === 'seconds') return[20, 30];
  if (e.movementPattern === 'calf') return[12, 20];
  if ( ['hinge', 'hip_extension', 'hip_external_rotation', 'hip_abduction', 'scapular_control', 'mobility',
  'locomotion'].includes(e.movementPattern)) return[10, 15];
  if (e.group === 'core') return[8, 12];
  return goal === 'endurance' ? [12, 20]: ['hypertrophy', 'skills'].includes(goal) ? [6, 12]: [3, 6];
}
// A single conservative family step, explicitly allowed for a far-above-band squat report.
// Halve the 60% estimate again, then split it across legs. No advanced clearance transfers.
export function squatReportStep(profile) {
  return Number(profile.legs) * .6 > prescriptionBand(byId('squat'), profile.goal)[1] * 2;
}
// Goal bands cap a conservative exact-variation result; a low result never gets raised.
export function calibratedTarget(e, actual, reserve, goal = 'strength') {
  const step = e.perSide ? 2: 1, bands = prescriptionBand(e, goal);
  const upper = bands[1] *(e.perSide ? 2: 1);
  // Preserve at least four reps/seconds of reserve, and retain the 25% repeat-set discount.
  return Math.floor(Math.min(actual * .85,(actual + reserve - 4) * .75, upper) / step) * step;
}
export function variationEvidence(profile, e, logs = profile.logs || []) {
  const records = [];
  for (const r of profile.capabilityCheck?.results || []) {
    if (r.id !== e.id || !(r.target > 0) || !conditionsKnown(r)) continue;
    records.push( {
      ... r, performed_exercise_id: e.id, unit: e.unit, actual: r.target, left_actual: e.perSide ? r.target / 2: undefined,
      right_actual: e.perSide ? r.target / 2: undefined, date: r.assessedAt, logId: 'capability'
    });
  }
  for (const l of logs) for (const s of l.sets || []) {
    if (l.plan?.capability) continue;
    if (s.performed_exercise_id !== e.id || s.unit !== e.unit || s.actual <= 0 || l.pain || s.pain || s.quality !== 'good' || !conditionsKnown(s)
    ) continue;
    const reserve = e.unit === 'seconds' ? s.technical_reserve_seconds: s.rir;
    if (!Number.isFinite(reserve) || reserve < 2 || e.perSide &&(!Number.isFinite(s.left_actual) || !Number.isFinite(s.right_actual) || Math.min(
    s.left_actual, s.right_actual) <= 0)) continue;
    if (s.provisional && !s.calibration) continue;
    const actual = s.calibration ? calibratedTarget(e, e.perSide ? 2 * Math.min(s.left_actual, s.right_actual): s.actual,
    reserve, profile.goal): s.actual;
    if (actual <= 0) continue;
    records.push( {
      ... s, actual, left_actual: e.perSide && s.calibration ? actual / 2: s.left_actual, right_actual: e.perSide && s.calibration ? actual / 2:
      s.right_actual, source: 'evidence', date: l.completed_at, logId: l.id
    });
  }
  records.sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
  const last = records.at(- 1);
  if (!last) return null;
  const matching = records.filter(s => evidenceKey(s) === evidenceKey(last));
  return {
    last, matching, sessions: new Set(matching.map(s => s.date.slice(0, 10))).size
  };
}
export function familyStatus(profile, e, logs) {
  const evidence = variationEvidence(profile, e, logs), experience = profile.movementExperience?.[e.movementSubtype] || 'unknown';
  return {
    experience, familiarized: !!evidence, performance: evidence?.last.actual ?? null, status: evidence && experience === 'experienced' &&
    evidence.sessions >= 3 ? 'established': 'introductory'
  };
}
export const workSeconds =(e, target) =>(e.perSide && e.unit === 'seconds' ? 2: 1) * e.entryExitSeconds +(e.perSide ? e.sideSwitchSeconds: 0) +(e
.unit === 'seconds' ? target: target *(e.tempo.eccentric + e.tempo.concentric + e.tempo.pause));
// Intake doses are provisional. Only split squat has an explicit conservative family estimate.
export function provisionalPrescription(profile, e) {
  if (e.advancedOnly || e.novelEccentric) return null;
  if (e.level > 2 && e.id !== 'pike-push' && ! ['push', 'pull', 'squat', 'plank'].includes(e.id)) return null;
  const reports = {
    push: profile.push, pull: profile.pull, squat: profile.legs, plank: profile.core
  };
  const derived = e.id === 'split' && squatReportStep(profile), reported = Number(derived ? profile.legs: reports[e.id]),
  step = e.perSide ? 2: 1;
  const[floor, upper] = prescriptionBand(e, profile.goal);
  const target = reported > 0 ? Math.floor(Math.min(reported * .6 *(derived ? 0.5: 1) / step, upper)) * step: floor * step;
  if (target < step) return null;
  return {
    source: reported > 0 ? 'self-report': 'conservative-default', provisional: true, ...(derived ? {
      reportExerciseId: 'squat', familyEstimate: true
    }: {
    }), target, added_load: 0, setup: e.id === 'pike-push' ? 'רגליים נושאות משקל, טווח קטן ונוח': 'מתקן יציב ומנח נוח לפי ההוראות',
    assistance: e.id === 'pike-push' ? 'תמיכת רגליים מלאה': ['push', 'pull', 'squat', 'plank'].includes(e.id) ? 'ללא סיוע':
    'סיוע או שיפוע קל לפי הצורך', range_of_motion: 'טווח נוח ונשלט', execution_standard: 'ביצוע נקי ללא כאב',
    tempo: e.tempo, seconds: workSeconds(e, target), rir: e.unit === 'reps' ? '3–4': null, technicalReserve: e.unit === 'seconds' ?
    'לפחות 3 שניות של שליטה': null, cue: (
      'יעד זמני שמרני. לעצור בכאב או בירידת שליטה ולהשאיר עתודה; לתעד את התנאים בפועל. הסט האחרון ' +
      'מכייל את האימון הבא.'
    )
  };
}
export function variationPrescription(profile, e, logs, {
  easy = false, now = new Date()
} = {
}) {
  const state = familyStatus(profile, e, logs), evidence = variationEvidence(profile, e, logs);
  const base = {
    ... e, phase: 'work', section: 'strength', trainingStatus: state.status, side_allocation: e.perSide ? 'total_both_sides': null
  };
  if ((e.advancedOnly || e.novelEccentric) && reviewedClearance(profile, e, now)) {
    const c = profile.exerciseClearances[e.id], last = evidence?.last;
    const target = last && evidenceKey( {
      ... last, performed_exercise_id: e.id
    }) === evidenceKey( {
      ... c, performed_exercise_id: e.id, unit: e.unit, side_allocation: e.perSide ? 'total_both_sides': null
    }) ? Math.min(c.target, last.actual): c.target;
    return {
      ... base, target, added_load: c.added_load ?? 0, setup: c.setup, assistance: c.assistance, range_of_motion: c.range_of_motion,
      execution_standard: c.execution_standard, tempo: c.tempo, restSeconds: c.restSeconds, reviewer: c.reviewer,
      qualification: c.qualification, reviewedAt: c.reviewedAt, reviewedExecution: true, seconds: workSeconds( {
        ... e, tempo: c.tempo
      }, target), rir: e.unit === 'reps' ?(easy ? '4–5': '2–3'): null, technicalReserve: e.unit === 'seconds' ? '3–5 שניות ושליטה ביציאה': null
    };
  }
  // A failed or very low calibration cannot fall back to a stronger intake report.
  const calibration = logs.flatMap(l =>(l.sets || []).map(s =>( {
    s, l
  }))).filter(( {
    s
  }) => s.calibration && s.performed_exercise_id === e.id && s.unit === e.unit && conditionsKnown(s)).at(- 1);
  if (!evidence && calibration) {
    const {
      s
    } = calibration, reserve = e.unit === 'seconds' ? s.technical_reserve_seconds: s.rir;
    if (s.quality !== 'good' || !Number.isFinite(reserve) || reserve < 2 || calibratedTarget(e, e.perSide ? 2 * Math.min(s.left_actual || 0,
    s.right_actual || 0): s.actual, reserve, profile.goal) <(e.perSide ? 2: 1)) return {
      ... base, assessment: true, target: null, seconds: 60, cue:
      'תוצאת הכיול מחייבת הכנה קלה או בדיקת וריאציה קלה יותר. אין לחזור ליעד הפתיחה; לעצור בכאב או בירידת שליטה.'
    };
  }
  if (!evidence && provisionalPrescription(profile, e)) {
    const dose = provisionalPrescription(profile, e);
    if (easy) {
      dose.target = Math.max(dose.source === 'conservative-default' ? prescriptionBand(e, profile.goal)[0] *(e.perSide ? 2: 1):(e.perSide ? 2: 1)
      , dose.target -(e.perSide ? 2: 1));
      dose.seconds = workSeconds(e, dose.target);
      dose.rir = '4–5';
    }
    return {
      ... base, ... dose
    };
  }
  if (!evidence) return {
    ... base, assessment: true, target: null, seconds: 60, rir: null, cue:(e.movementSubtype === 'overhead_press' ?
    'ללא ניסיון דחיקה לא נתמך: הכנה עם רגליים נושאות משקל וטווח קטן בלבד; אם אין מנח נוח, בדיקה בהדרכה. ': '') + (
      'היכרות קלה בלבד: לבחור סיוע/שיפוע וטווח נוחים. אין יעד חזרות. לעצור הרבה לפני קושי; לתעד מתקן, ' +
      'סיוע, קצב, טווח, ביצוע ועתודה. אם אין ביצוע נוח, עוברים להכנה בהדרכה.'
    )
  };
  const last = evidence.last;
  let target = e.perSide ? 2 * Math.min(last.left_actual, last.right_actual): last.actual;
  const later = logs.flatMap(l =>(l.sets || []).map(s =>( {
    s, l
  }))).filter(( {
    s, l
  }) => !l.pain && !s.pain && !s.calibration && Date.parse(l.completed_at) >= Date.parse(last.date) && s.performed_exercise_id === e.id &&
  conditionsKnown(s) && evidenceKey(s) === evidenceKey(last)).at(- 1);
  const reduced = !!later &&(later.s.quality !== 'good' || later.l.effort === 'hard' || later.s.actual < later.s.target);
  if (reduced) target = Math.max(0, Math.min(target -(e.perSide ? 2: 1), later.s.actual));
  const proposedTarget = target +(e.perSide ? 2: 1);
  const recent = evidence.matching.slice(- 3), proposal = !reduced && evidence.sessions >= 3 && recent.length === 3 && recent.every(s => s.actual
  >= target &&(e.unit === 'seconds' ? s.technical_reserve_seconds: s.rir) >= 3);
  const approved = profile.variationApprovals?.[e.id];
  if (!easy && proposal && approved?.key === evidenceKey(last) && approved.target === proposedTarget) target = approved.target;
  if (easy) target = Math.max(0, target -(e.perSide ? 2: 1));
  if (!target) return {
    ... base, assessment: true, target: null, seconds: 60, cue: 'הכנה קלה והערכה חוזרת ללא יעד ביצוע.'
  };
  return {
    ... base, target, added_load: last.added_load ?? 0, setup: last.setup, assistance: last.assistance,
    range_of_motion: last.range_of_motion, execution_standard: last.execution_standard, tempo: last.tempo,
    seconds: workSeconds( {
      ... e, tempo: last.tempo
    }, target), rir: e.unit === 'reps' ?(easy ? '4–5': '3–4'): null, technicalReserve: e.unit === 'seconds' ? '3–5 שניות ושליטה ביציאה': null,
    progressionProposal: proposal ? {
      key: evidenceKey(last), target: proposedTarget
    }: null
  };
}
// The same predicate governs queue advancement, reconciliation and persisted unresolved work.
export function doseComplete(b, s) {
  if (!s || s.performed_exercise_id !== b.id || s.unit !== b.unit || s.round !== b.round || s.quality !== 'good' || s.pain || !(s.actual > 0) ||
  !conditionsKnown(s)) return false;
  if (s.phase && s.phase !== b.phase) return false;
  if (b.assessment) {
    if (s.target !== null ||(b.unit === 'seconds' ? s.technical_reserve_seconds: s.rir) < 3 || !Number.isFinite(b.unit === 'seconds' ? s.
    technical_reserve_seconds: s.rir)) return false;
  } else if (s.target !== b.target || s.actual < b.target || evidenceKey( {
    ... s, performed_exercise_id: b.id
  }) !== evidenceKey( {
    ... b, performed_exercise_id: b.id
  })) return false;
  if (b.perSide &&(!Number.isFinite(s.left_actual) || !Number.isFinite(s.right_actual) || Math.min(s.left_actual,
  s.right_actual) <= 0 || s.left_actual + s.right_actual !== s.actual ||(!b.assessment && Math.min(s.left_actual,
  s.right_actual) < b.target / 2))) return false;
  return true;
}
export function unresolvedDoses(plan, sets = []) {
  const available = sets.slice();
  return[...(plan.blocks || []).filter(b => ['work', 'skill'].includes(b.phase)), ...(plan.unpackedDoses || [])].filter(b => {
    const i = available.findIndex(s => doseComplete(b, s));
    if (i < 0) return true;
    available.splice(i, 1);
    return false;
  });
}
export const lighterActive =(profile, now = new Date()) => {
  const l = profile.lighterPeriod;
  return !!(l?.reviewer && l.reviewedAt && Date.parse(l.start) <= + now && Date.parse(l.end) >= + now);
};
export function doseAuthorized(profile, b, now = new Date()) {
  const e = byId(b.id);
  if (!e) return false;
  if (lighterActive(profile, now) &&(e.advancedOnly || e.novelEccentric || e.demandingStraightArm || !b.assessment && b.rir !== '4–5')) return false
  ;
  if (e.advancedOnly || e.novelEccentric) {
    if (!reviewedClearance(profile, e, now)) return false;
    const c = profile.exerciseClearances[e.id];
    if (b.target > c.target || !(b.restSeconds >= c.restSeconds) || evidenceKey( {
      ... b, performed_exercise_id: e.id
    }) !== evidenceKey( {
      ... c, performed_exercise_id: e.id, unit: e.unit, side_allocation: e.perSide ? 'total_both_sides': null
    })) return false;
  }
  return true;
}
