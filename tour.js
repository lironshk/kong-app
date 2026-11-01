import {focusPlayerHTML} from './focus-player.js?v=31';
import {openCoachPreview} from './coach-flow.js?v=31';
import {exercises} from './data/exercises.js?v=31';
import {effortChoicesHTML} from './player-coach.js?v=31';
import {createPlayerSignals} from './player-signals.js?v=31';
import {escapeHTML as esc, formatTime, icon} from './ui.js?v=31';

export const TOUR_VERSION = 1;
const tourStep = (id, route, target, title, text, extra = {}) => ({id, route, target, title, text, ...extra});
export const TOUR_STEPS = [
  tourStep('welcome', 'home', null, 'נעים להכיר', 'מאמן אישי שעומד לידך בכל אימון'),
  tourStep('home-next', 'home', '.home-hero', 'הצעד הבא שלך',
    'כאן מחכה הפעולה שמתאימה להיום: אימון, דיווח קצר או התאוששות. המאמן מסביר גם למה.'),
  tourStep('home-workout', 'home', '.home-session-preview', 'האימון של היום',
    'התרגילים והזמן נמצאים כאן במבט אחד. פותחים את האימון כדי לראות את הסדר והיעדים.'),
  tourStep('coach-header', 'coach', '.daily-today .session-identity', 'יודעים מה מאמנים',
    'שם האימון מתאר את סוג האימון. התוויות שלצדו מראות אילו אזורי שרירים יעבדו היום.'),
  tourStep('coach-time', 'coach', '.daily-today .session-meta', 'הזמן שלך, ברור מראש',
    'למשל: 45 דק׳ אימון · +6 חימום · +4 שחרור. זמן האימון כולל מנוחות; חימום ושחרור הם תוספות לבחירה.'),
  tourStep('coach-duration', 'coach', '.duration-segments', 'מתאימים לזמן הפנוי',
    'בוחרים כמה זמן יש היום. המאמן מתאים את התוכנית לזמן הזה, בלי להוסיף עבודה רק כדי למלא אותו.', {preview: true}),
  tourStep('coach-ready', 'coach', '#ready', 'מתחילים מאיך שמרגישים',
    '״יום קל יותר״ מתאים את העומס למוכנות. כשיש כאב בוחרים ״יש כאב״ ועוצרים לבדיקה לפני המשך עומס.', {preview: true}),
  tourStep('coach-place', 'coach', '#session-location', 'המקום קובע את האפשרויות',
    'בוחרים את מקום האימון. רשימת הציוד של המקום מופיעה למטה, ואפשר לעדכן מה זמין היום.', {preview: true}),
  tourStep('coach-equipment', 'coach', '#preview-equipment', 'רק הציוד שבאמת זמין',
    'מסמנים מה נמצא לידך. המאמן מתכנן לפי הציוד שנבחר; בלי ציוד משיכה מתאים ייתכן שחלק המשיכה יהיה חסר.', {preview: true}),
  tourStep('coach-structure', 'coach', '.session-structure-chips', 'סטים או סבבים',
    'בסטים מסיימים תרגיל או זוג לפני שממשיכים; בסבבים עוברים בין כמה תרגילים לפי הסדר וחוזרים לעוד סבב עם מנוחה.', {preview: true}),
  tourStep('overview-exercise', 'coach', '.preview-movement-item', 'לכל תרגיל יש יעד ברור',
    'בכרטיס מופיעים הסטים, החזרות או זמן ההחזקה, המנוחה והמאמץ הרצוי. פותחים את הפירוט כדי ללמוד את התנועה.', {preview: true}),
  tourStep('overview-tiers', 'coach', '.variation-choice', 'קל, רגיל וקשה — עם המלצה',
    'התג ״מומלץ״ מסמן את בחירת המאמן לפי הביצוע שתיעדת והציוד. בלי תיעוד מתחילים בזהירות; גרסה מתקדמת דורשת אישור מתאים.',
    {preview: true}),
  tourStep('overview-warm', 'coach', '[data-session-extra="warmup"]', 'חימום לבחירתך',
    'המתג מוסיף חימום לפני האימון, מעבר לזמן שבחרת. הכנה קלה שנדרשת לתרגיל עשויה להישאר גם בלעדיו.', {preview: true}),
  tourStep('overview-cool', 'coach', '[data-session-extra="cooldown"]', 'מסיימים בנחת',
    'אפשר להוסיף שחרור בסיום או לוותר עליו. גם הזמן הזה מוצג בנפרד מזמן האימון.', {preview: true}),
  tourStep('player-movement', 'work', '.focus-step', 'מכירים את מסך האימון',
    'התמונה, השם והיעד מלווים כל תנועה. זו הדגמה בלבד: אין צורך להתאמן עכשיו ושום ביצוע לא נשמר.', {demo: 'work'}),
  tourStep('player-difficulty', 'work', '.difficulty-controls', 'התרגיל לא מתאים כרגע?',
    '״קשה מדי״ מבקש גרסה קלה יותר כשאפשר. ״קל מדי״ בודק אם יש בסיס להתקדמות; הוא לא פותח גרסה קשה אוטומטית.',
    {demo: 'work', actions: [['[data-difficulty="hard"]', 'קשה מדי'], ['[data-difficulty="easy"]', 'קל מדי']]}),
  tourStep('player-effort', 'work', '.effort-choices', 'איך הרגיש הסט?',
    'בוחרים קל מהיעד, כמו היעד או קשה מהיעד, לפי העתודה שהתבקשה. זהו הדיווח שלך, לא בדיקת טכניקה.',
    {demo: 'work', actions: [['[data-set-effort="easy"]', 'קל מהיעד'], ['[data-set-effort="normal"]', 'כמו היעד'],
      ['[data-set-effort="hard"]', 'קשה מהיעד']]}),
  tourStep('player-reps', 'work', '.quick-adjust', 'מתעדים רק מה שבוצע',
    'משנים את המספר בעזרת מינוס ופלוס ואז לוחצים ״בוצע״. נסו כאן; בהדגמה המספר לא ייכנס ליומן.',
    {demo: 'work', actions: [['#actual-minus', 'פחות חזרה'], ['#actual-plus', 'עוד חזרה'], ['#complete-target', 'בוצע']]}),
  tourStep('player-rest', 'work', '.focus-step', 'המנוחה מתחילה לבד',
    'אחרי ״בוצע״ המנוחה מתחילה אוטומטית. אפשר להוסיף או להפחית 15 שניות, לדלג ולראות מה התרגיל הבא.',
    {demo: 'rest', actions: [['#rest-minus', 'פחות 15 שניות'], ['#rest-add', 'עוד 15 שניות'], ['#rest-skip', 'לדלג']]}),
  tourStep('player-hold', 'work', '.session-clock', 'שעון להחזקה, כשמוכנים',
    'מפעילים רק כשהמנח מוכן. צליל ורטט מסמנים התחלה, שניות אחרונות וסיום במכשיר תומך. כאן מדגימים שש שניות.',
    {demo: 'hold', actions: [['#timer-toggle', 'הפעלה או עצירה'], ['#timer-sound', 'השתקה או הפעלת צליל ורטט']]}),
  tourStep('player-warm', 'work', '#skip-warmup', 'אפשר לדלג לחלק המרכזי',
    '״דילוג לאימון״ עובר מהחימום לחלק המרכזי. דילוג אינו נחשב ביצוע; הכנה נדרשת לתרגיל נשארת בתוכנית.',
    {demo: 'warm', actions: [['#skip-warmup', 'דילוג לאימון']]}),
  tourStep('player-stop', 'work', '#set-stop', 'כשלא מצליחים או כשכואב',
    'פותחים ״לא הצלחתי / כאב״. אי־הצלחה מאפשרת דילוג בלי לרשום ביצוע; כאב מוביל לעצירה ולסיכום, ולבדיקת מוכנות לפני חזרה לעומס.',
    {demo: 'work', actions: [['#set-stop', 'לא הצלחתי / כאב']]}),
  tourStep('player-stop-choices', 'work', '.tour-stop-choices', 'בוחרים מה קרה',
    'אי־הצלחה אינה כאב. בכאב מפסיקים עומס; בכאב חד, מתמשך או בירידת שליטה פונים לבדיקה. הבחירות כאן הן הדגמה בלבד.',
    {demo: 'stop', actions: [['#stop-failed', 'לא הצלחתי — דילוג ללא ביצוע'], ['#stop-pain', 'יש כאב — סיום ושמירה']]}),
  tourStep('player-debrief', 'work', '.session-debrief', 'מסיימים עם כיוון לפעם הבאה',
    'הסיכום מציג רק מה שתועד, מה נשמר בשליטה ומה לבדוק באימון הבא. אפשר להוסיף תחושה וכאב. ההדגמה לא נשמרת.', {demo: 'debrief'}),
  tourStep('library-areas', 'library', '.lib-muscle-section', 'ספרייה לפי אזור שרירים',
    'התנועות מסודרות לפי אזורי הגוף. בכל משפחה רואים יחד גרסה קלה, רגילה וקשה, כדי להבין את הדרך ביניהן.'),
  tourStep('library-family', 'library', '.lib-family', 'משפחה אחת, שלוש דרגות',
    'פותחים כרטיס כדי ללמוד את התנועה. זו ספריית ידע; זמינות בספרייה אינה אישור לבצע תרגיל מתקדם.'),
  tourStep('library-filters', 'library', '#lib-open-filters', 'מוצאים את מה שצריך',
    'אפשר לחפש ולסנן לפי שרירים, דרגת קושי, ציוד ומטרה. הבחירות מצמצמות את התוצאות בלי להסתיר את ההקשר של המשפחה.'),
  tourStep('library-detail', 'library/exercise/push', '.lib-variation-group', 'לומדים וגם מוצאים חלופה',
    'בתרגיל פתוח מחכות הוראות, דגשים וקישורים לגרסאות קלות וקשות. חוזרים למשפחה כדי להשוות לפני שבוחרים.'),
  tourStep('skills-path', 'skills/handstand', '.skill-steps', 'השלבים בדרך לסקיל',
    'לכל סקיל יש דרך ברורה מהכנה ליכולת המלאה. רואים את השלבים, בלי לנחש מה צריך ללמוד קודם.'),
  tourStep('skills-current', 'skills/handstand', '.current-stage', 'השלב שלך ותנאי המעבר',
    'כאן מופיעים התרגיל הנוכחי והקריטריון להתקדמות. מעבר דורש ביצוע מתועד ואישור שלך; תרגיל מתקדם עדיין דורש בדיקה אישית.'),
  tourStep('progress', 'progress', '#main', 'התקדמות שמבוססת עליך',
    'נשמרים סטים שבוצעו, חזרות או שניות, מאמץ ותנאי ביצוע. המאמן משווה באותם תנאים ושוקל התקדמות, הקלה או התאוששות.'),
  tourStep('profile-style', 'profile', '[aria-label="סגנון אימון"]', 'שגרת אימון שמתאימה לך',
    'בוחרים כל הגוף, משולב או דחיקה ומשיכה לפי מספר ימי האימון. ההסבר מציג איך הבחירה משנה את השבוע.'),
  tourStep('profile-legs', 'profile', '[data-dedicated-legs]', 'רגליים כחלק מהשבוע',
    'אפשר לבקש יום רגליים נפרד כשמספר הימים מאפשר זאת. אחרת הרגליים משולבות באימונים; ההשלכה מוסברת ליד הבחירה.'),
  tourStep('profile-structure', 'profile', '[aria-label="מבנה האימון"]', 'ברירת המחדל למבנה',
    'משולב, סטים או סבבים: זו ההעדפה לאימונים הבאים. המאמן עדיין מתאים את המבנה למטרה ולמנוחה שנדרשת.'),
  tourStep('profile-extras', 'profile', '[data-profile-extra="warmup"]', 'התוספות המועדפות עליך',
    'כאן קובעים אם להציע חימום ושחרור כברירת מחדל. אפשר לשנות גם לפני אימון מסוים; הזמן שלהם נוסף בנפרד.'),
  tourStep('profile-replay', 'profile', '#settings-tour', 'ההדרכה תמיד כאן',
    '״הדרכה על האפליקציה״ פותחת את הסיור מחדש, גם מהתפריט שליד סמל הפרופיל. אפשר לדלג ולחזור בכל זמן.'),
  tourStep('finish', 'coach', null, 'מוכנים לצעד הבא', 'המאמן כאן איתך. נפתח את האימון של היום, נבדוק את היעדים ונתחיל כשנוח לך.')
];

let tourEnvironment, activeTour, offerTimer;
const offeredTours = new Set();
export const isTourActive = () => !!activeTour;
export const tourNeedsOffer = profile => !!profile && (profile.tourSeen !== true || profile.tourVersion !== TOUR_VERSION);
export const tourReducedMotion = win => win.matchMedia('(prefers-reduced-motion: reduce)').matches;
export function tourSwipeDirection(dx, dy) {
  return Math.abs(dx) >= 48 && Math.abs(dx) > Math.abs(dy) * 1.3 ? dx > 0 ? 1 : -1 : 0;
}
// A pure geometry boundary lets tests check narrow and short viewports without guessing CSS dimensions.
export function tourBubblePosition(target, bubble, viewport) {
  const edge = 12, width = Math.min(360, viewport.width - edge * 2), height = bubble.height;
  const bottom = viewport.top + viewport.height - edge, start = viewport.top + edge;
  const above = target && target.top - height - 20, below = target && target.bottom + 20;
  const top = !target ? start + (viewport.height - height) / 2 : below + height <= bottom ? below :
    above >= start ? above : bottom - height;
  return {left: Math.max(edge, Math.min(viewport.width - width - edge, (target?.right ?? viewport.width - edge) - width)),
    top: Math.max(start, Math.min(bottom - height, top)), width};
}
export function installTour(environment) {
  clearTimeout(offerTimer);
  tourEnvironment = environment;
  environment.initialProfile = environment.user()?.id;
}
export function offerTour() {
  const env = tourEnvironment, u = env?.user();
  if (!env || activeTour || !tourNeedsOffer(u) || offeredTours.has(u.id)) return;
  if (['work', 'onboarding', 'discover'].includes(env.state.page)) return;
  if (!['home', 'coach'].includes(env.state.page) && env.initialProfile !== u.id) return;
  clearTimeout(offerTimer);
  offerTimer = (env.schedule || setTimeout)(() => {
    if (env.user()?.id === u.id && !['work', 'onboarding', 'discover'].includes(env.state.page)) replayTour();
  }, 450);
}
// Every production renderer sees an in-memory profile. save() is guarded while the tour is active.
// In particular, dashboard refresh and lesson exposure cannot mutate the real trainee or an open session.
export function renderTourPage(renderPage) {
  if (!activeTour) return renderPage();
  const env = tourEnvironment, original = env.state.db;
  env.state.db = activeTour.previewDB;
  try {
    if (TOUR_STEPS[activeTour.index].demo) return activeTour.renderDemo();
    return renderPage();
  } finally {
    env.state.db = original;
  }
}
export function replayTour() {
  const env = tourEnvironment, u = env?.user();
  if (!env || !u || activeTour) return;
  clearTimeout(offerTimer);
  offeredTours.add(u.id);
  const modal = document.getElementById('modal');
  if (modal?.open) {modal.onclose = null; modal.close();}
  activeTour = createTourController(env, u);
  activeTour.start();
}
export function tourController() { return activeTour; }

function createTourController(env, profile) {
  const {state} = env, doc = document, win = window, app = doc.getElementById('app');
  const originalState = {...state}, originalNodes = Array.from(app.childNodes), originalHash = location.hash;
  const originalScroll = win.scrollY, originalFocus = doc.activeElement, originalHistory = win.history.state, originalTitle = doc.title;
  const previewDB = structuredClone(state.db), previewProfile = previewDB.users.find(u => u.id === profile.id);
  previewProfile.session = null;
  previewProfile.trainingPreferencesOffered = true;
  previewDB.lang = 'he';
  state.coachDraft = structuredClone(state.coachDraft);
  const root = doc.createElement('dialog');
  root.id = 'app-tour';
  root.dir = 'rtl';
  root.lang = 'he';
  root.setAttribute('aria-label', 'הדרכה על האפליקציה');
  root.setAttribute('aria-modal', 'true');
  root.setAttribute('aria-labelledby', 'tour-title');
  root.innerHTML = '<svg class="tour-shade" aria-hidden="true"><path fill-rule="evenodd"/></svg>' +
    '<p class="tour-announcement" role="status" aria-live="polite" aria-atomic="true"></p>' +
    '<div class="tour-ring" aria-hidden="true"></div><section class="tour-bubble" aria-labelledby="tour-title" tabindex="-1"></section>';
  const bubble = root.querySelector('.tour-bubble'), ring = root.querySelector('.tour-ring');
  let index = 0, paused = false, moving = false, target = null, pulseTarget = null, demoClock, demoState;
  let generation = 0, touchStart, frame, lastRoute;
  const listeners = [], signals = createPlayerSignals();
  const listen = (node, name, fn, options) => {node.addEventListener(name, fn, options); listeners.push(() => node.removeEventListener(name, fn, options));};
  const reduce = () => tourReducedMotion(win);
  const controller = {previewDB, start, next: () => move(1), back: () => move(-1), skip: () => stop(false), finish: () => stop(true),
    pause, resume, show, renderDemo, get index() {return index;}, get paused() {return paused;}, get target() {return target;}};
  const find = selector => {
    if (!selector) return null;
    const modal = doc.getElementById('modal');
    return (modal?.open ? modal.querySelector(selector) : null) || doc.querySelector(selector);
  };
  function start() {
    app.replaceChildren();
    doc.body.append(root);
    doc.documentElement.classList.add('tour-active');
    listen(root, 'cancel', event => {event.preventDefault(); pause();});
    const inBubble = event => (event.composedPath?.() || [event.target])
      .some(el => el.classList?.contains('tour-bubble') || el.closest?.('.tour-bubble'));
    listen(root, 'click', event => {if (!inBubble(event)) pause();});
    listen(root, 'keydown', keyboard);
    listen(bubble, 'touchstart', event => {touchStart = event.touches[0];}, {passive: true});
    listen(bubble, 'touchend', event => {
      if (!touchStart || event.target.closest('button')) return;
      const end = event.changedTouches[0], direction = tourSwipeDirection(end.clientX - touchStart.clientX, end.clientY - touchStart.clientY);
      touchStart = null;
      if (direction) move(direction);
    }, {passive: true});
    listen(win, 'resize', schedulePosition);
    listen(win, 'scroll', schedulePosition, {passive: true, capture: true});
    if (win.visualViewport) {
      listen(win.visualViewport, 'resize', schedulePosition);
      listen(win.visualViewport, 'scroll', schedulePosition);
    }
    listen(doc, 'visibilitychange', () => {if (doc.hidden) pause();});
    listen(win, 'popstate', () => {if (activeTour === controller) stop(false, true);});
    listen(win, 'hashchange', () => {if (activeTour === controller && location.hash !== '#' + lastRoute) stop(false, true);});
    show(0);
  }
  async function show(nextIndex) {
    if (activeTour !== controller || moving) return;
    index = Math.max(0, Math.min(TOUR_STEPS.length - 1, nextIndex));
    const step = TOUR_STEPS[index], token = ++generation;
    moving = true;
    paused = false;
    clearInterval(demoClock);
    controller.pauseDemo = null;
    pulseTarget?.classList.remove('tour-target-pulse');
    target = null;
    root.classList.remove('is-paused');
    doc.documentElement.dataset.tourDirection = nextIndex < controller.previousIndex ? 'back' : 'next';
    controller.previousIndex = index;
    try {
      const commit = () => {
        if (activeTour !== controller) return;
        state.libraryArea = 'exercises';
        state.libraryTab = 'exercises';
        state.libraryQuery = '';
        state.librarySaved = false;
        state.libraryFilterSet = {area: [], tier: [], equipment: [], pattern: [], level: [], skill: []};
        lastRoute = step.route;
        env.go(step.route, {replace: true});
        if (step.preview) openCoachPreview({profile: previewProfile, modal: env.modal, lang: 'he',
          onStart() {}, onPainReview() {}});
        // A new app modal must be underneath the tour in the browser's top layer.
        if (root.open) root.close();
        root.showModal();
        target = find(step.target);
        for (let parent = target?.parentElement; parent; parent = parent.parentElement) {
          if (parent.tagName === 'DETAILS') parent.open = true;
        }
        if (target?.tagName === 'INPUT') target = target.closest('label') || target;
        paintBubble();
        target?.scrollIntoView({behavior: reduce() ? 'instant' : 'smooth', block: 'center', inline: 'nearest'});
        position();
        if (!reduce() && !doc.startViewTransition && step.route !== controller.previousRoute) {
          const main = doc.getElementById('main');
          main?.classList.remove('tour-page-enter');
          if (main) {void main.offsetWidth; main.classList.add('tour-page-enter');}
        }
      };
      if (!reduce() && doc.startViewTransition && step.route !== controller.previousRoute) {
        const transition = doc.startViewTransition(commit);
        await transition.updateCallbackDone;
        transition.finished.catch(() => {});
      } else commit();
      controller.previousRoute = step.route;
      if (token !== generation || activeTour !== controller) return;
      try {navigator.vibrate?.(8);} catch {}
      if (!reduce() && target) ring.animate?.([{scale: '.985'}, {scale: '1.008'}, {scale: '1'}], {duration: 320});
      if (!reduce()) bubble.animate?.([{opacity: .35, transform: 'translateY(8px)'}, {opacity: 1, transform: 'translateY(0)'}],
        {duration: 260, easing: 'cubic-bezier(.2,.8,.2,1)'});
      schedulePosition();
      bubble.querySelector('#tour-next')?.focus({preventScroll: true});
    } catch {
      // Unavailable screen/data/API still leaves a centred, navigable coach mark.
      target = null;
      if (!root.open) {try {root.showModal();} catch {root.setAttribute('open', '');}}
      paintBubble();
      position();
      bubble.focus({preventScroll: true});
    } finally {
      moving = false;
    }
  }
  function move(direction) {
    if (paused || moving) return;
    if (direction > 0 && index === TOUR_STEPS.length - 1) return stop(true);
    if (direction < 0 && index === 0) return;
    show(index + direction);
  }
  function paintBubble() {
    const step = TOUR_STEPS[index], chapter = step.route.split('/')[0];
    const chapters = ['home', 'coach', 'work', 'library', 'skills', 'progress', 'profile'];
    const names = ['היום', 'מאמן', 'האימון', 'ספרייה', 'סקילים', 'התקדמות', 'פרופיל'];
    const intro = index === 0, finish = index === TOUR_STEPS.length - 1;
    root.classList.toggle('is-intro', intro);
    root.classList.toggle('is-finish', finish && !reduce());
    bubble.innerHTML = '<button class="tour-skip" id="tour-skip">דילוג</button>' +
      (intro ? '<img class="tour-mark" src="./assets/brand/kong-mark.svg" alt="קונג" width="72" height="84">' : '') +
      '<div class="tour-dots" aria-hidden="true">' + chapters.map(c =>
        `<span class="${c === chapter ? 'is-current' : ''}"></span>`).join('') + '</div>' +
      `<p class="tour-count">${names[chapters.indexOf(chapter)]} · ${index + 1} מתוך ${TOUR_STEPS.length}</p>` +
      `<div><h2 id="tour-title">${paused ? 'עוצרים לרגע' : esc(step.title)}</h2>` +
      `<p id="tour-text">${paused ? 'הסיור ממתין לך. אפשר להמשיך מאותו מקום או לסיים ולחזור דרך הפרופיל.' : esc(step.text)}</p></div>` +
      (!paused && step.demo ? '<span class="tour-demo-label">הדגמה בלבד · לא נשמר ביומן</span>' : '') +
      (!paused && step.actions ? '<div class="tour-try" role="group" aria-label="אפשר לנסות בהדגמה">' +
        step.actions.map(([selector, label], i) => `<button class="secondary" data-tour-action="${i}">${esc(label)}</button>`).join('') +
        '</div><p class="tour-demo-feedback" role="status"></p>' : '') +
      '<div class="tour-navigation">' + (paused ? '<button id="tour-resume">להמשיך בסיור</button>' :
        `<button id="tour-next">${intro ? 'בואו נתחיל סיור' : finish ? 'לאימון של היום' : 'הבא'}</button>` +
        `<button class="secondary" id="tour-back" ${intro ? 'disabled' : ''}>הקודם</button>`) + '</div>' +
      '<small class="tour-hint">החלקה ימינה להמשך · שמאלה לחזרה · נגיעה בחוץ להשהיה</small>';
    root.querySelector('.tour-announcement').textContent = paused ? 'הסיור מושהה.' :
      `${index + 1} מתוך ${TOUR_STEPS.length}. ${step.title}. ${step.text}`;
    bubble.querySelector('#tour-skip').onclick = () => stop(false);
    if (paused) bubble.querySelector('#tour-resume').onclick = resume;
    else {
      bubble.querySelector('#tour-next').onclick = () => move(1);
      bubble.querySelector('#tour-back').onclick = () => move(-1);
      bubble.querySelectorAll('[data-tour-action]').forEach(button => {button.onclick = () => {
        const control = find(step.actions[Number(button.dataset.tourAction)][0]);
        control?.click();
        position();
        if (!reduce() && !doc.startViewTransition && step.route !== controller.previousRoute) {
          const main = doc.getElementById('main');
          main?.classList.remove('tour-page-enter');
          if (main) {void main.offsetWidth; main.classList.add('tour-page-enter');}
        }
      };});
    }
  }
  function feedback(text) {
    const node = bubble.querySelector('.tour-demo-feedback');
    if (node) node.textContent = text;
  }
  function pause() {
    if (moving || paused) return;
    paused = true;
    controller.pauseDemo?.();
    clearInterval(demoClock);
    root.classList.add('is-paused');
    paintBubble();
    position();
    bubble.querySelector('#tour-resume').focus({preventScroll: true});
  }
  function resume() {paused = false; show(index);}
  function keyboard(event) {
    if (event.key === 'Tab') {
      const buttons = Array.from(bubble.querySelectorAll('button')).filter(button => !button.disabled);
      const first = buttons[0], last = buttons.at(-1);
      if (event.shiftKey && (doc.activeElement === first || !bubble.contains(doc.activeElement))) {event.preventDefault(); last?.focus();}
      else if (!event.shiftKey && (doc.activeElement === last || !bubble.contains(doc.activeElement))) {event.preventDefault(); first?.focus();}
    } else if (event.key === 'Escape') {event.preventDefault(); paused ? resume() : pause();}
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {event.preventDefault(); move(event.key === 'ArrowRight' ? 1 : -1);}
    else if (event.key === 'Enter' && event.target.tagName !== 'BUTTON') {event.preventDefault(); paused ? resume() : move(1);}
  }
  function schedulePosition() {
    if (frame) return;
    frame = win.requestAnimationFrame(() => {frame = null; if (activeTour === controller) position();});
  }
  function position() {
    const viewport = win.visualViewport, width = viewport?.width || win.innerWidth, height = viewport?.height || win.innerHeight;
    const top = viewport?.offsetTop || 0, maxHeight = Math.max(120, height - 24);
    bubble.style.maxHeight = maxHeight + 'px';
    bubble.style.width = Math.min(360, width - 24) + 'px';
    const rect = !paused && target?.isConnected ? target.getBoundingClientRect() : null;
    // Large sections get a compact window around their visible leading content.
    const hole = rect && rect.width > 0 && rect.height > 0 ? {left: Math.max(8, rect.left - 6), right: Math.min(width - 8, rect.right + 6),
      top: Math.max(top + 8, rect.top - 6), bottom: Math.min(top + height - 8, rect.bottom + 6)} : null;
    if (hole) hole.bottom = Math.min(hole.bottom, hole.top + Math.max(80, height - bubble.getBoundingClientRect().height - 68));
    const valid = hole && hole.bottom > hole.top && hole.right > hole.left;
    const placement = tourBubblePosition(valid ? hole : null, bubble.getBoundingClientRect(), {width, height, top});
    bubble.style.left = placement.left + 'px';
    bubble.style.top = placement.top + 'px';
    const outer = `M0 0H${width}V${top + height}H0Z`;
    let cut = '';
    if (valid) {
      const {left: l, right: r, top: t, bottom: b} = hole, radius = Math.min(16, (r - l) / 2, (b - t) / 2);
      cut = `M${l + radius} ${t}H${r - radius}Q${r} ${t} ${r} ${t + radius}V${b - radius}` +
        `Q${r} ${b} ${r - radius} ${b}H${l + radius}Q${l} ${b} ${l} ${b - radius}V${t + radius}Q${l} ${t} ${l + radius} ${t}Z`;
    }
    root.querySelector('.tour-shade').setAttribute('viewBox', `0 0 ${width} ${top + height}`);
    root.querySelector('.tour-shade path').setAttribute('d', outer + cut);
    ring.hidden = !valid;
    if (valid) {
      Object.assign(ring.style, {left: hole.left + 'px', top: hole.top + 'px', width: hole.right - hole.left + 'px',
        height: hole.bottom - hole.top + 'px'});
      if (pulseTarget !== target) {pulseTarget?.classList.remove('tour-target-pulse'); pulseTarget = target; target.classList.add('tour-target-pulse');}
    }
  }
  function stop(finished, external = false) {
    if (activeTour !== controller) return;
    ++generation;
    clearInterval(demoClock);
    win.cancelAnimationFrame(frame);
    listeners.forEach(remove => remove());
    pulseTarget?.classList.remove('tour-target-pulse');
    root.close();
    root.remove();
    const modal = doc.getElementById('modal');
    if (modal) {modal.onclose = null; modal.close();}
    doc.documentElement.classList.remove('tour-active');
    delete doc.documentElement.dataset.tourDirection;
    doc.title = originalTitle;
    const lang = originalState.db.lang;
    doc.documentElement.lang = lang;
    doc.documentElement.dir = lang === 'en' ? 'ltr' : 'rtl';
    for (const key of Object.keys(state)) if (!(key in originalState)) delete state[key];
    Object.assign(state, originalState);
    app.replaceChildren(...originalNodes);
    activeTour = null;
    // The only tour write: metadata on the same real profile, through the existing store.
    profile.tourSeen = true;
    profile.tourVersion = TOUR_VERSION;
    env.save();
    if (finished) env.go('coach', {replace: true});
    else if (!external) {
      win.history.replaceState(originalHistory, '', originalHash || '#home');
      win.scrollTo({top: originalScroll, behavior: 'instant'});
      if (originalFocus?.isConnected) originalFocus.focus({preventScroll: true});
    } else env.go(location.hash, {replace: true});
  }
  function renderDemo() {
    const step = TOUR_STEPS[index], phase = step.demo;
    demoState ||= {actual: 6, effort: '', muted: profile.timerMuted === true};
    const clockResume = demoState.clock?.phase === phase ? demoState.clock : null;
    demoState.clock = null;
    const initialLeft = clockResume?.left ?? (phase === 'hold' ? 6 : 45);
    if (phase === 'debrief') {
      env.shell('<div class="finish-page"><span class="tour-demo-label">הדגמה בלבד</span><h1>סיכום האימון</h1>' +
        '<div class="session-debrief"><p>כאן יופיע מספר הסטים שתיעדת בפועל.</p><p>נבדוק מה נשמר בשליטה ובאותם תנאים.</p>' +
        '<p>בהמשך נבדוק את המוכנות ואת הביצוע לפני שינוי היעד.</p></div><label>משהו שכדאי לי לזכור' +
        '<textarea aria-label="הערה לדוגמה"></textarea></label><button disabled>ההדגמה לא נשמרת</button></div>');
      return;
    }
    if (phase === 'stop') {
      env.shell('<div class="focus-player tour-stop-choices"><h1>נעצור ונבדוק</h1><p>לא ממשיכים דרך כאב.</p>' +
        '<button class="secondary" id="stop-failed">לא הצלחתי — דילוג ללא ביצוע</button>' +
        '<button id="stop-pain">יש כאב — סיום ושמירה</button></div>');
      find('#stop-failed').onclick = () => feedback('באימון אמיתי מדלגים בלי לרשום ביצוע. כאן לא נשמר דבר.');
      find('#stop-pain').onclick = () => show(TOUR_STEPS.findIndex(s => s.id === 'player-debrief'));
      return;
    }
    const exercise = exercises.find(e => e.id === (phase === 'hold' ? 'plank' : 'push'));
    const block = {...exercise, phase: phase === 'rest' ? 'rest' : phase === 'warm' ? 'warm' : 'work', unit: 'reps', target: 6,
      seconds: 45, restSeconds: 60, rir: 'כשלוש', technicalReserve: 'לפחות שלוש שניות של שליטה'};
    if (phase === 'hold') Object.assign(block, {unit: 'seconds', seconds: 6});
    const next = {...exercises.find(e => e.id === 'squat'), phase: 'work', target: 6, unit: 'reps'};
    // This object never enters state.db, the saved session controller, logs or evidence.
    const demo = {plan: {blocks: [block, next]}, index: 0, sets: []};
    const timer = '<div class="session-clock"><div class="timer" id="clock" role="timer" aria-label="זמן שנותר">' +
      formatTime(initialLeft) + '</div><small>שעון הדגמה בלבד</small><div class="row timer-actions">' +
      '<button id="timer-toggle">הפעלה</button><button class="icon-button" id="timer-sound" aria-label="השתקת צליל ורטט" ' +
      `aria-pressed="${!demoState.muted}">${icon('volume', 20)}</button></div></div>`;
    const logForm = ['work', 'hold'].includes(phase) ? '<div class="session-log-panel">' + effortChoicesHTML(block, demoState) +
      '<div class="quick-adjust"><label>כמה ביצעתי בפועל?</label><div class="counter-input">' +
      '<button id="actual-minus" aria-label="הפחתת ערך">−</button><input id="actual" aria-label="ביצוע בפועל" type="number" ' +
      `value="${demoState.actual}" min="0" max="999"><button id="actual-plus" aria-label="הגדלת ערך">+</button></div></div>` +
      '<button class="primary-action full-width" id="complete-target">בוצע</button></div>' : '';
    env.shell('<p class="tour-demo-banner">הדגמה בלבד · אין צורך לבצע תרגיל</p>' + focusPlayerHTML({session: demo, block,
      performed: exercise, timer, logForm, phaseName: phase === 'rest' ? 'מנוחה והתאוששות' : phase === 'warm' ? 'חימום' : 'תנועה בשליטה'}));
    find('#work-save-exit').onclick = pause;
    find('#end-early').onclick = () => show(TOUR_STEPS.findIndex(s => s.id === 'player-debrief'));
    find('#set-stop').onclick = () => show(TOUR_STEPS.findIndex(s => s.id === 'player-stop-choices'));
    if (phase === 'work' || phase === 'hold') {
      find('#actual-minus').onclick = () => {demoState.actual = Math.max(0, demoState.actual - 1); updateActual();};
      find('#actual-plus').onclick = () => {demoState.actual = Math.min(999, demoState.actual + 1); updateActual();};
      find('#complete-target').onclick = () => show(TOUR_STEPS.findIndex(s => s.id === 'player-rest'));
      doc.querySelectorAll('[data-set-effort]').forEach(button => {button.onclick = () => {
        demoState.effort = button.dataset.setEffort;
        doc.querySelectorAll('[data-set-effort]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
        feedback('הבחירה סומנה בהדגמה בלבד.');
      };});
      doc.querySelectorAll('[data-difficulty]').forEach(button => {button.onclick = () => feedback(button.dataset.difficulty === 'hard' ?
        'באימון אמיתי המאמן בודק אם יש גרסה קלה וזמינה; כשאין, מדלגים או מתאימים לאחר בדיקה.' :
        'גרסה קשה יותר מוצעת רק כשיש ביצוע מתועד ואישור מתאים.');});
    }
    if (phase === 'warm') find('#skip-warmup').onclick = () => show(TOUR_STEPS.findIndex(s => s.id === 'player-stop'));
    let left = initialLeft, running = false, previousSecond = left, clockStart, clockLeft;
    controller.pauseDemo = () => {demoState.clock = {phase, left, running};};
    function updateClock() {find('#clock').textContent = formatTime(left);}
    function runClock() {
      running = true;
      find('#timer-toggle').textContent = 'עצירה';
      clockStart = Date.now();
      clockLeft = left;
      clearInterval(demoClock);
      demoClock = setInterval(() => {
        if (paused || activeTour !== controller) return clearInterval(demoClock);
        left = Math.max(0, clockLeft - Math.floor((Date.now() - clockStart) / 1000));
        updateClock();
        if (phase === 'hold' && left !== previousSecond && left <= 3) signals(left === 0 ? 'end' : 'last', demoState.muted);
        previousSecond = left;
        if (!left) {
          clearInterval(demoClock);
          running = false;
          find('#timer-toggle').textContent = 'הפעלה מחדש';
          feedback(phase === 'hold' ? 'ההחזקה הסתיימה. באימון מתעדים רק את מה שבוצע בפועל.' : 'המנוחה הסתיימה. התרגיל הבא מוצג במסך.');
          if (phase === 'rest') show(TOUR_STEPS.findIndex(s => s.id === 'player-hold'));
        }
      }, 250);
    }
    find('#timer-toggle').onclick = () => {
      if (running) {running = false; clearInterval(demoClock); find('#timer-toggle').textContent = 'הפעלה'; feedback('השעון נעצר.');}
      else {if (!left) left = 6; runClock(); signals('start', demoState.muted); feedback('השעון פועל בהדגמה.');}
    };
    find('#timer-sound').onclick = () => {
      demoState.muted = !demoState.muted;
      find('#timer-sound').setAttribute('aria-pressed', String(!demoState.muted));
      find('#timer-sound').setAttribute('aria-label', demoState.muted ? 'מושתק; הפעלת צליל ורטט' : 'השתקת צליל ורטט');
      feedback(demoState.muted ? 'צליל ורטט מושתקים בהדגמה.' : 'צליל ורטט הופעלו בהדגמה במכשיר תומך.');
    };
    if (phase === 'rest') {
      find('#rest-add').onclick = () => {left = Math.min(7200, left + 15); updateClock(); runClock(); feedback('נוספו 15 שניות למנוחה.');};
      find('#rest-minus').onclick = () => {left = Math.max(0, left - 15); updateClock(); runClock(); feedback('הופחתו 15 שניות מהמנוחה.');};
      find('#rest-skip').onclick = () => show(TOUR_STEPS.findIndex(s => s.id === 'player-hold'));
      runClock();
    } else if (clockResume?.running) runClock();
  }
  function updateActual() {find('#actual').value = demoState.actual; feedback(`${demoState.actual} חזרות בהדגמה בלבד.`);}
  return controller;
}
