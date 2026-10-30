import {
  emptyFilters
}
from './library-view.js?v=31';
import {
  load, persist
}
from './store.js?v=31';
import {
  t
}
from './shared.js?v=31';
import {
  toast
}
from './shell.js?v=31';
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
