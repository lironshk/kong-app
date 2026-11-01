import {
  validateForecast
}
from './home-weather.js?v=32';
export function validateHome(h = {
}) {
  const fail =() => {
    throw Error('invalid-home')
  }, date = v => typeof v === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(v) && !Number.isNaN(Date.parse(v)) && new Date(v + 'T12:00Z').toISOString().
  slice(0, 10) === v;
  const text =(v, n = 500) => typeof v === 'string' && v.length <= n, num =(v, a, b) => Number.isFinite(v) && v >= a && v <= b;
  if (!h || typeof h !== 'object' || Array.isArray(h)) fail();
  const dates = ['actionDone', 'anchorDismissed', 'checkInSkipped', 'reviewCompleted', 'reviewDismissed',
  'reviewAvailable'];
  const bools = ['lessonsOff', 'fasting', 'sabbathRest', 'supplementInterest', 'creatineChosen', 'caffeineInterest',
  'daylightInterest', 'parkPlanning'];
  const arrays = ['hidden', 'hiddenLessons', 'lessCategories', 'seenRecords'];
  const known = [... dates, ... bools, ... arrays, 'habit', 'weeklyAction', 'reviewObstacle', 'bedtime',
  'reviewDay', 'weekStart', 'restDates', 'pausedWeeks', 'targetHistory', 'lessonHistory', 'weather',
  'skill', 'stepTarget'];
  for (const[k, v] of Object.entries(h)) {
    if (!known.includes(k)) fail();
    if (dates.includes(k) && !date(v)) fail();
    if (bools.includes(k) && typeof v !== 'boolean') fail();
    if (arrays.includes(k) &&(!Array.isArray(v) || v.length > 1000 || !v.every(x => text(x, 1000)))) fail();
    if ( ['habit', 'weeklyAction', 'reviewObstacle', 'skill'].includes(k) && !text(v)) fail();
    if (k === 'bedtime' && !/^([01]\d|2[0-3]):[0-5]\d$/.test(v)) fail();
    if ( ['weekStart', 'reviewDay'].includes(k) &&(!Number.isInteger(v) || !num(v, 0, 6))) fail();
    if (k === 'stepTarget' &&(!Number.isInteger(v) || !num(v, 0, 100000))) fail();
    if ( ['restDates', 'pausedWeeks'].includes(k) &&(!Array.isArray(v) || v.length > 1000 || !v.every(date))) fail();
    if (k === 'targetHistory' &&(!Array.isArray(v) || v.length > 1000 || !v.every(x => date(x.date) && Number.isInteger(x.target) && num(x.target
    , 1, 14)))) fail();
    if (k === 'lessonHistory' &&(!Array.isArray(v) || v.length > 1000 || !v.every(x => date(x.date) &&(x.read === undefined || typeof x.read ===
    'boolean') && /^lesson-([1-9]|[1-3]\d|4[0-8])$/.test(x.id) && ['training', 'nutrition', 'sleep',
    'weather', 'habits'].includes(x.category)))) fail();
    if (k === 'weather') {
      if (!v || typeof v !== 'object' || Array.isArray(v) || Object.keys(v).some(x => ! ['consent', 'dismissed',
      'city', 'cache', 'windows', 'selectedWindow'].includes(x))) fail();
      for (const b of['consent', 'dismissed']) if (v[b] !== undefined && typeof v[b] !== 'boolean') fail();
      if (v.city &&(!text(v.city.name, 80) || !num(v.city.latitude, - 90, 90) || !num(v.city.longitude,
      - 180, 180))) fail();
      if (v.cache) {
        if (!Number.isFinite(Date.parse(v.cache.updated_at))) fail();
        validateForecast(v.cache.data)
      }
      if (v.windows &&(!Array.isArray(v.windows) || v.windows.length > 14 || !v.windows.every(w => Number.isInteger(w.start) && Number.isInteger(
      w.end) && num(w.start, 0, 22) && num(w.end, w.start + 2, 24)))) fail();
      if (v.selectedWindow && !Number.isFinite(Date.parse(v.selectedWindow))) fail();
    }
  }
  return structuredClone(h);
}
