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
    "he": "סקוואט מפוצל",
    "en": "Split squat",
    "group": "legs",
    "equipment": [],
    "level": 2,
    "cue": "לכופף את שתי הברכיים ולרדת אנכית בטווח נוח. עלו בשליטה ולהחליף צד; יעד החזרות לכל צד.",
    "easy": "להקטין עומק ולהיעזר בקיר יציב.",
    "instructions": [
      "לעמוד בפסיעה רחבה מספיק לשיווי משקל.",
      "לכופף את שתי הברכיים ולרדת אנכית בטווח נוח.",
      "עלו בשליטה ולהחליף צד; יעד החזרות לכל צד."
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
    "easy": "לבחור סקוואט מפוצל במקום צעד.",
    "instructions": [
      "להתחיל בעמידה יציבה עם מרחב מאחור.",
      "קחו צעד לאחור ולהוריד אגן בשליטה.",
      "לדחוק דרך הרגל הקדמית ולחזור; להחליף צד."
    ],
    "mistakes": [
      "צעד ארוך מדי הגורם לאובדן שיווי משקל."
    ],
    "regressions": [
      "לבחור סקוואט מפוצל במקום צעד."
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
    "easy": "סקוואט מפוצל או טווח קטן יותר.",
    "instructions": [
      "לעמוד ליד קיר יציב ולשמור תמיכה קלה ביד.",
      "לכופף ברך וירך של רגל תומכת בטווח קצר הנשלט היטב.",
      "עלו ולהחליף צד; העומק אינו המטרה."
    ],
    "mistakes": [
      "ירידה לעומק שלא ניתן לעלות ממנו בשליטה."
    ],
    "regressions": [
      "סקוואט מפוצל או טווח קטן יותר."
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
      "לכופף ברכיים בכיוון הבהונות ועלו בשליטה.",
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
const all=[...assessmentAnchors,...originalExercises,...drillExercises,...hspuExercises,handstandHold,...apparatusVariants],known=new Set(all.map(e=>e.id));

// Five catalogue difficulty levels; execution clearance remains a separate requirement.
const difficultyLevels={"feet-assisted-pull": 1, "heel-dig-hold": 1, "wall-push": 1, "incline-push": 1, "knee-push": 1, "scap-push": 1, "band-row": 1, "active-hang": 1, "squat": 1, "bridge": 1, "hinge": 1, "calf": 1, "deadbug": 1, "bird-dog": 1, "side-plank-knee": 1, "march": 1, "step-jack": 1, "standing-knee": 1, "wall-sit": 1, "sumo-squat": 1, "clamshell": 1, "side-leg-raise": 1, "heel-tap": 1, "reverse-crunch": 1, "prone-w": 1, "wall-slide": 1, "cat-cow": 1, "thoracic-rotation": 1, "ankle-rock": 1, "dead-hang": 1, "foot-support": 1, "parallette-foot-support": 1, "push": 2, "support": 2, "row": 2, "scap-pull": 2, "split": 2, "reverse-lunge": 2, "lateral-lunge": 2, "single-bridge": 2, "bridge-march": 2, "single-hinge": 2, "single-calf": 2, "plank": 2, "side-plank": 2, "hollow": 2, "squat-pause": 2, "pike-support": 2, "partial-wall-line": 2, "compression-lift": 2, "row-wide": 2, "ring-row": 2, "close-push": 3, "pike-push": 3, "dip": 3, "row-horizontal": 3, "pull-negative": 3, "pull": 3, "chin": 3, "single-squat": 3, "hanging-knee": 3, "tuck-lsit": 3, "wall-handstand": 3, "chest-wall-handstand": 3, "elevated-pike-push": 3, "archer-push": 3, "pseudo-planche-push": 3, "planche-lean": 3, "frog-stand": 3, "low-bar-transition": 3, "straight-bar-dip": 3, "pistol-box": 3, "shrimp-squat": 3, "copenhagen-plank": 3, "handstand-shift": 3, "lever-supported": 3, "tuck-assisted-planche": 3, "row-feet-elevated": 3, "pistol": 4, "lsit": 4, "straddle-planche": 4, "tuck-planche": 4, "tuck-front-lever": 4, "advanced-tuck-front-lever": 4, "front-lever-negative": 4, "explosive-pull": 4, "assisted-muscle-up": 4, "muscle-up-strict": 4, "nordic-negative": 4, "toes-to-bar": 4, "dragon-negative": 4, "skin-the-cat": 4, "german-hang": 4, "back-lever": 4, "assisted-tuck-back-lever": 4, "flag-ground": 4, "flag-assisted": 4, "flag-tuck": 4, "handstand-toe-pull": 4, "handstand-free": 4, "lever-assisted-tuck": 4, "one-leg-lsit": 4, "extension-supported": 4, "wall-hspu-negative": 4, "partial-wall-hspu": 4, "wall-hspu": 4, "handstand-free-hold": 4, "full-planche": 5, "front-lever": 5, "human-flag": 5};
export const exercises=all.map(raw=>{
 const e=correctMetadata(raw);
 if(!difficultyLevels[e.id])throw new Error("Missing exercise difficulty: "+e.id);
 e.level=difficultyLevels[e.id];
 const regressions=new Set((e.regressions||[]).filter(id=>known.has(id))),progressions=new Set((e.progressions||[]).filter(id=>known.has(id)));
 for(const chain of progressionChains){const i=chain.indexOf(e.id);if(i>0)regressions.add(chain[i-1]);if(i>=0&&i<chain.length-1)progressions.add(chain[i+1]);}
 const apparatus=e.apparatus||(/dip|support|lsit/.test(e.id)?'parallel':e.equipment.includes('bar')?'bar':e.equipment.includes('lowbar')?'lowbar':e.equipment.includes('wall')?'wall':e.equipment.includes('band')?'band':'floor');
 const pose=registerPose(e.id,{from:e.parent,template:e.poseTemplate,equipment:apparatus,hold:e.unit==='seconds'});
 const hold=e.unit==='seconds',core=e.group==='core';
 const exactMuscles={'nordic-negative':['ירך אחורית','שוקיים'],'copenhagen-plank':['מקרבי ירך','אלכסוני הבטן'],'dragon-negative':['ליבה','מייצבי כתפיים'],'toes-to-bar':['ליבה','מכופפי ירך','אחיזה']};
 return {...e,...(exactMuscles[e.id]?{muscles:exactMuscles[e.id]}:{}),pattern:e.movementPattern,pose,regressions:[...regressions],progressions:[...progressions],keyCues:(e.instructions||[e.cue]).slice(0,3),mistakes:[...(e.mistakes||[]),'המשך מעבר לאובדן שליטה.'].slice(0,2),defaultDosage:e.advancedOnly?{educationOnly:true,reviewStatus:'exercise-specific-review-required'}:{sets:[2,3],...(hold?{holdSeconds:[10,30]}:{reps:core?[6,12]:[5,10]}),rir:[2,3],restSeconds:core||hold?[60,90]:[120,180],perSide:!!e.perSide,skill:{attempts:[4,8],holdSeconds:[5,15],intervalSeconds:[60,120]},source:'docs/COACH_METHOD.md §2',reviewStatus:'pending-review'}};
});

// Explicit metadata is shared by planning, recovery, library and logging.
function correctMetadata(raw){
 const e={...raw},id=e.id;
 e.movementSubtype=e.movementPattern;
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
 if(id==='copenhagen-plank'){e.unit='seconds';e.perSide=true;e.he='החזקת קופנהגן במנוף קצר';e.instructions=['בהדרכה: להניח ברך כפופה על תמיכה מעוגנת ולהחזיק אגן יציב.','אין תנועת הרמה דינמית; לצאת בהנחת האגן בשליטה.'];}
 const tags=new Set();const pattern=e.movementPattern;
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
 e.novelEccentric=['pull-negative','front-lever-negative','dragon-negative','nordic-negative','wall-hspu-negative'].includes(id);
 if(e.novelEccentric)e.tempo={eccentric:5,concentric:0,pause:1};
 e.demandingStraightArm=['straight_arm_pull'].includes(pattern)||['front-lever','tuck-front-lever','advanced-tuck-front-lever','lever-assisted-tuck','tuck-planche','full-planche','straddle-planche','planche-lean','human-flag','flag-tuck'].includes(id);
 e.entryExitSeconds=10;e.sideSwitchSeconds=e.perSide?10:0;
 if(id==='elevated-pike-push'){e.cue='הראש נע קדימה ולמטה בשליטה; אין נשיאת משקל על הראש והצוואר.';e.instructions[0]=e.cue+' לבדוק משטח מעוגן ויציאה לקרקע עם מדריך.';e.keyCues=e.instructions.slice(0,3);}
 if(['elevated-pike-push','wall-hspu','wall-hspu-negative','partial-wall-hspu'].includes(id))e.instructions=[...e.instructions,'הראש נע קדימה ולמטה בשליטה; משקל דרך כפות הידיים. לעצור לפני מגע נושא משקל: אין חבטה או עומס על הראש והצוואר. לבדוק תמיכה מעוגנת ויציאה לקרקע עם מדריך.'];
 return e;
}
