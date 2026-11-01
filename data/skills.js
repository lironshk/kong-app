import {exercises} from './exercises.js?v=32';
const originalSkills = [
  {
    "id": "first-push",
    "he": "שכיבת הסמיכה הראשונה",
    "en": "First push-up",
    "description": "בניית כוח דחיקה ושליטה בקו הגוף.",
    "steps": [
      "wall-push",
      "incline-push",
      "knee-push",
      "push"
    ],
    "prerequisites": [
      "תמיכה יציבה ללא כאב בשורש כף היד",
      "שליטה בירידה ובעלייה בלי שקיעת אגן"
    ],
    "caveat": "אלו נקודות לבדיקה איכותנית, לא ספי כשירות שנבדקו במחקר. השלמת חזרות אינה אישור להתקדם; מתקדמים לפי שליטה, התאוששות והדרכה.",
    "autoUnlock": false,
    "source_ids": [
      "ff-push"
    ],
    "reviewStatus": "educational-roadmap; coach-review-required",
    "advanced": false
  },
  {
    "id": "first-pull",
    "he": "המתח הראשון",
    "en": "First pull-up",
    "description": "מחברים אחיזה, שליטת שכמות וכוח משיכה.",
    "steps": [
      "active-hang",
      "row",
      "scap-pull",
      "pull-negative",
      "pull"
    ],
    "prerequisites": [
      "מוט מעוגן ודרך ירידה בטוחה",
      "תלייה ומשיכה נוחות בכתפיים",
      "שליטה בירידה לפני הוספת עומס"
    ],
    "caveat": "אלו נקודות לבדיקה איכותנית, לא ספי כשירות שנבדקו במחקר. השלמת חזרות אינה אישור להתקדם; מתקדמים לפי שליטה, התאוששות והדרכה.",
    "autoUnlock": false,
    "source_ids": [
      "gmb-pull"
    ],
    "reviewStatus": "educational-roadmap; coach-review-required",
    "advanced": false
  },
  {
    "id": "lsit",
    "he": "ישיבת L-sit",
    "en": "L-sit",
    "description": "סקיל תמיכה ודחיסת ירך עם התקדמות הדרגתית באורך המנוף.",
    "steps": [
      "support",
      "hollow",
      "tuck-lsit",
      "lsit"
    ],
    "prerequisites": [
      "תמיכה יציבה ללא כאב במרפקים ובכתפיים",
      "יכולת לנשום בזמן החזקה",
      "ציוד נמוך ויציב"
    ],
    "caveat": "אלו נקודות לבדיקה איכותנית, לא ספי כשירות שנבדקו במחקר. השלמת חזרות אינה אישור להתקדם; מתקדמים לפי שליטה, התאוששות והדרכה.",
    "autoUnlock": false,
    "source_ids": [
      "gmb-lsit"
    ],
    "reviewStatus": "educational-roadmap; coach-review-required",
    "advanced": false
  },
  {
    "id": "handstand",
    "he": "עמידת ידיים",
    "en": "Handstand",
    "description": "איזון על הידיים דורש הכנה, ביטחון ויכולת לצאת בבטחה.",
    "steps": [
      "scap-push",
      "pike-push",
      "wall-handstand"
    ],
    "prerequisites": [
      "הכנה הדרגתית של שורשי כף היד והכתפיים",
      "יציאה בטוחה שנלמדה עם הדרכה",
      "סביבה פנויה ומקום לירידה"
    ],
    "caveat": "אלו נקודות לבדיקה איכותנית, לא ספי כשירות שנבדקו במחקר. השלמת חזרות אינה אישור להתקדם; מתקדמים לפי שליטה, התאוששות והדרכה.",
    "autoUnlock": false,
    "source_ids": [
      "gmb-handstand"
    ],
    "reviewStatus": "educational-roadmap; coach-review-required",
    "advanced": true
  },
  {
    "id": "pistol",
    "he": "פיסטול סקוואט",
    "en": "Pistol squat",
    "description": "כוח רגל אחת בשילוב שיווי משקל וטווח תנועה אישי.",
    "steps": [
      "squat",
      "split",
      "single-hinge",
      "single-squat",
      "pistol"
    ],
    "prerequisites": [
      "שליטה ברגל אחת ללא כאב",
      "עקב יציב בטווח הנבחר",
      "יכולת לעלות ולרדת ללא נפילה"
    ],
    "caveat": "אלו נקודות לבדיקה איכותנית, לא ספי כשירות שנבדקו במחקר. השלמת חזרות אינה אישור להתקדם; מתקדמים לפי שליטה, התאוששות והדרכה.",
    "autoUnlock": false,
    "source_ids": [
      "acsm-2026"
    ],
    "reviewStatus": "educational-roadmap; coach-review-required",
    "advanced": false
  },
  {
    "id": "muscle-up",
    "he": "עליית כוח",
    "en": "Muscle-up",
    "description": "יעד מתקדם המחבר משיכה, מעבר ודחיקה; דורש לימוד טכני אישי.",
    "steps": [
      "pull",
      "support",
      "dip"
    ],
    "prerequisites": [
      "כוח משיכה ותמיכה מבוססים",
      "תרגול מעבר בטוח בהשגחה",
      "בדיקת מתקן ואזור נחיתה"
    ],
    "caveat": "אלו נקודות לבדיקה איכותנית, לא ספי כשירות שנבדקו במחקר. השלמת חזרות אינה אישור להתקדם; מתקדמים לפי שליטה, התאוששות והדרכה.",
    "autoUnlock": false,
    "source_ids": [
      "gmb-rings"
    ],
    "reviewStatus": "educational-roadmap; coach-review-required",
    "advanced": true
  },
  {
    "id": "front-lever",
    "he": "פרונט לבר",
    "en": "Front lever",
    "description": "סקיל כוח בזרועות ישרות עם עומס משמעותי על כתפיים ומרפקים.",
    "steps": [
      "row",
      "pull",
      "hollow"
    ],
    "prerequisites": [
      "שליטת משיכה ויכולת לשמור גו יציב",
      "סבילות לעומס בזרועות ישרות",
      "תכנון אישי והדרכה למנופים מתקדמים"
    ],
    "caveat": "אלו נקודות לבדיקה איכותנית, לא ספי כשירות שנבדקו במחקר. השלמת חזרות אינה אישור להתקדם; מתקדמים לפי שליטה, התאוששות והדרכה.",
    "autoUnlock": false,
    "source_ids": [
      "gmb-rings"
    ],
    "reviewStatus": "educational-roadmap; coach-review-required",
    "advanced": true
  },
  {
    "id": "planche",
    "he": "פלאנץ׳",
    "en": "Planche",
    "description": "מפת דרך מהכנת שכמות עד פלאנץ׳ מלא; מנופים מתקדמים דורשים בדיקה והדרכה אישית.",
    "steps": [
      "scap-push",
      "push",
      "support"
    ],
    "prerequisites": [
      "סבילות הדרגתית לעומס בידיים",
      "כוח תמיכה ושליטת שכמות",
      "ליווי מקצועי לפני תרגול מנופים מלאים"
    ],
    "caveat": "אלו נקודות לבדיקה איכותנית, לא ספי כשירות שנבדקו במחקר. השלמת חזרות אינה אישור להתקדם; מתקדמים לפי שליטה, התאוששות והדרכה.",
    "autoUnlock": false,
    "source_ids": [
      "acsm-2026"
    ],
    "reviewStatus": "educational-roadmap; coach-review-required",
    "advanced": true
  }
];

const trackData={"handstand": [["pike-support", "partial-wall-line", "wall-handstand", "chest-wall-handstand", "handstand-shift", "handstand-toe-pull", "handstand-free"], [["plank", 30, "seconds"], ["scap-push", 10, "reps"], ["pike-support", 20, "seconds"]]], "front-lever": [["scap-pull", "hollow", "lever-supported", "lever-assisted-tuck", "tuck-front-lever", "advanced-tuck-front-lever", "front-lever-negative", "front-lever"], [["active-hang", 20, "seconds"], ["row", 8, "reps"], ["pull", 5, "reps"], ["hollow", 20, "seconds"]]], "muscle-up": [["scap-pull", "explosive-pull", "low-bar-transition", "straight-bar-dip", "assisted-muscle-up", "muscle-up-strict"], [["pull", 8, "reps"], ["dip", 8, "reps"], ["support", 20, "seconds"]]], "lsit": [["foot-support", "compression-lift", "tuck-lsit", "one-leg-lsit", "lsit"], [["support", 20, "seconds"], ["hollow", 20, "seconds"], ["compression-lift", 8, "reps"]]], "planche": [["scap-push", "hollow", "planche-lean", "tuck-assisted-planche", "frog-stand", "tuck-planche"], [["push", 10, "reps"], ["support", 20, "seconds"], ["scap-push", 10, "reps"]]], "pistol": [["split", "single-squat", "pistol-box", "pistol", "shrimp-squat"], [["squat", 10, "reps"], ["split", 8, "reps"], ["single-squat", 5, "reps"]]], "back-lever": [["scap-pull", "hollow", "extension-supported", "assisted-tuck-back-lever", "back-lever", "german-hang", "skin-the-cat"], [["dead-hang", 30, "seconds"], ["support", 20, "seconds"], ["scap-pull", 5, "reps"]]], "human-flag": [["flag-ground", "flag-assisted", "flag-tuck", "human-flag"], [["pull", 8, "reps"], ["side-plank", 20, "seconds"], ["support", 20, "seconds"]]], "first-push": [["wall-push", "incline-push", "knee-push", "push"], [["wall-push", 5, "reps"]]], "first-pull": [["dead-hang", "active-hang", "row", "scap-pull", "pull-negative", "pull"], [["active-hang", 20, "seconds"], ["row", 8, "reps"]]]};
trackData.pistol[0]=['split','single-squat','pistol-box','pistol'];
trackData.planche[0].push('straddle-planche','full-planche');
trackData['back-lever'][0]=['scap-pull','hollow','extension-supported','assisted-tuck-back-lever','back-lever'];
const extraSkills=[{"id": "back-lever", "he": "באק לבר", "en": "Back lever", "description": "מסלול לימודי בהדרכה אישית בלבד.", "steps": [], "prerequisites": ["בדיקת סבילות כתף ואחיזה עם מדריך מוסמך", "יציאה בטוחה וציוד מדורג"], "caveat": "ספים מוצעים לבדיקה בשני מפגשים נוחים; אינם אישור כשירות.", "autoUnlock": false, "source_ids": ["coach-method-offline"], "reviewStatus": "pending-review", "advanced": true}, {"id": "human-flag", "he": "דגל אנושי", "en": "Human flag", "description": "מסלול לימודי בהדרכה אישית בלבד.", "steps": [], "prerequisites": ["בדיקת סבילות כתף ואחיזה עם מדריך מוסמך", "יציאה בטוחה וציוד מדורג"], "caveat": "ספים מוצעים לבדיקה בשני מפגשים נוחים; אינם אישור כשירות.", "autoUnlock": false, "source_ids": ["coach-method-offline"], "reviewStatus": "pending-review", "advanced": true}];
trackData.hspu=[['pike-push','elevated-pike-push','wall-hspu-negative','partial-wall-hspu','wall-hspu'],[['pike-push',5,'reps'],['wall-handstand',20,'seconds']]];
extraSkills.push({...extraSkills[0],id:'hspu',he:'דחיקה בעמידת ידיים',en:'Handstand push-up',description:'מסלול דחיקה אנכית מפייק עד דחיקה מלאה בקיר.',prerequisites:['שליטת פייק ותמיכה ללא כאב','יציאה בטוחה מעמידת ידיים בהדרכה']});
trackData.handstand[0].push('handstand-free-hold');
const roadmapSkills=[...originalSkills,...extraSkills].map(s=>({...s,steps:trackData[s.id][0],gates:trackData[s.id][1].map(([exerciseId,value,unit])=>({exerciseId,value,unit,perSide:['split','single-squat','side-plank'].includes(exerciseId)})),stages:trackData[s.id][0].map((exerciseId,i)=>({number:i+1,exerciseId,requiresReview:true})),autoUnlock:false,gateNote:'ספים מוצעים לבדיקת מאמן בשני מפגשים נוחים; אינם פתיחה אוטומטית. גבולות כתף, שורש כף יד ויציאה בטוחה נבדקים בנפרד.'}));

// Editorial planning estimates, not deadlines or execution clearance. Advanced totals
// assume an established strength base; individual progress can take longer.
const timing={
 'first-push':{months:[1,6],weeks:[3,12]},'first-pull':{months:[2,12],weeks:[3,12]},
 lsit:{months:[3,18],weeks:[4,20]},handstand:{months:[6,24],weeks:[4,24]},
 pistol:{months:[3,18],weeks:[4,20]},'muscle-up':{months:[6,24],weeks:[6,24]},
 'front-lever':{months:[12,36],weeks:[8,40],longer:true},
 planche:{months:[18,48],weeks:[12,52],longer:true},
 'back-lever':{months:[9,30],weeks:[8,32]},
 'human-flag':{months:[12,36],weeks:[8,40],longer:true},hspu:{months:[9,30],weeks:[6,32]}
};
// Only simple strength preparation is implied by these broad intake reports.
// Balance, inversion, compression and straight-arm tolerance require their own evidence.
const intakePlacement={
 'muscle-up':{metric:'pull',minimum:5,stage:1},
 'front-lever':{metric:'pull',minimum:5,stage:1},
 'back-lever':{metric:'pull',minimum:5,stage:1},
 planche:{metric:'push',minimum:10,stage:1}
};
const pullTracks=new Set(['first-pull','front-lever','muscle-up','back-lever','human-flag']);
export const skills=roadmapSkills.map(s=>({...s,type:s.id==='pistol'?'legs':pullTracks.has(s.id)?'pull':'push',classificationNote:s.id==='pistol'?'רגליים':s.id==='human-flag'?'משיכה (משולב)':s.id==='lsit'?'דחיקה / כפיפת ירך':'',
 typicalMonths:timing[s.id].months,typicalMayTakeLonger:!!timing[s.id].longer,selfReportPlacement:intakePlacement[s.id]||null,
 timeline:`טווח טיפוסי לסקיל: ${timing[s.id].months.join('–')} חודשים${s.advanced?' מבסיס כוח מבוסס':''}${timing[s.id].longer?' ולעיתים יותר':''}; משתנה מאוד בין אנשים.`,timelineNote:'הערכה כללית, משתנה מאוד; אין מועד מובטח.',
 branchPolicy:'הכנה, כוח, מעבר, איזון ותנועתיות הם ענפים מקבילים. סדר התצוגה אינו תנאי חובה; מאמן בוחר תרגיל לפי בדיקה.',gatesEducationalOnly:true,
 mistakes:['התקדמות לפני שליטה ויציאה בטוחה','עצירת נשימה או תרגול בכאב','אובדן קו הגוף כדי להשלים מספר'],
 stages:s.stages.map(stage=>{const typicalWeeks=timing[s.id].weeks.map((value,i)=>exercises.find(e=>e.id===stage.exerciseId)?.advancedOnly?Math.ceil(value*(i?1.5:1.25)):value);return {...stage,branch:branch(stage.exerciseId),drills:[stage.exerciseId],entry:null,exit:criterion(stage.exerciseId),typicalWeeks,timeline:`בדרך כלל ${typicalWeeks.join('–')} שבועות לשלב; משתנה מאוד בין אנשים.`};})}));
function branch(id){if(['low-bar-transition','assisted-muscle-up'].includes(id))return 'transition';if(['frog-stand','handstand-free','handstand-toe-pull','handstand-shift','handstand-free-hold'].includes(id))return 'balance';if(['extension-supported','partial-wall-line'].includes(id))return 'mobility-and-position';return 'strength-and-preparation';}
function criterion(id){
 const e=exercises.find(e=>e.id===id),hold=e.unit==='seconds',entry=id==='handstand-free';
 const values={'scap-pull':[2,4],'hollow':[2,8],'row':[2,6],'pull-negative':[2,2],'pull':[2,3],'wall-push':[2,6],'incline-push':[2,5],'knee-push':[2,4],'push':[2,4],'pike-push':[2,3],'elevated-pike-push':[2,3],'wall-hspu-negative':[2,2],'partial-wall-hspu':[2,3],'wall-hspu':[2,2],'handstand-free':[3,1],'handstand-free-hold':[2,5],'partial-wall-line':[2,8],'wall-handstand':[2,10],'chest-wall-handstand':[2,10],'low-bar-transition':[2,3],'explosive-pull':[2,3],'one-leg-lsit':[2,5],'frog-stand':[2,5],'single-squat':[2,4],'split':[2,5]};
 const [sets,value]=values[id]||(hold?[2,e.demandingStraightArm?4:6]:[2,3]);
 return {exerciseId:id,sets,value,unit:e.unit,sessions:2,perSide:!!e.perSide,editorial:true,reviewStatus:'stage-specific-editorial-pending-qualified-review',reviewer:null,
 task:e.he+(entry?' · כניסות נפרדות; אינן שניות איזון':''),setup:'מתקן מעוגן, גובה וזווית מתועדים עבור '+e.he,assistance:'רישום מפורש של סוג הסיוע או ללא סיוע',range_of_motion:e.novelEccentric?'טווח ירידה נשלט ומהירות מתועדת, ללא נפילה':'טווח נוח וקבוע שנבדק לתרגיל',quality:e.instructions.join(' '),reserve:hold?'לפחות 3 שניות עתודה טכנית; יציאה לפני אובדן מנח':'לפחות 3 חזרות עתודה; אין ניסיונות מרביים',safeExit:'יציאה לקרקע/תמיכה שנלמדה ונבדקה עבור '+e.he,requiresPhysicalReview:e.advancedOnly};
}
