import {
  displayPhases
}
from './session-settings.js?v=31';
import {
  phaseLabel
}
from './data/glossary.js?v=31';
import {
  escapeHTML as esc
}
from './ui.js?v=31';
// Labels never participate in segment sizing: flex weights represent exact seconds.
export function renderPhaseBar(phases, {
  className = '', label = p => p.label || phaseLabel(p.id)
} = {
}) {
  const visible = displayPhases(phases);
  const description = visible.map(p => (
    `${label(p)}` +
    ` ` +
    `${p.minutes}` +
    ` דקות`
  )).join(' · ');
  return (
    `<span class="session-phases ` +
    `${esc(className)}` +
    `"><span class="phase-time-track" role="img" aria-label="` +
    `${esc(description)}` +
    `">` +
    `${visible.map(p => (
      `<span data-phase="` +
      `${esc(p.id)}` +
      `" style="flex:` +
      `${p.seconds}` +
      ` 1 0px"></span>`
    )).join('')}` +
    `</span><span class="phase-time-labels" aria-hidden="true">` +
    `${visible.map(p => (
      `<span>` +
      `${esc(label(p))}` +
      ` <b>` +
      `${p.minutes}` +
      ` דק׳</b></span>`
    )).join('')}` +
    `</span></span>`
  );
}
