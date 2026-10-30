import {
  renderProgressEvidence
}
from '../coach-progress.js?v=31';
import {
  exercises, nextAction, plan, recommendation
}
from '../engine.js?v=31';
import {
  renderStartingPoint
}
from '../starting-point.js?v=31';
import {
  dateKey, escapeHTML as esc, icon
}
from '../ui.js?v=31';
import {
  bindCommon
}
from '../screens/coach.js?v=31';
import {
  exportProfile
}
from '../screens/profile.js?v=31';
import {
  $, change, he, nameOf, on, pageHead, t, user
}
from '../shared.js?v=31';
import {
  shell
}
from '../shell.js?v=31';
function history() {
  const u = user(), logs = [... u.logs].filter(l => Date.parse(l.completed_at) <= Date.now()).reverse(),
  allSets = logs.flatMap(l => l.sets || []).filter(s => s.actual > 0), totalMovements = new Set(allSets.map(s => s.performed_exercise_id)).size;
  const dates = Array.from( {
    length: 7
  },(_, i) => {
    const d = new Date();
    d.setDate(d.getDate() -(6 - i));
    return {
      date: dateKey(d), label: new Intl.DateTimeFormat(he() ? 'he-IL': 'en-GB', {
        timeZone: 'Asia/Jerusalem', weekday: 'short'
      }).format(d)
    }
  }), counts = dates.map(d => logs.filter(l => dateKey(new Date(l.completed_at)) === d.date).length),
  max = Math.max(... counts, 1);
  if (!logs.length) {
    shell(( (
      `${pageHead(t('ההתקדמות שלך', 'Your progress'), t('כאן תתחיל הדרך שלך', 'Your journey starts here'))}`
    ) + (
      `${renderStartingPoint(u)}`
    ) + `<section class="card empty-state"><p>` + (
      `${t('אחרי שיתועד ביצוע, נציג התקדמות שאפשר להשוות.', 'Log a session to start comparing your progress.')}`
    ) + `</p><button data-page="coach">` + (
      `${t('לאימון של היום', 'Today’s session')}`
    ) + `</button></section>`));
    bindCommon();
    return
  }
  shell(( (
    `${pageHead(t('ההתקדמות שלך', 'PROGRESS THAT BELONGS TO YOU'), t('מסתכלים על הדרך שעשית.', 'Look at how far you’ve come.'),
    t('ביצוע אמיתי, תנאים ברורים והשוואה לעצמך.', 'Real performance, clear conditions and comparison with yourself.'),
    (`<button class="secondary" id="history-export">` + (
      `${icon('download', 16)}`
    ) + ` ` + (
      `${t('ייצוא היומן', 'Export journal')}`
    ) + `</button>`))}`
  ) + (
    `${renderProgressEvidence(u, he() ? 'he': 'en')}`
  ) + `<div class="stats-grid"><div class="card stat"><span class="muted">` + (
    `${t('מפגשים שתיעדתי', 'Sessions logged')}`
  ) + `</span><strong>` + (
    `${logs.length}`
  ) + `</strong><small>` + (
    `${t('כולל מפגשים שהסתיימו מוקדם', 'Including sessions ended early')}`
  ) + `</small></div><div class="card stat"><span class="muted">` + (
    `${t('סטים שביצעתי', 'Sets performed')}`
  ) + `</span><strong>` + (
    `${allSets.length}`
  ) + `</strong><small>` + (
    `${t('תכנון לא נספר כביצוע', 'Plans do not count as performance')}`
  ) + `</small></div><div class="card stat"><span class="muted">` + (
    `${t('תנועות שפגשתי', 'Movements explored')}`
  ) + `</span><strong>` + (
    `${totalMovements}`
  ) + `</strong><small>` + (
    `${t('כל וריאציה נשמרת בפני עצמה', 'Each variation is recorded separately')}`
  ) + `</small></div></div><div class="dashboard-grid"><div class="stack"><section class="card"><div ` + `class="card-header"><h2>` + (
    `${t('שבעה ימים של תנועה', 'Seven days of movement')}`
  ) + `</h2><small>` + (
    `${t('מפגשים שנשמרו', 'Saved sessions')}`
  ) + `</small></div>` + (
    `${counts.some(Boolean) ?(`<div class="chart" role="img" aria-label="` + (
      `${t('מספר מפגשים בכל יום: ', 'Sessions per day: ') + counts.join(', ')}`
    ) + `">` + (
      `${dates.map((d, i) =>(`<div class="chart-column"><span>` + (
        `${counts[i]}`
      ) + `</span><div class="chart-bar" style="height:` + (
        `${counts[i] ? Math.max(15, counts[i] / max * 100): 3}`
      ) + `px"></div><span>` + (
        `${d.label}`
      ) + `</span></div>`)).join('')}`
    ) + `</div>`):(`<p class="progress-empty">` + (
      `${t('עדיין לא תועדו מפגשים בשבעת הימים האחרונים.', 'No sessions logged in the last seven days.')}`
    ) + `</p>`)}`
  ) + `</section><section class="card"><div class="card-header"><h2>` + (
    `${t('שיאים בתנאים זהים', 'Personal records · matching conditions')}`
  ) + `</h2></div><label class="compact-label">` + (
    `${t('לבחור וריאציה ותנאים', 'Choose a variation and conditions')}`
  ) + `<select id="progress-variation"><option value="">` + (
    `${t('בחירת תנועה', 'Choose a movement')}`
  ) + `</option>` + (
    `${comparisonGroups(allSets).map(( [key, sets]) => {
      const s = sets[0], e = exercises.find(e => e.id === s.performed_exercise_id);
      return(`<option value="` + (
        `${esc(key)}`
      ) + `">` + (
        `${esc(e ? nameOf(e): s.performed_exercise_id)}`
      ) + ` · ` + (
        `${esc(s.assistance || t('ללא סיוע מדווח', 'No assistance reported'))}`
      ) + ` · ` + (
        `${s.added_load ?? 0}`
      ) + (
        `${t(' ק״ג', ' kg')}`
      ) + (
        `${s.setup ? ' · ' + esc(s.setup): ''}`
      ) + (
        `${s.side_allocation ? ' · ' + t('סה״כ צדדים', 'both sides total'): ''}`
      ) + `</option>`)
    }).join('')}`
  ) + `</select></label><div id="variation-trend" class="muted">` + (
    `${t('שיא מוצג רק באותה וריאציה, סיוע ותוספת משקל.', 'Records are compared only within the same variation, assistance and added load.')}`
  ) + `</div></section><h2>` + (
    `${t('מחברת האימונים שלי', 'My training journal')}`
  ) + `</h2>` + (
    `${logs.length ? logs.map(l => logCard(l)).join(''):(`<div class="empty-state"><div class="empty-icon">` + (
      `${icon('chart', 40)}`
    ) + `</div><h2>` + (
      `${t('הדרך שלך עוד לפניך.', 'Your story starts here.')}`
    ) + `</h2><p>` + (
      `${t('אחרי האימון הראשון שיישמר, נוכל לראות כאן את הביצועים והתחושות שלך.',
      'After saving your first session, your performance and reflections will appear here.')}`
    ) + `</p><button data-page="home">` + (
      `${t('לאימון שלי', 'My session')}`
    ) + ` ` + (
      `${icon('arrow', 16)}`
    ) + `</button></div>`)}`
  ) + `</div><aside class="stack"><section class="card coach-card"><span class="eyebrow">` + (
    `${t('הצעד הקטן הבא', 'THE NEXT SMALL STEP')}`
  ) + `</span><h2>` + (
    `${t('מקשיבים לפני שמתקדמים.', 'Listen before moving ahead.')}`
  ) + `</h2><p>` + (
    `${esc(nextAction(u.logs, {
      painReviewedAt: u.painReviewedAt
    }).message)}`
  ) + `</p><p class="micro-note">` + (
    `${t('לא נוסיף קושי אוטומטית בעקבות כאב, טכניקה לא בטוחה או אימון אחד מוצלח.',
    'Pain, uncertain form or a single successful session never trigger automatic progression.')}`
  ) + `</p></section><section class="card"><h2>` + (
    `${t('עקביות, בלי לחץ.', 'Consistency without pressure.')}`
  ) + `</h2><p>` + (
    `${t('יום שהוחמץ הוא חלק מהחיים. אין חוב אימונים, ואין דירוג מול אחרים.', 'A missed day is part of life. No training debt, no leaderboard.')}`
  ) + `</p><button class="text-button" data-page="program">` + (
    `${t('למצוא את היום הבא שלי', 'Find my next day')}`
  ) + ` ` + (
    `${icon('arrow', 15)}`
  ) + `</button></section></aside></div>`));
  on('#history-export', exportProfile);
  change('#progress-variation', e => {
    const group = comparisonGroups(allSets).find(( [key]) => key === e.target.value)?.[1] || [];
    $('#variation-trend').innerHTML = group.length ?(`<div class="trend-result"><strong>` + (
      `${Math.max(... group.map(s => s.actual))}`
    ) + ` <small>` + (
      `${group[0].unit === 'seconds' ? t('שניות', 'sec'): t('חזרות', 'reps')}`
    ) + `</small></strong><span>` + (
      `${t('הביצוע הגבוה ביותר בתנאים אלה', 'Highest logged performance under these conditions')}`
    ) + `</span><p>` + (
      `${group.length}`
    ) + ` ` + (
      `${t('סטים להשוואה', 'comparable sets')}`
    ) + ` · ` + (
      `${t('מהחדש לישן: ', 'Newest first: ')}`
    ) + (
      `${group.slice(0, 12).map(s => s.actual).join(' ← ')}`
    ) + `</p></div>`): t('לבחור תנועה שיש לה רישום ביצוע.', 'Choose a movement with logged performance.')
  });
  bindCommon()
}
function comparisonGroups(sets) {
  const map = new Map();
  for (const s of sets) {
    const key = [s.performed_exercise_id, s.unit, s.assistance || '', s.added_load ?? 0, s.side_allocation || '',
    s.setup || ''].join('|');
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(s)
  }
  return[... map.entries()]
}
function logCard(l) {
  return(`<article class="card log-card"><div class="row"><div><span class="eyebrow">` + (
    `${new Intl.DateTimeFormat(he() ? 'he-IL': 'en-GB', {
      timeZone: 'Asia/Jerusalem', day: 'numeric', month: 'long', year: 'numeric'
    }).format(new Date(l.completed_at))}`
  ) + `</span><h3>` + (
    `${esc(he() ? l.plan?.titleHe || l.plan?.title || t('האימון שלי', 'My session'): l.plan?.titleEn || 'My session')}`
  ) + `</h3></div><span class="chip ` + (
    `${l.pain ? 'warm': 'green'}`
  ) + `">` + (
    `${l.sets.length}`
  ) + ` ` + (
    `${t('סטים', 'sets')}`
  ) + ` · ` + (
    `${l.completed ? t('הושלם', 'Complete'): t('סיום מוקדם', 'Ended early')}`
  ) + `</span></div><p>` + (
    `${esc(recommendation(l))}`
  ) + `</p>` + (
    `${l.note ?(`<blockquote>` + (
      `${esc(l.note)}`
    ) + `</blockquote>`): ''}`
  ) + `<details><summary>` + (
    `${t('פרטי הביצוע', 'Performance details')}`
  ) + `</summary>` + (
    `${l.sets.map(s => {
      const e = exercises.find(e => e.id === s.performed_exercise_id);
      return(`<div class="line row"><div><strong>` + (
        `${esc(e ? nameOf(e): s.performed_exercise_id)}`
      ) + `</strong><small>` + (
        `${s.assistance ? esc(s.assistance): ''}`
      ) + (
        `${s.added_load != null ? ' · ' + s.added_load + t(' ק״ג', ' kg'): ''}`
      ) + (
        `${s.planned_exercise_id !== s.performed_exercise_id ? ' · ' + t('חלופה לתרגיל המתוכנן', 'Alternative to planned movement'): ''}`
      ) + `</small></div><span>` + (
        `${s.actual}`
      ) + ` / ` + (
        `${s.target}`
      ) + ` ` + (
        `${s.unit === 'seconds' ? t('שניות', 'sec'): t('חזרות', 'reps')}`
      ) + (
        `${s.side_allocation ? ' ' + t('סה״כ צדדים', 'both sides total'): ''}`
      ) + `</span></div>`)
    }).join('') ||(`<p>` + (
      `${t('לא נשמרו סטים במפגש הזה.', 'No sets were logged in this session.')}`
    ) + `</p>`)}`
  ) + `<small>` + (
    `${t('התכנון המקורי נשמר כפי שהיה', 'Original plan snapshot preserved')}`
  ) + `</small></details></article>`)
}
export {
  history, comparisonGroups, logCard
};
