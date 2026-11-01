import {extraTimeText} from './session-extras.js?v=31';
import {
  glossary
}
from './data/glossary.js?v=31';
import {
  renderHome
}
from './home-view.js?v=31';
import {
  exercises
}
from './data/exercises.js?v=31';
import {
  movementAtlas
}
from './data/movement-atlas.js?v=31';
import {
  escapeHTML as esc
}
from './ui.js?v=31';
import {
  dailyDate, dailyProgress
}
from './daily-insights.js?v=31';
export const checkInFields = [ ['sleepHours', 'שעות שינה', 0, 24, .5], ['sleepQuality', 'איכות שינה · 1 נמוכה, 5 גבוהה',
1, 5, 1], ['energy', 'אנרגיה ומוכנות · 1 נמוכה, 5 גבוהה', 1, 5, 1], ['soreness', 'כאבי שרירים · 1 מעט, 5 הרבה',
1, 5, 1], ['weightKg', 'משקל גוף (ק״ג)', 20, 400, .1], ['steps', 'צעדים', 0, 100000, 1], ['waterGlasses',
'מים (כוסות)', 0, 60, .5], ['waterLiters', 'או מים (ליטרים)', 0, 15, .1]];
export function renderDailyHome( {
  profile, todayPlan, now = new Date(), lang = 'he', screen = 'home'
} = {
}) {
  if (screen === 'home') return renderHome( {
    profile, todayPlan, now
  });
  const en = lang === 'en', t =(a, b) => en ? b: a, date = dailyDate(now), entry = profile.checkIns?.[date],
  progress = dailyProgress(profile, now), p = todayPlan;
  const movements = [... new Map((p.blocks || []).filter(b => ['work', 'skill'].includes(b.phase)).map(b => [b.id,
  exercises.find(e => e.id === b.id) || b])).values()];
  const location = profile.locations?.find(l => l.id ===(p.today?.locationId || p.locationId || profile.activeLocation));
  const title = (en ? p.titleEn || 'Full body' : p.titleHe || p.title || 'תנועה נוחה')
    .replace(/\d+\s*(?:דקות|דק[׳']|min(?:utes)?)\s*(?:[·—–-]\s*)?/g, '').trim();
  const session = (
    `<section class="card daily-today"><h2>` +
    `${t('האימון שלך להיום', 'Your session today')}` +
    ` · ` +
    `${esc(title)}` +
    `</h2><p class="session-meta">` +
    `${esc(extraTimeText(p))}` +
    ` · ` +
    `${esc(location?.name || t('המקום שלי', 'My space'))}` +
    ` · ` +
    `${movements.length}` +
    ` ` +
    `${t('תרגילים', 'movements')}` +
    `</p><div class="today-thumbnails" aria-label="` +
    `${t('התרגילים באימון', 'Session movements')}` +
    `">` +
    `${movements.map(e => {
      const plate = movementAtlas[e.id], label =(en ? e.en: e.he) || t('תרגול תנועה', 'Movement practice');
      return (
        `<button class="today-thumbnail secondary" data-exercise="` +
        `${esc(e.id)}` +
        `" aria-label="` +
        `${t('הוראות: ', 'Instructions: ') + esc(label)}` +
        `">` +
        `${plate ? (
          `<img src="` +
          `${plate.src}` +
          `" width="` +
          `${plate.width}` +
          `" height="` +
          `${plate.height}` +
          `" alt="` +
          `${esc(label)}` +
          `" loading="lazy">`
        ): (
          `<span class="thumbnail-placeholder">` +
          `${esc(label)}` +
          `</span>`
        )}` +
        `<span>` +
        `${esc(label)}` +
        `</span></button>`
      )
    }).join('')}` +
    `</div>` +
    `<button id="daily-start" class="full-width">` +
    `${profile.session ? t('להמשך האימון', 'Resume session'): t('לצפייה באימון', 'View session')}` +
    `</button><button id="daily-adjust" class="text-button full-width">` +
    `${t('התאמה', 'Adjust')}` +
    `</button></section>`
  );
  return (
    `<div class="coach-page"><h1>` +
    `${t('מאמן', 'Coach')}` +
    `</h1>` +
    `${session}` +
    `<section class="card recent-sessions"><h2>` +
    `${t('אימונים אחרונים', 'Recent sessions')}` +
    `</h2>` +
    `${profile.logs?.length ? (
      `<ul>` +
      `${profile.logs.slice(- 5).reverse().map(log => (
        `<li><time>` +
        `${esc((log.completed_at || log.started_at || '').slice(0, 10))}` +
        `</time> · ` +
        `${esc(en ? log.plan?.titleEn || 'Session': log.plan?.titleHe || log.plan?.title || 'אימון')}` +
        ` · ` +
        `${log.sets?.length || 0}` +
        ` ` +
        `${t('סטים שתועדו', 'logged sets')}` +
        `</li>`
      )).join('')}` +
      `</ul><button class="text-button" data-page="history">` +
      `${t('לכל ההתקדמות', 'All progress')}` +
      `</button>`
    ): (
      `<p>` +
      `${t('האימונים שיתועדו יופיעו כאן.', 'Your logged sessions will appear here.')}` +
      `</p>`
    )}` +
    `</section></div>`
  );
}
