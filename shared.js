import {
  localDateKey
}
from './calendar.js?v=31';
import {
  glossary
}
from './data/glossary.js?v=31';
import {
  skills
}
from './data/skills.js?v=31';
import {
  state
}
from './state.js?v=31';
const $ = s => document.querySelector(s), $$ = s => [... document.querySelectorAll(s)];
const he =() => true, t =(a, b) => he() ? a: b, user =() => state.db.users.find(u => u.id === state.db.active),
nameOf = e => he() ? e.he: e.en;
const days =() => he() ? ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת']: ['Sunday', 'Monday',
'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const shortDays =() => he() ? ['א׳', 'ב׳', 'ג׳', 'ד׳', 'ה׳', 'ו׳', 'ש׳']: ['Sun', 'Mon', 'Tue', 'Wed',
'Thu', 'Fri', 'Sat'];
const groups = {
  push: [glossary.push, 'Push'], pull: ['משיכה', 'Pull'], legs: ['רגליים', 'Legs'], core: ['ליבה',
  'Core'], skill: ['סקיל', 'Skill'], mobility: ['תנועה', 'Mobility']
};
const equipmentNames = {
  wall: ['קיר', 'Wall'], band: ['גומייה', 'Band'], lowbar: ['מוט נמוך', 'Low bar'], bar: ['מתח', 'Pull-up bar'],
  parallel: ['מקבילים', 'Parallel bars'], parallettes: ['מקבילונים', 'Parallettes'], rings: ['טבעות',
  'Rings'], bench: ['משטח יציב', 'Stable bench'], anchor: ['נקודת עיגון', 'Anchor'], box: ['ארגז',
  'Box'], pole: ['עמוד', 'Pole']
};
const goalNames = {
  strength: ['כוח ובניית בסיס', 'Strength & foundation'], endurance: ['סיבולת והתמדה', 'Endurance'],
  core: ['שליטה ויציבות', 'Core control'], skills: ['הדרך לסקיל הבא', 'Skill foundations']
};
function tx(pair) {
  return pair?.[he() ? 0: 1] || ''
}
function equipmentLabel(id) {
  return tx(equipmentNames[id]) || id
}
function goalLabel(id) {
  return tx(goalNames[id]) || id
}
function on(id, handler) {
  const el = $(id);
  if (el) el.onclick = handler
}
function change(id, handler) {
  const el = $(id);
  if (el) el.onchange = handler
}
function dayIndex() {
  return new Date(localDateKey() + 'T12:00:00Z').getUTCDay()
}
function pageHead(kicker, title, sub = '', action = '') {
  return(`<div class="page-header"><div><span class="eyebrow">` + (
    `${kicker}`
  ) + `</span><h1>` + (
    `${title}`
  ) + `</h1>` + (
    `${sub ?(`<p class="muted">` + (
      `${sub}`
    ) + `</p>`): ''}`
  ) + `</div>` + (
    `${action}`
  ) + `</div>`)
}
export {
  $, $$, he, t, user, nameOf, days, shortDays, groups, equipmentNames, goalNames, tx, equipmentLabel,
  goalLabel, on, change, dayIndex, pageHead
};
