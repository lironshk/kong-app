import {mainSeconds} from './session-extras.js?v=32';
import {finishExecution} from './session-execution.js?v=32';
import { volumeBudget } from './training-volume.js?v=32';
import { chooseVariation, variationBlock } from './variation-choice.js?v=32';
import { exercises } from './data/exercises.js?v=32';
import { workSeconds, emomPrescription } from './training-evidence.js?v=32';
import { buildCoachSections } from './coach-workout-builder.js?v=32';
import {
  plan, adaptTarget
}
from './engine.js?v=32';
import {
  workouts
}
from './data/workouts.js?v=32';
const phase =(id, he, en, phase, seconds, cue) =>( {
  id, he, en, phase, seconds, target: null, cue
});
export function buildWorkout(templateId, profile, options = {
}) {
  const template = workouts.find(w => w.id === templateId);
  const minutes = options.minutes ?? template?.minutes ?? profile?.minutes;
  const base = plan(profile, minutes, options.readiness || 'normal', options);
  if (base.blocked || base.recovery) return base;
  const blocked = reason =>( {
    ... base, blocked: true, reason, errors: [reason], blocks: [], exerciseIds: [], sets: 0, total_seconds: 0
  });
  if (!template) return blocked('האימון המבוקש לא נמצא.');
  if (template.sections) return buildCoachSections(template, profile, options, base);
  const baseWork = base.blocks.filter(b => b.phase === 'work');
  const tired = options.readiness === 'tired' || base.sessionVolumeReduction || base.returnAfterBreak;
  const sourceFor = group => {const b = baseWork.find(b => b.group === group); return b?.sourceExerciseId || b?.id;};
  const push = sourceFor('push') || 'knee-push';
  const pull = sourceFor('pull');
  const core = sourceFor('core') || 'deadbug';
  if (template.requiresPull && !pull) return blocked('לאימון משיכה נדרש מוט מתח, מוט נמוך יציב או גומייה. לעדכן את הציוד או לבחור אימון אחר.');
  const resolve = id => id === 'push-choice' ? push: id === 'pull-choice' || id === 'pull-optional' ? pull: id === 'core-choice' ? core: id;
  const now = new Date(options.now ?? Date.now());
  const logs = (options.history ?? profile.logs ?? []).filter(l => Date.parse(l.completed_at) <= +now)
    .sort((a, b) => Date.parse(a.completed_at) - Date.parse(b.completed_at));
  const variationOptions = {logs, now};
  const assessmentAt = Date.parse(profile.assessmentAt);
  const comparisonLogs = logs.filter(l => !Number.isFinite(assessmentAt) || Date.parse(l.completed_at) >= assessmentAt);
  const selected = template.moves.map(resolve).filter(Boolean).map(id => chooseVariation(profile, id, variationOptions));
  if (selected.some(e => !e)) return blocked('אין וריאציה זמינה לכל מקטע באימון; לבדוק ציוד, התאוששות ואישורים.');
  // The requested budget covers main work and its rests; warm-up and cool-down are extras.
  const warm = template.warmupSeconds, cool = template.cooldownSeconds, budget = minutes * 60;
  const blocks = [phase('warm', 'מתחילים בתנועה', 'Warm-up', 'warm', warm,
  'הליכה נינוחה במקום ותנועות כתפיים. להתחיל לאט; אין צורך להגיע לעייפות בחימום.')];
  let index = 0;
  const timed = ['tabata', 'interval', 'emom', 'mobility'].includes(template.format);
  const emom = template.format === 'emom', volume = volumeBudget(profile, logs, now);
  const add =(e, rest, round = Math.floor(index / selected.length) + 1) => {
    if (!volume.room(e)) return false;
    const setupSeconds = !timed ? 30 : 0;
    const windowSeconds = template.format === 'mobility' ? 30 : template.work || 20;
    const timingWindow = timed && !emom ? {seconds: windowSeconds, target: windowSeconds, restSeconds: rest, setupSeconds} : undefined;
    let dose = variationBlock(profile, {...e, phase: 'work', round,
      set: index + 1, timingWindow}, {...variationOptions, easy: tired});
    if (!dose) return false;
    if ((!timed || emom) && dose.target != null) {
      dose.target = adaptTarget(e, dose.target, comparisonLogs, {retainEarned: false}).target;
      dose.seconds = workSeconds(dose, dose.target);
    }
    if (emom) {
      dose = emomPrescription(dose);
      if (!dose) return false;
      rest = dose.restSeconds;
    }
    if (!timed) rest = Math.max(rest, dose.restSeconds);
    const seconds = dose.seconds;
    const used = blocks.filter(b => b.phase === 'work' && b.id === e.id).length;
    if (!timed && (dose.source === 'conservative-default' || profile.experience === 'new') && used >= 2) return false;
    if (dose.reviewedExecution && used >= profile.exerciseClearances[e.id].sets || !timed && dose.assessment && used >= 1) return false;
    if (mainSeconds(blocks) + seconds + rest + setupSeconds > budget) return false;
    if (setupSeconds) blocks.push(phase(e.id + '-setup', 'הכנה', 'Setup', 'rest', setupSeconds, 'הכנה וחזרה קלה.'));
    blocks.push({...dose, loggingMode: timed && !emom ? 'duration' : 'target'});
    index++;
    volume.count(e);
    if (rest) blocks.push(phase(e.id + '-rest', 'מנוחה והכנה', 'Rest and prepare', 'rest', rest,
      'לנשום בנוחות. אפשר להאריך מנוחה או לעצור; אין צורך להשלים בכל מחיר.'));
    return true;
  };
  if (template.format === 'tabata' || template.format === 'interval') {
    for (let i = 0;
    i < template.rounds;
    i++) if (!add(selected[i % selected.length], tired ? Math.max(30, template.rest): template.rest)) break;
  } else if (template.format === 'emom') {
    blocks.push(phase('emom-setup', 'הכנת התחנות', 'Station setup', 'rest', 30,
      'להכין את התחנות מראש. בכל דקה יעד קטן בשליטה; לנוח ביתרת הדקה. אם צריך יותר זמן, לעצור ולהאריך מנוחה.'));
    for (let i = 0;
    i <(tired ? 6: template.rounds);
    i++) if (!add(selected[i % selected.length], 40)) break;
  } else {
    const rounds = tired ? 1: template.rounds || 2;
    for (let r = 0;
    r < rounds;
    r++) for (const e of selected) add(e, template.format === 'mobility' ? 20: 150, r + 1);
  }
  if (!index) return blocked('משך האימון קצר מדי לתחנות ולמנוחות. לבחור משך ארוך יותר.');
  if ( ['amrap', 'skill'].includes(template.format)) {
    const spare = budget - mainSeconds(blocks);
    if (spare > 0) blocks.push(phase('quality-buffer', 'מנוחה ותרגול קל', 'Rest / easy practice', 'recovery',
    spare, 'אין צורך להשלים עוד סבב; איכות קודמת לכמות.'));
  }
  blocks.push(phase('cool', 'סיום ונשימה', 'Cool down', 'cool', cool, 'להאט בהדרגה ולבדוק איך הגוף מרגיש. כאב הוא סיבה לעצור ולבדוק.'));
  const total_seconds = blocks.reduce((n, b) => n + b.seconds, 0);
  return finishExecution({
    ... base, volume: {range: volume.range, previous: volume.previous, planned: volume.planned},
    templateId: template.id, format: template.format, qualityCeiling: template.format === 'amrap',
    easyPractice: template.format === 'skill', blocks, total_seconds, unused_seconds: budget - total_seconds,
    minutes, requested_minutes: minutes, sourceStructure: template.sessionStructure,
    title: template.he, titleHe: template.he, titleEn: template.en, sets: index, rounds: Math.ceil(index / selected.length),
    exerciseIds: blocks.filter(b => b.phase === 'work').map(b => b.id), missing_pull: template.moves.includes('pull-optional') && !pull,
    available: true, warnings: [... base.warnings, ...(template.note ? [template.note]: [])], reason: template.description + ' ' +(template.note
    || '') + ' חלונות הזמן נשמרים באימוני זמן; מינון הסטים מחושב לפי הווריאציה שנבחרה; היעדים הם כללי מוצר ואינם התאמה מקצועית אישית.'
  }, {profile, logs, now, structure: options.structure});
}
