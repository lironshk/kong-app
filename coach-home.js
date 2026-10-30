import {
  escapeHTML as esc, icon
}
from './ui.js?v=31';
import {
  exercises
}
from './data/exercises.js?v=31';
// Pure view. app.js owns actions and the generation/confirmation lifecycle.
export function renderCoachHome( {
  profile, lang = 'he', todayPlan = null, weeklyLedger = [], weekDays = [], checkpoints = [], checkpoint = null,
  preferences = {
  }
} = {
}) {
  const he = lang !== 'en', t =(a, b) => he ? a: b, u = profile || {
  }, blocked = todayPlan?.blocked, p = blocked ? null: todayPlan;
  const logs = Array.isArray(u.logs) ? u.logs: [], actual = logs.filter(l => Date.parse(l.completed_at) <= Date.now() &&(l.sets || []).some(s =>
  Number(s.actual) > 0));
  const minutes = [15, 20, 30, 45, 60], selected = Number(preferences.minutes ?? u.minutes) || 20;
  const ids = [... new Set(p?.exerciseIds || [])];
  const movements = ids.map(id => exercises.find(e => e.id === id)).filter(Boolean);
  const ledger = Array.isArray(weeklyLedger) ? weeklyLedger: weeklyLedger?.groups || Object.entries(weeklyLedger || {
  }).map(( [key, value]) => typeof value === 'object' ? {
    id: key, ... value
  }: {
    id: key, count: value
  });
  const points = checkpoint ? [checkpoint]: Array.isArray(checkpoints) ? checkpoints: [];
  const cp = points.find(x => x.status === 'ready') || points[0];
  const cpExercise = cp ? exercises.find(e => e.id === cp.exerciseId): null;
  const rationale = blocked ?(he ? todayPlan.reason: todayPlan.adaptation?.reasonEn || todayPlan.reason): p?.[he ? 'rationaleHe': 'rationaleEn']
  || p?.today?.[he ? 'reasonHe': 'reasonEn'] || p?.rationale || p?.todayRationale;
  const reason = typeof rationale === 'string' ? rationale: Array.isArray(rationale) ? rationale.join(' '): rationale?.[he ? 'he': 'en'];
  return (
    `<div class="coach-home"><header class="coach-welcome"><div><span class="coach-overline">KONG / ` +
    `${t('האימון האישי שלך', 'YOUR DAILY PRACTICE')}` +
    `</span><h1>` +
    `${t('היי,', 'Hi,')}` +
    ` ` +
    `${esc(u.name || t('נעים להכיר', 'welcome'))}` +
    `<span>.</span></h1><p>` +
    `${t('פחות לנחש. יותר לדעת מה לעשות היום.', 'A clear plan. A stronger next step.')}` +
    `</p></div><button class="secondary" id="coach-progress">` +
    `${icon('chart', 18)}` +
    ` ` +
    `${t('ההתקדמות שלי', 'My progress')}` +
    `</button></header>
     <div class="coach-layout"><section class="coach-builder" ` +
    `aria-labelledby="coach-builder-title"><div class="coach-section-top"><span class="coach-pill">` +
    `${icon('sun', 15)}` +
    ` ` +
    `${t('מתאמנים לפי היום שלך', 'BUILT AROUND TODAY')}` +
    `</span><span class="coach-build-number" aria-hidden="true">01</span></div><h2 ` +
    `id="coach-builder-title">` +
    `${t('האימון הנכון.<br>בשבילך. להיום.', 'Your workout.<br>Your way. Today.')}` +
    `</h2><p class="coach-builder-intro">` +
    `${t('הזמן, הציוד והיכולת שלך. תוכנית אחת שאפשר להתחיל איתה.', 'Your time, equipment and ability. One plan you can act on.')}` +
    `</p>
     <div class="coach-controls"><label><span>` +
    `${icon('clock', 16)}` +
    ` ` +
    `${t('כמה זמן יש לי', 'Time available')}` +
    `</span><select id="coach-minutes" ` +
    `${u.session ? 'disabled': ''}` +
    `>` +
    `${[... new Set( [... minutes, selected])].sort((a, b) => a - b).map(n => (
      `<option value="` +
      `${n}` +
      `" ` +
      `${n === selected ? 'selected': ''}` +
      `>` +
      `${n}` +
      ` ` +
      `${t('דקות', 'minutes')}` +
      `</option>`
    )).join('')}` +
    `</select></label><label><span>` +
    `${icon('home', 16)}` +
    ` ` +
    `${t('איפה מתאמנים', 'Training space')}` +
    `</span><select id="coach-location" ` +
    `${u.session ? 'disabled': ''}` +
    `>` +
    `${(u.locations?.length ? u.locations: [ {
      id: 'current', name: t('הציוד שלי', 'My equipment')
    }]).map(l => (
      `<option value="` +
      `${esc(l.id)}` +
      `" ` +
      `${l.id ===(preferences.locationId || u.activeLocation) ? 'selected': ''}` +
      `>` +
      `${esc(l.name)}` +
      `</option>`
    )).join('')}` +
    `</select></label><label><span>` +
    `${icon('leaf', 16)}` +
    ` ` +
    `${t('איך הגוף היום', 'How do you feel?')}` +
    `</span><select id="coach-readiness" ` +
    `${u.session ? 'disabled': ''}` +
    `><option value="normal" ` +
    `${!preferences.readiness || preferences.readiness === 'normal' ? 'selected': ''}` +
    `>` +
    `${t('רמת מוכנות: גבוהה', 'Ready to train')}` +
    `</option><option value="tired" ` +
    `${preferences.readiness === 'tired' ? 'selected': ''}` +
    `>` +
    `${t('רמת אנרגיה נמוכה — יום קל יותר', 'Tired — a lighter day')}` +
    `</option><option value="pain" ` +
    `${preferences.readiness === 'pain' ? 'selected': ''}` +
    `>` +
    `${t('יש כאב — צריך לעצור ולבדוק', 'Pain — pause and review')}` +
    `</option></select></label></div>
     <p id="coach-equipment-summary" ` +
    `class="coach-equipment-summary">` +
    `${t('הציוד הזמין נקבע לפי המקום שבחרת.', 'Available equipment follows your selected space.')}` +
    `</p><button id="coach-generate" class="coach-generate">` +
    `${icon(u.session ? 'play': 'plus', 21)}` +
    ` ` +
    `${u.session ? t('ממשיכים את האימון שלי', 'Resume my session'): t('בנה לי אימון להיום', 'Build my workout')}` +
    ` ` +
    `${icon('arrow', 20)}` +
    `</button><p class="coach-generation-note">` +
    `${u.session ? t('התוכנית נשמרה בדיוק כפי שהתחלת.', 'Your original session plan is preserved.'): t('קודם רואים את התוכנית. מתחילים רק כשמוכנים.',
    'Preview your plan first. Start when you are ready.')}` +
    `</p><details class="coach-intent" ` +
    `${u.session ? 'hidden': ''}` +
    `><summary>` +
    `${t('רוצה לתאר את האימון במילים?', 'Describe today’s workout')}` +
    `</summary><label for="coach-intent">` +
    `${t('מה מתאים לך היום?', 'What fits today?')}` +
    `</label><input id="coach-intent" maxlength="160" placeholder="` +
    `${t('למשל: 20 דקות, בלי ציוד, יום קל', 'e.g. 20 minutes, no equipment, easy day')}` +
    `"><button id="coach-interpret" class="secondary">` +
    `${t('עדכון ההעדפות מהתיאור', 'Update preferences from description')}` +
    `</button><p>` +
    `${t('נזהה זמן, ציוד ויום קל מתוך התיאור. תוכלו לבדוק ולשנות לפני יצירת האימון.',
    'Time, equipment and an easy day can be read from your description. Review the preferences before generating.')}` +
    `</p></details>
     ` +
    `${u.session ? (
      `<div class="coach-resume"><span>` +
      `${icon('pause', 18)}` +
      ` ` +
      `${t('יש אימון ששמרנו באמצע', 'Your saved session is waiting')}` +
      `</span><button class="secondary" id="coach-resume">` +
      `${t('להמשיך באימון', 'Resume session')}` +
      ` ` +
      `${icon('arrow', 16)}` +
      `</button></div>`
    ): ''}` +
    `</section>
     <aside class="coach-today"><div class="coach-section-top"><span ` +
    `class="coach-overline">` +
    `${t('הצעד הבא שלך', 'YOUR NEXT STEP')}` +
    `</span>` +
    `${icon('target', 21)}` +
    `</div><h2>` +
    `${p ? esc(he ? p.titleHe || p.title: p.titleEn || p.title): blocked ? t('קודם בודקים מוכנות', 'Readiness comes first'): t('כאן מתחילה השגרה שלך',
    'Your practice starts here')}` +
    `</h2><p>` +
    `${p?.recovery ? t('היום מפנים מקום לתנועה קלה. התאוששות היא חלק מההתקדמות.', 'Make room for easy movement today. Recovery supports progress.'): t(
    'אימון עם כיוון ברור, מנוחות ותיעוד הביצוע שלך.', 'A purposeful session with rest and a record of what you actually do.')}` +
    `</p>` +
    `${p && !p.blocked ? (
      `<div class="coach-plan-meta"><span>` +
      `${icon('clock', 17)}` +
      ` ` +
      `${Math.ceil(p.total_seconds / 60)}` +
      ` ` +
      `${t('דקות', 'min')}` +
      `</span><span>` +
      `${movements.length}` +
      ` ` +
      `${t('תרגילים', 'movements')}` +
      `</span><span>` +
      `${p.sets || p.blocks?.filter(b => b.phase === 'work').length || 0}` +
      ` ` +
      `${t('סטים', 'sets')}` +
      `</span></div>` +
      `${movements.length ? (
        `<ol class="coach-movement-list">` +
        `${movements.slice(0, 5).map((e, i) => (
          `<li><span>` +
          `${String(i + 1).padStart(2, '0')}` +
          `</span><strong>` +
          `${esc(he ? e.he: e.en)}` +
          `</strong><small>` +
          `${t('דרגה', 'Level')}` +
          ` ` +
          `${e.level}` +
          `</small></li>`
        )).join('')}` +
        `${movements.length > 5 ? (
          `<li class="coach-more">+ ` +
          `${movements.length - 5}` +
          ` ` +
          `${t('תרגילים נוספים בתוכנית', 'more movements in your plan')}` +
          `</li>`
        ): ''}` +
        `</ol>`
      ): ''}` +
      `<button class="secondary full-width" id="coach-plan">` +
      `${t('לראות את התוכנית', 'View my plan')}` +
      ` ` +
      `${icon('arrow', 17)}` +
      `</button>`
    ): (
      `<div class="coach-empty">` +
      `${icon('target', 29)}` +
      `<strong>` +
      `${t('מתחילים מתוכנית שמתאימה לך', 'Start with a plan that fits')}` +
      `</strong><span>` +
      `${t('לבחור זמן ומקום, ונבנה את הצעד הראשון.', 'Choose your time and space to build your first step.')}` +
      `</span></div>`
    )}` +
    `<div class="coach-why"><strong>` +
    `${icon('info', 17)}` +
    ` ` +
    `${t('למה האימון הזה?', 'Why this workout?')}` +
    `</strong><p>` +
    `${esc((he ? p?.summaryHe: null) || t('הבחירה מתבססת על היכולת שדיווחת, הזמן והציוד הזמין. הביצוע שיתועד יעזור לכוון את האימון הבא.',
    (
      'Your reported ability, time and available equipment guide the plan. Logged performance helps ' +
      'shape what comes next.'
    )))}` +
    `</p>` +
    `${reason ? (
      `<details><summary>` +
      `${t('פירוט', 'Details')}` +
      `</summary><p>` +
      `${esc(reason)}` +
      `</p></details>`
    ): ''}` +
    `</div></aside></div>
     <section class="coach-week"><div class="coach-section-top"><div><span ` +
    `class="coach-overline">` +
    `${t('בונים רצף', 'BUILD YOUR PRACTICE')}` +
    `</span><h2>` +
    `${t('השבוע שלך, בתנועה', 'Your week in motion')}` +
    `</h2></div><button class="text-button" data-page="program">` +
    `${t('לוח השבוע', 'Weekly plan')}` +
    ` ` +
    `${icon('arrow', 16)}` +
    `</button></div>` +
    `${weekDays.length ? (
      `<div class="coach-week-days">` +
      `${weekDays.map(d => (
        `<div class="coach-day ` +
        `${d.completed ? 'is-complete': ''}` +
        ` ` +
        `${d.isToday ? 'is-today': ''}` +
        `"><small>` +
        `${esc(d.label || d.date)}` +
        `</small><span>` +
        `${d.completed ? icon('check', 19): d.isToday ? icon('sun', 19): '<i></i>'}` +
        `</span><small>` +
        `${d.completed ? t('תועד', 'Logged'): d.isToday ? t('היום', 'Today'): d.planned ? t('מתוכנן', 'Planned'): '—'}` +
        `</small></div>`
      )).join('')}` +
      `</div>`
    ): ''}` +
    `<div class="coach-ledger">` +
    `${ledger.length ? ledger.map(item => (
      `<div><span>` +
      `${esc(he ? item.labelHe || item.he || item.label || item.id: item.labelEn || item.en || item.label || item.id)}` +
      `</span><strong>` +
      `${esc(item.count ?? item.sets ?? item.total ?? 0)}` +
      `</strong><small>` +
      `${t('סטים שתועדו בפועל', 'actual logged sets')}` +
      `</small></div>`
    )).join(''): (
      `<p>` +
      `${t('עוד אין תיעוד לשבוע הזה. האימון הראשון יתחיל לבנות תמונה אמיתית של ההתקדמות שלך.',
      'No sessions logged this week. Your first workout starts a real picture of your progress.')}` +
      `</p>`
    )}` +
    `</div>` +
    `${weeklyLedger?.scopeHe ? (
      `<p class="coach-ledger-scope">` +
      `${esc(he ? weeklyLedger.scopeHe: weeklyLedger.scopeEn)}` +
      `</p>`
    ): ''}` +
    `</section>
     <div class="coach-bottom-grid"><section class="coach-checkpoint"><span ` +
    `class="coach-overline">` +
    `${t('התחנה הבאה', 'THE NEXT CHECKPOINT')}` +
    `</span><h2>` +
    `${esc(cp ?(he ? cp.labelHe || cp.label || cpExercise?.he || t('בונים בסיס', 'Building your base'): cp.labelEn || cp.label || cpExercise?.en ||
    'Building your base'): t('קודם מכירים את נקודת ההתחלה', 'First, establish your starting point'))}` +
    `</h2><p>` +
    `${esc(cp ?(he ? cp.reasonHe || cp.descriptionHe || cp.description || '': cp.reasonEn || cp.descriptionEn || cp.description || ''): actual.length ?
    t('להמשיך לתעד ביצוע ושליטה. התקדמות מוצגת רק כשיש נתונים שאפשר להשוות.',
    'Keep logging performance and control. Progress needs comparable evidence.'): t(
    'האימון הראשון ייתן נקודת התחלה. נציג התקדמות כשיהיו ביצועים שאפשר להשוות.',
    'Your first logged session establishes a baseline for meaningful progress.'))}` +
    `</p><button class="text-button" id="coach-skills">` +
    `${t('למפות הסקילים', 'Explore skill paths')}` +
    ` ` +
    `${icon('arrow', 17)}` +
    `</button></section><section class="coach-learning"><div class="coach-learning-icon">` +
    `${icon('library', 30)}` +
    `</div><div><span class="coach-overline">` +
    `${t('לפני שמתחילים', 'MOVE WITH UNDERSTANDING')}` +
    `</span><h2>` +
    `${t('תנועה ברורה. ביטחון בביצוע.', 'Understand the movement.')}` +
    `</h2><p>` +
    `${t('העמדה, תנועה ודגשים לכל תרגיל. אפשר לפתוח מדריך גם במהלך האימון.',
    'Find setup, movement and cues for each exercise, including during your session.')}` +
    `</p><button class="text-button" data-page="library">` +
    `${t('לספריית התרגילים', 'Movement library')}` +
    ` ` +
    `${icon('arrow', 17)}` +
    `</button></div></section></div></div>`
  );
}
