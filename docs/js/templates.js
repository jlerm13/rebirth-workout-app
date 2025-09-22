/**
 * templates.js - Complete Training Templates Module
 * 
 * Provides comprehensive workout templates for:
 * - 3 experience levels: beginner, intermediate, advanced
 * - 4 training phases: early-offseason, mid-offseason, preseason, inseason
 * - Multiple template types: 4-day, 3-day, speed-integration, inseason-maintenance
 * 
 * Each template includes weekly progressions and exercise rotations
 */

const workoutTemplates = {
  // ======================== BEGINNER TEMPLATES ========================
  beginner: {
    'early-offseason': {
      '4day': {
        week1: {
          monday: {
            title: "Max-Effort Upper Body",
            exercises: [
              { type: "max-effort", exercise: "benchPress", sets: "Work up to 5RM", intensity: "Conservative (RPE 7-8)", note: "Leave 2 reps in tank" },
              { type: "supplemental", exercise: "dbBenchPress", sets: "2 × 15-20", note: "Same weight both sets" },
              { type: "assistance", exercise: "barbellRows", sets: "3 × 8-12", note: "Focus on form" },
              { type: "assistance", exercise: "rearDeltFlyes", sets: "3 × 12-15" },
              { type: "assistance", exercise: "shrugs", sets: "3 × 8-15" },
              { type: "assistance", exercise: "barbellCurls", sets: "3 × 8-12" }
            ]
          },
          tuesday: {
            title: "Dynamic-Effort Lower Body",
            exercises: [
              { type: "dynamic", exercise: "boxJump", sets: "5 × 3", note: "20-24 inch box, focus on landing" },
              { type: "assistance", exercise: "bulgarianSplitSquat", sets: "2 × 8 each", note: "Bodyweight only" },
              { type: "assistance", exercise: "romanianDeadlift", sets: "3 × 10-12", note: "Light weight, feel stretch" },
              { type: "assistance", exercise: "weightedAbs", sets: "3 × 15-20" }
            ]
          },
          thursday: {
            title: "Repetition Upper Body",
            exercises: [
              { type: "repetition", exercise: "dbInclinePress", sets: "3 × max reps", intensity: "65% effort", note: "90 sec rest" },
              { type: "assistance", exercise: "pullups", sets: "3 × 5-8", note: "Use band if needed" },
              { type: "assistance", exercise: "facePulls", sets: "3 × 15-20" },
              { type: "assistance", exercise: "lateralRaises", sets: "3 × 12-15" },
              { type: "assistance", exercise: "dbCurls", sets: "3 × 10-12" }
            ]
          },
          friday: {
            title: "Max-Effort Lower Body",
            exercises: [
              { type: "max-effort", exercise: "boxSquat", sets: "Work up to 5RM", intensity: "Conservative", note: "12-14 inch box" },
              { type: "assistance", exercise: "walkingLunges", sets: "3 × 10 each", note: "Bodyweight" },
              { type: "assistance", exercise: "hyperextensions", sets: "3 × 10-15" },
              { type: "core", exercise: "plank", sets: "3 × 30-45 seconds" }
            ]
          }
        },
        week2: {
          monday: {
            title: "Max-Effort Upper Body",
            exercises: [
              { type: "max-effort", exercise: "benchPress", sets: "Work up to 5RM", intensity: "Slightly heavier than week 1", note: "Still conservative" },
              { type: "supplemental", exercise: "dbBenchPress", sets: "2 × max reps", note: "Aim for 18-25 total reps" },
              { type: "assistance", exercise: "dbRows", sets: "3 × 10-12 each" },
              { type: "assistance", exercise: "bandPullAparts", sets: "3 × 20-30" },
              { type: "assistance", exercise: "shrugs", sets: "3 × 10-12" },
              { type: "assistance", exercise: "barbellCurls", sets: "3 × 10-12" }
            ]
          },
          tuesday: {
            title: "Dynamic-Effort Lower Body",
            exercises: [
              { type: "dynamic", exercise: "boxJump", sets: "6 × 3", note: "Same height, better technique" },
              { type: "assistance", exercise: "bulgarianSplitSquat", sets: "3 × 8 each", note: "Hold light DBs if able" },
              { type: "assistance", exercise: "romanianDeadlift", sets: "3 × 10-12", note: "Increase weight slightly" },
              { type: "assistance", exercise: "hangingLegRaises", sets: "3 × 8-12" }
            ]
          },
          thursday: {
            title: "Repetition Upper Body",
            exercises: [
              { type: "repetition", exercise: "dbBenchPress", sets: "4 × 12-15", note: "Traditional sets, not max reps" },
              { type: "assistance", exercise: "latPulldowns", sets: "3 × 10-12" },
              { type: "assistance", exercise: "rearDeltFlyes", sets: "3 × 15-20" },
              { type: "assistance", exercise: "lateralRaises", sets: "3 × 12-15" },
              { type: "assistance", exercise: "dbCurls", sets: "3 × 10-15" }
            ]
          },
          friday: {
            title: "Max-Effort Lower Body",
            exercises: [
              { type: "max-effort", exercise: "boxSquat", sets: "Work up to 5RM", intensity: "Heavier than week 1", note: "Better form" },
              { type: "assistance", exercise: "stepUps", sets: "3 × 8 each", note: "Knee height box" },
              { type: "assistance", exercise: "hyperextensions", sets: "3 × 12-15" },
              { type: "core", exercise: "weightedAbs", sets: "3 × 15-20" }
            ]
          }
        },
        week3: {
          monday: {
            title: "Max-Effort Upper Body",
            exercises: [
              { type: "max-effort", exercise: "inclineBench", sets: "Work up to 5RM", intensity: "New exercise", note: "45-degree incline" },
              { type: "supplemental", exercise: "dbInclinePress", sets: "2 × 15-20" },
              { type: "assistance", exercise: "cableRows", sets: "3 × 10-12" },
              { type: "assistance", exercise: "facePulls", sets: "3 × 15-20" },
              { type: "assistance", exercise: "shrugs", sets: "3 × 12-15" },
              { type: "assistance", exercise: "barbellCurls", sets: "3 × 10-12" }
            ]
          },
          tuesday: {
            title: "Dynamic-Effort Lower Body",
            exercises: [
              { type: "dynamic", exercise: "verticalJump", sets: "5 × 3", note: "Max effort jumps" },
              { type: "dynamic", exercise: "broadJump", sets: "3 × 2", note: "Focus on landing" },
              { type: "assistance", exercise: "bulgarianSplitSquat", sets: "3 × 10 each" },
              { type: "assistance", exercise: "romanianDeadlift", sets: "3 × 8-10", note: "Heavier weight" },
              { type: "assistance", exercise: "weightedAbs", sets: "4 × 12-15" }
            ]
          },
          thursday: {
            title: "Repetition Upper Body",
            exercises: [
              { type: "repetition", exercise: "dbInclinePress", sets: "3 × max reps", note: "Try to beat week 1" },
              { type: "assistance", exercise: "pullups", sets: "3 × 6-10" },
              { type: "assistance", exercise: "bandPullAparts", sets: "4 × 25-30" },
              { type: "assistance", exercise: "lateralRaises", sets: "4 × 10-12" },
              { type: "assistance", exercise: "dbCurls", sets: "3 × 12-15" }
            ]
          },
          friday: {
            title: "Max-Effort Lower Body",
            exercises: [
              { type: "max-effort", exercise: "deadlift", sets: "Work up to 5RM", intensity: "Conservative", note: "Focus on form" },
              { type: "assistance", exercise: "walkingLunges", sets: "3 × 12 each" },
              { type: "assistance", exercise: "gluteHamRaise", sets: "3 × 6-10", note: "Or leg curls" },
              { type: "core", exercise: "plank", sets: "3 × 45-60 seconds" }
            ]
          }
        },
        week4: {
          title: "Deload Week",
          notes: "Reduce volume by 40%, maintain intensity at 70-80% of week 3",
          monday: {
            title: "Upper Body - Light",
            exercises: [
              { type: "main", exercise: "benchPress", sets: "3 × 5 @ 70%", note: "Focus on speed" },
              { type: "assistance", exercise: "dbBenchPress", sets: "2 × 10" },
              { type: "assistance", exercise: "rows", sets: "3 × 10" },
              { type: "assistance", exercise: "facePulls", sets: "2 × 15" }
            ]
          },
          wednesday: {
            title: "Lower Body - Light",
            exercises: [
              { type: "main", exercise: "boxSquat", sets: "3 × 3 @ 70%", note: "Focus on explosion" },
              { type: "dynamic", exercise: "boxJump", sets: "3 × 3" },
              { type: "assistance", exercise: "lunges", sets: "2 × 8 each" },
              { type: "core", exercise: "abs", sets: "2 × 15" }
            ]
          },
          friday: {
            title: "Upper Body - Recovery",
            exercises: [
              { type: "repetition", exercise: "dbPress", sets: "3 × 10" },
              { type: "assistance", exercise: "pullups", sets: "3 × 5" },
              { type: "assistance", exercise: "arms", sets: "2 × 12" }
            ]
          }
        }
      },
      '3day': {
        week1: {
          monday: {
            title: "Max-Effort Upper Body",
            exercises: [
              { type: "max-effort", exercise: "benchPress", sets: "Work up to 5RM", intensity: "Conservative", note: "Focus on form" },
              { type: "supplemental", exercise: "dbBenchPress", sets: "3 × 12-15" },
              { type: "assistance", exercise: "barbellRows", sets: "4 × 10-12" },
              { type: "assistance", exercise: "facePulls", sets: "3 × 15-20" },
              { type: "assistance", exercise: "barbellCurls", sets: "3 × 10-12" }
            ]
          },
          wednesday: {
            title: "Max-Effort Lower Body",
            exercises: [
              { type: "max-effort", exercise: "boxSquat", sets: "Work up to 5RM", intensity: "Conservative" },
              { type: "assistance", exercise: "walkingLunges", sets: "3 × 10 each" },
              { type: "assistance", exercise: "romanianDeadlift", sets: "3 × 10-12" },
              { type: "core", exercise: "weightedAbs", sets: "3 × 15-20" }
            ]
          },
          friday: {
            title: "Repetition Upper Body",
            exercises: [
              { type: "repetition", exercise: "dbInclinePress", sets: "3 × max reps", note: "Leave 1-2 in tank" },
              { type: "assistance", exercise: "pullups", sets: "3 × 5-10" },
              { type: "assistance", exercise: "rearDeltFlyes", sets: "3 × 15" },
              { type: "assistance", exercise: "shrugs", sets: "3 × 10-12" }
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
              { type: "max-effort", exercise: "benchPress", sets: "Work up to 3RM", intensity: "True 3RM attempt", note: "Full effort" },
              { type: "supplemental", exercise: "dbBenchPress", sets: "2 × max reps", note: "15-20 rep range" },
              { type: "assistance", exercise: "barbellRows", sets: "4 × 8-10" },
              { type: "assistance", exercise: "rearDeltFlyes", sets: "4 × 12-15" },
              { type: "assistance", exercise: "shrugs", sets: "4 × 8-12" },
              { type: "assistance", exercise: "barbellCurls", sets: "4 × 8-12" }
            ]
          },
          tuesday: {
            title: "Dynamic-Effort Lower Body",
            exercises: [
              { type: "dynamic", exercise: "boxJump", sets: "6 × 3", note: "24-30 inch box" },
              { type: "dynamic", exercise: "broadJump", sets: "4 × 2", note: "Max distance" },
              { type: "assistance", exercise: "bulgarianSplitSquat", sets: "3 × 8-10 each", note: "Hold DBs" },
              { type: "assistance", exercise: "romanianDeadlift", sets: "3 × 8-10" },
              { type: "assistance", exercise: "sledDrags", sets: "3 × 30 yards", note: "Or farmer walks" },
              { type: "assistance", exercise: "weightedAbs", sets: "4 × 10-15" }
            ]
          },
          thursday: {
            title: "Repetition Upper Body",
            exercises: [
              { type: "repetition", exercise: "dbInclinePress", sets: "3 × max reps", note: "3 min rest between sets" },
              { type: "assistance", exercise: "pullups", sets: "4 × 8-12", note: "Add weight if possible" },
              { type: "assistance", exercise: "facePulls", sets: "4 × 15-20" },
              { type: "assistance", exercise: "lateralRaises", sets: "3 × 10-12" },
              { type: "assistance", exercise: "dbCurls", sets: "3 × 10-12" }
            ]
          },
          friday: {
            title: "Max-Effort Lower Body",
            exercises: [
              { type: "max-effort", exercise: "deadlift", sets: "Work up to 3RM", intensity: "True 3RM", note: "Full effort" },
              { type: "assistance", exercise: "walkingLunges", sets: "3 × 8-10 each", note: "Hold DBs" },
              { type: "assistance", exercise: "hyperextensions", sets: "3 × 12-15" },
              { type: "core", exercise: "hangingLegRaises", sets: "3 × 10-15" }
            ]
          }
        },
        week2: {
          monday: {
            title: "Max-Effort Upper Body",
            exercises: [
              { type: "max-effort", exercise: "floorPress", sets: "Work up to 3RM", intensity: "New movement", note: "Pause at bottom" },
              { type: "supplemental", exercise: "dbFloorPress", sets: "2 × max reps" },
              { type: "assistance", exercise: "dbRows", sets: "4 × 8-10 each" },
              { type: "assistance", exercise: "bandPullAparts", sets: "4 × 25-30" },
              { type: "assistance", exercise: "shrugs", sets: "4 × 10-12" },
              { type: "assistance", exercise: "barbellCurls", sets: "4 × 10-12" }
            ]
          },
          tuesday: {
            title: "Dynamic-Effort Lower Body",
            exercises: [
              { type: "dynamic", exercise: "boxJump", sets: "8 × 3", note: "Increase height if possible" },
              { type: "dynamic", exercise: "verticalJump", sets: "5 × 3", note: "Max effort" },
              { type: "assistance", exercise: "bulgarianSplitSquat", sets: "3 × 10 each" },
              { type: "assistance", exercise: "gluteHamRaise", sets: "3 × 8-12" },
              { type: "assistance", exercise: "prowlerPush", sets: "4 × 20 yards", note: "Or sled drag" },
              { type: "assistance", exercise: "weightedAbs", sets: "4 × 12-15" }
            ]
          },
          thursday: {
            title: "Repetition Upper Body",
            exercises: [
              { type: "repetition", exercise: "dbBenchPress", sets: "4 × 12", note: "Bodybuilding style" },
              { type: "assistance", exercise: "latPulldowns", sets: "4 × 10-12" },
              { type: "assistance", exercise: "rearDeltFlyes", sets: "4 × 15-20" },
              { type: "assistance", exercise: "lateralRaises", sets: "4 × 10-12" },
              { type: "assistance", exercise: "dbCurls", sets: "4 × 10-15" }
            ]
          },
          friday: {
            title: "Max-Effort Lower Body",
            exercises: [
              { type: "max-effort", exercise: "boxSquat", sets: "Work up to 3RM", intensity: "True 3RM" },
              { type: "assistance", exercise: "stepUps", sets: "3 × 8 each" },
              { type: "assistance", exercise: "romanianDeadlift", sets: "3 × 8-10" },
              { type: "core", exercise: "weightedAbs", sets: "4 × 15-20" }
            ]
          }
        }
      }
    },
    'preseason': {
      '4day': {
        week1: {
          monday: {
            title: "Max-Effort Upper Body (Reduced)",
            exercises: [
              { type: "max-effort", exercise: "benchPress", sets: "2 × 3 @ 80-82%", note: "Not true max" },
              { type: "supplemental", exercise: "dbBenchPress", sets: "2 × 12-15", note: "Moderate weight" },
              { type: "assistance", exercise: "rows", sets: "3 × 10-12" },
              { type: "assistance", exercise: "rearDelts", sets: "3 × 12-15" },
              { type: "assistance", exercise: "curls", sets: "2 × 10-12" }
            ]
          },
          tuesday: {
            title: "Speed & Jump Training",
            exercises: [
              { type: "sprint", exercise: "sprint10yd", sets: "8 × 10 yards", note: "Full recovery" },
              { type: "dynamic", exercise: "verticalJump", sets: "5 × 3", note: "Max effort" },
              { type: "assistance", exercise: "bulgarianSplitSquat", sets: "2 × 8 each" },
              { type: "core", exercise: "weightedAbs", sets: "3 × 15" }
            ]
          },
          thursday: {
            title: "Max-Effort Lower Body & Conditioning",
            exercises: [
              { type: "max-effort", exercise: "boxSquat", sets: "2 × 3 @ 75-80%", note: "Speed focus" },
              { type: "assistance", exercise: "hyperextensions", sets: "3 × 10" },
              { type: "conditioning", exercise: "prowlerPush", sets: "6 × 20 yards", note: "Or sled drags" }
            ]
          },
          friday: {
            title: "Repetition Upper Body",
            exercises: [
              { type: "repetition", exercise: "dbInclinePress", sets: "3 × 10-12", note: "Not to failure" },
              { type: "assistance", exercise: "pullups", sets: "3 × 8-10" },
              { type: "assistance", exercise: "facePulls", sets: "3 × 15" },
              { type: "core", exercise: "plank", sets: "3 × 45 seconds" }
            ]
          }
        }
      },
      'speed': {
        week1: {
          monday: {
            title: "Max-Effort Upper (Modified)",
            exercises: [
              { type: "max-effort", exercise: "benchPress", sets: "Work up to 85% × 3" },
              { type: "assistance", exercise: "dbPress", sets: "3 × 10" },
              { type: "assistance", exercise: "rows", sets: "3 × 10" },
              { type: "assistance", exercise: "facePulls", sets: "2 × 15" }
            ]
          },
          tuesday: {
            title: "Speed Development",
            exercises: [
              { type: "warmup", exercise: "Dynamic warm-up", sets: "10 minutes" },
              { type: "sprint", exercise: "sprint10yd", sets: "10 × 10 yards", note: "Full recovery" },
              { type: "sprint", exercise: "sprint20yd", sets: "6 × 20 yards", note: "2 min rest" },
              { type: "sprint", exercise: "sprint40yd", sets: "3 × 40 yards", note: "Full recovery" }
            ]
          },
          wednesday: {
            title: "Recovery",
            exercises: [
              { type: "mobility", exercise: "Foam rolling", sets: "10 minutes" },
              { type: "mobility", exercise: "Static stretching", sets: "10 minutes" }
            ]
          },
          thursday: {
            title: "Lower Body Power",
            exercises: [
              { type: "dynamic", exercise: "boxJump", sets: "5 × 3" },
              { type: "max-effort", exercise: "boxSquat", sets: "6 × 2 @ 60%", note: "Speed work" },
              { type: "assistance", exercise: "lunges", sets: "2 × 10 each" }
            ]
          },
          friday: {
            title: "Upper Body Repetition",
            exercises: [
              { type: "repetition", exercise: "dbPress", sets: "3 × 12" },
              { type: "assistance", exercise: "pullups", sets: "3 × 8" },
              { type: "assistance", exercise: "arms", sets: "2 × 12" }
            ]
          },
          saturday: {
            title: "Conditioning",
            exercises: [
              { type: "conditioning", exercise: "Position-specific drills", sets: "20-30 minutes" },
              { type: "conditioning", exercise: "Sport skills", sets: "20 minutes" }
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
              { type: "max-effort", exercise: "benchPress", sets: "Work up to 5RM @ 85%", note: "Conservative" },
              { type: "assistance", exercise: "bulgarianSplitSquat", sets: "3 × 8 each" },
              { type: "assistance", exercise: "rows", sets: "3 × 10" },
              { type: "assistance", exercise: "shrugs", sets: "3 × 10" },
              { type: "core", exercise: "abs", sets: "2 circuits" }
            ]
          },
          wednesday: {
            title: "In-Season Maintenance B",
            exercises: [
              { type: "dynamic", exercise: "boxJump", sets: "3 × 3", note: "Neural activation" },
              { type: "speed", exercise: "boxSquat", sets: "6 × 2 @ 60%", note: "Speed work" },
              { type: "supplemental", exercise: "dbBenchPress", sets: "3 × 8-12" },
              { type: "assistance", exercise: "facePulls", sets: "3 × 12" },
              { type: "core", exercise: "plank", sets: "2 × 30 seconds" }
            ]
          }
        },
        week2: {
          monday: {
            title: "In-Season Maintenance A",
            exercises: [
              { type: "max-effort", exercise: "benchPress", sets: "Work up to 3RM @ 87%", note: "Single top set" },
              { type: "assistance", exercise: "lunges", sets: "3 × 8 each" },
              { type: "assistance", exercise: "dbRows", sets: "3 × 10 each" },
              { type: "assistance", exercise: "shrugs", sets: "3 × 12" },
              { type: "core", exercise: "abs", sets: "2 circuits" }
            ]
          },
          wednesday: {
            title: "In-Season Maintenance B",
            exercises: [
              { type: "dynamic", exercise: "verticalJump", sets: "3 × 3" },
              { type: "speed", exercise: "boxSquat", sets: "5 × 2 @ 70%", note: "Increase speed" },
              { type: "supplemental", exercise: "dbInclinePress", sets: "3 × 10" },
              { type: "assistance", exercise: "bandPullAparts", sets: "3 × 20" },
              { type: "core", exercise: "weightedAbs", sets: "2 × 15" }
            ]
          }
        },
        week3: {
          monday: {
            title: "In-Season Maintenance A",
            exercises: [
              { type: "max-effort", exercise: "inclineBench", sets: "Singles @ 80-85%", note: "3-5 singles" },
              { type: "assistance", exercise: "stepUps", sets: "3 × 8 each" },
              { type: "assistance", exercise: "cableRows", sets: "3 × 12" },
              { type: "assistance", exercise: "facePulls", sets: "3 × 15" },
              { type: "core", exercise: "plank", sets: "3 × 30-45 seconds" }
            ]
          },
          wednesday: {
            title: "In-Season Maintenance B",
            exercises: [
              { type: "dynamic", exercise: "broadJump", sets: "3 × 2" },
              { type: "speed", exercise: "boxSquat", sets: "Singles @ 80-85%", note: "3-5 singles" },
              { type: "supplemental", exercise: "dbPress", sets: "3 × 10" },
              { type: "assistance", exercise: "pullups", sets: "3 × 5-8" },
              { type: "core", exercise: "abs", sets: "2 × 20" }
            ]
          }
        }
      }
    }
  },

  // ======================== INTERMEDIATE TEMPLATES ========================
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
      }
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
    
    // 2. Add to intermediate -> 'mid-offseason' (after the '3day' section):
    
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
  },

  // ======================== ADVANCED TEMPLATES ========================
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
  },

  // ======================== SPECIAL TEMPLATES ========================
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
};

/* ======================== TEMPLATE HELPERS ======================== */

/**
 * Get a specific workout template
 * @param {string} experience - beginner, intermediate, advanced
 * @param {string} phase - early-offseason, mid-offseason, preseason, inseason
 * @param {string} templateType - 4day, 3day, speed, 2day
 * @param {number} week - Week number (1-4 typically)
 * @returns {object} The workout template for the specified parameters
 */
function getWorkoutTemplate(experience, phase, templateType, week) {
  try {
    const weekKey = `week${week}`;
    
    // Handle special cases
    if (experience === 'washed-up-meathead') {
      return workoutTemplates['washed-up-meathead']['3day'][weekKey];
    }
    
    // Check if template exists
    if (!workoutTemplates[experience]) {
      console.warn(`No templates for experience level: ${experience}`);
      return null;
    }
    
    if (!workoutTemplates[experience][phase]) {
      console.warn(`No templates for phase: ${phase} at ${experience} level`);
      return null;
    }
    
    if (!workoutTemplates[experience][phase][templateType]) {
      console.warn(`No ${templateType} template for ${experience} ${phase}`);
      // Try fallback to 4day template
      if (workoutTemplates[experience][phase]['4day']) {
        return workoutTemplates[experience][phase]['4day'][weekKey];
      }
      return null;
    }
    
    return workoutTemplates[experience][phase][templateType][weekKey] || 
           workoutTemplates[experience][phase][templateType]['week1']; // Default to week 1
    
  } catch (error) {
    console.error('Error getting workout template:', error);
    return null;
  }
}

/**
 * Get exercise rotation schedule based on experience level
 * @param {string} experience - beginner, intermediate, advanced
 * @returns {object} Rotation schedule with weeks between rotations
 */
function getExerciseRotationSchedule(experience) {
  const rotationSchedules = {
    beginner: {
      maxEffort: 3,  // Rotate every 3 weeks
      dynamic: 2,    // Change jump variations every 2 weeks
      repetition: 4  // Change rep schemes every 4 weeks
    },
    intermediate: {
      maxEffort: 2,  // Rotate every 2 weeks
      dynamic: 2,    // Change jumps every 2 weeks
      repetition: 3  // Change rep schemes every 3 weeks
    },
    advanced: {
      maxEffort: 1,  // Weekly rotation
      dynamic: 1,    // Weekly variation
      repetition: 2  // Bi-weekly changes
    }
  };
  
  return rotationSchedules[experience] || rotationSchedules.beginner;
}

/**
 * Get recommended loading parameters for a specific phase
 * @param {string} phase - Training phase
 * @param {string} experience - Experience level
 * @returns {object} Loading recommendations
 */
function getLoadingParameters(phase, experience) {
  const loadingParams = {
    'early-offseason': {
      beginner: { intensity: '70-85%', volume: 'moderate', focus: 'technique' },
      intermediate: { intensity: '75-90%', volume: 'moderate-high', focus: 'building' },
      advanced: { intensity: '80-90%', volume: 'high', focus: 'restoration' }
    },
    'mid-offseason': {
      beginner: { intensity: '75-90%', volume: 'high', focus: 'strength' },
      intermediate: { intensity: '80-95%', volume: 'high', focus: 'max strength' },
      advanced: { intensity: '85-100%', volume: 'very high', focus: 'overload' }
    },
    'preseason': {
      beginner: { intensity: '70-85%', volume: 'low-moderate', focus: 'power' },
      intermediate: { intensity: '75-85%', volume: 'moderate', focus: 'speed-strength' },
      advanced: { intensity: '80-90%', volume: 'moderate', focus: 'peaking' }
    },
    'inseason': {
      beginner: { intensity: '70-85%', volume: 'low', focus: 'maintenance' },
      intermediate: { intensity: '75-87%', volume: 'low', focus: 'maintenance' },
      advanced: { intensity: '80-90%', volume: 'minimal', focus: 'neural' }
    }
  };
  
  return loadingParams[phase]?.[experience] || loadingParams['early-offseason']['beginner'];
}

/**
 * Get available template types for a specific phase
 * @param {string} phase - Training phase
 * @returns {array} Available template types
 */
function getAvailableTemplates(phase) {
  const templateAvailability = {
    'early-offseason': ['4day', '3day'],
    'mid-offseason': ['4day', '3day'],
    'preseason': ['4day', '3day', 'speed'],
    'inseason': ['2day']
  };
  
  return templateAvailability[phase] || ['4day', '3day'];
}

/* =============== EXPORTS (Node & Browser) =============== */
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    workoutTemplates,
    getWorkoutTemplate,
    getExerciseRotationSchedule,
    getLoadingParameters,
    getAvailableTemplates
  };
}

if (typeof window !== "undefined") {
  window.TemplateDB = {
    workoutTemplates,
    getWorkoutTemplate,
    getExerciseRotationSchedule,
    getLoadingParameters,
    getAvailableTemplates
  };
}
