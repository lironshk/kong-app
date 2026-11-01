// One catalogue exercise belongs to exactly one tier. Nulls are explained in Hebrew in note.
// Families describe movement variations; linked families continue a skill ladder.
export const exerciseFamilies = [
  {
    "id": "push-foundation",
    "he": "שכיבות סמיכה — הכנה",
    "en": "Push-up foundations",
    "area": "chest",
    "movementPattern": "horizontal_push",
    "note": "קיר ותמיכה מוגבהת מאפשרים להפחית עומס. לתעד גובה תמיכה: גרסת ברכיים אינה קשה תמיד משיפוע נמוך.",
    "tiers": {
      "easy": "wall-push",
      "regular": "incline-push",
      "hard": "knee-push"
    },
    "harderFamily": "push-standard"
  },
  {
    "id": "push-standard",
    "he": "שכיבות סמיכה — גוף ארוך",
    "en": "Straight-body push-up",
    "area": "chest",
    "movementPattern": "horizontal_push",
    "note": "קלה על הקרקע; רגילה עם רגליים מוגבהות על תמיכה מעוגנת. לתעד גובה תמיכה ועומק בכל אימון. טווח מוגדל הוא ענף נפרד. קשה חסרה: אין דירוג נוסף מבוסס באותו ענף.",
    "tiers": {
      "easy": "push",
      "regular": "decline-push",
      "hard": null
    },
    "easierFamily": "push-foundation",
    "harderFamily": "push-explosive",
    "relatedFamilies": [
      "deficit-push-branch"
    ]
  },
  {
    "id": "push-wide",
    "he": "שכיבות סמיכה רחבות",
    "en": "Wide push-up",
    "area": "chest",
    "movementPattern": "horizontal_push",
    "note": "אותה אחיזה רחבה; השיפוע מקל והטווח המוגדל מקשה.",
    "tiers": {
      "easy": "incline-wide-push",
      "regular": "wide-push",
      "hard": "deficit-wide-push"
    },
    "harderFamily": "push-planche-lean"
  },
  {
    "id": "push-close",
    "he": "שכיבות סמיכה צרות",
    "en": "Close-grip push-up",
    "area": "chest",
    "movementPattern": "horizontal_push",
    "note": "קלה על תמיכה מוגבהת ורגילה על הקרקע, באותו רוחב ידיים וטווח. יהלום הוא ענף נוסף. קשה חסרה: אין דירוג נוסף מבוסס באותו ענף.",
    "tiers": {
      "easy": "incline-close-push",
      "regular": "close-push",
      "hard": null
    },
    "harderFamily": "push-archer",
    "relatedFamilies": [
      "diamond-push-branch"
    ]
  },
  {
    "id": "push-archer",
    "he": "שכיבת סמיכה קשת",
    "en": "Archer push-up",
    "area": "chest",
    "movementPattern": "horizontal_push",
    "note": "הפחתת השיפוע והפחתת הסיוע ביד השנייה לאורך אותה דחיקה חד־צידית.",
    "tiers": {
      "easy": "incline-archer-push",
      "regular": "archer-push",
      "hard": "assisted-one-arm-push"
    },
    "harderFamily": "push-one-arm",
    "easierFamily": "push-close"
  },
  {
    "id": "push-one-arm",
    "he": "שכיבת סמיכה ביד אחת",
    "en": "One-arm push-up",
    "area": "chest",
    "movementPattern": "horizontal_push",
    "note": "השיפוע מקל; קשה חסרה כי דחיקה מלאה ביד אחת היא קצה המנוף כאן ללא משקל נוסף.",
    "tiers": {
      "easy": "incline-one-arm-push",
      "regular": "one-arm-push",
      "hard": null
    },
    "easierFamily": "push-archer"
  },
  {
    "id": "push-planche-lean",
    "he": "שכיבת סמיכה בהטיה",
    "en": "Pseudo planche push-up",
    "area": "chest",
    "movementPattern": "horizontal_push",
    "note": "קיצור מנוף בברכיים והגדלת הטיית הכתפיים; ללא החלקה נוספת ברגליים.",
    "tiers": {
      "easy": "knee-pseudo-planche-push",
      "regular": "pseudo-planche-push",
      "hard": "deep-lean-pseudo-planche-push"
    },
    "easierFamily": "push-wide",
    "harderFamily": "planche-slide-push"
  },
  {
    "id": "push-explosive",
    "he": "שכיבות סמיכה מתפרצות",
    "en": "Explosive push-up",
    "area": "chest",
    "movementPattern": "horizontal_push",
    "note": "שינוי שיפוע באותה דחיקה עם ניתוק קל; כל הגרסאות דורשות בדיקה.",
    "tiers": {
      "easy": "incline-explosive-push",
      "regular": "explosive-push",
      "hard": "decline-explosive-push"
    },
    "easierFamily": "push-standard"
  },
  {
    "id": "dip-bars",
    "he": "מקבילים",
    "en": "Bar dip",
    "area": "chest",
    "movementPattern": "vertical_push",
    "note": "קלה בסיוע גומייה ורגילה ללא סיוע באותם מקבילים. לתעד דירוג גומייה ועיגון. קשה חסרה: אין דירוג נוסף מבוסס באותו ענף.",
    "tiers": {
      "easy": "band-assisted-dip",
      "regular": "dip",
      "hard": null
    },
    "harderFamily": "dip-rings",
    "relatedFamilies": [
      "straight-bar-dip-branch"
    ]
  },
  {
    "id": "dip-bench",
    "he": "דחיקת ספסל",
    "en": "Bench dip",
    "area": "chest",
    "movementPattern": "vertical_push",
    "note": "אותה דחיקה בספסל; טווח קצר מקל ורגליים ארוכות מגדילות מנוף.",
    "tiers": {
      "easy": "short-bench-dip",
      "regular": "bench-dip",
      "hard": "long-leg-bench-dip"
    },
    "harderFamily": "dip-jump"
  },
  {
    "id": "dip-jump",
    "he": "מקבילים בסיוע קפיצה",
    "en": "Jump-assisted dip",
    "area": "chest",
    "movementPattern": "vertical_push",
    "note": "הבדל בכמות הסיוע בלבד; נשמרת קפיצה ולא מוסיפים תרגיל אחר.",
    "tiers": {
      "easy": "band-jump-dip",
      "regular": "jump-dip",
      "hard": "low-assist-jump-dip"
    },
    "easierFamily": "dip-bench"
  },
  {
    "id": "dip-rings",
    "he": "מקבילים בטבעות",
    "en": "Ring dip",
    "area": "chest",
    "movementPattern": "vertical_push",
    "note": "קלה בסיוע רגליים; קשה חסרה כי הגדלת עומק מעבר לטווח הנוח אינה יעד כללי וטבעות ללא סיוע הן סוף המשפחה.",
    "tiers": {
      "easy": "feet-assisted-ring-dip",
      "regular": "ring-neutral-dip",
      "hard": null
    },
    "easierFamily": "dip-bars"
  },
  {
    "id": "support-bars",
    "he": "תמיכת ידיים זקופה",
    "en": "Upright arm support",
    "area": "chest",
    "movementPattern": "support",
    "note": "אותם מקבילים ואותו גובה: בקלה הרגליים על הקרקע ונושאות משקל; ברגילה הרגליים מנותקות. נדרשת בדיקת כניסה ויציאה. קשה חסרה: אין דירוג נוסף מבוסס באותו ענף.",
    "tiers": {
      "easy": "foot-support",
      "regular": "support",
      "hard": null
    },
    "easierFamily": "grounded-extension-preparation-family",
    "relatedFamilies": [
      "parallette-foot-support-branch"
    ],
    "harderFamily": "german-hang"
  },
  {
    "id": "planche-preparation",
    "he": "פלאנץ׳ — תמיכה והטיה",
    "en": "Planche preparation",
    "area": "chest",
    "movementPattern": "support",
    "note": "הטיה עם רגליים על הקרקע. לתעד מרחק כתפיים מעבר לכפות הידיים; לקצר אם אין שליטה. כינוס בסיוע מופיע בענפים נפרדים. קלה חסרה: אין דירוג נוסף מבוסס באותו ענף. קשה חסרה: אין דירוג נוסף מבוסס באותו ענף.",
    "tiers": {
      "easy": null,
      "regular": "planche-lean",
      "hard": null
    },
    "harderFamily": "planche-lever",
    "easierFamily": "plank-lean-preparation-family",
    "relatedFamilies": [
      "tuck-assisted-planche-branch",
      "band-tuck-planche-branch"
    ]
  },
  {
    "id": "planche-lever",
    "he": "פלאנץ׳ — הארכת מנוף",
    "en": "Planche leverage",
    "area": "chest",
    "movementPattern": "support",
    "note": "הארכת רגליים מכינוס לפישוק ולגוף ארוך; פלאנץ׳ מלא הוא סוף הסולם ללא משקולות.",
    "tiers": {
      "easy": "tuck-planche",
      "regular": "straddle-planche",
      "hard": "full-planche"
    },
    "easierFamily": "planche-preparation"
  },
  {
    "id": "frog-balance",
    "he": "עמידת צפרדע",
    "en": "Frog stand",
    "area": "chest",
    "movementPattern": "support",
    "note": "קלה בסיוע בהונות; ברגילה כפות הרגליים באוויר; בקשה הברכיים נשארות על הזרועות והכתפיים עוברות עד 2 ס״מ קדימה מאותה נקודת איזון. רק בטווח שנבדק.",
    "tiers": {
      "easy": "toe-assisted-frog",
      "regular": "frog-stand",
      "hard": "forward-frog"
    },
    "easierFamily": "frog-foot-preparation-family"
  },
  {
    "id": "triceps-extension",
    "he": "פשיטת מרפקים בתמיכה",
    "en": "Supported triceps extension",
    "area": "chest",
    "movementPattern": "horizontal_push",
    "note": "קלה במוט גבוה יותר, רגילה במוט נמוך יותר. לתעד גובה מוט ומיקום כפות רגליים; טבעות הן ענף נפרד. קשה חסרה: אין דירוג נוסף מבוסס באותו ענף.",
    "tiers": {
      "easy": "incline-triceps-extension",
      "regular": "bar-triceps-extension",
      "hard": null
    },
    "harderFamily": "ring-russian-push",
    "relatedFamilies": [
      "ring-skull-crusher-branch"
    ]
  },
  {
    "id": "ring-russian-push",
    "he": "שכיבות סמיכה רוסיות בטבעות",
    "en": "Ring Russian push-up",
    "area": "chest",
    "movementPattern": "horizontal_push",
    "note": "קיצור מנוף בברכיים מקל; קשה חסרה כי הרצף המלא בטבעות הוא קצה המשפחה ללא עומס נוסף.",
    "tiers": {
      "easy": "assisted-ring-russian-push",
      "regular": "ring-russian-push",
      "hard": null
    },
    "easierFamily": "triceps-extension"
  },
  {
    "id": "planche-slide-push",
    "he": "החלקת פלאנץ׳ עם שכיבת סמיכה",
    "en": "Planche slide push-up",
    "area": "chest",
    "movementPattern": "horizontal_push",
    "note": "סיוע גומייה וטווח החלקה; יש לאשר עם המאמן את רצף המקור וספירת החזרה לפני ביצוע.",
    "tiers": {
      "easy": "band-planche-slide-push",
      "regular": "short-planche-slide-push",
      "hard": "planche-slide-push"
    },
    "easierFamily": "push-planche-lean",
    "harderFamily": "push-90-hold"
  },
  {
    "id": "push-90-hold",
    "he": "החזקת שכיבת סמיכה כפופה",
    "en": "Bent-arm push-up hold",
    "area": "chest",
    "movementPattern": "horizontal_push",
    "note": "שינוי שיפוע בהחזקה עם רגליים נתמכות; אין פירוש של פלאנץ׳ באוויר.",
    "tiers": {
      "easy": "incline-push-90-hold",
      "regular": "push-up-90-hold",
      "hard": "decline-push-90-hold"
    },
    "easierFamily": "planche-slide-push"
  },
  {
    "id": "row-bar",
    "he": "חתירה במוט",
    "en": "Bar row",
    "area": "back",
    "movementPattern": "horizontal_pull",
    "note": "הגוף נע מזווית זקופה לאופקית ולרגליים מוגבהות.",
    "tiers": {
      "easy": "row",
      "regular": "row-horizontal",
      "hard": "row-feet-elevated"
    },
    "harderFamily": "row-wide"
  },
  {
    "id": "row-band",
    "he": "חתירה בגומייה",
    "en": "Band row",
    "area": "back",
    "movementPattern": "horizontal_pull",
    "note": "שינוי התנגדות הגומייה בלבד; לתעד דירוג ועיגון.",
    "tiers": {
      "easy": "light-band-row",
      "regular": "band-row",
      "hard": "strong-band-row"
    }
  },
  {
    "id": "row-wide",
    "he": "חתירה רחבה",
    "en": "Wide-grip row",
    "area": "back",
    "movementPattern": "horizontal_pull",
    "note": "שמירת האחיזה הרחבה ושינוי מנוף הגוף.",
    "tiers": {
      "easy": "upright-wide-row",
      "regular": "row-wide",
      "hard": "elevated-wide-row"
    },
    "easierFamily": "row-bar",
    "harderFamily": "row-rings"
  },
  {
    "id": "row-rings",
    "he": "חתירה בטבעות",
    "en": "Ring row",
    "area": "back",
    "movementPattern": "horizontal_pull",
    "note": "שינוי זווית הגוף באותו מתקן; נשמרת דרישת בדיקת טבעות.",
    "tiers": {
      "easy": "upright-ring-row",
      "regular": "ring-row",
      "hard": "horizontal-ring-row"
    },
    "easierFamily": "row-wide",
    "harderFamily": "ring-biceps-curl"
  },
  {
    "id": "pull-up",
    "he": "מתח — בסיס",
    "en": "Pull-up",
    "area": "back",
    "movementPattern": "vertical_pull",
    "note": "הפחתת סיוע הרגליים והגומייה עד מתח בשתי ידיים ללא סיוע.",
    "tiers": {
      "easy": "feet-assisted-pull",
      "regular": "band-assisted-pull",
      "hard": "pull"
    },
    "harderFamily": "pull-explosive"
  },
  {
    "id": "pull-explosive",
    "he": "מתח מתפרץ",
    "en": "Explosive pull-up",
    "area": "back",
    "movementPattern": "vertical_pull",
    "note": "הפחתת סיוע והגדלת גובה המשיכה; אין מעבר עליית כוח.",
    "tiers": {
      "easy": "assisted-explosive-pull",
      "regular": "explosive-pull",
      "hard": "high-explosive-pull"
    },
    "easierFamily": "pull-up",
    "harderFamily": "pull-negative"
  },
  {
    "id": "chin-up",
    "he": "מתח באחיזה הפוכה",
    "en": "Chin-up",
    "area": "back",
    "movementPattern": "vertical_pull",
    "note": "סיוע גומייה ואז הגדלת מנוף הרגליים; האחיזה נשארת הפוכה.",
    "tiers": {
      "easy": "band-assisted-chin",
      "regular": "chin",
      "hard": "lsit-chin"
    },
    "harderFamily": "chin-hold"
  },
  {
    "id": "chin-rings",
    "he": "מתח הפוך בטבעות",
    "en": "Ring chin-up",
    "area": "back",
    "movementPattern": "vertical_pull",
    "note": "אותה אחיזה וטבעות; הפחתת סיוע והארכת מנוף הרגליים.",
    "tiers": {
      "easy": "feet-assisted-ring-chin",
      "regular": "ring-chin",
      "hard": "lsit-ring-chin"
    },
    "easierFamily": "chin-hold",
    "harderFamily": "pull-arched"
  },
  {
    "id": "pull-negative",
    "he": "ירידה ממתח",
    "en": "Pull-up eccentric",
    "area": "back",
    "movementPattern": "vertical_pull",
    "note": "אותה ירידה ללא שלב עלייה; קלה בסיוע רגליים וקשה חסרה כי הירידה המלאה היא קצה הטווח ללא משקולות. נדרשת בדיקת עומס אקסצנטרי.",
    "tiers": {
      "easy": "feet-assisted-pull-negative",
      "regular": "pull-negative",
      "hard": null
    },
    "easierFamily": "pull-explosive"
  },
  {
    "id": "chin-hold",
    "he": "החזקת מתח הפוך",
    "en": "Chin-up hold",
    "area": "back",
    "movementPattern": "vertical_pull",
    "note": "החזקות בלבד; שינוי סיוע ומנוף, ללא ערבוב עם חזרות מתח.",
    "tiers": {
      "easy": "feet-assisted-chin-hold",
      "regular": "chin-up-hold",
      "hard": "lsit-chin-hold"
    },
    "easierFamily": "chin-up",
    "harderFamily": "chin-rings"
  },
  {
    "id": "pull-arched",
    "he": "מתח בגב מקושת",
    "en": "Arched pull-up",
    "area": "back",
    "movementPattern": "vertical_pull",
    "note": "שמירת אותה פתיחת חזה; סיוע גומייה וגובה המשיכה משתנים.",
    "tiers": {
      "easy": "band-arch-pull",
      "regular": "arch-pull",
      "hard": "high-arch-pull"
    },
    "easierFamily": "chin-rings",
    "harderFamily": "pull-one-arm-preparation"
  },
  {
    "id": "pull-one-arm-preparation",
    "he": "מתח ביד אחת — סיוע",
    "en": "One-arm pull-up preparation",
    "area": "back",
    "movementPattern": "vertical_pull",
    "note": "הפחתת סיוע מהגומייה ומהיד השנייה עד משיכה ביד אחת עם גומייה.",
    "tiers": {
      "easy": "band-archer-pull",
      "regular": "archer-pull",
      "hard": "one-arm-band-pull"
    },
    "harderFamily": "pull-one-arm",
    "easierFamily": "pull-arched"
  },
  {
    "id": "pull-one-arm",
    "he": "מתח ביד אחת — ללא סיוע",
    "en": "One-arm pull-up",
    "area": "back",
    "movementPattern": "vertical_pull",
    "note": "הפחתת סיוע בלבד; קשה חסרה כי מתח מלא ביד אחת הוא קצה הסולם ללא משקולות.",
    "tiers": {
      "easy": "light-band-one-arm-pull",
      "regular": "one-arm-pull",
      "hard": null
    },
    "easierFamily": "pull-one-arm-preparation",
    "harderFamily": "pull-one-arm-negative"
  },
  {
    "id": "pull-one-arm-negative",
    "he": "ירידה ממתח ביד אחת",
    "en": "One-arm pull-up eccentric",
    "area": "back",
    "movementPattern": "vertical_pull",
    "note": "ירידות בלבד; קשה חסרה כי הירידה המלאה ללא סיוע היא סוף המנוף כאן, ללא עומס נוסף.",
    "tiers": {
      "easy": "band-one-arm-pull-negative",
      "regular": "one-arm-pull-negative",
      "hard": null
    },
    "easierFamily": "pull-one-arm"
  },
  {
    "id": "scap-pull",
    "he": "משיכת שכמות בתלייה",
    "en": "Scapular pull-up",
    "area": "back",
    "movementPattern": "scapular_control",
    "note": "הפחתת תמיכת רגליים והארכת מנוף; מרפקים ישרים בכל שלב.",
    "tiers": {
      "easy": "feet-assisted-scap-pull",
      "regular": "scap-pull",
      "hard": "lsit-scap-pull"
    }
  },
  {
    "id": "hang-passive",
    "he": "תלייה פסיבית",
    "en": "Passive hang",
    "area": "back",
    "movementPattern": "scapular_control",
    "note": "אותה תלייה פסיבית; שינוי תמיכת הרגליים ומספר הידיים הנושאות משקל.",
    "tiers": {
      "easy": "feet-assisted-dead-hang",
      "regular": "dead-hang",
      "hard": "one-arm-dead-hang"
    },
    "relatedFamily": "hang-active",
    "preparationFamily": "hang-active",
    "easierFamily": "hang-active"
  },
  {
    "id": "hang-active",
    "he": "תלייה פעילה",
    "en": "Active hang",
    "area": "back",
    "movementPattern": "scapular_control",
    "note": "שמירת שכמות פעילות; הפחתת תמיכת הרגליים והיד השנייה.",
    "tiers": {
      "easy": "active-hang",
      "regular": "unsupported-active-hang",
      "hard": "one-arm-active-hang"
    },
    "relatedFamily": "hang-passive"
  },
  {
    "id": "prone-w",
    "he": "הרמת זרועות כפופות",
    "en": "Prone W raise",
    "area": "back",
    "movementPattern": "scapular_control",
    "note": "שינוי טווח והתנגדות באותה הרמת זרועות כפופות.",
    "tiers": {
      "easy": "short-prone-w",
      "regular": "prone-w",
      "hard": "band-prone-w"
    }
  },
  {
    "id": "scap-shrug-band",
    "he": "הרמת שכמות בגומייה",
    "en": "Band scapular shrug",
    "area": "back",
    "movementPattern": "scapular_control",
    "note": "שינוי התנגדות הגומייה בלבד; לא מחליפים משיכת שכמות בתלייה בהרמת שכמות בעמידה.",
    "tiers": {
      "easy": "light-band-shrug",
      "regular": "band-scapula-shrug",
      "hard": "strong-band-shrug"
    }
  },
  {
    "id": "front-lever-preparation",
    "he": "פרונט לבר — הכנה",
    "en": "Front lever preparation",
    "area": "back",
    "movementPattern": "vertical_pull",
    "note": "הפחתת סיוע הרגליים והגומייה בהחזקת מנוף אופקי.",
    "tiers": {
      "easy": "lever-supported",
      "regular": "lever-assisted-tuck",
      "hard": "tuck-front-lever"
    },
    "harderFamily": "front-lever-extension",
    "easierFamily": "tuck-hang-preparation-family"
  },
  {
    "id": "front-lever-extension",
    "he": "פרונט לבר — הארכת מנוף",
    "en": "Front lever extension",
    "area": "back",
    "movementPattern": "vertical_pull",
    "note": "פתיחת הכינוס, פישוק ואז רגליים צמודות מאריכים את המנוף.",
    "tiers": {
      "easy": "advanced-tuck-front-lever",
      "regular": "straddle-front-lever",
      "hard": "front-lever"
    },
    "easierFamily": "front-lever-preparation",
    "harderFamily": "front-lever-eccentric"
  },
  {
    "id": "front-lever-eccentric",
    "he": "ירידה מפרונט לבר",
    "en": "Front lever eccentric",
    "area": "back",
    "movementPattern": "vertical_pull",
    "note": "ירידה בלבד; קשה חסרה כי ירידה במנוף גוף מלא היא הקצה ללא משקל נוסף.",
    "tiers": {
      "easy": "band-front-lever-negative",
      "regular": "front-lever-negative",
      "hard": null
    },
    "easierFamily": "front-lever-extension"
  },
  {
    "id": "muscle-up-transition",
    "he": "עליית כוח — מעבר",
    "en": "Muscle-up transition",
    "area": "back",
    "movementPattern": "vertical_pull",
    "note": "אותו רכיב מעבר בסיוע רגליים; המשפחה הבאה מוסיפה את טווח העלייה המלא.",
    "tiers": {
      "easy": "heavy-feet-low-bar-transition",
      "regular": "low-bar-transition",
      "hard": "light-feet-low-bar-transition"
    },
    "harderFamily": "muscle-up-full",
    "easierFamily": "high-pull-preparation-family"
  },
  {
    "id": "muscle-up-full",
    "he": "עליית כוח — רצף מלא",
    "en": "Full muscle-up",
    "area": "back",
    "movementPattern": "vertical_pull",
    "note": "הפחתת סיוע הגומייה באותו רצף מלא עד ללא סיוע.",
    "tiers": {
      "easy": "assisted-muscle-up",
      "regular": "low-assist-muscle-up",
      "hard": "muscle-up-strict"
    },
    "easierFamily": "muscle-up-transition"
  },
  {
    "id": "shoulder-extension-support",
    "he": "פשיטת כתף בתמיכה",
    "en": "Supported shoulder extension",
    "area": "back",
    "movementPattern": "straight_arm_pull",
    "note": "אותו טווח קטן של פשיטת כתף; משנים סיוע בלבד לפני המשך לבאק לבר.",
    "tiers": {
      "easy": "heavy-feet-extension-support",
      "regular": "extension-supported",
      "hard": "light-feet-extension-support"
    },
    "harderFamily": "back-lever-tuck",
    "easierFamily": "band-straight-arm-preparation-family"
  },
  {
    "id": "back-lever-tuck",
    "he": "באק לבר — כינוס ופישוק",
    "en": "Back lever tuck and straddle",
    "area": "back",
    "movementPattern": "straight_arm_pull",
    "note": "הפחתת סיוע ואז הארכת מנוף מהרגליים; אין הגדלת טווח כתף בכוח.",
    "tiers": {
      "easy": "assisted-tuck-back-lever",
      "regular": "tuck-back-lever",
      "hard": "straddle-back-lever"
    },
    "easierFamily": "shoulder-extension-support",
    "harderFamily": "back-lever-full"
  },
  {
    "id": "back-lever-full",
    "he": "באק לבר — גוף ארוך",
    "en": "Full back lever",
    "area": "back",
    "movementPattern": "straight_arm_pull",
    "note": "הפחתת סיוע באותו מנוף מלא; קשה חסרה כי גוף ארוך ללא סיוע הוא סוף הסולם ללא משקולות.",
    "tiers": {
      "easy": "band-full-back-lever",
      "regular": "back-lever",
      "hard": null
    },
    "easierFamily": "back-lever-tuck"
  },
  {
    "id": "german-hang",
    "he": "תלייה גרמנית",
    "en": "German hang",
    "area": "back",
    "movementPattern": "support",
    "note": "קלה בסיוע רגליים; קשה חסרה כי העמקת טווח כתף אינה יעד עומס כללי ואין להוסיף משקולות.",
    "tiers": {
      "easy": "feet-assisted-german-hang",
      "regular": "german-hang",
      "hard": null
    },
    "easierFamily": "support-bars"
  },
  {
    "id": "skin-the-cat",
    "he": "סיבוב תלייה לאחור",
    "en": "Skin the cat",
    "area": "back",
    "movementPattern": "support",
    "note": "סיוע והארכת מנוף בסיבוב דינמי; אינו וריאציה של החזקה סטטית.",
    "tiers": {
      "easy": "band-skin-the-cat",
      "regular": "skin-the-cat",
      "hard": "long-leg-skin-the-cat"
    },
    "easierFamily": "grounded-support-rock-family"
  },
  {
    "id": "ring-biceps-curl",
    "he": "כפיפת מרפקים בטבעות",
    "en": "Ring biceps curl",
    "area": "back",
    "movementPattern": "horizontal_pull",
    "note": "אותה כפיפת מרפקים עם זרועות יציבות; שינוי זווית הגוף בלבד.",
    "tiers": {
      "easy": "upright-ring-curl",
      "regular": "ring-biceps-curl",
      "hard": "horizontal-ring-curl"
    },
    "easierFamily": "row-rings"
  },
  {
    "id": "pike-press",
    "he": "דחיקת פייק",
    "en": "Pike press",
    "area": "shoulders",
    "movementPattern": "vertical_push",
    "note": "טווח קצר מקל והגבהת רגליים מגדילה עומס על הידיים; אין עומס על הראש והצוואר.",
    "tiers": {
      "easy": "short-pike-push",
      "regular": "pike-push",
      "hard": "elevated-pike-push"
    },
    "harderFamily": "handstand-press"
  },
  {
    "id": "handstand-press",
    "he": "דחיקה בעמידת ידיים",
    "en": "Handstand press",
    "area": "shoulders",
    "movementPattern": "vertical_push",
    "note": "הגדלת טווח הדחיקה בקיר; קשה חסרה כי דחיקה בטווח מלא שנבדק היא הקצה כאן, בלי להעמיק לכיוון הראש או להוסיף משקל.",
    "tiers": {
      "easy": "partial-wall-hspu",
      "regular": "wall-hspu",
      "hard": null
    },
    "easierFamily": "pike-press",
    "harderFamily": "handstand-press-negative"
  },
  {
    "id": "handstand-press-negative",
    "he": "ירידה בעמידת ידיים",
    "en": "Handstand press eccentric",
    "area": "shoulders",
    "movementPattern": "vertical_push",
    "note": "ירידה אקסצנטרית בלבד; קשה חסרה כי אין יעד כללי להעמקת הירידה מעבר לטווח שנבדק וללא מגע נושא משקל בראש.",
    "tiers": {
      "easy": "short-wall-hspu-negative",
      "regular": "wall-hspu-negative",
      "hard": null
    },
    "easierFamily": "handstand-press"
  },
  {
    "id": "handstand-line",
    "he": "עמידת ידיים — קו נתמך",
    "en": "Supported handstand line",
    "area": "shoulders",
    "movementPattern": "support",
    "note": "שינוי זווית הגוף ותמיכת הרגליים באותה החזקת תמיכה הפוכה.",
    "tiers": {
      "easy": "pike-support",
      "regular": "partial-wall-line",
      "hard": "wall-handstand"
    },
    "harderFamily": "handstand-balance-hold",
    "easierFamily": "grounded-pike-hold-family"
  },
  {
    "id": "handstand-balance-hold",
    "he": "עמידת ידיים — איזון",
    "en": "Handstand balance hold",
    "area": "shoulders",
    "movementPattern": "support",
    "note": "הפחתת סיוע הקיר עד החזקה באיזון חופשי; נספרות שניות החזקה בלבד.",
    "tiers": {
      "easy": "chest-wall-handstand",
      "regular": "light-wall-handstand-hold",
      "hard": "handstand-free-hold"
    },
    "easierFamily": "handstand-line"
  },
  {
    "id": "handstand-weight-shift",
    "he": "העברות משקל בתמיכה הפוכה",
    "en": "Handstand weight shift",
    "area": "shoulders",
    "movementPattern": "support",
    "note": "בקלה הרגליים על הקרקע בפייק; ברגילה הרגליים נתמכות בקיר. להעביר משקל ימינה ושמאלה בלי לנתק יד. בסיס צר הוא ענף נוסף. קשה חסרה: אין דירוג נוסף מבוסס באותו ענף.",
    "tiers": {
      "easy": "pike-weight-shift",
      "regular": "handstand-shift",
      "hard": null
    },
    "harderFamily": "handstand-toe-pull",
    "easierFamily": "grounded-pike-shift-family",
    "relatedFamilies": [
      "narrow-wall-weight-shift-branch"
    ]
  },
  {
    "id": "handstand-toe-pull",
    "he": "ניתוק בהונות מהקיר",
    "en": "Wall toe pull",
    "area": "shoulders",
    "movementPattern": "support",
    "note": "לתרגל ניתוק עדין וחזרה לקיר באותו מנח: בקלה נשארת בוהן אחת על הקיר; ברגילה מנתקים שתיים. סופרים ניתוקים נשלטים, לא זמן כניסה. קשה חסרה: אין דירוג נוסף מבוסס באותו ענף.",
    "tiers": {
      "easy": "one-toe-wall-pull",
      "regular": "handstand-toe-pull",
      "hard": null
    },
    "easierFamily": "handstand-weight-shift",
    "harderFamily": "handstand-entry",
    "relatedFamilies": [
      "farther-wall-toe-pull-branch"
    ]
  },
  {
    "id": "handstand-entry",
    "he": "כניסה לעמידת ידיים",
    "en": "Handstand entry",
    "area": "shoulders",
    "movementPattern": "support",
    "note": "כניסה בתנופה עם סיוע קיר ואז ללא קיר, רק עם יציאה שנבדקה. כניסה בדחיסה היא ענף נפרד. קשה חסרה: אין דירוג נוסף מבוסס באותו ענף.",
    "tiers": {
      "easy": "wall-assisted-handstand-entry",
      "regular": "handstand-free",
      "hard": null
    },
    "easierFamily": "handstand-toe-pull",
    "harderFamily": "handstand-wall-walk",
    "relatedFamilies": [
      "press-handstand-entry-branch"
    ]
  },
  {
    "id": "handstand-wall-walk",
    "he": "הליכה לעמידת ידיים בקיר",
    "en": "Wall walk",
    "area": "shoulders",
    "movementPattern": "support",
    "note": "שינוי מרחק ההליכה והזווית בלבד; נשמר רצף עלייה וירידה בהליכה.",
    "tiers": {
      "easy": "short-wall-walk",
      "regular": "wall-walk",
      "hard": "close-wall-walk"
    },
    "easierFamily": "handstand-entry"
  },
  {
    "id": "scap-push",
    "he": "דחיקת שכמות",
    "en": "Scapular push-up",
    "area": "shoulders",
    "movementPattern": "scapular_control",
    "note": "קיר, עמידת שש ואז גוף ארוך משנים את המנוף בלי כיפוף מרפקים.",
    "tiers": {
      "easy": "wall-scap-push",
      "regular": "scap-push",
      "hard": "plank-scap-push"
    }
  },
  {
    "id": "squat-basic",
    "he": "סקוואט",
    "en": "Squat",
    "area": "legs",
    "movementPattern": "squat",
    "note": "הפחתת סיוע והוספת עצירה בתחתית באותו מנח סקוואט; העצירה מגדילה עבודה באותו טווח.",
    "tiers": {
      "easy": "supported-squat",
      "regular": "squat",
      "hard": "squat-pause"
    }
  },
  {
    "id": "squat-sumo",
    "he": "סקוואט רחב",
    "en": "Sumo squat",
    "area": "legs",
    "movementPattern": "squat",
    "note": "שינוי טווח באותו פישוק; עומק מותאם לשליטה וללא כאב.",
    "tiers": {
      "easy": "sumo-squat-short",
      "regular": "sumo-squat",
      "hard": "deep-sumo-squat"
    }
  },
  {
    "id": "squat-jump",
    "he": "סקוואט בקפיצה",
    "en": "Jump squat",
    "area": "legs",
    "movementPattern": "squat",
    "note": "אותה קפיצה ונחיתה; שינוי טווח הכיפוף וגובה הקפיצה.",
    "tiers": {
      "easy": "low-jump-squat",
      "regular": "jump-squat",
      "hard": "deep-jump-squat"
    }
  },
  {
    "id": "split-squat",
    "he": "מכרע סטטי (לאנג׳)",
    "en": "Split squat",
    "area": "legs",
    "movementPattern": "single_leg",
    "note": "הפחתת סיוע ידיים והעברת יותר עומס לרגל הקדמית באמצעות ספסל.",
    "tiers": {
      "easy": "supported-split-squat",
      "regular": "split",
      "hard": "rear-foot-elevated-split"
    },
    "harderFamily": "shrimp-squat"
  },
  {
    "id": "reverse-lunge",
    "he": "מכרע לאחור",
    "en": "Reverse lunge",
    "area": "legs",
    "movementPattern": "single_leg",
    "note": "שמירת כיוון המכרע; סיוע ידיים וטווח כיפוף בלבד משתנים.",
    "tiers": {
      "easy": "supported-reverse-lunge",
      "regular": "reverse-lunge",
      "hard": "long-range-reverse-lunge"
    }
  },
  {
    "id": "lateral-lunge",
    "he": "מכרע צידי",
    "en": "Lateral lunge",
    "area": "legs",
    "movementPattern": "single_leg",
    "note": "שמירת כיוון המכרע; סיוע ידיים וטווח כיפוף בלבד משתנים.",
    "tiers": {
      "easy": "supported-lateral-lunge",
      "regular": "lateral-lunge",
      "hard": "long-range-lateral-lunge"
    }
  },
  {
    "id": "forward-lunge",
    "he": "מכרע קדמי",
    "en": "Forward lunge",
    "area": "legs",
    "movementPattern": "single_leg",
    "note": "שמירת כיוון המכרע; סיוע ידיים וטווח כיפוף בלבד משתנים.",
    "tiers": {
      "easy": "supported-forward-lunge",
      "regular": "lunge",
      "hard": "long-range-forward-lunge"
    }
  },
  {
    "id": "pistol-preparation",
    "he": "פיסטול — תמיכה וקופסה",
    "en": "Pistol preparation",
    "area": "legs",
    "movementPattern": "single_leg",
    "note": "קלה עם אחיזה יציבה וסיוע ידיים; רגילה בירידה ליעד גובה מתועד. הגובה והסיוע קובעים קושי; גומייה היא ענף נפרד. קשה חסרה: אין דירוג נוסף מבוסס באותו ענף.",
    "tiers": {
      "easy": "single-squat",
      "regular": "pistol-box",
      "hard": null
    },
    "harderFamily": "pistol-full",
    "relatedFamilies": [
      "band-assisted-pistol-branch"
    ]
  },
  {
    "id": "pistol-full",
    "he": "פיסטול — טווח מלא",
    "en": "Full pistol squat",
    "area": "legs",
    "movementPattern": "single_leg",
    "note": "קלה בסיוע טבעות, רגילה ללא סיוע באותו טווח. לתעד גובה טבעות ומידת העזרה. משטח מוגבה הוא ענף נפרד. קשה חסרה: אין דירוג נוסף מבוסס באותו ענף.",
    "tiers": {
      "easy": "ring-assisted-pistol",
      "regular": "pistol",
      "hard": null
    },
    "easierFamily": "pistol-preparation",
    "relatedFamilies": [
      "elevated-pistol-branch"
    ]
  },
  {
    "id": "shrimp-squat",
    "he": "סקוואט שרימפ",
    "en": "Shrimp squat",
    "area": "legs",
    "movementPattern": "single_leg",
    "note": "אותה רגל כפופה מאחור; סיוע ידיים וטווח משתנים בלי להפוך לפיסטול.",
    "tiers": {
      "easy": "supported-shrimp",
      "regular": "shrimp-squat",
      "hard": "elevated-shrimp"
    },
    "easierFamily": "split-squat"
  },
  {
    "id": "calf-raise",
    "he": "הרמת עקבים",
    "en": "Calf raise",
    "area": "legs",
    "movementPattern": "calf",
    "note": "הגדלת טווח ואז העברת העומס לרגל אחת.",
    "tiers": {
      "easy": "short-calf-raise",
      "regular": "calf",
      "hard": "single-calf"
    }
  },
  {
    "id": "wall-sit",
    "he": "ישיבת קיר",
    "en": "Wall sit",
    "area": "legs",
    "movementPattern": "squat",
    "note": "הגדלת כיפוף והפחתת תמיכת רגל; כולן החזקות סטטיות.",
    "tiers": {
      "easy": "shallow-wall-sit",
      "regular": "wall-sit",
      "hard": "single-leg-wall-sit"
    }
  },
  {
    "id": "glute-bridge",
    "he": "גשר ישבן",
    "en": "Glute bridge",
    "area": "glutes",
    "movementPattern": "hip_extension",
    "note": "הגדלת טווח ואז העברת משקל לרגל אחת באותה הרמת אגן.",
    "tiers": {
      "easy": "short-glute-bridge",
      "regular": "bridge",
      "hard": "single-bridge"
    }
  },
  {
    "id": "bridge-march",
    "he": "צעידה בגשר",
    "en": "Bridge march",
    "area": "glutes",
    "movementPattern": "hip_extension",
    "note": "אותה החזקת גשר עם צעידה; גובה הרגל ומרחק העקבים משנים את המנוף.",
    "tiers": {
      "easy": "small-bridge-march",
      "regular": "bridge-march",
      "hard": "long-lever-bridge-march"
    }
  },
  {
    "id": "hip-hinge",
    "he": "ציר ירך",
    "en": "Hip hinge",
    "area": "glutes",
    "movementPattern": "hinge",
    "note": "קיר מסייע ללמידת הטווח ואז רגל אחת מאריכה את מנוף הגוף ודורשת איזון.",
    "tiers": {
      "easy": "wall-supported-hinge",
      "regular": "hinge",
      "hard": "single-hinge"
    }
  },
  {
    "id": "clamshell",
    "he": "פתיחת ברך בשכיבה",
    "en": "Clamshell",
    "area": "glutes",
    "movementPattern": "hip_external_rotation",
    "note": "אותו סיבוב ירך חיצוני; שינוי טווח והתנגדות.",
    "tiers": {
      "easy": "short-clamshell",
      "regular": "clamshell",
      "hard": "band-clamshell"
    }
  },
  {
    "id": "side-leg-raise",
    "he": "הרמת רגל צידית",
    "en": "Side-lying leg raise",
    "area": "glutes",
    "movementPattern": "hip_abduction",
    "note": "קיצור מנוף הברך ואז הוספת התנגדות; הרחקת ירך בלבד, ללא סיבוב.",
    "tiers": {
      "easy": "bent-knee-side-raise",
      "regular": "side-leg-raise",
      "hard": "band-side-leg-raise"
    }
  },
  {
    "id": "nordic-eccentric",
    "he": "נורדיק בירידה",
    "en": "Nordic eccentric",
    "area": "glutes",
    "movementPattern": "knee_flexion",
    "note": "ירידה בלבד; קשה חסרה כי המנוף הארוך ללא סיוע הוא קצה המשפחה ללא משקולות. עיגון קרסוליים נבדק פרטנית.",
    "tiers": {
      "easy": "band-nordic-negative",
      "regular": "nordic-negative",
      "hard": null
    },
    "easierFamily": "heel-dig"
  },
  {
    "id": "heel-dig",
    "he": "לחיצת עקבים איזומטרית",
    "en": "Heel dig hold",
    "area": "glutes",
    "movementPattern": "knee_flexion",
    "note": "מרחק העקבים משנה מנוף רק באותו לחץ לרצפה. לתעד מרחק ולשמור לחץ נוח וקבוע; אין להסיק עומס מהמרחק בלבד.",
    "tiers": {
      "easy": "near-heel-dig-hold",
      "regular": "heel-dig-hold",
      "hard": "far-heel-dig-hold"
    },
    "harderFamily": "nordic-eccentric"
  },
  {
    "id": "dead-bug",
    "he": "דד באג ונגיעת עקב",
    "en": "Dead bug progression",
    "area": "core",
    "movementPattern": "core_anti_extension",
    "note": "נגיעת עקב ללא תנועת ידיים מפחיתה מנוף; בהמשך מאריכים יד ורגל נגדית.",
    "tiers": {
      "easy": "heel-tap",
      "regular": "deadbug",
      "hard": "long-lever-deadbug"
    }
  },
  {
    "id": "bird-dog",
    "he": "בירד דוג",
    "en": "Bird dog",
    "area": "core",
    "movementPattern": "core_anti_rotation",
    "note": "אותה הארכה נגדית בעמידת שש; קיצור מנוף והוספת התנגדות.",
    "tiers": {
      "easy": "short-bird-dog",
      "regular": "bird-dog",
      "hard": "band-bird-dog"
    }
  },
  {
    "id": "forearm-plank",
    "he": "פלאנק על אמות",
    "en": "Forearm plank",
    "area": "core",
    "movementPattern": "core_anti_extension",
    "note": "הפחתת תמיכת ברכיים והרחקת המרפקים מאריכות מנוף.",
    "tiers": {
      "easy": "knee-plank",
      "regular": "plank",
      "hard": "long-lever-plank"
    }
  },
  {
    "id": "high-plank",
    "he": "פלאנק על כפות הידיים",
    "en": "High plank",
    "area": "core",
    "movementPattern": "core_anti_extension",
    "note": "שינוי שיפוע ומיקום הידיים באותה החזקת מרפקים ישרים.",
    "tiers": {
      "easy": "incline-high-plank",
      "regular": "high-plank",
      "hard": "long-lever-high-plank"
    }
  },
  {
    "id": "hollow-hold",
    "he": "החזקת הולו",
    "en": "Hollow hold",
    "area": "core",
    "movementPattern": "core_anti_extension",
    "note": "הפחתת תמיכת עקבים והארכת רגליים; כולן החזקות ללא בעיטות.",
    "tiers": {
      "easy": "feet-supported-hollow",
      "regular": "hollow",
      "hard": "long-hollow"
    },
    "harderFamily": "dragon-eccentric"
  },
  {
    "id": "side-plank",
    "he": "פלאנק צידי",
    "en": "Side plank",
    "area": "core",
    "movementPattern": "core_lateral_stability",
    "note": "הארכת מנוף מהברכיים לכפות הרגליים ואז הפחתת תמיכת הרגל העליונה.",
    "tiers": {
      "easy": "side-plank-knee",
      "regular": "side-plank",
      "hard": "star-side-plank"
    },
    "harderFamily": "copenhagen-plank"
  },
  {
    "id": "copenhagen-plank",
    "he": "החזקת קופנהגן",
    "en": "Copenhagen plank",
    "area": "core",
    "movementPattern": "core_lateral_stability",
    "note": "הפחתת סיוע הרגל התחתונה והארכת מנוף מהברך לקרסול; החזקות בלבד.",
    "tiers": {
      "easy": "assisted-copenhagen",
      "regular": "copenhagen-plank",
      "hard": "long-copenhagen"
    },
    "easierFamily": "side-plank"
  },
  {
    "id": "hanging-leg-raise",
    "he": "הרמת רגליים בתלייה",
    "en": "Hanging leg raise",
    "area": "core",
    "movementPattern": "compression",
    "note": "הארכת הברכיים והגדלת טווח הרמת הרגליים ללא תנופה.",
    "tiers": {
      "easy": "hanging-knee",
      "regular": "hanging-leg-raise",
      "hard": "toes-to-bar"
    }
  },
  {
    "id": "l-sit",
    "he": "ישיבת אל",
    "en": "L-sit",
    "area": "core",
    "movementPattern": "compression",
    "note": "הארכת רגל אחת ואז שתיים באותה החזקת דחיסה בתמיכת ידיים.",
    "tiers": {
      "easy": "tuck-lsit",
      "regular": "one-leg-lsit",
      "hard": "lsit"
    }
  },
  {
    "id": "standing-compression",
    "he": "הרמת רגל בעמידה",
    "en": "Standing leg raise",
    "area": "core",
    "movementPattern": "compression",
    "note": "סיוע איזון והארכת מנוף הברך; תנועה בעמידה נפרדת מהרמות בתלייה.",
    "tiers": {
      "easy": "supported-standing-knee",
      "regular": "standing-knee",
      "hard": "standing-straight-leg-raise"
    },
    "harderFamily": "seated-compression"
  },
  {
    "id": "seated-compression",
    "he": "הרמות דחיסה בישיבה",
    "en": "Seated compression lift",
    "area": "core",
    "movementPattern": "compression",
    "note": "בקלה ברכיים כפופות; ברגילה ברכיים ישרות וידיים לצד האגן; בקשה ידיים לצד הברכיים. בלי הטיית גב לאחור.",
    "tiers": {
      "easy": "bent-knee-compression-lift",
      "regular": "compression-lift",
      "hard": "long-lever-compression-lift"
    },
    "easierFamily": "standing-compression"
  },
  {
    "id": "seated-in-out",
    "he": "כיווץ ויישור רגליים בישיבה",
    "en": "Seated in-and-out",
    "area": "core",
    "movementPattern": "compression",
    "note": "טווח קטן מקל והסרת תמיכת ידיים מגדילה את המנוף והעומס.",
    "tiers": {
      "easy": "short-seated-in-out",
      "regular": "seated-in-out",
      "hard": "unsupported-seated-in-out"
    }
  },
  {
    "id": "reverse-crunch",
    "he": "גלגול אגן",
    "en": "Reverse crunch",
    "area": "core",
    "movementPattern": "trunk_flexion",
    "note": "אותו גלגול אגן; טווח ומנוף הברכיים משתנים.",
    "tiers": {
      "easy": "short-reverse-crunch",
      "regular": "reverse-crunch",
      "hard": "long-leg-reverse-crunch"
    }
  },
  {
    "id": "bicycle-crunch",
    "he": "כפיפות בטן אופניים",
    "en": "Bicycle crunch",
    "area": "core",
    "movementPattern": "trunk_flexion",
    "note": "שמירת הכיפוף והסיבוב לסירוגין; אורך וגובה הרגל החופשית משנים מנוף.",
    "tiers": {
      "easy": "short-bicycle-crunch",
      "regular": "bicycle-crunch",
      "hard": "long-bicycle-crunch"
    }
  },
  {
    "id": "toe-touch-crunch",
    "he": "נגיעות בכפות הרגליים",
    "en": "Toe touch crunch",
    "area": "core",
    "movementPattern": "trunk_flexion",
    "note": "אותו כיפוף גו ללא גלגול אגן; מנוף הברכיים וזווית הרגליים משתנים.",
    "tiers": {
      "easy": "bent-knee-toe-touch",
      "regular": "toe-touch",
      "hard": "low-leg-toe-touch"
    }
  },
  {
    "id": "flutter-kick",
    "he": "בעיטות רגליים לסירוגין",
    "en": "Flutter kick",
    "area": "core",
    "movementPattern": "core_anti_extension",
    "note": "שינוי מנוף הברכיים וגובה הרגליים באותה תנועה לסירוגין.",
    "tiers": {
      "easy": "bent-knee-flutter",
      "regular": "flutter-kick",
      "hard": "low-flutter-kick"
    }
  },
  {
    "id": "mountain-climber",
    "he": "מטפס הרים",
    "en": "Mountain climber",
    "area": "core",
    "movementPattern": "core_anti_extension",
    "note": "שינוי שיפוע הגוף באותה קירוב ברכיים לתמיכת ידיים.",
    "tiers": {
      "easy": "incline-mountain-climber",
      "regular": "mountain-climber",
      "hard": "elevated-mountain-climber"
    }
  },
  {
    "id": "plank-knee-elbow",
    "he": "פלאנק ברך למרפק",
    "en": "Plank knee-to-elbow",
    "area": "core",
    "movementPattern": "core_anti_rotation",
    "note": "שיפוע משנה עומס באותה קירוב צידית; נפרד ממטפס הרים שמכוון ברך לחזה.",
    "tiers": {
      "easy": "incline-plank-knee-elbow",
      "regular": "plank-knee-elbow",
      "hard": "elevated-plank-knee-elbow"
    }
  },
  {
    "id": "shoulder-tap",
    "he": "נגיעות כתף בפלאנק",
    "en": "Plank shoulder tap",
    "area": "core",
    "movementPattern": "core_anti_rotation",
    "note": "שינוי רוחב בסיס הרגליים בלבד באותה הסרת תמיכת יד לסירוגין.",
    "tiers": {
      "easy": "wide-base-shoulder-tap",
      "regular": "shoulder-tap",
      "hard": "narrow-base-shoulder-tap"
    }
  },
  {
    "id": "commando-plank",
    "he": "מעבר מאמות לכפות ידיים",
    "en": "Commando plank",
    "area": "core",
    "movementPattern": "core_anti_rotation",
    "note": "קיצור מנוף הברכיים ואז הגבהת הרגליים באותו רצף מעבר.",
    "tiers": {
      "easy": "knee-commando-plank",
      "regular": "commando-plank",
      "hard": "elevated-commando-plank"
    }
  },
  {
    "id": "superman-hold",
    "he": "החזקת סופרמן",
    "en": "Superman hold",
    "area": "core",
    "movementPattern": "trunk_extension",
    "note": "הארכת הזרועות קדימה מגדילה מנוף; קשה חסרה כי אין יעד להגדלת קשת הגב או גובה ההרמה מעבר לטווח הנוח.",
    "tiers": {
      "easy": "arms-side-superman",
      "regular": "superman-hold",
      "hard": null
    }
  },
  {
    "id": "lying-leg-raise",
    "he": "הרמת רגליים בשכיבה",
    "en": "Lying leg raise",
    "area": "core",
    "movementPattern": "compression",
    "note": "קיצור מנוף הברך וטווח הורדת הרגליים; הרמת ירך ללא גלגול אגן מכוון.",
    "tiers": {
      "easy": "bent-knee-lying-leg-raise",
      "regular": "lying-leg-raise",
      "hard": "low-range-lying-leg-raise"
    }
  },
  {
    "id": "v-up",
    "he": "עליות בטן בצורת וי",
    "en": "V-up",
    "area": "core",
    "movementPattern": "compression",
    "note": "כיפוף ברכיים מקצר מנוף; קשה חסרה כי גוף ארוך הוא קצה התנועה כאן ללא משקולות או תנועה נוספת.",
    "tiers": {
      "easy": "tuck-v-up",
      "regular": "v-up",
      "hard": null
    }
  },
  {
    "id": "dragon-eccentric",
    "he": "דגל דרקון בירידה",
    "en": "Dragon flag eccentric",
    "area": "core",
    "movementPattern": "core_anti_extension",
    "note": "קיצור מנוף הרגליים מקל; קשה חסרה כי ירידה בגוף ארוך היא קצה התנועה ללא עומס נוסף.",
    "tiers": {
      "easy": "tuck-dragon-negative",
      "regular": "dragon-negative",
      "hard": null
    },
    "easierFamily": "hollow-hold"
  },
  {
    "id": "flag-ground-support",
    "he": "דגל — תמיכת קרקע",
    "en": "Ground-supported flag",
    "area": "core",
    "movementPattern": "support",
    "note": "שינוי זווית ומנוף כשכפות הרגליים נשארות בקרקע; הכנה נפרדת מדגל באוויר.",
    "tiers": {
      "easy": "upright-ground-flag",
      "regular": "flag-ground",
      "hard": "long-lever-ground-flag"
    },
    "harderFamily": "flag-assisted",
    "easierFamily": "wall-side-support-family"
  },
  {
    "id": "flag-assisted",
    "he": "דגל — סיוע והארכה",
    "en": "Assisted flag",
    "area": "core",
    "movementPattern": "support",
    "note": "הפחתת סיוע והארכת מנוף מכינוס לפישוק; סיוע מאמן מתועד נדרש לגרסאות אלה.",
    "tiers": {
      "easy": "flag-assisted",
      "regular": "flag-tuck",
      "hard": "straddle-assisted-flag"
    },
    "easierFamily": "flag-ground-support",
    "harderFamily": "flag-full"
  },
  {
    "id": "flag-full",
    "he": "דגל — גוף ארוך",
    "en": "Full human flag",
    "area": "core",
    "movementPattern": "support",
    "note": "הפחתת סיוע במנוף מלא; קשה חסרה כי דגל ללא סיוע הוא סוף הסולם ללא משקולות.",
    "tiers": {
      "easy": "band-full-flag",
      "regular": "human-flag",
      "hard": null
    },
    "easierFamily": "flag-assisted"
  },
  {
    "id": "march",
    "he": "צעידה במקום",
    "en": "March",
    "area": "fullbody",
    "movementPattern": "locomotion",
    "note": "שינוי גובה הרמת הברך באותה הליכה במקום, ללא מעבר לריצה.",
    "tiers": {
      "easy": "low-march",
      "regular": "march",
      "hard": "high-march"
    }
  },
  {
    "id": "jumping-jack",
    "he": "פתיחת פישוק",
    "en": "Jumping jack",
    "area": "fullbody",
    "movementPattern": "locomotion",
    "note": "צעידה לצד מפחיתה עומס נחיתה; בהמשך קפיצה ופישוק בטווח מעט גדול יותר.",
    "tiers": {
      "easy": "step-jack",
      "regular": "jumping-jack",
      "hard": "high-range-jumping-jack"
    }
  },
  {
    "id": "butt-kick",
    "he": "עקבים לישבן",
    "en": "Butt kick",
    "area": "fullbody",
    "movementPattern": "locomotion",
    "note": "שינוי טווח כיפוף הברך באותה ריצה קלה במקום.",
    "tiers": {
      "easy": "low-butt-kick",
      "regular": "butt-kick",
      "hard": "high-butt-kick"
    }
  },
  {
    "id": "running-high-knees",
    "he": "ריצה במקום",
    "en": "High-knee running",
    "area": "fullbody",
    "movementPattern": "locomotion",
    "note": "גובה הברך משנה טווח; נשמרת ריצה ואינה מתחלפת בצעידה.",
    "tiers": {
      "easy": "low-running-knees",
      "regular": "high-knees",
      "hard": "high-range-running-knees"
    }
  },
  {
    "id": "half-burpee",
    "he": "חצי בורפי",
    "en": "Half burpee",
    "area": "fullbody",
    "movementPattern": "locomotion",
    "note": "שינוי שיפוע ומנוף באותו רצף ללא שכיבת סמיכה וללא קפיצה.",
    "tiers": {
      "easy": "incline-half-burpee",
      "regular": "half-burpee",
      "hard": "long-range-half-burpee"
    }
  },
  {
    "id": "burpee-full",
    "he": "בורפי מלא",
    "en": "Full burpee",
    "area": "fullbody",
    "movementPattern": "locomotion",
    "note": "כל שלוש הגרסאות כוללות שכיבת סמיכה וקפיצה; שיפוע ומנוף משנים עומס.",
    "tiers": {
      "easy": "incline-burpee",
      "regular": "burpee",
      "hard": "long-range-burpee"
    }
  },
  {
    "id": "pike-walk",
    "he": "הליכת פייק",
    "en": "Pike walk",
    "area": "fullbody",
    "movementPattern": "locomotion",
    "note": "שיפוע וטווח צעדי הידיים משנים מנוף באותו רצף הליכה.",
    "tiers": {
      "easy": "incline-pike-walk",
      "regular": "pike-walk",
      "hard": "long-range-pike-walk"
    }
  },
  {
    "id": "wall-slide",
    "he": "החלקת זרועות בקיר",
    "en": "Wall slide",
    "area": "mobility",
    "movementPattern": "mobility",
    "note": "קלה בטווח קצר יותר; קשה חסרה כי בניידות אין יעד כללי להתקדמות מעבר לטווח הנוח או להגדלת עומס בקצה הטווח.",
    "tiers": {
      "easy": "short-wall-slide",
      "regular": "wall-slide",
      "hard": null
    }
  },
  {
    "id": "cat-cow",
    "he": "קימור וקיעור בעמידת שש",
    "en": "Cat cow",
    "area": "mobility",
    "movementPattern": "mobility",
    "note": "קלה בטווח קצר יותר; קשה חסרה כי בניידות אין יעד כללי להתקדמות מעבר לטווח הנוח או להגדלת עומס בקצה הטווח.",
    "tiers": {
      "easy": "short-cat-cow",
      "regular": "cat-cow",
      "hard": null
    }
  },
  {
    "id": "thoracic-rotation",
    "he": "סיבוב בית חזה",
    "en": "Thoracic rotation",
    "area": "mobility",
    "movementPattern": "mobility",
    "note": "קלה בטווח קצר יותר; קשה חסרה כי בניידות אין יעד כללי להתקדמות מעבר לטווח הנוח או להגדלת עומס בקצה הטווח.",
    "tiers": {
      "easy": "short-thoracic-rotation",
      "regular": "thoracic-rotation",
      "hard": null
    }
  },
  {
    "id": "ankle-rock",
    "he": "הנעת קרסול",
    "en": "Ankle rock",
    "area": "mobility",
    "movementPattern": "mobility",
    "note": "קלה בטווח קצר יותר; קשה חסרה כי בניידות אין יעד כללי להתקדמות מעבר לטווח הנוח או להגדלת עומס בקצה הטווח.",
    "tiers": {
      "easy": "short-ankle-rock",
      "regular": "ankle-rock",
      "hard": null
    }
  },
  {
    "id": "back-bridge",
    "he": "גשר גב",
    "en": "Back bridge",
    "area": "mobility",
    "movementPattern": "mobility",
    "note": "קלה בטווח קצר יותר; קשה חסרה כי בניידות אין יעד כללי להתקדמות מעבר לטווח הנוח או להגדלת עומס בקצה הטווח.",
    "tiers": {
      "easy": "short-back-bridge",
      "regular": "back-bridge",
      "hard": null
    },
    "easierFamily": "supported-back-extension-family"
  },
  {
    "id": "shoulder-external-rotation",
    "he": "סיבוב כתף חיצוני בגומייה",
    "en": "Band shoulder external rotation",
    "area": "mobility",
    "movementPattern": "shoulder_external_rotation",
    "note": "אותו טווח סיבוב כתף; דירוג הגומייה משנה התנגדות בלי להגדיל בכוח טווח.",
    "tiers": {
      "easy": "light-band-external-rotation",
      "regular": "band-external-rotation",
      "hard": "strong-band-external-rotation"
    }
  },
  {
    "id": "plank-lean-preparation-family",
    "he": "הכנה להטיית גוף בתמיכה",
    "en": "Foot-supported plank lean",
    "area": "chest",
    "movementPattern": "support",
    "note": "הכנה בלבד, עם תמיכה רצופה. ההבדל בין הדרגות מתואר בהוראות. אינה מחליפה את כוח התרגיל המתקדם ואינה מעניקה אישור לבצע אותו. קשה חסרה: אין דירוג נוסף מבוסס באותו ענף.",
    "tiers": {
      "easy": "plank-lean-preparation-short",
      "regular": "plank-lean-preparation",
      "hard": null
    },
    "harderFamily": "planche-preparation"
  },
  {
    "id": "frog-foot-preparation-family",
    "he": "הכנה לשיווי משקל עם רגליים נתמכות",
    "en": "Foot-loaded frog preparation",
    "area": "chest",
    "movementPattern": "support",
    "note": "הכנה בלבד, עם תמיכה רצופה. ההבדל בין הדרגות מתואר בהוראות. אינה מחליפה את כוח התרגיל המתקדם ואינה מעניקה אישור לבצע אותו. קשה חסרה: אין דירוג נוסף מבוסס באותו ענף.",
    "tiers": {
      "easy": "frog-foot-preparation-short",
      "regular": "frog-foot-preparation",
      "hard": null
    },
    "harderFamily": "frog-balance"
  },
  {
    "id": "tuck-hang-preparation-family",
    "he": "הכנה לתליית טאק עם תמיכת רגליים",
    "en": "Foot-supported tuck hang preparation",
    "area": "back",
    "movementPattern": "vertical_pull",
    "note": "הכנה בלבד, עם תמיכה רצופה. ההבדל בין הדרגות מתואר בהוראות. אינה מחליפה את כוח התרגיל המתקדם ואינה מעניקה אישור לבצע אותו. קשה חסרה: אין דירוג נוסף מבוסס באותו ענף.",
    "tiers": {
      "easy": "tuck-hang-preparation-short",
      "regular": "tuck-hang-preparation",
      "hard": null
    },
    "harderFamily": "front-lever-preparation"
  },
  {
    "id": "high-pull-preparation-family",
    "he": "הכנת משיכה גבוהה עם תמיכת רגליים",
    "en": "Foot-supported high pull preparation",
    "area": "back",
    "movementPattern": "vertical_pull",
    "note": "הכנה בלבד, עם תמיכה רצופה. ההבדל בין הדרגות מתואר בהוראות. אינה מחליפה את כוח התרגיל המתקדם ואינה מעניקה אישור לבצע אותו. קשה חסרה: אין דירוג נוסף מבוסס באותו ענף.",
    "tiers": {
      "easy": "high-pull-preparation-short",
      "regular": "high-pull-preparation",
      "hard": null
    },
    "harderFamily": "muscle-up-transition"
  },
  {
    "id": "band-straight-arm-preparation-family",
    "he": "הכנת משיכה בזרוע ישרה בגומייה",
    "en": "Standing band straight-arm pull preparation",
    "area": "back",
    "movementPattern": "straight_arm_pull",
    "note": "הכנה בלבד, עם תמיכה רצופה. ההבדל בין הדרגות מתואר בהוראות. אינה מחליפה את כוח התרגיל המתקדם ואינה מעניקה אישור לבצע אותו. קשה חסרה: אין דירוג נוסף מבוסס באותו ענף.",
    "tiers": {
      "easy": "band-straight-arm-preparation-short",
      "regular": "band-straight-arm-preparation",
      "hard": null
    },
    "harderFamily": "shoulder-extension-support"
  },
  {
    "id": "grounded-extension-preparation-family",
    "he": "הכנת תמיכה בטווח כתף קטן",
    "en": "Grounded shoulder support preparation",
    "area": "back",
    "movementPattern": "support",
    "note": "הכנה בלבד, עם תמיכה רצופה. ההבדל בין הדרגות מתואר בהוראות. אינה מחליפה את כוח התרגיל המתקדם ואינה מעניקה אישור לבצע אותו. קשה חסרה: אין דירוג נוסף מבוסס באותו ענף.",
    "tiers": {
      "easy": "grounded-extension-preparation-short",
      "regular": "grounded-extension-preparation",
      "hard": null
    },
    "harderFamily": "support-bars"
  },
  {
    "id": "grounded-support-rock-family",
    "he": "העברת משקל בתמיכה עם רגליים על הקרקע",
    "en": "Grounded support weight rock",
    "area": "back",
    "movementPattern": "support",
    "note": "הכנה בלבד, עם תמיכה רצופה. ההבדל בין הדרגות מתואר בהוראות. אינה מחליפה את כוח התרגיל המתקדם ואינה מעניקה אישור לבצע אותו. קשה חסרה: אין דירוג נוסף מבוסס באותו ענף.",
    "tiers": {
      "easy": "grounded-support-rock-short",
      "regular": "grounded-support-rock",
      "hard": null
    },
    "harderFamily": "skin-the-cat"
  },
  {
    "id": "grounded-pike-hold-family",
    "he": "הכנת פייק עם רגליים על הקרקע",
    "en": "Grounded pike hold preparation",
    "area": "shoulders",
    "movementPattern": "support",
    "note": "הכנה בלבד, עם תמיכה רצופה. ההבדל בין הדרגות מתואר בהוראות. אינה מחליפה את כוח התרגיל המתקדם ואינה מעניקה אישור לבצע אותו. קשה חסרה: אין דירוג נוסף מבוסס באותו ענף.",
    "tiers": {
      "easy": "grounded-pike-hold-short",
      "regular": "grounded-pike-hold",
      "hard": null
    },
    "harderFamily": "handstand-line"
  },
  {
    "id": "grounded-pike-shift-family",
    "he": "העברת משקל בפייק נתמך",
    "en": "Grounded pike weight shift preparation",
    "area": "shoulders",
    "movementPattern": "support",
    "note": "הכנה בלבד, עם תמיכה רצופה. ההבדל בין הדרגות מתואר בהוראות. אינה מחליפה את כוח התרגיל המתקדם ואינה מעניקה אישור לבצע אותו. קשה חסרה: אין דירוג נוסף מבוסס באותו ענף.",
    "tiers": {
      "easy": "grounded-pike-shift-short",
      "regular": "grounded-pike-shift",
      "hard": null
    },
    "harderFamily": "handstand-weight-shift"
  },
  {
    "id": "wall-side-support-family",
    "he": "הכנת תמיכת צד בעמידה",
    "en": "Standing wall side support preparation",
    "area": "core",
    "movementPattern": "support",
    "note": "הכנה בלבד, עם תמיכה רצופה. ההבדל בין הדרגות מתואר בהוראות. אינה מחליפה את כוח התרגיל המתקדם ואינה מעניקה אישור לבצע אותו. קשה חסרה: אין דירוג נוסף מבוסס באותו ענף.",
    "tiers": {
      "easy": "wall-side-support-short",
      "regular": "wall-side-support",
      "hard": null
    },
    "harderFamily": "flag-ground-support"
  },
  {
    "id": "supported-back-extension-family",
    "he": "הכנת פשיטה בטווח קטן",
    "en": "Supported small-range back extension preparation",
    "area": "mobility",
    "movementPattern": "mobility",
    "note": "הכנה בלבד, עם תמיכה רצופה. ההבדל בין הדרגות מתואר בהוראות. אינה מחליפה את כוח התרגיל המתקדם ואינה מעניקה אישור לבצע אותו. קשה חסרה: אין דירוג נוסף מבוסס באותו ענף.",
    "tiers": {
      "easy": "supported-back-extension-short",
      "regular": "supported-back-extension",
      "hard": null
    },
    "harderFamily": "back-bridge"
  },
  {
    "id": "deficit-push-branch",
    "he": "שכיבות סמיכה בטווח מוגדל",
    "en": "Deficit push-up",
    "area": "chest",
    "movementPattern": "horizontal_push",
    "note": "ענף טווח על מקבילונים; אינו קשה בהכרח מרגליים מוגבהות. אין להעמיק מעבר לטווח שנבדק. קלה חסרה: אין דירוג נוסף מבוסס באותו ענף. קשה חסרה: אין דירוג נוסף מבוסס באותו ענף.",
    "tiers": {
      "easy": null,
      "regular": "deficit-push",
      "hard": null
    },
    "relatedFamily": "push-standard",
    "preparationFamily": "push-standard",
    "easierFamily": "push-standard"
  },
  {
    "id": "diamond-push-branch",
    "he": "שכיבות סמיכה באחיזת יהלום",
    "en": "Diamond push-up",
    "area": "chest",
    "movementPattern": "horizontal_push",
    "note": "ענף אחיזה; יהלום אינו בהכרח קשה יותר מאחיזה צרה. לבחור אחיזה נוחה לשורש כף היד. קלה חסרה: אין דירוג נוסף מבוסס באותו ענף. קשה חסרה: אין דירוג נוסף מבוסס באותו ענף.",
    "tiers": {
      "easy": null,
      "regular": "diamond-push",
      "hard": null
    },
    "relatedFamily": "push-close",
    "preparationFamily": "push-close",
    "easierFamily": "push-close"
  },
  {
    "id": "straight-bar-dip-branch",
    "he": "דחיקה במוט יחיד",
    "en": "Straight-bar dip",
    "area": "chest",
    "movementPattern": "vertical_push",
    "note": "מתקן ורצף שונים ממקבילים. נדרשים בדיקת המתקן, הטכניקה והיציאה; אין דירוג קושי ישיר בין המתקנים. קלה חסרה: אין דירוג נוסף מבוסס באותו ענף. קשה חסרה: אין דירוג נוסף מבוסס באותו ענף.",
    "tiers": {
      "easy": null,
      "regular": "straight-bar-dip",
      "hard": null
    },
    "relatedFamily": "dip-bars",
    "preparationFamily": "dip-bars",
    "easierFamily": "dip-bars"
  },
  {
    "id": "parallette-foot-support-branch",
    "he": "תמיכה עם רגליים במקבילונים",
    "en": "Feet-supported parallette support",
    "area": "chest",
    "movementPattern": "support",
    "note": "ענף מתקן נפרד. לתעד גובה ותמיכת רגליים; החלפת מתקן אינה התקדמות אוטומטית. קלה חסרה: אין דירוג נוסף מבוסס באותו ענף. קשה חסרה: אין דירוג נוסף מבוסס באותו ענף.",
    "tiers": {
      "easy": null,
      "regular": "parallette-foot-support",
      "hard": null
    },
    "relatedFamily": "support-bars",
    "preparationFamily": "support-bars",
    "easierFamily": "support-bars"
  },
  {
    "id": "tuck-assisted-planche-branch",
    "he": "פלאנץ׳ מכונס בסיוע בהונות",
    "en": "Toe-assisted tuck planche",
    "area": "chest",
    "movementPattern": "support",
    "note": "ענף הכנה בסיוע בהונות. לתעד גובה תמיכה ומנח האגן; אינו שלב קבוע לפני הטיה. אינו פלאנץ׳ ללא סיוע. קלה חסרה: אין דירוג נוסף מבוסס באותו ענף. קשה חסרה: אין דירוג נוסף מבוסס באותו ענף.",
    "tiers": {
      "easy": null,
      "regular": "tuck-assisted-planche",
      "hard": null
    },
    "relatedFamily": "planche-preparation",
    "preparationFamily": "planche-preparation",
    "easierFamily": "planche-preparation"
  },
  {
    "id": "band-tuck-planche-branch",
    "he": "פלאנץ׳ מכונס בסיוע גומייה",
    "en": "Band-assisted tuck planche",
    "area": "chest",
    "movementPattern": "support",
    "note": "ענף סיוע בגומייה. לתעד דירוג, עיגון ומיקום הסיוע. קושי תלוי בכמות הסיוע ואינו מדורג מול הטיה. קלה חסרה: אין דירוג נוסף מבוסס באותו ענף. קשה חסרה: אין דירוג נוסף מבוסס באותו ענף.",
    "tiers": {
      "easy": null,
      "regular": "band-tuck-planche",
      "hard": null
    },
    "relatedFamily": "planche-preparation",
    "preparationFamily": "planche-preparation",
    "easierFamily": "planche-preparation"
  },
  {
    "id": "ring-skull-crusher-branch",
    "he": "פשיטת מרפקים בטבעות",
    "en": "Ring triceps extension",
    "area": "chest",
    "movementPattern": "horizontal_push",
    "note": "ענף מתקן נע; נדרשת בדיקת טבעות. אינו שלב אוטומטי אחרי מוט. קלה חסרה: אין דירוג נוסף מבוסס באותו ענף. קשה חסרה: אין דירוג נוסף מבוסס באותו ענף.",
    "tiers": {
      "easy": null,
      "regular": "ring-skull-crusher",
      "hard": null
    },
    "relatedFamily": "triceps-extension",
    "preparationFamily": "triceps-extension",
    "easierFamily": "triceps-extension"
  },
  {
    "id": "narrow-wall-weight-shift-branch",
    "he": "העברות משקל בבסיס צר",
    "en": "Narrow-base wall weight shift",
    "area": "shoulders",
    "movementPattern": "support",
    "note": "ענף בסיס תמיכה. אינו קשה בהכרח; נדרשת בדיקת רוחב הידיים וכיוון ההעברה. קלה חסרה: אין דירוג נוסף מבוסס באותו ענף. קשה חסרה: אין דירוג נוסף מבוסס באותו ענף.",
    "tiers": {
      "easy": null,
      "regular": "narrow-wall-weight-shift",
      "hard": null
    },
    "relatedFamily": "handstand-weight-shift",
    "preparationFamily": "handstand-weight-shift",
    "easierFamily": "handstand-weight-shift"
  },
  {
    "id": "farther-wall-toe-pull-branch",
    "he": "ניתוק בהונות במנח קיר אחר",
    "en": "Alternate wall toe pull setup",
    "area": "shoulders",
    "movementPattern": "support",
    "note": "ענף מנח קיר. מרחק מהקיר אינו מדד קושי; לתעד מנח ומשך איזון בפועל. קלה חסרה: אין דירוג נוסף מבוסס באותו ענף. קשה חסרה: אין דירוג נוסף מבוסס באותו ענף.",
    "tiers": {
      "easy": null,
      "regular": "farther-wall-toe-pull",
      "hard": null
    },
    "relatedFamily": "handstand-toe-pull",
    "preparationFamily": "handstand-toe-pull",
    "easierFamily": "handstand-toe-pull"
  },
  {
    "id": "press-handstand-entry-branch",
    "he": "כניסה לעמידת ידיים בדחיסה",
    "en": "Press handstand entry",
    "area": "shoulders",
    "movementPattern": "support",
    "note": "כניסה נפרדת מכניסה בתנופה, עם דרישות כוח ותנועתיות אחרות. נדרשת בדיקה אישית. קלה חסרה: אין דירוג נוסף מבוסס באותו ענף. קשה חסרה: אין דירוג נוסף מבוסס באותו ענף.",
    "tiers": {
      "easy": null,
      "regular": "press-handstand-entry",
      "hard": null
    },
    "relatedFamily": "handstand-entry",
    "preparationFamily": "handstand-entry",
    "easierFamily": "handstand-entry"
  },
  {
    "id": "elevated-pistol-branch",
    "he": "פיסטול על משטח מוגבה",
    "en": "Elevated pistol squat",
    "area": "legs",
    "movementPattern": "single_leg",
    "note": "ענף מתקן שעשוי להקל על מרווח הרגל החופשית. אינו בהכרח קשה מפיסטול על הקרקע. קלה חסרה: אין דירוג נוסף מבוסס באותו ענף. קשה חסרה: אין דירוג נוסף מבוסס באותו ענף.",
    "tiers": {
      "easy": null,
      "regular": "elevated-pistol",
      "hard": null
    },
    "relatedFamily": "pistol-full",
    "preparationFamily": "pistol-full",
    "easierFamily": "pistol-full"
  },
  {
    "id": "band-assisted-pistol-branch",
    "he": "פיסטול בסיוע גומייה",
    "en": "Band-assisted pistol squat",
    "area": "legs",
    "movementPattern": "single_leg",
    "note": "ענף סיוע; דירוג ועיגון הגומייה וגובה המטרה חייבים להישאר מתועדים. אינו קשה בהכרח מישיבה לארגז. קלה חסרה: אין דירוג נוסף מבוסס באותו ענף. קשה חסרה: אין דירוג נוסף מבוסס באותו ענף.",
    "tiers": {
      "easy": null,
      "regular": "band-assisted-pistol",
      "hard": null
    },
    "relatedFamily": "pistol-preparation",
    "preparationFamily": "pistol-preparation",
    "easierFamily": "pistol-preparation"
  },
  {
    "id": "push-rings",
    "he": "שכיבות סמיכה על טבעות",
    "en": "Ring push-up",
    "area": "chest",
    "movementPattern": "horizontal_push",
    "note": "ענף ציוד של שכיבת סמיכה; גובה הטבעות וזווית הגוף מתועדים בכל אימון. קלה חסרה וקשה חסרה: אין עדיין דירוג טבעות מבוסס באותו ענף.",
    "tiers": {
      "easy": null,
      "regular": "ring-push",
      "hard": null
    },
    "relatedFamily": "push-standard",
    "easierFamily": "push-standard"
  },
  {
    "id": "pull-lsit",
    "he": "מתח בישיבת אל",
    "en": "L-sit pull-up",
    "area": "back",
    "movementPattern": "vertical_pull",
    "note": "ענף טכניקה של מתח עם רגליים ישרות קדימה. קלה חסרה וקשה חסרה: הדירוג נעשה דרך מתח רגיל ומתח הפוך בישיבת אל.",
    "tiers": {
      "easy": null,
      "regular": "lsit-pull",
      "hard": null
    },
    "relatedFamily": "pull-up",
    "easierFamily": "pull-up"
  },
  {
    "id": "row-one-arm",
    "he": "חתירה אוסטרלית ביד אחת",
    "en": "One-arm Australian row",
    "area": "back",
    "movementPattern": "horizontal_pull",
    "note": "ענף חד־צדדי של חתירה במוט; לתעד גובה מוט ורוחב רגליים. קלה חסרה וקשה חסרה: הדירוג נעשה דרך חתירה בשתי ידיים.",
    "tiers": {
      "easy": null,
      "regular": "one-arm-row",
      "hard": null
    },
    "relatedFamily": "row-bar",
    "easierFamily": "row-bar"
  }
];

const separateBranch = (familyId, tier, id, he, note) => {
 const family=exerciseFamilies.find(f=>f.id===familyId);
 family.tiers[tier]=null;
 const branch={id:id+'-independent-branch',he,en:he,area:family.area,movementPattern:family.movementPattern,
  tiers:{easy:null,regular:id,hard:null},note,easierFamily:family.easierFamily || family.id,relatedFamily:family.id};
 family.relatedFamilies=[...(family.relatedFamilies||[]),branch.id];
 exerciseFamilies.push(branch);
};

const archerFamily=exerciseFamilies.find(f=>f.tiers.hard==='one-arm-band-pull');
separateBranch(archerFamily.id,'hard','one-arm-band-pull','מתח ביד אחת בסיוע גומייה','כמות הסיוע נבדקת בנפרד; זו אינה עלייה אוטומטית בקושי.');

for(const f of exerciseFamilies) {
 f.coachNote=f.note;
 f.comparisonConditions='אותו גובה, זווית וסיוע; אין להסיק עומס מיישור ברכיים בלבד.';
 if(f.tiers.easy===null && !f.note.includes('קלה חסרה'))f.note+=' קלה חסרה: אין אפשרות נוספת באותם תנאים.';
 if(f.tiers.hard===null && !f.note.includes('קשה חסרה'))f.note+=' קשה חסרה: יש לבדוק אפשרות אחרת בנפרד.';
 f.traineeNote=f.id==='grounded-pike-hold-family' ? 'יישור ברכיים תלוי בניידות; זו חלופה, לא עלייה אוטומטית בעומס הכתפיים.' : f.id==='push-standard' ? 'לשמור על אותו גובה תמיכה ואותו עומק בכל אימון.' :
  f.id==='push-foundation' ? 'ככל שהתמיכה גבוהה יותר, קל יותר; לתעד את הגובה.' :
  f.id.includes('preparation') || /grounded|supported|wall-side/.test(f.id) ? 'בוחרים טווח נוח ומשאירים את התמיכה לאורך התנועה.' :
  Object.values(f.tiers).some(id=>id?.includes('band')) ? 'לשמור על אותה גומייה, אותה תמיכה ואותו טווח כדי להשוות ביצועים.' :
  'לבחור תנועה נוחה ולתעד את גובה התמיכה והטווח בכל אימון.';
}

const exerciseFamilyIndex = new Map();
for (const family of exerciseFamilies) {
 for (const [tier, exerciseId] of Object.entries(family.tiers)) {
  if (exerciseId === null) continue;
  if (exerciseFamilyIndex.has(exerciseId)) throw new Error('Duplicate family tier: ' + exerciseId);
  exerciseFamilyIndex.set(exerciseId, {family, tier});
 }
}

/** Returns {family, tier}, or undefined for an unknown exercise id. */
export function familyOf(exerciseId) {
 return exerciseFamilyIndex.get(exerciseId);
}
