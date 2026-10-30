const displayModes = ['light', 'dark', 'sunlight'];
const KEY = 'calisthenics-brand-v1';
export const BRAND_NAME = 'KONG';
export const BRAND_TAGLINE = 'כוח בשקט.';
export const BRAND_DESCRIPTION = 'מאמן קליסטניקס אישי';
export const LOGO_SVG = (
  "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 56\" fill=\"currentColor\" " +
  "role=\"img\" aria-label=\"KONG\"><path d=\"M16 9.373A24 24 0 1 0 32 9.373V0H28V18.584A14 14 0 " +
  "1 1 20 18.584V0H16Z\"/></svg>"
);
export const WORDMARK_SVG = (
  "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 194 56\" fill=\"currentColor\" " +
  "role=\"img\" aria-label=\"KONG\"><path d=\"M0 56V8H10V25L27 8H41L20 31L43 56H29L10 36V56Z\"/>" +
  "<g transform=\"translate(44)\"><path d=\"M16 9.373A24 24 0 1 0 32 9.373V0H28V18.584A14 14 0 1 " +
  "1 20 18.584V0H16Z\"/></g><path d=\"M99 56V8H109L134 39V8H144V56H134L109 25V56Z\"/><path " +
  "d=\"M194 24H184Q183 18 174 18H172Q161 18 161 28V36Q161 46 172 46H176Q184 46 184 " +
  "39H173V29H194V39Q194 56 176 56H172Q151 56 151 36V28Q151 8 172 8H174Q194 8 194 24Z\"/></svg>"
);
let chosen = 'light';
export const brand = {
  name: BRAND_NAME, tagline: BRAND_TAGLINE, description: BRAND_DESCRIPTION, logo: LOGO_SVG
};
export function getDisplayMode() {
  return {
    id: chosen, ... brand
  };
}
export function applyBrand(id, {
  persist = true
} = {
}) {
  chosen = displayModes.includes(id) ? id: 'light';
  brand.id = chosen;
  if (typeof document !== 'undefined') {
    document.documentElement.dataset.theme = chosen;
    const color = getComputedStyle(document.documentElement).getPropertyValue('--canvas').trim();
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', color);
    document.querySelector('meta[name="apple-mobile-web-app-title"]')?.setAttribute('content', BRAND_NAME);
    document.title = BRAND_NAME;
  }
  if (persist) try {
    globalThis.localStorage?.setItem(KEY, chosen);
  } catch {
  }
  return getDisplayMode();
}
let saved;
try {
  saved = globalThis.localStorage?.getItem(KEY);
} catch {
}
if (saved) applyBrand(saved);
else if (typeof document !== 'undefined') {
  const sync =() => applyBrand(matchMedia('(prefers-color-scheme: dark)').matches ? 'dark': 'light',
  {
    persist: false
  });
  sync();
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change',() => {
    if (!globalThis.localStorage?.getItem(KEY)) sync()
  });
}
