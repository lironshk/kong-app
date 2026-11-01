import {
  skills
}
from './data/skills.js?v=31';
import {
  exercises
}
from './data/exercises.js?v=31';
import {
  skillState
}
from './skill-progress.js?v=31';
import {
  movementThumb
}
from './exercise-visuals.js?v=31';
import {
  escapeHTML as esc
}
from './ui.js?v=31';
export const TARGET_SKILLS = {
  'first-push': 'push', 'first-pull': 'pull', 'front-lever': 'front-lever', 'muscle-up': 'muscle-up-strict',
  handstand: 'handstand-free', planche: 'full-planche', lsit: 'lsit', 'human-flag': 'human-flag', hspu: 'wall-hspu',
  'back-lever': 'back-lever', pistol: 'pistol'
};
export const skillTarget = s => exercises.find(e => e.id === TARGET_SKILLS[s.id]);
export const availableSkills =(profile, type) => skills.filter(s => s.type === type &&
!skillState(profile, s.id).achieved && !skillState(profile,s.id).reportedGoal);
export function onboardingSkillChoices(profile) {
  const chosen = profile.skillSelections || {
  };
  return (
    `<div class="onboarding-skills">` +
    `${['pull', 'push'].map(type => (
      `<fieldset><legend>` +
      `${type === 'pull' ? 'משיכה': 'דחיקה'}` +
      `</legend><div class="journey-skill-grid">` +
      `${availableSkills(profile, type).map(s => (
        `<button type="button" class="journey-skill secondary ` +
        `${chosen[type] === s.id ? 'selected': ''}` +
        `" data-ob-skill="` +
        `${s.id}` +
        `" aria-pressed="` +
        `${chosen[type] === s.id}` +
        `">` +
        `${movementThumb(skillTarget(s), {
          lang: 'he'
        })}` +
        `<strong>` +
        `${esc(s.he)}` +
        `</strong></button>`
      )).join('')}` +
      `</div></fieldset>`
    )).join('')}` +
    `</div>`
  );
}

// Compact skill steps share a readable criterion; advancement still uses confirmed evidence.
export function skillStepsHTML(skill, state, {currentDetails = '', lang = 'he'} = {}) {
  const t = (a, b) => lang === 'en' ? b : a;
  return `<section class="skill-steps" dir="${lang === 'en' ? 'ltr' : 'rtl'}"><h3>${t('השלבים בדרך לסקיל', 'Steps toward the skill')}</h3>
  <p>${t(
    'מתחילים בקל ומתקדמים לסקיל המלא. עוברים שלב אחרי עמידה בתנאי המעבר ואישור שלך.',
    'Start with preparation and work toward the full skill. Advance after meeting the criterion and confirming it.')}</p>
  <p class="skill-branch-note">${esc(skill.branchPolicy || t(
    'תרגילים מקבילים מותאמים בנפרד; אין מעבר אוטומטי ביניהם.', 'Parallel branches are assessed separately.'))}</p>
  ${state.reportedPlacement ? '<p>נקודת הפתיחה לפי הדיווח שלך; שלבים קודמים טרם אושרו.</p>' : ''}
  <ol class="skill-step-list">${skill.stages.map((stage, i) => {
    const e = exercises.find(e => e.id === stage.exerciseId), c = stage.exit;
    const done = state.achieved || i <= (state.confirmedThrough ?? -1), placed = !done && i < state.stage,
      current = !state.achieved && i === state.stage;
    return `<li class="roadmap-step ${done ? 'is-done' : current ? 'current-stage' : placed ? 'is-placed' : 'is-future'}"
    ${current ? 'aria-current="step"' : ''}>
    <span class="skill-step-dot" aria-hidden="true">${done ? '✓' : placed ? '·' : i + 1}</span>
    <div class="skill-step-content"><a class="skill-step-link" href="#library/exercise/${encodeURIComponent(stage.exerciseId)}"
    data-chain-ex="${esc(stage.exerciseId)}">
    ${movementThumb(e, {lang})}<span><strong>${esc(lang === 'en' ? e?.en : e?.he)}</strong>
    <small>${done ? t('הושלם', 'Done') : current ? t('השלב הנוכחי', 'Current step') : placed ?
      t('לפני נקודת הפתיחה; לא אושר', 'Before starting placement; unconfirmed') : t('בהמשך', 'Later')}</small></span></a>
    <p class="roadmap-pass">${t('כדי לעבור: ', 'To advance: ')}<b dir="ltr">${c.sets || 1} × ${c.value}</b>
    ${c.unit === 'seconds' ? t('שניות', 'seconds') : t('חזרות', 'reps')}
    ${c.perSide ? t(' לכל צד', ' each side') : ''} · ${c.sessions} ${t('אימונים', 'sessions')}</p>
    ${current ? `<div class="skill-current-details">${currentDetails}<details>
    <summary>${t('פירוט תנאי המעבר', 'Criterion details')}</summary>
    <p>${esc(c.task)} · ${esc(c.setup)} · ${esc(c.assistance)} ·
    ${esc(c.range_of_motion)} · ${esc(c.reserve)} · ${esc(c.safeExit)}</p><p>${esc(skill.branchPolicy)}</p><p>${t(
    'ביצוע נשלט, ללא כאב. תרגיל מתקדם מחייב אישור אישי גם לאחר מעבר שלב.',
    'Controlled, pain-free execution. Advanced exercises still require individual clearance after advancement.')}</p></details></div>` : ''}
    </div></li>`;
  }).join('')}</ol></section>`;
}
