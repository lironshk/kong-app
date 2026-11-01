import {replayTour} from '../tour.js?v=31';
import {trainingPreferencesHTML, bindTrainingPreferences} from '../session-structure.js?v=31';
import {
  BRAND_NAME, LOGO_SVG, applyBrand
}
from '../brand.js?v=31';
import {
  capabilityOffer
}
from '../capability-check.js?v=31';
import {
  skills
}
from '../data/skills.js?v=31';
import {
  exercises
}
from '../engine.js?v=31';
import {
  canDeleteRecovery, deleteRecoveryBackup, exportFile, exportRecovery, validateImport
}
from '../store.js?v=31';
import {
  dateKey, escapeHTML as esc, icon, safeUrl
}
from '../ui.js?v=31';
import {
  go, render
}
from '../router.js?v=31';
import {
  isAdmin, setAdmin
}
from '../admin-inbox.js?v=31';
import {
  capabilityIntro, reviewedExecution
}
from '../screens/capability.js?v=31';
import {
  startOnboarding
}
from '../screens/onboarding.js?v=31';
import {
  captureDraft
}
from '../screens/player.js?v=31';
import {
  $, $$, change, days, equipmentLabel, equipmentNames, goalLabel, he, on, pageHead, t, tx, user
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
function privacy() {
  modal((`<h2>` + (
    `${t('הנתונים שלך. במכשיר שלך.', 'Your data. On your device.')}`
  ) + `</h2><p>` + (
    `${t(('פרופילים, תוכניות וביצועים נשמרים באחסון הדפדפן במכשיר הזה. אין סנכרון בין מכשירים, אין ניתוח ' +
    'וידאו ואין משלוח פרטי בריאות לשירותים חיצוניים.'),('Profiles, plans and performance are stored in this browser on this device. There is no ' +
    'cross-device sync, video analysis or health-data transmission to AI services.'))}`
  ) + `</p><p>` + (
    `${t(('פרופילים מקומיים אינם חשבונות עם סיסמה. מי שניגש לדפדפן הזה יכול להחליף פרופיל. ניקוי נתוני ' + 'הדפדפן ימחק אותם; מומלץ לייצא גיבוי.'),
    ('Local profiles are not password-protected accounts. Anyone with access to this browser can ' +
    'switch profiles. Clearing browser data deletes them; export a backup.'))}`
  ) + `</p><p>` + (
    `${t('סרטוני הדרכה נטענים רק אחרי לחיצה לניגון; מדריכים זמינים נטענים בתוך האפליקציה. תמונות לוחות נשארות במכשיר.',
    ('YouTube players load only after a play click; available guides load inside the app. Uploaded ' + 'board images stay on device.'))}`
  ) + `</p><button class="secondary" id="privacy-export">` + (
    `${t('ייצוא גיבוי', 'Export backup')}`
  ) + `</button>`));
  on('#privacy-export',() => user() && exportProfile())
}
function profileMenu() {
  modal((`<h2>` + (
    `${t('המרחבים האישיים', 'Your personal spaces')}`
  ) + `</h2><p class="muted">` + (
    `${t('כל פרופיל עם תוכנית והיסטוריה משלו, במכשיר הזה.', 'Each profile has its own plan and history on this device.')}`
  ) + `</p><div class="profile-list">` + (
    `${state.db.users.map(u =>(`<button class="profile-choice ` + (
      `${u.id === state.db.active ? 'selected': ''}`
    ) + `" data-switch="` + (
      `${esc(u.id)}`
    ) + `"><span class="avatar">` + (
      `${esc(u.name.charAt(0))}`
    ) + `</span><span>` + (
      `${esc(u.name)}`
    ) + `</span>` + (
      `${u.id === state.db.active ? icon('check'): ''}`
    ) + `</button>`)).join('')}`
  ) + `</div><details><summary>על ההמלצות</summary><p>המינונים, ההערכות, המנוחות, ההתקדמות וההתאוששות ` +
  `הם ברירות מחדל עריכתיות הממתינות לבדיקת מאמן מוסמך. בדיקות תוכנה אינן אישור מקצועי.</p><p>` +
  `נדרשים אישור מאמן קליסטניקס להדגמות, טכניקה, יציאות, מתקנים ומינונים של כל התרגילים; אישור איש ` +
  `מקצוע בכוח וכושר להערכות וריאציה, כיסוי שבועי, עומסים משותפים, התקדמות ותקופה קלה ולניסוי חמשת ` +
  `סוגי האימונים; דיאטן ספורט מורשה למחשבון חלבון, משקלים קיצוניים, אנרגיה, תוספים וצום; ורופא ` +
  `ספורט או קלינאי חום לכאב, חזרה לפעילות והוראות חירום בעברית. טרם התקבל אישור מקצועי בשם ` +
  `ובתאריך. תרגילים מתקדמים מוגבלים עד בדיקה אישית מתועדת.</p></details><p id="menu-copyright">© ` + (
    `${new Date().getFullYear()}`
  ) + ` KONG</p><div class="profile-menu-actions"><button class="secondary" id="menu-sources">מקורות ` +
  `ושקיפות</button><button class="secondary" id="menu-privacy">פרטיות והנתונים שלי</button>` +
  `${isAdmin() ? '<button class="secondary" id="menu-admin">כלי מנהל · בדיקת תרגילים</button>': ''}` +
  `<button class="secondary" id="menu-tour">הדרכה על האפליקציה</button>` +
  `<button class="secondary" id="menu-skills">הסקילים שלי</button><button class="secondary" ` +
  `id="reviewed-execution">בדיקה מקצועית ותקופת אימון</button><button class="secondary" ` + `id="add-profile">` + (
    `${icon('plus')}`
  ) + ` ` + (
    `${t('פרופיל חדש', 'New profile')}`
  ) + `</button><button class="secondary" id="menu-discover">` + (
    `${icon('library')}`
  ) + ` ` + (
    `${t('לבנות מסלול חדש', 'Build a new path')}`
  ) + `</button><button class="secondary" id="menu-settings">` + (
    `${icon('settings')}`
  ) + ` ` + (
    `${t('ההעדפות שלי', 'My preferences')}`
  ) + `</button><button class="secondary" id="menu-install">` + (
    `${icon('download')}`
  ) + ` ` + (
    `${t('הוספה למסך הבית', 'Add to home screen')}`
  ) + `</button></div>`));
  $$('[data-switch]').forEach(b => b.onclick =() => {
    captureDraft();
    state.db.active = b.dataset.switch;
    state.selectedDay = null;
    save();
    $('#modal').close();
    go('home')
  });
  on('#add-profile',() => {
    $('#modal').close();
    startOnboarding()
  });
  on('#menu-discover',() => {
    $('#modal').close();
    go('discover')
  });
  on('#menu-settings',() => {
    $('#modal').close();
    go('settings')
  });
  on('#reviewed-execution',() => reviewedExecution());
  on('#menu-sources',() => {
    $('#modal').close();
    go('research')
  });
  on('#menu-privacy', privacy);
  on('#menu-tour', replayTour);
  on('#menu-admin',() => {
    $('#modal').close();
    go('admin')
  });
  // Five taps on the copyright line toggle the admin tools on this device.
  let taps = 0;
  on('#menu-copyright',() => {
    if (++taps < 5) return;
    taps = 0;
    const enable = !isAdmin();
    setAdmin(enable);
    toast(enable ? 'כלי מנהל הופעלו במכשיר הזה.': 'כלי מנהל כובו במכשיר הזה.');
    profileMenu()
  });
  on('#menu-skills',() => {
    $('#modal').close();
    go('skills')
  });
  on('#menu-install',() => {
    $('#modal').close();
    showInstall()
  })
}
function exportProfile() {
  const u = user();
  if (u) exportFile( {
    schemaVersion: 2, exportedAt: new Date().toISOString(), profile: u
  },( (
    `${BRAND_NAME.toLowerCase()}`
  ) + `-profile-` + (
    `${dateKey()}`
  ) + `.json`))
}
function settings() {
  const u = user();
  shell(( (
    `${pageHead(t('עוד קצת בדרך שלך', 'A LITTLE MORE YOU'), t('המסלול שלי. הכללים שלי.', 'My path. My preferences.'),
    t('כאן מעדכנים את השגרה ושומרים על בעלות על הנתונים.', 'Adjust your routine and stay in control of your data.'))}`
  ) + `<button class="secondary" id="settings-tour">הדרכה על האפליקציה</button><div class="settings-grid"><section class="card"><h2>` + (
    `${t('תצוגה ושפה', 'Display and language')}`
  ) + `</h2><div class="appearance-modes">` + (
    `${[ ['light', 'בהיר', 'Light'], ['dark', 'כהה', 'Dark'], ['sunlight', 'אור שמש', 'Sunlight']].map(( [id,
    a, b]) =>(`<button class="secondary" data-brand="` + (
      `${id}`
    ) + `" aria-pressed="` + (
      `${document.documentElement.dataset.theme === id}`
    ) + `">` + (
      `${t(a, b)}`
    ) + `</button>`)).join('')}`
  ) + `</div></section><section class="card"><div class="row"><span class="avatar large">` + (
    `${esc(u.name.charAt(0))}`
  ) + `</span><button class="text-button" id="edit-settings">` + (
    `${icon('edit', 16)}`
  ) + ` ` + (
    `${t('עריכת הפרופיל', 'Edit profile')}`
  ) + `</button></div><h2>` + (
    `${esc(u.name)}`
  ) + `</h2><p>` + (
    `${goalLabel(u.goal)}`
  ) + ` · ` + (
    `${u.days.length}`
  ) + ` ` + (
    `${t('ימים בשבוע', 'days per week')}`
  ) + `</p><div class="profile-metrics">` + (
    `${[ ['push', 'שכיבות סמיכה', 'Push-ups'], ['pull', 'מתח', 'Pull-ups'], ['legs', 'סקוואטים', 'Squats'],
    ['core', 'שניות פלאנק', 'Plank seconds']].map(( [k, a, b]) =>(`<div><strong>` + (
      `${u[k] || '—'}`
    ) + `</strong><small>` + (
      `${t(a, b)}`
    ) + `</small></div>`)).join('')}`
  ) + `</div><p class="micro-note">` + (
    `${t('ערכים מדווחים, לא מבחן מקצועי. עדכון משפיע על תוכניות חדשות בלבד.',
    'Self-reported values, not a professional test. Updates affect new plans only.')}`
  ) + `</p><button class="secondary full-width" id="switch-settings">` + (
    `${icon('user', 17)}`
  ) + ` ` + (
    `${t('החלפה או הוספת פרופיל', 'Switch or add profile')}`
  ) + `</button></section><section class="card"><div class="card-header"><h2>` + (
    `${t('מקומות האימון שלי', 'My training spaces')}`
  ) + `</h2><button class="text-button" id="add-location">` + (
    `${icon('plus', 16)}`
  ) + ` ` + (
    `${t('הוספה', 'Add')}`
  ) + `</button></div>` + (
    `${(u.locations || []).map(l =>(`<div class="location-card"><div class="row"><strong>` + (
      `${esc(l.name)}`
    ) + `</strong><button class="text-button" data-location="` + (
      `${esc(l.id)}`
    ) + `">` + (
      `${t('עריכה', 'Edit')}`
    ) + `</button></div><p>` + (
      `${l.equipment.length ? l.equipment.map(equipmentLabel).join(' · '): t('רצפה ושטח פנוי', 'Floor space only')}`
    ) + `</p><button class="secondary small" data-use-location="` + (
      `${esc(l.id)}`
    ) + `">` + (
      `${l.id === u.activeLocation ? '✓ ' + t('המקום הפעיל', 'Active space'): t('לבחור במקום הזה', 'Use this space')}`
    ) + `</button></div>`)).join('')}`
  ) + `</section><section class="card"><h2>` + (
    `${t('האפליקציה, קרובה אליי', 'Keep your practice close')}`
  ) + `</h2><p>` + (
    `${t('הוספה למסך הבית מאפשרת לפתוח את מרחב האימון כמו אפליקציה. אחרי טעינה ראשונה אפשר לפתוח גם ללא רשת.',
    ('Add to your home screen to open your training space like an app. After the first load, the app ' + 'shell can open offline.'))}`
  ) + `</p><button id="settings-install" class="full-width">` + (
    `${icon('download', 18)}`
  ) + ` ` + (
    `${t('הוספה למסך הבית', 'Add to home screen')}`
  ) + `</button><div class="divider"></div><button class="text-button" id="settings-language">` + (
    `${t('שפה: אנגלית', 'Language: Hebrew')}`
  ) + `</button></section><section class="card"><h2>` + (
    `${t('הנתונים נשארים שלי', 'My data stays mine')}`
  ) + `</h2><p>` + (
    `${t('גיבוי נתונים כולל פרופיל, תוכניות ויומן. תמונות לוחות אינן כלולות ונשארות במכשיר המקורי.',(
    'JSON backups include your profile, plans and journal. Board images are not included and remain ' + 'on the original device.'))}`
  ) + `</p><div class="row"><button class="secondary" id="settings-export">` + (
    `${icon('download', 16)}`
  ) + ` ` + (
    `${t('ייצוא גיבוי', 'Export backup')}`
  ) + `</button><button class="secondary" id="settings-import">` + (
    `${icon('upload', 16)}`
  ) + ` ` + (
    `${t('ייבוא גיבוי', 'Import backup')}`
  ) + `</button></div><input type="file" id="import-file" accept="application/json,.json" hidden><div ` +
  `class="divider"></div><button class="text-button" id="settings-privacy">` + (
    `${t('פרטיות ושמירה מקומית', 'Privacy & local storage')}`
  ) + `</button><p class="micro-note">` + (
    `${t('הפרופילים מקומיים ואינם מוגנים בסיסמה. אין סנכרון בין מכשירים.',
    'Profiles are local and are not password protected. There is no cross-device sync.')}`
  ) + `</p><button class="ghost danger-text" id="delete-profile">` + (
    `${t('מחיקת הפרופיל וההיסטוריה', 'Delete profile & history')}`
  ) + `</button></section>` + (
    `${trainingPreferencesHTML(u)}`
  ) + (
    `${capabilityOffer(u)}`
  ) + (
    `${recoverySettings()}`
  ) + `</div>`));
  bindTrainingPreferences(document, u, () => {save(); settings();});
  $$('[data-capability]').forEach(b => b.onclick = capabilityIntro);
  $$('[data-brand]').forEach(b => b.onclick =() => {
    applyBrand(b.dataset.brand);
    settings()
  });
  on('#settings-tour', replayTour);
  on('#edit-settings',() => startOnboarding(true));
  on('#switch-settings', profileMenu);
  on('#add-location',() => locationEditor());
  $$('[data-location]').forEach(b => b.onclick =() => locationEditor(b.dataset.location));
  $$('[data-use-location]').forEach(b => b.onclick =() => {
    const l = u.locations.find(l => l.id === b.dataset.useLocation);
    u.activeLocation = l.id;
    u.equipment = [... l.equipment];
    save();
    settings();
    toast(t('הציוד עודכן לתוכניות חדשות.', 'Equipment updated for new plans.'))
  });
  on('#settings-export', exportProfile);
  on('#settings-import',() => $('#import-file').click());
  change('#import-file', async e => {
    const f = e.target.files[0];
    if (!f) return;
    try {
      if (f.size > 8_000_000) throw Error();
      const u = validateImport(JSON.parse(await f.text()));
      state.db.users.push(u);
      state.db.active = u.id;
      state.selectedDay = null;
      save();
      settings();
      toast(t('הגיבוי יובא לפרופיל נפרד.', 'Backup imported as a separate profile.'))
    } catch {
      toast(t('הקובץ אינו גיבוי תקין או גדול מדי.', 'Invalid or oversized backup file.'), 'error')
    }
  });
  on('#settings-install', showInstall);
  on('#settings-language',() => {
    state.db.lang = he() ? 'en': 'he';
    save();
    render()
  });
  on('#settings-privacy', privacy);
  on('#settings-recovery-export',() => exportRecovery());
  on('#settings-recovery-repair',() => {
    if (!state.db.recovery?.canPersist) return;
    if (!save()) return;
    settings();
    toast(t('הפרופילים התקינים נשמרו. מקור השחזור נשאר בגיבוי.', 'Valid profiles saved. The recovery original remains backed up.'))
  });
  on('#settings-recovery-delete',() => confirmAction(t('למחוק את גיבוי השחזור?', 'Delete the recovery backup?'),
  t(('העותק הישן עלול לכלול פרופילים ויומנים שכבר נמחקו. יימחק רק גיבוי השחזור, בלי לגעת בנתונים ' + 'הנוכחיים. הפעולה לא ניתנת לביטול.'),
  ('The older copy may include previously deleted profiles and logs. Only the recovery backup will ' +
  'be removed; current data stays intact. This cannot be undone.')),() => {
    if (deleteRecoveryBackup()) {
      delete state.db.recovery;
      settings();
      toast(t('עותק השחזור נמחק.', 'Recovery copy deleted.'))
    } else toast(t('לא ניתן למחוק לפני שהנתונים הנוכחיים נשמרו באופן תקין.', 'Cannot delete until current data is saved in a valid state.'),
    'error')
  }, t('מחיקת גיבוי השחזור', 'Delete recovery backup')));
  on('#delete-profile',() => confirmAction(t('למחוק את הפרופיל?', 'Delete this profile?'), t(
  'הפרופיל, היומן ותמונות הלוחות שלו יימחקו מהמכשיר. מומלץ לייצא גיבוי לפני כן. לא ניתן לבטל.',(
  'This removes the profile, journal and its board images from this device. Export a backup ' + 'first. This cannot be undone.')) +(state.db.
  recovery?.needed ? t(' קיים גם גיבוי שחזור ישן; מחיקתו נפרדת בהעדפות.',
  ' An older recovery copy also exists; delete it separately in preferences.'): ''), async() => {
    const images =(u.imports || []).map(x => x.image_key).filter(Boolean);
    try {
      const {
        deleteImage
      } = await import('../media-store.js?v=31');
      await Promise.all(images.map(deleteImage))
    } catch {
    }
    state.db.users = state.db.users.filter(x => x.id !== u.id);
    state.db.active = state.db.users[0]?.id || null;
    state.selectedDay = null;
    save();
    go('home')
  }, t('מחיקה לצמיתות', 'Delete permanently')))
}
function recoverySettings() {
  if (!state.db.recovery?.needed) return '';
  return(`<section class="card recovery-settings"><h2>` + (
    `${t('גיבוי שחזור מקומי', 'Local recovery backup')}`
  ) + `</h2><p>` + (
    `${t(('עותק המקור שנשמר לשחזור עשוי לכלול גם מידע של פרופילים שנמחקו מאז. מחיקת פרופיל אינה מוחקת את ' +
    'העותק הזה, כדי לא לאבד מידע של פרופילים אחרים. אפשר לייצא אותו ולמחוק בנפרד לאחר שמירה תקינה.'),
    ('The recovery original may include data from previously deleted profiles. Profile deletion does ' +
    'not remove it because other profiles may need recovery. Export it, then delete it separately ' + 'after a valid save.'))}`
  ) + `</p><div class="stack"><button class="secondary" id="settings-recovery-export">` + (
    `${t('ייצוא המקור לשחזור', 'Export recovery original')}`
  ) + `</button>` + (
    `${state.db.recovery.canPersist ?(`<button class="secondary" id="settings-recovery-repair">` + (
      `${t('שמירת הפרופילים התקינים', 'Save valid profiles')}`
    ) + `</button>`): ''}`
  ) + `<button class="ghost danger-text" id="settings-recovery-delete" ` + (
    `${canDeleteRecovery() ? '': 'disabled'}`
  ) + `>` + (
    `${t('מחיקת עותק השחזור בלבד', 'Delete recovery copy only')}`
  ) + `</button></div>` + (
    `${!canDeleteRecovery() ?(`<p class="micro-note">` + (
      `${t('מחיקה תתאפשר רק כשעותק הנתונים הנוכחי תקין ושמור.', 'Deletion is available only when the current main data is valid and saved.')}`
    ) + `</p>`): ''}`
  ) + `</section>`)
}
function locationEditor(id) {
  const u = user(), l = u.locations.find(x => x.id === id);
  modal((`<h2>` + (
    `${t(l ? 'מעדכנים את המקום שלי': 'מקום חדש להתאמן', l ? 'Edit my training space': 'A new place to train')}`
  ) + `</h2><label>` + (
    `${t('שם המקום', 'Space name')}`
  ) + `<input id="location-name" maxlength="80" value="` + (
    `${esc(l?.name || '')}`
  ) + `" placeholder="` + (
    `${t('למשל הפארק ליד הבית', 'e.g. My local park')}`
  ) + `"></label><div class="equipment-picker">` + (
    `${Object.entries(equipmentNames).filter(( [k]) => k !== 'bench').map(( [key, labels]) =>(
    `<label class="equipment-option"><input type="checkbox" data-location-eq value="` + (
      `${key}`
    ) + `" ` + (
      `${l?.equipment.includes(key) ? 'checked': ''}`
    ) + `><span>` + (
      `${tx(labels)}`
    ) + `</span></label>`)).join('')}`
  ) + `</div><div class="form-error" id="location-error"></div><button class="full-width" ` + `id="location-save">` + (
    `${t('שמירת המקום', 'Save space')}`
  ) + `</button>`));
  on('#location-save',() => {
    const name = $('#location-name').value.trim();
    if (!name) {
      $('#location-error').textContent = t('תנו למקום שם קצר.', 'Give your space a short name.');
      return
    }
    const eq = $$('[data-location-eq]:checked').map(x => x.value);
    if (l) {
      l.name = name;
      l.equipment = eq;
      if (u.activeLocation === l.id) u.equipment = [... eq]
    } else {
      if (u.locations.length >= 20) {
        $('#location-error').textContent = t('אפשר לשמור עד 20 מקומות.', 'Up to 20 spaces are supported.');
        return
      }
      u.locations.push( {
        id: crypto.randomUUID(), name, equipment: eq
      })
    }
    save();
    $('#modal').close();
    settings()
  })
}
async function research() {
  shell(( (
    `${pageHead(t('נבנה בסקרנות. משותף בשקיפות.', 'BUILT WITH CURIOSITY. SHARED WITH HONESTY.'), t('לכל החלטה, יש מקור.',
    'Every decision has a source.'), t('מה נבדק, מה נשאר פתוח ומה עדיין בגדר השערת מוצר.',
    'What we checked, what remains open and what is still a product hypothesis.'))}`
  ) + `<p>ההדמיות נוצרו במחשב וטרם עברו ביקורת מאמן; טווחי הזמן לסקילים הם הערכות עריכתיות טיפוסיות, ` +
  `משתנים מאוד ואינם מועד מובטח.</p><div class="notice">` + (
    `${t('הסקירה ממוקדת ומוצהרת בהיקפה. אין כאן סריקה של כל הרשת, אישור רפואי או טענה שהמוצר טוב מכל חלופה.',
    'This is a scoped review, not an exhaustive scan, medical approval or claim of superiority.')}`
  ) + `</div><div class="research-metrics stats-grid"><div class="card stat"><strong>` + (
    `${exercises.length}`
  ) + `</strong><small>` + (
    `${t('תרגילים עם תוכן מקורי', 'exercises with original guidance')}`
  ) + `</small></div><div class="card stat"><strong>` + (
    `${skills.length}`
  ) + `</strong><small>` + (
    `${t('מפות למידת סקיל', 'skill roadmaps')}`
  ) + `</small></div><div class="card stat"><strong>` + (
    `${exercises.filter(e => e.media.length).length}`
  ) + `</strong><small>` + (
    `${t('תרגילים עם קישור למקור חזותי', 'exercises linked to visual references')}`
  ) + `</small></div></div><div id="research-sources" class="grid"></div><section class="card" ` + `style="margin-top:24px"><h2>` + (
    `${t('הגבולות שלנו, בגלוי', 'Our limits, openly')}`
  ) + `</h2><p>` + (
    `${t(('כללי התוכנית והמינונים הם כללי מוצר מתועדים, שדורשים ביקורת מאמן עצמאית. אין פתיחה אוטומטית של ' +
    'סקילים. רוב התוכן טרם עבר ביקורת טכניקה חיצונית; קישורי הווידאו נבדקו לזיהוי ונושא, לא כתחליף ' + 'לבדיקה אישית.'),
    ('Program rules and dosage are documented product rules awaiting independent coach review. ' +
    'Skills never unlock automatically. Content still needs independent technique review; video ' +
    'identity and topic checks do not replace individual assessment.'))}`
  ) + `</p><p>` + (
    `${t(('השמות הם כיווני עבודה מקוריים שטרם עברו בדיקת סימן מסחר. האיורים סכמטיים ומותאמים לכל תנועה, ' + 'ואינם תחליף להדרכה מקצועית.'),
    ('Names are original working identities without trademark clearance. Movement-specific schematic ' +
    'illustrations are not a substitute for individual coaching.'))}`
  ) + `</p><p>` + (
    `${t(('זיהוי טקסט אוטומטי, סנכרון חשבונות, ניתוח טכניקה בווידאו ומסלולי שיקום אינם פעילים. שמירת תוכן ' +
    'מקומית והוספה למסך הבית אינן מחליפות גיבוי.'),('Automatic OCR, account sync, video technique analysis and rehabilitation programs are not ' +
    'active. Local storage and installation do not replace backups.'))}`
  ) + `</p></section>`));
  try {
    state.sourceCache ??= await fetch('./data/research_sources.v2.json').then(r => r.json());
    if (state.page !== 'research' && state.profileSection !== 'sources') return;
    const list = Array.isArray(state.sourceCache) ? state.sourceCache: state.sourceCache.sources || [];
    $('#research-sources').innerHTML = list.map(s =>(`<article class="card research-card"><span class="chip">` + (
      `${esc(s.type || s.source_type || 'Primary source')}`
    ) + `</span><h3>` + (
      `${esc(s.title || s.author || s.id)}`
    ) + `</h3><p>` + (
      `${esc(s.claim || s.summary || s.topic || '')}`
    ) + `</p><small>` + (
      `${t('מקור לעיון ולשקיפות; אינו אישור מקצועי לתוכנית.', 'Reference for transparency; not a professional endorsement of the program.')}`
    ) + `</small><div class="divider"></div><a href="` + (
      `${esc(safeUrl(s.url))}`
    ) + `" target="_blank" rel="noopener noreferrer">` + (
      `${t('למקור המקורי', 'Original source')}`
    ) + ` ` + (
      `${icon('external', 14)}`
    ) + `</a></article>`)).join('')
  } catch {
    $('#research-sources').innerHTML =(`<p>` + (
      `${t('לא ניתן לטעון מקורות כרגע.', 'Sources could not be loaded.')}`
    ) + `</p>`)
  }
}
async function showInstall() {
  const standalone = window.matchMedia('(display-mode: standalone)').matches || navigator.standalone;
  if (standalone) return toast(t('האפליקציה כבר פתוחה ממסך הבית.', 'You are already using the installed app.'));
  if (state.installPrompt) {
    state.installPrompt.prompt();
    await state.installPrompt.userChoice;
    state.installPrompt = null;
    return
  }
  modal((`<div class="install-brand">` + (
    `${LOGO_SVG}`
  ) + `</div><h2>` + (
    `${t('מרחב האימון שלך, בלחיצה.', 'Your training space, one tap away.')}`
  ) + `</h2><p>` + (
    `${t('להוסיף את האפליקציה למסך הבית דרך הדפדפן בטלפון. אפשרות ההתקנה תלויה בדפדפן ובמכשיר.',
    'Add the app from your phone browser. Installation options depend on your browser and device.')}`
  ) + `</p><div class="install-platform"><strong>` + (
    `${t('אייפון ואייפד · ספארי', 'iPhone / iPad · Safari')}`
  ) + `</strong><p>` + (
    `${t('לפתוח את הקישור בדפדפן ספארי ← שיתוף ← הוספה למסך הבית ← הוספה.', 'Open the link in Safari → Share → Add to Home Screen → Add.')}`
  ) + `</p></div><div class="install-platform"><strong>` + (
    `${t('אנדרואיד · כרום', 'Android · Chrome')}`
  ) + `</strong><p>` + (
    `${t('לפתוח את הקישור בדפדפן כרום ← תפריט ⋮ ← התקנת אפליקציה או הוספה למסך הבית.',
    'Open the link in Chrome → ⋮ menu → Install app or Add to Home screen.')}`
  ) + `</p></div><div class="install-platform"><strong>` + (
    `${t('מחשב · כרום או אדג׳', 'Desktop · Chrome / Edge')}`
  ) + `</strong><p>` + (
    `${t('חפשו את סמל ההתקנה בשורת הכתובת או בתפריט הדפדפן.', 'Look for the install icon in the address bar or browser menu.')}`
  ) + `</p></div><small>` + (
    `${t(('להשתמש בקישור מאובטח. כתובת מקומית פועלת רק במחשב שבו השרת רץ. נתונים מהתצוגה המקומית לא ' +
    'עוברים אוטומטית לכתובת אחרת — להשתמש בייצוא וייבוא.'),(
    'Use the HTTPS link. Localhost only works on the host computer. Data does not automatically ' +
    'transfer between addresses; use export and import.'))}`
  ) + `</small>`))
}
export {
  privacy, profileMenu, exportProfile, settings, recoverySettings, locationEditor, research, showInstall
};
