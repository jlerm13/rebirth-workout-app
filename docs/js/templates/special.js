// special.js - Corrected syntax
(function() {
    const specialTemplates = {
        'Retired Veteran': {
            '3day': {
                week1: {
                    monday: {
                        title: "Max-Effort Upper Body",
                        exercises: [
                            { type: "max-effort", exercise: "benchPress", sets: "Work up to 5RM", note: "Moderate load, never to failure" },
                            { type: "supplemental", exercise: "dbBenchPress", sets: "3 × 10-12" },
                            { type: "assistance", exercise: "barbellRows", sets: "4 × 10" },
                            { type: "repetition", exercise: "facePulls", sets: "3 × 15", note: "Shoulder health" },
                            { type: "conditioning", exercise: "farmerWalk", sets: "3 × 30m", note: "Heavy but safe" }
                        ]
                    },
                    wednesday: {
                        title: "Max-Effort Lower Body",
                        exercises: [
                            { type: "max-effort", exercise: "trapBarDeadlift", sets: "Work up to 5RM", note: "Safer on back" },
                            { type: "assistance", exercise: "walkingLunges", sets: "3 × 8 each", note: "Maintain posture" },
                            { type: "assistance", exercise: "singleLegRDL", sets: "3 × 8 each", note: "Slow tempo" },
                            { type: "repetition", exercise: "hyperextensions", sets: "3 × 12", note: "Add load over time" },
                            { type: "core", exercise: "plank", sets: "3 × 45 seconds" }
                        ]
                    },
                    friday: {
                        title: "Repetition Upper Body",
                        exercises: [
                            { type: "repetition", exercise: "dbInclinePress", sets: "3 × 10-12" },
                            { type: "assistance", exercise: "pullups", sets: "3 × max", note: "Band assist if needed" },
                            { type: "repetition", exercise: "lateralRaises", sets: "3 × 12" },
                            { type: "repetition", exercise: "barbellCurls", sets: "3 × 12 each", note: "Superset bicep and tricep exercises" },
                            { type: "repetition", exercise: "tricepPushdowns", sets: "3 × 12 each", note: "Superset bicep and tricep exercises" },
                            { type: "conditioning", exercise: "stationaryBike", sets: "10 minutes", note: "Easy pace" }
                        ]
                    },
                    conditioningGuidelines: {
                      title: "Conditioning for Longevity & Performance",
                      modalities: ["incline walking", "cycling (upright or recumbent)", "swimming", "tempo pool work", "elliptical"],
                      weeklyFrequency: "2–4 sessions/week",
                      sessions: {
                        steadyCardio: {
                          goal: "aerobic base work",
                          structure: ["5 min warm-up", "20–40 min steady pace (conversational, nose-breathing)", "5 min cool-down", "2–3 min controlled breathing"],
                          effortCue: "3–4/10—controlled and sustainable",
                          progression: "add ~5 min every 1–2 weeks up to ~45 min"
                        },
                        easyIntervals: {
                          goal: "structured intervals, joint-smart",
                          options: ["30s work / 30s recovery × 15–25", "40s work / 20s recovery × 12–20", "60s work / 60s recovery × 10–15"],
                          effortCue: "5–6/10 on work intervals, 2–3/10 on recovery",
                          progression: "add 1–2 rounds weekly or increase work pace while maintaining control"
                        }
                      },
                      notes: [
                        "Pick the modality that works for your body that day.",
                        "If technique breaks down or breathing gets ragged, back off the pace.",
                        "Finish strong, not destroyed."
                      ]
                    }
                }
            }
        }
    };

    // Safety check and registration call
    if (typeof loadTemplateModule === 'function') {
        loadTemplateModule('special', specialTemplates);
        console.log('Successfully loaded special templates');
    } else {
        console.error('loadTemplateModule function not available when loading special templates');
    }
})();
