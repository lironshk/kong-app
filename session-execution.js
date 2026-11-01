import {validateExecution, loadedStep} from './execution-validation.js?v=31';
import {exercises} from './data/exercises.js?v=31';
import {familyOf} from './data/exercise-families.js?v=31';
import {volumeFamily} from './training-volume.js?v=31';
import {recoveryBefore} from './training-evidence.js?v=31';
import {doseText} from './training-safety.js?v=31';
import {applyExtras, sessionExtras, mainSeconds} from './session-extras.js?v=31';
import {buildRounds, sessionStructure, sessionHeader, legPatterns} from './session-structure.js?v=31';
import {chooseVariation, variationBlock} from './variation-choice.js?v=31';
import {volumeBudget, weeklyWorkSummary, posteriorAssessmentOptions} from './training-volume.js?v=31';
import {isBlocked, recoveryState, doseAuthorized, lighterActive} from './training-evidence.js?v=31';
const work = b => ['work', 'skill'].includes(b.phase);
const by = id => exercises.find(e => e.id === id);
export function movementRole(b) {
  if (b.substitutionIntent === 'preparation' || /preparation|grounded-pike/.test(b.id)) return 'preparation';
  if (b.phase === 'skill' || b.demandingStraightArm || /explosive|jump-squat|wall-walk|handstand/.test(b.id)) return 'skill';
  if (b.group === 'core' || b.accessory || ['mobility', 'scapular_control', 'shoulder_external_rotation', 'support', 'calf',
    'hip_external_rotation', 'hip_abduction', 'locomotion', 'trunk_flexion', 'compression'].includes(b.movementPattern) ||
    /triceps-extension|skull-crusher|biceps-curl/.test(b.id)) return 'accessory';
  return 'compound';
}
export function executionBlock(block) {
  const b = {...block};
  if (!work(b)) return {...b, ...(['warm', 'cool'].includes(b.phase) ? {executionRole: b.phase} : {})};
  const source = by(b.sourceExerciseId || b.id), sameFamily = familyOf(source?.id)?.family.id === familyOf(b.id)?.family.id;
  b.substitutionIntent ||= source?.id === b.id ? 'original' : sameFamily ? 'preserves-movement' : 'preparation';
  b.executionRole = b.assessment ? 'preparation' : b.executionRole || movementRole(b);
  if (b.executionRole === 'preparation') {b.accessory = false; b.essential = false;}
  b.gripLimited = (b.loadingTags || []).includes('grip');
  b.countsAsStrength = !b.assessment && b.substitutionIntent !== 'preparation' && b.executionRole !== 'preparation' &&
    !['mobility', 'scapular_control', 'shoulder_external_rotation', 'support'].includes(b.movementPattern);
  b.stimulusStatus = b.countsAsStrength && !b.provisional && !b.assessment && b.source !== 'conservative-default' ? 'assessed-dose' : 'movement-practice';
  b.side_allocation = b.perSide ? 'total_both_sides' : null;
  if (b.assessment && !b.familiarization) {
    // One small attempt, with an explicit assistance/entry route. The window is never a work target.
    b.familiarization = true; b.attemptLimit = 1;
    b.setup ||= by(b.id)?.instructions?.[0] || 'מתקן יציב לפי ההוראות';
    b.assistance ||= 'תמיכה לפי הוראות התרגיל; אם אין מנח נוח, לדלג ולבדוק בהדרכה';
    b.range_of_motion ||= 'טווח קטן ונוח לפי ההוראות';
    b.execution_standard ||= 'ללא כאב, ללא אובדן מנח ועם עתודה';
    b.attemptTarget = (b.unit === 'seconds' ? 5 : /pike|jump|burpee/.test(b.id) ? 2 : 3) * (b.perSide ? 2 : 1);
    b.stopRule = 'לעצור מיד בכאב, באובדן מנח או כשלא נשארת עתודה של כשלוש חזרות או שניות בשליטה.';
    b.nextDecision = 'לתעד ביצוע וסיוע; לפני סטים רגילים לבדוק יכולת בגרסה הזו. אם אין ניסיון נוח, לבחור הכנה בהדרכה.';
    b.cue = `היכרות קלה עם ${b.he}: ניסיון אחד בלבד, עד ${b.attemptTarget / (b.perSide ? 2 : 1)} ` +
      `${b.unit === 'seconds' ? 'שניות' : 'חזרות'}${b.perSide ? ' לכל צד' : ''}. ` +
      `${by(b.id)?.cue || ''} ${b.stopRule} החלון כולל הכנה ומנוחה; אין לעבוד ברצף עד סופו. ${b.nextDecision}`;
  }
  b.workSeconds = b.target > 0 ? b.unit === 'seconds' ? b.target :
    b.target * (b.tempo.eccentric + b.tempo.concentric + b.tempo.pause) : 0;
  b.overheadSeconds = b.target > 0 ? Math.max(0, b.seconds - b.workSeconds) : b.seconds;
  b.doseText = doseText(b);
  return b;
}
const rank = {preparation: 0, skill: 0, compound: 1, accessory: 2};
const station = b => b.apparatus || b.equipment?.find(e => !['band', 'wall'].includes(e)) || b.equipment?.[0] || 'floor';
// Prefer one station. A floor exercise can be performed next to its partner's apparatus.
function pairGroups(groups) {
  const pending = groups.slice(), result = [];
  let number = 0;
  while (pending.length) {
    const a = pending.shift(), first = a[0].block;
    const choices = pending.filter(g => !(first.gripLimited && g[0].block.gripLimited) &&
      first.movementPattern !== g[0].block.movementPattern &&
      !(first.loadingTags || []).some(t => (g[0].block.loadingTags || []).includes(t)));
    const other = choices.find(g => station(g[0].block) === station(first)) ||
      choices.find(g => station(g[0].block) === 'floor' || station(first) === 'floor') || choices[0];
    if (!other) {result.push(...a); continue;}
    pending.splice(pending.indexOf(other), 1);
    const pairId = 'pair-' + (++number), shared = station(first) === 'floor' ? station(other[0].block) : station(first);
    for (const unit of [...a, ...other]) Object.assign(unit.block, {pairId, station: station(unit.block) === 'floor' ? shared : station(unit.block)});
    for (let i = 0; i < Math.max(a.length, other.length); i++) {
      if (a[i]) result.push(a[i]);
      if (other[i]) result.push(other[i]);
    }
  }
  return result;
}
export function orderExecution(blocks, {pair = true} = {}) {
  const prefix = [], units = [], ending = [];
  let current = null, before = [];
  for (const b of blocks) {
    if (work(b)) {current = {block: b, before, after: []}; units.push(current); before = [];}
    else if (['cool', 'recovery'].includes(b.phase)) {ending.push(b); current = null;}
    else if (b.phase === 'rest' && /setup/.test(b.id)) before.push(b);
    else if (current) current.after.push(b);
    else prefix.push(b);
  }
  units.sort((a, b) => rank[a.block.executionRole] - rank[b.block.executionRole] ||
    Number(b.block.phase === 'skill') - Number(a.block.phase === 'skill'));
  const compounds = units.filter(u => u.block.executionRole === 'compound');
  const groups = [...new Set(compounds.map(u => u.block.sourceSlot || u.block.id))]
    .map(key => compounds.filter(u => (u.block.sourceSlot || u.block.id) === key));
  const ordered = pair ? [...units.filter(u => rank[u.block.executionRole] === 0), ...pairGroups(groups),
    ...units.filter(u => u.block.executionRole === 'accessory')] : units;
  return [...prefix, ...ordered.flatMap(u => [...u.before, u.block, ...u.after]), ...before, ...ending];
}
function integrateLeg(plan, profile, logs, now) {
  const active = plan.blocks.filter(work), minutes = plan.requested_minutes ?? plan.minutes;
  if (!profile || minutes < 45 || plan.recovery || plan.easyPractice || plan.focus === 'skill' ||
    ['emom', 'interval', 'tabata', 'mobility'].includes(plan.format) ||
    active.some(b => b.countsAsStrength && legPatterns.includes(b.movementPattern))) return plan;
  const volume = volumeBudget(profile, logs, now), recovery = recoveryState(logs, now);
  active.filter(b => b.countsAsStrength).forEach(volume.count);
  for (const id of ['squat', 'hinge', 'bridge']) {
    const selected = chooseVariation(profile, id, {logs, now});
    if (!selected || isBlocked(selected, recovery) || !volume.room(selected)) continue;
    const dose = variationBlock(profile, {...selected, phase: 'work', section: 'strength'}, {logs, now, easy: true});
    if (!dose || dose.assessment) continue;
    const count = Math.min(2, volume.room(dose)), additions = [];
    additions.push({id: id + '-integrated-setup', he: 'מנוחה והכנה', phase: 'rest', section: 'strength', seconds: 30, target: null});
    for (let set = 1; set <= count; set++) additions.push(
      executionBlock({...dose, integratedLeg: true, note: 'תוספת רגליים לאימון; אינה בלוח המאמן.', set, round: set, restSeconds: 150}),
      {id: id + '-integrated-rest-' + set, he: 'מנוחה והכנה', phase: 'rest', section: 'strength', seconds: 150, target: null});
    let blocks = plan.blocks.slice();
    while (mainSeconds(blocks) + mainSeconds(additions) > minutes * 60) {
      // Make room for legs by removing later ordinary sets, never by shortening a reviewed rest or skill.
      const removable = blocks.findLast(b => b.phase === 'work' && !b.reviewedExecution &&
        b.executionRole !== 'skill' && b.executionRole !== 'preparation' &&
        blocks.filter(x => x.phase === 'work' && x.id === b.id).length > 1);
      if (!removable) break;
      const index = blocks.indexOf(removable), omitted = new Set([removable]);
      if (blocks[index + 1]?.phase === 'rest') omitted.add(blocks[index + 1]);
      if (blocks[index - 1]?.phase === 'rest' && /setup/.test(blocks[index - 1].id)) omitted.add(blocks[index - 1]);
      blocks = blocks.filter(b => !omitted.has(b));
    }
    if (mainSeconds(blocks) + mainSeconds(additions) > minutes * 60) continue;
    const at = blocks.findIndex(b => b.executionRole === 'accessory' || ['cool', 'recovery'].includes(b.phase));
    blocks.splice(at < 0 ? blocks.length : at, 0, ...additions);
    return {...plan, blocks};
  }
  return {...plan, legRestriction: 'הרגליים בהתאוששות, בתקציב שבועי מלא או ללא מינון בטוח בזמן שנבחר.'};
}
export function finishExecution(plan, {order = true, profile, logs = profile?.logs || [], now = new Date(), structure} = {}) {
  if (plan.blocked) return plan;
  const incapable = new Set(plan.blocks.filter(b=>b.assessmentCause==='explicit-inability' ||
    b.assessmentCause==='insufficient-capacity' && b.reportedCapacity != null));
  let blocks = plan.blocks.filter((b,i,all)=>!incapable.has(b) && !(b.phase==='rest' && incapable.has(all[i-1]))).map(executionBlock);
  const timed = ['emom', 'interval', 'tabata', 'mobility'].includes(plan.format);
  plan = integrateLeg({...plan, blocks}, profile, logs, now);
  blocks = plan.blocks;
  if (profile) {
    // Even a preparation may be logged as loaded work. Reserve its actual-work budget conservatively,
    // while countsAsStrength still keeps preparation out of compound-coverage claims.
    const budget = volumeBudget(profile, logs, now), omitted = new Set();
    for (const b of blocks.filter(work)) {
      if (!budget.room(b)) omitted.add(b); else budget.count(b);
    }
    blocks = blocks.filter((b, i, all) => !omitted.has(b) && !(b.phase === 'rest' &&
      (omitted.has(all[i - 1]) || /setup/.test(b.id) && omitted.has(all[i + 1]))));
    if (plan.slotAudit) plan = {...plan, slotAudit: plan.slotAudit.map(s => {
      const scheduledSets = blocks.filter(b => work(b) && b.sourceSlot === (s.sharedWith || s.slotKey)).length;
      return {...s, scheduledSets, ...(!scheduledSets ? {omissionReason: 'תקציב העבודה השבועי נוצל.'} : {})};
    })};
  }
  // Fixed-minute/interval formats retain their clock geometry; strength work alternates actual pairs.
  if (order) blocks = orderExecution(blocks, {pair: !timed});
  const chosenStructure = timed || plan.easyPractice || plan.recovery ? 'sets' :
    sessionStructure(profile, {structure, source: plan.sourceStructure, index: plan.queueItem ?? undefined});
  const minimumReserve = plan.readiness === 'tired' || plan.sessionVolumeReduction || plan.returnAfterBreak ||
    profile && lighterActive(profile, now) ? 4 : 3;
  const circuit = chosenStructure === 'rounds' ? buildRounds(blocks, profile, {minimumReserve}) : {blocks, structure: 'sets'};
  blocks = circuit.blocks;
  if (!timed) {
    const checked = validateExecution(blocks);
    if (checked.error) return {...plan, blocked:true, available:false, reason:checked.error, blocks:[], sets:0, total_seconds:0};
    blocks = checked.blocks;
    const budget = (plan.requested_minutes ?? plan.minutes) * 60;
    // Remove whole work units when the final geometry needs more recovery. Never shorten a required rest.
    let guard = blocks.length;
    while (mainSeconds(blocks) > budget && guard-- > 0) {
      const filler = blocks.findLast(b => b.phase === 'recovery');
      if (filler) {
        const cut = Math.min(filler.seconds, mainSeconds(blocks)-budget);
        filler.seconds -= cut;
        if (!filler.seconds) blocks = blocks.filter(b=>b!==filler);
        continue;
      }
      if (plan.rule_version && !plan.planner && plan.rounds > 1) {
        const lastRound = Math.max(...blocks.filter(work).map(b=>b.round || 1));
        if (lastRound > 1) {
          const omitted = new Set(blocks.filter(b=>work(b) && b.round===lastRound));
          blocks = validateExecution(blocks.filter((b,i,all)=>!omitted.has(b) && !(b.phase==='rest' && omitted.has(all[i-1])))).blocks;
          continue;
        }
      }
      const candidates = blocks.filter(work);
      const removable = candidates.findLast(b=>!b.reviewedExecution && !b.circuitId &&
        candidates.filter(x=>x.id===b.id).length>1) || candidates.findLast(b=>!b.reviewedExecution && !b.circuitId && !b.essential);
      if (!removable) return {...plan, blocked:true, available:false, blocks:[], sets:0, total_seconds:0,
        main_seconds:0, reason:'אין די זמן לעבודה ולמנוחות הבטוחות; לבחור משך ארוך יותר.'};
      const index = blocks.indexOf(removable), omitted = new Set([removable]);
      for (let i=index+1;i<blocks.length && blocks[i].phase==='rest';i++) omitted.add(blocks[i]);
      if (blocks[index-1]?.phase==='rest' && /setup|final-recovery/.test(blocks[index-1].id)) omitted.add(blocks[index-1]);
      blocks=validateExecution(blocks.filter(b=>!omitted.has(b))).blocks;
    }
  }

  const active = blocks.filter(work);
  // Select calibration after trimming, so the actual last provisional exposure earns evidence.
  if (!timed) for (const id of new Set(active.filter(b=>b.provisional && !b.assessment).map(b=>b.id))) {
    const candidates = active.filter(b=>b.id===id && b.provisional && !b.assessment);
    for (const b of candidates) b.calibration = b === candidates.at(-1);
    const last = candidates.at(-1);
    if (!last.cue.includes('סט כיול:')) last.cue='סט כיול: לתעד ביצוע נקי ועתודה, ללא מבחן מרבי. '+last.cue;
  }
  for (const id of new Set(active.map(b => b.pairId).filter(Boolean))) {
    const members = active.filter(b => b.pairId === id);
    if (new Set(members.map(b => b.id)).size < 2) for (const b of members) {delete b.pairId; delete b.station;}
  }
  const rehearsal = blocks.find(b => b.id === 'ramp-rehearse') || blocks.filter(b => b.phase === 'warm').at(-1);
  if (rehearsal && active.length) {
    const chosen = [...new Map(active.map(b => [b.id, b])).values()];
    rehearsal.rehearsalIds = chosen.map(b => b.id);
    rehearsal.cue = 'חזרה קלה ללא עייפות: ' + chosen.map(b => b.he).join(' · ') +
      '. לתרגל תנועה אחת קטנה ונוחה מכל תרגיל; בהחזקה, כניסה ויציאה עם תמיכה בלבד.';
  }
  const familiar = active.some(b => b.familiarization), preparation = active.some(b => b.substitutionIntent === 'preparation');
  const intro = familiar ? 'אימון היכרות מוגבל: אין צורך לעבוד לאורך חלון הזמן. ' : preparation ? 'אימון עם הכנה לתנועות מהלוח. ' : '';
  const sourceTitle = (plan.origin === 'coach' ? plan.sourceTitle : '') || plan.titleHe || plan.title || '';
  const compoundGroups = [...new Set(active.filter(b => b.countsAsStrength && b.executionRole === 'compound').map(b => b.group))];
  const groupNames = {push:'דחיקה',pull:'משיכה',legs:'רגליים',core:'ליבה'};
  const executionName = compoundGroups.length ? compoundGroups.map(g => groupNames[g] || g).join(' ו') : 'תנועה ויציבות';
  const titleHe = plan.origin === 'coach' && (preparation || familiar) ?
    `${preparation ? 'הכנה ו' : ''}${executionName} — לפי לוח ${plan.templateId}` :
    (familiar ? 'היכרות: ' : '') + sourceTitle;
  const strengthPatterns = [...new Set(active.filter(b => b.countsAsStrength).map(b => b.movementPattern))];
  const areas = [...new Set(active.filter(b => b.countsAsStrength && b.executionRole === 'compound').map(b => b.group))];
  const coverage = preparation ? areas.length ? ' כוח מורכב בפועל: ' +
    areas.map(k => ({push: 'דחיקה', pull: 'משיכה', legs: 'רגליים'})[k] || k).join(' · ') + '.' :
    ' הכנה ועזר בלבד; אין כאן סטים של כוח מורכב.' : '';
  const explain = value => titleHe + '. ' + intro + (value || '') + coverage;
  const total_seconds = blocks.reduce((n, b) => n + b.seconds, 0);
  const planned = {};
  for (const b of active) {const k = volumeFamily(b); planned[k] = (planned[k] || 0) + 1;}
  if (plan.sourceStructure === undefined) delete plan.sourceStructure;
  const result = {...plan, blocks, structure: circuit.structure, circuits: circuit.circuits || [],
    ...(circuit.structureNote ? {structureNote: circuit.structureNote} : {}), sessionHeader: sessionHeader({...plan, blocks}),
    weeklyWork:weeklyWorkSummary(logs, now), posteriorAssessmentOptions, sourceTitle,
    ...(plan.origin==='coach' ? {title:titleHe} : {}), sets: active.length,
    executionMode: familiar ? 'familiarization' : preparation ? 'adapted-preparation' : 'working', titleHe,
    summaryHe: intro + (plan.summaryHe || '') + coverage, reasonHe: explain(plan.reasonHe || plan.reason), strengthPatterns,
    ...('missing_pull' in plan ? {missing_pull: !strengthPatterns.some(p => /^(horizontal|vertical)_pull$/.test(p))} : {}),
    ...(plan.rationaleHe ? {rationaleHe: explain(plan.rationaleHe)} : {}), ...(plan.why ? {why: explain(plan.why)} : {}),
    ...(plan.volume ? {volume: {...plan.volume, planned}} : {}),
    ...(plan.phases ? {phases: plan.phases.map(p => {
      const seconds = blocks.filter(b => b.section === p.id || b.phase === p.id).reduce((n, b) => n + b.seconds, 0);
      return {...p, seconds, ...(p.minutes != null ? {minutes: seconds / 60} : {})};})} : {}),
    ...(plan.requested_minutes ? {minutes: total_seconds / 60} : {}),
    total_seconds, unused_seconds: (plan.requested_minutes ?? plan.minutes) * 60 - mainSeconds(blocks)};
  const final = applyExtras({...result, extrasAvailable: undefined}, sessionExtras(profile));
  if (profile && !final.blocked) {
    const budget = volumeBudget(profile, logs, now), reviewedCounts = {};
    for (const b of final.blocks.filter(loadedStep)) {
      if (b.reviewedExecution) {
        reviewedCounts[b.id] = (reviewedCounts[b.id] || 0) + 1;
        if (reviewedCounts[b.id] > (profile.exerciseClearances?.[b.id]?.sets || 0)) return {...final,blocked:true,
          available:false,blocks:[],sets:0,total_seconds:0,main_seconds:0,reason:'מספר הניסיונות הסופי חורג מהאישור האישי.'};
      }
      if (!doseAuthorized({...profile,logs},b,now) || !budget.room(b)) return {...final,blocked:true,available:false,blocks:[],sets:0,
        total_seconds:0,main_seconds:0,reason:'המינון הסופי חורג מהאישור האישי או מתקציב העומס השבועי.'};
      budget.count(b);
    }
  }
  if (final.main_seconds > (plan.requested_minutes ?? plan.minutes) * 60) return {...final, blocked:true, available:false,
    blocks:[], sets:0, total_seconds:0, main_seconds:0, reason:'נדרש יותר זמן לעבודה ולמנוחות הבטוחות.'};
  return final;
}
