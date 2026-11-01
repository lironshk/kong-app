import {mainSeconds} from './session-extras.js?v=31';
import {coachExecution} from './data/coach-execution.js?v=31';
import {executionBlock,finishExecution,movementRole,orderExecution} from './session-execution.js?v=31';
import { chooseVariation, variationBlock } from './variation-choice.js?v=31';
import { exercises } from './data/exercises.js?v=31';
import { volumeBudget } from './training-volume.js?v=31';
import {
  workSeconds, recoveryBefore
} from './training-evidence.js?v=31';
const byId = id => exercises.find(e => e.id === id);
const pause = (id, seconds, section) => ({
  id, he: 'מנוחה והכנה', en: 'Rest and prepare', phase: 'rest', section, seconds, target: null,
  cue: 'לנשום בנוחות. אפשר להאריך מנוחה או לעצור.'
});
// Same exact-condition ceiling as prepared sessions; no automatic progression from archive quantities.
function historicalTarget(e, unit, target, logs, profile, now) {
  const assessment = Date.parse(profile.assessmentAt);
  const comparable = logs.filter(l => Date.parse(l.completed_at) <= +now &&
    (!Number.isFinite(assessment) || Date.parse(l.completed_at) >= assessment)).slice()
    .sort((a, b) => Date.parse(a.completed_at) - Date.parse(b.completed_at)).map(log => ({
      log, sets: (log.sets || []).filter(s => s.performed_exercise_id === e.id &&
        (!s.planned_exercise_id || s.planned_exercise_id === s.performed_exercise_id) && s.unit === unit &&
        !(typeof s.setup === 'string' ? s.setup : '').trim() &&
        !(typeof s.assistance === 'string' ? s.assistance : '').trim() && Number(s.added_load || 0) === 0 &&
        (s.side_allocation || null) === (e.perSide ? 'total_both_sides' : null) &&
        Number.isFinite(s.target) && s.target > 0 && Number.isFinite(s.actual) && s.actual >= 0)
    })).filter(x => x.sets.length).at(-1);
  if (!comparable) return target;
  const step = e.perSide ? 2 : 1, ceiling = Math.min(target, ...comparable.sets.map(s => s.target));
  const reduce = comparable.log.effort === 'hard' || comparable.sets.some(s => s.quality === 'uncertain' || s.actual < s.target);
  return reduce ? Math.max(step, Math.floor(ceiling * .8 / step) * step) : ceiling;
}
export function buildCoachSections(template, profile, options, base) {
  const now=new Date(options.now??Date.now()), logs=options.history??profile.logs??[];
  const minutes=options.minutes??template.minutes, budget=minutes*60;
  const blocked=reason=>({...base,blocked:true,reason,errors:[reason],blocks:[],exerciseIds:[],sets:0,total_seconds:0});
  if(base.recovery||base.sessionVolumeReduction||base.returnAfterBreak||options.readiness==='tired'||profile.lighterPeriod&&
    Date.parse(profile.lighterPeriod.start)<=+now&&Date.parse(profile.lighterPeriod.end)>=+now) return base;
  const audit=[], groups=[];
  const select=id=>chooseVariation(profile,id,{logs,now});
  for(const [sectionIndex,s] of template.sections.entries()) {
    if(s.type==='warmup')continue;
    for(const [itemIndex,item] of s.items.entries()) {
      const policy=coachExecution[item.id], original=byId(item.id);
      let selected=select(item.id), intent=!selected?'preparation':selected.regressed?'preparation':
        selected.id===item.id?'original':'preserves-movement';
      // A cross-family fallback must use an authored task-specific preparation, never a generic chain.
      if(!selected||selected.regressed||original.equipment.includes('rings')&&!selected.equipment.includes('rings')) {
        selected=null;
        for(const id of policy?.fallback||[]) {
          const candidate=select(id);
          if(candidate&&!candidate.regressed) {selected=candidate;break;}
        }
        intent=policy?.preserves?'preserves-movement':'preparation';
      }
      const raw=item.archivePrescription, sourceQuantity=raw.reps||raw.duration_seconds;
      const entry={slotKey:sectionIndex+':'+itemIndex,sectionIndex,itemIndex,sourceExerciseId:item.id,
        sourceName:item.sourceName,sourceSets:raw.sets?.min??raw.rounds?.min??null,
        sourceTarget:sourceQuantity?.min??null,sourceUnit:raw.duration_seconds?'seconds':raw.reps?'reps':null,
        sourcePerSide:raw.per_side,uncertain:!!item.uncertain,archivePrescription:raw,authoredRounds:s.rounds,scheduledSets:0};
      audit.push(entry);
      if(!selected)return blocked('אין הכנה מתאימה למקטע '+original.he+' עם הציוד והאישורים הנוכחיים.');
      let dose=variationBlock(profile,{id:selected.id,phase:'work',section:'strength',sectionIndex,sectionTitle:s.title}, {logs,now});
      if(dose?.assessmentCause==='explicit-inability')return blocked('דווחה יכולת אפס ב'+dose.he+'; אין בלוח הכנה נתמכת עם הציוד הנוכחי.');
      if(!dose)return blocked('אין מינון זמין למקטע '+original.he+'.');
      if(dose.assessment && intent!=='preparation') {
        const lower=selected.options.filter(o=>o.available && ['easy','regular','hard'].indexOf(o.tier)<
          ['easy','regular','hard'].indexOf(selected.tier)).reverse();
        for(const option of lower) {
          const candidate=variationBlock(profile,{id:item.id,phase:'work',section:'strength',sectionIndex,sectionTitle:s.title},
            {logs,now},option.tier);
          if(candidate&&!candidate.assessment) {dose=candidate;selected={...selected,...byId(candidate.id)};intent='preserves-movement';break;}
        }
      }
      if(dose.assessmentCause==='insufficient-capacity') return blocked(
        'היכולת המדווחת ב'+dose.he+' אינה מספיקה ליעד ולעתודה. לבחור הכנה נתמכת או את האימון המותאם.');
      if(/with stop/.test(item.sourceName) && dose.unit==='reps' && !dose.assessment && !dose.reviewedExecution) {
        dose.tempo={...dose.tempo,pause:Math.max(1,dose.tempo.pause)};
        dose.cue+=' לעצור שנייה אחת בסוף כל משיכה.';
      }
      if(/with stop/.test(item.sourceName) && dose.reviewedExecution && dose.tempo.pause<1) {
        intent='preparation';dose.cue+=' הכנת חתירה בקצב המאושר; העצירה מהלוח אינה כלולה באישור.';
      }
      if(item.sourceName==='Elevated Lean Planche' && intent==='original') {
        intent='preserves-movement';dose.cue+=' ההטיה נעשית לפי המנח המאושר; אין להוסיף הגבהה לפי הלוח.';
      }
      dose.sourceExerciseId=item.id;
      dose.substitutionIntent=intent;
      dose.sourceSlot=entry.slotKey;
      dose.sourceName=item.sourceName;
      const prep=intent==='preparation';
      const failed=['failed-calibration','insufficient-capacity'].includes(dose.assessmentCause);
      if(prep && !failed && !dose.reviewedExecution && (dose.provisional || dose.assessment) &&
        !['short-pike-push','pike-push'].includes(dose.id)) {
        // Preparations have their own light dose, not the source's strength sets/rest.
        dose.assessment=false;dose.familiarization=false;dose.provisional=true;dose.calibration=false;
        dose.target=Math.min(dose.target??Infinity,(dose.unit==='seconds'?5:3)*(dose.perSide?2:1));
        dose.rir=dose.unit==='reps'?'כשלוש':null;
        dose.technicalReserve=dose.unit==='seconds'?'לפחות 3 שניות של שליטה':null;
        dose.setup='תמיכה יציבה לפי הוראות ההכנה';dose.assistance='סיוע מספיק לתנועה קלה';
        dose.range_of_motion='טווח קטן ונוח';dose.execution_standard='ללא כאב וללא אובדן שליטה';dose.added_load=0;
        dose.restSeconds=original.movementPattern==='mobility'?30:60;
        dose.cue=(policy?.reason||'הכנה לתנועת המקור בלבד.')+' '+selected.cue+' לעצור בכאב או בירידת שליטה.';
      } else if(prep && !dose.assessment) {
        // Exact evidence doses the chosen preparation, never the unavailable source skill.
        dose.cue=(policy?.reason||'הכנה לתנועת המקור בלבד.')+' מינון לפי ביצוע מתועד בתרגיל ההכנה הזה. '+dose.cue;
      } else if(dose.assessment && !failed && selected.level<=2 &&
        !['short-pike-push','pike-push','jump-squat','low-jump-squat','burpee','incline-burpee'].includes(selected.id)) {
        dose.assessment=false;dose.familiarization=false;dose.provisional=true;dose.source='conservative-default';
        dose.target=(dose.unit==='seconds'?5:3)*(dose.perSide?2:1);
        dose.rir=dose.unit==='reps'?'כשלוש':null;
        dose.technicalReserve=dose.unit==='seconds'?'לפחות 3 שניות של שליטה':null;
        dose.setup='תמיכה יציבה לפי ההוראות';dose.assistance='סיוע או שיפוע קל לפי הצורך';
        dose.range_of_motion='טווח נוח';dose.execution_standard='ביצוע נשלט ללא כאב';dose.added_load=0;
        dose.cue='מינון פתיחה שמרני: להשאיר כשלוש חזרות או שניות בשליטה; לעצור אם היעד אינו נוח. '+selected.cue;
      }
      if(prep) {
        dose.nextDecision=(dose.provisional ? 'בסט הכיול האחרון לתעד' : 'להמשיך לתעד')+
          ' ביצוע נקי, עתודה ותנאי תמיכה מדויקים: מתקן, סיוע, טווח וקצב. '+
          'המינון הבא יחושב רק לתרגיל ההכנה הזה; תנועת המקור דורשת בדיקה נפרדת. למטרת כוח אפשר לבחור את האימון המותאם במסך האימון.';
        dose.cue+=' '+dose.nextDecision;
      }
      dose.executionRole=dose.assessment||prep?'preparation':policy?.role||movementRole(dose);
      dose.phase=dose.executionRole==='skill'?'skill':'work';
      dose.section=dose.executionRole==='skill'?'skill':'strength';
      if(dose.target!=null) {
        dose.target=historicalTarget(selected,dose.unit,dose.target,logs,profile,now);
        if(item.seconds!=null && dose.unit==='seconds' && !dose.reviewedExecution) {
          dose.target=Math.min(dose.target,item.seconds*(dose.perSide?2:1));
        }
        dose.seconds=workSeconds(dose,dose.target);
      }
      let count=dose.assessment?1:prep?Math.min(policy?.sets??2,s.rounds):
        dose.source==='conservative-default'||profile.experience==='new'?Math.min(2,s.rounds):s.rounds;
      if(dose.reviewedExecution)count=Math.min(count,profile.exerciseClearances[selected.id].sets);
      if(dose.assessment) dose.familiarization=false;
      // Several source tasks can share a preparation; do not manufacture duplicate work for provenance.
      const prior=prep&&groups.find(g=>g.dose.id===dose.id);
      if(prior) {
        entry.selectedExerciseId=dose.id;entry.substitutionIntent=intent;entry.sharedWith=prior.entry.slotKey;
        entry.omissionReason='מכוסה באותה הכנה מוגבלת; אינו סט כוח נוסף.';
        if(prior.dose.substitutionIntent==='preparation') {
          prior.dose.sourceExerciseIds=[...new Set([...(prior.dose.sourceExerciseIds||[prior.dose.sourceExerciseId]),item.id])];
        }
        prior.dose.note+=' '+(policy?.reason||'');continue;
      }
      dose.note=['בלוח המאמן: '+item.sourceName,item.note,policy&&intent!=='original'?policy.reason:'',
        item.seconds!=null&&dose.unit!=='seconds'?'תחנת הזמן מהלוח הוחלפה ביעד חזרות מפורש לפי הווריאציה שנבחרה.':''].filter(Boolean).join(' ');
      entry.selectedExerciseId=dose.id;entry.substitutionIntent=intent;
      entry.doseReason=prep?'מינון הכנה נפרד; אינו שקול לסטי המקור.':dose.assessment?
        'ניסיון היכרות יחיד לפני קביעת מינון.':dose.source==='conservative-default'?'עד שני סטים במינון פתיחה שמרני.':
        'מינון אישי; כמויות המקור אינן מדידת יכולת.';
      groups.push({dose, count,entry});
    }
  }
  groups.sort((a,b)=>({skill:0,preparation:1,compound:2,accessory:3}[a.dose.executionRole]-
    {skill:0,preparation:1,compound:2,accessory:3}[b.dose.executionRole]));
  const warm=[];
  for(const [sectionIndex,s] of template.sections.entries())if(s.type==='warmup')for(let r=1;r<=s.rounds;r++)for(const item of s.items) {
    const selected=select(item.id==='burpee'?'step-jack':item.id);
    if(!selected)continue;
    // The board's 30-second warm-up is a light movement window, not a working rep prescription.
    const seconds=item.seconds??30;
    warm.push({...selected,id:selected.id,sourceExerciseId:item.id,phase:'warm',section:'warmup',sectionIndex,round:r,
      note:'בלוח המאמן: '+item.sourceName+(item.id==='burpee'?' — חימום חלופי קל, ללא בורפי מלא.':''),
      unit:'seconds',target:seconds,seconds,restSeconds:0,rir:'קל מאוד',technicalReserve:'תנועה קלה בלבד',
      cue:'חימום קל בלבד, בקצב שיחה; אין צורך לעבוד ברצף או להגיע לעייפות. '+selected.cue});
  }
  // Rehearsal is app-authored, separate from the preserved board warm-up.
  warm.push({id:'ramp-rehearse',he:'הכנה וחזרה קלה לתנועות שנבחרו',phase:'warm',section:'warmup',seconds:120,target:null});
  const pack=()=>{
    const blocks=[...warm],ledger=volumeBudget(profile,logs,now),reviewedCounts={};
    for(const g of groups) g.entry.scheduledSets=0;
    const doses=orderExecution(groups.flatMap(g=>Array.from({length:g.count},(_,r)=>executionBlock({...g.dose,round:r+1}))));
    for(const d of doses) {
        const g=groups.find(g=>g.entry.slotKey===d.sourceSlot);
        if(g.entry.omissionReason) delete g.entry.omissionReason;
        if(!ledger.room(d)) {g.entry.omissionReason='תקציב העבודה השבועי נוצל.';continue;}
        if(d.reviewedExecution&&(reviewedCounts[d.id]||0)>=profile.exerciseClearances[d.id].sets) {
          g.entry.omissionReason='מגבלת הסטים המאושרת לכל התנועות הזהות.';continue;
        }
        const setup=recoveryBefore(blocks,d,30);
        blocks.push(pause(d.id+'-setup',setup,d.section));
        blocks.push(d);blocks.push(pause(d.id+'-rest',d.restSeconds,d.section));
        g.entry.scheduledSets++;
        if(d.countsAsStrength)ledger.count(d);
        if(d.reviewedExecution)reviewedCounts[d.id]=(reviewedCounts[d.id]||0)+1;
    }
    blocks.push({id:'cool',he:'סיום ונשימה',en:'Cool down',phase:'cool',section:'cooldown',seconds:template.cooldownSeconds,
      target:null,cue:'הליכה קלה ונשימה נוחה. אפשר לסיים מוקדם; אין להוסיף מבחן מאמץ.'});
    return {blocks,ledger};
  };
  let packed=pack(),trimmed=false;
  const duration=()=>mainSeconds(packed.blocks);
  while(duration()>budget) {
    const g=groups.filter(g=>g.count>1).sort((a,b)=>b.count-a.count||b.dose.seconds-a.dose.seconds)[0];
    if(!g)return blocked('משך האימון קצר מדי לכל המקטעים והמנוחות. לבחור משך ארוך יותר.');
    g.count--;trimmed=true;packed=pack();
  }
  const blocks=packed.blocks,work=blocks.filter(b=>['work','skill'].includes(b.phase));
  if(!work.length)return blocked('לא נותר מקטע עבודה מתאים. לבחור באימון המותאם.');
  work.forEach((b,i)=>b.set=i+1);
  for(const entry of audit)if(entry.sharedWith)entry.scheduledSets=audit.find(s=>s.slotKey===entry.sharedWith).scheduledSets;
  const warnings=[...new Set([...base.warnings,...template.skipped.map(s=>'הושמט: '+s),
    ...template.sections.map(s=>s.note),...blocks.map(b=>b.note),trimmed?'הסטים צומצמו כדי לשמור על כל המקטעים והמנוחות.':''].filter(Boolean))];
  const preparation=work.some(b=>b.substitutionIntent==='preparation');
  const summary='נבחר האימון: '+template.he+'. '+(preparation?'חלק מתנועות המקור הוחלפו בהכנה בלבד; הן אינן סטים שקולים של כוח. ':'')+
    'סדר הביצוע והמינון מותאמים; לוח המקור נשמר בפירוט.'+(preparation?
      ' זהו תרגול הכנה לבחירה: סט הכיול קובע מינון לתרגיל ההכנה בלבד, ותנועת המקור דורשת בדיקה נפרדת. '+
      'לאימון כוח עם התרגילים הזמינים, לבחור את האימון המותאם במסך האימון.':'');
  return finishExecution({...base,templateId:template.id,origin:'coach',sourceRecord:template.sourceRecord,slotAudit:audit,
    ...(preparation?{strengthAlternative:{route:'#coach',focus:'full',label:'האימון המותאם'},
      preparationChoice:true}:{}),
    title:template.he,titleHe:template.he,titleEn:template.en,format:template.format,
    focus:template.focus,sourceStructure:template.sessionStructure,blocks,
    phases:['warm','skill','work','rest','cool'].map(id=>({id,seconds:blocks.filter(b=>b.phase===id).reduce((n,b)=>n+b.seconds,0)})),
    total_seconds:duration(),unused_seconds:budget-duration(),minutes,requested_minutes:minutes,sets:work.length,
    exerciseIds:work.map(b=>b.id),volume:{range:packed.ledger.range,previous:packed.ledger.previous,planned:packed.ledger.planned},
    warnings,reason:summary,reasonHe:summary,summaryHe:summary,trimmed,available:true},{order:false,profile,logs,now,structure:options.structure});
}
