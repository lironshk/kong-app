import {
  LOGO_SVG
}
from '../brand.js?v=32';
import {
  skills
}
from '../data/skills.js?v=32';
import {
  exercises, plan
}
from '../engine.js?v=32';
import {
  movementThumb
}
from '../exercise-visuals.js?v=32';
import {
  dayKey as homeDate
}
from '../home-signals.js?v=32';
import {
  SESSION_DURATIONS
}
from '../session-settings.js?v=32';
import {
  selectSkill, skillSelections
}
from '../skill-progress.js?v=32';
import {
  escapeHTML as esc, icon
}
from '../ui.js?v=32';
import {
  go, render
}
from '../router.js?v=32';
import {
  skillPicker
}
from '../screens/skills.js?v=32';
import {
  $, $$, days, equipmentNames, goalLabel, he, on, shortDays, t, tx, user
}
from '../shared.js?v=32';
import {
  shell, toast
}
from '../shell.js?v=32';
import {
  save, state
}
from '../state.js?v=32';
function startOnboarding(edit = false) {
  state.journeyProfile = false;
  state.editing = edit;
  const u = edit ? user(): null;
  state.onboard = u ? structuredClone(u): {
    name: '', experience: 'new', goal: 'strength', skillSelections: {
    }, push: 0, pull: 0, legs: 0, core: 0, minutes: 30, days: [0, 2, 4], equipment: [], dayMinutes: {
    }, adult: false, limits: false
  };
  state.onboardStep = 0;
  state.page = 'onboarding';
  render()
}
const goalCards =() => [ ['strength', 'target', 'כוח שנשאר איתי', 'Build lasting strength', 'בסיס יציב, תנועות מדויקות והתקדמות מדורגת.',
'Strong foundations and measured progress.'], ['endurance', 'fire', 'יותר אנרגיה בתנועה', 'More energy in motion',
'קצב נוח, סיבולת ושגרת אימון שאפשר לשמור.', 'A sustainable rhythm and better endurance.'], ['core',
'shield', 'שליטה בגוף שלי', 'Own your movement', 'יציבות, ליבה ותנועה מתוך שליטה.', 'Stability, core strength and control.'],
['skills', 'skills', 'בדרך לסקיל הבא', 'Your next skill', 'בונים יסודות למתח ראשון, עמידת ידיים ועוד.',
'Foundations for your first pull-up and beyond.']];
function onboarding() {
  if (!state.onboard) state.onboard = {
  };
  const steps = ['יכולת', 'מטרה וסקילים', 'זמן וציוד'];
  let c = '';
  if (state.onboardStep === 1) c =(`<h1>` + (
    `${t('מה מסקרן אותך<br>לגלות שאפשר לעשות?', 'What could you<br>be capable of?')}`
  ) + `</h1><p class="muted">` + (
    `${t('בוחרים כיוון אחד להתחלה. אפשר לשנות אותו בכל רגע.', 'Choose a starting direction. You can change it anytime.')}`
  ) + `</p><label>` + (
    `${t('איך לקרוא לך?', 'What should we call you?')}`
  ) + `<input id="ob-name" maxlength="50" autocomplete="given-name" placeholder="` + (
    `${t('השם שלך', 'Your name')}`
  ) + `" value="` + (
    `${esc(state.onboard.name)}`
  ) + `"></label><div class="goal-choices">` + (
    `${goalCards().map(( [id, ic, a, b, desc, ed]) =>(`<button class="choice ` + (
      `${state.onboard.goal === id ? 'selected': ''}`
    ) + `" data-goal="` + (
      `${id}`
    ) + `" aria-pressed="` + (
      `${state.onboard.goal === id}`
    ) + `"><span class="choice-icon">` + (
      `${icon(ic, 25)}`
    ) + `</span><span><strong>` + (
      `${t(a, b)}`
    ) + `</strong><small>` + (
      `${t(desc, ed)}`
    ) + `</small></span>` + (
      `${state.onboard.goal === id ?(`<span class="choice-check">` + (
        `${icon('check', 16)}`
      ) + `</span>`): ''}`
    ) + `</button>`)).join('')}`
  ) + `</div>` + (
    `${skillPicker(state.onboard, 'ob')}`
  ));
  if (state.onboardStep === 0) c =(`<h1>` + (
    `${t('מתחילים מהמקום שלך.', 'Start where you are.')}`
  ) + `</h1><p class="muted">` + (
    `${t('להזין הערכה נוחה מהניסיון שלך, בלי לבדוק מקסימום. ״לא יודע״ הוא מקום מצוין להתחיל.',
    'Use comfortable estimates from experience. No maximum tests. Unknown is a valid starting point.')}`
  ) + `</p>` + (
    `${state.journeyProfile ?(`<details><summary>` + (
      `${t('שינוי רמת הניסיון שבחרתי', 'Change my selected experience')}`
    ) + `</summary>`): ''}`
  ) + `<label>` + (
    `${t('הניסיון שלי', 'My experience')}`
  ) + `<select id="ob-experience">` + (
    `${[ ['new', 'התחלה', 'Just starting'], ['returning', 'חזרה אחרי הפסקה', 'Returning after a break'],
    ['consistent', 'אימון קבוע', 'Training consistently']].map(( [v, a, b]) =>(`<option value="` + (
      `${v}`
    ) + `" ` + (
      `${state.onboard.experience === v ? 'selected': ''}`
    ) + `>` + (
      `${t(a, b)}`
    ) + `</option>`)).join('')}`
  ) + `</select></label>` + (
    `${state.journeyProfile ? '</details>': ''}`
  ) + `<div class="assessment-grid">` + (
    `${[ ['push', 'push', 'שכיבות סמיכה מלאות', 'Full push-ups', 'חזרות', 'reps'], ['pull', 'pull', 'מתח נקי',
    'Strict pull-ups', 'חזרות', 'reps'], ['legs', 'legs', 'סקוואטים נוחים', 'Comfortable squats', 'חזרות',
    'reps'], ['core', 'core', 'פלאנק יציב', 'Steady plank', 'שניות', 'seconds']].map(( [id, g, a, b,
    unit, eu]) =>(`<div class="assessment-card">` + (
      `${movementThumb(exercises.find(e => e.id ===( {
        push: "push", pull: "pull", legs: "squat", core: "plank"
      }
      [id])), {
        lang: "he"
      })}`
    ) + `<label>` + (
      `${t(a, b)}`
    ) + `<div class="input-unit"><input id="ob-` + (
      `${id}`
    ) + `" aria-label="` + (
      `${t(a, b)}`
    ) + `" type="number" min="0" max="` + (
      `${id === 'core' ? 600: 200}`
    ) + `" inputmode="numeric" value="` + (
      `${state.onboard[id] || ''}`
    ) + `" placeholder="` + (
      `${t('לא יודע', 'Unknown')}`
    ) + `"><button type="button" class="text-button" data-unknown="` + (
      `${id}`
    ) + `">לא יודע</button><span>` + (
      `${t(unit, eu)}`
    ) + `</span></div></label></div>`)).join('')}`
  ) + `</div><p class="micro-note">` + (
    `${icon('info', 16)}`
  ) + ` ` + (
    `${t('יכולות נמדדות בנפרד. ניסיון בסקיל אחד לא פותח אוטומטית סקיל אחר.',
    'Each ability is assessed separately. One skill does not automatically unlock another.')}`
  ) + `</p>`);
  if (state.onboardStep === 2) c =(`<h1>` + (
    `${t('אימון שמתאים לחיים.', 'Training that fits your life.')}`
  ) + `</h1><p class="muted">` + (
    `${t('לבחור זמן, ימים וציוד זמינים.', 'Even fifteen minutes is a place to start. Choose the days and equipment you have.')}`
  ) + `</p>` + (
    `${state.journeyProfile ?(`<p class="pill">` + (
      `${state.onboard.minutes}`
    ) + ` ` + (
      `${t('דקות שבחרת לכל אימון', 'minutes selected per session')}`
    ) + `</p><details><summary>` + (
      `${t('שינוי הזמן שבחרתי', 'Change my selected time')}`
    ) + `</summary>`): ''}`
  ) + `<div class="time-selection"><h3>` + (
    `${t('זמן לכל אימון', 'Time per session')}`
  ) + `</h3><div class="segmented">` + (
    `${SESSION_DURATIONS.map(n =>(`<button type="button" class="` + (
      `${state.onboard.minutes === n ? 'active': ''}`
    ) + `" data-minutes="` + (
      `${n}`
    ) + `" aria-pressed="` + (
      `${state.onboard.minutes === n}`
    ) + `">` + (
      `${n}`
    ) + `<small>` + (
      `${t('דק׳', 'min')}`
    ) + `</small></button>`)).join('')}`
  ) + `</div></div>` + (
    `${state.journeyProfile ? '</details>': ''}`
  ) + `<h3>` + (
    `${t('הימים שלי', 'My days')}`
  ) + `</h3><div class="day-picker">` + (
    `${shortDays().map((d, i) =>(`<button type="button" data-day="` + (
      `${i}`
    ) + `" class="` + (
      `${state.onboard.days.includes(i) ? 'selected': ''}`
    ) + `" aria-pressed="` + (
      `${state.onboard.days.includes(i)}`
    ) + `">` + (
      `${d}`
    ) + `</button>`)).join('')}`
  ) + `</div><details><summary>` + (
    `${t('זמן שונה לכל יום', 'Different time per day')}`
  ) + `</summary><div class="day-time-grid">` + (
    `${state.onboard.days.map(i =>(`<label>` + (
      `${days()[i]}`
    ) + `<select data-day-min="` + (
      `${i}`
    ) + `">` + (
      `${SESSION_DURATIONS.map(n =>(`<option ` + (
        `${n ===(state.onboard.dayMinutes?.[i] || state.onboard.minutes) ? 'selected': ''}`
      ) + `>` + (
        `${n}`
      ) + `</option>`)).join('')}`
    ) + `</select></label>`)).join('')}`
  ) + `</div></details><h3>` + (
    `${t('מה זמין במקום האימון?', 'What equipment is available?')}`
  ) + `</h3><div class="equipment-picker">` + (
    `${Object.entries(equipmentNames).filter(( [k]) => k !== 'bench').map(( [id, labels]) =>(`<label class="equipment-option ` + (
      `${state.onboard.equipment.includes(id) ? 'selected': ''}`
    ) + `"><input type="checkbox" value="` + (
      `${id}`
    ) + `" data-eq ` + (
      `${state.onboard.equipment.includes(id) ? 'checked': ''}`
    ) + `>` + (
      `${equipmentTile(id)}`
    ) + `<span>` + (
      `${tx(labels)}`
    ) + `</span></label>`)).join('')}`
  ) + `</div><p class="micro-note">` + (
    `${t('מסמנים רק ציוד שבאמת יש במקום.', 'A park is a location, not equipment confirmation. Select each available item.')}`
  ) + `</p>`);
  if (state.onboardStep === 3) {
    const p = plan( {
      ... state.onboard, adult: true, limits: false
    });
    c =(`<span class="pill">` + (
      `${t('נקודת התחלה אישית', 'YOUR PERSONAL START')}`
    ) + `</span><h1>האימון הראשון שלך הוא אימון כיול</h1><p>מתחילים בסטים שמרניים כדי להתאים את התרגול ` + `לביצוע שלך.</p><h2>` + (
      `${t('זה הזמן שלך, ' + esc(state.onboard.name) + '.', 'This is your time, ' + esc(state.onboard.name) + '.')}`
    ) + `</h2><div class="onboarding-summary"><div><small>` + (
      `${t('המטרה', 'Goal')}`
    ) + `</small><strong>` + (
      `${goalLabel(state.onboard.goal)}`
    ) + `</strong></div><div><small>` + (
      `${t('השבוע שלך', 'Your week')}`
    ) + `</small><strong>` + (
      `${state.onboard.days.length}`
    ) + ` ` + (
      `${t('ימים', 'days')}`
    ) + ` · ` + (
      `${state.onboard.minutes}`
    ) + ` ` + (
      `${t('דק׳', 'min')}`
    ) + `</strong></div>` + (
      `${['pull', 'push'].map(type =>(`<div><small>` + (
        `${type === 'pull' ? 'סקיל משיכה': 'סקיל דחיקה'}`
      ) + `</small><strong>` + (
        `${esc(skills.find(s => s.id === state.onboard.skillSelections?.[type])?.he || 'טרם נבחר')}`
      ) + `</strong></div>`)).join('')}`
    ) + `<div><small>הציוד שלך</small><strong>` + (
      `${state.onboard.equipment.length ? state.onboard.equipment.map(id => esc(tx(equipmentNames[id]))).join(' · '): 'ללא ציוד'}`
    ) + `</strong></div></div><p>` + (
      `${t('התוכנית תבנה לפי היכולת והציוד שבחרת. אחרי האימון נשמור ביצוע אמיתי, ונציע את הצעד הבא בלי לדלג על הבסיס.',
      'Your plan follows your ability and equipment. Log real performance and get a considered next step.')}`
    ) + `</p><p class="micro-note">התוכנית וההדמיות ממתינות לביקורת מאמן עצמאית.</p><label ` +
    `class="check-label"><input type="checkbox" id="ob-adult" ` + (
      `${state.onboard.adult ? 'checked': ''}`
    ) + `>` + (
      `${t('אני בגיל 18 ומעלה', 'I am 18 or older')}`
    ) + `</label><label class="check-label"><input type="checkbox" id="ob-limits" ` + (
      `${state.onboard.limits ? 'checked': ''}`
    ) + `>` + (
      `${t('יש כאב, פציעה או מצב שמצריך התאמה מקצועית', 'I have pain, an injury or a condition requiring professional adaptation')}`
    ) + `</label><details class="safety-details"><summary>` + (
      `${t('מה חשוב לדעת לפני שמתחילים', 'Before you start')}`
    ) + `</summary><p>` + (
      `${t(('זהו כלי תכנון למבוגרים. כללי המינון הם כללי מוצר שמרניים שדורשים ביקורת מקצועית; אין הערכה ' +
      'רפואית או הבטחת הישג. מגבלה מדווחת עוצרת יצירת אימון עצמאי עד להתאמה מקצועית.'),(
      'This planning tool is for adults. Product dosage rules require professional review. It is not ' +
      'a medical assessment or an outcome guarantee. Reported limitations block independent training ' + 'pending professional adaptation.'))}`
    ) + `</p></details>`)
  }
  shell((`<div class="onboarding-shell"><div class="onboarding-story"><span class="eyebrow">` + (
    `${t('תנועה עם כיוון', 'MOVE WITH PURPOSE')}`
  ) + `</span><div class="onboarding-symbol">` + (
    `${LOGO_SVG}`
  ) + `</div><h2>` + (
    `${t('יש בך<br>יותר ממה שנדמה.', 'More in you<br>than you know.')}`
  ) + `</h2><p>` + (
    `${t('הדרך מתחילה בתנועה אחת. את השאר נבנה צעד אחרי צעד.', 'It starts with one movement. We build the rest, step by step.')}`
  ) + `</p><div class="onboarding-benefits"><span>` + (
    `${icon('check', 16)}`
  ) + ` ` + (
    `${t('מותאם ליכולת שלך', 'Built around your ability')}`
  ) + `</span><span>` + (
    `${icon('check', 16)}`
  ) + ` ` + (
    `${t('מקום להתקדמות ולהתאוששות', 'Room for progress and recovery')}`
  ) + `</span><span>` + (
    `${icon('check', 16)}`
  ) + ` ` + (
    `${t('הנתונים נשארים שלך', 'Your data stays yours')}`
  ) + `</span></div></div><section class="onboarding-form"><div class="stepper">` + (
    `${steps.map((s, i) =>(`<span class="` + (
      `${i === Math.min(2, state.onboardStep) ? 'active': i < state.onboardStep ? 'done': ''}`
    ) + `"><i>` + (
      `${i < state.onboardStep ? '✓': i + 1}`
    ) + `</i><small>` + (
      `${s}`
    ) + `</small></span>`)).join('')}`
  ) + `</div>` + (
    `${c}`
  ) + `<div class="form-error" role="alert" id="ob-error"></div><div class="onboarding-actions">` + (
    `${state.onboardStep > 0 ?(`<button class="text-button" id="ob-back">` + (
      `${t('חזרה', 'Back')}`
    ) + `</button>`): `<span></span>`}`
  ) + `<button id="ob-next">` + (
    `${state.onboardStep === 3 ? t(state.editing ? 'עדכון המסלול שלי': 'למאמן ולאימון הכיול', state.editing ? 'Update my path': 'Meet my journey'): t(
    'ממשיכים', 'Continue')}`
  ) + ` ` + (
    `${icon('arrow', 18)}`
  ) + `</button></div><button class="text-button" id="ob-cancel">` + (
    `${state.editing ? t('ביטול עריכה', 'Cancel editing'): t('קודם לגלות את האפליקציה', 'Explore the app first')}`
  ) + `</button></section></div>`), {
    onboarding: true
  });
  $$('[data-unknown]').forEach(b => b.onclick =() => {
    $('#ob-' + b.dataset.unknown).value = '';
    collectOnboard()
  });
  $$('[data-ob-skill]').forEach(b => b.onclick =() => {
    collectOnboard();
    selectSkill(state.onboard, b.dataset.obSkill);
    render()
  });
  on('#ob-next',() => {
    collectOnboard();
    const err = validateStep();
    if (err) {
      $('#ob-error').textContent = err;
      return
    }
    if (state.onboardStep < 3) {
      state.onboardStep++;
      render();
      window.scrollTo(0, 0)
    } else completeOnboard()
  });
  on('#ob-back',() => {
    collectOnboard();
    state.onboardStep--;
    render()
  });
  on('#ob-cancel',() => {
    state.onboard = null;
    go(state.editing ? 'settings': 'discover')
  });
  $$('[data-goal]').forEach(b => b.onclick =() => {
    collectOnboard();
    state.onboard.goal = b.dataset.goal;
    render()
  });
  $$('[data-minutes]').forEach(b => b.onclick =() => {
    collectOnboard();
    state.onboard.minutes = + b.dataset.minutes;
    state.onboard.dayMinutes = {
    };
    render()
  });
  $$('[data-day]').forEach(b => b.onclick =() => {
    collectOnboard();
    const d = + b.dataset.day;
    state.onboard.days = state.onboard.days.includes(d) ? state.onboard.days.filter(x => x !== d): [... state.onboard.days,
    d].sort();
    render()
  });
  $$('[data-eq]').forEach(b => b.onchange =() => {
    collectOnboard();
    b.closest('label').classList.toggle('selected', b.checked)
  })
}
function collectOnboard() {
  if (!state.onboard) return;
  const get = id => $('#ob-' + id);
  if (get('name')) state.onboard.name = get('name').value.trim();
  for (const type of['pull', 'push']) if (get(type + '-skill')) selectSkill(state.onboard, get(type + '-skill').value);
  if (get('experience')) state.onboard.experience = get('experience').value;
  for (const k of['push', 'pull', 'legs', 'core']) if (get(k)) state.onboard[k] = get(k).value === '' ? 0: Number(get(k).value);
  if ($('[data-eq]')) state.onboard.equipment = $$('[data-eq]:checked').map(x => x.value);
  $$('[data-day-min]').forEach(x =>(state.onboard.dayMinutes ??= {
  })[x.dataset.dayMin] = + x.value);
  if (get('adult')) state.onboard.adult = get('adult').checked;
  if (get('limits')) state.onboard.limits = get('limits').checked
}
function validateStep() {
  if (state.onboardStep === 1 && !state.onboard.name) return t('נשמח לדעת איך לקרוא לך.', 'Please enter your name.');
  if (state.onboardStep === 0 && ['push', 'pull', 'legs', 'core'].some(k => !Number.isFinite(state.onboard[k]) || state.onboard[k] < 0 || state.
  onboard[k] >(k === 'core' ? 600: 200) || !Number.isInteger(state.onboard[k]))) return t('להזין מספרים שלמים בטווח המוצג, או להשאיר ריק.',
  'Enter whole numbers within the shown range, or leave blank.');
  if (state.onboardStep === 2 && !state.onboard.days.length) return t('לבחור לפחות יום אחד.', 'Choose at least one day.');
  if (state.onboardStep === 3 && !state.onboard.adult) return t('המסלול הנוכחי מיועד לבני 18 ומעלה.',
  'The current path is for adults aged 18 or older.');
  return ''
}
function completeOnboard() {
  const previous = structuredClone(state.db);
  if (state.editing) {
    const u = user(), reassessed = ['push', 'pull', 'legs', 'core'].some(k => u[k] !== state.onboard[k]);
    const priorTarget = new Set(u.days).size, priorHome = structuredClone(u.home || {
    });
    Object.assign(u, state.onboard);
    if (new Set(state.onboard.days).size !== priorTarget) {
      u.home = {
        ... priorHome, targetHistory: [...(priorHome.targetHistory?.length ? priorHome.targetHistory: [ {
          date: '1970-01-01', target: priorTarget
        }]), {
          date: homeDate(), target: new Set(state.onboard.days).size
        }]
      }
    }
    if (reassessed) u.assessmentAt = new Date().toISOString();
    const activeSpace = u.locations?.find(l => l.id === u.activeLocation);
    if (activeSpace) activeSpace.equipment = [... u.equipment];
    u.planRevision =(u.planRevision || 0) + 1
  } else {
    const u = {
      ... state.onboard, id: crypto.randomUUID(), logs: [], favorites: [], imports: [], session: null,
      createdAt: new Date().toISOString(), locations: [ {
        id: 'main', name: t('מקום האימון שלי', 'My training space'), equipment: [... state.onboard.equipment]
      }], activeLocation: 'main'
    };
    state.db.users.push(u);
    state.db.active = u.id
  }
  if (!save()) {
    Object.assign(state.db, previous);
    return
  }
  state.onboard = null;
  state.editing = false;
  state.selectedDay = null;
  go('coach');
  toast(t('המסלול שלך מוכן. מתחילים מהמקום שלך.', 'Your journey is ready. Start where you are.'))
}
function equipmentTile(id) {
  const paths = {
    bar: 'M3 6h26M7 6v20M25 6v20', parallel: 'M3 11h18v15M11 5h18v15', rings:
    'M10 3v10M24 3v10M5 18a5 5 0 1 0 10 0a5 5 0 1 0-10 0M19 18a5 5 0 1 0 10 0a5 5 0 1 0-10 0', lowbar: 'M4 25V15h24v10',
    wall: 'M8 3v26h21M8 10h16M8 18h16', box: 'M5 12l11-7 12 7v15H5zM5 12h23', band: 'M7 23C-2 6 18-2 26 10S16 36 7 23',
    parallettes: 'M3 26V14h10v12M20 26V8h10v18', anchor: 'M16 3v22M5 18q11 15 22 0M11 7h10', pole: 'M16 3v26M9 29h14'
  };
  return(`<svg viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentColor" ` + `stroke-width="2" aria-hidden="true"><path d="` +
  (
    `${paths[id] || paths.box}`
  ) + `"/></svg>`);
}
export {
  startOnboarding, goalCards, onboarding, collectOnboard, validateStep, completeOnboard, equipmentTile
};
