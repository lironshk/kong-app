import {
  lifestyleTips
}
from './data/lifestyle-tips.js?v=32';
import {
  weeklyMovementLedger
}
from './coach-insights.js?v=32';
import {
  exercises
}
from './data/exercises.js?v=32';
export const dailyDate =(now = new Date()) => new Intl.DateTimeFormat('en-CA', {
  timeZone: 'Asia/Jerusalem', year: 'numeric', month: '2-digit', day: '2-digit'
}).format(now);
const shift =(date, n) => new Date(Date.parse(date + 'T12:00:00Z') + n * 86400000).toISOString().slice(0,
10);
export function checkInReadiness(entry = {
}) {
  return entry.energy <= 2 || entry.soreness >= 4 ? 'tired': 'normal'
}
export function trendSeries(checkIns = {
}, field, date = dailyDate(), days = 7) {
  return Array.from( {
    length: days
  },(_, i) => {
    const day = shift(date, i - days + 1);
    return {
      date: day, value: Number.isFinite(checkIns[day]?.[field]) ? checkIns[day][field]: null
    }
  })
}
export function proteinRange(weight) {
  return Number.isFinite(weight) && weight >= 20 && weight <= 400 ? {
    min: Math.round(weight * 1.6), max: Math.round(weight * 2.2)
  }: null
}
export function tipOfDay(date = dailyDate(), weight) {
  const index =((Math.floor(Date.parse(date + 'T12:00:00Z') / 86400000) % lifestyleTips.length) + lifestyleTips.length) % lifestyleTips.length;
  const tip = lifestyleTips[index], range = proteinRange(weight);
  return {
    ... tip, text: tip.text +(tip.id === 'protein' && range ? (
      ` לפי המשקל שדיווחת: כ־` +
      `${range.min}` +
      `–` +
      `${range.max}` +
      ` גרם ביום.`
    ): ''), protein: range
  }
}
const actual = l =>(l.sets || []).filter(s => s.actual > 0);
export function dailyProgress(profile = {
}, now = new Date()) {
  const ledger = weeklyMovementLedger(profile.logs, {
    now
  }), logs =(profile.logs || []).filter(l => Date.parse(l.completed_at) <= + now && actual(l).length),
  target = new Set(profile.days || []).size || 3;
  const weekCount = start => new Set(logs.filter(l => actual(l).some(s => ['push', 'pull', 'legs',
  'core'].includes(exercises.find(e => e.id === s.performed_exercise_id)?.group))).filter(l => {
    const d = dailyDate(new Date(l.completed_at));
    return d >= start && d <= shift(start, 6)
  }).map(l => dailyDate(new Date(l.completed_at)))).size;
  let streak = 0, start = weekCount(ledger.start) >= target ? ledger.start: shift(ledger.start, - 7);
  for (let i = 0;
  i < 1000 && weekCount(start) >= target;
  i++, start = shift(start, - 7)) streak++;
  const volume = {
    push: 0, pull: 0, legs: 0, core: 0
  };
  for (const g of ledger.groups) volume[g.id === 'squat' || g.id === 'hinge' ? 'legs': g.id] += g.sets;
  // Comparable variation, unit, setup, assistance and load only; a PB is not an unlock.
  const best = new Map();
  let pb = null;
  for (const log of logs.slice().sort((a, b) => Date.parse(a.completed_at) - Date.parse(b.completed_at))) for (const s of actual(log)) {
    const key = JSON.stringify( [s.performed_exercise_id, s.unit, s.setup ?? null, s.assistance ?? null,
    s.added_load ?? 0, s.side_allocation ?? null]), previous = best.get(key);
    if (previous !== undefined && s.actual > previous && dailyDate(new Date(log.completed_at)) >= shift(ledger.today,
    - 29)) pb = {
      exercise: exercises.find(e => e.id === s.performed_exercise_id)?.he || s.performed_exercise_id, actual: s.actual,
      unit: s.unit, date: dailyDate(new Date(log.completed_at))
    };
    best.set(key, Math.max(previous || 0, s.actual));
  }
  return {
    sessions: ledger.strengthDays.length, target, streak, volume, pb
  };
}
export function dailyInsights(profile = {
}, now = new Date()) {
  const date = dailyDate(now), entries = profile.checkIns || {
  }, progress = dailyProgress(profile, now), result = [], add =(id, text) => result.push( {
    id, text
  });
  if ( [date, shift(date, - 1)].every(d => entries[d]?.sleepHours !== undefined && entries[d].sleepHours < 7)) add('sleep',
  'דיווחת על פחות מ־7 שעות שינה בשני לילות רצופים. אפשר לבחור היום תרגול קל יותר.');
  if (checkInReadiness(entries[date]) === 'tired') add('readiness', 'המוכנות או כאבי השרירים שדיווחת מציעים להוריד עומס היום ולבחור תנועה נוחה.')
  ;
  const logs =(profile.logs || []).filter(l => Date.parse(l.completed_at) <= + now && actual(l).length).sort((a,
  b) => Date.parse(a.completed_at) - Date.parse(b.completed_at));
  if (logs.length >= 2 && logs.slice(- 2).every(l => l.effort === 'hard' || actual(l).some(s => s.actual < s.target))) add('deload',
  (
    'שני אימונים אחרונים היו קשים או מתחת ליעד. אפשר לשקול 5–7 ימים קלים יותר, עם כ־30–50% פחות ' +
    'סטים מאתגרים וללא גמר קשה; אין צורך להשלים נפח אחר כך.'
  ));
  if (progress.volume.push >= 4 && progress.volume.pull < progress.volume.push / 2) add('balance',
  (
    'השבוע תועדו פחות סטים של משיכה מדחיקה. בתכנון הבא אפשר לבדוק כיסוי משיכה לפי הציוד וזמן ' +
    'ההתאוששות; הכמות אינה ציון לאיזון שרירים.'
  ));
  const weights = trendSeries(entries, 'weightKg', date, 30).filter(x => x.value !== null);
  if (weights.length >= 3 && weights[0].date <= shift(weights.at(- 1).date, - 7)) {
    const delta = weights.at(- 1).value - weights[0].value;
    add('weight', (
      `המשקל המדווח ` +
      `${Math.abs(delta) < 0.3 ? 'יציב יחסית': delta > 0 ? 'במגמת עלייה': 'במגמת ירידה'}` +
      `. תנודות יומיות צפויות; זו תצפית בלבד, ללא יעד לשינוי משקל.`
    ))
  }
  if (progress.streak) add('consistency', (
    `כל הכבוד על ` +
    `${progress.streak}` +
    ` שבועות שבהם הגעת לתדירות המתוכננת. להמשיך בקצב שמתאים להתאוששות.`
  ));
  if (!result.length) add('start', 'כל אימון שמתעדים עוזר לבנות תמונה ברורה יותר. אפשר להתחיל בצעד נוח היום.');
  return result.slice(0, 3);
}
