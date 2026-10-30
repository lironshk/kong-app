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
export const availableSkills =(profile, type) => skills.filter(s => s.type === type && !skillState(profile,
s.id).achieved);
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
