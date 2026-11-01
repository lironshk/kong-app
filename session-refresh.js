import {applyExtras, addRampUps, isExtra, mainSeconds} from './session-extras.js?v=32';
import {workClockSeconds} from './training-safety.js?v=32';
// Logged prescriptions only change after explicit confirmation; completed steps remain immutable.
const stable = value => Array.isArray(value) ? value.map(stable): value && typeof value === 'object' ? Object.fromEntries(Object.keys(value).sort
().map(k => [k, stable(value[k])])): value;
export function currentSessionOptions(profile, options = {
}, previousFingerprint) {
  const next = {
    ... options
  };
  let previous;
  try {
    previous = JSON.parse(previousFingerprint).profile;
  } catch {
  }
  if (previous) {
    if (previous.minutes !== profile.minutes) next.minutes = profile.minutes;
    if (previous.activeLocation !== profile.activeLocation) next.locationId = profile.activeLocation;
    if (JSON.stringify(stable(previous.equipment)) !== JSON.stringify(stable(profile.equipment)) || JSON.stringify(stable(previous.locations))
    !== JSON.stringify(stable(profile.locations))) {
      next.equipment = profile.locations?.find(l => l.id ===(next.locationId || profile.activeLocation))?.equipment || profile.equipment;
    }
  }
  return next;
}
export function sessionInputs(profile, options = {
}) {
  const {
    session, home, checkIns, coachPreferences, ... rest
  } = profile;
  // Include all planning evidence and guards, excluding unrelated Home presentation.
  const keys = ['adult', 'limits', 'age', 'goal', 'experience', 'push', 'pull', 'legs', 'core', 'days',
  'minutes', 'equipment', 'locations', 'activeLocation', 'skillSelections', 'skillProgress', 'exerciseClearances',
  'trainingStyle', 'dedicatedLegDay', 'sessionStructure', 'sessionExtras',
  'movementExperience', 'trainingBlock', 'lighterPeriod', 'assessmentAt', 'painReviewedAt', 'logs'];
  return JSON.stringify(stable( {
    profile: {...Object.fromEntries(keys.map(k => [k, rest[k] ?? null])),
      trainingStyle: profile.trainingStyle || 'full', dedicatedLegDay: !!profile.dedicatedLegDay,
      sessionStructure: profile.sessionStructure || 'mixed', sessionExtras: {warmup: true, cooldown: true, ...profile.sessionExtras}},
    options: Object.fromEntries( ['minutes',
    'structure', 'locationId', 'readiness', 'focus', 'skillChoice', 'skillFocusOverride', 'equipment', 'confirmedTargets'].map(k => [k,
    options[k] ??( {
      focus: 'auto', readiness: 'normal', skillChoice: 'pull', skillFocusOverride: false, confirmedTargets: {
      }
    }
    [k]) ?? null])), checkIns
  }));
}
export function refreshSavedSession(session, {
  fingerprint, generate, equipment, options, applyNow = false, now = Date.now()
}) {
  if (!session || session.plan?.capability) return {
    changed: false, pending: false
  };
  if (session.inputFingerprint === fingerprint) return {
    changed: false, pending: false
  };
  if (session.sets?.length && !applyNow) return {
    changed: false, pending: true
  };
  const plan = generate();
  if (plan.blocked || !plan.blocks?.length) return {
    changed: false, pending: false, blocked: plan
  };
  let nextPlan = structuredClone(plan), index = 0, skipped = [];
  const extrasSkipped = {...session.plan.extrasSkipped, ...session.extrasSkipped};
  if (extrasSkipped.warmup || extrasSkipped.cooldown) nextPlan = applyExtras(nextPlan, {
    ...nextPlan.sessionExtras, ...(extrasSkipped.warmup ? {warmup: false} : {}),
    ...(extrasSkipped.cooldown ? {cooldown: false} : {})
  });
  if (session.sets?.length && applyNow) {
    // Retain completed/skipped history at its original indices so existing set IDs stay stable.
    const prefix = session.plan.blocks.slice(0, session.index);
    const completed = new Map();
    for (const set of session.sets) {
      const key = stationKey(set, true);
      completed.set(key,(completed.get(key) || 0) + 1);
    }
    let omitRest = false;
    let remaining = nextPlan.blocks.filter(b => {
      if (b.phase === 'warm' || (b.extra && b.section === 'warmup')) return false;
      if ( ['work', 'skill'].includes(b.phase)) {
        const key = stationKey(b), count = completed.get(key) || 0;
        omitRest = count > 0;
        if (count) {
          completed.set(key, count - 1);
          return false;
        }
        return true;
      }
      if (b.phase === 'rest' && omitRest) return false;
      omitRest = false;
      return true;
    });
    if (nextPlan.sessionExtras?.warmup === false) {
      const prepared = new Set(prefix.filter(b => ['work', 'skill'].includes(b.phase) || b.rampUp).map(b => b.rehearsalPattern || b.movementPattern));
      let omitRampRest = false;
      remaining = addRampUps(remaining).filter(b => {
        if (b.rampUp) {omitRampRest = prepared.has(b.rehearsalPattern || b.movementPattern); return !omitRampRest;}
        if (omitRampRest && b.extra && b.section === 'warmup') {omitRampRest = false; return false;}
        omitRampRest = false;
        return true;
      });
    }
    if (!remaining.length) return {
      changed: false, pending: true
    };
    nextPlan.blocks = [... prefix, ... remaining];
    normalizeSessionTime(nextPlan);
    // A changed prescription cannot spend more main time than the trainee requested.
    if (nextPlan.main_seconds > nextPlan.requested_minutes * 60) return {changed: false, pending: true};
    nextPlan.sets = nextPlan.blocks.filter(b => ['work', 'skill'].includes(b.phase)).length;
    index = prefix.length;
    skipped = [...(session.skipped || [])];
  }
  Object.assign(session, {
    plan: nextPlan, index, skipped, extrasSkipped, draft: {
    }, guideCandidates: [], timer: {
      left: workClockSeconds(nextPlan.blocks[index]), running: false, started: now
    }, equipment: [... equipment], location_id: options.locationId, readiness: options.readiness, inputFingerprint: fingerprint,
    planningOptions: {
      ... options
    }
  });
  return {
    changed: true, pending: false
  };
}

function stationKey(block, logged = false) {
  return [logged ? block.planned_exercise_id : block.id, block.phase, block.skill, block.skillStage,
    block.circuitId, block.circuitId ? block.round : null, block.circuitId ? block.exerciseInRound : null].join(':');
}
export function normalizeSessionTime(plan) {
  plan.main_seconds = mainSeconds(plan.blocks);
  plan.minutes = plan.main_seconds / 60;
  plan.warmup_seconds = plan.blocks.filter(b => isExtra(b) && b.phase !== 'cool').reduce((n, b) => n + b.seconds, 0);
  plan.cooldown_seconds = plan.blocks.filter(b => b.phase === 'cool').reduce((n, b) => n + b.seconds, 0);
  plan.extra_seconds = plan.warmup_seconds + plan.cooldown_seconds;
  plan.total_seconds = plan.main_seconds + plan.extra_seconds;
  plan.unused_seconds = plan.requested_minutes * 60 - plan.main_seconds;
  if (plan.phases) plan.phases = plan.phases.map(p => {
    const seconds = plan.blocks.filter(b => b.section === p.id || b.phase === p.id).reduce((n, b) => n + b.seconds, 0);
    return {...p, seconds, ...(p.minutes != null ? {minutes: seconds / 60} : {})};
  });
  return plan;
}
