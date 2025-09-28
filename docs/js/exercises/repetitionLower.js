// exercises/repetitionLower.js - Repetition Lower Body Exercises with Phase-Specific Equipment Mapping
(function() {
    const repetitionLower = {
      dbSquats: {
        name: "Dumbbell Squats",
        classification: "primary",
        effort: "RE",
        category: "repetition",
        movementPattern: "squat",
        warmupProtocol: "moderate-dumbbell",
        
        equipmentMap: {
          'early-offseason': {
            full: "DB Squats (Volume Focus)",
            commercial: "DB Squats (Higher Volume)",
            minimal: "DB Goblet Squats (Form Development)",
            bodyweight: "Bodyweight Squats (Volume Building)"
          },
          'mid-offseason': {
            full: "DB Squats (Strength Endurance)",
            commercial: "Heavy DB Squats",
            minimal: "Heavy DB Goblet Squats",
            bodyweight: "Jump Squats (Power Endurance)"
          },
          'preseason': {
            full: "DB Squats (Explosive Tempo)",
            commercial: "DB Squats (Speed Focus)",
            minimal: "Explosive Goblet Squats",
            bodyweight: "Jump Squats (Max Speed)"
          },
          'inseason': {
            full: "DB Squats (Maintenance)",
            commercial: "DB Squats (Moderate)",
            minimal: "Standard Goblet Squats",
            bodyweight: "Bodyweight Squats (Consistent)"
          }
        },
        
        variations: [
          "Goblet Squats",
          "DB Front Squats",
          "DB Sumo Squats",
          "Single-Arm DB Squats"
        ],
        features: [],
        requires: [],
        coachingCues: [
          "Keep chest up throughout",
          "Full depth if mobility allows",
          "Drive through whole foot",
          "Control the descent"
        ],
        athleticCarryover: "Builds squatting endurance and leg stamina",
        indicator: { isIndicator: false }
      },

      dbLunges: {
        name: "Dumbbell Lunges",
        classification: "primary",
        effort: "RE",
        category: "repetition",
        movementPattern: "lunge",
        warmupProtocol: "moderate-dumbbell",
        
        equipmentMap: {
          'early-offseason': {
            full: "DB Lunges (Volume Focus)",
            commercial: "DB Lunges (Higher Volume)",
            minimal: "DB Walking Lunges (Form Development)",
            bodyweight: "Bodyweight Lunges (Volume Building)"
          },
          'mid-offseason': {
            full: "DB Lunges (Strength Endurance)",
            commercial: "Heavy DB Lunges",
            minimal: "Heavy DB Walking Lunges",
            bodyweight: "Jump Lunges (Power Endurance)"
          },
          'preseason': {
            full: "DB Lunges (Explosive Tempo)",
            commercial: "DB Lunges (Speed Focus)",
            minimal: "Explosive Walking Lunges",
            bodyweight: "Jump Lunges (Max Speed)"
          },
          'inseason': {
            full: "DB Lunges (Maintenance)",
            commercial: "DB Lunges (Moderate)",
            minimal: "Standard Walking Lunges",
            bodyweight: "Bodyweight Lunges (Consistent)"
          }
        },
        
        variations: [
          "Forward DB Lunges",
          "Reverse DB Lunges",
          "Walking DB Lunges",
          "Lateral DB Lunges"
        ],
        features: ["unilateral"],
        requires: [],
        coachingCues: [
          "Step out into proper position",
          "Both knees at 90 degrees",
          "Keep torso upright",
          "Push through front heel to return"
        ],
        athleticCarryover: "Develops unilateral leg endurance and movement patterns",
        indicator: { isIndicator: false }
      },

      dbStepUps: {
        name: "Dumbbell Step-ups",
        classification: "primary",
        effort: "RE",
        category: "repetition",
        movementPattern: "step-up",
        warmupProtocol: "moderate-dumbbell",
        
        equipmentMap: {
          'early-offseason': {
            full: "DB Step-ups (Volume Focus)",
            commercial: "DB Step-ups (Higher Volume)",
            minimal: "DB Step-ups on Platform (Form Development)",
            bodyweight: "Bodyweight Step-ups (Volume Building)"
          },
          'mid-offseason': {
            full: "DB Step-ups (Strength Endurance)",
            commercial: "Heavy DB Step-ups",
            minimal: "Heavy DB Step-ups",
            bodyweight: "Single-Leg Step-ups (Advanced)"
          },
          'preseason': {
            full: "DB Step-ups (Explosive Tempo)",
            commercial: "DB Step-ups (Speed Focus)",
            minimal: "Explosive Step-ups",
            bodyweight: "Jump Step-ups (Power)"
          },
          'inseason': {
            full: "DB Step-ups (Maintenance)",
            commercial: "DB Step-ups (Moderate)",
            minimal: "Standard Step-ups",
            bodyweight: "Bodyweight Step-ups (Consistent)"
          }
        },
        
        variations: [
          "High Box DB Step-ups",
          "Lateral DB Step-ups",
          "Step-up with Knee Drive",
          "Alternating DB Step-ups"
        ],
        features: ["unilateral", "functional"],
        requires: [],
        coachingCues: [
          "Step up with one leg only",
          "Don't push off bottom leg",
          "Full hip extension at top",
          "Control the descent"
        ],
        athleticCarryover: "Builds unilateral endurance and functional movement patterns",
        indicator: { isIndicator: false }
      },

      dbRomanianDeadlift: {
        name: "Dumbbell Romanian Deadlift",
        classification: "primary",
        effort: "RE",
        category: "repetition",
        movementPattern: "hip-hinge",
        warmupProtocol: "moderate-dumbbell",
        
        equipmentMap: {
          'early-offseason': {
            full: "DB Romanian Deadlift (Volume Focus)",
            commercial: "DB RDL (Higher Volume)",
            minimal: "DB RDL (Form Development)",
            bodyweight: "Good Mornings (Volume Building)"
          },
          'mid-offseason': {
            full: "DB Romanian Deadlift (Strength Endurance)",
            commercial: "Heavy DB RDL",
            minimal: "Heavy DB RDL",
            bodyweight: "Single-Leg RDL (Advanced)"
          },
          'preseason': {
            full: "DB RDL (Explosive Tempo)",
            commercial: "DB RDL (Speed Focus)",
            minimal: "Explosive Hip Hinge Pattern",
            bodyweight: "Dynamic Good Mornings"
          },
          'inseason': {
            full: "DB RDL (Maintenance)",
            commercial: "DB RDL (Moderate)",
            minimal: "Standard DB RDL",
            bodyweight: "Good Mornings (Consistent)"
          }
        },
        
        variations: [
          "Standard DB RDL",
          "Single-Leg DB RDL",
          "Stiff-Leg DB Deadlift",
          "DB RDL with Pause"
        ],
        features: ["posterior-chain"],
        requires: [],
        coachingCues: [
          "Hinge at hips, not knees",
          "Keep DBs close to body",
          "Feel stretch in hamstrings",
          "Drive hips forward to return"
        ],
        athleticCarryover: "Builds posterior chain endurance and hip hinge stamina",
        indicator: { isIndicator: false }
      },

      legPress: {
        name: "Leg Press",
        classification: "primary",
        effort: "RE",
        category: "repetition",
        movementPattern: "leg-press",
        warmupProtocol: "machine-progression",
        
        equipmentMap: {
          'early-offseason': {
            full: "Leg Press (Volume Focus)",
            commercial: "Leg Press (Higher Volume)",
            minimal: "Wall Sits (Endurance Building)",
            bodyweight: "Bodyweight Squats (High Volume)"
          },
          'mid-offseason': {
            full: "Leg Press (Strength Endurance)",
            commercial: "Heavy Leg Press",
            minimal: "Wall Sits with Weight",
            bodyweight: "Jump Squats (Power Endurance)"
          },
          'preseason': {
            full: "Leg Press (Explosive Tempo)",
            commercial: "Leg Press (Speed Focus)",
            minimal: "Explosive Wall Sits",
            bodyweight: "Jump Squats (Max Speed)"
          },
          'inseason': {
            full: "Leg Press (Maintenance)",
            commercial: "Leg Press (Moderate)",
            minimal: "Standard Wall Sits",
            bodyweight: "Bodyweight Squats (Quality)"
          }
        },
        
        variations: [
          "Standard Leg Press",
          "Single-Leg Press",
          "High Foot Position",
          "Low Foot Position"
        ],
        features: ["machine-based"],
        requires: [],
        coachingCues: [
          "Full range of motion",
          "Don't lock knees completely",
          "Control the negative",
          "Keep core engaged"
        ],
        athleticCarryover: "Builds leg pressing endurance with consistent resistance",
        indicator: { isIndicator: false }
      },

      walkingLunges: {
        name: "Walking Lunges",
        classification: "primary",
        effort: "RE",
        category: "repetition",
        movementPattern: "dynamic-lunge",
        warmupProtocol: "bodyweight-progression",
        
        equipmentMap: {
          'early-offseason': {
            full: "Walking Lunges (Volume Focus)",
            commercial: "Walking Lunges (Higher Volume)",
            minimal: "Walking Lunges (Form Development)",
            bodyweight: "Bodyweight Walking Lunges (Distance)"
          },
          'mid-offseason': {
            full: "Weighted Walking Lunges (Strength Endurance)",
            commercial: "DB Walking Lunges",
            minimal: "Weighted Walking Lunges",
            bodyweight: "Jump Lunges (Power Endurance)"
          },
          'preseason': {
            full: "Walking Lunges (Athletic Tempo)",
            commercial: "Walking Lunges (Dynamic)",
            minimal: "Explosive Walking Lunges",
            bodyweight: "Jump Lunges (Max Speed)"
          },
          'inseason': {
            full: "Walking Lunges (Maintenance)",
            commercial: "Walking Lunges (Moderate)",
            minimal: "Standard Walking Lunges",
            bodyweight: "Walking Lunges (Movement Quality)"
          }
        },
        
        variations: [
          "Forward Walking Lunges",
          "Reverse Walking Lunges",
          "Lateral Walking Lunges",
          "Walking Lunge with Twist"
        ],
        features: ["dynamic", "unilateral"],
        requires: [],
        coachingCues: [
          "Maintain upright posture",
          "Step into proper lunge position",
          "Continuous movement pattern",
          "Equal steps both legs"
        ],
        athleticCarryover: "Develops dynamic leg endurance and movement efficiency",
        indicator: { isIndicator: false }
      },

      // Less phase-specific exercises - simpler equipment mapping
      legExtensions: {
        name: "Leg Extensions",
        classification: "assistance",
        effort: "RE",
        category: "repetition",
        movementPattern: "knee-extension",
        warmupProtocol: "light-isolation",
        
        // Simpler equipment map - less phase variation needed
        equipmentMap: {
          full: "Leg Extension Machine",
          commercial: "Leg Extension Machine",
          minimal: "Single-Leg Bodyweight Extensions",
          bodyweight: "Wall Sit with Extensions"
        },
        
        variations: [
          "Bilateral Leg Extensions",
          "Single-Leg Extensions",
          "Slow Negative Extensions",
          "Pulse Extensions"
        ],
        features: ["isolation"],
        requires: [],
        coachingCues: [
          "Full extension at top",
          "Squeeze quads hard",
          "Control the negative",
          "Don't swing the weight"
        ],
        athleticCarryover: "Builds quad endurance and knee stability",
        indicator: { isIndicator: false }
      },

      legCurls: {
        name: "Leg Curls",
        classification: "assistance",
        effort: "RE",
        category: "repetition",
        movementPattern: "knee-flexion",
        warmupProtocol: "light-isolation",
        
        // Simple equipment map
        equipmentMap: {
          full: "Lying or Seated Leg Curls",
          commercial: "Leg Curl Machine",
          minimal: "Stability Ball Leg Curls",
          bodyweight: "Nordic Curl Negatives"
        },
        
        variations: [
          "Lying Leg Curls",
          "Seated Leg Curls",
          "Standing Single-Leg Curls",
          "Stability Ball Leg Curls"
        ],
        features: ["isolation"],
        requires: [],
        coachingCues: [
          "Full range of motion",
          "Squeeze hamstrings at top",
          "Don't let weight drop",
          "Keep hips pressed down"
        ],
        athleticCarryover: "Builds hamstring endurance and knee stability",
        indicator: { isIndicator: false }
      },

      calfRaises: {
        name: "Calf Raises",
        classification: "assistance",
        effort: "RE",
        category: "repetition",
        movementPattern: "plantar-flexion",
        warmupProtocol: "light-isolation",
        
        // Simple equipment map
        equipmentMap: {
          full: "Standing Calf Raises (machine or barbell)",
          commercial: "Calf Raise Machine",
          minimal: "DB Calf Raises",
          bodyweight: "Bodyweight Calf Raises"
        },
        
        variations: [
          "Standing Calf Raises",
          "Seated Calf Raises",
          "Single-Leg Calf Raises",
          "Donkey Calf Raises"
        ],
        features: ["isolation"],
        requires: [],
        coachingCues: [
          "Full range of motion",
          "Pause at the top",
          "Control the descent",
          "Feel stretch at bottom"
        ],
        athleticCarryover: "Builds calf endurance for jumping and running",
        indicator: { isIndicator: false }
      },

      hipThrusts: {
        name: "Hip Thrusts",
        classification: "assistance",
        effort: "RE",
        category: "repetition",
        movementPattern: "hip-extension",
        warmupProtocol: "glute-activation",
        
        equipmentMap: {
          'early-offseason': {
            full: "Hip Thrusts (Volume Focus)",
            commercial: "Hip Thrusts (Higher Volume)",
            minimal: "Single-Leg Hip Thrusts (Form)",
            bodyweight: "Bodyweight Hip Thrusts (Volume)"
          },
          'mid-offseason': {
            full: "Weighted Hip Thrusts (Strength Endurance)",
            commercial: "Barbell Hip Thrusts",
            minimal: "Heavy Single-Leg Hip Thrusts",
            bodyweight: "Single-Leg Hip Thrusts (Advanced)"
          },
          'preseason': {
            full: "Hip Thrusts (Explosive Tempo)",
            commercial: "Hip Thrusts (Speed Focus)",
            minimal: "Explosive Hip Thrusts",
            bodyweight: "Jump Hip Thrusts"
          },
          'inseason': {
            full: "Hip Thrusts (Maintenance)",
            commercial: "Hip Thrusts (Moderate)",
            minimal: "Standard Hip Thrusts",
            bodyweight: "Bodyweight Hip Thrusts (Quality)"
          }
        },
        
        variations: [
          "Barbell Hip Thrusts",
          "Single-Leg Hip Thrusts",
          "DB Hip Thrusts",
          "Banded Hip Thrusts"
        ],
        features: ["glute-focus"],
        requires: [],
        coachingCues: [
          "Drive through heels",
          "Full hip extension",
          "Squeeze glutes at top",
          "Don't arch lower back"
        ],
        athleticCarryover: "Builds glute endurance for power and stability",
        indicator: { isIndicator: false }
      },

      gluteBridges: {
        name: "Glute Bridges",
        classification: "assistance",
        effort: "RE",
        category: "repetition",
        movementPattern: "hip-extension",
        warmupProtocol: "glute-activation",
        
        // Simple equipment map
        equipmentMap: {
          full: "Weighted Glute Bridges",
          commercial: "DB or Barbell Glute Bridges",
          minimal: "Single-Leg Glute Bridges",
          bodyweight: "Bodyweight Glute Bridges"
        },
        
        variations: [
          "Bodyweight Glute Bridges",
          "Single-Leg Glute Bridges",
          "Weighted Glute Bridges",
          "Marching Glute Bridges"
        ],
        features: ["glute-focus", "core-stability"],
        requires: [],
        coachingCues: [
          "Squeeze glutes at top",
          "Don't arch lower back",
          "Drive through heels",
          "Control the movement"
        ],
        athleticCarryover: "Builds glute endurance and hip stability",
        indicator: { isIndicator: false }
      }
    };

    if (typeof loadExerciseModule === 'function') {
        loadExerciseModule('repetitionLower', repetitionLower);
    } else {
        console.error('loadExerciseModule function not available when loading repetitionLower');
    }
})();
