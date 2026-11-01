import {
  todayWorkout
}
from '../coach-insights.js?v=31';
import {
  skills
}
from '../data/skills.js?v=31';
import {
  exercises, plan
}
from '../engine.js?v=31';
import {
  exerciseVisual
}
from '../exercise-visuals.js?v=31';
import {
  onboardingSkillChoices, skillStepsHTML
}
from '../journey-view.js?v=31';
import {
  confirmStage, selectSkill, skillSelections, skillState, stageProposal
}
from '../skill-progress.js?v=31';
import {
  escapeHTML as esc
}
from '../ui.js?v=31';
import {
  go
}
from '../router.js?v=31';
import {
  parseTempo
}
from '../screens/player.js?v=31';
import {
  $, $$, he, nameOf, on, t, user
}
from '../shared.js?v=31';
import {
  modal
}
from '../shell.js?v=31';
import {
  save, state
}
from '../state.js?v=31';
function weeklySkillPractice(u, s) {
  if (!u) return '';
  const p = todayWorkout( {
    ... u, skillSelections: {
      ... skillSelections(u), [s.type]: s.id
    }
  }, {
    ... u.coachPreferences, focus: s.type, skillChoice: s.type, skillFocusOverride: true
  });
  const blocks =(p.blocks || []).filter(b => b.skill === s.id && b.phase === 'skill'), b = blocks[0];
  return(`<aside class="notice"><h4>מה עושים השבוע</h4>` + (
    `${b ?(`<p>` + (
      `${esc(b.he)}`
    ) + ` · ` + (
      `${blocks.length}`
    ) + ` × ` + (
      `${b.target ?? 'היכרות'}`
    ) + ` ` + (
      `${b.unit === 'seconds' ? 'שניות': 'חזרות'}`
    ) + `</p><p>` + (
      `${esc(b.cue)}`
    ) + `</p>`):(`<p>` + (
      `${esc(p.reason || 'אין כרגע תרגול זמין לפי היכולת, הציוד וכללי הבטיחות. אפשר לעדכן את התוכנית אצל המאמן.')}`
    ) + `</p>`)}`
  ) + `</aside>`);
}
function skillPicker(profile, prefix) {
  if (prefix === 'ob') return onboardingSkillChoices(profile);
  const chosen = prefix === 'ob' ?(profile.skillSelections || {
  }): skillSelections(profile);
  return(`<div class="skill-selection">` + (
    `${['pull', 'push'].filter(type => prefix === 'ob' || typeof state.skillPickerType === 'undefined' || !state.skillPickerType || type === state.
    skillPickerType).map(type =>(`<label>` + (
      `${type === 'pull' ? 'סקיל משיכה': 'סקיל דחיקה'}`
    ) + `<select id="` + (
      `${prefix}`
    ) + `-` + (
      `${type}`
    ) + `-skill"><option value="" ` + (
      `${!chosen[type] || skillState(profile, chosen[type]).achieved ? 'selected': ''}`
    ) + `>לבחור סקיל</option>` + (
      `${skills.filter(s => s.type === type && !skillState(profile, s.id).achieved).map(s =>(`<option value="` + (
        `${s.id}`
      ) + `" ` + (
        `${chosen[type] === s.id ? 'selected': ''}`
      ) + `>` + (
        `${esc(s.he)}`
      ) + (
        `${s.classificationNote ? ' · ' + esc(s.classificationNote): ''}`
      ) + `</option>`)).join('')}`
    ) + `</select></label>`)).join('')}`
  ) + `</div>`);
}
function restoreSkillPickerSelections(profile) {
  if (!profile) return;
  const chosen = skillSelections(profile);
  for (const type of['pull', 'push']) {
    const select = $('#profile-' + type + '-skill'), id = chosen[type];
    if (select) select.value = id && !skillState(profile, id).achieved ? id: '';
  }
}
function skillDetail(id) {
  const s = skills.find(x => x.id === id);
  if (!s) return;
  const u = user(), state = skillState(u || {
  }, id), proposal = u && stageProposal(u, id);
  const criterion = c =>( (
    `${c.editorial ? 'קריטריון עריכתי, טרם נבדק מקצועית · ': ''}`
  ) + (
    `${c.sets || 1}`
  ) + ` × ` + (
    `${c.value}`
  ) + ` ` + (
    `${c.unit === 'seconds' ? 'שניות': 'חזרות'}`
  ) + (
    `${c.perSide ? ' לכל צד': ''}`
  ) + (
    `${c.sessions ? ' · בשני מפגשים נפרדים': ''}`
  ));
  modal((`<div class="skill-evidence-detail"><h2>` + (
    `${esc(s.he)}`
  ) + ` · ` + (
    `${s.type === 'pull' ? 'משיכה': 'דחיקה'}`
  ) + `</h2><p>` + (
    `${esc(s.description)}`
  ) + `</p><p>` + (
    `${esc(s.timeline)}`
  ) + `</p>` + (
    `${state.achieved ?(`<h3>כל הכבוד! השלמת את היעד לפי הביצועים שדיווחת.</h3><button data-next-skill="` + (
      `${s.type}`
    ) + `">לבחור את סקיל ` + (
      `${s.type === 'pull' ? 'המשיכה': 'הדחיקה'}`
    ) + ` הבא</button>`): ''}`
  ) + (
    `${proposal ?('<section class="notice"><p>נראה שעמדת בקריטריון — לעבור לשלב הבא?</p><p>אישור הדיווח אינו ' +
    'אישור טכניקה. תרגילים מתקדמים דורשים בדיקה אישית.</p><button id="confirm-skill-stage">') +(proposal.final ? 'אישור השלמת היעד': 'אישור מעבר שלב'
    ) + '</button></section>': ''}`
  ) + ` ` + (
    `${!state.achieved ?(`<button class="secondary" data-next-skill="` + (
      `${s.type}`
    ) + `">לבחירת סקיל ` + (
      `${s.type === 'pull' ? 'משיכה': 'דחיקה'}`
    ) + `</button>`): ''}`
  ) + (
    `${u && !state.achieved ? '<button class="secondary" id="log-skill-attempts">תיעוד ניסיונות שביצעתי בשלב הנוכחי</button>': ''}`
  ) + (
    `${skillGates(s)}`
  ) + (
    `${state.source === 'self-report' && !state.achieved ? '<p>דיווח עצמי · שיבוץ ראשוני; ביצועים שיתועדו בהמשך יכולים לשנות אותו.</p>': ''}`
  ) + skillStepsHTML(s, state, {currentDetails: !state.achieved ? weeklySkillPractice(u, s) : ''}) + `<h3>דרישות מוקדמות</h3><ul>` + (
    `${s.prerequisites.map(x =>(`<li>` + (
      `${esc(x)}`
    ) + `</li>`)).join('')}`
  ) + `</ul><p>` + (
    `${esc(s.caveat)}`
  ) + `</p></div>`), {
    wide: true
  });
  bindNextSkill();
  on('#log-skill-attempts',() => {
    const stage = s.stages[state.stage], c = stage.exit, e = exercises.find(e => e.id === stage.exerciseId);
    modal((`<h2>תיעוד ביצוע · ` + (
      `${esc(s.he)}`
    ) + ` · שלב ` + (
      `${state.stage + 1}`
    ) + `</h2><p>לתיעוד ניסיונות שכבר בוצעו בלבד. תרגיל מתקדם דורש הדרכה אישית; המספרים אינם אישור ` +
    `כשירות.</p><form id="skill-attempt-form">` + (
      `${Array.from( {
        length: c.sets
      },(_, i) => i + 1).map(i =>(`<label>ניסיון ` + (
        `${i}`
      ) + ` · ` + (
        `${c.unit === 'seconds' ? 'שניות': 'חזרות'}`
      ) + (
        `${c.perSide ? ' בסך הכול בשני הצדדים': ''}`
      ) + `<input name="attempt-` + (
        `${i}`
      ) + `" type="number" min="0" max="999" required></label>`)).join('')}`
    ) + `<label>תנאי המתקן<input name="setup" maxlength="120" required></label><label>סיוע או ללא סיוע` +
    `<input name="assistance" required maxlength="80"></label><label>טווח<input name="rom" required ` +
    `maxlength="120"></label><label>תקן ביצוע<input name="standard" required maxlength="120">` +
    `</label><label>קצב ירידה, עלייה, עצירה<input name="tempo" required placeholder="2,1,0"></label>` +
    `<label>עתודה מינימלית בכל הניסיונות (שניות בהחזקה, חזרות בתנועה)<input name="reserve" ` + `type="number" min="0" max="10" required></label>`
    + (
      `${c.perSide ?(`<label>המינימום בפועל בצד שמאל בכל ניסיון<input name="left" type="number" min="0" max="999" ` +
      `required></label><label>המינימום בפועל בצד ימין בכל ניסיון<input name="right" type="number" ` + `min="0" max="999" required></label>`): ''}`
    ) + `<label><input name="technique" type="checkbox">בדקתי במפורש את הטכניקה מול הוראות השלב</label>` +
    `<label><input name="exit" type="checkbox">כניסה ויציאה בטוחות ונשלטות</label><label ` +
    `class="check-label"><input name="quality" type="checkbox">הביצוע היה נשלט, ללא כאב, עם יציאה ` +
    `בטוחה ועתודה</label><button>שמירת הביצועים</button></form>`));
    $('#skill-attempt-form').onsubmit = event => {
      event.preventDefault();
      const d = new FormData(event.target), good = d.has('quality'), stamp = new Date().toISOString(),
      logId = crypto.randomUUID();
      u.logs.push( {
        id: logId, completed_at: stamp, completed: false, effort: 'normal', pain: false, plan: {
          rule_version: 'skill-observation-1', blocks: []
        }, sets: Array.from( {
          length: c.sets
        },(_, i) => i + 1).map(i =>( {
          id: logId + ':' + i, performed_exercise_id: e.id, target: c.value *(c.perSide ? 2: 1), actual: Number(d.get('attempt-' + i)),
          unit: c.unit, quality: good ? 'good': 'uncertain', technique_confirmed: d.has('technique'), safe_exit_confirmed: d.has('exit'),
          assistance: d.get('assistance').trim(), range_of_motion: d.get('rom').trim(), execution_standard: d.get('standard').trim(),
          tempo: parseTempo(d.get('tempo')), rir: c.unit === 'reps' ? Number(d.get('reserve')): undefined,
          technical_reserve_seconds: c.unit === 'seconds' ? Number(d.get('reserve')): undefined, left_actual: c.perSide ? Number(d.get('left')):
          undefined, right_actual: c.perSide ? Number(d.get('right')): undefined, skill: id, skillStage: state.stage,
          phase: 'skill', setup: d.get('setup').trim(), side_allocation: c.perSide ? 'total_both_sides': null
        }))
      });
      save();
      skillDetail(id);
    };
  });
  $$('[data-road-ex]').forEach(b => b.onclick =() => go('library/exercise/' + encodeURIComponent(b.dataset.roadEx)));
  on('#confirm-skill-stage',() => {
    if (!confirmStage(u, proposal, true)) return;
    save();
    $('#modal').close();
    if (proposal.final) {
      go('skills');
      modal((`<h2>כל הכבוד! ` + (
        `${esc(s.he)}`
      ) + ` הושג לפי הדיווחים שלך.</h2><p>איזה סקיל ` + (
        `${s.type === 'pull' ? 'משיכה': 'דחיקה'}`
      ) + ` תרצו ללמוד עכשיו?</p>` + (
        `${skills.filter(x => x.type === s.type && x.id !== id && !skillState(u, x.id).achieved).map(x =>(`<button data-next-skill="` + (
          `${x.id}`
        ) + `">` + (
          `${esc(x.he)}`
        ) + `</button>`)).join('')}`
      )));
      $$('[data-next-skill]').forEach(b => b.onclick =() => {
        selectSkill(u, b.dataset.nextSkill);
        save();
        $('#modal').close();
        go('skills');
      });
    } else skillDetail(id);
  });
}
function skillGates(s) {
  return(`<section class="skill-gates"><h3>` + (
    `${t('נקודות בדיקה מספריות', 'Numeric entry checkpoints')}`
  ) + `</h3><p>נקודות הבדיקה עוזרות לבחור נקודת התחלה מתאימה לסקיל.</p><details><summary>פירוט` + `</summary><p>` + (
    `${esc(s.gateNote)}`
  ) + `</p><ul>` + (
    `${s.gates.map(g =>(`<li>` + (
      `${esc(nameOf(exercises.find(e => e.id === g.exerciseId)))}`
    ) + `: ` + (
      `${g.value}`
    ) + ` ` + (
      `${g.unit === 'seconds' ? t('שניות', 'seconds'): t('חזרות', 'reps')}`
    ) + (
      `${g.perSide ? ' · ' + t('לכל צד', 'each side'): ''}`
    ) + `</li>`)).join('')}`
  ) + `</ul></details></section>`);
}
function bindNextSkill() {
  $$('[data-next-skill]').forEach(b => b.onclick =() => {
    state.skillPickerType = b.dataset.nextSkill;
    $('#modal')?.close();
    go('skills');
    document.querySelector('.lib-skill-picker select')?.focus( {
      preventScroll: true
    });
    document.querySelector('.lib-skill-picker')?.scrollIntoView( {
      block: 'center'
    });
  });
}
export {
  weeklySkillPractice, skillPicker, restoreSkillPickerSelections, skillDetail, skillGates, bindNextSkill
};
