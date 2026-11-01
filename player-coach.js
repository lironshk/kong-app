import {exercises} from './data/exercises.js?v=31';
import {familyOf} from './data/exercise-families.js?v=31';
import {recommendTier, variationReady} from './variation-choice.js?v=31';
import {conditionsKnown, evidenceKey} from './training-evidence.js?v=31';
import {escapeHTML as esc} from './ui.js?v=31';

const tiers = ['easy', 'regular', 'hard'];
const byId = id => exercises.find(e => e.id === id);
const working = b => ['work', 'skill'].includes(b.phase);

// These are reported estimates, never technique confirmation or transferred capacity.
export function prescribedReserve(block = {}) {
  const text = String(block.unit === 'seconds' ? block.technicalReserve || '' : block.rir || '');
  const match = text.match(/\d+/);
  return match ? Number(match[0]) : /שלוש/.test(text) ? 3 : /חמש/.test(text) ? 5 : null;
}
export function effortRating(rating, unit, block) {
  if (!['easy', 'normal', 'hard'].includes(rating)) return {};
  const anchor = prescribedReserve(block || {unit, rir:'2', technicalReserve:'3'});
  const reserve = anchor === null ? null : rating === 'easy' ? anchor + 2 : rating === 'hard' ? Math.max(0, anchor - 2) : anchor;
  return {effort:rating, reserve_estimate_source:'rating-relative-to-prescription', prescribed_reserve:anchor,
    ...(unit === 'seconds' ? {technical_reserve_seconds:reserve} : {rir:reserve})};
}
export function effortChoicesHTML(block, draft = {}) {
  const choices = [['easy','קל מהיעד','נשארה יותר עתודה'],['normal','כמו היעד','העתודה שהתבקשה'],['hard','קשה מהיעד','נשארה פחות עתודה']];
  return '<div class="effort-choices" role="group" aria-label="המאמץ ביחס לעתודה שהתבקשה">' + choices.map(([value,label,hint]) =>
    `<button class="secondary" data-set-effort="${value}" aria-pressed="${draft.effort === value}">` +
    `${label}<small>${hint}</small></button>`).join('') + '</div>';
}

export function difficultyOption(profile, block, difficulty, options = {}) {
  const found = familyOf(block.id);
  if (!found) return null;
  const decision = recommendTier(profile, found.family, {...options, sourceExerciseId: block.id});
  const index = tiers.indexOf(found.tier), direction = difficulty === 'hard' ? -1 : 1;
  const candidates = decision.options.filter(o => o.available && (tiers.indexOf(o.tier) - index) * direction > 0);
  if (direction > 0 && !variationReady(byId(block.id), profile.logs || [], profile, new Date(options.now ?? Date.now()))) return null;
  // Return, first-set regression and recovery decisions take precedence over an easier-effort report.
  if (direction > 0 && tiers.indexOf(decision.tier) <= index) return null;
  return direction < 0 ? candidates.at(-1) : candidates[0];
}

export function previousPerformance(profile, block, now = new Date()) {
  const family = familyOf(block.id)?.family.id;
  const logs = (profile.logs || []).filter(l => Date.parse(l.completed_at) <= +now)
    .slice().sort((a, b) => Date.parse(b.completed_at) - Date.parse(a.completed_at));
  for (const log of logs) {
    const sets = (log.sets || []).filter(s => s.actual > 0 && (s.performed_exercise_id === block.id ||
      family && familyOf(s.performed_exercise_id)?.family.id === family));
    if (!sets.length) continue;
    const exact = sets.filter(s => s.performed_exercise_id === block.id), selected = exact.length ? exact : sets;
    const id = selected[0].performed_exercise_id, rows = selected.filter(s => s.performed_exercise_id === id);
    return {id, rows, comparable: rows.every(s => conditionsKnown(s) && conditionsKnown(block) &&
      evidenceKey(s) === evidenceKey({...block, performed_exercise_id: block.id}))};
  }
  return null;
}
export function previousPerformanceHTML(profile, block) {
  const last = previousPerformance(profile, block);
  if (!last) return '<p class="last-performance">פעם ראשונה כאן; נתחיל לפי היעד.</p>';
  const unit = last.rows[0].unit === 'seconds' ? 'שניות' : 'חזרות';
  const sides = byId(last.id)?.perSide || last.rows[0].side_allocation === 'total_both_sides' ? ' בסך שני הצדדים' : '';
  return `<p class="last-performance">בפעם הקודמת: ${esc(byId(last.id)?.he || last.id)} · ` +
    `${last.rows.map(s => s.actual).join(' / ')} ${unit}${sides}` +
    `${last.comparable ? '' : ' · בתנאים אחרים או לא מתועדים'}</p>`;
}

export function sessionDebrief(profile, session) {
  const sets = session.sets.filter(s => s.actual > 0), planned = session.plan.blocks.filter(working).length;
  const controlled = sets.filter(s => s.quality === 'good' && !s.pain).length;
  const progress = sets.find(s => {
    const last = previousPerformance(profile, {...s, id: s.performed_exercise_id});
    return last?.comparable && !s.pain && s.quality === 'good' && s.actual > Math.max(...last.rows.map(r => r.actual));
  });
  const fact = progress ? `${byId(progress.performed_exercise_id)?.he}: ${progress.actual} ${progress.unit === 'seconds' ? 'שניות' : 'חזרות'}` +
    ' — יותר מהפעם הקודמת באותם תנאים.' : `${controlled} סטים תועדו בשליטה; זה הבסיס להתקדמות.`;
  const feedback = Object.values(session.variationFeedback || {}).sort((a, b) => Date.parse(a.at) - Date.parse(b.at)).at(-1);
  const next = session.painReported || sets.some(s => s.pain) ? 'בפעם הבאה נבדוק מוכנות לפני שחוזרים לעומס.' :
    feedback?.changed ? `בפעם הבאה נתחיל מ${byId(feedback.selectedId)?.he}; נבדוק שוב את המוכנות.` :
    sets.some(s => s.effort === 'hard') ? 'בפעם הבאה נבדוק גרסה קלה יותר לפי הביצוע ששמרת.' :
    'בפעם הבאה נבדוק את הביצוע ששמרת לפני שינוי היעד.';
  const skipped = session.extrasSkipped?.warmup || session.plan.extrasSkipped?.warmup;
  return [`תיעדת ${sets.length} מתוך ${planned} סטים${skipped ? ' · החימום דולג, הבחירה נשמרה' : ''}.`, fact, next];
}

export function adjustRest(timer, seconds, now = Date.now()) {
  const elapsed = timer.running ? Math.max(0, (now - timer.started) / 1000) : 0;
  return {left: Math.min(7200, Math.max(0, timer.left - elapsed + seconds)), running: timer.running, started: now};
}
