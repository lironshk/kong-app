// Executable mappings from user transcriptions. Archive records remain unchanged.
export const coachWorkouts = [
  {
    "id": "FB001",
    "sourceRecord": "FB001",
    "sourceId": "001",
    "he": "כוח מתפרץ ומשיכה",
    "en": "Explosive pull and legs",
    "description": "אימון מלא במקטעים לפי סדר התמלול, עם חימום, עבודה וסיום מותאמים לזמן הזמין.",
    "origin": "coach",
    "level": 4,
    "equipment": [
      "bar",
      "bench"
    ],
    "minutes": 45,
    "estimatedMinutes": 45,
    "focus": "full",
    "muscleGroups": [
      "fullbody"
    ],
    "format": "sets",
    "moves": [
      "plank-knee-elbow",
      "jumping-jack",
      "butt-kick",
      "explosive-pull",
      "pull",
      "split"
    ],
    "sections": [
      {
        "type": "warmup",
        "title": "חימום",
        "rounds": 2,
        "uncertain": false,
        "items": [
          {
            "id": "plank-knee-elbow",
            "sourceName": "Plank Knee to Elbow",
            "seconds": 30,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": null,
              "duration_seconds": {
                "min": 30,
                "max": 30
              },
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": {
                "min": 2,
                "max": 2
              }
            }
          },
          {
            "id": "jumping-jack",
            "sourceName": "Jumping Jacks",
            "seconds": 30,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": null,
              "duration_seconds": {
                "min": 30,
                "max": 30
              },
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": {
                "min": 2,
                "max": 2
              }
            }
          },
          {
            "id": "butt-kick",
            "sourceName": "Butt Kicks",
            "seconds": 30,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": null,
              "duration_seconds": {
                "min": 30,
                "max": 30
              },
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": {
                "min": 2,
                "max": 2
              }
            }
          }
        ],
        "note": ""
      },
      {
        "type": "strength",
        "title": "כוח — סבב ×3",
        "rounds": 3,
        "uncertain": false,
        "items": [
          {
            "id": "explosive-pull",
            "sourceName": "Explosive Pull Ups",
            "reps": 4,
            "perSide": false,
            "uncertain": true,
            "note": "שיוך המספר אינו ודאי; אין כמות מאומתת. מינון חסר: יעד אפליקציה שמרני, ללא ניסיון מרבי.",
            "archivePrescription": {
              "reps": null,
              "duration_seconds": null,
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "conflicted",
              "uncertainty": [
                "שיוך המספר אינו ודאי; אין כמות מאומתת."
              ],
              "rounds": {
                "min": 3,
                "max": 3
              }
            }
          },
          {
            "id": "pull",
            "sourceName": "Pull Ups",
            "reps": 10,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": {
                "min": 10,
                "max": 10
              },
              "duration_seconds": null,
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "medium",
              "uncertainty": [],
              "rounds": {
                "min": 3,
                "max": 3
              }
            }
          },
          {
            "id": "rear-foot-elevated-split",
            "sourceName": "Bulgarian Split Squat",
            "reps": 12,
            "perSide": true,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": {
                "min": 12,
                "max": 12
              },
              "duration_seconds": null,
              "sets": null,
              "per_side": true,
              "side_scope": "each_side",
              "quantity_mode": null,
              "confidence": "medium",
              "uncertainty": [],
              "rounds": {
                "min": 3,
                "max": 3
              }
            }
          }
        ],
        "note": ""
      }
    ],
    "skipped": [
      "סקיל — תוכן חסר; המקטע הושמט",
      "Trap Pull — זהות לא מפוענחת"
    ],
    "note": "המינון והמנוחות מותאמים לפי כללי האפליקציה; משך האימון הוא הערכה ולא נתון מהלוח. הושמט: סקיל — תוכן חסר; המקטע הושמט " +
            "הושמט: Trap Pull — זהות לא מפוענחת תנועות מתקדמות דורשות אישור פרטני בתוקף; בלעדיו מוצעת הכנה מסומנת במינון נפרד.",
    "rotationEligible": true,
    "rotationReason": "מותנה באישור פרטני בתוקף לכל תרגיל מתקדם או אקסצנטרי, וברמה, ציוד, זמן, מיקוד והתאוששות.",
    "warmupSeconds": 180,
    "cooldownSeconds": 180,
    "phases": [
      {
        "id": "warm",
        "seconds": 180
      },
      {
        "id": "practice",
        "seconds": 2340
      },
      {
        "id": "cool",
        "seconds": 180
      }
    ],
    "reviewStatus": "pending-review"
  },
  {
    "id": "FB002",
    "sessionStructure": "rounds",
    "sourceRecord": "FB002",
    "sourceId": "001",
    "he": "סבבים לכל הגוף",
    "en": "Whole body rounds",
    "description": "אימון מלא במקטעים לפי סדר התמלול, עם חימום, עבודה וסיום מותאמים לזמן הזמין.",
    "origin": "coach",
    "level": 3,
    "equipment": [
      "lowbar",
      "parallel",
      "bar",
      "box",
      "wall"
    ],
    "minutes": 75,
    "estimatedMinutes": 75,
    "focus": "full",
    "muscleGroups": [
      "fullbody"
    ],
    "format": "sets",
    "moves": [
      "seated-in-out",
      "bicycle-crunch",
      "flutter-kick",
      "row",
      "jump-dip",
      "shoulder-tap",
      "jump-squat",
      "chin-up-hold",
      "wall-walk",
      "squat"
    ],
    "sections": [
      {
        "type": "warmup",
        "title": "חימום",
        "rounds": 2,
        "uncertain": false,
        "items": [
          {
            "id": "seated-in-out",
            "sourceName": "Seated In and Out",
            "seconds": 30,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": null,
              "duration_seconds": {
                "min": 30,
                "max": 30
              },
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": {
                "min": 2,
                "max": 2
              }
            }
          },
          {
            "id": "bicycle-crunch",
            "sourceName": "Bicycles",
            "seconds": 30,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": null,
              "duration_seconds": {
                "min": 30,
                "max": 30
              },
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": {
                "min": 2,
                "max": 2
              }
            }
          },
          {
            "id": "flutter-kick",
            "sourceName": "Leg Flutter",
            "seconds": 30,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": null,
              "duration_seconds": {
                "min": 30,
                "max": 30
              },
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": {
                "min": 2,
                "max": 2
              }
            }
          }
        ],
        "note": ""
      },
      {
        "type": "strength",
        "title": "כוח — סבב 1 ×3",
        "rounds": 3,
        "uncertain": false,
        "items": [
          {
            "id": "row",
            "sourceName": "Australian Pull Up (with stop)",
            "reps": 5,
            "perSide": false,
            "uncertain": true,
            "note": "Pull Up with Stop הופיע כפענוח נפרד קודם; אינו נספר כתרגיל חמישי.",
            "archivePrescription": {
              "reps": {
                "min": 5,
                "max": 5
              },
              "duration_seconds": null,
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "medium",
              "uncertainty": [
                "Pull Up with Stop הופיע כפענוח נפרד קודם; אינו נספר כתרגיל חמישי."
              ],
              "rounds": {
                "min": 3,
                "max": 3
              }
            }
          },
          {
            "id": "jump-dip",
            "sourceName": "Jump Dips",
            "reps": 4,
            "perSide": false,
            "uncertain": true,
            "note": "12 הופיע בפענוח קודם בלבד. מינון חסר: יעד אפליקציה שמרני, ללא ניסיון מרבי.",
            "archivePrescription": {
              "reps": null,
              "duration_seconds": null,
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "low",
              "uncertainty": [
                "12 הופיע בפענוח קודם בלבד."
              ],
              "rounds": {
                "min": 3,
                "max": 3
              }
            }
          },
          {
            "id": "shoulder-tap",
            "sourceName": "Shoulder Taps",
            "reps": 30,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": {
                "min": 30,
                "max": 30
              },
              "duration_seconds": null,
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "relatively_high",
              "uncertainty": [],
              "rounds": {
                "min": 3,
                "max": 3
              }
            }
          },
          {
            "id": "jump-squat",
            "sourceName": "Jump Squat",
            "reps": 15,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": {
                "min": 15,
                "max": 15
              },
              "duration_seconds": null,
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "relatively_high",
              "uncertainty": [],
              "rounds": {
                "min": 3,
                "max": 3
              }
            }
          }
        ],
        "note": ""
      },
      {
        "type": "strength",
        "title": "כוח — סבב 2 ×2–3",
        "rounds": 2,
        "uncertain": true,
        "items": [
          {
            "id": "chin-up-hold",
            "sourceName": "Chin Up Hold",
            "seconds": 10,
            "perSide": false,
            "uncertain": true,
            "note": "מינון חסר: יעד אפליקציה שמרני, ללא ניסיון מרבי.",
            "archivePrescription": {
              "reps": null,
              "duration_seconds": null,
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": "max_time",
              "confidence": "medium",
              "uncertainty": [],
              "rounds": {
                "min": 2,
                "max": 3
              }
            }
          },
          {
            "id": "wall-walk",
            "sourceName": "Wall Walks",
            "reps": 3,
            "perSide": false,
            "uncertain": true,
            "note": "",
            "archivePrescription": {
              "reps": {
                "min": 3,
                "max": 3
              },
              "duration_seconds": null,
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "medium",
              "uncertainty": [],
              "rounds": {
                "min": 2,
                "max": 3
              }
            }
          },
          {
            "id": "squat",
            "sourceName": "Close Squats",
            "reps": 15,
            "perSide": false,
            "uncertain": true,
            "note": "שם לא מאומת מול התמונה.",
            "archivePrescription": {
              "reps": {
                "min": 15,
                "max": 15
              },
              "duration_seconds": null,
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "medium",
              "uncertainty": [
                "שם לא מאומת מול התמונה."
              ],
              "rounds": {
                "min": 2,
                "max": 3
              }
            }
          }
        ],
        "note": ""
      }
    ],
    "skipped": [
      "סקיל — תוכן חסר; המקטע הושמט"
    ],
    "note": "המינון והמנוחות מותאמים לפי כללי האפליקציה; משך האימון הוא הערכה ולא נתון מהלוח. הושמט: סקיל — תוכן חסר; המקטע הושמט " +
            "תנועות מתקדמות דורשות אישור פרטני בתוקף; בלעדיו מוצעת הכנה מסומנת במינון נפרד.",
    "rotationEligible": true,
    "rotationReason": "מותנה באישור פרטני בתוקף לכל תרגיל מתקדם או אקסצנטרי, וברמה, ציוד, זמן, מיקוד והתאוששות.",
    "warmupSeconds": 180,
    "cooldownSeconds": 180,
    "phases": [
      {
        "id": "warm",
        "seconds": 180
      },
      {
        "id": "practice",
        "seconds": 4140
      },
      {
        "id": "cool",
        "seconds": 180
      }
    ],
    "reviewStatus": "pending-review"
  },
  {
    "id": "FB003",
    "sourceRecord": "FB003",
    "sourceId": "001",
    "he": "משיכה ויציבות כתפיים",
    "en": "Pull and shoulder control",
    "description": "אימון מלא במקטעים לפי סדר התמלול, עם חימום, עבודה וסיום מותאמים לזמן הזמין.",
    "origin": "coach",
    "level": 4,
    "equipment": [
      "bar",
      "band"
    ],
    "minutes": 75,
    "estimatedMinutes": 75,
    "focus": "full",
    "muscleGroups": [
      "fullbody"
    ],
    "format": "sets",
    "moves": [
      "jumping-jack",
      "bicycle-crunch",
      "commando-plank",
      "arch-pull",
      "back-bridge",
      "lunge",
      "band-external-rotation",
      "band-scapula-shrug",
      "superman-hold"
    ],
    "sections": [
      {
        "type": "warmup",
        "title": "חימום",
        "rounds": 2,
        "uncertain": false,
        "items": [
          {
            "id": "jumping-jack",
            "sourceName": "Jumping Jacks",
            "seconds": 30,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": null,
              "duration_seconds": {
                "min": 30,
                "max": 30
              },
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": {
                "min": 2,
                "max": 2
              }
            }
          },
          {
            "id": "bicycle-crunch",
            "sourceName": "Bicycles",
            "seconds": 30,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": null,
              "duration_seconds": {
                "min": 30,
                "max": 30
              },
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": {
                "min": 2,
                "max": 2
              }
            }
          },
          {
            "id": "commando-plank",
            "sourceName": "Commando Plank",
            "seconds": 30,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": null,
              "duration_seconds": {
                "min": 30,
                "max": 30
              },
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": {
                "min": 2,
                "max": 2
              }
            }
          }
        ],
        "note": ""
      },
      {
        "type": "strength",
        "title": "כוח — סבב 1 · מתח בגב מקושת",
        "rounds": 3,
        "items": [
          {
            "id": "arch-pull",
            "sourceName": "Arch Pull Up",
            "reps": 8,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": {
                "min": 8,
                "max": 8
              },
              "duration_seconds": null,
              "sets": {
                "min": 3,
                "max": 3
              },
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "medium",
              "uncertainty": [],
              "rounds": null
            }
          }
        ],
        "note": "אין ודאות שכל שבעת התרגילים שייכים לאותו סבב; ×3 בשורות נשמר כסטים בלבד ולא כסבבים נוספים.",
        "individualSets": true
      },
      {
        "type": "strength",
        "title": "כוח — סבב 1 · גשר גב בתמיכת ידיים ורגליים",
        "rounds": 3,
        "items": [
          {
            "id": "back-bridge",
            "sourceName": "Back Bridge",
            "reps": 15,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": {
                "min": 15,
                "max": 15
              },
              "duration_seconds": null,
              "sets": {
                "min": 3,
                "max": 3
              },
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "medium",
              "uncertainty": [],
              "rounds": null
            }
          }
        ],
        "note": "אין ודאות שכל שבעת התרגילים שייכים לאותו סבב; ×3 בשורות נשמר כסטים בלבד ולא כסבבים נוספים.",
        "individualSets": true
      },
      {
        "type": "strength",
        "title": "כוח — סבב 1",
        "rounds": 1,
        "uncertain": true,
        "items": [
          {
            "id": "lunge",
            "sourceName": "Lunges",
            "seconds": 60,
            "perSide": true,
            "uncertain": true,
            "note": "חלוקת צדדים לא ידועה: יעד האפליקציה הכולל מתחלק שווה בשווה.",
            "archivePrescription": {
              "reps": null,
              "duration_seconds": {
                "min": 60,
                "max": 60
              },
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "medium",
              "uncertainty": [],
              "rounds": null
            }
          }
        ],
        "note": "אין ודאות שכל שבעת התרגילים שייכים לאותו סבב; ×3 בשורות נשמר כסטים בלבד ולא כסבבים נוספים. מספר סבבים חסר: סבב אפליקציה אחד."
      },
      {
        "type": "strength",
        "title": "כוח — סבב 1 · סיבוב כתף חיצוני עם גומייה",
        "rounds": 3,
        "items": [
          {
            "id": "band-external-rotation",
            "sourceName": "External Shoulder Rotation",
            "reps": 10,
            "perSide": true,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": {
                "min": 10,
                "max": 10
              },
              "duration_seconds": null,
              "sets": {
                "min": 3,
                "max": 3
              },
              "per_side": true,
              "side_scope": "each_side",
              "quantity_mode": null,
              "confidence": "medium",
              "uncertainty": [],
              "rounds": null
            }
          }
        ],
        "note": "אין ודאות שכל שבעת התרגילים שייכים לאותו סבב; ×3 בשורות נשמר כסטים בלבד ולא כסבבים נוספים.",
        "individualSets": true
      },
      {
        "type": "strength",
        "title": "כוח — סבב 1 · הרמות שכמות עם גומייה",
        "rounds": 3,
        "items": [
          {
            "id": "band-scapula-shrug",
            "sourceName": "Scapula Shrugs with Band",
            "reps": 15,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": {
                "min": 15,
                "max": 15
              },
              "duration_seconds": null,
              "sets": {
                "min": 3,
                "max": 3
              },
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "medium",
              "uncertainty": [],
              "rounds": null
            }
          }
        ],
        "note": "אין ודאות שכל שבעת התרגילים שייכים לאותו סבב; ×3 בשורות נשמר כסטים בלבד ולא כסבבים נוספים.",
        "individualSets": true
      },
      {
        "type": "strength",
        "title": "כוח — סבב 1 · החזקת סופרמן בשכיבה",
        "rounds": 3,
        "items": [
          {
            "id": "superman-hold",
            "sourceName": "Superman Hold",
            "seconds": 15,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": null,
              "duration_seconds": {
                "min": 15,
                "max": 15
              },
              "sets": {
                "min": 3,
                "max": 3
              },
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "medium",
              "uncertainty": [],
              "rounds": null
            }
          }
        ],
        "note": "אין ודאות שכל שבעת התרגילים שייכים לאותו סבב; ×3 בשורות נשמר כסטים בלבד ולא כסבבים נוספים.",
        "individualSets": true
      }
    ],
    "skipped": [
      "סקיל — תוכן חסר; המקטע הושמט",
      "Trap Pull — זהות לא מפוענחת"
    ],
    "note": "המינון והמנוחות מותאמים לפי כללי האפליקציה; משך האימון הוא הערכה ולא נתון מהלוח. הושמט: סקיל — תוכן חסר; המקטע הושמט " +
            "הושמט: Trap Pull — זהות לא מפוענחת תנועות מתקדמות דורשות אישור פרטני בתוקף; בלעדיו מוצעת הכנה מסומנת במינון נפרד.",
    "rotationEligible": true,
    "rotationReason": "מותנה באישור פרטני בתוקף לכל תרגיל מתקדם או אקסצנטרי, וברמה, ציוד, זמן, מיקוד והתאוששות.",
    "warmupSeconds": 180,
    "cooldownSeconds": 180,
    "phases": [
      {
        "id": "warm",
        "seconds": 180
      },
      {
        "id": "practice",
        "seconds": 4140
      },
      {
        "id": "cool",
        "seconds": 180
      }
    ],
    "reviewStatus": "pending-review"
  },
  {
    "id": "COACH-PUSH001",
    "sourceRecord": "COACH-PUSH001",
    "sourceId": "004",
    "he": "דחיקה והכנה לפלאנץ׳",
    "en": "Push and planche preparation",
    "description": "אימון מלא במקטעים לפי סדר התמלול, עם חימום, עבודה וסיום מותאמים לזמן הזמין.",
    "origin": "coach",
    "level": 3,
    "equipment": [
      "box"
    ],
    "minutes": 75,
    "estimatedMinutes": 75,
    "focus": "push",
    "muscleGroups": [
      "chest",
      "shoulders",
      "arms"
    ],
    "format": "sets",
    "moves": [
      "push",
      "elevated-pike-push",
      "wide-push",
      "planche-lean",
      "diamond-push",
      "decline-push",
      "lying-leg-raise"
    ],
    "sections": [
      {
        "type": "warmup",
        "title": "חימום — 2 סבבים",
        "rounds": 2,
        "uncertain": false,
        "items": [
          {
            "id": "push",
            "sourceName": "Push-ups",
            "reps": 4,
            "perSide": false,
            "uncertain": true,
            "note": "שם ברור, משך לא ודאי. מינון חסר: יעד אפליקציה שמרני, ללא ניסיון מרבי.",
            "archivePrescription": {
              "reps": null,
              "duration_seconds": null,
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "low",
              "uncertainty": [
                "שם ברור, משך לא ודאי."
              ],
              "rounds": {
                "min": 2,
                "max": 2
              }
            }
          }
        ],
        "note": "תחולת הסימון ×30 sec אינה מוכרעת."
      },
      {
        "type": "strength",
        "title": "מקטע ראשי — סבב 1 · שכיבות סמיכה פייק מוגבה",
        "rounds": 3,
        "items": [
          {
            "id": "elevated-pike-push",
            "sourceName": "Elevated Pike Push-ups",
            "reps": 8,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": {
                "min": 8,
                "max": 8
              },
              "duration_seconds": null,
              "sets": {
                "min": 3,
                "max": 3
              },
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": null
            }
          }
        ],
        "note": "סטים בשורות אינם מספר סבבים. תמונת IMG_0929.jpeg אינה זמינה לאימות.",
        "individualSets": true
      },
      {
        "type": "strength",
        "title": "מקטע ראשי — סבב 1 · שכיבות סמיכה רחבות",
        "rounds": 3,
        "items": [
          {
            "id": "wide-push",
            "sourceName": "Wide Push-ups",
            "reps": 15,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": {
                "min": 15,
                "max": 15
              },
              "duration_seconds": null,
              "sets": {
                "min": 3,
                "max": 3
              },
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": null
            }
          }
        ],
        "note": "סטים בשורות אינם מספר סבבים. תמונת IMG_0929.jpeg אינה זמינה לאימות.",
        "individualSets": true
      },
      {
        "type": "strength",
        "title": "מקטע ראשי — סבב 1 · הטיית פלאנץ׳",
        "rounds": 3,
        "items": [
          {
            "id": "planche-lean",
            "sourceName": "Elevated Lean Planche",
            "seconds": 30,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": null,
              "duration_seconds": {
                "min": 30,
                "max": 30
              },
              "sets": {
                "min": 3,
                "max": 3
              },
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": null
            }
          }
        ],
        "note": "סטים בשורות אינם מספר סבבים. תמונת IMG_0929.jpeg אינה זמינה לאימות.",
        "individualSets": true
      },
      {
        "type": "strength",
        "title": "מקטע ראשי — סבב 1 · שכיבות סמיכה יהלום",
        "rounds": 3,
        "items": [
          {
            "id": "diamond-push",
            "sourceName": "Diamond Push-ups",
            "reps": 10,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": {
                "min": 10,
                "max": 10
              },
              "duration_seconds": null,
              "sets": {
                "min": 3,
                "max": 3
              },
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": null
            }
          }
        ],
        "note": "סטים בשורות אינם מספר סבבים. תמונת IMG_0929.jpeg אינה זמינה לאימות.",
        "individualSets": true
      },
      {
        "type": "strength",
        "title": "מקטע ראשי — סבב 1 · שכיבות סמיכה עם רגליים מוגבהות",
        "rounds": 3,
        "items": [
          {
            "id": "decline-push",
            "sourceName": "Decline Push-ups",
            "reps": 8,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": {
                "min": 8,
                "max": 8
              },
              "duration_seconds": null,
              "sets": {
                "min": 3,
                "max": 3
              },
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": null
            }
          }
        ],
        "note": "סטים בשורות אינם מספר סבבים. תמונת IMG_0929.jpeg אינה זמינה לאימות.",
        "individualSets": true
      },
      {
        "type": "strength",
        "title": "מקטע ראשי — סבב 1 · הרמות רגליים בשכיבה",
        "rounds": 3,
        "items": [
          {
            "id": "lying-leg-raise",
            "sourceName": "Leg Raises on Floor",
            "reps": 12,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": {
                "min": 12,
                "max": 12
              },
              "duration_seconds": null,
              "sets": {
                "min": 3,
                "max": 3
              },
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": null
            }
          }
        ],
        "note": "סטים בשורות אינם מספר סבבים. תמונת IMG_0929.jpeg אינה זמינה לאימות.",
        "individualSets": true
      }
    ],
    "skipped": [
      "Jumping…; כנראה Jumping Jacks — זהות לא מפוענחת",
      "Dynamic…; המשך לא קריא — זהות לא מפוענחת",
      "סקיל — תוכן חסר; המקטע הושמט"
    ],
    "note": "המינון והמנוחות מותאמים לפי כללי האפליקציה; משך האימון הוא הערכה ולא נתון מהלוח. הושמט: Jumping…; כנראה Jumping Jacks — " +
            "זהות לא מפוענחת הושמט: Dynamic…; המשך לא קריא — זהות לא מפוענחת הושמט: סקיל — תוכן חסר; המקטע הושמט תנועות מתקדמות " +
            "דורשות אישור פרטני בתוקף; בלעדיו מוצעת הכנה מסומנת במינון נפרד.",
    "rotationEligible": true,
    "rotationReason": "מותנה באישור פרטני בתוקף לכל תרגיל מתקדם או אקסצנטרי, וברמה, ציוד, זמן, מיקוד והתאוששות.",
    "warmupSeconds": 180,
    "cooldownSeconds": 180,
    "phases": [
      {
        "id": "warm",
        "seconds": 180
      },
      {
        "id": "practice",
        "seconds": 4140
      },
      {
        "id": "cool",
        "seconds": 180
      }
    ],
    "reviewStatus": "pending-review"
  },
  {
    "id": "COACH-FB004",
    "sessionStructure": "rounds",
    "sourceRecord": "COACH-FB004",
    "sourceId": "005",
    "he": "כוח וסבולת לכל הגוף",
    "en": "Whole body strength and endurance",
    "description": "אימון מלא במקטעים לפי סדר התמלול, עם חימום, עבודה וסיום מותאמים לזמן הזמין.",
    "origin": "coach",
    "level": 3,
    "equipment": [
      "bar",
      "lowbar"
    ],
    "minutes": 60,
    "estimatedMinutes": 60,
    "focus": "full",
    "muscleGroups": [
      "fullbody"
    ],
    "format": "sets",
    "moves": [
      "seated-in-out",
      "plank-knee-elbow",
      "half-burpee",
      "pull-negative",
      "bar-triceps-extension",
      "push",
      "lunge"
    ],
    "sections": [
      {
        "type": "warmup",
        "title": "חימום — 2 סבבים",
        "rounds": 2,
        "uncertain": false,
        "items": [
          {
            "id": "seated-in-out",
            "sourceName": "In & Out",
            "seconds": 30,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": null,
              "duration_seconds": {
                "min": 30,
                "max": 30
              },
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": {
                "min": 2,
                "max": 2
              }
            }
          },
          {
            "id": "plank-knee-elbow",
            "sourceName": "Plank Knee to Elbow",
            "seconds": 30,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": null,
              "duration_seconds": {
                "min": 30,
                "max": 30
              },
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": {
                "min": 2,
                "max": 2
              }
            }
          },
          {
            "id": "half-burpee",
            "sourceName": "Half Burpees",
            "reps": 10,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": {
                "min": 10,
                "max": 10
              },
              "duration_seconds": null,
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": {
                "min": 2,
                "max": 2
              }
            }
          }
        ],
        "note": ""
      },
      {
        "type": "strength",
        "title": "מקטע ראשי — 3 סבבים",
        "rounds": 3,
        "uncertain": false,
        "items": [
          {
            "id": "pull-negative",
            "sourceName": "Jump Negative Pull-Ups",
            "reps": 4,
            "perSide": false,
            "uncertain": true,
            "note": "מספר חזרות לא ידוע. מינון חסר: יעד אפליקציה שמרני, ללא ניסיון מרבי.",
            "archivePrescription": {
              "reps": null,
              "duration_seconds": null,
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [
                "מספר חזרות לא ידוע."
              ],
              "rounds": {
                "min": 3,
                "max": 3
              }
            }
          },
          {
            "id": "bar-triceps-extension",
            "sourceName": "Triceps Extensions",
            "reps": 10,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": {
                "min": 10,
                "max": 10
              },
              "duration_seconds": null,
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": {
                "min": 3,
                "max": 3
              }
            }
          },
          {
            "id": "push",
            "sourceName": "Push-Ups",
            "seconds": 30,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": null,
              "duration_seconds": {
                "min": 30,
                "max": 30
              },
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": {
                "min": 3,
                "max": 3
              }
            }
          },
          {
            "id": "lunge",
            "sourceName": "Squat Lunges",
            "seconds": 30,
            "perSide": true,
            "uncertain": true,
            "note": "חלוקת צדדים לא ידועה: יעד האפליקציה הכולל מתחלק שווה בשווה.",
            "archivePrescription": {
              "reps": null,
              "duration_seconds": {
                "min": 30,
                "max": 30
              },
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": {
                "min": 3,
                "max": 3
              }
            }
          }
        ],
        "note": ""
      }
    ],
    "skipped": [
      "תרגילי בטן בצד הלוח — מקטע לא מפוענח"
    ],
    "note": "המינון והמנוחות מותאמים לפי כללי האפליקציה; משך האימון הוא הערכה ולא נתון מהלוח. הושמט: תרגילי בטן בצד הלוח — מקטע לא " +
            "מפוענח תנועות מתקדמות דורשות אישור פרטני בתוקף; בלעדיו מוצעת הכנה מסומנת במינון נפרד.",
    "rotationEligible": true,
    "rotationReason": "מותנה באישור פרטני בתוקף לכל תרגיל מתקדם או אקסצנטרי, וברמה, ציוד, זמן, מיקוד והתאוששות.",
    "warmupSeconds": 180,
    "cooldownSeconds": 180,
    "phases": [
      {
        "id": "warm",
        "seconds": 180
      },
      {
        "id": "practice",
        "seconds": 3240
      },
      {
        "id": "cool",
        "seconds": 180
      }
    ],
    "reviewStatus": "pending-review"
  },
  {
    "id": "COACH-FB005",
    "sourceRecord": "COACH-FB005",
    "sourceId": "005",
    "he": "כוח וליבה לכל הגוף",
    "en": "Whole body and core",
    "description": "אימון מלא במקטעים לפי סדר התמלול, עם חימום, עבודה וסיום מותאמים לזמן הזמין.",
    "origin": "coach",
    "level": 4,
    "equipment": [
      "bar",
      "bench"
    ],
    "minutes": 60,
    "estimatedMinutes": 60,
    "focus": "full",
    "muscleGroups": [
      "fullbody"
    ],
    "format": "sets",
    "moves": [
      "seated-in-out",
      "high-knees",
      "jumping-jack",
      "pull",
      "wide-push",
      "diamond-push",
      "high-plank",
      "push-up-90-hold",
      "plank",
      "shoulder-tap",
      "bench-dip",
      "squat",
      "sumo-squat",
      "lunge",
      "jump-squat"
    ],
    "sections": [
      {
        "type": "warmup",
        "title": "חימום — 2 סבבים",
        "rounds": 2,
        "uncertain": false,
        "items": [
          {
            "id": "seated-in-out",
            "sourceName": "In & Out",
            "seconds": 30,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": null,
              "duration_seconds": {
                "min": 30,
                "max": 30
              },
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": {
                "min": 2,
                "max": 2
              }
            }
          },
          {
            "id": "high-knees",
            "sourceName": "High Knee Taps",
            "seconds": 30,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": null,
              "duration_seconds": {
                "min": 30,
                "max": 30
              },
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": {
                "min": 2,
                "max": 2
              }
            }
          },
          {
            "id": "jumping-jack",
            "sourceName": "Jumping Jacks",
            "reps": 20,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": {
                "min": 20,
                "max": 20
              },
              "duration_seconds": null,
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": {
                "min": 2,
                "max": 2
              }
            }
          }
        ],
        "note": ""
      },
      {
        "type": "strength",
        "title": "מקטע ראשי — סבב 1",
        "rounds": 1,
        "uncertain": true,
        "items": [
          {
            "id": "pull",
            "sourceName": "Pull-Ups",
            "reps": 10,
            "perSide": false,
            "uncertain": true,
            "note": "",
            "archivePrescription": {
              "reps": {
                "min": 10,
                "max": 10
              },
              "duration_seconds": null,
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": null
            }
          },
          {
            "id": "wide-push",
            "sourceName": "Wide Push-Ups",
            "reps": 10,
            "perSide": false,
            "uncertain": true,
            "note": "",
            "archivePrescription": {
              "reps": {
                "min": 10,
                "max": 10
              },
              "duration_seconds": null,
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": null
            }
          },
          {
            "id": "diamond-push",
            "sourceName": "Diamond Push-Ups",
            "reps": 10,
            "perSide": false,
            "uncertain": true,
            "note": "",
            "archivePrescription": {
              "reps": {
                "min": 10,
                "max": 10
              },
              "duration_seconds": null,
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": null
            }
          },
          {
            "id": "high-plank",
            "sourceName": "High Plank",
            "seconds": 30,
            "perSide": false,
            "uncertain": true,
            "note": "",
            "archivePrescription": {
              "reps": null,
              "duration_seconds": {
                "min": 30,
                "max": 30
              },
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": null
            }
          },
          {
            "id": "push-up-90-hold",
            "sourceName": "90 Degree Hold",
            "seconds": 15,
            "perSide": false,
            "uncertain": true,
            "note": "",
            "archivePrescription": {
              "reps": null,
              "duration_seconds": {
                "min": 15,
                "max": 15
              },
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": null
            }
          },
          {
            "id": "plank",
            "sourceName": "Plank",
            "seconds": 30,
            "perSide": false,
            "uncertain": true,
            "note": "",
            "archivePrescription": {
              "reps": null,
              "duration_seconds": {
                "min": 30,
                "max": 30
              },
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": null
            }
          },
          {
            "id": "shoulder-tap",
            "sourceName": "Shoulder Taps",
            "seconds": 30,
            "perSide": false,
            "uncertain": true,
            "note": "",
            "archivePrescription": {
              "reps": null,
              "duration_seconds": {
                "min": 30,
                "max": 30
              },
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": null
            }
          },
          {
            "id": "bench-dip",
            "sourceName": "Bench Dips",
            "reps": 10,
            "perSide": false,
            "uncertain": true,
            "note": "",
            "archivePrescription": {
              "reps": {
                "min": 10,
                "max": 10
              },
              "duration_seconds": null,
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": null
            }
          },
          {
            "id": "squat",
            "sourceName": "Deep Squats",
            "reps": 10,
            "perSide": false,
            "uncertain": true,
            "note": "",
            "archivePrescription": {
              "reps": {
                "min": 10,
                "max": 10
              },
              "duration_seconds": null,
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": null
            }
          },
          {
            "id": "sumo-squat",
            "sourceName": "Sumo Squats",
            "reps": 10,
            "perSide": false,
            "uncertain": true,
            "note": "",
            "archivePrescription": {
              "reps": {
                "min": 10,
                "max": 10
              },
              "duration_seconds": null,
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": null
            }
          },
          {
            "id": "lunge",
            "sourceName": "Lunges",
            "reps": 10,
            "perSide": true,
            "uncertain": true,
            "note": "",
            "archivePrescription": {
              "reps": {
                "min": 10,
                "max": 10
              },
              "duration_seconds": null,
              "sets": null,
              "per_side": true,
              "side_scope": "each_side",
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": null
            }
          },
          {
            "id": "jump-squat",
            "sourceName": "Jump Squats",
            "reps": 10,
            "perSide": false,
            "uncertain": true,
            "note": "",
            "archivePrescription": {
              "reps": {
                "min": 10,
                "max": 10
              },
              "duration_seconds": null,
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": null
            }
          }
        ],
        "note": "Round 1 הוא כותרת, לא אישור למספר סבבים כולל. מספר סבבים חסר: סבב אפליקציה אחד."
      }
    ],
    "skipped": [],
    "note": "המינון והמנוחות מותאמים לפי כללי האפליקציה; משך האימון הוא הערכה ולא נתון מהלוח. תנועות מתקדמות דורשות אישור פרטני " +
            "בתוקף; בלעדיו מוצעת הכנה מסומנת במינון נפרד.",
    "rotationEligible": true,
    "rotationReason": "מותנה באישור פרטני בתוקף לכל תרגיל מתקדם או אקסצנטרי, וברמה, ציוד, זמן, מיקוד והתאוששות.",
    "warmupSeconds": 180,
    "cooldownSeconds": 180,
    "phases": [
      {
        "id": "warm",
        "seconds": 180
      },
      {
        "id": "practice",
        "seconds": 3240
      },
      {
        "id": "cool",
        "seconds": 180
      }
    ],
    "reviewStatus": "pending-review"
  },
  {
    "id": "COACH-PUSH002",
    "sourceRecord": "COACH-PUSH002",
    "sourceId": "006",
    "he": "דחיקה ועמידת ידיים",
    "en": "Push and handstand",
    "description": "אימון מלא במקטעים לפי סדר התמלול, עם חימום, עבודה וסיום מותאמים לזמן הזמין.",
    "origin": "coach",
    "level": 4,
    "equipment": [
      "wall",
      "box"
    ],
    "minutes": 60,
    "estimatedMinutes": 60,
    "focus": "push",
    "muscleGroups": [
      "chest",
      "shoulders",
      "arms"
    ],
    "format": "sets",
    "moves": [
      "jumping-jack",
      "half-burpee",
      "commando-plank",
      "handstand-free-hold",
      "wall-hspu",
      "planche-slide-push",
      "pike-push",
      "decline-push",
      "push-up-90-hold"
    ],
    "sections": [
      {
        "type": "warmup",
        "title": "חימום",
        "rounds": 2,
        "uncertain": false,
        "items": [
          {
            "id": "jumping-jack",
            "sourceName": "Jumping Jacks",
            "reps": 4,
            "perSide": false,
            "uncertain": true,
            "note": "מינון חסר: יעד אפליקציה שמרני, ללא ניסיון מרבי.",
            "archivePrescription": {
              "reps": null,
              "duration_seconds": null,
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": {
                "min": 2,
                "max": 2
              }
            }
          },
          {
            "id": "half-burpee",
            "sourceName": "Half Burpees / חצי בורפי",
            "reps": 4,
            "perSide": false,
            "uncertain": true,
            "note": "מינון חסר: יעד אפליקציה שמרני, ללא ניסיון מרבי.",
            "archivePrescription": {
              "reps": null,
              "duration_seconds": null,
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": {
                "min": 2,
                "max": 2
              }
            }
          },
          {
            "id": "commando-plank",
            "sourceName": "Commando Plank",
            "reps": 4,
            "perSide": false,
            "uncertain": true,
            "note": "מינון חסר: יעד אפליקציה שמרני, ללא ניסיון מרבי.",
            "archivePrescription": {
              "reps": null,
              "duration_seconds": null,
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": {
                "min": 2,
                "max": 2
              }
            }
          }
        ],
        "note": ""
      },
      {
        "type": "strength",
        "title": "מקטע מרכזי · החזקה חופשית בעמידת ידיים",
        "rounds": 3,
        "items": [
          {
            "id": "handstand-free-hold",
            "sourceName": "עמידת ידיים",
            "seconds": 10,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": null,
              "duration_seconds": {
                "min": 10,
                "max": 10
              },
              "sets": {
                "min": 3,
                "max": 3
              },
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": null
            }
          }
        ],
        "note": "אין מידע אם ברצף או בסבבים; אין להוסיף סבבים.",
        "individualSets": true
      },
      {
        "type": "strength",
        "title": "מקטע מרכזי · דחיקה מלאה בעמידת ידיים בקיר",
        "rounds": 3,
        "items": [
          {
            "id": "wall-hspu",
            "sourceName": "שכיבות סמיכה בעמידת ידיים מול קיר",
            "reps": 6,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": {
                "min": 6,
                "max": 6
              },
              "duration_seconds": null,
              "sets": {
                "min": 3,
                "max": 3
              },
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": null
            }
          }
        ],
        "note": "אין מידע אם ברצף או בסבבים; אין להוסיף סבבים.",
        "individualSets": true
      },
      {
        "type": "strength",
        "title": "מקטע מרכזי · החלקות בהטיית פלאנץ׳ עם שכיבת סמיכה",
        "rounds": 2,
        "items": [
          {
            "id": "planche-slide-push",
            "sourceName": "Lean Planche Slides + שכיבת סמיכה",
            "reps": 7,
            "perSide": false,
            "uncertain": true,
            "note": "אופן ספירת החזרה המשולבת לא פורט.",
            "archivePrescription": {
              "reps": {
                "min": 7,
                "max": 7
              },
              "duration_seconds": null,
              "sets": {
                "min": 2,
                "max": 2
              },
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [
                "אופן ספירת החזרה המשולבת לא פורט."
              ],
              "rounds": null
            }
          }
        ],
        "note": "אין מידע אם ברצף או בסבבים; אין להוסיף סבבים.",
        "individualSets": true
      },
      {
        "type": "strength",
        "title": "מקטע מרכזי · שכיבות סמיכה פייק",
        "rounds": 2,
        "items": [
          {
            "id": "pike-push",
            "sourceName": "Pike Push-ups",
            "reps": 10,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": {
                "min": 10,
                "max": 10
              },
              "duration_seconds": null,
              "sets": {
                "min": 2,
                "max": 2
              },
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": null
            }
          }
        ],
        "note": "אין מידע אם ברצף או בסבבים; אין להוסיף סבבים.",
        "individualSets": true
      },
      {
        "type": "strength",
        "title": "מקטע מרכזי · שכיבות סמיכה עם רגליים מוגבהות",
        "rounds": 2,
        "items": [
          {
            "id": "decline-push",
            "sourceName": "Decline Push-ups",
            "reps": 12,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": {
                "min": 12,
                "max": 12
              },
              "duration_seconds": null,
              "sets": {
                "min": 2,
                "max": 2
              },
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": null
            }
          }
        ],
        "note": "אין מידע אם ברצף או בסבבים; אין להוסיף סבבים.",
        "individualSets": true
      },
      {
        "type": "strength",
        "title": "מקטע מרכזי · החזקת שכיבת סמיכה ב־90 מעלות",
        "rounds": 3,
        "items": [
          {
            "id": "push-up-90-hold",
            "sourceName": "החזקת 90°",
            "seconds": 20,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": null,
              "duration_seconds": {
                "min": 20,
                "max": 20
              },
              "sets": {
                "min": 3,
                "max": 3
              },
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": null
            }
          }
        ],
        "note": "אין מידע אם ברצף או בסבבים; אין להוסיף סבבים.",
        "individualSets": true
      }
    ],
    "skipped": [
      "סקיל — תוכן חסר; המקטע הושמט"
    ],
    "note": "המינון והמנוחות מותאמים לפי כללי האפליקציה; משך האימון הוא הערכה ולא נתון מהלוח. הושמט: סקיל — תוכן חסר; המקטע הושמט " +
            "תנועות מתקדמות דורשות אישור פרטני בתוקף; בלעדיו מוצעת הכנה מסומנת במינון נפרד.",
    "rotationEligible": true,
    "rotationReason": "מותנה באישור פרטני בתוקף לכל תרגיל מתקדם או אקסצנטרי, וברמה, ציוד, זמן, מיקוד והתאוששות.",
    "warmupSeconds": 180,
    "cooldownSeconds": 180,
    "phases": [
      {
        "id": "warm",
        "seconds": 180
      },
      {
        "id": "practice",
        "seconds": 3240
      },
      {
        "id": "cool",
        "seconds": 180
      }
    ],
    "reviewStatus": "pending-review"
  },
  {
    "id": "COACH-FB006",
    "sourceRecord": "COACH-FB006",
    "sourceId": "007",
    "he": "כל הגוף במקטעי זמן",
    "en": "Timed whole body",
    "description": "אימון מלא במקטעים לפי סדר התמלול, עם חימום, עבודה וסיום מותאמים לזמן הזמין.",
    "origin": "coach",
    "level": 3,
    "equipment": [
      "wall"
    ],
    "minutes": 75,
    "estimatedMinutes": 75,
    "focus": "full",
    "muscleGroups": [
      "fullbody"
    ],
    "format": "sets",
    "moves": [
      "jumping-jack",
      "mountain-climber",
      "butt-kick",
      "pike-push",
      "side-plank",
      "flutter-kick",
      "v-up",
      "chest-wall-handstand",
      "commando-plank",
      "toe-touch",
      "pseudo-planche-push"
    ],
    "sections": [
      {
        "type": "warmup",
        "title": "חימום",
        "rounds": 2,
        "uncertain": false,
        "items": [
          {
            "id": "jumping-jack",
            "sourceName": "Jumping Jacks",
            "reps": 4,
            "perSide": false,
            "uncertain": true,
            "note": "מינון חסר: יעד אפליקציה שמרני, ללא ניסיון מרבי.",
            "archivePrescription": {
              "reps": null,
              "duration_seconds": null,
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": {
                "min": 2,
                "max": 2
              }
            }
          },
          {
            "id": "mountain-climber",
            "sourceName": "Mountain Climbers",
            "reps": 4,
            "perSide": false,
            "uncertain": true,
            "note": "מינון חסר: יעד אפליקציה שמרני, ללא ניסיון מרבי.",
            "archivePrescription": {
              "reps": null,
              "duration_seconds": null,
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": {
                "min": 2,
                "max": 2
              }
            }
          },
          {
            "id": "butt-kick",
            "sourceName": "Butt Kicks",
            "reps": 4,
            "perSide": false,
            "uncertain": true,
            "note": "מינון חסר: יעד אפליקציה שמרני, ללא ניסיון מרבי.",
            "archivePrescription": {
              "reps": null,
              "duration_seconds": null,
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": {
                "min": 2,
                "max": 2
              }
            }
          }
        ],
        "note": ""
      },
      {
        "type": "strength",
        "title": "חלק מרכזי — 3 סבבים",
        "rounds": 3,
        "uncertain": false,
        "items": [
          {
            "id": "pike-push",
            "sourceName": "Pike Push-ups",
            "seconds": 30,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": null,
              "duration_seconds": {
                "min": 30,
                "max": 30
              },
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": {
                "min": 3,
                "max": 3
              }
            }
          },
          {
            "id": "side-plank",
            "sourceName": "Side Plank",
            "seconds": 30,
            "perSide": true,
            "uncertain": true,
            "note": "לא ידוע אם שני צדדים ואם 30 שניות לכל צד או בסך הכול. חלוקת צדדים לא ידועה: יעד האפליקציה הכולל מתחלק שווה בשווה.",
            "archivePrescription": {
              "reps": null,
              "duration_seconds": {
                "min": 30,
                "max": 30
              },
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [
                "לא ידוע אם שני צדדים ואם 30 שניות לכל צד או בסך הכול."
              ],
              "rounds": {
                "min": 3,
                "max": 3
              }
            }
          },
          {
            "id": "flutter-kick",
            "sourceName": "Flutter Kicks",
            "seconds": 30,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": null,
              "duration_seconds": {
                "min": 30,
                "max": 30
              },
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": {
                "min": 3,
                "max": 3
              }
            }
          },
          {
            "id": "v-up",
            "sourceName": "V-Ups",
            "seconds": 30,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": null,
              "duration_seconds": {
                "min": 30,
                "max": 30
              },
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": {
                "min": 3,
                "max": 3
              }
            }
          },
          {
            "id": "chest-wall-handstand",
            "sourceName": "Chest-to-Wall Handstand",
            "seconds": 30,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": null,
              "duration_seconds": {
                "min": 30,
                "max": 30
              },
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": {
                "min": 3,
                "max": 3
              }
            }
          },
          {
            "id": "commando-plank",
            "sourceName": "Commando Plank",
            "seconds": 30,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": null,
              "duration_seconds": {
                "min": 30,
                "max": 30
              },
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": {
                "min": 3,
                "max": 3
              }
            }
          },
          {
            "id": "toe-touch",
            "sourceName": "Toe Touches",
            "seconds": 30,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": null,
              "duration_seconds": {
                "min": 30,
                "max": 30
              },
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": {
                "min": 3,
                "max": 3
              }
            }
          },
          {
            "id": "pseudo-planche-push",
            "sourceName": "Lean Planche Push-ups",
            "seconds": 30,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": null,
              "duration_seconds": {
                "min": 30,
                "max": 30
              },
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": {
                "min": 3,
                "max": 3
              }
            }
          }
        ],
        "note": "אין לגזור משך כולל חד משמעי בגלל חוסר ידיעה על הצדדים והמנוחות."
      }
    ],
    "skipped": [],
    "note": "המינון והמנוחות מותאמים לפי כללי האפליקציה; משך האימון הוא הערכה ולא נתון מהלוח. תנועות מתקדמות דורשות אישור פרטני " +
            "בתוקף; בלעדיו מוצעת הכנה מסומנת במינון נפרד. משך האפליקציה מוגבל ל־75 דקות; סבבים נוספים מצומצמים לפי הצורך.",
    "rotationEligible": true,
    "rotationReason": "מותנה באישור פרטני בתוקף לכל תרגיל מתקדם או אקסצנטרי, וברמה, ציוד, זמן, מיקוד והתאוששות.",
    "warmupSeconds": 180,
    "cooldownSeconds": 180,
    "phases": [
      {
        "id": "warm",
        "seconds": 180
      },
      {
        "id": "practice",
        "seconds": 4140
      },
      {
        "id": "cool",
        "seconds": 180
      }
    ],
    "reviewStatus": "pending-review"
  },
  {
    "id": "PHOTO-008",
    "sessionStructure": "rounds",
    "sourceRecord": "PHOTO-008",
    "sourceId": "008",
    "he": "שני מקטעים לכל הגוף",
    "en": "Two whole body circuits",
    "description": "אימון מלא במקטעים לפי סדר התמלול, עם חימום, עבודה וסיום מותאמים לזמן הזמין.",
    "origin": "coach",
    "level": 3,
    "equipment": [
      "lowbar",
      "bench",
      "wall"
    ],
    "minutes": 75,
    "estimatedMinutes": 75,
    "focus": "full",
    "muscleGroups": [
      "fullbody"
    ],
    "format": "sets",
    "moves": [
      "pike-walk",
      "shoulder-tap",
      "half-burpee",
      "row",
      "lunge",
      "bench-dip",
      "wall-sit",
      "lateral-lunge",
      "wall-walk"
    ],
    "sections": [
      {
        "type": "warmup",
        "title": "חימום — 2 סבבים",
        "rounds": 2,
        "uncertain": false,
        "items": [
          {
            "id": "pike-walk",
            "sourceName": "Pike Walk",
            "seconds": 30,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": null,
              "duration_seconds": {
                "min": 30,
                "max": 30
              },
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": {
                "min": 2,
                "max": 2
              }
            }
          },
          {
            "id": "shoulder-tap",
            "sourceName": "Shoulder Taps",
            "seconds": 30,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": null,
              "duration_seconds": {
                "min": 30,
                "max": 30
              },
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": {
                "min": 2,
                "max": 2
              }
            }
          },
          {
            "id": "half-burpee",
            "sourceName": "Half Burpees",
            "reps": 5,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": {
                "min": 5,
                "max": 5
              },
              "duration_seconds": null,
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": {
                "min": 2,
                "max": 2
              }
            }
          }
        ],
        "note": ""
      },
      {
        "type": "strength",
        "title": "סבב 1 — 3 סבבים",
        "rounds": 3,
        "uncertain": false,
        "items": [
          {
            "id": "row",
            "sourceName": "Australian Pull-Ups",
            "reps": 5,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": {
                "min": 5,
                "max": 5
              },
              "duration_seconds": null,
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": {
                "min": 3,
                "max": 3
              }
            }
          },
          {
            "id": "lunge",
            "sourceName": "Lunges",
            "reps": 10,
            "perSide": true,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": {
                "min": 10,
                "max": 10
              },
              "duration_seconds": null,
              "sets": null,
              "per_side": true,
              "side_scope": "each_side",
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": {
                "min": 3,
                "max": 3
              }
            }
          },
          {
            "id": "bench-dip",
            "sourceName": "Bench Dips",
            "reps": 15,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": {
                "min": 15,
                "max": 15
              },
              "duration_seconds": null,
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": {
                "min": 3,
                "max": 3
              }
            }
          }
        ],
        "note": ""
      },
      {
        "type": "strength",
        "title": "סבב 2 — 3 סבבים",
        "rounds": 3,
        "uncertain": false,
        "items": [
          {
            "id": "wall-sit",
            "sourceName": "Wall Sit",
            "seconds": 30,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": null,
              "duration_seconds": {
                "min": 30,
                "max": 30
              },
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": {
                "min": 3,
                "max": 3
              }
            }
          },
          {
            "id": "lateral-lunge",
            "sourceName": "Side Squats",
            "reps": 10,
            "perSide": true,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": {
                "min": 10,
                "max": 10
              },
              "duration_seconds": null,
              "sets": null,
              "per_side": true,
              "side_scope": "each_side",
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": {
                "min": 3,
                "max": 3
              }
            }
          },
          {
            "id": "wall-walk",
            "sourceName": "Wall Walks",
            "reps": 3,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": {
                "min": 3,
                "max": 3
              },
              "duration_seconds": null,
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": {
                "min": 3,
                "max": 3
              }
            }
          }
        ],
        "note": ""
      }
    ],
    "skipped": [
      "Standing Sit / תרגול עמידת ידיים — זהות לא מפוענחת"
    ],
    "note": "המינון והמנוחות מותאמים לפי כללי האפליקציה; משך האימון הוא הערכה ולא נתון מהלוח. הושמט: Standing Sit / תרגול עמידת " +
            "ידיים — זהות לא מפוענחת תנועות מתקדמות דורשות אישור פרטני בתוקף; בלעדיו מוצעת הכנה מסומנת במינון נפרד.",
    "rotationEligible": true,
    "rotationReason": "מותנה באישור פרטני בתוקף לכל תרגיל מתקדם או אקסצנטרי, וברמה, ציוד, זמן, מיקוד והתאוששות.",
    "warmupSeconds": 180,
    "cooldownSeconds": 180,
    "phases": [
      {
        "id": "warm",
        "seconds": 180
      },
      {
        "id": "practice",
        "seconds": 4140
      },
      {
        "id": "cool",
        "seconds": 180
      }
    ],
    "reviewStatus": "pending-review"
  },
  {
    "id": "PHOTO-RINGS001",
    "sourceRecord": "PHOTO-RINGS001",
    "sourceId": "009",
    "he": "כוח על טבעות",
    "en": "Ring strength",
    "description": "אימון מלא במקטעים לפי סדר התמלול, עם חימום, עבודה וסיום מותאמים לזמן הזמין.",
    "origin": "coach",
    "level": 5,
    "equipment": [
      "rings"
    ],
    "minutes": 60,
    "estimatedMinutes": 60,
    "focus": "full",
    "muscleGroups": [
      "fullbody"
    ],
    "format": "sets",
    "moves": [
      "jumping-jack",
      "push",
      "seated-in-out",
      "ring-neutral-dip",
      "ring-chin",
      "ring-russian-push",
      "ring-biceps-curl",
      "ring-skull-crusher"
    ],
    "sections": [
      {
        "type": "warmup",
        "title": "חימום",
        "rounds": 2,
        "uncertain": false,
        "items": [
          {
            "id": "jumping-jack",
            "sourceName": "Jumping Jacks",
            "reps": 4,
            "perSide": false,
            "uncertain": true,
            "note": "כ-30 שניות הן הערכה בלבד ולא מינון מאומת. מינון חסר: יעד אפליקציה שמרני, ללא ניסיון מרבי.",
            "archivePrescription": {
              "reps": null,
              "duration_seconds": null,
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "estimated",
              "uncertainty": [
                "כ-30 שניות הן הערכה בלבד ולא מינון מאומת."
              ],
              "rounds": {
                "min": 2,
                "max": 2
              }
            }
          },
          {
            "id": "push",
            "sourceName": "שכיבות סמיכה",
            "reps": 4,
            "perSide": false,
            "uncertain": true,
            "note": "כ-30 שניות הן הערכה בלבד ולא מינון מאומת. מינון חסר: יעד אפליקציה שמרני, ללא ניסיון מרבי.",
            "archivePrescription": {
              "reps": null,
              "duration_seconds": null,
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "estimated",
              "uncertainty": [
                "כ-30 שניות הן הערכה בלבד ולא מינון מאומת."
              ],
              "rounds": {
                "min": 2,
                "max": 2
              }
            }
          },
          {
            "id": "seated-in-out",
            "sourceName": "In & Out",
            "reps": 4,
            "perSide": false,
            "uncertain": true,
            "note": "כ-30 שניות הן הערכה בלבד ולא מינון מאומת. מינון חסר: יעד אפליקציה שמרני, ללא ניסיון מרבי.",
            "archivePrescription": {
              "reps": null,
              "duration_seconds": null,
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "estimated",
              "uncertainty": [
                "כ-30 שניות הן הערכה בלבד ולא מינון מאומת."
              ],
              "rounds": {
                "min": 2,
                "max": 2
              }
            }
          }
        ],
        "note": ""
      },
      {
        "type": "strength",
        "title": "סבב 1 ×2",
        "rounds": 2,
        "uncertain": false,
        "items": [
          {
            "id": "ring-neutral-dip",
            "sourceName": "מקבילים באחיזה ניטרלית על טבעות",
            "reps": 10,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": {
                "min": 10,
                "max": 10
              },
              "duration_seconds": null,
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": {
                "min": 2,
                "max": 2
              }
            }
          }
        ],
        "note": ""
      },
      {
        "type": "strength",
        "title": "סבב 2 ×2",
        "rounds": 2,
        "uncertain": false,
        "items": [
          {
            "id": "ring-chin",
            "sourceName": "Chin-Ups על טבעות",
            "reps": 10,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": {
                "min": 10,
                "max": 10
              },
              "duration_seconds": null,
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": {
                "min": 2,
                "max": 2
              }
            }
          },
          {
            "id": "ring-russian-push",
            "sourceName": "Russian Push-Ups על טבעות",
            "reps": 20,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": {
                "min": 20,
                "max": 20
              },
              "duration_seconds": null,
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": {
                "min": 2,
                "max": 2
              }
            }
          }
        ],
        "note": ""
      },
      {
        "type": "strength",
        "title": "סבב 3 ×3",
        "rounds": 3,
        "uncertain": false,
        "items": [
          {
            "id": "ring-biceps-curl",
            "sourceName": "כפיפות מרפקים על טבעות",
            "reps": 12,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": {
                "min": 12,
                "max": 12
              },
              "duration_seconds": null,
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": {
                "min": 3,
                "max": 3
              }
            }
          },
          {
            "id": "ring-skull-crusher",
            "sourceName": "Skull Crushers על טבעות",
            "reps": 12,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": {
                "min": 12,
                "max": 12
              },
              "duration_seconds": null,
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": {
                "min": 3,
                "max": 3
              }
            }
          }
        ],
        "note": ""
      }
    ],
    "skipped": [
      "L-Sit Pull-Up Rotation — זהות לא מפוענחת"
    ],
    "note": "המינון והמנוחות מותאמים לפי כללי האפליקציה; משך האימון הוא הערכה ולא נתון מהלוח. הושמט: L-Sit Pull-Up Rotation — זהות " +
            "לא מפוענחת תנועות מתקדמות דורשות אישור פרטני בתוקף; בלעדיו מוצעת הכנה מסומנת במינון נפרד.",
    "rotationEligible": true,
    "rotationReason": "מותנה באישור פרטני בתוקף לכל תרגיל מתקדם או אקסצנטרי, וברמה, ציוד, זמן, מיקוד והתאוששות.",
    "warmupSeconds": 180,
    "cooldownSeconds": 180,
    "phases": [
      {
        "id": "warm",
        "seconds": 180
      },
      {
        "id": "practice",
        "seconds": 3240
      },
      {
        "id": "cool",
        "seconds": 180
      }
    ],
    "reviewStatus": "pending-review"
  },
  {
    "id": "PHOTO-FB007",
    "sourceRecord": "PHOTO-FB007",
    "sourceId": "009",
    "he": "משיכה ורגליים עם טבעות",
    "en": "Pull and legs with rings",
    "description": "אימון מלא במקטעים לפי סדר התמלול, עם חימום, עבודה וסיום מותאמים לזמן הזמין.",
    "origin": "coach",
    "level": 4,
    "equipment": [
      "bar",
      "lowbar",
      "wall",
      "rings"
    ],
    "minutes": 75,
    "estimatedMinutes": 75,
    "focus": "full",
    "muscleGroups": [
      "fullbody"
    ],
    "format": "sets",
    "moves": [
      "butt-kick",
      "commando-plank",
      "burpee",
      "chin",
      "explosive-push",
      "hanging-leg-raise",
      "single-squat",
      "pull",
      "bar-triceps-extension",
      "jump-squat",
      "ring-biceps-curl"
    ],
    "sections": [
      {
        "type": "warmup",
        "title": "חימום",
        "rounds": 2,
        "uncertain": false,
        "items": [
          {
            "id": "butt-kick",
            "sourceName": "Butt Kicks",
            "reps": 4,
            "perSide": false,
            "uncertain": true,
            "note": "כ-30 שניות הן הערכה בלבד ולא מינון מאומת. מינון חסר: יעד אפליקציה שמרני, ללא ניסיון מרבי.",
            "archivePrescription": {
              "reps": null,
              "duration_seconds": null,
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "estimated",
              "uncertainty": [
                "כ-30 שניות הן הערכה בלבד ולא מינון מאומת."
              ],
              "rounds": {
                "min": 2,
                "max": 2
              }
            }
          },
          {
            "id": "commando-plank",
            "sourceName": "Commando Plank",
            "reps": 4,
            "perSide": false,
            "uncertain": true,
            "note": "כ-30 שניות הן הערכה בלבד ולא מינון מאומת. מינון חסר: יעד אפליקציה שמרני, ללא ניסיון מרבי.",
            "archivePrescription": {
              "reps": null,
              "duration_seconds": null,
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "estimated",
              "uncertainty": [
                "כ-30 שניות הן הערכה בלבד ולא מינון מאומת."
              ],
              "rounds": {
                "min": 2,
                "max": 2
              }
            }
          },
          {
            "id": "burpee",
            "sourceName": "Burpees",
            "reps": 4,
            "perSide": false,
            "uncertain": true,
            "note": "כ-30 שניות הן הערכה בלבד ולא מינון מאומת. מינון חסר: יעד אפליקציה שמרני, ללא ניסיון מרבי.",
            "archivePrescription": {
              "reps": null,
              "duration_seconds": null,
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "estimated",
              "uncertainty": [
                "כ-30 שניות הן הערכה בלבד ולא מינון מאומת."
              ],
              "rounds": {
                "min": 2,
                "max": 2
              }
            }
          }
        ],
        "note": ""
      },
      {
        "type": "strength",
        "title": "סבב 1 ×3",
        "rounds": 3,
        "uncertain": false,
        "items": [
          {
            "id": "chin",
            "sourceName": "Chin-Ups",
            "reps": 8,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": {
                "min": 8,
                "max": 8
              },
              "duration_seconds": null,
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": {
                "min": 3,
                "max": 3
              }
            }
          },
          {
            "id": "explosive-push",
            "sourceName": "שכיבות סמיכה מתפרצות",
            "reps": 15,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": {
                "min": 15,
                "max": 15
              },
              "duration_seconds": null,
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": {
                "min": 3,
                "max": 3
              }
            }
          },
          {
            "id": "hanging-leg-raise",
            "sourceName": "Hanging Leg Raises",
            "reps": 10,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": {
                "min": 10,
                "max": 10
              },
              "duration_seconds": null,
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": {
                "min": 3,
                "max": 3
              }
            }
          },
          {
            "id": "single-squat",
            "sourceName": "Pistol Squat בסיוע",
            "reps": 8,
            "perSide": true,
            "uncertain": true,
            "note": "אופן הסיוע לא נמסר.",
            "archivePrescription": {
              "reps": {
                "min": 8,
                "max": 8
              },
              "duration_seconds": null,
              "sets": null,
              "per_side": true,
              "side_scope": "each_side",
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [
                "אופן הסיוע לא נמסר."
              ],
              "rounds": {
                "min": 3,
                "max": 3
              }
            }
          }
        ],
        "note": ""
      },
      {
        "type": "strength",
        "title": "סבב 2 ×3",
        "rounds": 3,
        "uncertain": false,
        "items": [
          {
            "id": "pull",
            "sourceName": "Pull-Ups",
            "reps": 9,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": {
                "min": 9,
                "max": 9
              },
              "duration_seconds": null,
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": {
                "min": 3,
                "max": 3
              }
            }
          },
          {
            "id": "bar-triceps-extension",
            "sourceName": "Skull Crunches",
            "reps": 12,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": {
                "min": 12,
                "max": 12
              },
              "duration_seconds": null,
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "founder_identified_2026-11-01",
              "uncertainty": [],
              "rounds": {
                "min": 3,
                "max": 3
              }
            }
          },
          {
            "id": "jump-squat",
            "sourceName": "Squat Jumps",
            "reps": 10,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": {
                "min": 10,
                "max": 10
              },
              "duration_seconds": null,
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": {
                "min": 3,
                "max": 3
              }
            }
          },
          {
            "id": "ring-biceps-curl",
            "sourceName": "Ring Curls",
            "reps": 12,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": {
                "min": 12,
                "max": 12
              },
              "duration_seconds": null,
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": {
                "min": 3,
                "max": 3
              }
            }
          }
        ],
        "note": ""
      }
    ],
    "skipped": [],
    "note": "המינון והמנוחות מותאמים לפי כללי האפליקציה; משך האימון הוא הערכה ולא נתון מהלוח. תנועות מתקדמות דורשות אישור פרטני בתוקף; בלעדיו מוצעת הכנה מסומנת במינון נפרד. משך האפליקציה מוגבל ל־75 דקות; " +
            "סבבים נוספים מצומצמים לפי הצורך.",
    "rotationEligible": true,
    "rotationReason": "מותנה באישור פרטני בתוקף לכל תרגיל מתקדם או אקסצנטרי, וברמה, ציוד, זמן, מיקוד והתאוששות.",
    "warmupSeconds": 180,
    "cooldownSeconds": 180,
    "phases": [
      {
        "id": "warm",
        "seconds": 180
      },
      {
        "id": "practice",
        "seconds": 4140
      },
      {
        "id": "cool",
        "seconds": 180
      }
    ],
    "reviewStatus": "pending-review"
  },
  {
    "id": "PHOTO-RINGS002",
    "sourceRecord": "PHOTO-RINGS002",
    "sourceId": "010",
    "he": "טבעות, משיכה ורגליים",
    "en": "Rings, pull and legs",
    "description": "אימון מלא במקטעים לפי סדר התמלול, עם חימום, עבודה וסיום מותאמים לזמן הזמין.",
    "origin": "coach",
    "level": 4,
    "equipment": [
      "rings",
      "bar",
      "lowbar"
    ],
    "minutes": 60,
    "estimatedMinutes": 60,
    "focus": "full",
    "muscleGroups": [
      "fullbody"
    ],
    "format": "sets",
    "moves": [
      "jumping-jack",
      "side-plank",
      "butt-kick",
      "ring-push",
      "lsit-pull",
      "single-bridge",
      "one-arm-row",
      "squat",
      "close-push"
    ],
    "sections": [
      {
        "type": "warmup",
        "title": "חימום",
        "rounds": 2,
        "uncertain": true,
        "items": [
          {
            "id": "jumping-jack",
            "sourceName": "Jumping Jacks",
            "seconds": 30,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": null,
              "duration_seconds": {
                "min": 30,
                "max": 30
              },
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": null
            }
          },
          {
            "id": "side-plank",
            "sourceName": "Side Plank",
            "seconds": 30,
            "perSide": true,
            "uncertain": true,
            "note": "לא ידוע אם 30 שניות לכל צד או בסך הכול.",
            "archivePrescription": {
              "reps": null,
              "duration_seconds": {
                "min": 30,
                "max": 30
              },
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [
                "לא ידוע אם 30 שניות לכל צד או בסך הכול."
              ],
              "rounds": null
            }
          },
          {
            "id": "butt-kick",
            "sourceName": "Butt Kicks",
            "seconds": 30,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": null,
              "duration_seconds": {
                "min": 30,
                "max": 30
              },
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": null
            }
          }
        ],
        "note": "מספר סבבי החימום לא קריא בלוח; נקבעו 2 סבבים לפי כלל האפליקציה."
      },
      {
        "type": "strength",
        "title": "סבב 1 ×3",
        "rounds": 3,
        "items": [
          {
            "id": "ring-push",
            "sourceName": "Ring Push Up",
            "reps": 15,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": {
                "min": 15,
                "max": 15
              },
              "duration_seconds": null,
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": {
                "min": 3,
                "max": 3
              }
            }
          },
          {
            "id": "lsit-pull",
            "sourceName": "L Sit Pull Up",
            "reps": 10,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": {
                "min": 10,
                "max": 10
              },
              "duration_seconds": null,
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": {
                "min": 3,
                "max": 3
              }
            }
          },
          {
            "id": "single-bridge",
            "sourceName": "Glute Bridge (each)",
            "reps": 12,
            "perSide": true,
            "uncertain": true,
            "note": "„each” מתפרש כגשר על רגל אחת; לא נכתב במפורש.",
            "archivePrescription": {
              "reps": {
                "min": 12,
                "max": 12
              },
              "duration_seconds": null,
              "sets": null,
              "per_side": true,
              "side_scope": "each_side",
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [
                "„each” מתפרש כגשר על רגל אחת; לא נכתב במפורש."
              ],
              "rounds": {
                "min": 3,
                "max": 3
              }
            }
          }
        ],
        "note": ""
      },
      {
        "type": "strength",
        "title": "סבב 2 ×3",
        "rounds": 3,
        "items": [
          {
            "id": "one-arm-row",
            "sourceName": "OA Australian",
            "reps": 10,
            "perSide": true,
            "uncertain": true,
            "note": "OA נקרא כ-One Arm; חתירה אוסטרלית ביד אחת.",
            "archivePrescription": {
              "reps": {
                "min": 10,
                "max": 10
              },
              "duration_seconds": null,
              "sets": null,
              "per_side": true,
              "side_scope": "each_side",
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [
                "OA נקרא כ-One Arm; חתירה אוסטרלית ביד אחת."
              ],
              "rounds": {
                "min": 3,
                "max": 3
              }
            }
          },
          {
            "id": "squat",
            "sourceName": "Squat",
            "reps": 12,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": {
                "min": 12,
                "max": 12
              },
              "duration_seconds": null,
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": {
                "min": 3,
                "max": 3
              }
            }
          },
          {
            "id": "close-push",
            "sourceName": "Close Grip Push Up",
            "reps": 15,
            "perSide": false,
            "uncertain": false,
            "note": "",
            "archivePrescription": {
              "reps": {
                "min": 15,
                "max": 15
              },
              "duration_seconds": null,
              "sets": null,
              "per_side": null,
              "side_scope": null,
              "quantity_mode": null,
              "confidence": "transcribed_unverified",
              "uncertainty": [],
              "rounds": {
                "min": 3,
                "max": 3
              }
            }
          }
        ],
        "note": ""
      }
    ],
    "skipped": [],
    "note": "המינון והמנוחות מותאמים לפי כללי האפליקציה; משך האימון הוא הערכה ולא נתון מהלוח. תנועות מתקדמות דורשות אישור פרטני בתוקף; בלעדיו מוצעת הכנה מסומנת במינון נפרד.",
    "rotationEligible": true,
    "rotationReason": "מותנה באישור פרטני בתוקף לכל תרגיל מתקדם או אקסצנטרי, וברמה, ציוד, זמן, מיקוד והתאוששות.",
    "warmupSeconds": 180,
    "cooldownSeconds": 180,
    "phases": [
      {
        "id": "warm",
        "seconds": 180
      },
      {
        "id": "practice",
        "seconds": 3600
      },
      {
        "id": "cool",
        "seconds": 180
      }
    ],
    "reviewStatus": "pending-review"
  }
].map(w => ({...w, phases: w.phases.map(p => p.id === 'practice' ? {...p, seconds: w.minutes * 60} : {...p, extra: true})}));
