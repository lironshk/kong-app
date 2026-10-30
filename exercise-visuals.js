import './data/exercises.js?v=31';
import {
  movementAtlas
}
from './data/movement-atlas.js?v=31';
import {
  poses
}
from './data/poses.js?v=31';
export const visualExerciseIds = Object.keys(poses);
const escape = s => String(s ?? '').replace(/[&<>"']/g, c =>( {
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}
[c]));
export function exerciseVisual(exercise, {
  compact = false, lang = 'he'
} = {
}) {
  const atlas = movementAtlas[exercise?.id];
  if (atlas) {
    const phases = atlas.phases[lang === 'en' ? 'en': 'he'], name = lang === 'en' ? exercise.en: exercise.he;
    return (
      `<figure class="movement-atlas` +
      `${compact ? ' compact': ''}` +
      `" data-movement-id="` +
      `${escape(exercise.id)}` +
      `" data-kind="` +
      `${atlas.kind || 'movement'}` +
      `" data-review="` +
      `${atlas.review}` +
      `"><img class="movement-atlas-image" src="` +
      `${atlas.src}` +
      `" width="` +
      `${atlas.width}` +
      `" height="` +
      `${atlas.height}` +
      `" loading="lazy" decoding="async" alt="` +
      `${escape(name)}` +
      `: ` +
      `${phases.map((phase, i) => (
        `0` +
        `${i + 1}` +
        ` ` +
        `${escape(phase)}`
      )).join(' ')}` +
      `"><figcaption><div class="movement-atlas-phases" dir="` +
      `${lang === 'en' ? 'ltr': 'rtl'}` +
      `">` +
      `${phases.map((phase, i) => (
        `<span><b>0` +
        `${i + 1}` +
        `</b> ` +
        `${escape(phase)}` +
        `</span>`
      )).join('')}` +
      `</div>` +
      `${atlas.apparatusNote ? (
        `<p class="movement-apparatus-note">` +
        `${escape(atlas.apparatusNote[lang === 'en' ? 'en': 'he'])}` +
        `</p>`
      ): ''}` +
      `</figcaption></figure>`
    );
  }
  return (
    `<figure class="movement-placeholder` +
    `${compact ? ' compact': ''}` +
    `" data-movement-id="` +
    `${escape(exercise?.id)}` +
    `"><span class="pattern-icon" aria-hidden="true">` +
    `${( {
      push: '↗', pull: '↙', legs: '↕', core: '◇', mobility: '↔'
    })[exercise?.group] || '◇'}` +
    `</span><strong>` +
    `${escape(lang === 'en' ? exercise?.en: exercise?.he)}` +
    `</strong><small>` +
    `${lang === 'en' ? 'Movement guide below': 'מדריך התנועה בהמשך'}` +
    `</small></figure>`
  );
}
// Clean media for browse cards: the plate only, or a Hebrew-named neutral tile.
export function movementThumb(exercise, {
  lang = 'he', eager = false
} = {
}) {
  const atlas = movementAtlas[exercise?.id], name = lang === 'en' ? exercise?.en: exercise?.he;
  if (atlas) return (
    `<span class="lib-media" data-movement-id="` +
    `${escape(exercise.id)}` +
    `" data-review="` +
    `${atlas.review}` +
    `"><img src="` +
    `${atlas.src}` +
    `" width="` +
    `${atlas.width}` +
    `" height="` +
    `${atlas.height}` +
    `" loading="` +
    `${eager ? 'eager': 'lazy'}` +
    `" decoding="async" alt="` +
    `${escape(name)}` +
    `"></span>`
  );
  return (
    `<span class="lib-media lib-placeholder" data-movement-id="` +
    `${escape(exercise?.id)}` +
    `"><span class="lib-placeholder-kicker">מדריך תנועה</span><span class="lib-placeholder-name">` +
    `${escape(name)}` +
    `</span></span>`
  );
}
export function infographicSVG(exercise, {
  compact = false, lang = 'he'
} = {
}) {
  const pose = exercise?.pose || poses[exercise?.id];
  if (!pose) return '';
  const human =(points, phase) => {
    const limb =(a, b, w, accent = false) => (
      `<path d="M` +
      `${points[a]}` +
      `L` +
      `${points[b]}` +
      `" stroke="` +
      `${accent ? 'var(--action, currentColor)': 'currentColor'}` +
      `" stroke-width="` +
      `${w}` +
      `" stroke-linecap="round"/>`
    );
    const[head, shoulder, hip] = points, dx = hip[0] - shoulder[0], dy = hip[1] - shoulder[1], len = Math.hypot(dx,
    dy), nx = - dy / len, ny = dx / len;
    const torso = (
      `M` +
      `${shoulder[0] + nx * 12}` +
      ` ` +
      `${shoulder[1] + ny * 12}` +
      `L` +
      `${hip[0] + nx * 9}` +
      ` ` +
      `${hip[1] + ny * 9}` +
      `Q` +
      `${hip[0]}` +
      ` ` +
      `${hip[1] + 5}` +
      ` ` +
      `${hip[0] - nx * 9}` +
      ` ` +
      `${hip[1] - ny * 9}` +
      `L` +
      `${shoulder[0] - nx * 12}` +
      ` ` +
      `${shoulder[1] - ny * 12}` +
      `Z`
    );
    const region = exercise.group === 'legs' ? [2, 3]: exercise.group === 'pull' ? [1, 2]: exercise.group === 'core' ? [1,
    2]: [1, 9];
    const toes =(pose.contacts[phase] || []).filter(c => c.offset && [4, 6].includes(c.joint)).map(c => (
      `<path d="M` +
      `${points[c.joint]}` +
      `l` +
      `${c.offset}` +
      `" stroke="currentColor" stroke-width="8" stroke-linecap="round"/>`
    )).join('');
    return (
      `<g fill="currentColor">` +
      `${toes}` +
      `${[ [2, 5], [5, 6], [1, 7], [7, 8]].map(( [a, b]) => limb(a, b, 12)).join('')}` +
      `<path d="` +
      `${torso}` +
      `"/>` +
      `${[ [2, 3], [3, 4], [1, 9], [9, 10]].map(( [a, b]) => limb(a, b, 12)).join('')}` +
      `${limb(0, 1, 8)}` +
      `<circle cx="` +
      `${head[0]}` +
      `" cy="` +
      `${head[1]}` +
      `" r="10"/>` +
      `${limb(... region, 8, true)}` +
      `${[3, 5, 7, 9].map(i => (
        `<circle cx="` +
        `${points[i][0]}` +
        `" cy="` +
        `${points[i][1]}` +
        `" r="3" fill="var(--surface)"/>`
      )).join('')}` +
      `</g>`
    );
  };
  const apparatus =() => {
    const supports = pose.surfaces.filter(s => !(pose.equipment === 'rings' && s.id === 'grip')).map(s => (
      `<path d="M` +
      `${s.a}` +
      `L` +
      `${s.b}` +
      `"/>`
    )).join('');
    const grip = pose.surfaces.find(s => s.id === 'grip');
    const posts = grip && ['bar', 'lowbar', 'parallel'].includes(pose.equipment) ? (
      `<path d="M` +
      `${grip.a}` +
      `V194M` +
      `${grip.b}` +
      `V194"/>`
    ): '';
    const suspension = grip && pose.equipment === 'rings' ? [8, 10].map(j => {
      const x = pose.start[j][0], y = grip.a[1];
      return (
        `<path d="M` +
        `${x}` +
        ` 16V` +
        `${y - 14}` +
        `"/><circle cx="` +
        `${x}` +
        `" cy="` +
        `${y - 7}` +
        `" r="7"/>`
      )
    }).join(''): '';
    return (
      `<g fill="none" stroke="var(--control-border, currentColor)" stroke-width="3" ` +
      `stroke-linecap="round">` +
      `${supports}` +
      `${posts}` +
      `${suspension}` +
      `</g>`
    );
  };
  const phases = pose.hold ? [pose.end]: [pose.start, pose.end], width = pose.hold ? 250: 500;
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" class="exercise-plate kong-infographic` +
    `${compact ? ' compact': ''}` +
    `" viewBox="0 0 ` +
    `${width}` +
    ` 238" role="img" aria-label="` +
    `${escape(exercise.he + ' / ' + exercise.en)}` +
    `" data-pose="` +
    `${escape(exercise.id)}` +
    `"><title>` +
    `${escape(exercise.he + ' / ' + exercise.en)}` +
    `</title><desc>` +
    `${escape(exercise.cue)}` +
    ` · Original geometric study; coach review pending.</desc><rect width="` +
    `${width}` +
    `" height="238" rx="16" fill="var(--canvas)"/>` +
    `${phases.map((p, i) => (
      `<g transform="translate(` +
      `${i * 250}` +
      ` 0)">` +
      `${apparatus()}` +
      `${human(p, pose.hold ? 'end': i === 0 ? 'start': 'end')}` +
      `${!pose.hold ? (
        '<path d="M176 90Q204 100 187 127m-2-9 2 9 8-4" fill="none" stroke="var(--action, ' +
        'currentColor)" stroke-width="2" opacity=".6"/>'
      ): ''}` +
      `<text x="125" y="222" text-anchor="middle" fill="currentColor" font-family="sans-serif" ` +
      `font-size="12">0` +
      `${i + 1}` +
      ` · ` +
      `${pose.hold ?(lang === 'en' ? 'Hold': 'החזקה'): i === 0 ?(lang === 'en' ? 'Start': 'מוצא'):(lang === 'en' ? 'Finish': 'סיום')}` +
      `</text></g>`
    )).join('')}` +
    `</svg>`
  );
}
