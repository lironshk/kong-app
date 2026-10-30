import {
  skills
}
from './data/skills.js?v=31';
import {
  skillSelections, skillState
}
from './skill-progress.js?v=31';
import {
  weeklyMovementLedger, progressionCheckpoint
}
from './coach-insights.js?v=31';
import {
  exercises
}
from './data/exercises.js?v=31';
import {
  escapeHTML as esc, icon
}
from './ui.js?v=31';
export function renderProgressEvidence(profile, lang = 'he') {
  const t =(a, b) => lang === 'en' ? b: a;
  const ledger = weeklyMovementLedger(profile.logs);
  const ids = [... new Set((profile.logs || []).flatMap(l => l.sets || []).filter(s => s.actual > 0).map(s => s.performed_exercise_id))];
  const checks = ids.map(id => progressionCheckpoint(id, profile.logs, {
    assessmentAt: profile.assessmentAt
  })).filter(c => c.status !== 'unavailable').sort((a, b) => Number(b.eligible) - Number(a.eligible) || b.sessionCount - a.sessionCount);
  const selected = Object.values(skillSelections(profile));
  const skillCards = selected.map(id => {
    const skill = skills.find(x => x.id === id);
    if (!skill) return '';
    const state = skillState(profile, id), stage = skill.stages[state.stage], c = stage?.exit;
    return (
      `<article><h3>` +
      `${esc(lang === 'en' ? skill.en: skill.he)}` +
      `</h3><p>` +
      `${state.achieved ? t('היעד הושג', 'Achieved'): (
        `${t('שלב', 'Stage')}` +
        ` ` +
        `${state.stage + 1}` +
        ` / ` +
        `${skill.stages.length}`
      )}` +
      `</p><meter min="0" max="` +
      `${skill.stages.length}` +
      `" value="` +
      `${state.achieved ? skill.stages.length: state.stage}` +
      `" aria-label="` +
      `${t('שלבים שהושלמו', 'Completed stages')}` +
      `"></meter>` +
      `${!state.achieved && c ? (
        `<small>` +
        `${t('כדי לעבור שלב', 'Next criterion')}` +
        `: ` +
        `${c.sets || 1}` +
        ` × ` +
        `${c.value}` +
        ` ` +
        `${c.unit === 'seconds' ? t('שניות', 'seconds'): t('חזרות', 'reps')}` +
        `</small>`
      ): ''}` +
      `</article>`
    );
  }).join('');
  return (
    `<section class="evidence-panel"><div class="evidence-heading"><div><span class="chapter-label">` +
    `${t('מתקדמים לפי הביצוע', 'EVIDENCE BEFORE PROGRESSION')}` +
    `</span><h2>` +
    `${t('לכל צעד קדימה, יש בסיס.', 'A reason for every next step.')}` +
    `</h2><p>` +
    `${t('אותה וריאציה, אותם תנאים. משווים את מה שביצעת — לא רק את מה שתוכנן.',
    'Same variation, same conditions. Compare actual work, not just the plan.')}` +
    `</p></div>` +
    `${icon('target', 32)}` +
    `</div><div class="evidence-ledger">` +
    `${ledger.groups.map(g => (
      `<div><span>` +
      `${esc(lang === 'en' ? g.en: g.he)}` +
      `</span><strong>` +
      `${g.sets}` +
      `</strong><span class="evidence-volume" aria-hidden="true"><i style="width:` +
      `${Math.min(100, g.sets / Math.max(1, ... ledger.groups.map(x => x.sets)) * 100)}` +
      `%"></i></span><small>` +
      `${g.days}` +
      ` ` +
      `${t('ימים עם ביצוע השבוע', 'days with work this week')}` +
      `</small></div>`
    )).join('')}` +
    `</div><p class="micro-note">` +
    `${esc(lang === 'en' ? ledger.scopeEn: ledger.scopeHe)}` +
    `</p>` +
    `${skillCards ? (
      `<h3>` +
      `${t('הסקילים שלך', 'Your skills')}` +
      `</h3><div class="progress-skills">` +
      `${skillCards}` +
      `</div>`
    ): ''}` +
    `<div class="evidence-checkpoints">` +
    `${checks.length ? checks.slice(0, 6).map(c => {
      const e = exercises.find(e => e.id === c.exerciseId), cond = c.conditions;
      return (
        `<article class="evidence-checkpoint ` +
        `${c.eligible ? 'is-ready': ''}` +
        `"><div class="row"><strong>` +
        `${esc(lang === 'en' ? e?.en: e?.he)}` +
        `</strong><span class="chip">` +
        `${c.eligible ? t('אפשר לשקול שינוי', 'Proposal available'): t('בונים רצף', 'Building evidence')}` +
        `</span></div><div class="checkpoint-dots" aria-label="` +
        `${c.sessionCount}` +
        ` ` +
        `${t('אימונים תואמים מתוך שלושה', 'matching sessions out of three')}` +
        `">` +
        `${[0, 1, 2].map(n => (
          `<i class="` +
          `${n < c.sessionCount ? 'is-done': ''}` +
          `">` +
          `${n < c.sessionCount ? '✓': n + 1}` +
          `</i>`
        )).join('')}` +
        `</div><p>` +
        `${esc(lang === 'en' ? c.reasonEn: c.reasonHe)}` +
        `</p>` +
        `${c.currentTarget !== null ? (
          `<div class="checkpoint-dose"><strong>` +
          `${c.currentTarget}` +
          `${c.eligible ? ' → ' + c.suggestedTarget: ''}` +
          `</strong><span>` +
          `${c.unit === 'seconds' ? t('שניות', 'seconds'): t('חזרות', 'reps')}` +
          `</span></div>`
        ): ''}` +
        `<small>` +
        `${esc(cond.assistance || t('ללא סיוע מדווח', 'No assistance reported'))}` +
        ` · ` +
        `${cond.added_load || 0}` +
        ` ` +
        `${t('ק״ג', 'kg')}` +
        `${cond.setup ? ' · ' + esc(cond.setup): ''}` +
        `</small></article>`
      )
    }).join(''): (
      `<div class="evidence-empty">` +
      `${icon('chart', 28)}` +
      `<h3>` +
      `${t('הביצוע הראשון הוא נקודת ההתחלה.', 'Your first performance is the baseline.')}` +
      `</h3><p>` +
      `${t('אחרי תיעוד אימונים, יופיעו כאן התחנות הבאות והנתונים שתומכים בהן.',
      'Log your sessions to see the next checkpoints and the evidence behind them.')}` +
      `</p><button data-page="coach">` +
      `${t('לבנות אימון להיום', 'Build today’s workout')}` +
      `</button></div>`
    )}` +
    `</div><p class="micro-note">` +
    `${t( (
      'שלושה אימונים הם כלל מוצר שמרני, לא אישור מקצועי לטכניקה. הצעת שינוי תוצג לבחירה לפני אימון; ' +
      'לא פותחים סקילים אוטומטית.'
    ), (
      'Three sessions is a conservative product rule, not technique certification. Review proposals ' +
      'before training; skills never unlock automatically.'
    ))}` +
    `</p></section>`
  );
}
