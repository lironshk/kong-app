import {recoveryBefore, capacityFeasible} from './training-evidence.js?v=32';
export const loadedStep = b => ['work', 'skill'].includes(b.phase) || b.loadedPreparation ||
  b.phase === 'warm' && (b.reviewedExecution || b.advancedOnly || b.novelEccentric || b.demandingStraightArm);
const loaded = loadedStep;
// Run only after all ordering and extras. Required recovery is distinct from the visible gap.
export function validateExecution(input) {
  const result = [], exposures = {};
  // Adjacent rest prescriptions describe one recovery interval, using the larger value.
  const merged = [];
  for (const original of input) {
    const previous = merged.at(-1);
    if (original.phase === 'rest' && previous?.phase === 'rest') previous.seconds = Math.max(previous.seconds, original.seconds);
    else merged.push({...original});
  }
  for (const original of merged) {
    const b = {...original};
    if (loaded(b)) {
      if (b.assessmentCause === 'explicit-inability') return {error:'דווחה יכולת אפס; נדרשת הכנה נתמכת עם ציוד מתאים.'};
      if (!capacityFeasible(b)) return {error:'היכולת המדווחת אינה מספיקה למינון ולעתודה הנדרשת; לבחור הכנה נתמכת.'};
      exposures[b.id] = (exposures[b.id] || 0) + 1;
      if (b.reviewedExecution && exposures[b.id] > b.reviewedSetLimit) return {error:'מספר הניסיונות חורג מהאישור האישי.'};
      b.requiredRecoverySeconds ??= b.restSeconds || (b.group === 'core' ? 90 : 150);
      const needed = recoveryBefore(result, b, 0);
      if (needed > 0 && result.at(-1)?.phase === 'rest') result.at(-1).seconds += needed;
      else if (needed > 0) result.push({id:b.id+'-final-recovery', he:'מנוחה והכנה', phase:'rest',
        section:b.section || 'strength', extra:b.extra === true, seconds:needed, target:null,
        cue:'מנוחה לעומסים משותפים לפני התרגיל הבא.'});
    }
    result.push(b);
  }
  for (let i=0;i<result.length;i++) if (loaded(result[i])) {
    let gap=0;
    for (let j=i+1;j<result.length && !loaded(result[j]);j++) gap+=result[j].phase === 'rest' ? result[j].seconds : 0;
    result[i].actualRestSeconds=gap;
  }
  return {blocks:result, exposures};
}
