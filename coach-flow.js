import {sessionHeaderHTML, roundCardsHTML} from './session-structure.js?v=32';
import {extraTimeText, extraRowHTML, rampUpNotice} from './session-extras.js?v=32';
import { variationSelectorHTML } from './variation-choice.js?v=32';
import { effortText, painRule, doseText } from './training-safety.js?v=32';
import {
  renderPhaseBar
}
from './phase-bar.js?v=32';
import {
  captureView
}
from './view-state.js?v=32';
import {
  SESSION_DURATIONS, sessionMinutes
}
from './session-settings.js?v=32';
import {
  focusLabels
}
from './session-planner.js?v=32';
import {
  todayWorkout, progressionCheckpoint
}
from './coach-insights.js?v=32';
import {
  buildWorkout
}
from './workout-engine.js?v=32';
import {
  exercises
}
from './data/exercises.js?v=32';
import {
  exerciseVisual
}
from './exercise-visuals.js?v=32';
import {
  escapeHTML as esc, icon
}
from './ui.js?v=32';
const equipmentLabels = {
  wall: ['קיר', 'Wall'], bar: ['מתח', 'Pull-up bar'], lowbar: ['מוט נמוך', 'Low bar'], band: ['גומייה',
  'Band'], parallel: ['מקבילים', 'Parallel bars'], parallettes: ['מקבילונים', 'Parallettes'], rings: ['טבעות',
  'Rings'], bench: ['משטח יציב', 'Stable bench'], anchor: ['נקודת עיגון', 'Anchor'], box: ['ארגז',
  'Box'], pole: ['עמוד', 'Pole']
};
/** Reviewable, local, one-session generation. Never starts or credits work on render. */
export function openCoachPreview( {
  profile, lang = 'he', seed = {
  }, previewOnly = false, templateId = null, modal, onStart, onPainReview, onPreferences, onPlanChange,
  savedPlan = null, onVariationChoice, onExtrasChange
}) {
  const t =(a, b) => lang === 'en' ? b: a;
  const defaults = profile.coachPreferences || {
  };
  const requestedMinutes = seed.minutes ?? defaults.minutes ?? profile.minutes;
  const initialMinutes = SESSION_DURATIONS.includes(sessionMinutes(requestedMinutes)) ? sessionMinutes(requestedMinutes): 30;
  let skillChoice = seed.skillChoice || defaults.skillChoice || 'pull', skillChoiceExplicit = seed.skillChoice !== undefined;
  let structureOverride = seed.structure || defaults.structure || null;
  let focus = seed.focus || defaults.focus || 'auto';
  const initialLocation = seed.locationId ?? defaults.locationId ?? profile.activeLocation;
  const initialReadiness = seed.readiness ?? 'normal';
  let equipmentOverride = Array.isArray(seed.equipment) ? seed.equipment: Array.isArray(defaults.equipment) ? defaults.equipment: null;
  let approvals = {
  };
  const dialog = modal( (
    `<div class="coach-preview"><span class="chapter-label">` +
    `${t('האימון שלך, עם הסבר', 'YOUR SESSION, EXPLAINED')}` +
    `</span><h2>` +
    `${previewOnly ? 'האימון שלך': t('התאמת האימון', 'Adjust session')}` +
    `</h2><p class="muted">` +
    `${previewOnly ? 'בודקים את התרגילים והיעדים ומתחילים כשמוכנים.': t('בודקים את התוכנית, משנים מה שצריך ומתחילים כשמוכנים.',
    'Review your plan, adjust what you need, and start when ready.')}` +
    `</p><div class="coach-columns"><aside class="coach-live-controls"><div ` +
    `class="preview-controls"><label>` +
    `${t('הזמן שלי', 'My time')}` +
    `<select id="duration" hidden>` +
    `${SESSION_DURATIONS.slice().filter(n => Number.isFinite(n) && n >= 10 && n <= 90).sort((a, b) => a - b).map(n => (
      `<option value="` +
      `${n}` +
      `" ` +
      `${n === initialMinutes ? 'selected': ''}` +
      `>` +
      `${n}` +
      ` ` +
      `${t('דקות', 'minutes')}` +
      `</option>`
    )).join('')}` +
    `</select><div class="duration-segments" role="group" aria-label="` +
    `${t('משך האימון בדקות', 'Session duration in minutes')}` +
    `">` +
    `${SESSION_DURATIONS.slice().sort((a, b) => a - b).map(n => (
      `<button type="button" class="secondary" data-duration="` +
      `${n}` +
      `" aria-pressed="` +
      `${n === initialMinutes}` +
      `">` +
      `${n}` +
      `</button>`
    )).join('')}` +
    `</div></label><label>` +
    `${t('מוכנות היום', 'Today’s readiness')}` +
    `<select id="ready"><option value="normal">` +
    `${t('רמת מוכנות: גבוהה', 'Ready to train')}` +
    `</option><option value="tired" ` +
    `${initialReadiness === 'tired' ? 'selected': ''}` +
    `>` +
    `${t('יום קל יותר', 'A lighter day')}` +
    `</option><option value="pain" ` +
    `${initialReadiness === 'pain' ? 'selected': ''}` +
    `>` +
    `${t('יש כאב — לבדיקה', 'Pain — review first')}` +
    `</option></select></label><label>` +
    `${t('מקום האימון', 'Training space')}` +
    `<select id="session-location">` +
    `${(profile.locations || []).map(l => (
      `<option value="` +
      `${esc(l.id)}` +
      `" ` +
      `${l.id === initialLocation ? 'selected': ''}` +
      `>` +
      `${esc(l.name)}` +
      `</option>`
    )).join('')}` +
    `</select></label></div><div class="session-structure-chips" role="group" aria-label="מבנה האימון">` +
    `${[['sets', 'סטים'], ['rounds', 'סבבים']].map(([id, label]) =>
      `<button type="button" class="secondary" data-structure="${id}">${label}</button>`).join('')}` +
    `</div><div class="workout-filters" id="focus-chips">` +
    `${Object.entries(focusLabels).map(( [id, label]) => (
      `<button type="button" data-focus="` +
      `${id}` +
      `" aria-pressed="` +
      `${id === focus}` +
      `">` +
      `${esc(label)}` +
      `</button>`
    )).join('')}` +
    `</div><label>סקילים באימון<select id="skill-choice">` +
    `${[ ['pull', 'משיכה'], ['push', 'דחיקה'], ['both', 'שניהם']].map(( [id, label]) => (
      `<option value="` +
      `${id}` +
      `" ` +
      `${skillChoice === id ? 'selected': ''}` +
      `>` +
      `${label}` +
      `</option>`
    )).join('')}` +
    `</select></label><div class="skill-segments" role="group" aria-label="סקילים באימון">` +
    `${[ ['pull', 'משיכה'], ['push', 'דחיקה'], ['both', 'שניהם']].map(( [id, label]) => (
      `<button type="button" class="secondary" data-skill-choice="` +
      `${id}` +
      `" aria-pressed="` +
      `${id === skillChoice}` +
      `">` +
      `${label}` +
      `</button>`
    )).join('')}` +
    `</div><label class="check-label"><input type="checkbox" id="skill-focus-override">לבחור במפורש ` +
    `סקיל ממשפחת תנועה אחרת; העומס עדיין נבדק</label><div id="preview-equipment" ` +
    `class="preview-equipment"></div></aside><div class="coach-live-plan"><div id="setup-preview" ` +
    `aria-live="polite"></div><div id="preview-approvals"></div><div id="preview-movements"></div>` +
    `<div class="preview-start"><p id="preview-start-note"></p><button id="start-now" ` +
    `class="full-width">` +
    `${icon('play', 19)}` +
    ` ` +
    `${t('מתחילים את האימון', 'Start my session')}` +
    `</button><button id="preview-pain-review" class="secondary full-width" hidden>` +
    `${t('עדכון דיווח הכאב הקודם', 'Review the earlier pain report')}` +
    `</button></div></div></div></div>`
  ));
  const $ = selector => dialog.querySelector(selector);
  if (previewOnly) {
    for (const selector of['.skill-segments', '.preview-controls', '#focus-chips', '#skill-choice', '#skill-focus-override',
    '#preview-equipment']) {
      const element = $(selector);
      (element?.closest('label') || element)?.setAttribute('hidden', '');
    }
  }
  let current = null;
  $('#skill-focus-override').onchange =() => render();
  function generate() {
    const locationId = $('#session-location').value || profile.activeLocation;
    const location = profile.locations?.find(l => l.id === locationId);
    const selectedEquipment = equipmentOverride ?? location?.equipment ?? profile.equipment;
    const p = {
      ... profile, sessionStructure: structureOverride || profile.sessionStructure, variationApprovals: approvals,
      equipment: [... selectedEquipment], locations: [ {
        id: locationId, name: location?.name || '', equipment: [... selectedEquipment]
      }]
    };
    const options = {
      skillFocusOverride: $('#skill-focus-override').checked === true, minutes: Number($('#duration').value),
      readiness: $('#ready').value, structure: structureOverride, locationId, confirmedTargets: approvals, focus, skillChoice: ['lower',
      'core'].includes(focus) && !skillChoiceExplicit ? 'none': skillChoice
    };
    let result = todayWorkout(p, options);
    // Recovery decisions take precedence even when entering through a prepared session.
    if (templateId && !result.blocked && !result.recovery) {
      const prepared = buildWorkout(templateId, p, {
        ... options, dayIndex: result.dayIndex
      });
      result = {
        ... prepared, today: result.today, rationaleHe: result.rationaleHe, rationaleEn: result.rationaleEn
      };
    }
    current = {
      plan: result, options, equipment: [... selectedEquipment]
    };
    $('#preview-equipment').innerHTML = (
      `${icon('target', 16)}` +
      ` <span>` +
      `${equipmentOverride ? t('הציוד שאישרת בבקשה: ', 'Equipment from your request: '): t('ציוד זמין: ',
      'Available equipment: ')}` +
      `${selectedEquipment.length ? selectedEquipment.map(id => esc(equipmentLabels[id]?.[lang === 'en' ? 1: 0] || id)).join(' · '): t('ללא ציוד',
      'No equipment')}` +
      `</span>` +
      `${equipmentOverride ? (
        `<button class="text-button" id="preview-reset-equipment">` +
        `${t('חזרה לציוד המקום', 'Use saved space')}` +
        `</button>`
      ): ''}`
    );
    const extras = document.createElement('div');
    extras.className = 'preview-equipment';
    extras.innerHTML = Object.entries(equipmentLabels).map(( [id, label]) => (
      `<label class="check-label"><input type="checkbox" data-extra-equipment="` +
      `${id}` +
      `" ` +
      `${selectedEquipment.includes(id) ? 'checked': ''}` +
      `>` +
      `${esc(label[lang === 'en' ? 1: 0])}` +
      `</label>`
    )).join('');
    $('#preview-equipment').append(extras);
    extras.querySelectorAll('[data-extra-equipment]').forEach(input => input.onchange =() => {
      equipmentOverride = [... extras.querySelectorAll('input:checked')].map(x => x.dataset.extraEquipment);
      render()
    });
    const reset = $('#preview-reset-equipment');
    if (reset) reset.onclick =() => {
      equipmentOverride = null;
      approvals = {
      };
      render()
    };
    return result;
  }
  function render() {
    const restore = captureView(dialog);
    try {
      const generated = generate();
      const p = savedPlan || generated;
      onPreferences?.( {
        ... current.options, equipment: [... current.equipment]
      });
      onPlanChange?.(generated);
      $('#start-now').disabled = !savedPlan && !!p.blocked;
      $('#start-now').textContent = savedPlan ? 'להמשך האימון': 'מתחילים את האימון';
      $('#preview-pain-review').hidden = !(p.blocked && p.adaptation?.status === 'review');
      if (p.blocked) {
        $('#setup-preview').innerHTML = (
          `<div class="preview-blocked">` +
          `${icon('shield', 26)}` +
          `<h3>` +
          `${t('קודם בודקים מוכנות', 'Readiness comes first')}` +
          `</h3><p>` +
          `${esc(lang === 'en' ? p.adaptation?.reasonEn || p.reason: p.reason)}` +
          `</p></div>`
        );
        $('#preview-movements').innerHTML = '';
        $('#preview-approvals').innerHTML = '';
        $('#preview-start-note').textContent = '';
        return;
      }
      const unique = [... new Map(p.blocks.filter(b => ['work', 'skill'].includes(b.phase)).map(b => [b.sourceExerciseId || b.id,
      b])).values()];
      const warm = p.blocks.filter(b => b.phase === 'warm').reduce((s, b) => s + b.seconds, 0);
      const rest = p.blocks.filter(b => b.phase === 'rest').reduce((s, b) => s + b.seconds, 0);
      $('#skill-choice').value = ['lower', 'core'].includes(focus) && !skillChoiceExplicit ? 'none': skillChoice;
      dialog.querySelectorAll('[data-structure]').forEach(button => button.onclick = () => {
    if (savedPlan) return;
    structureOverride = button.dataset.structure;
    render();
  });
  dialog.querySelectorAll('[data-skill-choice]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.skillChoice === skillChoice)));
      $('#skill-choice').onchange =() => {
        skillChoice = $('#skill-choice').value;
        skillChoiceExplicit = true;
        render()
      };
      const note = lang === 'en' ? p.rationaleEn: p.summaryHe ||
      'היום מתאמנים לפי היכולת, הציוד וההתאוששות. שומרים עתודה ועוצרים בכאב או בירידת שליטה.';
      const adaptive = lang === 'en' ? p.adaptation?.reasonEn:(p.reasonHe || p.why || p.adaptation?.reasonHe);
      $('#setup-preview').innerHTML = (
        `<div class="preview-summary ` +
        `${p.recovery ? 'is-recovery': ''}` +
        `"><div><span class="chapter-label">` +
        `${p.origin === 'coach' ? 'מבוסס על לוח מאמן' : p.recovery ? t('התאוששות לצמיחה', 'RECOVER TO GROW'): t('מותאם אליך', 'BUILT AROUND YOU')}` +
        `</span><h3>` +
        `${esc(lang === 'en' ? p.titleEn: p.titleHe || p.title)}` +
        `</h3><p>` +
        `${esc(note || '')}` +
        `</p></div><div class="preview-number"><strong>` +
        `${Math.max(1, Math.ceil((p.main_seconds ?? p.total_seconds) / 60))}` +
        `</strong><span>דקות · מתוך ` +
        `${p.requested_minutes ?? p.minutes}` +
        ` שביקשת</span></div></div>${sessionHeaderHTML(p)}<p class="session-extra-time">` +
        `${esc(extraTimeText(p))}</p>` +
        `<details class="stimulus-details"><summary>פירוט החשיפה והמאמץ</summary><p>מספר התנועות לבדו אינו מעיד על מספיק עבודה מאתגרת;
        בודקים גם מאמץ וימי אימון.</p>
        <p>תרגול ציר ירך ללא עומס הוא תרגול תנועה. אפשר לבדוק בנפרד גשר או ציר ירך ברגל אחת.</p>
        <a href="#library/exercise/single-hinge" data-chain-ex="single-hinge">הוראות ובדיקת יכולת לציר ירך ברגל אחת</a></details>` +
        `${p.structureNote ? `<p class="micro-note">${esc(p.structureNote)}</p>` : ''}` +
        `<div class="preview-budget phase-proportions"><span>` +
        `${t('חימום', 'Warm-up')}` +
        ` <b>` +
        `${Math.ceil(warm / 60)}` +
        ` ` +
        `${t('דק׳', 'min')}` +
        `</b></span><span>` +
        `${t('מנוחות', 'Rest')}` +
        ` <b>` +
        `${Math.ceil(rest / 60)}` +
        ` ` +
        `${t('דק׳', 'min')}` +
        `</b></span><span>` +
        `${t('סטים', 'Sets')}` +
        ` <b>` +
        `${p.sets || 0}` +
        `</b></span><span>` +
        `${t('זמן פנוי שבחרת', 'Your time budget')}` +
        ` <b>` +
        `${Math.ceil(p.requested_minutes ?? p.minutes)}` +
        ` ` +
        `${t('דק׳', 'min')}` +
        `</b></span></div><details class="why-session"><summary>` +
        `${icon('info', 16)}` +
        ` ` +
        `${t('פירוט', 'Details')}` +
        `</summary><p>` +
        `${esc(adaptive || '')}</p><p>${esc(painRule)}` +
        `</p>${p.legRestriction ? `<p>${esc(p.legRestriction)}</p>` : ''}` +
        `${p.missing_pull ? (
          `<p>` +
          `${t('ללא ציוד משיכה מאושר, חלק המשיכה חסר באימון.', 'Without approved pulling equipment, this session does not cover pulling.')}` +
          `</p>`
        ): ''}` +
        `${(p.skillTracks || []).some(t => t.preparationOnly) ? '<p>תרגול הכנה בלבד; ביצוע יעד הסקיל דורש בדיקה מקצועית אישית.</p>': ''}` +
        `${p.skillNote ? (
          `<p>` +
          `${esc(lang === 'en' ? 'This session builds foundations. Advanced skills require separate technique assessment.': p.skillNote)}` +
          `</p>`
        ): ''}` +
        `<small>` +
        `${t('כללי תכנון שמרניים; אינם הערכת טכניקה אישית.', 'Conservative planning rules; not an individual technique assessment.')}` +
        `</small></details>${extraRowHTML(p, 'warmup', !!savedPlan)}` +
        `${p.sessionExtras?.warmup === false && p.blocks.some(b => b.rampUp) ? `<p class="micro-note">${rampUpNotice}</p>` : ''}`
      );
      dialog.querySelectorAll('[data-structure]').forEach(button => {
        button.setAttribute('aria-pressed', String(button.dataset.structure === p.structure));
        button.disabled = !!savedPlan;
      });
      if (p.phases) {
        const budget = $('#setup-preview').querySelector('.preview-budget');
        budget.innerHTML = renderPhaseBar(p.phases);
      }
      const checkpoints = unique.map(e => progressionCheckpoint(e.id, profile.logs, {
        assessmentAt: profile.assessmentAt, conditions: {
          unit: e.unit, assistance: '', setup: '', added_load: 0, side_allocation: e.perSide ? 'total_both_sides': null
        }
      })).filter(c => {
        const e = unique.find(e => e.id === c.exerciseId);
        return c.eligible && c.suggestedTarget <=(e.unit === 'seconds' ? e.seconds: 30)
      });
      $('#preview-approvals').innerHTML = !p.planner && checkpoints.length && $('#ready').value === 'normal' && !templateId ? (
        `<section class="progression-proposals"><span class="chapter-label">` +
        `${t('צעד קטן קדימה', 'A SMALL NEXT STEP')}` +
        `</span><h3>` +
        `${t('אפשר לשקול צעד קטן קדימה', 'Consider one small step forward')}` +
        `</h3><p>` +
        `${t( (
          'שלושה אימונים בימים נפרדים באותם תנאים תומכים בהצעה. זו הצעת מינון לפי דיווח, לא אישור טכניקה. ' +
          'השינוי חל רק באימון הזה.'
        ), (
          'Three sessions on separate days under matching conditions support this proposal. It is based ' +
          'on reported work, not technique certification. Applies to this session only.'
        ))}` +
        `</p>` +
        `${checkpoints.map(c => {
          const e = exercises.find(e => e.id === c.exerciseId);
          return (
            `<label class="check-label"><input type="checkbox" data-approve-target="` +
            `${esc(c.exerciseId)}` +
            `" ` +
            `${approvals[c.exerciseId] ? 'checked': ''}` +
            `><span>` +
            `${esc(lang === 'en' ? e.en: e.he)}` +
            `: <b>` +
            `${c.currentTarget}` +
            ` → ` +
            `${c.suggestedTarget}` +
            `</b> ` +
            `${c.unit === 'seconds' ? t('שניות', 'seconds'): t('חזרות', 'reps')}` +
            `</span></label>`
          )
        }).join('')}` +
        `</section>`
      ): '';
      if (p.planner) {
        const proposals = unique.filter(e => e.progressionProposal);
        $('#preview-approvals').innerHTML = proposals.map(e => (
          `<label><input type="checkbox" data-approve-variation="` +
          `${e.id}` +
          `" ` +
          `${approvals[e.id] ? 'checked': ''}` +
          `>אישור שינוי באותה וריאציה ותנאים בלבד: ` +
          `${esc(e.he)}` +
          ` · יעד ` +
          `${e.progressionProposal.target}` +
          `. כלל עריכתי, לא אישור טכניקה.</label>`
        )).join('');
        dialog.querySelectorAll('[data-approve-variation]').forEach(input => input.onchange =() => {
          const e = proposals.find(e => e.id === input.dataset.approveVariation);
          if (input.checked) approvals[e.id] = e.progressionProposal;
          else delete approvals[e.id];
          render()
        });
      }
      dialog.querySelectorAll('[data-approve-target]').forEach(input => input.onchange =() => {
        const c = checkpoints.find(c => c.exerciseId === input.dataset.approveTarget);
        if (input.checked) approvals[c.exerciseId] = {
          target: c.suggestedTarget, evidenceLogIds: c.evidenceLogIds
        };
        else delete approvals[c.exerciseId];
        render()
      });
      $('#preview-movements').innerHTML = unique.length ? (
        `<div class="preview-plates-strip">` +
        `${unique.map(e => exerciseVisual(e, {
          compact: true, lang
        })).join('')}` +
        `</div>${roundCardsHTML(p, doseText)}<div class="preview-section-heading">` +
        `${(p.skillTracks || []).map(s => (
          `<p>` +
          `${esc(s.name || 'תרגול סקיל')}` +
          ` · שלב ` +
          `${s.stageNumber || 1}` +
          `</p>`
        )).join('')}` +
        `<h3>` +
        `${t('התנועות שלך היום', 'Your movements today')}` +
        `</h3><small>` +
        `${t('פותחים כרטיס כדי ללמוד לפני שמתחילים', 'Open a movement to learn before starting')}` +
        `</small></div>${p.circuits?.length ? '<details><summary>פירוט התרגילים והווריאציות</summary>' : ''}` +
        `<div class="preview-movement-grid">` +
        `${unique.map((e, i) => {
          const blocks = p.blocks.filter(b => ['work', 'skill'].includes(b.phase) && (b.sourceExerciseId || b.id) === (e.sourceExerciseId || e.id));
          const rest = p.blocks[p.blocks.indexOf(blocks[0]) + 1];
          return (
            `<div class="preview-movement-item"><details class="preview-movement"><summary><div class="preview-movement-art">` +
            `${exerciseVisual(e, {
              compact: true, lang
            })}` +
            `</div><div class="preview-movement-copy"><span class="chapter-label">0` +
            `${i + 1}` +
            ` · ` +
            `${esc(lang === 'en' ? e.en: e.he)}` +
            `</span><h4>` +
            `${esc(lang === 'en' ? e.en: e.he)}` +
            `</h4><p><b>` +
            `${blocks.length}` +
            ` × ` +
            `${esc(doseText(e))}` +
            `</b>` +
            `</p><p>${esc(effortText(e))}</p><small>` +
            `${rest?.phase === 'rest' ? rest.seconds + ' ' + t('שנ׳ מנוחה', 'sec rest'): t('ללא מנוחה קצובה', 'No fixed rest')}` +
            `</small><span class="preview-learn">` +
            `${t('איך מבצעים?', 'How to do it?')}` +
            ` ` +
            `${icon('chevron', 14)}` +
            `</span></div></summary><div class="preview-movement-guide"><p>` +
            `${esc(e.setup || '')}` +
            ` · ` +
            `${esc(e.assistance || '')}` +
            ` · ` +
            `${e.added_load ?? 0}` +
            ` ק״ג · ` +
            `${esc(e.range_of_motion || '')}` +
            ` · ` +
            `${esc(e.execution_standard || '')}` +
            `</p><p>${esc(doseText(e))} · ${esc(effortText(e))}</p><p>${esc(e.cue || '')}</p><ol>` +
            `${(e.instructions || [e.cue]).map(c => (
              `<li>` +
              `${esc(c)}` +
              `</li>`
            )).join('')}` +
            `</ol><p><strong>` +
            `${t('להקל: ', 'Easier: ')}` +
            `</strong>` +
            `${esc(e.easy || '')}` +
            `</p></div></details>` + variationSelectorHTML(e) + `</div>`
          )
        }).join('')}` +
        `</div>${p.circuits?.length ? '</details>' : ''}`
      ): (
        `<div class="preview-recovery">` +
        `${icon('leaf', 34)}` +
        `<h3>` +
        `${t('גם התאוששות מקדמת אותך', 'Recovery is part of progress')}` +
        `</h3><p>` +
        `${esc(p.blocks.find(b => b.phase === 'recovery')?.cue || t('תנועה נינוחה ונשימה.', 'Easy movement and breathing.'))}` +
        `</p></div>`
      );
      $('#preview-movements').innerHTML += extraRowHTML(p, 'cooldown', !!savedPlan);
      dialog.querySelectorAll('[data-session-extra]').forEach(input => input.onchange = () => {
        if (savedPlan) return;
        profile.sessionExtras = {warmup: true, cooldown: true, ...profile.sessionExtras, [input.dataset.sessionExtra]: input.checked};
        onExtrasChange?.({...profile.sessionExtras});
        render();
      });
      dialog.querySelectorAll('[data-variation-tier]').forEach(button => button.onclick = () => {
        if (savedPlan || button.disabled) return;
        const block = p.blocks.find(b => b.sourceExerciseId === button.dataset.variationSource && b.options);
        if (!block?.options.some(o => o.tier === button.dataset.variationTier && o.available)) return;
        profile.variationChoices = {...profile.variationChoices, [block.family]: button.dataset.variationTier};
        onVariationChoice?.(profile.variationChoices);
        render();
      });
      if (savedPlan) dialog.querySelectorAll('[data-variation-tier]').forEach(button => {button.disabled = true;});
      $('#preview-start-note').textContent = t('הזמן שבחרת כולל אימון ומנוחות. חימום ושחרור נוספים בנפרד.',
      'Your time covers training and rests. Warm-up and cool-down are extra.');
    } finally {
      restore();
    }
  }
  dialog.querySelectorAll('[data-skill-choice]').forEach(button => button.onclick =() => {
    skillChoice = button.dataset.skillChoice;
    skillChoiceExplicit = true;
    approvals = {
    };
    render()
  });
  dialog.querySelectorAll('[data-duration]').forEach(button => button.onclick =() => {
    $('#duration').value = button.dataset.duration;
    dialog.querySelectorAll('[data-duration]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
    approvals = {
    };
    render()
  });
  for (const id of['#duration', '#ready', '#session-location']) $(id).onchange =() => {
    approvals = {
    };
    if (id === '#session-location') equipmentOverride = null;
    render()
  };
  dialog.querySelectorAll('[data-focus]').forEach(button => button.onclick =() => {
    focus = button.dataset.focus;
    dialog.querySelectorAll('[data-focus]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.focus === focus)));
    render()
  });
  $('#preview-pain-review').onclick =() => {
    dialog.close();
    onPainReview?.()
  };
  $('#start-now').onclick =() => {
    if (savedPlan) {
      onStart( {
        ... current, plan: savedPlan
      });
      return;
    }
    const p = generate();
    if (p.blocked || !p.blocks?.length) return;
    onStart( {
      ... current, plannedDate: seed.plannedDate ?? p.today?.date
    });
  };
  render();
  return dialog;
}
