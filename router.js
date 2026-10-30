import {exercises} from './data/exercises.js?v=31';
import {skills} from './data/skills.js?v=31';
import {shell} from './shell.js?v=31';
import {
  bindEditorial, destinations
}
from './screens/home.js?v=31';
import {
  state
}
from './state.js?v=31';
import {
  $, user, pageHead, t
}
from './shared.js?v=31';
import {
  captureView
}
from './view-state.js?v=31';
import {
  dashboard
}
from './screens/coach.js?v=31';
import {
  landing, home
}
from './screens/home.js?v=31';
import {
  library, exerciseDetail
}
from './screens/library.js?v=31';
import {
  onboarding, startOnboarding
}
from './screens/onboarding.js?v=31';
import {
  captureDraft, work
}
from './screens/player.js?v=31';
import {
  research, settings
}
from './screens/profile.js?v=31';
import {
  history as progress
}
from './screens/progress.js?v=31';
import {
  skillDetail
}
from './screens/skills.js?v=31';
const aliases = {
  today: 'home', history: 'progress', workouts: 'library', program: 'coach', settings: 'profile', research: 'profile'
};
const pages = {
  home: 'home', coach: 'coach', work: 'work', library: 'library', skills: 'skills', progress: 'history',
  profile: 'settings'
};
export function resolveRoute(hash, {
  hasSession = false, section = null
} = {
}) {
  const raw = hash.replace(/^#/, ''), path = aliases[raw] || raw;
  const match = /^(library\/exercise|skills)\/([^/]+)$/.exec(path);
  let route;
  if (match) {
    let id;
    try {
      id = decodeURIComponent(match[2]);
    } catch {
      return resolveRoute('#home');
    }
    const catalogue=match[1]==='skills'?skills:exercises;
    if(!catalogue.some(item=>item.id===id))return resolveRoute('#home');
    route = {
      path, page: 'library', detail: match[1] === 'skills' ? 'skill': 'exercise', id
    };
  } else if (Object.hasOwn(pages, path)) route = {
    path, page: pages[path]
  };
  else route = {
    path: 'home', page: 'home'
  };
  if (route.path === 'work' && !hasSession) route = {
    path: 'coach', page: 'coach'
  };
  if (route.path === 'profile' &&(raw === 'research' || section === 'sources')) route.section = 'sources';
  return route;
}
// History/scroll boundaries are injected so route tests execute the production controller.
export function createHistoryRouter( {
  win, location, history, state, hasSession, beforeNavigate, render, focusMain
}) {
  let handling = false;
  const resolve = hash => resolveRoute(hash, {
    hasSession: hasSession(), section: history.state?.section
  });
  function apply(route) {
    state.route = route.path;
    state.routeDetail = route.detail;
    state.routeId = route.id;
    state.profileSection = route.section;
    state.page = route.page;
    state.finishMode = false;
  }
  function canonicalize(route) {
    const hash = '#' + route.path;
    if (location.hash !== hash) history.replaceState( {
      ... history.state, page: route.page, section: route.section
    }, '', hash);
  }
  function open(route, scrollY = 0) {
    handling = true;
    try {
      beforeNavigate();
      apply(route);
      canonicalize(route);
      render();
      focusMain();
      win.scrollTo( {
        top: scrollY, behavior: 'instant'
      });
    } finally {
      handling = false;
    }
  }
  function go(destination, {
    replace = false
  } = {
  }) {
    const route = resolveRoute('#' + destination.replace(/^#/, ''), {
      hasSession: hasSession()
    });
    history.replaceState( {
      ... history.state, scrollY: win.scrollY
    }, '');
    if (location.hash !== '#' + route.path || route.section !== state.profileSection) {
      history[replace ? 'replaceState': 'pushState']( {
        page: route.page, scrollY: 0, section: route.section
      }, '', '#' + route.path);
    }
    if (route.path === 'home') {
      state.weekOffset = 0;
      state.selectedDay = null;
    }
    open(route);
  }
  function start() {
    history.scrollRestoration = 'manual';
    apply(resolve(location.hash));
    canonicalize(resolve(location.hash));
    win.addEventListener('scroll',() => {
      if (!handling) history.replaceState( {
        ... history.state, scrollY: win.scrollY
      }, '');
    }, {
      passive: true
    });
    win.addEventListener('popstate', event => open(resolve(location.hash), event.state?.scrollY || 0));
    win.addEventListener('hashchange',() => {
      const route = resolve(location.hash);
      canonicalize(route);
      if (route.path !== state.route || route.section !== state.profileSection) open(route);
    });
  }
  return {
    go, start
  };
}
let controller;
export function initializeRouter() {
  controller = createHistoryRouter( {
    win: window, location, history: window.history, state, hasSession:() => !!user()?.session, beforeNavigate:() => {
      captureDraft();
      const dialog=$('#modal');
      if(dialog){dialog.onclose=null;dialog.querySelectorAll('iframe').forEach(frame=>frame.remove());dialog.close();}
    }, render, focusMain:() => $('#main')?.focus( {
      preventScroll: true
    })
  });
  controller.start();
}
export function go(destination, options) {
  return controller.go(destination, options);
}
export function routeFromHash() {
  return resolveRoute(location.hash, {
    hasSession: !!user()?.session
  }).page;
}
export function renderPage() {
  if (state.page === 'discover') return landing();
  if (state.page === 'onboarding') return onboarding();
  if (state.page === 'skills' && !user()) {
    shell((`<div class="premium-home">` + (
      `${pageHead(t('האפשרות הבאה שלך', 'YOUR NEXT POSSIBILITY'), t('כל יכולת מתחילה בדרך.', 'Every skill begins with a path.'),
      t('מפות למידה אמיתיות. בוחרים מה מסקרן ובונים בסיס.', 'Real learning maps. Follow your curiosity and build the foundations.'))}`
    ) + (
      `${destinations()}`
    ) + `</div>`));
    bindEditorial();
    return;
  }
  if (state.page === 'library' || state.page === 'skills') {
    if (state.route === 'skills' || state.routeDetail === 'skill') {
      state.libraryQuery = '';
      state.libraryArea = 'skills';
      state.libraryTab = 'exercises';
    }
    library();
    if (state.routeDetail === 'exercise') exerciseDetail(state.routeId);
    if (state.routeDetail === 'skill') skillDetail(state.routeId);
    if(state.routeDetail){
      const dialog=$('#modal'),route=state.route,onclose=dialog.onclose;
      const parent=state.routeDetail==='skill'?'skills':'library';
      dialog.onclose=()=>{onclose?.();if(state.route===route)go(parent,{replace:true});};
    }
    return;
  }
  if (state.page === 'research' || state.profileSection === 'sources') return research();
  if (!user()) {
    if (state.page === 'settings') return startOnboarding();
    return landing();
  }( {
    home, coach: dashboard, work, history: progress, settings
  }
  [state.page] || dashboard)();
}
export function render() {
  const restore = state.page === 'onboarding' ? captureView(document):() => {
  };
  renderPage();
  restore();
}
