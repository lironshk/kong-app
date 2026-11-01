import { rotateWorkout } from './workout-rotation.js?v=32';
import {
  sessionMinutes
}
from './session-settings.js?v=32';
import {
  buildSession, budgets
}
from './session-planner.js?v=32';
/**
 * Read-only coaching API for the home screen (all inputs remain unmodified).
 * weeklyMovementLedger(logs,{now,timeZone}) -> groups of actual sets/local dates.
 * progressionCheckpoint(id,logs,{now,assessmentAt,conditions}) -> explicit proposal.
 * todayWorkout(profile,{now,minutes,readiness,history,locationId,confirmedTargets})
 * -> existing executable plan shape + today/rationaleHe/rationaleEn.
 * confirmedTargets[id] = {target: checkpoint.suggestedTarget,
 *                         evidenceLogIds: checkpoint.evidenceLogIds}.
 * Approval is session scoped; a completed controlled performance at that approved
 * dose can establish the same dose for later sessions, without any further rise.
 * Different assistance/load/setup are never silently
 * transferred to the baseline prescription. Counts/proposals are product rules,
 * not a professional technique assessment or a skill-unlock certificate.
 */
import {
  exercises
}
from './data/exercises.js?v=32';
import {
  plan, weekPlan
}
from './engine.js?v=32';
export {
  progressionCheckpoint
}
from './engine.js?v=32';
const DAY = 86400000;
const stamp = value => typeof value === 'string' && value.trim() ? Date.parse(value): NaN;
const validLogs =(logs, now) =>(Array.isArray(logs) ? logs: []).filter(l => Number.isFinite(stamp(l?.completed_at)) && stamp(l.completed_at) <= +
now).slice().sort((a, b) => stamp(a.completed_at) - stamp(b.completed_at));
const dateKey =(date, timeZone = 'Asia/Jerusalem') => new Intl.DateTimeFormat('en-CA', {
  timeZone, year: 'numeric', month: '2-digit', day: '2-digit'
}).format(date);
const keyNumber = key => Date.parse(key + 'T12:00:00Z');
const dayKey =(number) => new Date(number).toISOString().slice(0, 10);
const actualSets = log =>(Array.isArray(log.sets) ? log.sets: []).filter(s => Number.isFinite(s.actual) && s.actual > 0);
const exerciseFor = id => exercises.find(e => e.id === id);
const movement = e => ['hinge', 'bridge', 'single-hinge', 'single-bridge'].includes(e?.id) ? 'hinge': e?.group === 'legs' ? 'squat': e?.group;
const labels = {
  push: ['דחיקה', 'Push'], pull: ['משיכה', 'Pull'], squat: ['ברכיים ורגליים', 'Knee dominant'], hinge: ['תנועת ירך',
  'Hip dominant'], core: ['ליבה', 'Core']
};
const isStrength = log => actualSets(log).some(s => Object.hasOwn(labels, movement(exerciseFor(s.performed_exercise_id))));
/** Actual performed sets, never planned targets. Sunday-start local calendar week. */
export function weeklyMovementLedger(logs = [], {
  now = new Date(), timeZone = 'Asia/Jerusalem'
} = {
}) {
  const today = dateKey(now, timeZone), todayNumber = keyNumber(today), weekday = new Date(todayNumber).getUTCDay();
  const start = dayKey(todayNumber - weekday * DAY), end = dayKey(keyNumber(start) + 6 * DAY);
  const entries = validLogs(logs, now).filter(l => {
    const d = dateKey(new Date(l.completed_at), timeZone);
    return d >= start && d <= today
  });
  const groups = Object.entries(labels).map(( [id, [he, en]]) => {
    const dates = new Set();
    let sets = 0;
    for (const log of entries) for (const s of actualSets(log)) if (movement(exerciseFor(s.performed_exercise_id)) === id) {
      sets++;
      dates.add(dateKey(new Date(log.completed_at), timeZone));
    }
    return {
      id, he, en, sets, days: dates.size, dates: [... dates].sort()
    };
  });
  return {
    start, end, today, groups, performedSets: groups.reduce((n, g) => n + g.sets, 0), strengthDays: [... new Set(entries.filter(isStrength).map(l =>
    dateKey(new Date(l.completed_at), timeZone)))].sort(), scopeHe: 'סטים עם ביצוע מדווח השבוע; כמות אינה ציון לטכניקה או לאיזון שרירים.',
    scopeEn: 'Sets with reported work this week; counts do not grade technique or muscle balance.'
  };
}
/** One-session generator. Clones location equipment; never changes the stored profile. */
export function todayWorkout(profile, options = {
}) {
  options = {
    ... options, minutes: sessionMinutes(options.minutes ?? profile?.minutes)
  };
  const now = options.now ?? new Date(), timeZone = options.timeZone ?? 'Asia/Jerusalem', today = dateKey(now,
  timeZone), number = keyNumber(today), dayIndex = new Date(number).getUTCDay();
  const logs = options.history ?? profile?.logs ?? [];
  const locationId = options.locationId ?? profile?.activeLocation;
  const location = profile?.locations?.find(l => l.id === locationId);
  const p = {
    ... profile, equipment: location ? [... location.equipment]: profile?.equipment, logs
  };
  if (budgets[options.minutes ?? p.minutes]) {
    const result = buildSession( {
      profile: p, logs, minutes: options.minutes ?? p.minutes, focus: options.focus ?? 'auto', equipment: p.equipment,
      skillTrack: options.skillTrack, skillChoice: options.skillChoice, skillFocusOverride: options.skillFocusOverride,
      readiness: options.readiness ?? 'normal', date: now, seed: options.seed
    });
    return rotateWorkout(p, {
      ... result, dayIndex, today: {
        date: today, locationId: location?.id ?? null, recovery: result.recovery, reasonHe: result.rationaleHe,
        reasonEn: result.rationaleEn
      }
    }, options);
  }
  const recent = validLogs(logs, now).filter(isStrength).map(l => dateKey(new Date(l.completed_at),
  timeZone));
  const sameDay = recent.includes(today), priorDay = recent.includes(dayKey(number - DAY)), rollingDays = [... new Set(recent.filter(d =>
  keyNumber(d) >= number - 6 * DAY))];
  const weekStart = number - dayIndex * DAY;
  const weekIndex = Number.isInteger(options.weekIndex) ? Math.max(0, options.weekIndex): Math.max(0,
  Math.floor((weekStart - Date.UTC(2026, 0, 4, 12)) /(7 * DAY)));
  const scheduled = weekPlan(p, weekIndex).find(x => x.dayIndex === dayIndex);
  const recovery = sameDay || priorDay || rollingDays.length >= 3 || scheduled?.recovery === true;
  const reasonHe = sameDay ? 'כבר נרשם אימון כוח היום. מוצעת תנועה קלה.': priorDay ? 'נרשם אימון כוח אתמול. היום מוצעת התאוששות.': rollingDays.
  length >= 3 ? 'נרשמו שלושה ימי כוח בשבעת הימים האחרונים. מוצעת התאוששות.': scheduled?.recovery ? 'היום מיועד להתאוששות בתוכנית השבועית.':
  'האימון נבחר לפי היכולת, הציוד הזמין והמוכנות היום.';
  const reasonEn = sameDay ? 'Strength work was logged today. Easy movement is suggested.': priorDay ?
  'Strength work was logged yesterday. Recovery is suggested today.': rollingDays.length >= 3 ?
  'Three strength days were logged in the last seven days. Recovery is suggested.': scheduled?.recovery ?
  'Today is a recovery day in the weekly plan.': 'Selected using your ability, available equipment and readiness today.';
  const result = plan(p, options.minutes ?? p.minutes, options.readiness ?? 'normal', {
    ... options, history: logs, recovery, dayIndex, weekIndex
  });
  return rotateWorkout(p, {
    ... result, today: {
      date: today, locationId: location?.id ?? null, recovery, reasonHe, reasonEn
    }, rationaleHe: reasonHe, rationaleEn: reasonEn
  }, options);
}
