import {
  localDateKey
}
from '../calendar.js?v=31';
import {
  capabilityOffer
}
from '../capability-check.js?v=31';
import {
  openCoachPreview
}
from '../coach-flow.js?v=31';
import {
  todayWorkout
}
from '../coach-insights.js?v=31';
import {
  renderDailyHome
}
from '../daily-home.js?v=31';
import {
  checkInReadiness, dailyDate
}
from '../daily-insights.js?v=31';
import {
  workouts
}
from '../data/workouts.js?v=31';
import {
  exercises, plan
}
from '../engine.js?v=31';
import {
  exerciseVisual
}
from '../exercise-visuals.js?v=31';
import {
  bindHome
}
from '../home-controller.js?v=31';
import {
  bindMedia
}
from '../media.js?v=31';
import {
  renderPhaseBar
}
from '../phase-bar.js?v=31';
import {
  currentSessionOptions, refreshSavedSession, sessionInputs
}
from '../session-refresh.js?v=31';
import {
  SESSION_DURATIONS, sessionMinutes
}
from '../session-settings.js?v=31';
import {
  selectSkill, skillSelections
}
from '../skill-progress.js?v=31';
import {
  escapeHTML as esc, icon
}
from '../ui.js?v=31';
import {
  buildWorkout
}
from '../workout-engine.js?v=31';
import {
  go, render
}
from '../router.js?v=31';
import {
  capabilityIntro, painReview
}
from '../screens/capability.js?v=31';
import {
  openLesson
}
from '../screens/home.js?v=31';
import {
  renderLibraryResults
}
from '../screens/library.js?v=31';
import {
  startOnboarding
}
from '../screens/onboarding.js?v=31';
import {
  bindNextSkill
}
from '../screens/skills.js?v=31';
import {
  $, $$, dayIndex, he, on, pageHead, t, tx, user
}
from '../shared.js?v=31';
import {
  confirmAction, modal, shell, toast
}
from '../shell.js?v=31';
import {
  save, state
}
from '../state.js?v=31';
function planUpdateNotice() {
  return('<aside id="saved-plan-notice" class="plan-update-notice" role="status"><p>התוכנית עודכנה — ' +
  'להחיל על האימון הבא</p><button type="button" class="secondary" id="apply-plan-now">להחיל עכשיו' + '</button></aside>');
}
function bindPlanUpdate() {
  on('#apply-plan-now',() => confirmAction('להחיל את התוכנית עכשיו?',
  'הסטים שתועדו יישמרו. התרגילים שנותרו ייבנו מחדש לפי היכולת, הציוד והמוכנות המעודכנים.',() => {
    const result = savedPlanState(user(), {
      ... state.coachDraft
    }, true);
    if (result.blocked) {
      toast(result.blocked.reason || 'התכנון נעצר לפי כללי הבטיחות.', 'error');
      return;
    }
    $('#modal')?.close();
    dashboard();
  }, 'להחיל עכשיו'));
}
function savedPlanState(u, options, applyNow = false) {
  const session = u.session;
  if (!session) return {
    changed: false, pending: false
  };
  const effective = currentSessionOptions(u, options || {
    ... session.planningOptions, ... u.coachPreferences, minutes: u.coachPreferences?.minutes || u.minutes,
    locationId: u.coachPreferences?.locationId || u.activeLocation, readiness: checkInReadiness(u.checkIns?.[dailyDate()])
  }, session.inputFingerprint);
  if (options) Object.assign(options, effective);
  const location = u.locations?.find(l => l.id === effective.locationId);
  const equipment = effective.equipment ?? location?.equipment ?? u.equipment;
  const preview = {
    ... u, equipment, locations: u.locations?.map(l => l.id === effective.locationId ? {
      ... l, equipment
    }: l)
  };
  const fingerprint = sessionInputs(u, {
    ... effective, equipment
  });
  const previous = structuredClone(session);
  const result = refreshSavedSession(session, {
    fingerprint, equipment, options: effective, applyNow, generate:() => {
      const generated = todayWorkout(preview, effective);
      return session.plan.templateId && !generated.blocked && !generated.recovery ? buildWorkout(session.plan.templateId,
      preview, {
        ... effective, dayIndex: generated.dayIndex
      }): generated;
    }
  });
  if (result.changed) {
    const priorPreferences = u.coachPreferences;
    u.coachPreferences = {
      ... priorPreferences, ... effective
    };
    if (!save()) {
      u.session = previous;
      u.coachPreferences = priorPreferences;
      return {
        changed: false, pending: false
      };
    }
    if (state.coachDraft?.profileId === u.id) Object.assign(state.coachDraft, effective);
  }
  return result;
}
function dashboard() {
  const u = user();
  if (state.coachDraft?.profileId !== u.id) state.coachDraft = {
    profileId: u.id, ...(u.coachPreferences || {
    }), readiness: 'normal'
  };
  const minutes = SESSION_DURATIONS.includes(sessionMinutes(state.coachDraft.minutes)) ? sessionMinutes(state.coachDraft.minutes): sessionMinutes
  (u.minutes);
  const locationId = u.locations?.some(l => l.id === state.coachDraft.locationId) ? state.coachDraft.locationId: u.activeLocation;
  const dailyReadiness = checkInReadiness(u.checkIns?.[dailyDate()]);
  const options = {
    ... state.coachDraft, minutes, locationId, focus: state.coachDraft.focus || 'auto', readiness: state.coachDraft.readiness === 'pain' ? 'pain'
    : dailyReadiness === 'tired' ? 'tired': state.coachDraft.readiness || 'normal'
  };
  const refresh = savedPlanState(u, options);
  const previewProfile = options.equipment ? {
    ... u, equipment: options.equipment, locations: u.locations?.map(l => l.id === options.locationId ? {
      ... l, equipment: options.equipment
    }: l)
  }: u;
  const generated = refresh.blocked || todayWorkout(previewProfile, options);
  const p = u.session && !generated.blocked ? {
    ... u.session.plan, rationaleHe: 'זהו האימון השמור שלך. נמשיך מאותו מקטע ובאותו ציוד.', rationaleEn:
    'This is your saved session. Resume the same block with the same equipment.'
  }: generated;
  if (p.blocked && state.page === 'coach') return blocked(p.reason, p.adaptation);
  shell((refresh.pending ? planUpdateNotice(): '') + renderDailyHome( {
    profile: u, todayPlan: p, screen: state.page === 'coach' ? 'coach': 'home', lang: he() ? 'he': 'en'
  }) +(state.page === 'coach' ? capabilityOffer(u): ''));
  if (state.page === 'coach' && window.matchMedia('(min-width: 1024px)').matches) {
    const host = document.createElement('section');
    host.className = 'desktop-coach-editor';
    $('.coach-page').insertBefore(host, $('.recent-sessions'));
    Object.assign(state.coachDraft, options);
    mountCoachEditor(u, options, host);
  }
  $$('[data-capability]').forEach(b => b.onclick = capabilityIntro);
  if (state.page !== 'coach') {
    bindHome( {
      profile: u, save, render: dashboard, go, modal, toast, onCoach: readiness => {
        state.coachDraft.readiness = readiness;
        go('coach')
      }
    });
    bindCommon();
    return
  }
  on('#daily-start',() => u.session ? go('work'): sessionSetup(p, {
    ... state.coachDraft, minutes, locationId, previewOnly: true
  }));
  on('#daily-adjust',() => sessionSetup(p, {
    ... state.coachDraft, minutes, locationId
  }));
  bindCommon();
}
function bindCommon() {
  bindPlanUpdate();
  bindNextSkill();
  on('#all-skill-types',() => {
    state.skillPickerType = '';
    renderLibraryResults()
  });
  on('#save-skills',() => {
    for (const type of['pull', 'push']) selectSkill(user(),($('#profile-' + type + '-skill')?.value ?? skillSelections(user())[type]));
    save();
    toast('בחירת הסקילים נשמרה');
  });
  bindMedia(document);
  $$('[data-lesson]').forEach(b => b.onclick =() => openLesson(b.dataset.lesson));
  $$('[data-page]').forEach(b => b.onclick =() => go(b.dataset.page));
  $$('[data-exercise]').forEach(b => b.onclick =() => go('library/exercise/' + encodeURIComponent(b.dataset.exercise)));
  $$('[data-skill]').forEach(b => b.onclick =() => go('skills/' + encodeURIComponent(b.dataset.skill)))
}
function blocked(reason, adaptation) {
  shell(( (
    `${pageHead(t('דרך שמתאימה לך', 'A PATH THAT FITS YOU'), t('מתחילים בהתאמה נכונה.', 'Start with the right support.'))}`
  ) + `<div class="empty-state"><div class="empty-icon">` + (
    `${icon('shield', 42)}`
  ) + `</div><h2>` + (
    `${t('כדאי לבנות את האימון עם איש מקצוע', 'Build this plan with professional support')}`
  ) + `</h2><p>` + (
    `${esc(reason || t('לבחור ימים ולהשלים פרופיל כדי ליצור תוכנית.', 'Complete your profile to create a plan.'))}`
  ) + `</p>` + (
    `${adaptation?.status === 'review' ?(`<button id="pain-review">` + (
      `${t('עדכון מצב וחזרה לאימון', 'Review my return to training')}`
    ) + `</button>`):(`<button id="edit-blocked">` + (
      `${t('לפרופיל שלי', 'My profile')}`
    ) + `</button>`)}`
  ) + `<button class="secondary" data-page="library">` + (
    `${t('לספריית הידע', 'Browse the library')}`
  ) + `</button></div>`));
  on('#edit-blocked',() => startOnboarding(true));
  on('#pain-review', painReview);
  bindCommon()
}
const formatLabels = {
  sets: ['כוח', 'Strength'], interval: ['אינטרוולים', 'Intervals'], tabata: ['טבטה 20/10', 'Tabata 20/10'],
  emom: ['כל דקה', 'EMOM'], circuit: ['סבבים', 'Circuit'], mobility: ['תנועה קלה', 'Recovery'], amrap: ['סבבים באיכות',
  'AMRAP'], skill: ['יום סקיל', 'Skill day']
};
function recipeDetail(id) {
  const w = workouts.find(w => w.id === id);
  if (!w) return;
  const u = user(), p = u ? buildWorkout(id, u, {
    readiness: 'normal', minutes: w.minutes
  }): null;
  const moves = p && !p.blocked ? p.blocks.filter(b => ['work', 'skill'].includes(b.phase)).filter((b,
  i, a) => a.findIndex(x => x.id === b.id) === i): [];
  modal((`<span class="pill">` + (
    `${tx(formatLabels[w.format])}`
  ) + `</span><h2>` + (
    `${esc(he() ? w.he: w.en)}`
  ) + `</h2>` + (
    `${p && !p.blocked ?(`<p class="recipe-meta">` + (
      `${icon('clock', 18)}`
    ) + ` ` + (
      `${Math.ceil(p.total_seconds / 60)}`
    ) + ` ` + (
      `${t('דקות מתוכננות', 'planned minutes')}`
    ) + `</p>`): ''}`
  ) + `<p>` + (
    `${esc(he() ? w.description: w.descriptionEn || w.en)}`
  ) + `</p><p class="micro-note">` + (
    `${t('הזמן כולל חימום, מנוחות וסיום. אפשר לעצור ולהאריך מנוחה בכל שלב.',
    'The time includes warm-up, rests and cool-down. Pause or extend rest at any point.')}`
  ) + `</p>` + (
    `${w.note ?(`<p class="notice">` + (
      `${esc(w.note)}`
    ) + `</p>`): ''}`
  ) + (
    `${p?.blocked ?(`<p class="notice">` + (
      `${esc(p.reason)}`
    ) + `</p>`): moves.length ?(`<h3>` + (
      `${t('התנועות שלך באימון', 'Your movements')}`
    ) + `</h3>` + (
      `${moves.map((e, i) => exerciseRow(e, i)).join('')}`
    )): ''}`
  ) + `<button class="full-width" id="choose-recipe">` + (
    `${!u ? t('מתאימים את האימון אליי', 'Personalize this session'): p?.blocked ? t('לעדכון הפרופיל', 'Update profile'): t('התחלת האימון הזה',
    'Start this workout')}`
  ) + ` ` + (
    `${icon('arrow', 18)}`
  ) + `</button>`));
  bindCommon();
  on('#choose-recipe',() => {
    $('#modal').close();
    if (!u) {
      state.pendingRecipe = id;
      startOnboarding();
      return
    }
    if (p.blocked) {
      startOnboarding(true);
      return
    }
    sessionSetup( {
      ... p, dayIndex: dayIndex(), date: localDateKey()
    })
  })
}
function coachPreviewOptions(u, seed = {
}) {
  return {
    profile: u, lang: 'he', previewOnly: seed.previewOnly === true, seed, onPainReview: painReview, onPreferences: preferences => {
      u.coachPreferences = {
        ... preferences
      };
      Object.assign(state.coachDraft || {
      }, preferences);
      save()
    }, onStart:( {
      plan: pp, options, equipment, plannedDate
    }) => {
      if (u.session?.sets?.length) {
        go('work');
        return;
      }
      const previous = structuredClone(u.coachPreferences || {
      }), previousSession = u.session;
      u.coachPreferences = {
        ... options, equipment: [... equipment]
      };
      u.session = {
        id: crypto.randomUUID(), plan: structuredClone(pp), index: 0, sets: [], skipped: [], timer: {
          left: pp.blocks[0].seconds, running: false, started: Date.now()
        }, started_at: new Date().toISOString(), scheduled_date: localDateKey(), planned_date: plannedDate || localDateKey(),
        location_id: options.locationId, equipment: [... equipment], readiness: options.readiness, draft: {
        }, notifications: false, planningOptions: {
          ... options
        }, inputFingerprint: sessionInputs(u, {
          ... options, equipment
        })
      };
      if (!save()) {
        u.session = previousSession;
        u.coachPreferences = previous;
        return;
      }
      $('#modal')?.close();
      go('work');
    }
  };
}
function mountCoachEditor(u, options, host) {
  openCoachPreview( {
    ... coachPreviewOptions(u, options), savedPlan: u.session?.sets?.length ? u.session.plan: null, onPlanChange:() => {
      const result = savedPlanState(u, {
        ... state.coachDraft
      });
      let notice = $('#saved-plan-notice');
      if (result.pending && !notice) {
        host.insertAdjacentHTML('afterbegin', planUpdateNotice());
        bindPlanUpdate();
      }
    }, modal: html => {
      host.innerHTML = html;
      host.close =() => {
      };
      return host;
    }
  });
}
function sessionSetup(p, seed = {
}) {
  const u = user(), triggerId = document.activeElement?.id;
  if (u.session) return confirmAction(t('יש אימון פתוח', 'A session is in progress'), t('אפשר להמשיך בלי לאבד את הביצוע שכבר נשמר.',
  'Resume without losing the work already logged.'),() => go('work'), t('המשך האימון', 'Resume session'));
  const dialog = openCoachPreview( {
    ... coachPreviewOptions(u, {
      minutes: p?.requested_minutes || p?.minutes, plannedDate: p?.date, ... seed, readiness: seed.readiness === 'pain' ? 'pain':
      checkInReadiness(u.checkIns?.[dailyDate()]) === 'tired' ? 'tired': seed.readiness || 'normal'
    }), templateId: p?.templateId, modal
  });
  dialog.addEventListener('close',() => {
    if (! ['home', 'coach'].includes(state.page)) return;
    const y = window.scrollY;
    dashboard();
    window.scrollTo( {
      top: y, behavior: 'instant'
    });
    document.getElementById(triggerId)?.focus( {
      preventScroll: true
    })
  }, {
    once: true
  });
}
function workoutVisualSummary(w) {
  const resolve = id =>( {
    'push-choice': 'incline-push', 'pull-choice': 'row', 'pull-optional': 'row', 'core-choice': 'deadbug'
  })[id] || id;
  return(`<div class="workout-summary">` + (
    `${renderPhaseBar(w.phases)}`
  ) + `<div class="workout-thumbnails">` + (
    `${w.moves.slice(0, 3).map(id => exerciseVisual(exercises.find(e => e.id === resolve(id)), {
      compact: true, lang: he() ? 'he': 'en'
    })).join('')}`
  ) + `</div></div>`);
}
export {
  planUpdateNotice, bindPlanUpdate, savedPlanState, dashboard, bindCommon, blocked, formatLabels, recipeDetail,
  coachPreviewOptions, mountCoachEditor, sessionSetup, workoutVisualSummary
};
