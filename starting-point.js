import {
  skills
}
from './data/skills.js?v=32';
import {
  skillSelections, skillState
}
from './skill-progress.js?v=32';
import {
  escapeHTML as esc
}
from './ui.js?v=32';
export function renderStartingPoint(profile) {
  const metrics = [ ['push', 'שכיבות סמיכה', 'חזרות'], ['pull', 'מתח', 'חזרות'], ['legs', 'סקוואט',
  'חזרות'], ['core', 'פלאנק', 'שניות']];
  return (
    `<section class="card starting-point"><h2>נקודת ההתחלה שלך</h2><p>דיווח עצמי · הערכות ראשוניות ` +
    `מההיכרות</p><ul>` +
    `${metrics.map(( [key, label, unit]) => (
      `<li>` +
      `${label}` +
      `: ` +
      `${profile[key] > 0 ? (
        `${profile[key]}` +
        ` ` +
        `${unit}`
      ): 'טרם דווח'}` +
      `</li>`
    )).join('')}` +
    `</ul>` +
    `${Object.values(skillSelections(profile)).map(id => {
      const skill = skills.find(s => s.id === id), state = skillState(profile, id);
      return (
        `<p>` +
        `${esc(skill.he)}` +
        ` · ` +
        `${state.achieved ? 'היעד הושג לפי הדיווחים': (
          `שלב ` +
          `${state.stage + 1}` +
          ` מתוך ` +
          `${skill.stages.length}` +
          `${state.source === 'self-report' ? ' (דיווח עצמי, שיבוץ ראשוני)': ''}`
        )}` +
        `</p>`
      )
    }).join('')}` +
    `<p>התוכנית לשבוע: ` +
    `${(profile.days || []).length}` +
    ` ימים × ` +
    `${profile.minutes || 30}` +
    ` דקות` +
    `${profile.days?.some(d => profile.dayMinutes?.[d] && profile.dayMinutes[d] !== profile.minutes) ? (
      ` · לפי יום: ` +
      `${profile.days.map(d => profile.dayMinutes?.[d] || profile.minutes || 30).join(', ')}` +
      ` דקות`
    ): ''}` +
    `</p></section>`
  );
}
