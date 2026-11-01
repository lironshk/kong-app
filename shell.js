import {isTourActive} from './tour.js?v=32';
import {
  captureView
}
from './view-state.js?v=32';
import {
  BRAND_NAME, WORDMARK_SVG
}
from './brand.js?v=32';
import {
  createWakeLock
}
from './focus-player.js?v=32';
import {
  exportRecovery
}
from './store.js?v=32';
import {
  escapeHTML as esc, icon
}
from './ui.js?v=32';
import {
  go, render
}
from './router.js?v=32';
import {
  onboarding, startOnboarding
}
from './screens/onboarding.js?v=32';
import {
  captureDraft
}
from './screens/player.js?v=32';
import {
  privacy, profileMenu, showInstall
}
from './screens/profile.js?v=32';
import {
  $, $$, he, on, t, user
}
from './shared.js?v=32';
import {
  save, state
}
from './state.js?v=32';
const sessionWakeLock = createWakeLock();
const navItems = [ ['home', 'home', 'בית', 'Home'], ['coach', 'clock', 'מאמן', 'Coach'], ['library',
'library', 'ספרייה', 'Library'], ['progress', 'chart', 'התקדמות', 'Progress']];
function shell(content, {
  onboarding = false
} = {
}) {
  const u = user();
  const activePage=state.page==='skills'&&u?'library':state.page;
  const focusMode = state.page === 'work';
  sessionWakeLock(focusMode && !state.finishMode && !document.hidden && !isTourActive());
  document.documentElement.lang = he() ? 'he': 'en';
  document.documentElement.dir = he() ? 'rtl': 'ltr';
  document.title =( (
    `${BRAND_NAME}`
  ) + ` — ` + (
    `${t('כוח בשקט.', 'Quiet strength.')}`
  ));
  const nav = navItems.map(( [id, ic, a, b]) =>(`<button class="nav-item ` + (
    `${activePage ===(id === 'progress' ? 'history': id) ? 'active': ''}`
  ) + `" data-page="` + (
    `${id}`
  ) + `" aria-label="` + (
    `${t(a, b)}`
  ) + `" ` + (
    `${activePage ===(id === 'progress' ? 'history': id) ? 'aria-current="page"': ''}`
  ) + `><span class="nav-icon">` + (
    `${icon(ic)}`
  ) + `</span><span>` + (
    `${t(a, b)}`
  ) + `</span></button>`)).join('');
  const main = $('#main'), root = $('.app-shell');
  const restore = main ? captureView(document):() => {
  };
  if (!main || root.classList.contains('live-session') !== focusMode) {
    $('#app').innerHTML =(`<a class="skip-link" href="#main">` + (
      `${t('לתוכן הראשי', 'Skip to content')}`
    ) + `</a><div class="app-shell ` + (
      `${state.page === 'work' ? 'live-session': ''}`
    ) + ` ` + (
      `${onboarding ? 'onboarding': ''}`
    ) + ` ` + (
      `${state.page === 'discover' ? 'campaign-home': ''}`
    ) + `"><div class="main-area">` + (
      `${focusMode ? '':(`<header class="topbar"><a href="#home" class="wordmark" data-home aria-label="KONG">` + (
        `${WORDMARK_SVG}`
      ) + `</a><nav class="desktop-nav" aria-label="` + (
        `${t('ניווט ראשי', 'Main navigation')}`
      ) + `">` + (
        `${nav}`
      ) + `</nav><button class="profile-avatar" id="profile-menu" aria-label="` + (
        `${t('פרופיל והגדרות', 'Profile and settings')}`
      ) + `">` + (
        `${u ? esc(u.name.charAt(0)): icon('user')}`
      ) + `</button></header>`)}`
    ) + `<main id="main" tabindex="-1">` + (
      `${recoveryBanner()}`
    ) + (
      `${content}`
    ) + `</main></div>` + (
      `${focusMode ? '':(`<nav class="bottom-nav" aria-label="` + (
        `${t('ניווט במובייל', 'Mobile navigation')}`
      ) + `">` + (
        `${nav}`
      ) + `</nav>`)}`
    ) + `</div><dialog id="modal"></dialog>`);
  } else {
    root.className =(`app-shell ` + (
      `${focusMode ? 'live-session': ''}`
    ) + ` ` + (
      `${onboarding ? 'onboarding': ''}`
    ) + ` ` + (
      `${state.page === 'discover' ? 'campaign-home': ''}`
    ));
    main.innerHTML = recoveryBanner() + content;
    $$('[data-page]').filter(button => button.closest('.desktop-nav') || button.closest('.bottom-nav')).forEach(button => {
      const id = button.dataset.page, active = activePage ===(id === 'progress' ? 'history': id);
      button.className = 'nav-item ' +(active ? 'active': '');
      if (active) button.setAttribute('aria-current', 'page');
      else button.removeAttribute('aria-current');
    });
    const avatar = $('#profile-menu');
    if (avatar) avatar.innerHTML = u ? esc(u.name.charAt(0)): icon('user');
  }
  restore();
  $$('[data-page]').forEach(b => b.onclick =() => go(b.dataset.page));
  $$('[data-home]').forEach(b => b.onclick = e => {
    e.preventDefault();
    go('home')
  });
  on('#lang',() => {
    captureDraft();
    state.db.lang = he() ? 'en': 'he';
    save();
    render()
  });
  on('#new-profile',() => startOnboarding());
  on('#profile-menu', profileMenu);
  on('#install-side', showInstall);
  on('#privacy', privacy);
  on('#recovery-export',() => {
    if (!exportRecovery()) toast(t('אין קובץ שחזור זמין.', 'No recovery file is available.'), 'error')
  });
}
function recoveryBanner() {
  return state.db.recovery?.needed ?(`<aside class="recovery-banner" role="status"><div>` + (
    `${icon('shield', 23)}`
  ) + `<span><strong>` + (
    `${t('מצאנו נתונים ישנים שדורשים בדיקה.', 'Older data needs a recovery check.')}`
  ) + `</strong><small>` + (
    `${t('המקור נשמר לשחזור. ייצוא קובץ מאפשר לבדוק אותו בלי לאבד מידע.', 'The original is preserved. Export it for review without losing information.')}`
  ) + (
    `${state.db.recovery.canPersist === false ? ' ' + t('שמירה חדשה חסומה כדי להגן על המקור.', 'New saves are blocked to protect the original.'): ''}`
  ) + `</small></span></div><button class="secondary" id="recovery-export">` + (
    `${icon('download', 16)}`
  ) + ` ` + (
    `${t('ייצוא קובץ השחזור', 'Export recovery file')}`
  ) + `</button></aside>`): ''
}
function modal(content, {
  wide = false
} = {
}) {
  const trigger = document.activeElement;
  const d = $('#modal');
  d.classList.toggle('wide-modal', wide);
  d.innerHTML =(`<div class="modal-header"><span class="eyebrow">` + (
    `${BRAND_NAME}`
  ) + `</span><button class="icon-button" id="modal-close" aria-label="` + (
    `${t('סגירה', 'Close')}`
  ) + `">` + (
    `${icon('close')}`
  ) + `</button></div>` + (
    `${content}`
  ));
  on('#modal-close',() => d.close());
  d.onclick = e => {
    if (e.target === d) d.close()
  };
  d.onclose =() => {
    d.querySelectorAll('iframe').forEach(f => f.remove());
    if (trigger?.isConnected) trigger.focus( {
      preventScroll: true
    })
  };
  d.showModal();
  return d
}
function confirmAction(title, message, action, label = t('אישור', 'Confirm')) {
  modal((`<h2>` + (
    `${title}`
  ) + `</h2><p>` + (
    `${message}`
  ) + `</p><div class="row"><button id="confirm-action" class="danger">` + (
    `${label}`
  ) + `</button><button id="cancel-action" class="secondary">` + (
    `${t('ביטול', 'Cancel')}`
  ) + `</button></div>`));
  on('#cancel-action',() => $('#modal').close());
  on('#confirm-action',() => {
    $('#modal').close();
    action()
  })
}
function toast(message, type = 'success') {
  let el = $('#toast');
  if (!el) {
    el = document.createElement('div');
    el.id = 'toast';
    el.setAttribute('role', 'status');
    document.body.append(el)
  }
  el.className = 'toast ' + type;
  el.textContent = message;
  clearTimeout(toast.timeout);
  toast.timeout = setTimeout(() => el.remove(), 4500)
}
export {
  sessionWakeLock, navItems, shell, recoveryBanner, modal, confirmAction, toast
};
