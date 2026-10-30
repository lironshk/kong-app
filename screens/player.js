import {
  applyCapabilityResults, capabilityResultsHTML
}
from '../capability-check.js?v=31';
import {
  dailyDate
}
from '../daily-insights.js?v=31';
import {
  exercises, plan, remaining
}
from '../engine.js?v=31';
import {
  focusPlayerHTML
}
from '../focus-player.js?v=31';
import {
  dayKey as homeDate, painStatus
}
from '../home-signals.js?v=31';
import {
  forecastWindows
}
from '../home-weather.js?v=31';
import {
  advanceIntervalClock
}
from '../interval-clock.js?v=31';
import {
  substitutionCandidates
}
from '../movement-options.js?v=31';
import {
  skillSelections, skillState, stageProposal
}
from '../skill-progress.js?v=31';
import {
  load, setDailyCheckIn
}
from '../store.js?v=31';
import {
  conditionsKnown, doseAuthorized, hasEquipment, isBlocked, recoveryState, unresolvedDoses
}
from '../training-evidence.js?v=31';
import {
  escapeHTML as esc, formatTime, icon
}
from '../ui.js?v=31';
import {
  go
}
from '../router.js?v=31';
import {
  reviewedExecution
}
from '../screens/capability.js?v=31';
import {
  bindCommon, blocked, savedPlanState
}
from '../screens/coach.js?v=31';
import {
  history
}
from '../screens/progress.js?v=31';
import {
  skillDetail
}
from '../screens/skills.js?v=31';
import {
  $, $$, change, nameOf, on, t, user
}
from '../shared.js?v=31';
import {
  modal, shell, toast
}
from '../shell.js?v=31';
import {
  save, state
}
from '../state.js?v=31';
function captureDraft() {
  const u = user(), s = u?.session;
  if (state.page !== 'work' || !s) return;
  if ($('#actual')) s.draft = {
    ... s.draft, rir: $('#set-rir')?.value ?? s.draft?.rir ?? '', technical_reserve_seconds: $('#hold-reserve')?.value ?? '',
    left_actual: $('#left-actual')?.value ?? '', right_actual: $('#right-actual')?.value ?? '', range_of_motion: $('#set-rom')?.value || '',
    execution_standard: $('#set-standard')?.value || '', tempo: $('#set-tempo')?.value || '', technique_confirmed: $('#set-technique')?.checked
    === true, safe_exit_confirmed: $('#safe-exit')?.checked === true, actual: $('#actual').value, quality: $('#quality')?.value || 'good',
    assistance: $('#assistance')?.value || '', added_load: $('#added-load')?.value || '', setup: $('#setup')?.value || '',
    performed: $('#performed')?.value || s.plan.blocks[s.index]?.id
  };
  save()
}
function work() {
  const u = user();
  savedPlanState(u);
  const s = u?.session;
  if (!s) return go('home');
  if (!resumeEligible(u, s)) {
    modal(('<h2>נדרשת הערכה מחדש לפני המשך</h2><p>תנאי הציוד, הכאב, החום או ההתאוששות השתנו. יש לסיים ' +
    'ולשמור את הביצוע החלקי ולבנות אימון חדש.</p><button id="save-partial-safety">שמירת אימון חלקי' + '</button>'));
    on('#save-partial-safety',() => {
      $('#modal').close();
      state.finishMode = true;
      finish()
    });
    return;
  }
  const b = s.plan.blocks[s.index];
  if (!b || state.finishMode) return finish();
  const original = exercises.find(e => e.id === b.id) || b, performed = exercises.find(e => e.id ===(s.draft?.performed || b.id)) || original,
  isWork = ['work', 'skill'].includes(b.phase);
  const equipment = s.equipment || u.locations?.find(l => l.id === s.location_id)?.equipment || u.equipment;
  const guided = ['tabata', 'interval', 'emom', 'mobility'].includes(s.plan.format);
  const alternatives = substitutionCandidates(original, exercises, equipment);
  const phaseName = b.phase === 'skill' ? t('סקיל — תרגול איכות', 'Skill practice'): isWork ? t('תנועה בשליטה',
  'Controlled movement'): b.phase === 'rest' ? t('מנוחה והתאוששות', 'Rest and recover'): b.phase === 'warm' ? t('חימום',
  'Warm-up'): t('תנועה ונשימה', 'Move and breathe');
  const timer =(`<div class="session-clock"><div class="timer" id="clock" role="timer" aria-label="` + (
    `${t('זמן שנותר', 'Time remaining')}`
  ) + `">` + (
    `${formatTime(remaining(s.timer))}`
  ) + `</div><small>` + (
    `${isWork ? t('חלון זמן אופציונלי', 'Optional time window'): t('זמן מוצע', 'Suggested time')}`
  ) + `</small><div class="row timer-actions"><button class="secondary" id="timer-toggle" aria-label="` + (
    `${t('הפעלת או עצירת הטיימר', 'Start or pause timer')}`
  ) + `">` + (
    `${icon(s.timer.running ? 'pause': 'play', 16)}`
  ) + ` <span>` + (
    `${s.timer.running ? t('עצירה', 'Pause'): t('הפעלה', 'Start')}`
  ) + `</span></button><button class="icon-button" id="timer-reset" aria-label="` + (
    `${t('איפוס מקטע', 'Reset block')}`
  ) + `">↺</button><button class="icon-button ` + (
    `${s.notifications ? 'enabled': ''}`
  ) + `" id="timer-sound" aria-label="` + (
    `${t('צליל טיימר', 'Timer sound')}`
  ) + `" aria-pressed="` + (
    `${!!s.notifications}`
  ) + `">` + (
    `${icon('volume', 16)}`
  ) + `</button></div></div>`);
  const logForm = isWork && !(s.continuous && guided) ?(`<div class="session-log-panel"><div class="session-log-title"><strong>` + (
    `${t('תיעוד הביצוע שלי', 'Log my performance')}`
  ) + `</strong><small>` + (
    `${t('רק מה שביצעת בפועל', 'Only work you actually did')}`
  ) + `</small></div>` + (
    `${performed.id === b.id && b.target > 0 ?(`<button class="quick-target full-width" id="complete-target">` + (
      `${icon('check', 18)}`
    ) + ` בוצע</button>`): ''}`
  ) + `<div class="quick-adjust"><div class="set-inputs"><label>` + (
    `${b.unit === 'seconds' ? t('כמה שניות ביצעתי בפועל?', 'How many seconds did I complete?'): t('כמה חזרות ביצעתי בפועל?',
    'How many reps did I complete?')}`
  ) + `<div class="counter-input"><button type="button" class="secondary" id="actual-minus" ` + `aria-label="` + (
    `${t('הפחתת ערך', 'Decrease value')}`
  ) + `">−</button><input id="actual" type="number" inputmode="numeric" min="0" max="999" step="1" ` + `value="` + (
    `${esc(s.draft?.actual ?? b.target ?? '')}`
  ) + `" placeholder="—" aria-label="` + (
    `${t('ביצוע בפועל', 'Actual performance')}`
  ) + `"><button type="button" class="secondary" id="actual-plus" aria-label="` + (
    `${t('הגדלת ערך', 'Increase value')}`
  ) + `">+</button></div></label></div></div><details class="session-adjust" ` + (
    `${performed.id !== b.id || b.assessment ? 'open': ''}`
  ) + `><summary>תיעוד אחר, תנאים ועתודה</summary><label>` + (
    `${t('איך הייתה השליטה?', 'How was my form?')}`
  ) + `<select id="quality"><option value="good" ` + (
    `${s.draft?.quality !== 'uncertain' ? 'selected': ''}`
  ) + `>` + (
    `${t('יציבה ונוחה', 'Controlled & comfortable')}`
  ) + `</option><option value="uncertain" ` + (
    `${s.draft?.quality === 'uncertain' ? 'selected': ''}`
  ) + `>` + (
    `${t('צריך עוד תרגול', 'Needs more practice')}`
  ) + `</option></select></label><details class="set-details"><summary>` + (
    `${t('שינוי תרגיל, סיוע או תוספת משקל', 'Change exercise, assistance or added load')}`
  ) + `</summary><label>` + (
    `${t('התרגיל שביצעתי', 'Performed exercise')}`
  ) + `<select id="performed">` + (
    `${[... new Map( [original, ... alternatives].map(e => [e.id, e])).values()].map(e =>(`<option value="` + (
      `${esc(e.id)}`
    ) + `" ` + (
      `${e.id === performed.id ? 'selected': ''}`
    ) + `>` + (
      `${esc(nameOf(e))}`
    ) + `</option>`)).join('')}`
  ) + `</select></label><div class="set-inputs"><label>` + (
    `${t('סיוע / גומייה', 'Assistance / band')}`
  ) + `<input id="assistance" maxlength="80" value="` + (
    `${esc(s.draft?.assistance ?? b.assistance ?? '')}`
  ) + `" placeholder="` + (
    `${t('למשל: גומייה קלה', 'e.g. light band')}`
  ) + `"></label><label>` + (
    `${t('תוספת משקל בק״ג', 'Added load in kg')}`
  ) + `<input id="added-load" type="number" min="0" max="200" step="0.5" value="` + (
    `${esc(s.draft?.added_load ?? b.added_load ?? '')}`
  ) + `" placeholder="—"></label></div><label>` + (
    `${t('תנאי המתקן / זווית הגוף', 'Setup / body angle')}`
  ) + `<input id="setup" maxlength="120" value="` + (
    `${esc(s.draft?.setup ?? b.setup ?? '')}`
  ) + `" placeholder="` + (
    `${t('למשל: מוט בגובה מותן, ברכיים כפופות', 'e.g. waist-high bar, bent knees')}`
  ) + `"></label><small>` + (
    `${t('תנאים שונים נשמרים בנפרד. החלפה אינה מאשרת התקדמות במינון של התרגיל המקורי.',(
    'Different conditions are tracked separately. A substitution does not establish progression at ' + 'the original movement’s dose.'))}`
  ) + `</small></details><button id="next-block" class="secondary full-width">` + (
    `${t('שמירת הביצוע ומעבר למנוחה', 'Save performance & rest')}`
  ) + ` ` + (
    `${icon('arrow', 16)}`
  ) + `</button><label>` + (
    `${b.unit === 'seconds' ? 'עתודה טכנית בשניות': 'חזרות שנותרו בסט · RIR · רשות'}`
  ) + `<input id="` + (
    `${b.unit === 'seconds' ? 'hold-reserve': 'set-rir'}`
  ) + `" type="number" min="0" max="10" step="1" value="` + (
    `${esc(b.unit === 'seconds' ? s.draft?.technical_reserve_seconds ?? '': s.draft?.rir ?? '')}`
  ) + `"></label><details><summary>תנאי השוואה ובדיקת טכניקה מפורשת</summary><label>טווח תנועה<input ` + `id="set-rom" value="` + (
    `${esc(s.draft?.range_of_motion || b.range_of_motion || '')}`
  ) + `" maxlength="120"></label><label>תקן ביצוע<input id="set-standard" value="` + (
    `${esc(s.draft?.execution_standard || b.execution_standard || '')}`
  ) + `" maxlength="120"></label><label>קצב: ירידה, עלייה, עצירה בשניות<input id="set-tempo" value="` + (
    `${esc(s.draft?.tempo ||(b.tempo ? [b.tempo.eccentric, b.tempo.concentric, b.tempo.pause].join(','): ''))}`
  ) + `" placeholder="2,1,0"></label>` + (
    `${b.perSide ?(`<label>ביצוע צד שמאל<input id="left-actual" type="number" min="0" max="999" value="` + (
      `${esc(s.draft?.left_actual || '')}`
    ) + `"></label><label>ביצוע צד ימין<input id="right-actual" type="number" min="0" max="999" value="` + (
      `${esc(s.draft?.right_actual || '')}`
    ) + `"></label>`): ''}`
  ) + `<label><input id="set-technique" type="checkbox" ` + (
    `${s.draft?.technique_confirmed ? 'checked': ''}`
  ) + `>בדקתי במפורש את טכניקת הסט מול ההוראות; זהו דיווח עצמי, לא אישור מאמן</label><label><input ` + `id="safe-exit" type="checkbox" ` + (
    `${s.draft?.safe_exit_confirmed ? 'checked': ''}`
  ) + `>הכניסה והיציאה היו נשלטות לפי ההוראות</label></details></details><div id="set-error" ` +
  `class="form-error" role="alert"></div><button class="text-button session-skip" id="skip-block">` + (
    `${t('דילוג בלי לרשום ביצוע', 'Skip without logging')}`
  ) + `</button></div>`):(`<div class="session-log-panel">` + (
    `${s.continuous && guided ?(`<p class="micro-note">` + (
      `${t('הטיימר עובר אוטומטית. מאשרים את הביצוע האמיתי בסיום.', 'The timer advances automatically. Confirm actual work at the end.')}`
    ) + `</p><button class="secondary full-width" id="skip-block">` + (
      `${t('דילוג על המקטע', 'Skip this block')}`
    ) + `</button>`):(`<button class="full-width" id="next-block">` + (
      `${t('מוכנים לתנועה הבאה', 'Ready for the next movement')}`
    ) + ` ` + (
      `${icon('arrow', 18)}`
    ) + `</button><button class="text-button session-skip" id="skip-block">` + (
      `${t('דילוג בלי לרשום ביצוע', 'Skip without logging')}`
    ) + `</button>`)}`
  ) + `</div>`);
  shell(focusPlayerHTML( {
    session: s, block: b, performed, timer, logForm, phaseName, summary: s.plan.summaryHe, details: s.plan.rationaleHe || s.plan.reasonHe || s.
    plan.why
  }));
  bindCommon();
  on('#rest-add',() => {
    s.timer = {
      left: Math.min(7200, remaining(s.timer) + 30), running: s.timer.running, started: Date.now()
    };
    save();
    tick()
  });
  on('#rest-skip',() => advanceBlock(s));
  on('#set-stop',() => {
    captureDraft();
    s.timer = {
      left: remaining(s.timer), running: false, started: Date.now()
    };
    save();
    modal(('<h2>עוצרים ובודקים</h2><p>לעצור בכאב או בירידת שליטה. כאב שנמשך, חוזר או מגביל תנועה מצריך ' +
    'בדיקה והתאמה מקצועית.</p><button class="secondary" id="stop-failed">לא הצלחתי — דילוג ללא ' +
    'ביצוע</button><button class="secondary" id="stop-pain">יש כאב — סיום ושמירה</button>'));
    on('#stop-failed',() => {
      $('#modal').close();
      (s.skipped ??= []).push(s.index);
      advanceBlock(s)
    });
    on('#stop-pain',() => {
      const before = structuredClone(u.checkIns || {
      });
      setDailyCheckIn(u, dailyDate(), {
        pain: true, updated_at: new Date().toISOString()
      });
      s.painReported = true;
      if (!save()) {
        u.checkIns = before;
        return;
      }
      $('#modal').close();
      state.finishMode = true;
      finish();
      $('#pain').checked = true;
    });
  });
  change('#continuous-clock', e => {
    captureDraft();
    s.continuous = e.target.checked;
    s.guideCandidates ??= [];
    save();
    work()
  });
  on('#timer-toggle',() => {
    captureDraft();
    s.timer = {
      left: remaining(s.timer), running: !s.timer.running, started: Date.now()
    };
    save();
    const el = $('#timer-toggle');
    el.innerHTML =( (
      `${icon(s.timer.running ? 'pause': 'play', 18)}`
    ) + ` <span>` + (
      `${s.timer.running ? t('עצירה', 'Pause'): t('הפעלה', 'Start')}`
    ) + `</span>`)
  });
  on('#timer-reset',() => {
    captureDraft();
    s.timer = {
      left: b.seconds, running: false, started: Date.now()
    };
    save();
    work()
  });
  on('#timer-sound',() => {
    captureDraft();
    s.notifications = !s.notifications;
    if (s.notifications) beep(true);
    save();
    work()
  });
  on('#actual-plus',() => {
    const v = + $('#actual').value || 0;
    $('#actual').value = Math.min(999, v + 1);
    captureDraft()
  });
  on('#actual-minus',() => {
    $('#actual').value = Math.max(0,(+ $('#actual').value || 0) - 1);
    captureDraft()
  });
  ['#actual', '#quality', '#assistance', '#added-load', '#setup', '#set-rir', '#hold-reserve', '#left-actual',
  '#right-actual', '#set-rom', '#set-standard', '#set-tempo', '#set-technique', '#safe-exit'].forEach(id => {
    const el = $(id);
    if (el) el.oninput = captureDraft
  });
  change('#performed',() => {
    captureDraft();
    work()
  });
  on('#next-block',() => {
    if (isWork) {
      captureDraft();
      const v = s.draft.actual, load = s.draft.added_load;
      if (v === '' || v == null || !Number.isInteger(+ v) || + v < 0 || + v > 999) {
        $('#set-error').textContent = t('להזין ביצוע בפועל, או לבחור דילוג.', 'Enter actual performance, or choose Skip.');
        return
      }
      if (load !== '' && load != null &&(!Number.isFinite(+ load) || + load < 0 || + load > 200)) {
        $('#set-error').textContent = t('להזין משקל בין 0 ל־200 ק״ג.', 'Enter added load between 0 and 200 kg.');
        return
      }
      if (s.plan.capability) {
        const candidate = {
          ... s.draft, tempo: parseTempo(s.draft.tempo)
        }, reserve = b.unit === 'seconds' ? Number(candidate.technical_reserve_seconds): Number(candidate.rir);
        if (!conditionsKnown(candidate) || !candidate.technique_confirmed || !candidate.safe_exit_confirmed || !Number.isFinite(reserve) ||
        reserve < 3 ||(b.perSide &&(!(Number(candidate.left_actual) > 0) || !(Number(candidate.right_actual) > 0) || Number(candidate.left_actual
        ) + Number(candidate.right_actual) !== Number(v)))) {
          $('#set-error').textContent =('נדרשים תנאים מלאים, אישור שליטה ויציאה ועתודה של 3 לפחות. בתרגיל צדדי לתעד כל צד וסכום תואם. ' +
          'אפשר לדלג במקום לבצע שוב.');
          return
        }
      }
      if (s.draft.rir !== '' && s.draft.rir != null &&(!Number.isInteger(+ s.draft.rir) || + s.draft.rir < 0 || + s.draft.rir > 10)) {
        $('#set-error').textContent = 'דירוג חזרות שנותרו: 0 עד 10.';
        return
      }
      const id = s.id + ':' + s.index;
      if (!s.sets.some(x => x.id === id)) s.sets.push( {
        id, planned_exercise_id: b.id, performed_exercise_id: s.draft.performed || b.id, ...(b.skill ? {
          skill: b.skill, skillStage: b.skillStage
        }: {
        }), round: b.round, target: b.target, unit: b.unit, phase: b.phase, assessment: !!b.assessment, provisional: !!b.provisional,
        source: b.source || 'evidence', calibration: !!b.calibration, technical_reserve_seconds: s.draft.technical_reserve_seconds !== '' ?
        Number(s.draft.technical_reserve_seconds): null, left_actual: s.draft.left_actual !== '' ? Number(s.draft.left_actual): null,
        right_actual: s.draft.right_actual !== '' ? Number(s.draft.right_actual): null, range_of_motion: s.draft.range_of_motion || undefined,
        execution_standard: s.draft.execution_standard || undefined, tempo: parseTempo(s.draft.tempo), technique_confirmed: s.draft.
        technique_confirmed === true, safe_exit_confirmed: s.draft.safe_exit_confirmed === true, ...(s.draft.rir !== '' && s.draft.rir != null ?
        {
          rir: + s.draft.rir
        }: {
        }), actual: + v, quality: s.draft.quality || 'good', assistance: s.draft.assistance?.trim() || null,
        setup: s.draft.setup?.trim() || null, added_load: load === '' || load == null ? null: + load, side_allocation: b.side_allocation || null,
        at: new Date().toISOString()
      })
    }
    advanceBlock(s)
  });
  on('#complete-target',() => {
    if (!$('#actual') || !$('#next-block')) return;
    captureDraft();
    $('#next-block').click()
  });
  on('#skip-block',() => {
    (s.skipped ??= []).push(s.index);
    advanceBlock(s)
  });
  on('#end-early',() => {
    captureDraft();
    state.finishMode = true;
    finish()
  });
  on('#work-save-exit',() => {
    captureDraft();
    s.timer = {
      left: remaining(s.timer), running: false, started: Date.now()
    };
    save();
    go('home');
    toast(t('האימון נשמר. נחכה לך כאן.', 'Session saved. Pick up here anytime.'))
  });
  tick();
}
function advanceBlock(s) {
  const before = {
    index: s.index, draft: s.draft, timer: s.timer
  };
  s.index++;
  s.draft = {
  };
  const n = s.plan.blocks[s.index];
  s.timer = {
    left: n?.seconds || 0, running: !!(n?.phase === 'rest' || s.continuous && before.timer.running && n),
    started: Date.now()
  };
  if (!save()) {
    Object.assign(s, before);
    return
  }
  if (n) work();
  else {
    state.finishMode = true;
    finish()
  }
}
let audioContext;
function beep(test = false) {
  try {
    audioContext ??= new(window.AudioContext || window.webkitAudioContext)();
    audioContext.resume();
    const osc = audioContext.createOscillator(), gain = audioContext.createGain();
    osc.connect(gain);
    gain.connect(audioContext.destination);
    osc.frequency.value = 660;
    gain.gain.setValueAtTime(0.06, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + .25);
    osc.start();
    osc.stop(audioContext.currentTime + .26)
  } catch {
  }
}
function tick() {
  const s = user()?.session;
  if (state.page !== 'work' || !s || state.finishMode || !$('#clock')) return;
  if (s.continuous) {
    const advanced = advanceIntervalClock(s);
    if (advanced.changed) {
      s.guideCandidates = [... new Set( [...(s.guideCandidates || []), ... advanced.candidates])];
      s.index = advanced.index;
      s.timer = advanced.timer;
      s.draft = {
      };
      if (!save()) return;
      if (s.notifications) beep();
      if (s.index >= s.plan.blocks.length) {
        state.finishMode = true;
        finish()
      } else work();
      return
    }
  }
  const left = remaining(s.timer);
  $('#clock').textContent = formatTime(left);
  if (left <= 0 && s.timer.running) {
    s.timer = {
      left: 0, running: false, started: Date.now()
    };
    save();
    if (s.notifications) beep();
    $('#timer-toggle').innerHTML =( (
      `${icon('play', 18)}`
    ) + ` <span>` + (
      `${t('הפעלה', 'Start')}`
    ) + `</span>`);
    toast(t('חלון הזמן הסתיים. ממשיכים כשתהיו מוכנים.', 'Time window complete. Continue when you are ready.'))
  }
}
function guidedReview(s) {
  const indexes =(s.guideCandidates || []).filter(i => ['work', 'skill'].includes(s.plan.blocks[i]?.phase) && !s.sets.some(x => x.id === s.id +
  ':' + i));
  if (!indexes.length) return '';
  return(`<section class="card interval-review"><h2>` + (
    `${t('מה בוצע באמת?', 'What did you actually complete?')}`
  ) + `</h2><p>` + (
    `${t('הטיימר עבר במקטעים האלה. לסמן רק תנועות שביצעתם ולהזין שניות בפועל. בלי סימון לא יירשם ביצוע.',
    ('The clock passed these blocks. Select only movements you performed and enter actual seconds. ' + 'Unchecked blocks are not logged.'))}`
  ) + `</p>` + (
    `${indexes.map(i => {
      const b = s.plan.blocks[i];
      return(`<div class="interval-review-row"><label class="check-label"><input type="checkbox" ` + `data-confirm-interval="` + (
        `${i}`
      ) + `"><span>` + (
        `${esc(nameOf(b))}`
      ) + ` · ` + (
        `${t('סבב', 'Round')}`
      ) + ` ` + (
        `${b.round}`
      ) + `</span></label><label>` + (
        `${t('שניות בפועל', 'Actual seconds')}`
      ) + `<input type="number" inputmode="numeric" min="1" max="` + (
        `${b.seconds}`
      ) + `" step="1" data-interval-seconds="` + (
        `${i}`
      ) + `" placeholder="1–` + (
        `${b.seconds}`
      ) + `" aria-label="` + (
        `${esc(nameOf(b))}`
      ) + ` ` + (
        `${t('שניות בפועל', 'actual seconds')}`
      ) + `"></label><label>` + (
        `${t('שליטה בתנועה', 'Movement control')}`
      ) + `<select data-interval-quality="` + (
        `${i}`
      ) + `"><option value="uncertain">` + (
        `${t('לא יש ביטחון — צריך תרגול', 'Uncertain — needs practice')}`
      ) + `</option><option value="good">` + (
        `${t('יציבה ונוחה', 'Controlled & comfortable')}`
      ) + `</option></select></label></div>`)
    }).join('')}`
  ) + `</section>`)
}
function finish() {
  const u = user(), s = u.session;
  if (!s) return go('history');
  captureDraft();
  s.timer = {
    left: remaining(s.timer), running: false, started: Date.now()
  };
  save();
  const actual = s.sets.length;
  state.finishMode = true;
  shell((`<div class="summary-page"><div class="summary-mark">` + (
    `${icon('check', 40)}`
  ) + `</div><span class="eyebrow">` + (
    `${t('רגע לעצמך', 'A MOMENT FOR YOURSELF')}`
  ) + `</span><h1>` + (
    `${t('הגעת. זזת. זה נחשב.', 'You showed up. You moved. It counts.')}`
  ) + `</h1><p class="muted">` + (
    `${t('לפני שחוזרים ליום, לוקחים רגע לשים לב.', 'Before getting back to your day, take a moment to notice.')}`
  ) + `</p><div class="summary-stats"><div><strong>` + (
    `${actual}`
  ) + `</strong><small>` + (
    `${t('סטים שתיעדתי', 'sets logged')}`
  ) + `</small></div><div><strong>` + (
    `${new Set(s.sets.map(x => x.performed_exercise_id)).size}`
  ) + `</strong><small>` + (
    `${t('תנועות שתרגלתי', 'movements practised')}`
  ) + `</small></div></div>` + (
    `${guidedReview(s)}`
  ) + `<section class="card summary-form"><label>` + (
    `${t('איך הרגיש המאמץ?', 'How did the effort feel?')}`
  ) + `<select id="effort"><option value="normal">` + (
    `${t('בדיוק במידה', 'Comfortable to moderate')}`
  ) + `</option><option value="easy">` + (
    `${t('קל ונוח', 'Easy')}`
  ) + `</option><option value="hard">` + (
    `${t('מאתגר מאוד', 'Very challenging')}`
  ) + `</option></select></label><label>משך האימון בפועל בדקות · רשות<input id="session-duration" ` +
  `type="number" min="1" max="720" step="1"></label><label>מאמץ האימון כולו · RPE מ־0 עד 10 · ` +
  `רשות<input id="session-rpe" type="number" min="0" max="10" step="0.5"></label><label ` +
  `class="check-label"><input id="session-technique" type="checkbox">בכל הסטים נשמרו טווח תנועה ` +
  `מלא וביצוע מבוקר באותה וריאציה</label><label class="check-label"><input id="pain" ` + `type="checkbox">` + (
    `${t('הופיע כאב בזמן האימון', 'I experienced pain during the session')}`
  ) + `</label><label>` + (
    `${t('משהו שכדאי לי לזכור', 'Something to remember')}`
  ) + `<textarea id="note" rows="3" maxlength="1000" placeholder="` + (
    `${t('מה עבד טוב? מה ארצה לשנות?', 'What went well? What would I change?')}`
  ) + `"></textarea></label><button class="full-width" id="commit-session">` + (
    `${t('שומרים את ההתקדמות שלי', 'Save my progress')}`
  ) + ` ` + (
    `${icon('check', 18)}`
  ) + `</button>` + (
    `${s.index < s.plan.blocks.length ?(`<button class="text-button" id="back-session">` + (
      `${t('בעצם, אני רוצה להמשיך', 'Actually, I want to continue')}`
    ) + `</button>`): ''}`
  ) + `</section><small>` + (
    `${t('רק סטים שתיעדתם נספרים כביצוע. תכנון או דילוג לא נרשמים כאימון שבוצע.',
    'Only logged sets count as performance. Planning and skipping do not count as completed work.')}`
  ) + `</small></div>`));
  on('#back-session',() => {
    state.finishMode = false;
    work()
  });
  on('#commit-session',() => {
    for (const id of['#session-duration', '#session-rpe']) if (!$(id).reportValidity()) return;
    const confirmed = [];
    for (const checkbox of $$('[data-confirm-interval]:checked')) {
      const index = + checkbox.dataset.confirmInterval, b = s.plan.blocks[index], input = $((`[data-interval-seconds="` + (
        `${index}`
      ) + `"]`)), actual = + input.value;
      if (!Number.isInteger(actual) || actual < 1 || actual > b.seconds) {
        input.setCustomValidity(t('להזין שניות שבוצעו בפועל בטווח המוצג.', 'Enter actual seconds within the displayed range.'));
        input.reportValidity();
        input.setCustomValidity('');
        return
      }
      confirmed.push( {
        id: s.id + ':' + index, planned_exercise_id: b.id, performed_exercise_id: b.id, ...(b.skill ? {
          skill: b.skill, skillStage: b.skillStage, phase: b.phase
        }: {
        }), round: b.round, target: b.unit === 'seconds' ? b.target: b.seconds, unit: 'seconds', actual,
        quality: $((`[data-interval-quality="` + (
          `${index}`
        ) + `"]`)).value, assistance: null, added_load: null, side_allocation: b.side_allocation || null,
        at: new Date().toISOString(), confirmedAt: new Date().toISOString()
      })
    }
    const priorSets = [... s.sets];
    s.sets.push(... confirmed.filter(x => !s.sets.some(y => y.id === x.id)));
    const log = {
      ... structuredClone(s), completed_at: new Date().toISOString(), local_date: homeDate(), ...($('#session-duration').value !== '' ? {
        duration_minutes: Number($('#session-duration').value)
      }: {
      }), ...($('#session-rpe').value !== '' ? {
        session_RPE: Number($('#session-rpe').value)
      }: {
      }), completed: s.index >= s.plan.blocks.length, effort: $('#effort').value, pain: s.painReported === true || $('#pain').checked,
      note: $('#note').value.trim()
    };
    // Session impression never manufactures per-set technique evidence.
    log.unresolvedDoses = unresolvedDoses(log.plan, log.sets);
    const capabilityResults = log.plan.capability ? applyCapabilityResults(u, log): null;
    const alreadySaved = u.logs.some(l => l.id === s.id);
    if (!alreadySaved) u.logs.push(log);
    u.session = null;
    if (!save()) {
      s.sets = priorSets;
      u.session = s;
      if (!alreadySaved) u.logs = u.logs.filter(l => l.id !== s.id);
      return
    }
    state.finishMode = false;
    go('history');
    if (capabilityResults) {
      modal(capabilityResultsHTML(capabilityResults) + '<button id="cap-results-coach">לאימון עם היעדים שלי</button>');
      on('#cap-results-coach',() => {
        $('#modal').close();
        go('coach')
      });
      return
    }
    const pending = Object.values(skillSelections(u)).find(id => stageProposal(u, id));
    if (pending) skillDetail(pending);
    toast(t('הביצוע נשמר. עוד צעד בדרך שלך.', 'Performance saved. Another step on your path.'))
  })
}
function parseTempo(value) {
  const a = String(value || '').split(',').map(Number);
  return a.length === 3 && a.every(x => Number.isFinite(x) && x >= 0 && x <= 30) ? {
    eccentric: a[0], concentric: a[1], pause: a[2]
  }: null;
}
function resumeEligible(u, s) {
  if (painStatus(u) || u.checkIns?.[homeDate()]?.pain || plan(u, s.plan.minutes || u.minutes, 'normal',
  {
    now: new Date(), history: u.logs || []
  }).blocked) return false;
  const weather = forecastWindows(u.home?.weather || {
  }, new Date(), navigator.onLine);
  if (weather?.severe) return false;
  const equipment = u.locations?.find(l => l.id === s.location_id)?.equipment || u.equipment;
  const state = recoveryState(u.logs || [], new Date());
  const planned = s.plan.blocks.filter(b => ['work', 'skill'].includes(b.phase) && b.reviewedExecution);
  if (planned.some(b => planned.filter(x => x.id === b.id).length >(u.exerciseClearances?.[b.id]?.sets || 0))) return false;
  return s.plan.blocks.slice(s.index).filter(b => ['work', 'skill'].includes(b.phase)).every(b => {
    const e = exercises.find(e => e.id === b.id);
    return !!e &&(!b.skill || !skillState(u, b.skill).achieved) && doseAuthorized(u, b, new Date()) && hasEquipment(e,
    equipment) && !isBlocked(e, state)
  });
}
export {
  captureDraft, work, advanceBlock, audioContext, beep, tick, guidedReview, finish, parseTempo, resumeEligible
};
