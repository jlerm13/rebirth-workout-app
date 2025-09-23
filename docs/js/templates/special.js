(function() {
    const specialTemplates = {
          'washed-up-meathead': {
            '3day': {
              week1: {
                monday: {
                  title: "Max-Effort Upper Body",
                  exercises: [
                    { type: "max-effort", exercise: "benchPress", sets: "Work up to 5RM", note: "Leave ego at door" },
                    { type: "supplemental", exercise: "dbBenchPress", sets: "3 × 10-12" },
                    { type: "assistance", exercise: "rows", sets: "4 × 10" },
                    { type: "assistance", exercise: "facePulls", sets: "3 × 15", note: "Shoulder health" },
                    { type: "assistance", exercise: "curls", sets: "3 × 10", note: "For the guns" }
                  ]
                },
                wednesday: {
                  title: "Max-Effort Lower Body",
                  exercises: [
                    { type: "max-effort", exercise: "trapBarDeadlift", sets: "Work up to 5RM", note: "Safer on back" },
                    { type: "assistance", exercise: "lunges", sets: "3 × 8 each", note: "Knee-friendly" },
                    { type: "assistance", exercise: "hyperextensions", sets: "3 × 12" },
                    { type: "core", exercise: "plank", sets: "3 × 45 seconds" }
                  ]
                },
                friday: {
                  title: "Repetition Upper Body",
                  exercises: [
                    { type: "repetition", exercise: "dbInclinePress", sets: "3 × 10-12" },
                    { type: "assistance", exercise: "pullups", sets: "3 × max", note: "Band assist if needed" },
                    { type: "assistance", exercise: "lateralRaises", sets: "3 × 12" },
                    { type: "assistance", exercise: "arms superset", sets: "3 × 12 each" },
                    { type: "conditioning", exercise: "bike or row", sets: "10 minutes", note: "Easy pace" }
                  ]
                },
                saturday_optional: {
                  title: "Vanity Day (Optional)",
                  exercises: [
                    { type: "arms", exercise: "bicep work", sets: "4 × 10-12" },
                    { type: "shoulders", exercise: "shoulder work", sets: "4 × 12-15" },
                    { type: "calves", exercise: "calf raises", sets: "3 × 15-20" },
                    { type: "abs", exercise: "ab circuit", sets: "10 minutes" },
                    { type: "conditioning", exercise: "walk", sets: "20-30 minutes" }
                  ]
                }
              }
            }
          }
    
    loadTemplateModule('beginner', specialTemplates);
})();
