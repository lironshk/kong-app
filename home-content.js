import {
  homeContent
}
from './data/home-content.js?v=32';
import {
  shiftDay
}
from './home-signals.js?v=32';
export function lessonContexts(profile, signals) {
  const ids = [4, 46];
  if (profile.goal === 'strength') ids.unshift(3);
  if (profile.goal === 'skills') ids.unshift(9, 10);
  if (signals.lighter.suggest) ids.unshift(12);
  if (signals.trend.shortSleep || signals.trend.sleepDrop) ids.unshift(25, 26, 27);
  if (signals.anchor?.id === 'protein') ids.unshift(16, 13, 18);
  if (signals.completed) ids.unshift(19);
  if (!signals.planned) ids.unshift(15, 40, 48);
  if (profile.home?.fasting) ids.unshift(47);
  if (signals.performance.records.length) ids.unshift(2);
  return ids;
}
export function selectLesson( {
  date, history = [], hidden = [], less = [], contexts = [], supplementInterest = false, creatineChosen = false,
  caffeineInterest = false, fasting = false, hiddenCategories = []
} = {
}) {
  const today = history.filter(x => x.date === date).at(- 1);
  if (today?.read === true) return null;
  const current = today && homeContent.find(x => x.id === today.id);
  if (current && !hidden.includes(current.id) && !hiddenCategories.includes(current.category) &&(!(current.number >= 21 && current.number <= 23)
  || supplementInterest || creatineChosen) &&(current.number !== 24 || caffeineInterest) &&(current.number !== 47 || fasting)) return current;
  const reads = history.filter(x => x.date <= date).sort((a, b) => b.date.localeCompare(a.date)), recent = new Set(reads.filter(x => x.date >=
  shiftDay(date, - 29)).map(x => x.id));
  const yesterday = reads.find(x => x.date === shiftDay(date, - 1)), before = reads.find(x => x.date === shiftDay(date,
  - 2)), blocked = yesterday?.category === before?.category ? yesterday?.category: null;
  const candidates = homeContent.filter(x => !hidden.includes(x.id) && !recent.has(x.id) && !hiddenCategories.includes(x.category) &&(x.category
  !== blocked ||(x.category === 'weather' && contexts.includes(x.number))) &&(!(x.number >= 21 && x.number <= 23) || supplementInterest ||
  creatineChosen) &&(x.number !== 22 || creatineChosen) &&(x.number !== 24 || caffeineInterest) &&(x.number !== 47 || fasting));
  return candidates.map((x, i) =>( {
    x, score:(contexts.includes(x.number) ? 100 - contexts.indexOf(x.number): 0) -(less.includes(x.category) ? 200: 0),
    i
  })).sort((a, b) => b.score - a.score || a.i - b.i)[0]?.x || null;
}
export function recordLesson(history = [], lesson, date, {
  read = true
} = {
}) {
  return[... history.filter(x => !(x.id === lesson.id && x.date === date)), {
    id: lesson.id, category: lesson.category, date, read
  }].slice(- 1000)
}
