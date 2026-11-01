import {
  capabilityChoices, capabilityPlan, capabilityStop
}
from '../capability-check.js?v=32';
import {
  skills
}
from '../data/skills.js?v=32';
import {
  exercises, plan
}
from '../engine.js?v=32';
import {
  dayKey as homeDate
}
from '../home-signals.js?v=32';
import {
  escapeHTML as esc
}
from '../ui.js?v=32';
import {
  go
}
from '../router.js?v=32';
import {
  blocked, recipeDetail
}
from '../screens/coach.js?v=32';
import {
  parseTempo
}
from '../screens/player.js?v=32';
import {
  $, $$, he, on, t, user
}
from '../shared.js?v=32';
import {
  modal, toast
}
from '../shell.js?v=32';
import {
  save, state
}
from '../state.js?v=32';
function painReview() {
  modal((`<h2>` + (
    `${t('חוזרים עם תשומת לב.', 'Return with care.')}`
  ) + `</h2><p>` + (
    `${t(('דווח כאב באימון קודם, ולכן יצירת האימון נעצרה. זהו דיווח עצמי בלבד, לא אישור רפואי לחזרה. כאב ' +
    'שנמשך, חוזר או מגביל תנועה מצריך בדיקה והתאמה מקצועית.'),(
    'Pain was reported in a previous session, so planning was paused. This is self-report, not ' +
    'medical clearance. Persistent, recurring or limiting pain needs professional assessment.'))}`
  ) + `</p><label class="check-label"><input id="return-no-pain" type="checkbox">` + (
    `${t('כרגע אין כאב בתנועות האימון המתוכננות.', 'I currently have no pain in the planned movements.')}`
  ) + `</label><label class="check-label"><input id="return-guidance" type="checkbox">` + (
    `${t('בדקתי את המצב וקיבלתי התאמה מקצועית לפי הצורך.', 'I reviewed the situation and obtained professional adaptation as needed.')}`
  ) + `</label><div id="return-error" class="form-error" role="alert"></div><button ` + `id="return-confirm" class="full-width">` + (
    `${t('שמירת הדיווח ובחינת התוכנית מחדש', 'Save report and review my plan')}`
  ) + `</button>`));
  on('#return-confirm',() => {
    if (!$('#return-no-pain').checked || !$('#return-guidance').checked) {
      $('#return-error').textContent = t('להשלים את שני הדיווחים לפני חזרה לתוכנית.', 'Complete both self-reports before returning to the plan.')
      ;
      return
    }
    user().painReviewedAt = new Date().toISOString();
    save();
    $('#modal').close();
    go('home')
  })
}
function reviewedExecution() {
  const u = user();
  if (!u) return;
  modal((`<h2>בדיקה מקצועית ותקופת אימון</h2><p>רק לאחר מפגש ובדיקת התרגיל, המתקן, הסיוע, הטכניקה ` +
  `והיציאה. דיווח עצמי או מעבר שלב אינם אישור מקצועי.</p><form id="clearance-form"><label>תרגיל` + `<select name="exercise">` + (
    `${exercises.map(e =>(`<option value="` + (
      `${e.id}`
    ) + `">` + (
      `${esc(e.he)}`
    ) + `</option>`)).join('')}`
  ) + `</select></label><label>ניסיון במשפחת התנועה<select name="experience"><option value="unknown">` +
  `לא ידוע</option><option value="beginner">מתחיל</option><option value="experienced">מנוסה` +
  `</option></select></label><label>בחירת ענף סקיל שנבדק (רשות)<select name="track"><option ` + `value="">ללא שינוי סקיל</option>` + (
    `${skills.map(t =>(`<option value="` + (
      `${t.id}`
    ) + `">` + (
      `${esc(t.he)}`
    ) + `</option>`)).join('')}`
  ) + `</select></label><label>שם הבודק<input name="reviewer" required maxlength="120"></label><label>` +
  `הכשרה<input name="qualification" required maxlength="120"></label><label>תאריך הבדיקה<input ` + `name="date" type="date" required max="` + (
    `${homeDate()}`
  ) + `"></label><label>מתקן וזווית<input name="setup" required maxlength="120"></label><label>סיוע ` +
  `(או ללא סיוע)<input name="assistance" required maxlength="120"></label><label>טווח שנבדק<input ` +
  `name="rom" required maxlength="120"></label><label>תקן ביצוע ויציאה<input name="standard" ` +
  `required maxlength="200"></label><label>קצב: ירידה, עלייה, עצירה<input name="tempo" required ` +
  `placeholder="2,1,0"></label><label>יעד שנבדק (סה״כ צדדים)<input name="target" type="number" ` +
  `min="1" max="120" required></label><label>סטים<input name="sets" type="number" min="1" max="5" ` +
  `required></label><label>מנוחה בשניות<input name="rest" type="number" min="180" max="300" ` +
  `required></label><label><input name="lighter" type="checkbox">הבודק המליץ על תקופה קלה של 7 ` +
  `ימים מהיום (כמחצית הסטים, עתודה מוגדלת, ללא סקיל מאומץ)</label><button>שמירת הבדיקה</button>` + `</form>`));
  $('#clearance-form').onsubmit = event => {
    event.preventDefault();
    const f = new FormData(event.target), tempo = parseTempo(f.get('tempo'));
    if (!tempo) return toast('נדרש קצב תקין: למשל 2,1,0', 'error');
    const e = exercises.find(e => e.id === f.get('exercise'));
    u.movementExperience ??= {
    };
    u.movementExperience[e.movementSubtype] = f.get('experience');
    const track = skills.find(t => t.id === f.get('track'));
    if (track) {
      const stage = track.stages.findIndex(t => t.exerciseId === e.id);
      if (stage < 0) return toast('התרגיל אינו בענף הסקיל שבחרת', 'error');
      u.skillProgress ??= {
      };
      u.skillProgress[track.id] = {
        stage, achieved: false, since: new Date().toISOString(), reviewer: f.get('reviewer').trim(), reviewedAt: f.get('date')
      };
    }
    u.exerciseClearances ??= {
    };
    u.exerciseClearances[e.id] = {
      reviewer: f.get('reviewer').trim(), qualification: f.get('qualification').trim(), reviewedAt: f.get('date') + 'T00:00:00Z',
      setup: f.get('setup').trim(), assistance: f.get('assistance').trim(), range_of_motion: f.get('rom').trim(),
      execution_standard: f.get('standard').trim(), tempo, target: Number(f.get('target')), sets: Number(f.get('sets')),
      restSeconds: Number(f.get('rest'))
    };
    if (f.get('lighter')) u.lighterPeriod = {
      start: new Date().toISOString(), end: new Date(Date.now() + 7 * 864e5).toISOString(), reviewer: f.get('reviewer'),
      reviewedAt: new Date().toISOString()
    };
    u.trainingBlock ??= {
      start: new Date().toISOString(), anchors: {
      }
    };
    u.trainingBlock.anchors[e.movementSubtype] = e.id;
    save();
    $('#modal').close();
    toast('הבדיקה נשמרה; וריאציה חדשה דורשת היכרות ותיעוד נפרדים.');
  };
}
function capabilityIntro() {
  const u = user();
  if (!u) return;
  if (u.session) {
    go('work');
    return;
  }
  const choices = capabilityChoices(u);
  modal((`<h2>בדיקת יכולת</h2><p>בדיקה נוחה לבחירת יעדים אישיים. אפשר לדלג או לפצל לימים שונים.</p>` + `<details><summary>פירוט</summary><p>` + (
    `${esc(capabilityStop)}`
  ) + `</p><p>לתעד מתקן וזווית, סיוע או ללא סיוע, טווח, קצב, ביצוע ועתודה. בהחזקה צדדית: סכום השניות ` +
  `בשני הצדדים, כל צד בנפרד, כניסה ויציאה לכל צד. זו הערכה עצמית ניסיונית; טרם נבדקה בידי איש ` + `מקצוע.</p></details>` + (
    `${choices.map(( {
      family, choices
    }) =>(`<label>` + (
      `${esc(choices[0].he)}`
    ) + `<select data-cap-variation="` + (
      `${family}`
    ) + `">` + (
      `${choices.map(e =>(`<option value="` + (
        `${e.id}`
      ) + `">` + (
        `${esc(e.he)}`
      ) + `</option>`)).join('')}`
    ) + `</select></label>`)).join('')}`
  ) + `<button id="cap-start">להתחלת הבדיקה המודרכת</button><button class="text-button" ` + `id="cap-later">בהמשך</button>`));
  on('#cap-later',() => {
    $('#modal').close();
    if (state.pendingRecipe) {
      const id = state.pendingRecipe;
      state.pendingRecipe = null;
      recipeDetail(id)
    }
  });
  on('#cap-start',() => {
    const selection = Object.fromEntries($$('[data-cap-variation]').map(el => [el.dataset.capVariation,
    el.value])), p = capabilityPlan(u, new Date(), selection);
    if (p.blocked) return toast(p.reason, 'error');
    if (!p.expectedFamilies.length) return toast('המשפחות הזמינות עדיין בהתאוששות. לחזור לבדיקה ביום אחר.',
    'error');
    u.session = {
      id: crypto.randomUUID(), plan: p, index: 0, sets: [], skipped: [], timer: {
        left: p.blocks[0].seconds, running: false, started: Date.now()
      }, started_at: new Date().toISOString(), location_id: u.activeLocation, equipment: [... u.equipment],
      draft: {
      }, notifications: false
    };
    if (!save()) {
      u.session = null;
      return
    }
    $('#modal').close();
    state.finishMode = false;
    go('work')
  });
}
export {
  painReview, reviewedExecution, capabilityIntro
};
