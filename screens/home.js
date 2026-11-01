import {
  collections, lessons
}
from '../data/editorial.js?v=32';
import {
  skills
}
from '../data/skills.js?v=32';
import {
  exercises
}
from '../engine.js?v=32';
import {
  exerciseVisual
}
from '../exercise-visuals.js?v=32';
import {
  escapeHTML as esc, icon
}
from '../ui.js?v=32';
import {
  go
}
from '../router.js?v=32';
import {
  bindCommon, dashboard
}
from '../screens/coach.js?v=32';
import {
  exerciseDetail
}
from '../screens/library.js?v=32';
import {
  startOnboarding
}
from '../screens/onboarding.js?v=32';
import {
  $, $$, he, nameOf, on, t, user
}
from '../shared.js?v=32';
import {
  modal, shell
}
from '../shell.js?v=32';
const editorialText =(item, key) => he() ?(item[key + 'He'] || item[key] || ''):(item[key + 'En'] || item[key + 'He'] || item[key] || '');
function destinations() {
  return(`<section class="explore-split"><div class="story-panel">` + (
    `${exerciseVisual(exercises.find(e => e.id === 'squat') || exercises[0], {
      lang: he() ? 'he': 'en', compact: false
    })}`
  ) + `<div><span class="chapter-label">` + (
    `${t('סקיל נבנה בתרגול', 'SKILL IS A PRACTICE')}`
  ) + `</span><h2>` + (
    `${t('לא קסם.\nיכולת שנבנית.', 'Not magic.\nA practice.')}`
  ) + `</h2><p>` + (
    `${t('מהמתח הראשון ועד שליטה באוויר. לכל יכולת יש יסודות, ולכל התחלה יש מקום.',
    'From your first pull-up to control in the air. Every skill has foundations. Every beginning belongs.')}`
  ) + `</p></div></div><div class="skill-destinations">` + (
    `${skills.slice(0, 4).map((sk, i) =>(`<button class="skill-destination" data-skill="` + (
      `${esc(sk.id)}`
    ) + `"><span class="destination-index">0` + (
      `${i + 1}`
    ) + `</span><span><small>` + (
      `${esc(he() ? '': sk.en)}`
    ) + `</small><strong>` + (
      `${esc(nameOf(sk))}`
    ) + `</strong><em>` + (
      `${sk.steps.length}`
    ) + ` ` + (
      `${t('תחנות במפת הדרך', 'learning stations')}`
    ) + `</em></span>` + (
      `${icon('arrow', 21)}`
    ) + `</button>`)).join('')}`
  ) + `<button class="secondary" data-page="library">` + (
    `${t('לכל ספריית התנועה', 'Explore the movement library')}`
  ) + ` ` + (
    `${icon('arrow', 17)}`
  ) + `</button></div></section>`)
}
function bindEditorial() {
  bindCommon();
  $$('[data-collection]').forEach(b => b.onclick =() => openCollection(b.dataset.collection));
  $$('[data-lesson]').forEach(b => b.onclick =() => openLesson(b.dataset.lesson));
  $$('[data-start-journey]').forEach(b => b.onclick =() => startOnboarding());
  on('#explore-scroll',() => go('library'))
}
function openCollection(id) {
  const c = collections.find(x => x.id === id);
  if (!c) return;
  const items =(c.exerciseIds || []).map(id => exercises.find(e => e.id === id)).filter(Boolean);
  modal((`<div class="collection-detail"><span class="chapter-label">` + (
    `${esc(editorialText(c, 'category') || 'EMBER EDIT')}`
  ) + `</span><h2>` + (
    `${esc(editorialText(c, 'title'))}`
  ) + `</h2><p class="detail-intro">` + (
    `${esc(editorialText(c, 'subtitle') || editorialText(c, 'description'))}`
  ) + `</p><p class="micro-note">` + (
    `${t('אוסף לימודי, לא אימון נוסף ולא מינון לביצוע. התוכנית האישית קובעת מה ומתי לתרגל.',(
    'An educational collection, not an additional workout or prescribed dose. Your personal plan ' + 'determines what to practise and when.'))}`
  ) + `</p>` + (
    `${(c.takeaways || []).length ?(`<ul>` + (
      `${c.takeaways.map(x =>(`<li>` + (
        `${esc(x)}`
      ) + `</li>`)).join('')}`
    ) + `</ul>`): ''}`
  ) + `<div class="collection-movements">` + (
    `${items.map((e, i) =>(`<button class="roadmap-step" data-collection-ex="` + (
      `${esc(e.id)}`
    ) + `"><span class="list-number">` + (
      `${String(i + 1).padStart(2, '0')}`
    ) + `</span><span><strong>` + (
      `${esc(nameOf(e))}`
    ) + `</strong><small>` + (
      `${esc(he() ? '': e.en)}`
    ) + `</small></span>` + (
      `${icon('arrow', 18)}`
    ) + `</button>`)).join('')}`
  ) + `</div><button class="full-width" id="collection-start">` + (
    `${user() ? t('לתוכנית האישית שלי', 'Open my personal plan'): t('לבנות תוכנית שמתאימה לי', 'Build a plan around me')}`
  ) + `</button></div>`));
  $$('[data-collection-ex]').forEach(b => b.onclick =() => {
    $('#modal').close();
    exerciseDetail(b.dataset.collectionEx)
  });
  on('#collection-start',() => {
    $('#modal').close();
    user() ? go('program'): startOnboarding()
  })
}
function openLesson(id) {
  const lesson = lessons.find(l => l.id === id);
  if (lesson) exerciseDetail(lesson.exerciseId)
}
function landing() {
  shell((`<section class="coach-welcome welcome-page"><div class="welcome-main"><span ` + `class="chapter-label">` + (
    `${t('קונג / קליסטניקס אישי', 'KONG / PERSONAL CALISTHENICS')}`
  ) + `</span><h1>` + (
    `${t('הגוף שלך.<br><em>תוכנית עם כיוון.</em>', 'Your body.<br><em>A plan with purpose.</em>')}`
  ) + `</h1><p>` + (
    `${t('אימון שמתאים לזמן ולציוד שלך. הדגמות שמבהירות את התנועה. והתקדמות שמבוססת על מה שבאמת עשית.',
    'Training that fits your time and equipment. Clear movement guides. Progress built on what you actually do.')}`
  ) + `</p><div class="welcome-actions"><button id="welcome-start">` + (
    `${t('לבנות את מסלול האימון שלי', 'Build my training path')}`
  ) + ` ` + (
    `${icon('arrow', 20)}`
  ) + `</button><button class="secondary" data-page="library">` + (
    `${t('לראות את ההדגמות', 'Explore movement guides')}`
  ) + `</button></div><div class="welcome-proof"><span>` + (
    `${icon('check', 16)}`
  ) + ` ` + (
    `${t('אימון יומי בלחיצה', 'One-click daily sessions')}`
  ) + `</span><span>` + (
    `${icon('check', 16)}`
  ) + ` ` + (
    `${t('הסבר לכל בחירה', 'A reason for every choice')}`
  ) + `</span><span>` + (
    `${icon('check', 16)}`
  ) + ` ` + (
    `${t('הנתונים נשמרים במכשיר', 'Your data stays on device')}`
  ) + `</span></div></div><div class="welcome-art"><img src="./assets/movements/squat-v1.webp" ` + `width="1536" height="1024" alt="` + (
    `${t('איור סקוואט: עמידת התחלה וירידה בשליטה', 'Squat illustration: standing setup and controlled lowering')}`
  ) + `" fetchpriority="high"><div class="welcome-caption"><span class="chapter-label">` + (
    `${t('להבין. לתרגל. להתקדם.', 'UNDERSTAND. PRACTISE. PROGRESS.')}`
  ) + `</span><strong>` + (
    `${t('כל תנועה מתחילה בהבנה.', 'Every movement starts with understanding.')}`
  ) + `</strong><small>` + (
    `${t('', 'AI illustration · independent coach review pending')}`
  ) + `</small></div></div><div class="welcome-feature-grid">` + (
    `${[ [t('אימון להיום, לא ניחוש', 'A session for today'), t('זמן, מקום ומוכנות הופכים לתוכנית ברורה עם חימום ומנוחות.',
    'Your time, space and readiness become a clear plan with warm-up and rests.')], [t('הביצוע שלך משנה',
    'Your work shapes the next step'), t('המשוב והסטים שיתועדו עוזרים לשמר, להפחית או להציע שינוי קטן בעומס.',
    'Logged sets and feedback help maintain, reduce or propose a small change in dose.')], [t('הדרך לסקיל הבא',
    'The path to your next skill'), t('רואים את היסודות, את התחנות ואת ההיסטוריה. בונים שליטה לפני שמתקדמים.',
    'See foundations, checkpoints and your history. Build control before moving ahead.')]].map(( [title,
    desc], i) =>(`<article class="welcome-step"><span class="welcome-step-number">0` + (
      `${i + 1}`
    ) + `</span><h2>` + (
      `${title}`
    ) + `</h2><p>` + (
      `${desc}`
    ) + `</p></article>`)).join('')}`
  ) + `</div></section>`));
  on('#welcome-start',() => startOnboarding());
  bindCommon();
}
export {
  editorialText, destinations, bindEditorial, openCollection, openLesson, landing
};

export function home(){return dashboard();}
