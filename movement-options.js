import {
  hasEquipment
}
from './training-evidence.js?v=32';
export function movementPattern(e) {
  if ( ['calf', 'single-calf'].includes(e?.id)) return 'ankle';
  if ( ['hinge', 'single-hinge', 'bridge', 'single-bridge', 'bridge-march'].includes(e?.id)) return 'hip';
  if (e?.group === 'pull') return['row', 'row-horizontal', 'band-row'].includes(e.id) ? 'horizontal-pull': 'vertical-pull';
  return e?.group;
}
export function substitutionCandidates(original, catalog, equipment = []) {
  return catalog.filter(e => e.group === original.group && movementPattern(e) === movementPattern(original) && !e.advancedOnly && e.level <= Math
  .max(original.level || 1, 1) &&(e.unit || 'reps') ===(original.unit || 'reps') && !!e.perSide === !!original.perSide && hasEquipment(e,
  equipment));
}
