import {
  normalizeName
}
from './exercise-matcher.js?v=32';
// Admin-only list of exercises seen elsewhere and not yet in the catalogue.
// Stored on this device only; it reaches the catalogue when exported and added in a Claude session.
const KEY = 'kong-exercise-inbox-v1', FLAG = 'kong-admin-v1';
function read(key) {
  try {
    return globalThis.localStorage?.getItem(key) ?? null;
  } catch {
    return null;
  }
}
function write(key, value) {
  try {
    if (value === null) globalThis.localStorage?.removeItem(key);
    else globalThis.localStorage?.setItem(key, value);
    return true;
  } catch {
    return false;
  }
}
export function isAdmin() {
  return read(FLAG) === '1';
}
export function setAdmin(on) {
  return write(FLAG, on ? '1': null);
}
export function loadInbox() {
  try {
    const list = JSON.parse(read(KEY) || '[]');
    return Array.isArray(list) ? list.filter(x => x && typeof x.name === 'string'): [];
  } catch {
    return [];
  }
}
function saveInbox(list) {
  return write(KEY, JSON.stringify(list));
}
/** Adds a request unless the same normalized name is already listed. Returns false on duplicate or storage failure. */
export function addRequest( {
  name, note = '', closest = null
}, now = new Date()) {
  const clean = String(name || '').trim().slice(0, 120);
  if (!normalizeName(clean)) return false;
  const list = loadInbox();
  if (list.some(x => normalizeName(x.name) === normalizeName(clean))) return false;
  list.push( {
    name: clean, note: String(note || '').trim().slice(0, 400), closest, addedAt: now.toISOString().slice(0, 10)
  });
  return saveInbox(list);
}
export function removeRequest(name) {
  return saveInbox(loadInbox().filter(x => x.name !== name));
}
export function clearInbox() {
  return saveInbox([]);
}
export function inboxText(list = loadInbox()) {
  const lines = list.map((x, i) =>(
    `${i + 1}. ${x.name}` +
    `${x.note ? ` — הערה: ${x.note}`: ''}` +
    `${x.closest ? ` — הכי קרוב באפליקציה: ${x.closest.id} (${x.closest.score})`: ''}` +
    ` — נרשם ${x.addedAt}`
  ));
  return(
    `תרגילים חסרים ל־KONG (${list.length}). להוסיף לספרייה עם שרירים, הוראות ורמה:\n` +
    `${lines.join('\n')}\n\n` +
    `JSON:\n${JSON.stringify(list, null, 2)}`
  );
}
