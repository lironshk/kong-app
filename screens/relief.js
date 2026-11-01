import {
  evidenceLabels, myths, redFlags, regionSensations, reliefRegion, reliefRegions, reliefReview, reliefSources, sensations, sharpSteps
}
from '../data/relief.js?v=31';
import {
  bodyMap, regionCloseup
}
from '../relief-visuals.js?v=31';
import {
  escapeHTML as esc, safeUrl
}
from '../ui.js?v=31';
import {
  pageHead
}
from '../shared.js?v=31';
import {
  modal, shell
}
from '../shell.js?v=31';
import {
  state
}
from '../state.js?v=31';
let ticking = null;
const stopTimer = () => {
  clearInterval(ticking);
  ticking = null;
};
const sourceLinks = ids => [...new Set(ids)].map(id => reliefSources[id]).filter(Boolean)
  .map(s => `<li><a href="${esc(safeUrl(s.url))}" target="_blank" rel="noopener noreferrer">${esc(s.title)}</a></li>`).join('');
function flagsHTML() {
  return `<details class="relief-flags" open><summary>קודם כול: מתי לא מטפלים לבד</summary><ul>` +
    redFlags.map(f => `<li><strong>${esc(f.action)}</strong>${esc(f.text)}</li>`).join('') + '</ul></details>';
}
function mapHTML() {
  const view = state.reliefView || 'front', selected = state.reliefRegion;
  const chips = reliefRegions.map(r =>
    `<button type="button" data-relief-chip="${r.id}" aria-pressed="${selected === r.id}">${esc(r.he)}</button>`).join('');
  return `<div class="relief-map-card"><div class="relief-views" role="group" aria-label="צד הגוף">` +
    `<button type="button" data-relief-view="front" aria-pressed="${view === 'front'}">מלפנים</button>` +
    `<button type="button" data-relief-view="back" aria-pressed="${view === 'back'}">מאחור</button></div>` +
    `${bodyMap({view, selected})}<div class="relief-chips" aria-label="אזורים">${chips}</div></div>`;
}
function emptyHTML() {
  return '<div class="relief-empty"><h2>איפה זה מרגיש?</h2><p>לוחצים על האזור במפה או ברשימה. לכל אזור יש הסבר איך התחושה ' +
    'מרגישה שם, ממה היא נובעת בדרך כלל, ומה אפשר לעשות עכשיו.</p><div class="relief-kinds">' +
    Object.entries(sensations).map(([id, s]) =>
      `<div class="relief-kind k-${id}"><h3><span class="relief-dot"></span><span>${esc(s.he)}</span></h3><p>${esc(s.summary)}</p></div>`).join('') +
    '</div></div>';
}
function stepHTML(step) {
  const timer = step.seconds
    ? `<button type="button" class="relief-timer" data-relief-timer="${step.seconds}">טיימר ${step.seconds} שניות</button>` : '';
  return `<li><strong>${esc(step.title)}</strong><p>${esc(step.text)}</p><div class="relief-step-meta">` +
    `<span class="relief-evidence e-${step.evidence}">${esc(evidenceLabels[step.evidence])}</span>${timer}</div></li>`;
}
function regionHTML(region, inSession) {
  const kinds = regionSensations(region);
  const kind = kinds.includes(state.reliefSensation) ? state.reliefSensation : kinds[0], s = sensations[kind];
  const steps = kind === 'sharp' ? sharpSteps : region.steps[kind] || [];
  const ids = [...steps.flatMap(x => x.sources), ...(kind === 'sharp' ? ['injury'] : [])];
  const tabs = kinds.map(k => `<button type="button" role="tab" class="k-${k}" data-relief-kind="${k}" aria-selected="${k === kind}">` +
    `<span class="relief-dot"></span><span>${esc(sensations[k].he)}<small>${esc(sensations[k].hint)}</small></span></button>`).join('');
  const sessionNote = inSession && kind === 'sharp'
    ? '<p class="relief-note warn-note">באמצע אימון: סוגרים את החלון ובוחרים ״יש כאב — סיום ושמירה״.</p>' : '';
  return `<article class="relief-region" aria-live="polite"><header class="relief-region-head"><span class="eyebrow">${esc(region.muscles)}</span>` +
    `<h2>${esc(region.he)}</h2><p>${esc(region.when)}</p></header>` +
    `<div class="relief-tabs" role="tablist" aria-label="סוג התחושה">${tabs}</div>` +
    `<div class="relief-scene">${regionCloseup(region, kind)}<div class="relief-feel"><h3>איך זה מרגיש</h3>` +
    `<blockquote>${esc(region.feel[kind])}</blockquote><p>${esc(s.summary)}</p></div></div>` +
    `<div class="relief-body">${sessionNote}<h3>מה עושים עכשיו</h3><ol class="relief-steps">${steps.map(stepHTML).join('')}</ol>` +
    `${region.avoid ? `<p class="relief-note">${esc(region.avoid)}</p>` : ''}` +
    `<h3>לחזור לאימון?</h3><p class="relief-note">${esc(s.back)}</p>` +
    `<h3>מתי לפנות לבדיקה</h3>${region.flags.map(f => `<p class="relief-note warn-note">${esc(f)}</p>`).join('')}` +
    `<details><summary>מקורות לאזור הזה</summary><ul class="relief-sources">${sourceLinks(ids)}</ul></details></div></article>`;
}
function panelHTML(inSession) {
  const region = reliefRegion(state.reliefRegion);
  return region ? regionHTML(region, inSession) : emptyHTML();
}
function moreHTML() {
  return `<div class="relief-more"><section><h2>מה פחות עוזר ממה שחושבים</h2><ul>` +
    myths.map(m => `<li>${esc(m.text)}</li>`).join('') + `</ul></section><section><h2>על התוכן</h2><p>${esc(reliefReview)}</p>` +
    `<details><summary>כל המקורות</summary><ul class="relief-sources">${sourceLinks(Object.keys(reliefSources))}</ul></details></section></div>`;
}
export function reliefGuide({inSession = false} = {}) {
  return `<div class="relief-layout"><div id="relief-map">${mapHTML()}</div><div class="relief-panel" id="relief-panel">` +
    `${panelHTML(inSession)}</div></div>`;
}
// Repaints only the map and panel so scroll position and the open red-flag list stay put.
export function bindRelief(root, {inSession = false} = {}) {
  const paint = scroll => {
    stopTimer();
    root.querySelector('#relief-map').innerHTML = mapHTML();
    root.querySelector('#relief-panel').innerHTML = panelHTML(inSession);
    wire();
    if (scroll && matchMedia('(max-width:820px)').matches) root.querySelector('#relief-panel').scrollIntoView({behavior: 'smooth', block: 'start'});
  };
  const choose = id => {
    const region = reliefRegion(id);
    if (!region) return;
    state.reliefRegion = id;
    state.reliefView = region.view;
    paint(true);
  };
  function wire() {
    root.querySelectorAll('[data-relief-view]').forEach(b => b.onclick = () => {
      state.reliefView = b.dataset.reliefView;
      paint();
    });
    root.querySelectorAll('[data-relief-chip]').forEach(b => b.onclick = () => choose(b.dataset.reliefChip));
    root.querySelectorAll('[data-relief-region]').forEach(g => {
      g.onclick = () => choose(g.dataset.reliefRegion);
      g.onkeydown = e => {
        if (e.key !== 'Enter' && e.key !== ' ') return;
        e.preventDefault();
        choose(g.dataset.reliefRegion);
      };
    });
    root.querySelectorAll('[data-relief-kind]').forEach(b => b.onclick = () => {
      state.reliefSensation = b.dataset.reliefKind;
      paint();
      root.querySelector(`[data-relief-kind="${state.reliefSensation}"]`)?.focus();
    });
    root.querySelectorAll('[data-relief-timer]').forEach(b => b.onclick = () => {
      const running = b.classList.contains('running');
      stopTimer();
      root.querySelectorAll('.relief-timer.running').forEach(x => {
        x.classList.remove('running');
        x.textContent = `טיימר ${x.dataset.reliefTimer} שניות`;
      });
      if (running) return;
      let left = +b.dataset.reliefTimer;
      b.classList.add('running');
      b.textContent = `${left} — עצירה`;
      ticking = setInterval(() => {
        left -= 1;
        if (left > 0) b.textContent = `${left} — עצירה`;
        else {
          stopTimer();
          b.classList.remove('running');
          b.textContent = 'סיימתם. אפשר לחזור שוב אם צריך';
          navigator.vibrate?.(200);
        }
      }, 1000);
    });
  }
  wire();
}
export function relief() {
  shell(`<div class="relief-page">${pageHead('גוף נתפס?', 'עזרה מהירה לשרירים',
    'בוחרים איפה בגוף ואיך זה מרגיש, ומקבלים הסבר וצעדים לפי המחקר.')}` +
    `<p class="relief-review">${esc(reliefReview)}</p>${flagsHTML()}${reliefGuide()}${moreHTML()}</div>`);
  bindRelief(document.querySelector('.relief-page'));
}
export function openReliefModal() {
  modal(`<div class="relief-modal"><h2>משהו נתפס?</h2>${flagsHTML()}${reliefGuide({inSession: true})}</div>`, {wide: true});
  const dialog = document.querySelector('#modal'), close = dialog.onclose;
  dialog.onclose = () => {
    stopTimer();
    close?.();
  };
  bindRelief(dialog.querySelector('.relief-modal'), {inSession: true});
}
export const reliefEntry = () => '<a class="relief-entry" href="#relief"><svg class="rv-mini" viewBox="0 0 24 24" fill="none" ' +
  'stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="5" r="2.5"/>' +
  '<path d="M12 8v7m-4-5 4-2 4 2m-6 11 2-6 2 6"/><circle cx="12" cy="11" r="7" stroke-dasharray="2 3"/></svg>' +
  '<span><strong>גוף נתפס?</strong><small class="muted">התכווצות, תפיסה או כאב שרירים: הסבר ועזרה לפי אזור</small></span></a>';
