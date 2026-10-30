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
  'movementExperience', 'trainingBlock', 'lighterPeriod', 'assessmentAt', 'logs'];
  return JSON.stringify(stable( {
    profile: Object.fromEntries(keys.map(k => [k, rest[k] ?? null])), options: Object.fromEntries( ['minutes',
    'locationId', 'readiness', 'focus', 'skillChoice', 'skillFocusOverride', 'equipment', 'confirmedTargets'].map(k => [k,
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
  if (session.sets?.length && applyNow) {
    // Retain completed/skipped history at its original indices so existing set IDs stay stable.
    const prefix = session.plan.blocks.slice(0, session.index);
    const completed = new Map();
    for (const set of session.sets) {
      const key = [set.planned_exercise_id, set.phase, set.skill, set.skillStage].join(':');
      completed.set(key,(completed.get(key) || 0) + 1);
    }
    let omitRest = false;
    const remaining = nextPlan.blocks.filter(b => {
      if ( ['warm'].includes(b.phase)) return false;
      if ( ['work', 'skill'].includes(b.phase)) {
        const key = [b.id, b.phase, b.skill, b.skillStage].join(':'), count = completed.get(key) || 0;
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
    if (!remaining.length) return {
      changed: false, pending: true
    };
    nextPlan.blocks = [... prefix, ... remaining];
    nextPlan.total_seconds = nextPlan.blocks.reduce((n, b) => n +(b.seconds || 0), 0);
    nextPlan.minutes = nextPlan.total_seconds / 60;
    nextPlan.phases = nextPlan.phases?.map(p => {
      const seconds = nextPlan.blocks.filter(b => b.section === p.id).reduce((n, b) => n +(b.seconds || 0),
      0);
      return {
        ... p, seconds, minutes: seconds / 60
      };
    });
    nextPlan.sets = nextPlan.blocks.filter(b => ['work', 'skill'].includes(b.phase)).length;
    index = prefix.length;
    skipped = [...(session.skipped || [])];
  }
  Object.assign(session, {
    plan: nextPlan, index, skipped, draft: {
    }, guideCandidates: [], timer: {
      left: nextPlan.blocks[index].seconds, running: false, started: now
    }, equipment: [... equipment], location_id: options.locationId, readiness: options.readiness, inputFingerprint: fingerprint,
    planningOptions: {
      ... options
    }
  });
  return {
    changed: true, pending: false
  };
}
