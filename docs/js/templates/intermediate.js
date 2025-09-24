(function() {
    const intermediateTemplates = {
        intermediate: {
          'early-offseason': {
            '4day': {
              week1: {
                monday: {
                  title: "Max-Effort Upper Body",
                  exercises: [
                    { type: "max-effort", exercise: "benchPress", sets: "Work up to 5RM", intensity: "85-90% effort", note: "Building back" },
                    { type: "supplemental", exercise: "dbBenchPress", sets: "2 × max reps", note: "Target 40+ total" },
                    { type: "assistance", exercise: "barbellRows", sets: "4 × 8-10" },
                    { type: "assistance", exercise: "rearDeltFlyes", sets: "3 × 12-15" },
                    { type: "assistance", exercise: "shrugs", sets: "3 × 10-12" },
                    { type: "assistance", exercise: "barbellCurls", sets: "3 × 10-12" }
                  ]
                },
                tuesday: {
                  title: "Dynamic-Effort Lower Body",
                  exercises: [
                    { type: "dynamic", exercise: "boxJump", sets: "5 × 2", note: "Conservative height" },
                    { type: "dynamic", exercise: "verticalJump", sets: "3 × 3" },
                    { type: "assistance", exercise: "bulgarianSplitSquat", sets: "3 × 8 each" },
                    { type: "assistance", exercise: "romanianDeadlift", sets: "3 × 8-10" },
                    { type: "assistance", exercise: "hyperextensions", sets: "3 × 12-15" },
                    { type: "assistance", exercise: "weightedAbs", sets: "3 × 15-20" }
                  ]
                },
                thursday: {
                  title: "Repetition Upper Body",
                  exercises: [
                    { type: "repetition", exercise: "dbInclinePress", sets: "3 × max reps", note: "90 sec rest" },
                    { type: "assistance", exercise: "pullups", sets: "4 × 6-10" },
                    { type: "assistance", exercise: "facePulls", sets: "3 × 15-20" },
                    { type: "assistance", exercise: "lateralRaises", sets: "3 × 12-15" },
                    { type: "assistance", exercise: "dbCurls", sets: "3 × 10-12" }
                  ]
                },
                friday: {
                  title: "Max-Effort Lower Body",
                  exercises: [
                    { type: "max-effort", exercise: "boxSquat", sets: "Work up to 5RM", intensity: "85-90% effort" },
                    { type: "assistance", exercise: "walkingLunges", sets: "3 × 10 each" },
                    { type: "assistance", exercise: "gluteHamRaise", sets: "3 × 8-10" },
                    { type: "core", exercise: "hangingLegRaises", sets: "3 × 10-15" }
                  ]
                }
              },
              week2: {
                monday: {
                  title: "Max-Effort Upper Body",
                  exercises: [
                    { type: "max-effort", exercise: "closeGripBench", sets: "Work up to 5RM", note: "Exercise rotation" },
                    { type: "supplemental", exercise: "dbFloorPress", sets: "2 × max reps" },
                    { type: "assistance", exercise: "dbRows", sets: "4 × 8-10 each" },
                    { type: "assistance", exercise: "bandPullAparts", sets: "4 × 25" },
                    { type: "assistance", exercise: "shrugs", sets: "4 × 10" },
                    { type: "assistance", exercise: "barbellCurls", sets: "4 × 10" }
                  ]
                },
                tuesday: {
                  title: "Dynamic-Effort Lower Body",
                  exercises: [
                    { type: "dynamic", exercise: "boxJump", sets: "6 × 3", note: "Increase height" },
                    { type: "dynamic", exercise: "broadJump", sets: "4 × 2" },
                    { type: "assistance", exercise: "bulgarianSplitSquat", sets: "3 × 10 each" },
                    { type: "assistance", exercise: "romanianDeadlift", sets: "3 × 10" },
                    { type: "assistance", exercise: "sledDrags", sets: "3 × 30 yards" },
                    { type: "assistance", exercise: "weightedAbs", sets: "4 × 12-15" }
                  ]
                },
                thursday: {
                  title: "Repetition Upper Body",
                  exercises: [
                    { type: "repetition", exercise: "dbBenchPress", sets: "4 × 12-15", note: "Bodybuilding" },
                    { type: "assistance", exercise: "latPulldowns", sets: "4 × 10-12" },
                    { type: "assistance", exercise: "rearDeltFlyes", sets: "4 × 15" },
                    { type: "assistance", exercise: "lateralRaises", sets: "4 × 12" },
                    { type: "assistance", exercise: "dbCurls", sets: "4 × 10-12" }
                  ]
                },
                friday: {
                  title: "Max-Effort Lower Body",
                  exercises: [
                    { type: "max-effort", exercise: "deadlift", sets: "Work up to 5RM" },
                    { type: "assistance", exercise: "stepUps", sets: "3 × 8 each" },
                    { type: "assistance", exercise: "hyperextensions", sets: "3 × 15" },
                    { type: "core", exercise: "weightedAbs", sets: "4 × 15" }
                  ]
                }
              },
              week3: {
                monday: {
                  title: "Max-Effort Upper Body",
                  exercises: [
                    { type: "max-effort", exercise: "benchPress", sets: "Work up to 3RM", intensity: "Progress from week 1" },
                    { type: "supplemental", exercise: "dbBenchPress", sets: "2 × max reps" },
                    { type: "assistance", exercise: "barbellRows", sets: "4 × 6-8", note: "Heavier" },
                    { type: "assistance", exercise: "facePulls", sets: "4 × 20" },
                    { type: "assistance", exercise: "shrugs", sets: "4 × 10-12" },
                    { type: "assistance", exercise: "barbellCurls", sets: "4 × 8-10" }
                  ]
                },
                tuesday: {
                  title: "Dynamic-Effort Lower Body",
                  exercises: [
                    { type: "dynamic", exercise: "boxJump", sets: "5 × 3", note: "Max height attempts" },
                    { type: "dynamic", exercise: "depthJump", sets: "3 × 2", note: "Low box" },
                    { type: "assistance", exercise: "bulgarianSplitSquat", sets: "3 × 8 each", note: "Add weight" },
                    { type: "assistance", exercise: "gluteHamRaise", sets: "3 × 10-12" },
                    { type: "assistance", exercise: "prowlerPush", sets: "4 × 20 yards" },
                    { type: "assistance", exercise: "weightedAbs", sets: "4 × 10-15" }
                  ]
                },
                thursday: {
                  title: "Repetition Upper Body",
                  exercises: [
                    { type: "repetition", exercise: "dbInclinePress", sets: "3 × max reps", note: "Beat week 1" },
                    { type: "assistance", exercise: "weightedChins", sets: "4 × 5-8", note: "Add weight" },
                    { type: "assistance", exercise: "bandPullAparts", sets: "100 total reps" },
                    { type: "assistance", exercise: "lateralRaises", sets: "4 × 10-15" },
                    { type: "assistance", exercise: "dbCurls", sets: "4 × 10" }
                  ]
                },
                friday: {
                  title: "Max-Effort Lower Body",
                  exercises: [
                    { type: "max-effort", exercise: "boxSquat", sets: "Work up to 3RM", note: "Progress from week 1" },
                    { type: "assistance", exercise: "walkingLunges", sets: "3 × 8 each", note: "Hold DBs" },
                    { type: "assistance", exercise: "romanianDeadlift", sets: "3 × 6-8", note: "Heavier" },
                    { type: "core", exercise: "hangingLegRaises", sets: "4 × 10-15" }
                  ]
                }
              },
              week4: {
                title: "Transition/Deload Week",
                notes: "Reduce volume 40%, maintain moderate intensity",
                monday: {
                  title: "Upper Body Maintenance",
                  exercises: [
                    { type: "main", exercise: "benchPress", sets: "5 × 3 @ 75%", note: "Focus on speed" },
                    { type: "assistance", exercise: "rows", sets: "3 × 10" },
                    { type: "assistance", exercise: "facePulls", sets: "3 × 15" }
                  ]
                },
                wednesday: {
                  title: "Lower Body Maintenance",
                  exercises: [
                    { type: "main", exercise: "boxSquat", sets: "5 × 2 @ 70%", note: "Explosive" },
                    { type: "dynamic", exercise: "boxJump", sets: "5 × 2" },
                    { type: "assistance", exercise: "abs", sets: "3 × 15" }
                  ]
                },
                friday: {
                  title: "Full Body Light",
                  exercises: [
                    { type: "upper", exercise: "dbPress", sets: "3 × 10" },
                    { type: "upper", exercise: "pullups", sets: "3 × 8" },
                    { type: "lower", exercise: "lunges", sets: "2 × 10 each" }
                  ]
                }
              }
            }
          },
          'mid-offseason': {
            '4day': {
              week1: {
                monday: {
                  title: "Max-Effort Upper Body",
                  exercises: [
                    { type: "max-effort", exercise: "inclineBench", sets: "Work up to 3RM", note: "Weekly rotation" },
                    { type: "supplemental", exercise: "dbInclinePress", sets: "2 × max reps", note: "Heavy DBs" },
                    { type: "assistance", exercise: "barbellRows", sets: "4 × 6-8" },
                    { type: "assistance", exercise: "rearDeltFlyes", sets: "4 × 12-15" },
                    { type: "assistance", exercise: "shrugs", sets: "4 × 8-10" },
                    { type: "assistance", exercise: "barbellCurls", sets: "4 × 8-10" }
                  ]
                },
                tuesday: {
                  title: "Dynamic-Effort Lower Body",
                  exercises: [
                    { type: "dynamic", exercise: "boxJump", sets: "8 × 3", note: "30+ inch box" },
                    { type: "dynamic", exercise: "broadJump", sets: "5 × 2", note: "Max distance" },
                    { type: "assistance", exercise: "bulgarianSplitSquat", sets: "3 × 6-8 each", note: "Heavy DBs" },
                    { type: "assistance", exercise: "romanianDeadlift", sets: "3 × 6-8" },
                    { type: "assistance", exercise: "sledDrags", sets: "4 × 40 yards" },
                    { type: "assistance", exercise: "weightedAbs", sets: "4 × 10-15" }
                  ]
                },
                thursday: {
                  title: "Repetition Upper Body",
                  exercises: [
                    { type: "repetition", exercise: "dbBenchPress", sets: "4 × 12-15", note: "Bodybuilding focus" },
                    { type: "assistance", exercise: "pullups", sets: "4 × max-2", note: "Stop 2 shy of failure" },
                    { type: "assistance", exercise: "facePulls", sets: "4 × 15-20" },
                    { type: "assistance", exercise: "lateralRaises", sets: "4 × 10-12" },
                    { type: "assistance", exercise: "dbCurls", sets: "4 × 8-12" }
                  ]
                },
                friday: {
                  title: "Max-Effort Lower Body",
                  exercises: [
                    { type: "max-effort", exercise: "frontSquat", sets: "Work up to 3RM", note: "Full depth" },
                    { type: "assistance", exercise: "walkingLunges", sets: "3 × 6-8 each", note: "Heavy DBs" },
                    { type: "assistance", exercise: "hyperextensions", sets: "3 × 12-15" },
                    { type: "core", exercise: "hangingLegRaises", sets: "4 × 12-15" }
                  ]
                }
              },
              week2: {
                monday: {
                  title: "Max-Effort Upper Body",
                  exercises: [
                    { type: "max-effort", exercise: "boardPress", sets: "Work up to 3RM", note: "3-board" },
                    { type: "supplemental", exercise: "closeGripBench", sets: "2 × max reps" },
                    { type: "assistance", exercise: "dbRows", sets: "4 × 6-8 each" },
                    { type: "assistance", exercise: "bandPullAparts", sets: "100 reps" },
                    { type: "assistance", exercise: "shrugs", sets: "4 × 8-12" },
                    { type: "assistance", exercise: "barbellCurls", sets: "4 × 8-10" }
                  ]
                },
                tuesday: {
                  title: "Dynamic-Effort Lower Body",
                  exercises: [
                    { type: "dynamic", exercise: "boxJump", sets: "6 × 3", note: "Add weight vest" },
                    { type: "dynamic", exercise: "depthJump", sets: "4 × 2", note: "18-24 inch box" },
                    { type: "assistance", exercise: "bulgarianSplitSquat", sets: "3 × 8 each" },
                    { type: "assistance", exercise: "gluteHamRaise", sets: "3 × 8-10" },
                    { type: "assistance", exercise: "prowlerPush", sets: "5 × 20 yards", note: "Heavy" },
                    { type: "assistance", exercise: "weightedAbs", sets: "4 × 12-15" }
                  ]
                },
                thursday: {
                  title: "Repetition Upper Body",
                  exercises: [
                    { type: "repetition", exercise: "dbInclinePress", sets: "3 × max reps", note: "3 min rest" },
                    { type: "assistance", exercise: "weightedChins", sets: "4 × 5-8" },
                    { type: "assistance", exercise: "cableRows", sets: "4 × 10-12" },
                    { type: "assistance", exercise: "lateralRaises", sets: "4 × 12-15" },
                    { type: "assistance", exercise: "dbCurls", sets: "4 × 10-12" }
                  ]
                },
                friday: {
                  title: "Max-Effort Lower Body",
                  exercises: [
                    { type: "max-effort", exercise: "deadlift", sets: "Work up to 3RM", note: "Competition stance" },
                    { type: "assistance", exercise: "stepUps", sets: "3 × 6-8 each" },
                    { type: "assistance", exercise: "romanianDeadlift", sets: "3 × 8" },
                    { type: "core", exercise: "weightedAbs", sets: "4 × 15-20" }
                  ]
                }
              },
              week3: {
                monday: {
                  title: "Max-Effort Upper Body",
                  exercises: [
                    { type: "max-effort", exercise: "benchPress", sets: "Work up to 1RM", note: "Test week", features: ["chains"] },
                    { type: "supplemental", exercise: "dbBenchPress", sets: "2 × max reps" },
                    { type: "assistance", exercise: "barbellRows", sets: "5 × 5" },
                    { type: "assistance", exercise: "facePulls", sets: "5 × 15" },
                    { type: "assistance", exercise: "shrugs", sets: "4 × 10" },
                    { type: "assistance", exercise: "barbellCurls", sets: "4 × 10" }
                  ]
                },
                tuesday: {
                  title: "Dynamic-Effort Lower Body",
                  exercises: [
                    { type: "dynamic", exercise: "boxJump", sets: "10 × 2", note: "Max height" },
                    { type: "dynamic", exercise: "verticalJump", sets: "5 × 3", note: "Test jumps" },
                    { type: "assistance", exercise: "bulgarianSplitSquat", sets: "3 × 6 each", note: "Heavy" },
                    { type: "assistance", exercise: "gluteHamRaise", sets: "3 × 10-12" },
                    { type: "assistance", exercise: "farmersWalk", sets: "3 × 40 yards" },
                    { type: "assistance", exercise: "hangingLegRaises", sets: "4 × 15" }
                  ]
                },
                thursday: {
                  title: "Repetition Upper Body",
                  exercises: [
                    { type: "repetition", exercise: "dbBenchPress", sets: "5 × 10", note: "Volume focus" },
                    { type: "assistance", exercise: "pullups", sets: "50 total reps", note: "Any sets needed" },
                    { type: "assistance", exercise: "rearDeltFlyes", sets: "5 × 15" },
                    { type: "assistance", exercise: "lateralRaises", sets: "5 × 12" },
                    { type: "assistance", exercise: "dbCurls", sets: "5 × 10" }
                  ]
                },
                friday: {
                  title: "Max-Effort Lower Body",
                  exercises: [
                    { type: "max-effort", exercise: "boxSquat", sets: "Work up to 1RM", note: "Test week", features: ["bands"] },
                    { type: "assistance", exercise: "walkingLunges", sets: "3 × 6 each" },
                    { type: "assistance", exercise: "hyperextensions", sets: "3 × 15-20" },
                    { type: "core", exercise: "weightedAbs", sets: "5 × 12" }
                  ]
                }
              }
            },
           '3day': {
            week1: {
              monday: {
                title: "Max-Effort Upper Body",
                exercises: [
                  { type: "max-effort", exercise: "inclineBench", sets: "Work up to 3RM", note: "Weekly rotation" },
                  { type: "supplemental", exercise: "dbBenchPress", sets: "3 × 10-12" },
                  { type: "assistance", exercise: "barbellRows", sets: "4 × 6-8" },
                  { type: "assistance", exercise: "facePulls", sets: "3 × 15" },
                  { type: "assistance", exercise: "barbellCurls", sets: "3 × 8" }
                ]
              },
              wednesday: {
                title: "Max-Effort Lower Body + Jumps",
                exercises: [
                  { type: "dynamic", exercise: "boxJump", sets: "6 × 3", note: "Higher intensity" },
                  { type: "max-effort", exercise: "frontSquat", sets: "Work up to 3RM" },
                  { type: "assistance", exercise: "bulgarianSplitSquat", sets: "3 × 6 each" },
                  { type: "assistance", exercise: "hyperextensions", sets: "3 × 12" },
                  { type: "core", exercise: "weightedAbs", sets: "4 × 12" }
                ]
              },
              friday: {
                title: "Repetition Upper Body",
                exercises: [
                  { type: "repetition", exercise: "dbInclinePress", sets: "4 × 12-15" },
                  { type: "assistance", exercise: "pullups", sets: "4 × 8-10" },
                  { type: "assistance", exercise: "lateralRaises", sets: "3 × 12" },
                  { type: "assistance", exercise: "dbCurls", sets: "3 × 10" }
                ]
              }
            },
            week2: {
              monday: {
                title: "Max-Effort Upper Body",
                exercises: [
                  { type: "max-effort", exercise: "boardPress", sets: "Work up to 3RM", note: "3-board rotation" },
                  { type: "supplemental", exercise: "dbInclinePress", sets: "3 × 10-12" },
                  { type: "assistance", exercise: "dbRows", sets: "4 × 6-8 each" },
                  { type: "assistance", exercise: "bandPullAparts", sets: "4 × 25" },
                  { type: "assistance", exercise: "barbellCurls", sets: "3 × 8" }
                ]
              },
              wednesday: {
                title: "Max-Effort Lower Body + Advanced Jumps",
                exercises: [
                  { type: "dynamic", exercise: "depthJump", sets: "4 × 2", note: "18-inch box" },
                  { type: "max-effort", exercise: "deadlift", sets: "Work up to 3RM" },
                  { type: "assistance", exercise: "walkingLunges", sets: "3 × 6 each", note: "Heavy DBs" },
                  { type: "assistance", exercise: "gluteHamRaise", sets: "3 × 8-10" },
                  { type: "core", exercise: "hangingLegRaises", sets: "4 × 12" }
                ]
              },
              friday: {
                title: "Repetition Upper Body",
                exercises: [
                  { type: "repetition", exercise: "dbBenchPress", sets: "4 × 10-12" },
                  { type: "assistance", exercise: "weightedChins", sets: "4 × 5-8" },
                  { type: "assistance", exercise: "lateralRaises", sets: "4 × 10" },
                  { type: "assistance", exercise: "dbCurls", sets: "4 × 8" }
                ]
              }
            }
          },
          'speed': {
            week1: {
              monday: {
                title: "Power Development",
                exercises: [
                  { type: "throw", exercise: "mbChestPass", sets: "4 × 5" },
                  { type: "max-effort", exercise: "benchPress", sets: "3 × 3 @ 85%" },
                  { type: "assistance", exercise: "dbBenchPress", sets: "3 × 8" },
                  { type: "assistance", exercise: "barbellRows", sets: "3 × 10" }
                ]
              },
              tuesday: {
                title: "Speed Development",
                exercises: [
                  { type: "warmup", exercise: "Dynamic warm-up", sets: "15 minutes" },
                  { type: "sprint", exercise: "sprint10yd", sets: "10 × 10 yards" },
                  { type: "sprint", exercise: "sprint20yd", sets: "6 × 20 yards" },
                  { type: "sprint", exercise: "sprint40yd", sets: "3 × 40 yards" },
                  { type: "cooldown", exercise: "Light jog + stretch", sets: "10 minutes" }
                ]
              },
              wednesday: {
                title: "Recovery",
                exercises: [
                  { type: "mobility", exercise: "Yoga/stretching", sets: "30 minutes" },
                  { type: "recovery", exercise: "Light swimming or bike", sets: "20 minutes" }
                ]
              },
              thursday: {
                title: "Lower Body Power",
                exercises: [
                  { type: "dynamic", exercise: "depthJump", sets: "4 × 2" },
                  { type: "dynamic", exercise: "boxJump", sets: "5 × 3" },
                  { type: "speed", exercise: "boxSquat", sets: "8 × 2 @ 60%", note: "30 sec rest" },
                  { type: "assistance", exercise: "walkingLunges", sets: "2 × 8 each" }
                ]
              },
              friday: {
                title: "Competition Prep",
                exercises: [
                  { type: "repetition", exercise: "dbInclinePress", sets: "3 × 10" },
                  { type: "assistance", exercise: "pullups", sets: "3 × 8" },
                  { type: "throw", exercise: "mbRotationalThrow", sets: "3 × 5 each side" },
                  { type: "core", exercise: "weightedAbs", sets: "3 × 15" }
                ]
              },
              saturday: {
                title: "Sport-Specific Work",
                exercises: [
                  { type: "skills", exercise: "Position drills", sets: "30 minutes" },
                  { type: "conditioning", exercise: "Game-speed work", sets: "20 minutes" },
                  { type: "recovery", exercise: "Cool down", sets: "10 minutes" }
                ]
              }
            },
            week2: {
              monday: {
                title: "Contrast Training",
                exercises: [
                  { type: "max-effort", exercise: "benchPress", sets: "4 × 2 @ 87%" },
                  { type: "throw", exercise: "mbChestPass", sets: "4 × 3", note: "Immediately after bench" },
                  { type: "assistance", exercise: "barbellRows", sets: "3 × 8" },
                  { type: "assistance", exercise: "facePulls", sets: "3 × 15" }
                ]
              },
              tuesday: {
                title: "Advanced Speed Development",
                exercises: [
                  { type: "sprint", exercise: "sprint10yd", sets: "12 × 10 yards", note: "Flying starts" },
                  { type: "sprint", exercise: "sprint20yd", sets: "8 × 20 yards" },
                  { type: "sprint", exercise: "sprint40yd", sets: "4 × 40 yards" }
                ]
              },
              wednesday: {
                title: "Recovery",
                exercises: [
                  { type: "technique", exercise: "Sprint drills", sets: "20 minutes" },
                  { type: "mobility", exercise: "Dynamic stretching", sets: "15 minutes" }
                ]
              },
              thursday: {
                title: "French Contrast Lower",
                exercises: [
                  { type: "max-effort", exercise: "boxSquat", sets: "4 × 2 @ 80%" },
                  { type: "dynamic", exercise: "boxJump", sets: "4 × 2" },
                  { type: "dynamic", exercise: "depthJump", sets: "4 × 2" },
                  { type: "dynamic", exercise: "verticalJump", sets: "4 × 2" }
                ]
              },
              friday: {
                title: "Competition Prep",
                exercises: [
                  { type: "activation", exercise: "CNS primers", sets: "10 minutes" },
                  { type: "repetition", exercise: "dbBenchPress", sets: "3 × 8" },
                  { type: "assistance", exercise: "pullups", sets: "3 × 6" }
                ]
              }
            }
          },
          'preseason': {
            '4day': {
              week1: {
                monday: {
                  title: "Max-Effort Upper Body (Modified)",
                  exercises: [
                    { type: "max-effort", exercise: "benchPress", sets: "2 × 3 @ 80-85%", note: "Not true max" },
                    { type: "supplemental", exercise: "dbBenchPress", sets: "2 × 10-12" },
                    { type: "assistance", exercise: "rows", sets: "3 × 8-10" },
                    { type: "assistance", exercise: "rearDelts", sets: "3 × 12" },
                    { type: "assistance", exercise: "curls", sets: "2 × 10" }
                  ]
                },
                tuesday: {
                  title: "Speed & Jump Training",
                  exercises: [
                    { type: "sprint", exercise: "sprint10yd", sets: "8 × 10 yards", note: "Full recovery" },
                    { type: "sprint", exercise: "sprint20yd", sets: "4 × 20 yards", note: "2-3 min rest" },
                    { type: "dynamic", exercise: "verticalJump", sets: "5 × 3" },
                    { type: "dynamic", exercise: "broadJump", sets: "3 × 2" },
                    { type: "assistance", exercise: "bulgarianSplitSquat", sets: "2 × 8 each" },
                    { type: "core", exercise: "abs", sets: "3 × 15" }
                  ]
                },
                thursday: {
                  title: "Max-Effort Lower Body & Conditioning",
                  exercises: [
                    { type: "max-effort", exercise: "boxSquat", sets: "2 × 3 @ 75-80%", note: "Speed focus" },
                    { type: "assistance", exercise: "hyperextensions", sets: "3 × 10" },
                    { type: "conditioning", exercise: "prowlerPush", sets: "8 × 20 yards", note: "30 sec rest" },
                    { type: "throw", exercise: "mbSlam", sets: "3 × 5" }
                  ]
                },
                friday: {
                  title: "Repetition Upper Body",
                  exercises: [
                    { type: "repetition", exercise: "dbInclinePress", sets: "3 × 10-12", note: "Not to failure" },
                    { type: "assistance", exercise: "pullups", sets: "3 × 8" },
                    { type: "assistance", exercise: "facePulls", sets: "3 × 15" },
                    { type: "core", exercise: "plank", sets: "3 × 60 seconds" }
                  ]
                }
              }
            },
            'speed': {
              week1: {
                monday: {
                  title: "Power Development",
                  exercises: [
                    { type: "throw", exercise: "mbChestPass", sets: "4 × 5" },
                    { type: "max-effort", exercise: "benchPress", sets: "3 × 3 @ 85%" },
                    { type: "assistance", exercise: "dbPress", sets: "3 × 8" },
                    { type: "assistance", exercise: "rows", sets: "3 × 10" }
                  ]
                },
                tuesday: {
                  title: "Speed Development",
                  exercises: [
                    { type: "warmup", exercise: "Dynamic warm-up", sets: "15 minutes" },
                    { type: "sprint", exercise: "sprint10yd", sets: "10 × 10 yards" },
                    { type: "sprint", exercise: "sprint20yd", sets: "6 × 20 yards" },
                    { type: "sprint", exercise: "sprint40yd", sets: "3 × 40 yards" },
                    { type: "cooldown", exercise: "Light jog + stretch", sets: "10 minutes" }
                  ]
                },
                wednesday: {
                  title: "Recovery",
                  exercises: [
                    { type: "mobility", exercise: "Yoga/stretching", sets: "30 minutes" },
                    { type: "recovery", exercise: "Light swimming or bike", sets: "20 minutes" }
                  ]
                },
                thursday: {
                  title: "Lower Body Power",
                  exercises: [
                    { type: "dynamic", exercise: "depthJump", sets: "4 × 2" },
                    { type: "dynamic", exercise: "boxJump", sets: "5 × 3" },
                    { type: "speed", exercise: "boxSquat", sets: "8 × 2 @ 60%", note: "30 sec rest" },
                    { type: "assistance", exercise: "lunges", sets: "2 × 8 each" }
                  ]
                },
                friday: {
                  title: "Competition Prep",
                  exercises: [
                    { type: "repetition", exercise: "dbPress", sets: "3 × 10" },
                    { type: "assistance", exercise: "pullups", sets: "3 × 8" },
                    { type: "throw", exercise: "mbRotationalThrow", sets: "3 × 5 each side" },
                    { type: "core", exercise: "plank variations", sets: "3 rounds" }
                  ]
                },
                saturday: {
                  title: "Sport-Specific",
                  exercises: [
                    { type: "skills", exercise: "Position drills", sets: "30 minutes" },
                    { type: "conditioning", exercise: "Game-speed work", sets: "20 minutes" },
                    { type: "recovery", exercise: "Cool down", sets: "10 minutes" }
                  ]
                }
              }
            }
          },
          'inseason': {
            '2day': {
              week1: {
                monday: {
                  title: "In-Season Maintenance A",
                  exercises: [
                    { type: "max-effort", exercise: "benchPress", sets: "Work up to 3RM @ 85%", note: "Single set" },
                    { type: "assistance", exercise: "bulgarianSplitSquat", sets: "3 × 6 each" },
                    { type: "assistance", exercise: "rows", sets: "3 × 8" },
                    { type: "assistance", exercise: "facePulls", sets: "2 × 15" },
                    { type: "core", exercise: "plank", sets: "2 × 45 seconds" }
                  ]
                },
                thursday: {
                  title: "In-Season Maintenance B",
                  exercises: [
                    { type: "dynamic", exercise: "boxJump", sets: "3 × 3" },
                    { type: "speed", exercise: "boxSquat", sets: "6 × 2 @ 60%" },
                    { type: "supplemental", exercise: "dbPress", sets: "3 × 8" },
                    { type: "assistance", exercise: "pullups", sets: "3 × 5" },
                    { type: "core", exercise: "abs", sets: "2 × 15" }
                  ]
                }
              },
              week2: {
                monday: {
                  title: "In-Season Maintenance A",
                  exercises: [
                    { type: "max-effort", exercise: "inclineBench", sets: "Work up to 5RM @ 85%" },
                    { type: "assistance", exercise: "lunges", sets: "3 × 6 each" },
                    { type: "assistance", exercise: "dbRows", sets: "3 × 8 each" },
                    { type: "assistance", exercise: "bandPullAparts", sets: "2 × 20" },
                    { type: "core", exercise: "weightedAbs", sets: "2 × 12" }
                  ]
                },
                thursday: {
                  title: "In-Season Maintenance B",
                  exercises: [
                    { type: "dynamic", exercise: "verticalJump", sets: "3 × 3" },
                    { type: "speed", exercise: "boxSquat", sets: "5 × 2 @ 70%" },
                    { type: "supplemental", exercise: "dbInclinePress", sets: "3 × 8" },
                    { type: "assistance", exercise: "latPulldowns", sets: "3 × 10" },
                    { type: "core", exercise: "plank", sets: "2 × 60 seconds" }
                  ]
                }
              },
              week3: {
                title: "Week 3 - Peak/Test",
                monday: {
                  title: "In-Season Maintenance A",
                  exercises: [
                    { type: "max-effort", exercise: "benchPress", sets: "Singles @ 80-85%", note: "3-5 singles" },
                    { type: "assistance", exercise: "stepUps", sets: "3 × 6 each" },
                    { type: "assistance", exercise: "rows", sets: "3 × 8" },
                    { type: "recovery", exercise: "light arms", sets: "2 × 12" }
                  ]
                },
                thursday: {
                  title: "In-Season Maintenance B",
                  exercises: [
                    { type: "dynamic", exercise: "boxJump", sets: "5 × 1", note: "Max height" },
                    { type: "speed", exercise: "boxSquat", sets: "Singles @ 80%", note: "3-5 singles" },
                    { type: "supplemental", exercise: "pushups", sets: "3 × 15" },
                    { type: "assistance", exercise: "band work", sets: "100 reps total" }
                  ]
                }
              }
            }
          }
        };
    
      // Properly call the loading function
        if (typeof loadTemplateModule === 'function') {
            loadTemplateModule('intermediate', intermediateTemplates);
        } else {
            console.error('loadTemplateModule function not available');
        }
    })();
