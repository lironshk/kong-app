import {exercises} from './data/exercises.js?v=32';
import {escapeHTML as esc} from './ui.js?v=32';
import {reserveMinimum} from './training-evidence.js?v=32';
export const trainingDays = p => Math.max(1, Math.min(7, new Set(p.days || []).size || Number(p.daysPerWeek) || 3));
export function trainingStyles(p = {}) {
  const days = trainingDays(p), dedicated = p.dedicatedLegDay === true;
  return [
    {id: 'full', label: 'כל הגוף', consequence: 'דחיקה, משיכה ורגליים בכל אימון.', recommended: days <= 3},
    ...(days >= 3 ? [{id: 'mixed', label: 'משולב', consequence: 'כל הגוף ופלג עליון לסירוגין, עם רגליים בכל אימון.',
      recommended: days >= 4}] : []),
    ...(days >= (dedicated ? 6 : 3) ? [{id: 'split', label: 'דחיקה ומשיכה',
      consequence: 'דחיקה, משיכה וכל הגוף; רגליים משולבות לאורך השבוע.', recommended: false}] : [])
  ];
}
export const trainingStyle = p => trainingStyles(p).some(s => s.id === p.trainingStyle) ? p.trainingStyle : 'full';
export function trainingQueue(p = {}) {
  const days = trainingDays(p), style = trainingStyle(p), dedicated = p.dedicatedLegDay === true && days >= 3;
  // These are focus cycles. Actual recovery gates still apply when a requested leg day extends the cycle.
  const slots = days >= 5 ? 3 : days === 4 ? 3 : days;
  const queue = Array.from({length: slots}, (_, i) => style === 'split' ? ['push', 'pull', 'full'][i % 3] :
    style === 'mixed' && i % 2 ? 'upper' : 'full');
  if (dedicated) {
    if (style === 'split') queue.push('lower');
    else queue[queue.length - 1] = 'lower';
  }
  if (days === 4 && queue.length < 4) queue.splice(1, 0, 'skill');
  if (days >= 5) {queue.splice(1, 0, 'skill'); queue.push('skill');}
  return queue;
}
export const structureChoices = [
  {id: 'mixed', label: 'משולב', consequence: 'כל אימון שני בסבבים; במטרת כוח נשארים בסטים.'},
  {id: 'sets', label: 'סטים', consequence: 'מסיימים סטים של תרגיל או זוג לפני שממשיכים.'},
  {id: 'rounds', label: 'סבבים', consequence: '3–5 תרגילים לפי הסדר, עם מנוחה ארוכה בין הסבבים.'}
];
export function sessionStructure(p = {}, {structure, source, index} = {}) {
  const choice = structure || p.sessionStructure || 'mixed';
  if (['sets', 'rounds'].includes(choice)) return choice;
  if (source === 'rounds') return 'rounds';
  if (p.goal === 'strength') return 'sets';
  const number = index ?? (p.logs || []).filter(l => l.completed && l.sets?.some(s => s.actual > 0)).length;
  return number % 2 ? 'rounds' : 'sets';
}
export const legPatterns = ['squat', 'single_leg', 'hinge', 'hip_extension'];
export const muscleLabels = {chest: 'חזה', back: 'גב', shoulders: 'כתפיים', legs: 'רגליים', glutes: 'ישבן',
  core: 'ליבה', fullbody: 'כל הגוף', mobility: 'ניידות'};
const typeLabels = {full: 'כל הגוף', upper: 'פלג גוף עליון', push: 'דחיקה', pull: 'משיכה', lower: 'רגליים',
  core: 'ליבה', skill: 'יום סקיל', park: 'כל הגוף'};
export function sessionHeader(plan) {
  const active = plan.blocks.filter(b => ['work', 'skill'].includes(b.phase));
  const areas = [...new Set(active.map(b => b.primaryMuscle || exercises.find(e => e.id === b.id)?.primaryMuscle))]
    .filter(a => muscleLabels[a]);
  const groups = new Set(active.filter(b => b.countsAsStrength !== false).map(b => b.group));
  const inferred = groups.has('push') && groups.has('pull') ? 'full' : groups.has('push') ? 'push' :
    groups.has('pull') ? 'pull' : groups.has('legs') ? 'lower' : 'core';
  const type = plan.focus === 'skill' ? 'skill' : inferred;
  return {type, label: typeLabels[type], areas};
}
export function sessionHeaderHTML(plan) {
  const header = plan.sessionHeader || sessionHeader(plan);
  return `<div class="session-identity"><strong>${esc(header.label)}</strong><div class="session-area-chips">` +
    header.areas.map(a => `<span class="chip">${muscleLabels[a]}</span>`).join('') + '</div></div>';
}
export function circuitCompatible(a, b) {
  return a.id !== b.id && a.group !== b.group && !(a.gripLimited && b.gripLimited) &&
    !(a.loadingTags || []).some(t => (b.loadingTags || []).includes(t));
}
// Find a closed path, including the last → first transition in the following round.
function circuitOrder(groups) {
  let best = [];
  const score = path => new Set(path.map(g => g[0].group)).size * 100 + path.length;
  function visit(path, remaining) {
    if (path.length >= 3 && circuitCompatible(path.at(-1)[0], path[0][0]) && score(path) > score(best)) best = path;
    if (path.length === 5) return;
    for (const group of remaining) if (!path.length || circuitCompatible(path.at(-1)[0], group[0])) {
      visit([...path, group], remaining.filter(g => g !== group));
    }
  }
  visit([], groups.slice(0, 10));
  return best;
}
export function buildRounds(blocks, p = {}, {minimumReserve = 3} = {}) {
  const eligible = blocks.filter(b => b.phase === 'work' && b.countsAsStrength && b.target > 0 && !b.assessment &&
    !b.reviewedExecution && !b.demandingStraightArm && !b.advancedOnly && b.executionRole !== 'skill' && !(b.added_load > 0));
  const groups = [...new Set(eligible.map(b => b.id))].map(id => eligible.filter(b => b.id === id));
  const ordered = circuitOrder(groups);
  if (ordered.length < 3) return {blocks, structure: 'sets', structureNote: 'היום נשארים בסטים כדי לשמור על מנוחה בין עומסים דומים.'};
  const rounds = Math.min(...ordered.map(g => g.length));
  const inside = p.experience === 'new' ? 45 : ordered.some(g => g[0].level >= 3) ? 30 : 15;
  const between = ordered.some(g => g[0].level >= 3) ? 180 : p.experience === 'new' ? 150 : 120;
  const ids = new Set(ordered.flatMap(g => g.slice(0, rounds)));
  const remaining = blocks.filter((b, i) => !ids.has(b) &&
    !(b.phase === 'rest' && (ids.has(blocks[i - 1]) || /setup/.test(b.id) && ids.has(blocks[i + 1]))));
  const circuit = [];
  for (let round = 1; round <= rounds; round++) for (const [index, group] of ordered.entries()) {
    const dose = group[round - 1];
    const reserve = minimumReserve > 3 && reserveMinimum(dose) >= minimumReserve;
    const b = {...dose, circuitId: 'circuit-1', round, set: round, rounds,
      exerciseInRound: index + 1, exercisesPerRound: ordered.length,
      rir: dose.unit === 'seconds' ? null : reserve ? dose.rir : minimumReserve > 3 ? `${minimumReserve}–5` : 'כשלוש',
      technicalReserve: dose.unit === 'seconds' ? reserve ? dose.technicalReserve : `לפחות ${minimumReserve} שניות של שליטה` : null,
      restSeconds: index === ordered.length - 1 ? round === rounds ? 0 : between : inside};
    delete b.pairId; delete b.station;
    circuit.push(b);
    if (index < ordered.length - 1 || round < rounds) circuit.push({id: `circuit-${round}-${index}-rest`,
      he: index === ordered.length - 1 ? 'מנוחה בין סבבים' : 'מנוחה קצרה', phase: 'rest', section: 'strength',
      seconds: b.restSeconds, target: null, circuitId: b.circuitId, round, betweenRounds: index === ordered.length - 1,
      cue: 'התרגיל הבא: ' + ordered[(index + 1) % ordered.length][0].he + '. אפשר להאריך מנוחה.'});
  }
  // Preparations and demanding skills stay fresh; remaining accessories follow the circuit.
  const end = remaining.findIndex(b => ['cool', 'recovery'].includes(b.phase) || b.executionRole === 'accessory');
  const at = end < 0 ? remaining.length : end;
  return {blocks: [...remaining.slice(0, at), ...circuit, ...remaining.slice(at)], structure: 'rounds',
    circuits: [{id: 'circuit-1', rounds, exerciseIds: ordered.map(g => g[0].id), withinRestSeconds: inside, betweenRestSeconds: between}]};
}
export function roundCardsHTML(plan, doseText) {
  return (plan.circuits || []).map(c => {
    const moves = c.exerciseIds.map(id => plan.blocks.find(b => b.circuitId === c.id && b.id === id));
    return `<article class="preview-circuit"><h3>סבב × ${c.rounds}</h3><ol>` +
      moves.map(b => `<li>${esc(b.he)} · ${esc(doseText(b))}</li>`).join('') +
      `</ol><p>${c.withinRestSeconds} שנ׳ בין תרגילים · ${c.betweenRestSeconds} שנ׳ בין סבבים</p>` +
      '<small>משאירים כשלוש חזרות; בהחזקה, לפחות שלוש שניות בשליטה.</small></article>';
  }).join('');
}
export function cycleExplanation(p) {
  const queue = trainingQueue(p), skills = queue.filter(x => x === 'skill').length, strength = queue.length - skills;
  const days = (p.days || []).slice().sort((a,b)=>a-b);
  const names = ['א׳','ב׳','ג׳','ד׳','ה׳','ו׳','שבת'];
  const mapping = queue.map((focus,i) => `${names[days[i]] || 'יום '+(i+1)}: ${typeLabels[focus]}`).join(' · ');
  return `${strength} אימוני כוח ו־${skills} ימי תרגול במחזור של ${queue.length} אימונים. ${mapping}. ` +
    'מתקדמים לפי הסדר בימים שבחרת, רק לאחר התאוששות; ימים נוספים מיועדים למנוחה או תנועה קלה. ' +
    (p.dedicatedLegDay && trainingDays(p)>=3 ? trainingStyle(p)==='split' ? 'יום הרגליים מאריך את המחזור באימון אחד.' :
      'יום הרגליים מחליף אימון כוח אחד של כל הגוף או פלג עליון.' : '') +
    'אלו כללי התזמון של האפליקציה; מספר הימים אינו דרישה גופנית.';
}
export function trainingPreferencesHTML(p) {
  return '<section class="card training-preferences"><h2>איך נוח לך להתאמן?</h2>' +
    `<p>${trainingDays(p)} ימים בשבוע · ההתקדמות שלך נשמרת בכל בחירה.</p>` +
    '<div role="group" aria-label="סגנון אימון">' + trainingStyles(p).map(s =>
      `<button class="secondary training-style-option" data-training-style="${s.id}" aria-pressed="${trainingStyle(p) === s.id}">` +
      `<b>${s.label}${s.recommended ? ' · מומלץ' : ''}</b><small>${s.consequence}</small></button>`).join('') + '</div>' +
    `<label class="check-label"><input type="checkbox" data-dedicated-legs ${p.dedicatedLegDay ? 'checked' : ''}` +
    `${trainingDays(p) < 3 ? ' disabled' : ''}>יום רגליים ייעודי</label>` +
    (trainingDays(p) < 3 ? '<small>יום נפרד לרגליים זמין משלושה ימי אימון.</small>' :
      p.dedicatedLegDay && trainingDays(p) < 6 ? '<small>עם יום רגליים נפרד, דחיקה ומשיכה זמינות משישה ימים.</small>' : '') +
    `<p class="training-cycle">${esc(cycleExplanation(p))}</p>` +
    '<h3>מבנה האימון</h3><div role="group" aria-label="מבנה האימון">' + structureChoices.map(s =>
      `<button class="secondary training-style-option" data-session-structure="${s.id}"` +
      ` aria-pressed="${(p.sessionStructure || 'mixed') === s.id}"><b>${s.label}</b><small>${s.consequence}</small></button>`).join('') +
    '</div><h3>תוספות לאימון</h3>' + ['warmup', 'cooldown'].map(kind =>
      `<label class="check-label"><input type="checkbox" data-profile-extra="${kind}"` +
      ` ${p.sessionExtras?.[kind] !== false ? 'checked' : ''}>${kind === 'warmup' ? 'חימום' : 'שחרור'}</label>`).join('') +
    '<small>החימום והשחרור נוספים לזמן האימון שבחרת.</small></section>';
}
export function updateTrainingPreference(p, key, value) {
  if (key === 'trainingStyle') {if (!trainingStyles(p).some(s => s.id === value)) return false; p.trainingStyle = value;}
  else if (key === 'sessionStructure') {if (!structureChoices.some(s => s.id === value)) return false; p.sessionStructure = value;}
  else if (key === 'dedicatedLegDay') {
    p.dedicatedLegDay = value === true && trainingDays(p) >= 3; p.trainingStyle = trainingStyle(p);
  } else if (['warmup', 'cooldown'].includes(key)) p.sessionExtras = {warmup: true, cooldown: true, ...p.sessionExtras, [key]: !!value};
  else return false;
  p.trainingPreferencesOffered = true;
  return true;
}
export function bindTrainingPreferences(root, p, onChange) {
  const bind = (selector, event, key, read) => root.querySelectorAll(selector).forEach(el => {
    el[event] = () => {if (updateTrainingPreference(p, key || el.dataset.profileExtra, read(el))) onChange();};
  });
  bind('[data-training-style]', 'onclick', 'trainingStyle', el => el.dataset.trainingStyle);
  bind('[data-session-structure]', 'onclick', 'sessionStructure', el => el.dataset.sessionStructure);
  bind('[data-dedicated-legs]', 'onchange', 'dedicatedLegDay', el => el.checked);
  bind('[data-profile-extra]', 'onchange', null, el => el.checked);
}
