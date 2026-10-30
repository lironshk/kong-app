// Deliberately small local parser. It never pretends to be a remote AI coach.
// Only explicit supported constraints are returned; the user reviews them before training.
import {
  SESSION_DURATIONS
}
from './session-settings.js?v=31';
export function parseSessionIntent(input, lang = 'he') {
  const text = String(input ?? '').slice(0, 500).trim().toLowerCase();
  const result = {
    minutes: null, readiness: null, equipment: null, excludedEquipment: [], recognized: [], unresolved: false
  };
  const minute = text.match(/(?:^|\s)(\d{1,3})\s*(?:דקות|דק[׳']?|minutes?|mins?)(?=\s|[,.!?]|$)/u);
  if (minute) {
    const n = Number(minute[1]);
    if (SESSION_DURATIONS.includes(n)) {
      result.minutes = n;
      result.recognized.push('minutes')
    } else result.unresolved = true
  }
  const readinessText = text.replace(/(?:אין|בלי|ללא)\s+(?:כאב|פציעה)|no\s+(?:pain|injury)/gu, '').replace(/לא\s+עיי[פף](?:ה)?|not\s+tired/gu,
  '');
  if (/כאב|כואב|פציעה|injur|\bpain\b/u.test(readinessText)) {
    result.readiness = 'pain';
    result.recognized.push('readiness')
  } else if (/עיי[פף]|עייפ|עייף|עייפה|יום קל|קל יותר|tired|easy day|lighter/u.test(readinessText)) {
    result.readiness = 'tired';
    result.recognized.push('readiness')
  }
  if (/בלי ציוד|ללא ציוד|no equipment|without equipment/u.test(text)) {
    result.equipment = [];
    result.recognized.push('equipment')
  } else {
    const terms = [ ['bar', /מתח|pull[ -]?up bar/u], ['lowbar', /מוט נמוך|low bar/u], ['band', /גומיי?ה|גומיות|\bbands?\b/u],
    ['wall', /קיר|\bwall\b/u], ['parallel', /מקבילים|parallel bars/u], ['parallettes', /מקבילונים|parallettes/u],
    ['rings', /טבעות|\brings\b/u]];
    const negativeParts = [... text.matchAll( new RegExp(
      "(?:בלי|ללא|אין)\\s+(?:מתח|מוט " +
      "נמוך|גומיי?ה|קיר|מקבילים|מקבילונים|טבעות)|(?:no|without)\\s+(?:pull[ -]?up bar|low " +
      "bar|bands?|wall|parallel bars|parallettes|rings)",
      'gu'
    ))].map(m => m[0]);
    result.excludedEquipment = terms.filter(( [, pattern]) => negativeParts.some(part => pattern.test(part))).map(( [id]) => id);
    const equipmentText = text.replace( new RegExp(
      "(?:בלי|ללא|אין)\\s+(?:מתח|מוט " +
      "נמוך|גומיי?ה|קיר|מקבילים|מקבילונים|טבעות)|(?:no|without)\\s+(?:pull[ -]?up bar|low " +
      "bar|bands?|wall|parallel bars|parallettes|rings)",
      'gu'
    ), '');
    const equipment = terms.filter(( [, pattern]) => pattern.test(equipmentText)).map(( [id]) => id);
    if (equipment.length) {
      result.equipment = equipment;
      result.recognized.push('equipment')
    }
    if (result.excludedEquipment.length) result.recognized.push('excludedEquipment');
  }
  // Places and goals alone do not prove equipment or change the stored training goal.
  result.unresolved ||= result.recognized.length === 0;
  result.message = lang === 'en' ?(result.unresolved ? 'Some details could not be applied. Check the selections before generating.':
  'Your explicit preferences are ready to review. No workout has started.'):(result.unresolved ?
  'חלק מהבקשה לא הוחל. לבדוק את הבחירות לפני יצירת האימון.': 'הבחירות המפורשות מוכנות לבדיקה. האימון עוד לא התחיל.');
  return result;
}
