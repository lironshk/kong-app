// Canonical Hebrew UI terminology. Finish is optional effort; cool-down is recovery.
export const glossary=Object.freeze({push:'דחיקה',fullBody:'כל הגוף',skill:'סקיל',warmup:'חימום',strength:'כוח',finish:'גמר',cooldown:'שחרור'});
export const forbiddenTerms=['דחיפה','פול בודי','מיומנות'];
export const phaseLabel=id=>({warm:glossary.warmup,warmup:glossary.warmup,skill:glossary.skill,work:glossary.strength,strength:glossary.strength,conditioning:glossary.finish,finish:glossary.finish,cool:glossary.cooldown,cooldown:glossary.cooldown,recovery:glossary.cooldown,practice:'תרגול'})[id]||id;
export const uniqueSegments=line=>[...new Set(String(line).split(' · ').map(s=>s.trim()).filter(Boolean))].join(' · ');
