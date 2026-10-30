import {
  plan
}
from './engine.js?v=31';
import {
  exercises
}
from './data/exercises.js?v=31';
import {
  workouts
}
from './data/workouts.js?v=31';
const get = id => exercises.find(e => e.id === id);
const phase =(id, he, en, phase, seconds, cue) =>( {
  id, he, en, phase, seconds, target: null, cue
});
export function buildWorkout(templateId, profile, options = {
}) {
  const template = workouts.find(w => w.id === templateId);
  const minutes = options.minutes ?? template?.minutes ?? profile?.minutes;
  const base = plan(profile, minutes, options.readiness || 'normal', options);
  if (base.blocked) return base;
  const blocked = reason =>( {
    ... base, blocked: true, reason, errors: [reason], blocks: [], exerciseIds: [], sets: 0, total_seconds: 0
  });
  if (!template) return blocked('האימון המבוקש לא נמצא.');
  const baseWork = base.blocks.filter(b => b.phase === 'work');
  const tired = options.readiness === 'tired';
  const push = baseWork.find(b => b.group === 'push')?.id || 'knee-push';
  const pull = baseWork.find(b => b.group === 'pull')?.id;
  const core = baseWork.find(b => b.group === 'core')?.id || 'deadbug';
  if (template.requiresPull && !pull) return blocked('לאימון משיכה נדרש מוט מתח, מוט נמוך יציב או גומייה. לעדכן את הציוד או לבחור אימון אחר.');
  const resolve = id => id === 'push-choice' ? push: id === 'pull-choice' || id === 'pull-optional' ? pull: id === 'core-choice' ? core: id;
  let selected = template.moves.map(resolve).filter(Boolean).map(get);
  if (selected.some(e => !e || e.advancedOnly || !e.equipment.every(x => profile.equipment.includes(x)))) return blocked(
  'הציוד הנדרש לאימון אינו זמין בפרופיל. לבחור אימון אחר או לעדכן ציוד.');
  // Warm-up and transitions are part of the declared budget; never shorten a session by removing them.
  const warm = template.warmupSeconds, cool = template.cooldownSeconds, budget = minutes * 60;
  const blocks = [phase('warm', 'מתחילים בתנועה', 'Warm-up', 'warm', warm,
  'הליכה נינוחה במקום ותנועות כתפיים. להתחיל לאט; אין צורך להגיע לעייפות בחימום.')];
  let index = 0;
  const add =(e, seconds, rest, timed = false) => {
    if (blocks.reduce((n, b) => n + b.seconds, 0) + seconds + rest + cool > budget) return false;
    const original = baseWork.find(b => b.id === e.id);
    let target = timed ? seconds:(original?.target ??(e.unit === 'seconds' ? Math.min(seconds, 10): e.perSide ? 4: 4));
    const unit = timed ? 'seconds': e.unit || 'reps';
    // Prepared sessions obey the same exact-condition conservative rule as the adaptive plan.
    const history = options.history ?? profile.logs;
    const assessment = Date.parse(profile.assessmentAt);
    const logs =(Array.isArray(history) ? history: []).filter(l => Number.isFinite(Date.parse(l?.completed_at)) && Date.parse(l.completed_at) <=
    Date.now() &&(!Number.isFinite(assessment) || Date.parse(l.completed_at) >= assessment)).slice().sort((a,
    b) => Date.parse(a.completed_at) - Date.parse(b.completed_at));
    const comparable = logs.map(log =>( {
      log, sets:(log.sets || []).filter(s => s.performed_exercise_id === e.id &&(!s.planned_exercise_id || s.planned_exercise_id === s.
      performed_exercise_id) && s.unit === unit && !(typeof s.setup === 'string' ? s.setup: '').trim() && !(typeof s.assistance === 'string' ? s.
      assistance: '').trim() && Number(s.added_load || 0) === 0 &&(s.side_allocation || null) ===(e.perSide ? 'total_both_sides': null) && Number
      .isFinite(s.target) && s.target > 0 && Number.isFinite(s.actual) && s.actual >= 0)
    })).filter(x => x.sets.length).at(- 1);
    if (comparable &&(!original || original.unit !== unit || timed)) {
      const step = e.perSide ? 2: 1, ceiling = Math.min(target, ... comparable.sets.map(s => s.target)),
      reduce = comparable.log.effort === 'hard' || comparable.sets.some(s => s.quality === 'uncertain' || s.actual < s.target);
      target = reduce ? Math.max(step, Math.floor(ceiling * .8 / step) * step): ceiling;
    }
    if (!timed) {
      seconds =(unit === 'seconds' ? target: target * 3) +(e.perSide ? 10: 0);
      if (blocks.reduce((n, b) => n + b.seconds, 0) + seconds + rest + cool + 30 > budget) return false;
      blocks.push(phase(e.id + '-setup', 'הכנה', 'Setup', 'rest', 30, 'הכנה וחזרה קלה.'));
    }
    blocks.push( {
      ... e, phase: 'work', round: Math.floor(index / selected.length) + 1, set:++ index, seconds, target,
      unit, rir: '2–3', side_allocation: e.perSide ? 'total_both_sides': null, loggingMode: timed ? 'duration': 'target',
      cue: e.cue +(e.perSide ? ' לחלק את היעד הכולל שווה בשווה בין הצדדים.': '')
    });
    if (rest) blocks.push(phase(e.id + '-rest', 'מנוחה והכנה', 'Rest and prepare', 'rest', rest,
    'לנשום בנוחות. אפשר להאריך מנוחה או לעצור; אין צורך להשלים בכל מחיר.'));
    return true;
  };
  if (template.format === 'tabata' || template.format === 'interval') {
    for (let i = 0;
    i < template.rounds;
    i++) if (!add(selected[i % selected.length], template.work, tired ? Math.max(30, template.rest): template.rest,
    true)) break;
  } else if (template.format === 'emom') {
    for (let i = 0;
    i <(tired ? 6: template.rounds);
    i++) if (!add(selected[i % selected.length], 20, 40)) break;
  } else {
    const rounds = tired ? 1: template.rounds || 2;
    for (let r = 0;
    r < rounds;
    r++) for (const e of selected) if (!add(e, template.format === 'mobility' ? 30: 40, template.format === 'mobility' ? 20: 150,
    template.format === 'mobility')) break;
  }
  if (!index) return blocked('משך האימון קצר מדי לתחנות ולמנוחות. לבחור משך ארוך יותר.');
  if ( ['amrap', 'skill'].includes(template.format)) {
    const spare = budget - cool - blocks.reduce((n, b) => n + b.seconds, 0);
    if (spare > 0) blocks.push(phase('quality-buffer', 'מנוחה ותרגול קל', 'Rest / easy practice', 'recovery',
    spare, 'אין צורך להשלים עוד סבב; איכות קודמת לכמות.'));
  }
  blocks.push(phase('cool', 'סיום ונשימה', 'Cool down', 'cool', cool, 'להאט בהדרגה ולבדוק איך הגוף מרגיש. כאב הוא סיבה לעצור ולבדוק.'));
  const total_seconds = blocks.reduce((n, b) => n + b.seconds, 0);
  return {
    ... base, templateId: template.id, format: template.format, qualityCeiling: template.format === 'amrap',
    easyPractice: template.format === 'skill', blocks, total_seconds, unused_seconds: budget - total_seconds,
    minutes, title: template.he, titleHe: template.he, titleEn: template.en, sets: index, rounds: Math.ceil(index / selected.length),
    exerciseIds: blocks.filter(b => b.phase === 'work').map(b => b.id), missing_pull: template.moves.includes('pull-optional') && !pull,
    available: true, warnings: [... base.warnings, ...(template.note ? [template.note]: [])], reason: template.description + ' ' +(template.note
    || '') + ' היעדים הם כללי מוצר ואינם התאמה מקצועית אישית.'
  };
}
