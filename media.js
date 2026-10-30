import {
  escapeHTML as esc, icon
}
from './ui.js?v=31';
import {
  exerciseVisual
}
from './exercise-visuals.js?v=31';
import {
  playback
}
from './data/playback.js?v=31';
export function youtubeId(url) {
  try {
    const u = new URL(url);
    if (u.protocol !== 'https:') return null;
    const host = u.hostname.replace(/^www\./, '');
    if (! ['youtube.com', 'youtube-nocookie.com', 'youtu.be'].includes(host)) return null;
    const id = host === 'youtu.be' ? u.pathname.slice(1): u.pathname.startsWith('/embed/') ? u.pathname.split('/')[2]: u.searchParams.get('v');
    return /^[\w-]{11}$/.test(id || '') ? id: null
  } catch {
    return null
  }
}
export function playableSource(e) {
  if (!e) return null;
  const found = playback[e.id];
  if (found && /^[\w-]{11}$/.test(found.id) && found.match === 'exact') return {
    ... found, url: 'https://www.youtube.com/watch?v=' + found.id
  };
  for (const m of e.media || []) {
    const id = youtubeId(m.url);
    if (id && m.match === 'exact') return {
      id, url: m.url, source: m.url, author: m.author || 'YouTube', match: 'exact'
    }
  }
  return null
}
export function mediaPanel(e, {
  lang = 'he', visual = true
} = {
}) {
  const he = lang !== 'en', t =(a, b) => he ? a: b, name = he ? e.he: e.en, source = playableSource(e);
  if (!source) return visual ? (
    `<div class="inline-guide illustrated-guide">` +
    `${exerciseVisual(e, {
      compact: true, lang
    })}` +
    `<p class="micro-note">` +
    `${t('המחשה חזותית לצד הוראות התנועה. להנחיות מדויקות לעבור על המדריך המלא.',
    'Visual reference alongside movement instructions. Read the full guide for detailed cues.')}` +
    `</p></div>`
  ): (
    `<p class="micro-note">` +
    `${t('התרגיל מוצג באיור ובהוראות כאן. סרטון תואם עדיין לא נוסף.',
    'The illustration and instructions are available here. A matching video has not yet been added.')}` +
    `</p>`
  );
  return (
    `<section class="inline-guide" data-inline-guide data-video-id="` +
    `${esc(source.id)}` +
    `" data-video-name="` +
    `${esc(name)}` +
    `"><div class="inline-guide-player ` +
    `${visual ? '': 'compact-player'}` +
    `" data-player-slot>` +
    `${visual ? exerciseVisual(e, {
      compact: true, lang
    }): ''}` +
    `<button type="button" class="inline-play secondary" data-play-inline>` +
    `${icon('play', 23)}` +
    `<span><strong>` +
    `${t('לצפות בתרגיל כאן', 'Watch this movement here')}` +
    `</strong><small>` +
    `${he ? 'סרטון ממקור מזוהה': 'YouTube · ' + esc(source.author)}` +
    `</small></span></button></div><p class="inline-guide-caption">` +
    `${t('הנגן נטען רק בלחיצה. אפשר לעצור ולחזור לאימון בלי לצאת מהמסך.',
    'The player loads only when you play. Pause and return to training without leaving this screen.')}` +
    `</p><details class="media-source-details"><summary>` +
    `${t('מקור הסרטון ופרטיות', 'Video source & privacy')}` +
    `</summary><p>` +
    `${t('זוהה נגן במקור של היוצר; זמינות הנגינה תלויה בשירות הווידאו. זיהוי המקור אינו בדיקת טכניקה אישית.',
    (
      'The creator’s original source identifies this player. Playback depends on YouTube ' +
      'availability. Source identification is not an individual technique assessment.'
    ))}` +
    `</p><a href="` +
    `${esc(source.url)}` +
    `" target="_blank" rel="noopener noreferrer">` +
    `${he ? 'היוצר המקורי': esc(source.author)}` +
    ` · ` +
    `${t('מקור חלופי אם הנגן אינו זמין', 'Alternative source if playback is unavailable')}` +
    `</a> · <a href="https://www.youtube.com/t/terms" target="_blank" rel="noopener noreferrer">` +
    `${t('תנאי השירות', 'YouTube terms')}` +
    `</a> · <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">` +
    `${t('מדיניות הפרטיות', 'Google privacy')}` +
    `</a></details></section>`
  );
}
export function bindMedia(container = document) {
  container.querySelectorAll('[data-play-inline]').forEach(button => {
    if (button.dataset.bound) return;
    button.dataset.bound = 'true';
    button.addEventListener('click',() => {
      const panel = button.closest('[data-inline-guide]'), id = panel?.dataset.videoId;
      if (!/^[\w-]{11}$/.test(id || '')) return;
      const slot = panel.querySelector('[data-player-slot]');
      const frame = document.createElement('iframe');
      frame.title = panel.dataset.videoName || 'Exercise video';
      frame.src = (
        `https://www.youtube-nocookie.com/embed/` +
        `${id}` +
        `?autoplay=1&rel=0`
      );
      frame.className = 'inline-video-frame';
      frame.allow = 'autoplay; encrypted-media; picture-in-picture';
      frame.allowFullscreen = true;
      frame.referrerPolicy = 'strict-origin-when-cross-origin';
      slot.replaceChildren(frame);
      slot.classList.add('is-playing');
    })
  })
}
