import { returnDecision } from './training-safety.js?v=32';
import {
  exercises
}
from './data/exercises.js?v=32';
import {
  calibratedTarget, reviewedClearance, lighterActive, conditionsKnown, hasEquipment, isBlocked, recoveryState,
  workSeconds
}
from './training-evidence.js?v=32';
import {
  plan as safetyPlan
}
from './engine.js?v=32';
import {
  escapeHTML as esc
}
from './ui.js?v=32';
const families = [ ['horizontal_push', 'incline-push', 'wall-push', 'knee-push'], ['overhead_press',
'short-pike-push', 'pike-push'], ['vertical_pull', 'feet-assisted-pull', 'pull', 'chin'], ['horizontal_pull', 'row',
'band-row'], ['squat', 'squat'], ['hinge', 'hinge'], ['single_leg', 'single-squat', 'split'], ['core_anti_extension',
'deadbug', 'plank'], ['support', 'support', 'tuck-lsit'], ['compression', 'standing-knee', 'hanging-knee'],
['straight_arm_pull'], ['knee_flexion', 'heel-dig-hold'], ['core_anti_rotation', 'bird-dog'], ['calf',
'calf'], ['scapular_pull', 'scap-pull'], ['scapular_push', 'scap-push']];
export const capabilityStop = (
  'בדיקה נוחה, לא מבחן מרבי: לעצור כשנותרו לפחות 3 חזרות נקיות או 3 שניות של שליטה; לעצור מיד ' +
  'בכאב, סחרחורת, עצירת נשימה או שינוי מנח. אין ביצוע נוח? לדלג ותאמו בדיקה בהדרכה. אפשר להאריך ' +
  'מנוחה או לפצל לימים שונים.'
);
export function capabilityChoices(profile, now = new Date()) {
  return families.map(( [family, ... ids]) =>( {
    family, choices: [... ids.map(id => exercises.find(e => e.id === id)), ... exercises.filter(e => e.movementSubtype === family && !ids.
    includes(e.id))].filter(e => e && hasEquipment(e, profile.equipment) &&(!(e.advancedOnly || e.novelEccentric) || reviewedClearance(profile,
    e, now)) &&(!lighterActive(profile, now) || !(e.advancedOnly || e.novelEccentric || e.demandingStraightArm)))
  })).filter(f => f.choices.length);
}
export function capabilityPlan(profile, now = new Date(), selection = {
}) {
  const gate = safetyPlan(profile, 30, 'normal', {
    now, history: profile.logs || []
  });
  if (gate.blocked) return gate;
  const recovery = recoveryState(profile.logs, now), blocks = [ {
    id: 'cap-warm', he: 'הכנה לבדיקה', phase: 'warm', seconds: 180, cue: 'הליכה נינוחה, הנעת מפרקים וחזרה קלה על התנועה בלי עייפות.'
  }];
  const expectedFamilies = [], deferredFamilies = [];
  for (const {
    family, choices
  }
  of capabilityChoices(profile, now)) {
    const e = choices.find(e => e.id === selection[family]) || choices[0];
    if (isBlocked(e, recovery)) {
      deferredFamilies.push(family);
      continue;
    }
    expectedFamilies.push(family);
    blocks.push( {
      ... e, phase: 'work', section: 'assessment', assessment: true, capability: true, target: null, seconds: 60,
      round: 1, side_allocation: e.perSide ? 'total_both_sides': null, added_load: 0, setup: '', assistance: '',
      range_of_motion: '', execution_standard: '', cue: e.instructions.join(' ') + ' ' + capabilityStop
    });
    blocks.push( {
      id: 'cap-rest-' + e.id, he: 'מנוחה ותיעוד התנאים', phase: 'rest', seconds: 30, cue:
      'לתעד ביצוע נקי, עתודה ותנאים. להמשיך רק כשהנשימה והשליטה נוחות; אפשר להאריך מנוחה.'
    });
  }
  blocks.push( {
    id: 'cap-cool', he: 'סיום נינוח', phase: 'cool', seconds: 120, cue: 'הליכה איטית ונשימה נוחה.'
  });
  return {
    planner: 'capability-check-1', rule_version: 'capability-check-1', capability: true, title: 'בדיקת יכולת',
    titleHe: 'בדיקת יכולת', minutes: 30, rounds: 1, blocks, expectedFamilies, deferredFamilies, total_seconds: blocks.reduce((n,
    b) => n + b.seconds, 0)
  };
}
export function applyCapabilityResults(profile, log) {
  if (log.pain) return[];
  const results = [];
  for (const b of log.plan.blocks.filter(b => b.capability)) {
    const s = log.sets.find(s => s.performed_exercise_id === b.id && s.unit === b.unit && s.quality === 'good' && s.actual > 0 && conditionsKnown
    (s) && s.technique_confirmed && s.safe_exit_confirmed && !s.pain && Number.isFinite(b.unit === 'seconds' ? s.technical_reserve_seconds: s.rir
    ) &&(b.unit === 'seconds' ? s.technical_reserve_seconds: s.rir) >= 3);
    if (!s || b.perSide &&(!Number.isFinite(s.left_actual) || !Number.isFinite(s.right_actual) || Math.min(s.left_actual,
    s.right_actual) <= 0 || s.actual !== s.left_actual + s.right_actual)) continue;
    const actual = b.perSide ? 2 * Math.min(s.left_actual, s.right_actual): s.actual, step = b.perSide ? 2: 1,
    target = calibratedTarget(b, actual, b.unit === 'seconds' ? s.technical_reserve_seconds: s.rir, profile.goal);
    if (target < step) continue;
    results.push( {
      ... s, id: b.id, family: b.movementSubtype, target, actual, seconds: workSeconds( {
        ... b, tempo: s.tempo
      }, target), assessedAt: log.completed_at
    });
  }
  if (results.length) {
    profile.capabilityCheck = {
      assessedAt: log.completed_at, results, complete: results.length === log.plan.expectedFamilies.length,
      deferredFamilies: log.plan.deferredFamilies || []
    };
    profile.trainingBlock = {
      start: log.completed_at, reviewAfterWeeks: [4, 6], anchors: Object.fromEntries(results.map(r => [r.family,
      r.id]))
    };
  }
  return results;
}
export function capabilityDue(profile, now = new Date()) {
  const assessed = Date.parse(profile.capabilityCheck?.assessedAt || '');
  if (!Number.isFinite(assessed)) return true;
  return +now - assessed >= 28 * 864e5 || returnDecision(profile, profile.logs, now).returnAfterBreak;
}
export function capabilityOffer(profile) {
  return (
    `<section class="card"><h2>בדיקת יכולת</h2><p>` +
    `${capabilityDue(profile) ? 'כדאי לבדוק את נקודת ההתחלה: בתחילת כל מקטע אימון של 4–6 שבועות או אחרי הפסקה של שבועיים.':
    'אפשר לבדוק שוב את הווריאציות והתנאים שלך.'}` +
    ` בדיקה מודרכת של כ־20–30 דקות, לפי הציוד וההתאוששות. תוצאות נקיות יפיקו יעדים מספריים שמרניים ` +
    `לאותן וריאציות.</p><button class="secondary" data-capability>לבדיקת יכולת</button></section>`
  );
}
export function capabilityResultsHTML(results) {
  return (
    `<h2>תוצאות בדיקת יכולת</h2><p>דיווח עצמי בלבד, ללא אישור טכניקה או פתיחת סקיל מתקדם. היעדים ` +
    `נגזרים מהביצוע הנקי והעתודה באותה וריאציה, בהפחתה שמרנית ובתקרת טווח המטרה, בעיגול מטה. תנועות ` +
    `שדולגו או שלא תועדו במלואן עדיין דורשות בדיקה.</p>` +
    `${results.length ? (
      `<ul>` +
      `${results.map(r => (
        `<li>` +
        `${esc(exercises.find(e => e.id === r.id)?.he)}` +
        `: ` +
        `${r.actual}` +
        ` ← יעד ` +
        `${r.target}` +
        ` ` +
        `${r.unit === 'seconds' ? 'שניות': 'חזרות'}` +
        `${r.side_allocation ? ' בסך הכול, חצי לכל צד': ''}` +
        ` · ` +
        `${esc(r.setup)}` +
        ` · ` +
        `${esc(r.assistance)}` +
        ` · ` +
        `${r.added_load ?? 0}` +
        ` ק״ג</li>`
      )).join('')}` +
      `</ul>`
    ): '<p>לא נרשמו תוצאות מלאות עם עתודה מספקת. אפשר לחזור לבדיקה קלה יותר או בהדרכה.</p>'}`
  );
}
