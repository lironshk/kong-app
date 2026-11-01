import {libraryDrills} from './library-drills.js?v=31';
import {registerPose} from './poses.js?v=31';
// Original Hebrew editorial coaching copy. Source links are references, not a medical review.
const baseExercises = [
  {
    "id": "wall-push",
    "he": "שכיבות סמיכה מול קיר",
    "en": "Wall push-up",
    "group": "push",
    "equipment": [
      "wall"
    ],
    "level": 1,
    "cue": "לכופף מרפקים ולהקריב את החזה לקיר כיחידה אחת. לדחוק חזרה ולנשוף; לשמור כפות רגליים יציבות.",
    "easy": "לקרב את הרגליים לקיר.",
    "instructions": [
      "לעמוד מול קיר יציב ולהניח ידיים בגובה החזה.",
      "לכופף מרפקים ולהקריב את החזה לקיר כיחידה אחת.",
      "לדחוק חזרה ולנשוף; לשמור כפות רגליים יציבות."
    ],
    "mistakes": [
      "האגן נשאר מאחור בזמן שהראש מתקרב."
    ],
    "regressions": [
      "לקרב את הרגליים לקיר."
    ],
    "progressions": [
      "incline-push"
    ],
    "media": [
      {
        "type": "video",
        "url": "https://www.mayoclinic.org/healthy-lifestyle/fitness/multimedia/modified-pushup/vid-20084674",
        "title": "Modified pushup — knee and wall variations",
        "author": "Mayo Clinic",
        "status": "Video landing page and transcript checked; knee and wall variations explicitly described; video not frame reviewed",
        "license": "Copyright source owner; external link only",
        "embedPermission": "not-verified",
        "requiresClick": true,
        "match": "exact",
        "matchNote": "Video landing page and transcript checked; knee and wall variations explicitly described; video not frame reviewed",
        "checkedAt": "2026-10-20"
      }
    ],
    "source_ids": [
      "acsm-2026",
      "mayo-modified"
    ],
    "sourceIds": [
      "acsm-2026",
      "mayo-modified"
    ],
    "reviewStatus": "editorial-draft; individual-technique-review-pending",
    "population": "Healthy adults; no acute injury; not rehabilitation or pregnancy programming",
    "unit": "reps",
    "perSide": false,
    "muscles": [
      "חזה",
      "כתפיים",
      "יד אחורית"
    ],
    "advancedOnly": false
  },
  {
    "id": "incline-push",
    "he": "שכיבות סמיכה בשיפוע",
    "en": "Incline push-up",
    "group": "push",
    "equipment": [
      "lowbar"
    ],
    "level": 1,
    "cue": "לשמור קו ראש–אגן ולהוריד חזה אל המוט בטווח נוח. לדחוק חזרה בלי להרים כתפיים לאוזניים.",
    "easy": "לבחור משטח תמיכה גבוה ויציב יותר.",
    "instructions": [
      "לאחוז במוט נמוך מעוגן; אין להשתמש בכיסא מתגלגל.",
      "לשמור קו ראש–אגן ולהוריד חזה אל המוט בטווח נוח.",
      "לדחוק חזרה בלי להרים כתפיים לאוזניים."
    ],
    "mistakes": [
      "הגב שוקע בתחתית."
    ],
    "regressions": [
      "לבחור משטח תמיכה גבוה ויציב יותר."
    ],
    "progressions": [
      "push"
    ],
    "media": [
      {
        "type": "article",
        "url": "https://www.nasm.org/resource-center/exercise-library/incline-push-up",
        "title": "Incline Push-Up — exercise guide",
        "author": "NASM",
        "status": "Exact original exercise guide checked; elevated bench/surface differs from app low-bar option",
        "license": "Copyright source owner; external link only",
        "embedPermission": "not-verified",
        "requiresClick": true,
        "match": "related",
        "matchNote": "Exact original exercise guide checked; elevated bench/surface differs from app low-bar option",
        "checkedAt": "2026-10-20"
      }
    ],
    "source_ids": [
      "acsm-2026",
      "nasm-incline"
    ],
    "sourceIds": [
      "acsm-2026",
      "nasm-incline"
    ],
    "reviewStatus": "editorial-draft; individual-technique-review-pending",
    "population": "Healthy adults; no acute injury; not rehabilitation or pregnancy programming",
    "unit": "reps",
    "perSide": false,
    "muscles": [
      "חזה",
      "כתפיים",
      "יד אחורית"
    ],
    "advancedOnly": false
  },
  {
    "id": "knee-push",
    "he": "שכיבות סמיכה על הברכיים",
    "en": "Knee push-up",
    "group": "push",
    "equipment": [],
    "level": 1,
    "cue": "לשמור קו מהראש לברכיים ולהוריד את החזה בשליטה. לדחוק מהרצפה בלי לכופף בירכיים.",
    "easy": "להקטין טווח או לבחור קיר.",
    "instructions": [
      "להניח ידיים על הרצפה וברכיים על משטח נוח.",
      "לשמור קו מהראש לברכיים ולהוריד את החזה בשליטה.",
      "לדחוק מהרצפה בלי לכופף בירכיים."
    ],
    "mistakes": [
      "קיפול האגן לאחור מקצר את התנועה."
    ],
    "regressions": [
      "להקטין טווח או לבחור קיר."
    ],
    "progressions": [
      "push"
    ],
    "media": [
      {
        "type": "video",
        "url": "https://www.mayoclinic.org/healthy-lifestyle/fitness/multimedia/modified-pushup/vid-20084674",
        "title": "Modified pushup — knee and wall variations",
        "author": "Mayo Clinic",
        "status": "Video landing page and transcript checked; knee and wall variations explicitly described; video not frame reviewed",
        "license": "Copyright source owner; external link only",
        "embedPermission": "not-verified",
        "requiresClick": true,
        "match": "exact",
        "matchNote": "Video landing page and transcript checked; knee and wall variations explicitly described; video not frame reviewed",
        "checkedAt": "2026-10-20"
      }
    ],
    "source_ids": [
      "acsm-2026",
      "mayo-modified"
    ],
    "sourceIds": [
      "acsm-2026",
      "mayo-modified"
    ],
    "reviewStatus": "editorial-draft; individual-technique-review-pending",
    "population": "Healthy adults; no acute injury; not rehabilitation or pregnancy programming",
    "unit": "reps",
    "perSide": false,
    "muscles": [
      "חזה",
      "כתפיים",
      "יד אחורית"
    ],
    "advancedOnly": false
  },
  {
    "id": "push",
    "he": "שכיבות סמיכה",
    "en": "Push-up",
    "group": "push",
    "equipment": [],
    "level": 2,
    "cue": "לרדת כיחידה אחת תוך כיפוף מרפקים בזווית נוחה. לדחוק חזרה; לסיים לפני איבוד קו הגוף.",
    "easy": "לעבור לברכיים או לשיפוע יציב.",
    "instructions": [
      "כפות ידיים מעט מעבר לרוחב כתפיים; הדקו בטן וישבן.",
      "לרדת כיחידה אחת תוך כיפוף מרפקים בזווית נוחה.",
      "לדחוק חזרה; לסיים לפני איבוד קו הגוף."
    ],
    "mistakes": [
      "הראש מוביל והאגן נשמט."
    ],
    "regressions": [
      "לעבור לברכיים או לשיפוע יציב."
    ],
    "progressions": [
      "close-push"
    ],
    "media": [
      {
        "type": "video",
        "url": "https://www.youtube.com/watch?v=-WXc4E-zcao",
        "title": "Master the Push-Up (BEGINNER TUTORIAL)",
        "author": "FitnessFAQs",
        "status": "verified-title-and-author; not-frame-reviewed",
        "license": "Copyright creator; external link only",
        "embedPermission": "not-verified",
        "requiresClick": true,
        "match": "exact",
        "matchNote": "verified-title-and-author; not-frame-reviewed",
        "checkedAt": "2026-10-20"
      }
    ],
    "source_ids": [
      "acsm-2026",
      "nasm-push",
      "ff-push"
    ],
    "sourceIds": [
      "acsm-2026",
      "nasm-push",
      "ff-push"
    ],
    "reviewStatus": "editorial-draft; individual-technique-review-pending",
    "population": "Healthy adults; no acute injury; not rehabilitation or pregnancy programming",
    "unit": "reps",
    "perSide": false,
    "muscles": [
      "חזה",
      "כתפיים",
      "יד אחורית"
    ],
    "advancedOnly": false
  },
  {
    "id": "close-push",
    "he": "שכיבות סמיכה באחיזה צרה",
    "en": "Close-grip push-up",
    "group": "push",
    "equipment": [],
    "level": 3,
    "cue": "לכופף מרפקים סמוך לגוף ולשמור על קו יציב. לדחוק ללא תנופה או כאב במפרקים.",
    "easy": "להרחיב ידיים או לעבור לברכיים.",
    "instructions": [
      "למקם ידיים קרוב יותר מרוחב הכתפיים לפי נוחות שורש כף היד.",
      "לכופף מרפקים סמוך לגוף ולשמור על קו יציב.",
      "לדחוק ללא תנופה או כאב במפרקים."
    ],
    "mistakes": [
      "ידיים צרות מדי כופות כאב."
    ],
    "regressions": [
      "להרחיב ידיים או לעבור לברכיים."
    ],
    "progressions": [
      "pike-push"
    ],
    "media": [
      {
        "type": "article",
        "url": "https://www.strengthlog.com/close-grip-push-up/",
        "title": "Close-Grip Push-Up",
        "author": "StrengthLog",
        "status": "Original close-grip guide and image presence checked; image not technique-reviewed",
        "license": "Copyright source owner; external link only",
        "embedPermission": "not-verified",
        "requiresClick": true,
        "match": "exact",
        "matchNote": "Original close-grip guide and image presence checked; image not technique-reviewed",
        "checkedAt": "2026-10-20"
      }
    ],
    "source_ids": [
      "acsm-2026",
      "strengthlog-close"
    ],
    "sourceIds": [
      "acsm-2026",
      "strengthlog-close"
    ],
    "reviewStatus": "editorial-draft; individual-technique-review-pending",
    "population": "Healthy adults; no acute injury; not rehabilitation or pregnancy programming",
    "unit": "reps",
    "perSide": false,
    "muscles": [
      "חזה",
      "כתפיים",
      "יד אחורית"
    ],
    "advancedOnly": false
  },
  {
    "id": "scap-push",
    "he": "דחיקת שכמות בעמידת שש",
    "en": "Quadruped scapular push-up",
    "group": "push",
    "equipment": [],
    "level": 1,
    "cue": "תנו לחזה לשקוע מעט בין השכמות ללא קיפול המרפקים. לדחוק את הרצפה ולהרים את הגב העליון בעדינות.",
    "easy": "לצמצם טווח.",
    "instructions": [
      "לעמוד על שש עם מרפקים ישרים אך לא נעולים בכוח.",
      "תנו לחזה לשקוע מעט בין השכמות ללא קיפול המרפקים.",
      "לדחוק את הרצפה ולהרים את הגב העליון בעדינות."
    ],
    "mistakes": [
      "כיפוף המרפקים מחליף תנועת שכמות."
    ],
    "regressions": [
      "לצמצם טווח."
    ],
    "progressions": [
      "push"
    ],
    "media": [
      {
        "type": "article",
        "url": "https://www.caliverse.app/exercises/scapula-push-up-266",
        "title": "Scapula Push Up",
        "author": "Caliverse",
        "status": "Original straight-arm scapular movement instructions checked; video not played",
        "license": "Copyright source owner; external link only",
        "embedPermission": "not-verified",
        "requiresClick": true,
        "match": "exact",
        "matchNote": "Original straight-arm scapular movement instructions checked; video not played",
        "checkedAt": "2026-10-20"
      }
    ],
    "source_ids": [
      "acsm-2026",
      "caliverse-scap-push"
    ],
    "sourceIds": [
      "acsm-2026",
      "caliverse-scap-push"
    ],
    "reviewStatus": "editorial-draft; individual-technique-review-pending",
    "population": "Healthy adults; no acute injury; not rehabilitation or pregnancy programming",
    "unit": "reps",
    "perSide": false,
    "muscles": [
      "חזה",
      "כתפיים",
      "יד אחורית"
    ],
    "advancedOnly": false
  },
  {
    "id": "pike-push",
    "he": "שכיבות סמיכה פייק",
    "en": "Pike push-up",
    "group": "push",
    "equipment": [],
    "level": 3,
    "cue": "לכופף מרפקים ולהוריד ראש קדימה ולמטה בשליטה. לדחוק חזרה; אין להעמיס משקל על הראש.",
    "easy": "להקטין טווח ולבחור שכיבות סמיכה.",
    "instructions": [
      "להתחיל בתמיכת ידיים ורגליים כשהאגן גבוה.",
      "לכופף מרפקים ולהוריד ראש קדימה ולמטה בשליטה.",
      "לדחוק חזרה; אין להעמיס משקל על הראש."
    ],
    "mistakes": [
      "ירידה מהירה ללא יכולת עצירה."
    ],
    "regressions": [
      "להקטין טווח ולבחור שכיבות סמיכה."
    ],
    "progressions": [
      "wall-handstand"
    ],
    "media": [
      {
        "type": "article",
        "url": "https://www.nasm.org/resource-center/exercise-library/pike-push-up",
        "title": "Pike Push-Up",
        "author": "NASM",
        "status": "Original guide and linked video presence checked; video not played",
        "license": "Copyright source owner; external link only",
        "embedPermission": "not-verified",
        "requiresClick": true,
        "match": "exact",
        "matchNote": "Original guide and linked video presence checked; video not played",
        "checkedAt": "2026-10-20"
      }
    ],
    "source_ids": [
      "acsm-2026",
      "nasm-pike"
    ],
    "sourceIds": [
      "acsm-2026",
      "nasm-pike"
    ],
    "reviewStatus": "editorial-draft; individual-technique-review-pending",
    "population": "Healthy adults; no acute injury; not rehabilitation or pregnancy programming",
    "unit": "reps",
    "perSide": false,
    "muscles": [
      "חזה",
      "כתפיים",
      "יד אחורית"
    ],
    "advancedOnly": false
  },
  {
    "id": "support",
    "he": "תמיכה על מקבילים",
    "en": "Parallel-bar support",
    "group": "push",
    "equipment": [
      "parallel"
    ],
    "level": 2,
    "cue": "לדחוק מטה ולהחזיק גוף יציב עם נשימה חופשית. להחזיר רגליים לקרקע לפני עייפות האחיזה.",
    "easy": "להשאיר חלק מהמשקל על הרגליים.",
    "instructions": [
      "לוודא שהמקבילים מעוגנים והיכנסו עם תמיכת רגליים.",
      "לדחוק מטה ולהחזיק גוף יציב עם נשימה חופשית.",
      "להחזיר רגליים לקרקע לפני עייפות האחיזה."
    ],
    "mistakes": [
      "עלייה למתקן לא יציב."
    ],
    "regressions": [
      "להשאיר חלק מהמשקל על הרגליים."
    ],
    "progressions": [
      "dip"
    ],
    "media": [
      {
        "type": "article",
        "url": "https://www.caliverse.app/exercises/parallel-bar-support-hold-128",
        "title": "Parallel Bar Support Hold",
        "author": "Caliverse",
        "status": "Original straight-arm parallel support guide including assisted option checked; video not played",
        "license": "Copyright source owner; external link only",
        "embedPermission": "not-verified",
        "requiresClick": true,
        "match": "exact",
        "matchNote": "Original straight-arm parallel support guide including assisted option checked; video not played",
        "checkedAt": "2026-10-20"
      }
    ],
    "source_ids": [
      "acsm-2026",
      "caliverse-support"
    ],
    "sourceIds": [
      "acsm-2026",
      "caliverse-support"
    ],
    "reviewStatus": "editorial-draft; individual-technique-review-pending",
    "population": "Healthy adults; no acute injury; not rehabilitation or pregnancy programming",
    "unit": "seconds",
    "perSide": false,
    "muscles": [
      "חזה",
      "כתפיים",
      "יד אחורית"
    ],
    "advancedOnly": false
  },
  {
    "id": "dip",
    "he": "מקבילים",
    "en": "Parallel-bar dip",
    "group": "push",
    "equipment": [
      "parallel"
    ],
    "level": 3,
    "cue": "לכופף מרפקים בטווח שבו הכתפיים נשארות נוחות. לדחוק חזרה בלי קפיצה או צלילה לעומק.",
    "easy": "תמיכה עם רגליים או שכיבות סמיכה.",
    "instructions": [
      "להתחיל בתמיכה יציבה מעל מקבילים מעוגנים.",
      "לכופף מרפקים בטווח שבו הכתפיים נשארות נוחות.",
      "לדחוק חזרה בלי קפיצה או צלילה לעומק."
    ],
    "mistakes": [
      "חיפוש עומק מעבר לשליטה בכתף."
    ],
    "regressions": [
      "תמיכה עם רגליים או שכיבות סמיכה."
    ],
    "progressions": [
      "support"
    ],
    "media": [
      {
        "type": "article",
        "url": "https://www.caliverse.app/exercises/parallel-bar-dips-90",
        "title": "Parallel Bar Dips",
        "author": "Caliverse",
        "status": "Original parallel-bar instructions checked; video not played",
        "license": "Copyright source owner; external link only",
        "embedPermission": "not-verified",
        "requiresClick": true,
        "match": "exact",
        "matchNote": "Original parallel-bar instructions checked; video not played",
        "checkedAt": "2026-10-20"
      }
    ],
    "source_ids": [
      "acsm-2026",
      "caliverse-dip"
    ],
    "sourceIds": [
      "acsm-2026",
      "caliverse-dip"
    ],
    "reviewStatus": "editorial-draft; individual-technique-review-pending",
    "population": "Healthy adults; no acute injury; not rehabilitation or pregnancy programming",
    "unit": "reps",
    "perSide": false,
    "muscles": [
      "חזה",
      "כתפיים",
      "יד אחורית"
    ],
    "advancedOnly": false
  },
  {
    "id": "band-row",
    "he": "חתירה עם גומייה בישיבה",
    "en": "Seated band row",
    "group": "pull",
    "equipment": [
      "band"
    ],
    "level": 1,
    "cue": "למשוך מרפקים לאחור בלי למשוך את הגב לאחור. להחזיר ידיים בשליטה; לעצור אם הגומייה מחליקה.",
    "easy": "להפחית מתח או לבחור חתירה במוט.",
    "instructions": [
      "לבדוק גומייה וסוליות; כרכו סביב אמצע נעליים עם ברכיים מעט כפופות.",
      "למשוך מרפקים לאחור בלי למשוך את הגב לאחור.",
      "להחזיר ידיים בשליטה; לעצור אם הגומייה מחליקה."
    ],
    "mistakes": [
      "גומייה שחוקה או מכוונת לפנים."
    ],
    "regressions": [
      "להפחית מתח או לבחור חתירה במוט."
    ],
    "progressions": [
      "row"
    ],
    "media": [
      {
        "type": "article",
        "url": "https://eat-move-save.extension.illinois.edu/move/exercise/seated-row",
        "title": "Seated Row — band around feet",
        "author": "University of Illinois Extension",
        "status": "Original seated floor band-row steps and image presence checked; source dose not adopted",
        "license": "Copyright source owner; external link only",
        "embedPermission": "not-verified",
        "requiresClick": true,
        "match": "exact",
        "matchNote": "Original seated floor band-row steps and image presence checked; source dose not adopted",
        "checkedAt": "2026-10-20"
      }
    ],
    "source_ids": [
      "acsm-2026",
      "illinois-band-row"
    ],
    "sourceIds": [
      "acsm-2026",
      "illinois-band-row"
    ],
    "reviewStatus": "editorial-draft; individual-technique-review-pending",
    "population": "Healthy adults; no acute injury; not rehabilitation or pregnancy programming",
    "unit": "reps",
    "perSide": false,
    "muscles": [
      "גב",
      "יד קדמית",
      "אחיזה"
    ],
    "advancedOnly": false
  },
  {
    "id": "row",
    "he": "חתירה במוט נמוך",
    "en": "Bodyweight row",
    "group": "pull",
    "equipment": [
      "lowbar"
    ],
    "level": 2,
    "cue": "למשוך חזה לכיוון המוט ולשמור גוף כיחידה אחת. ליישר זרועות בשליטה ללא נפילה.",
    "easy": "לעמוד זקוף יותר או לכופף ברכיים.",
    "instructions": [
      "לבדוק מוט מעוגן ולעמוד בזווית שמאפשרת שליטה.",
      "למשוך חזה לכיוון המוט ולשמור גוף כיחידה אחת.",
      "ליישר זרועות בשליטה ללא נפילה."
    ],
    "mistakes": [
      "משיכת האגן קדימה במקום הגוף."
    ],
    "regressions": [
      "לעמוד זקוף יותר או לכופף ברכיים."
    ],
    "progressions": [
      "row-horizontal"
    ],
    "media": [
      {
        "type": "video",
        "url": "https://www.youtube.com/watch?v=z4RJcgEKRSQ",
        "title": "Top 3 Rows EVERYONE NEEDS (Beginner to Advanced)",
        "author": "FitnessFAQs",
        "status": "verified-title-and-author; not-frame-reviewed",
        "license": "Copyright creator; external link only",
        "embedPermission": "not-verified",
        "requiresClick": true,
        "match": "related",
        "matchNote": "verified-title-and-author; not-frame-reviewed",
        "checkedAt": "2026-10-20"
      }
    ],
    "source_ids": [
      "acsm-2026",
      "ff-row"
    ],
    "sourceIds": [
      "acsm-2026",
      "ff-row"
    ],
    "reviewStatus": "editorial-draft; individual-technique-review-pending",
    "population": "Healthy adults; no acute injury; not rehabilitation or pregnancy programming",
    "unit": "reps",
    "perSide": false,
    "muscles": [
      "גב",
      "יד קדמית",
      "אחיזה"
    ],
    "advancedOnly": false
  },
  {
    "id": "row-horizontal",
    "he": "חתירה אופקית",
    "en": "Horizontal bodyweight row",
    "group": "pull",
    "equipment": [
      "lowbar"
    ],
    "level": 3,
    "cue": "למשוך את החזה תוך שמירה על אגן בקו הגוף. לרדת לאט ולסיים כשהטכניקה מתחילה להשתנות.",
    "easy": "לקרב רגליים ולכופף ברכיים.",
    "instructions": [
      "לבחור מוט מעוגן וגובה שמאפשר גוף קרוב לאופקי.",
      "למשוך את החזה תוך שמירה על אגן בקו הגוף.",
      "לרדת לאט ולסיים כשהטכניקה מתחילה להשתנות."
    ],
    "mistakes": [
      "קשת בגב כדי להגיע למוט."
    ],
    "regressions": [
      "לקרב רגליים ולכופף ברכיים."
    ],
    "progressions": [
      "pull"
    ],
    "media": [],
    "source_ids": [
      "acsm-2026"
    ],
    "sourceIds": [
      "acsm-2026"
    ],
    "reviewStatus": "editorial-draft; individual-technique-review-pending",
    "population": "Healthy adults; no acute injury; not rehabilitation or pregnancy programming",
    "unit": "reps",
    "perSide": false,
    "muscles": [
      "גב",
      "יד קדמית",
      "אחיזה"
    ],
    "advancedOnly": false
  },
  {
    "id": "active-hang",
    "he": "תלייה פעילה עם תמיכת רגליים",
    "en": "Foot-assisted active hang",
    "group": "pull",
    "equipment": [
      "bar"
    ],
    "level": 1,
    "cue": "להעביר מעט עומס לידיים ולהרחיק כתפיים מהאוזניים בעדינות. לחזור לעמידה לפני שהאחיזה נחלשת.",
    "easy": "להגדיל תמיכת רגליים.",
    "instructions": [
      "לבדוק מוט ואחיזה; להשאיר רגליים על תמיכה קבועה.",
      "להעביר מעט עומס לידיים ולהרחיק כתפיים מהאוזניים בעדינות.",
      "לחזור לעמידה לפני שהאחיזה נחלשת."
    ],
    "mistakes": [
      "העמסה מלאה לפני שהכתפיים מרגישות נוחות."
    ],
    "regressions": [
      "להגדיל תמיכת רגליים."
    ],
    "progressions": [
      "scap-pull"
    ],
    "media": [
      {
        "type": "article",
        "url": "https://theprehabguys.com/vimeo-video/active-hang/",
        "title": "Active Hang",
        "author": "[P]rehab",
        "status": "Original exercise page and active shoulder cue checked; video not played",
        "license": "Copyright source owner; external link only",
        "embedPermission": "not-verified",
        "requiresClick": true,
        "match": "exact",
        "matchNote": "Original exercise page and active shoulder cue checked; video not played",
        "checkedAt": "2026-10-20"
      }
    ],
    "source_ids": [
      "acsm-2026",
      "prehab-active-hang"
    ],
    "sourceIds": [
      "acsm-2026",
      "prehab-active-hang"
    ],
    "reviewStatus": "editorial-draft; individual-technique-review-pending",
    "population": "Healthy adults; no acute injury; not rehabilitation or pregnancy programming",
    "unit": "seconds",
    "perSide": false,
    "muscles": [
      "גב",
      "יד קדמית",
      "אחיזה"
    ],
    "advancedOnly": false
  },
  {
    "id": "scap-pull",
    "he": "משיכת שכמות בתלייה",
    "en": "Scapular pull-up",
    "group": "pull",
    "equipment": [
      "bar"
    ],
    "level": 2,
    "cue": "עם מרפקים ישרים, להרים מעט את הגוף באמצעות חגורת הכתפיים. לחזור לאט; טווח התנועה קטן.",
    "easy": "להשאיר תמיכת רגליים.",
    "instructions": [
      "לאחוז במוט מאובטח עם דרך ירידה בטוחה.",
      "עם מרפקים ישרים, להרים מעט את הגוף באמצעות חגורת הכתפיים.",
      "לחזור לאט; טווח התנועה קטן."
    ],
    "mistakes": [
      "כיפוף מרפקים או תנופה."
    ],
    "regressions": [
      "להשאיר תמיכת רגליים."
    ],
    "progressions": [
      "pull-negative"
    ],
    "media": [
      {
        "type": "article",
        "url": "https://gmb.io/pull-ups/",
        "title": "Pulling Prep — Step 1",
        "author": "GMB / Ryan Hurst",
        "status": "Exact straight-arm scapular pulling-prep section checked; rings or bar explicitly supported; video not played",
        "license": "Copyright source owner; external link only",
        "embedPermission": "not-verified",
        "requiresClick": true,
        "match": "exact",
        "matchNote": "Exact straight-arm scapular pulling-prep section checked; rings or bar explicitly supported; video not played",
        "checkedAt": "2026-10-20"
      }
    ],
    "source_ids": [
      "acsm-2026",
      "gmb-pull"
    ],
    "sourceIds": [
      "acsm-2026",
      "gmb-pull"
    ],
    "reviewStatus": "editorial-draft; individual-technique-review-pending",
    "population": "Healthy adults; no acute injury; not rehabilitation or pregnancy programming",
    "unit": "reps",
    "perSide": false,
    "muscles": [
      "גב",
      "יד קדמית",
      "אחיזה"
    ],
    "advancedOnly": false
  },
  {
    "id": "pull-negative",
    "he": "ירידה מבוקרת ממתח",
    "en": "Eccentric pull-up",
    "group": "pull",
    "equipment": [
      "bar"
    ],
    "level": 3,
    "cue": "להוריד את הגוף לאט כל עוד נשמרת שליטה בכתפיים. להניח רגליים ולחזור לעמדה; מעט חזרות מספיקות בתחילה.",
    "easy": "תמיכת רגליים או חתירה.",
    "instructions": [
      "עלו לעמדת סנטר מעל מוט באמצעות מדרגה מאובטחת.",
      "להוריד את הגוף לאט כל עוד נשמרת שליטה בכתפיים.",
      "להניח רגליים ולחזור לעמדה; מעט חזרות מספיקות בתחילה."
    ],
    "mistakes": [
      "קפיצה לתלייה ונפילה כשהאחיזה עייפה."
    ],
    "regressions": [
      "תמיכת רגליים או חתירה."
    ],
    "progressions": [
      "pull"
    ],
    "media": [
      {
        "type": "article",
        "url": "https://gmb.io/pull-ups/",
        "title": "Negative Pull-Ups — Step 3",
        "author": "GMB / Ryan Hurst",
        "status": "Exact negative pull-up section checked; source program dose not adopted; video not played",
        "license": "Copyright source owner; external link only",
        "embedPermission": "not-verified",
        "requiresClick": true,
        "match": "exact",
        "matchNote": "Exact negative pull-up section checked; source program dose not adopted; video not played",
        "checkedAt": "2026-10-20"
      }
    ],
    "source_ids": [
      "acsm-2026",
      "gmb-pull"
    ],
    "sourceIds": [
      "acsm-2026",
      "gmb-pull"
    ],
    "reviewStatus": "editorial-draft; individual-technique-review-pending",
    "population": "Healthy adults; no acute injury; not rehabilitation or pregnancy programming",
    "unit": "reps",
    "perSide": false,
    "muscles": [
      "גב",
      "יד קדמית",
      "אחיזה"
    ],
    "advancedOnly": false
  },
  {
    "id": "pull",
    "he": "מתח",
    "en": "Pull-up",
    "group": "pull",
    "equipment": [
      "bar"
    ],
    "level": 3,
    "cue": "למשוך את הגוף מעלה ללא בעיטה; לשמור צוואר נינוח. לרדת בשליטה ולסיים לפני שהאחיזה או הטכניקה נשברות.",
    "easy": "לבחור חתירה או תמיכת רגליים.",
    "instructions": [
      "לאחוז במוט מעוגן ברוחב נוח עם דרך ירידה פנויה.",
      "למשוך את הגוף מעלה ללא בעיטה; לשמור צוואר נינוח.",
      "לרדת בשליטה ולסיים לפני שהאחיזה או הטכניקה נשברות."
    ],
    "mistakes": [
      "הנפת רגליים או מתיחת צוואר כדי לסיים חזרה."
    ],
    "regressions": [
      "לבחור חתירה או תמיכת רגליים."
    ],
    "progressions": [
      "chin"
    ],
    "media": [
      {
        "type": "video",
        "url": "https://www.youtube.com/watch?v=Y3ntNsIS2Q8",
        "title": "Master the Pull-Up (BEGINNER TUTORIAL)",
        "author": "FitnessFAQs",
        "status": "verified-title-and-author; not-frame-reviewed",
        "license": "Copyright creator; external link only",
        "embedPermission": "not-verified",
        "requiresClick": true,
        "match": "exact",
        "matchNote": "verified-title-and-author; not-frame-reviewed",
        "checkedAt": "2026-10-20"
      }
    ],
    "source_ids": [
      "acsm-2026",
      "gmb-pull",
      "ff-pull"
    ],
    "sourceIds": [
      "acsm-2026",
      "gmb-pull",
      "ff-pull"
    ],
    "reviewStatus": "editorial-draft; individual-technique-review-pending",
    "population": "Healthy adults; no acute injury; not rehabilitation or pregnancy programming",
    "unit": "reps",
    "perSide": false,
    "muscles": [
      "גב",
      "יד קדמית",
      "אחיזה"
    ],
    "advancedOnly": false
  },
  {
    "id": "chin",
    "he": "מתח באחיזה הפוכה",
    "en": "Chin-up",
    "group": "pull",
    "equipment": [
      "bar"
    ],
    "level": 3,
    "cue": "עלו עם גוף יציב ללא בעיטת רגליים. לרדת בשליטה; לבחור אחיזה אחרת אם יש אי נוחות.",
    "easy": "תמיכת רגליים או חתירה.",
    "instructions": [
      "לאחוז במוט כשכפות הידיים לכיוונכם רק אם נוח במרפקים.",
      "עלו עם גוף יציב ללא בעיטת רגליים.",
      "לרדת בשליטה; לבחור אחיזה אחרת אם יש אי נוחות."
    ],
    "mistakes": [
      "כפיית אחיזה על שורש כף היד."
    ],
    "regressions": [
      "תמיכת רגליים או חתירה."
    ],
    "progressions": [
      "pull"
    ],
    "media": [
      {
        "type": "article",
        "url": "https://www.catalystathletics.com/exercise/39/Pull-up/",
        "title": "Pull-Up — chin-up variation section",
        "author": "Catalyst Athletics / Greg Everett",
        "status": "Article explicitly describes supinated chin-up variation; linked demonstration is general pull-up, not confirmed chin-up",
        "license": "Copyright source owner; external link only",
        "embedPermission": "not-verified",
        "requiresClick": true,
        "match": "exact",
        "matchNote": "Article explicitly describes supinated chin-up variation; linked demonstration is general pull-up, not confirmed chin-up",
        "checkedAt": "2026-10-20"
      }
    ],
    "source_ids": [
      "acsm-2026",
      "catalyst-chin"
    ],
    "sourceIds": [
      "acsm-2026",
      "catalyst-chin"
    ],
    "reviewStatus": "editorial-draft; individual-technique-review-pending",
    "population": "Healthy adults; no acute injury; not rehabilitation or pregnancy programming",
    "unit": "reps",
    "perSide": false,
    "muscles": [
      "גב",
      "יד קדמית",
      "אחיזה"
    ],
    "advancedOnly": false
  },
  {
    "id": "squat",
    "he": "סקוואט",
    "en": "Bodyweight squat",
    "group": "legs",
    "equipment": [],
    "level": 1,
    "cue": "לכופף ירכיים וברכיים לעומק שנשלט ללא כאב. לדחוק מהרצפה ולחזור לעמידה; הברכיים נעות בכיוון האצבעות.",
    "easy": "להקטין עומק.",
    "instructions": [
      "לעמוד ברוחב נוח עם כל כף הרגל על הקרקע.",
      "לכופף ירכיים וברכיים לעומק שנשלט ללא כאב.",
      "לדחוק מהרצפה ולחזור לעמידה; הברכיים נעות בכיוון האצבעות."
    ],
    "mistakes": [
      "עקבים מתנתקים כדי להגיע עמוק יותר."
    ],
    "regressions": [
      "להקטין עומק."
    ],
    "progressions": [
      "split"
    ],
    "media": [
      {
        "type": "video",
        "url": "https://www.mayoclinic.org/healthy-lifestyle/fitness/multimedia/squat/vid-20084663",
        "title": "Squat exercise",
        "author": "Mayo Clinic",
        "status": "Video landing page and transcript checked; video not frame reviewed",
        "license": "Copyright source owner; external link only",
        "embedPermission": "not-verified",
        "requiresClick": true,
        "match": "exact",
        "matchNote": "Video landing page and transcript checked; video not frame reviewed",
        "checkedAt": "2026-10-20"
      }
    ],
    "source_ids": [
      "acsm-2026",
      "mayo-squat"
    ],
    "sourceIds": [
      "acsm-2026",
      "mayo-squat"
    ],
    "reviewStatus": "editorial-draft; individual-technique-review-pending",
    "population": "Healthy adults; no acute injury; not rehabilitation or pregnancy programming",
    "unit": "reps",
    "perSide": false,
    "muscles": [
      "ירכיים",
      "ישבן",
      "שוקיים"
    ],
    "advancedOnly": false
  },
  {
    "id": "split",
    "he": "מכרע סטטי (לאנג׳)",
    "en": "Split squat",
    "group": "legs",
    "equipment": [],
    "level": 2,
    "cue": "לכופף את שתי הברכיים ולרדת אנכית בטווח נוח. לעלות בשליטה ולהחליף צד; היעד הוא סך שני הצדדים, חצי לכל צד.",
    "easy": "להקטין עומק ולהיעזר בקיר יציב.",
    "instructions": [
      "לעמוד בפסיעה רחבה מספיק לשיווי משקל.",
      "לכופף את שתי הברכיים ולרדת אנכית בטווח נוח.",
      "לעלות בשליטה ולהחליף צד; היעד הוא סך שני הצדדים, חצי לכל צד."
    ],
    "mistakes": [
      "עמידה על קו צר מדי גורמת לחוסר יציבות."
    ],
    "regressions": [
      "להקטין עומק ולהיעזר בקיר יציב."
    ],
    "progressions": [
      "reverse-lunge"
    ],
    "media": [
      {
        "type": "video",
        "url": "https://www.youtube.com/watch?v=hPC8-z6QXco",
        "title": "Split Squat Exercise Variations",
        "author": "E3 Rehab",
        "status": "Exact title, original author and description checked; video not frame reviewed",
        "license": "Copyright source owner; external link only",
        "embedPermission": "not-verified",
        "requiresClick": true,
        "match": "exact",
        "matchNote": "Exact title, original author and description checked; video not frame reviewed",
        "checkedAt": "2026-10-20"
      }
    ],
    "source_ids": [
      "acsm-2026",
      "e3-split"
    ],
    "sourceIds": [
      "acsm-2026",
      "e3-split"
    ],
    "reviewStatus": "editorial-draft; individual-technique-review-pending",
    "population": "Healthy adults; no acute injury; not rehabilitation or pregnancy programming",
    "unit": "reps",
    "perSide": true,
    "muscles": [
      "ירכיים",
      "ישבן",
      "שוקיים"
    ],
    "advancedOnly": false
  },
  {
    "id": "reverse-lunge",
    "he": "מכרע לאחור",
    "en": "Reverse lunge",
    "group": "legs",
    "equipment": [],
    "level": 2,
    "cue": "קחו צעד לאחור ולהוריד אגן בשליטה. לדחוק דרך הרגל הקדמית ולחזור; להחליף צד.",
    "easy": "לבחור מכרע סטטי במקום צעד.",
    "instructions": [
      "להתחיל בעמידה יציבה עם מרחב מאחור.",
      "קחו צעד לאחור ולהוריד אגן בשליטה.",
      "לדחוק דרך הרגל הקדמית ולחזור; להחליף צד."
    ],
    "mistakes": [
      "צעד ארוך מדי הגורם לאובדן שיווי משקל."
    ],
    "regressions": [
      "לבחור מכרע סטטי במקום צעד."
    ],
    "progressions": [
      "single-squat"
    ],
    "media": [
      {
        "type": "article",
        "url": "https://www.catalystathletics.com/exercise/735/Reverse-Lunge/",
        "title": "Reverse Lunge",
        "author": "Catalyst Athletics / Greg Everett",
        "status": "Original reverse-lunge guide checked; loaded demonstration differs from app bodyweight version; video not played",
        "license": "Copyright source owner; external link only",
        "embedPermission": "not-verified",
        "requiresClick": true,
        "match": "related",
        "matchNote": "Original reverse-lunge guide checked; loaded demonstration differs from app bodyweight version; video not played",
        "checkedAt": "2026-10-20"
      }
    ],
    "source_ids": [
      "acsm-2026",
      "catalyst-reverse-lunge"
    ],
    "sourceIds": [
      "acsm-2026",
      "catalyst-reverse-lunge"
    ],
    "reviewStatus": "editorial-draft; individual-technique-review-pending",
    "population": "Healthy adults; no acute injury; not rehabilitation or pregnancy programming",
    "unit": "reps",
    "perSide": true,
    "muscles": [
      "ירכיים",
      "ישבן",
      "שוקיים"
    ],
    "advancedOnly": false
  },
  {
    "id": "lateral-lunge",
    "he": "מכרע צידי",
    "en": "Lateral lunge",
    "group": "legs",
    "equipment": [],
    "level": 2,
    "cue": "לצעוד הצידה, לכופף ברך אחת ולשלוח אגן לאחור. לדחוק חזרה; להתחיל בטווח קטן.",
    "easy": "להקטין צעד ועומק.",
    "instructions": [
      "לעמוד ברוחב נוח עם מרחב לצדדים.",
      "לצעוד הצידה, לכופף ברך אחת ולשלוח אגן לאחור.",
      "לדחוק חזרה; להתחיל בטווח קטן."
    ],
    "mistakes": [
      "קריסת ברך פנימה תחת עומס."
    ],
    "regressions": [
      "להקטין צעד ועומק."
    ],
    "progressions": [
      "single-squat"
    ],
    "media": [
      {
        "type": "article",
        "url": "https://www.acefitness.org/resources/everyone/exercise-library/50/side-lunge/",
        "title": "Side Lunge",
        "author": "American Council on Exercise",
        "status": "Original bodyweight side-lunge steps and image presence checked; image not technique-reviewed",
        "license": "Copyright source owner; external link only",
        "embedPermission": "not-verified",
        "requiresClick": true,
        "match": "exact",
        "matchNote": "Original bodyweight side-lunge steps and image presence checked; image not technique-reviewed",
        "checkedAt": "2026-10-20"
      }
    ],
    "source_ids": [
      "acsm-2026",
      "ace-side-lunge"
    ],
    "sourceIds": [
      "acsm-2026",
      "ace-side-lunge"
    ],
    "reviewStatus": "editorial-draft; individual-technique-review-pending",
    "population": "Healthy adults; no acute injury; not rehabilitation or pregnancy programming",
    "unit": "reps",
    "perSide": true,
    "muscles": [
      "ירכיים",
      "ישבן",
      "שוקיים"
    ],
    "advancedOnly": false
  },
  {
    "id": "bridge",
    "he": "גשר ישבן",
    "en": "Glute bridge",
    "group": "legs",
    "equipment": [],
    "level": 1,
    "cue": "להרים אגן תוך כיווץ ישבן בלי לקשת גב תחתון. להוריד לאט ולנשום לאורך התנועה.",
    "easy": "להקטין טווח.",
    "instructions": [
      "לשכב על הגב וברכיים כפופות; כפות רגליים יציבות.",
      "להרים אגן תוך כיווץ ישבן בלי לקשת גב תחתון.",
      "להוריד לאט ולנשום לאורך התנועה."
    ],
    "mistakes": [
      "הרמת אגן דרך קשת בגב."
    ],
    "regressions": [
      "להקטין טווח."
    ],
    "progressions": [
      "single-bridge"
    ],
    "media": [
      {
        "type": "article",
        "url": "https://www.nasm.org/resource-center/exercise-library/floor-bridge",
        "title": "Floor Bridge — exercise guide",
        "author": "NASM",
        "status": "Exercise-specific guide text checked; no claim of licensed demonstration",
        "license": "Copyright source owner; external link only",
        "embedPermission": "not-verified",
        "requiresClick": true,
        "match": "exact",
        "matchNote": "Exercise-specific guide text checked; no claim of licensed demonstration",
        "checkedAt": "2026-10-20"
      }
    ],
    "source_ids": [
      "acsm-2026",
      "nasm-bridge"
    ],
    "sourceIds": [
      "acsm-2026",
      "nasm-bridge"
    ],
    "reviewStatus": "editorial-draft; individual-technique-review-pending",
    "population": "Healthy adults; no acute injury; not rehabilitation or pregnancy programming",
    "unit": "reps",
    "perSide": false,
    "muscles": [
      "ירכיים",
      "ישבן",
      "שוקיים"
    ],
    "advancedOnly": false
  },
  {
    "id": "single-bridge",
    "he": "גשר ישבן על רגל אחת",
    "en": "Single-leg glute bridge",
    "group": "legs",
    "equipment": [],
    "level": 2,
    "cue": "להרים רגל אחת מעט ולהעלות אגן בעזרת הרגל התומכת. לרדת בשליטה ולהחליף צד בלי סיבוב אגן.",
    "easy": "להשאיר שתי רגליים על הרצפה.",
    "instructions": [
      "להתחיל בגשר ולשמור אגן מאוזן.",
      "להרים רגל אחת מעט ולהעלות אגן בעזרת הרגל התומכת.",
      "לרדת בשליטה ולהחליף צד בלי סיבוב אגן."
    ],
    "mistakes": [
      "סיבוב האגן במקום פשיטת ירך."
    ],
    "regressions": [
      "להשאיר שתי רגליים על הרצפה."
    ],
    "progressions": [
      "bridge-march"
    ],
    "media": [
      {
        "type": "article",
        "url": "https://e3rehab.com/proximal-hamstring-tendinopathy-rehab/",
        "title": "Single Leg Bridge — Category 1, Level 2",
        "author": "E3 Rehab",
        "status": "Exact single-leg bridge section checked; rehab article used only for movement reference, no rehab or pain-dose protocol adopted",
        "license": "Copyright source owner; external link only",
        "embedPermission": "not-verified",
        "requiresClick": true,
        "match": "exact",
        "matchNote": "Exact single-leg bridge section checked; rehab article used only for movement reference, no rehab or pain-dose protocol adopted",
        "checkedAt": "2026-10-20"
      }
    ],
    "source_ids": [
      "acsm-2026",
      "e3-single-bridge"
    ],
    "sourceIds": [
      "acsm-2026",
      "e3-single-bridge"
    ],
    "reviewStatus": "editorial-draft; individual-technique-review-pending",
    "population": "Healthy adults; no acute injury; not rehabilitation or pregnancy programming",
    "unit": "reps",
    "perSide": true,
    "muscles": [
      "ירכיים",
      "ישבן",
      "שוקיים"
    ],
    "advancedOnly": false
  },
  {
    "id": "bridge-march",
    "he": "צעידה בגשר",
    "en": "Glute bridge march",
    "group": "legs",
    "equipment": [],
    "level": 2,
    "cue": "לנתק כף רגל אחת מעט בלי להטות אגן. להחזיר ולהחליף צד; לנשום ללא עצירה.",
    "easy": "גשר רגיל או הרמה קטנה יותר.",
    "instructions": [
      "להרים אגן לגשר נוח עם שתי רגליים תומכות.",
      "לנתק כף רגל אחת מעט בלי להטות אגן.",
      "להחזיר ולהחליף צד; לנשום ללא עצירה."
    ],
    "mistakes": [
      "הרמה גבוהה של הברך מסובבת אגן."
    ],
    "regressions": [
      "גשר רגיל או הרמה קטנה יותר."
    ],
    "progressions": [
      "single-bridge"
    ],
    "media": [
      {
        "type": "article",
        "url": "https://www.rehabhero.ca/exercise/glute-bridge-march",
        "title": "Glute Bridge March",
        "author": "Rehab Hero / David Song",
        "status": "Original alternating hip-flexion bridge instructions and media presence checked; clinical context and hold dose not adopted",
        "license": "Copyright source owner; external link only",
        "embedPermission": "not-verified",
        "requiresClick": true,
        "match": "exact",
        "matchNote": "Original alternating hip-flexion bridge instructions and media presence checked; clinical context and hold dose not adopted",
        "checkedAt": "2026-10-20"
      }
    ],
    "source_ids": [
      "acsm-2026",
      "rehabhero-march"
    ],
    "sourceIds": [
      "acsm-2026",
      "rehabhero-march"
    ],
    "reviewStatus": "editorial-draft; individual-technique-review-pending",
    "population": "Healthy adults; no acute injury; not rehabilitation or pregnancy programming",
    "unit": "reps",
    "perSide": false,
    "muscles": [
      "ירכיים",
      "ישבן",
      "שוקיים"
    ],
    "advancedOnly": false
  },
  {
    "id": "hinge",
    "he": "ציר ירך בעמידה",
    "en": "Bodyweight hip hinge",
    "group": "legs",
    "equipment": [],
    "level": 1,
    "cue": "לשלוח אגן לאחור תוך הטיית הגו כיחידה אחת. לחזור לעמידה באמצעות הירכיים בלי הקשתת גב.",
    "easy": "להקטין את ההטיה.",
    "instructions": [
      "לעמוד עם ברכיים רכות וכפות רגליים יציבות.",
      "לשלוח אגן לאחור תוך הטיית הגו כיחידה אחת.",
      "לחזור לעמידה באמצעות הירכיים בלי הקשתת גב."
    ],
    "mistakes": [
      "כיפוף גב במקום תנועה בירך."
    ],
    "regressions": [
      "להקטין את ההטיה."
    ],
    "progressions": [
      "single-hinge"
    ],
    "media": [
      {
        "type": "article",
        "url": "https://www.acefitness.org/resources/everyone/exercise-library/33/hip-hinge/",
        "title": "Hip Hinge — alignment drill",
        "author": "American Council on Exercise",
        "status": "Original hinge guide checked; light bar used as alignment feedback differs from app equipment-free version",
        "license": "Copyright source owner; external link only",
        "embedPermission": "not-verified",
        "requiresClick": true,
        "match": "related",
        "matchNote": "Original hinge guide checked; light bar used as alignment feedback differs from app equipment-free version",
        "checkedAt": "2026-10-20"
      }
    ],
    "source_ids": [
      "acsm-2026",
      "ace-hinge"
    ],
    "sourceIds": [
      "acsm-2026",
      "ace-hinge"
    ],
    "reviewStatus": "editorial-draft; individual-technique-review-pending",
    "population": "Healthy adults; no acute injury; not rehabilitation or pregnancy programming",
    "unit": "reps",
    "perSide": false,
    "muscles": [
      "ירכיים",
      "ישבן",
      "שוקיים"
    ],
    "advancedOnly": false
  },
  {
    "id": "single-hinge",
    "he": "ציר ירך על רגל אחת",
    "en": "Single-leg hip hinge",
    "group": "legs",
    "equipment": [],
    "level": 2,
    "cue": "לשלוח רגל חופשית לאחור ולהטות גו בטווח קטן. לחזור לאט ולשמור אגן פונה לקרקע.",
    "easy": "להניח בהונות רגל אחורית על הרצפה.",
    "instructions": [
      "לעמוד על רגל אחת ליד קיר לתמיכה בעת הצורך.",
      "לשלוח רגל חופשית לאחור ולהטות גו בטווח קטן.",
      "לחזור לאט ולשמור אגן פונה לקרקע."
    ],
    "mistakes": [
      "סיבוב אגן כדי להעמיק."
    ],
    "regressions": [
      "להניח בהונות רגל אחורית על הרצפה."
    ],
    "progressions": [
      "single-squat"
    ],
    "media": [
      {
        "type": "article",
        "url": "https://www.caliverse.app/exercises/single-leg-hinge-120",
        "title": "Single Leg Hinge",
        "author": "Caliverse",
        "status": "Original bodyweight single-leg hinge steps checked; video not played",
        "license": "Copyright source owner; external link only",
        "embedPermission": "not-verified",
        "requiresClick": true,
        "match": "exact",
        "matchNote": "Original bodyweight single-leg hinge steps checked; video not played",
        "checkedAt": "2026-10-20"
      }
    ],
    "source_ids": [
      "acsm-2026",
      "caliverse-single-hinge"
    ],
    "sourceIds": [
      "acsm-2026",
      "caliverse-single-hinge"
    ],
    "reviewStatus": "editorial-draft; individual-technique-review-pending",
    "population": "Healthy adults; no acute injury; not rehabilitation or pregnancy programming",
    "unit": "reps",
    "perSide": true,
    "muscles": [
      "ירכיים",
      "ישבן",
      "שוקיים"
    ],
    "advancedOnly": false
  },
  {
    "id": "calf",
    "he": "הרמות עקבים",
    "en": "Calf raise",
    "group": "legs",
    "equipment": [],
    "level": 1,
    "cue": "עלו על כריות כפות הרגליים בלי לגלגל קרסול החוצה. לרדת בשליטה ולהניח עקבים.",
    "easy": "עלו בטווח קטן.",
    "instructions": [
      "לעמוד על משטח שטוח ליד תמיכה לפי הצורך.",
      "עלו על כריות כפות הרגליים בלי לגלגל קרסול החוצה.",
      "לרדת בשליטה ולהניח עקבים."
    ],
    "mistakes": [
      "קפיצות מהירות במקום תנועה נשלטת."
    ],
    "regressions": [
      "עלו בטווח קטן."
    ],
    "progressions": [
      "single-calf"
    ],
    "media": [
      {
        "type": "article",
        "url": "https://www.mayoclinic.org/healthy-lifestyle/fitness/multimedia/calf-raise/vid-20084681",
        "title": "Calf Raise with Dumbbells",
        "author": "Mayo Clinic",
        "status": "Video page transcript checked; dumbbells differ from app bodyweight version; video not played",
        "license": "Copyright source owner; external link only",
        "embedPermission": "not-verified",
        "requiresClick": true,
        "match": "related",
        "matchNote": "Video page transcript checked; dumbbells differ from app bodyweight version; video not played",
        "checkedAt": "2026-10-20"
      }
    ],
    "source_ids": [
      "acsm-2026",
      "mayo-calf"
    ],
    "sourceIds": [
      "acsm-2026",
      "mayo-calf"
    ],
    "reviewStatus": "editorial-draft; individual-technique-review-pending",
    "population": "Healthy adults; no acute injury; not rehabilitation or pregnancy programming",
    "unit": "reps",
    "perSide": false,
    "muscles": [
      "ירכיים",
      "ישבן",
      "שוקיים"
    ],
    "advancedOnly": false
  },
  {
    "id": "single-calf",
    "he": "הרמת עקב על רגל אחת",
    "en": "Single-leg calf raise",
    "group": "legs",
    "equipment": [],
    "level": 2,
    "cue": "להרים עקב ישר מעל כרית כף הרגל. לרדת לאט ולהחליף צד.",
    "easy": "שתי רגליים על הרצפה.",
    "instructions": [
      "לעמוד על רגל אחת עם תמיכה קלה לשיווי משקל.",
      "להרים עקב ישר מעל כרית כף הרגל.",
      "לרדת לאט ולהחליף צד."
    ],
    "mistakes": [
      "הישענות כבדה על התמיכה."
    ],
    "regressions": [
      "שתי רגליים על הרצפה."
    ],
    "progressions": [
      "calf"
    ],
    "media": [
      {
        "type": "article",
        "url": "https://www.veteranshealthlibrary.va.gov/rehab/physicaltherapy/footankle/3,89909",
        "title": "Single-Leg Heel Raise",
        "author": "StayWell Custom Communications / VA Health Library",
        "status": "Single-leg supported heel-raise steps and illustration presence checked; rehabilitation dose not adopted",
        "license": "Copyright source owner; external link only",
        "embedPermission": "not-verified",
        "requiresClick": true,
        "match": "exact",
        "matchNote": "Single-leg supported heel-raise steps and illustration presence checked; rehabilitation dose not adopted",
        "checkedAt": "2026-10-20"
      }
    ],
    "source_ids": [
      "acsm-2026",
      "va-single-calf"
    ],
    "sourceIds": [
      "acsm-2026",
      "va-single-calf"
    ],
    "reviewStatus": "editorial-draft; individual-technique-review-pending",
    "population": "Healthy adults; no acute injury; not rehabilitation or pregnancy programming",
    "unit": "reps",
    "perSide": true,
    "muscles": [
      "ירכיים",
      "ישבן",
      "שוקיים"
    ],
    "advancedOnly": false
  },
  {
    "id": "single-squat",
    "he": "סקוואט על רגל אחת עם תמיכה",
    "en": "Supported single-leg squat",
    "group": "legs",
    "equipment": [
      "wall"
    ],
    "level": 3,
    "cue": "לכופף ברך וירך של רגל תומכת בטווח קצר הנשלט היטב. עלו ולהחליף צד; העומק אינו המטרה.",
    "easy": "מכרע סטטי או טווח קטן יותר.",
    "instructions": [
      "לעמוד ליד קיר יציב ולשמור תמיכה קלה ביד.",
      "לכופף ברך וירך של רגל תומכת בטווח קצר הנשלט היטב.",
      "עלו ולהחליף צד; העומק אינו המטרה."
    ],
    "mistakes": [
      "ירידה לעומק שלא ניתן לעלות ממנו בשליטה."
    ],
    "regressions": [
      "מכרע סטטי או טווח קטן יותר."
    ],
    "progressions": [
      "pistol"
    ],
    "media": [
      {
        "type": "article",
        "url": "https://www.nasm.org/resource-center/exercise-library/single-leg-squat",
        "title": "Single-Leg Squat — supported option",
        "author": "NASM",
        "status": "Original single-leg squat guide explicitly permits sturdy hand support and short controlled depth; video not played",
        "license": "Copyright source owner; external link only",
        "embedPermission": "not-verified",
        "requiresClick": true,
        "match": "exact",
        "matchNote": "Original single-leg squat guide explicitly permits sturdy hand support and short controlled depth; video not played",
        "checkedAt": "2026-10-20"
      }
    ],
    "source_ids": [
      "acsm-2026",
      "nasm-single-squat"
    ],
    "sourceIds": [
      "acsm-2026",
      "nasm-single-squat"
    ],
    "reviewStatus": "editorial-draft; individual-technique-review-pending",
    "population": "Healthy adults; no acute injury; not rehabilitation or pregnancy programming",
    "unit": "reps",
    "perSide": true,
    "muscles": [
      "ירכיים",
      "ישבן",
      "שוקיים"
    ],
    "advancedOnly": false
  },
  {
    "id": "pistol",
    "he": "פיסטול סקוואט",
    "en": "Pistol squat",
    "group": "legs",
    "equipment": [],
    "level": 4,
    "cue": "על רגל אחת, לרדת רק לטווח שנשלט עם עקב על הקרקע. עלו ללא קפיצה; להפסיק אם שיווי המשקל אובד.",
    "easy": "סקוואט על רגל אחת עם תמיכה.",
    "instructions": [
      "מיועד למנוסים; לפנות אזור ולתרגל ליד תמיכה בטוחה תחילה.",
      "על רגל אחת, לרדת רק לטווח שנשלט עם עקב על הקרקע.",
      "עלו ללא קפיצה; להפסיק אם שיווי המשקל אובד."
    ],
    "mistakes": [
      "כפיית עומק כשהעקב מתרומם או מופיע כאב."
    ],
    "regressions": [
      "סקוואט על רגל אחת עם תמיכה."
    ],
    "progressions": [
      "single-squat"
    ],
    "media": [
      {
        "type": "article",
        "url": "https://gmb.io/pistol/",
        "title": "Pistol Squat Progression",
        "author": "GMB / Ryan Hurst",
        "status": "Original full-pistol and preparation sections checked; rolling progression differs from app and is not adopted",
        "license": "Copyright source owner; external link only",
        "embedPermission": "not-verified",
        "requiresClick": true,
        "match": "exact",
        "matchNote": "Original full-pistol and preparation sections checked; rolling progression differs from app and is not adopted",
        "checkedAt": "2026-10-20"
      }
    ],
    "source_ids": [
      "acsm-2026",
      "gmb-pistol"
    ],
    "sourceIds": [
      "acsm-2026",
      "gmb-pistol"
    ],
    "reviewStatus": "editorial-draft; individual-technique-review-pending",
    "population": "Healthy adults; no acute injury; not rehabilitation or pregnancy programming",
    "unit": "reps",
    "perSide": true,
    "muscles": [
      "ירכיים",
      "ישבן",
      "שוקיים"
    ],
    "advancedOnly": true
  },
  {
    "id": "deadbug",
    "he": "דד באג",
    "en": "Dead bug",
    "group": "core",
    "equipment": [],
    "level": 1,
    "cue": "להרחיק יד ורגל נגדית בטווח שבו הגב נשאר נינוח. לחזור ולהחליף צד; לנשוף בזמן ההארכה.",
    "easy": "להזיז רגל בלבד או להחליק עקב על הקרקע.",
    "instructions": [
      "לשכב על הגב ולהרים ידיים וברכיים כפופות.",
      "להרחיק יד ורגל נגדית בטווח שבו הגב נשאר נינוח.",
      "לחזור ולהחליף צד; לנשוף בזמן ההארכה."
    ],
    "mistakes": [
      "קשת גב גדלה כדי להרחיק רגל."
    ],
    "regressions": [
      "להזיז רגל בלבד או להחליק עקב על הקרקע."
    ],
    "progressions": [
      "bird-dog"
    ],
    "media": [
      {
        "type": "article",
        "url": "https://www.nasm.org/resource-center/exercise-library/dead-bug",
        "title": "Dead Bug — exercise guide",
        "author": "NASM",
        "status": "Exercise-specific instructions and alternating-limb setup checked",
        "license": "Copyright source owner; external link only",
        "embedPermission": "not-verified",
        "requiresClick": true,
        "match": "exact",
        "matchNote": "Exercise-specific instructions and alternating-limb setup checked",
        "checkedAt": "2026-10-20"
      }
    ],
    "source_ids": [
      "acsm-2026",
      "nasm-deadbug"
    ],
    "sourceIds": [
      "acsm-2026",
      "nasm-deadbug"
    ],
    "reviewStatus": "editorial-draft; individual-technique-review-pending",
    "population": "Healthy adults; no acute injury; not rehabilitation or pregnancy programming",
    "unit": "reps",
    "perSide": false,
    "muscles": [
      "שרירי הגו",
      "שליטה באגן"
    ],
    "advancedOnly": false
  },
  {
    "id": "bird-dog",
    "he": "בירד דוג",
    "en": "Bird dog",
    "group": "core",
    "equipment": [],
    "level": 1,
    "cue": "להאריך יד ורגל נגדית בלי סיבוב גו או קשת גב. לחזור לאט ולהחליף צד.",
    "easy": "להאריך רק יד או רק רגל.",
    "instructions": [
      "לעמוד על שש עם כפות ידיים מתחת לכתפיים.",
      "להאריך יד ורגל נגדית בלי סיבוב גו או קשת גב.",
      "לחזור לאט ולהחליף צד."
    ],
    "mistakes": [
      "הרמת רגל גבוהה מדי מקשיתה גב."
    ],
    "regressions": [
      "להאריך רק יד או רק רגל."
    ],
    "progressions": [
      "plank"
    ],
    "media": [
      {
        "type": "article",
        "url": "https://www.acefitness.org/resources/everyone/exercise-library/14/bird-dog/",
        "title": "Bird-dog — illustrated exercise guide",
        "author": "ACE Fitness",
        "status": "Original step-by-step text and presence of exercise image links checked; images not independently technique-reviewed",
        "license": "Copyright source owner; external link only",
        "embedPermission": "not-verified",
        "requiresClick": true,
        "match": "exact",
        "matchNote": "Original step-by-step text and presence of exercise image links checked; images not independently technique-reviewed",
        "checkedAt": "2026-10-20"
      }
    ],
    "source_ids": [
      "acsm-2026",
      "ace-birddog"
    ],
    "sourceIds": [
      "acsm-2026",
      "ace-birddog"
    ],
    "reviewStatus": "editorial-draft; individual-technique-review-pending",
    "population": "Healthy adults; no acute injury; not rehabilitation or pregnancy programming",
    "unit": "reps",
    "perSide": false,
    "muscles": [
      "שרירי הגו",
      "שליטה באגן"
    ],
    "advancedOnly": false
  },
  {
    "id": "plank",
    "he": "פלאנק",
    "en": "Forearm plank",
    "group": "core",
    "equipment": [],
    "level": 2,
    "cue": "להרים גוף ולשמור קו יציב עם נשימה שוטפת. לסיים מיד כשהאגן שוקע או הנשימה נעצרת.",
    "easy": "להניח ברכיים.",
    "instructions": [
      "להניח מרפקים מתחת לכתפיים ורגליים על הרצפה.",
      "להרים גוף ולשמור קו יציב עם נשימה שוטפת.",
      "לסיים מיד כשהאגן שוקע או הנשימה נעצרת."
    ],
    "mistakes": [
      "החזקת זמן ארוך תוך איבוד מנח."
    ],
    "regressions": [
      "להניח ברכיים."
    ],
    "progressions": [
      "side-plank"
    ],
    "media": [
      {
        "type": "article",
        "url": "https://www.acefitness.org/resources/everyone/exercise-library/32/front-plank/",
        "title": "Front Plank — illustrated exercise guide",
        "author": "ACE Fitness",
        "status": "Original forearm-plank steps and presence of exercise image links checked; images not independently technique-reviewed",
        "license": "Copyright source owner; external link only",
        "embedPermission": "not-verified",
        "requiresClick": true,
        "match": "exact",
        "matchNote": "Original forearm-plank steps and presence of exercise image links checked; images not independently technique-reviewed",
        "checkedAt": "2026-10-20"
      }
    ],
    "source_ids": [
      "acsm-2026",
      "ace-plank"
    ],
    "sourceIds": [
      "acsm-2026",
      "ace-plank"
    ],
    "reviewStatus": "editorial-draft; individual-technique-review-pending",
    "population": "Healthy adults; no acute injury; not rehabilitation or pregnancy programming",
    "unit": "seconds",
    "perSide": false,
    "muscles": [
      "שרירי הגו",
      "שליטה באגן"
    ],
    "advancedOnly": false
  },
  {
    "id": "side-plank-knee",
    "he": "פלאנק צידי על ברכיים",
    "en": "Kneeling side plank",
    "group": "core",
    "equipment": [],
    "level": 1,
    "cue": "להרים אגן ולשמור כתף, אגן וברכיים בקו. לנשום ולהוריד לאט; לתרגל שני צדדים.",
    "easy": "לקצר זמן או להשאיר אגן על הרצפה.",
    "instructions": [
      "לשכב על הצד עם מרפק תחת כתף וברכיים כפופות.",
      "להרים אגן ולשמור כתף, אגן וברכיים בקו.",
      "לנשום ולהוריד לאט; לתרגל שני צדדים."
    ],
    "mistakes": [
      "שקיעה אל הכתף התומכת."
    ],
    "regressions": [
      "לקצר זמן או להשאיר אגן על הרצפה."
    ],
    "progressions": [
      "side-plank"
    ],
    "media": [
      {
        "type": "article",
        "url": "https://www.acefitness.org/resources/everyone/exercise-library/100/side-plank-modified/",
        "title": "Side Plank - modified — illustrated exercise guide",
        "author": "ACE Fitness",
        "status": "Original bent-knee setup and step-by-step instructions checked; images not independently technique-reviewed",
        "license": "Copyright source owner; external link only",
        "embedPermission": "not-verified",
        "requiresClick": true,
        "match": "exact",
        "matchNote": "Original bent-knee setup and step-by-step instructions checked; images not independently technique-reviewed",
        "checkedAt": "2026-10-20"
      }
    ],
    "source_ids": [
      "acsm-2026",
      "ace-side-knee"
    ],
    "sourceIds": [
      "acsm-2026",
      "ace-side-knee"
    ],
    "reviewStatus": "editorial-draft; individual-technique-review-pending",
    "population": "Healthy adults; no acute injury; not rehabilitation or pregnancy programming",
    "unit": "seconds",
    "perSide": true,
    "muscles": [
      "שרירי הגו",
      "שליטה באגן"
    ],
    "advancedOnly": false
  },
  {
    "id": "side-plank",
    "he": "פלאנק צידי",
    "en": "Side plank",
    "group": "core",
    "equipment": [],
    "level": 3,
    "cue": "להרים אגן ולהחזיק ללא סיבוב קדימה. לנשום ולהחליף צד לאחר מנוחה.",
    "easy": "לעבור לברכיים כפופות.",
    "instructions": [
      "להניח מרפק תחת כתף ורגליים זו ליד זו או מדורגות.",
      "להרים אגן ולהחזיק ללא סיבוב קדימה.",
      "לנשום ולהחליף צד לאחר מנוחה."
    ],
    "mistakes": [
      "סיבוב גו כדי להאריך את הזמן."
    ],
    "regressions": [
      "לעבור לברכיים כפופות."
    ],
    "progressions": [
      "hollow"
    ],
    "media": [
      {
        "type": "video",
        "url": "https://www.catalystathletics.com/exercise/498/Side-Plank/",
        "title": "Side Plank — exercise demonstration page",
        "author": "Catalyst Athletics",
        "status": "Original exercise demonstration page title and description checked; video not frame reviewed",
        "license": "Copyright source owner; external link only",
        "embedPermission": "not-verified",
        "requiresClick": true,
        "match": "exact",
        "matchNote": "Original exercise demonstration page title and description checked; video not frame reviewed",
        "checkedAt": "2026-10-20"
      }
    ],
    "source_ids": [
      "acsm-2026",
      "catalyst-sideplank"
    ],
    "sourceIds": [
      "acsm-2026",
      "catalyst-sideplank"
    ],
    "reviewStatus": "editorial-draft; individual-technique-review-pending",
    "population": "Healthy adults; no acute injury; not rehabilitation or pregnancy programming",
    "unit": "seconds",
    "perSide": true,
    "muscles": [
      "שרירי הגו",
      "שליטה באגן"
    ],
    "advancedOnly": false
  },
  {
    "id": "hollow",
    "he": "החזקת הולו מכווצת",
    "en": "Tuck hollow hold",
    "group": "core",
    "equipment": [],
    "level": 2,
    "cue": "להרים מעט שכמות ולשמור גב תחתון נוח מול הקרקע. לנשום; להאריך מנוף רק אם אין קשת גב.",
    "easy": "להניח ראש או כף רגל על הרצפה.",
    "instructions": [
      "לשכב על הגב וברכיים קרובות לגוף.",
      "להרים מעט שכמות ולשמור גב תחתון נוח מול הקרקע.",
      "לנשום; להאריך מנוף רק אם אין קשת גב."
    ],
    "mistakes": [
      "הארכת רגליים מעבר ליכולת הבטן."
    ],
    "regressions": [
      "להניח ראש או כף רגל על הרצפה."
    ],
    "progressions": [
      "hanging-knee"
    ],
    "media": [
      {
        "type": "article",
        "url": "https://gmb.io/hollow-body/",
        "title": "Hollow Body Hold Tutorial",
        "author": "GMB / Ryan Hurst",
        "status": "Original bent-knee and extended hollow-hold guide checked; video not played",
        "license": "Copyright source owner; external link only",
        "embedPermission": "not-verified",
        "requiresClick": true,
        "match": "exact",
        "matchNote": "Original bent-knee and extended hollow-hold guide checked; video not played",
        "checkedAt": "2026-10-20"
      }
    ],
    "source_ids": [
      "acsm-2026",
      "gmb-hollow"
    ],
    "sourceIds": [
      "acsm-2026",
      "gmb-hollow"
    ],
    "reviewStatus": "editorial-draft; individual-technique-review-pending",
    "population": "Healthy adults; no acute injury; not rehabilitation or pregnancy programming",
    "unit": "seconds",
    "perSide": false,
    "muscles": [
      "שרירי הגו",
      "שליטה באגן"
    ],
    "advancedOnly": false
  },
  {
    "id": "hanging-knee",
    "he": "הרמת ברכיים בתלייה",
    "en": "Hanging knee raise",
    "group": "core",
    "equipment": [
      "bar"
    ],
    "level": 3,
    "cue": "להרים ברכיים ללא נדנוד או משיכה בתנופה. להוריד לאט ולצאת לפני עייפות האחיזה.",
    "easy": "דד באג על הקרקע.",
    "instructions": [
      "לאחוז במוט בטוח עם שליטה בתלייה.",
      "להרים ברכיים ללא נדנוד או משיכה בתנופה.",
      "להוריד לאט ולצאת לפני עייפות האחיזה."
    ],
    "mistakes": [
      "נדנוד משמש להרים ברכיים."
    ],
    "regressions": [
      "דד באג על הקרקע."
    ],
    "progressions": [
      "tuck-lsit"
    ],
    "media": [],
    "source_ids": [
      "acsm-2026"
    ],
    "sourceIds": [
      "acsm-2026"
    ],
    "reviewStatus": "editorial-draft; individual-technique-review-pending",
    "population": "Healthy adults; no acute injury; not rehabilitation or pregnancy programming",
    "unit": "reps",
    "perSide": false,
    "muscles": [
      "שרירי הגו",
      "שליטה באגן"
    ],
    "advancedOnly": false
  },
  {
    "id": "tuck-lsit",
    "he": "ישיבת L-sit מכווצת",
    "en": "Tuck L-sit",
    "group": "core",
    "equipment": [
      "parallel"
    ],
    "level": 3,
    "cue": "לדחוק מטה ולנתק כפות רגליים עם ברכיים קרובות לחזה. לשמור נשימה ולהחזיר רגליים לפני עייפות.",
    "easy": "להשאיר רגל אחת או שתיהן על הקרקע.",
    "instructions": [
      "שבו בין מקבילים נמוכים יציבים; לבדוק מרווח לקרקע.",
      "לדחוק מטה ולנתק כפות רגליים עם ברכיים קרובות לחזה.",
      "לשמור נשימה ולהחזיר רגליים לפני עייפות."
    ],
    "mistakes": [
      "קריסת כתפיים או עצירת נשימה."
    ],
    "regressions": [
      "להשאיר רגל אחת או שתיהן על הקרקע."
    ],
    "progressions": [
      "lsit"
    ],
    "media": [
      {
        "type": "article",
        "url": "https://gmb.io/l-sit/",
        "title": "L-Sit — Tuck Position, Step 3",
        "author": "GMB / Ryan Hurst",
        "status": "Original tuck support section and parallette setup checked; video not played",
        "license": "Copyright source owner; external link only",
        "embedPermission": "not-verified",
        "requiresClick": true,
        "match": "exact",
        "matchNote": "Original tuck support section and parallette setup checked; video not played",
        "checkedAt": "2026-10-20"
      }
    ],
    "source_ids": [
      "acsm-2026",
      "gmb-lsit"
    ],
    "sourceIds": [
      "acsm-2026",
      "gmb-lsit"
    ],
    "reviewStatus": "editorial-draft; individual-technique-review-pending",
    "population": "Healthy adults; no acute injury; not rehabilitation or pregnancy programming",
    "unit": "seconds",
    "perSide": false,
    "muscles": [
      "שרירי הגו",
      "שליטה באגן"
    ],
    "advancedOnly": false
  },
  {
    "id": "lsit",
    "he": "ישיבת L-sit",
    "en": "L-sit",
    "group": "core",
    "equipment": [
      "parallel"
    ],
    "level": 4,
    "cue": "ליישר רגליים בהדרגה בלי לקרוס בחגורת הכתפיים. להחזיק זמן קצר בשליטה ולחזור עם רגליים לקרקע.",
    "easy": "לחזור למכווצת או ליישר רגל אחת בלבד.",
    "instructions": [
      "להתחיל מתמיכה יציבה על מקבילים נמוכים.",
      "ליישר רגליים בהדרגה בלי לקרוס בחגורת הכתפיים.",
      "להחזיק זמן קצר בשליטה ולחזור עם רגליים לקרקע."
    ],
    "mistakes": [
      "יישור ברכיים במחיר קריסת התמיכה."
    ],
    "regressions": [
      "לחזור למכווצת או ליישר רגל אחת בלבד."
    ],
    "progressions": [
      "tuck-lsit"
    ],
    "media": [
      {
        "type": "article",
        "url": "https://gmb.io/l-sit/",
        "title": "L-Sit — Full L-Sit, Step 6",
        "author": "GMB / Ryan Hurst",
        "status": "Original full L-sit section checked; video not played",
        "license": "Copyright source owner; external link only",
        "embedPermission": "not-verified",
        "requiresClick": true,
        "match": "exact",
        "matchNote": "Original full L-sit section checked; video not played",
        "checkedAt": "2026-10-20"
      }
    ],
    "source_ids": [
      "acsm-2026",
      "gmb-lsit"
    ],
    "sourceIds": [
      "acsm-2026",
      "gmb-lsit"
    ],
    "reviewStatus": "editorial-draft; individual-technique-review-pending",
    "population": "Healthy adults; no acute injury; not rehabilitation or pregnancy programming",
    "unit": "seconds",
    "perSide": false,
    "muscles": [
      "שרירי הגו",
      "שליטה באגן"
    ],
    "advancedOnly": true
  },
  {
    "id": "wall-handstand",
    "he": "עמידת ידיים מול קיר",
    "en": "Chest-to-wall handstand",
    "group": "push",
    "equipment": [
      "wall"
    ],
    "level": 4,
    "cue": "עלו רק לגובה שמאפשר ירידה נשלטת; אין חובה להתקרב לקיר. לדחוק דרך הידיים, לנשום ולרדת לפני עייפות.",
    "easy": "פייק או תמיכה חלקית עם כפות רגליים נמוכות.",
    "instructions": [
      "תרגול למנוסים בלבד: ללמוד יציאה בטוחה עם מאמן ולפנות סביבת נפילה.",
      "עלו רק לגובה שמאפשר ירידה נשלטת; אין חובה להתקרב לקיר.",
      "לדחוק דרך הידיים, לנשום ולרדת לפני עייפות."
    ],
    "mistakes": [
      "עלייה גבוהה בלי דרך ירידה מתורגלת."
    ],
    "regressions": [
      "פייק או תמיכה חלקית עם כפות רגליים נמוכות."
    ],
    "progressions": [
      "pike-push"
    ],
    "media": [
      {
        "type": "video",
        "url": "https://www.youtube.com/watch?v=d6_lcWtQDxw",
        "title": "Handstand progression",
        "author": "GMB Fitness / Praxis",
        "status": "verified-title-and-author; not-frame-reviewed",
        "license": "Copyright creator; external link only",
        "embedPermission": "not-verified",
        "requiresClick": true,
        "match": "related",
        "matchNote": "verified-title-and-author; not-frame-reviewed",
        "checkedAt": "2026-10-20"
      }
    ],
    "source_ids": [
      "acsm-2026",
      "gmb-handstand",
      "gmb-handstand-video"
    ],
    "sourceIds": [
      "acsm-2026",
      "gmb-handstand",
      "gmb-handstand-video"
    ],
    "reviewStatus": "editorial-draft; individual-technique-review-pending",
    "population": "Healthy adults; no acute injury; not rehabilitation or pregnancy programming",
    "unit": "seconds",
    "perSide": false,
    "muscles": [
      "חזה",
      "כתפיים",
      "יד אחורית"
    ],
    "advancedOnly": true
  }
];

const additionalExercises = [
  {
    "id": "march",
    "he": "צעידה במקום",
    "en": "March in place",
    "group": "fullbody",
    "equipment": [],
    "level": 1,
    "cue": "צעדים קטנים ונינוחים, ידיים נעות בחופשיות.",
    "easy": "להתחיל בקצב איטי עם תמיכה בקיר לפי הצורך.",
    "instructions": [
      "צעדים קטנים ונינוחים, ידיים נעות בחופשיות.",
      "להרים ברך אחת ואז להחליף צד בלי לקפוץ.",
      "לעצור אם מופיע כאב; איכות התנועה קודמת לקצב."
    ],
    "mistakes": [
      "הגדלת טווח או קצב כשהשליטה אובדת."
    ],
    "regressions": [
      "להתחיל בקצב איטי עם תמיכה בקיר לפי הצורך."
    ],
    "progressions": [],
    "media": [],
    "source_ids": [
      "nasm-library"
    ],
    "sourceIds": [
      "nasm-library"
    ],
    "reviewStatus": "editorial-draft; individual-technique-review-pending",
    "population": "Healthy adults; no acute injury; not rehabilitation or pregnancy programming",
    "unit": "reps",
    "perSide": false,
    "muscles": [
      "כל הגוף"
    ],
    "advancedOnly": false
  },
  {
    "id": "step-jack",
    "he": "פתיחת צעד לצד",
    "en": "Step jack",
    "group": "fullbody",
    "equipment": [],
    "level": 1,
    "cue": "לפתוח רגל אחת לצד ולהרים ידיים בטווח נוח, לחזור ולהחליף.",
    "easy": "להקטין את אורך הצעד ואת גובה הידיים.",
    "instructions": [
      "לפתוח רגל אחת לצד ולהרים ידיים בטווח נוח, לחזור ולהחליף.",
      "לשמור רגל אחת תמיד על הקרקע.",
      "לעצור אם מופיע כאב; איכות התנועה קודמת לקצב."
    ],
    "mistakes": [
      "הגדלת טווח או קצב כשהשליטה אובדת."
    ],
    "regressions": [
      "להקטין את אורך הצעד ואת גובה הידיים."
    ],
    "progressions": [],
    "media": [],
    "source_ids": [
      "nasm-library"
    ],
    "sourceIds": [
      "nasm-library"
    ],
    "reviewStatus": "editorial-draft; individual-technique-review-pending",
    "population": "Healthy adults; no acute injury; not rehabilitation or pregnancy programming",
    "unit": "reps",
    "perSide": false,
    "muscles": [
      "כל הגוף"
    ],
    "advancedOnly": false
  },
  {
    "id": "standing-knee",
    "he": "הרמת ברך בעמידה",
    "en": "Standing knee raise",
    "group": "core",
    "equipment": [],
    "level": 1,
    "cue": "להרים ברך לכיוון האגן בלי להישען לאחור.",
    "easy": "להיעזר בקיר לשיווי משקל.",
    "instructions": [
      "להרים ברך לכיוון האגן בלי להישען לאחור.",
      "להוריד בשליטה ולהחליף צד.",
      "לעצור אם מופיע כאב; איכות התנועה קודמת לקצב."
    ],
    "mistakes": [
      "הגדלת טווח או קצב כשהשליטה אובדת."
    ],
    "regressions": [
      "להיעזר בקיר לשיווי משקל."
    ],
    "progressions": [],
    "media": [],
    "source_ids": [
      "nasm-library"
    ],
    "sourceIds": [
      "nasm-library"
    ],
    "reviewStatus": "editorial-draft; individual-technique-review-pending",
    "population": "Healthy adults; no acute injury; not rehabilitation or pregnancy programming",
    "unit": "reps",
    "perSide": false,
    "muscles": [
      "ליבה"
    ],
    "advancedOnly": false
  },
  {
    "id": "wall-sit",
    "he": "ישיבת קיר",
    "en": "Wall sit",
    "group": "legs",
    "equipment": [
      "wall"
    ],
    "level": 1,
    "cue": "להישען גב על קיר יציב ולהחליק מעט למטה.",
    "easy": "להישאר גבוה יותר ולקצר את ההחזקה.",
    "instructions": [
      "להישען גב על קיר יציב ולהחליק מעט למטה.",
      "לבחור עומק נוח ולנשום ברציפות.",
      "לעצור אם מופיע כאב; איכות התנועה קודמת לקצב."
    ],
    "mistakes": [
      "הגדלת טווח או קצב כשהשליטה אובדת."
    ],
    "regressions": [
      "להישאר גבוה יותר ולקצר את ההחזקה."
    ],
    "progressions": [],
    "media": [],
    "source_ids": [
      "nasm-library"
    ],
    "sourceIds": [
      "nasm-library"
    ],
    "reviewStatus": "editorial-draft; individual-technique-review-pending",
    "population": "Healthy adults; no acute injury; not rehabilitation or pregnancy programming",
    "unit": "seconds",
    "perSide": false,
    "muscles": [
      "רגליים",
      "ישבן"
    ],
    "advancedOnly": false
  },
  {
    "id": "squat-pause",
    "he": "סקוואט עם עצירה",
    "en": "Pause squat",
    "group": "legs",
    "equipment": [],
    "level": 1,
    "cue": "לרדת לסקוואט בטווח נוח ולעצור לשנייה.",
    "easy": "להקטין עומק ולהיעזר בקיר.",
    "instructions": [
      "לרדת לסקוואט בטווח נוח ולעצור לשנייה.",
      "לדחוק דרך כל כף הרגל ולחזור לעמידה.",
      "לעצור אם מופיע כאב; איכות התנועה קודמת לקצב."
    ],
    "mistakes": [
      "הגדלת טווח או קצב כשהשליטה אובדת."
    ],
    "regressions": [
      "להקטין עומק ולהיעזר בקיר."
    ],
    "progressions": [],
    "media": [],
    "source_ids": [
      "nasm-library"
    ],
    "sourceIds": [
      "nasm-library"
    ],
    "reviewStatus": "editorial-draft; individual-technique-review-pending",
    "population": "Healthy adults; no acute injury; not rehabilitation or pregnancy programming",
    "unit": "reps",
    "perSide": false,
    "muscles": [
      "רגליים",
      "ישבן"
    ],
    "advancedOnly": false
  },
  {
    "id": "sumo-squat",
    "he": "סקוואט בעמידה רחבה",
    "en": "Wide stance squat",
    "group": "legs",
    "equipment": [],
    "level": 1,
    "cue": "לפתוח עמידה מעט רחבה, בהונות החוצה במידה נוחה.",
    "easy": "להקטין את רוחב העמידה והעומק.",
    "instructions": [
      "לפתוח עמידה מעט רחבה, בהונות החוצה במידה נוחה.",
      "לכופף ברכיים בכיוון הבהונות ולעלות בשליטה.",
      "לעצור אם מופיע כאב; איכות התנועה קודמת לקצב."
    ],
    "mistakes": [
      "הגדלת טווח או קצב כשהשליטה אובדת."
    ],
    "regressions": [
      "להקטין את רוחב העמידה והעומק."
    ],
    "progressions": [],
    "media": [],
    "source_ids": [
      "nasm-library"
    ],
    "sourceIds": [
      "nasm-library"
    ],
    "reviewStatus": "editorial-draft; individual-technique-review-pending",
    "population": "Healthy adults; no acute injury; not rehabilitation or pregnancy programming",
    "unit": "reps",
    "perSide": false,
    "muscles": [
      "רגליים",
      "ישבן"
    ],
    "advancedOnly": false
  },
  {
    "id": "clamshell",
    "he": "פתיחת ברך בשכיבה",
    "en": "Side lying clamshell",
    "group": "legs",
    "equipment": [],
    "level": 1,
    "cue": "לשכב על הצד, ברכיים כפופות ועקבים יחד.",
    "easy": "לצמצם את טווח הפתיחה.",
    "instructions": [
      "לשכב על הצד, ברכיים כפופות ועקבים יחד.",
      "לפתוח ברך עליונה בלי לגלגל אגן לאחור; להחליף צד.",
      "לעצור אם מופיע כאב; איכות התנועה קודמת לקצב."
    ],
    "mistakes": [
      "הגדלת טווח או קצב כשהשליטה אובדת."
    ],
    "regressions": [
      "לצמצם את טווח הפתיחה."
    ],
    "progressions": [],
    "media": [],
    "source_ids": [
      "nasm-library"
    ],
    "sourceIds": [
      "nasm-library"
    ],
    "reviewStatus": "editorial-draft; individual-technique-review-pending",
    "population": "Healthy adults; no acute injury; not rehabilitation or pregnancy programming",
    "unit": "reps",
    "perSide": true,
    "muscles": [
      "רגליים",
      "ישבן"
    ],
    "advancedOnly": false
  },
  {
    "id": "side-leg-raise",
    "he": "הרמת רגל בשכיבה על הצד",
    "en": "Side lying leg raise",
    "group": "legs",
    "equipment": [],
    "level": 1,
    "cue": "לשכב על הצד עם אגן יציב ורגל עליונה ישרה.",
    "easy": "לכופף מעט את הברך ולקצר טווח.",
    "instructions": [
      "לשכב על הצד עם אגן יציב ורגל עליונה ישרה.",
      "להרים מעט ולהוריד לאט; להחליף צד.",
      "לעצור אם מופיע כאב; איכות התנועה קודמת לקצב."
    ],
    "mistakes": [
      "הגדלת טווח או קצב כשהשליטה אובדת."
    ],
    "regressions": [
      "לכופף מעט את הברך ולקצר טווח."
    ],
    "progressions": [],
    "media": [],
    "source_ids": [
      "nasm-library"
    ],
    "sourceIds": [
      "nasm-library"
    ],
    "reviewStatus": "editorial-draft; individual-technique-review-pending",
    "population": "Healthy adults; no acute injury; not rehabilitation or pregnancy programming",
    "unit": "reps",
    "perSide": true,
    "muscles": [
      "רגליים",
      "ישבן"
    ],
    "advancedOnly": false
  },
  {
    "id": "heel-tap",
    "he": "נגיעת עקב בשכיבה",
    "en": "Supine heel tap",
    "group": "core",
    "equipment": [],
    "level": 1,
    "cue": "לשכב על הגב וברכיים כפופות מעל האגן.",
    "easy": "להשאיר רגל אחת על הרצפה.",
    "instructions": [
      "לשכב על הגב וברכיים כפופות מעל האגן.",
      "להוריד עקב אחד לרצפה בלי לקשת את הגב ולהחליף.",
      "לעצור אם מופיע כאב; איכות התנועה קודמת לקצב."
    ],
    "mistakes": [
      "הגדלת טווח או קצב כשהשליטה אובדת."
    ],
    "regressions": [
      "להשאיר רגל אחת על הרצפה."
    ],
    "progressions": [],
    "media": [],
    "source_ids": [
      "nasm-library"
    ],
    "sourceIds": [
      "nasm-library"
    ],
    "reviewStatus": "editorial-draft; individual-technique-review-pending",
    "population": "Healthy adults; no acute injury; not rehabilitation or pregnancy programming",
    "unit": "reps",
    "perSide": false,
    "muscles": [
      "ליבה"
    ],
    "advancedOnly": false
  },
  {
    "id": "reverse-crunch",
    "he": "גלגול אגן בשכיבה",
    "en": "Reverse crunch",
    "group": "core",
    "equipment": [],
    "level": 1,
    "cue": "לשכב על הגב, ברכיים כפופות וידיים לצדי הגוף.",
    "easy": "לצמצם את טווח הגלגול.",
    "instructions": [
      "לשכב על הגב, ברכיים כפופות וידיים לצדי הגוף.",
      "לגלגל אגן מעט כלפי מעלה ולהוריד לאט בלי תנופה.",
      "לעצור אם מופיע כאב; איכות התנועה קודמת לקצב."
    ],
    "mistakes": [
      "הגדלת טווח או קצב כשהשליטה אובדת."
    ],
    "regressions": [
      "לצמצם את טווח הגלגול."
    ],
    "progressions": [],
    "media": [],
    "source_ids": [
      "nasm-library"
    ],
    "sourceIds": [
      "nasm-library"
    ],
    "reviewStatus": "editorial-draft; individual-technique-review-pending",
    "population": "Healthy adults; no acute injury; not rehabilitation or pregnancy programming",
    "unit": "reps",
    "perSide": false,
    "muscles": [
      "ליבה"
    ],
    "advancedOnly": false
  },
  {
    "id": "prone-w",
    "he": "הרמת זרועות כפופות בשכיבה",
    "en": "Prone W raise",
    "group": "pull",
    "equipment": [],
    "level": 1,
    "cue": "לשכב על הבטן ולמקם זרועות כפופות לצד הגוף.",
    "easy": "להשאיר מצח נתמך ולהרים פחות.",
    "instructions": [
      "לשכב על הבטן ולמקם זרועות כפופות לצד הגוף.",
      "להרים ידיים מעט, לקרב שכמות ולהוריד בלי להקשית צוואר.",
      "לעצור אם מופיע כאב; איכות התנועה קודמת לקצב."
    ],
    "mistakes": [
      "הגדלת טווח או קצב כשהשליטה אובדת."
    ],
    "regressions": [
      "להשאיר מצח נתמך ולהרים פחות."
    ],
    "progressions": [],
    "media": [],
    "source_ids": [
      "nasm-library"
    ],
    "sourceIds": [
      "nasm-library"
    ],
    "reviewStatus": "editorial-draft; individual-technique-review-pending",
    "population": "Healthy adults; no acute injury; not rehabilitation or pregnancy programming",
    "unit": "reps",
    "perSide": false,
    "muscles": [
      "גב",
      "כתפיים"
    ],
    "advancedOnly": false
  },
  {
    "id": "wall-slide",
    "he": "החלקת זרועות בקיר",
    "en": "Wall slide",
    "group": "mobility",
    "equipment": [
      "wall"
    ],
    "level": 1,
    "cue": "לעמוד מול קיר ולהניח אמות בנוחות.",
    "easy": "לקצר את טווח ההחלקה.",
    "instructions": [
      "לעמוד מול קיר ולהניח אמות בנוחות.",
      "להחליק למעלה בטווח נעים, ללא כאב או קשת מוגזמת בגב.",
      "לעצור אם מופיע כאב; איכות התנועה קודמת לקצב."
    ],
    "mistakes": [
      "הגדלת טווח או קצב כשהשליטה אובדת."
    ],
    "regressions": [
      "לקצר את טווח ההחלקה."
    ],
    "progressions": [],
    "media": [],
    "source_ids": [
      "nasm-library"
    ],
    "sourceIds": [
      "nasm-library"
    ],
    "reviewStatus": "editorial-draft; individual-technique-review-pending",
    "population": "Healthy adults; no acute injury; not rehabilitation or pregnancy programming",
    "unit": "reps",
    "perSide": false,
    "muscles": [
      "תנועתיות"
    ],
    "advancedOnly": false
  },
  {
    "id": "cat-cow",
    "he": "קימור וקיעור בעמידת שש",
    "en": "Cat cow",
    "group": "mobility",
    "equipment": [],
    "level": 1,
    "cue": "בעמידת שש, לקמר ולהאריך את הגב בתנועה נינוחה.",
    "easy": "להקטין את טווח התנועה.",
    "instructions": [
      "בעמידת שש, לקמר ולהאריך את הגב בתנועה נינוחה.",
      "תאמו נשימה ולשמור תנועה קטנה ונוחה לצוואר.",
      "לעצור אם מופיע כאב; איכות התנועה קודמת לקצב."
    ],
    "mistakes": [
      "הגדלת טווח או קצב כשהשליטה אובדת."
    ],
    "regressions": [
      "להקטין את טווח התנועה."
    ],
    "progressions": [],
    "media": [],
    "source_ids": [
      "nasm-library"
    ],
    "sourceIds": [
      "nasm-library"
    ],
    "reviewStatus": "editorial-draft; individual-technique-review-pending",
    "population": "Healthy adults; no acute injury; not rehabilitation or pregnancy programming",
    "unit": "reps",
    "perSide": false,
    "muscles": [
      "תנועתיות"
    ],
    "advancedOnly": false
  },
  {
    "id": "thoracic-rotation",
    "he": "סיבוב בית חזה בעמידת שש",
    "en": "Quadruped thoracic rotation",
    "group": "mobility",
    "equipment": [],
    "level": 1,
    "cue": "בעמידת שש להניח יד אחת מאחורי הראש ברכות.",
    "easy": "להניח יד על החזה ולסובב פחות.",
    "instructions": [
      "בעמידת שש להניח יד אחת מאחורי הראש ברכות.",
      "לפתוח מרפק לצד דרך בית החזה בלי להזיז אגן; להחליף צד.",
      "לעצור אם מופיע כאב; איכות התנועה קודמת לקצב."
    ],
    "mistakes": [
      "הגדלת טווח או קצב כשהשליטה אובדת."
    ],
    "regressions": [
      "להניח יד על החזה ולסובב פחות."
    ],
    "progressions": [],
    "media": [],
    "source_ids": [
      "nasm-library"
    ],
    "sourceIds": [
      "nasm-library"
    ],
    "reviewStatus": "editorial-draft; individual-technique-review-pending",
    "population": "Healthy adults; no acute injury; not rehabilitation or pregnancy programming",
    "unit": "reps",
    "perSide": true,
    "muscles": [
      "תנועתיות"
    ],
    "advancedOnly": false
  },
  {
    "id": "ankle-rock",
    "he": "הנעת קרסול בעמידה",
    "en": "Standing ankle rock",
    "group": "mobility",
    "equipment": [
      "wall"
    ],
    "level": 1,
    "cue": "לעמוד בפסיעה קצרה מול קיר ולהחזיק לתמיכה.",
    "easy": "לקצר את הפסיעה והטווח.",
    "instructions": [
      "לעמוד בפסיעה קצרה מול קיר ולהחזיק לתמיכה.",
      "להניע ברך קדמית קדימה כשהעקב נשאר על הרצפה; להחליף צד.",
      "לעצור אם מופיע כאב; איכות התנועה קודמת לקצב."
    ],
    "mistakes": [
      "הגדלת טווח או קצב כשהשליטה אובדת."
    ],
    "regressions": [
      "לקצר את הפסיעה והטווח."
    ],
    "progressions": [],
    "media": [],
    "source_ids": [
      "nasm-library"
    ],
    "sourceIds": [
      "nasm-library"
    ],
    "reviewStatus": "editorial-draft; individual-technique-review-pending",
    "population": "Healthy adults; no acute injury; not rehabilitation or pregnancy programming",
    "unit": "reps",
    "perSide": true,
    "muscles": [
      "תנועתיות"
    ],
    "advancedOnly": false
  }
];

const muscleMap={push:['chest','shoulders','arms'],pull:['back','arms'],legs:['legs','glutes'],core:['core'],mobility:['mobility'],fullbody:['fullbody','legs','core']};
const overrides={'pike-push':['shoulders','arms'],'wall-handstand':['shoulders','core'],'scap-push':['shoulders','chest'],'bridge':['glutes','legs'],'single-bridge':['glutes','legs'],'bridge-march':['glutes','core'],'hinge':['glutes','legs'],'single-hinge':['glutes','legs'],'calf':['legs'],'single-calf':['legs'],'prone-w':['back','shoulders'],'clamshell':['glutes'],'side-leg-raise':['glutes']};
// Readable anatomy labels distinguish calf, posterior-chain and shoulder-dominant variants.
const readableMuscles={
 'wall-push':['חזה','כתפיים','יד אחורית'],'incline-push':['חזה','כתפיים','יד אחורית'],'knee-push':['חזה','כתפיים','יד אחורית'],'push':['חזה','כתפיים','יד אחורית'],'close-push':['יד אחורית','חזה','כתפיים'],
 'scap-push':['מייצבי שכמות','מסור קדמי','ליבה'],'pike-push':['כתפיים','יד אחורית'],'support':['כתפיים','יד אחורית','מייצבי שכמות'],'dip':['יד אחורית','חזה','כתפיים'],
 'band-row':['גב','יד קדמית','כתף אחורית'],'row':['גב','יד קדמית','כתף אחורית'],'row-horizontal':['גב','יד קדמית','כתף אחורית'],'active-hang':['מייצבי שכמות','גב','אחיזה'],'scap-pull':['מייצבי שכמות','גב'],'pull-negative':['גב','יד קדמית','אחיזה'],'pull':['גב','יד קדמית','אחיזה'],'chin':['יד קדמית','גב','אחיזה'],
 'squat':['ירך קדמית','ישבן'],'split':['ירך קדמית','ישבן'],'reverse-lunge':['ירך קדמית','ישבן'],'lateral-lunge':['ירך קדמית','ישבן','מקרבי ירך'],'bridge':['ישבן','ירך אחורית'],'single-bridge':['ישבן','ירך אחורית'],'bridge-march':['ישבן','ליבה'],'hinge':['ירך אחורית','ישבן'],'single-hinge':['ירך אחורית','ישבן','מייצבי אגן'],'calf':['שוקיים'],'single-calf':['שוקיים'],'single-squat':['ירך קדמית','ישבן','מייצבי אגן'],'pistol':['ירך קדמית','ישבן','מייצבי אגן'],
 'deadbug':['ליבה','מכופפי ירך'],'bird-dog':['ליבה','מייצבי גב','ישבן'],'plank':['ליבה','מייצבי כתפיים'],'side-plank-knee':['אלכסוני הבטן','מייצבי כתפיים','מייצבי אגן'],'side-plank':['אלכסוני הבטן','מייצבי כתפיים','מייצבי אגן'],'hollow':['ליבה','מכופפי ירך'],'hanging-knee':['ליבה','מכופפי ירך','אחיזה'],'tuck-lsit':['ליבה','מכופפי ירך','יד אחורית'],'lsit':['ליבה','מכופפי ירך','יד אחורית'],'wall-handstand':['כתפיים','יד אחורית','ליבה'],
 'march':['מכופפי ירך','שוקיים'],'step-jack':['רגליים','כתפיים'],'standing-knee':['מכופפי ירך','ליבה'],'wall-sit':['ירך קדמית','ישבן'],'squat-pause':['ירך קדמית','ישבן'],'sumo-squat':['ירך קדמית','ישבן','מקרבי ירך'],'clamshell':['ישבן','מסובבי ירך'],'side-leg-raise':['מרחיקי ירך','ישבן'],'heel-tap':['ליבה','מכופפי ירך'],'reverse-crunch':['ליבה'],'prone-w':['מייצבי שכמות','כתף אחורית'],'wall-slide':['מייצבי שכמות','כתפיים'],'cat-cow':['תנועתיות עמוד שדרה'],'thoracic-rotation':['תנועתיות בית חזה'],'ankle-rock':['תנועתיות קרסול','שוקיים']
};
const movementPatterns={"wall-push": "horizontal_push", "incline-push": "horizontal_push", "knee-push": "horizontal_push", "push": "horizontal_push", "close-push": "horizontal_push", "pike-push": "vertical_push", "dip": "vertical_push", "band-row": "horizontal_pull", "row": "horizontal_pull", "row-horizontal": "horizontal_pull", "pull-negative": "vertical_pull", "pull": "vertical_pull", "chin": "vertical_pull", "squat": "squat", "wall-sit": "squat", "squat-pause": "squat", "sumo-squat": "squat", "hinge": "hinge", "single-hinge": "hinge", "bridge": "hip_extension", "single-bridge": "hip_extension", "bridge-march": "hip_extension", "clamshell": "hip_extension", "side-leg-raise": "hip_extension", "split": "single_leg", "reverse-lunge": "single_leg", "lateral-lunge": "single_leg", "single-squat": "single_leg", "pistol": "single_leg", "calf": "calf", "single-calf": "calf", "deadbug": "core_anti_extension", "plank": "core_anti_extension", "hollow": "core_anti_extension", "heel-tap": "core_anti_extension", "bird-dog": "core_anti_rotation", "side-plank": "core_lateral_stability", "side-plank-knee": "core_lateral_stability", "tuck-lsit": "compression", "lsit": "compression", "hanging-knee": "compression", "standing-knee": "compression", "reverse-crunch": "trunk_flexion", "support": "support", "wall-handstand": "support", "scap-push": "scapular_control", "scap-pull": "scapular_control", "active-hang": "scapular_control", "prone-w": "scapular_control", "march": "locomotion", "step-jack": "locomotion", "wall-slide": "mobility", "cat-cow": "mobility", "thoracic-rotation": "mobility", "ankle-rock": "mobility"};
const originalExercises=[...baseExercises,...additionalExercises].map(e=>{const muscleGroups=overrides[e.id]||muscleMap[e.group];return {...e,movementPattern:movementPatterns[e.id],muscles:readableMuscles[e.id]||e.muscles,...(additionalExercises.includes(e)?{sourceMatch:"contextual-library-reference; original-editorial-instructions; exact-demonstration-not-verified"}:{}),muscleGroups,primaryMuscle:muscleGroups[0],secondaryMuscles:muscleGroups.slice(1)}});
export const muscleGroups=[{id:'chest',he:'חזה',en:'Chest'},{id:'back',he:'גב',en:'Back'},{id:'shoulders',he:'כתפיים',en:'Shoulders'},{id:'arms',he:'זרועות',en:'Arms'},{id:'legs',he:'רגליים',en:'Legs'},{id:'glutes',he:'ישבן',en:'Glutes'},{id:'core',he:'ליבה',en:'Core'},{id:'mobility',he:'תנועתיות',en:'Mobility'},{id:'fullbody',he:'כל הגוף',en:'Full body'}];

const drillUnits={"straddle-planche": "seconds", "full-planche": "seconds", "dead-hang": "seconds", "chest-wall-handstand": "seconds", "elevated-pike-push": "reps", "archer-push": "reps", "pseudo-planche-push": "reps", "planche-lean": "seconds", "frog-stand": "seconds", "tuck-planche": "seconds", "tuck-front-lever": "seconds", "advanced-tuck-front-lever": "seconds", "front-lever": "seconds", "front-lever-negative": "reps", "straight-bar-dip": "reps", "explosive-pull": "reps", "low-bar-transition": "reps", "assisted-muscle-up": "reps", "muscle-up-strict": "reps", "pistol-box": "reps", "shrimp-squat": "reps", "nordic-negative": "reps", "copenhagen-plank": "seconds", "toes-to-bar": "reps", "dragon-negative": "reps", "skin-the-cat": "reps", "german-hang": "seconds", "back-lever": "seconds", "assisted-tuck-back-lever": "seconds", "human-flag": "seconds", "flag-ground": "seconds", "flag-assisted": "seconds", "flag-tuck": "seconds", "pike-support": "seconds", "partial-wall-line": "seconds", "handstand-shift": "reps", "handstand-toe-pull": "reps", "handstand-free": "reps", "lever-supported": "seconds", "lever-assisted-tuck": "seconds", "tuck-assisted-planche": "seconds", "foot-support": "seconds", "compression-lift": "reps", "one-leg-lsit": "seconds", "extension-supported": "seconds", "row-wide": "reps", "row-feet-elevated": "reps"};
const drillExercises=libraryDrills.map(d=>{const parent=originalExercises.find(e=>e.id===d.parent);return {...parent,...d,level:Math.max(3,parent.level),advancedOnly:true,equipment:d.apparatus==='floor'?[]:d.apparatus==='box'?['box']:d.apparatus==='parallel'?['parallel']:[d.apparatus],unit:drillUnits[d.id],instructions:[d.cue,'לשמור נשימה נוחה ושליטה בטווח שנבחר.','לעצור כשהמנח משתנה או מופיע אי־נוחות.'],mistakes:['איבוד המנח כדי להשלים את היעד.','שימוש בתנופה או בטווח שאינו נשלט.'],easy:'לחזור לתרגיל ההכנה הקודם או להוסיף סיוע מתועד.',regressions:[],progressions:[],media:[],movementPattern:d.pattern,reviewStatus:'pending-review',source_ids:['coach-method-offline'],sourceIds:['coach-method-offline'],sourceNote:'Original editorial synthesis from docs/COACH_METHOD.md §5 and Steven Low, Overcoming Gravity (2nd ed.). Offline reference; exact drill and technique not source-verified.'}});
const legacyRelationships=[
 ['wall-push','incline-push','knee-push','push','archer-push'],['push','pseudo-planche-push','planche-lean','tuck-assisted-planche','frog-stand','tuck-planche'],
 ['dead-hang','active-hang','scap-pull','pull-negative','pull','explosive-pull','low-bar-transition','assisted-muscle-up','muscle-up-strict'],
 ['band-row','row','row-wide','row-horizontal','row-feet-elevated'],['foot-support','support','dip','straight-bar-dip'],
 ['pike-support','pike-push','elevated-pike-push','partial-wall-line','wall-handstand','chest-wall-handstand','handstand-shift','handstand-toe-pull','handstand-free'],
 ['foot-support','support','compression-lift','tuck-lsit','one-leg-lsit','lsit'],['hollow','lever-supported','lever-assisted-tuck','tuck-front-lever','advanced-tuck-front-lever','front-lever-negative','front-lever'],
 ['squat','split','single-squat','pistol-box','pistol','shrimp-squat'],['hinge','single-hinge','nordic-negative'],['side-plank-knee','side-plank','copenhagen-plank'],['deadbug','hanging-knee','toes-to-bar','dragon-negative'],
 ['active-hang','extension-supported','assisted-tuck-back-lever','back-lever'],['extension-supported','german-hang','skin-the-cat'],['side-plank','flag-ground','flag-assisted','flag-tuck','human-flag']
];
const hspuExercises=[['wall-hspu-negative','ירידה מבוקרת מעמידת ידיים בקיר','Wall HSPU negative','ירידה איטית לטווח נשלט ואז חזרה לקרקע.'],['partial-wall-hspu','דחיקה חלקית בעמידת ידיים בקיר','Partial wall HSPU','לכופף ולדחוק בטווח חלקי נשלט וקבוע.'],['wall-hspu','דחיקה מלאה בעמידת ידיים בקיר','Wall HSPU','לרדת לטווח המלא שבשליטתכם ולדחוק ללא תנופה.']].map(([id,he,en,cue])=>({...originalExercises.find(e=>e.id==='pike-push'),id,he,en,parent:'wall-handstand',level:4,advancedOnly:true,equipment:['wall'],apparatus:'wall',movementPattern:'vertical_push',unit:'reps',instructions:[cue,'לתרגל בהדרכה, עם יציאה בטוחה ומרחב פנוי.','לעצור בכאב או באובדן שליטה.'],regressions:[],progressions:[],source_ids:['coach-method-offline'],reviewStatus:'pending-review'}));
legacyRelationships.push(['pike-push','elevated-pike-push','wall-hspu-negative','partial-wall-hspu','wall-hspu']);
export const progressionChains=[['wall-push','incline-push','push'],['row','row-horizontal','row-feet-elevated'],['tuck-front-lever','advanced-tuck-front-lever','front-lever'],['tuck-planche','straddle-planche','full-planche']];
export const exerciseRelationships=legacyRelationships.flatMap(chain=>chain.slice(1).map((to,i)=>({from:chain[i],to,type:progressionChains.some(c=>c.includes(chain[i])&&c.includes(to))?'leverageProgression':/nordic|copenhagen/.test(to)?'relatedStrength':'preparation',reviewStatus:'editorial-pending-review'})));
const handstandHold={...drillExercises.find(e=>e.id==='handstand-free'),id:'handstand-free-hold',he:'החזקה חופשית בעמידת ידיים',en:'Freestanding balanced handstand hold',parent:'handstand-free',unit:'seconds',instructions:['רק לאחר בדיקה מקצועית: לתעד שניות איזון ממשי לאחר הכניסה.','כניסה ויציאה נשלטות; ניסיונות כניסה נרשמים בנפרד.','אין תרגול ללא יציאה בטוחה שנבדקה.']};
const apparatusVariants=[{...originalExercises.find(e=>e.id==='row'),id:'ring-row',he:'חתירה בטבעות',en:'Ring row',parent:'row',apparatus:'rings',equipment:['rings'],advancedOnly:true,reviewStatus:'apparatus-specific-review-required',instructions:['רק לאחר בדיקה: טבעות, רצועות ועיגון מדורגים ונבדקים; גובה וזווית מתועדים.','רגליים נושאות משקל; למשוך גוף כיחידה ללא תנופה.','יציאה בעמידה בשליטה; אין להניח שמתקן טבעות זהה למוט יציב.']},{...originalExercises.find(e=>e.id==='support'),id:'parallette-foot-support',he:'תמיכה במקבילונים עם רגליים בקרקע',en:'Feet-assisted parallette support',parent:'support',apparatus:'parallettes',equipment:['parallettes'],advancedOnly:true,reviewStatus:'apparatus-specific-review-required',instructions:['לבדוק רוחב, גובה ויציבות מקבילונים עם מאמן.','לשמור רגליים נושאות משקל על הקרקע ותמיכה נוחה בידיים.','לצאת בהעברת המשקל לרגליים לפני אובדן יציבות.']}];
const assessmentAnchors=[
 {...originalExercises.find(e=>e.id==='pull'),id:'feet-assisted-pull',parent:'pull',he:'משיכה אנכית עם תמיכת רגליים',en:'Feet assisted vertical pull',level:1,advancedOnly:false,equipment:['bar','box'],equipmentRequirements:[['bar','box']],apparatus:'bar',instructions:['לבדוק מתח מעוגן ובמה מעוגנת שנבדקה, בגובה שמאפשר אחיזה מעל הראש ושתי כפות רגליים נושאות משקל לאורך התנועה. אם אין מנח כזה ודרך יציאה בטוחה, לדלג.','למשוך בעזרת הרגליים בטווח נוח ללא תנופה; לתעד גובה, כיפוף ברך וכמות הסיוע.','להפסיק לפני עייפות, כאב או איבוד שליטה; לצאת בהעברת מלוא המשקל לרגליים.'],cue:'רגליים נושאות משקל לאורך כל התנועה; אין תלייה לא נתמכת.',media:[]},
 {...originalExercises.find(e=>e.id==='bridge'),id:'heel-dig-hold',parent:'bridge',he:'כפיפת ברך איזומטרית בלחיצת עקבים',en:'Heel dig knee flexion hold',level:1,advancedOnly:false,movementPattern:'knee_flexion',unit:'seconds',equipment:[],instructions:['לשכב על הגב, ברכיים כפופות ועקבים על רצפה יציבה; האגן נשאר על הקרקע.','ללחוץ עקבים קלות מטה וכאילו לכיוון הישבן בלי להחליק, בלי להרים אגן ובלי לעצור נשימה.','לשחרר בהדרגה לפני רעד, התכווצות, כאב או איבוד שליטה; לתעד זווית ברכיים ועוצמת לחיצה קלה.'],cue:'לחיצה קלה בלבד; האגן על הרצפה, נשימה רציפה.',media:[]}
];
// Job 1: catalogue entries only; archive prescriptions and user data stay untouched.
const coachCatalogueExercises = [
  {
    "id": "plank-knee-elbow",
    "he": "פלאנק ברך למרפק",
    "en": "Plank knee to elbow",
    "group": "core",
    "equipment": [],
    "level": 2,
    "movementPattern": "core_anti_rotation",
    "muscles": [
      "ליבה",
      "אלכסוני הבטן",
      "מייצבי כתפיים"
    ],
    "apparatus": "floor",
    "cue": "לקרב ברך למרפק באותו צד בלי לסובב את האגן.",
    "instructions": [
      "להתחיל בתמיכה על כפות הידיים, גוף בקו ארוך.",
      "לקרב ברך למרפק באותו צד בלי לסובב את האגן.",
      "להחזיר רגל בשליטה ולהחליף צד; כל קירוב הוא חזרה."
    ],
    "mistakes": [
      "הרמת האגן כדי להגיע למרפק."
    ],
    "easy": "להקטין את טווח קירוב הברך.",
    "regressions": [
      "plank"
    ],
    "progressions": [],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "muscleGroups": [
      "core"
    ],
    "media": [],
    "source_ids": [],
    "sourceIds": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "user-supplied-name; original-editorial-instructions; exact-technique-not-verified",
    "sourceNote": "Catalogue addition from user-supplied transcriptions in sources/001–009; original images unavailable. Technique and variation require review.",
    "poseTemplate": "straightPlank"
  },
  {
    "id": "jumping-jack",
    "he": "קפיצות פישוק",
    "en": "Jumping jack",
    "group": "fullbody",
    "equipment": [],
    "level": 1,
    "movementPattern": "locomotion",
    "muscles": [
      "רגליים",
      "שוקיים",
      "כתפיים"
    ],
    "apparatus": "floor",
    "cue": "לקפוץ לפישוק ולהרים ידיים בקצב נוח.",
    "instructions": [
      "לעמוד ברגליים צמודות ובמרחב פנוי.",
      "לקפוץ לפישוק ולהרים ידיים בקצב נוח.",
      "לסגור רגליים וידיים ולנחות ברכות."
    ],
    "mistakes": [
      "נחיתה נוקשה בברכיים נעולות."
    ],
    "easy": "לבצע צעד פישוק ללא קפיצה.",
    "regressions": [
      "step-jack"
    ],
    "progressions": [],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "muscleGroups": [
      "fullbody",
      "legs"
    ],
    "media": [],
    "source_ids": [],
    "sourceIds": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "user-supplied-name; original-editorial-instructions; exact-technique-not-verified",
    "sourceNote": "Catalogue addition from user-supplied transcriptions in sources/001–009; original images unavailable. Technique and variation require review.",
    "poseTemplate": "stand"
  },
  {
    "id": "butt-kick",
    "he": "עקבים לישבן",
    "en": "Butt kicks",
    "group": "fullbody",
    "equipment": [],
    "level": 1,
    "movementPattern": "locomotion",
    "muscles": [
      "ירך אחורית",
      "שוקיים"
    ],
    "apparatus": "floor",
    "cue": "לרוץ קלות במקום ולקרב עקב לישבן לסירוגין.",
    "instructions": [
      "לעמוד זקוף, ברכיים רכות.",
      "לרוץ קלות במקום ולקרב עקב לישבן לסירוגין.",
      "לנחות בשקט בלי לקשת את הגב."
    ],
    "mistakes": [
      "הטיית הגוף קדימה כדי להרים עקב."
    ],
    "easy": "להרים עקב אחד בכל פעם ללא קפיצה.",
    "regressions": [
      "march"
    ],
    "progressions": [],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "muscleGroups": [
      "fullbody",
      "legs"
    ],
    "media": [],
    "source_ids": [],
    "sourceIds": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "user-supplied-name; original-editorial-instructions; exact-technique-not-verified",
    "sourceNote": "Catalogue addition from user-supplied transcriptions in sources/001–009; original images unavailable. Technique and variation require review.",
    "poseTemplate": "stand"
  },
  {
    "id": "seated-in-out",
    "he": "כיווץ ויישור רגליים בישיבה",
    "en": "Seated in-and-out",
    "group": "core",
    "equipment": [],
    "level": 2,
    "movementPattern": "compression",
    "muscles": [
      "ליבה",
      "מכופפי ירך"
    ],
    "apparatus": "floor",
    "cue": "לקרב ברכיים לחזה וליישר רגליים בטווח נשלט.",
    "instructions": [
      "לשבת עם ברכיים כפופות וידיים תומכות לצד האגן.",
      "לקרב ברכיים לחזה וליישר רגליים בטווח נשלט.",
      "לשמור חזה פתוח ונשימה רציפה."
    ],
    "mistakes": [
      "קריסת הגב כשהרגליים מתרחקות."
    ],
    "easy": "להשאיר עקבים נוגעים ברצפה.",
    "regressions": [
      "reverse-crunch"
    ],
    "progressions": [],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "muscleGroups": [
      "core"
    ],
    "media": [],
    "source_ids": [],
    "sourceIds": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "user-supplied-name; original-editorial-instructions; exact-technique-not-verified",
    "sourceNote": "Catalogue addition from user-supplied transcriptions in sources/001–009; original images unavailable. Technique and variation require review.",
    "poseTemplate": "sit"
  },
  {
    "id": "bicycle-crunch",
    "he": "כפיפות בטן אופניים",
    "en": "Bicycle crunch",
    "group": "core",
    "equipment": [],
    "level": 2,
    "movementPattern": "trunk_flexion",
    "muscles": [
      "ליבה",
      "אלכסוני הבטן",
      "מכופפי ירך"
    ],
    "apparatus": "floor",
    "cue": "לקרב כתף לברך נגדית תוך יישור הרגל השנייה.",
    "instructions": [
      "לשכב על הגב, ידיים תומכות קלות בראש וברכיים כפופות.",
      "לקרב כתף לברך נגדית תוך יישור הרגל השנייה.",
      "להחליף צד באיטיות בלי למשוך בצוואר."
    ],
    "mistakes": [
      "משיכת הראש בידיים במקום סיבוב בית החזה."
    ],
    "easy": "להניח רגל אחת ברצפה בין החלפות.",
    "regressions": [
      "deadbug"
    ],
    "progressions": [],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "muscleGroups": [
      "core"
    ],
    "media": [],
    "source_ids": [],
    "sourceIds": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "user-supplied-name; original-editorial-instructions; exact-technique-not-verified",
    "sourceNote": "Catalogue addition from user-supplied transcriptions in sources/001–009; original images unavailable. Technique and variation require review.",
    "poseTemplate": "supine"
  },
  {
    "id": "flutter-kick",
    "he": "בעיטות רגליים לסירוגין בשכיבה",
    "en": "Flutter kicks",
    "group": "core",
    "equipment": [],
    "level": 2,
    "movementPattern": "core_anti_extension",
    "muscles": [
      "ליבה",
      "מכופפי ירך"
    ],
    "apparatus": "floor",
    "cue": "להניע רגליים ישרות מעלה ומטה בתנועות קטנות לסירוגין.",
    "instructions": [
      "לשכב על הגב, ידיים לצד הגוף ורגליים מורמות.",
      "להניע רגליים ישרות מעלה ומטה בתנועות קטנות לסירוגין.",
      "לבחור גובה שמאפשר לשמור גב יציב."
    ],
    "mistakes": [
      "הורדת הרגליים עד שהגב מתקשת."
    ],
    "easy": "לכופף ברכיים או להגביה רגליים.",
    "regressions": [
      "deadbug"
    ],
    "progressions": [],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "muscleGroups": [
      "core"
    ],
    "media": [],
    "source_ids": [],
    "sourceIds": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "user-supplied-name; original-editorial-instructions; exact-technique-not-verified",
    "sourceNote": "Catalogue addition from user-supplied transcriptions in sources/001–009; original images unavailable. Technique and variation require review.",
    "poseTemplate": "supine"
  },
  {
    "id": "shoulder-tap",
    "he": "נגיעות כתף בפלאנק",
    "en": "Shoulder taps",
    "group": "core",
    "equipment": [],
    "level": 2,
    "movementPattern": "core_anti_rotation",
    "muscles": [
      "ליבה",
      "מייצבי כתפיים",
      "אלכסוני הבטן"
    ],
    "apparatus": "floor",
    "cue": "להרים יד ולגעת בכתף הנגדית בלי לסובב אגן.",
    "instructions": [
      "להתחיל בתמיכה על כפות הידיים ורגליים בפישוק נוח.",
      "להרים יד ולגעת בכתף הנגדית בלי לסובב אגן.",
      "להחזיר כף יד ולהחליף צד; כל נגיעה היא חזרה."
    ],
    "mistakes": [
      "הטיית האגן מצד לצד."
    ],
    "easy": "להרחיב פישוק או לתמוך בברכיים.",
    "regressions": [
      "bird-dog"
    ],
    "progressions": [],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "muscleGroups": [
      "core"
    ],
    "media": [],
    "source_ids": [],
    "sourceIds": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "user-supplied-name; original-editorial-instructions; exact-technique-not-verified",
    "sourceNote": "Catalogue addition from user-supplied transcriptions in sources/001–009; original images unavailable. Technique and variation require review.",
    "poseTemplate": "straightPlank"
  },
  {
    "id": "wall-walk",
    "he": "הליכה לעמידת ידיים על קיר",
    "en": "Wall walks",
    "group": "push",
    "equipment": [
      "wall"
    ],
    "level": 3,
    "movementPattern": "support",
    "muscles": [
      "כתפיים",
      "יד אחורית",
      "ליבה"
    ],
    "apparatus": "wall",
    "cue": "לטפס ברגליים ולצעוד בידיים לכיוון הקיר בטווח נשלט.",
    "instructions": [
      "בהדרכה ובמרחב פנוי: להתחיל בתמיכת ידיים עם כפות רגליים בבסיס קיר יציב.",
      "לטפס ברגליים ולצעוד בידיים לכיוון הקיר בטווח נשלט.",
      "לחזור בהליכה מבוקרת עד הרגליים בקרקע; לתרגל יציאה מראש."
    ],
    "mistakes": [
      "התקדמות לקיר בלי יכולת לחזור."
    ],
    "easy": "לעלות רק מעט על הקיר.",
    "regressions": [
      "chest-wall-handstand"
    ],
    "progressions": [],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "muscleGroups": [
      "chest",
      "shoulders",
      "arms"
    ],
    "media": [],
    "source_ids": [],
    "sourceIds": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "user-supplied-name; original-editorial-instructions; exact-technique-not-verified",
    "sourceNote": "Catalogue addition from user-supplied transcriptions in sources/001–009; original images unavailable. Technique and variation require review.",
    "poseTemplate": "handstand"
  },
  {
    "id": "commando-plank",
    "he": "מעבר מאמות לכפות ידיים בפלאנק",
    "en": "Commando plank",
    "group": "core",
    "equipment": [],
    "level": 2,
    "movementPattern": "core_anti_rotation",
    "muscles": [
      "ליבה",
      "כתפיים",
      "יד אחורית"
    ],
    "apparatus": "floor",
    "cue": "לעלות לכפות הידיים יד אחר יד בלי לסובב את האגן.",
    "instructions": [
      "להתחיל בפלאנק על האמות וברגליים בפישוק נוח.",
      "לעלות לכפות הידיים יד אחר יד בלי לסובב את האגן.",
      "לחזור לאמות; להחליף יד מובילה בכל מחזור."
    ],
    "mistakes": [
      "סיבוב האגן עם כל עלייה."
    ],
    "easy": "לבצע עם ברכיים על הקרקע.",
    "regressions": [
      "plank"
    ],
    "progressions": [],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "muscleGroups": [
      "core"
    ],
    "media": [],
    "source_ids": [],
    "sourceIds": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "user-supplied-name; original-editorial-instructions; exact-technique-not-verified",
    "sourceNote": "Catalogue addition from user-supplied transcriptions in sources/001–009; original images unavailable. Technique and variation require review.",
    "poseTemplate": "straightPlank"
  },
  {
    "id": "back-bridge",
    "he": "גשר גב בתמיכת ידיים ורגליים",
    "en": "Back bridge",
    "group": "mobility",
    "equipment": [],
    "level": 3,
    "movementPattern": "mobility",
    "muscles": [
      "מייצבי גב",
      "כתפיים",
      "ישבן",
      "תנועתיות עמוד שדרה"
    ],
    "apparatus": "floor",
    "cue": "לדחוק דרך הידיים והרגליים ולהרים את הגוף לקשת בטווח נוח.",
    "instructions": [
      "בהדרכה: לשכב על הגב, כפות רגליים בקרקע וכפות ידיים לצד הראש.",
      "לדחוק דרך הידיים והרגליים ולהרים את הגוף לקשת בטווח נוח.",
      "לרדת לאט ללא נשיאת משקל על הראש או הצוואר."
    ],
    "mistakes": [
      "כפיית קשת בגב התחתון כשהכתפיים אינן נפתחות."
    ],
    "easy": "לתרגל גשר אגן בלבד.",
    "regressions": [
      "bridge"
    ],
    "progressions": [],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "muscleGroups": [
      "mobility"
    ],
    "media": [],
    "source_ids": [],
    "sourceIds": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "user-supplied-name; original-editorial-instructions; exact-technique-not-verified",
    "sourceNote": "Catalogue addition from user-supplied transcriptions in sources/001–009; original images unavailable. Technique and variation require review.",
    "poseTemplate": "bridge"
  },
  {
    "id": "band-external-rotation",
    "he": "סיבוב כתף חיצוני עם גומייה",
    "en": "Band external shoulder rotation",
    "group": "mobility",
    "equipment": [
      "band"
    ],
    "level": 1,
    "movementPattern": "shoulder_external_rotation",
    "muscles": [
      "מייצבי כתפיים",
      "כתף אחורית"
    ],
    "apparatus": "band",
    "cue": "לפתוח אמה החוצה כנגד הגומייה בלי להזיז מרפק מהגוף.",
    "instructions": [
      "לבדוק גומייה; לאחוז בשתי ידיים, מרפקים כפופים וצמודים לצדי הגוף.",
      "לפתוח אמה החוצה כנגד הגומייה בלי להזיז מרפק מהגוף.",
      "לחזור בשליטה ולהחליף צד; לבחור התנגדות קלה."
    ],
    "mistakes": [
      "הרמת הכתף או סיבוב הגו במקום תנועת הזרוע."
    ],
    "easy": "להפחית את מתח הגומייה.",
    "regressions": [
      "prone-w"
    ],
    "progressions": [],
    "unit": "reps",
    "perSide": true,
    "advancedOnly": false,
    "muscleGroups": [
      "mobility"
    ],
    "media": [],
    "source_ids": [],
    "sourceIds": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "user-supplied-name; original-editorial-instructions; exact-technique-not-verified",
    "sourceNote": "Catalogue addition from user-supplied transcriptions in sources/001–009; original images unavailable. Technique and variation require review.",
    "poseTemplate": "stand"
  },
  {
    "id": "band-scapula-shrug",
    "he": "הרמות שכמות עם גומייה",
    "en": "Band scapula shrugs",
    "group": "pull",
    "equipment": [
      "band"
    ],
    "level": 1,
    "movementPattern": "scapular_control",
    "muscles": [
      "מייצבי שכמות",
      "כתפיים"
    ],
    "apparatus": "band",
    "cue": "להרים שכמות בעדינות כשהמרפקים ישרים.",
    "instructions": [
      "לעמוד על מרכז גומייה תקינה ולאחוז בקצוות לצדי הגוף.",
      "להרים שכמות בעדינות כשהמרפקים ישרים.",
      "להוריד בשליטה בלי לגלגל כתפיים."
    ],
    "mistakes": [
      "כיפוף המרפקים במקום הרמת שכמות."
    ],
    "easy": "להפחית את התנגדות הגומייה.",
    "regressions": [
      "prone-w"
    ],
    "progressions": [],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "muscleGroups": [
      "back",
      "arms"
    ],
    "media": [],
    "source_ids": [],
    "sourceIds": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "user-supplied-name; original-editorial-instructions; exact-technique-not-verified",
    "sourceNote": "Catalogue addition from user-supplied transcriptions in sources/001–009; original images unavailable. Technique and variation require review.",
    "poseTemplate": "stand"
  },
  {
    "id": "superman-hold",
    "he": "החזקת סופרמן בשכיבה",
    "en": "Superman hold",
    "group": "core",
    "equipment": [],
    "level": 2,
    "movementPattern": "trunk_extension",
    "muscles": [
      "מייצבי גב",
      "ישבן",
      "כתף אחורית"
    ],
    "apparatus": "floor",
    "cue": "להרים מעט ידיים ורגליים ולהחזיק ללא לחץ בגב.",
    "instructions": [
      "לשכב על הבטן, ידיים קדימה ומבט לרצפה.",
      "להרים מעט ידיים ורגליים ולהחזיק ללא לחץ בגב.",
      "לנשום ברצף ולהוריד בשליטה."
    ],
    "mistakes": [
      "הרמה גבוהה עם זריקת הראש לאחור."
    ],
    "easy": "להרים רק ידיים או רק רגליים.",
    "regressions": [
      "bird-dog"
    ],
    "progressions": [],
    "unit": "seconds",
    "perSide": false,
    "advancedOnly": false,
    "muscleGroups": [
      "core"
    ],
    "media": [],
    "source_ids": [],
    "sourceIds": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "user-supplied-name; original-editorial-instructions; exact-technique-not-verified",
    "sourceNote": "Catalogue addition from user-supplied transcriptions in sources/001–009; original images unavailable. Technique and variation require review.",
    "poseTemplate": "prone"
  },
  {
    "id": "lying-leg-raise",
    "he": "הרמות רגליים בשכיבה",
    "en": "Lying leg raise",
    "group": "core",
    "equipment": [],
    "level": 2,
    "movementPattern": "compression",
    "muscles": [
      "ליבה",
      "מכופפי ירך"
    ],
    "apparatus": "floor",
    "cue": "להוריד רגליים בשליטה ולהרים חזרה בלי לקשת את הגב.",
    "instructions": [
      "לשכב על הגב, ידיים לצד הגוף ורגליים מעל האגן.",
      "להוריד רגליים בשליטה ולהרים חזרה בלי לקשת את הגב.",
      "לעצור את הירידה לפני שהגב מאבד יציבות."
    ],
    "mistakes": [
      "הורדה עד הרצפה למרות קשת בגב."
    ],
    "easy": "לכופף ברכיים ולהקטין טווח.",
    "regressions": [
      "reverse-crunch"
    ],
    "progressions": [],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "muscleGroups": [
      "core"
    ],
    "media": [],
    "source_ids": [],
    "sourceIds": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "user-supplied-name; original-editorial-instructions; exact-technique-not-verified",
    "sourceNote": "Catalogue addition from user-supplied transcriptions in sources/001–009; original images unavailable. Technique and variation require review.",
    "poseTemplate": "supine"
  },
  {
    "id": "half-burpee",
    "he": "חצי בורפי",
    "en": "Half burpee",
    "group": "fullbody",
    "equipment": [],
    "level": 2,
    "movementPattern": "locomotion",
    "muscles": [
      "ליבה",
      "רגליים",
      "מייצבי כתפיים"
    ],
    "apparatus": "floor",
    "cue": "להעביר רגליים לאחור לפלאנק ולהחזיר אל הידיים.",
    "instructions": [
      "להתחיל בעמידה ולכופף ברכיים כדי להניח ידיים ברצפה.",
      "להעביר רגליים לאחור לפלאנק ולהחזיר אל הידיים.",
      "להזדקף ללא שכיבת סמיכה וללא קפיצה בסיום."
    ],
    "mistakes": [
      "שקיעת האגן במעבר לפלאנק."
    ],
    "easy": "לצעוד ברגליים במקום לקפוץ.",
    "regressions": [
      "step-jack"
    ],
    "progressions": [],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "muscleGroups": [
      "fullbody",
      "legs"
    ],
    "media": [],
    "source_ids": [],
    "sourceIds": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "user-supplied-name; original-editorial-instructions; exact-technique-not-verified",
    "sourceNote": "Catalogue addition from user-supplied transcriptions in sources/001–009; original images unavailable. Technique and variation require review.",
    "poseTemplate": "straightPlank"
  },
  {
    "id": "burpee",
    "he": "בורפי",
    "en": "Burpee",
    "group": "fullbody",
    "equipment": [],
    "level": 3,
    "movementPattern": "locomotion",
    "muscles": [
      "רגליים",
      "חזה",
      "יד אחורית",
      "ליבה"
    ],
    "apparatus": "floor",
    "cue": "לרדת לפלאנק, לבצע שכיבת סמיכה ולהחזיר רגליים קדימה.",
    "instructions": [
      "להתחיל בעמידה עם מרחב פנוי לנחיתה.",
      "לרדת לפלאנק, לבצע שכיבת סמיכה ולהחזיר רגליים קדימה.",
      "להזדקף לקפיצה קטנה ולנחות ברכות; כל הרצף הוא חזרה."
    ],
    "mistakes": [
      "קריסת הגב בשכיבת הסמיכה או בנחיתה."
    ],
    "easy": "לבצע חצי בורפי בצעדים.",
    "regressions": [
      "half-burpee"
    ],
    "progressions": [],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "muscleGroups": [
      "fullbody",
      "legs"
    ],
    "media": [],
    "source_ids": [],
    "sourceIds": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "user-supplied-name; original-editorial-instructions; exact-technique-not-verified",
    "sourceNote": "Catalogue addition from user-supplied transcriptions in sources/001–009; original images unavailable. Technique and variation require review.",
    "poseTemplate": "straightPlank"
  },
  {
    "id": "mountain-climber",
    "he": "מטפס הרים",
    "en": "Mountain climbers",
    "group": "core",
    "equipment": [],
    "level": 2,
    "movementPattern": "core_anti_extension",
    "muscles": [
      "ליבה",
      "מכופפי ירך",
      "מייצבי כתפיים"
    ],
    "apparatus": "floor",
    "cue": "לקרב ברך לחזה לסירוגין תוך שמירת אגן יציב.",
    "instructions": [
      "להתחיל בתמיכה על כפות הידיים מתחת לכתפיים.",
      "לקרב ברך לחזה לסירוגין תוך שמירת אגן יציב.",
      "להחזיר כל רגל לפני החלפת הצד; כל קירוב הוא חזרה."
    ],
    "mistakes": [
      "הקפצת האגן כדי להאיץ את הקצב."
    ],
    "easy": "להאט ולבצע צעדים נפרדים.",
    "regressions": [
      "plank"
    ],
    "progressions": [],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "muscleGroups": [
      "core"
    ],
    "media": [],
    "source_ids": [],
    "sourceIds": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "user-supplied-name; original-editorial-instructions; exact-technique-not-verified",
    "sourceNote": "Catalogue addition from user-supplied transcriptions in sources/001–009; original images unavailable. Technique and variation require review.",
    "poseTemplate": "straightPlank"
  },
  {
    "id": "v-up",
    "he": "עליות בטן בצורת וי",
    "en": "V-up",
    "group": "core",
    "equipment": [],
    "level": 3,
    "movementPattern": "compression",
    "muscles": [
      "ליבה",
      "מכופפי ירך"
    ],
    "apparatus": "floor",
    "cue": "להרים גו ורגליים יחד ולקרב ידיים לכפות הרגליים.",
    "instructions": [
      "לשכב על הגב עם ידיים מעבר לראש ורגליים ארוכות.",
      "להרים גו ורגליים יחד ולקרב ידיים לכפות הרגליים.",
      "לרדת בשליטה בלי להטיח גב ברצפה."
    ],
    "mistakes": [
      "שימוש בתנופה במקום הרמה נשלטת."
    ],
    "easy": "לכופף ברכיים ולבצע כיווץ קצר.",
    "regressions": [
      "reverse-crunch"
    ],
    "progressions": [],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "muscleGroups": [
      "core"
    ],
    "media": [],
    "source_ids": [],
    "sourceIds": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "user-supplied-name; original-editorial-instructions; exact-technique-not-verified",
    "sourceNote": "Catalogue addition from user-supplied transcriptions in sources/001–009; original images unavailable. Technique and variation require review.",
    "poseTemplate": "sit"
  },
  {
    "id": "toe-touch",
    "he": "נגיעות בכפות הרגליים בשכיבה",
    "en": "Toe touches",
    "group": "core",
    "equipment": [],
    "level": 2,
    "movementPattern": "trunk_flexion",
    "muscles": [
      "ליבה"
    ],
    "apparatus": "floor",
    "cue": "להרים שכמות ולשלוח ידיים לכיוון כפות הרגליים.",
    "instructions": [
      "לשכב על הגב ולהרים רגליים לכיוון התקרה, ברכיים רכות.",
      "להרים שכמות ולשלוח ידיים לכיוון כפות הרגליים.",
      "לחזור לאט בלי למשוך בצוואר."
    ],
    "mistakes": [
      "זריקת הראש קדימה כדי להגיע גבוה יותר."
    ],
    "easy": "להגיע רק עד השוקיים.",
    "regressions": [
      "reverse-crunch"
    ],
    "progressions": [],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "muscleGroups": [
      "core"
    ],
    "media": [],
    "source_ids": [],
    "sourceIds": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "user-supplied-name; original-editorial-instructions; exact-technique-not-verified",
    "sourceNote": "Catalogue addition from user-supplied transcriptions in sources/001–009; original images unavailable. Technique and variation require review.",
    "poseTemplate": "supine"
  },
  {
    "id": "pike-walk",
    "he": "הליכת פייק",
    "en": "Pike walk",
    "group": "fullbody",
    "equipment": [],
    "level": 2,
    "movementPattern": "locomotion",
    "muscles": [
      "כתפיים",
      "ליבה",
      "ירך אחורית"
    ],
    "apparatus": "floor",
    "cue": "לצעוד בידיים קדימה לתמיכה ואז לקרב רגליים בצעדים קטנים לאגן גבוה.",
    "instructions": [
      "להתחיל בעמידה, להתכופף ולהניח ידיים ברצפה עם ברכיים רכות.",
      "לצעוד בידיים קדימה לתמיכה ואז לקרב רגליים בצעדים קטנים לאגן גבוה.",
      "לשמור טווח נוח בכתפיים ובירך האחורית."
    ],
    "mistakes": [
      "כפיית ברכיים ישרות כשהגב מתעגל."
    ],
    "easy": "להקטין את אורך הצעדים ולכופף ברכיים.",
    "regressions": [
      "pike-support"
    ],
    "progressions": [],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "muscleGroups": [
      "fullbody",
      "legs"
    ],
    "media": [],
    "source_ids": [],
    "sourceIds": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "user-supplied-name; original-editorial-instructions; exact-technique-not-verified",
    "sourceNote": "Catalogue addition from user-supplied transcriptions in sources/001–009; original images unavailable. Technique and variation require review.",
    "poseTemplate": "pike"
  },
  {
    "id": "high-plank",
    "he": "פלאנק על כפות הידיים",
    "en": "High plank",
    "group": "core",
    "equipment": [],
    "level": 2,
    "movementPattern": "core_anti_extension",
    "muscles": [
      "ליבה",
      "מייצבי כתפיים",
      "מסור קדמי"
    ],
    "apparatus": "floor",
    "cue": "להחזיק קו ראש–אגן–עקבים ולדחוף בעדינות את הרצפה.",
    "instructions": [
      "להניח כפות ידיים מתחת לכתפיים וליישר רגליים לאחור.",
      "להחזיק קו ראש–אגן–עקבים ולדחוף בעדינות את הרצפה.",
      "לנשום ברצף ולסיים לפני שקיעת הגב."
    ],
    "mistakes": [
      "נעילת כתפיים וקריסת האגן."
    ],
    "easy": "להניח ברכיים ברצפה.",
    "regressions": [
      "plank"
    ],
    "progressions": [],
    "unit": "seconds",
    "perSide": false,
    "advancedOnly": false,
    "muscleGroups": [
      "core"
    ],
    "media": [],
    "source_ids": [],
    "sourceIds": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "user-supplied-name; original-editorial-instructions; exact-technique-not-verified",
    "sourceNote": "Catalogue addition from user-supplied transcriptions in sources/001–009; original images unavailable. Technique and variation require review.",
    "poseTemplate": "straightPlank"
  },
  {
    "id": "high-knees",
    "he": "ריצה במקום עם ברכיים גבוהות",
    "en": "High knees",
    "group": "fullbody",
    "equipment": [],
    "level": 1,
    "movementPattern": "locomotion",
    "muscles": [
      "מכופפי ירך",
      "שוקיים",
      "ליבה"
    ],
    "apparatus": "floor",
    "cue": "להרים ברכיים לסירוגין לכיוון כפות הידיים בריצה קלה במקום.",
    "instructions": [
      "לעמוד זקוף ולהחזיק ידיים בגובה נוח לפנים.",
      "להרים ברכיים לסירוגין לכיוון כפות הידיים בריצה קלה במקום.",
      "לנחות ברכות בלי להישען לאחור."
    ],
    "mistakes": [
      "הטיית הגב כדי להגביה ברך."
    ],
    "easy": "לצעוד במקום ללא ניתור.",
    "regressions": [
      "march"
    ],
    "progressions": [],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "muscleGroups": [
      "fullbody",
      "legs"
    ],
    "media": [],
    "source_ids": [],
    "sourceIds": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "user-supplied-name; original-editorial-instructions; exact-technique-not-verified",
    "sourceNote": "Catalogue addition from user-supplied transcriptions in sources/001–009; original images unavailable. Technique and variation require review.",
    "poseTemplate": "stand"
  },
  {
    "id": "lunge",
    "he": "מכרע קדמי",
    "en": "Lunge",
    "group": "legs",
    "equipment": [],
    "level": 2,
    "movementPattern": "single_leg",
    "muscles": [
      "ירך קדמית",
      "ישבן",
      "מייצבי אגן"
    ],
    "apparatus": "floor",
    "cue": "לצעוד קדימה ולכופף שתי ברכיים בטווח נוח.",
    "instructions": [
      "לעמוד זקוף ולפנות מקום לצעד קדימה.",
      "לצעוד קדימה ולכופף שתי ברכיים בטווח נוח.",
      "לדחוף דרך הרגל הקדמית ולחזור לעמידה; להשלים לשני הצדדים."
    ],
    "mistakes": [
      "קריסת הברך הקדמית פנימה."
    ],
    "easy": "להקטין את הצעד ואת עומק הירידה.",
    "regressions": [
      "split"
    ],
    "progressions": [],
    "unit": "reps",
    "perSide": true,
    "advancedOnly": false,
    "muscleGroups": [
      "legs",
      "glutes"
    ],
    "media": [],
    "source_ids": [],
    "sourceIds": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "user-supplied-name; original-editorial-instructions; exact-technique-not-verified",
    "sourceNote": "Catalogue addition from user-supplied transcriptions in sources/001–009; original images unavailable. Technique and variation require review.",
    "poseTemplate": "split"
  },
  {
    "id": "jump-squat",
    "he": "סקוואט בקפיצה",
    "en": "Jump squat",
    "group": "legs",
    "equipment": [],
    "level": 3,
    "movementPattern": "squat",
    "muscles": [
      "ירך קדמית",
      "ישבן",
      "שוקיים"
    ],
    "apparatus": "floor",
    "cue": "לרדת לסקוואט נשלט ולנתר מעלה בדחיקה מהרגליים.",
    "instructions": [
      "לעמוד בפישוק נוח ולבדוק מרחב פנוי לנחיתה.",
      "לרדת לסקוואט נשלט ולנתר מעלה בדחיקה מהרגליים.",
      "לנחות ברכות עם ברכיים בכיוון האצבעות."
    ],
    "mistakes": [
      "נחיתה בברכיים ישרות או קורסות פנימה."
    ],
    "easy": "לבצע סקוואט ועלייה לעקבים ללא ניתור.",
    "regressions": [
      "squat"
    ],
    "progressions": [],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "muscleGroups": [
      "legs",
      "glutes"
    ],
    "media": [],
    "source_ids": [],
    "sourceIds": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "user-supplied-name; original-editorial-instructions; exact-technique-not-verified",
    "sourceNote": "Catalogue addition from user-supplied transcriptions in sources/001–009; original images unavailable. Technique and variation require review.",
    "poseTemplate": "squat"
  },
  {
    "id": "wide-push",
    "he": "שכיבות סמיכה רחבות",
    "en": "Wide push-up",
    "group": "push",
    "equipment": [],
    "level": 2,
    "movementPattern": "horizontal_push",
    "muscles": [
      "חזה",
      "כתפיים",
      "יד אחורית"
    ],
    "apparatus": "floor",
    "cue": "להוריד חזה בשליטה ולדחוק תוך שמירת גוף בקו ארוך.",
    "instructions": [
      "להתחיל בתמיכה עם ידיים רחבות מעט מרוחב הכתפיים.",
      "להוריד חזה בשליטה ולדחוק תוך שמירת גוף בקו ארוך.",
      "לבחור רוחב שאינו גורם לחץ בכתפיים."
    ],
    "mistakes": [
      "פישוק ידיים קיצוני ואיבוד שליטה בכתפיים."
    ],
    "easy": "להניח ברכיים ברצפה.",
    "regressions": [
      "push"
    ],
    "progressions": [],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "muscleGroups": [
      "chest",
      "shoulders",
      "arms"
    ],
    "media": [],
    "source_ids": [],
    "sourceIds": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "user-supplied-name; original-editorial-instructions; exact-technique-not-verified",
    "sourceNote": "Catalogue addition from user-supplied transcriptions in sources/001–009; original images unavailable. Technique and variation require review.",
    "poseTemplate": "pushTop"
  },
  {
    "id": "diamond-push",
    "he": "שכיבות סמיכה יהלום",
    "en": "Diamond push-up",
    "group": "push",
    "equipment": [],
    "level": 3,
    "movementPattern": "horizontal_push",
    "muscles": [
      "יד אחורית",
      "חזה",
      "כתפיים"
    ],
    "apparatus": "floor",
    "cue": "לכופף מרפקים קרוב לגוף ולהוריד חזה בשליטה.",
    "instructions": [
      "להניח ידיים קרובות מתחת לחזה, אצבעות ואגודלים יוצרים צורת יהלום נוחה.",
      "לכופף מרפקים קרוב לגוף ולהוריד חזה בשליטה.",
      "לדחוק חזרה בלי להרים אגן."
    ],
    "mistakes": [
      "כפיית זווית לא נוחה בשורש כף היד."
    ],
    "easy": "לבצע על הברכיים או להרחיב מעט את הידיים.",
    "regressions": [
      "close-push"
    ],
    "progressions": [],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "muscleGroups": [
      "chest",
      "shoulders",
      "arms"
    ],
    "media": [],
    "source_ids": [],
    "sourceIds": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "user-supplied-name; original-editorial-instructions; exact-technique-not-verified",
    "sourceNote": "Catalogue addition from user-supplied transcriptions in sources/001–009; original images unavailable. Technique and variation require review.",
    "poseTemplate": "pushTop"
  },
  {
    "id": "decline-push",
    "he": "שכיבות סמיכה עם רגליים מוגבהות",
    "en": "Decline push-up",
    "group": "push",
    "equipment": [
      "box"
    ],
    "level": 3,
    "movementPattern": "horizontal_push",
    "muscles": [
      "חזה",
      "כתף קדמית",
      "יד אחורית"
    ],
    "apparatus": "box",
    "cue": "להוריד חזה בין הידיים תוך שמירת גוף בקו ארוך.",
    "instructions": [
      "להניח רגליים על במה מעוגנת וידיים על הרצפה.",
      "להוריד חזה בין הידיים תוך שמירת גוף בקו ארוך.",
      "לדחוק חזרה ולרדת מהבמה בשליטה."
    ],
    "mistakes": [
      "שקיעת הגב בגלל גובה תמיכה גדול מדי."
    ],
    "easy": "להנמיך את התמיכה או לחזור לרצפה.",
    "regressions": [
      "push"
    ],
    "progressions": [],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "muscleGroups": [
      "chest",
      "shoulders",
      "arms"
    ],
    "media": [],
    "source_ids": [],
    "sourceIds": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "user-supplied-name; original-editorial-instructions; exact-technique-not-verified",
    "sourceNote": "Catalogue addition from user-supplied transcriptions in sources/001–009; original images unavailable. Technique and variation require review.",
    "poseTemplate": "pushTop"
  },
  {
    "id": "explosive-push",
    "he": "שכיבות סמיכה מתפרצות",
    "en": "Explosive push-up",
    "group": "push",
    "equipment": [],
    "level": 4,
    "movementPattern": "horizontal_push",
    "muscles": [
      "חזה",
      "יד אחורית",
      "כתפיים"
    ],
    "apparatus": "floor",
    "cue": "לרדת בשליטה ולדחוק במהירות עד ניתוק קל של כפות הידיים.",
    "instructions": [
      "להתחיל בתמיכת ידיים על רצפה יציבה וללא חפצים בסביבה.",
      "לרדת בשליטה ולדחוק במהירות עד ניתוק קל של כפות הידיים.",
      "לנחות במרפקים רכים; אין צורך במחיאת כף."
    ],
    "mistakes": [
      "נחיתה נוקשה על מרפקים נעולים."
    ],
    "easy": "לדחוק מהר בלי לנתק ידיים מהקרקע.",
    "regressions": [
      "push"
    ],
    "progressions": [],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "muscleGroups": [
      "chest",
      "shoulders",
      "arms"
    ],
    "media": [],
    "source_ids": [],
    "sourceIds": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "user-supplied-name; original-editorial-instructions; exact-technique-not-verified",
    "sourceNote": "Catalogue addition from user-supplied transcriptions in sources/001–009; original images unavailable. Technique and variation require review.",
    "poseTemplate": "pushTop"
  },
  {
    "id": "bench-dip",
    "he": "דחיקות יד אחורית על ספסל",
    "en": "Bench dip",
    "group": "push",
    "equipment": [
      "bench"
    ],
    "level": 2,
    "movementPattern": "vertical_push",
    "muscles": [
      "יד אחורית",
      "כתפיים",
      "חזה"
    ],
    "apparatus": "floor",
    "cue": "לכופף מרפקים בטווח קטן ונוח כשהאגן סמוך לספסל.",
    "instructions": [
      "להניח ידיים על ספסל מעוגן מאחורי האגן, כפות רגליים בקרקע וברכיים כפופות.",
      "לכופף מרפקים בטווח קטן ונוח כשהאגן סמוך לספסל.",
      "לדחוק חזרה בלי למשוך כתפיים לאוזניים."
    ],
    "mistakes": [
      "ירידה עמוקה שמעמיסה על קדמת הכתף."
    ],
    "easy": "להעביר יותר משקל לרגליים ולהקטין טווח.",
    "regressions": [
      "support"
    ],
    "progressions": [],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "muscleGroups": [
      "chest",
      "shoulders",
      "arms"
    ],
    "media": [],
    "source_ids": [],
    "sourceIds": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "user-supplied-name; original-editorial-instructions; exact-technique-not-verified",
    "sourceNote": "Catalogue addition from user-supplied transcriptions in sources/001–009; original images unavailable. Technique and variation require review.",
    "poseTemplate": "dip"
  },
  {
    "id": "jump-dip",
    "he": "מקבילים בסיוע קפיצה",
    "en": "Jump dip",
    "group": "push",
    "equipment": [
      "parallel"
    ],
    "level": 3,
    "movementPattern": "vertical_push",
    "muscles": [
      "יד אחורית",
      "חזה",
      "כתפיים"
    ],
    "apparatus": "parallel",
    "cue": "להיעזר בקפיצה קטנה מהרגליים כדי להגיע לתמיכה מעל המתקן.",
    "instructions": [
      "לבחור מקבילים מעוגנים בגובה שמאפשר דחיקה מהרגליים ויציאה לקרקע.",
      "להיעזר בקפיצה קטנה מהרגליים כדי להגיע לתמיכה מעל המתקן.",
      "לרדת בשליטה לרגליים; אין לשחרר ידיים באוויר."
    ],
    "mistakes": [
      "קפיצה גדולה בלי שליטה בירידה."
    ],
    "easy": "לבצע בסיוע רגליים רציף ללא קפיצה.",
    "regressions": [
      "foot-support"
    ],
    "progressions": [],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "muscleGroups": [
      "chest",
      "shoulders",
      "arms"
    ],
    "media": [],
    "source_ids": [],
    "sourceIds": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "user-supplied-name; original-editorial-instructions; exact-technique-not-verified",
    "sourceNote": "Catalogue addition from user-supplied transcriptions in sources/001–009; original images unavailable. Technique and variation require review.",
    "poseTemplate": "dip"
  },
  {
    "id": "chin-up-hold",
    "he": "החזקת מתח באחיזה הפוכה",
    "en": "Chin-up hold",
    "group": "pull",
    "equipment": [
      "bar",
      "box"
    ],
    "level": 3,
    "movementPattern": "vertical_pull",
    "muscles": [
      "גב",
      "יד קדמית",
      "אחיזה"
    ],
    "apparatus": "bar",
    "cue": "להחזיק סנטר מעל המוט בלי להאריך את הצוואר.",
    "instructions": [
      "להיעזר בבמה מעוגנת כדי להגיע מעל המוט באחיזה הפוכה.",
      "להחזיק סנטר מעל המוט בלי להאריך את הצוואר.",
      "לצאת בחזרה לתמיכת רגליים לפני אובדן שליטה."
    ],
    "mistakes": [
      "הישענות הסנטר על המוט במקום החזקת השרירים."
    ],
    "easy": "להשאיר תמיכת רגליים חלקית.",
    "regressions": [
      "chin"
    ],
    "progressions": [],
    "unit": "seconds",
    "perSide": false,
    "advancedOnly": true,
    "muscleGroups": [
      "back",
      "arms"
    ],
    "media": [],
    "source_ids": [],
    "sourceIds": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "user-supplied-name; original-editorial-instructions; exact-technique-not-verified",
    "sourceNote": "Catalogue addition from user-supplied transcriptions in sources/001–009; original images unavailable. Technique and variation require review.",
    "poseTemplate": "pullTop"
  },
  {
    "id": "arch-pull",
    "he": "מתח בגב מקושת",
    "en": "Arch pull-up",
    "group": "pull",
    "equipment": [
      "bar"
    ],
    "level": 4,
    "movementPattern": "vertical_pull",
    "muscles": [
      "גב",
      "יד קדמית",
      "מייצבי שכמות"
    ],
    "apparatus": "bar",
    "cue": "למשוך חזה לכיוון המוט עם פתיחת בית החזה וקשת מבוקרת.",
    "instructions": [
      "להיתלות ממוט מעוגן באחיזה נוחה ולארגן שכמות.",
      "למשוך חזה לכיוון המוט עם פתיחת בית החזה וקשת מבוקרת.",
      "לרדת לאט בלי בעיטה ובלי כפיית קשת בגב התחתון."
    ],
    "mistakes": [
      "בלבול בין פתיחת בית החזה לתנופה מהאגן."
    ],
    "easy": "לבצע מתח רגיל בטווח נשלט.",
    "regressions": [
      "pull"
    ],
    "progressions": [],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "muscleGroups": [
      "back",
      "arms"
    ],
    "media": [],
    "source_ids": [],
    "sourceIds": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "user-supplied-name; original-editorial-instructions; exact-technique-not-verified",
    "sourceNote": "Catalogue addition from user-supplied transcriptions in sources/001–009; original images unavailable. Technique and variation require review.",
    "poseTemplate": "pull"
  },
  {
    "id": "archer-pull",
    "he": "מתח ארצ׳ר",
    "en": "Archer pull-up",
    "group": "pull",
    "equipment": [
      "bar"
    ],
    "level": 4,
    "movementPattern": "vertical_pull",
    "muscles": [
      "גב",
      "יד קדמית",
      "אחיזה"
    ],
    "apparatus": "bar",
    "cue": "למשוך את הגוף לכיוון יד אחת כשהיד השנייה מתארכת לצד.",
    "instructions": [
      "לאחוז במוט מעוגן באחיזה רחבה נוחה.",
      "למשוך את הגוף לכיוון יד אחת כשהיד השנייה מתארכת לצד.",
      "לרדת בשליטה ולתרגל לשני הצדדים."
    ],
    "mistakes": [
      "סיבוב חד של הגו ומשיכה בתנופה."
    ],
    "easy": "לכופף יותר את היד המסייעת.",
    "regressions": [
      "pull"
    ],
    "progressions": [],
    "unit": "reps",
    "perSide": true,
    "advancedOnly": true,
    "muscleGroups": [
      "back",
      "arms"
    ],
    "media": [],
    "source_ids": [],
    "sourceIds": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "user-supplied-name; original-editorial-instructions; exact-technique-not-verified",
    "sourceNote": "Catalogue addition from user-supplied transcriptions in sources/001–009; original images unavailable. Technique and variation require review.",
    "poseTemplate": "pull"
  },
  {
    "id": "one-arm-band-pull",
    "he": "מתח ביד אחת עם גומייה",
    "en": "Band-assisted one-arm pull-up",
    "group": "pull",
    "equipment": [
      "bar",
      "band"
    ],
    "level": 5,
    "movementPattern": "vertical_pull",
    "muscles": [
      "גב",
      "יד קדמית",
      "אחיזה"
    ],
    "apparatus": "bar",
    "cue": "לאחוז במוט ביד אחת ולמשוך בסיוע הגומייה בלי לסובב את הגוף.",
    "instructions": [
      "בהדרכה: לבדוק גומייה ועיגון למוט, ולתרגל כניסה ויציאה בטוחות.",
      "לאחוז במוט ביד אחת ולמשוך בסיוע הגומייה בלי לסובב את הגוף.",
      "לרדת בשליטה; לתעד צד, חוזק גומייה ואופן הסיוע."
    ],
    "mistakes": [
      "סיוע משתנה או תנופה שמסתירים את העומס ביד העובדת."
    ],
    "easy": "להגדיל סיוע או לחזור למתח בשתי ידיים.",
    "regressions": [
      "pull"
    ],
    "progressions": [],
    "unit": "reps",
    "perSide": true,
    "advancedOnly": true,
    "muscleGroups": [
      "back",
      "arms"
    ],
    "media": [],
    "source_ids": [],
    "sourceIds": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "user-supplied-name; original-editorial-instructions; exact-technique-not-verified",
    "sourceNote": "Catalogue addition from user-supplied transcriptions in sources/001–009; original images unavailable. Technique and variation require review.",
    "poseTemplate": "pull"
  },
  {
    "id": "one-arm-pull-negative",
    "he": "ירידה ממתח ביד אחת",
    "en": "One-arm pull-up negative",
    "group": "pull",
    "equipment": [
      "bar",
      "box"
    ],
    "level": 5,
    "movementPattern": "vertical_pull",
    "muscles": [
      "גב",
      "יד קדמית",
      "אחיזה"
    ],
    "apparatus": "bar",
    "cue": "להעביר משקל ליד אחת ולרדת לאט רק בטווח שנשלט.",
    "instructions": [
      "בהדרכה: להגיע למנח עליון בעזרת במה מעוגנת ואחיזה בשתי ידיים.",
      "להעביר משקל ליד אחת ולרדת לאט רק בטווח שנשלט.",
      "להחזיר תמיכה ברגליים לפני אובדן שליטה; לתרגל לשני הצדדים."
    ],
    "mistakes": [
      "שחרור פתאומי של היד המסייעת ונפילה בתלייה."
    ],
    "easy": "להשאיר יד שנייה מסייעת לאורך הירידה.",
    "regressions": [
      "pull-negative"
    ],
    "progressions": [],
    "unit": "reps",
    "perSide": true,
    "advancedOnly": true,
    "muscleGroups": [
      "back",
      "arms"
    ],
    "media": [],
    "source_ids": [],
    "sourceIds": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "user-supplied-name; original-editorial-instructions; exact-technique-not-verified",
    "sourceNote": "Catalogue addition from user-supplied transcriptions in sources/001–009; original images unavailable. Technique and variation require review.",
    "poseTemplate": "pull"
  },
  {
    "id": "hanging-leg-raise",
    "he": "הרמות רגליים בתלייה",
    "en": "Hanging leg raise",
    "group": "core",
    "equipment": [
      "bar"
    ],
    "level": 3,
    "movementPattern": "compression",
    "muscles": [
      "ליבה",
      "מכופפי ירך",
      "אחיזה"
    ],
    "apparatus": "bar",
    "cue": "להרים רגליים ארוכות קדימה עד הטווח שבשליטה.",
    "instructions": [
      "להיתלות ממוט מעוגן עם אחיזה יציבה וכתפיים פעילות.",
      "להרים רגליים ארוכות קדימה עד הטווח שבשליטה.",
      "להוריד לאט בלי תנופה; לכופף מעט ברכיים לפי הצורך."
    ],
    "mistakes": [
      "נדנוד הגוף כדי להרים רגליים."
    ],
    "easy": "לבצע הרמות ברכיים בתלייה.",
    "regressions": [
      "hanging-knee"
    ],
    "progressions": [],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "muscleGroups": [
      "core"
    ],
    "media": [],
    "source_ids": [],
    "sourceIds": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "user-supplied-name; original-editorial-instructions; exact-technique-not-verified",
    "sourceNote": "Catalogue addition from user-supplied transcriptions in sources/001–009; original images unavailable. Technique and variation require review.",
    "poseTemplate": "kneehang"
  },
  {
    "id": "bar-triceps-extension",
    "he": "פשיטת מרפקים על מוט",
    "en": "Bar triceps extension",
    "group": "push",
    "equipment": [
      "lowbar"
    ],
    "level": 3,
    "movementPattern": "horizontal_push",
    "muscles": [
      "יד אחורית",
      "ליבה",
      "כתפיים"
    ],
    "apparatus": "bar",
    "cue": "לכופף מרפקים ולהקריב מצח לכיוון המוט בלי מגע בראש.",
    "instructions": [
      "לאחוז במוט נמוך מעוגן ולצעוד לאחור לקו גוף ארוך.",
      "לכופף מרפקים ולהקריב מצח לכיוון המוט בלי מגע בראש.",
      "ליישר מרפקים ולדחוק חזרה תוך שמירת זרועות יציבות."
    ],
    "mistakes": [
      "כפיפה בירכיים במקום תנועה במרפקים."
    ],
    "easy": "לעמוד זקוף יותר ולהפחית עומס מהידיים.",
    "regressions": [
      "incline-push"
    ],
    "progressions": [],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "muscleGroups": [
      "chest",
      "shoulders",
      "arms"
    ],
    "media": [],
    "source_ids": [],
    "sourceIds": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "user-supplied-name; original-editorial-instructions; exact-technique-not-verified",
    "sourceNote": "Catalogue addition from user-supplied transcriptions in sources/001–009; original images unavailable. Technique and variation require review.",
    "poseTemplate": "incline"
  },
  {
    "id": "ring-neutral-dip",
    "he": "מקבילים באחיזה ניטרלית על טבעות",
    "en": "Ring neutral-grip dip",
    "group": "push",
    "equipment": [
      "rings"
    ],
    "level": 4,
    "movementPattern": "vertical_push",
    "muscles": [
      "חזה",
      "יד אחורית",
      "מייצבי כתפיים"
    ],
    "apparatus": "rings",
    "cue": "לכופף מרפקים ולרדת בטווח נוח כשהטבעות סמוכות לגוף.",
    "instructions": [
      "בהדרכה: לבדוק עיגון טבעות ורצועות ולעלות לתמיכה יציבה, כפות ידיים זו מול זו.",
      "לכופף מרפקים ולרדת בטווח נוח כשהטבעות סמוכות לגוף.",
      "לדחוק חזרה בלי לפזר טבעות לצדדים; לתרגל יציאה מראש."
    ],
    "mistakes": [
      "איבוד יציבות בטבעות בתחתית."
    ],
    "easy": "להנמיך טבעות ולהוסיף תמיכת רגליים.",
    "regressions": [
      "dip"
    ],
    "progressions": [],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "muscleGroups": [
      "chest",
      "shoulders",
      "arms"
    ],
    "media": [],
    "source_ids": [],
    "sourceIds": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "user-supplied-name; original-editorial-instructions; exact-technique-not-verified",
    "sourceNote": "Catalogue addition from user-supplied transcriptions in sources/001–009; original images unavailable. Technique and variation require review.",
    "poseTemplate": "dip"
  },
  {
    "id": "ring-chin",
    "he": "מתח באחיזה הפוכה על טבעות",
    "en": "Ring chin-up",
    "group": "pull",
    "equipment": [
      "rings"
    ],
    "level": 3,
    "movementPattern": "vertical_pull",
    "muscles": [
      "גב",
      "יד קדמית",
      "אחיזה",
      "מייצבי כתפיים"
    ],
    "apparatus": "rings",
    "cue": "למשוך כלפי מעלה בלי בעיטה ובסיבוב נוח של הטבעות.",
    "instructions": [
      "לבדוק עיגון טבעות ורצועות ולאחוז כשכפות הידיים פונות לגוף.",
      "למשוך כלפי מעלה בלי בעיטה ובסיבוב נוח של הטבעות.",
      "לרדת בשליטה ולשמור אחיזה לאורך התנועה."
    ],
    "mistakes": [
      "משיכה בתנופה ואיבוד שליטה ברצועות."
    ],
    "easy": "להנמיך טבעות ולהוסיף תמיכת רגליים.",
    "regressions": [
      "chin"
    ],
    "progressions": [],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "muscleGroups": [
      "back",
      "arms"
    ],
    "media": [],
    "source_ids": [],
    "sourceIds": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "user-supplied-name; original-editorial-instructions; exact-technique-not-verified",
    "sourceNote": "Catalogue addition from user-supplied transcriptions in sources/001–009; original images unavailable. Technique and variation require review.",
    "poseTemplate": "pull"
  },
  {
    "id": "ring-russian-push",
    "he": "שכיבות סמיכה רוסיות על טבעות",
    "en": "Ring Russian push-up",
    "group": "push",
    "equipment": [
      "rings"
    ],
    "level": 5,
    "movementPattern": "horizontal_push",
    "muscles": [
      "חזה",
      "יד אחורית",
      "כתפיים",
      "ליבה"
    ],
    "apparatus": "rings",
    "cue": "לרדת משכיבת סמיכה למעבר מבוקר של תמיכה לאמות בטבעות.",
    "instructions": [
      "בהדרכה בלבד: לבדוק עיגון וטבעות נמוכות ולתרגל מעבר ויציאה עם תמיכת רגליים.",
      "לרדת משכיבת סמיכה למעבר מבוקר של תמיכה לאמות בטבעות.",
      "להחזיר משקל לכפות הידיים ולדחוק; אין ליפול על המרפקים."
    ],
    "mistakes": [
      "מעבר מהיר לאמות בלי שליטה בטבעות."
    ],
    "easy": "לתרגל מעבר נתמך עם רוב המשקל ברגליים.",
    "regressions": [
      "push"
    ],
    "progressions": [],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "muscleGroups": [
      "chest",
      "shoulders",
      "arms"
    ],
    "media": [],
    "source_ids": [],
    "sourceIds": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "user-supplied-name; original-editorial-instructions; exact-technique-not-verified",
    "sourceNote": "Catalogue addition from user-supplied transcriptions in sources/001–009; original images unavailable. Technique and variation require review.",
    "poseTemplate": "pushTop"
  },
  {
    "id": "ring-biceps-curl",
    "he": "כפיפות מרפקים על טבעות",
    "en": "Ring biceps curl",
    "group": "pull",
    "equipment": [
      "rings"
    ],
    "level": 3,
    "movementPattern": "horizontal_pull",
    "muscles": [
      "יד קדמית",
      "גב",
      "ליבה"
    ],
    "apparatus": "rings",
    "cue": "לכופף מרפקים ולקרב את כפות הידיים למצח כשהזרועות יציבות.",
    "instructions": [
      "לבדוק עיגון טבעות, לאחוז בכפות ידיים לכיוון הפנים ולהישען לאחור עם רגליים בקרקע.",
      "לכופף מרפקים ולקרב את כפות הידיים למצח כשהזרועות יציבות.",
      "ליישר מרפקים בשליטה ולשמור קו גוף ארוך."
    ],
    "mistakes": [
      "הורדת מרפקים והפיכת התנועה לחתירה."
    ],
    "easy": "לעמוד זקוף יותר ולהפחית את זווית ההישענות.",
    "regressions": [
      "ring-row"
    ],
    "progressions": [],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "muscleGroups": [
      "back",
      "arms"
    ],
    "media": [],
    "source_ids": [],
    "sourceIds": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "user-supplied-name; original-editorial-instructions; exact-technique-not-verified",
    "sourceNote": "Catalogue addition from user-supplied transcriptions in sources/001–009; original images unavailable. Technique and variation require review.",
    "poseTemplate": "row"
  },
  {
    "id": "ring-skull-crusher",
    "he": "פשיטת מרפקים על טבעות",
    "en": "Ring skull crusher",
    "group": "push",
    "equipment": [
      "rings"
    ],
    "level": 4,
    "movementPattern": "horizontal_push",
    "muscles": [
      "יד אחורית",
      "ליבה",
      "מייצבי כתפיים"
    ],
    "apparatus": "rings",
    "cue": "לכופף מרפקים ולהעביר ראש בין כפות הידיים בלי מגע בטבעות.",
    "instructions": [
      "לבדוק עיגון טבעות ולהתחיל בתמיכה משופעת עם רגליים בקרקע.",
      "לכופף מרפקים ולהעביר ראש בין כפות הידיים בלי מגע בטבעות.",
      "ליישר מרפקים ולדחוק חזרה תוך שמירת זרועות יציבות."
    ],
    "mistakes": [
      "היפרדות טבעות לצדדים או נפילה קדימה."
    ],
    "easy": "לעמוד זקוף יותר ולהקטין טווח.",
    "regressions": [
      "bar-triceps-extension"
    ],
    "progressions": [],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "muscleGroups": [
      "chest",
      "shoulders",
      "arms"
    ],
    "media": [],
    "source_ids": [],
    "sourceIds": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "user-supplied-name; original-editorial-instructions; exact-technique-not-verified",
    "sourceNote": "Catalogue addition from user-supplied transcriptions in sources/001–009; original images unavailable. Technique and variation require review.",
    "poseTemplate": "incline"
  },
  {
    "id": "planche-slide-push",
    "he": "החלקות בהטיית פלאנץ׳ עם שכיבת סמיכה",
    "en": "Lean planche slides + push-up",
    "group": "push",
    "equipment": [],
    "level": 4,
    "movementPattern": "horizontal_push",
    "muscles": [
      "כתף קדמית",
      "חזה",
      "יד אחורית",
      "ליבה"
    ],
    "apparatus": "floor",
    "cue": "להחליק מעט להטיית כתפיים קדימה ולשלב שכיבת סמיכה בטווח נשלט.",
    "instructions": [
      "בהדרכה: להתחיל בתמיכת ידיים ולבדוק משטח שמאפשר החלקת רגליים נשלטת.",
      "להחליק מעט להטיית כתפיים קדימה ולשלב שכיבת סמיכה בטווח נשלט.",
      "לחזור לתמיכה יציבה; לתעד רצף וספירת חזרה עם המאמן."
    ],
    "mistakes": [
      "החלקה רחוקה מדי וקריסה בכתפיים."
    ],
    "easy": "להקטין החלקה ולתרגל שכיבת סמיכה בנפרד.",
    "regressions": [
      "pseudo-planche-push"
    ],
    "progressions": [],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "muscleGroups": [
      "chest",
      "shoulders",
      "arms"
    ],
    "media": [],
    "source_ids": [],
    "sourceIds": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "user-supplied-name; original-editorial-instructions; exact-technique-not-verified",
    "sourceNote": "Sources 005/006: name only, exact technique not verified. Combined sequence and repetition counting were not specified; confirm with coach.",
    "poseTemplate": "pushTop"
  },
  {
    "id": "push-up-90-hold",
    "he": "החזקת שכיבת סמיכה ב־90 מעלות",
    "en": "90-degree push-up hold",
    "group": "push",
    "equipment": [],
    "level": 4,
    "movementPattern": "horizontal_push",
    "muscles": [
      "חזה",
      "יד אחורית",
      "כתף קדמית",
      "ליבה"
    ],
    "apparatus": "floor",
    "cue": "לכופף מרפקים לכ־90 מעלות ולהחזיק בלי שקיעת אגן.",
    "instructions": [
      "להתחיל בתמיכת ידיים ורגליים ברצפה, גוף בקו ארוך.",
      "לכופף מרפקים לכ־90 מעלות ולהחזיק בלי שקיעת אגן.",
      "לנשום ולצאת בשליטה לפני קריסה; אין להניח ראש על הקרקע."
    ],
    "mistakes": [
      "החזקת נשימה או שקיעת כתפיים בתחתית."
    ],
    "easy": "להניח ברכיים ברצפה או להקטין עומק.",
    "regressions": [
      "push"
    ],
    "progressions": [],
    "unit": "seconds",
    "perSide": false,
    "advancedOnly": true,
    "muscleGroups": [
      "chest",
      "shoulders",
      "arms"
    ],
    "media": [],
    "source_ids": [],
    "sourceIds": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "user-supplied-name; original-editorial-instructions; exact-technique-not-verified",
    "sourceNote": "Sources 005/006: name only, exact technique not verified. Push-up hold interpreted with feet supported on floor; an airborne bent-arm planche is not established by the source. Confirm with coach.",
    "poseTemplate": "pushBottom"
  },
  {
    "id": "ring-push",
    "he": "שכיבות סמיכה על טבעות",
    "en": "Ring push-up",
    "group": "push",
    "equipment": ["rings"],
    "level": 3,
    "movementPattern": "horizontal_push",
    "muscles": ["חזה", "יד אחורית", "כתפיים", "ליבה"],
    "apparatus": "rings",
    "cue": "לייצב את הטבעות צמוד לגוף, לרדת עד שהידיים ליד בית החזה ולדחוק בלי לתת לטבעות להתרחק.",
    "instructions": [
      "לבדוק עיגון ולתלות טבעות נמוכות, כמה סנטימטרים מעל הרצפה; גוף ישר ממנח שכיבת סמיכה.",
      "לייצב את הטבעות צמוד לגוף, לרדת עד שהידיים ליד בית החזה ולדחוק בלי לתת לטבעות להתרחק.",
      "בסוף הדחיקה לסובב קלות את הטבעות החוצה ולשמור על אגן וצלעות במקום."
    ],
    "mistakes": [
      "טבעות שנפתחות לצדדים בירידה ואיבוד שליטה בכתפיים."
    ],
    "easy": "להגביה את הטבעות לזווית משופעת או לבצע על הברכיים.",
    "regressions": ["push"],
    "progressions": ["ring-russian-push"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "muscleGroups": ["chest", "shoulders", "arms"],
    "media": [],
    "source_ids": [],
    "sourceIds": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "user-supplied-name; original-editorial-instructions; exact-technique-not-verified",
    "sourceNote": "Catalogue addition from user-supplied board photo in sources/010. Technique and ring height require review.",
    "poseTemplate": "pushTop"
  },
  {
    "id": "lsit-pull",
    "he": "מתח בישיבת אל",
    "en": "L-sit pull-up",
    "parent": "pull",
    "group": "pull",
    "equipment": ["bar"],
    "level": 4,
    "movementPattern": "vertical_pull",
    "muscles": ["גב", "יד קדמית", "אחיזה", "ליבה"],
    "apparatus": "bar",
    "cue": "לאחוז במוט באחיזה רגילה ולהחזיק רגליים ישרות קדימה; לבצע מתח בלי להוריד את הרגליים ובלי תנופה.",
    "instructions": [
      "לתלות באחיזה רגילה ברוחב כתפיים ולהרים רגליים ישרות לגובה האגן.",
      "לאחוז במוט באחיזה רגילה ולהחזיק רגליים ישרות קדימה; לבצע מתח בלי להוריד את הרגליים ובלי תנופה.",
      "לרדת בשליטה ולשמור על הרגליים למעלה עד סוף החזרה."
    ],
    "mistakes": [
      "רגליים שיורדות במהלך המשיכה ובעיטה כדי לעלות."
    ],
    "easy": "לכופף ברכיים לישיבה מקופלת או לבצע מתח רגיל.",
    "regressions": ["pull"],
    "progressions": [],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "muscleGroups": ["back", "arms"],
    "media": [],
    "source_ids": [],
    "sourceIds": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "user-supplied-name; original-editorial-instructions; exact-technique-not-verified",
    "sourceNote": "Catalogue addition from user-supplied board photo in sources/010. Grip assumed pronated; technique requires review.",
    "poseTemplate": "pull"
  },
  {
    "id": "one-arm-row",
    "he": "חתירה אוסטרלית ביד אחת",
    "en": "One-arm Australian row",
    "parent": "row",
    "group": "pull",
    "equipment": ["lowbar"],
    "level": 4,
    "movementPattern": "horizontal_pull",
    "muscles": ["גב", "יד קדמית", "אחיזה", "ליבה"],
    "apparatus": "lowbar",
    "cue": "לאחוז במוט נמוך ביד אחת, גוף ישר ורגליים פסוקות; למשוך את החזה למוט בלי לסובב את האגן.",
    "instructions": [
      "לבחור מוט נמוך יציב ולהתמקם מתחתיו עם רגליים פסוקות לבסיס רחב.",
      "לאחוז במוט נמוך ביד אחת, גוף ישר ורגליים פסוקות; למשוך את החזה למוט בלי לסובב את האגן.",
      "לרדת בשליטה, להשלים את החזרות ולעבור לצד השני באותו מספר."
    ],
    "mistakes": [
      "סיבוב הגוף כדי להגיע למוט במקום משיכה בגב."
    ],
    "easy": "להגביה את המוט או לקרב את הרגליים כדי שהגוף יהיה זקוף יותר.",
    "regressions": ["row"],
    "progressions": [],
    "unit": "reps",
    "perSide": true,
    "advancedOnly": true,
    "muscleGroups": ["back", "arms"],
    "media": [],
    "source_ids": [],
    "sourceIds": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "user-supplied-name; original-editorial-instructions; exact-technique-not-verified",
    "sourceNote": "Catalogue addition from user-supplied board photo in sources/010. 'OA' read as one-arm; technique requires review.",
    "poseTemplate": "incline"
  }
];
// Authored assistance, leverage and range gaps for variation families (Job 1).
// No inherited media or review claims: every new variation awaits its own review.
const variationGapSpecs = [
  {
    "id": "deficit-push",
    "he": "שכיבות סמיכה בטווח מוגדל",
    "en": "Deficit push-up",
    "parent": "push",
    "group": "push",
    "equipment": ["parallettes"],
    "level": 3,
    "movementPattern": "horizontal_push",
    "movementSubtype": "horizontal_push",
    "muscles": ["חזה", "כתפיים", "יד אחורית"],
    "muscleGroups": ["chest", "shoulders", "arms"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "parallettes",
    "cue": "להניח ידיים על מקבילונים מעוגנים ורגליים בקרקע; לכופף וליישר מרפקים כשהחזה יורד מעט מתחת לגובה הידיים בטווח כתף נוח.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["shoulder_support", "elbow_extensors", "wrists"]
  },
  {
    "id": "incline-wide-push",
    "he": "שכיבות סמיכה רחבות בשיפוע",
    "en": "Incline wide push-up",
    "parent": "wide-push",
    "group": "push",
    "equipment": ["lowbar"],
    "level": 1,
    "movementPattern": "horizontal_push",
    "movementSubtype": "horizontal_push",
    "muscles": ["חזה", "כתפיים", "יד אחורית"],
    "muscleGroups": ["chest", "shoulders", "arms"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "lowbar",
    "poseTemplate": "incline",
    "cue": "להניח ידיים באחיזה רחבה נוחה על מוט נמוך מעוגן; להוריד חזה בין הידיים ולדחוק חזרה.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["shoulder_support", "elbow_extensors", "wrists"]
  },
  {
    "id": "deficit-wide-push",
    "he": "שכיבות סמיכה רחבות בטווח מוגדל",
    "en": "Deficit wide push-up",
    "parent": "wide-push",
    "group": "push",
    "equipment": ["parallettes"],
    "level": 3,
    "movementPattern": "horizontal_push",
    "movementSubtype": "horizontal_push",
    "muscles": ["חזה", "כתפיים", "יד אחורית"],
    "muscleGroups": ["chest", "shoulders", "arms"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "parallettes",
    "poseTemplate": "pushTop",
    "cue": "להניח ידיים רחבות על מקבילונים מעוגנים; להוריד חזה מעט מתחת לידיים בטווח נוח ולדחוק ללא שקיעת אגן.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["shoulder_support", "elbow_extensors", "wrists"]
  },
  {
    "id": "incline-close-push",
    "he": "שכיבות סמיכה צרות בשיפוע",
    "en": "Incline close-grip push-up",
    "parent": "close-push",
    "group": "push",
    "equipment": ["lowbar"],
    "level": 2,
    "movementPattern": "horizontal_push",
    "movementSubtype": "horizontal_push",
    "muscles": ["יד אחורית", "חזה", "כתפיים"],
    "muscleGroups": ["chest", "shoulders", "arms"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "lowbar",
    "cue": "לאחוז צר במוט נמוך מעוגן; לכופף מרפקים סמוך לגוף ולהוריד חזה למוט.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["shoulder_support", "elbow_extensors", "wrists"],
    "poseTemplate": "incline"
  },
  {
    "id": "incline-archer-push",
    "he": "שכיבת סמיכה קשת בשיפוע",
    "en": "Incline archer push-up",
    "parent": "archer-push",
    "group": "push",
    "equipment": ["lowbar"],
    "level": 2,
    "movementPattern": "horizontal_push",
    "movementSubtype": "horizontal_push",
    "muscles": ["חזה", "כתפיים", "יד אחורית"],
    "muscleGroups": ["chest", "shoulders", "arms"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "lowbar",
    "poseTemplate": "incline",
    "cue": "להניח ידיים רחבות על מוט נמוך מעוגן; לכופף מרפק אחד ולהאריך את היד המסייעת לצד, לסירוגין.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["shoulder_support", "elbow_extensors", "wrists"]
  },
  {
    "id": "assisted-one-arm-push",
    "he": "שכיבת סמיכה ביד אחת בסיוע יד",
    "en": "Hand-assisted one-arm push-up",
    "parent": "archer-push",
    "group": "push",
    "equipment": ["box"],
    "level": 4,
    "movementPattern": "horizontal_push",
    "movementSubtype": "horizontal_push",
    "muscles": ["חזה", "כתפיים", "יד אחורית"],
    "muscleGroups": ["chest", "shoulders", "arms"],
    "unit": "reps",
    "perSide": true,
    "advancedOnly": true,
    "apparatus": "box",
    "poseTemplate": "push",
    "cue": "להניח את היד המסייעת על קופסה מעוגנת בצד; לבצע שכיבת סמיכה בעיקר ביד העובדת ולתעד את הסיוע.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["shoulder_support", "elbow_extensors", "wrists"]
  },
  {
    "id": "incline-one-arm-push",
    "he": "שכיבת סמיכה ביד אחת בשיפוע",
    "en": "Incline one-arm push-up",
    "parent": "archer-push",
    "group": "push",
    "equipment": ["lowbar"],
    "level": 4,
    "movementPattern": "horizontal_push",
    "movementSubtype": "horizontal_push",
    "muscles": ["חזה", "כתפיים", "יד אחורית"],
    "muscleGroups": ["chest", "shoulders", "arms"],
    "unit": "reps",
    "perSide": true,
    "advancedOnly": true,
    "apparatus": "lowbar",
    "poseTemplate": "incline",
    "cue": "להניח יד עובדת אחת על מוט נמוך מעוגן, לפסק רגליים ולבצע שכיבת סמיכה ללא סיבוב גו.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["shoulder_support", "elbow_extensors", "wrists"]
  },
  {
    "id": "one-arm-push",
    "he": "שכיבת סמיכה ביד אחת",
    "en": "One-arm push-up",
    "parent": "archer-push",
    "group": "push",
    "equipment": [],
    "level": 5,
    "movementPattern": "horizontal_push",
    "movementSubtype": "horizontal_push",
    "muscles": ["חזה", "כתפיים", "יד אחורית"],
    "muscleGroups": ["chest", "shoulders", "arms"],
    "unit": "reps",
    "perSide": true,
    "advancedOnly": true,
    "apparatus": "floor",
    "poseTemplate": "push",
    "cue": "להניח יד אחת ברצפה ולפסק רגליים; לכופף וליישר מרפק בלי לסובב אגן, ולתרגל לשני הצדדים.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["shoulder_support", "elbow_extensors", "wrists"]
  },
  {
    "id": "knee-pseudo-planche-push",
    "he": "שכיבת סמיכה בהטיה על ברכיים",
    "en": "Kneeling pseudo planche push-up",
    "parent": "pseudo-planche-push",
    "group": "push",
    "equipment": [],
    "level": 2,
    "movementPattern": "horizontal_push",
    "movementSubtype": "horizontal_push",
    "muscles": ["חזה", "כתף קדמית", "יד אחורית"],
    "muscleGroups": ["chest", "shoulders", "arms"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "floor",
    "poseTemplate": "push",
    "cue": "להניח ברכיים ברצפה, להטות כתפיים מעט קדימה ולכופף וליישר מרפקים תוך שמירת קו עד הברכיים.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["shoulder_support", "elbow_extensors", "wrists"]
  },
  {
    "id": "deep-lean-pseudo-planche-push",
    "he": "שכיבת סמיכה בהטיה מוגברת",
    "en": "Forward-lean pseudo planche push-up",
    "parent": "pseudo-planche-push",
    "group": "push",
    "equipment": [],
    "level": 4,
    "movementPattern": "horizontal_push",
    "movementSubtype": "horizontal_push",
    "muscles": ["חזה", "כתף קדמית", "יד אחורית"],
    "muscleGroups": ["chest", "shoulders", "arms"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "floor",
    "poseTemplate": "push",
    "cue": "לבצע שכיבת סמיכה ברגליים בקרקע עם כתפיים מעט רחוקות יותר לפני כפות הידיים; לקבוע את ההטיה עם מאמן.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["shoulder_support", "elbow_extensors", "wrists"]
  },
  {
    "id": "incline-explosive-push",
    "he": "שכיבות סמיכה מתפרצות בשיפוע",
    "en": "Incline explosive push-up",
    "parent": "explosive-push",
    "group": "push",
    "equipment": ["lowbar"],
    "level": 3,
    "movementPattern": "horizontal_push",
    "movementSubtype": "horizontal_push",
    "muscles": ["חזה", "יד אחורית", "כתפיים"],
    "muscleGroups": ["chest", "shoulders", "arms"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "lowbar",
    "poseTemplate": "incline",
    "cue": "להניח ידיים על מוט נמוך מעוגן; לדחוק מהר עד ניתוק קל ולחזור לאחיזה רכה, בלי לזרוק את הגוף.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["shoulder_support", "elbow_extensors", "wrists"]
  },
  {
    "id": "decline-explosive-push",
    "he": "שכיבות סמיכה מתפרצות ברגליים מוגבהות",
    "en": "Decline explosive push-up",
    "parent": "explosive-push",
    "group": "push",
    "equipment": ["box"],
    "level": 4,
    "movementPattern": "horizontal_push",
    "movementSubtype": "horizontal_push",
    "muscles": ["חזה", "יד אחורית", "כתפיים"],
    "muscleGroups": ["chest", "shoulders", "arms"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "box",
    "poseTemplate": "pushTop",
    "cue": "להניח רגליים על קופסה מעוגנת; לדחוק מהר לניתוק קל של הידיים ולנחות ברכות באותו מנח.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["shoulder_support", "elbow_extensors", "wrists"]
  },
  {
    "id": "band-assisted-dip",
    "he": "מקבילים בסיוע גומייה",
    "en": "Band-assisted dip",
    "parent": "dip",
    "group": "push",
    "equipment": ["parallel", "band"],
    "level": 2,
    "movementPattern": "vertical_push",
    "movementSubtype": "downward_support_press",
    "muscles": ["יד אחורית", "חזה", "כתפיים"],
    "muscleGroups": ["chest", "shoulders", "arms"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "parallel",
    "cue": "לבדוק גומייה ועיגון למקבילים; לכופף וליישר מרפקים בטווח כתף נוח כשהגומייה נושאת חלק מהעומס.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["shoulder_support", "elbow_extensors", "wrists", "shoulder_extension"]
  },
  {
    "id": "short-bench-dip",
    "he": "דחיקת ספסל בטווח קצר",
    "en": "Short-range bench dip",
    "parent": "bench-dip",
    "group": "push",
    "equipment": ["bench"],
    "level": 1,
    "movementPattern": "vertical_push",
    "movementSubtype": "vertical_push",
    "muscles": ["יד אחורית", "כתפיים", "חזה"],
    "muscleGroups": ["chest", "shoulders", "arms"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "floor",
    "poseTemplate": "dip",
    "cue": "להניח ידיים על ספסל מעוגן מאחורי האגן וברכיים כפופות; לבצע כיפוף מרפקים קטן בלבד ולדחוק חזרה.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["shoulder_support", "elbow_extensors", "wrists"]
  },
  {
    "id": "long-leg-bench-dip",
    "he": "דחיקת ספסל ברגליים ארוכות",
    "en": "Straight-leg bench dip",
    "parent": "bench-dip",
    "group": "push",
    "equipment": ["bench"],
    "level": 3,
    "movementPattern": "vertical_push",
    "movementSubtype": "vertical_push",
    "muscles": ["יד אחורית", "כתפיים", "חזה"],
    "muscleGroups": ["chest", "shoulders", "arms"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "floor",
    "poseTemplate": "dip",
    "cue": "להניח ידיים על ספסל מעוגן ועקבים בקרקע עם ברכיים פחות כפופות; לדחוק בטווח כתף קטן ונוח.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["shoulder_support", "elbow_extensors", "wrists"]
  },
  {
    "id": "band-jump-dip",
    "he": "מקבילים בקפיצה ובסיוע גומייה",
    "en": "Band-assisted jumping dip",
    "parent": "jump-dip",
    "group": "push",
    "equipment": ["parallel", "band"],
    "level": 2,
    "movementPattern": "vertical_push",
    "movementSubtype": "vertical_push",
    "muscles": ["יד אחורית", "חזה", "כתפיים"],
    "muscleGroups": ["chest", "shoulders", "arms"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "parallel",
    "poseTemplate": "dip",
    "cue": "לבדוק גומייה ומקבילים נמוכים; להוסיף קפיצה קלה מהרגליים לדחיקה ולנחות בחזרה בשליטה.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["shoulder_support", "elbow_extensors", "wrists"]
  },
  {
    "id": "low-assist-jump-dip",
    "he": "מקבילים בסיוע קפיצה קטנה",
    "en": "Low-assistance jumping dip",
    "parent": "jump-dip",
    "group": "push",
    "equipment": ["parallel"],
    "level": 3,
    "movementPattern": "vertical_push",
    "movementSubtype": "vertical_push",
    "muscles": ["יד אחורית", "חזה", "כתפיים"],
    "muscleGroups": ["chest", "shoulders", "arms"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "parallel",
    "poseTemplate": "dip",
    "cue": "במקבילים נמוכים לבצע אותה דחיקה עם קפיצה קטנה יותר; לסיים עם הרגליים בקרקע, בלי להפוך לירידה חופשית.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["shoulder_support", "elbow_extensors", "wrists"]
  },
  {
    "id": "feet-assisted-ring-dip",
    "he": "מקבילים בטבעות בסיוע רגליים",
    "en": "Feet-assisted ring dip",
    "parent": "ring-neutral-dip",
    "group": "push",
    "equipment": ["rings"],
    "level": 3,
    "movementPattern": "vertical_push",
    "movementSubtype": "vertical_push",
    "muscles": ["חזה", "יד אחורית", "מייצבי כתפיים"],
    "muscleGroups": ["chest", "shoulders", "arms"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "rings",
    "poseTemplate": "dip",
    "cue": "לעגן טבעות נמוכות ולשמור רגליים נושאות משקל בקרקע; לכופף וליישר מרפקים כשהטבעות צמודות לגוף.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["shoulder_support", "elbow_extensors", "wrists"]
  },
  {
    "id": "band-tuck-planche",
    "he": "פלאנץ׳ מכונס בסיוע גומייה",
    "en": "Band-assisted tuck planche",
    "parent": "tuck-planche",
    "group": "push",
    "equipment": ["bar", "band"],
    "level": 4,
    "movementPattern": "support",
    "movementSubtype": "support",
    "muscles": ["כתף קדמית", "מסור קדמי", "ליבה"],
    "muscleGroups": ["chest", "shoulders", "arms"],
    "unit": "seconds",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "bar",
    "poseTemplate": "tuckPlanche",
    "cue": "לעגן גומייה מדורגת למוט מעל האגן; להחזיק ברכיים אסופות ומרפקים ישרים כשהגומייה מסייעת לאגן.",
    "novelEccentric": false,
    "demandingStraightArm": true,
    "loadingTags": ["shoulder_support", "elbow_extensors", "wrists"]
  },
  {
    "id": "toe-assisted-frog",
    "he": "עמידת צפרדע בסיוע בהונות",
    "en": "Toe-assisted frog stand",
    "parent": "frog-stand",
    "group": "push",
    "equipment": [],
    "level": 2,
    "movementPattern": "support",
    "movementSubtype": "support",
    "muscles": ["כתפיים", "ליבה", "מסור קדמי"],
    "muscleGroups": ["chest", "shoulders", "arms"],
    "unit": "seconds",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "floor",
    "poseTemplate": "frog",
    "cue": "להניח ברכיים על הזרועות הכפופות; להשאיר בהונות בקרקע ולדחוק בידיים בלי להעביר עומס לראש.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["shoulder_support", "elbow_extensors", "wrists"]
  },
  {
    "id": "forward-frog",
    "he": "עמידת צפרדע בהטיה קדימה",
    "en": "Forward-lean frog stand",
    "parent": "frog-stand",
    "group": "push",
    "equipment": [],
    "level": 4,
    "movementPattern": "support",
    "movementSubtype": "support",
    "muscles": ["כתפיים", "ליבה", "מסור קדמי"],
    "muscleGroups": ["chest", "shoulders", "arms"],
    "unit": "seconds",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "floor",
    "poseTemplate": "frog",
    "cue": "להחזיק ברכיים נתמכות בזרועות כפופות עם הטיה מעט גדולה יותר קדימה של הכתפיים; לבחור מנוף ולתרגל יציאה עם מאמן.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["shoulder_support", "elbow_extensors", "wrists"]
  },
  {
    "id": "incline-triceps-extension",
    "he": "פשיטת מרפקים במוט גבוה",
    "en": "High-bar triceps extension",
    "parent": "bar-triceps-extension",
    "group": "push",
    "equipment": ["lowbar"],
    "level": 2,
    "movementPattern": "horizontal_push",
    "movementSubtype": "horizontal_push",
    "muscles": ["יד אחורית", "ליבה", "כתפיים"],
    "muscleGroups": ["chest", "shoulders", "arms"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "bar",
    "poseTemplate": "incline",
    "cue": "לאחוז במוט מעוגן בגובה החזה ולהישען מעט קדימה; לכופף מרפקים כך שהמצח מתקרב לידיים וליישר.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["shoulder_support", "elbow_extensors", "wrists"]
  },
  {
    "id": "assisted-ring-russian-push",
    "he": "שכיבת סמיכה רוסית בטבעות בסיוע ברכיים",
    "en": "Knee-assisted ring Russian push-up",
    "parent": "ring-russian-push",
    "group": "push",
    "equipment": ["rings"],
    "level": 4,
    "movementPattern": "horizontal_push",
    "movementSubtype": "horizontal_push",
    "muscles": ["חזה", "יד אחורית", "כתפיים", "ליבה"],
    "muscleGroups": ["chest", "shoulders", "arms"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "rings",
    "poseTemplate": "pushTop",
    "cue": "לעגן טבעות נמוכות ולתמוך בברכיים בקרקע; לבצע את המעבר הנתמך מאמות לכפות ידיים לפי טווח שנבדק עם מאמן.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["shoulder_support", "elbow_extensors", "wrists"]
  },
  {
    "id": "short-planche-slide-push",
    "he": "החלקת פלאנץ׳ קצרה עם שכיבת סמיכה",
    "en": "Short-range planche slide push-up",
    "parent": "planche-slide-push",
    "group": "push",
    "equipment": [],
    "level": 3,
    "movementPattern": "horizontal_push",
    "movementSubtype": "horizontal_push",
    "muscles": ["כתף קדמית", "חזה", "יד אחורית", "ליבה"],
    "muscleGroups": ["chest", "shoulders", "arms"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "floor",
    "poseTemplate": "pushTop",
    "cue": "לבדוק משטח החלקה עם מאמן; להחליק רגליים מרחק קצר מאוד להטיה ואז לבצע שכיבת סמיכה ולחזור, באותו רצף מתועד.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["shoulder_support", "elbow_extensors", "wrists"]
  },
  {
    "id": "band-planche-slide-push",
    "he": "החלקת פלאנץ׳ עם שכיבת סמיכה בסיוע גומייה",
    "en": "Band-assisted planche slide push-up",
    "parent": "planche-slide-push",
    "group": "push",
    "equipment": ["bar", "band"],
    "level": 3,
    "movementPattern": "horizontal_push",
    "movementSubtype": "horizontal_push",
    "muscles": ["כתף קדמית", "חזה", "יד אחורית", "ליבה"],
    "muscleGroups": ["chest", "shoulders", "arms"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "bar",
    "poseTemplate": "pushTop",
    "cue": "לעגן גומייה מעל האגן ולבדוק משטח החלקה עם מאמן; לבצע החלקה ושכיבת סמיכה באותו טווח, כשהגומייה מסייעת לאגן.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["shoulder_support", "elbow_extensors", "wrists"]
  },
  {
    "id": "incline-push-90-hold",
    "he": "החזקת 90 מעלות בשיפוע",
    "en": "Incline 90-degree push-up hold",
    "parent": "push-up-90-hold",
    "group": "push",
    "equipment": ["lowbar"],
    "level": 3,
    "movementPattern": "horizontal_push",
    "movementSubtype": "horizontal_push",
    "muscles": ["חזה", "יד אחורית", "כתף קדמית", "ליבה"],
    "muscleGroups": ["chest", "shoulders", "arms"],
    "unit": "seconds",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "lowbar",
    "poseTemplate": "incline",
    "cue": "להניח ידיים על מוט נמוך מעוגן; להחזיק מרפקים בכ־90 מעלות עם רגליים בקרקע וקו גוף ישר.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["shoulder_support", "elbow_extensors", "wrists"]
  },
  {
    "id": "decline-push-90-hold",
    "he": "החזקת 90 מעלות ברגליים מוגבהות",
    "en": "Decline 90-degree push-up hold",
    "parent": "push-up-90-hold",
    "group": "push",
    "equipment": ["box"],
    "level": 4,
    "movementPattern": "horizontal_push",
    "movementSubtype": "horizontal_push",
    "muscles": ["חזה", "יד אחורית", "כתף קדמית", "ליבה"],
    "muscleGroups": ["chest", "shoulders", "arms"],
    "unit": "seconds",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "box",
    "poseTemplate": "pushBottom",
    "cue": "להניח רגליים על קופסה מעוגנת ולהחזיק כיפוף מרפקים של כ־90 מעלות; הראש נשאר ללא מגע ברצפה.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["shoulder_support", "elbow_extensors", "wrists"]
  },
  {
    "id": "light-band-row",
    "he": "חתירה בגומייה בהתנגדות קלה",
    "en": "Light-band seated row",
    "parent": "band-row",
    "group": "pull",
    "equipment": ["band"],
    "level": 1,
    "movementPattern": "horizontal_pull",
    "movementSubtype": "horizontal_pull",
    "muscles": ["גב", "יד קדמית", "כתף אחורית"],
    "muscleGroups": ["back", "arms"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "band",
    "cue": "לשבת עם גומייה מעוגנת מול הגוף ולהשאיר מתח קל; למשוך מרפקים לאחור בלי להישען בגו.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["grip", "elbow_flexors"]
  },
  {
    "id": "strong-band-row",
    "he": "חתירה בגומייה בהתנגדות מוגברת",
    "en": "Higher-resistance band row",
    "parent": "band-row",
    "group": "pull",
    "equipment": ["band"],
    "level": 2,
    "movementPattern": "horizontal_pull",
    "movementSubtype": "horizontal_pull",
    "muscles": ["גב", "יד קדמית", "כתף אחורית"],
    "muscleGroups": ["back", "arms"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "band",
    "cue": "לשבת מול גומייה בדירוג שנבדק, עם התנגדות מעט גדולה יותר; למשוך באותו טווח בלי תנופת גו.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["grip", "elbow_flexors"]
  },
  {
    "id": "upright-wide-row",
    "he": "חתירה רחבה בזווית זקופה",
    "en": "Upright wide-grip row",
    "parent": "row-wide",
    "group": "pull",
    "equipment": ["lowbar"],
    "level": 1,
    "movementPattern": "horizontal_pull",
    "movementSubtype": "horizontal_pull",
    "muscles": ["גב", "יד קדמית", "כתף אחורית"],
    "muscleGroups": ["back", "arms"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "lowbar",
    "poseTemplate": "row",
    "cue": "לאחוז רחב במוט נמוך מעוגן כשהגוף בזווית זקופה יחסית; למשוך חזה למוט ולהוריד בשליטה.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["grip", "elbow_flexors"]
  },
  {
    "id": "elevated-wide-row",
    "he": "חתירה רחבה ברגליים מוגבהות",
    "en": "Feet-elevated wide-grip row",
    "parent": "row-wide",
    "group": "pull",
    "equipment": ["lowbar", "box"],
    "level": 3,
    "movementPattern": "horizontal_pull",
    "movementSubtype": "horizontal_pull",
    "muscles": ["גב", "יד קדמית", "כתף אחורית"],
    "muscleGroups": ["back", "arms"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "lowbar",
    "poseTemplate": "row",
    "cue": "לאחוז רחב במוט נמוך ולהניח רגליים על קופסה מעוגנת; למשוך כיחידה בלי להרים כתפיים.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["grip", "elbow_flexors"]
  },
  {
    "id": "upright-ring-row",
    "poseTemplate": "row",
    "he": "חתירה בטבעות בזווית זקופה",
    "en": "Upright ring row",
    "parent": "ring-row",
    "group": "pull",
    "equipment": ["rings"],
    "level": 1,
    "movementPattern": "horizontal_pull",
    "movementSubtype": "horizontal_pull",
    "muscles": ["גב", "יד קדמית", "כתף אחורית"],
    "muscleGroups": ["back", "arms"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "rings",
    "cue": "לעגן טבעות ולשמור גוף זקוף יחסית ורגליים בקרקע; למשוך חזה אל הטבעות בלי להפריד אותן לצדדים.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["grip", "elbow_flexors"]
  },
  {
    "id": "horizontal-ring-row",
    "poseTemplate": "row",
    "he": "חתירה אופקית בטבעות",
    "en": "Horizontal ring row",
    "parent": "ring-row",
    "group": "pull",
    "equipment": ["rings"],
    "level": 3,
    "movementPattern": "horizontal_pull",
    "movementSubtype": "horizontal_pull",
    "muscles": ["גב", "יד קדמית", "כתף אחורית"],
    "muscleGroups": ["back", "arms"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "rings",
    "cue": "לעגן טבעות נמוכות ולשמור עקבים בקרקע וגוף כמעט אופקי; למשוך כיחידה ולחזור בשליטה.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["grip", "elbow_flexors"]
  },
  {
    "id": "band-assisted-pull",
    "he": "מתח בסיוע גומייה",
    "en": "Band-assisted pull-up",
    "parent": "pull",
    "group": "pull",
    "equipment": ["bar", "band"],
    "level": 2,
    "movementPattern": "vertical_pull",
    "movementSubtype": "vertical_pull",
    "muscles": ["גב", "יד קדמית", "אחיזה"],
    "muscleGroups": ["back", "arms"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "bar",
    "cue": "לבדוק גומייה ועיגון למוט; למשוך באחיזה רגילה כשהגומייה מסייעת, ללא תנופה וללא שינוי סיוע בסט.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["grip", "elbow_flexors"]
  },
  {
    "id": "assisted-explosive-pull",
    "he": "מתח מתפרץ בסיוע גומייה",
    "en": "Band-assisted explosive pull-up",
    "parent": "explosive-pull",
    "group": "pull",
    "equipment": ["bar", "band"],
    "level": 3,
    "movementPattern": "vertical_pull",
    "movementSubtype": "vertical_pull",
    "muscles": ["גב", "יד קדמית", "כתף אחורית"],
    "muscleGroups": ["back", "arms"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "bar",
    "poseTemplate": "pull",
    "cue": "לעגן גומייה מדורגת למוט; למשוך מהר לגובה חזה שנבדק ולרדת בשליטה ללא קיפינג.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["grip", "elbow_flexors"]
  },
  {
    "id": "high-explosive-pull",
    "he": "מתח מתפרץ בטווח מוגדל",
    "en": "Higher-range explosive pull-up",
    "parent": "explosive-pull",
    "group": "pull",
    "equipment": ["bar"],
    "level": 4,
    "movementPattern": "vertical_pull",
    "movementSubtype": "vertical_pull",
    "muscles": ["גב", "יד קדמית", "כתף אחורית"],
    "muscleGroups": ["back", "arms"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "bar",
    "poseTemplate": "pull",
    "cue": "למשוך מהר למוט מעט גבוה יותר ביחס לחזה בטווח שנבדק עם מאמן; להוריד בשליטה בלי מעבר מעל המוט.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["grip", "elbow_flexors"]
  },
  {
    "id": "band-assisted-chin",
    "he": "מתח באחיזה הפוכה בסיוע גומייה",
    "en": "Band-assisted chin-up",
    "parent": "chin",
    "group": "pull",
    "equipment": ["bar", "band"],
    "level": 2,
    "movementPattern": "vertical_pull",
    "movementSubtype": "vertical_pull",
    "muscles": ["יד קדמית", "גב", "אחיזה"],
    "muscleGroups": ["back", "arms"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "bar",
    "cue": "לעגן גומייה למוט ולאחוז בכפות ידיים לפנים; לכופף מרפקים ולמשוך בסיוע מתועד בלי תנופה.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["grip", "elbow_flexors"]
  },
  {
    "id": "lsit-chin",
    "he": "מתח באחיזה הפוכה בישיבת אל",
    "en": "L-sit chin-up",
    "parent": "chin",
    "group": "pull",
    "equipment": ["bar"],
    "level": 4,
    "movementPattern": "vertical_pull",
    "movementSubtype": "vertical_pull",
    "muscles": ["יד קדמית", "גב", "אחיזה"],
    "muscleGroups": ["back", "arms"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "bar",
    "cue": "לאחוז הפוך במוט ולהחזיק רגליים ישרות קדימה; לבצע מתח בלי להוריד את הרגליים ובלי תנופה.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["grip", "elbow_flexors"]
  },
  {
    "id": "feet-assisted-ring-chin",
    "he": "מתח הפוך בטבעות בסיוע רגליים",
    "en": "Feet-assisted ring chin-up",
    "parent": "ring-chin",
    "group": "pull",
    "equipment": ["rings"],
    "level": 2,
    "movementPattern": "vertical_pull",
    "movementSubtype": "vertical_pull",
    "muscles": ["גב", "יד קדמית", "אחיזה", "מייצבי כתפיים"],
    "muscleGroups": ["back", "arms"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "rings",
    "poseTemplate": "pull",
    "cue": "לעגן טבעות ולאחוז בכפות ידיים לפנים; לכופף מרפקים בסיוע רגליים על הקרקע ולחזור בשליטה.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["grip", "elbow_flexors"]
  },
  {
    "id": "lsit-ring-chin",
    "he": "מתח הפוך בטבעות בישיבת אל",
    "en": "L-sit ring chin-up",
    "parent": "ring-chin",
    "group": "pull",
    "equipment": ["rings"],
    "level": 4,
    "movementPattern": "vertical_pull",
    "movementSubtype": "vertical_pull",
    "muscles": ["גב", "יד קדמית", "אחיזה", "מייצבי כתפיים"],
    "muscleGroups": ["back", "arms"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "rings",
    "poseTemplate": "pull",
    "cue": "לעגן טבעות ולאחוז הפוך; להחזיק רגליים ישרות קדימה בזמן המשיכה והירידה ללא סיוע.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["grip", "elbow_flexors"]
  },
  {
    "id": "feet-assisted-pull-negative",
    "he": "ירידה ממתח בסיוע רגליים",
    "en": "Feet-assisted pull-up negative",
    "parent": "pull-negative",
    "group": "pull",
    "equipment": ["bar", "box"],
    "level": 2,
    "movementPattern": "vertical_pull",
    "movementSubtype": "vertical_pull",
    "muscles": ["גב", "יד קדמית", "אחיזה"],
    "muscleGroups": ["back", "arms"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "bar",
    "cue": "להגיע למנח עליון בעזרת קופסה מעוגנת; לרדת באיטיות כשכף רגל נשארת נושאת חלק מהמשקל.",
    "novelEccentric": true,
    "demandingStraightArm": false,
    "loadingTags": ["grip", "elbow_flexors"]
  },
  {
    "id": "feet-assisted-chin-hold",
    "he": "החזקת מתח הפוך בסיוע רגליים",
    "en": "Feet-assisted chin-up hold",
    "parent": "chin-up-hold",
    "group": "pull",
    "equipment": ["bar", "box"],
    "level": 2,
    "movementPattern": "vertical_pull",
    "movementSubtype": "vertical_pull",
    "muscles": ["גב", "יד קדמית", "אחיזה"],
    "muscleGroups": ["back", "arms"],
    "unit": "seconds",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "bar",
    "poseTemplate": "pullTop",
    "cue": "להגיע למנח סנטר מעל מוט בעזרת קופסה; להחזיק כיפוף מרפקים כשהרגליים תומכות בחלק מהמשקל.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["grip", "elbow_flexors"]
  },
  {
    "id": "lsit-chin-hold",
    "he": "החזקת מתח הפוך ברגליים קדימה",
    "en": "L-sit chin-up hold",
    "parent": "chin-up-hold",
    "group": "pull",
    "equipment": ["bar", "box"],
    "level": 4,
    "movementPattern": "vertical_pull",
    "movementSubtype": "vertical_pull",
    "muscles": ["גב", "יד קדמית", "אחיזה"],
    "muscleGroups": ["back", "arms"],
    "unit": "seconds",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "bar",
    "poseTemplate": "pullTop",
    "cue": "להחזיק סנטר מעל מוט באחיזה הפוכה עם רגליים ישרות קדימה; לרדת בעזרת קופסה בלי נפילה.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["grip", "elbow_flexors"]
  },
  {
    "id": "band-arch-pull",
    "he": "מתח בגב מקושת בסיוע גומייה",
    "en": "Band-assisted arch pull-up",
    "parent": "arch-pull",
    "group": "pull",
    "equipment": ["bar", "band"],
    "level": 3,
    "movementPattern": "vertical_pull",
    "movementSubtype": "vertical_pull",
    "muscles": ["גב", "יד קדמית", "מייצבי שכמות"],
    "muscleGroups": ["back", "arms"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "bar",
    "poseTemplate": "pull",
    "cue": "לעגן גומייה למוט; למשוך עם פתיחת חזה וקשת קטנה מבוקרת בגב העליון, בלי קשת גדולה במותן.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["grip", "elbow_flexors"]
  },
  {
    "id": "high-arch-pull",
    "he": "מתח בגב מקושת בטווח מוגדל",
    "en": "High-range arch pull-up",
    "parent": "arch-pull",
    "group": "pull",
    "equipment": ["bar"],
    "level": 4,
    "movementPattern": "vertical_pull",
    "movementSubtype": "vertical_pull",
    "muscles": ["גב", "יד קדמית", "מייצבי שכמות"],
    "muscleGroups": ["back", "arms"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "bar",
    "poseTemplate": "pull",
    "cue": "למשוך חזה מעט קרוב יותר למוט באותה פתיחת בית חזה שנבדקה; לא להגדיל קשת במותן כדי להשלים טווח.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["grip", "elbow_flexors"]
  },
  {
    "id": "band-archer-pull",
    "he": "מתח קשת בסיוע גומייה",
    "en": "Band-assisted archer pull-up",
    "parent": "archer-pull",
    "group": "pull",
    "equipment": ["bar", "band"],
    "level": 3,
    "movementPattern": "vertical_pull",
    "movementSubtype": "vertical_pull",
    "muscles": ["גב", "יד קדמית", "אחיזה"],
    "muscleGroups": ["back", "arms"],
    "unit": "reps",
    "perSide": true,
    "advancedOnly": true,
    "apparatus": "bar",
    "poseTemplate": "pull",
    "cue": "לעגן גומייה למוט ולאחוז רחב; למשוך לכיוון יד אחת כשהיד השנייה מתארכת ולתרגל לשני הצדדים.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["grip", "elbow_flexors"]
  },
  {
    "id": "light-band-one-arm-pull",
    "he": "מתח ביד אחת בסיוע גומייה קלה",
    "en": "Light-band one-arm pull-up",
    "parent": "one-arm-band-pull",
    "group": "pull",
    "equipment": ["bar", "band"],
    "level": 5,
    "movementPattern": "vertical_pull",
    "movementSubtype": "vertical_pull",
    "muscles": ["גב", "יד קדמית", "אחיזה"],
    "muscleGroups": ["back", "arms"],
    "unit": "reps",
    "perSide": true,
    "advancedOnly": true,
    "apparatus": "bar",
    "poseTemplate": "pull",
    "cue": "לאחוז במוט ביד אחת ולהשתמש בגומייה מסייעת בדירוג חלש יותר מזה שתועד בשלב ההכנה; למשוך ללא סיבוב.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["grip", "elbow_flexors"]
  },
  {
    "id": "one-arm-pull",
    "he": "מתח ביד אחת",
    "en": "One-arm pull-up",
    "parent": "one-arm-band-pull",
    "group": "pull",
    "equipment": ["bar"],
    "level": 5,
    "movementPattern": "vertical_pull",
    "movementSubtype": "vertical_pull",
    "muscles": ["גב", "יד קדמית", "אחיזה"],
    "muscleGroups": ["back", "arms"],
    "unit": "reps",
    "perSide": true,
    "advancedOnly": true,
    "apparatus": "bar",
    "poseTemplate": "pull",
    "cue": "לאחוז במוט ביד אחת, למשוך ולרדת בטווח שנבדק ללא סיוע וללא סיבוב; לתרגל לשני הצדדים.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["grip", "elbow_flexors"]
  },
  {
    "id": "band-one-arm-pull-negative",
    "he": "ירידה ממתח ביד אחת בסיוע גומייה",
    "en": "Band-assisted one-arm pull-up negative",
    "parent": "one-arm-pull-negative",
    "group": "pull",
    "equipment": ["bar", "box", "band"],
    "level": 5,
    "movementPattern": "vertical_pull",
    "movementSubtype": "vertical_pull",
    "muscles": ["גב", "יד קדמית", "אחיזה"],
    "muscleGroups": ["back", "arms"],
    "unit": "reps",
    "perSide": true,
    "advancedOnly": true,
    "apparatus": "bar",
    "poseTemplate": "pull",
    "cue": "להגיע למנח עליון מקופסה מעוגנת; לרדת ביד אחת בסיוע גומייה בדוקה, ולשוב לתמיכת רגליים לפני אובדן שליטה.",
    "novelEccentric": true,
    "demandingStraightArm": false,
    "loadingTags": ["grip", "elbow_flexors"]
  },
  {
    "id": "feet-assisted-scap-pull",
    "he": "משיכת שכמות בסיוע רגליים",
    "en": "Feet-assisted scapular pull-up",
    "parent": "scap-pull",
    "group": "pull",
    "equipment": ["bar", "box"],
    "level": 1,
    "movementPattern": "scapular_control",
    "movementSubtype": "scapular_pull",
    "muscles": ["מייצבי שכמות", "גב"],
    "muscleGroups": ["back", "arms"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "bar",
    "cue": "לאחוז במוט עם כפות רגליים על קופסה מעוגנת; להוריד ולהרים שכמות כשהמרפקים נשארים ישרים.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["grip", "elbow_flexors"]
  },
  {
    "id": "lsit-scap-pull",
    "he": "משיכת שכמות ברגליים קדימה",
    "en": "L-sit scapular pull-up",
    "parent": "scap-pull",
    "group": "pull",
    "equipment": ["bar"],
    "level": 3,
    "movementPattern": "scapular_control",
    "movementSubtype": "scapular_pull",
    "muscles": ["מייצבי שכמות", "גב"],
    "muscleGroups": ["back", "arms"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "bar",
    "cue": "להיתלות ממוט עם רגליים ישרות קדימה; לבצע תנועת שכמות קצרה בלבד בלי לכופף מרפקים.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["grip", "elbow_flexors"]
  },
  {
    "id": "feet-assisted-dead-hang",
    "he": "תלייה פסיבית בסיוע רגליים",
    "en": "Feet-assisted dead hang",
    "parent": "dead-hang",
    "group": "pull",
    "equipment": ["bar", "box"],
    "level": 1,
    "movementPattern": "scapular_control",
    "movementSubtype": "scapular_pull",
    "muscles": ["מייצבי שכמות", "גב", "אחיזה"],
    "muscleGroups": ["back", "arms"],
    "unit": "seconds",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "bar",
    "poseTemplate": "hangStraight",
    "cue": "לאחוז במוט ולהשאיר רגליים על קופסה נושאת משקל; להרפות שכמות רק בטווח כתף נוח.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["grip", "elbow_flexors"]
  },
  {
    "id": "one-arm-dead-hang",
    "he": "תלייה פסיבית ביד אחת",
    "en": "One-arm dead hang",
    "parent": "dead-hang",
    "group": "pull",
    "equipment": ["bar", "box"],
    "level": 4,
    "movementPattern": "scapular_control",
    "movementSubtype": "scapular_pull",
    "muscles": ["מייצבי שכמות", "גב", "אחיזה"],
    "muscleGroups": ["back", "arms"],
    "unit": "seconds",
    "perSide": true,
    "advancedOnly": true,
    "apparatus": "bar",
    "poseTemplate": "hangStraight",
    "cue": "לאחוז ביד אחת במוט בטווח כתף שנבדק; להרפות ללא כאב ולסיים בתמיכת רגליים על קופסה.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["grip", "elbow_flexors"]
  },
  {
    "id": "unsupported-active-hang",
    "he": "תלייה פעילה ללא תמיכת רגליים",
    "en": "Unsupported active hang",
    "parent": "active-hang",
    "group": "pull",
    "equipment": ["bar"],
    "level": 2,
    "movementPattern": "scapular_control",
    "movementSubtype": "scapular_pull",
    "muscles": ["מייצבי שכמות", "גב", "אחיזה"],
    "muscleGroups": ["back", "arms"],
    "unit": "seconds",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "bar",
    "cue": "להיתלות ממוט בשתי ידיים ללא תמיכת רגליים ולהחזיק שכמות פעילות ומרפקים ישרים.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["grip", "elbow_flexors"]
  },
  {
    "id": "one-arm-active-hang",
    "he": "תלייה פעילה ביד אחת",
    "en": "One-arm active hang",
    "parent": "active-hang",
    "group": "pull",
    "equipment": ["bar", "box"],
    "level": 4,
    "movementPattern": "scapular_control",
    "movementSubtype": "scapular_pull",
    "muscles": ["מייצבי שכמות", "גב", "אחיזה"],
    "muscleGroups": ["back", "arms"],
    "unit": "seconds",
    "perSide": true,
    "advancedOnly": true,
    "apparatus": "bar",
    "cue": "לאחוז ביד אחת במוט ולהחזיק שכמה פעילה בטווח שנבדק; להכין קופסה לתמיכת רגליים ביציאה.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["grip", "elbow_flexors"]
  },
  {
    "id": "short-prone-w",
    "he": "הרמת זרועות כפופות בטווח קצר",
    "en": "Short-range prone W raise",
    "parent": "prone-w",
    "group": "pull",
    "equipment": [],
    "level": 1,
    "movementPattern": "scapular_control",
    "movementSubtype": "scapular_control",
    "muscles": ["מייצבי שכמות", "כתף אחורית"],
    "muscleGroups": ["back", "shoulders"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "floor",
    "cue": "לשכב על הבטן עם זרועות כפופות בצורת דבליו; להרים ידיים מעט בלבד בלי להרים חזה או להקשית צוואר.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["grip", "elbow_flexors"]
  },
  {
    "id": "band-prone-w",
    "he": "הרמת זרועות כפופות עם גומייה",
    "en": "Band-resisted prone W raise",
    "parent": "prone-w",
    "group": "pull",
    "equipment": ["band"],
    "level": 2,
    "movementPattern": "scapular_control",
    "movementSubtype": "scapular_control",
    "muscles": ["מייצבי שכמות", "כתף אחורית"],
    "muscleGroups": ["back", "shoulders"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "band",
    "cue": "לשכב על הבטן עם גומייה קלה בין הידיים; להרים זרועות כפופות תוך מתח קטן החוצה ללא הרמת חזה.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["grip", "elbow_flexors"]
  },
  {
    "id": "light-band-shrug",
    "he": "הרמת שכמות בגומייה קלה",
    "en": "Light-band scapular shrug",
    "parent": "band-scapula-shrug",
    "group": "pull",
    "equipment": ["band"],
    "level": 1,
    "movementPattern": "scapular_control",
    "movementSubtype": "scapular_control",
    "muscles": ["מייצבי שכמות", "כתפיים"],
    "muscleGroups": ["back", "arms"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "band",
    "poseTemplate": "stand",
    "cue": "לעמוד על גומייה עם מעט מתח ולאחוז בקצוות; להרים ולהוריד שכמות כשהמרפקים ישרים.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["grip", "elbow_flexors"]
  },
  {
    "id": "strong-band-shrug",
    "he": "הרמת שכמות בגומייה חזקה יותר",
    "en": "Higher-resistance band scapular shrug",
    "parent": "band-scapula-shrug",
    "group": "pull",
    "equipment": ["band"],
    "level": 2,
    "movementPattern": "scapular_control",
    "movementSubtype": "scapular_control",
    "muscles": ["מייצבי שכמות", "כתפיים"],
    "muscleGroups": ["back", "arms"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "band",
    "poseTemplate": "stand",
    "cue": "לעמוד על גומייה בדירוג מעט חזק יותר שתועד; להרים ולהוריד שכמות באותו טווח בלי לגלגל כתפיים.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["grip", "elbow_flexors"]
  },
  {
    "id": "straddle-front-lever",
    "he": "פרונט לבר בפישוק",
    "en": "Straddle front lever",
    "parent": "front-lever",
    "group": "pull",
    "equipment": ["bar"],
    "level": 5,
    "movementPattern": "vertical_pull",
    "movementSubtype": "vertical_pull",
    "muscles": ["גב", "ליבה", "מייצבי שכמות"],
    "muscleGroups": ["back", "arms"],
    "unit": "seconds",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "bar",
    "poseTemplate": "lever",
    "cue": "להחזיק גוף אופקי במרפקים ישרים ורגליים ישרות בפישוק; לשמור אגן בקו ולצאת בסיוע שנבדק.",
    "novelEccentric": false,
    "demandingStraightArm": true,
    "loadingTags": ["grip", "elbow_flexors"]
  },
  {
    "id": "band-front-lever-negative",
    "he": "ירידה מפרונט לבר בסיוע גומייה",
    "en": "Band-assisted front lever negative",
    "parent": "front-lever-negative",
    "group": "pull",
    "equipment": ["bar", "band"],
    "level": 4,
    "movementPattern": "vertical_pull",
    "movementSubtype": "vertical_pull",
    "muscles": ["גב", "ליבה", "יד קדמית"],
    "muscleGroups": ["back", "arms"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "bar",
    "poseTemplate": "lever",
    "cue": "לעגן גומייה מסייעת לאגן; לרדת לאט מהכניסה שנבדקה לקו לבר אופקי במרפקים ישרים.",
    "novelEccentric": true,
    "demandingStraightArm": false,
    "loadingTags": ["grip", "elbow_flexors"]
  },
  {
    "id": "heavy-feet-low-bar-transition",
    "he": "מעבר עליית כוח בתמיכת רגליים מלאה",
    "en": "Heavily foot-assisted low-bar transition",
    "parent": "low-bar-transition",
    "group": "pull",
    "equipment": ["lowbar"],
    "level": 2,
    "movementPattern": "vertical_pull",
    "movementSubtype": "vertical_pull",
    "muscles": ["גב", "יד קדמית", "יד אחורית"],
    "muscleGroups": ["back", "arms"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "lowbar",
    "poseTemplate": "row",
    "cue": "במוט נמוך מעוגן להשאיר משקל רב ברגליים; להעביר חזה מעל המוט ולחזור באותו מעבר קצר.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["grip", "elbow_flexors"]
  },
  {
    "id": "light-feet-low-bar-transition",
    "he": "מעבר עליית כוח בתמיכת רגליים קלה",
    "en": "Lightly foot-assisted low-bar transition",
    "parent": "low-bar-transition",
    "group": "pull",
    "equipment": ["lowbar"],
    "level": 3,
    "movementPattern": "vertical_pull",
    "movementSubtype": "vertical_pull",
    "muscles": ["גב", "יד קדמית", "יד אחורית"],
    "muscleGroups": ["back", "arms"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "lowbar",
    "poseTemplate": "row",
    "cue": "במוט נמוך מעוגן לבצע את המעבר מעל המוט עם פחות סיוע מהרגליים, כשהן נשארות בקרקע.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["grip", "elbow_flexors"]
  },
  {
    "id": "low-assist-muscle-up",
    "he": "עליית כוח בסיוע גומייה מופחת",
    "en": "Light-band muscle-up",
    "parent": "assisted-muscle-up",
    "group": "pull",
    "equipment": ["bar", "band"],
    "level": 4,
    "movementPattern": "vertical_pull",
    "movementSubtype": "vertical_pull",
    "muscles": ["גב", "יד קדמית", "יד אחורית", "חזה"],
    "muscleGroups": ["back", "arms"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "bar",
    "poseTemplate": "pull",
    "cue": "לעגן גומייה בדירוג סיוע קטן יותר שנבדק; לבצע עליית כוח מלאה דרך משיכה, מעבר ודחיקה ללא קיפינג.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["grip", "elbow_flexors", "elbow_extensors", "shoulder_support", "wrists"]
  },
  {
    "id": "heavy-feet-extension-support",
    "he": "פשיטת כתף בתמיכת רגליים מלאה",
    "en": "Heavily foot-supported shoulder extension hold",
    "parent": "extension-supported",
    "group": "pull",
    "equipment": ["rings"],
    "level": 3,
    "movementPattern": "straight_arm_pull",
    "movementSubtype": "straight_arm_pull",
    "muscles": ["כתף קדמית", "חזה", "יד קדמית"],
    "muscleGroups": ["back", "shoulders", "arms"],
    "unit": "seconds",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "rings",
    "poseTemplate": "german",
    "cue": "לעגן טבעות ולשמור רוב משקל הגוף ברגליים; להחזיק פשיטת כתף קטנה ונוחה במרפקים ישרים.",
    "novelEccentric": false,
    "demandingStraightArm": true,
    "loadingTags": ["grip", "elbow_flexors", "shoulder_extension"]
  },
  {
    "id": "light-feet-extension-support",
    "he": "פשיטת כתף בתמיכת רגליים קלה",
    "en": "Lightly foot-supported shoulder extension hold",
    "parent": "extension-supported",
    "group": "pull",
    "equipment": ["rings"],
    "level": 4,
    "movementPattern": "straight_arm_pull",
    "movementSubtype": "straight_arm_pull",
    "muscles": ["כתף קדמית", "חזה", "יד קדמית"],
    "muscleGroups": ["back", "shoulders", "arms"],
    "unit": "seconds",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "rings",
    "poseTemplate": "german",
    "cue": "לעגן טבעות ולהפחית מעט משקל מהרגליים באותו טווח כתף קטן שנבדק, בלי להעמיק את פשיטת הכתף.",
    "novelEccentric": false,
    "demandingStraightArm": true,
    "loadingTags": ["grip", "elbow_flexors", "shoulder_extension"]
  },
  {
    "id": "tuck-back-lever",
    "he": "באק לבר מכונס",
    "en": "Tuck back lever",
    "parent": "back-lever",
    "group": "pull",
    "equipment": ["rings"],
    "level": 4,
    "movementPattern": "straight_arm_pull",
    "movementSubtype": "straight_arm_pull",
    "muscles": ["כתף קדמית", "יד קדמית", "ליבה"],
    "muscleGroups": ["back", "shoulders", "arms"],
    "unit": "seconds",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "rings",
    "poseTemplate": "backLever",
    "cue": "לעגן טבעות ולהחזיק ברכיים מכונסות וגו אופקי במרפקים ישרים; לתרגל כניסה ויציאה עם מאמן.",
    "novelEccentric": false,
    "demandingStraightArm": true,
    "loadingTags": ["grip", "elbow_flexors", "shoulder_extension"]
  },
  {
    "id": "straddle-back-lever",
    "he": "באק לבר בפישוק",
    "en": "Straddle back lever",
    "parent": "back-lever",
    "group": "pull",
    "equipment": ["rings"],
    "level": 4,
    "movementPattern": "straight_arm_pull",
    "movementSubtype": "straight_arm_pull",
    "muscles": ["כתף קדמית", "יד קדמית", "ליבה"],
    "muscleGroups": ["back", "shoulders", "arms"],
    "unit": "seconds",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "rings",
    "poseTemplate": "backLever",
    "cue": "לעגן טבעות ולהחזיק גוף אופקי ורגליים ישרות בפישוק במרפקים ישרים; להשתמש רק בטווח כתף שנבדק.",
    "novelEccentric": false,
    "demandingStraightArm": true,
    "loadingTags": ["grip", "elbow_flexors", "shoulder_extension"]
  },
  {
    "id": "band-full-back-lever",
    "he": "באק לבר מלא בסיוע גומייה",
    "en": "Band-assisted full back lever",
    "parent": "back-lever",
    "group": "pull",
    "equipment": ["rings", "band"],
    "level": 4,
    "movementPattern": "straight_arm_pull",
    "movementSubtype": "straight_arm_pull",
    "muscles": ["כתף קדמית", "יד קדמית", "ליבה"],
    "muscleGroups": ["back", "shoulders", "arms"],
    "unit": "seconds",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "rings",
    "poseTemplate": "backLever",
    "cue": "לעגן טבעות וגומייה מסייעת לאגן; להחזיק רגליים ארוכות וצמודות בקו אופקי בטווח כתף שנבדק.",
    "novelEccentric": false,
    "demandingStraightArm": true,
    "loadingTags": ["grip", "elbow_flexors", "shoulder_extension"]
  },
  {
    "id": "feet-assisted-german-hang",
    "he": "תלייה גרמנית בסיוע רגליים",
    "en": "Feet-assisted German hang",
    "parent": "german-hang",
    "group": "pull",
    "equipment": ["rings"],
    "level": 3,
    "movementPattern": "support",
    "movementSubtype": "support",
    "muscles": ["כתף קדמית", "חזה", "יד קדמית"],
    "muscleGroups": ["back", "arms"],
    "unit": "seconds",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "rings",
    "poseTemplate": "german",
    "cue": "בטבעות נמוכות להשאיר רגליים נושאות משקל; להחזיק תלייה לאחור בטווח קטן שנבדק בלי למשוך לכתף עמוקה.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["shoulder_support", "elbow_extensors", "wrists", "grip", "elbow_flexors", "shoulder_extension"]
  },
  {
    "id": "band-skin-the-cat",
    "he": "סיבוב תלייה לאחור בסיוע גומייה",
    "en": "Band-assisted skin the cat",
    "parent": "skin-the-cat",
    "group": "pull",
    "equipment": ["rings", "band"],
    "level": 3,
    "movementPattern": "support",
    "movementSubtype": "support",
    "muscles": ["כתפיים", "גב", "ליבה"],
    "muscleGroups": ["back", "arms"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "rings",
    "poseTemplate": "german",
    "cue": "לעגן גומייה לסיוע באגן; לבצע סיבוב תלייה מכונס לאחור וחזרה רק בטווח כתף שנבדק עם מאמן.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["shoulder_support", "elbow_extensors", "wrists", "grip", "elbow_flexors", "shoulder_extension"]
  },
  {
    "id": "long-leg-skin-the-cat",
    "he": "סיבוב תלייה לאחור ברגליים ארוכות",
    "en": "Straight-leg skin the cat",
    "parent": "skin-the-cat",
    "group": "pull",
    "equipment": ["rings"],
    "level": 4,
    "movementPattern": "support",
    "movementSubtype": "support",
    "muscles": ["כתפיים", "גב", "ליבה"],
    "muscleGroups": ["back", "arms"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "rings",
    "poseTemplate": "german",
    "cue": "בטבעות מעוגנות לבצע אותו סיבוב לאחור עם רגליים פחות מכונסות; אין להעמיק טווח כתף מעבר לבדיקה.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["shoulder_support", "elbow_extensors", "wrists", "grip", "elbow_flexors", "shoulder_extension"]
  },
  {
    "id": "upright-ring-curl",
    "he": "כפיפת מרפקים בטבעות בזווית זקופה",
    "en": "Upright ring biceps curl",
    "parent": "ring-biceps-curl",
    "group": "pull",
    "equipment": ["rings"],
    "level": 2,
    "movementPattern": "horizontal_pull",
    "movementSubtype": "horizontal_pull",
    "muscles": ["יד קדמית", "גב", "ליבה"],
    "muscleGroups": ["back", "arms"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "rings",
    "poseTemplate": "row",
    "cue": "לעגן טבעות ולהישען מעט לאחור עם רגליים בקרקע; לקרב ידיים למצח בכיפוף מרפקים בלי למשוך זרועות לאחור.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["grip", "elbow_flexors"]
  },
  {
    "id": "horizontal-ring-curl",
    "he": "כפיפת מרפקים בטבעות בזווית נמוכה",
    "en": "Low-angle ring biceps curl",
    "parent": "ring-biceps-curl",
    "group": "pull",
    "equipment": ["rings"],
    "level": 4,
    "movementPattern": "horizontal_pull",
    "movementSubtype": "horizontal_pull",
    "muscles": ["יד קדמית", "גב", "ליבה"],
    "muscleGroups": ["back", "arms"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "rings",
    "poseTemplate": "row",
    "cue": "לעגן טבעות נמוכות ולהישען יותר לאחור; לכופף מרפקים ולקרב ידיים למצח בלי להפוך את התנועה לחתירה.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["grip", "elbow_flexors"]
  },
  {
    "id": "short-pike-push",
    "he": "שכיבות סמיכה פייק בטווח קצר",
    "en": "Short-range pike push-up",
    "parent": "pike-push",
    "group": "push",
    "equipment": [],
    "level": 2,
    "movementPattern": "vertical_push",
    "movementSubtype": "overhead_press",
    "muscles": ["כתפיים", "יד אחורית"],
    "muscleGroups": ["shoulders", "arms"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "floor",
    "cue": "להתחיל באגן גבוה ורגליים בקרקע; לכופף מרפקים בטווח קטן ולדחוק דרך הידיים, בלי מגע נושא משקל בראש.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["shoulder_support", "elbow_extensors", "wrists"]
  },
  {
    "id": "short-wall-hspu-negative",
    "poseTemplate": "handstand",
    "he": "ירידה בעמידת ידיים בטווח קצר",
    "en": "Short-range wall HSPU negative",
    "parent": "wall-hspu-negative",
    "group": "push",
    "equipment": ["wall"],
    "level": 3,
    "movementPattern": "vertical_push",
    "movementSubtype": "overhead_press",
    "muscles": ["כתפיים", "יד אחורית"],
    "muscleGroups": ["shoulders", "arms"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "wall",
    "cue": "מעמידת ידיים נתמכת בקיר לרדת לאט בטווח קצר שנבדק; לצאת לקרקע לפני מגע בראש, בלי לדחוק חזרה.",
    "novelEccentric": true,
    "demandingStraightArm": false,
    "loadingTags": ["shoulder_support", "elbow_extensors", "wrists"]
  },
  {
    "id": "light-wall-handstand-hold",
    "he": "עמידת ידיים במגע קיר קל",
    "en": "Light-wall-contact handstand hold",
    "parent": "chest-wall-handstand",
    "group": "push",
    "equipment": ["wall"],
    "level": 4,
    "movementPattern": "support",
    "movementSubtype": "support",
    "muscles": ["כתפיים", "יד אחורית", "ליבה"],
    "muscleGroups": ["shoulders", "core"],
    "unit": "seconds",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "wall",
    "poseTemplate": "handstand",
    "cue": "להחזיק חזה לקיר כשהבהונות נוגעות בו קלות בלבד; לשמור משקל בידיים ולצאת בדרך שנבדקה.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["shoulder_support", "elbow_extensors", "wrists"]
  },
  {
    "id": "pike-weight-shift",
    "he": "העברת משקל בתמיכת פייק",
    "en": "Pike weight shift",
    "parent": "handstand-shift",
    "group": "push",
    "equipment": [],
    "level": 2,
    "movementPattern": "support",
    "movementSubtype": "support",
    "muscles": ["כתפיים", "יד אחורית", "ליבה"],
    "muscleGroups": ["shoulders", "core"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "floor",
    "poseTemplate": "handstand",
    "cue": "בתמיכת פייק ורגליים בקרקע להעביר מעט משקל מיד ליד בלי לנתק יד ובלי לסובב אגן.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["shoulder_support", "elbow_extensors", "wrists"]
  },
  {
    "id": "narrow-wall-weight-shift",
    "he": "העברת משקל בקיר בבסיס צר",
    "en": "Narrow-base wall handstand weight shift",
    "parent": "handstand-shift",
    "group": "push",
    "equipment": ["wall"],
    "level": 4,
    "movementPattern": "support",
    "movementSubtype": "support",
    "muscles": ["כתפיים", "יד אחורית", "ליבה"],
    "muscleGroups": ["shoulders", "core"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "wall",
    "poseTemplate": "handstand",
    "cue": "בעמידת ידיים בקיר עם כפות ידיים מעט קרובות יותר, להעביר משקל מצד לצד בטווח שנבדק בלי לנתק יד.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["shoulder_support", "elbow_extensors", "wrists"]
  },
  {
    "id": "one-toe-wall-pull",
    "he": "ניתוק בהונות עם רגל אחת בקיר",
    "en": "One-foot-supported wall toe pull",
    "parent": "handstand-toe-pull",
    "group": "push",
    "equipment": ["wall"],
    "level": 3,
    "movementPattern": "support",
    "movementSubtype": "support",
    "muscles": ["כתפיים", "יד אחורית", "ליבה"],
    "muscleGroups": ["shoulders", "core"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "wall",
    "poseTemplate": "handstand",
    "cue": "בעמידת ידיים חזה לקיר לנתק בהונות של רגל אחת בכל פעם כשהשנייה נשארת בקיר; לחזור למגע בשליטה.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["shoulder_support", "elbow_extensors", "wrists"]
  },
  {
    "id": "farther-wall-toe-pull",
    "he": "ניתוק בהונות ממרחק קיר מוגדל",
    "en": "Longer-range wall toe pull",
    "parent": "handstand-toe-pull",
    "group": "push",
    "equipment": ["wall"],
    "level": 4,
    "movementPattern": "support",
    "movementSubtype": "support",
    "muscles": ["כתפיים", "יד אחורית", "ליבה"],
    "muscleGroups": ["shoulders", "core"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "wall",
    "poseTemplate": "handstand",
    "cue": "בעמידת ידיים חזה לקיר שנבדקה, להרחיק מעט יותר את הבהונות מהקיר בכל ניתוק ולחזור אליו בלי ליפול.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["shoulder_support", "elbow_extensors", "wrists"]
  },
  {
    "id": "wall-assisted-handstand-entry",
    "he": "כניסה לעמידת ידיים בסיוע קיר",
    "en": "Wall-assisted handstand entry",
    "parent": "handstand-free",
    "group": "push",
    "equipment": ["wall"],
    "level": 3,
    "movementPattern": "support",
    "movementSubtype": "support",
    "muscles": ["כתפיים", "יד אחורית", "ליבה"],
    "muscleGroups": ["shoulders", "core"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "wall",
    "poseTemplate": "inverted",
    "cue": "לתרגל כניסה נשלטת לעמידת ידיים כשהקיר מוכן לעצירה קלה של הרגליים; לספור ניסיון אחד לכל כניסה ויציאה.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["shoulder_support", "elbow_extensors", "wrists"]
  },
  {
    "id": "press-handstand-entry",
    "he": "כניסה לעמידת ידיים בדחיקה מכינוס",
    "en": "Tuck press handstand entry",
    "parent": "handstand-free",
    "group": "push",
    "equipment": [],
    "level": 5,
    "movementPattern": "support",
    "movementSubtype": "support",
    "muscles": ["כתפיים", "יד אחורית", "ליבה"],
    "muscleGroups": ["shoulders", "core"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "floor",
    "poseTemplate": "inverted",
    "cue": "בהדרכה להיכנס לעמידת ידיים בדחיקה מרגליים קרובות לידיים, ללא בעיטה; לחזור לקרקע ביציאה שנבדקה.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["shoulder_support", "elbow_extensors", "wrists"]
  },
  {
    "id": "short-wall-walk",
    "he": "הליכה קצרה לעמידת ידיים בקיר",
    "en": "Short-range wall walk",
    "parent": "wall-walk",
    "group": "push",
    "equipment": ["wall"],
    "level": 2,
    "movementPattern": "support",
    "movementSubtype": "support",
    "muscles": ["כתפיים", "יד אחורית", "ליבה"],
    "muscleGroups": ["chest", "shoulders", "arms"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "wall",
    "poseTemplate": "handstand",
    "cue": "מתמיכת ידיים ליד קיר לעלות ברגליים ולצעוד בידיים רק חלק מהדרך; לחזור באותה דרך בלי להתקרב לקיר מעבר לטווח שנבדק.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["shoulder_support", "elbow_extensors", "wrists"]
  },
  {
    "id": "close-wall-walk",
    "he": "הליכה לעמידת ידיים קרובה לקיר",
    "en": "Close-to-wall handstand walk",
    "parent": "wall-walk",
    "group": "push",
    "equipment": ["wall"],
    "level": 4,
    "movementPattern": "support",
    "movementSubtype": "support",
    "muscles": ["כתפיים", "יד אחורית", "ליבה"],
    "muscleGroups": ["chest", "shoulders", "arms"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "wall",
    "poseTemplate": "handstand",
    "cue": "לעלות בהליכה לעמידת ידיים בקיר ולהתקרב מעט יותר בידיים לפי טווח שנבדק; לחזור בהליכה בלי גלגול או נפילה.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["shoulder_support", "elbow_extensors", "wrists"]
  },
  {
    "id": "wall-scap-push",
    "he": "דחיקת שכמות בקיר",
    "en": "Wall scapular push-up",
    "parent": "scap-push",
    "group": "push",
    "equipment": ["wall"],
    "level": 1,
    "movementPattern": "scapular_control",
    "movementSubtype": "scapular_push",
    "muscles": ["מייצבי שכמות", "מסור קדמי", "ליבה"],
    "muscleGroups": ["shoulders", "chest"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "wall",
    "cue": "להניח ידיים בקיר ומרפקים ישרים; לקרב ולהרחיק שכמות בלי לכופף מרפקים ובלי להזיז את האגן.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["shoulder_support", "elbow_extensors", "wrists"]
  },
  {
    "id": "plank-scap-push",
    "he": "דחיקת שכמות בפלאנק",
    "en": "Plank scapular push-up",
    "parent": "scap-push",
    "group": "push",
    "equipment": [],
    "level": 2,
    "movementPattern": "scapular_control",
    "movementSubtype": "scapular_push",
    "muscles": ["מייצבי שכמות", "מסור קדמי", "ליבה"],
    "muscleGroups": ["shoulders", "chest"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "floor",
    "cue": "בתמיכת ידיים ורגליים ארוכות ברצפה לקרב ולהרחיק שכמות כשהמרפקים ישרים והאגן יציב.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["shoulder_support", "elbow_extensors", "wrists"]
  },
  {
    "id": "supported-squat",
    "he": "סקוואט בסיוע מוט",
    "en": "Bar-assisted squat",
    "parent": "squat",
    "group": "legs",
    "equipment": ["lowbar"],
    "level": 1,
    "movementPattern": "squat",
    "movementSubtype": "squat",
    "muscles": ["ירך קדמית", "ישבן"],
    "muscleGroups": ["legs", "glutes"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "lowbar",
    "cue": "לאחוז קלות במוט נמוך מעוגן; לכופף ברכיים וירכיים לסקוואט ולקום עם סיוע קטן מהידיים.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["knee_extensors", "hip_extensors"]
  },
  {
    "id": "sumo-squat-short",
    "he": "סקוואט רחב בטווח קצר",
    "en": "Short-range sumo squat",
    "parent": "sumo-squat",
    "group": "legs",
    "equipment": [],
    "level": 1,
    "movementPattern": "squat",
    "movementSubtype": "squat",
    "muscles": ["ירך קדמית", "ישבן", "מקרבי ירך"],
    "muscleGroups": ["legs", "glutes"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "floor",
    "cue": "לעמוד בפישוק רחב נוח ולכופף מעט ברכיים וירכיים; לשמור ברכיים בכיוון האצבעות ולחזור לעמידה.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["knee_extensors", "hip_extensors"]
  },
  {
    "id": "deep-sumo-squat",
    "he": "סקוואט רחב בטווח מוגדל",
    "en": "Longer-range sumo squat",
    "parent": "sumo-squat",
    "group": "legs",
    "equipment": [],
    "level": 2,
    "movementPattern": "squat",
    "movementSubtype": "squat",
    "muscles": ["ירך קדמית", "ישבן", "מקרבי ירך"],
    "muscleGroups": ["legs", "glutes"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "floor",
    "cue": "לעמוד בפישוק רחב נוח ולרדת מעט עמוק יותר רק כשהעקבים יציבים והגב נשאר נשלט; לעלות בלי תנופה.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["knee_extensors", "hip_extensors"]
  },
  {
    "id": "low-jump-squat",
    "he": "סקוואט בקפיצה קטנה",
    "en": "Low-height jump squat",
    "parent": "jump-squat",
    "group": "legs",
    "equipment": [],
    "level": 2,
    "movementPattern": "squat",
    "movementSubtype": "squat",
    "muscles": ["ירך קדמית", "ישבן", "שוקיים"],
    "muscleGroups": ["legs", "glutes"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "floor",
    "poseTemplate": "squat",
    "cue": "לרדת לסקוואט חלקי ולקפוץ מעט בלבד; לנחות ברכות באותו מנח עם ברכיים בכיוון האצבעות.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["knee_extensors", "hip_extensors"]
  },
  {
    "id": "deep-jump-squat",
    "he": "סקוואט בקפיצה מטווח מוגדל",
    "en": "Longer-range jump squat",
    "parent": "jump-squat",
    "group": "legs",
    "equipment": [],
    "level": 3,
    "movementPattern": "squat",
    "movementSubtype": "squat",
    "muscles": ["ירך קדמית", "ישבן", "שוקיים"],
    "muscleGroups": ["legs", "glutes"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "floor",
    "poseTemplate": "squat",
    "cue": "לרדת לסקוואט מעט עמוק יותר בטווח שנבדק ואז לקפוץ ולנחות ברכות; אין איסוף ברכיים נוסף באוויר.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["knee_extensors", "hip_extensors"]
  },
  {
    "id": "supported-split-squat",
    "he": "מכרע סטטי בסיוע מוט",
    "en": "Supported split squat",
    "parent": "split",
    "group": "legs",
    "equipment": ["lowbar"],
    "level": 1,
    "movementPattern": "single_leg",
    "movementSubtype": "single_leg",
    "muscles": ["ירך קדמית", "ישבן"],
    "muscleGroups": ["legs", "glutes"],
    "unit": "reps",
    "perSide": true,
    "advancedOnly": false,
    "apparatus": "lowbar",
    "cue": "לעמוד במנח מפוצל ולאחוז קלות במוט מעוגן; לכופף ברכיים במקום ולעלות עם סיוע ידיים קטן.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["knee_extensors", "hip_extensors"]
  },
  {
    "id": "rear-foot-elevated-split",
    "he": "סקוואט בולגרי (רגל אחורית מוגבהת)",
    "en": "Rear-foot-elevated split squat",
    "parent": "split",
    "group": "legs",
    "equipment": ["bench"],
    "level": 3,
    "movementPattern": "single_leg",
    "movementSubtype": "single_leg",
    "muscles": ["ירך קדמית", "ישבן"],
    "muscleGroups": ["legs", "glutes"],
    "unit": "reps",
    "perSide": true,
    "advancedOnly": false,
    "apparatus": "bench",
    "cue": "להניח גב כף רגל אחורית על ספסל מעוגן; לכופף ברך קדמית ולעלות בלי להזיז את הרגליים.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["knee_extensors", "hip_extensors"]
  },
  {
    "id": "supported-reverse-lunge",
    "he": "מכרע לאחור בסיוע מוט",
    "en": "Supported reverse lunge",
    "parent": "reverse-lunge",
    "group": "legs",
    "equipment": ["lowbar"],
    "level": 1,
    "movementPattern": "single_leg",
    "movementSubtype": "single_leg",
    "muscles": ["ירך קדמית", "ישבן"],
    "muscleGroups": ["legs", "glutes"],
    "unit": "reps",
    "perSide": true,
    "advancedOnly": false,
    "apparatus": "lowbar",
    "cue": "לאחוז במוט מעוגן ולצעוד לאחור למכרע; לכופף ברכיים בטווח נוח ולחזור בסיוע ידיים קטן.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["knee_extensors", "hip_extensors"]
  },
  {
    "id": "long-range-reverse-lunge",
    "he": "מכרע לאחור בטווח מוגדל",
    "en": "Longer-range reverse lunge",
    "parent": "reverse-lunge",
    "group": "legs",
    "equipment": [],
    "level": 3,
    "movementPattern": "single_leg",
    "movementSubtype": "single_leg",
    "muscles": ["ירך קדמית", "ישבן"],
    "muscleGroups": ["legs", "glutes"],
    "unit": "reps",
    "perSide": true,
    "advancedOnly": false,
    "apparatus": "floor",
    "cue": "לצעוד לאחור לאותו מכרע ולכופף מעט יותר בטווח נשלט; לשמור כף רגל תומכת יציבה ולחזור בלי תנופה.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["knee_extensors", "hip_extensors"]
  },
  {
    "id": "supported-lateral-lunge",
    "he": "מכרע צידי בסיוע מוט",
    "en": "Supported lateral lunge",
    "parent": "lateral-lunge",
    "group": "legs",
    "equipment": ["lowbar"],
    "level": 1,
    "movementPattern": "single_leg",
    "movementSubtype": "single_leg",
    "muscles": ["ירך קדמית", "ישבן", "מקרבי ירך"],
    "muscleGroups": ["legs", "glutes"],
    "unit": "reps",
    "perSide": true,
    "advancedOnly": false,
    "apparatus": "lowbar",
    "cue": "לאחוז במוט מעוגן ולצעוד לצד למכרע; לכופף ברכיים בטווח נוח ולחזור בסיוע ידיים קטן.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["knee_extensors", "hip_extensors"]
  },
  {
    "id": "long-range-lateral-lunge",
    "he": "מכרע צידי בטווח מוגדל",
    "en": "Longer-range lateral lunge",
    "parent": "lateral-lunge",
    "group": "legs",
    "equipment": [],
    "level": 3,
    "movementPattern": "single_leg",
    "movementSubtype": "single_leg",
    "muscles": ["ירך קדמית", "ישבן", "מקרבי ירך"],
    "muscleGroups": ["legs", "glutes"],
    "unit": "reps",
    "perSide": true,
    "advancedOnly": false,
    "apparatus": "floor",
    "cue": "לצעוד לצד לאותו מכרע ולכופף מעט יותר בטווח נשלט; לשמור כף רגל תומכת יציבה ולחזור בלי תנופה.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["knee_extensors", "hip_extensors"]
  },
  {
    "id": "supported-forward-lunge",
    "he": "מכרע קדמי בסיוע מוט",
    "en": "Supported forward lunge",
    "parent": "lunge",
    "group": "legs",
    "equipment": ["lowbar"],
    "level": 1,
    "movementPattern": "single_leg",
    "movementSubtype": "single_leg",
    "muscles": ["ירך קדמית", "ישבן", "מייצבי אגן"],
    "muscleGroups": ["legs", "glutes"],
    "unit": "reps",
    "perSide": true,
    "advancedOnly": false,
    "apparatus": "lowbar",
    "poseTemplate": "split",
    "cue": "לאחוז במוט מעוגן ולצעוד קדימה למכרע; לכופף ברכיים בטווח נוח ולחזור בסיוע ידיים קטן.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["knee_extensors", "hip_extensors"]
  },
  {
    "id": "long-range-forward-lunge",
    "he": "מכרע קדמי בטווח מוגדל",
    "en": "Longer-range forward lunge",
    "parent": "lunge",
    "group": "legs",
    "equipment": [],
    "level": 3,
    "movementPattern": "single_leg",
    "movementSubtype": "single_leg",
    "muscles": ["ירך קדמית", "ישבן", "מייצבי אגן"],
    "muscleGroups": ["legs", "glutes"],
    "unit": "reps",
    "perSide": true,
    "advancedOnly": false,
    "apparatus": "floor",
    "poseTemplate": "split",
    "cue": "לצעוד קדימה לאותו מכרע ולכופף מעט יותר בטווח נשלט; לשמור כף רגל תומכת יציבה ולחזור בלי תנופה.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["knee_extensors", "hip_extensors"]
  },
  {
    "id": "band-assisted-pistol",
    "he": "פיסטול בסיוע גומייה",
    "en": "Band-assisted pistol squat",
    "parent": "pistol",
    "group": "legs",
    "equipment": ["bar", "band"],
    "level": 3,
    "movementPattern": "single_leg",
    "movementSubtype": "single_leg",
    "muscles": ["ירך קדמית", "ישבן", "מייצבי אגן"],
    "muscleGroups": ["legs", "glutes"],
    "unit": "reps",
    "perSide": true,
    "advancedOnly": true,
    "apparatus": "bar",
    "cue": "לעגן גומייה למוט מעל הגוף ולאחוז בה לסיוע; לרדת ולקום על רגל אחת כשהרגל השנייה ישרה לפנים.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["knee_extensors", "hip_extensors"]
  },
  {
    "id": "ring-assisted-pistol",
    "he": "פיסטול בסיוע טבעות",
    "en": "Ring-assisted pistol squat",
    "parent": "pistol",
    "group": "legs",
    "equipment": ["rings"],
    "level": 3,
    "movementPattern": "single_leg",
    "movementSubtype": "single_leg",
    "muscles": ["ירך קדמית", "ישבן", "מייצבי אגן"],
    "muscleGroups": ["legs", "glutes"],
    "unit": "reps",
    "perSide": true,
    "advancedOnly": true,
    "apparatus": "rings",
    "cue": "לאחוז בטבעות מעוגנות ולרדת לפיסטול בטווח מלא שנבדק; להשתמש בידיים רק לסיוע הדרוש לעלייה.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["knee_extensors", "hip_extensors"]
  },
  {
    "id": "elevated-pistol",
    "he": "פיסטול על קופסה בטווח מוגדל",
    "en": "Elevated deficit pistol squat",
    "parent": "pistol",
    "group": "legs",
    "equipment": ["box"],
    "level": 4,
    "movementPattern": "single_leg",
    "movementSubtype": "single_leg",
    "muscles": ["ירך קדמית", "ישבן", "מייצבי אגן"],
    "muscleGroups": ["legs", "glutes"],
    "unit": "reps",
    "perSide": true,
    "advancedOnly": true,
    "apparatus": "box",
    "cue": "לעמוד על קופסה רחבה ומעוגנת כדי לאפשר לרגל החופשית לרדת מעט; לבצע פיסטול בטווח נשלט בלי לעבור את שפת הקופסה.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["knee_extensors", "hip_extensors"]
  },
  {
    "id": "supported-shrimp",
    "he": "סקוואט שרימפ בסיוע מוט",
    "en": "Supported shrimp squat",
    "parent": "shrimp-squat",
    "group": "legs",
    "equipment": ["lowbar"],
    "level": 2,
    "movementPattern": "single_leg",
    "movementSubtype": "single_leg",
    "muscles": ["ירך קדמית", "ישבן", "מייצבי אגן"],
    "muscleGroups": ["legs", "glutes"],
    "unit": "reps",
    "perSide": true,
    "advancedOnly": true,
    "apparatus": "lowbar",
    "poseTemplate": "squat",
    "cue": "לאחוז במוט מעוגן, לכופף רגל חופשית לאחור ולרדת על הרגל התומכת; לקום בסיוע היד לפי הצורך.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["knee_extensors", "hip_extensors"]
  },
  {
    "id": "elevated-shrimp",
    "he": "סקוואט שרימפ על קופסה",
    "en": "Elevated shrimp squat",
    "parent": "shrimp-squat",
    "group": "legs",
    "equipment": ["box"],
    "level": 4,
    "movementPattern": "single_leg",
    "movementSubtype": "single_leg",
    "muscles": ["ירך קדמית", "ישבן", "מייצבי אגן"],
    "muscleGroups": ["legs", "glutes"],
    "unit": "reps",
    "perSide": true,
    "advancedOnly": true,
    "apparatus": "box",
    "poseTemplate": "squat",
    "cue": "לעמוד על קופסה רחבה ומעוגנת ולרדת על רגל אחת עם הרגל החופשית כפופה לאחור; להוסיף טווח קטן בלבד שנבדק.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["knee_extensors", "hip_extensors"]
  },
  {
    "id": "short-calf-raise",
    "he": "הרמות עקבים בטווח קצר",
    "en": "Short-range calf raise",
    "parent": "calf",
    "group": "legs",
    "equipment": [],
    "level": 1,
    "movementPattern": "calf",
    "movementSubtype": "calf",
    "muscles": ["שוקיים"],
    "muscleGroups": ["legs"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "floor",
    "cue": "לעמוד בשתי רגליים ולהרים עקבים מעט בלבד; להוריד בשליטה בלי לגלגל את הקרסול החוצה.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": []
  },
  {
    "id": "shallow-wall-sit",
    "he": "ישיבת קיר גבוהה",
    "en": "Shallow wall sit",
    "parent": "wall-sit",
    "group": "legs",
    "equipment": ["wall"],
    "level": 1,
    "movementPattern": "squat",
    "movementSubtype": "squat",
    "muscles": ["ירך קדמית", "ישבן"],
    "muscleGroups": ["legs", "glutes"],
    "unit": "seconds",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "wall",
    "cue": "להישען בגב על קיר ולהחליק לישיבה גבוהה עם כיפוף ברכיים קטן; להחזיק עקבים בקרקע.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["knee_extensors", "hip_extensors"]
  },
  {
    "id": "single-leg-wall-sit",
    "he": "ישיבת קיר על רגל אחת",
    "en": "Single-leg wall sit",
    "parent": "wall-sit",
    "group": "legs",
    "equipment": ["wall"],
    "level": 3,
    "movementPattern": "squat",
    "movementSubtype": "squat",
    "muscles": ["ירך קדמית", "ישבן"],
    "muscleGroups": ["legs", "glutes"],
    "unit": "seconds",
    "perSide": true,
    "advancedOnly": true,
    "apparatus": "wall",
    "cue": "להחזיק ישיבת קיר בטווח שנבדק ולהרים רגל אחת מעט מהרצפה; לשמור אגן ישר ולתרגל לשני הצדדים.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["knee_extensors", "hip_extensors"]
  },
  {
    "id": "short-glute-bridge",
    "he": "גשר ישבן בטווח קצר",
    "en": "Short-range glute bridge",
    "parent": "bridge",
    "group": "legs",
    "equipment": [],
    "level": 1,
    "movementPattern": "hip_extension",
    "movementSubtype": "hip_extension",
    "muscles": ["ישבן", "ירך אחורית"],
    "muscleGroups": ["glutes", "legs"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "floor",
    "cue": "לשכב עם ברכיים כפופות וכפות רגליים בקרקע; להרים אגן מעט ולרדת בלי להקשית את הגב.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["hip_extensors"]
  },
  {
    "id": "small-bridge-march",
    "he": "צעידה בגשר בהרמת רגל קטנה",
    "en": "Low-lift bridge march",
    "parent": "bridge-march",
    "group": "legs",
    "equipment": [],
    "level": 1,
    "movementPattern": "hip_extension",
    "movementSubtype": "hip_extension",
    "muscles": ["ישבן", "ליבה"],
    "muscleGroups": ["glutes", "core"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "floor",
    "cue": "להחזיק אגן מורם בגשר ולהרים כף רגל רק מעט, לסירוגין; לא לאפשר סיבוב באגן.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["hip_extensors"]
  },
  {
    "id": "long-lever-bridge-march",
    "he": "צעידה בגשר במנוף ארוך",
    "en": "Long-lever bridge march",
    "parent": "bridge-march",
    "group": "legs",
    "equipment": [],
    "level": 3,
    "movementPattern": "hip_extension",
    "movementSubtype": "hip_extension",
    "muscles": ["ישבן", "ליבה"],
    "muscleGroups": ["glutes", "core"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "floor",
    "cue": "להחזיק גשר עם כפות רגליים מעט רחוקות יותר מהאגן ולצעוד בהרמות קטנות; לשמור אגן יציב בלי קשת בגב.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["hip_extensors"]
  },
  {
    "id": "wall-supported-hinge",
    "he": "ציר ירך עם תמיכת קיר",
    "en": "Wall-supported hip hinge",
    "parent": "hinge",
    "group": "legs",
    "equipment": ["wall"],
    "level": 1,
    "movementPattern": "hinge",
    "movementSubtype": "hinge",
    "muscles": ["ירך אחורית", "ישבן"],
    "muscleGroups": ["glutes", "legs"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "wall",
    "cue": "לעמוד לפני קיר ולשלוח אגן לאחור עד מגע קל בקיר, עם ברכיים רכות וגב ארוך; לחזור לעמידה.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["hip_extensors", "knee_flexors"]
  },
  {
    "id": "short-clamshell",
    "he": "פתיחת ברך בשכיבה בטווח קצר",
    "en": "Short-range clamshell",
    "parent": "clamshell",
    "group": "legs",
    "equipment": [],
    "level": 1,
    "movementPattern": "hip_external_rotation",
    "movementSubtype": "hip_external_rotation",
    "muscles": ["ישבן", "מסובבי ירך"],
    "muscleGroups": ["glutes"],
    "unit": "reps",
    "perSide": true,
    "advancedOnly": false,
    "apparatus": "floor",
    "cue": "לשכב על הצד עם ברכיים כפופות ועקבים יחד; לפתוח מעט ברך עליונה בלי לסובב אגן.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": []
  },
  {
    "id": "band-clamshell",
    "he": "פתיחת ברך בשכיבה עם גומייה",
    "en": "Band clamshell",
    "parent": "clamshell",
    "group": "legs",
    "equipment": ["band"],
    "level": 2,
    "movementPattern": "hip_external_rotation",
    "movementSubtype": "hip_external_rotation",
    "muscles": ["ישבן", "מסובבי ירך"],
    "muscleGroups": ["glutes"],
    "unit": "reps",
    "perSide": true,
    "advancedOnly": false,
    "apparatus": "band",
    "cue": "להניח גומייה בדוקה מעל הברכיים בשכיבה על הצד; לפתוח ברך עליונה נגד התנגדות בלי לגלגל אגן לאחור.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": []
  },
  {
    "id": "bent-knee-side-raise",
    "he": "הרמת רגל צידית בברך כפופה",
    "en": "Bent-knee side-lying leg raise",
    "parent": "side-leg-raise",
    "group": "legs",
    "equipment": [],
    "level": 1,
    "movementPattern": "hip_abduction",
    "movementSubtype": "hip_abduction",
    "muscles": ["מרחיקי ירך", "ישבן"],
    "muscleGroups": ["glutes"],
    "unit": "reps",
    "perSide": true,
    "advancedOnly": false,
    "apparatus": "floor",
    "cue": "לשכב על הצד ולכופף את הברך העליונה; להרים את הירך הצידה בלי לפתוח ברך בסיבוב ובלי לסובב אגן.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": []
  },
  {
    "id": "band-side-leg-raise",
    "he": "הרמת רגל צידית עם גומייה",
    "en": "Band side-lying leg raise",
    "parent": "side-leg-raise",
    "group": "legs",
    "equipment": ["band"],
    "level": 2,
    "movementPattern": "hip_abduction",
    "movementSubtype": "hip_abduction",
    "muscles": ["מרחיקי ירך", "ישבן"],
    "muscleGroups": ["glutes"],
    "unit": "reps",
    "perSide": true,
    "advancedOnly": false,
    "apparatus": "band",
    "cue": "להניח גומייה בדוקה מעל הקרסוליים בשכיבה על הצד; להרים רגל ישרה הצידה ולרדת בשליטה.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": []
  },
  {
    "id": "band-nordic-negative",
    "he": "נורדיק בירידה בסיוע גומייה",
    "en": "Band-assisted Nordic negative",
    "parent": "nordic-negative",
    "group": "legs",
    "equipment": ["band"],
    "level": 3,
    "movementPattern": "knee_flexion",
    "movementSubtype": "knee_flexion",
    "muscles": ["ירך אחורית", "שוקיים"],
    "muscleGroups": ["glutes", "legs"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "band",
    "poseTemplate": "nordic",
    "cue": "בהדרכה לבדוק עיגון לקרסוליים וגומייה מסייעת לגו; לרדת לאט בכיפוף ברכיים ולסיים בתמיכת ידיים.",
    "novelEccentric": true,
    "demandingStraightArm": false,
    "loadingTags": ["knee_flexors"]
  },
  {
    "id": "near-heel-dig-hold",
    "poseTemplate": "floorSupine",
    "he": "לחיצת עקבים בברכיים כפופות יותר",
    "en": "Short-lever heel dig hold",
    "parent": "heel-dig-hold",
    "group": "legs",
    "equipment": [],
    "level": 1,
    "movementPattern": "knee_flexion",
    "movementSubtype": "knee_flexion",
    "muscles": ["ישבן", "ירך אחורית"],
    "muscleGroups": ["glutes", "legs"],
    "unit": "seconds",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "floor",
    "cue": "לשכב עם אגן בקרקע ועקבים קרובים יחסית לאגן; ללחוץ עקבים קלות מטה וכאילו לכיוון הישבן בלי תנועה.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["knee_flexors"]
  },
  {
    "id": "far-heel-dig-hold",
    "poseTemplate": "floorSupine",
    "he": "לחיצת עקבים במנוף ארוך",
    "en": "Long-lever heel dig hold",
    "parent": "heel-dig-hold",
    "group": "legs",
    "equipment": [],
    "level": 2,
    "movementPattern": "knee_flexion",
    "movementSubtype": "knee_flexion",
    "muscles": ["ישבן", "ירך אחורית"],
    "muscleGroups": ["glutes", "legs"],
    "unit": "seconds",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "floor",
    "cue": "לשכב עם אגן בקרקע ועקבים מעט רחוקים יותר מהאגן; ללחוץ מטה וכאילו לכיוון הישבן בלי להרים אגן ובלי התכווצות מכאיבה.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["knee_flexors"]
  },
  {
    "id": "long-lever-deadbug",
    "he": "דד באג במנוף ארוך",
    "en": "Long-lever dead bug",
    "parent": "deadbug",
    "group": "core",
    "equipment": [],
    "level": 2,
    "movementPattern": "core_anti_extension",
    "movementSubtype": "core_anti_extension",
    "muscles": ["ליבה", "מכופפי ירך"],
    "muscleGroups": ["core"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "floor",
    "cue": "לשכב על הגב ולהרחיק יד ורגל נגדית כשהברך מתיישרת יותר; לשמור גב נינוח ולחזור לפני קשת בגב.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": []
  },
  {
    "id": "short-bird-dog",
    "he": "בירד דוג במנוף קצר",
    "en": "Short-lever bird dog",
    "parent": "bird-dog",
    "group": "core",
    "equipment": [],
    "level": 1,
    "movementPattern": "core_anti_rotation",
    "movementSubtype": "core_anti_rotation",
    "muscles": ["ליבה", "מייצבי גב", "ישבן"],
    "muscleGroups": ["core"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "floor",
    "cue": "מעמידת שש להרים מעט יד ורגל נגדית כשהמרפק והברך כפופים; לשמור אגן יציב ולהחליף צד.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["shoulder_support", "wrists"]
  },
  {
    "id": "band-bird-dog",
    "he": "בירד דוג עם גומייה",
    "en": "Band bird dog",
    "parent": "bird-dog",
    "group": "core",
    "equipment": ["band"],
    "level": 2,
    "movementPattern": "core_anti_rotation",
    "movementSubtype": "core_anti_rotation",
    "muscles": ["ליבה", "מייצבי גב", "ישבן"],
    "muscleGroups": ["core"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "band",
    "cue": "מעמידת שש להאריך יד ורגל נגדית עם גומייה בדוקה בין כף היד לכף הרגל; לשמור אגן ישר בלי סיבוב.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["shoulder_support", "wrists"]
  },
  {
    "id": "knee-plank",
    "he": "פלאנק על ברכיים",
    "en": "Kneeling forearm plank",
    "parent": "plank",
    "group": "core",
    "equipment": [],
    "level": 1,
    "movementPattern": "core_anti_extension",
    "movementSubtype": "core_anti_extension",
    "muscles": ["ליבה", "מייצבי כתפיים"],
    "muscleGroups": ["core"],
    "unit": "seconds",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "floor",
    "cue": "להניח אמות וברכיים ברצפה ולהחזיק קו ראש עד ברכיים; לנשום בלי לשקוע בגב.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["shoulder_support", "wrists"]
  },
  {
    "id": "long-lever-plank",
    "he": "פלאנק במנוף ארוך",
    "en": "Long-lever forearm plank",
    "parent": "plank",
    "group": "core",
    "equipment": [],
    "level": 3,
    "movementPattern": "core_anti_extension",
    "movementSubtype": "core_anti_extension",
    "muscles": ["ליבה", "מייצבי כתפיים"],
    "muscleGroups": ["core"],
    "unit": "seconds",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "floor",
    "cue": "להחזיק פלאנק על אמות כשהמרפקים מעט לפני הכתפיים; לשמור אגן יציב ולבחור מרחק שנשלט.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["shoulder_support", "wrists"]
  },
  {
    "id": "incline-high-plank",
    "he": "פלאנק ידיים בשיפוע",
    "en": "Incline high plank",
    "parent": "high-plank",
    "group": "core",
    "equipment": ["lowbar"],
    "level": 1,
    "movementPattern": "core_anti_extension",
    "movementSubtype": "core_anti_extension",
    "muscles": ["ליבה", "מייצבי כתפיים", "מסור קדמי"],
    "muscleGroups": ["core"],
    "unit": "seconds",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "lowbar",
    "poseTemplate": "straightPlank",
    "cue": "להניח כפות ידיים על מוט נמוך מעוגן ולהחזיק גוף ישר במרפקים ישרים.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": []
  },
  {
    "id": "long-lever-high-plank",
    "he": "פלאנק ידיים במנוף ארוך",
    "en": "Long-lever high plank",
    "parent": "high-plank",
    "group": "core",
    "equipment": [],
    "level": 3,
    "movementPattern": "core_anti_extension",
    "movementSubtype": "core_anti_extension",
    "muscles": ["ליבה", "מייצבי כתפיים", "מסור קדמי"],
    "muscleGroups": ["core"],
    "unit": "seconds",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "floor",
    "poseTemplate": "straightPlank",
    "cue": "להחזיק תמיכת ידיים ברצפה כשהידיים מעט לפני הכתפיים; לשמור מרפקים ישרים ואגן יציב.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": []
  },
  {
    "id": "feet-supported-hollow",
    "he": "החזקת הולו בסיוע עקבים",
    "en": "Heel-supported hollow hold",
    "parent": "hollow",
    "group": "core",
    "equipment": [],
    "level": 1,
    "movementPattern": "core_anti_extension",
    "movementSubtype": "core_anti_extension",
    "muscles": ["ליבה", "מכופפי ירך"],
    "muscleGroups": ["core"],
    "unit": "seconds",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "floor",
    "cue": "לשכב על הגב, להרים מעט כתפיים ולהשאיר עקבים נושאי משקל ברצפה; להחזיק בטן אסופה בלי לחץ בצוואר.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": []
  },
  {
    "id": "long-hollow",
    "he": "החזקת הולו במנוף ארוך",
    "en": "Straight-leg hollow hold",
    "parent": "hollow",
    "group": "core",
    "equipment": [],
    "level": 3,
    "movementPattern": "core_anti_extension",
    "movementSubtype": "core_anti_extension",
    "muscles": ["ליבה", "מכופפי ירך"],
    "muscleGroups": ["core"],
    "unit": "seconds",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "floor",
    "cue": "לשכב על הגב ולהרים מעט כתפיים ורגליים ישרות; להאריך ידיים רק במידה שהגב נשאר נינוח.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": []
  },
  {
    "id": "star-side-plank",
    "he": "פלאנק צידי ברגל עליונה מורמת",
    "en": "Star side plank",
    "parent": "side-plank",
    "group": "core",
    "equipment": [],
    "level": 3,
    "movementPattern": "core_lateral_stability",
    "movementSubtype": "core_lateral_stability",
    "muscles": ["אלכסוני הבטן", "מייצבי כתפיים", "מייצבי אגן"],
    "muscleGroups": ["core"],
    "unit": "seconds",
    "perSide": true,
    "advancedOnly": false,
    "apparatus": "floor",
    "cue": "להחזיק פלאנק צידי על אמה ולהרים מעט את הרגל העליונה; לשמור אגן בקו ולתרגל לשני הצדדים.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["shoulder_support", "wrists"]
  },
  {
    "id": "assisted-copenhagen",
    "he": "קופנהגן בסיוע רגל תחתונה",
    "en": "Foot-assisted Copenhagen plank",
    "parent": "copenhagen-plank",
    "group": "core",
    "equipment": ["bench"],
    "level": 2,
    "movementPattern": "core_lateral_stability",
    "movementSubtype": "core_lateral_stability",
    "muscles": ["מקרבי ירך", "אלכסוני הבטן"],
    "muscleGroups": ["core"],
    "unit": "seconds",
    "perSide": true,
    "advancedOnly": true,
    "apparatus": "bench",
    "poseTemplate": "side",
    "cue": "להניח ברך עליונה כפופה על ספסל מעוגן וכף רגל תחתונה בקרקע לסיוע; להחזיק אגן יציב.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": []
  },
  {
    "id": "long-copenhagen",
    "he": "קופנהגן במנוף ארוך",
    "en": "Long-lever Copenhagen plank",
    "parent": "copenhagen-plank",
    "group": "core",
    "equipment": ["bench"],
    "level": 4,
    "movementPattern": "core_lateral_stability",
    "movementSubtype": "core_lateral_stability",
    "muscles": ["מקרבי ירך", "אלכסוני הבטן"],
    "muscleGroups": ["core"],
    "unit": "seconds",
    "perSide": true,
    "advancedOnly": true,
    "apparatus": "bench",
    "poseTemplate": "side",
    "cue": "להניח שוק או קרסול עליונים על ספסל מעוגן בטווח שנבדק ולהחזיק אגן מורם; אין הרמות דינמיות.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": []
  },
  {
    "id": "supported-standing-knee",
    "he": "הרמת ברך בעמידה בסיוע קיר",
    "en": "Wall-supported standing knee raise",
    "parent": "standing-knee",
    "group": "core",
    "equipment": ["wall"],
    "level": 1,
    "movementPattern": "compression",
    "movementSubtype": "compression",
    "muscles": ["מכופפי ירך", "ליבה"],
    "muscleGroups": ["core"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "wall",
    "cue": "להניח יד בקיר לאיזון ולהרים ברך כפופה קדימה; להוריד בשליטה בלי להטות את הגו.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["shoulder_support", "elbow_extensors", "wrists"]
  },
  {
    "id": "standing-straight-leg-raise",
    "he": "הרמת רגל ישרה בעמידה",
    "en": "Standing straight-leg raise",
    "parent": "standing-knee",
    "group": "core",
    "equipment": [],
    "level": 2,
    "movementPattern": "compression",
    "movementSubtype": "compression",
    "muscles": ["מכופפי ירך", "ליבה"],
    "muscleGroups": ["core"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "floor",
    "cue": "לעמוד יציב ולהרים רגל קדימה עם ברך ישרה ככל שנשלט; לשמור אגן ישר ולהחליף צד.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["shoulder_support", "elbow_extensors", "wrists"]
  },
  {
    "id": "bent-knee-compression-lift",
    "he": "הרמות דחיסה בברכיים כפופות",
    "en": "Bent-knee seated compression lift",
    "parent": "compression-lift",
    "group": "core",
    "equipment": [],
    "level": 1,
    "movementPattern": "compression",
    "movementSubtype": "compression",
    "muscles": ["ליבה", "מכופפי ירך", "יד אחורית"],
    "muscleGroups": ["core"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "floor",
    "poseTemplate": "sit",
    "cue": "לשבת בידיים לצד האגן וברכיים כפופות; להרים עקבים מעט יחד בלי להישען לאחור.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["shoulder_support", "elbow_extensors", "wrists"]
  },
  {
    "id": "long-lever-compression-lift",
    "he": "הרמות דחיסה בידיים קדימה",
    "en": "Forward-hand seated compression lift",
    "parent": "compression-lift",
    "group": "core",
    "equipment": [],
    "level": 3,
    "movementPattern": "compression",
    "movementSubtype": "compression",
    "muscles": ["ליבה", "מכופפי ירך", "יד אחורית"],
    "muscleGroups": ["core"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "floor",
    "poseTemplate": "sit",
    "cue": "לשבת ברגליים ישרות ולהניח ידיים מעט קדימה מהאגן; להרים עקבים מעט בלי לקפל ברכיים או להישען לאחור.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["shoulder_support", "elbow_extensors", "wrists"]
  },
  {
    "id": "short-seated-in-out",
    "he": "כיווץ ויישור בישיבה בטווח קצר",
    "en": "Short-range seated in-and-out",
    "parent": "seated-in-out",
    "group": "core",
    "equipment": [],
    "level": 1,
    "movementPattern": "compression",
    "movementSubtype": "compression",
    "muscles": ["ליבה", "מכופפי ירך"],
    "muscleGroups": ["core"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "floor",
    "poseTemplate": "sit",
    "cue": "לשבת בידיים תומכות לצד האגן; לקרב ולהרחיק ברכיים בטווח קטן כשהעקבים נשארים קרובים לקרקע.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["shoulder_support", "elbow_extensors", "wrists"]
  },
  {
    "id": "unsupported-seated-in-out",
    "he": "כיווץ ויישור בישיבה ללא תמיכת ידיים",
    "en": "Unsupported seated in-and-out",
    "parent": "seated-in-out",
    "group": "core",
    "equipment": [],
    "level": 3,
    "movementPattern": "compression",
    "movementSubtype": "compression",
    "muscles": ["ליבה", "מכופפי ירך"],
    "muscleGroups": ["core"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "floor",
    "poseTemplate": "sit",
    "cue": "לשבת באיזון ולהחזיק ידיים קדימה ללא תמיכה; לקרב ברכיים וליישר רגליים בטווח נשלט בלי לקרוס בגב.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["shoulder_support", "elbow_extensors", "wrists"]
  },
  {
    "id": "short-reverse-crunch",
    "he": "גלגול אגן בטווח קצר",
    "en": "Short-range reverse crunch",
    "parent": "reverse-crunch",
    "group": "core",
    "equipment": [],
    "level": 1,
    "movementPattern": "trunk_flexion",
    "movementSubtype": "trunk_flexion",
    "muscles": ["ליבה"],
    "muscleGroups": ["core"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "floor",
    "cue": "לשכב על הגב עם ברכיים כפופות; לגלגל אגן מעט בלבד ולהוריד בשליטה בלי לזרוק רגליים.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": []
  },
  {
    "id": "long-leg-reverse-crunch",
    "he": "גלגול אגן ברגליים ארוכות",
    "en": "Long-lever reverse crunch",
    "parent": "reverse-crunch",
    "group": "core",
    "equipment": [],
    "level": 2,
    "movementPattern": "trunk_flexion",
    "movementSubtype": "trunk_flexion",
    "muscles": ["ליבה"],
    "muscleGroups": ["core"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "floor",
    "cue": "לשכב על הגב ולהשאיר ברכיים פחות כפופות בזמן גלגול אגן קטן; להוריד בשליטה בלי תנופת רגליים.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": []
  },
  {
    "id": "short-bicycle-crunch",
    "he": "כפיפות אופניים במנוף קצר",
    "en": "Short-lever bicycle crunch",
    "parent": "bicycle-crunch",
    "group": "core",
    "equipment": [],
    "level": 1,
    "movementPattern": "trunk_flexion",
    "movementSubtype": "trunk_flexion",
    "muscles": ["ליבה", "אלכסוני הבטן", "מכופפי ירך"],
    "muscleGroups": ["core"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "floor",
    "poseTemplate": "supine",
    "cue": "לשכב על הגב ולבצע כיפוף וסיבוב קטן לעבר ברך נגדית; להשאיר את הרגל השנייה כפופה וקרובה לגוף.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": []
  },
  {
    "id": "long-bicycle-crunch",
    "he": "כפיפות אופניים במנוף ארוך",
    "en": "Long-lever bicycle crunch",
    "parent": "bicycle-crunch",
    "group": "core",
    "equipment": [],
    "level": 3,
    "movementPattern": "trunk_flexion",
    "movementSubtype": "trunk_flexion",
    "muscles": ["ליבה", "אלכסוני הבטן", "מכופפי ירך"],
    "muscleGroups": ["core"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "floor",
    "poseTemplate": "supine",
    "cue": "לשכב על הגב ולבצע כפיפת אופניים כשהרגל המתרחקת ישרה ונמוכה יותר רק כל עוד הגב נשאר נשלט.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": []
  },
  {
    "id": "bent-knee-toe-touch",
    "he": "נגיעות רגליים בברכיים כפופות",
    "en": "Bent-knee toe touch crunch",
    "parent": "toe-touch",
    "group": "core",
    "equipment": [],
    "level": 1,
    "movementPattern": "trunk_flexion",
    "movementSubtype": "trunk_flexion",
    "muscles": ["ליבה"],
    "muscleGroups": ["core"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "floor",
    "poseTemplate": "supine",
    "cue": "לשכב על הגב עם רגליים מורמות וברכיים כפופות; לכופף מעט את הגו ולשלוח ידיים לעבר כפות הרגליים בלי למשוך צוואר.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": []
  },
  {
    "id": "low-leg-toe-touch",
    "he": "נגיעות רגליים במנוף ארוך",
    "en": "Long-lever toe touch crunch",
    "parent": "toe-touch",
    "group": "core",
    "equipment": [],
    "level": 3,
    "movementPattern": "trunk_flexion",
    "movementSubtype": "trunk_flexion",
    "muscles": ["ליבה"],
    "muscleGroups": ["core"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "floor",
    "poseTemplate": "supine",
    "cue": "לשכב על הגב עם רגליים ישרות בזווית מעט נמוכה יותר; לכופף גו ולהושיט ידיים לכפות הרגליים רק בטווח שהגב שולט בו.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": []
  },
  {
    "id": "bent-knee-flutter",
    "he": "בעיטות לסירוגין בברכיים כפופות",
    "en": "Bent-knee flutter kick",
    "parent": "flutter-kick",
    "group": "core",
    "equipment": [],
    "level": 1,
    "movementPattern": "core_anti_extension",
    "movementSubtype": "core_anti_extension",
    "muscles": ["ליבה", "מכופפי ירך"],
    "muscleGroups": ["core"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "floor",
    "poseTemplate": "supine",
    "cue": "לשכב על הגב ולהניע רגליים לסירוגין בטווח קטן כשברכיים כפופות מעט והגב נשאר נינוח.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": []
  },
  {
    "id": "low-flutter-kick",
    "he": "בעיטות לסירוגין במנוף נמוך",
    "en": "Low-leg flutter kick",
    "parent": "flutter-kick",
    "group": "core",
    "equipment": [],
    "level": 3,
    "movementPattern": "core_anti_extension",
    "movementSubtype": "core_anti_extension",
    "muscles": ["ליבה", "מכופפי ירך"],
    "muscleGroups": ["core"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "floor",
    "poseTemplate": "supine",
    "cue": "לשכב על הגב ולהניע רגליים ישרות לסירוגין מעט קרוב יותר לרצפה; לעצור לפני קשת בגב.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": []
  },
  {
    "id": "incline-mountain-climber",
    "he": "מטפס הרים בשיפוע",
    "en": "Incline mountain climber",
    "parent": "mountain-climber",
    "group": "core",
    "equipment": ["lowbar"],
    "level": 1,
    "movementPattern": "core_anti_extension",
    "movementSubtype": "core_anti_extension",
    "muscles": ["ליבה", "מכופפי ירך", "מייצבי כתפיים"],
    "muscleGroups": ["core"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "lowbar",
    "poseTemplate": "straightPlank",
    "cue": "להניח ידיים על מוט נמוך מעוגן; לקרב ברך לסירוגין לחזה ולחזור לתמיכה בלי סיבוב אגן.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": []
  },
  {
    "id": "elevated-mountain-climber",
    "he": "מטפס הרים ברגליים מוגבהות",
    "en": "Feet-elevated mountain climber",
    "parent": "mountain-climber",
    "group": "core",
    "equipment": ["box"],
    "level": 3,
    "movementPattern": "core_anti_extension",
    "movementSubtype": "core_anti_extension",
    "muscles": ["ליבה", "מכופפי ירך", "מייצבי כתפיים"],
    "muscleGroups": ["core"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "box",
    "poseTemplate": "straightPlank",
    "cue": "להניח רגליים על קופסה נמוכה מעוגנת וידיים ברצפה; לקרב ברך לחזה ולהחזירה לקופסה בשליטה.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": []
  },
  {
    "id": "incline-plank-knee-elbow",
    "he": "פלאנק ברך למרפק בשיפוע",
    "en": "Incline plank knee-to-elbow",
    "parent": "plank-knee-elbow",
    "group": "core",
    "equipment": ["lowbar"],
    "level": 1,
    "movementPattern": "core_anti_rotation",
    "movementSubtype": "core_anti_rotation",
    "muscles": ["ליבה", "אלכסוני הבטן", "מייצבי כתפיים"],
    "muscleGroups": ["core"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "lowbar",
    "poseTemplate": "straightPlank",
    "cue": "להניח ידיים על מוט נמוך מעוגן; לקרב ברך למרפק באותו צד ולהחזיר בלי לגלגל אגן.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": []
  },
  {
    "id": "elevated-plank-knee-elbow",
    "he": "פלאנק ברך למרפק ברגליים מוגבהות",
    "en": "Feet-elevated plank knee-to-elbow",
    "parent": "plank-knee-elbow",
    "group": "core",
    "equipment": ["box"],
    "level": 3,
    "movementPattern": "core_anti_rotation",
    "movementSubtype": "core_anti_rotation",
    "muscles": ["ליבה", "אלכסוני הבטן", "מייצבי כתפיים"],
    "muscleGroups": ["core"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "box",
    "poseTemplate": "straightPlank",
    "cue": "מתמיכת רגליים על קופסה מעוגנת וידיים ברצפה לקרב ברך למרפק באותו צד, ולהחזיר בשליטה.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": []
  },
  {
    "id": "wide-base-shoulder-tap",
    "he": "נגיעות כתף בבסיס רחב",
    "en": "Wide-base plank shoulder tap",
    "parent": "shoulder-tap",
    "group": "core",
    "equipment": [],
    "level": 1,
    "movementPattern": "core_anti_rotation",
    "movementSubtype": "core_anti_rotation",
    "muscles": ["ליבה", "מייצבי כתפיים", "אלכסוני הבטן"],
    "muscleGroups": ["core"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "floor",
    "poseTemplate": "straightPlank",
    "cue": "בתמיכת ידיים לפסק רגליים רחב ולגעת ביד בכתף הנגדית לסירוגין; לשמור אגן יציב.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": []
  },
  {
    "id": "narrow-base-shoulder-tap",
    "he": "נגיעות כתף בבסיס צר",
    "en": "Narrow-base plank shoulder tap",
    "parent": "shoulder-tap",
    "group": "core",
    "equipment": [],
    "level": 3,
    "movementPattern": "core_anti_rotation",
    "movementSubtype": "core_anti_rotation",
    "muscles": ["ליבה", "מייצבי כתפיים", "אלכסוני הבטן"],
    "muscleGroups": ["core"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "floor",
    "poseTemplate": "straightPlank",
    "cue": "בתמיכת ידיים לקרב מעט רגליים ולגעת בכתף הנגדית לסירוגין בלי לסובב אגן.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": []
  },
  {
    "id": "knee-commando-plank",
    "he": "מעבר אמות לידיים על ברכיים",
    "en": "Kneeling commando plank",
    "parent": "commando-plank",
    "group": "core",
    "equipment": [],
    "level": 1,
    "movementPattern": "core_anti_rotation",
    "movementSubtype": "core_anti_rotation",
    "muscles": ["ליבה", "כתפיים", "יד אחורית"],
    "muscleGroups": ["core"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "floor",
    "poseTemplate": "straightPlank",
    "cue": "להניח ברכיים ברצפה ולעבור מאמות לכפות ידיים ובחזרה; להחליף יד מובילה בלי להזיז אגן.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": []
  },
  {
    "id": "elevated-commando-plank",
    "he": "מעבר אמות לידיים ברגליים מוגבהות",
    "en": "Feet-elevated commando plank",
    "parent": "commando-plank",
    "group": "core",
    "equipment": ["box"],
    "level": 3,
    "movementPattern": "core_anti_rotation",
    "movementSubtype": "core_anti_rotation",
    "muscles": ["ליבה", "כתפיים", "יד אחורית"],
    "muscleGroups": ["core"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "box",
    "poseTemplate": "straightPlank",
    "cue": "להניח רגליים על קופסה מעוגנת ולעבור מאמות לכפות ידיים ובחזרה עם אגן יציב; להחליף יד מובילה.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": []
  },
  {
    "id": "arms-side-superman",
    "he": "החזקת סופרמן בידיים לצד הגוף",
    "en": "Short-lever Superman hold",
    "parent": "superman-hold",
    "group": "core",
    "equipment": [],
    "level": 1,
    "movementPattern": "trunk_extension",
    "movementSubtype": "trunk_extension",
    "muscles": ["מייצבי גב", "ישבן", "כתף אחורית"],
    "muscleGroups": ["core"],
    "unit": "seconds",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "floor",
    "poseTemplate": "prone",
    "cue": "לשכב על הבטן עם ידיים לצד הגוף; להרים מעט חזה ורגליים ולהחזיק בלי לחץ בגב ובצוואר.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": []
  },
  {
    "id": "bent-knee-lying-leg-raise",
    "he": "הרמת רגליים בשכיבה בברכיים כפופות",
    "en": "Bent-knee lying leg raise",
    "parent": "lying-leg-raise",
    "group": "core",
    "equipment": [],
    "level": 1,
    "movementPattern": "compression",
    "movementSubtype": "compression",
    "muscles": ["ליבה", "מכופפי ירך"],
    "muscleGroups": ["core"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "floor",
    "poseTemplate": "supine",
    "cue": "לשכב על הגב ולהרים ולהוריד רגליים עם ברכיים כפופות; לשמור אגן שקט וללא גלגול או תנופה.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["shoulder_support", "elbow_extensors", "wrists"]
  },
  {
    "id": "low-range-lying-leg-raise",
    "he": "הרמת רגליים בשכיבה בטווח נמוך",
    "en": "Longer-range lying leg raise",
    "parent": "lying-leg-raise",
    "group": "core",
    "equipment": [],
    "level": 3,
    "movementPattern": "compression",
    "movementSubtype": "compression",
    "muscles": ["ליבה", "מכופפי ירך"],
    "muscleGroups": ["core"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "floor",
    "poseTemplate": "supine",
    "cue": "לשכב על הגב ולהוריד רגליים ישרות מעט קרוב יותר לרצפה לפני ההרמה; לעצור לפני קשת בגב.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["shoulder_support", "elbow_extensors", "wrists"]
  },
  {
    "id": "tuck-v-up",
    "he": "עליות בטן בצורת וי בברכיים כפופות",
    "en": "Tuck V-up",
    "parent": "v-up",
    "group": "core",
    "equipment": [],
    "level": 2,
    "movementPattern": "compression",
    "movementSubtype": "compression",
    "muscles": ["ליבה", "מכופפי ירך"],
    "muscleGroups": ["core"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "floor",
    "poseTemplate": "sit",
    "cue": "לשכב על הגב ולהרים גו וברכיים כפופות זה אל זה; לחזור בשליטה בלי למשוך צוואר ובלי תנופת ידיים.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["shoulder_support", "elbow_extensors", "wrists"]
  },
  {
    "id": "tuck-dragon-negative",
    "he": "דגל דרקון בירידה מכווצת",
    "en": "Tuck dragon flag negative",
    "parent": "dragon-negative",
    "group": "core",
    "equipment": ["lowbar"],
    "level": 3,
    "movementPattern": "core_anti_extension",
    "movementSubtype": "core_anti_extension",
    "muscles": ["ליבה", "גב"],
    "muscleGroups": ["core"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "lowbar",
    "poseTemplate": "tuckhollow",
    "cue": "לאחוז בתמיכה מעוגנת ולרדת לאט כשהברכיים מכונסות; העומס נשאר על הגב העליון ללא לחץ בצוואר.",
    "novelEccentric": true,
    "demandingStraightArm": false,
    "loadingTags": []
  },
  {
    "id": "upright-ground-flag",
    "he": "הכנת דגל בקרקע בזווית זקופה",
    "en": "Upright ground-supported flag",
    "parent": "flag-ground",
    "group": "core",
    "equipment": ["pole"],
    "level": 3,
    "movementPattern": "support",
    "movementSubtype": "support",
    "muscles": ["אלכסוני הבטן", "כתפיים", "מייצבי אגן"],
    "muscleGroups": ["core"],
    "unit": "seconds",
    "perSide": true,
    "advancedOnly": true,
    "apparatus": "pole",
    "poseTemplate": "side",
    "cue": "לאחוז בעמוד מדורג ולשמור שתי כפות רגליים בקרקע קרוב יחסית לעמוד; להחזיק דחיקה ומשיכה מנוגדות.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["shoulder_support", "elbow_extensors", "wrists"]
  },
  {
    "id": "long-lever-ground-flag",
    "he": "הכנת דגל בקרקע במנוף ארוך",
    "en": "Long-lever ground-supported flag",
    "parent": "flag-ground",
    "group": "core",
    "equipment": ["pole"],
    "level": 4,
    "movementPattern": "support",
    "movementSubtype": "support",
    "muscles": ["אלכסוני הבטן", "כתפיים", "מייצבי אגן"],
    "muscleGroups": ["core"],
    "unit": "seconds",
    "perSide": true,
    "advancedOnly": true,
    "apparatus": "pole",
    "poseTemplate": "side",
    "cue": "לאחוז בעמוד מדורג ולהרחיק מעט את כפות הרגליים על הקרקע; להחזיק דחיקה ומשיכה מנוגדות בלי לנתק רגליים.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["shoulder_support", "elbow_extensors", "wrists"]
  },
  {
    "id": "straddle-assisted-flag",
    "he": "דגל בפישוק בסיוע מאמן",
    "en": "Coach-assisted straddle flag",
    "parent": "flag-tuck",
    "group": "core",
    "equipment": ["pole"],
    "level": 4,
    "movementPattern": "support",
    "movementSubtype": "support",
    "muscles": ["גב", "אלכסוני הבטן", "כתפיים"],
    "muscleGroups": ["core"],
    "unit": "seconds",
    "perSide": true,
    "advancedOnly": true,
    "apparatus": "pole",
    "poseTemplate": "leverTuck",
    "cue": "בהדרכה פרטנית לאחוז בעמוד מדורג ולהאריך רגליים בפישוק בסיוע מאמן מתועד; לבדוק כניסה ויציאה לפני ההחזקה.",
    "novelEccentric": false,
    "demandingStraightArm": true,
    "loadingTags": ["shoulder_support", "elbow_extensors", "wrists", "grip", "elbow_flexors"]
  },
  {
    "id": "band-full-flag",
    "he": "דגל מלא בסיוע גומייה",
    "en": "Band-assisted full human flag",
    "parent": "human-flag",
    "group": "core",
    "equipment": ["pole", "band"],
    "level": 5,
    "movementPattern": "support",
    "movementSubtype": "support",
    "muscles": ["גב", "אלכסוני הבטן", "כתפיים"],
    "muscleGroups": ["core"],
    "unit": "seconds",
    "perSide": true,
    "advancedOnly": true,
    "apparatus": "pole",
    "poseTemplate": "flag",
    "cue": "לעגן גומייה מסייעת לאגן על עמוד מדורג; להחזיק גוף ארוך וצמוד בקו דגל בטווח שנבדק עם מאמן.",
    "novelEccentric": false,
    "demandingStraightArm": true,
    "loadingTags": ["shoulder_support", "elbow_extensors", "wrists", "grip", "elbow_flexors"]
  },
  {
    "id": "low-march",
    "he": "צעידה במקום בהרמה נמוכה",
    "en": "Low-lift march",
    "parent": "march",
    "group": "fullbody",
    "equipment": [],
    "level": 1,
    "movementPattern": "locomotion",
    "movementSubtype": "locomotion",
    "muscles": ["מכופפי ירך", "שוקיים"],
    "muscleGroups": ["fullbody", "legs", "core"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "floor",
    "cue": "לצעוד במקום עם הרמה קטנה של כף הרגל; לשמור מגע רגל אחת בקרקע וללא ריצה.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["knee_extensors"]
  },
  {
    "id": "high-march",
    "he": "צעידה במקום בהרמת ברכיים גבוהה",
    "en": "High-range walking march",
    "parent": "march",
    "group": "fullbody",
    "equipment": [],
    "level": 2,
    "movementPattern": "locomotion",
    "movementSubtype": "locomotion",
    "muscles": ["מכופפי ירך", "שוקיים"],
    "muscleGroups": ["fullbody", "legs", "core"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "floor",
    "cue": "לצעוד במקום ולהרים ברך גבוה יותר בטווח נשלט; לשמור רגל אחת בקרקע ללא שלב תעופה.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["knee_extensors"]
  },
  {
    "id": "high-range-jumping-jack",
    "he": "קפיצות פישוק בטווח מוגדל",
    "en": "Longer-range jumping jack",
    "parent": "jumping-jack",
    "group": "fullbody",
    "equipment": [],
    "level": 2,
    "movementPattern": "locomotion",
    "movementSubtype": "locomotion",
    "muscles": ["רגליים", "שוקיים", "כתפיים"],
    "muscleGroups": ["fullbody", "legs"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "floor",
    "poseTemplate": "stand",
    "cue": "לקפוץ לפישוק מעט רחב יותר ולהרים ידיים באותו רצף; לנחות ברכות בלי להכריח טווח כתף או ירך.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["knee_extensors"]
  },
  {
    "id": "low-butt-kick",
    "he": "עקבים לישבן בטווח קצר",
    "en": "Low-range butt kick",
    "parent": "butt-kick",
    "group": "fullbody",
    "equipment": [],
    "level": 1,
    "movementPattern": "locomotion",
    "movementSubtype": "locomotion",
    "muscles": ["ירך אחורית", "שוקיים"],
    "muscleGroups": ["fullbody", "legs"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "floor",
    "poseTemplate": "stand",
    "cue": "לרוץ קלות במקום ולכופף ברך כך שהעקב עולה מעט לאחור; לנחות ברכות בלי להקשית גב.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["knee_extensors"]
  },
  {
    "id": "high-butt-kick",
    "he": "עקבים לישבן בטווח מוגדל",
    "en": "Longer-range butt kick",
    "parent": "butt-kick",
    "group": "fullbody",
    "equipment": [],
    "level": 2,
    "movementPattern": "locomotion",
    "movementSubtype": "locomotion",
    "muscles": ["ירך אחורית", "שוקיים"],
    "muscleGroups": ["fullbody", "legs"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "floor",
    "poseTemplate": "stand",
    "cue": "לרוץ קלות במקום ולקרב עקב מעט יותר לישבן בטווח נוח; לשמור גו זקוף וללא משיכת העקב ביד.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["knee_extensors"]
  },
  {
    "id": "low-running-knees",
    "he": "ריצה במקום בהרמת ברך נמוכה",
    "en": "Low-knee running in place",
    "parent": "high-knees",
    "group": "fullbody",
    "equipment": [],
    "level": 1,
    "movementPattern": "locomotion",
    "movementSubtype": "locomotion",
    "muscles": ["מכופפי ירך", "שוקיים", "ליבה"],
    "muscleGroups": ["fullbody", "legs"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "floor",
    "poseTemplate": "stand",
    "cue": "לרוץ במקום עם ברכיים נמוכות ונחיתות רכות; לשמור אותו קצב נוח ותנועת ידיים טבעית.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["knee_extensors"]
  },
  {
    "id": "high-range-running-knees",
    "he": "ריצה במקום בהרמת ברך מוגדלת",
    "en": "Higher-knee running in place",
    "parent": "high-knees",
    "group": "fullbody",
    "equipment": [],
    "level": 2,
    "movementPattern": "locomotion",
    "movementSubtype": "locomotion",
    "muscles": ["מכופפי ירך", "שוקיים", "ליבה"],
    "muscleGroups": ["fullbody", "legs"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "floor",
    "poseTemplate": "stand",
    "cue": "לרוץ במקום ולהרים ברכיים מעט גבוה יותר בטווח נשלט; לנחות ברכות בלי להישען לאחור.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["knee_extensors"]
  },
  {
    "id": "incline-half-burpee",
    "he": "חצי בורפי בשיפוע",
    "en": "Incline half burpee",
    "parent": "half-burpee",
    "group": "fullbody",
    "equipment": ["bench"],
    "level": 1,
    "movementPattern": "locomotion",
    "movementSubtype": "locomotion",
    "muscles": ["ליבה", "רגליים", "מייצבי כתפיים"],
    "muscleGroups": ["fullbody", "legs"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "bench",
    "poseTemplate": "straightPlank",
    "cue": "להניח ידיים על ספסל מעוגן, להעביר רגליים לתמיכה ולהחזירן ולהזדקף; ללא שכיבת סמיכה וללא קפיצה.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["knee_extensors"]
  },
  {
    "id": "long-range-half-burpee",
    "he": "חצי בורפי במנוף ארוך",
    "en": "Long-lever half burpee",
    "parent": "half-burpee",
    "group": "fullbody",
    "equipment": [],
    "level": 3,
    "movementPattern": "locomotion",
    "movementSubtype": "locomotion",
    "muscles": ["ליבה", "רגליים", "מייצבי כתפיים"],
    "muscleGroups": ["fullbody", "legs"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "floor",
    "poseTemplate": "straightPlank",
    "cue": "להניח ידיים מעט רחוק יותר לפני הרגליים ולהעביר רגליים לתמיכה ולהחזיר; להזדקף ללא שכיבת סמיכה או קפיצה.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["knee_extensors"]
  },
  {
    "id": "incline-burpee",
    "he": "בורפי מלא בשיפוע",
    "en": "Incline full burpee",
    "parent": "burpee",
    "group": "fullbody",
    "equipment": ["bench"],
    "level": 2,
    "movementPattern": "locomotion",
    "movementSubtype": "locomotion",
    "muscles": ["רגליים", "חזה", "יד אחורית", "ליבה"],
    "muscleGroups": ["fullbody", "legs"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "bench",
    "poseTemplate": "straightPlank",
    "cue": "להניח ידיים על ספסל מעוגן, לעבור לתמיכה ולבצע שכיבת סמיכה בשיפוע, להחזיר רגליים ולהזדקף לקפיצה קטנה.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["knee_extensors"]
  },
  {
    "id": "long-range-burpee",
    "he": "בורפי מלא במנוף ארוך",
    "en": "Long-lever full burpee",
    "parent": "burpee",
    "group": "fullbody",
    "equipment": [],
    "level": 4,
    "movementPattern": "locomotion",
    "movementSubtype": "locomotion",
    "muscles": ["רגליים", "חזה", "יד אחורית", "ליבה"],
    "muscleGroups": ["fullbody", "legs"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "floor",
    "poseTemplate": "straightPlank",
    "cue": "לבצע בורפי מלא עם הידיים מעט לפני הכתפיים בשלב שכיבת הסמיכה; להחזיר רגליים ולקפוץ קלות בסיום.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["knee_extensors"]
  },
  {
    "id": "incline-pike-walk",
    "he": "הליכת פייק בתמיכה מוגבהת",
    "en": "Incline pike walk",
    "parent": "pike-walk",
    "group": "fullbody",
    "equipment": ["bench"],
    "level": 1,
    "movementPattern": "locomotion",
    "movementSubtype": "locomotion",
    "muscles": ["כתפיים", "ליבה", "ירך אחורית"],
    "muscleGroups": ["fullbody", "legs"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "bench",
    "poseTemplate": "pike",
    "cue": "להניח ידיים על ספסל רחב ומעוגן, לצעוד בידיים מעט קדימה ולקרב רגליים לאגן גבוה בטווח נוח.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["knee_extensors"]
  },
  {
    "id": "long-range-pike-walk",
    "he": "הליכת פייק בטווח מוגדל",
    "en": "Longer-range pike walk",
    "parent": "pike-walk",
    "group": "fullbody",
    "equipment": [],
    "level": 3,
    "movementPattern": "locomotion",
    "movementSubtype": "locomotion",
    "muscles": ["כתפיים", "ליבה", "ירך אחורית"],
    "muscleGroups": ["fullbody", "legs"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "floor",
    "poseTemplate": "pike",
    "cue": "להניח ידיים ברצפה ולצעוד בהן מעט רחוק יותר קדימה לתמיכה ארוכה; לקרב רגליים לאגן גבוה בלי לקשת גב.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": ["knee_extensors"]
  },
  {
    "id": "short-wall-slide",
    "he": "החלקת זרועות בקיר בטווח קצר",
    "en": "Short-range wall slide",
    "parent": "wall-slide",
    "group": "mobility",
    "equipment": ["wall"],
    "level": 1,
    "movementPattern": "mobility",
    "movementSubtype": "mobility",
    "muscles": ["מייצבי שכמות", "כתפיים"],
    "muscleGroups": ["mobility"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "wall",
    "cue": "לעמוד ליד קיר ולהחליק זרועות מעט בלבד כלפי מעלה ובחזרה, בלי להקשית גב ובלי לכפות מגע.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": []
  },
  {
    "id": "short-cat-cow",
    "he": "קימור וקיעור בעמידת שש בטווח קצר",
    "en": "Short-range cat cow",
    "parent": "cat-cow",
    "group": "mobility",
    "equipment": [],
    "level": 1,
    "movementPattern": "mobility",
    "movementSubtype": "mobility",
    "muscles": ["תנועתיות עמוד שדרה"],
    "muscleGroups": ["mobility"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "apparatus": "floor",
    "cue": "בעמידת שש להניע עמוד שדרה בקימור וקיעור קטנים ונוחים עם נשימה, בלי להגיע לקצה הטווח.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": []
  },
  {
    "id": "short-thoracic-rotation",
    "he": "סיבוב בית חזה בטווח קצר",
    "en": "Short-range thoracic rotation",
    "parent": "thoracic-rotation",
    "group": "mobility",
    "equipment": [],
    "level": 1,
    "movementPattern": "mobility",
    "movementSubtype": "mobility",
    "muscles": ["תנועתיות בית חזה"],
    "muscleGroups": ["mobility"],
    "unit": "reps",
    "perSide": true,
    "advancedOnly": false,
    "apparatus": "floor",
    "cue": "בעמידת שש לבצע סיבוב קטן של בית החזה, לשמור אגן שקט ולחזור בלי למשוך צוואר.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": []
  },
  {
    "id": "short-ankle-rock",
    "he": "הנעת קרסול בטווח קצר",
    "en": "Short-range ankle rock",
    "parent": "ankle-rock",
    "group": "mobility",
    "equipment": ["wall"],
    "level": 1,
    "movementPattern": "mobility",
    "movementSubtype": "mobility",
    "muscles": ["תנועתיות קרסול", "שוקיים"],
    "muscleGroups": ["mobility"],
    "unit": "reps",
    "perSide": true,
    "advancedOnly": false,
    "apparatus": "wall",
    "cue": "בעמידת פסיעה להניע ברך מעט קדימה מעל כף הרגל כשהעקב בקרקע, בלי לקרוס פנימה.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": []
  },
  {
    "id": "short-back-bridge",
    "he": "גשר גב בטווח קצר",
    "en": "Short-range back bridge",
    "parent": "back-bridge",
    "group": "mobility",
    "equipment": [],
    "level": 2,
    "movementPattern": "mobility",
    "movementSubtype": "mobility",
    "muscles": ["מייצבי גב", "כתפיים", "ישבן", "תנועתיות עמוד שדרה"],
    "muscleGroups": ["mobility"],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": true,
    "apparatus": "floor",
    "poseTemplate": "bridge",
    "cue": "לשכב על הגב עם ידיים ליד האוזניים וכפות רגליים בקרקע; להרים אגן וחזה מעט רק אם הראש נשאר ללא עומס, ולרדת בשליטה.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": []
  },
  {
    "id": "light-band-external-rotation",
    "he": "סיבוב כתף חיצוני בגומייה קלה",
    "en": "Light-band shoulder external rotation",
    "parent": "band-external-rotation",
    "group": "mobility",
    "equipment": ["band"],
    "level": 1,
    "movementPattern": "shoulder_external_rotation",
    "movementSubtype": "shoulder_external_rotation",
    "muscles": ["מייצבי כתפיים", "כתף אחורית"],
    "muscleGroups": ["mobility"],
    "unit": "reps",
    "perSide": true,
    "advancedOnly": false,
    "apparatus": "band",
    "poseTemplate": "stand",
    "cue": "לעגן גומייה קלה ולשמור מרפק כפוף סמוך לגוף; לסובב אמה החוצה בטווח נוח בלי להזיז זרוע.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": []
  },
  {
    "id": "strong-band-external-rotation",
    "he": "סיבוב כתף חיצוני בגומייה חזקה יותר",
    "en": "Higher-resistance shoulder external rotation",
    "parent": "band-external-rotation",
    "group": "mobility",
    "equipment": ["band"],
    "level": 2,
    "movementPattern": "shoulder_external_rotation",
    "movementSubtype": "shoulder_external_rotation",
    "muscles": ["מייצבי כתפיים", "כתף אחורית"],
    "muscleGroups": ["mobility"],
    "unit": "reps",
    "perSide": true,
    "advancedOnly": false,
    "apparatus": "band",
    "poseTemplate": "stand",
    "cue": "לעגן גומייה בדירוג מעט חזק יותר; לסובב אמה החוצה כשהמרפק סמוך לגוף, באותו טווח נוח.",
    "novelEccentric": false,
    "demandingStraightArm": false,
    "loadingTags": []
  }
];
const variationGapExercises = variationGapSpecs.map(spec => ({
 ...spec,
 easy: 'להקטין טווח או לחזור לגרסה הקלה במשפחה.',
 instructions: [
  (spec.advancedOnly ? 'בהדרכה ולאחר בדיקת ציוד ויציאה בטוחה: ' : 'להתחיל במנח יציב ולבדוק מרחב פנוי. ') + spec.cue,
  'לבצע את התנועה בטווח המתואר, בלי תנופה ובלי לשנות את התמיכה במהלך הסט.',
  'לנשום ברצף ולסיים בשליטה לפני אובדן מנח או הופעת כאב.'
 ],
 mistakes: ['הגדלת טווח או הפחתת סיוע מעבר ליכולת לשמור על המנח המתואר.'],
 regressions: [], progressions: [], media: [], source_ids: [], sourceIds: [],
 reviewStatus: 'pending-review',
 sourceMatch: 'original-editorial-variation; exact-technique-not-verified',
 sourceNote: 'וריאציית השלמה מקורית למשפחת תנועה; הוראות, ציוד וטווח ממתינים לבדיקה פרטנית.'
}));
// Grounded preparations for otherwise fully locked skill families.
const groundedPreparations = [
  {
    "id": "plank-lean-preparation-short",
    "he": "הכנה להטיית גוף בתמיכה — תמיכה רבה",
    "en": "Foot-supported plank lean — short range",
    "group": "push",
    "equipment": [],
    "level": 1,
    "movementPattern": "support",
    "movementSubtype": "support",
    "muscles": [
      "כתפיים",
      "ליבה"
    ],
    "muscleGroups": [
      "chest"
    ],
    "unit": "seconds",
    "perSide": false,
    "advancedOnly": false,
    "novelEccentric": false,
    "demandingStraightArm": false,
    "apparatus": "floor",
    "poseTemplate": "quadruped",
    "cue": "לכרוע על ארבע; ברכיים על הקרקע וכתפיים מעל שורשי כפות הידיים, ללא הטיה קדימה.",
    "easy": "להקטין טווח ולהגדיל תמיכת רגליים; לעצור אם אין מנח נוח.",
    "instructions": [
      "לכרוע על ארבע; ברכיים על הקרקע וכתפיים מעל שורשי כפות הידיים, ללא הטיה קדימה.",
      "הטווח הוא גבול עליון, לא חובה. לשמור תמיכה ולנשום ברצף.",
      "לצאת באותו מסלול לפני אובדן שליטה או כאב."
    ],
    "mistakes": [
      "הסרת התמיכה או הגדלת הטווח מעבר לשליטה."
    ],
    "regressions": [],
    "progressions": [],
    "media": [],
    "sourceIds": [],
    "source_ids": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "original-editorial-preparation; exact-technique-not-verified",
    "sourceNote": "הכנה מקורית עם תמיכת רגליים; אינה אישור לתרגיל המתקדם."
  },
  {
    "id": "plank-lean-preparation",
    "he": "הכנה להטיית גוף בתמיכה",
    "en": "Foot-supported plank lean",
    "group": "push",
    "equipment": [],
    "level": 1,
    "movementPattern": "support",
    "movementSubtype": "support",
    "muscles": [
      "כתפיים",
      "ליבה"
    ],
    "muscleGroups": [
      "chest"
    ],
    "unit": "seconds",
    "perSide": false,
    "advancedOnly": false,
    "novelEccentric": false,
    "demandingStraightArm": false,
    "apparatus": "floor",
    "poseTemplate": "quadruped",
    "cue": "מאותו מנח על ארבע, ברכיים על הקרקע; להזיז כתפיים עד 2 ס״מ מעבר לשורשי כפות הידיים ולהחזיק.",
    "easy": "להקטין טווח ולהגדיל תמיכת רגליים; לעצור אם אין מנח נוח.",
    "instructions": [
      "מאותו מנח על ארבע, ברכיים על הקרקע; להזיז כתפיים עד 2 ס״מ מעבר לשורשי כפות הידיים ולהחזיק.",
      "הטווח הוא גבול עליון, לא חובה. לשמור תמיכה ולנשום ברצף.",
      "לצאת באותו מסלול לפני אובדן שליטה או כאב."
    ],
    "mistakes": [
      "הסרת התמיכה או הגדלת הטווח מעבר לשליטה."
    ],
    "regressions": [],
    "progressions": [],
    "media": [],
    "sourceIds": [],
    "source_ids": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "original-editorial-preparation; exact-technique-not-verified",
    "sourceNote": "הכנה מקורית עם תמיכת רגליים; אינה אישור לתרגיל המתקדם."
  },
  {
    "id": "frog-foot-preparation-short",
    "he": "הכנה לשיווי משקל עם רגליים נתמכות — תמיכה רבה",
    "en": "Foot-loaded frog preparation — short range",
    "group": "push",
    "equipment": [],
    "level": 1,
    "movementPattern": "support",
    "movementSubtype": "support",
    "muscles": [
      "כתפיים",
      "ליבה"
    ],
    "muscleGroups": [
      "chest"
    ],
    "unit": "seconds",
    "perSide": false,
    "advancedOnly": false,
    "novelEccentric": false,
    "demandingStraightArm": false,
    "apparatus": "floor",
    "poseTemplate": "squat",
    "cue": "לכרוע בטווח נוח ולהניח ידיים על הרצפה; להשאיר עקבים ובהונות על הקרקע ומשקל ברגליים.",
    "easy": "להקטין טווח ולהגדיל תמיכת רגליים; לעצור אם אין מנח נוח.",
    "instructions": [
      "לכרוע בטווח נוח ולהניח ידיים על הרצפה; להשאיר עקבים ובהונות על הקרקע ומשקל ברגליים.",
      "הטווח הוא גבול עליון, לא חובה. לשמור תמיכה ולנשום ברצף.",
      "לצאת באותו מסלול לפני אובדן שליטה או כאב."
    ],
    "mistakes": [
      "הסרת התמיכה או הגדלת הטווח מעבר לשליטה."
    ],
    "regressions": [],
    "progressions": [],
    "media": [],
    "sourceIds": [],
    "source_ids": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "original-editorial-preparation; exact-technique-not-verified",
    "sourceNote": "הכנה מקורית עם תמיכת רגליים; אינה אישור לתרגיל המתקדם."
  },
  {
    "id": "frog-foot-preparation",
    "he": "הכנה לשיווי משקל עם רגליים נתמכות",
    "en": "Foot-loaded frog preparation",
    "group": "push",
    "equipment": [],
    "level": 1,
    "movementPattern": "support",
    "movementSubtype": "support",
    "muscles": [
      "כתפיים",
      "ליבה"
    ],
    "muscleGroups": [
      "chest"
    ],
    "unit": "seconds",
    "perSide": false,
    "advancedOnly": false,
    "novelEccentric": false,
    "demandingStraightArm": false,
    "apparatus": "floor",
    "poseTemplate": "squat",
    "cue": "מאותה כריעה להעביר מעט משקל לידיים ולהרים עקבים בלבד; הבהונות נשארות על הקרקע כל הזמן.",
    "easy": "להקטין טווח ולהגדיל תמיכת רגליים; לעצור אם אין מנח נוח.",
    "instructions": [
      "מאותה כריעה להעביר מעט משקל לידיים ולהרים עקבים בלבד; הבהונות נשארות על הקרקע כל הזמן.",
      "הטווח הוא גבול עליון, לא חובה. לשמור תמיכה ולנשום ברצף.",
      "לצאת באותו מסלול לפני אובדן שליטה או כאב."
    ],
    "mistakes": [
      "הסרת התמיכה או הגדלת הטווח מעבר לשליטה."
    ],
    "regressions": [],
    "progressions": [],
    "media": [],
    "sourceIds": [],
    "source_ids": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "original-editorial-preparation; exact-technique-not-verified",
    "sourceNote": "הכנה מקורית עם תמיכת רגליים; אינה אישור לתרגיל המתקדם."
  },
  {
    "id": "tuck-hang-preparation-short",
    "he": "הכנה לתליית טאק עם תמיכת רגליים — תמיכה רבה",
    "en": "Foot-supported tuck hang preparation — short range",
    "group": "pull",
    "equipment": [
      "bar",
      "box"
    ],
    "level": 1,
    "movementPattern": "vertical_pull",
    "movementSubtype": "vertical_pull",
    "muscles": [
      "גב",
      "מייצבי כתפיים"
    ],
    "muscleGroups": [
      "back"
    ],
    "unit": "seconds",
    "perSide": false,
    "advancedOnly": false,
    "novelEccentric": false,
    "demandingStraightArm": false,
    "apparatus": "bar",
    "poseTemplate": "hang",
    "cue": "לאחוז במוט מעוגן; כפות רגליים על קופסה מעוגנת, ברכיים כפופות מעט וכתפיים פעילות.",
    "easy": "להקטין טווח ולהגדיל תמיכת רגליים; לעצור אם אין מנח נוח.",
    "instructions": [
      "לאחוז במוט מעוגן; כפות רגליים על קופסה מעוגנת, ברכיים כפופות מעט וכתפיים פעילות.",
      "הטווח הוא גבול עליון, לא חובה. לשמור תמיכה ולנשום ברצף.",
      "לצאת באותו מסלול לפני אובדן שליטה או כאב."
    ],
    "mistakes": [
      "הסרת התמיכה או הגדלת הטווח מעבר לשליטה."
    ],
    "regressions": [],
    "progressions": [],
    "media": [],
    "sourceIds": [],
    "source_ids": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "original-editorial-preparation; exact-technique-not-verified",
    "sourceNote": "הכנה מקורית עם תמיכת רגליים; אינה אישור לתרגיל המתקדם."
  },
  {
    "id": "tuck-hang-preparation",
    "he": "הכנה לתליית טאק עם תמיכת רגליים",
    "en": "Foot-supported tuck hang preparation",
    "group": "pull",
    "equipment": [
      "bar",
      "box"
    ],
    "level": 1,
    "movementPattern": "vertical_pull",
    "movementSubtype": "vertical_pull",
    "muscles": [
      "גב",
      "מייצבי כתפיים"
    ],
    "muscleGroups": [
      "back"
    ],
    "unit": "seconds",
    "perSide": false,
    "advancedOnly": false,
    "novelEccentric": false,
    "demandingStraightArm": false,
    "apparatus": "bar",
    "poseTemplate": "hang",
    "cue": "באותו גובה מוט וקופסה לכופף ברכיים עד כ־45 מעלות; כפות הרגליים נשארות נושאות משקל והכתפיים פעילות.",
    "easy": "להקטין טווח ולהגדיל תמיכת רגליים; לעצור אם אין מנח נוח.",
    "instructions": [
      "באותו גובה מוט וקופסה לכופף ברכיים עד כ־45 מעלות; כפות הרגליים נשארות נושאות משקל והכתפיים פעילות.",
      "הטווח הוא גבול עליון, לא חובה. לשמור תמיכה ולנשום ברצף.",
      "לצאת באותו מסלול לפני אובדן שליטה או כאב."
    ],
    "mistakes": [
      "הסרת התמיכה או הגדלת הטווח מעבר לשליטה."
    ],
    "regressions": [],
    "progressions": [],
    "media": [],
    "sourceIds": [],
    "source_ids": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "original-editorial-preparation; exact-technique-not-verified",
    "sourceNote": "הכנה מקורית עם תמיכת רגליים; אינה אישור לתרגיל המתקדם."
  },
  {
    "id": "high-pull-preparation-short",
    "he": "הכנת משיכה גבוהה עם תמיכת רגליים — תמיכה רבה",
    "en": "Foot-supported high pull preparation — short range",
    "group": "pull",
    "equipment": [
      "lowbar"
    ],
    "level": 1,
    "movementPattern": "vertical_pull",
    "movementSubtype": "vertical_pull",
    "muscles": [
      "גב",
      "מייצבי כתפיים"
    ],
    "muscleGroups": [
      "back"
    ],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "novelEccentric": false,
    "demandingStraightArm": false,
    "apparatus": "lowbar",
    "poseTemplate": "row",
    "cue": "לאחוז במוט נמוך מעוגן, שתי רגליים על הקרקע; בעזרת הרגליים למשוך עד כיפוף מרפקים של כ־90 מעלות ולחזור.",
    "easy": "להקטין טווח ולהגדיל תמיכת רגליים; לעצור אם אין מנח נוח.",
    "instructions": [
      "לאחוז במוט נמוך מעוגן, שתי רגליים על הקרקע; בעזרת הרגליים למשוך עד כיפוף מרפקים של כ־90 מעלות ולחזור.",
      "הטווח הוא גבול עליון, לא חובה. לשמור תמיכה ולנשום ברצף.",
      "לצאת באותו מסלול לפני אובדן שליטה או כאב."
    ],
    "mistakes": [
      "הסרת התמיכה או הגדלת הטווח מעבר לשליטה."
    ],
    "regressions": [],
    "progressions": [],
    "media": [],
    "sourceIds": [],
    "source_ids": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "original-editorial-preparation; exact-technique-not-verified",
    "sourceNote": "הכנה מקורית עם תמיכת רגליים; אינה אישור לתרגיל המתקדם."
  },
  {
    "id": "high-pull-preparation",
    "he": "הכנת משיכה גבוהה עם תמיכת רגליים",
    "en": "Foot-supported high pull preparation",
    "group": "pull",
    "equipment": [
      "lowbar"
    ],
    "level": 1,
    "movementPattern": "vertical_pull",
    "movementSubtype": "vertical_pull",
    "muscles": [
      "גב",
      "מייצבי כתפיים"
    ],
    "muscleGroups": [
      "back"
    ],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "novelEccentric": false,
    "demandingStraightArm": false,
    "apparatus": "lowbar",
    "poseTemplate": "row",
    "cue": "באותו מנח ובסיוע רגליים למשוך עד שהחזה מתקרב למוט ולחזור; אין מעבר מעל המוט.",
    "easy": "להקטין טווח ולהגדיל תמיכת רגליים; לעצור אם אין מנח נוח.",
    "instructions": [
      "באותו מנח ובסיוע רגליים למשוך עד שהחזה מתקרב למוט ולחזור; אין מעבר מעל המוט.",
      "הטווח הוא גבול עליון, לא חובה. לשמור תמיכה ולנשום ברצף.",
      "לצאת באותו מסלול לפני אובדן שליטה או כאב."
    ],
    "mistakes": [
      "הסרת התמיכה או הגדלת הטווח מעבר לשליטה."
    ],
    "regressions": [],
    "progressions": [],
    "media": [],
    "sourceIds": [],
    "source_ids": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "original-editorial-preparation; exact-technique-not-verified",
    "sourceNote": "הכנה מקורית עם תמיכת רגליים; אינה אישור לתרגיל המתקדם."
  },
  {
    "id": "band-straight-arm-preparation-short",
    "he": "הכנת משיכה בזרוע ישרה בגומייה — תמיכה רבה",
    "en": "Standing band straight-arm pull preparation — short range",
    "group": "pull",
    "equipment": [
      "band"
    ],
    "level": 1,
    "movementPattern": "straight_arm_pull",
    "movementSubtype": "straight_arm_pull",
    "muscles": [
      "גב",
      "מייצבי כתפיים"
    ],
    "muscleGroups": [
      "back"
    ],
    "unit": "seconds",
    "perSide": false,
    "advancedOnly": false,
    "novelEccentric": false,
    "demandingStraightArm": false,
    "apparatus": "band",
    "poseTemplate": "stand",
    "cue": "לעגן גומייה קלה בגובה החזה לפנים; במרפקים ישרים להוריד ידיים מגובה החזה עד גובה המותניים ולהחזיק.",
    "easy": "להקטין טווח ולהגדיל תמיכת רגליים; לעצור אם אין מנח נוח.",
    "instructions": [
      "לעגן גומייה קלה בגובה החזה לפנים; במרפקים ישרים להוריד ידיים מגובה החזה עד גובה המותניים ולהחזיק.",
      "הטווח הוא גבול עליון, לא חובה. לשמור תמיכה ולנשום ברצף.",
      "לצאת באותו מסלול לפני אובדן שליטה או כאב."
    ],
    "mistakes": [
      "הסרת התמיכה או הגדלת הטווח מעבר לשליטה."
    ],
    "regressions": [],
    "progressions": [],
    "media": [],
    "sourceIds": [],
    "source_ids": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "original-editorial-preparation; exact-technique-not-verified",
    "sourceNote": "הכנה מקורית עם תמיכת רגליים; אינה אישור לתרגיל המתקדם."
  },
  {
    "id": "band-straight-arm-preparation",
    "he": "הכנת משיכה בזרוע ישרה בגומייה",
    "en": "Standing band straight-arm pull preparation",
    "group": "pull",
    "equipment": [
      "band"
    ],
    "level": 1,
    "movementPattern": "straight_arm_pull",
    "movementSubtype": "straight_arm_pull",
    "muscles": [
      "גב",
      "מייצבי כתפיים"
    ],
    "muscleGroups": [
      "back"
    ],
    "unit": "seconds",
    "perSide": false,
    "advancedOnly": false,
    "novelEccentric": false,
    "demandingStraightArm": false,
    "apparatus": "band",
    "poseTemplate": "stand",
    "cue": "באותה גומייה, עיגון ומרחק עמידה להוריד ידיים מגובה החזה עד לצד הירכיים ולהחזיק; לא מאחורי הגוף.",
    "easy": "להקטין טווח ולהגדיל תמיכת רגליים; לעצור אם אין מנח נוח.",
    "instructions": [
      "באותה גומייה, עיגון ומרחק עמידה להוריד ידיים מגובה החזה עד לצד הירכיים ולהחזיק; לא מאחורי הגוף.",
      "הטווח הוא גבול עליון, לא חובה. לשמור תמיכה ולנשום ברצף.",
      "לצאת באותו מסלול לפני אובדן שליטה או כאב."
    ],
    "mistakes": [
      "הסרת התמיכה או הגדלת הטווח מעבר לשליטה."
    ],
    "regressions": [],
    "progressions": [],
    "media": [],
    "sourceIds": [],
    "source_ids": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "original-editorial-preparation; exact-technique-not-verified",
    "sourceNote": "הכנה מקורית עם תמיכת רגליים; אינה אישור לתרגיל המתקדם."
  },
  {
    "id": "grounded-extension-preparation-short",
    "he": "הכנת תמיכה בטווח כתף קטן — תמיכה רבה",
    "en": "Grounded shoulder support preparation — short range",
    "group": "push",
    "equipment": [
      "bench"
    ],
    "level": 1,
    "movementPattern": "support",
    "movementSubtype": "support",
    "muscles": [
      "כתפיים",
      "ליבה"
    ],
    "muscleGroups": [
      "back"
    ],
    "unit": "seconds",
    "perSide": false,
    "advancedOnly": false,
    "novelEccentric": false,
    "demandingStraightArm": false,
    "apparatus": "floor",
    "poseTemplate": "support",
    "cue": "לשבת על ספסל מעוגן, ידיים לצד האגן וכפות רגליים על הקרקע; האגן נשען על הספסל. לדחוף קלות בידיים.",
    "easy": "להקטין טווח ולהגדיל תמיכת רגליים; לעצור אם אין מנח נוח.",
    "instructions": [
      "לשבת על ספסל מעוגן, ידיים לצד האגן וכפות רגליים על הקרקע; האגן נשען על הספסל. לדחוף קלות בידיים.",
      "הטווח הוא גבול עליון, לא חובה. לשמור תמיכה ולנשום ברצף.",
      "לצאת באותו מסלול לפני אובדן שליטה או כאב."
    ],
    "mistakes": [
      "הסרת התמיכה או הגדלת הטווח מעבר לשליטה."
    ],
    "regressions": [],
    "progressions": [],
    "media": [],
    "sourceIds": [],
    "source_ids": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "original-editorial-preparation; exact-technique-not-verified",
    "sourceNote": "הכנה מקורית עם תמיכת רגליים; אינה אישור לתרגיל המתקדם."
  },
  {
    "id": "grounded-extension-preparation",
    "he": "הכנת תמיכה בטווח כתף קטן",
    "en": "Grounded shoulder support preparation",
    "group": "push",
    "equipment": [
      "bench"
    ],
    "level": 1,
    "movementPattern": "support",
    "movementSubtype": "support",
    "muscles": [
      "כתפיים",
      "ליבה"
    ],
    "muscleGroups": [
      "back"
    ],
    "unit": "seconds",
    "perSide": false,
    "advancedOnly": false,
    "novelEccentric": false,
    "demandingStraightArm": false,
    "apparatus": "floor",
    "poseTemplate": "support",
    "cue": "מאותה ישיבה לדחוף בידיים עד שהאגן מתרומם עד 1 ס״מ מעל הספסל; שתי כפות הרגליים נושאות משקל. להחזיר אגן לספסל ביציאה.",
    "easy": "להקטין טווח ולהגדיל תמיכת רגליים; לעצור אם אין מנח נוח.",
    "instructions": [
      "מאותה ישיבה לדחוף בידיים עד שהאגן מתרומם עד 1 ס״מ מעל הספסל; שתי כפות הרגליים נושאות משקל. להחזיר אגן לספסל ביציאה.",
      "הטווח הוא גבול עליון, לא חובה. לשמור תמיכה ולנשום ברצף.",
      "לצאת באותו מסלול לפני אובדן שליטה או כאב."
    ],
    "mistakes": [
      "הסרת התמיכה או הגדלת הטווח מעבר לשליטה."
    ],
    "regressions": [],
    "progressions": [],
    "media": [],
    "sourceIds": [],
    "source_ids": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "original-editorial-preparation; exact-technique-not-verified",
    "sourceNote": "הכנה מקורית עם תמיכת רגליים; אינה אישור לתרגיל המתקדם."
  },
  {
    "id": "grounded-support-rock-short",
    "he": "העברת משקל בתמיכה עם רגליים על הקרקע — תמיכה רבה",
    "en": "Grounded support weight rock — short range",
    "group": "push",
    "equipment": [
      "bench"
    ],
    "level": 1,
    "movementPattern": "support",
    "movementSubtype": "support",
    "muscles": [
      "כתפיים",
      "ליבה"
    ],
    "muscleGroups": [
      "back"
    ],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "novelEccentric": false,
    "demandingStraightArm": false,
    "apparatus": "floor",
    "poseTemplate": "support",
    "cue": "לשבת על ספסל מעוגן, ידיים לצד האגן ורגליים על הקרקע; האגן נתמך. להעביר כתפיים עד 1 ס״מ קדימה ובחזרה.",
    "easy": "להקטין טווח ולהגדיל תמיכת רגליים; לעצור אם אין מנח נוח.",
    "instructions": [
      "לשבת על ספסל מעוגן, ידיים לצד האגן ורגליים על הקרקע; האגן נתמך. להעביר כתפיים עד 1 ס״מ קדימה ובחזרה.",
      "הטווח הוא גבול עליון, לא חובה. לשמור תמיכה ולנשום ברצף.",
      "לצאת באותו מסלול לפני אובדן שליטה או כאב."
    ],
    "mistakes": [
      "הסרת התמיכה או הגדלת הטווח מעבר לשליטה."
    ],
    "regressions": [],
    "progressions": [],
    "media": [],
    "sourceIds": [],
    "source_ids": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "original-editorial-preparation; exact-technique-not-verified",
    "sourceNote": "הכנה מקורית עם תמיכת רגליים; אינה אישור לתרגיל המתקדם."
  },
  {
    "id": "grounded-support-rock",
    "he": "העברת משקל בתמיכה עם רגליים על הקרקע",
    "en": "Grounded support weight rock",
    "group": "push",
    "equipment": [
      "bench"
    ],
    "level": 1,
    "movementPattern": "support",
    "movementSubtype": "support",
    "muscles": [
      "כתפיים",
      "ליבה"
    ],
    "muscleGroups": [
      "back"
    ],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "novelEccentric": false,
    "demandingStraightArm": false,
    "apparatus": "floor",
    "poseTemplate": "support",
    "cue": "באותו מנח, כשהאגן נתמך והרגליים על הקרקע, להעביר כתפיים עד 3 ס״מ קדימה ובחזרה; לא להוריד את האגן.",
    "easy": "להקטין טווח ולהגדיל תמיכת רגליים; לעצור אם אין מנח נוח.",
    "instructions": [
      "באותו מנח, כשהאגן נתמך והרגליים על הקרקע, להעביר כתפיים עד 3 ס״מ קדימה ובחזרה; לא להוריד את האגן.",
      "הטווח הוא גבול עליון, לא חובה. לשמור תמיכה ולנשום ברצף.",
      "לצאת באותו מסלול לפני אובדן שליטה או כאב."
    ],
    "mistakes": [
      "הסרת התמיכה או הגדלת הטווח מעבר לשליטה."
    ],
    "regressions": [],
    "progressions": [],
    "media": [],
    "sourceIds": [],
    "source_ids": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "original-editorial-preparation; exact-technique-not-verified",
    "sourceNote": "הכנה מקורית עם תמיכת רגליים; אינה אישור לתרגיל המתקדם."
  },
  {
    "id": "grounded-pike-hold-short",
    "he": "הכנת פייק עם רגליים על הקרקע — תמיכה רבה",
    "en": "Grounded pike hold preparation — short range",
    "group": "push",
    "equipment": [],
    "level": 1,
    "movementPattern": "support",
    "movementSubtype": "support",
    "muscles": [
      "כתפיים",
      "ליבה"
    ],
    "muscleGroups": [
      "shoulders"
    ],
    "unit": "seconds",
    "perSide": false,
    "advancedOnly": false,
    "novelEccentric": false,
    "demandingStraightArm": false,
    "apparatus": "floor",
    "poseTemplate": "pike",
    "cue": "להניח ידיים וכפות רגליים על הרצפה ולהרים אגן לפייק; להשאיר ברכיים כפופות ועקבים מורמים.",
    "easy": "להקטין טווח ולהגדיל תמיכת רגליים; לעצור אם אין מנח נוח.",
    "instructions": [
      "להניח ידיים וכפות רגליים על הרצפה ולהרים אגן לפייק; להשאיר ברכיים כפופות ועקבים מורמים.",
      "הטווח הוא גבול עליון, לא חובה. לשמור תמיכה ולנשום ברצף.",
      "לצאת באותו מסלול לפני אובדן שליטה או כאב."
    ],
    "mistakes": [
      "הסרת התמיכה או הגדלת הטווח מעבר לשליטה."
    ],
    "regressions": [],
    "progressions": [],
    "media": [],
    "sourceIds": [],
    "source_ids": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "original-editorial-preparation; exact-technique-not-verified",
    "sourceNote": "הכנה מקורית עם תמיכת רגליים; אינה אישור לתרגיל המתקדם."
  },
  {
    "id": "grounded-pike-hold",
    "he": "הכנת פייק עם רגליים על הקרקע",
    "en": "Grounded pike hold preparation",
    "group": "push",
    "equipment": [],
    "level": 1,
    "movementPattern": "support",
    "movementSubtype": "support",
    "muscles": [
      "כתפיים",
      "ליבה"
    ],
    "muscleGroups": [
      "shoulders"
    ],
    "unit": "seconds",
    "perSide": false,
    "advancedOnly": false,
    "novelEccentric": false,
    "demandingStraightArm": false,
    "apparatus": "floor",
    "poseTemplate": "pike",
    "cue": "באותו מרחק ידיים ורגליים להרים אגן לפייק וליישר ברכיים בטווח נוח; כפות הרגליים נשארות על הקרקע. אין בעיטה למעלה.",
    "easy": "להקטין טווח ולהגדיל תמיכת רגליים; לעצור אם אין מנח נוח.",
    "instructions": [
      "באותו מרחק ידיים ורגליים להרים אגן לפייק וליישר ברכיים בטווח נוח; כפות הרגליים נשארות על הקרקע. אין בעיטה למעלה.",
      "הטווח הוא גבול עליון, לא חובה. לשמור תמיכה ולנשום ברצף.",
      "לצאת באותו מסלול לפני אובדן שליטה או כאב."
    ],
    "mistakes": [
      "הסרת התמיכה או הגדלת הטווח מעבר לשליטה."
    ],
    "regressions": [],
    "progressions": [],
    "media": [],
    "sourceIds": [],
    "source_ids": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "original-editorial-preparation; exact-technique-not-verified",
    "sourceNote": "הכנה מקורית עם תמיכת רגליים; אינה אישור לתרגיל המתקדם."
  },
  {
    "id": "grounded-pike-shift-short",
    "he": "העברת משקל בפייק נתמך — תמיכה רבה",
    "en": "Grounded pike weight shift preparation — short range",
    "group": "push",
    "equipment": [],
    "level": 1,
    "movementPattern": "support",
    "movementSubtype": "support",
    "muscles": [
      "כתפיים",
      "ליבה"
    ],
    "muscleGroups": [
      "shoulders"
    ],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "novelEccentric": false,
    "demandingStraightArm": false,
    "apparatus": "floor",
    "poseTemplate": "pike",
    "cue": "בפייק עם ידיים ורגליים על הרצפה, להעביר כתפיים עד 1 ס״מ ימינה ואז שמאלה; שתי הידיים נשארות על הרצפה.",
    "easy": "להקטין טווח ולהגדיל תמיכת רגליים; לעצור אם אין מנח נוח.",
    "instructions": [
      "בפייק עם ידיים ורגליים על הרצפה, להעביר כתפיים עד 1 ס״מ ימינה ואז שמאלה; שתי הידיים נשארות על הרצפה.",
      "הטווח הוא גבול עליון, לא חובה. לשמור תמיכה ולנשום ברצף.",
      "לצאת באותו מסלול לפני אובדן שליטה או כאב."
    ],
    "mistakes": [
      "הסרת התמיכה או הגדלת הטווח מעבר לשליטה."
    ],
    "regressions": [],
    "progressions": [],
    "media": [],
    "sourceIds": [],
    "source_ids": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "original-editorial-preparation; exact-technique-not-verified",
    "sourceNote": "הכנה מקורית עם תמיכת רגליים; אינה אישור לתרגיל המתקדם."
  },
  {
    "id": "grounded-pike-shift",
    "he": "העברת משקל בפייק נתמך",
    "en": "Grounded pike weight shift preparation",
    "group": "push",
    "equipment": [],
    "level": 1,
    "movementPattern": "support",
    "movementSubtype": "support",
    "muscles": [
      "כתפיים",
      "ליבה"
    ],
    "muscleGroups": [
      "shoulders"
    ],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "novelEccentric": false,
    "demandingStraightArm": false,
    "apparatus": "floor",
    "poseTemplate": "pike",
    "cue": "באותו מנח להעביר כתפיים עד 3 ס״מ ימינה ואז שמאלה; שתי הידיים ושתי הרגליים נשארות על הרצפה.",
    "easy": "להקטין טווח ולהגדיל תמיכת רגליים; לעצור אם אין מנח נוח.",
    "instructions": [
      "באותו מנח להעביר כתפיים עד 3 ס״מ ימינה ואז שמאלה; שתי הידיים ושתי הרגליים נשארות על הרצפה.",
      "הטווח הוא גבול עליון, לא חובה. לשמור תמיכה ולנשום ברצף.",
      "לצאת באותו מסלול לפני אובדן שליטה או כאב."
    ],
    "mistakes": [
      "הסרת התמיכה או הגדלת הטווח מעבר לשליטה."
    ],
    "regressions": [],
    "progressions": [],
    "media": [],
    "sourceIds": [],
    "source_ids": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "original-editorial-preparation; exact-technique-not-verified",
    "sourceNote": "הכנה מקורית עם תמיכת רגליים; אינה אישור לתרגיל המתקדם."
  },
  {
    "id": "wall-side-support-short",
    "he": "הכנת תמיכת צד בעמידה — תמיכה רבה",
    "en": "Standing wall side support preparation — short range",
    "group": "push",
    "equipment": [
      "wall"
    ],
    "level": 1,
    "movementPattern": "support",
    "movementSubtype": "support",
    "muscles": [
      "כתפיים",
      "ליבה"
    ],
    "muscleGroups": [
      "core"
    ],
    "unit": "seconds",
    "perSide": false,
    "advancedOnly": false,
    "novelEccentric": false,
    "demandingStraightArm": false,
    "apparatus": "floor",
    "poseTemplate": "stand",
    "cue": "לעמוד לצד קיר, שתי כפות ידיים על הקיר בגובה נוח ורגליים מתחת לאגן. להישען הצדה בלי להזיז רגליים.",
    "easy": "להקטין טווח ולהגדיל תמיכת רגליים; לעצור אם אין מנח נוח.",
    "instructions": [
      "לעמוד לצד קיר, שתי כפות ידיים על הקיר בגובה נוח ורגליים מתחת לאגן. להישען הצדה בלי להזיז רגליים.",
      "הטווח הוא גבול עליון, לא חובה. לשמור תמיכה ולנשום ברצף.",
      "לצאת באותו מסלול לפני אובדן שליטה או כאב."
    ],
    "mistakes": [
      "הסרת התמיכה או הגדלת הטווח מעבר לשליטה."
    ],
    "regressions": [],
    "progressions": [],
    "media": [],
    "sourceIds": [],
    "source_ids": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "original-editorial-preparation; exact-technique-not-verified",
    "sourceNote": "הכנה מקורית עם תמיכת רגליים; אינה אישור לתרגיל המתקדם."
  },
  {
    "id": "wall-side-support",
    "he": "הכנת תמיכת צד בעמידה",
    "en": "Standing wall side support preparation",
    "group": "push",
    "equipment": [
      "wall"
    ],
    "level": 1,
    "movementPattern": "support",
    "movementSubtype": "support",
    "muscles": [
      "כתפיים",
      "ליבה"
    ],
    "muscleGroups": [
      "core"
    ],
    "unit": "seconds",
    "perSide": false,
    "advancedOnly": false,
    "novelEccentric": false,
    "demandingStraightArm": false,
    "apparatus": "floor",
    "poseTemplate": "stand",
    "cue": "להתחיל כשצדי שתי כפות הרגליים במרחק 5 ס״מ מהקיר ומתחת לאגן; להרחיק מעט לפי הנוחות, עד מרחק כולל של 15 ס״מ מהקיר, ולהישען הצדה עם שתי ידיים תומכות והאגן זקוף.",
    "easy": "להקטין טווח ולהגדיל תמיכת רגליים; לעצור אם אין מנח נוח.",
    "instructions": [
      "לעמוד לצד קיר יציב, שתי כפות הידיים על הקיר בגובה החזה; להתחיל כשצדי שתי כפות הרגליים במרחק 5 ס״מ מהקיר ומתחת לאגן. להרחיק מעט לפי הנוחות, עד מרחק כולל של 15 ס״מ מהקיר, ולהישען הצדה עם שתי ידיים תומכות והאגן זקוף.",
      "הטווח הוא גבול עליון, לא חובה. לשמור תמיכה ולנשום ברצף.",
      "לצאת באותו מסלול לפני אובדן שליטה או כאב."
    ],
    "mistakes": [
      "הסרת התמיכה או הגדלת הטווח מעבר לשליטה."
    ],
    "regressions": [],
    "progressions": [],
    "media": [],
    "sourceIds": [],
    "source_ids": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "original-editorial-preparation; exact-technique-not-verified",
    "sourceNote": "הכנה מקורית עם תמיכת רגליים; אינה אישור לתרגיל המתקדם."
  },
  {
    "id": "supported-back-extension-short",
    "he": "הכנת פשיטה בטווח קטן — תמיכה רבה",
    "en": "Supported small-range back extension preparation — short range",
    "group": "mobility",
    "equipment": [
      "wall"
    ],
    "level": 1,
    "movementPattern": "mobility",
    "movementSubtype": "mobility",
    "muscles": [
      "תנועתיות בית חזה"
    ],
    "muscleGroups": [
      "mobility"
    ],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "novelEccentric": false,
    "demandingStraightArm": false,
    "apparatus": "floor",
    "poseTemplate": "stand",
    "cue": "לעמוד עם ידיים על קיר בגובה החזה; להרחיק אגן עד 5 ס״מ ולנשום, בלי להקשית גב. לחזור לעמידה.",
    "easy": "להקטין טווח ולהגדיל תמיכת רגליים; לעצור אם אין מנח נוח.",
    "instructions": [
      "לעמוד עם ידיים על קיר בגובה החזה; להרחיק אגן עד 5 ס״מ ולנשום, בלי להקשית גב. לחזור לעמידה.",
      "הטווח הוא גבול עליון, לא חובה. לשמור תמיכה ולנשום ברצף.",
      "לצאת באותו מסלול לפני אובדן שליטה או כאב."
    ],
    "mistakes": [
      "הסרת התמיכה או הגדלת הטווח מעבר לשליטה."
    ],
    "regressions": [],
    "progressions": [],
    "media": [],
    "sourceIds": [],
    "source_ids": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "original-editorial-preparation; exact-technique-not-verified",
    "sourceNote": "הכנה מקורית עם תמיכת רגליים; אינה אישור לתרגיל המתקדם."
  },
  {
    "id": "supported-back-extension",
    "he": "הכנת פשיטה בטווח קטן",
    "en": "Supported small-range back extension preparation",
    "group": "mobility",
    "equipment": [
      "wall"
    ],
    "level": 1,
    "movementPattern": "mobility",
    "movementSubtype": "mobility",
    "muscles": [
      "תנועתיות בית חזה"
    ],
    "muscleGroups": [
      "mobility"
    ],
    "unit": "reps",
    "perSide": false,
    "advancedOnly": false,
    "novelEccentric": false,
    "demandingStraightArm": false,
    "apparatus": "floor",
    "poseTemplate": "stand",
    "cue": "באותו גובה ידיים להרחיק אגן עד 10 ס״מ ולהאריך בעדינות את בית החזה, רק בטווח נוח. לחזור לעמידה בלי קשת עמוקה בגב.",
    "easy": "להקטין טווח ולהגדיל תמיכת רגליים; לעצור אם אין מנח נוח.",
    "instructions": [
      "באותו גובה ידיים להרחיק אגן עד 10 ס״מ ולהאריך בעדינות את בית החזה, רק בטווח נוח. לחזור לעמידה בלי קשת עמוקה בגב.",
      "הטווח הוא גבול עליון, לא חובה. לשמור תמיכה ולנשום ברצף.",
      "לצאת באותו מסלול לפני אובדן שליטה או כאב."
    ],
    "mistakes": [
      "הסרת התמיכה או הגדלת הטווח מעבר לשליטה."
    ],
    "regressions": [],
    "progressions": [],
    "media": [],
    "sourceIds": [],
    "source_ids": [],
    "reviewStatus": "pending-review",
    "sourceMatch": "original-editorial-preparation; exact-technique-not-verified",
    "sourceNote": "הכנה מקורית עם תמיכת רגליים; אינה אישור לתרגיל המתקדם."
  }
];
const all=[...assessmentAnchors,...originalExercises,...drillExercises,...hspuExercises,handstandHold,...apparatusVariants,...coachCatalogueExercises,...variationGapExercises,...groundedPreparations],known=new Set(all.map(e=>e.id));

// Five catalogue difficulty levels; execution clearance remains a separate requirement.
const difficultyLevels={"feet-assisted-pull": 1, "heel-dig-hold": 1, "wall-push": 1, "incline-push": 1, "knee-push": 1, "scap-push": 1, "band-row": 1, "active-hang": 1, "squat": 1, "bridge": 1, "hinge": 1, "calf": 1, "deadbug": 1, "bird-dog": 1, "side-plank-knee": 1, "march": 1, "step-jack": 1, "standing-knee": 1, "wall-sit": 1, "sumo-squat": 1, "clamshell": 1, "side-leg-raise": 1, "heel-tap": 1, "reverse-crunch": 1, "prone-w": 1, "wall-slide": 1, "cat-cow": 1, "thoracic-rotation": 1, "ankle-rock": 1, "dead-hang": 1, "foot-support": 1, "parallette-foot-support": 1, "push": 2, "support": 2, "row": 2, "scap-pull": 2, "split": 2, "reverse-lunge": 2, "lateral-lunge": 2, "single-bridge": 2, "bridge-march": 2, "single-hinge": 2, "single-calf": 2, "plank": 2, "side-plank": 2, "hollow": 2, "squat-pause": 2, "pike-support": 2, "partial-wall-line": 2, "compression-lift": 2, "row-wide": 2, "ring-row": 2, "close-push": 3, "pike-push": 3, "dip": 3, "row-horizontal": 3, "pull-negative": 3, "pull": 3, "chin": 3, "single-squat": 3, "hanging-knee": 3, "tuck-lsit": 3, "wall-handstand": 3, "chest-wall-handstand": 3, "elevated-pike-push": 3, "archer-push": 3, "pseudo-planche-push": 3, "planche-lean": 3, "frog-stand": 3, "low-bar-transition": 3, "straight-bar-dip": 3, "pistol-box": 3, "shrimp-squat": 3, "copenhagen-plank": 3, "handstand-shift": 3, "lever-supported": 3, "tuck-assisted-planche": 3, "row-feet-elevated": 3, "pistol": 4, "lsit": 4, "straddle-planche": 4, "tuck-planche": 4, "tuck-front-lever": 4, "advanced-tuck-front-lever": 4, "front-lever-negative": 4, "explosive-pull": 4, "assisted-muscle-up": 4, "muscle-up-strict": 4, "nordic-negative": 4, "toes-to-bar": 4, "dragon-negative": 4, "skin-the-cat": 4, "german-hang": 4, "back-lever": 4, "assisted-tuck-back-lever": 4, "flag-ground": 4, "flag-assisted": 4, "flag-tuck": 4, "handstand-toe-pull": 4, "handstand-free": 4, "lever-assisted-tuck": 4, "one-leg-lsit": 4, "extension-supported": 4, "wall-hspu-negative": 4, "partial-wall-hspu": 4, "wall-hspu": 4, "handstand-free-hold": 4, "full-planche": 5, "front-lever": 5, "human-flag": 5};
for(const e of [...coachCatalogueExercises,...variationGapExercises,...groundedPreparations])difficultyLevels[e.id]=e.level;
export const exercises=all.map(raw=>{
 const e=correctMetadata(raw);
 if(!difficultyLevels[e.id])throw new Error("Missing exercise difficulty: "+e.id);
 e.level=difficultyLevels[e.id];
 const regressions=new Set((e.regressions||[]).filter(id=>known.has(id))),progressions=new Set((e.progressions||[]).filter(id=>known.has(id)));
 for(const chain of progressionChains){const i=chain.indexOf(e.id);if(i>0)regressions.add(chain[i-1]);if(i>=0&&i<chain.length-1)progressions.add(chain[i+1]);}
 const apparatus=e.apparatus||(/dip|support|lsit/.test(e.id)?'parallel':e.equipment.includes('bar')?'bar':e.equipment.includes('lowbar')?'lowbar':e.equipment.includes('wall')?'wall':e.equipment.includes('band')?'band':'floor');
 const pose=registerPose(e.id,{from:e.parent,template:e.poseTemplate,equipment:apparatus,hold:e.unit==='seconds'});
 const hold=e.unit==='seconds',core=e.group==='core';
 // Primary muscles for skill drills, where the parent's list does not describe the lever or straight-arm demand.
 const exactMuscles={'nordic-negative':['ירך אחורית', 'שוקיים'],'copenhagen-plank':['מקרבי ירך', 'אלכסוני הבטן'],'dragon-negative':['ליבה', 'גב'],'toes-to-bar':['ליבה', 'מכופפי ירך', 'אחיזה'],'tuck-front-lever':['גב', 'ליבה', 'מייצבי שכמות'],'advanced-tuck-front-lever':['גב', 'ליבה', 'מייצבי שכמות'],'front-lever':['גב', 'ליבה', 'מייצבי שכמות'],'lever-assisted-tuck':['גב', 'ליבה', 'מייצבי שכמות'],'lever-supported':['גב', 'ליבה', 'מייצבי שכמות'],'front-lever-negative':['גב', 'ליבה', 'יד קדמית'],'tuck-planche':['כתף קדמית', 'מסור קדמי', 'ליבה'],'straddle-planche':['כתף קדמית', 'מסור קדמי', 'ליבה'],'full-planche':['כתף קדמית', 'מסור קדמי', 'ליבה'],'tuck-assisted-planche':['כתף קדמית', 'מסור קדמי', 'ליבה'],'planche-lean':['כתף קדמית', 'חזה', 'מסור קדמי'],'pseudo-planche-push':['חזה', 'כתף קדמית', 'יד אחורית'],'frog-stand':['כתפיים', 'ליבה', 'מסור קדמי'],'human-flag':['גב', 'אלכסוני הבטן', 'כתפיים'],'flag-assisted':['גב', 'אלכסוני הבטן', 'כתפיים'],'flag-tuck':['גב', 'אלכסוני הבטן', 'כתפיים'],'flag-ground':['אלכסוני הבטן', 'כתפיים', 'מייצבי אגן'],'muscle-up-strict':['גב', 'יד קדמית', 'יד אחורית', 'חזה'],'assisted-muscle-up':['גב', 'יד קדמית', 'יד אחורית', 'חזה'],'low-bar-transition':['גב', 'יד קדמית', 'יד אחורית'],'back-lever':['כתף קדמית', 'יד קדמית', 'ליבה'],'assisted-tuck-back-lever':['כתף קדמית', 'יד קדמית', 'ליבה'],'german-hang':['כתף קדמית', 'חזה', 'יד קדמית'],'skin-the-cat':['כתפיים', 'גב', 'ליבה'],'extension-supported':['כתף קדמית', 'חזה', 'יד קדמית'],'explosive-pull':['גב', 'יד קדמית', 'כתף אחורית']};
 return {...e,...(exactMuscles[e.id]?{muscles:exactMuscles[e.id]}:{}),pattern:e.movementPattern,pose,regressions:[...regressions],progressions:[...progressions],keyCues:(e.instructions||[e.cue]).slice(0,3),mistakes:[...(e.mistakes||[]),'המשך מעבר לאובדן שליטה.'].slice(0,2),defaultDosage:e.advancedOnly?{educationOnly:true,reviewStatus:'exercise-specific-review-required'}:{sets:[2,3],...(hold?{holdSeconds:[10,30]}:{reps:core?[6,12]:[5,10]}),rir:[2,3],restSeconds:core||hold?[60,90]:[120,180],perSide:!!e.perSide,skill:{attempts:[4,8],holdSeconds:[5,15],intervalSeconds:[60,120]},source:'docs/COACH_METHOD.md §2',reviewStatus:'pending-review'}};
});

// Explicit metadata is shared by planning, recovery, library and logging.
function correctMetadata(raw){
 const e={...raw, instructions:[...(raw.instructions || [])]},id=e.id;
 // Editorial corrections apply to the final exported records, including inherited variants.
 if(id==='wall-hspu-negative')e.cue='לרדת לאט בשליטה, לעצור לפני עומס על הראש ולחזור לקרקע; אין דחיקה חזרה למעלה.';
 if(['ring-row','upright-ring-row','horizontal-ring-row'].includes(id)){
  e.cue='למשוך את החזה לכיוון הטבעות, לשמור גוף יציב וליישר מרפקים בשליטה.';
  e.instructions=e.instructions.map(x=>x.replace(/החזה אל המוט|החזה למוט|החזה לכיוון המוט/g,'החזה לכיוון הטבעות'));
 }
 if(['chin','band-assisted-chin','lsit-chin','ring-chin','feet-assisted-ring-chin','lsit-ring-chin'].includes(id)){
  const grip=id.includes('ring')?'לאחוז בטבעות באחיזה הפוכה, כשכפות הידיים פונות אליך.':'לאחוז במוט באחיזה הפוכה, כשכפות הידיים פונות אליך.';
  e.cue=grip+' למשוך ללא תנופה ולרדת בשליטה.';
  e.instructions=e.instructions.map(x=>x.replace(/לאחוז בכפות ידיים לפנים/g,'לאחוז באחיזה הפוכה, כשכפות הידיים פונות אליך').replace(/כפות ידיים לפנים/g,'כפות הידיים פונות אליך'));
  e.instructions.unshift(grip);
 }
 if(e.perSide)e.instructions=e.instructions.map(x=>x.replace('יעד החזרות לכל צד','יעד החזרות באימון הוא סך שני הצדדים; לחלק שווה בין הצדדים'));
 if(id==='squat-pause'){
  e.cue='לרדת בשליטה, לעצור שתי שניות בתחתית בטווח נוח ולעלות ללא תנופה.';
  e.instructions=[e.cue,...e.instructions.slice(1)];
 }
 const compression={
  'bent-knee-compression-lift':'לשבת זקוף עם ברכיים כפופות וכפות הידיים לצד האגן. להרים שתי כפות רגליים מעט ולהוריד בשליטה.',
  'compression-lift':'לשבת זקוף עם ברכיים ישרות וכפות הידיים לצד האגן. להרים שני עקבים מהרצפה ולהוריד בלי להישען לאחור.',
  'long-lever-compression-lift':'לשבת זקוף עם ברכיים ישרות וכפות הידיים לצד הברכיים. להרים שני עקבים ולהוריד בשליטה, בלי להישען לאחור.'
 };
 if(compression[id]){e.cue=compression[id];e.instructions=[e.cue,'לנשום ולהוריד עקבים בשליטה בין החזרות.','אם הגב נופל לאחור או שאין הרמה נשלטת, לבחור את הגרסה הקלה.'];}

 // Each preparation is independently executable; no sibling is required for its setup.
 const prepSetup={
  'plank-lean-preparation':'לכרוע על ארבע על הרצפה, ברכיים נושאות משקל וכפות ידיים מתחת לכתפיים.',
  'frog-foot-preparation':'לכרוע בטווח נוח על הרצפה, כפות ידיים מונחות לפנים ושתי רגליים נושאות משקל.',
  'tuck-hang-preparation':'לאחוז במוט מעוגן מעל קופסה מעוגנת; שתי כפות הרגליים על הקופסה נושאות משקל.',
  'high-pull-preparation':'לאחוז במוט נמוך מעוגן, שתי כפות הרגליים נושאות משקל על הקרקע.',
  'band-straight-arm-preparation':'לעמוד מול גומייה קלה המעוגנת בבטחה בגובה החזה, מרפקים ישרים; לתעד גומייה ומרחק עמידה.',
  'grounded-extension-preparation':'לשבת על ספסל מעוגן, ידיים לצד האגן ושתי כפות הרגליים נושאות משקל על הקרקע.',
  'grounded-support-rock':'לשבת על ספסל מעוגן, ידיים לצד האגן, אגן נתמך ושתי כפות הרגליים על הקרקע.',
  'grounded-pike-hold':'להניח ידיים וכפות רגליים על הרצפה ולהרים אגן לפייק; לבחור מרחק נוח ולתעד אותו.',
  'grounded-pike-shift':'להניח שתי ידיים ושתי כפות רגליים על הרצפה, אגן גבוה וברכיים כפופות בנוחות.',
  'wall-side-support':'לעמוד לצד קיר יציב, שתי כפות הידיים על הקיר בגובה החזה ורגליים מתחת לאגן.',
  'supported-back-extension':'לעמוד מול קיר יציב, שתי כפות הידיים על הקיר בגובה החזה וכפות הרגליים על הקרקע.'
 };
 if(prepSetup[id]) {
  const action=e.cue.replace(/מאותו מנח על ארבע, |מאותה כריעה |באותו גובה מוט וקופסה |באותו מנח ובסיוע רגליים |באותה גומייה, עיגון ומרחק עמידה |מאותה ישיבה |באותו מנח, כשהאגן נתמך והרגליים על הקרקע, |באותו מרחק ידיים ורגליים |באותו מנח |באותו גובה ידיים /g,'');
  e.cue=prepSetup[id]+' '+action;
  e.instructions=[e.cue,'המרחק הוא גבול נוח לבחירה, לא מבחן מוכנות; לשמור תמיכה ולנשום.',
   id.includes('band-') ? 'להחזיר ידיים לגובה החזה בשליטה ולשחרר מתח לפני הסרת הגומייה.' :
   id.includes('hang') || id.includes('pull-preparation') ? 'ליישר מרפקים בשליטה כשהרגליים נושאות משקל; לעמוד ביציבות לפני שחרור האחיזה.' :
   id.includes('frog') || id.includes('pike') || id.includes('plank') ? 'להחזיר משקל לרגליים ולהניח ברכיים בשליטה לפני שחרור הידיים.' :
   id.includes('grounded-') ? 'להחזיר אגן למושב, להעביר משקל לרגליים ולשחרר ידיים בשליטה.' :
   'לחזור לעמידה זקופה עם רגליים יציבות לפני הסרת הידיים.', 'לעצור בכאב או בירידת שליטה.'];
 }
 if(['grounded-pike-shift','grounded-pike-shift-short'].includes(id)) {
  e.cue=e.cue.replace('ימינה ואז שמאלה','קדימה ובחזרה');
  e.instructions=e.instructions.map(x=>x.replace('ימינה ואז שמאלה','קדימה ובחזרה'));
 }
 if(id==='lever-assisted-tuck')e.cue='סיוע גומייה בלבד, לפי דירוג ועיגון שנבדקו עם מאמן; להחזיק טאק בזרועות ישרות ולצאת בשליטה. אין סיוע ידני בגרסה זו.';
 e.movementSubtype=raw.movementSubtype||e.movementPattern;
 if(['pike-push','elevated-pike-push','wall-hspu','partial-wall-hspu','wall-hspu-negative'].includes(id))e.movementSubtype='overhead_press';
 if(['dip','straight-bar-dip'].includes(id))e.movementSubtype='downward_support_press';
 if(id==='clamshell')e.movementSubtype=e.movementPattern='hip_external_rotation';
 if(id==='side-leg-raise')e.movementSubtype=e.movementPattern='hip_abduction';
 if(['back-lever','assisted-tuck-back-lever','extension-supported'].includes(id)){e.movementSubtype=e.movementPattern='straight_arm_pull';e.group='pull';e.muscleGroups=['back','shoulders','arms'];}
 if(id==='row-feet-elevated')e.equipment=['lowbar','box'];
 e.equipmentRequirements=raw.equipmentRequirements||[e.equipment.slice()];
 if(id==='assisted-muscle-up'||id==='lever-assisted-tuck'){e.equipmentRequirements=[['bar','band']];e.instructions[0]='סיוע גומייה בלבד בגרסה זו: סוג, דירוג ועיגון נבדקים ומתועדים עם מאמן; אין להחליף בסיוע ידני לא מתועד.';}
 if(id==='assisted-tuck-back-lever')e.equipmentRequirements=[['rings','band']];
 if(id==='one-leg-lsit')e.perSide=true;
 if(id==='handstand-free'){e.unit='reps';e.he='ניסיונות כניסה לעמידת ידיים';}
 if(id==='support')e.instructions.splice(1,0,'כשהתמיכה יציבה, לנתק שתי כפות רגליים מהקרקע ולהחזיק במרפקים ישרים.');
 if(id==='copenhagen-plank'){e.unit='seconds';e.perSide=true;e.he='החזקת קופנהגן במנוף קצר';e.instructions=['בהדרכה: להניח ברך כפופה על תמיכה מעוגנת ולהחזיק אגן יציב.','אין תנועת הרמה דינמית; לצאת בהנחת האגן בשליטה.'];}
 const tags=new Set(raw.loadingTags||[]);const pattern=e.movementPattern;
 if(e.group==='push'||['support','compression'].includes(pattern)){tags.add('shoulder_support');tags.add('elbow_extensors');tags.add('wrists');}
 if(e.group==='pull'||pattern==='straight_arm_pull'||['hanging-knee','toes-to-bar'].includes(id)){tags.add('grip');tags.add('elbow_flexors');}
 if(['squat','single_leg','locomotion'].includes(pattern))tags.add('knee_extensors');
 if(['squat','single_leg','hinge','hip_extension'].includes(pattern))tags.add('hip_extensors');
 if(['hinge','knee_flexion'].includes(pattern))tags.add('knee_flexors');
 if(['back-lever','assisted-tuck-back-lever','extension-supported','german-hang','skin-the-cat','dip','straight-bar-dip'].includes(id))tags.add('shoulder_extension');
 if(['human-flag','muscle-up-strict','assisted-muscle-up','flag-assisted','flag-tuck'].includes(id)){['grip','elbow_flexors','elbow_extensors','shoulder_support','wrists'].forEach(t=>tags.add(t));}
 if(['plank','side-plank','side-plank-knee','bird-dog','scap-push'].includes(id)){tags.add('shoulder_support');tags.add('wrists');}
 e.primaryMuscle=e.muscleGroups[0];e.secondaryMuscles=e.muscleGroups.slice(1);
 if(id==='scap-push')e.movementSubtype='scapular_push';if(['scap-pull','active-hang','dead-hang'].includes(id))e.movementSubtype='scapular_pull';
 e.loadingTags=[...tags];e.tempo={eccentric:2,concentric:1,pause:id==='squat-pause'?2:0};
 e.novelEccentric=!!raw.novelEccentric||['pull-negative','front-lever-negative','dragon-negative','nordic-negative','wall-hspu-negative'].includes(id);
 if(e.novelEccentric)e.tempo={eccentric:5,concentric:0,pause:1};
 e.demandingStraightArm=!!raw.demandingStraightArm||['straight_arm_pull'].includes(pattern)||['front-lever','tuck-front-lever','advanced-tuck-front-lever','lever-assisted-tuck','tuck-planche','full-planche','straddle-planche','planche-lean','human-flag','flag-tuck'].includes(id);
 e.entryExitSeconds=10;e.sideSwitchSeconds=e.perSide?10:0;
 if(id==='elevated-pike-push'){e.cue='הראש נע קדימה ולמטה בשליטה; אין נשיאת משקל על הראש והצוואר.';e.instructions[0]=e.cue+' לבדוק משטח מעוגן ויציאה לקרקע עם מדריך.';e.keyCues=e.instructions.slice(0,3);}
 if(['elevated-pike-push','wall-hspu','wall-hspu-negative','partial-wall-hspu'].includes(id))e.instructions=[...e.instructions,'הראש נע קדימה ולמטה בשליטה; משקל דרך כפות הידיים. לעצור לפני מגע נושא משקל: אין חבטה או עומס על הראש והצוואר. לבדוק תמיכה מעוגנת ויציאה לקרקע עם מדריך.'];
 return e;
}
