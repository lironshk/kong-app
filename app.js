import {installTour, isTourActive} from './tour.js?v=31';
import {
  BRAND_NAME
}
from './brand.js?v=31';
import {
  initializeState, state
}
from './state.js?v=31';
import {
  initializeRouter, render, go
}
from './router.js?v=31';
import {
  sessionWakeLock, toast, shell, modal
}
from './shell.js?v=31';
import {
  $, $$, t, user
}
from './shared.js?v=31';
import {
  captureDraft, tick
}
from './screens/player.js?v=31';
import {
  save
}
from './state.js?v=31';
import {
  dashboard
}
from './screens/coach.js?v=31';
initializeState();
installTour({state, user, save, go, render, shell, modal, schedule: setTimeout});
initializeRouter();
setInterval(() => {if (!isTourActive()) tick();}, 250);
window.addEventListener('pagehide',() => {
  if (isTourActive()) return;
  captureDraft();
  save()
});
document.addEventListener('visibilitychange',() => {
  if (isTourActive()) return;
  sessionWakeLock(state.page === 'work' && !state.finishMode && !document.hidden);
  if (document.hidden) {
    captureDraft();
    save()
  } else tick()
});
window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  state.installPrompt = e;
  document.body.classList.add('install-available')
});
window.addEventListener('appinstalled',() => {
  state.installPrompt = null;
  toast(t(BRAND_NAME + ' נוספה למסך הבית שלך.', BRAND_NAME + ' was added to your home screen.'))
});
if ('serviceWorker' in navigator) navigator.serviceWorker.register(new URL('./sw.js', import.meta.url),
{
  scope: new URL('./', import.meta.url).pathname, updateViaCache: 'none'
}).then(reg => {
  reg.update().catch (() => {
  })
}).catch (() => {
});
window.addEventListener('online',() => {
  $$('.online-badge').forEach(x => x.textContent = t('מקומי · נשמר במכשיר', 'Local · saved on device'))
});
window.addEventListener('offline',() => {
  $$('.online-badge').forEach(x => x.textContent = t('ללא רשת', 'Offline'))
});
render();
if ('serviceWorker' in navigator) {
  let controlled = !!navigator.serviceWorker.controller;
  navigator.serviceWorker.addEventListener('controllerchange',() => {
    if (controlled && state.page !== 'work') {
      toast('גרסה חדשה זמינה — לרענן');
      const el = $('#toast');
      clearTimeout(toast.timeout);
      const button = document.createElement('button');
      button.textContent = 'לרענן';
      button.onclick =() => location.reload();
      el.append(' ', button);
    }
    controlled = true;
  });
}
window.matchMedia('(min-width: 1024px)').addEventListener('change',() => {
  if (state.page === 'coach' && !isTourActive()) dashboard();
});
