import { unresolvedPain } from './training-safety.js?v=32';
import {
  recoveryState, loadingExposure, conditionsKnown
}
from './training-evidence.js?v=32';
import {
  exercises
}
from './data/exercises.js?v=32';
// Product thresholds, not physiological diagnoses. Pure functions; missing is never zero.
export const dayKey =(now = new Date()) => new Intl.DateTimeFormat('en-CA', {
  year: 'numeric', month: '2-digit', day: '2-digit'
}).format(now);
export const shiftDay =(d, n) => new Date(Date.parse(d + 'T12:00:00Z') + n * 864e5).toISOString().slice(0,
10);
export const mean = a => a.length ? a.reduce((x, y) => x + y, 0) / a.length: null;
export const median = a => {
  const b = [... a].sort((x, y) => x - y);
  return b.length ?(b[Math.floor((b.length - 1) / 2)] + b[Math.ceil((b.length - 1) / 2)]) / 2: null
};
const valid =(v, min, max) => Number.isFinite(v) && v >= min && v <= max;
export const logDate = l => l.local_date || new Intl.DateTimeFormat('en-CA', {
  timeZone: 'Asia/Jerusalem', year: 'numeric', month: '2-digit', day: '2-digit'
}).format(new Date(l.completed_at));
const performed = l =>(l.sets || []).filter(s => s.actual > 0);
export function datedLogs(logs = [], now = new Date()) {
  return logs.filter(l => Number.isFinite(Date.parse(l.completed_at)) && Date.parse(l.completed_at) <= + now && logDate(l) <= dayKey(now)).sort((
  a, b) => Date.parse(a.completed_at) - Date.parse(b.completed_at))
}
export function painStatus(profile = {
}, date = dayKey()) {
  return !!unresolvedPain(profile, {date, now: new Date(date + 'T23:59:59Z')});
}
export function readiness(entry = {
}, pain = false, relevantArea = null) {
  const sleep = valid(entry.sleepHours, 0, 24) || valid(entry.sleepQuality, 1, 5), energy = valid(entry.energy,
  1, 5), sore = valid(entry.soreness, 0, 4);
  const flags = {
    sleep: sleep ?(entry.sleepHours < 6 || entry.sleepQuality <= 2): null, energy: energy ? entry.energy <= 2: null,
    soreness: sore &&(!relevantArea || entry.sorenessArea === relevantArea) ? entry.soreness >= 3: null
  };
  const reasons = [];
  if (flags.sleep) reasons.push('דיווח שינה קצרה או איכות שינה נמוכה');
  if (flags.energy) reasons.push('דיווח אנרגיה נמוכה');
  if (flags.soreness) reasons.push('דיווח תפיסות משמעותיות');
  const count = Object.values(flags).filter(x => x === true).length, complete = sleep && energy && sore;
  const state = pain ? 'pain': count >= 2 ? 'ease': count === 1 ? 'gradual': complete ? 'usual': 'partial';
  const titles = {
    pain: 'צריך לברר כאב', ease: 'כדאי להקל היום', gradual: 'כדאי להתחיל בהדרגה', usual: 'אפשר להתחיל כרגיל',
    partial: 'תמונה חלקית'
  };
  return {
    editorial: true, state, title: titles[state], flags, count, complete, reasons, reason: pain ? 'דווח כאב שטרם עודכן. איך האזור מרגיש היום?':
    reasons.join(' · ') ||(complete ? 'לפי דיווח השינה, האנרגיה והתפיסות מהיום.': 'אין דיווח מלא מהיום; אפשר להמשיך גם בלי להשלים אותו.')
  };
}
export function sessionLoad(log) {
  return valid(log.duration_minutes, 1, 720) && valid(log.session_RPE, 0, 10) ? log.duration_minutes * log.session_RPE: null
}
export function loadSignal(logs = [], now = new Date()) {
  const date = dayKey(now), all = datedLogs(logs, now), inRange =(a, b) => all.filter(l => logDate(l) >= a && logDate(l) <= b && performed(l).
  length);
  const summarize = ls => {
    const values = ls.map(sessionLoad).filter(v => v !== null);
    return {
      total: values.reduce((a, b) => a + b, 0), coverage: ls.length ? values.length / ls.length: 0, count: ls.length
    }
  };
  const acute = summarize(inRange(shiftDay(date, - 6), date)), previous = summarize(inRange(shiftDay(date,
  - 34), shiftDay(date, - 7))), chronic = summarize(inRange(shiftDay(date, - 27), date));
  const history = all.length && logDate(all[0]) <= shiftDay(date, - 34), baseline = previous.total / 4,
  comparable = !!history && acute.coverage >= .8 && previous.coverage >= .8 && baseline > 0;
  const daily = {
  };
  for (const l of inRange(shiftDay(date, - 6), date)) {
    const value = sessionLoad(l);
    if (value !== null) daily[logDate(l)] =(daily[logDate(l)] || 0) + value
  }
  return {
    ... acute, daily, baseline: comparable ? baseline: null, change: comparable ? 100 *(acute.total / baseline - 1): null,
    acwr: comparable && [0, 1, 2, 3].every(i => inRange(shiftDay(date, - 6 - 7 * i), shiftDay(date, - 7 * i)).length > 0) && chronic.coverage >=
    .8 && chronic.count >= 4 && previous.count >= 4 && chronic.total > 0 ? acute.total /(chronic.total / 4): null,
    comparable
  };
}
export const patternLabels = {
  vertical_pull: 'משיכה אנכית', horizontal_pull: 'משיכה אופקית', vertical_push: 'דחיקה אנכית', horizontal_push: 'דחיקה אופקית',
  knee: 'ברך', hip: 'ירך', core: 'ליבה'
};
// Explicit catalogue mapping is supplied by the caller; unknown movement patterns remain unknown.
export function workSet(s) {
  return s.actual > 0 && s.unit === 'reps' && !s.warmup && ! ['warm', 'warmup', 'cool', 'cooldown',
  'recovery', 'skill'].includes(s.phase) && s.kind !== 'skill' && valid(s.rir, 0, 4)
}
export const tissueLabels = {
  grip: 'אחיזה', elbow_flexors: 'כופפי מרפק', elbow_extensors: 'פושטי מרפק', shoulder_support: 'תמיכת כתף',
  shoulder_extension: 'פשיטת כתף', wrists: 'שורש כף היד', knee_extensors: 'פושטי ברך', knee_flexors: 'כופפי ברך',
  hip_extensors: 'פושטי ירך'
};
export function patternSignal(logs = [], catalog = {
}, now = new Date()) {
  const date = dayKey(now), sets = Object.fromEntries(Object.keys(patternLabels).map(p => [p, 0])),
  last = {
  }, unknown = {
  };
  for (const l of datedLogs(logs, now)) {
    const exposure = {
    };
    for (const s of performed(l)) {
      const p = catalog[s.performed_exercise_id]?.pattern || s.pattern;
      if (!Object.hasOwn(sets, p)) continue;
      if (logDate(l) >= shiftDay(date, - 6) && s.unit === 'reps' && !s.warmup && ! ['warm', 'warmup', 'cool',
      'cooldown', 'recovery', 'skill'].includes(s.phase) && s.kind !== 'skill' && s.rir == null) unknown[p] =(unknown[p] || 0) + 1;
      const e = exercises.find(e => e.id === s.performed_exercise_id), loading = loadingExposure(e, s,
      l);
      if (loading.loaded) last[p] = l.completed_at;
      if (!workSet(s)) continue;
      if (logDate(l) >= shiftDay(date, - 6)) sets[p]++;
      if (s.rir <= 3) exposure[p] =(exposure[p] || 0) + 1;
    }
    // Last loading exposure includes individual sets and loaded holds, independently of volume.
  }
  const hours = Object.fromEntries(Object.entries(last).map(( [p, d]) => [p,(+ now - Date.parse(d)) / 36e5]));
  const balance = {
    push: sets.vertical_push + sets.horizontal_push, pull: sets.vertical_pull + sets.horizontal_pull,
    legs: sets.knee + sets.hip, core: sets.core
  };
  const tissueHours = Object.fromEntries(Object.entries(recoveryState(logs, now).last).filter(( [k]) => tissueLabels[k]).map(( [k,
  d]) => [k,(+ now - Date.parse(d)) / 36e5]));
  return {
    sets, unknown, hours, tissueHours, balance, blocked: [... recoveryState(logs, now).blocked]
  };
}
export function consistency(profile = {
}, now = new Date()) {
  const date = dayKey(now), weekday = new Date(date + 'T12:00Z').getUTCDay(), start = shiftDay(date,
  -((weekday -(profile.home?.weekStart || 0) + 7) % 7));
  const logs = datedLogs(profile.logs, now).filter(l => performed(l).length), history = profile.home?.targetHistory || [];
  const targetAt = d => [... history].filter(x => x.date <= d && x.date <= date).reverse().sort((a,
  b) => b.date.localeCompare(a.date))[0]?.target ?? new Set(profile.days || []).size;
  const target = targetAt(shiftDay(start, 6)), weekLogs = logs.filter(l => logDate(l) >= start), sessions = weekLogs.length,
  days = new Set(weekLogs.map(logDate)).size;
  let successful = 0;
  const weeks = [];
  for (let i = 1;
  i <= 4;
  i++) {
    const from = shiftDay(start, - 7 * i), to = shiftDay(from, 6), t = targetAt(to), count = logs.filter(l => logDate(l) >= from && logDate(l) <=
    to).length, paused =(profile.home?.pausedWeeks || []).includes(from);
    if (!paused && t && count >= t) successful++;
    weeks.push( {
      start: from, target: t, sessions: count, paused
    })
  }
  return {
    start, target, sessions, days, completion: target ? Math.min(sessions / target, 1): null, successful,
    weeks
  };
}
export function skillFrequency(logs = [], now = new Date()) {
  const result = {
  }, date = dayKey(now);
  for (const l of datedLogs(logs, now).filter(l => logDate(l) >= shiftDay(date, - 6))) {
    const bySkill = {
    };
    for (const s of performed(l).filter(s => s.skill || s.kind === 'skill' || s.phase === 'skill')) {
      const id = s.skill || s.performed_exercise_id;
      const x = bySkill[id] ??= {
        attempts: 0, seconds: 0
      };
      x.attempts += s.attempts ??(s.unit === 'reps' ? s.actual: 1);
      x.seconds += s.practice_seconds ??(s.unit === 'seconds' ? s.actual: 0)
    }
    for (const[id, x] of Object.entries(bySkill)) if (x.attempts >= 3 || x.seconds >= 120)(result[id] ??= new Set()).add(logDate(l));
  }
  return Object.fromEntries(Object.entries(result).map(( [k, v]) => [k, v.size]));
}
export const comparisonKey = s => JSON.stringify( [s.performed_exercise_id, s.progression ?? null,
s.assistance ?? null, s.added_load ?? 0, s.setup ?? null, s.range_of_motion ?? null, s.execution_standard ?? null,
s.tempo ?? null, s.unit, s.side_allocation ?? null]);
export const milestoneThresholds = {
  pull: {
    threshold: 1, unit: 'reps'
  }, 'wall-handstand': {
    threshold: 20, unit: 'seconds'
  }
};
export function performanceSignal(logs = [], now = new Date(), catalog = {
}) {
  const history = new Map(), records = [], declines = [];
  for (const l of datedLogs(logs, now)) {
    const session = new Map();
    for (const s of performed(l).filter(s => !s.pain && !l.pain && !s.warmup)) {
      const key = comparisonKey(s), prev = session.get(key);
      if (!prev || s.actual > prev.actual) session.set(key, s);
    }
    for (const[key, s] of session) {
      const prior = history.get(key) || [], best = prior.length ? Math.max(... prior.map(x => x.actual)): null,
      threshold = s.unit === 'seconds' ? Math.max(2, .05 * best): 1;
      const similar = prior.filter(x => valid(x.rir, 0, 10) && valid(s.rir, 0, 10) && Math.abs(x.rir - s.rir) <= 1);
      const improved = similar.length && s.actual > Math.max(... similar.map(x => x.actual));
      const gate = milestoneThresholds[s.performed_exercise_id], reached = gate && s.unit === gate.unit && s.actual >= gate.threshold && !s.
      assistance;
      const milestone = !!reached && !prior.some(x => x.actual >= gate.threshold);
      const stable = !!reached && prior.filter(x => x.actual >= gate.threshold && logDate(x) >= shiftDay(logDate(l),
      - 20)).length === 1;
      if (best === null || s.actual >= best + threshold || improved || stable || milestone) records.push( {
        key, exercise: s.performed_exercise_id, date: logDate(l), actual: s.actual, unit: s.unit, baseline: best,
        kind: milestone ? 'milestone': stable ? 'stable': best === null ? 'starting': s.actual >= best + threshold ? 'record': 'effort',
        milestone: milestone ? gate.threshold: null, verified: s.technique_confirmed === true && conditionsKnown(s),
        improved: !!improved
      });
      const recent = [... prior.slice(- 4), s];
      if (recent.length === 5 && recent.every(x => valid(x.rir, 0, 10) && valid(s.rir, 0, 10) && Math.abs(x.rir - s.rir) <= 1)) {
        const base = median(recent.slice(0, 3).map(x => x.actual));
        if (base > 0 && recent.slice(3).every(x => x.actual <= base * .9)) declines.push( {
          key, exercise: s.performed_exercise_id, label: catalog[s.performed_exercise_id]?.he || 'התרגיל שתיעדת',
          baseline: base, values: recent.slice(3).map(x => x.actual), date: logDate(l)
        })
      }
      history.set(key, [... prior, {
        ... s, completed_at: l.completed_at, local_date: logDate(l)
      }]);
    }
  }
  return {
    records: records.filter(x => x.date >= shiftDay(dayKey(now), - 6)), declines: declines.filter(x => x.date >= shiftDay(dayKey(now),
    - 6)), decline: declines.some(x => x.date >= shiftDay(dayKey(now), - 6))
  };
}
export function trends(checkIns = {
}, now = new Date()) {
  const date = dayKey(now), entries = Object.entries(checkIns).filter(( [d]) => d <= date).sort(( [a],
  [b]) => a.localeCompare(b)), week = entries.filter(( [d]) => d >= shiftDay(date, - 6)), sleep = week.map(( [,
  e]) => e.sleepHours).filter(v => valid(v, 0, 24)), base = entries.filter(( [d]) => d >= shiftDay(date,
  - 34) && d <= shiftDay(date, - 7)).map(( [, e]) => e.sleepHours).filter(v => valid(v, 0, 24));
  const energy = week.filter(( [, e]) => valid(e.energy, 1, 5)).slice(- 4), sore = week.filter(( [,
  e]) => e.soreness >= 3 && e.sorenessArea);
  return {
    sleepMean: sleep.length >= 4 ? mean(sleep): null, sleepBaseline: base.length >= 10 ? median(base): null,
    shortSleep: entries.filter(( [d, e]) => d >= shiftDay(date, - 4) && valid(e.sleepHours, 0, 24) && e.sleepHours < 7).length >= 3,
    sleepDrop: sleep.length >= 4 && base.length >= 10 && mean(sleep) <= median(base) - 1, lowEnergy: energy.length === 4 && energy.filter(( [,
    e]) => e.energy <= 2).length >= 3, persistentSoreness: sore.some(( [d, e], i) => sore.slice(i + 1).some(( [d2,
    e2]) => e.sorenessArea === e2.sorenessArea && Date.parse(d2) - Date.parse(d) >= 2 * 864e5))
  };
}
export function lighterWeek(trend, load, performance) {
  const reasons = [];
  if (performance.decline) {
    const d = performance.declines?.at(- 1);
    reasons.push(d ? (
      `${d.label}` +
      `: תועדו ` +
      `${d.values.join(' ו־')}` +
      ` לעומת חציון ` +
      `${d.baseline}` +
      ` בשלושת האימונים הקודמים, במאמץ דומה`
    ): 'הביצוע ירד בשני אימונים מול חציון שלושת הקודמים, במאמץ דומה')
  };
  if (trend.lowEnergy) reasons.push('אנרגיה נמוכה בשלושה מארבעת הדיווחים האחרונים');
  if (trend.persistentSoreness) reasons.push('תפיסות באותו אזור בשני דיווחים בהפרש יומיים לפחות');
  if (load.change > 30) reasons.push('עומס האימונים שתיעדת עלה ביותר מ־30% מול ארבעת השבועות הקודמים');
  return {
    editorial: true, suggest: reasons.length >= 2, reasons
  }
}
export function nextAction(c = {
}) {
  let a = c.pain ? {
    id: 'pain', title: 'איך האזור מרגיש היום?', reason: 'דווח כאב שטרם עודכן. נברר את המצב לפני התאמת האימון.',
    cta: 'לעדכון מצב הכאב'
  }: c.severeHeat ? {
    id: 'heat', title: 'כדאי לשנות שעה או מקום', reason: 'בחלון שבחרת צפוי חום משמעותי. אפשר לבחור חלופה בבית.',
    cta: 'לבחון חלופה עם המאמן'
  }: c.unfinished ? {
    id: 'resume', title: 'להמשיך את האימון שהתחלת?', reason: 'נבדוק מחדש כאב, תנאים והתאוששות מול התוכנית לפני המשך.',
    cta: 'לבדיקה לפני המשך'
  }: c.planned && !c.completed && !c.checkInSkipped && !c.readiness.complete &&(c.missingChangesDecision ?? true) ? {
    id: 'checkin', title: 'איך הגוף היום?', reason: 'גם תשובה אחת יכולה לעזור להתאים את היום. אפשר גם לדלג.',
    cta: 'לבדיקת מצב קצרה'
  }: c.readiness?.count >= 2 || c.lighter?.suggest ? {
    id: 'lighter', title: 'כדאי לשקול יום קל יותר', reason: c.lighter?.suggest ? c.lighter.reasons.slice(0,
    2).join(' · '): c.readiness.reason, cta: 'לבחון התאמה עם המאמן'
  }: c.planned && !c.completed ? {
    id: 'workout', title: 'האימון הבא שלך מחכה', reason: c.readiness?.state === 'gradual' ? c.readiness.reason:
    'ההצעה מבוססת על האימונים שתיעדת ועל הימים שבחרת.', cta: 'לפתוח את המאמן'
  }: c.reviewDue ? {
    id: 'review', title: 'דקה לשבוע הבא', reason: 'מבט קצר על מה שבוצע ובחירת עוגן מציאותי להמשך.', cta: 'לסקירה של דקה'
  }: c.rest || c.completed ? {
    id: 'recovery', title: 'היום נותנים מקום להתאוששות', reason: c.anchor?.text || 'מנוחה נשארת חלק מהתוכנית. אין צורך להשלים מאמץ.',
    cta: c.anchor ? 'בחרתי בעוגן הזה': null
  }: c.weeklyAction ? {
    id: 'chosen', title: 'העוגן שבחרת לשבוע', reason: c.weeklyAction, cta: 'בוצע להיום'
  }: {
    id: 'done', title: 'הצעד שלך להיום הושלם', reason: 'אין צורך להוסיף משימה. אפשר להמשיך ביום שלך.',
    cta: null
  };
  if (c.done && ! ['resume', 'pain', 'heat'].includes(a.id)) a = {
    id: 'done', title: 'הצעד שלך להיום הושלם', reason: 'הפעולה נשמרה. אפשר להמשיך ביום שלך.', cta: null
  };
  return a;
}
export function proteinReferences(weight) {
  return valid(weight, 20, 400) ? {
    daily: [Math.round(1.6 * weight), Math.round(2.2 * weight)], meal: [Math.round(.3 * weight), Math.round(.4 * weight)]
  }: null
}
export function sweatRate( {
  preKg, postKg, drinkL, urineL, durationHours
} = {
}) {
  if (!valid(preKg, 20, 400) || !valid(postKg, 20, 400) || !valid(drinkL, 0, 15) || !valid(urineL,
  0, 15) || !valid(durationHours, .05, 12)) return null;
  const rate =(preKg - postKg + drinkL - urineL) / durationHours;
  return rate >= 0 ? rate: null;
}
export function stepReference(checkIns = {
}, now = new Date()) {
  const date = dayKey(now), values = Object.entries(checkIns).filter(( [d, e]) => d <= date && d >= shiftDay(date,
  - 13) && valid(e.steps, 0, 100000)).map(( [, e]) => e.steps);
  return values.length >= 7 ? median(values) + 500: null;
}
export function weeklyReview(profile = {
}, now = new Date()) {
  const week = consistency(profile, now), previous = week.weeks[0], end = new Date(shiftDay(week.start,
  - 1) + 'T23:59:59'), skills = skillFrequency(profile.logs, end), performance = performanceSignal(profile.logs,
  end);
  return {
    sessions: previous?.sessions || 0, skillDays: new Set(datedLogs(profile.logs, end).filter(l => logDate(l) >= shiftDay(week.start,
    - 7) && performed(l).some(s => s.skill || s.phase === 'skill')).map(logDate)).size, progress: performance.records.filter(x => x.kind !==
    'starting').at(- 1) || null
  };
}
export function recoveryAnchor(profile = {
}, now = new Date(), trend = trends(profile.checkIns, now)) {
  const home = profile.home || {
  }, date = dayKey(now), entries = Object.entries(profile.checkIns || {
  }).filter(( [d]) => d <= date).sort(( [a], [b]) => a.localeCompare(b));
  if (home.anchorDismissed === date) return null;
  if (home.fasting) return {
    id: 'fasting', title: 'לתכנן סביב הצום שבחרת', text: (
      'אפשר לתכנן את האימון סביב חלון שבו אפשר לאכול ולשתות, לשמר שינה ולהתאים מאמץ. אין צורך להוסיף ' +
      'מאמץ עצים בחום בזמן הימנעות משתייה.'
    )
  };
  if (trend.shortSleep || trend.sleepDrop) return {
    id: 'sleep', title: 'לתת מקום ללילה', text: 'בדיווחים האחרונים השינה קצרה. אפשר לפנות עוד חצי שעה לשינה הערב.'
  };
  const protein = entries.filter(( [d, e]) => d >= shiftDay(date, - 13) && typeof e.proteinTargetHit === 'boolean').slice(- 5);
  if (!home.hidden?.includes('nutrition') && protein.length === 5 && protein.filter(( [, e]) => !e.proteinTargetHit).length >= 3) {
    const weight = !home.hidden?.includes('weight') ? entries.filter(( [d, e]) => d >= shiftDay(date,
    - 29) && valid(e.weightKg, 20, 400)).at(- 1)?.[1].weightKg: null;
    const reference = proteinReferences(weight);
    return {
      id: 'protein', title: 'עוגן החלבון הבא', text: (
        `בשלושה לפחות מחמשת הדיווחים לא סומן יעד החלבון. בארוחה הקרובה אפשר לבחור מקור חלבון שמתאים לך.` +
        `${weight ? (
          ` טווח תכנון יומי לפי המשקל שאישרת: ` +
          `${reference.daily[0]}` +
          `–` +
          `${reference.daily[1]}` +
          ` גרם; לארוחה ` +
          `${reference.meal[0]}` +
          `–` +
          `${reference.meal[1]}` +
          ` גרם. הכמות היומית קודמת לתזמון; הטווח לארוחה אינו מבטיח אותה.`
        ): ''}`
      )
    };
  }
  if (home.bedtime && home.caffeineInterest) {
    const[h, m] = home.bedtime.split(':').map(Number);
    return {
      id: 'caffeine', title: 'לשמור על הלילה', text: (
        `אם קפאין מפריע לשינה שלך, אפשר לנסות כוס אחרונה סביב ` +
        `${String((h + 16) % 24).padStart(2, '0')}` +
        `:` +
        `${String(m).padStart(2, '0')}` +
        ` ולבחון תחושה במשך שבוע. זו הצעת ניסוי, לא סף אישי; מינון ורגישות עשויים לדרוש הפסקה מוקדמת ` +
        `יותר. אין להשתמש בקפאין כדי לפצות על שינה חסרה.`
      )
    }
  }
  if (home.creatineChosen && profile.adult) return {
    id: 'creatine', title: 'הבחירה שלך בשגרה', text: (
      'למי שכבר לבחור בקריאטין: מינון תחזוקה מקובל הוא 3–5 גרם ביום. אין חובה להעמיס; עלייה התחלתית ' +
      'במשקל עשויה לכלול מים.'
    )
  };
  const steps = entries.filter(( [d, e]) => d >= shiftDay(date, - 13) && valid(e.steps, 0, 100000));
  if (!home.hidden?.includes('steps') && home.stepTarget && steps.length >= 7 && median(steps.map(( [,
  e]) => e.steps)) < home.stepTarget) return {
    id: 'steps', title: 'תנועה קטנה ביום שלך', text: 'הליכה קצרה יכולה להשתלב ביום המנוחה. יעד הצעדים שבחרת הוא הקשר, לא חוב שצריך להשלים.'
  };
  if (home.daylightInterest && now.getHours() < 11) return {
    id: 'daylight', title: 'אור יום בקצב שלך', text:
    'אפשר לצאת לאור יום ולשלב הליכה קצרה, עם הגנה מהשמש ובהתאם לתנאים. אין צורך בשמש ישירה או להביט בשמש.'
  };
  if (home.habit) return {
    id: 'habit', title: 'ההרגל שבחרת', text: home.habit
  };
  return null;
}
export function homeSignals(profile = {
}, catalog = {
}, now = new Date(), weather = null) {
  const normalized = Object.fromEntries(Object.entries(profile.checkIns || {
  }).map(( [d, e]) => [d, e.soreness !== undefined && e.sorenessScale !== 4 ? {
    ... e, soreness: Math.max(0, e.soreness - 1)
  }: e]));
  profile = {
    ... profile, checkIns: normalized
  };
  const date = dayKey(now), home = profile.home || {
  }, pain = painStatus(profile, date), ready = readiness(profile.checkIns?.[date], pain), load = loadSignal(profile.logs,
  now), patterns = patternSignal(profile.logs, catalog, now), week = consistency(profile, now), skills = skillFrequency(profile.logs,
  now), performance = performanceSignal(profile.logs, now, catalog), trend = trends(profile.checkIns,
  now), lighter = lighterWeek(trend, load, performance), baseAnchor = recoveryAnchor(profile, now,
  trend), anchor = baseAnchor?.id === 'daylight' && weather?.selected?.hot ? null: baseAnchor;
  const weekday = new Date(date + 'T12:00Z').getUTCDay(), completed = datedLogs(profile.logs, now).some(l => logDate(l) === date && performed(l).
  length), rest =(home.restDates || []).includes(date) ||(home.sabbathRest && weekday === 6), planned = !rest &&(profile.days || []).includes(
  weekday), reviewKey = shiftDay(date, -((weekday -(home.reviewDay ?? 6) + 7) % 7)), historyStart = profile.createdAt ? dayKey(new Date(profile.
  createdAt)): datedLogs(profile.logs, now)[0]?.local_date || week.start, reviewDue =(reviewKey >= historyStart || home.reviewAvailable ===
  reviewKey) && home.reviewCompleted !== reviewKey && home.reviewDismissed !== reviewKey;
  const saved = profile.session, block = saved?.plan?.blocks?.[saved.index], unfinished = !!saved && !saved.completed;
  const action = nextAction( {
    unfinished, resumeReason: block ? (
      `${catalog[block.id]?.he || block.he || 'המקטע הבא'}` +
      ` · ` +
      `${( {
        warmup: 'חימום', warm: 'חימום', skill: 'סקיל', work: 'כוח', rest: 'מנוחה', cooldown: 'שחרור'
      })[block.phase] || 'המשך האימון'}`
    ): 'נמשיך מהמקטע שבו עצרת.', pain, severeHeat: weather?.severe === true, planned, completed, rest: rest || !planned,
    readiness: ready, lighter, anchor, reviewDue, weeklyAction: home.weeklyAction, checkInSkipped: home.checkInSkipped === date,
    missingChangesDecision: ready.count < 2 && !lighter.suggest, done: home.actionDone === date
  });
  let insight = null;
  if (action.id !== 'lighter' && lighter.suggest) insight = {
    id: 'lighter', text: lighter.reasons.slice(0, 2).join(' · ')
  };
  else if (! ['lighter', 'recovery'].includes(action.id) &&(trend.sleepDrop || trend.shortSleep)) insight = {
    id: 'sleep', text: trend.sleepDrop ? (
      `ממוצע השינה בשבעת הימים המדווחים: ` +
      `${trend.sleepMean.toFixed(1)}` +
      ` שעות, לעומת חציון ` +
      `${trend.sleepBaseline}` +
      ` ב־28 הימים הקודמים.`
    ): 'בשלושה לילות מדווחים מתוך חמישה השינה הייתה קצרה משבע שעות.'
  };
  else {
    const record = performance.records.filter(x => x.kind !== 'starting' && !(home.seenRecords || []).includes(x.key + '|' + x.date)).at(- 1);
    if (record && !pain) insight = {
      id: 'record', record, text: (
        `${catalog[record.exercise]?.he || 'התרגיל שתיעדת'}` +
        ` · ` +
        `${record.kind === 'milestone' ? 'אבן דרך ראשונה שתועדה': record.kind === 'effort' ? 'שיפור בתיעוד באותה רמת מאמץ': record.kind === 'stable' ?
        'הסף תועד בשני אימונים נפרדים בתוך 21 יום': record.verified ? 'שיא בתנאים שאישרת': 'שיא בתיעוד שלך'}` +
        `: ` +
        `${record.actual}` +
        ` ` +
        `${record.unit === 'seconds' ? 'שניות': 'חזרות'}` +
        `, ` +
        `${record.baseline === null ? 'נקודת פתיחה לתיעוד הבא': (
          `לעומת ` +
          `${record.baseline}` +
          ` באותה וריאציה ותנאים`
        )}` +
        `.`
      )
    }
  }
  return {
    date, ready, load, patterns, week, skills, performance, trend, lighter, anchor, action, insight,
    reviewDue, reviewKey, completed, planned
  };
}
