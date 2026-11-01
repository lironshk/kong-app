import { exercises } from './exercises.js?v=31';

// Learning collections are editorial entry points, never workout prescriptions.
// Athlete imagery is inspirational artwork, not a technique demonstration.
export const collections = [
  {
    id: 'first-pullup', title: 'המתח הראשון שלך', titleEn: 'Your first pull-up',
    subtitle: 'אחיזה, שליטת שכמות וכוח משיכה — היסודות לחזרה הראשונה.', subtitleEn: 'Grip, shoulder control, pulling strength. The foundations of your first rep.',
    category: 'בדרך לסקיל', categoryEn: 'Skill foundations', accent: 'orange',
    image: './assets/energy-strength.webp', exerciseIds: ['active-hang', 'scap-pull', 'row', 'pull-negative', 'pull'], skillId: 'first-pull', kind: 'educational',
    takeaways: ['להכיר את ההבדל בין תלייה, חתירה ומשיכה.', 'למצוא גרסה שאפשר לבצע בשליטה, בלי לרדוף אחרי חזרה מלאה.', 'לבדוק מתקן מעוגן ודרך ירידה לפני שעולים.'],
    note: 'מפת למידה, לא סדר תרגילים לאימון. הבחירה והמינון נמצאים בתוכנית האישית.'
  },
  {
    id: 'body-control', title: 'לשלוט בתנועה', titleEn: 'Strength, under control',
    subtitle: 'מהרצפה למקבילים: שליטת אגן, נשימה ותמיכה יציבה.', subtitleEn: 'From floor to parallel bars: pelvic control, breathing and a stable support.',
    category: 'שליטה בגוף', categoryEn: 'Body control', accent: 'violet',
    image: './assets/energy-control.webp', exerciseIds: ['deadbug', 'bird-dog', 'hollow', 'support', 'tuck-lsit'], skillId: 'lsit', kind: 'educational',
    takeaways: ['להתבונן באגן ובגו בזמן שהגפיים זזות.', 'לקצר מנוף כשקו הגוף אובד.', 'להבחין בין החזקה נשלטת לעצירת נשימה.'],
    note: 'תרגילי יסוד ללמידה. החזקת L מלאה דורשת בחירה והתקדמות אישיות.'
  },
  {
    id: 'fifteen-minutes', title: 'יש לך רבע שעה?', titleEn: 'Got fifteen minutes?',
    subtitle: 'תנועות בסיס שאפשר להכיר גם ביום עמוס.', subtitleEn: 'Meet the foundations, even on a busy day.',
    category: 'להתחיל ולהתמיד', categoryEn: 'Build the habit', accent: 'lime',
    image: './assets/energy-hero.webp', exerciseIds: ['wall-push', 'squat', 'bridge', 'deadbug'], skillId: null, kind: 'educational',
    takeaways: ['לבחור זמן שאפשר לפנות גם בשבוע עמוס.', 'להכיר חלופות פשוטות לפני תחילת האימון.', 'להגדיר 15 דקות בתוכנית האישית כדי לקבל מינון מותאם.'],
    note: 'זהו אוסף היכרות. לבניית אימון של 15 דקות, מגדירים את הזמן בתוכנית האישית.'
  },
  {
    id: 'push-craft', title: 'לדייק את שכיבת הסמיכה', titleEn: 'Make every push-up count',
    subtitle: 'אותה תנועה מוכרת, מבט חדש על קו גוף, טווח ושליטה.', subtitleEn: 'A fresh look at body position, range and control in a familiar movement.',
    category: 'מעבדת טכניקה', categoryEn: 'Technique lab', accent: 'coral',
    image: './assets/energy-hero.webp', exerciseIds: ['wall-push', 'incline-push', 'knee-push', 'push', 'scap-push'], skillId: 'first-push', kind: 'educational',
    takeaways: ['להבין מה משתנה בין קיר, שיפוע ורצפה.', 'לשים לב לחזה ולאגן כשהם יורדים יחד.', 'לבחור טווח נשלט ולסיים לפני שקו הגוף אובד.'],
    note: 'הגרסאות אינן שלבים שחייבים לעבור לפי סדר. בוחרים לפי יכולת ונוחות.'
  },
  {
    id: 'outdoor-strength', title: 'הפארק הוא הסטודיו', titleEn: 'The park is your studio',
    subtitle: 'מוט נמוך, מקבילים וקצת מרחב. להכיר את האפשרויות בחוץ.', subtitleEn: 'A low bar, parallel bars and room to move. Explore outdoor training.',
    category: 'כוח באוויר הפתוח', categoryEn: 'Outdoor strength', accent: 'sky',
    image: './assets/energy-hero.webp', exerciseIds: ['row', 'support', 'incline-push', 'squat', 'split'], skillId: null, kind: 'educational',
    takeaways: ['לזהות איזה ציוד יש בפארק ולעדכן את הפרופיל.', 'לבדוק יציבות, אחיזה ומרחב סביב המתקן.', 'להכיר אפשרויות משיכה, דחיקה ותרגילי רגליים.'],
    note: 'תמונות הפארק נועדו להשראה. להדגמת תרגיל פותחים את מדריך התנועה שלו.'
  },
  {
    id: 'recovery', title: 'גם להוריד הילוך זו סקיל', titleEn: 'Make room to recover',
    subtitle: 'לבדוק איך הגוף מרגיש, ולתת לזה מקום בתוכנית.', subtitleEn: 'Check how your body feels, and make room for that in your plan.',
    category: 'מרווח לנשימה', categoryEn: 'Recovery mindset', accent: 'peach',
    image: './assets/energy-control.webp', exerciseIds: ['bird-dog', 'deadbug', 'bridge'], skillId: null, kind: 'educational',
    takeaways: ['לבדוק עייפות, תחושה כללית וזמן פנוי לפני אימון.', 'להכיר תנועות קרקע; הן עדיין פעילות ואינן תחליף למנוחה.', 'לבחור מנוחה כשצריך, בלי לנסות לפצות באימון הבא.'],
    note: 'אין כאן טיפול בכאב או פרוטוקול שיקום. כאב חדש או חריג דורש עצירה ובירור מתאים.'
  }
];

function lesson(id, exerciseId, title, titleEn, subtitle, subtitleEn, image, takeaways) {
  const exercise = exercises.find(item => item.id === exerciseId);
  const media = exercise?.media.find(item => item.type === 'video' && item.match === 'exact');
  if (!media) throw new Error(`Missing exact video reference for ${exerciseId}`);
  const sourceHost = new URL(media.url).hostname.toLowerCase();
  const officialPlayer = ['youtube.com', 'www.youtube.com', 'youtu.be'].includes(sourceHost);
  return {
    id, exerciseId, title, titleEn, subtitle, subtitleEn,
    category: 'לצפות ולהבין', categoryEn: 'Watch & learn', image,
    videoUrl: media.url, url: media.url, author: media.author, type: 'video',
    duration: null, sourceTitle: media.title, sourceStatus: media.status,
    checkedAt: media.checkedAt, match: media.match, takeaways,
    externalOnly: !officialPlayer, requiresClick: true, embedPermission: media.embedPermission,
    playbackPolicy: officialPlayer ? 'official-player-on-request; availability-unverified' : 'external-source-page',
    sourceNote: 'הסרטון מוצג באמצעות המקור. פרטי המקור נבדקו; הסרטון לא עבר סקירת טכניקה מלאה. נקודות הלמידה נכתבו עבור האפליקציה.'
  };
}

export const lessons = [
  lesson('push-up-foundations', 'push', 'לפני החזרה הבאה', 'Before your next rep',
    'שכיבת סמיכה: קו גוף וטווח שאפשר לשלוט בו.', 'Push-up foundations: body position and a range you can control.',
    './assets/energy-strength.webp', ['לשים לב לתנועת הגוף כיחידה אחת.', 'לבדוק גם את חלופות התרגיל אם הטווח עדיין לא נשלט.']),
  lesson('pull-up-foundations', 'pull', 'לפרק את המתח לחלקים', 'Break down the pull-up',
    'מדריך למשיכה, עם מבט על הדרך לחזרה מלאה.', 'A pulling tutorial with a look at the path to a full rep.',
    './assets/energy-hero.webp', ['להבחין בין משיכה נשלטת לתנופה.', 'לעיין במפת המתח הראשון לצד המדריך, בלי לדלג על הכנה.']),
  lesson('split-squat-foundations', 'split', 'רגל אחת במרכז', 'One leg in focus',
    'מכרע סטטי (לאנג׳): להכיר את התנועה ואת האפשרויות שלה.', 'Explore the split squat and its variations.',
    './assets/energy-strength.webp', ['להתבונן ביציבות העמדה לאורך התנועה.', 'לבחור טווח אישי; הסרטון מציג וריאציות, לא הוראה לבצע את כולן.']),
  lesson('squat-foundations', 'squat', 'להבין את הסקוואט', 'See more in the basics',
    'סקוואט עם הסבר והדגמה של Mayo Clinic.', 'The squat, explained and demonstrated by Mayo Clinic.',
    './assets/energy-hero.webp', ['להתבונן בירידה ובעלייה ובמיקום כפות הרגליים.', 'להפריד בין לימוד התנועה לבין המינון שנקבע בתוכנית האישית.']),
  lesson('modified-push-foundations', 'knee-push', 'יש יותר מדרך אחת להתחיל', 'More than one way to begin',
    'גרסאות על הברכיים ומול קיר, במדריך אחד.', 'Knee and wall push-up variations in one guide.',
    './assets/energy-control.webp', ['להשוות בין קיר לברכיים ולבחור תמיכה מתאימה.', 'לעקוב אחר הקו מהראש לברכיים בגרסת הברכיים.']),
  lesson('side-plank-foundations', 'side-plank', 'שליטה גם מהצד', 'Control, from another angle',
    'הדגמת פלאנק צידי, עם מדריך התנועה של Catalyst Athletics.', 'Side plank demonstration and movement guide from Catalyst Athletics.',
    './assets/energy-control.webp', ['להתבונן במיקום המרפק וביציבות האגן.', 'להכיר גם את חלופת הברכיים בספריית התרגילים.'])
];
