import {
  skills
}
from './data/skills.js?v=31';
import {
  skillSelections, skillState
}
from './skill-progress.js?v=31';
import {
  escapeHTML as esc
}
from './ui.js?v=31';
import {
  exercises
}
from './data/exercises.js?v=31';
import {
  movementAtlas
}
from './data/movement-atlas.js?v=31';
import {
  homeSignals, tissueLabels, patternLabels, dayKey, proteinReferences
}
from './home-signals.js?v=31';
import {
  forecastWindows
}
from './home-weather.js?v=31';
import {
  selectLesson, lessonContexts
}
from './home-content.js?v=31';
// Translate existing catalogue movement taxonomy without guessing muscle contributions.
const patternMap = {
  support: 'vertical_push', straight_arm_pull: 'horizontal_pull', knee_flexion: 'hip', hip_abduction: 'hip',
  hip_external_rotation: 'hip', calf: 'knee', locomotion: 'knee', scapular_control: 'horizontal_pull',
  horizontal_push: 'horizontal_push', vertical_push: 'vertical_push', horizontal_pull: 'horizontal_pull',
  vertical_pull: 'vertical_pull', hip_extension: 'hip', single_leg: 'knee', core_anti_extension: 'core',
  core_anti_rotation: 'core', core_lateral_stability: 'core', trunk_flexion: 'core', 'horizontal-push': 'horizontal_push',
  'vertical-push': 'vertical_push', 'horizontal-pull': 'horizontal_pull', 'vertical-pull': 'vertical_pull',
  squat: 'knee', hinge: 'hip', core: 'core', compression: 'core', 'anti-extension': 'core', 'anti-rotation': 'core'
};
export const homeCatalog = Object.fromEntries(exercises.map(e => [e.id, {
  ... e, pattern: e.movementSubtype === 'scapular_push' ? 'horizontal_push': patternMap[e.pattern] || patternMap[e.movementPattern] || null
}]));
export function homeModel(profile, now = new Date(), online = true) {
  const weather = forecastWindows(profile.home?.weather, now, online), signals = homeSignals(profile,
  homeCatalog, now, weather);
  const lesson = profile.home?.lessonsOff ? null: selectLesson( {
    date: signals.date, history: profile.home?.lessonHistory, hidden: profile.home?.hiddenLessons, less: profile.home?.lessCategories,
    contexts: [...(weather?.selected?.hot ? [35, 36]: []), ... lessonContexts(profile, signals)], supplementInterest: profile.home?.
    supplementInterest, creatineChosen: profile.home?.creatineChosen, caffeineInterest: profile.home?.caffeineInterest,
    fasting: profile.home?.fasting, hiddenCategories: profile.home?.hidden?.includes('nutrition') ? ['nutrition']: []
  });
  return {
    signals, weather, lesson
  };
}
export function renderHome( {
  profile = {
  }, todayPlan = {
  }, now = new Date(), online = globalThis.navigator?.onLine !== false
} = {
}) {
  const h = profile.home || {
  }, {
    signals: s, weather, lesson
  } = homeModel(profile, now, online), a = s.action, rawEntry = profile.checkIns?.[s.date] || {
  }, e = rawEntry.soreness !== undefined && rawEntry.sorenessScale !== 4 ? {
    ... rawEntry, soreness: Math.max(0, rawEntry.soreness - 1)
  }: rawEntry;
  const button =(action, label, cls = 'text-button') => (
    `<button class="` +
    `${cls}` +
    `" data-home-action="` +
    `${action}` +
    `">` +
    `${label}` +
    `</button>`
  );
  const section =(cls, title, body) => (
    `<section class="card ` +
    `${cls}` +
    `"><h2>` +
    `${title}` +
    `</h2>` +
    `${body}` +
    `</section>`
  );
  todayPlan = profile.session?.plan || todayPlan;
  const lead =(todayPlan.blocks || []).find(b => ['work', 'skill'].includes(b.phase) && movementAtlas[b.id]),
  plate = lead && movementAtlas[lead.id];
  const hero = section('home-hero', 'הצעד הבא שלך', (
    `<div class="home-hero-art ` +
    `${plate ? 'is-plate': 'is-campaign'}` +
    `"><img src="` +
    `${plate ? plate.src: './assets/campaign-practice.webp'}` +
    `" width="` +
    `${plate ? plate.width: 1536}` +
    `" height="` +
    `${plate ? plate.height: 1024}` +
    `" alt="` +
    `${plate ? esc(exercises.find(x => x.id === lead.id)?.he || 'תנועה באימון הבא'): ''}` +
    `" fetchpriority="high"></div><div class="home-hero-copy"><h3>` +
    `${!profile.goal && a.id !== 'resume' ? 'נתחיל מהכיוון שלך': a.title}` +
    `</h3><p class="home-reason">` +
    `${esc(!profile.goal && a.id !== 'resume' ? 'נבחר מטרה, רמה וימי אימון שמתאימים לשבוע שלך.': a.reason)}` +
    `</p>` +
    `${!profile.goal && a.id !== 'resume' ? '<button data-page="settings">נבחר כיוון ראשון</button>': a.cta ? button(a.id,
    a.cta, 'home-primary'): ''}` +
    `<details><summary>למה זו ההצעה?</summary><p>` +
    `${esc(s.ready.reason)}` +
    `</p><p>ההצעה מתבססת על דיווחים אישיים ותיעוד אימונים. הספים הם כללי תכנון, אינם מדידת התאוששות ` +
    `או אבחון.</p>` +
    `${a.id === 'lighter' ? (
      `<p>` +
      `${esc(s.lighter.reasons.join(' · '))}` +
      `</p>`
    ): ''}` +
    `${s.load.comparable ? (
      `<p>עומס האימונים שתיעדת: ` +
      `${s.load.total}` +
      ` יחידות בשבעה ימים, מול בסיס שבועי ` +
      `${s.load.baseline.toFixed(0)}` +
      ` בארבעת השבועות הקודמים. שינוי ` +
      `${s.load.change.toFixed(0)}` +
      `%. כיסוי: ` +
      `${Math.round(s.load.coverage * 100)}` +
      `%.</p>`
    ): ''}` +
    `${button('not-today', 'לא רלוונטי היום')}` +
    `</details>` +
    `${a.id === 'checkin' ? button('skip-checkin', 'אפשר לדלג'): ''}` +
    `</div>`
  ));
  const rating =(key, label, range) => (
    `<fieldset class="daily-rating"><legend>` +
    `${label}` +
    `</legend><div>` +
    `${range.map(n => (
      `<label><input type="radio" name="` +
      `${key}` +
      `" value="` +
      `${n}` +
      `" aria-label="` +
      `${label}` +
      `: ` +
      `${n}` +
      `" ` +
      `${e[key] === n ? 'checked': ''}` +
      `><span>` +
      `${n}` +
      `</span></label>`
    )).join('')}` +
    `</div></fieldset>`
  );
  const checkin = section('home-checkin', 'איך הגוף היום?', (
    `<details ` +
    `${a.id === 'checkin' ? 'id="home-checkin-details"': ''}` +
    `><summary>` +
    `${Object.keys(e).length ? esc(s.ready.title) + ' · עדכון': 'גם תשובה אחת יכולה לעזור'}` +
    `</summary><form id="daily-check-in"><div class="home-ratings">` +
    `${rating('sleepQuality', 'שינה · 1 נמוכה, 5 טובה', [1, 2, 3, 4, 5])}` +
    `${rating('energy', 'אנרגיה · 1 נמוכה, 5 גבוהה', [1, 2, 3, 4, 5])}` +
    `${rating('soreness', 'תפיסות · 0 ללא, 4 חמור', [0, 1, 2, 3, 4])}` +
    `</div><label>שעות שינה<input type="number" name="sleepHours" min="0" max="24" step="0.5" ` +
    `value="` +
    `${e.sleepHours ?? ''}` +
    `"></label><label>אזור התפיסות<input name="sorenessArea" maxlength="80" value="` +
    `${esc(e.sorenessArea || '')}` +
    `"></label><label>כאב עכשיו<select name="pain"><option value="">ללא עדכון</option><option ` +
    `value="yes" ` +
    `${e.pain === true ? 'selected': ''}` +
    `>יש כאב</option><option value="no" ` +
    `${e.pain === false ? 'selected': ''}` +
    `>אין כאב כעת</option></select></label><details><summary>רישום נוסף</summary><div ` +
    `class="daily-fields">` +
    `${[ ['steps', 'צעדים', 0, 100000, 1], ['weightKg', 'משקל שאישרת בק״ג', 20, 400, .1], ['waterLiters',
    'מים בליטרים', 0, 15, .1]].filter(( [k]) => !(h.hidden || []).includes(k === 'weightKg' ? 'weight': k === 'steps' ? 'steps': 'nutrition')).map((
    [key, label, min, max, step]) => (
      `<label>` +
      `${label}` +
      `<input type="number" name="` +
      `${key}` +
      `" min="` +
      `${min}` +
      `" max="` +
      `${max}` +
      `" step="` +
      `${step}` +
      `" value="` +
      `${e[key] ?? ''}` +
      `"></label>`
    )).join('')}` +
    `${!h.hidden?.includes('nutrition') &&(now.getHours() >= 18) ? (
      `<label>הגעת ליעד החלבון היום?<select name="proteinTargetHit"><option value="">ללא דיווח` +
      `</option><option value="yes" ` +
      `${e.proteinTargetHit === true ? 'selected': ''}` +
      `>כן</option><option value="no" ` +
      `${e.proteinTargetHit === false ? 'selected': ''}` +
      `>לא</option></select></label>`
    ): ''}` +
    `</div></details><button type="submit" class="secondary">שמירת הדיווח</button><p ` +
    `id="daily-error" role="status"></p></form></details>` +
    `${a.id === 'checkin' ? button('skip-checkin', 'לדלג להיום') + '<button class="text-button" data-page="coach">להמשיך למאמן</button>': ''}`
  ));
  const ring = 98 *(s.week.completion || 0), week = section('today-week home-week', 'השבוע שלך', (
    `<div class="home-week-summary"><svg class="home-ring" viewBox="0 0 44 44" role="img" ` +
    `aria-label="` +
    `${s.week.sessions}` +
    ` מתוך ` +
    `${s.week.target}` +
    ` אימונים"><circle cx="22" cy="22" r="16" pathLength="100"/><circle class="home-ring-value" ` +
    `cx="22" cy="22" r="16" pathLength="100" stroke-dasharray="` +
    `${ring}` +
    ` 100"/><text x="22" y="24">` +
    `${s.week.sessions}` +
    `/` +
    `${s.week.target || '—'}` +
    `</text></svg><div><strong>` +
    `${s.week.target ? (
      `${s.week.sessions}` +
      ` מתוך ` +
      `${s.week.target}` +
      ` אימונים`
    ): 'כמה אימונים מתאימים לשבוע שלך?'}` +
    `</strong><small>` +
    `${s.week.sessions ? 'כל אימון שתיעדת נשמר בדרך שלך.': 'אפשר להתחיל מחדש מאימון אחד שמתאים לשבוע הזה.'}` +
    `</small>` +
    `${h.skill ? (
      `<small>` +
      `${esc(exercises.find(x => x.id === h.skill)?.he || 'הסקיל שבחרת')}` +
      ` · ` +
      `${s.skills[h.skill] || 0}` +
      ` ימי תרגול</small>`
    ): ''}` +
    `</div></div><div class="weekly-bars home-balance">` +
    `${Object.entries(s.patterns.balance).map(( [key, n]) => (
      `<div><span>` +
      `${( {
        push: 'דחיקה', pull: 'משיכה', legs: 'רגליים', core: 'ליבה'
      })[key]}` +
      `</span><span class="home-bar" role="meter" aria-label="` +
      `${( {
        push: 'דחיקה', pull: 'משיכה', legs: 'רגליים', core: 'ליבה'
      })[key]}` +
      `" aria-valuemin="0" aria-valuemax="` +
      `${Math.max(n, 24)}` +
      `" aria-valuenow="` +
      `${n}` +
      `"><i style="width:` +
      `${Math.min(100, n / 24 * 100)}` +
      `%"></i></span><b>` +
      `${n}` +
      `</b></div>`
    )).join('')}` +
    `</div><details><summary>דפוסים והקשר לתכנון</summary><small>סטי עבודה דינמיים שתועדו עם מאמץ ` +
    `ידוע. הפס מתאר את התיעוד בלבד, ללא יעד היפרטרופיה לפי דפוס. עומסי החזקה ותרגול נספרים בנפרד ` +
    `לצורכי התאוששות.</small>` +
    `${Object.entries(patternLabels).map(( [key, label]) => (
      `<p>` +
      `${label}` +
      `: ` +
      `${s.patterns.sets[key]}` +
      ` סטים` +
      `${s.patterns.unknown[key] ? (
        ` · ` +
        `${s.patterns.unknown[key]}` +
        ` במאמץ לא ידוע`
      ): ''}` +
      `${s.patterns.hours[key] !== undefined ? (
        ` · לעבור ` +
        `${Math.floor(s.patterns.hours[key])}` +
        ` שעות מהחשיפה המשמעותית האחרונה`
      ): ''}` +
      `</p>`
    )).join('')}` +
    `${Object.entries(s.patterns.tissueHours || {
    }).map(( [key, hours]) => (
      `<p>` +
      `${tissueLabels[key]}` +
      `: לעבור ` +
      `${Math.floor(hours)}` +
      ` שעות מהחשיפה המשמעותית האחרונה</p>`
    )).join('')}` +
    `${s.load.coverage >= .8 ? (
      `<p>עומס האימונים שתיעדת בשבעת הימים האחרונים: ` +
      `${s.load.total}` +
      ` יחידות. כיסוי משך ומאמץ אימון: ` +
      `${Math.round(s.load.coverage * 100)}` +
      `%. המדד להשוואה אישית; פעילות מחוץ לאפליקציה עשויה להיות חסרה.</p>`
    ): ''}` +
    `<p>48–72 שעות הן הקשר לתכנון, לא שעון התאוששות. תפיסות, כאב וביצוע קודמים לזמן.</p></details>` +
    `<button class="text-button" data-page="history">לכל ההתקדמות</button>`
  ));
  let park = '';
  if (h.weather?.consent || !h.weather?.dismissed) {
    const w = h.weather || {
    };
    park = section('home-park', 'לקראת הפארק', w.consent ? (
      `${weather ? (
        `<p>` +
        `${esc(weather.city)}` +
        ` · עודכן ` +
        `${esc(new Date(weather.updated_at).toLocaleString('he-IL'))}` +
        `</p>` +
        `${weather.options.map(x => (
          `<p>` +
          `${esc(new Date(x.start).toLocaleString('he-IL', {
            weekday: 'short', hour: '2-digit', minute: '2-digit'
          }))}` +
          ` · חלון שעתיים · ` +
          `${x.temperature}` +
          `° · מורגשת ` +
          `${x.apparent}` +
          `°</p><p>` +
          `${esc(x.text)}` +
          `</p><button class="secondary" data-weather-window="` +
          `${x.start}` +
          `">לבחור שעה</button>`
        )).join('')}` +
        `${weather.unavailable ? '<p>לא נמצא חלון מתאים בהעדפות שבחרת. אפשר לבדוק חלופה בבית.</p>': ''}` +
        `${weather.selected ? (
          `<p>החלון שבחרת: ` +
          `${esc(new Date(weather.selected.start).toLocaleString('he-IL'))}` +
          `</p><p>` +
          `${esc(weather.selected.text)}` +
          `</p>`
        ): ''}`
      ): (
        `<p>` +
        `${online ? 'אין תחזית עדכנית להצגה.': 'ללא חיבור, המלצות התחזית מוסתרות.'}` +
        `</p>`
      )}` +
      `<p role="status" id="home-weather-status"></p>` +
      `${button('weather-settings', 'עיר וחלונות יציאה')}` +
      `${button('weather-off', 'כיבוי ומחיקת העיר והתחזית')}` +
      `<small>נתוני תחזית: <a href="https://open-meteo.com/" target="_blank" rel="noopener ` +
      `noreferrer">שירות התחזית הפתוח</a> · <a href="https://creativecommons.org/licenses/by/4.0/">` +
      `רישיון ייחוס</a>. תחזית עירונית אינה מדידה בפארק ואינה קובעת שהוא בטוח או יבש.</small><p>` +
      `בחולשה או תחושת עילפון מפסיקים מיד ועוברים למקום קריר. בלבול, קריסה, פרכוס או ירידה בהכרה בזמן ` +
      `מאמץ בחום הם מצב חירום: מתקשרים מיד למד״א 101 ומתחילים קירור לפי הנחיות המוקדן. אין לתת שתייה ` +
      `לאדם שאינו בהכרה מלאה. הזעה אינה שוללת מכת חום.</p><a href="https://ims.gov.il/" ` +
      `target="_blank" rel="noopener noreferrer">אזהרות השירות המטאורולוגי</a>`
    ): (
      `<p>תחזית לפי עיר יכולה לעזור לבחור שעה לפארק.</p><details><summary>פירוט</summary><p>בחיבור ` +
      `לשירות נשלחים כתובת הרשת שלך ומיקום העיר, ללא נתוני האימון. לא תישלח בקשה לפני בחירה מפורשת.` +
      `</p></details>` +
      `${button('weather-consent', 'לבחירת תחזית בהסכמה', 'secondary')}` +
      `${button('weather-dismiss', 'לא עכשיו')}`
    ));
  }
  const insight = s.insight ? section('home-insight', 'מה השתנה', (
    `<p>` +
    `${esc(s.insight.text)}` +
    `</p>` +
    `${s.insight.record ? button('seen-record', 'ראיתי, ממשיכים'): ''}`
  )): '';
  const anchor = s.anchor && a.id !== 'recovery' ? section('home-anchor', 'עוגן קטן להיום', (
    `<h3>` +
    `${esc(s.anchor.title)}` +
    `</h3><p>` +
    `${esc(s.anchor.text)}` +
    `</p>` +
    `${button('anchor-done', 'בוצע להיום')}` +
    `${button('anchor-dismiss', 'לא מתאים היום')}`
  )): '';
  const review = s.reviewDue && a.id !== 'review' ? section('home-review', 'דקה לשבוע הבא', (
    `<p>מה עבד, מה התקדם ומתי הכי סביר שהאימון הראשון יקרה?</p>` +
    `${button('review', 'לסקירה של דקה')}` +
    `${button('review-dismiss', 'לא השבוע')}`
  )): '';
  const education = lesson ? section('home-lesson', '30 שניות שעוזרות', (
    `<h3>` +
    `${esc(lesson.title)}` +
    `</h3><p>` +
    `${esc(lesson.text.replace(/UV/g, 'מדד הקרינה').split('. ')[0].replace(/[.]+$/, '') + '.')}` +
    `</p><div class="home-lesson-actions">` +
    `${button('read-lesson', 'לקריאה ולמקורות')}` +
    `${button('hide-lesson', 'לא מועיל לי')}` +
    `${button('less-category', 'פחות בנושא הזה')}` +
    `</div>`
  )): '';
  const movements = [... new Set((todayPlan.blocks || []).filter(b => ['work', 'skill'].includes(b.phase)).map(b => b.id))].slice(0,
  5);
  const preview = section('home-session-preview', 'האימון שלך להיום', (
    `<p>` +
    `${esc(todayPlan.titleHe || todayPlan.title || 'תרגול לפי הכיוון שלך')}` +
    ` · ` +
    `${Math.ceil((todayPlan.main_seconds ?? todayPlan.total_seconds ?? (profile.minutes || 30) * 60) / 60)}` +
    ` דקות</p><div class="today-thumbnails">` +
    `${movements.map(id => {
      const plate = movementAtlas[id], e = exercises.find(e => e.id === id);
      return plate ? (
        `<img src="` +
        `${plate.src}` +
        `" width="` +
        `${plate.width}` +
        `" height="` +
        `${plate.height}` +
        `" alt="` +
        `${esc(e?.he || 'תנועה באימון')}` +
        `" loading="lazy">`
      ): (
        `<span>` +
        `${esc(e?.he || 'תרגול תנועה')}` +
        `</span>`
      )
    }).join('')}` +
    `</div><button class="secondary" data-page="coach">לצפייה באימון</button>`
  ));
  const skillCard = section('home-skills', 'הסקילים שלך', Object.values(skillSelections(profile)).map(id => {
    const skill = skills.find(s => s.id === id), state = skillState(profile, id), stage = skill.stages[state.stage],
    c = stage.exit;
    if (state.achieved) return (
      `<h3>` +
      `${esc(skill.he)}` +
      ` · היעד הושג לפי הדיווחים</h3><button data-next-skill="` +
      `${skill.type}` +
      `">לבחור את סקיל ` +
      `${skill.type === 'pull' ? 'המשיכה': skill.type === 'push' ? 'הדחיקה': 'הרגליים'}` +
      ` הבא</button>`
    );
    return (
      `<h3>` +
      `${esc(skill.he)}` +
      `</h3><p>שלב ` +
      `${state.stage + 1}` +
      ` · ` +
      `${esc(exercises.find(e => e.id === stage.exerciseId)?.he || 'תרגול')}` +
      `</p><p>` +
      `${state.achieved ? 'היעד הושג לפי הדיווחים': (
        `כדי לעבור שלב: ` +
        `${c.sets}` +
        `×` +
        `${c.value}` +
        ` ` +
        `${c.unit === 'seconds' ? 'שניות': 'חזרות'}` +
        `${c.perSide ? ' לכל צד': ''}` +
        `, בשני אימונים עם שליטה מאושרת`
      )}` +
      `</p>`
    )
  }).join('') + '<a href="#skills">למפות הדרך</a>');
  const weight = Object.entries(profile.checkIns || {
  }).filter(( [d, e]) => d <= s.date && e.weightKg).sort(( [a], [b]) => a.localeCompare(b)).at(- 1)?.[1].weightKg || profile.weightKg;
  const reference = !h.hidden?.includes('weight') ? proteinReferences(weight): null;
  const nutrition = h.anchorDismissed !== s.date && !h.hidden?.includes('nutrition') ? section('home-anchor',
  'עוגן תזונה להיום', reference ? (
    `<p>טווח תכנון יומי לפי המשקל שדיווחת: ` +
    `${reference.daily.join('–')}` +
    ` גרם חלבון. אפשר לפזר מקורות חלבון לאורך היום; זהו טווח כללי למבוגרים בריאים.</p>` +
    `${button('anchor-dismiss', 'לא מתאים היום')}`
  ): (
    `<p>אפשר להוסיף משקל כדי להתאים את טווח החלבון שלך.</p>` +
    `${button('checkin', 'להוספת משקל', 'secondary')}` +
    `${button('anchor-dismiss', 'לא עכשיו')}`
  )): '';
  return (
    `<div class="daily-home home-h"><header class="today-greeting"><h1>היום</h1><time datetime="` +
    `${dayKey(now)}` +
    `">` +
    `${new Intl.DateTimeFormat('he-IL', {
      weekday: 'long', day: 'numeric', month: 'long'
    }).format(now)}` +
    `</time></header><div class="home-main">` +
    `${hero}` +
    `<template id="home-checkin-template">` +
    `${checkin}` +
    `</template>` +
    `${preview}` +
    `${skillCard}` +
    `${insight}` +
    `${review}` +
    `${education}` +
    `</div><aside class="home-side">` +
    `${a.id !== 'checkin' ? checkin: ''}` +
    `${week}` +
    `${park}` +
    `${anchor || nutrition}` +
    `</aside><details class="home-preferences"><summary>העדפות ומידע</summary><p>נשמר במכשיר. ` +
    `${online ? 'האותות מתעדכנים לפי הדיווחים שלך.': 'ללא חיבור: האותות המקומיים זמינים.'}` +
    `</p>` +
    `${button('preferences', 'התאמה אישית והסתרת מידע')}` +
    `</details></div>`
  );
}
