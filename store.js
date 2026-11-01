import {trainingStyle, trainingDays} from './session-structure.js?v=31';
import {
  conditionsKnown, equipmentSchema
}
from './training-evidence.js?v=31';
import {
  skills
}
from './data/skills.js?v=31';
import {
  skillSelections
}
from './skill-progress.js?v=31';
import {
  validateHome
}
from './home-storage.js?v=31';
import {
  sessionMinutes
}
from './session-settings.js?v=31';
const KEY = 'form-coach-v1';
const RECOVERY_KEY = 'form-coach-recovery-v1';
const MAX_LENGTH = 8_000_000;
let pendingRecovery = null, persistenceBlocked = false;
const ID = /^[A-Za-z0-9][A-Za-z0-9_.:-]{0,159}$/;
const EQUIPMENT = new Set(equipmentSchema);
const fail =() => {
  throw Error('invalid-profile')
};
const finite =(v, min = 0, max = 999) => typeof v === 'number' && Number.isFinite(v) && v >= min && v <= max;
const identifier = v => typeof v === 'string' && ID.test(v);
// Copy untrusted JSON without retaining references or prototype-bearing keys.
function copyJSON(value, depth = 0, budget = {
  nodes: 0
}) {
  if (++ budget.nodes > 250000 || depth > 20) fail();
  if (value === null || typeof value === 'boolean') return value;
  if (typeof value === 'number') {
    if (!Number.isFinite(value)) fail();
    return value
  }
  if (typeof value === 'string') {
    if (value.length > 20000) fail();
    return value
  }
  if (Array.isArray(value)) {
    if (value.length > 10000) fail();
    return value.map(v => copyJSON(v, depth + 1, budget))
  }
  if (!value || typeof value !== 'object' || ! [Object.prototype, null].includes(Object.getPrototypeOf(value))) fail();
  const result = {
  };
  for (const[key, v] of Object.entries(value)) {
    if ( ['__proto__', 'prototype', 'constructor'].includes(key)) fail();
    if ((key === 'id' || key.endsWith('_id')) && v !== null && !identifier(v)) fail();
    if ( ['url', 'href', 'src', 'videoUrl', 'imageUrl'].includes(key) && typeof v === 'string' && !/^(https?:\/\/|\.\/?|\/[^/]|assets\/)/i.test(v
    )) fail();
    result[key] = copyJSON(v, depth + 1, budget);
  }
  return result;
}
function equipment(values) {
  return Array.isArray(values) && values.every(x => EQUIPMENT.has(x))
}
function checkPlan(plan) {
  if (!plan || !Array.isArray(plan.blocks) || plan.blocks.length > 2000 || typeof plan.rule_version !== 'string') fail();
  for (const b of plan.blocks) {
    if (!b || !identifier(b.id) || ! ['warm', 'work', 'skill', 'rest', 'cool', 'recovery'].includes(b.phase) || !finite(b.seconds,
    0, 7200)) fail();
    if ( ['work', 'skill'].includes(b.phase) &&(!(b.assessment === true && b.target === null) && !finite(b.target,
    0, 999) || ! ['seconds', 'reps'].includes(b.unit))) fail()
  }
}
function checkSets(sets) {
  if (!Array.isArray(sets) || sets.length > 2000) fail();
  for (const s of sets) {
    if (!s || !identifier(s.id) || !identifier(s.performed_exercise_id) || !finite(s.actual) ||(!(s.assessment === true && s.target === null) &&
    !finite(s.target)) || ! ['seconds', 'reps'].includes(s.unit) || ! ['good', 'uncertain'].includes(s.quality)) fail();
    if (s.effort !== undefined && !['easy', 'normal', 'hard'].includes(s.effort)) fail();
    if (s.rir !== undefined && !finite(s.rir, 0, 10)) fail();
    if (s.skillStage !== undefined &&(!Number.isInteger(s.skillStage) || s.skillStage < 0 || s.skillStage > 100)) fail();
    if (s.technique_confirmed !== undefined && typeof s.technique_confirmed !== 'boolean') fail();
    for (const k of['technical_reserve_seconds', 'left_actual', 'right_actual']) if (s[k] != null && !finite(s[k],
    0, 999)) fail();
    if (s.tempo != null &&(!s.tempo || typeof s.tempo !== 'object' || ! ['eccentric', 'concentric', 'pause'].every(k => finite(s.tempo[k],
    0, 30)))) fail();
    for (const k of['progression', 'range_of_motion', 'execution_standard', 'pattern', 'skill', 'kind',
    'phase']) if (s[k] !== undefined &&(typeof s[k] !== 'string' || s[k].length > 120)) fail();
    for (const k of['attempts', 'practice_seconds']) if (s[k] !== undefined && !finite(s[k], 0, 7200)) fail();
    if (s.pain !== undefined && typeof s.pain !== 'boolean') fail();
    if (s.warmup !== undefined && typeof s.warmup !== 'boolean') fail();
    if (s.setup != null &&(typeof s.setup !== 'string' || s.setup.length > 120)) fail();
    if (s.assistance != null &&(typeof s.assistance !== 'string' || s.assistance.length > 80)) fail();
    if (s.added_load != null && !finite(s.added_load, 0, 200)) fail();
    if (s.side_allocation != null && s.side_allocation !== 'total_both_sides') fail();
  }
}
function checkLog(log) {
  if (!log || !identifier(log.id) || !Array.isArray(log.sets) || log.sets.length > 2000 || typeof log.completed_at !== 'string' || !Number.
  isFinite(Date.parse(log.completed_at))) fail();
  checkPlan(log.plan);
  if (log.effort !== undefined && ! ['normal', 'hard', 'easy'].includes(log.effort)) fail();
  if (log.note !== undefined &&(typeof log.note !== 'string' || log.note.length > 1000)) fail();
  if (log.duration_minutes !== undefined && !finite(log.duration_minutes, 1, 720)) fail();
  if (log.session_RPE !== undefined && !finite(log.session_RPE, 0, 10)) fail();
  if (log.local_date !== undefined && !validCheckInDate(log.local_date)) fail();
  if (log.pain !== undefined && typeof log.pain !== 'boolean') fail();
  checkSets(log.sets);
}
// Daily entries are optional and keyed by the profile's local calendar date.
export function validateCheckIn(input) {
  const value = copyJSON(input);
  if (!value || Array.isArray(value) || typeof value !== 'object') fail();
  const ranges = {
    sleepHours: [0, 24], sleepQuality: [1, 5], energy: [1, 5], soreness: [0, 5], weightKg: [20, 400],
    steps: [0, 100000], waterGlasses: [0, 60], waterLiters: [0, 15]
  };
  for (const[key, v] of Object.entries(value)) {
    if (key === 'updated_at') {
      if (typeof v !== 'string' || !Number.isFinite(Date.parse(v))) fail()
    } else if (key === 'sorenessScale') {
      if (v !== 4) fail()
    } else if (key === 'pain') {
      if (typeof v !== 'boolean') fail()
    } else if (key === 'proteinTargetHit') {
      if (typeof v !== 'boolean') fail()
    } else if (key === 'sorenessArea') {
      if (typeof v !== 'string' || v.length > 80) fail()
    } else if (!ranges[key] || !finite(v, ... ranges[key]) ||( ['sleepQuality', 'energy', 'soreness',
    'steps'].includes(key) && !Number.isInteger(v))) fail();
  }
  if (value.sorenessScale === 4 && value.soreness > 4) fail();
  return value;
}
export function setDailyCheckIn(profile, date, input) {
  if (!validCheckInDate(date)) fail();
  const entry = validateCheckIn(input);
  profile.checkIns = {
    ... profile.checkIns, [date]: validateCheckIn( {
      ... profile.checkIns?.[date], ... entry
    })
  };
  return entry;
}
function validCheckInDate(date) {
  return typeof date === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(date) && Number.isFinite(Date.parse(date + 'T12:00:00Z')) && new Date(date +
  'T12:00:00Z').toISOString().slice(0, 10) === date
}
function profile(input, {
  newIdentity = false
} = {
}) {
  const u = copyJSON(input);
  if (!u || typeof u.name !== 'string' || !u.name.trim() || u.name.length > 80 || !identifier(u.id) || !Array.isArray(u.logs) || u.logs.length >
  1000 || !Array.isArray(u.days) || !u.days.length || !u.days.every(d => Number.isInteger(d) && d >= 0 && d < 7) || !equipment(u.equipment)) fail
  ();
  for (const k of['push', 'pull', 'legs', 'core']) if (!finite(u[k], 0, k === 'core' ? 600: 200)) fail();
  if (!finite(u.minutes, 10, 90) || ! ['strength', 'endurance', 'core', 'skills'].includes(u.goal)) fail();
  for (const [key, allowed] of Object.entries({trainingStyle: ['full', 'mixed', 'split'],
    sessionStructure: ['mixed', 'sets', 'rounds']})) if (u[key] !== undefined && !allowed.includes(u[key])) fail();
  if (u.dedicatedLegDay !== undefined && typeof u.dedicatedLegDay !== 'boolean') fail();
  if (u.trainingPreferencesOffered !== undefined && typeof u.trainingPreferencesOffered !== 'boolean') fail();
  if (u.sessionExtras !== undefined && (!u.sessionExtras || Array.isArray(u.sessionExtras) ||
    Object.keys(u.sessionExtras).some(k => !['warmup', 'cooldown'].includes(k)) ||
    Object.values(u.sessionExtras).some(v => typeof v !== 'boolean'))) fail();
  if (u.tourSeen !== undefined && typeof u.tourSeen !== 'boolean') fail();
  if (u.tourVersion !== undefined && (!Number.isInteger(u.tourVersion) || u.tourVersion < 0 || u.tourVersion > 1000000)) fail();
  if (u.timerMuted !== undefined && typeof u.timerMuted !== 'boolean') fail();
  if (u.variationFeedback !== undefined) {
    if (!u.variationFeedback || Array.isArray(u.variationFeedback) || Object.keys(u.variationFeedback).length > 500) fail();
    for (const [family, event] of Object.entries(u.variationFeedback)) {
      if (!identifier(family) || !event || !['hard', 'easy'].includes(event.difficulty) ||
        !identifier(event.exerciseId) || !identifier(event.selectedId) || typeof event.changed !== 'boolean' ||
        !Number.isFinite(Date.parse(event.at))) fail();
    }
  }
  u.dedicatedLegDay = u.dedicatedLegDay === true && trainingDays(u) >= 3;
  u.trainingStyle = trainingStyle(u);
  u.sessionStructure ||= 'mixed';
  u.sessionExtras = {warmup: true, cooldown: true, ...u.sessionExtras};
  u.minutes = sessionMinutes(u.minutes);
  if (u.dayMinutes) for (const d of Object.keys(u.dayMinutes)) u.dayMinutes[d] = sessionMinutes(u.dayMinutes[d]);
  if (u.coachPreferences?.minutes != null) u.coachPreferences.minutes = sessionMinutes(u.coachPreferences.minutes);
  u.logs.forEach(checkLog);
  if (u.capabilityCheck !== undefined) {
    const c = u.capabilityCheck;
    if (!c || !Number.isFinite(Date.parse(c.assessedAt)) || !Array.isArray(c.results) || c.results.length > 100) fail();
    for (const r of c.results) {
      if (!r || !identifier(r.id) || !identifier(r.performed_exercise_id) || !conditionsKnown(r) || ! ['seconds',
      'reps'].includes(r.unit) || !finite(r.actual, 1, 999) || !finite(r.target, 1, r.actual) || !Number.isFinite(Date.parse(r.assessedAt))) fail
      ();
    }
  }
  u.skillSelections = skillSelections(u);
  if (u.skillProgress !== undefined) {
    if (!u.skillProgress || Array.isArray(u.skillProgress) || typeof u.skillProgress !== 'object') fail();
    for (const[id, v] of Object.entries(u.skillProgress)) {
      const track = skills.find(s => s.id === id);
      if (!track || !v || !Number.isInteger(v.stage) || v.stage < 0 || v.stage >= track.stages.length || typeof v.achieved !== 'boolean' ||(v.
      since !== undefined && !Number.isFinite(Date.parse(v.since)))) fail();
    }
  }
  u.home = validateHome(u.home);
  if (u.checkIns === undefined) u.checkIns = {
  };
  if (!u.checkIns || typeof u.checkIns !== 'object' || Array.isArray(u.checkIns) || Object.keys(u.checkIns).length > 10000) fail();
  for (const[date, entry] of Object.entries(u.checkIns)) {
    if (!validCheckInDate(date)) fail();
    u.checkIns[date] = validateCheckIn(entry)
  }
  if (u.dayMinutes) {
    if (typeof u.dayMinutes !== 'object' || Array.isArray(u.dayMinutes)) fail();
    for (const[d, m] of Object.entries(u.dayMinutes)) if (!/^[0-6]$/.test(d) || !finite(m, 10, 90)) fail()
  }
  if (u.locations !== undefined &&(!Array.isArray(u.locations) || u.locations.length > 20 || u.locations.some(l => !l || !identifier(l.id) ||
  typeof l.name !== 'string' || l.name.length > 80 || !equipment(l.equipment)))) fail();
  if (u.favorites !== undefined &&(!Array.isArray(u.favorites) || u.favorites.length > 200 || !u.favorites.every(identifier))) fail();
  u.name = u.name.trim();
  u.days = [... new Set(u.days)].sort((a, b) => a - b);
  u.adult = u.adult === true;
  u.limits = !!u.limits;
  u.favorites ??= [];
  u.locations ??= [ {
    id: 'main', name: 'מקום האימון שלי', equipment: [... u.equipment]
  }];
  if (!u.locations.length) u.locations = [ {
    id: 'main', name: 'מקום האימון שלי', equipment: [... u.equipment]
  }];
  if (!u.locations.some(l => l.id === u.activeLocation)) u.activeLocation = u.locations[0].id;
  if (newIdentity) {
    u.id = crypto.randomUUID();
    u.session = null
  } else if (u.session) {
    try {
      checkPlan(u.session.plan);
      checkSets(u.session.sets);
      if (u.session.equipment !== undefined && !equipment(u.session.equipment)) fail();
      if (!Number.isInteger(u.session.index) || u.session.index < 0 || u.session.index > u.session.plan.blocks.length || !Array.isArray(u.session
      .sets) || !u.session.timer || !finite(u.session.timer.left, 0, 7200) || !finite(u.session.timer.started,
      0, Number.MAX_SAFE_INTEGER) || typeof u.session.timer.running !== 'boolean') fail();
      if (u.session.continuous !== undefined && typeof u.session.continuous !== 'boolean') fail();
      if (u.session.guideCandidates !== undefined &&(!Array.isArray(u.session.guideCandidates) || u.session.guideCandidates.length > 2000 || u.
      session.guideCandidates.some(i => !Number.isInteger(i) || i < 0 || i >= u.session.plan.blocks.length || ! ['work',
      'skill'].includes(u.session.plan.blocks[i].phase)))) fail()
    } catch {
      u.session = null
    }
  }
  return u;
}
// Preserve the exact original before any repaired state can replace it. One bounded,
// same-origin slot is retained; a different pending recovery must never replace it.
function preserveRecovery(text, reasons) {
  pendingRecovery = text;
  let backupSaved = false;
  try {
    const previous = localStorage.getItem(RECOVERY_KEY);
    if (previous === text) backupSaved = true;
    else if (previous === null && text.length <= MAX_LENGTH) {
      localStorage.setItem(RECOVERY_KEY, text);
      backupSaved = localStorage.getItem(RECOVERY_KEY) === text
    }
  } catch {
  }
  persistenceBlocked = !backupSaved;
  return {
    needed: true, reasons: [... new Set(reasons)], backupSaved, canPersist: backupSaved
  };
}
export function getRecovery() {
  try {
    return pendingRecovery ?? localStorage.getItem(RECOVERY_KEY)
  } catch {
    return pendingRecovery
  }
}
// Recovery can contain deleted profiles. Explicit purge is safe only once the
// current main value is fully readable, so it cannot destroy its last copy.
export function canDeleteRecovery() {
  try {
    if (pendingRecovery !== null || persistenceBlocked || localStorage.getItem(RECOVERY_KEY) === null) return false;
    const text = localStorage.getItem(KEY);
    if (text === null || text.length > MAX_LENGTH) return false;
    const raw = JSON.parse(text);
    if (!raw || !Array.isArray(raw.users) || raw.users.length > 100 ||(raw.schemaVersion !== undefined && raw.schemaVersion !== 2)) return false;
    const ids = new Set();
    for (const candidate of raw.users) {
      const u = profile(candidate);
      if (ids.has(u.id) ||(candidate.session && !u.session)) return false;
      ids.add(u.id)
    }
    return true;
  } catch {
    return false
  }
}
export function deleteRecoveryBackup() {
  if (!canDeleteRecovery()) return false;
  try {
    localStorage.removeItem(RECOVERY_KEY);
    return localStorage.getItem(RECOVERY_KEY) === null
  } catch {
    return false
  }
}
export function exportRecovery() {
  const text = getRecovery();
  if (text === null) return false;
  const a = document.createElement('a'), url = URL.createObjectURL(new Blob( [text], {
    type: 'text/plain;charset=utf-8'
  }));
  a.href = url;
  a.download = 'ember-storage-recovery.txt';
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return true
}
export function load() {
  let raw, text = null;
  const reasons = [];
  pendingRecovery = null;
  persistenceBlocked = false;
  try {
    text = localStorage.getItem(KEY);
    if (text !== null) {
      if (text.length > MAX_LENGTH) reasons.push('storage-too-large');
      else {
        try {
          raw = JSON.parse(text)
        } catch {
          reasons.push('invalid-json')
        }
      }
    }
  } catch {
    persistenceBlocked = true;
    reasons.push('storage-unavailable')
  }
  const state = {
    schemaVersion: 2, users: [], active: null, lang: raw?.lang === 'en' ? 'en': 'he'
  };
  if (text !== null && !reasons.length) {
    if (!raw || !Array.isArray(raw.users)) reasons.push('invalid-state');
    else if (raw.schemaVersion !== undefined && raw.schemaVersion !== 2) reasons.push('unsupported-schema');
    else {
      if (raw.users.length > 100) reasons.push('profile-limit');
      const ids = new Set();
      for (const candidate of raw.users.slice(0, 100)) {
        try {
          const u = profile(candidate);
          if (ids.has(u.id)) {
            reasons.push('duplicate-profile');
            continue
          }
          if (candidate.session && !u.session) reasons.push('invalid-session');
          state.users.push(u);
          ids.add(u.id)
        } catch {
          reasons.push('invalid-profile')
        }
      }
      state.active = ids.has(raw.active) ? raw.active: null;
    }
  }
  if (reasons.length) state.recovery = text !== null ? preserveRecovery(text, reasons): {
    needed: true, reasons, backupSaved: false, canPersist: false
  };
  else {
    try {
      if (localStorage.getItem(RECOVERY_KEY) !== null) state.recovery = {
        needed: true, reasons: ['saved-recovery'], backupSaved: true, canPersist: true
      }
    } catch {
    }
  }
  return state;
}
export function persist(state) {
  if (persistenceBlocked) return false;
  try {
    const {
      recovery, ... data
    } = state;
    const text = JSON.stringify(data);
    if (text.length > MAX_LENGTH) return false;
    localStorage.setItem(KEY, text);
    pendingRecovery = null;
    return true
  } catch {
    return false
  }
}
export function exportFile(data, name = 'training-profile.json') {
  const a = document.createElement('a'), url = URL.createObjectURL(new Blob( [JSON.stringify(data,
  null, 2)], {
    type: 'application/json'
  }));
  a.href = url;
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}
export function validateImport(input) {
  if (!input || typeof input !== 'object') fail();
  if (JSON.stringify(input).length > 8_000_000) fail();
  if (input.schemaVersion !== undefined && input.schemaVersion !== 2) fail();
  return profile(input.profile || input, {
    newIdentity: true
  })
}
