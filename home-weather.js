// All HTTP access is gated here. Forecasts live in profile storage, never the SW.
export const weatherPolicy =(weather = {
}, now = Date.now(), online = true) => {
  const age = now - Date.parse(weather.cache?.updated_at || '');
  const consent = weather.consent === true, located = Number.isFinite(weather.city?.latitude) && Number.isFinite(weather.city?.longitude);
  return {
    fetch: consent && located && online &&(!Number.isFinite(age) || age < 0 || age > 3 * 36e5), display: consent && located && online && Number.
    isFinite(age) && age >= 0 && age <= 6 * 36e5, age
  };
};
export function validateForecast(data) {
  const h = data?.hourly, keys = ['temperature_2m', 'apparent_temperature', 'precipitation_probability',
  'uv_index'];
  if (!h || !Array.isArray(h.time) || h.time.length < 2 || h.time.length > 192 || !h.time.every((v,
  i) => Number.isFinite(v) &&(i === 0 || v > h.time[i - 1]))) throw Error('invalid-weather');
  for (const key of keys) if (!Array.isArray(h[key]) || h[key].length !== h.time.length || h[key].some(v => !Number.isFinite(v))) throw Error(
  'invalid-weather');
  if (h.temperature_2m.some(v => v < - 90 || v > 65) || h.apparent_temperature.some(v => v < - 110 || v > 90) || h.precipitation_probability.some
  (v => v < 0 || v > 100) || h.uv_index.some(v => v < 0 || v > 30)) throw Error('invalid-weather');
  return {
    hourly: {
      time: [... h.time], ... Object.fromEntries(keys.map(k => [k, [... h[k]]]))
    }
  };
}
export function heatGuidance( {
  temperature, apparent, rain, uv
}) {
  return {
    severe: temperature >= 35 || apparent >= 38, hot: temperature >= 30 || apparent >= 32, rain: rain >= 50,
    uv: uv >= 3, highUV: uv >= 8, text: [ (
      'ספי התחזית הם התראות מוצר, לא גבולות בטיחות; טמפרטורה מורגשת אינה מדד עומס חום מקומי באתר. שמש ' +
      'ישירה, מאמץ, הסתגלות לחום ותסמינים קודמים לתחזית. בחזרה לחום להתרגל בהדרגה כשבוע עד שבועיים ' +
      'ולבחור חלופה קרירה.'
    ), temperature >= 35 || apparent >= 38 ? 'לא מומלץ אימון עצים בחוץ בחלון הזה. לבחור שעה או מקום אחרים.': temperature >= 30 || apparent >= 32
    ? 'כדאי לבחור שעה קרירה יותר, מים זמינים והפסקות בצל.': null, rain >= 50 ? 'ייתכן גשם; כדאי להכין חלופה ולבדוק את המתקנים בשטח.': null,
    uv >= 8 ? 'קרינה גבוהה: כדאי להימנע מחשיפה בצהריים.': uv >= 3 ? 'כדאי לבחור צל והגנה מהשמש.': null].filter(Boolean).join(' ')
  };
}
export function forecastWindows(weather = {
}, now = new Date(), online = true) {
  if (!weatherPolicy(weather, + now, online).display) return null;
  let h;
  try {
    h = validateForecast(weather.cache.data).hourly
  } catch {
    return null
  }
  const windows = [];
  for (let i = 0;
  i < h.time.length - 1;
  i++) {
    const start = new Date(h.time[i] * 1000), hour = Number(new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Asia/Jerusalem', hour: '2-digit', hourCycle: 'h23'
    }).format(start));
    if (+ start < + now || + start > + now + 48 * 36e5 || h.time[i + 1] - h.time[i] !== 3600) continue;
    const allowed = weather.windows || [];
    if (allowed.length && !allowed.some(w => hour >= w.start && hour + 2 <= w.end)) continue;
    const conditions = {
      temperature: Math.max(... h.temperature_2m.slice(i, i + 2)), apparent: Math.max(... h.apparent_temperature.slice(i,
      i + 2)), rain: Math.max(... h.precipitation_probability.slice(i, i + 2)), uv: Math.max(... h.uv_index.slice(i,
      i + 2))
    };
    windows.push( {
      start: start.toISOString(), hour, ... conditions, ... heatGuidance(conditions)
    });
  }
  const eligible = windows.filter(w => !w.severe && !w.rain && !w.highUV).sort((a, b) => a.apparent - b.apparent || a.start.localeCompare(b.start
  ));
  const selected = windows.find(w => w.start === weather.selectedWindow) || null;
  return {
    options: eligible.slice(0, weather.windows?.length ? 1: 2), selected, severe: selected?.severe === true,
    updated_at: weather.cache.updated_at, city: weather.city.name, unavailable: eligible.length === 0
  };
}
async function json(url, fetcher) {
  const response = await fetcher(url, {
    cache: 'no-store', credentials: 'omit', referrerPolicy: 'no-referrer', signal: AbortSignal.timeout(12000)
  });
  if (!response.ok) throw Error('weather-network');
  return response.json()
}
export async function searchCities(name, {
  consent = false, fetcher = globalThis.fetch
} = {
}) {
  if (!consent) throw Error('weather-consent');
  if (typeof name !== 'string' || name.trim().length < 2 || name.length > 80) return[];
  const url = new URL('https://geocoding-api.open-meteo.com/v1/search');
  url.search = new URLSearchParams( {
    name: name.trim(), count: '6', language: 'he', format: 'json'
  });
  const data = await json(url, fetcher);
  return(data.results || []).filter(c => typeof c.name === 'string' && Number.isFinite(c.latitude) && Math.abs(c.latitude) <= 90 && Number.
  isFinite(c.longitude) && Math.abs(c.longitude) <= 180).map(c =>( {
    name: c.name.slice(0, 80), latitude: c.latitude, longitude: c.longitude, country: c.country || ''
  }));
}
export async function fetchForecast(weather, {
  now = new Date(), online = true, fetcher = globalThis.fetch
} = {
}) {
  if (!weatherPolicy(weather, + now, online).fetch) return weather.cache || null;
  const url = new URL('https://api.open-meteo.com/v1/forecast');
  url.search = new URLSearchParams( {
    latitude: String(weather.city.latitude), longitude: String(weather.city.longitude), hourly:
    'temperature_2m,apparent_temperature,precipitation_probability,uv_index', timezone: 'Asia/Jerusalem',
    timeformat: 'unixtime', forecast_days: '3'
  });
  return {
    updated_at: now.toISOString(), data: validateForecast(await json(url, fetcher))
  };
}
