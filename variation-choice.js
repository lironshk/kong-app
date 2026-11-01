import {executionBlock} from './session-execution.js?v=32';
import { exercises } from './data/exercises.js?v=32';
import { exerciseFamilies, familyOf } from './data/exercise-families.js?v=32';
import { adaptTarget } from './engine.js?v=32';
import { unresolvedPain, returnDecision } from './training-safety.js?v=32';
import {
  hasEquipment, reviewedClearance, recoveryState, isBlocked, lighterActive,
  variationEvidence, variationPrescription, prescriptionBand, conditionsKnown, evidenceKey, emomPrescription
} from './training-evidence.js?v=32';
import { escapeHTML as esc } from './ui.js?v=32';
const tiers = ['easy', 'regular', 'hard'];
const labels = {easy: 'קלה', regular: 'רגילה', hard: 'קשה'};
const byId = id => exercises.find(e => e.id === id);
const clearanceReason = 'נדרש אישור פרטני בתוקף לתרגילים המתקדמים באימון.';
const datedLogs = (logs, now) => logs.filter(l => Date.parse(l.completed_at) <= +now).slice()
  .sort((a, b) => Date.parse(a.completed_at) - Date.parse(b.completed_at));
function currentEvidence(profile, logs, now) {
  const assessment = Date.parse(profile.assessmentAt);
  const sinceAssessment = date => !Number.isFinite(assessment) || Date.parse(date) >= assessment;
  return {
    logs: datedLogs(logs, now).filter(l => sinceAssessment(l.completed_at)),
    profile: {...profile, capabilityCheck: {...profile.capabilityCheck,
      results: (profile.capabilityCheck?.results || []).filter(r =>
        Date.parse(r.assessedAt) <= +now && sinceAssessment(r.assessedAt))}}
  };
}

// Variation readiness is deliberately independent of the small dose-increase checkpoint.
export function variationReady(e, logs, profile, now) {
  if (!e) return false;
  if (returnDecision(profile, logs, now).returnAfterBreak) return false;
  const rows = logs.map(log => ({log, sets: (log.sets || []).filter(s => s.performed_exercise_id === e.id)}))
    .filter(row => row.sets.length).slice(-3);
  if (rows.length !== 3 || new Set(rows.map(r => r.log.completed_at.slice(0, 10))).size !== 3) return false;
  const reference = rows.at(-1).sets[0], top = prescriptionBand(e, profile.goal)[1] * (e.perSide ? 2 : 1);
  const key = evidenceKey(reference);
  return rows.every(({log, sets}) => {
    const planned = (log.plan?.blocks || []).filter(b => ['work', 'skill'].includes(b.phase) && b.id === e.id);
    if (!log.completed || log.pain || !['normal', 'easy'].includes(log.effort) || !planned.length || sets.length !== planned.length) return false;
    const remaining = sets.slice();
    return planned.every(b => {
      const i = remaining.findIndex(s => (!s.planned_exercise_id || s.planned_exercise_id === e.id) &&
        (s.phase || 'work') === b.phase && s.target === b.target && (b.round == null || b.round === s.round) &&
        conditionsKnown(b) && evidenceKey({...b, performed_exercise_id: e.id}) === evidenceKey(s));
      if (i < 0) return false;
      const s = remaining.splice(i, 1)[0], reserve = e.unit === 'seconds' ? s.technical_reserve_seconds : s.rir;
      return conditionsKnown(s) && evidenceKey(s) === key && !s.pain && s.effort !== 'hard' && s.quality === 'good' &&
        !s.provisional && !s.calibration && s.target >= top && s.actual >= s.target && Number.isFinite(reserve) &&
        reserve >= (e.unit === 'seconds' ? 3 : 2) &&
        (!e.perSide || s.left_actual >= top / 2 && s.right_actual >= top / 2 && s.left_actual + s.right_actual === s.actual);
    });
  });
}

/** Recommendation never grants clearance or transfers performance between exercises. */
export function recommendTier(profile, family, {
  logs = profile.logs || [], equipment = profile.equipment || [], now = new Date(), sourceExerciseId = family.tiers.regular
} = {}) {
  now = new Date(now);
  logs = datedLogs(logs, now);
  const recovery = recoveryState(logs, now), lighter = lighterActive(profile, now);
  const pain = unresolvedPain(profile, {logs, now});
  const options = tiers.map(tier => {
    const exerciseId = family.tiers[tier], e = byId(exerciseId);
    const lockedReason = !e ? 'אין כרגע תרגיל נוסף ברמה הזו.' : pain ? 'דווח כאב; נדרשת בדיקת מוכנות לפני המשך.' :
      !hasEquipment(e, equipment) ? 'הציוד הנדרש לווריאציה אינו זמין במקום האימון.' :
      (e.advancedOnly || e.novelEccentric) && !reviewedClearance(profile, e, now) ? clearanceReason :
      (e.advancedOnly || e.novelEccentric) && profile.exerciseClearances[e.id].target < (e.perSide ? 2 : 1) ?
        'היעד המאושר קטן מיחידת ביצוע שלמה.' :
      isBlocked(e, recovery) ? 'נדרשת התאוששות מהעומס האחרון לפני ביצוע הווריאציה.' :
      lighter && (e.advancedOnly || e.novelEccentric || e.demandingStraightArm) ?
        'בתקופה הקלה נבחרת הכנה ללא עומס מתקדם.' : '';
    return {tier, exerciseId, available: !lockedReason, lockedReason};
  });
  const available = options.filter(o => o.available);
  const result = (option, reason, decision = 'retain') =>
    ({tier: option?.tier ?? null, exerciseId: option?.exerciseId ?? null, reason, options, decision});
  if (!available.length) return result(null, 'אין כרגע וריאציה זמינה; נדרשים ציוד, התאוששות או אישור פרטני.');
  const authored = options.find(o => o.exerciseId === sourceExerciseId) || options[1];
  const evidenceScope = currentEvidence(profile, logs, now);
  const evidence = options.map(o => ({...o,
    evidence: o.exerciseId && variationEvidence(evidenceScope.profile, byId(o.exerciseId), evidenceScope.logs)}));
  const latest = evidence.filter(o => o.evidence)
    .sort((a, b) => Date.parse(a.evidence.last.date) - Date.parse(b.evidence.last.date)).at(-1);
  const lastPerformed = evidenceScope.logs.flatMap(l => l.sets || [])
    .filter(s => options.some(o => o.exerciseId === s.performed_exercise_id)).at(-1)?.performed_exercise_id;
  const current = evidence.find(o => o.exerciseId === lastPerformed) || latest;
  const baseline = current || authored, index = tiers.indexOf(baseline.tier);
  if (returnDecision(profile, logs, now).returnAfterBreak || lighter || options.some(o => o.lockedReason.includes('התאוששות'))) {
    const selected = available.filter(o => tiers.indexOf(o.tier) < index).at(-1);
    if (selected) return result(selected, 'חזרה הדרגתית: נבחרה דרגה קלה יותר; כדאי לבדוק שוב את היכולת.');
    // The family fallback supplies preparation when no lower tier is usable.
    if (returnDecision(profile, logs, now).returnAfterBreak && family.easierFamily) return result(null, 'נדרשת הכנה קלה ובדיקת יכולת.');
    return result(available.find(o => o.tier === baseline.tier), 'נשמרת הדרגה הזמינה לתרגול קל; אין דרגה קלה יותר עם הציוד הנוכחי.');
  }
  if (current) {
    const e = byId(current.exerciseId);
    if (e) {
      const first = evidenceScope.logs.filter(l => l.sets?.some(s => s.performed_exercise_id === e.id)).at(-1)?.sets
        .find(s => s.performed_exercise_id === e.id);
      const index = tiers.indexOf(current.tier);
      if (first && first.actual < prescriptionBand(e, profile.goal)[0] * (e.perSide ? 2 : 1)) {
        const lower = available.filter(o => tiers.indexOf(o.tier) < index).at(-1);
        return result(lower || available.find(o => o.tier === current.tier), lower ?
          'הסט הראשון היה מתחת לטווח ולכן נבחרה דרגה קלה יותר.' : 'אין דרגה קלה זמינה; נדרשת הכנה או בדיקה לפני אימון נוסף.', 'regress');
      }
      const harder = available.find(o => tiers.indexOf(o.tier) === index + 1);
      const comparableLoad = family.id !== 'grounded-pike-hold-family' &&
        (family.id !== 'push-foundation' || e.id !== 'incline-push' ||
          /height (?:[89]\d|1\d\d)cm|גובה (?:[89]\d|1\d\d)/.test(current.evidence?.last.setup || ''));
      if (harder && comparableLoad && current.available && variationReady(e, evidenceScope.logs, evidenceScope.profile, now)) {
        return result(harder, 'כל הסטים הושלמו בראש הטווח בשלושה אימונים באותם תנאים, עם עתודה וללא כאב; אפשר לנסות דרגה קשה יותר.');
      }
    }
  }
  const e = byId(baseline.exerciseId);
  const report = Number(({push: profile.push, pull: profile.pull, squat: profile.legs, plank: profile.core,
    'pike-push': profile.push, 'jump-squat': profile.legs, burpee: Math.min(profile.push, profile.legs)})[e?.id]);
  const belowFloor = !current && Number.isFinite(report) && report < prescriptionBand(e, profile.goal)[0] * (e.perSide ? 2 : 1);
  const selected = !belowFloor && available.find(o => o.tier === baseline.tier) ||
    available.filter(o => tiers.indexOf(o.tier) < index).at(-1) || available.find(o => o.tier === baseline.tier);
  // Neither a high intake report nor a locked authored tier proves a harder variation.
  return result(selected, belowFloor ? selected?.tier !== baseline.tier ?
    'היכולת המדווחת נמוכה מטווח התרגיל ולכן מומלצת דרגה קלה יותר.' :
    'אין דרגה קלה זמינה עם הציוד הנוכחי; להתחיל בהכנה או בדיקת יכולת.' :
    'נבחרת הווריאציה מהתוכנית; דרגה קשה יותר תומלץ לאחר ביצוע מתועד בשליטה.');
}

export function chooseVariation(profile, sourceExerciseId, options = {}) {
  const found = familyOf(sourceExerciseId);
  if (!found) return null;
  const original = recommendTier(profile, found.family, {...options, sourceExerciseId});
  let family = found.family, recommendation = original;
  const visited = new Set();
  while (!recommendation.exerciseId &&
    !recommendation.options.some(o => o.available && o.tier === profile.variationChoices?.[family.id]) &&
    family.easierFamily && !visited.has(family.id)) {
    visited.add(family.id);
    family = exerciseFamilies.find(f => f.id === family.easierFamily);
    if (!family) return null;
    recommendation = recommendTier(profile, family, options);
  }
  const regressed = family.id !== found.family.id;
  const choices = recommendation.options.map(o => regressed && o.tier === 'hard' ?
    {...original.options.find(o => o.exerciseId === sourceExerciseId), tier: 'hard'} : o);
  // Reserve the hard column for the locked board original, including with a remembered lower-family hard tier.
  const recommended = choices.find(o => o.tier === recommendation.tier && o.available) ||
    choices.filter(o => o.available && tiers.indexOf(o.tier) < tiers.indexOf(recommendation.tier)).at(-1);
  const returning = returnDecision(profile, options.logs ?? profile.logs, new Date(options.now ?? Date.now())).returnAfterBreak;
  const firstMiss = recommendation.decision === 'regress';
  const remembered = !returning && !firstMiss && choices.find(o => o.tier === profile.variationChoices?.[family.id] && o.available);
  const selected = remembered || recommended;
  if (!selected) return null;
  const feedback = profile.variationFeedback?.[family.id];
  const feedbackCopy = feedback && Date.parse(feedback.at) <= +new Date(options.now ?? Date.now()) ?
    `אמרת שהיה ${feedback.difficulty === 'hard' ? 'קשה' : 'קל'} מדי ולכן היום ` +
    (feedback.changed && selected.exerciseId === feedback.selectedId ?
      `נתחיל ב${byId(selected.exerciseId).he}, הבחירה ששמרת.` :
      `נבחר ${byId(selected.exerciseId).he} לפי המוכנות והביצוע ששמרת.`) : '';
  // The original is shown as the locked hard choice, without granting its clearance.
  return {...byId(selected.exerciseId), family: family.id, tier: selected.tier,
    recommendedTier: recommended?.tier ?? null, options: choices, feedbackReason: feedbackCopy,
    variationReason: feedbackCopy || (remembered && remembered.tier !== recommended?.tier ?
      'זו הבחירה ששמרת. המלצת המאמן: ' + recommendation.reason : recommendation.reason),
    sourceExerciseId, regressed};
}

export function variationBlock(profile, block, options = {}, tier) {
  const source = block.sourceExerciseId || block.id;
  const selected = chooseVariation(profile, source, options);
  if (!selected) return null;
  if (tier) {
    const option = selected.options.find(o => o.tier === tier && o.available);
    if (!option) return null;
    Object.assign(selected, byId(option.exerciseId), {tier});
  }
  const now = new Date(options.now ?? Date.now());
  const scope = currentEvidence(profile, options.logs ?? profile.logs ?? [], now);
  const dose = variationPrescription(scope.profile, selected, scope.logs, {now, easy: !!options.easy});
  // Carry scheduling identity, never the previous variation's execution conditions.
  const {round, set, section, sectionIndex, sectionTitle, phase, skill, skillStage, skillName, stageNumber, essential, accessory} = block;
  const result = Object.fromEntries(Object.entries({
    ...dose, round, set, section, sectionIndex, sectionTitle, phase, skill, skillStage, skillName, stageNumber, essential, accessory,
    family: selected.family, tier: selected.tier, recommendedTier: selected.recommendedTier,
    options: selected.options, variationReason: selected.variationReason, feedbackReason: selected.feedbackReason, sourceExerciseId: source,
    restSeconds: Math.max(dose.restSeconds || (selected.group === 'core' ? 90 : 150), block.restSeconds || 0),
    regressed: selected.regressed,
    note: [block.note, selected.regressed && !block.note?.includes('גרסה מוקלת') ? 'גרסה מוקלת של התרגיל מהלוח' : ''].filter(Boolean).join(' ')
  }).filter(([, value]) => value !== undefined));
  if (block.emomMinute) return emomPrescription(result);
  if (block.timingWindow) {
    // Format windows belong to the slot, independently of the catalogue exercise's unit.
    const {seconds, target, restSeconds, setupSeconds = 0} = block.timingWindow;
    if (dose.reviewedExecution && (dose.unit !== 'seconds' || target > dose.target || restSeconds < dose.restSeconds)) return null;
    const timedTarget = adaptTarget({...selected, unit: 'seconds'}, target, scope.logs, {retainEarned: false}).target;
    Object.assign(result, {unit: 'seconds', seconds, target: timedTarget, restSeconds, timingWindow: block.timingWindow,
      loggingMode: 'duration', assessment: false, provisional: false, rir: null,
      technicalReserve: 'לפחות 3 שניות של שליטה', cue: selected.cue,
      setupSeconds});
  }
  return executionBlock(result);
}

export function variationSelectorHTML(block) {
  if (!block.family || !block.options) return '';
  const buttons = block.options.map(o => {
    const label = labels[o.tier], reason = o.lockedReason ? ': ' + esc(o.lockedReason) : '';
    return `<button type="button" class="secondary" data-variation-tier="${o.tier}" ` +
      `data-variation-source="${esc(block.sourceExerciseId || block.id)}" aria-pressed="${block.tier === o.tier}" ` +
      `${o.available ? '' : 'disabled'} aria-label="${label}${reason}">` +
      `<span>${o.available ? '' : '🔒 '}${label}</span>` +
      (block.recommendedTier === o.tier ? '<small class="variation-recommended">מומלץ</small>' : '') +
      (!o.available ? `<small>${esc(o.lockedReason)}</small>` : '') + '</button>';
  }).join('');
  return `<div class="variation-choice" data-variation-family="${esc(block.family)}">` +
    `<div class="variation-tiers" role="group" aria-label="בחירת וריאציה">${buttons}</div>` +
    `<p>${esc(block.variationReason || '')}</p>` +
    (block.note?.includes('בלוח המאמן:') ? `<small>${esc(block.note)}</small>` : '') + '</div>';
}
