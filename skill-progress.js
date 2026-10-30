import {
  exercises
}
from './data/exercises.js?v=31';
import {
  conditionsKnown, evidenceKey, variationEvidence
}
from './training-evidence.js?v=31';
import {
  skills
}
from './data/skills.js?v=31';
const aliases = {
  'first-pullup': 'first-pull', 'first-pushup': 'first-push'
};
export function skillSelections(profile) {
  if (profile.skillSelections && Object.keys(profile.skillSelections).length === 0) return {
  };
  const explicit = Object.fromEntries(Object.entries(profile.skillSelections || {
  }).filter(( [type, id]) => skills.some(s => s.id === id && s.type === type)));
  if (Object.keys(explicit).length === Object.keys(profile.skillSelections || {
  }).length && Object.keys(explicit).length) return explicit;
  const result = {
    pull: skillState(profile, 'first-pull').achieved ? 'muscle-up': 'first-pull', push: skillState(profile,
    'first-push').achieved ? 'handstand': 'first-push'
  };
  if (profile.skillSelections?.push === 'pistol') result.legs = 'pistol';
  const old = skills.find(s => s.id ===(aliases[profile.skillGoal] || profile.skillGoal));
  if (old) result[old.type] = old.id;
  for (const type of['pull', 'push', 'legs']) if (skills.some(s => s.id === profile.skillSelections?.[type] && s.type === type)) result[type] =
  profile.skillSelections[type];
  return result;
}
export function selectSkill(profile, id) {
  const s = skills.find(s => s.id === id);
  if (!s || skillState(profile, id).achieved) return false;
  profile.skillSelections = {
    ... skillSelections(profile), [s.type]: id
  };
  profile.skillProgress ??= {
  };
  return true;
}
export function skillState(profile, id) {
  const s = skills.find(s => s.id === id), state = profile.skillProgress?.[id];
  const capacity = exerciseId => {
    const e = exercises.find(e => e.id === exerciseId), evidence = e && variationEvidence(profile, e,
    (profile.logs || []).map(l =>( {
      ... l, sets:(l.sets || []).filter(s => !s.skill)
    })));
    return evidence?.last.actual ??( {
      push: profile.push, pull: profile.pull, squat: profile.legs, plank: profile.core
    }
    [exerciseId] || 0);
  };
  const placement = s.selfReportPlacement;
  let stage = placement && Number(profile[placement.metric]) >= placement.minimum ? placement.stage: 0,
  achieved = false;
  for (let i = 0;
  i < s.stages.length;
  i++) {
    const c = s.stages[i].exit;
    if (capacity(c.exerciseId) >= c.value *(c.perSide ? 2: 1)) {
      stage = Math.min(i + 1, s.stages.length - 1);
      if (i === s.stages.length - 1) achieved = true;
    }
  }
  return {
    stage: Math.min(s.stages.length - 1, Math.max(0, state?.stage ?? stage)), achieved: state?.achieved ?? achieved,
    since: state?.since || null, source: state ? 'evidence': 'self-report'
  };
}
export function focusSkills(profile, focus, choice, seconds, logs = []) {
  const selected = {
    ... skillSelections(profile), legs: skillSelections(profile).legs || 'pistol'
  };
  let types = focus === 'pull' || focus === 'upper-pull' ? ['pull']: focus === 'push' ? ['push']: ['lower',
  'core'].includes(focus) ?(choice && choice !== 'none' ? [choice]: []): [choice || 'pull'];
  if (types.includes('both')) types = seconds >= 720 ? ['pull', 'push']: [logs.filter(l => l.plan?.skillTracks?.length).length % 2 ? 'push':
  'pull'];
  types = types.filter(t => t !== 'legs' || focus === 'lower');
  return types.filter(t => selected[t]).map(t => selected[t]).filter(id => !skillState(profile, id).achieved);
}
// Evidence must name this track and stage, use the same setup, and explicitly confirm technique.
export function stageProposal(profile, id, now = new Date()) {
  const skill = skills.find(s => s.id === id);
  if (!skill) return null;
  const state = skillState(profile, id);
  if (state.achieved) return null;
  const c = skill.stages[state.stage].exit, days = new Set(), evidence = [];
  let setup = null;
  for (const l of[...(profile.logs || [])].sort((a, b) => Date.parse(a.completed_at) - Date.parse(b.completed_at))) {
    if (l.pain || Date.parse(l.completed_at) > + now || state.since && Date.parse(l.completed_at) <= Date.parse(state.since)) continue;
    const sets =(l.sets || []).filter(s => s.skill === id && s.skillStage === state.stage && s.performed_exercise_id === c.exerciseId && s.unit
    === c.unit && conditionsKnown(s) && s.safe_exit_confirmed === true && s.actual >=(c.value *(c.perSide ? 2: 1)) &&(!c.perSide || s.
    side_allocation === 'total_both_sides' && s.left_actual >= c.value && s.right_actual >= c.value) && s.quality === 'good' && s.
    technique_confirmed === true && !s.pain &&(c.unit === 'seconds' ? s.technical_reserve_seconds >= 3: s.rir >= 3));
    const groups = new Map();
    for (const s of sets) {
      const key = evidenceKey(s);
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(s);
    }
    for (const[key, group] of groups) if (group.length >= c.sets &&(setup === null || setup === key)) {
      setup = key;
      days.add(l.completed_at.slice(0, 10));
      evidence.push(l.id);
      break;
    }
  }
  return days.size >= c.sessions ? {
    id, stage: state.stage, final: state.stage === skill.stages.length - 1, evidence
  }: null;
}
export function confirmStage(profile, proposal, confirmed = false, now = new Date()) {
  if (!confirmed || !proposal) return false;
  const fresh = stageProposal(profile, proposal.id, now);
  if (!fresh || fresh.stage !== proposal.stage) return false;
  profile.skillProgress ??= {
  };
  profile.skillProgress[proposal.id] = {
    stage: fresh.final ? fresh.stage: fresh.stage + 1, achieved: fresh.final, since: new Date(now).toISOString(),
    evidence: fresh.evidence, advancementType: 'self-reported', professionalReview: false
  };
  return true;
}
export function skillSummary(profile) {
  return Object.values(skillSelections(profile)).map(id => {
    const s = skills.find(s => s.id === id), state = skillState(profile, id);
    return (
      `${s.he}` +
      `: ` +
      `${state.achieved ? 'היעד הושג לפי הדיווחים; לבחור את סקיל ' +(s.type === 'pull' ? 'המשיכה': s.type === 'push' ? 'הדחיקה': 'הרגליים') + ' הבא':
      'שלב ' +(state.stage + 1) + ' מתוך ' + s.stages.length +(state.source === 'self-report' ? ' (דיווח עצמי, שיבוץ ראשוני)': '')}`
    );
  }).join(' · ');
}
