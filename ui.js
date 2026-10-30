export const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, c =>( {
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}
[c]));
const paths = {
  home: 'M3 10 12 3l9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1Z', calendar:
  'M8 2v4m8-4v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z', library:
  'M4 4h5v16H4zM10 4h5v16h-5zM17 3l4 1-2 16-4-1Z', skills: 'm12 3 2.6 5.3 5.9.9-4.3 4.2 1 5.9-5.2-2.8-5.2 2.8 1-5.9L3.5 9.2l5.9-.9Z',
  chart: 'M4 4v16h17M7 14l4-4 4 2 5-7', settings: (
    'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2-5h4l.7 2.1 2 .8 2-.9 2 3.5-1.4 1.6.2 2.2 1.5 1.7-2 ' +
    '3.5-2.2-.4-1.8 1.2-.6 2.2h-4l-.7-2.1-2-.8-2 .9-2-3.5 1.4-1.6-.2-2.2L3.4 8.5l2-3.5 2.2.4 ' +
    '1.8-1.2Z'
  ), arrow: 'M19 12H5m7-7-7 7 7 7', play: 'm9 5 11 7-11 7Z', pause: 'M8 5v14m8-14v14', check: 'm5 12 4 4L19 6',
  clock: 'M12 8v5l3 2M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z', fire: 'M12 2c2 5 7 7 7 13a7 7 0 0 1-14 0c0-3 1-5 3-7 0 4 2 5 2 5s3-4 2-11Z',
  chevron: 'm9 5 7 7-7 7', plus: 'M12 5v14M5 12h14', close: 'm6 6 12 12M6 18 18 6', info:
  'M12 11v6m0-10v.1M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z', sun: (
    'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 ' +
    '19l1.5-1.5m11-11L19 5'
  ), target: 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0ZM12 12l8-8',
  download: 'M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5', upload: 'M12 16V4m-5 5 5-5 5 5M4 16v5h16v-5', volume:
  'm4 9 4 0 5-4v14l-5-4H4Zm12-1c3 2 3 6 0 8m3-11c5 4 5 10 0 14', leaf: 'M20 3c-10 0-17 3-16 10s9 9 13 2 3-12 3-12ZM5 20 16 8',
  external: 'M14 3h7v7m0-7L10 14M10 4H4v16h16v-6', edit: 'm15 4 5 5M4 15 16 3l5 5L9 20l-6 1Z', shield:
  'm12 2 8 4v6c0 5-8 10-8 10S4 17 4 12V6Zm-4 10 3 3 5-6', user: 'M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM4 21v-3c0-6 16-6 16 0v3',
  rings: 'M9 3v7m6-7v7M9 15a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm14 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z'
};
export function icon(name, size = 20) {
  return (
    `<svg width="` +
    `${size}` +
    `" height="` +
    `${size}` +
    `" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ` +
    `stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="` +
    `${paths[name] || paths.target}` +
    `"/></svg>`
  )
}
// Original schematic artwork: depicts movement categories, not a verified technique guide.
export function movementArt(group = 'push', id = '') {
  const shapes = {
    push: 'M56 139 105 101 167 110 198 142M105 101l-17 42m0 0h-22M167 110l-7 33m0 0h24', pull:
    'M75 40h100M87 40v20l25 30h28l26-30V40M126 90v44m0 0-23 39m23-39 23 39', legs:
    'M128 73v43l-35 30 43 27m-8-57 32 18 13 39M128 86l-30 22-25-16m55-6 22 20 24-9', core:
    'M56 151h135M75 140l41-32 43 9 28 30M116 108l-6 40m49-31 10 31', skill: 'M74 175h90M98 175l15-48 7-48m0 48 18 48M120 79l-20-34m20 34 29-32',
    mobility: 'M55 172h145M117 85l15 44 43 35m-43-35-45 34M120 96l-35 24-26-12m61-12 34-23'
  };
  const g = shapes[group] || shapes.push;
  const head = group === 'pull' ? '<circle cx="126" cy="73" r="12"/>': group === 'core' ? '<circle cx="62" cy="127" r="12"/>': group === 'skill'
  ? '<circle cx="121" cy="150" r="10"/>': '<circle cx="128" cy="55" r="13"/>';
  return (
    `<svg viewBox="0 0 250 205" fill="none" aria-hidden="true" class="movement-art"><circle ` +
    `cx="125" cy="105" r="76" fill="currentColor" opacity=".05"/><circle cx="125" cy="105" r="93" ` +
    `stroke="currentColor" opacity=".08"/><g stroke="currentColor" stroke-width="7" ` +
    `stroke-linecap="round" stroke-linejoin="round">` +
    `${head}` +
    `<path d="` +
    `${g}` +
    `"/></g><path d="M35 182h180" stroke="currentColor" opacity=".16" stroke-width="2"/></svg>`
  )
}
export function formatTime(s) {
  s = Math.max(0, Math.ceil(s));
  return (
    `${Math.floor(s / 60).toString().padStart(2, '0')}` +
    `:` +
    `${(s % 60).toString().padStart(2, '0')}`
  )
}
export function dateKey(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Jerusalem', year: 'numeric', month: '2-digit', day: '2-digit'
  }).formatToParts(date);
  const get = k => parts.find(p => p.type === k).value;
  return (
    `${get('year')}` +
    `-` +
    `${get('month')}` +
    `-` +
    `${get('day')}`
  )
}
export function safeUrl(url) {
  try {
    const u = new URL(url);
    return['https:', 'http:'].includes(u.protocol) ? u.href: '#'
  } catch {
    return '#'
  }
}
