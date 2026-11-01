import {trainingQueue, legPatterns} from './session-structure.js?v=31';
import {finishExecution,executionBlock} from './session-execution.js?v=31';
import { chooseVariation } from './variation-choice.js?v=31';
import {
  phaseLabel
}
from './data/glossary.js?v=31';
import {
  volumeFamily, volumeBudget, fatigueDecision, experiencedProfile
}
from './training-volume.js?v=31';
import {
  unresolvedDoses, doseAuthorized, evidenceKey, conditionsKnown, recoveryState, isBlocked, hasEquipment,
  reviewedClearance, variationEvidence, variationPrescription, workSeconds, squatReportStep, recoveryBefore
}
from './training-evidence.js?v=31';
import {
  focusSkills, skillState
}
from './skill-progress.js?v=31';
import {
  exercises
}
from './data/exercises.js?v=31';
import {
  skills
}
from './data/skills.js?v=31';
import {
  plan as safetyPlan
}
from './engine.js?v=31';
import {
  SESSION_DURATIONS, sessionMinutes
}
from './session-settings.js?v=31';
const phaseBudgets = [[300, 300, 1500, 0, 180], [360, 600, 2100, 0, 180],
  [420, 720, 2880, 0, 240], [480, 1080, 3420, 0, 300]];
export const budgets = Object.fromEntries(SESSION_DURATIONS.map((minutes, i) => [minutes, phaseBudgets[i]]));
export const focusLabels = {
  auto: 'אוטומטי לפי התוכנית', full: 'כל הגוף', upper: 'פלג גוף עליון', lower: 'רגליים', push: 'דחיקה',
  pull: 'משיכה', core: 'בטן וליבה', skill: 'יום סקיל', park: 'אימון כוח בפארק'
};
export const patternLabels = {
  'hip_external_rotation': 'סיבוב חיצוני בירך', 'hip_abduction': 'הרחקת ירך', 'straight_arm_pull': 'משיכה בזרועות ישרות',
  'horizontal_push': 'דחיקה אופקית', 'horizontal_pull': 'משיכה אופקית', 'overhead_press': 'דחיקה מעל הראש',
  'downward_support_press': 'דחיקה בתמיכה מטה', 'vertical_push': 'דחיקה אנכית', 'vertical_pull': 'משיכה אנכית',
  'squat': 'סקוואט', 'hinge': 'ציר ירך', 'hip_extension': 'פשיטת ירך', 'single_leg': 'רגל אחת', 'knee_flexion': 'כפיפת ברך',
  'calf': 'שוקיים', 'core_anti_extension': 'ליבה — מניעת פשיטה', 'core_anti_rotation': 'ליבה — מניעת סיבוב',
  'core_lateral_stability': 'יציבות צידית', 'compression': 'דחיסה', 'trunk_flexion': 'כפיפת גו', 'support': 'תמיכה',
  'scapular_control': 'שליטת שכמות', 'mobility': 'תנועתיות', 'locomotion': 'תנועה במרחב'
};
const templates = {
  full: ['horizontal_push', 'horizontal_pull', 'squat', ['hinge', 'hip_extension'], ['overhead_press',
  'vertical_pull'], ['core_anti_extension', 'core_anti_rotation']], upper: ['overhead_press', 'vertical_pull',
  'horizontal_push', 'horizontal_pull', ['squat', 'single_leg', 'hinge'], 'core_anti_extension', 'compression'], lower: ['squat', 'hinge',
  'single_leg', 'knee_flexion', 'calf', 'core_anti_rotation'], push: ['overhead_press', 'horizontal_push',
  ['hinge', 'squat', 'single_leg'], 'core_anti_extension', 'support'], pull: ['vertical_pull', 'horizontal_pull',
  ['squat', 'single_leg', 'hinge'], 'scapular_control',
  'core_anti_rotation'], core: ['core_anti_extension', 'core_anti_rotation', 'core_lateral_stability',
  'compression', 'trunk_flexion', ['squat', 'single_leg', 'hinge']], skill: ['squat', 'core_anti_rotation'], park: [ ['squat', 'single_leg'],
  'horizontal_push', 'horizontal_pull', 'locomotion', 'core_anti_extension']
};
const labels = ['warmup', 'skill', 'strength', 'finish', 'cooldown'].map(phaseLabel);
const phases = ['warmup', 'skill', 'strength', 'conditioning', 'cooldown'];
const hash = s => [... String(s)].reduce((n, c) =>(n * 31 + c.charCodeAt(0)) >>> 0, 0);
const exercise = id => exercises.find(e => e.id === id);
const confirmed = l =>(l.sets || []).filter(s => s.actual > 0);
/** Pure session builder. Timer completion never advances the queue or establishes capacity. */
export function buildSession( {
  profile, logs = profile?.logs || [], minutes = profile?.minutes || 45, focus = 'auto', equipment = profile?.equipment || [],
  skillTrack, skillChoice, structure, skillFocusOverride = false, readiness = 'normal', date = new Date(), seed
} = {
}) {
  minutes = sessionMinutes(minutes);
  if (!SESSION_DURATIONS.includes(minutes) || !budgets[minutes] || !Object.hasOwn(focusLabels, focus)) throw new RangeError(
  'Unsupported session duration or focus');
  const now = new Date(date);
  if (!Number.isFinite(+ now)) throw new RangeError('Invalid session date');
  logs = logs.filter(l => Date.parse(l.completed_at) <= + now).slice().sort((a, b) => Date.parse(a.completed_at) - Date.parse(b.completed_at));
  const p = {
    ... profile, equipment: [... equipment], logs
  };
  const gate = safetyPlan(p, minutes, readiness, {
    now, history: logs
  });
  if (gate.blocked) return {
    ... gate, reasonHe: gate.reason, why: gate.reason
  };
  const lighter = p.lighterPeriod;
  const deload = !!(lighter?.reviewer && lighter?.reviewedAt && Date.parse(lighter.start) <= + now && Date.parse(lighter.end) >= + now);
  const completed = logs.filter(l => l.completed && l.plan?.planner === 'personal-coach-1' && l.plan.queueItem != null && l.plan.essentialIds?.
  length && !unresolvedDoses(l.plan, l.sets).length);
  const queueIndex = new Set(completed.map(l => l.plan.queueItem)).size;
  const queue = trainingQueue(p);
  const requestedFocus = focus;
  focus = focus === 'auto' ? queue[queueIndex % queue.length]: focus;
  const recovery = recoveryState(logs, now), blockedPatterns = recovery.blocked;
  const rollingDays = new Set(logs.filter(l => + now - Date.parse(l.completed_at) < 7 * 86400000 && confirmed(l).length && l.effort !== 'easy' &&
  !l.plan?.easyPractice).map(l => l.completed_at.slice(0, 10)));
  if (requestedFocus === 'auto' && rollingDays.size >= 3) focus = 'skill';
  const easyPractice = focus === 'skill' || readiness === 'tired' || deload;
  const fatigue = fatigueDecision(logs, now);
  // A longer reviewed rest is never shortened to fit the regular-work cap. Defer that variation instead.
  const restFits = e => !reviewedClearance(p, e, now) || e.demandingStraightArm || p.exerciseClearances[e.id].added_load > 0 || p.
  exerciseClearances[e.id].restSeconds <= 180;
  const eligible = e => !!e && restFits(e) &&(!deload || !(e.advancedOnly || e.novelEccentric || e.demandingStraightArm)) &&(!e.advancedOnly ||
  reviewedClearance(p, e, now)) &&(!e.novelEccentric || reviewedClearance(p, e, now)) && hasEquipment(e,
  equipment) && !isBlocked(e, recovery);
  const catalog = exercises.filter(eligible), salt = hash(seed ?? now.toISOString().slice(0, 10));
  const blockStart = Date.parse(p.trainingBlock?.start || logs.find(l => l.plan?.planner === 'personal-coach-1')?.completed_at || now);
  const choose = pattern => {
    const candidates = catalog.filter(e =>(e.movementSubtype === pattern || e.movementPattern === pattern) &&(! ['pull',
    'chin'].includes(e.id) || p.pull >= 3 || variationEvidence(p, e, logs)));
    const rotation = p.trainingBlock?.rotations?.[pattern];
    const anchor = p.trainingBlock?.anchors?.[pattern] || logs.filter(l => Date.parse(l.completed_at) >= blockStart).flatMap(l => l.plan?.blocks
    || []).find(b => b.phase === 'work' &&(b.movementSubtype === pattern || b.movementPattern === pattern))?.id;
    const selected = candidates.find(e => e.id ===(rotation || anchor));
    if (selected) return selected;
    const reportedId = {
      horizontal_push: p.push >= 5 ? 'push': null, vertical_pull: p.pull >= 3 ? 'pull': null, squat: p.legs > 0 ? 'squat': null,
      core_anti_extension: p.core > 0 ? 'plank': null
    }
    [pattern];
    if (!candidates.some(e => variationEvidence(p, e, logs)) && reportedId) {
      const reported = candidates.find(e => e.id === reportedId);
      if (reported) {
        if (pattern === 'squat' && squatReportStep(p) && !logs.some(l =>(l.sets || []).some(s => s.calibration && s.performed_exercise_id ===
        'squat'))) {
          const harder = catalog.find(e => e.id === 'split');
          if (harder) return harder;
        }
        return reported;
      }
    }
    const ranked = candidates.filter(e => !e.advancedOnly || reviewedClearance(p, e, now)).sort((a, b) => Number(!!variationEvidence(p,
    b, logs)) - Number(!!variationEvidence(p, a, logs)) || Number(!!reviewedClearance(p, b, now)) - Number(!!reviewedClearance(p,
    a, now)) || a.level - b.level || a.id.localeCompare(b.id));
    if (pattern === 'horizontal_push' && !ranked.some(e => variationEvidence(p, e, logs))) return candidates.find(e => e.id === 'incline-push')
    || candidates.find(e => e.id === 'wall-push') || ranked[0];
    if (pattern === 'horizontal_pull' && !ranked.some(e => variationEvidence(p, e, logs))) return candidates.find(e => e.id === 'row') || ranked[
    0];
    return ranked[0];
  };
  const omissions = [], chosen = [];
  for (const slot of(focus === 'pull' && experiencedProfile(p) ? ['vertical_pull', 'horizontal_pull',
  ['squat', 'single_leg', 'hinge'], 'core_anti_extension', 'compression']: focus === 'lower' && experiencedProfile(p) ? ['squat', 'hinge',
  'single_leg', 'knee_flexion', 'calf', 'core_anti_extension']: templates[focus])) {
    const alternatives = Array.isArray(slot) ? slot: [slot];
    const order = alternatives.slice();
    if (alternatives.length === 3 && alternatives.every(x => legPatterns.includes(x))) {
      const shift = queueIndex % alternatives.length; order.push(...order.splice(0, shift));
    }
    const legSlot = alternatives.length === 3 && alternatives.every(x => legPatterns.includes(x));
    if (!legSlot && (queueIndex % 2 || (!chosen.some(e => e.movementPattern === 'horizontal_pull') &&
      alternatives.includes('vertical_pull')))) order.reverse();
    if (alternatives.includes('vertical_pull') && p.pull >= 3) order.sort((a, b) => Number(b === 'vertical_pull') - Number(a === 'vertical_pull')
    );
    const e = order.map(choose).find(Boolean);
    if (e && !chosen.some(x => x.id === e.id)) chosen.push(e);
    else omissions.push(alternatives.join('/'));
  }
  if (focus === 'core') chosen.splice(4);
  if (focus === 'full' && minutes >= 60) for (const pattern of['calf', 'core_lateral_stability']) {
    const e = choose(pattern);
    if (e) chosen.push(e);
  }
  // Additional assessed variations enrich experienced split sessions without transferring capacity.
  if (experiencedProfile(p) && ['pull', 'push'].includes(focus) && minutes >= 60) {
    const extras = catalog.filter(e => e.group === focus && !chosen.some(c => c.id === e.id) && variationEvidence(p,
    e, logs)).sort((a, b) => Number(!!b.advancedOnly) - Number(!!a.advancedOnly) || Number(a.novelEccentric) - Number(b.novelEccentric) || b.
    level - a.level);
    chosen.splice(2, 0, ... extras.slice(0, 2));
  }
  const volume = volumeBudget(p, logs, now), volumeRange = volume.range, previousVolume = volume.previous, plannedVolume = volume.planned;
  const volumeRoom = volume.room, countVolume = volume.count;
  const pendingPartial = logs.filter(l => l.plan?.queueItem === queueIndex && l.plan?.planner === 'personal-coach-1' && unresolvedDoses(l.plan,
  l.sets).length).at(- 1);
  let remainingDoses = [], unpackedDoses = [];
  if (requestedFocus === 'auto' && pendingPartial) {
    remainingDoses = unresolvedDoses(pendingPartial.plan, pendingPartial.sets);
    const remainingExercises = [... new Set(remainingDoses.filter(b => b.phase === 'work').map(b => b.id))].map(exercise);
    omissions.push(... remainingExercises.filter(e => !eligible(e)).map(e => e.movementSubtype));
    unpackedDoses.push(... remainingDoses.filter(b => !eligible(exercise(b.id)) || !doseAuthorized(p,
    b, now)));
    if (easyPractice) {
      unpackedDoses = remainingDoses.slice();
      chosen.splice(0);
      omissions.push(... remainingExercises.map(e => e.movementSubtype));
    } else chosen.splice(0, chosen.length, ... remainingExercises.filter(eligible));
  }
  if (focus === 'pull' && !chosen.some(e => /^(horizontal|vertical)_pull$/.test(e.movementPattern))) return {
    ... gate, blocked: true, blocks: [], reasonHe: 'אין ציוד משיכה מתאים או שדפוס המשיכה עדיין בהתאוששות.',
    why: 'אין ציוד משיכה מתאים או שדפוס המשיכה עדיין בהתאוששות.', reason: 'אין ציוד משיכה מתאים או שדפוס המשיכה עדיין בהתאוששות.'
  };
  const allocation = budgets[minutes], blocks = [];
  const add =(id, he, phase, seconds, section, cue = '', extra = {
  }) => {
    if (seconds > 0) blocks.push( {
      id, he, en: he, phase, seconds, section, cue, target: null, ... extra
    })
  };
  const fill =(section, seconds) => add(section + '-rest', 'מנוחה והכנה', 'rest', Math.min(300, seconds),
  section, 'להמשיך רק כשהנשימה והשליטה נוחות.');
  const upper = chosen.some(e => ['push', 'pull'].includes(e.group));
  const ramp = minutes === 30 ? [60, 120, 120]: minutes === 45 ? [120, 120, 120]: minutes === 60 ? [120,
  120, 180]: [120, 180, 180];
  add('ramp-raise', 'העלאת דופק נינוחה', 'warm', ramp[0], 'warmup', 'הליכה במקום בקצב שמאפשר שיחה.');
  add('ramp-mobilize', 'הפעלה ותנועתיות', 'warm', ramp[1], 'warmup', upper ?
  '5–8 חזרות נוחות של תנועת שכמות, הכנת שורשי כף היד ותנועת ירך וקרסול.': '5–8 חזרות נוחות של הנעת קרסול, ירך וסקוואט בטווח נוח.');
  add('ramp-rehearse', 'חזרה קלה לקראת התרגול', 'warm', ramp[2], 'warmup', (
    `סט קל ללא עייפות של תרגיל הסקיל ושל ` +
    `${chosen.slice(0, 2).map(e => e.he).join(' ו־')}` +
    `.`
  ));
  const aliases = {
    'first-pullup': 'first-pull', 'first-pushup': 'first-push'
  };
  // Only catalogued preparation drills; profile gates never unlock advanced skills.
  const candidateTrack = skillTrack || aliases[p.skillGoal] || p.skillGoal;
  const compatible = id => skillFocusOverride || ! ['lower', 'core', 'push', 'pull'].includes(focus) || skills.find(s => s.id === id)?.type ===(
  focus === 'lower' ? 'legs': focus);
  const achievedRequest = skills.some(s => s.id === candidateTrack) && skillState(p, candidateTrack).achieved;
  const requestedTrack = compatible(candidateTrack) ? candidateTrack: null;
  const preparations = [ {
    id: 'hspu', drill: 'pike-push', ready: p.push >= 10 && p.core >= 30
  }, {
    id: 'first-push', drill: 'wall-push', ready: p.push >= 1
  }, {
    id: 'first-pull', drill: 'active-hang', ready: p.core >= 20
  }, {
    id: 'muscle-up', drill: 'scap-pull', ready: p.pull >= 8 && p.push >= 8
  }, {
    id: 'planche', drill: 'scap-push', ready: p.push >= 10 && p.core >= 20
  }, {
    id: 'back-lever', drill: 'scap-pull', ready: p.pull >= 5 && p.core >= 20
  }, {
    id: 'human-flag', drill: 'side-plank', ready: p.pull >= 8 && p.core >= 20
  }, {
    id: 'lsit', drill: 'support', ready: p.push >= 10 && p.core >= 20
  }, {
    id: 'front-lever', drill: 'scap-pull', ready: p.pull >= 5 && p.core >= 20
  }, {
    id: 'pistol', drill: 'single-squat', ready: p.legs >= 20
  }, {
    id: 'handstand', drill: 'scap-push', ready: p.push >= 10 && p.core >= 30
  }];
  const extraTrackIds = new Set( ['first-push', 'first-pull', 'muscle-up', 'planche', 'back-lever',
  'human-flag']);
  const available = preparations.filter(t => compatible(t.id) &&(!extraTrackIds.has(t.id) || t.id === 'muscle-up') && !skillState(p,
  t.id).achieved && t.ready && eligible(exercise(t.drill)));
  const previous = logs.at(- 1)?.plan?.skillTracks?.[0]?.id;
  const rotating = available.filter(t => t.id !== previous);
  const selection = achievedRequest ? null: requestedTrack ? preparations.find(t => t.id === requestedTrack && t.ready && eligible(exercise(t.
  drill))):(rotating.length ? rotating: available)[salt %(rotating.length || available.length)];
  let track = skills.find(s => s.id ===(requestedTrack || selection?.id));
  let skillExercise = selection && exercise(selection.drill);
  const skillTracks = [];
  if (pendingPartial && requestedFocus === 'auto') {
    let usedSkill = 0;
    const resumedSkills = remainingDoses.filter(b => b.phase === 'skill');
    for (const b of resumedSkills) {
      if (easyPractice || b.skill && skillState(p, b.skill).achieved || !eligible(exercise(b.id)) || !doseAuthorized(p,
      b, now) || b.reviewedExecution && !volumeRoom(exercise(b.id))) {
        if (!unpackedDoses.includes(b)) unpackedDoses.push(b);
        continue;
      }
      const rest = b.reviewedExecution ? p.exerciseClearances[b.id].restSeconds: 90;
      if (usedSkill + b.seconds +(usedSkill ? rest: 0) > allocation[1]) {
        unpackedDoses.push(b);
        continue;
      }
      if (usedSkill) {
        fill('skill', rest);
        usedSkill += rest;
      }
      blocks.push( {
        ... b
      });
      if (b.reviewedExecution) countVolume(exercise(b.id));
      usedSkill += b.seconds;
    }
    skillTracks.push(...(pendingPartial.plan.skillTracks || []).filter(t => blocks.some(b => b.phase === 'skill' && b.skill === t.id)));
  } else if (p.skillSelections && !skillTrack) {
    const ids = focusSkills(p, focus, skillChoice, allocation[1], logs).filter(compatible);
    let usedSkill = 0;
    for (const[index, id] of ids.entries()) {
      const selected = skills.find(s => s.id === id), state = skillState(p, id), stage = selected.stages[state.stage],
      preparation = preparations.find(t => t.id === id);
      let drill = exercise(stage.exerciseId);
      // Stage placement does not authorize its drill. Keep the selected track with
      // its conservative preparation when readiness or clearance is missing.
      const supporting = !eligible(drill) || !preparation?.ready && !reviewedClearance(p, drill, now) || deload && drill.advancedOnly;
      if (supporting) drill = exercise(preparation?.drill);
      drill = drill && chooseVariation(p, drill.id, {logs, equipment, now});
      const seconds = ids.length === 2 ?(index === 0 ? Math.floor(allocation[1] * .57): allocation[1] - Math.floor(allocation[1] * .57)):
      allocation[1];
      // Advanced catalogue entries remain behind review; a stage confirmation is not technical clearance.
      const recoveryTypes = selected.id === 'human-flag' || selected.id === 'muscle-up' ? ['pull', 'press']: selected.type === 'legs' ? ['squat',
      'single_leg']: [selected.type === 'pull' ? 'pull': 'press'];
      if (!drill || !eligible(drill) || recoveryTypes.some(t => blockedPatterns.has(t))) {
        add('skill-review-' + id, selected.he + ' · שלב ' +(state.stage + 1), 'recovery', Math.min(120, seconds),
        'skill', 'נדרשים ציוד מתאים, התאוששות ובדיקת התרגיל לפני תרגול.');
        usedSkill += seconds;
        continue;
      }
      const reviewed = drill.advancedOnly && reviewedClearance(p, drill, now) && !deload;
      const dose = variationPrescription(p, drill, logs, {
        easy: !reviewed || readiness === 'tired' || fatigue, now
      }), work = dose.seconds, restSeconds = reviewed ? p.exerciseClearances[drill.id].restSeconds : 150;
      const firstRecovery = recoveryBefore(blocks, {...dose, restSeconds}, 0);
      const attemptBudget = Math.max(0, seconds-firstRecovery);
      const attempts = reviewed ? Math.min(readiness === 'tired' || fatigue ? 1 : 5, volumeRoom(drill),
      p.exerciseClearances[drill.id].sets, Math.floor((attemptBudget + restSeconds) /(work +
      restSeconds))): dose.assessment ? 1: Math.min(4, Math.floor((attemptBudget + restSeconds) /(work + restSeconds))),
      target = dose.target;
      if (attempts < 1 || work > seconds) {
        add('skill-time-' + id, 'נדרש זמן לתרגול שנבדק', 'recovery', Math.min(120, seconds), 'skill',
        'אין די זמן לעבודה ולמנוחה שנבדקו; לא מקצרים מנוחה.');
        usedSkill += seconds;
        continue;
      }
      if (firstRecovery) fill('skill', firstRecovery);
      const why =(reviewed ? 'שלב ': 'הכנה לשלב ') +(state.stage + 1) + ' · ' + selected.he + ' · לעצור בירידת שליטה.';
      for (let i = 0;
      i < attempts;
      i++) {
        if (reviewed) countVolume(drill);
        add(drill.id, drill.he, 'skill', work, 'skill', why, {
          ... dose, phase: 'skill', section: 'skill', restSeconds, seconds: work, target, skill: id, skillStage: state.stage,
          skillName: selected.he, stageNumber: state.stage + 1, cue: why, round: i + 1, set: i + 1
        });
        if (i < attempts - 1) fill('skill', restSeconds);
      }
      usedSkill += firstRecovery + attempts * work +(attempts - 1) * restSeconds;
      skillTracks.push( {
        id, name: selected.he, stage: state.stage, stageNumber: state.stage + 1, exerciseId: drill.id, attempts,
        seconds: firstRecovery + attempts * work +(attempts - 1) * restSeconds, why, prerequisites: selected.prerequisites,
        preparationOnly: !reviewed, autoUnlock: false
      });
    }
    skillExercise = skillTracks.length ? exercise(skillTracks[0].exerciseId): null;
    track = skills.find(s => s.id === skillTracks[0]?.id);
  } else {
    skillExercise = skillExercise && chooseVariation(p, skillExercise.id, {logs, equipment, now});
    if (skillExercise) {
      const attempts = 1, dose = variationPrescription(p, skillExercise, logs, {
        easy: true, now
      }), work = dose.seconds;
      add(skillExercise.id, skillExercise.he, 'skill', work, 'skill', 'הכנה קלה בלבד; לתעד תנאים ועתודה ללא מבחן מרבי.',
      {
        ... dose, phase: 'skill', section: 'skill', skill: track.id, skillStage: 0, round: 1, set: 1
      });
      skillTracks.push( {
        id: track.id, exerciseId: skillExercise.id, attempts, prerequisites: track.prerequisites, preparationOnly: true,
        autoUnlock: false
      });
    } else if (!achievedRequest) {
      add('skill-teaching', 'הכנה ולמידת דרישות הסקיל', 'recovery', Math.min(120, allocation[1]), 'skill',
      track?.prerequisites.join(' · ') || 'טרם דווחה יכולת מתאימה להכנת סקיל; ללמוד שליטה ויציאה בטוחה ללא ניסיונות מאומצים.');
    }
  }
  // Aggregate demanding skill exposure before strength allocation. Essentials pack first.
  for (const b of blocks.filter(b => ['work', 'skill'].includes(b.phase))) {
    const choice = chooseVariation(p, b.sourceExerciseId || b.id, {logs, equipment, now});
    if (choice) Object.assign(b, {
      family: choice.family, tier: choice.options.find(o => o.exerciseId === b.id)?.tier,
      recommendedTier: choice.recommendedTier, options: choice.options, variationReason: choice.variationReason,
      sourceExerciseId: b.sourceExerciseId || b.id
    });
  }
  const skillWork = blocks.filter(b => b.phase === 'skill');
  // Unused skill time can fund complete strength sets, within the same weekly and per-exercise ceilings.
  const strengthBudget = allocation[2] + Math.max(0, allocation[1] - blocks.filter(b => b.section === 'skill').reduce((sum,
  b) => sum + b.seconds, 0));
  const accessory = e => ['support', 'scapular_control', 'calf', 'core_lateral_stability', 'compression',
  'trunk_flexion', 'locomotion'].includes(e.movementPattern);
  for (let i = chosen.length - 1;
  i >= 0;
  i--) if (p.capabilityCheck?.results?.length && accessory(chosen[i]) && !variationEvidence(p, chosen[i],
  logs)) {
    omissions.push(chosen[i].movementSubtype);
    chosen.splice(i, 1);
  }
  chosen.splice(0, chosen.length, ...chosen.map(e => pendingPartial ? e : chooseVariation(p, e.id, {logs, equipment, now})).filter(e => e && eligible(e)));
  chosen.sort((a, b) => Number(accessory(a)) - Number(accessory(b)) || Number(a.group === 'core') - Number(b.group === 'core') ||(previousVolume[
  volumeFamily(a)] || 0) -(previousVolume[volumeFamily(b)] || 0));
  const baseRounds = minutes === 30 || easyPractice ? 2: 3, rounds = deload ? Math.max(1, Math.floor(baseRounds * .5)): fatigue ? Math.max(1,
  baseRounds - 1): baseRounds;
  // Reserve two provisional sets for every main movement when the full minimum fits.
  // Tight sessions retain template priority instead of reserving an impossible later dose.
  const minimumCost = x => {
    const d = variationPrescription(p, x, logs, {
      easy: easyPractice, now
    }), n = d.provisional && !accessory(x) && rounds >= 2 && volumeRoom(x) >= 2 ? 2: 1;
    return 30 + n * d.seconds +(n - 1) *(x.group === 'core' ? 90: 150);
  };
  const reserveMinimumSets = chosen.reduce((sum, x) => sum + minimumCost(x), 0) <= strengthBudget;
  let used = 0;
  const essentialIds = [], accessoryIds = [];
  for (const e of chosen) {
    const overlap = skillWork.filter(b => b.id === e.id || b.reviewedExecution && b.loadingTags.some(t => e.loadingTags.includes(t)));
    const consumed = overlap.filter(b => b.id === e.id && !b.assessment).length;
    const original = remainingDoses.filter(b => b.phase === 'work' && b.id === e.id && eligible(e) && doseAuthorized(p,
    b, now));
    if (pendingPartial && requestedFocus === 'auto' && !original.length) continue;
    let dose = original[0] || variationPrescription(p, e, logs, {
      easy: easyPractice, now
    });
    const rest = e.demandingStraightArm || dose.added_load > 0 ? Math.max(180, Math.min(300, dose.restSeconds || 240)): dose.reviewedExecution ?
    Math.min(180, dose.restSeconds || 180): dose.trainingStatus === 'established' ? 180: dose.assessment ? 90: e.group === 'core' ? 90: 150;
    let n = original.length ? Math.min(original.length, volumeRoom(e)): Math.min(volumeRoom(e), Math.max(0,
    rounds - consumed));
    if (e.advancedOnly || e.novelEccentric) n = Math.min(n, Math.max(0, p.exerciseClearances[e.id].sets - skillWork.filter(b => b.id === e.id).
    length));
    if (!original.length && (dose.source === 'conservative-default' || p.experience === 'new')) n = Math.min(n, 2);
    if (dose.assessment) n = overlap.length ? 0: 1;
    const setupSeconds = recoveryBefore(blocks, e);
    const cost = count => setupSeconds + Array.from( {
      length: count
    },(_, r) => original[r]?.seconds ?? dose.seconds).reduce((sum, seconds) => sum + seconds, 0) + Math.max(0,
    count - 1) * rest;
    const laterEssentials = chosen.slice(chosen.indexOf(e) + 1).filter(x => !skillWork.some(b => b.id === x.id && !b.assessment));
    const reserved = pendingPartial ? 0: laterEssentials.reduce((sum, x) => {
      const next = variationPrescription(p, x, logs, {
        easy: easyPractice, now
      }), minimum = reserveMinimumSets && next.provisional && !accessory(x) && rounds >= 2 && volumeRoom(x) >= 2 ? 2: 1;
      return sum + 30 + minimum * next.seconds +(minimum - 1) *(x.group === 'core' ? 90: 150);
    }, 0);
    while (n > 0 && used + cost(n) + reserved > strengthBudget) n--;
    if (dose.provisional && !accessory(e) && !original.length && rounds >= 2 && n < 2) n = 0;
    if (!n) {
      omissions.push(e.movementSubtype);
      unpackedDoses.push(... original);
      continue;
    }
    add('setup-' + e.id, 'מנוחה, הכנה וחזרה קלה', 'rest', setupSeconds, 'strength');
    for (let r = 1;
    r <= n;
    r++) {
      const d = original[r - 1] || dose;
      blocks.push( {
        ... d, calibration: original.length ? !!d.calibration: !!d.provisional && r === n, cue: d.provisional && r === n ?
        'סט כיול: לתעד ביצוע נקי ועתודה, ללא מבחן מרבי. ' + d.cue: d.cue, restSeconds: rest, essential: !accessory(e),
        accessory: accessory(e), round: d.round || r, set: r
      });
      if (!d.assessment) countVolume(e);
      if (r < n) add(e.id + '-rest', 'מנוחה והכנה', 'rest', rest, 'strength');
    }
    used += cost(n);
    (accessory(e) ? accessoryIds: essentialIds).push(e.id);
    if (original.length > n) {
      omissions.push(e.movementSubtype);
      unpackedDoses.push(... original.slice(n));
    }
  }
  if (!fatigue && !easyPractice) add('conditioning', 'הליכה נינוחה לסיום', 'recovery', allocation[3],
  'conditioning', 'הליכה או צעידה בקצב שיחה, ללא כשל או בדיקת סקיל.');
  add('cool', 'שחרור ונשימה', 'cool', allocation[4], 'cooldown', 'הליכה איטית, נשימה ו־1–3 תנועות נוחות בטווח ללא כאב.');
  // Allocation failures describe doses, not necessarily missing patterns: another
  // variation or the skill block may already cover the same pattern.
  const trainedPatterns = new Set(blocks.filter(b => ['work', 'skill'].includes(b.phase)).flatMap(b => {
    const e = exercise(b.id);
    return[b.movementPattern, b.movementSubtype, e?.movementPattern, e?.movementSubtype].filter(Boolean);
  }));
  omissions.splice(0, omissions.length, ... new Set(omissions.filter(p => !p.split('/').some(k => trainedPatterns.has(k)))));
  for (const b of blocks.filter(b => ['work', 'skill'].includes(b.phase) && !b.family)) {
    const choice = chooseVariation(p, b.id, {logs, equipment, now});
    if (choice) Object.assign(b, {
      family: choice.family, tier: choice.options.find(o => o.exerciseId === b.id)?.tier,
      recommendedTier: choice.recommendedTier, options: choice.options, variationReason: choice.variationReason,
      sourceExerciseId: b.sourceExerciseId || b.id
    });
  }
  // Render the final coverage, separately from the conservative allocation ledger used while packing.
  for (const key of Object.keys(plannedVolume)) delete plannedVolume[key];
  for (const b of blocks.filter(b => ['work', 'skill'].includes(b.phase) && executionBlock(b).countsAsStrength)) countVolume(b);
  const calibration = blocks.some(b => b.calibration);
  const totalSeconds = blocks.reduce((sum, b) => sum + b.seconds, 0);
  const mainDuration = blocks.filter(b => !['warm', 'cool'].includes(b.phase)).reduce((sum, b) => sum + b.seconds, 0);
  const shortReason = mainDuration < minutes * 60 ? 'האימון קצר מהמתוכנן כי נשמרו מגבלות הנפח, המנוחה וההתאוששות.' : '';
  const summaryHe = (
    `היום אימון ` +
    `${calibration ? 'כיול · ': ''}` +
    `${focusLabels[focus]}` +
    `. ` +
    `${shortReason ||(fatigue || easyPractice ? 'הנפח מופחת כדי לאפשר התאוששות.': 'הנפח מותאם ליכולת המדווחת, לציוד ולתקציב השבועי.')}` +
    ` שומרים עתודה ועוצרים בכאב או בירידת שליטה.`
  );
  const volumeExplanation = (
    `תקציב שבועי התחלתי: ` +
    `${volumeRange[0]}` +
    `–` +
    `${volumeRange[1]}` +
    ` חשיפות מרביות למשפחת תנועות, כולל סקיל והכנה בעומס. זהו גבול עומס, לא הוכחה לאימון כוח מספיק. ` +
    `${Object.entries(plannedVolume).map(( [k, n]) => (
      `${( {
        pull: 'משיכה', push: 'דחיקה', knee: 'ברך', hip: 'ירך', core: 'ליבה'
      })[k] || 'עזר'}` +
      `: ` +
      `${previousVolume[k] || 0}` +
      ` בוצעו בשבעת הימים האחרונים ועוד ` +
      `${n}` +
      ` היום`
    )).join('; ')}` +
    `. חשיפה לתנועה אינה בהכרח סט כוח מאתגר; בודקים בנפרד מאמץ ומספר ימי עבודה. ` +
    (blocks.some(b => ['work','skill'].includes(b.phase) && !b.provisional && !b.assessment && b.setup) ?
      `מינון שנבדק נשען רק על ביצוע מתועד באותה וריאציה ובאותם תנאים. יעדי פתיחה אחרים שמרניים. ` :
      `זה מינון פתיחה שמרני לפי הדיווח שלך; נתאים אותו אחרי שתתעד ביצוע. `) +
    `טווחי המטרה: ` +
    `כוח 3–6, בניית שריר 6–12, סיבולת 12–20; ליבה והחזקות בטווח נפרד. תוצאה נמוכה אינה מוגבהת כדי ` +
    `להגיע לטווח: נדרשת בדיקת וריאציה קלה יותר. אין העברת אישורי ביצוע בין וריאציות; דיווח סקוואט ` +
    `גבוה מאפשר הערכה זמנית שמרנית למכרע סטטי בלבד. תרגילי עזר מקבלים טווח נפרד לפי הדפוס, בלי ` +
    `להגביה תוצאה שנמדדה.`
  );
  const rationaleHe = (
    `${calibration ? 'אימון כיול · ': ''}` +
    `${focusLabels[focus]}` +
    ` לפי הציוד, היכולת המדווחת וזמן ההתאוששות לכל דפוס. ` +
    `${volumeExplanation}` +
    ` דפוסי היום: ` +
    `${[... new Set(blocks.filter(b => b.phase === 'work').map(b => b.he))].join(', ')}` +
    `. ` +
    `${skillTracks.some(t => !t.preparationOnly) ? 'תרגול סקיל בשלב שנבדק; סטים מאומצים נכללים בתקציב המשיכה או הדחיקה.': skillExercise ? 'הכנת ' +
    track.he + ' באמצעות ' + skillExercise.he + ' נבחרה לפי יכולת הבסיס והציוד; זו הכנה בלבד לפני הכוח.':
    'הסקיל הוחלף בלמידה כי אין הכנה מתאימה ליכולת ולציוד.'}` +
    ` 48–72 שעות הן ברירת מחדל שמרנית לפי עומס בפועל ורקמות משותפות, ואינן אישור התאוששות; שומרים ` +
    `עתודה ועוצרים בירידת שליטה.` +
    `${fatigue ? ' הפחתת נפח באימון זה בלבד. בעקבות שני דיווחים קשים או ירידה בביצוע הופחת מספר הסטים והגמר הוחלף במנוחה.': ''}` +
    `${omissions.length ? ' דפוסים שלא כוסו: ' + omissions.map(p => p.split('/').map(k => patternLabels[k] || 'דפוס תנועה').join(' / ')).join(', ') +
    '.': ''}`
  );
  return finishExecution({
    ... gate, planner: 'personal-coach-1', focus, requestedFocus, queueItem: requestedFocus === 'auto' &&(pendingPartial || focus === queue[
    queueIndex % queue.length]) ? queueIndex: null, essentialIds, skillTracks, easyPractice, deload,
    sessionVolumeReduction: fatigue, accessoryIds, remainingDoses, unpackedDoses, trainingBlock: {
      start: new Date(blockStart).toISOString(), reviewAfterWeeks: [4, 6], anchors: Object.fromEntries(chosen.map(e => [e.movementSubtype,
      e.id]))
    }, volume: {
      range: volumeRange, previous: previousVolume, planned: plannedVolume
    }, blockedPatterns: [... blockedPatterns], blocks, requested_minutes: minutes, minutes: totalSeconds / 60,
    total_seconds: totalSeconds, unused_seconds: minutes * 60 - totalSeconds, shortReason, calibration,
    phases: phases.map((id, i) => {
      const seconds = blocks.filter(b => b.section === id).reduce((s, b) => s + b.seconds, 0);
      return {
        id, labelHe: labels[i], seconds, minutes: seconds / 60
      };
    }), title: focusLabels[focus], titleHe:(calibration ? 'אימון כיול · ': '') + focusLabels[focus],
    titleEn: focus, sets: blocks.filter(b => b.phase === 'work' || b.phase === 'skill').length, rounds,
    exerciseIds: essentialIds, omissions, missing_pull: ! ['horizontal_pull', 'vertical_pull'].some(p => trainedPatterns.has(p)),
    recovery: !essentialIds.length || focus === 'skill', summaryHe, rationaleHe, rationaleEn:
    'Skill practice before strength, with pattern-specific recovery and explicit equipment gaps.', reason: rationaleHe,
    reasonHe: rationaleHe, why: rationaleHe, adaptation: {
      status: 'variation-evidence', approvedProgressions: [], automaticProgression: false, reasonHe: rationaleHe
    }, date: now.toISOString()
  }, {profile: p, logs, now, structure});
}
