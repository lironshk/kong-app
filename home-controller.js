import {
  dayKey, weeklyReview, stepReference
}
from './home-signals.js?v=31';
import {
  homeModel
}
from './home-view.js?v=31';
import {
  searchCities, fetchForecast, weatherPolicy
}
from './home-weather.js?v=31';
import {
  recordLesson
}
from './home-content.js?v=31';
import {
  validateHome
}
from './home-storage.js?v=31';
import {
  setDailyCheckIn
}
from './store.js?v=31';
import {
  escapeHTML as esc
}
from './ui.js?v=31';
const $ = s => document.querySelector(s);
export function bindHome( {
  profile: p, save, render, go, modal, toast, onCoach =() => go('coach')
}) {
  p.home ??= {
  };
  const h = p.home, date = dayKey(), model = homeModel(p), s = model.signals;
  const commit =(patch, remove = []) => {
    const before = structuredClone(p.home);
    try {
      const next = {
        ... p.home, ... patch
      };
      for (const key of remove) delete next[key];
      p.home = validateHome(next);
      if (!save()) {
        p.home = before;
        return false
      }
      render();
      return true
    } catch {
      p.home = before;
      toast('לא נשמר. לבדוק את הערכים ולנסות שוב.');
      return false
    }
  };
  // A shown lesson stays stable for the day; reading ends the lesson flow until tomorrow.
  if (model.lesson && !h.lessonHistory?.some(x => x.date === date && x.id === model.lesson.id)) {
    p.home = {
      ... p.home, lessonHistory: recordLesson(p.home.lessonHistory, model.lesson, date, {
        read: false
      })
    };
    save()
  }
  function wireCheckIn(form) {
    if (form) {
      form.onsubmit = event => {
        event.preventDefault();
        const data = new FormData(form), entry = {
          sorenessScale: 4, updated_at: new Date().toISOString()
        };
        for (const key of['sleepHours', 'sleepQuality', 'energy', 'soreness', 'weightKg', 'steps', 'waterLiters']) {
          const v = data.get(key);
          if (v !== null && v !== '') entry[key] = Number(v)
        }
        if (data.get('sorenessArea')) entry.sorenessArea = data.get('sorenessArea').trim();
        for (const key of['proteinTargetHit', 'pain']) if (data.get(key)) entry[key] = data.get(key) === 'yes';
        const before = structuredClone(p.checkIns || {
        });
        try {
          setDailyCheckIn(p, date, entry);
          if (!save()) {
            p.checkIns = before;
            return
          }
          if ($('#modal')?.open) $('#modal').close();
          render();
          toast('נשמר. ההצעה להיום עודכנה.')
        } catch {
          p.checkIns = before;
          $('#daily-error').textContent = 'לבדוק שהערכים בטווח המותר.'
        }
      }
    }
  }
  if (s.reviewDue && h.reviewAvailable !== s.reviewKey) {
    p.home = {
      ... p.home, reviewAvailable: s.reviewKey
    };
    save()
  }
  wireCheckIn($('#daily-check-in'));
  function review() {
    const review = weeklyReview(p);
    modal( (
      `<h2>דקה לשבוע הבא</h2><p>` +
      `${review.sessions}` +
      ` אימונים תועדו בשבוע שהסתיים. ` +
      `${review.skillDays}` +
      ` ימי תרגול סקיל תועדו בשבוע שהסתיים.</p><p>` +
      `${review.progress ? 'התקדמות בתיעוד: ' + review.progress.actual + ' באותה וריאציה ותנאים.': 'אין כרגע שיפור בר־השוואה להציג. כל ביצוע שתיעדת נשמר.'}` +
      `</p><form id="home-review-form"><label>מה הקשה השבוע? רשות<textarea name="obstacle" ` +
      `maxlength="500">` +
      `${esc(h.reviewObstacle || '')}` +
      `</textarea></label><label>מתי הכי סביר שהאימון הראשון יקרה?<input name="action" ` +
      `maxlength="500" placeholder="ביום ראשון אחרי העבודה; אם חם, אבחר חלופה בבית" value="` +
      `${esc(h.weeklyAction || '')}` +
      `"></label><button type="submit">שמירת העוגן הבא</button></form><button class="text-button" ` +
      `id="home-close-review">לא השבוע</button>`
    ));
    $('#home-review-form').onsubmit = e => {
      e.preventDefault();
      const d = new FormData(e.target);
      if (commit( {
        weeklyAction: d.get('action').trim(), reviewObstacle: d.get('obstacle').trim(), reviewCompleted: s.reviewKey,
        ...(s.action.id === 'review' ? {
          actionDone: date
        }: {
        })
      })) $('#modal').close()
    };
    $('#home-close-review').onclick =() => {
      commit( {
        reviewDismissed: s.reviewKey
      });
      $('#modal').close()
    };
  }
  function weatherSettings(consent = false) {
    const current = p.home.weather || {
    }, token = {
      cancelled: false
    };
    modal( (
      `<h2>תחזית לפי בחירה</h2><p>אפשר לקבל תחזית לפי עיר בהסכמה.</p><details><summary>פירוט</summary>` +
      `<p>החיפוש והתחזית משתמשים בשירות תחזית פתוח. הספק מקבל כתובת רשת ומיקום עיר או מיקום חד־פעמי, ` +
      `ללא נתוני אימון. ניתן לכבות ולמחוק בכל עת. הגישה החינמית מיועדת לשימוש לא מסחרי.</p></details>` +
      `<a href="https://open-meteo.com/en/terms" target="_blank" rel="noopener noreferrer">תנאים ` +
      `ופרטיות של שירות התחזית</a>` +
      `${consent ? (
        '<label class="check-label"><input type="checkbox" id="home-weather-agree">הסכמה לחיבור לשירות ' +
        'ולשליחת מיקום העיר או מיקום חד־פעמי</label>'
      ): ''}` +
      `<form id="home-city-search"><label>עיר<input name="city" minlength="2" maxlength="80" required>` +
      `</label><button type="submit" class="secondary">חיפוש עיר</button></form><div ` +
      `id="home-city-results"></div><button id="home-geo" class="secondary">מיקום חד־פעמי בהסכמה` +
      `</button><p id="home-city-status" role="status"></p><form id="home-window-form"><label>תחילת ` +
      `חלון יציאה<input name="start" type="number" min="0" max="22" value="` +
      `${current.windows?.[0]?.start ?? 6}` +
      `" required></label><label>סיום חלון יציאה<input name="end" type="number" min="2" max="24" ` +
      `value="` +
      `${current.windows?.[0]?.end ?? 20}` +
      `" required></label><button type="submit" class="secondary">שמירת שעות מועדפות</button></form>` +
      `<p>ללא חלון מועדף יוצגו שתי חלופות. אין כאן מידע על תאורה או בטיחות של פארק בלילה.</p>`
    ));
    const dialog = $('#modal'), oldClose = dialog.onclose;
    dialog.onclose =() => {
      token.cancelled = true;
      oldClose?.()
    };
    const agreed =() => !consent || $('#home-weather-agree')?.checked === true;
    async function choose(city) {
      if (!agreed() || token.cancelled) return;
      const updated = {
        ... p.home.weather, consent: true, city
      };
      delete updated.cache;
      delete updated.selectedWindow;
      if (commit( {
        weather: updated, parkPlanning: true
      })) dialog.close()
    }
    $('#home-city-search').onsubmit = async e => {
      e.preventDefault();
      if (!agreed()) {
        $('#home-city-status').textContent = 'יש לבחור הסכמה לפני חיפוש.';
        return
      }
      const status = $('#home-city-status'), results = $('#home-city-results');
      status.textContent = 'מחפשים עיר…';
      try {
        const cities = await searchCities(new FormData(e.target).get('city'), {
          consent: true
        });
        if (token.cancelled) return;
        results.innerHTML = cities.map((c, i) => (
          `<button class="secondary" data-city-index="` +
          `${i}` +
          `">` +
          `${esc(c.name)}` +
          ` · ` +
          `${esc(c.country)}` +
          `</button>`
        )).join('');
        status.textContent = cities.length ? 'לבחור את העיר המתאימה.': 'לא נמצאה עיר. לנסות שם נוסף.';
        results.querySelectorAll('[data-city-index]').forEach(b => b.onclick =() => choose(cities[Number(b.dataset.cityIndex)]))
      } catch {
        if (!token.cancelled) status.textContent = 'החיפוש אינו זמין כרגע. אפשר לנסות שוב.'
      }
    };
    $('#home-geo').onclick =() => {
      if (!agreed()) {
        $('#home-city-status').textContent = 'יש לבחור הסכמה לפני שימוש במיקום.';
        return
      }
      if (!navigator.geolocation) {
        $('#home-city-status').textContent = 'המיקום אינו זמין. אפשר לבחור עיר.';
        return
      }
      navigator.geolocation.getCurrentPosition(pos => {
        if (!token.cancelled) choose( {
          name: 'המיקום שבחרת', latitude: Math.round(pos.coords.latitude * 100) / 100, longitude: Math.round(pos.coords.longitude * 100) / 100
        })
      },() => {
        if (!token.cancelled) $('#home-city-status').textContent = 'המיקום לא התקבל. אפשר לבחור עיר לפי שם.'
      }, {
        enableHighAccuracy: false, maximumAge: 0, timeout: 10000
      })
    };
    $('#home-window-form').onsubmit = e => {
      e.preventDefault();
      const d = new FormData(e.target), start = Number(d.get('start')), end = Number(d.get('end'));
      if (end - start < 2) {
        $('#home-city-status').textContent = 'לבחור חלון של שעתיים לפחות.';
        return
      }
      if (commit( {
        weather: {
          ... p.home.weather, windows: [ {
            start, end
          }]
        }
      })) dialog.close()
    };
  }
  async function refreshWeather() {
    const w = p.home.weather;
    if (!weatherPolicy(w, Date.now(), navigator.onLine !== false).fetch) return;
    const cityKey = JSON.stringify(w.city);
    try {
      const cache = await fetchForecast(w);
      if (p.home.weather?.consent && JSON.stringify(p.home.weather.city) === cityKey) {
        p.home = validateHome( {
          ... p.home, weather: {
            ... p.home.weather, cache
          }
        });
        if (save() && $('#home-weather-status')) render()
      }
    } catch {
      const status = $('#home-weather-status');
      if (status) status.textContent = 'העדכון לא זמין כרגע. המלצות ישנות אינן מוצגות.'
    }
  }
  function preferences() {
    const suggestedSteps = stepReference(p.checkIns);
    const checks = [ ['lessonsOff', 'לכבות שיעורים קצרים'], ['fasting', 'אני בצום כרגע'], ['sabbathRest',
    'שבת כיום מנוחה'], ['supplementInterest', 'מעניין אותי ללמוד על תוספים'], ['creatineChosen', 'כבר בחרתי להשתמש בקריאטין'],
    ['caffeineInterest', 'מעניין אותי ללמוד על קפאין'], ['daylightInterest', 'מעניין אותי עוגן אור יום'],
    ['parkPlanning', 'להציג תכנון יציאה לפארק']];
    modal( (
      `<h2>העדפות הבית</h2><button id="home-open-weather" type="button" class="secondary">הפעלה או ` +
      `עריכה של תחזית</button><form id="home-prefs-form">` +
      `${checks.map(( [key, label]) => (
        `<label class="check-label"><input type="checkbox" name="` +
        `${key}` +
        `" ` +
        `${h[key] ? 'checked': ''}` +
        `>` +
        `${label}` +
        `</label>`
      )).join('')}` +
      `${[ ['weight', 'משקל'], ['nutrition', 'תזונה'], ['steps', 'צעדים']].map(( [key, label]) => (
        `<label class="check-label"><input type="checkbox" name="hide-` +
        `${key}` +
        `" ` +
        `${h.hidden?.includes(key) ? 'checked': ''}` +
        `>להסתיר ` +
        `${label}` +
        `</label>`
      )).join('')}` +
      `<label>סקיל למעקב<select name="skill"><option value="">ללא בחירה</option>` +
      `${[ ['wall-handstand', 'עמידת ידיים מול קיר'], ['tuck-lsit', 'ישיבת תמיכה מכווצת'], ['active-hang',
      'תלייה פעילה']].map(( [id, label]) => (
        `<option value="` +
        `${id}` +
        `" ` +
        `${h.skill === id ? 'selected': ''}` +
        `>` +
        `${label}` +
        `</option>`
      )).join('')}` +
      `</select></label><label>הרגל אישי שבחרת<input name="habit" maxlength="500" value="` +
      `${esc(h.habit || '')}` +
      `"></label><label>יעד צעדים שבחרת · רשות<input name="stepTarget" type="number" min="0" ` +
      `max="100000" value="` +
      `${h.stepTarget ?? ''}` +
      `"></label>` +
      `${suggestedSteps !== null ? (
        `<p>הצעת תכנון לפי חציון אישי ועוד 500 צעדים: ` +
        `${suggestedSteps}` +
        `. נשמרת רק לפי בחירתך.</p><button type="button" id="home-choose-step-target" class="secondary">` +
        `לבחור ביעד המוצע</button>`
      ): ''}` +
      `<label>שעת שינה רצויה<input name="bedtime" type="time" value="` +
      `${h.bedtime || ''}` +
      `"></label><label>יום סקירה שבועית<select name="reviewDay">` +
      `${['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'].map((d, i) => (
        `<option value="` +
        `${i}` +
        `" ` +
        `${i ===(h.reviewDay ?? 6) ? 'selected': ''}` +
        `>` +
        `${d}` +
        `</option>`
      )).join('')}` +
      `</select></label><label>תחילת שבוע<select name="weekStart"><option value="0">ראשון</option>` +
      `<option value="1" ` +
      `${h.weekStart === 1 ? 'selected': ''}` +
      `>שני</option></select></label><label>יעד אימונים להמשך השבוע<input name="target" type="number" ` +
      `min="1" max="14" value="` +
      `${s.week.target || 3}` +
      `"></label><label class="check-label"><input type="checkbox" name="rest" ` +
      `${(h.restDates || []).includes(date) ? 'checked': ''}` +
      `>היום יום מנוחה מתוכנן</label><label class="check-label"><input type="checkbox" name="paused" ` +
      `${(h.pausedWeeks || []).includes(s.week.start) ? 'checked': ''}` +
      `>השבוע הוא שבוע הפסקה</label><button type="submit">שמירת ההעדפות</button></form>`
    ));
    if ($('#home-choose-step-target')) $('#home-choose-step-target').onclick =() => {
      $('#home-prefs-form').querySelector('[name=stepTarget]').value = String(suggestedSteps)
    };
    $('#home-open-weather').onclick =() => weatherSettings(!p.home.weather?.consent);
    $('#home-prefs-form').onsubmit = e => {
      e.preventDefault();
      const d = new FormData(e.target), patch = Object.fromEntries(checks.map(( [k]) => [k, d.has(k)]));
      patch.hidden = ['weight', 'nutrition', 'steps'].filter(k => d.has('hide-' + k));
      patch.habit = d.get('habit').trim();
      patch.skill = d.get('skill');
      const remove = [];
      if (d.get('stepTarget') !== '') patch.stepTarget = Number(d.get('stepTarget'));
      else remove.push('stepTarget');
      if (d.get('bedtime')) patch.bedtime = d.get('bedtime');
      else remove.push('bedtime');
      patch.reviewDay = Number(d.get('reviewDay'));
      patch.weekStart = Number(d.get('weekStart'));
      const target = Number(d.get('target'));
      patch.targetHistory = h.targetHistory?.length ? h.targetHistory: [ {
        date: '1970-01-01', target: new Set(p.days || []).size || 3
      }];
      if (target !== s.week.target) patch.targetHistory = [... patch.targetHistory, {
        date, target
      }];
      patch.restDates = [...(h.restDates || []).filter(x => x !== date), ...(d.has('rest') ? [date]: [])];
      patch.pausedWeeks = [...(h.pausedWeeks || []).filter(x => x !== s.week.start), ...(d.has('paused') ? [s.week.start]: [])];
      if (commit(patch, remove)) {
        $('#modal').close();
        if (target !== s.week.target) toast('היעד עודכן להמשך השבוע')
      }
    };
  }
  const actions = {
    pain:() => {
      modal( (
        '<h2>איך האזור מרגיש היום?</h2><p>דיווח כאב נפרד מתפיסות. כאב שנמשך, חוזר או מגביל תנועה מצריך ' +
        'בדיקה והתאמה מקצועית.</p><button id="home-pain-current" class="secondary">יש כאב עכשיו</button>' +
        '<button id="home-pain-clear" class="secondary">הכאב חלף</button>'
      ));
      for (const[id, value] of[ ['#home-pain-current', true], ['#home-pain-clear', false]]) $(id).onclick =() => {
        const before = structuredClone(p.checkIns || {
        });
        setDailyCheckIn(p, date, {
          pain: value, updated_at: new Date().toISOString()
        });
        if (save()) {
          $('#modal').close();
          if (!value) onCoach('normal');
          else render()
        } else p.checkIns = before
      }
    }, resume:() => go('coach'), heat:() => go('coach'), lighter:() => onCoach('tired'), workout:() => onCoach('normal'),
    checkin:() => {
      const template = $('#home-checkin-template');
      if (template) {
        modal(template.innerHTML);
        const details = $('#modal').querySelector('#home-checkin-details');
        if (details) details.open = true;
        wireCheckIn($('#modal').querySelector('#daily-check-in'));
        $('#modal').querySelectorAll('[data-home-action]').forEach(b => b.onclick =() => {
          const action = b.dataset.homeAction;
          if (action === 'skip-checkin') {
            $('#modal').close();
            commit( {
              checkInSkipped: date
            })
          }
        });
        $('#modal').querySelectorAll('[data-page]').forEach(b => b.onclick =() => {
          $('#modal').close();
          go(b.dataset.page)
        });
        $('#modal').querySelector('#daily-check-in input')?.focus()
      }
    }, review, recovery:() => commit( {
      actionDone: date
    }), chosen:() => commit( {
      actionDone: date
    }), 'anchor-done':() => commit( {
      anchorDismissed: date
    }), 'anchor-dismiss':() => commit( {
      anchorDismissed: date
    }), 'skip-checkin':() => commit( {
      checkInSkipped: date
    }), 'not-today':() => s.action.id === 'pain' ? actions.pain(): commit( {
      actionDone: date, ...(s.action.id === 'heat' ? {
        weather: Object.fromEntries(Object.entries(p.home.weather).filter(( [k]) => k !== 'selectedWindow'))
      }: {
      })
    }), 'review-dismiss':() => commit( {
      reviewDismissed: s.reviewKey
    }), 'seen-record':() => commit( {
      seenRecords: [...(h.seenRecords || []), s.insight.record.key + '|' + s.insight.record.date]
    }), 'weather-consent':() => weatherSettings(true), 'weather-settings':() => weatherSettings(!h.weather?.consent),
    'weather-off':() => commit( {
      weather: {
        consent: false, dismissed: true
      }
    }), 'weather-dismiss':() => commit( {
      weather: {
        consent: false, dismissed: true
      }
    }), preferences, 'read-lesson':() => {
      const l = model.lesson;
      if (!l) return;
      p.home = {
        ... p.home, lessonHistory: recordLesson(p.home.lessonHistory, l, date)
      };
      save();
      modal( (
        `<h2>` +
        `${esc(l.title)}` +
        `</h2><p>` +
        `${esc(l.text.replace(/UV/g, 'מדד הקרינה'))}` +
        `</p>` +
        `${l.sources.map(x => (
          `<p><a href="` +
          `${esc(x.url)}` +
          `" target="_blank" rel="noopener noreferrer">מקור: ` +
          `${esc(x.label)}` +
          `</a></p>`
        )).join('')}` +
        `<p>זהו מידע כללי למבוגרים בריאים. ההצעה אינה יעד אישי; להתאים אותה להעדפות, לתוכנית ולתחושה ` +
        `שלך. אפשר להמשיך גם בלי לבחור פעולה.</p>`
      ));
      const d = $('#modal'), close = d.onclose;
      d.onclose =() => {
        close?.();
        render()
      }
    }, 'hide-lesson':() => commit( {
      hiddenLessons: [...(h.hiddenLessons || []), model.lesson.id]
    }), 'less-category':() => commit( {
      lessCategories: [... new Set( [...(h.lessCategories || []), model.lesson.category])], hiddenLessons: [...(h.hiddenLessons || []),
      model.lesson.id]
    })
  };
  document.querySelectorAll('[data-home-action]').forEach(b => b.onclick =() => actions[b.dataset.homeAction]?.());
  document.querySelectorAll('[data-weather-window]').forEach(b => b.onclick =() => commit( {
    weather: {
      ... h.weather, selectedWindow: b.dataset.weatherWindow
    }
  }));
  if (h.weather?.consent) refreshWeather();
}
