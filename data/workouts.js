// Original editorial sessions. Durations include warm-up and cool-down.
const define=(id,he,en,description,format,minutes,muscleGroups,moves,extra={})=>({id,he,en,description,format,minutes,muscleGroups,moves,equipment:[],level:1,...extra});
const originalWorkouts=[
 define('first-session','התחלה פשוטה','First steps','ארבע תנועות יסוד, קצב נינוח ומנוחה נדיבה.','sets',12,['fullbody'],['push-choice','squat','deadbug','bridge']),
 define('full-body','כוח לכל הגוף','Whole body strength','דחיקה, משיכה כשיש ציוד, רגליים וליבה.','sets',25,['fullbody'],['push-choice','pull-optional','squat','core-choice','bridge']),
 define('push-foundations','יסודות הדחיקה','Push foundations','דחיקה מותאמת ליכולת לצד יציבות של השכמות.','sets',18,['chest','shoulders','arms'],['push-choice','scap-push','deadbug']),
 define('pull-foundations','בונים משיכה','Pull foundations','עבודה מדודה עם מתח, מוט נמוך או גומייה.','sets',18,['back','arms'],['pull-choice','prone-w','deadbug'],{requiresPull:true}),
 define('leg-strength','רגליים חזקות','Leg strength','סקוואט, גשר ועליות עקב בתנועה בשליטה.','sets',20,['legs','glutes'],['squat','bridge','calf','hinge']),
 define('core-control','מרכז בשליטה','Core control','ליבה ללא מרדף אחרי מהירות או מספר חזרות.','sets',15,['core'],['deadbug','core-choice','heel-tap']),
 define('glute-foundation','בסיס לישבן','Glute foundations','גשר, ציר ירך וסקוואט — שילוב פשוט ויעיל לתרגול.','sets',18,['glutes','legs'],['bridge','hinge','sumo-squat']),
 define('easy-intervals','קצב קל 20/20','Easy rhythm 20/20','צעידה וצעדי צד: 20 שניות תנועה, 20 שניות מנוחה.','interval',12,['fullbody'],['march','step-jack'],{work:20,rest:20,rounds:10}),
 define('tabata-control','טיימר טבטה 20/10','Tabata timer 20/10','8 מקטעי תנועה של 20 שניות ומנוחה של 10. בקצב נשלט, לא ספרינט.','tabata',10,['fullbody'],['march','step-jack'],{work:20,rest:10,rounds:8,note:'זהו טיימר בתבנית 20/10, לא פרוטוקול הטבטה המחקרי המתיש. לבחור קצב שמאפשר שליטה ולהאריך מנוחה בכל רגע.'}),
 define('emom-basics','כל דקה התחלה חדשה','Every minute, a fresh start','בתחילת כל דקה מבצעים יעד קטן; יתרת הדקה למנוחה.','emom',15,['fullbody'],['squat','push-choice','bridge'],{rounds:9}),
 define('bodyweight-circuit','סבב משקל גוף','Bodyweight circuit','שלוש תחנות, סבבים ברורים ומנוחה בין כל תנועה.','circuit',18,['fullbody'],['squat','push-choice','deadbug']),
 define('mobility-reset','תנועה ונשימה','Move and reset','טווח נוח, תנועה איטית וללא תחרות.','mobility',10,['mobility'],['cat-cow','wall-slide','thoracic-rotation','ankle-rock'])
];

const addedWorkouts=[
 define("upper-balance","פלג גוף עליון","Upper balance","תרגול מקורי בשליטה; חימום, מנוחה וסיום כלולים.","sets",30,["fullbody"],["push-choice", "pull-optional", "deadbug"]),
 define("park-30","פארק 30","Park 30","תרגול מקורי בשליטה; חימום, מנוחה וסיום כלולים.","circuit",30,["fullbody"],["squat", "push-choice", "pull-optional", "march"]),
 define("park-45","פארק 45","Park 45","תרגול מקורי בשליטה; חימום, מנוחה וסיום כלולים.","circuit",45,["fullbody"],["squat", "push-choice", "pull-optional", "bridge", "march"]),
 define("park-60","פארק 60","Park 60","תרגול מקורי בשליטה; חימום, מנוחה וסיום כלולים.","circuit",60,["fullbody"],["squat", "push-choice", "pull-optional", "bridge", "calf", "deadbug"]),
 define("amrap-control","סבבים באיכות","Quality AMRAP","תרגול מקורי בשליטה; חימום, מנוחה וסיום כלולים.","amrap",30,["fullbody"],["squat", "push-choice", "deadbug"]),
 define("skill-foundations","יום הכנת סקיל","Skill preparation day","תרגול מקורי בשליטה; חימום, מנוחה וסיום כלולים.","skill",30,["fullbody"],["scap-push", "bird-dog", "deadbug"]),
 define("beginner-week","שבוע ראשון — בסיס","Beginner first week","תרגול מקורי בשליטה; חימום, מנוחה וסיום כלולים.","sets",30,["fullbody"],["push-choice", "squat", "bridge", "deadbug"])
];
export const workouts=[...originalWorkouts,...addedWorkouts].map(w=>({...w,level:['park-45','park-60','amrap-control'].includes(w.id)?2:w.level,reviewStatus:'pending-review',warmupSeconds:w.minutes>=30?300:180,cooldownSeconds:w.minutes>=30?180:60,rounds:w.rounds||2,phases:[{id:'warm',seconds:w.minutes>=30?300:180},{id:'practice',seconds:w.minutes*60-(w.minutes>=30?480:240)},{id:'cool',seconds:w.minutes>=30?180:60}],firstWeek:w.id==='beginner-week'?{days:[1,3,5],rounds:2,rir:[3,4]}:undefined}));
