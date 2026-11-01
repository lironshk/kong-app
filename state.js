import {isTourActive} from './tour.js?v=32';
import {trainingStyle, trainingDays} from './session-structure.js?v=32';
import {
  emptyFilters
}
from './library-view.js?v=32';
import {
  load, persist
}
from './store.js?v=32';
import {
  t
}
from './shared.js?v=32';
import {
  toast
}
from './shell.js?v=32';
const state = {
  db: null, page: 'home', selectedDay: null, weekOffset: 0, libraryTab: 'exercises', libraryQuery: '',
  archive: null, onboard: null, onboardStep: 0,
  editing: false, installPrompt: null, finishMode: false, sourceCache: null, workoutLevel: 'all', librarySort: 'relevant',
  libraryArea: 'exercises', libraryFilterSet: emptyFilters(), librarySaved: false, libraryDraft: null,
  journeyProfile: false, pendingRecipe: null, coachDraft: null, boardUrl: null,
  skillPickerType: ''
};
function initializeState() {
  state.db = load();
  return state;
}
function save() {
  if (isTourActive()) return true;
  for (const profile of state.db?.users || []) {
    profile.trainingStyle = trainingStyle(profile);
    profile.dedicatedLegDay = profile.dedicatedLegDay === true && trainingDays(profile) >= 3;
    profile.sessionStructure ||= 'mixed';
    profile.sessionExtras = {warmup: true, cooldown: true, ...profile.sessionExtras};
  }
  if (!persist(state.db)) {
    toast(t('לא ניתן לשמור בדפדפן. לייצא את הנתונים לפני סגירה.', 'Storage unavailable. Export your data before closing.'),
    'error');
    return false
  }
  return true
}
export {
  state, initializeState, save
};
