import {variationEvidence} from './training-evidence.js?v=31';
import {exerciseFamilies, familyOf} from './data/exercise-families.js?v=31';
import {recommendTier} from './variation-choice.js?v=31';
import {
  skillTarget
}
from './journey-view.js?v=31';
import {
  renderPhaseBar
}
from './phase-bar.js?v=31';
import {
  phaseLabel
}
from './data/glossary.js?v=31';
// Library (ספרייה): pure render + filter helpers. No DOM access, so Node tests can render every area.
import {
  movementAtlas
}
from './data/movement-atlas.js?v=31';
import {
  exercises
}
from './data/exercises.js?v=31';
import {
  skills
}
from './data/skills.js?v=31';
import {
  workouts
}
from './data/workouts.js?v=31';
import {
  exerciseVisual, movementThumb
}
from './exercise-visuals.js?v=31';
import {
  skillState, skillSelections
}
from './skill-progress.js?v=31';
const esc = s => String(s ?? '').replace(/[&<>"']/g, c =>( {
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}
[c]));
const pick =(pair, lang) => pair ?(lang === 'en' ? pair[1]: pair[0]): '';
export const EQUIPMENT_LABELS = {
  none: ['ללא ציוד', 'No equipment'], wall: ['קיר', 'Wall'], band: ['גומייה', 'Band'], lowbar: ['מוט נמוך',
  'Low bar'], bar: ['מתח', 'Pull-up bar'], parallel: ['מקבילים', 'Parallel bars'], parallettes: ['מקבילונים',
  'Parallettes'], rings: ['טבעות', 'Rings'], bench: ['משטח יציב', 'Stable bench'], anchor: ['נקודת עיגון',
  'Anchor point'], box: ['ארגז', 'Box'], pole: ['עמוד', 'Pole']
};
// Muscle labels are stored in Hebrew on each exercise; English is display-only.
export const MUSCLE_LABELS_EN = {
  'חזה': 'Chest', 'גב': 'Back', 'כתפיים': 'Shoulders', 'כתף קדמית': 'Front delts', 'כתף אחורית': 'Rear delts',
  'יד קדמית': 'Biceps', 'יד אחורית': 'Triceps', 'אחיזה': 'Grip', 'ליבה': 'Core', 'אלכסוני הבטן': 'Obliques',
  'מייצבי שכמות': 'Scapular stabilizers', 'מסור קדמי': 'Serratus anterior', 'מייצבי כתפיים': 'Shoulder stabilizers',
  'מייצבי גב': 'Back stabilizers', 'ירך קדמית': 'Quads', 'ירך אחורית': 'Hamstrings', 'ישבן': 'Glutes',
  'שוקיים': 'Calves', 'מכופפי ירך': 'Hip flexors', 'מקרבי ירך': 'Adductors', 'מרחיקי ירך': 'Abductors',
  'מסובבי ירך': 'Hip rotators', 'מייצבי אגן': 'Pelvic stabilizers', 'רגליים': 'Legs',
  'תנועתיות עמוד שדרה': 'Spine mobility', 'תנועתיות בית חזה': 'Thoracic mobility', 'תנועתיות קרסול': 'Ankle mobility'
};
export function musclesHTML(e, lang = 'he') {
  const list = e.muscles || [];
  return list.length ? (
    `<ul class="lib-muscles">` +
    `${list.map(m => `<li class="lib-tag">${esc(lang === 'en' ? MUSCLE_LABELS_EN[m] || m: m)}</li>`).join('')}` +
    `</ul>`
  ): '';
}
export const PATTERN_LABELS = {
  shoulder_external_rotation: ['סיבוב כתף חיצוני', 'Shoulder external rotation'],
  trunk_extension: ['פשיטת גו', 'Trunk extension'],
  horizontal_push: ['דחיקה אופקית', 'Horizontal push'], vertical_push: ['דחיקה אנכית', 'Vertical push'],
  horizontal_pull: ['משיכה אופקית', 'Horizontal pull'], vertical_pull: ['משיכה אנכית', 'Vertical pull'],
  support: ['תמיכה', 'Support'], scapular_control: ['שליטת שכמות', 'Scapular control'], squat: ['סקוואט',
  'Squat'], single_leg: ['רגל אחת', 'Single leg'], hinge: ['ציר ירך', 'Hinge'], hip_external_rotation: ['סיבוב חיצוני בירך',
  'Hip external rotation'], hip_abduction: ['הרחקת ירך', 'Hip abduction'], straight_arm_pull: ['משיכה בזרועות ישרות',
  'Straight arm pull'], hip_extension: ['פשיטת ירך', 'Hip extension'], knee_flexion: ['כפיפת ברך',
  'Knee flexion'], calf: ['שוקיים', 'Calves'], core_anti_extension: ['ליבה · מניעת פשיטה', 'Core anti-extension'],
  core_anti_rotation: ['ליבה · מניעת סיבוב', 'Core anti-rotation'], core_lateral_stability: ['יציבות צידית',
  'Lateral stability'], compression: ['דחיסה', 'Compression'], trunk_flexion: ['כפיפת גו', 'Trunk flexion'],
  mobility: ['תנועתיות', 'Mobility'], locomotion: ['תנועה במרחב', 'Locomotion']
};
export const LEVEL_LABELS = {
  1: ['מתחילים', 'Starter'], 2: ['בסיס', 'Foundation'], 3: ['ביניים', 'Intermediate'], 4: ['מתקדמים',
  'Advanced'], 5: ['עילית', 'Elite']
};
export const SKILL_TYPE_LABELS = {
  pull: ['משיכה', 'Pull'], push: ['דחיקה', 'Push'], legs: ['רגליים', 'Legs']
};
export const FORMAT_LABELS = {
  sets: ['כוח', 'Strength'], interval: ['אינטרוולים', 'Intervals'], tabata: ['טבטה 20/10', 'Tabata 20/10'],
  emom: ['כל דקה', 'EMOM'], circuit: ['סבבים', 'Circuit'], mobility: ['תנועה קלה', 'Recovery'], amrap: ['סבבים באיכות',
  'AMRAP'], skill: ['יום סקיל', 'Skill day']
};
export const AREAS = [ ['exercises', 'תרגילים', 'Exercises'], ['skills', 'סקילים', 'Skills'], ['workouts',
'אימונים', 'Workouts']];
export const MUSCLE_AREAS = {
  chest: ['חזה', 'Chest'], back: ['גב', 'Back'], shoulders: ['כתפיים', 'Shoulders'],
  legs: ['רגליים', 'Legs'], glutes: ['ישבן', 'Glutes'], core: ['ליבה', 'Core'],
  fullbody: ['כל הגוף', 'Full body'], mobility: ['תנועתיות', 'Mobility']
};
export const TIER_LABELS = {easy: ['קלה', 'Easy'], regular: ['רגילה', 'Regular'], hard: ['קשה', 'Hard']};
export const FACETS = ['area', 'tier', 'equipment', 'pattern', 'level', 'skill'];
const FACET_TITLES = {
  area: ['אזור בגוף', 'Muscle area'], tier: ['קושי במשפחה', 'Family difficulty'],
  equipment: ['ציוד', 'Equipment'], pattern: ['דפוס תנועה', 'Movement pattern'], level: ['דרגה', 'Level'],
  skill: ['סקיל', 'Skill']
};
export const equipmentLabel =(id, lang = 'he') => pick(EQUIPMENT_LABELS[id], lang) || id;
export const patternLabel =(id, lang = 'he') => pick(PATTERN_LABELS[id], lang) || id;
export const levelLabel =(n, lang = 'he') => pick(LEVEL_LABELS[n], lang) || String(n);
const nameOf =(x, lang) => lang === 'en' ? x?.en: x?.he;
const byId = id => exercises.find(e => e.id === id);
export function emptyFilters() {
  return {
    area: [], tier: [], equipment: [], pattern: [], level: [], skill: []
  };
}
export function activeFilterCount(f) {
  return FACETS.reduce((n, k) => n +(f?.[k]?.length || 0), 0);
}
export function facetOptions() {
  return {
    area: Object.keys(MUSCLE_AREAS), tier: Object.keys(TIER_LABELS),
    equipment: ['none', ... Object.keys(EQUIPMENT_LABELS).filter(id => id !== 'none' && exercises.some(e => e.equipment.includes(id)))],
    pattern: Object.keys(PATTERN_LABELS).filter(id => exercises.some(e => e.pattern === id)), level: [1,
    2, 3, 4, 5].filter(n => exercises.some(e => e.level === n)).map(String), skill: skills.map(s => s.id)
  };
}
export function facetValueLabel(facet, value, lang = 'he') {
  if (facet === 'area') return pick(MUSCLE_AREAS[value], lang);
  if (facet === 'tier') return pick(TIER_LABELS[value], lang);
  if (facet === 'equipment') return equipmentLabel(value, lang);
  if (facet === 'pattern') return patternLabel(value, lang);
  if (facet === 'level') return levelLabel(value, lang);
  return nameOf(skills.find(s => s.id === value), lang) || value;
}
const skillMembers = new Map(skills.map(s => [s.id, new Set( [... s.steps, ... s.stages.flatMap(st => [st.exerciseId,
...(st.drills || [])])])]));
function searchText(e) {
  const family = familyOf(e.id)?.family;
  return[family?.he, family?.en, e.he, e.en, ...(e.muscles || []), ...(PATTERN_LABELS[e.pattern] || []),
  ... e.equipment.flatMap(x => EQUIPMENT_LABELS[x] || [x])].join(
  ' ').toLowerCase();
}
// Within a facet values are alternatives (OR); facets combine (AND).
// Equipment means "can be done with the selected equipment": every item the exercise needs must be selected;
// exercises without equipment match only when "ללא ציוד" is selected.
export function filterExercises( {
  query = '', filters = emptyFilters(), saved = null
} = {
}, list = exercises) {
  const q = query.trim().toLowerCase(), f = {
    ... emptyFilters(), ... filters
  };
  return list.filter(e => (!f.area.length || f.area.includes(familyOf(e.id)?.family.area)) &&
    (!f.tier.length || f.tier.includes(familyOf(e.id)?.tier)) &&
    (!saved || saved.includes(e.id)) &&(!f.equipment.length ||(e.equipment.length ? e.equipment.every(x => f.equipment.
  includes(x)): f.equipment.includes('none'))) &&(!f.pattern.length || f.pattern.includes(e.pattern)) &&(!f.level.length || f.level.includes(
  String(e.level))) &&(!f.skill.length || f.skill.some(id => skillMembers.get(id)?.has(e.id))) &&(!q || searchText(e).includes(q))).sort((a,
  b) => Number(!!movementAtlas[b.id]) - Number(!!movementAtlas[a.id]));
}
export function filterSkills(query = '', lang = 'he') {
  const q = query.trim().toLowerCase();
  return skills.filter(s => !q || [s.he, s.en, s.description, pick(SKILL_TYPE_LABELS[s.type], 'he'),
  pick(SKILL_TYPE_LABELS[s.type], 'en')].join(' ').toLowerCase().includes(q));
}
export function filterWorkouts(query = '', level = 'all') {
  const q = query.trim().toLowerCase();
  return workouts.filter(w =>(level === 'all' || String(w.level) === String(level)) &&(!q || [w.he,
  w.en, w.description, ...(FORMAT_LABELS[w.format] || [])].join(' ').toLowerCase().includes(q)));
}
const SEARCH_ICON = (
  '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" ' +
  'stroke="currentColor" stroke-width="1.75" stroke-linecap="round"><circle cx="11" cy="11" ' +
  'r="6.5"/><path d="m20 20-4.2-4.2"/></svg>'
);
const FILTER_ICON = (
  '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" ' +
  'stroke="currentColor" stroke-width="1.75" stroke-linecap="round"><path d="M4 7h10M18 7h2M4 ' +
  '17h4M12 17h8"/><circle cx="16" cy="7" r="2"/><circle cx="10" cy="17" r="2"/></svg>'
);
const CLOSE_ICON = (
  '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="none" ' +
  'stroke="currentColor" stroke-width="1.75" stroke-linecap="round"><path d="m6 6 12 12M18 6 6 ' +
  '18"/></svg>'
);
export function exerciseMeta(e, lang = 'he') {
  return[patternLabel(e.pattern, lang), levelLabel(e.level, lang), e.equipment.length ? e.equipment.map(x => equipmentLabel(x,
  lang)).join(' · '): equipmentLabel('none', lang)].join(' · ');
}
export function exerciseCard(e, {
  lang = 'he', eager = false
} = {
}) {
  return (
    `<li class="lib-item"><button class="lib-card" data-exercise="` +
    `${esc(e.id)}` +
    `">` +
    `${movementThumb(e, {
      lang, eager
    })}` +
    `<span class="lib-card-body"><span class="lib-card-title">` +
    `${esc(nameOf(e, lang))}` +
    `</span><span class="lib-tag">` +
    `${esc(levelLabel(e.level, lang))}` +
    `</span></span></button></li>`
  );
}
export function libraryHeader( {
  area = 'exercises', query = '', filters = emptyFilters(), saved = false, signedIn = false, lang = 'he',
  sort = 'relevant'
} = {
}) {
  const t =(a, b) => lang === 'en' ? b: a, count = activeFilterCount(filters);
  const placeholder = {
    exercises: t('חיפוש תרגיל', 'Search exercises'), skills: t('חיפוש סקיל', 'Search skills'), workouts: t('חיפוש אימון',
    'Search workouts')
  }
  [area];
  return (
    `<header class="lib-head"><h1>` +
    `${t('ספרייה', 'Library')}` +
    `</h1><div class="lib-seg" role="tablist" aria-label="` +
    `${t('אזורי הספרייה', 'Library areas')}` +
    `">` +
    `${AREAS.map(( [id, a, b]) => (
      `<button role="tab" data-lib-area="` +
      `${id}` +
      `" aria-selected="` +
      `${area === id}` +
      `">` +
      `${t(a, b)}` +
      `</button>`
    )).join('')}` +
    `</div></header>
    <div class="lib-toolbar"><label class="lib-search">` +
    `${SEARCH_ICON}` +
    `<input id="library-search" type="search" placeholder="` +
    `${placeholder}` +
    `" aria-label="` +
    `${placeholder}` +
    `" value="` +
    `${esc(query)}` +
    `" autocomplete="off"></label>` +
    `${area === 'exercises' ? (
      `<label class="lib-sort">מיון<select id="library-sort" aria-label="מיון תרגילים">` +
      `${[ ["relevant", "רלוונטי לי"], ["name", "א–ת"], ["level", "רמה"]].map(( [id, title]) => (
        `<option value="` +
        `${id}` +
        `" ` +
        `${sort === id ? "selected": ""}` +
        `>` +
        `${title}` +
        `</option>`
      )).join('')}` +
      `</select></label><button class="lib-filter-button" id="lib-open-filters" ` +
      `aria-haspopup="dialog">` +
      `${FILTER_ICON}` +
      `<span>` +
      `${t('סינון', 'Filter')}` +
      `</span>` +
      `${count ? (
        `<span class="lib-count-badge">` +
        `${count}` +
        `</span>`
      ): ''}` +
      `</button>`
    ): (
      `<button class="lib-filter-button" id="lib-open-filters" aria-haspopup="dialog">` +
      `${FILTER_ICON}` +
      `<span>` +
      `${t('סינון', 'Filter')}` +
      `</span></button>`
    )}` +
    `</div>` +
    `${area === 'exercises' ? (
      `<nav class="lib-discovery" aria-label="` +
      `${t('גילוי תרגילים', 'Discover exercises')}` +
      `"><button data-lib-discover="all" aria-pressed="` +
      `${!saved && !count}` +
      `">` +
      `${t('הכול', 'All')}` +
      `</button><button data-lib-discover="goal" aria-haspopup="dialog" aria-pressed="` +
      `${!saved && !!count}` +
      `">` +
      `${t('לפי מטרה', 'By goal')}` +
      `</button><button data-lib-discover="saved" aria-pressed="` +
      `${!!saved}` +
      `">` +
      `${t('שמורים', 'Saved')}` +
      `</button></nav>`
    ): ''}`
  );
}
export function activeFilterChips(filters = emptyFilters(), {
  saved = false, lang = 'he'
} = {
}) {
  const t =(a, b) => lang === 'en' ? b: a, chips = FACETS.flatMap(k =>(filters[k] || []).map(v => (
    `<button class="lib-chip" data-remove-filter="` +
    `${k}` +
    `:` +
    `${esc(v)}` +
    `" aria-label="` +
    `${t('הסרת הסינון', 'Remove filter')}` +
    ` ` +
    `${esc(facetValueLabel(k, v, lang))}` +
    `">` +
    `${esc(facetValueLabel(k, v, lang))}` +
    `${CLOSE_ICON}` +
    `</button>`
  )));
  if (saved) chips.unshift( (
    `<button class="lib-chip" data-remove-saved>` +
    `${t('שמורים', 'Saved')}` +
    `${CLOSE_ICON}` +
    `</button>`
  ));
  return chips.length ? (
    `<div class="lib-active" aria-label="` +
    `${t('סינון פעיל', 'Active filters')}` +
    `">` +
    `${chips.join('')}` +
    `<button class="lib-clear" data-clear-filters>` +
    `${t('ניקוי סינון', 'Clear filters')}` +
    `</button></div>`
  ): '';
}
// Keep all siblings visible for context; only matches are emphasized after filtering.
export function familyCard(family, {lang = 'he', matches = null, currentId = null, profile = null} = {}) {
  const t = (a, b) => lang === 'en' ? b : a;
  const assessmentAt = Date.parse(profile?.assessmentAt);
  const logs = (profile?.logs || []).filter(l => l.completed && Date.parse(l.completed_at) <= Date.now() &&
    (!Number.isFinite(assessmentAt) || Date.parse(l.completed_at) >= assessmentAt));
  const hasEvidence = profile && Object.values(family.tiers).some(id => {
    const e = byId(id);
    return e && variationEvidence({...profile, capabilityCheck: {results: []}}, e, logs);
  });
  const equipment = profile?.locations?.find(l => l.id === profile.activeLocation)?.equipment || profile?.equipment || [];
  const recommended = hasEvidence ? recommendTier(profile, family, {equipment}).exerciseId : null;
  return `<article class="lib-family" data-family="${esc(family.id)}"><h3>${esc(nameOf(family, lang))}</h3>
    <ul class="lib-family-tiers">${Object.entries(TIER_LABELS).map(([tier, label]) => {
      const e = byId(family.tiers[tier]);
      if (!e) return '';
      return `<li class="lib-tier ${matches && !matches.has(e.id) ? 'is-context' : 'is-match'}">
        <strong>${pick(label, lang)}</strong><a class="lib-card" href="#library/exercise/${encodeURIComponent(e.id)}" data-chain-ex="${esc(e.id)}"
        ${currentId === e.id ? 'aria-current="true"' : ''}>
        ${movementThumb(e, {lang})}<span class="lib-card-body"><span class="lib-card-title">${esc(nameOf(e, lang))}</span>
        <span class="lib-tag">${esc(levelLabel(e.level, lang))}</span>
        <span class="lib-tag">${esc(e.equipment.length ? e.equipment.map(x => equipmentLabel(x, lang)).join(' · ') : equipmentLabel('none', lang))}</span>
        ${e.advancedOnly || e.novelEccentric ? `<small>${t('נדרש אישור אישי', 'Individual clearance required')}</small>` : ''}
        ${currentId === e.id ? `<b>${t('התרגיל הנוכחי', 'Current exercise')}</b>` : ''}
        ${recommended === e.id ? `<b>${t('מומלץ לך', 'Recommended for you')}</b>` : ''}</span></a></li>`;
    }).join('')}</ul>
    ${Object.values(family.tiers).some(id=>!id) ? `<small class="lib-missing-note">${t(
      'מוצגות האפשרויות הזמינות לתנועה הזו.', 'Available options for this movement.')}</small>` : ''}
    <details><summary>${t('פירוט', 'Details')}</summary><p>${esc(family.traineeNote || family.note)}</p></details>
    ${['easierFamily', 'harderFamily', 'relatedFamily', ...(family.relatedFamilies || []).map(id => 'related:' + id)].map(key => {
      const next = exerciseFamilies.find(f => f.id === (key.startsWith('related:') ? key.slice(8) : family[key]));
      if (key === 'relatedFamily' && family.relatedFamily === family.easierFamily) return '';
      const id = next && (next.tiers.easy || next.tiers.regular || next.tiers.hard);
      return id ? `<a class="lib-family-next" href="#library/exercise/${encodeURIComponent(id)}" data-chain-ex="${esc(id)}">
        ${key.startsWith('related') ? t('אפשרות נוספת: ', 'Related option: ') :
        key === 'easierFamily' ? t('הכנה: ', 'Preparation: ') : t('ההמשך: ', 'Continue: ')}${esc(nameOf(next, lang))}</a>` : '';
    }).join('')}</article>`;
}
export function quickFilters(filters = emptyFilters(), lang = 'he') {
  return `<div class="lib-quick-filters">${['area', 'tier'].map(key => `
    <div role="group" aria-label="${pick(FACET_TITLES[key], lang)}">${facetOptions()[key].map(v => `
    <button class="lib-option" data-quick-filter="${key}:${v}" aria-pressed="${(filters[key] || []).includes(v)}">
    ${esc(facetValueLabel(key, v, lang))}</button>`).join('')}</div>`).join('')}</div>`;
}
export function exerciseResults(list, {lang = 'he', profile = null} = {}) {
  const t = (a, b) => lang === 'en' ? b : a, matches = new Set(list.map(e => e.id));
  const families = [...new Set(list.map(e => familyOf(e.id)?.family).filter(Boolean))].sort((a,b)=>
    (a.id==='push-foundation' ? -1 : b.id==='push-foundation' ? 1 : 0) ||
    Math.min(...Object.values(a.tiers).filter(Boolean).map(id=>byId(id).level)) - Math.min(...Object.values(b.tiers).filter(Boolean).map(id=>byId(id).level)));
  const areas = Object.keys(MUSCLE_AREAS).filter(area => families.some(f => f.area === area));
  return `<p class="lib-result-count" role="status">${list.length} ${t('תרגילים', 'exercises')}</p>` + (list.length ?
    areas.map(area => `<section class="lib-muscle-section" id="lib-area-${area}" aria-labelledby="lib-title-${area}">
      <h2 id="lib-title-${area}">${pick(MUSCLE_AREAS[area], lang)}
      <small>${list.filter(e => familyOf(e.id)?.family.area === area).length} ${t('תרגילים', 'exercises')} ·
      ${families.filter(f => f.area === area).length} ${t('משפחות', 'families')}</small></h2>
    <div class="lib-families">${families.filter(f => f.area === area).map(f => familyCard(f, {lang, matches, profile})).join('')}</div></section>`).join('') :
    `<div class="lib-empty"><h2>${t('לא נמצאו תרגילים שמתאימים לסינון', 'No exercises match these filters')}</h2>
    <p>${t('לנסות מילה אחרת או להסיר חלק מהסינון.', 'Try another word or remove some filters.')}</p>
    <button class="lib-clear" data-clear-filters>${t('ניקוי סינון', 'Clear filters')}</button></div>`);
}
export function filterPanel(draft = emptyFilters(), {
  lang = 'he', signedIn = false, saved = false
} = {
}) {
  const t =(a, b) => lang === 'en' ? b: a, options = facetOptions(), count = filterExercises( {
    filters: draft
  }).length;
  return (
    `<div class="lib-sheet-head"><h2 id="lib-filter-title">` +
    `${t('סינון', 'Filter')}` +
    `</h2><button class="lib-icon" data-close-filters aria-label="` +
    `${t('סגירה', 'Close')}` +
    `">` +
    `${CLOSE_ICON}` +
    `</button></div><div class="lib-sheet-body">` +
    `${FACETS.map(k => (
      `<fieldset class="lib-facet"><legend>` +
      `${t(... FACET_TITLES[k])}` +
      `</legend>` +
      `${k === 'equipment' ? (
        `<p class="lib-facet-note">` +
        `${t('מוצגים תרגילים שאפשר לבצע עם הציוד שבחרת.', 'Shows exercises you can do with the selected equipment.')}` +
        `</p>`
      ): ''}` +
      `<div class="lib-options">` +
      `${options[k].map(v => (
        `<button class="lib-option" data-facet="` +
        `${k}` +
        `:` +
        `${esc(v)}` +
        `" aria-pressed="` +
        `${(draft[k] || []).includes(v)}` +
        `">` +
        `${esc(facetValueLabel(k, v, lang))}` +
        `</button>`
      )).join('')}` +
      `</div></fieldset>`
    )).join('')}` +
    `<section class="lib-sheet-links" aria-label="אפשרויות נוספות">` +
    `${signedIn ? (
      `<button class="secondary" data-lib-saved aria-pressed="` +
      `${!!saved}` +
      `">רק תרגילים ששמרתי</button>`
    ): ''}` +
    `<button class="secondary" data-lib-source="archive">מקורות מקוריים</button><button ` +
    `class="secondary" data-lib-source="personal">הלוחות שלי</button></section></div><div ` +
    `class="lib-sheet-foot"><button class="lib-reset" data-reset-filters>` +
    `${t('איפוס', 'Reset')}` +
    `</button><button class="lib-apply" data-apply-filters ` +
    `${count ? '': 'disabled'}` +
    `>` +
    `${count ? (
      `${t('הצגת', 'Show')}` +
      ` ` +
      `${count}` +
      ` ` +
      `${t('תרגילים', 'exercises')}`
    ): t('אין תרגילים מתאימים', 'No matching exercises')}` +
    `</button></div>`
  );
}
export function skillRoadmapCard(s, {
  profile = null, lang = 'he'
} = {
}) {
  const t =(a, b) => lang === 'en' ? b: a, state = skillState(profile || {
  }, s.id), selected = profile && !state.achieved && Object.values(skillSelections(profile)).includes(s.id);
  const stage = s.stages[state.stage], drill = byId(stage?.exerciseId);
  const cover = skillTarget(s) || drill;
  return (
    `<li class="lib-item"><button class="lib-card lib-skill-card` +
    `${selected ? ' is-selected': ''}` +
    `" data-skill="` +
    `${esc(s.id)}` +
    `">` +
    `${cover ? movementThumb(cover, {
      lang
    }): ''}` +
    `<span class="lib-card-body"><span class="lib-card-tags">` +
    `${selected ? (
      `<span class="lib-tag is-mine">` +
      `${t('הסקיל שלי', 'My skill')}` +
      `</span>`
    ): ''}` +
    `</span><span class="lib-card-title">` +
    `${esc(nameOf(s, lang))}` +
    `</span><span class="lib-card-meta">` +
    `${state.achieved ? t('היעד הושג', 'Achieved'): (
      `${t('שלב', 'Stage')}` +
      ` ` +
      `${state.stage + 1}` +
      ` ` +
      `${t('מתוך', 'of')}` +
      ` ` +
      `${s.stages.length}` +
      ` · ` +
      `${esc(nameOf(drill, lang) || '')}`
    )}` +
    `</span>` +
    `${state.source === 'self-report' && !state.achieved ? '<span class="lib-card-meta">דיווח עצמי · שיבוץ ראשוני</span>': ''}` +
    `${state.achieved ? ' <span class="lib-card-meta">היעד הושג לפי הדיווחים</span>': drill ? (
      `<span class="lib-current-drill">` +
      `${movementThumb(drill, {
        lang
      })}` +
      `<span>` +
      `${t('התרגול הנוכחי', 'Current practice')}` +
      ` · ` +
      `${esc(nameOf(drill, lang))}` +
      `</span></span>`
    ): ''}` +
    `<span class="lib-stage-track" aria-hidden="true">` +
    `${s.stages.map((x, i) => (
      `<span class="` +
      `${i <= (state.confirmedThrough ?? -1) || state.achieved ? 'done': i === state.stage ? 'current': ''}` +
      `"></span>`
    )).join('')}` +
    `</span><span class="lib-card-meta">` +
    `${esc(s.timeline)}` +
    `</span><span class="lib-card-link">` +
    `${t('לשלבים בדרך לסקיל', 'View skill steps')}` +
    `</span></span></button>` +
    `${state.achieved ? (
      `<button class="lib-start" data-next-skill="` +
      `${s.type}` +
      `">לבחור את סקיל ` +
      `${s.type === 'pull' ? 'המשיכה': s.type === 'push' ? 'הדחיקה': 'הרגליים'}` +
      ` הבא</button>`
    ): ''}` +
    `</li>`
  );
}
export function skillsArea( {
  query = '', profile = null, lang = 'he', picker = '', typeFilter = ''
} = {
}) {
  const t =(a, b) => lang === 'en' ? b: a, list = filterSkills(query, lang);
  const groups = [ ['pull', t('משיכה', 'Pull')], ['push', t('דחיקה', 'Push')], ['legs', t('רגליים',
  'Legs')]];
  return (
    `${picker}` +
    `${groups.map(( [type, title]) => {
      const items = list.filter(s => s.type === type &&(!typeFilter || s.type === typeFilter));
      return items.length ? (
        `<section class="lib-section"><h2>` +
        `${title}` +
        `</h2><ul class="lib-grid">` +
        `${items.map(s => skillRoadmapCard(s, {
          profile, lang
        })).join('')}` +
        `</ul></section>`
      ): ''
    }).join('') || (
      `<div class="lib-empty"><h2>` +
      `${t('לא נמצאו סקילים', 'No skills found')}` +
      `</h2></div>`
    )}`
  );
}
const MOVE_ALIASES = {
  'push-choice': 'incline-push', 'pull-choice': 'row', 'pull-optional': 'row', 'core-choice': 'deadbug'
};
export function workoutMoves(w) {
  return[... new Set(w.moves.map(id => MOVE_ALIASES[id] || id))].map(byId).filter(Boolean);
}
export function phaseBar(w, {
  lang = 'he'
} = {
}) {
  const t =(a, b) => lang === 'en' ? b: a, name = id => lang === 'he' ? phaseLabel(id): id === 'warm' ? 'Warm-up': id === 'cool' ? 'Cool-down':
  'Practice';
  return renderPhaseBar(w.phases, {
    className: 'lib-phase-summary lib-phase-bar', label: p => name(p.id)
  });
}
export function workoutCard(w, {
  lang = 'he'
} = {
}) {
  const t =(a, b) => lang === 'en' ? b: a, moves = workoutMoves(w);
  return (
    `<li class="lib-item"><article class="lib-card lib-workout-card"><button class="lib-card-hit" ` +
    `data-recipe="` +
    `${esc(w.id)}` +
    `"><span class="lib-thumbs" data-count="` +
    `${moves.length >= 4 ? 4: moves.length >= 2 ? 2: 1}` +
    `">` +
    `${moves.slice(0, moves.length >= 4 ? 4: moves.length >= 2 ? 2: 1).map(e => movementThumb(e, {
      lang
    })).join('')}` +
    `</span><span class="lib-card-body"><span class="lib-card-title">` +
    `${esc(nameOf(w, lang))}` +
    `</span><span class="lib-card-meta">` +
    `${w.origin === 'coach' ? 'מבוסס על לוח מאמן · ' : ''}` +
    `${levelLabel(w.level, lang)}` +
    ` · ` +
    `${t(... FORMAT_LABELS[w.format])}` +
    ` · ` +
    `${t('עד', 'up to')}` +
    ` ` +
    `${w.minutes}` +
    ` ` +
    `${t('דקות', 'min')}` +
    ` · ` +
    `${moves.length}` +
    ` ` +
    `${t('תנועות', 'movements')}` +
    `</span>` +
    `<span class="lib-workout-families">${[...new Set(moves.map(e => nameOf(familyOf(e.id)?.family || e, lang)))].map(esc).join(' · ')}</span>` +
    `${phaseBar(w, {
      lang
    })}` +
    `</span></button><div class="lib-card-actions"><button class="lib-start" data-start-recipe="` +
    `${esc(w.id)}` +
    `">` +
    `${t('להתחיל', 'Start')}` +
    `</button></div></article></li>`
  );
}
export function workoutsArea( {
  query = '', lang = 'he', level = 'all'
} = {
}) {
  const t =(a, b) => lang === 'en' ? b: a, list = filterWorkouts(query, level);
  return (
    `<label>רמת האימון<select id="workout-level"><option value="all">כל הרמות</option>` +
    `${[... new Set(workouts.map(w => w.level))].map(n => (
      `<option value="` +
      `${n}` +
      `" ` +
      `${String(n) === String(level) ? 'selected': ''}` +
      `>` +
      `${levelLabel(n, lang)}` +
      `</option>`
    )).join('')}` +
    `</select></label>`
  ) +(list.length ? (
    `<p class="lib-result-count" role="status">` +
    `${list.length}` +
    ` ` +
    `${t('אימונים', 'workouts')}` +
    `</p><ul class="lib-grid">` +
    `${list.map(w => workoutCard(w, {
      lang
    })).join('')}` +
    `</ul>`
  ): (
    `<div class="lib-empty"><h2>` +
    `${t('לא נמצאו אימונים', 'No workouts found')}` +
    `</h2></div>`
  ));
}
const range = a => Array.isArray(a) ?(a[0] === a[1] ? String(a[0]): (
  `${a[0]}` +
  `–` +
  `${a[1]}`
)): String(a);
export function prescription(e, {
  lang = 'he'
} = {
}) {
  const t =(a, b) => lang === 'en' ? b: a, d = e.defaultDosage || {
  };
  if (d.educationOnly) return '<p class="lib-note">' + t(
  'לימוד בלבד. אין מינון מתקדם כללי; נדרשים בדיקת הדגמה, מתקן, יציאה ומינון אישי עם מאמן מוסמך.',
  'Education only. Exact demonstration, apparatus, exit and dosage require qualified review.') + '</p>';
  const rows = [ [t('סטים', 'Sets'), range(d.sets || [2, 3])], d.holdSeconds ? [t('החזקה', 'Hold'),
  (
    `${range(d.holdSeconds)}` +
    ` ` +
    `${t('שניות', 'sec')}`
  )]: [t('חזרות', 'Reps'), (
    `${range(d.reps || [6, 10])}` +
    `${e.perSide ? ' ' + t('לכל צד', 'each side'): ''}`
  )], [t('מנוחה', 'Rest'), (
    `${range(d.restSeconds || [60, 90])}` +
    ` ` +
    `${t('שניות', 'sec')}`
  )], [t('מאמץ', 'Effort'), e.unit === 'seconds' ? t('עתודה טכנית בשניות ויציאה נשלטת', 'Technical time reserve and controlled exit'): (
    `${t('להשאיר', 'leave')}` +
    ` ` +
    `${range(d.rir || [2, 3])}` +
    ` ` +
    `${t('חזרות ברזרבה', 'reps in reserve')}`
  )]];
  return (
    `<dl class="lib-dose">` +
    `${rows.map(( [k, v]) => (
      `<div><dt>` +
      `${k}` +
      `</dt><dd>` +
      `${v}` +
      `</dd></div>`
    )).join('')}` +
    `</dl>` +
    `${e.advancedOnly ? (
      `<p class="lib-note">` +
      `${t('בתרגול סקיל: 4–8 ניסיונות קצרים של 5–15 שניות, עם 60–120 שניות בין ניסיונות. דורש בדיקה אישית.',
      'Skill practice: 4–8 short attempts of 5–15 s with 60–120 s between attempts. Individual review required.')}` +
      `</p>`
    ): ''}`
  );
}
function variationList(ids, lang) {
  return ids.length ? (
    `<ul class="lib-variations">` +
    `${ids.map(byId).filter(Boolean).map(x => (
      `<li><a class="lib-variation" href="#library/exercise/${encodeURIComponent(x.id)}" data-chain-ex="` +
      `${esc(x.id)}` +
      `">` +
      `${movementThumb(x, {
        lang
      })}` +
      `<span>` +
      `${esc(nameOf(x, lang))}` +
      `</span></a></li>`
    )).join('')}` +
    `</ul>`
  ): '';
}
export function exerciseDetailHTML(e, {
  lang = 'he', saved = false, canSave = false, media = ''
} = {
}) {
  const t =(a, b) => lang === 'en' ? b: a, sources =(e.source_ids || e.sourceIds || []).length;
  const family = familyOf(e.id)?.family;
  const siblings = new Set(family ? Object.values(family.tiers) : []);
  const easier = variationList((e.regressions || []).filter(id => !siblings.has(id)), lang);
  const harder = variationList((e.progressions || []).filter(id => !siblings.has(id)), lang);
  return (
    `<article class="lib-detail"><div class="lib-detail-demo">` +
    `${exerciseVisual(e, {
      lang, compact: false
    })}` +
    `</div><header class="lib-detail-head"><h2>` +
    `${esc(nameOf(e, lang))}` +
    `</h2><p class="lib-card-meta">` +
    `${esc(exerciseMeta(e, lang))}` +
    `</p>` +
    `${canSave ? (
      `<button class="lib-save" id="favorite" aria-pressed="` +
      `${!!saved}` +
      `">` +
      `${saved ? t('נשמר', 'Saved'): t('שמירה', 'Save')}` +
      `</button>`
    ): ''}` +
    `</header>` +
    `${e.muscles?.length ? (
      `<section class="lib-muscle-group"><h3>` +
      `${t('שרירים עיקריים', 'Main muscles')}` +
      `</h3>` +
      `${musclesHTML(e, lang)}` +
      `</section>`
    ): ''}` +
    `
    <section><h3>` +
    `${t('איך מבצעים', 'How to do it')}` +
    `</h3><ol class="lib-cues">` +
    `${[... new Set( [...(e.instructions || []), ...(e.keyCues || []), e.cue].filter(Boolean))].slice(0,
    5).map(c => (
      `<li>` +
      `${esc(c)}` +
      `</li>`
    )).join('')}` +
    `</ol></section>
    <section><h3>` +
    `${t('מינון מומלץ', 'Prescription')}` +
    `</h3>` +
    `${prescription(e, {
      lang
    })}` +
    `</section>\n    \n    ` +
    `${family ? `<section class="lib-variation-group"><h3>${t('וריאציות', 'Variations')}</h3>${familyCard(family, {lang, currentId: e.id})}</section>` : ''}` +
    `${easier || harder ? (
      `<section class="lib-variation-group">` +
      `${easier ? (
        `<div><h3>` +
        `${t('אפשרות קלה או הכנה', 'Easier or preparation')}` +
        `</h3>` +
        `${easier}` +
        `</div>`
      ): ''}` +
      `${harder ? (
        `<div><h3>` +
        `${t('אפשרות המשך', 'Next option')}` +
        `</h3>` +
        `${harder}` +
        `</div>`
      ): ''}` +
      `</section>`
    ): ''}` +
    `
    <section><h3>` +
    `${t('טעויות נפוצות', 'Common mistakes')}` +
    `</h3><ul class="lib-mistakes">` +
    `${(e.mistakes || []).map(x => (
      `<li>` +
      `${esc(x)}` +
      `</li>`
    )).join('')}` +
    `</ul>` +
    `${e.easy ? (
      `<p class="lib-note">` +
      `${t('להקלה', 'To make it easier')}` +
      `: ` +
      `${esc(e.easy)}` +
      `</p>`
    ): ''}` +
    `</section>
    ` +
    `${media}` +
    `
    <details class="lib-review"><summary>` +
    `${t('מקורות ומצב ביקורת', 'Sources & review status')}` +
    `</summary><p>` +
    `${t('מדריך עריכתי מקורי. ההדמיה והמינון ממתינים לביקורת מאמן עצמאית; אינם תחליף להדרכה אישית.', (
      'Original editorial guide. The visual and dosage await independent coach review; not a ' +
      'substitute for individual coaching.'
    ))}` +
    `</p><p>` +
    `${sources ? (
      `${t('מבוסס על', 'Based on')}` +
      ` ` +
      `${sources}` +
      ` ` +
      `${t('מקורות. הפירוט המלא במסך מקורות ושקיפות.', 'sources. Full list on the sources page.')}`
    ): t('אין מקור חיצוני מקושר לתרגיל זה.', 'No external source is linked to this exercise.')}` +
    `</p><button class="lib-link-button" data-page="research">` +
    `${t('למקורות ושקיפות', 'Sources & transparency')}` +
    `</button></details></article>`
  );
}
export function sortExercises(list, {
  sort = 'relevant', profile = null
} = {
}) {
  const equipment = profile?.locations?.find(l => l.id === profile.activeLocation)?.equipment || profile?.equipment || [];
  // Ability reports use different units and scales; a 60-second plank is intermediate.
  // These catalogue ranks affect display order only, never training authorization.
  const thresholds = {
    push: [1, 8, 25], pull: [1, 8, 15], legs: [1, 20, 40], core: [1, 30, 90]
  };
  const levelFor = e => {
    const n = Number(profile?.[e.group]) || 0, limits = thresholds[e.group] || thresholds.push;
    return 1 + limits.filter(limit => n >= limit).length;
  };
  const intermediate = Object.entries(thresholds).some(([group, limits]) => Number(profile?.[group]) >= limits[1]);
  const preparationPatterns = new Set(['mobility', 'scapular_control', 'locomotion']);
  const relevance = e => {
    const level = levelFor(e), distance = Math.abs(e.level - level);
    // Catalogue display only: preparation follows suitable strength/skill work for intermediate users.
    // A mobility goal filters to mobility drills first, so that view retains its original order.
    const preparation = e.group === 'mobility' || preparationPatterns.has(e.pattern);
    const band = distance <= 1 ? 0 : e.level < level ? 1 : 2;
    const priority = intermediate ? (preparation ? 1 : band === 0 ? 0 : band + 1) : band;
    return [e.equipment.every(id => equipment.includes(id)) ? 0 : 1, priority,
      movementAtlas[e.id] ? 0 : 1, distance, e.level];
  };
  const name =(a, b) => a.he.localeCompare(b.he, 'he');
  const compareRelevance =(a, b) => {
    const left = relevance(a), right = relevance(b);
    return left.reduce((result, value, i) => result || value - right[i], 0) || name(a, b);
  };
  return[... list].sort((a, b) => sort === 'name' ? name(a, b): sort === 'level' ? a.level - b.level || name(a,
  b): compareRelevance(a, b));
}
