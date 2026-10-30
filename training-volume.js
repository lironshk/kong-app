import {
  exercises
}
from './data/exercises.js?v=31';
import {
  loadingExposure
}
from './training-evidence.js?v=31';
// Pattern budgets are an editorial distribution, not muscle hypertrophy bands.
export const volumeFamily = e => e.group === 'pull' || e.movementPattern === 'straight_arm_pull' ? 'pull': e.group === 'push' ? 'push': ['squat',
'single_leg'].includes(e.movementPattern) ? 'knee': ['hinge', 'hip_extension', 'knee_flexion'].includes(e.movementPattern) ? 'hip': e.group ===
'core' ? 'core': e.movementPattern;
export function weeklyVolume(logs, now) {
  const totals = {
  };
  for (const l of logs) {
    const age = + now - Date.parse(l.completed_at);
    if (age < 0 || age >= 7 * 864e5 || l.plan?.capability) continue;
    for (const s of l.sets || []) {
      const e = exercises.find(e => e.id === s.performed_exercise_id);
      if (e && loadingExposure(e, s, l).loaded) {
        const k = volumeFamily(e);
        totals[k] =(totals[k] || 0) + 1;
      }
    }
  }
  return totals;
}
export const experiencedProfile = p => ['advanced', 'intermediate', 'consistent'].includes(p.experience) || Object.values(p.movementExperience ||
{
}).includes('experienced');
export const weeklyRange = p => experiencedProfile(p) ? [8, 12]: [4, 8];
