import {exercises} from './data/exercises.js?v=32';
import {validateExecution} from './execution-validation.js?v=32';
import {workSeconds} from './training-evidence.js?v=32';
import {escapeHTML as esc} from './ui.js?v=32';
export const sessionExtras = p => ({warmup: p?.sessionExtras?.warmup !== false, cooldown: p?.sessionExtras?.cooldown !== false});
export const isExtra = b => b.extra === true || ['warm', 'cool'].includes(b.phase) || ['warmup', 'cooldown'].includes(b.section);
export const mainSeconds = blocks => blocks.filter(b => !isExtra(b)).reduce((n, b) => n + b.seconds, 0);
export const rampUpNotice = 'בלי חימום, נוסיף סט הכנה קצר לפני התרגיל הראשון.';
const demanding = b => b.phase === 'skill' || b.advancedOnly || b.novelEccentric || b.level >= 4 || b.demandingStraightArm ||
  b.executionRole === 'skill' || /explosive|jump-squat|wall-walk|handstand/.test(b.id);
export function addRampUps(blocks) {
  const patterns = new Set(blocks.filter(demanding).map(b => b.movementPattern).filter(Boolean));
  const seen = new Set(), result = [];
  for (const b of blocks) {
    if (['work', 'skill'].includes(b.phase) && patterns.has(b.movementPattern) && !seen.has(b.movementPattern)) {
      seen.add(b.movementPattern);
      // A different, unloaded task rehearses the region without repeating the demanding exposure.
      const id = b.group === 'pull' ? 'prone-w' : b.group === 'legs' ? 'march' : 'cat-cow';
      const e = exercises.find(e => e.id === id), target = Math.max(1, Math.min(3, Math.floor((b.target || b.attemptTarget || 2) / 2)));
      const ramp = {...e, phase:'warm', section:'warmup', extra:true, rampUp:true, he:'סט הכנה קצר',
        target, assessment:false, countsAsStrength:false, loadedPreparation:false, preparationFor:b.id,
        rehearsalPattern:b.movementPattern,
        rir:e.unit === 'reps' ? 'לפחות חמש' : null,
        technicalReserve:e.unit === 'seconds' ? 'לפחות 5 שניות של שליטה' : null,
        setup:e.instructions[0], assistance:'תמיכה או סיוע לפי הוראות ההכנה; ללא עומס מתקדם',
        cue:`הכנה קלה: ${e.he}. ${e.instructions.join(' ')} תמיכה או סיוע לפי הצורך; אין לבצע את הסקיל עצמו.`,
        restSeconds:45};
      ramp.seconds = workSeconds(ramp, target);
      result.push(ramp, {id:b.id+'-ramp-rest', he:'מנוחה אחרי הכנה', phase:'rest', section:'warmup',
        extra:true, seconds:45, target:null});
    }
    result.push(b);
  }
  return result;
}
export function applyExtras(plan, preferences = {warmup: true, cooldown: true}) {
  const available = plan.extrasAvailable || {
    warmup: plan.blocks.filter(b => b.phase === 'warm' && !b.rampUp), cooldown: plan.blocks.filter(b => b.phase === 'cool')
  };
  let blocks = plan.blocks.filter(b => !isExtra(b));
  blocks = preferences.warmup ? [...available.warmup, ...blocks] : addRampUps(blocks);
  if (preferences.cooldown) blocks.push(...available.cooldown);
  const validation = validateExecution(blocks);
  if (validation.error) return {...plan, blocked:true, available:false, reason:validation.error, blocks:[], sets:0, total_seconds:0};
  blocks = validation.blocks;
  const seconds = kind => blocks.filter(b => kind === 'cooldown' ? b.phase === 'cool' : isExtra(b) && b.phase !== 'cool')
    .reduce((n, b) => n + b.seconds, 0);
  const warmup_seconds = seconds('warmup'), cooldown_seconds = seconds('cooldown'), main_seconds = mainSeconds(blocks);
  const total_seconds = blocks.reduce((n, b) => n + b.seconds, 0), budget = (plan.requested_minutes ?? plan.minutes) * 60;
  return {...plan, blocks, extrasAvailable: available, sessionExtras: {...preferences}, main_seconds,
    warmup_seconds, cooldown_seconds, extra_seconds: warmup_seconds + cooldown_seconds, total_seconds,
    minutes: main_seconds / 60, unused_seconds: budget - main_seconds,
    finalValidated:true, exposureTotals:validation.exposures,
    extrasSkipped: {warmup: !preferences.warmup, cooldown: !preferences.cooldown},
    ...(plan.phases ? {phases: plan.phases.map(p => {
      const seconds = blocks.filter(b => b.section === p.id || b.phase === p.id).reduce((n, b) => n + b.seconds, 0);
      return {...p, seconds, ...(p.minutes != null ? {minutes: seconds / 60} : {})};
    })} : {})};
}
export function extraTimeText(plan) {
  return `${Math.ceil((plan.main_seconds ?? mainSeconds(plan.blocks)) / 60)} דק׳ אימון` +
    (plan.warmup_seconds ? ` · +${Math.ceil(plan.warmup_seconds / 60)} חימום${plan.sessionExtras?.warmup === false ? ' קצר' : ''}` : '') +
    (plan.cooldown_seconds ? ` · +${Math.ceil(plan.cooldown_seconds / 60)} שחרור` : '');
}
export function extraRowHTML(plan, kind, disabled = false) {
  const enabled = plan.sessionExtras?.[kind] !== false, label = kind === 'warmup' ? 'חימום' : 'שחרור';
  const blocks = plan.extrasAvailable?.[kind] || [], minutes = Math.ceil(blocks.reduce((n, b) => n + b.seconds, 0) / 60);
  const summary = kind === 'warmup' ? 'תנועה קלה וחזרה על תרגילי היום' : 'הליכה קלה ונשימה';
  return `<label class="session-extra-row${enabled ? '' : ' is-off'}"><span><b>${enabled ? label : 'ללא ' + label}</b>` +
    ` · ${minutes} דק׳<small>${esc(summary)}</small></span><input type="checkbox" role="switch" data-session-extra="${kind}"` +
    ` aria-label="${label}" ${enabled ? 'checked' : ''}${disabled ? ' disabled' : ''}></label>`;
}
// Pure one-tap skip, shared by the player and its resume tests. No work is manufactured.
export function skipSessionExtra(session, kind) {
  const phase = kind === 'warmup' ? 'warm' : 'cool', current = session.plan.blocks[session.index];
  if (current?.phase !== phase || current.rampUp) return false;
  const old = session.plan.blocks, oldIndex = session.index, preferences = {...session.plan.sessionExtras, [kind]: false};
  if (kind === 'warmup') {
    const prefix = old.slice(0, oldIndex).filter(b => !isExtra(b));
    const tail = old.slice(oldIndex).filter(b => b.phase !== 'warm' && !(b.extra && b.section === 'warmup'));
    session.plan = applyExtras({...session.plan, blocks: [...prefix, ...tail]}, preferences);
    session.index = prefix.length;
    while (session.plan.blocks[session.index]?.phase === 'rest') session.index++;
  } else session.index = old.length;
  session.extrasSkipped = {...session.plan.extrasSkipped, ...session.extrasSkipped, [kind]: true};
  session.plan.extrasSkipped = {...session.extrasSkipped};
  session.draft = {};
  session.timer = {left: session.plan.blocks[session.index]?.seconds || 0, running: false, started: Date.now()};
  return true;
}
