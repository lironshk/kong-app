import {
  weekPlan
}
from './engine.js?v=31';
const DAY = 86400000;
export function localDateKey(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Jerusalem', year: 'numeric', month: '2-digit', day: '2-digit'
  }).formatToParts(date);
  const value = key => parts.find(p => p.type === key).value;
  return (
    `${value('year')}` +
    `-` +
    `${value('month')}` +
    `-` +
    `${value('day')}`
  );
}
export function dateFromKey(key) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(key)) throw Error('invalid-date');
  const d = new Date(key + 'T12:00:00Z');
  if (!Number.isFinite(+ d) || d.toISOString().slice(0, 10) !== key) throw Error('invalid-date');
  return d
}
export function addDays(key, amount) {
  if (!Number.isInteger(amount) || Math.abs(amount) > 36600) throw Error('invalid-offset');
  return new Date(+ dateFromKey(key) + amount * DAY).toISOString().slice(0, 10)
}
export function dayOfKey(key) {
  return dateFromKey(key).getUTCDay()
}
export function startOfWeek(key) {
  return addDays(key, - dayOfKey(key))
}
export function weekNumber(key) {
  return Math.floor((+ dateFromKey(startOfWeek(key)) - Date.UTC(2026, 0, 4, 12)) /(7 * DAY))
}
export function calendarPlan(profile, reference = new Date(), offset = 0) {
  if (!Number.isInteger(offset) || Math.abs(offset) > 52) throw Error('invalid-week');
  const today = localDateKey(reference), start = addDays(startOfWeek(today), offset * 7), end = addDays(start,
  6), weekIndex = Math.max(0, weekNumber(start));
  const plans = weekPlan(profile, weekIndex).map((p, i) =>( {
    ... p, dayIndex: p.dayIndex ?? profile.days[i], date: addDays(start, p.dayIndex ?? profile.days[i])
  }));
  const days = Array.from( {
    length: 7
  },(_, dayIndex) => {
    const key = addDays(start, dayIndex);
    const logs =(profile.logs || []).filter(l => {
      try {
        return localDateKey(new Date(l.completed_at)) === key
      } catch {
        return false
      }
    });
    return {
      key, dayIndex, date: dateFromKey(key), isToday: key === today, isPast: key < today, plan: plans.find(p => p.dayIndex === dayIndex) || null,
      logs, hasPerformance: logs.some(l => l.sets?.length > 0)
    }
  });
  return {
    today, start, end, weekIndex, offset, days, sessions: plans
  };
}
export function nextCalendarSession(profile, reference = new Date(), offset = 0, selectedDay = null) {
  const c = calendarPlan(profile, reference, offset);
  if (Number.isInteger(selectedDay)) {
    const selected = c.sessions.find(p => p.dayIndex === selectedDay);
    if (selected) return selected
  }
  const next = c.sessions.find(p => p.date >= c.today && !c.days.find(d => d.key === p.date)?.hasPerformance);
  return next || calendarPlan(profile, reference, offset + 1).sessions[0] || null;
}
