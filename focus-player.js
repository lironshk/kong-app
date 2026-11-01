import {instructionRouteHTML} from './movement-instructions.js?v=31';
import {sessionHeaderHTML} from './session-structure.js?v=31';
import {extraTimeText} from './session-extras.js?v=31';
import { variationSelectorHTML } from './variation-choice.js?v=31';
import { effortText, painRule, doseText } from './training-safety.js?v=31';
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
  infographicSVG, siblingOptionsHTML
}
from './exercise-visuals.js?v=31';
const work = b => ['work', 'skill'].includes(b?.phase);
export function playerProgress(session) {
  const active = session.plan.blocks[session.index];
  if (active?.rampUp) return 'סט הכנה קצר';
  if ( ['warm', 'cool'].includes(active?.phase)) {
    const group = session.plan.blocks.filter(b => b.phase === active.phase);
    return (
      `${active.phase === 'warm' ? 'חימום': 'שחרור'}` +
      ` · ` +
      `${group.indexOf(active) + 1}` +
      ` מתוך ` +
      `${group.length}`
    );
  }
  const blocks = session.plan.blocks, steps = blocks.filter(work), ids = [... new Set(steps.map(b => b.id))];
  const current = work(blocks[session.index]) ? blocks[session.index]: blocks.slice(session.index).find(work) || steps.at(- 1);
  if (!current) return 'תנועה ונשימה';
  if (current.circuitId) return `סבב ${current.round} מתוך ${current.rounds} · ` +
    `תרגיל ${current.exerciseInRound} מתוך ${current.exercisesPerRound}`;
  const sets = steps.filter(b => b.id === current.id), position = sets.indexOf(current) + 1;
  return (
    `תרגיל ` +
    `${ids.indexOf(current.id) + 1}` +
    ` מתוך ` +
    `${ids.length}` +
    ` · סט ` +
    `${position}` +
    ` מתוך ` +
    `${sets.length}`
  );
}
export function playerPlate(block, session, {includeInstructions = true} = {}) {
  const route = includeInstructions ? instructionRouteHTML(block) : '';
  if (!movementAtlas[block.id] && route) return route;
  let id = block.id;
  if (work(block) && !movementAtlas[id]) {
    const exercise = exercises.find(e => e.id === id) || block;
    const illustration = infographicSVG( {
      ... exercise, en: exercise.he
    }, {
      lang: 'he'
    }).replace('Original geometric study; coach review pending.', 'איור תנועה; נדרשת בדיקת מאמן.');
    return (
      `<div class="focus-plate">` +
      `${illustration || (
        `<p>` +
        `${esc(exercise.he)}` +
        `</p>`
      )}` +
      `</div>`
    );
  }
  if (!movementAtlas[id]) {
    if (id === 'ramp-rehearse') id = session.plan.blocks.find(work)?.id || 'march';
    else id =( {
      'ramp-raise': 'march', 'ramp-mobilize': 'cat-cow', cool: 'march', conditioning: 'march'
    })[id] || 'cat-cow';
  }
  const plate = movementAtlas[id], e = exercises.find(e => e.id === id);
  return plate ? (
    `<div class="focus-plate"><img src="` +
    `${plate.src}` +
    `" width="` +
    `${plate.width}` +
    `" height="` +
    `${plate.height}` +
    `" alt="` +
    `${esc(e?.he || block.he)}` +
    `"></div>` + route
  ): route;
}
export function focusPlayerHTML( {
  session: s, block: b, performed, timer, logForm, phaseName, summary, details, previousNumbers = '', instructionsOpen = false
}) {
  const isWork = work(b), next = s.plan.blocks.slice(s.index + 1).find(b => work(b) || ['warm', 'cool'].includes(b.phase)), previous = s.plan.blocks.slice(0,
  s.index).findLast(work), sameSet = next && work(next) && next.id === previous?.id, sets = next ? s.plan.blocks.filter(x => work(x) && x.id ===
  next.id): [];
  const reserve = effortText(b);
  return (
    `<div class="focus-player"><header class="focus-header"><button class="text-button" ` +
    `id="work-save-exit">שמירה ויציאה</button><p>` +
    `${playerProgress(s)}` +
    `</p><details><summary aria-label="אפשרויות האימון">פירוט</summary><div class="focus-menu"><button ` +
    `class="secondary" id="end-early">סיום וסיכום</button><details><summary>על האימון</summary><p>` +
    `${esc(summary || '')}` +
    `</p><p>` +
    `${esc(details || '')}` +
    `</p>` +
    `${(s.plan.skillTracks || []).some(t => t.preparationOnly) ? '<p>תרגול הכנה בלבד; ביצוע יעד הסקיל דורש בדיקה מקצועית אישית.</p>': ''}` +
    `</details></div></details></header>` +
    `${s.index === 0 && !isWork ? sessionHeaderHTML(s.plan) + `<p class="session-extra-time">${esc(extraTimeText(s.plan))}</p>` : ''}` +
    `<section class="focus-step${isWork ? ' focus-work' : ''}"><span class="chapter-label">` +
    `${esc(phaseName)}` +
    `</span>` +
    `${b.calibration ? '<p class="notice">סט כיול: ' + esc(reserve) + '</p>': ''}` +
    `${b.assessment ? '<p class="notice">בדיקת יכולת: ' + esc(reserve) + '</p>': ''}` +
    `${b.phase === 'rest' ? (
      `${timer}` +
      `<div class="rest-controls"><button class="secondary" id="rest-add">+15 שנ׳</button>` +
      `<button class="secondary" id="rest-minus">−15 שנ׳</button><button ` +
      `class="primary-action" id="rest-skip">לדלג</button></div>` +
      `${next ? (
        `<p>` +
        `${sameSet ? (
          `הסט הבא · סט ` +
          `${sets.indexOf(next) + 1}` +
          ` מתוך ` +
          `${sets.length}`
        ): (
          `התרגיל הבא: ` +
          `${esc(next.he)}`
        )}` +
        `</p>` +
        `${next.circuitId ? `<p>סבב ${next.round} · תחנה ${next.exerciseInRound} מתוך ${next.exercisesPerRound}</p>` : ''}` +
        `${sameSet ? `<p>התרגיל הבא: ${esc(next.he)}</p>` : ''}` +
        `${playerPlate(next, s)}`
      ): '<p>ממשיכים לשחרור ולנשימה</p>'}`
    ): (
      `${playerPlate(isWork ? {
        ... performed, ...(performed.id === b.id ? b : {}), phase: b.phase
      }: b, s, {includeInstructions: !isWork})}` +
      `<h1>` +
      `${esc(isWork ? performed.he: b.he)}` +
      `</h1>` +
      `${isWork && performed.muscles?.length ? (
        `<p class="focus-muscles">` +
        `${esc(performed.muscles.join(' · '))}` +
        `</p>`
      ): ''}` +
      `${isWork || b.rampUp ? `<div class="focus-target">${esc(doseText(b))}</div>` : ''}` +
      `${isWork ? '<div class="difficulty-controls" role="group" aria-label="התאמת קושי">' +
        '<button class="secondary" data-difficulty="hard">קשה מדי</button>' +
        '<button class="secondary" data-difficulty="easy">קל מדי</button></div>' : ''}` +
      `${isWork ? '<details class="focus-movement-details"' + (instructionsOpen ? ' open' : '') + '><summary>פירוט התנועה</summary>' +
        instructionRouteHTML({...performed, ...(performed.id === b.id ? b : {}), phase: b.phase}) +
        siblingOptionsHTML(performed, {lang: 'he'}) + '</details>' +
        '<details><summary>פירוט וריאציות</summary>' + variationSelectorHTML(b) + '</details>' + previousNumbers : ''}` +
      `${isWork && b.feedbackReason ? `<p class="focus-feedback">${esc(b.feedbackReason)}</p>` : ''}` +
      `${b.rampEntryExitSeconds ? `<small>כניסה ויציאה: ${b.rampEntryExitSeconds} שניות בנפרד מזמן ההחזקה.</small>` : ''}` +
      `${!isWork || b.unit === 'seconds' ? timer : ''}` +
      `${isWork && b.unit === 'seconds' && b.target > 0 ? (
        `<small>כניסה ויציאה: ${b.entryExitRestSeconds || Math.max(0, b.seconds-b.target)} שניות בנפרד; ` +
        (b.entryExitRestSeconds ? 'זמן ההכנה כלול במנוחה של הדקה. ' : '') +
        'להתחיל את שעון ההחזקה רק כשהמנח מוכן.' +
        (b.perSide ? ' בחצי הזמן לעצור את השעון, להחליף צד ולהמשיך; לרשום את סך שני הצדדים.' : '') + '</small>') : ''}` +
      `${b.perSide ? '<small>לתעד סה״כ שני הצדדים, חצי בכל צד.</small>': ''}` +
      `<details class="focus-coaching-details"><summary>פירוט ההנחיה</summary><p class="focus-cue">` +
      `${esc(b.cue || performed.cue || 'תנועה נוחה ונשימה בשליטה.')}` +
      `</p>` +
      `</details>` +
      `${isWork ? (
        `<p>` +
        `${esc(reserve)}` +
        `</p><small>${b.actualRestSeconds ?? b.restSeconds ?? 0} שניות מנוחה אחרי הסט</small>` +
        `${b.unit === 'seconds' ? '': (
          `<details class="focus-timer"><summary>טיימר לסט</summary>` +
          `${timer}` +
          `</details>`
        )}`
      ): ''}`
    )}` +
    `</section>` +
    `${logForm}` +
    `${b.phase === 'warm' && !b.rampUp ? '<button class="secondary full-width" id="skip-warmup">דילוג לאימון</button>' : ''}` +
    `${b.phase === 'cool' ? '<button class="secondary full-width" id="skip-cooldown">סיום בלי שחרור</button>' : ''}` +
    `<details><summary>פירוט כלל הכאב</summary><p>${esc(painRule)}</p></details>` +
    `<button class="text-button focus-stop" id="set-stop">לא הצלחתי / כאב</button></div>`
  );
}
export function createWakeLock(navigatorObject = globalThis.navigator) {
  let lock = null, wanted = false, pending = false;
  return async active => {
    wanted = active;
    if (!active) {
      const previous = lock;
      lock = null;
      await previous?.release().catch (() => {
      });
      return;
    }
    if (lock || pending || !navigatorObject?.wakeLock) return;
    pending = true;
    try {
      const next = await navigatorObject.wakeLock.request('screen');
      if (!wanted) await next.release();
      else {
        lock = next;
        next.addEventListener('release',() => {
          if (lock === next) lock = null;
        });
      }
    } catch {
    } finally {
      pending = false;
    }
  };
}
