import {
  reliefEntry
}
from '../screens/relief.js?v=32';
import {
  localDateKey
}
from '../calendar.js?v=32';
import {
  workouts
}
from '../data/workouts.js?v=32';
import {
  exercises
}
from '../engine.js?v=32';
import {
  activeFilterChips, activeFilterCount, emptyFilters, exerciseDetailHTML, exerciseResults, filterExercises,
  filterPanel, libraryHeader, quickFilters, skillsArea, sortExercises, workoutsArea
}
from '../library-view.js?v=32';
import {
  bindMedia, mediaPanel
}
from '../media.js?v=32';
import {
  skillSummary
}
from '../skill-progress.js?v=32';
import {
  escapeHTML as esc, icon
}
from '../ui.js?v=32';
import {
  buildWorkout
}
from '../workout-engine.js?v=32';
import {
  go
}
from '../router.js?v=32';
import {
  bindCommon, blocked, recipeDetail, sessionSetup
}
from '../screens/coach.js?v=32';
import {
  startOnboarding
}
from '../screens/onboarding.js?v=32';
import {
  restoreSkillPickerSelections, skillPicker
}
from '../screens/skills.js?v=32';
import {
  $, $$, change, dayIndex, he, on, t, user
}
from '../shared.js?v=32';
import {
  modal, shell, toast
}
from '../shell.js?v=32';
import {
  save, state
}
from '../state.js?v=32';
function exerciseDetail(id) {
  const e = exercises.find(e => e.id === id);
  if (!e) return;
  const fav = user()?.favorites?.includes(id), lang = he() ? 'he': 'en', media = mediaPanel(e, {
    lang, visual: false
  });
  modal(exerciseDetailHTML(e, {
    lang, saved: fav, canSave: !!user(), media: media ?(`<section class="lib-detail-media">` + (
      `${media}`
    ) + `</section>`): ''
  }), {
    wide: true
  });
  bindMedia($('#modal'));
  $$('#modal [data-page]').forEach(b => b.onclick =() => {
    $('#modal').close();
    go(b.dataset.page)
  });
  $$('[data-chain-ex]').forEach(b => b.onclick =event => { event.preventDefault(); go('library/exercise/' + encodeURIComponent(b.dataset.chainEx)); });
  on('#favorite',() => {
    const u = user();
    u.favorites ??= [];
    u.favorites = u.favorites.includes(id) ? u.favorites.filter(x => x !== id): [... u.favorites, id];
    save();
    exerciseDetail(id);
    if (state.page === 'library' && state.libraryArea === 'exercises') renderLibraryResults()
  })
}
async function library() {
  if (state.libraryTab === 'archive' || state.libraryTab === 'personal') {
    shell((`<div class="lib-page"><button class="lib-back" id="lib-back">` + (
      `${t('חזרה לספרייה', 'Back to library')}`
    ) + `</button><h1 class="lib-subtitle">` + (
      `${state.libraryTab === 'archive' ? t('מקורות מקוריים', 'Source archive'): t('הלוחות שלי', 'My boards')}`
    ) + `</h1><div id="library-body"></div></div>`));
    on('#lib-back',() => {
      state.libraryTab = 'exercises';
      state.libraryQuery = '';
      library()
    });
  } else {
    const lang = he() ? 'he': 'en', u = user();
    shell((`<div class="lib-page">` + (
      `${libraryHeader( {
        area: state.libraryArea, query: state.libraryQuery, filters: state.libraryFilterSet, saved: state.librarySaved,
        signedIn: !!u, lang, sort: state.librarySort
      })}`
    ) + `${reliefEntry()}<div id="lib-active"></div><div id="library-body"></div><dialog id="lib-filters" ` +
    `class="lib-filter-sheet" aria-labelledby="lib-filter-title"></dialog></div>`));
    $$('[data-lib-area]').forEach(b => b.onclick =() => {
      if (state.libraryArea === b.dataset.libArea) return;
      state.libraryArea = b.dataset.libArea;
      state.libraryQuery = '';
      library()
    });
    $$('[data-lib-source]').forEach(b => b.onclick =() => {
      state.libraryTab = b.dataset.libSource;
      state.libraryQuery = '';
      library()
    });
    on('[data-lib-saved]',() => {
      state.librarySaved = !state.librarySaved;
      library()
    });
    $$('[data-lib-discover]').forEach(b => b.onclick =() => {
      const mode = b.dataset.libDiscover;
      if (mode === 'goal') {
        openLibraryFilters();
        return
      }
      state.librarySaved = mode === 'saved';
      state.libraryFilterSet = emptyFilters();
      library();
    });
    const search = $('#library-search');
    search.oninput = e => {
      state.libraryQuery = e.target.value;
      renderLibraryResults()
    };
    change('#library-sort', e => {
      state.librarySort = e.target.value;
      renderLibraryResults()
    });
    on('#lib-open-filters', openLibraryFilters);
    renderLibraryResults();
    return
  }
  if (state.libraryTab === 'archive') {
    $('#library-body').innerHTML =(`<p class="notice">` + (
      `${t('14 תבניות אימון ותוכנית אחת. נשמרו מינונים, סתירות וחוסרים; הרשומות המקוריות אינן מופעלות אוטומטית.',
      ('14 workout templates and one program. Prescriptions, conflicts and gaps are preserved. ' + 'Originals are not automatically prescribed.'))}`
    ) + `</p><input class="search" id="archive-search" placeholder="` + (
      `${t('חיפוש במאגר המקור…', 'Search original archive…')}`
    ) + `"><div id="archive-results">` + (
      `${t('טוען מקורות…', 'Loading sources…')}`
    ) + `</div>`);
    try {
      state.archive ??= await fetch('./data/archive-structured.json').then(r => {
        if (!r.ok) throw Error();
        return r.json()
      });
      if (state.page !== 'library' || state.libraryTab !== 'archive') return;
      const results =() => {
        const q = state.libraryQuery.toLowerCase(), list = state.archive.records.filter(r =>(r.id + r.raw_markdown).toLowerCase().includes(q));
        $('#archive-results').innerHTML = list.map(r =>(`<details class="card archive-card"><summary><span class="archive-id" dir="ltr">` + (
          `${esc(r.id)}`
        ) + `</span><span class="chip">` + (
          `${r.origin === 'ai_proposal' ? t('הצעה אוטומטית', 'AI proposal'): t('מקור משתמש', 'User source')}`
        ) + `</span><span class="chip warm">` + (
          `${t('דורש בדיקה', 'Needs review')}`
        ) + `</span></summary><div class="archive-meta">` + (
          `${r.sections?.length || 0}`
        ) + ` ` + (
          `${t('מקטעים מובנים', 'structured sections')}`
        ) + ` · ` + (
          `${t('מקור', 'Source')}`
        ) + ` ` + (
          `${esc(r.source_id)}`
        ) + `</div>` + (
          `${r.sections?.map(sec =>(`<div class="archive-section"><h3>` + (
            `${esc(sec.title)}`
          ) + ` ` + (
            `${sec.rounds ?(`<small>×` + (
              `${sec.rounds.min}`
            ) + (
              `${sec.rounds.max !== sec.rounds.min ? '–' + sec.rounds.max: ''}`
            ) + `</small>`): ''}`
          ) + `</h3>` + (
            `${sec.prescriptions?.map(x =>(`<div class="archive-prescription"><strong>` + (
              `${esc(x.name_raw)}`
            ) + `</strong><span>` + (
              `${doseText(x)}`
            ) + `</span></div>`)).join('')}`
          ) + `</div>`)).join('') || ''}`
        ) + (
          `${r.conflicts?.length ?(`<div class="notice">` + (
            `${r.conflicts.map(x => esc(typeof x === 'string' ? x: JSON.stringify(x))).join('<br>')}`
          ) + `</div>`): ''}`
        ) + `<details><summary>` + (
          `${t('הטקסט המקורי והערות החילוץ', 'Original text & extraction notes')}`
        ) + `</summary><pre>` + (
          `${esc(r.raw_markdown)}`
        ) + `</pre></details></details>`)).join('') || t('אין תוצאות', 'No results')
      };
      results();
      $('#archive-search').oninput = e => {
        state.libraryQuery = e.target.value;
        results()
      }
    } catch {
      $('#archive-results').textContent = t('טעינת המקור נכשלה. לבדוק חיבור או לרענן.', 'Could not load the archive. Refresh to retry.')
    }
  } else {
    const imports = user()?.imports || [];
    $('#library-body').innerHTML = imports.length ? imports.map((r, i) =>(`<article class="card personal-board"><span class="chip warm">` + (
      `${t('פענוח ידני שאושר על ידי המשתמש', 'User-approved manual transcription')}`
    ) + `</span><h2>` + (
      `${esc(r.name)}`
    ) + `</h2><p class="muted">` + (
      `${esc(r.notes)}`
    ) + `</p><pre>` + (
      `${esc(r.transcription)}`
    ) + `</pre><small>` + (
      `${t('לוח מקור בלבד. לא תוכנית מאושרת לביצוע.', 'Source board only. Not an approved executable program.')}`
    ) + `</small>` + (
      `${r.image_key ?(`<button class="secondary small" data-view-board="` + (
        `${i}`
      ) + `">` + (
        `${t('לתמונת המקור המקומית', 'View local source image')}`
      ) + `</button>`): ''}`
    ) + `</article>`)).join(''):(`<div class="empty-state"><div class="empty-icon">` + (
      `${icon('upload', 42)}`
    ) + `</div><h2>` + (
      `${t('האימונים שלך, במקום אחד.', 'Your boards, in one place.')}`
    ) + `</h2><p>` + (
      `${t('להעלות צילום, לתמלל ולתקן, ורק אז לאשר לשמירה. התמונה נשארת במכשיר.',
      'Add an image, transcribe and correct it, then approve saving. The image stays on device.')}`
    ) + `</p><button id="first-board">` + (
      `${t('הוספת הלוח הראשון', 'Add your first board')}`
    ) + `</button></div>`);
    $('#library-body').insertAdjacentHTML('afterbegin',(`<button class="secondary small" id="import-board">` + (
      `${icon('upload', 17)}`
    ) + ` ` + (
      `${t('הוספת לוח אימון', 'Add a training board')}`
    ) + `</button>`));
    on('#import-board',() => user() ? importBoard(): startOnboarding());
    on('#first-board',() => user() ? importBoard(): startOnboarding());
    $$('[data-view-board]').forEach(b => b.onclick =() => viewBoard(imports[+ b.dataset.viewBoard]));
  }
}
function renderLibraryResults() {
  const lang = he() ? 'he': 'en', body = $('#library-body');
  if (!body) return;
  if (state.libraryArea === 'skills') {
    body.innerHTML = skillsArea( {
      query: state.libraryQuery, profile: user() || null, lang, typeFilter: state.skillPickerType, picker: skillPickerBlock()
    });
    restoreSkillPickerSelections(user());
    bindCommon();
    return
  }
  if (state.libraryArea === 'workouts') {
    body.innerHTML = workoutsArea( {
      query: state.libraryQuery, lang, level: state.workoutLevel
    });
    change('#workout-level', e => {
      state.workoutLevel = e.target.value;
      renderLibraryResults()
    });
    $$('[data-recipe]').forEach(b => b.onclick =() => recipeDetail(b.dataset.recipe));
    $$('[data-start-recipe]').forEach(b => b.onclick =() => startRecipe(b.dataset.startRecipe));
    return
  }
  const list = sortExercises(filterExercises( {
    query: state.libraryQuery, filters: state.libraryFilterSet, saved: state.librarySaved ?(user()?.favorites || []): null
  }), {
    sort: state.librarySort, profile: user()
  });
  $('#lib-active').innerHTML = activeFilterChips(state.libraryFilterSet, {
    saved: state.librarySaved, lang
  });
  body.innerHTML = quickFilters(state.libraryFilterSet, lang) + exerciseResults(list, {lang, profile: user()});
  $$('[data-quick-filter]').forEach(b => b.onclick = () => {
    const [key, value] = b.dataset.quickFilter.split(':'), values = state.libraryFilterSet[key] || [];
    state.libraryFilterSet = {...state.libraryFilterSet, [key]: values.includes(value) ? values.filter(v => v !== value) : [...values, value]};
    renderLibraryResults();
    document.querySelector(`[data-quick-filter="${key}:${value}"]`)?.focus({preventScroll: true});
  });
  $$('[data-area-jump]').forEach(b => b.onclick = event => {
    event.preventDefault();
    const section = document.getElementById('lib-area-' + b.dataset.areaJump);
    section?.scrollIntoView({block: 'start'});
    section?.querySelector('h2')?.setAttribute('tabindex', '-1');
    section?.querySelector('h2')?.focus({preventScroll: true});
  });
  const badge = $('#lib-open-filters');
  if (badge) {
    const n = activeFilterCount(state.libraryFilterSet);
    badge.querySelector('.lib-count-badge')?.remove();
    if (n) badge.insertAdjacentHTML('beforeend',(`<span class="lib-count-badge">` + (
      `${n}`
    ) + `</span>`))
  }
  $$('[data-remove-filter]').forEach(b => b.onclick =() => {
    const[k, v] = b.dataset.removeFilter.split(':');
    state.libraryFilterSet = {
      ... state.libraryFilterSet, [k]: state.libraryFilterSet[k].filter(x => x !== v)
    };
    renderLibraryResults()
  });
  $$('[data-remove-saved]').forEach(b => b.onclick =() => {
    state.librarySaved = false;
    library()
  });
  $$('[data-clear-filters]').forEach(b => b.onclick =() => {
    state.libraryFilterSet = emptyFilters();
    state.libraryQuery = '';
    state.librarySaved = false;
    library()
  });
  bindCommon()
}
function openLibraryFilters() {
  const d = $('#lib-filters');
  if (!d) return;
  state.libraryDraft = structuredClone(state.libraryFilterSet);
  const lang = he() ? 'he': 'en';
  const paint =() => {
    const scroll = d.querySelector('.lib-sheet-body')?.scrollTop || 0;
    d.innerHTML = filterPanel(state.libraryDraft, {
      lang, signedIn: !!user(), saved: state.librarySaved
    });
    d.querySelector('.lib-sheet-body').scrollTop = scroll;
    d.querySelectorAll('[data-facet]').forEach(b => b.onclick =() => {
      const[k, v] = b.dataset.facet.split(':'), cur = state.libraryDraft[k];
      state.libraryDraft[k] = cur.includes(v) ? cur.filter(x => x !== v): [... cur, v];
      paint();
      d.querySelector((`[data-facet="` + (
        `${k}`
      ) + `:` + (
        `${v}`
      ) + `"]`))?.focus( {
        preventScroll: true
      })
    });
    d.querySelectorAll('[data-lib-source]').forEach(b => b.onclick =() => {
      d.close();
      state.libraryTab = b.dataset.libSource;
      state.libraryQuery = '';
      library()
    });
    const savedToggle = d.querySelector('[data-lib-saved]');
    if (savedToggle) savedToggle.onclick =() => {
      state.librarySaved = !state.librarySaved;
      d.close();
      library()
    };
    d.querySelector('[data-reset-filters]').onclick =() => {
      state.libraryDraft = emptyFilters();
      paint()
    };
    d.querySelector('[data-close-filters]').onclick =() => d.close();
    d.querySelector('[data-apply-filters]').onclick =() => {
      state.libraryFilterSet = state.libraryDraft;
      d.close();
      renderLibraryResults()
    }
  };
  paint();
  d.onclick = e => {
    if (e.target === d) d.close()
  };
  const trigger = $('#lib-open-filters');
  d.onclose =() => trigger?.focus( {
    preventScroll: true
  });
  d.showModal()
}
function startRecipe(id) {
  const w = workouts.find(w => w.id === id);
  if (!w) return;
  const u = user();
  if (!u) {
    state.pendingRecipe = id;
    startOnboarding();
    return
  }
  const p = buildWorkout(id, u, {
    readiness: 'normal', minutes: w.minutes
  });
  if (p.blocked) {
    startOnboarding(true);
    return
  }
  sessionSetup( {
    ... p, dayIndex: dayIndex(), date: localDateKey()
  })
}
function skillPickerBlock() {
  const u = user();
  return u ?(`<section class="lib-skill-picker"><button class="text-button" id="all-skill-types">כל הסקילים` + `</button><div><h2>` + (
    `${t('הסקילים שלי', 'My skills')}`
  ) + `</h2><p class="lib-card-meta">` + (
    `${esc(skillSummary(u))}`
  ) + `</p></div>` + (
    `${skillPicker(u, 'profile')}`
  ) + `<button class="lib-start" id="save-skills">` + (
    `${t('שמירת הבחירה', 'Save choice')}`
  ) + `</button></section>`): ''
}
function doseText(p) {
  const range = v => v ?( (
    `${v.min}`
  ) + (
    `${v.max !== v.min ? '–' + v.max: ''}`
  )): '?';
  return[p.sets ? range(p.sets) + ' ' + t('סטים', 'sets'): null, p.reps ? range(p.reps) + ' ' + t('חזרות',
  'reps'): null, p.duration_seconds ? range(p.duration_seconds) + ' ' + t('שניות', 'sec'): null, p.per_side ? t('לכל צד',
  'each side'): null].filter(Boolean).join(' · ') || t('מינון חסר / לא ידוע', 'Prescription missing / unknown')
}
function importBoard() {
  modal((`<h2>` + (
    `${t('מלוח אימון לידע שאפשר לשמור.', 'From a training board to lasting knowledge.')}`
  ) + `</h2><p class="muted">` + (
    `${t('פענוח אוטומטי עדיין אינו מחובר. התהליך כאן ידני, מקומי ועם אישור שלך.',
    'Automatic OCR is not connected. This is a local, manual review workflow.')}`
  ) + `</p><label>` + (
    `${t('צילום הלוח (עד 4 מגה־בייט)', 'Board image (up to 4MB)')}`
  ) + `<input type="file" id="board-image" accept="image/jpeg,image/png,image/webp"></label><img ` + `id="board-preview" alt="` + (
    `${t('תמונת מקור לבדיקה', 'Source image for review')}`
  ) + `" class="board-preview" hidden><label>` + (
    `${t('שם האימון', 'Workout name')}`
  ) + `<input id="board-name" maxlength="80"></label><label>` + (
    `${t('הפענוח שלי — לפי סדר, סטים / סבבים ומינונים', 'My transcription — order, sets / rounds and dosage')}`
  ) + `<textarea id="board-text" rows="6" maxlength="10000" placeholder="` + (
    `${t('חימום ×2…\nמקטע ראשון ×3…\nמה לא ברור בתמונה?', 'Warm-up ×2…\nFirst section ×3…\nWhat is unclear?')}`
  ) + `"></textarea></label><label>` + (
    `${t('חוסרים או ספקות', 'Gaps or uncertainties')}`
  ) + `<textarea id="board-notes" maxlength="2000" rows="2"></textarea></label><label ` +
  `class="check-label"><input type="checkbox" id="board-approve">` + (
    `${t('בדקתי את הפענוח. מידע חסר נשאר מסומן כחסר.', 'I reviewed the transcription. Missing data remains marked as missing.')}`
  ) + `</label><div id="board-error" class="form-error" role="alert"></div><button id="save-board" ` + `class="full-width">` + (
    `${t('אישור ושמירה במכשיר', 'Approve & save on device')}`
  ) + `</button>`));
  let image = null;
  change('#board-image', e => {
    const f = e.target.files[0];
    if (!f) return;
    if (! ['image/jpeg', 'image/png', 'image/webp'].includes(f.type) || f.size > 4 * 1024 * 1024) {
      $('#board-error').textContent = t('לבחור תמונה נתמכת עד 4 מגה־בייט.', 'Choose JPG, PNG or WebP up to 4MB.');
      return
    }
    image = f;
    if (state.boardUrl) URL.revokeObjectURL(state.boardUrl);
    state.boardUrl = URL.createObjectURL(f);
    $('#board-preview').src = state.boardUrl;
    $('#board-preview').hidden = false;
    $('#board-error').textContent = ''
  });
  on('#save-board', async() => {
    if (!$('#board-name').value.trim() || !$('#board-text').value.trim() || !$('#board-approve').checked) {
      $('#board-error').textContent = t('להשלים שם, פענוח ואישור בדיקה.', 'Add a name, transcription and review approval.');
      return
    }
    const u = user(), id = crypto.randomUUID();
    $('#save-board').disabled = true;
    try {
      if (image) {
        const {
          putImage
        } = await import('../media-store.js?v=32');
        await putImage(u.id + ':' + id, image)
      }(u.imports ??= []).push( {
        id, name: $('#board-name').value.trim(), transcription: $('#board-text').value.trim(), notes: $('#board-notes').value.trim(),
        image_key: image ? u.id + ':' + id: null, status: 'user-reviewed-transcription', executable: false,
        createdAt: new Date().toISOString()
      });
      save();
      $('#modal').close();
      state.libraryTab = 'personal';
      go('library');
      toast(t('הלוח נשמר עם ההערות שלך.', 'Board saved with your review notes.'))
    } catch {
      $('#board-error').textContent = t('התמונה לא נשמרה. אפשר לנסות שוב בלי תמונה.', 'Image could not be saved. Try again without it.');
      $('#save-board').disabled = false
    }
  })
}
async function viewBoard(r) {
  try {
    const {
      getImage
    } = await import('../media-store.js?v=32'), blob = await getImage(r.image_key);
    if (!blob) return toast(t('התמונה לא נמצאת במכשיר הזה. גיבוי נתונים אינו כולל תמונות.',
    'Image unavailable on this device. JSON backups do not include images.'));
    if (state.boardUrl) URL.revokeObjectURL(state.boardUrl);
    state.boardUrl = URL.createObjectURL(blob);
    modal((`<h2>` + (
      `${esc(r.name)}`
    ) + `</h2><img class="board-preview" src="` + (
      `${state.boardUrl}`
    ) + `" alt="` + (
      `${t('לוח האימון המקורי', 'Original workout board')}`
    ) + `"><p>` + (
      `${esc(r.notes)}`
    ) + `</p>`))
  } catch {
    toast(t('לא ניתן לטעון את התמונה המקומית.', 'Could not load local image.'))
  }
}
export {
  exerciseDetail, library, renderLibraryResults, openLibraryFilters, startRecipe, skillPickerBlock,
  doseText, importBoard, viewBoard
};
