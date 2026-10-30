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
  infographicSVG
}
from './exercise-visuals.js?v=31';
const work = b => ['work', 'skill'].includes(b?.phase);
export function playerProgress(session) {
  const active = session.plan.blocks[session.index];
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
export function playerPlate(block, session) {
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
    `"></div>`
  ): '';
}
export function focusPlayerHTML( {
  session: s, block: b, performed, timer, logForm, phaseName, summary, details
}) {
  const isWork = work(b), next = s.plan.blocks.slice(s.index + 1).find(b => b.phase !== 'rest'), previous = s.plan.blocks.slice(0,
  s.index).findLast(work), sameSet = next && work(next) && next.id === previous?.id, sets = next ? s.plan.blocks.filter(x => work(x) && x.id ===
  next.id): [];
  const reserve = b.unit === 'seconds' ? 'להשאיר עתודה טכנית ולעצור בירידת שליטה': (
    `עוד ` +
    `${b.rir ??(b.provisional ? 3: 2)}` +
    ` בטנק`
  );
  return (
    `<div class="focus-player"><header class="focus-header"><button class="text-button" ` +
    `id="work-save-exit">שמירה ויציאה</button><p>` +
    `${playerProgress(s)}` +
    `</p><details><summary aria-label="אפשרויות האימון">⋯</summary><div class="focus-menu"><button ` +
    `class="secondary" id="end-early">סיום וסיכום</button><details><summary>על האימון</summary><p>` +
    `${esc(summary || '')}` +
    `</p><p>` +
    `${esc(details || '')}` +
    `</p>` +
    `${(s.plan.skillTracks || []).some(t => t.preparationOnly) ? '<p>תרגול הכנה בלבד; ביצוע יעד הסקיל דורש בדיקה מקצועית אישית.</p>': ''}` +
    `</details></div></details></header><section class="focus-step"><span class="chapter-label">` +
    `${esc(phaseName)}` +
    `</span>` +
    `${b.calibration ? '<p class="notice">סט כיול — לבצע עם 1–2 חזרות בטנק</p>': ''}` +
    `${b.assessment ? '<p class="notice">בדיקת יכולת — להשאיר לפחות 3 חזרות או שניות עתודה</p>': ''}` +
    `${b.phase === 'rest' ? (
      `${timer}` +
      `<div class="rest-controls"><button class="secondary" id="rest-add">+30 שנ׳</button><button ` +
      `class="text-button" id="rest-skip">לדלג</button></div>` +
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
        `${playerPlate(next, s)}`
      ): '<p>ממשיכים לשחרור ולנשימה</p>'}`
    ): (
      `${playerPlate(isWork ? {
        ... performed, phase: b.phase
      }: b, s)}` +
      `<h1>` +
      `${esc(isWork ? performed.he: b.he)}` +
      `</h1>` +
      `${!isWork || b.unit === 'seconds' ? timer: (
        `<div class="focus-target">` +
        `${isWork ? (
          `${b.target ?? 'היכרות ללא יעד'}` +
          `${b.target != null ? ' ' +(b.unit === 'seconds' ? 'שניות': 'חזרות'): ''}`
        ): (
          `${b.seconds}` +
          ` שניות`
        )}` +
        `</div>`
      )}` +
      `${b.perSide ? '<small>סה״כ שני הצדדים · חצי בכל צד</small>': ''}` +
      `<p class="focus-cue">` +
      `${esc(b.cue || performed.cue || 'תנועה נוחה ונשימה בשליטה.')}` +
      `</p>` +
      `${isWork ? (
        `<p>` +
        `${esc(reserve)}` +
        `</p>` +
        `${b.unit === 'seconds' ? '': (
          `<details class="focus-timer"><summary>טיימר לסט</summary>` +
          `${timer}` +
          `</details>`
        )}`
      ): ''}`
    )}` +
    `</section>` +
    `${logForm}` +
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
