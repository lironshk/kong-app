// Original schematic body art for the relief guide: shows where a sensation sits, not anatomy for diagnosis.
import {reliefRegions} from './data/relief.js?v=31';
import {escapeHTML as esc} from './ui.js?v=31';

const MIRROR = 'translate(200 0) scale(-1 1)';
// Muscle zones per view; paired zones are drawn once and mirrored.
const ZONES = {
  front: {
    shoulder: {shape: '<ellipse cx="64" cy="96" rx="12" ry="14"/>', pair: true},
    biceps: {shape: '<ellipse cx="56" cy="132" rx="8" ry="22" transform="rotate(8.7 56 132)"/>', pair: true},
    forearm: {shape: '<ellipse cx="47" cy="205" rx="7" ry="26" transform="rotate(5 47 205)"/>', pair: true},
    abs: {shape: '<rect x="86" y="128" width="28" height="90" rx="12"/>'},
    hipflexor: {shape: '<ellipse cx="88" cy="248" rx="7" ry="14" transform="rotate(-30 88 248)"/>', pair: true},
    quad: {shape: '<ellipse cx="84" cy="305" rx="12" ry="38" transform="rotate(2.5 84 305)"/>', pair: true},
    foot: {shape: '<ellipse cx="78" cy="428" rx="13" ry="7"/>', pair: true}
  },
  back: {
    neck: {shape: '<path d="M90 64 L110 64 L136 86 Q100 96 64 86 Z"/>'},
    lats: {shape: '<ellipse cx="79" cy="150" rx="10" ry="38" transform="rotate(-11 79 150)"/>', pair: true},
    lowback: {shape: '<rect x="84" y="186" width="32" height="34" rx="10"/>'},
    hamstring: {shape: '<ellipse cx="84" cy="308" rx="11" ry="36" transform="rotate(2.5 84 308)"/>', pair: true},
    calf: {shape: '<ellipse cx="81" cy="380" rx="10" ry="22" transform="rotate(1.5 81 380)"/>', pair: true}
  }
};
const limbs = [['M62 92 L50 170 L44 238', 20], ['M86 258 L82 350', 30], ['M82 350 L80 418', 22]];

function silhouette(view) {
  const side = limbs.map(([d, w]) => `<path d="${d}" stroke-width="${w}"/>`).join('');
  const detail = view === 'back' ? '<path class="rv-line" d="M100 92 V218"/>'
    : '<path class="rv-line" d="M100 96 V124 M86 238 Q100 246 114 238"/>';
  return `<g class="rv-body"><ellipse cx="100" cy="38" rx="22" ry="27"/><rect x="90" y="58" width="20" height="26" rx="6"/>` +
    '<path d="M62 84 Q100 76 138 84 Q142 120 134 150 Q126 190 126 226 L74 226 Q74 190 66 150 Q58 120 62 84Z"/>' +
    '<path d="M73 220 L127 220 Q134 245 131 264 L69 264 Q66 245 73 220Z"/>' +
    `<g class="rv-limbs">${side}<g transform="${MIRROR}">${side}</g></g>` +
    `<circle cx="43" cy="250" r="9"/><circle cx="157" cy="250" r="9"/></g>${detail}`;
}
function zone(id, {shape, pair}, {selected, interactive}) {
  const region = reliefRegions.find(r => r.id === id);
  const body = shape + (pair ? `<g transform="${MIRROR}">${shape}</g>` : '');
  const cls = `rv-zone${selected === id ? ' is-selected' : ''}`;
  if (!interactive) return `<g class="${cls}">${body}</g>`;
  return `<g class="${cls}" data-relief-region="${id}" role="button" tabindex="0" aria-label="${esc(region.he)}"` +
    ` aria-pressed="${selected === id}">${body}</g>`;
}
// Each sensation has its own motion language: closing rings, tension lines, a slow ache glow, a sharp burst.
function sensationLayer(kind, [x, y], size, uid) {
  const r = size * .2, still = globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  // Native SVG animation keeps rings centred on the focus point at any crop; reduced motion gets static rings.
  const pulse = (attr, values, dur, begin = 0) => still ? '' :
    `<animate attributeName="${attr}" values="${values}" dur="${dur}s" begin="${begin}s" repeatCount="indefinite"/>`;
  if (kind === 'cramp') return `<g class="rv-sx rv-cramp">${[0, 1, 2].map(i =>
    `<circle cx="${x}" cy="${y}" r="${r * (1.3 - i * .35)}">${pulse('r', `${r * 1.7};${r * .35}`, 1.4, -i * .47)}` +
    `${pulse('opacity', '0;.9;0', 1.4, -i * .47)}</circle>`).join('')}</g>`;
  if (kind === 'stiff') return `<g class="rv-sx rv-stiff">${[-1, 0, 1].map(i => {
    const yy = y + i * r * .55, step = r * .32;
    const pts = Array.from({length: 9}, (_, k) => `${x - r * 1.3 + k * step * 1.02},${yy + (k % 2 ? -step * .45 : step * .45)}`);
    return `<polyline points="${pts.join(' ')}" style="animation-delay:${(i + 1) * .3}s"/>`;
  }).join('')}</g>`;
  if (kind === 'doms') return `<defs><radialGradient id="rg-${uid}"><stop offset="0" stop-color="currentColor" stop-opacity=".55"/>` +
    `<stop offset="1" stop-color="currentColor" stop-opacity="0"/></radialGradient></defs>` +
    `<g class="rv-sx rv-doms"><circle cx="${x}" cy="${y}" r="${r * 1.6}" fill="url(#rg-${uid})">` +
    `${pulse('r', `${r * 1.35};${r * 1.85};${r * 1.35}`, 3.2)}${pulse('opacity', '.6;1;.6', 3.2)}</circle></g>`;
  const rays = Array.from({length: 8}, (_, k) => {
    const a = k * Math.PI / 4, c = Math.cos(a), s = Math.sin(a);
    return `<line x1="${x + c * r * .45}" y1="${y + s * r * .45}" x2="${x + c * r}" y2="${y + s * r}"/>`;
  }).join('');
  return `<g class="rv-sx rv-sharp">${rays}<circle cx="${x}" cy="${y}" r="${r * .18}"/></g>`;
}
let seq = 0;
export function bodyMap({view = 'front', selected = null} = {}) {
  const zones = Object.entries(ZONES[view]).map(([id, z]) => zone(id, z, {selected, interactive: true})).join('');
  const label = view === 'front' ? 'מפת גוף מלפנים' : 'מפת גוף מאחור';
  return `<svg class="rv-svg rv-map" viewBox="0 0 200 440" role="group" aria-label="${label}">${silhouette(view)}${zones}</svg>`;
}
export function regionCloseup(region, sensation) {
  const zones = Object.entries(ZONES[region.view]).map(([id, z]) => zone(id, z, {selected: region.id})).join('');
  const [x, y, w, h] = region.zoom, uid = ++seq;
  return `<svg class="rv-svg rv-close rv-k-${sensation}" viewBox="${x} ${y} ${w} ${h}" role="img" aria-label="${esc(region.he)}">` +
    `${silhouette(region.view)}${zones}${sensationLayer(sensation, region.focus, Math.min(w, h), uid)}</svg>`;
}
