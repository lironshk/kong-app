import {
  exercises
}
from './data/exercises.js?v=31';
import {
  loadingExposure, conditionsKnown, evidenceKey
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
    if (!Number.isFinite(age) || age < 0 || age >= 7 * 864e5 || l.plan?.capability) continue;
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
export function fatigueDecision(logs = [], now = new Date()) {
  const recent = logs.filter(l => Date.parse(l.completed_at) <= +now && +now - Date.parse(l.completed_at) <= 14 * 864e5)
    .slice().sort((a, b) => Date.parse(a.completed_at) - Date.parse(b.completed_at)).slice(-2);
  const sets = l => (l.sets || []).filter(s => s.actual > 0 && conditionsKnown(s));
  return recent.length === 2 && recent.every(l => sets(l).some(s => l.effort === 'hard' || s.effort === 'hard' ||
    s.quality === 'uncertain' || s.actual < s.target)) && sets(recent[0]).some(a => sets(recent[1]).some(b => evidenceKey(a) === evidenceKey(b)));
}
// Shared allocator: count the chosen execution, including unknown-effort work conservatively.
export function volumeBudget(profile, logs, now) {
  const range = weeklyRange(profile), previous = weeklyVolume(logs, now), planned = {};
  return {range, previous, planned,
    room: e => Math.max(0, range[1] - (previous[volumeFamily(e)] || 0) - (planned[volumeFamily(e)] || 0)),
    count: e => {const k = volumeFamily(e); planned[k] = (planned[k] || 0) + 1;}
  };
}

// Minimum coverage policy for a runnable week with equipment and recovery; ceilings remain weeklyRange.
export function weeklyMinimums(profile) {
  const days = new Set(profile.days || []).size || Number(profile.daysPerWeek) || 3;
  const sets = days === 1 ? 2 : 4;
  return {push: sets, pull: sets, knee: sets, hip: sets, core: sets};
}

// Coverage, challenging work and training dates are independent observations, never a sufficiency score.
export function weeklyWorkSummary(logs = [], now = new Date()) {
  const exposure = {}, challenging = {}, dates = {};
  for (const log of logs) {
    const age = +now - Date.parse(log.completed_at);
    if (!(age >= 0 && age < 7 * 864e5) || log.plan?.capability) continue;
    for (const s of log.sets || []) {
      const e = exercises.find(e=>e.id===s.performed_exercise_id);
      if (!e || !(s.actual > 0)) continue;
      const family = volumeFamily(e);
      exposure[family] = (exposure[family] || 0) + 1;
      const reserve = e.unit === 'seconds' ? s.technical_reserve_seconds : s.rir;
      const planned = log.plan?.blocks?.find(b=>b.id===e.id && b.round===s.round && b.phase===s.phase);
      const practice = s.assessment || s.provisional || s.calibration || planned?.countsAsStrength === false ||
        planned?.substitutionIntent === 'preparation' || e.id === 'hinge' && !conditionsKnown(s);
      if (practice || !conditionsKnown(s) || !Number.isFinite(reserve) || reserve > 4 ||
        s.pain || log.pain || s.quality !== 'good' || !loadingExposure(e,s,log).loaded) continue;
      challenging[family] = (challenging[family] || 0) + 1;
      (dates[family] ||= new Set()).add(log.completed_at.slice(0,10));
    }
  }
  return {exposure, challenging, frequency:Object.fromEntries(Object.entries(dates).map(([k,v])=>[k,v.size])),
    sufficient:null, note:'חשיפה, מאמץ ותדירות נבדקים בנפרד; אין כאן אישור שהאימון מספיק למטרה.'};
}
export const posteriorAssessmentOptions = ['single-hinge','bridge','single-bridge','heel-dig-hold'];
