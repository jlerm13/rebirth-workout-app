(function() {
    const advancedTemplates = {
        advanced: {
            'early-offseason': {
              '4day': {
                week1: {
                  monday: {
                    title: "Max-Effort Upper Body",
                    exercises: [
                      { type: "max-effort", exercise: "benchPress", sets: "Work up to 5RM @ 85-90%", note: "Week 1 of return" },
                      { type: "supplemental", exercise: "dbBenchPress", sets: "2 × max reps", note: "50+ reps total" },
                      { type: "assistance", exercise: "barbellRows", sets: "5 × 5" },
                      { type: "assistance", exercise: "rearDeltFlyes", sets: "4 × 15" },
                      { type: "assistance", exercise: "shrugs", sets: "4 × 8" },
                      { type: "assistance", exercise: "barbellCurls", sets: "4 × 8" }
                    ]
                  },
                  tuesday: {
                    title: "Dynamic-Effort Lower Body",
                    exercises: [
                      { type: "dynamic", exercise: "boxJump", sets: "8 × 2", note: "Focus on quality" },
                      { type: "dynamic", exercise: "verticalJump", sets: "5 × 3" },
                      { type: "assistance", exercise: "bulgarianSplitSquat", sets: "3 × 6 each" },
                      { type: "assistance", exercise: "romanianDeadlift", sets: "3 × 8" },
                      { type: "assistance", exercise: "sledDrags", sets: "3 × 40 yards" },
                      { type: "assistance", exercise: "weightedAbs", sets: "4 × 10" }
                    ]
                  },
                  thursday: {
                    title: "Repetition Upper Body",
                    exercises: [
                      { type: "repetition", exercise: "dbInclinePress", sets: "3 × max reps", note: "3 min rest" },
                      { type: "assistance", exercise: "weightedChins", sets: "4 × 5" },
                      { type: "assistance", exercise: "facePulls", sets: "4 × 20" },
                      { type: "assistance", exercise: "lateralRaises", sets: "4 × 12" },
                      { type: "assistance", exercise: "dbCurls", sets: "4 × 10" }
                    ]
                  },
                  friday: {
                    title: "Max-Effort Lower Body",
                    exercises: [
                      { type: "max-effort", exercise: "boxSquat", sets: "Work up to 5RM @ 85-90%" },
                      { type: "assistance", exercise: "walkingLunges", sets: "3 × 8 each" },
                      { type: "assistance", exercise: "gluteHamRaise", sets: "3 × 8" },
                      { type: "core", exercise: "hangingLegRaises", sets: "4 × 10" }
                    ]
                  }
                },
                week2: {
                  monday: {
                    title: "Max-Effort Upper Body",
                    exercises: [
                      { type: "max-effort", exercise: "floorPress", sets: "Work up to 3RM", note: "Week 2 rotation" },
                      { type: "supplemental", exercise: "closeGripBench", sets: "3 × 8-10" },
                      { type: "assistance", exercise: "dbRows", sets: "5 × 6" },
                      { type: "assistance", exercise: "bandPullAparts", sets: "100 reps" },
                      { type: "assistance", exercise: "shrugs", sets: "4 × 10" },
                      { type: "assistance", exercise: "barbellCurls", sets: "4 × 10" }
                    ]
                  },
                  tuesday: {
                    title: "Dynamic-Effort Lower Body",
                    exercises: [
                      { type: "dynamic", exercise: "boxJump", sets: "10 × 2", note: "Increase height" },
                      { type: "dynamic", exercise: "broadJump", sets: "5 × 2" },
                      { type: "assistance", exercise: "bulgarianSplitSquat", sets: "3 × 8 each" },
                      { type: "assistance", exercise: "gluteHamRaise", sets: "3 × 10" },
                      { type: "assistance", exercise: "prowlerPush", sets: "4 × 30 yards" },
                      { type: "assistance", exercise: "weightedAbs", sets: "4 × 12" }
                    ]
                  },
                  thursday: {
                    title: "Repetition Upper Body",
                    exercises: [
                      { type: "repetition", exercise: "dbBenchPress", sets: "4 × 10-12" },
                      { type: "assistance", exercise: "pullups", sets: "5 × 8" },
                      { type: "assistance", exercise: "cableRows", sets: "4 × 12" },
                      { type: "assistance", exercise: "lateralRaises", sets: "5 × 10" },
                      { type: "assistance", exercise: "dbCurls", sets: "4 × 12" }
                    ]
                  },
                  friday: {
                    title: "Max-Effort Lower Body",
                    exercises: [
                      { type: "max-effort", exercise: "deadlift", sets: "Work up to 3RM" },
                      { type: "assistance", exercise: "stepUps", sets: "3 × 6 each" },
                      { type: "assistance", exercise: "hyperextensions", sets: "3 × 12" },
                      { type: "core", exercise: "weightedAbs", sets: "4 × 15" }
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
                      { type: "max-effort", exercise: "closeGripBench", sets: "Work up to 1RM", note: "Weekly rotation", features: ["chains"] },
                      { type: "supplemental", exercise: "dbBenchPress", sets: "2 × max reps", note: "Heavy DBs" },
                      { type: "assistance", exercise: "barbellRows", sets: "5 × 5-8" },
                      { type: "assistance", exercise: "rearDeltFlyes", sets: "4 × 15" },
                      { type: "assistance", exercise: "shrugs", sets: "4 × 8-10" },
                      { type: "assistance", exercise: "barbellCurls", sets: "4 × 8-10" }
                    ]
                  },
                  tuesday: {
                    title: "Dynamic-Effort Lower Body",
                    exercises: [
                      { type: "dynamic", exercise: "boxJump", sets: "10 × 1", note: "Max height attempts" },
                      { type: "dynamic", exercise: "depthJump", sets: "5 × 2", note: "24 inch box" },
                      { type: "assistance", exercise: "bulgarianSplitSquat", sets: "3 × 5 each", note: "Heavy" },
                      { type: "assistance", exercise: "romanianDeadlift", sets: "3 × 5-8" },
                      { type: "assistance", exercise: "sledDrags", sets: "5 × 40 yards" },
                      { type: "assistance", exercise: "weightedAbs", sets: "4 × 10" }
                    ]
                  },
                  thursday: {
                    title: "Repetition Upper Body",
                    exercises: [
                      { type: "repetition", exercise: "dbBenchPress", sets: "5 × 10", note: "Heavy volume" },
                      { type: "assistance", exercise: "weightedChins", sets: "5 × max-1" },
                      { type: "assistance", exercise: "facePulls", sets: "5 × 20" },
                      { type: "assistance", exercise: "lateralRaises", sets: "4 × 10" },
                      { type: "assistance", exercise: "dbCurls", sets: "4 × 10" }
                    ]
                  },
                  friday: {
                    title: "Max-Effort Lower Body",
                    exercises: [
                      { type: "max-effort", exercise: "deadlift", sets: "Singles up to 90-95%", note: "Competition stance", features: ["bands"] },
                      { type: "assistance", exercise: "walkingLunges", sets: "3 × 5 each", note: "Heavy DBs" },
                      { type: "assistance", exercise: "hyperextensions", sets: "3 × 15" },
                      { type: "core", exercise: "hangingLegRaises", sets: "4 × 15" }
                    ]
                  }
                },
                week2: {
                  monday: {
                    title: "Max-Effort Upper Body",
                    exercises: [
                      { type: "max-effort", exercise: "boardPress", sets: "Work up to 1RM", note: "2-board", features: ["chains"] },
                      { type: "supplemental", exercise: "dbInclinePress", sets: "3 × 8-10" },
                      { type: "assistance", exercise: "dbRows", sets: "5 × 6 each" },
                      { type: "assistance", exercise: "bandPullAparts", sets: "150 reps" },
                      { type: "assistance", exercise: "shrugs", sets: "5 × 8" },
                      { type: "assistance", exercise: "barbellCurls", sets: "5 × 8" }
                    ]
                  },
                  tuesday: {
                    title: "Dynamic-Effort Lower Body",
                    exercises: [
                      { type: "dynamic", exercise: "boxSquatJump", sets: "8 × 1", note: "With weight vest" },
                      { type: "dynamic", exercise: "reactiveBoxJump", sets: "5 × 3", note: "Quick contacts" },
                      { type: "assistance", exercise: "bulgarianSplitSquat", sets: "4 × 5 each" },
                      { type: "assistance", exercise: "gluteHamRaise", sets: "4 × 8" },
                      { type: "assistance", exercise: "prowlerPush", sets: "6 × 20 yards", note: "Heavy" },
                      { type: "assistance", exercise: "weightedAbs", sets: "5 × 10" }
                    ]
                  },
                  thursday: {
                    title: "Repetition Upper Body",
                    exercises: [
                      { type: "repetition", exercise: "dbInclinePress", sets: "4 × 12", note: "Constant tension" },
                      { type: "assistance", exercise: "pullups", sets: "100 total reps" },
                      { type: "assistance", exercise: "cableRows", sets: "5 × 10" },
                      { type: "assistance", exercise: "lateralRaises", sets: "5 × 12" },
                      { type: "assistance", exercise: "dbCurls", sets: "5 × 10" }
                    ]
                  },
                  friday: {
                    title: "Max-Effort Lower Body",
                    exercises: [
                      { type: "max-effort", exercise: "boxSquat", sets: "Singles up to 90%", note: "Wide stance", features: ["bands", "chains"] },
                      { type: "assistance", exercise: "stepUps", sets: "3 × 5 each" },
                      { type: "assistance", exercise: "romanianDeadlift", sets: "3 × 6" },
                      { type: "core", exercise: "weightedAbs", sets: "5 × 12" }
                    ]
                  }
                },
                week3: {
                  monday: {
                    title: "Max-Effort Upper Body",
                    exercises: [
                      { type: "max-effort", exercise: "benchPress", sets: "Singles up to 95%", note: "Competition bench", features: ["bands"] },
                      { type: "supplemental", exercise: "dbBenchPress", sets: "3 × 8" },
                      { type: "assistance", exercise: "barbellRows", sets: "5 × 5" },
                      { type: "assistance", exercise: "facePulls", sets: "100 reps" },
                      { type: "assistance", exercise: "shrugs", sets: "5 × 10" },
                      { type: "assistance", exercise: "barbellCurls", sets: "5 × 10" }
                    ]
                  },
                  tuesday: {
                    title: "Dynamic-Effort Lower Body",
                    exercises: [
                      { type: "dynamic", exercise: "depthJump", sets: "8 × 1", note: "Max reactive height" },
                      { type: "dynamic", exercise: "boxJump", sets: "5 × 1", note: "Max height test" },
                      { type: "dynamic", exercise: "verticalJump", sets: "5 × 1", note: "Test day" },
                      { type: "assistance", exercise: "bulgarianSplitSquat", sets: "3 × 6 each" },
                      { type: "assistance", exercise: "gluteHamRaise", sets: "3 × 10" },
                      { type: "assistance", exercise: "farmersWalk", sets: "3 × 50 yards" }
                    ]
                  },
                  thursday: {
                    title: "Repetition Upper Body",
                    exercises: [
                      { type: "repetition", exercise: "dbBenchPress", sets: "6 × 8", note: "Volume PR attempt" },
                      { type: "assistance", exercise: "weightedChins", sets: "5 × 5", note: "Heavy" },
                      { type: "assistance", exercise: "rows", sets: "5 × 8" },
                      { type: "assistance", exercise: "shoulders", sets: "5 × 10" },
                      { type: "assistance", exercise: "arms", sets: "5 × 10" }
                    ]
                  },
                  friday: {
                    title: "Max-Effort Lower Body",
                    exercises: [
                      { type: "max-effort", exercise: "deadlift", sets: "Singles up to 95%+", note: "Test day" },
                      { type: "assistance", exercise: "lunges", sets: "3 × 5 each" },
                      { type: "assistance", exercise: "hyperextensions", sets: "3 × 20" },
                      { type: "core", exercise: "abs", sets: "100 reps total" }
                    ]
                  }
                }
              }
            },
            'preseason': {
              '4day': {
                week1: {
                  monday: {
                    title: "Max-Effort Upper (Power Focus)",
                    exercises: [
                      { type: "throw", exercise: "mbChestPass", sets: "5 × 3", note: "Max velocity" },
                      { type: "max-effort", exercise: "benchPress", sets: "Singles @ 85-90%", note: "3-5 singles" },
                      { type: "supplemental", exercise: "dbBenchPress", sets: "2 × 8" },
                      { type: "assistance", exercise: "rows", sets: "3 × 8" },
                      { type: "assistance", exercise: "facePulls", sets: "3 × 15" }
                    ]
                  },
                  tuesday: {
                    title: "Speed Development",
                    exercises: [
                      { type: "sprint", exercise: "sprint10yd", sets: "10 × 10 yards" },
                      { type: "sprint", exercise: "sprint20yd", sets: "6 × 20 yards" },
                      { type: "sprint", exercise: "sprint40yd", sets: "3 × 40 yards" },
                      { type: "dynamic", exercise: "verticalJump", sets: "5 × 2" },
                      { type: "assistance", exercise: "bulgarianSplitSquat", sets: "2 × 6 each" }
                    ]
                  },
                  thursday: {
                    title: "Lower Body Power",
                    exercises: [
                      { type: "dynamic", exercise: "depthJump", sets: "5 × 2" },
                      { type: "speed", exercise: "boxSquat", sets: "8 × 2 @ 60%", note: "Dynamic effort" },
                      { type: "assistance", exercise: "gluteHamRaise", sets: "3 × 8" },
                      { type: "conditioning", exercise: "prowlerPush", sets: "8 × 15 yards", note: "Sprint pace" }
                    ]
                  },
                  friday: {
                    title: "Upper Body Speed",
                    exercises: [
                      { type: "throw", exercise: "mbRotationalThrow", sets: "4 × 3 each" },
                      { type: "repetition", exercise: "dbPress", sets: "3 × 8", note: "Explosive tempo" },
                      { type: "assistance", exercise: "pullups", sets: "3 × 6" },
                      { type: "core", exercise: "plank variations", sets: "3 rounds" }
                    ]
                  },
                  saturday: {
                    title: "Position-Specific Work",
                    exercises: [
                      { type: "skills", exercise: "Sport drills", sets: "30-45 minutes" },
                      { type: "conditioning", exercise: "Game simulation", sets: "15-20 minutes" }
                    ]
                  }
                }
              },
              'speed': {
                week1: {
                  monday: {
                    title: "Contrast Training",
                    exercises: [
                      { type: "max-effort", exercise: "benchPress", sets: "3 × 2 @ 85%" },
                      { type: "throw", exercise: "mbChestPass", sets: "3 × 3", note: "Immediately after bench" },
                      { type: "assistance", exercise: "rows", sets: "3 × 8" },
                      { type: "assistance", exercise: "facePulls", sets: "3 × 15" }
                    ]
                  },
                  tuesday: {
                    title: "Max Velocity Development",
                    exercises: [
                      { type: "sprint", exercise: "Flying 20s", sets: "6 × 20 yards", note: "10yd run-in" },
                      { type: "sprint", exercise: "sprint40yd", sets: "4 × 40 yards" },
                      { type: "sprint", exercise: "150m runs", sets: "2 × 150m @ 85%" }
                    ]
                  },
                  wednesday: {
                    title: "Recovery/Technique",
                    exercises: [
                      { type: "technique", exercise: "Sprint drills", sets: "20 minutes" },
                      { type: "mobility", exercise: "Dynamic stretching", sets: "15 minutes" },
                      { type: "recovery", exercise: "Pool work", sets: "20 minutes" }
                    ]
                  },
                  thursday: {
                    title: "French Contrast",
                    exercises: [
                      { type: "max-effort", exercise: "boxSquat", sets: "3 × 2 @ 85%" },
                      { type: "dynamic", exercise: "boxJump", sets: "3 × 2" },
                      { type: "dynamic", exercise: "depthJump", sets: "3 × 2" },
                      { type: "dynamic", exercise: "verticalJump", sets: "3 × 2", note: "Band assisted" }
                    ]
                  },
                  friday: {
                    title: "Competition Prep",
                    exercises: [
                      { type: "activation", exercise: "CNS primers", sets: "10 minutes" },
                      { type: "skills", exercise: "Position work", sets: "20 minutes" },
                      { type: "conditioning", exercise: "Game speed", sets: "15 minutes" }
                    ]
                  }
                }
              }
            },
            'inseason': {
              '2day': {
                week1: {
                  monday: {
                    title: "Strength Maintenance",
                    exercises: [
                      { type: "max-effort", exercise: "benchPress", sets: "Singles @ 85-90%", note: "3 singles max" },
                      { type: "assistance", exercise: "bulgarianSplitSquat", sets: "2 × 5 each" },
                      { type: "assistance", exercise: "rows", sets: "3 × 6" },
                      { type: "core", exercise: "plank", sets: "2 × 30 seconds" }
                    ]
                  },
                  wednesday: {
                    title: "Power Maintenance",
                    exercises: [
                      { type: "dynamic", exercise: "boxJump", sets: "5 × 1" },
                      { type: "speed", exercise: "boxSquat", sets: "5 × 2 @ 70%" },
                      { type: "supplemental", exercise: "pushups", sets: "2 × 15" },
                      { type: "assistance", exercise: "band work", sets: "100 reps" }
                    ]
                  }
                },
                week2: {
                  monday: {
                    title: "Cluster Sets",
                    exercises: [
                      { type: "cluster", exercise: "benchPress", sets: "3×(3×1) @ 87%", note: "15 sec between reps" },
                      { type: "assistance", exercise: "lunges", sets: "2 × 6 each" },
                      { type: "assistance", exercise: "pullups", sets: "3 × 5" },
                      { type: "recovery", exercise: "light arms", sets: "2 × 15" }
                    ]
                  },
                  wednesday: {
                    title: "Neural Activation",
                    exercises: [
                      { type: "dynamic", exercise: "verticalJump", sets: "5 × 1", note: "Max intent" },
                      { type: "cluster", exercise: "boxSquat", sets: "3×(3×1) @ 85%", note: "15 sec rest" },
                      { type: "assistance", exercise: "facePulls", sets: "2 × 20" }
                    ]
                  }
                }
              }
            }
          }
    
    loadTemplateModule('advanced', advancedTemplates);
})();
