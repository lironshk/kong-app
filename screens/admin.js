import {
  addRequest, clearInbox, inboxText, loadInbox, removeRequest, setAdmin
}
from '../admin-inbox.js?v=32';
import {
  matchExercise
}
from '../exercise-matcher.js?v=32';
import {
  exportFile
}
from '../store.js?v=32';
import {
  escapeHTML as esc
}
from '../ui.js?v=32';
import {
  go
}
from '../router.js?v=32';
import {
  $, $$, on, pageHead
}
from '../shared.js?v=32';
import {
  confirmAction, shell, toast
}
from '../shell.js?v=32';
import {
  state
}
from '../state.js?v=32';
const STATUS = {
  exists: ['קיים באפליקציה', 'is-exists'], similar: ['יש וריאציה קרובה', 'is-similar'], missing: ['לא קיים', 'is-missing']
};
const lines = text => [... new Set(String(text || '').split(/\n|,/).map(x => x.trim()).filter(Boolean))].slice(0, 30);
function resultHTML(name, i) {
  const r = matchExercise(name), [label, cls] = STATUS[r.status], top = r.matches[0];
  return(
    `<li class="admin-result ${cls}"><div class="admin-result-head"><strong>` +
    `${esc(name)}` +
    `</strong><span class="admin-status">` +
    `${label}` +
    `</span></div>` +
    `${r.matches.length ? (
      `<div class="admin-matches">` +
      `${r.matches.map(m => (
        `<button class="text-button" data-open-ex="${esc(m.id)}">` +
        `${esc(m.he)}` +
        ` <small dir="ltr">${esc(m.en)} · ${Math.round(m.score * 100)}%</small></button>`
      )).join('')}` +
      `</div>`
    ): ''}` +
    `${r.status === 'exists' ? '': (
      `<button class="secondary admin-add" data-add-index="${i}">` +
      `${r.status === 'similar' ? 'לרשום בכל זאת כתרגיל חדש': 'לרשום לרשימת ההוספה'}` +
      `</button>`
    )}` +
    `</li>`
  );
}
function inboxHTML(list) {
  return list.length ? (
    `<ul class="admin-inbox">` +
    `${list.map(x => (
      `<li><div><strong>` +
      `${esc(x.name)}` +
      `</strong>` +
      `${x.note ? `<small>${esc(x.note)}</small>`: ''}` +
      `<small>נרשם ${esc(x.addedAt)}` +
      `${x.closest ? ` · הכי קרוב: ${esc(x.closest.he || x.closest.id)}`: ''}` +
      `</small></div><button class="text-button" data-remove="${esc(x.name)}">הסרה</button></li>`
    )).join('')}` +
    `</ul>`
  ): '<p class="muted">הרשימה ריקה.</p>';
}
export function admin() {
  setAdmin(true);
  const list = loadInbox();
  shell((
    `${pageHead('כלי מנהל', 'בדיקת תרגילים', (
      'כותבים שם של תרגיל שראיתם אצל מאמן אחר — בעברית או באנגלית, שורה לכל תרגיל. ' +
      'מה שלא קיים נרשם כאן, ובשיחה הבאה עם Claude מוסיפים אותו לספרייה.'
    ))}` +
    `<section class="card admin-check"><label for="admin-query">שם התרגיל</label>` +
    `<textarea id="admin-query" rows="3" placeholder="לדוגמה: Archer pull ups\nמתח ביד אחת" dir="auto">` +
    `${esc(state.adminQuery || '')}` +
    `</textarea><label for="admin-note">הערה (לא חובה): איפה ראיתי, מאמן, קישור</label>` +
    `<input id="admin-note" dir="auto" value="${esc(state.adminNote || '')}">` +
    `<ul id="admin-results" class="admin-results"></ul></section>` +
    `<section class="card admin-list"><h2>לרשימת ההוספה <span class="muted">(${list.length})</span></h2>` +
    `${inboxHTML(list)}` +
    `${list.length ? (
      `<div class="admin-actions"><button class="primary" id="admin-copy">העתקה לשיחה עם Claude</button>` +
      `<button class="secondary" id="admin-share">שיתוף</button>` +
      `<button class="secondary" id="admin-download">הורדת קובץ</button>` +
      `<button class="text-button" id="admin-clear">ניקוי הרשימה</button></div>` +
      `<p class="muted">אחרי ההוספה לאפליקציה אפשר לנקות את הרשימה. הרשימה שמורה רק במכשיר ובדפדפן הזה.</p>`
    ): ''}` +
    `</section>`
  ));
  const query = $('#admin-query'), note = $('#admin-note');
  const refresh =() => {
    state.adminQuery = query.value;
    const names = lines(query.value);
    $('#admin-results').innerHTML = names.map(resultHTML).join('');
    $$('[data-open-ex]').forEach(b => b.onclick =() => go('library/exercise/' + encodeURIComponent(b.dataset.openEx)));
    $$('[data-add-index]').forEach(b => b.onclick =() => {
      const name = names[Number(b.dataset.addIndex)], top = matchExercise(name).matches[0];
      const added = addRequest( {
        name, note: note.value, closest: top ? {
          id: top.id, he: top.he, score: top.score
        }: null
      });
      toast(added ? 'נרשם לרשימת ההוספה.': 'התרגיל כבר ברשימה, או שהשמירה במכשיר נחסמה.', added ? 'success': 'error');
      if (added) admin();
    });
  };
  query.oninput = refresh;
  note.oninput =() => state.adminNote = note.value;
  refresh();
  $$('[data-remove]').forEach(b => b.onclick =() => {
    removeRequest(b.dataset.remove);
    admin();
  });
  on('#admin-copy', async() => {
    try {
      await navigator.clipboard.writeText(inboxText());
      toast('הועתק. להדביק בשיחה עם Claude.');
    } catch {
      toast('ההעתקה נחסמה בדפדפן. להשתמש בהורדת קובץ.', 'error');
    }
  });
  on('#admin-share', async() => {
    if (!navigator.share) return toast('שיתוף אינו זמין בדפדפן הזה. להשתמש בהעתקה.', 'error');
    try {
      await navigator.share( {
        title: 'תרגילים חסרים ל־KONG', text: inboxText()
      });
    } catch {
    }
  });
  on('#admin-download',() => exportFile(loadInbox(), 'kong-exercise-requests.json'));
  on('#admin-clear',() => confirmAction('לנקות את הרשימה?', 'כדאי לנקות רק אחרי שהתרגילים נוספו לאפליקציה.',() => {
    clearInbox();
    admin();
  }, 'ניקוי'));
  if (!state.adminQuery) query.focus();
}
