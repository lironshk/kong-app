import { workouts } from './data/workouts.js?v=32';
import { buildWorkout } from './workout-engine.js?v=32';
import { recoveryState, isBlocked } from './training-evidence.js?v=32';
import { exercises } from './data/exercises.js?v=32';
import {volumeFamily} from './training-volume.js?v=32';
const hash = s => [...String(s)].reduce((n, c) => (n * 31 + c.charCodeAt(0)) >>> 0, 0);
const templateId = log => log.templateId ?? log.plan?.templateId;
export const workoutUserLevel = p => Number.isInteger(p.level) ? p.level :
  ({beginner: 1, consistent: 2, intermediate: 3, advanced: 4}[p.experience] ?? 1);
function preservesCoverage(candidate, adaptive, focus) {
  const active = candidate.blocks.filter(b => b.countsAsStrength), groups = new Set(active.map(b => b.group));
  if (['full', 'upper', 'park', 'fullbody', 'strength', 'hypertrophy', 'endurance'].includes(focus) &&
    (!groups.has('push') || !groups.has('legs') || !adaptive.missing_pull && !groups.has('pull'))) return false;
  const required = {}, offered = {};
  for (const b of (adaptive.blocks || []).filter(b => b.countsAsStrength)) {
    const key = volumeFamily(b); required[key] = (required[key] || 0) + 1;
  }
  for (const b of active) {const key = volumeFamily(b); offered[key] = (offered[key] || 0) + 1;}
  return ['push', 'pull', 'knee', 'hip', 'core'].every(k => (offered[k] || 0) >= Math.min(2, required[k] || 0));
}
export function rotationCandidates(profile, adaptive, options = {}) {
  if (adaptive.blocked || adaptive.recovery || adaptive.easyPractice || adaptive.deload ||
    adaptive.sessionVolumeReduction || options.readiness === 'tired') return [];
  const now = new Date(options.now ?? Date.now()), logs = options.history ?? profile.logs ?? [];
  const recent = logs.filter(l => Date.parse(l.completed_at) <= +now).slice()
    .sort((a, b) => Date.parse(a.completed_at) - Date.parse(b.completed_at));
  const lastFive = new Set(recent.slice(-5).map(templateId).filter(Boolean));
  const recovery = recoveryState(logs, now), focus = options.focus === 'auto' || !options.focus ? adaptive.focus : options.focus;
  return workouts.filter(w => (w.origin === 'coach' || w.rotationEligible !== false) && (w.origin === 'coach' || w.level <= workoutUserLevel(profile)) &&
    w.minutes <= (options.minutes ?? profile.minutes) && !lastFive.has(w.id) &&
    (w.origin === 'coach' || w.equipment.every(id => profile.equipment?.includes(id))) &&
    (['full', 'park', 'fullbody', 'strength', 'hypertrophy', 'endurance'].includes(focus) ?
      w.muscleGroups.includes('fullbody') : focus === 'upper' ?
      w.muscleGroups.some(g => ['chest', 'shoulders', 'back', 'arms'].includes(g)) : focus === 'push' ?
      w.focus === 'push' || w.id === 'push-foundations' : focus === 'pull' ? w.id === 'pull-foundations' :
      focus === 'lower' ? w.muscleGroups.includes('legs') : focus === 'core' ? w.muscleGroups.includes('core') : false))
    .map(w => ({template: w, plan: buildWorkout(w.id, profile, options)}))
    .filter(({plan}) => (options.focus === 'lower' || profile.dedicatedLegDay === true ||
      plan.blocks.some(b => b.countsAsStrength && ['push', 'pull'].includes(b.group))) &&
      !plan.blocked && !plan.recovery && plan.templateId && preservesCoverage(plan, adaptive, focus) && plan.blocks.every(b =>
      !['warm', 'work', 'skill'].includes(b.phase) || !exercises.some(e => e.id === b.id && isBlocked(e, recovery))));
}
/** One prepared slot per three completed sessions. Every template has exactly one ticket. */
export function rotateWorkout(profile, adaptive, options = {}) {
  if (options.rotation === false || adaptive.blocked || adaptive.recovery || adaptive.easyPractice ||
    adaptive.deload || adaptive.sessionVolumeReduction) return adaptive;
  const now = new Date(options.now ?? Date.now());
  const logs = (options.history ?? profile.logs ?? []).filter(l => Date.parse(l.completed_at) <= +now)
    .slice().sort((a, b) => Date.parse(a.completed_at) - Date.parse(b.completed_at));
  // Both prefix share and a rolling two-session gap hold even with imported/manual prepared logs.
  if (logs.length % 3 !== 2 || logs.slice(-2).some(templateId) ||
    logs.filter(templateId).length + 1 > Math.floor((logs.length + 1) / 3)) return adaptive;
  const candidates = rotationCandidates(profile, adaptive, options);
  if (!candidates.length) return adaptive;
  const key = adaptive.today?.date ?? now.toISOString().slice(0, 10);
  const chosen = candidates[hash(key) % candidates.length].plan;
  return {...chosen, ...(adaptive.planner ? {planner: adaptive.planner, requestedFocus: adaptive.requestedFocus,
    queueItem: adaptive.queueItem, essentialIds: [...new Set(chosen.blocks.filter(b => b.countsAsStrength).map(b => b.id))]} : {}),
    today: adaptive.today, dayIndex: adaptive.dayIndex,
    rationaleHe: chosen.reason, rationaleEn: chosen.titleEn, rotation: true};
}
