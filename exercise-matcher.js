import {
  exercises
}
from './data/exercises.js?v=32';
import {
  exerciseAliases
}
from './data/exercise-aliases.js?v=32';
// Name matching for the admin checker and for mapping coach boards to catalogue ids.
// Scores are heuristics for a human decision; a "similar" result never auto-links an exercise.
const STOP = new Set(['with', 'on', 'the', 'a', 'and', 'of', 'to', 'עם', 'על', 'של', 'ב', 'ו']);
export function normalizeName(text) {
  return String(text || '').toLowerCase().normalize('NFKD').replace(/[֑-ׇ̀-ͯ]/g, '')
  .replace(/[׳'`’]/g, '').replace(/[־\-_/\\.,:;()[\]+&×*!?"״]/g, ' ').replace(/\s+/g, ' ').trim();
}
const singular = w => w === 'ups' ? 'up': w.length > 3 && /[a-z]s$/.test(w) && !w.endsWith('ss') ? w.slice(0, - 1): w;
const tokens = text => normalizeName(text).split(' ').filter(w => w && !STOP.has(w)).map(singular);
const dice =(a, b) => {
  if (!a.length || !b.length) return 0;
  const counts = new Map();
  a.forEach(x => counts.set(x,(counts.get(x) || 0) + 1));
  let hit = 0;
  b.forEach(x => {
    if (counts.get(x) > 0) {
      hit++;
      counts.set(x, counts.get(x) - 1);
    }
  });
  return 2 * hit /(a.length + b.length);
};
const grams = text => {
  const s = ` ${text} `, out = [];
  for (let i = 0;
  i < s.length - 2;
  i++) out.push(s.slice(i, i + 3));
  return out;
};
function nameScore(query, name) {
  const a = tokens(query), b = tokens(name);
  const ja = a.join(' '), jb = b.join(' ');
  if (!ja || !jb) return 0;
  if (ja === jb) return 1;
  return Math.max(dice(a, b), .9 * dice(grams(ja), grams(jb)));
}
export function catalogueNames(e) {
  return [e.he, e.en, ...(exerciseAliases[e.id] || [])].filter(Boolean);
}
/** Returns {status: 'exists'|'similar'|'missing', matches:[{id, he, en, score, via}]}. */
export function matchExercise(query, {
  catalogue = exercises, limit = 3
} = {
}) {
  if (!normalizeName(query)) return {
    status: 'missing', matches: []
  };
  // Explicit aliases resolve catalogue name ties (some legacy display names are shared).
  const normalized = normalizeName(query);
  const aliasIds = new Set(Object.entries(exerciseAliases)
    .filter(([, names]) => names.some(name => normalizeName(name) === normalized)).map(([id]) => id));
  const ranked = catalogue.map(e => {
    let best = 0, via = '';
    for (const name of catalogueNames(e)) {
      const score = nameScore(query, name);
      if (score > best) {
        best = score;
        via = name;
      }
    }
    return {
      id: e.id, he: e.he, en: e.en, score: Math.round(best * 100) / 100, via
    };
  }).filter(m => m.score >= .45).sort((a, b) =>
    b.score - a.score || Number(aliasIds.has(b.id)) - Number(aliasIds.has(a.id))).slice(0, limit);
  const top = ranked[0]?.score || 0;
  return {
    status: top >= .999 ? 'exists': top >= .6 ? 'similar': 'missing', matches: ranked
  };
}
