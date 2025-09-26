// exercises/repetitionUpper.js - Repetition Upper Body Exercises with Phase-Specific Equipment Mapping
(function() {
    const repetitionUpper = {
      dbBenchPress: {
        name: "Dumbbell Bench Press",
        classification: "primary",
        effort: "RE",
        category: "repetition",
        movementPattern: "horizontal-push",
        warmupProtocol: "moderate-dumbbell",
        
        equipmentMap: {
          'early-offseason': {
            full: "DB Bench Press (Volume Focus)",
            commercial: "DB Bench Press (Higher Volume)",
            minimal: "DB Floor Press (Form Development)",
            bodyweight: "Push-ups (Volume Building)"
          },
          'mid-offseason': {
            full: "DB Bench Press (Strength Endurance)",
            commercial: "Heavy DB Bench Press",
            minimal: "Single-Arm DB Floor Press",
            bodyweight: "Weighted Push-ups (Heavy)"
          },
          'preseason': {
            full: "DB Bench Press (Explosive Tempo)",
            commercial: "DB Bench Press (Speed Focus)",
            minimal: "Explosive Push-up Variations",
            bodyweight: "Clap Push-ups"
          },
          'inseason': {
            full: "DB Bench Press (Maintenance)",
            commercial: "DB Bench Press (Moderate)",
            minimal: "Standard Push-ups (Quality)",
            bodyweight: "Push-ups (Consistent Form)"
          }
        },
        
        variations: [
          "Flat DB Bench Press",
          "Alternating DB Bench Press", 
          "DB Bench Press (neutral grip)",
          "Single-Arm DB Bench Press"
        ],
        features: [],
        requires: [],
        coachingCues: [
          "Control the descent",
          "Full range of motion",
          "Squeeze at the top",
          "Don't let DBs drift apart"
        ],
        athleticCarryover: "Builds pressing endurance and unilateral strength imbalances",
        indicator: { isIndicator: false }
      },

      dbInclinePress: {
        name: "Dumbbell Incline Press",
        classification: "primary",
        effort: "RE",
        category: "repetition",
        movementPattern: "incline-push",
        warmupProtocol: "moderate-dumbbell",
        
        equipmentMap: {
          'early-offseason': {
            full: "DB Incline Press (Volume Focus)",
            commercial: "DB Incline Press (Higher Volume)",
            minimal: "Incline Push-ups (Form Development)",
            bodyweight: "Pike Push-ups (Volume Building)"
          },
          'mid-offseason': {
            full: "DB Incline Press (Strength Endurance)",
            commercial: "Heavy DB Incline Press",
            minimal: "Single-Arm Incline Push-ups",
            bodyweight: "Weighted Pike Push-ups"
          },
          'preseason': {
            full: "DB Incline Press (Explosive Tempo)",
            commercial: "DB Incline Press (Speed Focus)",
            minimal: "Explosive Incline Push-ups",
            bodyweight: "Handstand Push-ups (if able)"
          },
          'inseason': {
            full: "DB Incline Press (Maintenance)",
            commercial: "DB Incline Press (Moderate)",
            minimal: "Standard Incline Push-ups",
            bodyweight: "Pike Push-ups (Consistent)"
          }
        },
        
        variations: [
          "30-degree Incline DB Press",
          "45-degree Incline DB Press",
          "Alternating DB Incline Press",
          "Single-Arm DB Incline Press"
        ],
        features: ["incline"],
        requires: [],
        coachingCues: [
          "Set bench between 30-45 degrees",
          "Keep shoulders down and back",
          "Don't let elbows flare excessively",
          "Feel stretch at bottom"
        ],
        athleticCarryover: "Develops upper chest endurance and shoulder stability",
        indicator: { isIndicator: false }
      },

      dbShoulderPress: {
        name: "Dumbbell Shoulder Press",
        classification: "primary",
        effort: "RE",
        category: "repetition", 
        movementPattern: "vertical-push",
        warmupProtocol: "moderate-dumbbell",
        
        equipmentMap: {
          'early-offseason': {
            full: "DB Shoulder Press (Volume Focus)",
            commercial: "DB Shoulder Press (Higher Volume)",
            minimal: "Single DB Press (Form Development)",
            bodyweight: "Pike Push-ups (Volume Building)"
          },
          'mid-offseason': {
            full: "DB Shoulder Press (Strength Endurance)",
            commercial: "Heavy DB Shoulder Press",
            minimal: "Single-Arm DB Press (Heavy)",
            bodyweight: "Handstand Push-ups (Advanced)"
          },
          'preseason': {
            full: "DB Push Press (Explosive)",
            commercial: "DB Push Press (Speed)",
            minimal: "Explosive Pike Push-ups",
            bodyweight: "Handstand Push-ups (Speed)"
          },
          'inseason': {
            full: "DB Shoulder Press (Maintenance)",
            commercial: "DB Shoulder Press (Moderate)",
            minimal: "Standard Pike Push-ups",
            bodyweight: "Wall Handstand Push-ups"
          }
        },
        
        variations: [
          "Seated DB Press",
          "Standing DB Press",
          "Alternating DB Press",
          "Arnold Press"
        ],
        features: [],
        requires: [],
        coachingCues: [
          "Keep core tight throughout",
          "Press slightly back, not straight up",
          "Full lockout overhead",
          "Don't arch back excessively"
        ],
        athleticCarryover: "Builds shoulder endurance for overhead athletes",
        indicator: { isIndicator: false }
      },

      dbRows: {
        name: "Dumbbell Rows",
        classification: "primary",
        effort: "RE", 
        category: "repetition",
        movementPattern: "horizontal-pull",
        warmupProtocol: "moderate-dumbbell",
        
        equipmentMap: {
          'early-offseason': {
            full: "DB Rows (Volume Focus)",
            commercial: "DB Rows (Higher Volume)",
            minimal: "Single-Arm DB Row (Form Development)",
            bodyweight: "Inverted Rows (Volume Building)"
          },
          'mid-offseason': {
            full: "DB Rows (Strength Endurance)",
            commercial: "Heavy DB Rows",
            minimal: "Single-Arm DB Row (Heavy)",
            bodyweight: "Weighted Inverted Rows"
          },
          'preseason': {
            full: "DB Rows (Explosive Tempo)",
            commercial: "DB Rows (Speed Focus)",
            minimal: "Explosive Inverted Rows",
            bodyweight: "Archer Inverted Rows"
          },
          'inseason': {
            full: "DB Rows (Maintenance)",
            commercial: "DB Rows (Moderate)",
            minimal: "Standard Inverted Rows",
            bodyweight: "Consistent Inverted Rows"
          }
        },
        
        variations: [
          "Single-Arm DB Row",
          "Chest-Supported DB Row",
          "Bent-Over DB Row (both arms)",
          "Gorilla Rows"
        ],
        features: [],
        requires: [],
        coachingCues: [
          "Pull to lower chest/upper abdomen",
          "Squeeze shoulder blades together",
          "Don't use momentum",
          "Keep core engaged"
        ],
        athleticCarryover: "Builds pulling endurance and back thickness",
        indicator: { isIndicator: false }
      },

      latPulldowns: {
        name: "Lat Pulldowns",
        classification: "primary",
        effort: "RE",
        category: "repetition",
        movementPattern: "vertical-pull",
        warmupProtocol: "bodyweight-progression",
        
        equipmentMap: {
          'early-offseason': {
            full: "Lat Pulldowns (Volume Focus)",
            commercial: "Lat Pulldowns (Higher Volume)",
            minimal: "Band Pulldowns (Form Development)",
            bodyweight: "Pull-ups/Chin-ups (Volume Building)"
          },
          'mid-offseason': {
            full: "Lat Pulldowns (Strength Endurance)",
            commercial: "Heavy Lat Pulldowns",
            minimal: "Heavy Band Pulldowns",
            bodyweight: "Weighted Pull-ups/Chin-ups"
          },
          'preseason': {
            full: "Lat Pulldowns (Explosive Tempo)",
            commercial: "Lat Pulldowns (Speed Focus)",
            minimal: "Explosive Band Pulldowns",
            bodyweight: "Kipping Pull-ups (Controlled)"
          },
          'inseason': {
            full: "Lat Pulldowns (Maintenance)",
            commercial: "Lat Pulldowns (Moderate)",
            minimal: "Band Pulldowns (Quality)",
            bodyweight: "Strict Pull-ups (Consistent)"
          }
        },
        
        variations: [
          "Wide-Grip Lat Pulldown",
          "Close-Grip Lat Pulldown",
          "Neutral-Grip Pulldown",
          "Single-Arm Lat Pulldown"
        ],
        features: [],
        requires: [],
        coachingCues: [
          "Pull to upper chest",
          "Lean back slightly",
          "Focus on lat engagement",
          "Control the negative"
        ],
        athleticCarryover: "Builds pulling endurance and lat width",
        indicator: { isIndicator: false }
      },

      cableRows: {
        name: "Cable Rows",
        classification: "primary",
        effort: "RE",
        category: "repetition",
        movementPattern: "horizontal-pull",
        warmupProtocol: "moderate-resistance",
        
        equipmentMap: {
          'early-offseason': {
            full: "Cable Rows (Volume Focus)",
            commercial: "Cable Rows (Higher Volume)",
            minimal: "Band Rows (Form Development)",
            bodyweight: "Inverted Rows (Volume Building)"
          },
          'mid-offseason': {
            full: "Cable Rows (Strength Endurance)",
            commercial: "Heavy Cable Rows",
            minimal: "Heavy Band Rows",
            bodyweight: "Weighted Inverted Rows"
          },
          'preseason': {
            full: "Cable Rows (Explosive Tempo)",
            commercial: "Cable Rows (Speed Focus)",
            minimal: "Explosive Band Rows",
            bodyweight: "Explosive Inverted Rows"
          },
          'inseason': {
            full: "Cable Rows (Maintenance)",
            commercial: "Cable Rows (Moderate)",
            minimal: "Band Rows (Quality)",
            bodyweight: "Standard Inverted Rows"
          }
        },
        
        variations: [
          "Seated Cable Row",
          "Single-Arm Cable Row",
          "High Cable Row",
          "Low Cable Row"
        ],
        features: [],
        requires: [],
        coachingCues: [
          "Maintain upright posture",
          "Pull to lower chest", 
          "Squeeze shoulder blades",
          "Don't use leg drive"
        ],
        athleticCarryover: "Develops pulling endurance with constant tension",
        indicator: { isIndicator: false }
      },

      // Less phase-specific exercises - simpler equipment mapping
      tricepPushdowns: {
        name: "Tricep Pushdowns",
        classification: "assistance",
        effort: "RE",
        category: "repetition",
        movementPattern: "elbow-extension",
        warmupProtocol: "light-isolation",
        
        // Simpler equipment map - less phase variation needed
        equipmentMap: {
          full: "Cable Tricep Pushdowns",
          commercial: "Cable Tricep Pushdowns",
          minimal: "Band Tricep Pushdowns",
          bodyweight: "Diamond Push-ups"
        },
        
        variations: [
          "Rope Pushdowns",
          "V-Bar Pushdowns", 
          "Single-Arm Pushdowns",
          "Overhead Cable Extension"
        ],
        features: ["isolation"],
        requires: [],
        coachingCues: [
          "Keep elbows at sides",
          "Full extension at bottom",
          "Control the negative",
          "Don't lean forward"
        ],
        athleticCarryover: "Builds tricep endurance for pushing movements",
        indicator: { isIndicator: false }
      },

      bicepCurls: {
        name: "Bicep Curls",
        classification: "assistance", 
        effort: "RE",
        category: "repetition",
        movementPattern: "elbow-flexion",
        warmupProtocol: "light-isolation",
        
        // Simple equipment map
        equipmentMap: {
          full: "Barbell or DB Curls",
          commercial: "DB or Cable Curls",
          minimal: "DB or Band Curls",
          bodyweight: "Chin-ups (bicep focus)"
        },
        
        variations: [
          "Barbell Curls",
          "Dumbbell Curls",
          "Hammer Curls",
          "Cable Curls"
        ],
        features: ["isolation"],
        requires: [],
        coachingCues: [
          "Keep elbows at sides",
          "Don't swing",
          "Full range of motion",
          "Squeeze at the top"
        ],
        athleticCarryover: "Builds bicep endurance and arm aesthetics",
        indicator: { isIndicator: false }
      },

      lateralRaises: {
        name: "Lateral Raises",
        classification: "assistance",
        effort: "RE",
        category: "repetition",
        movementPattern: "shoulder-abduction",
        warmupProtocol: "light-isolation",
        
        // Simple equipment map
        equipmentMap: {
          full: "DB Lateral Raises",
          commercial: "DB or Cable Lateral Raises",
          minimal: "DB or Band Lateral Raises",
          bodyweight: "Pike Push-ups (partial carryover)"
        },
        
        variations: [
          "Standing Lateral Raises",
          "Seated Lateral Raises",
          "Cable Lateral Raises",
          "Bent-Over Lateral Raises"
        ],
        features: ["isolation"],
        requires: [],
        coachingCues: [
          "Lead with pinkies",
          "Don't go above shoulder height",
          "Control the descent",
          "Keep slight bend in elbows"
        ],
        athleticCarryover: "Builds shoulder width and deltoid endurance",
        indicator: { isIndicator: false }
      },

      dbFlyes: {
        name: "Dumbbell Flyes",
        classification: "assistance",
        effort: "RE",
        category: "repetition",
        movementPattern: "horizontal-adduction",
        warmupProtocol: "light-isolation",
        
        equipmentMap: {
          'early-offseason': {
            full: "DB Flyes (Volume Focus)",
            commercial: "DB or Cable Flyes (Higher Volume)",
            minimal: "DB Flyes (Form Development)",
            bodyweight: "Wide-Grip Push-ups (Volume)"
          },
          'mid-offseason': {
            full: "DB Flyes (Strength Endurance)",
            commercial: "Heavy DB Flyes",
            minimal: "Single-Arm DB Flyes",
            bodyweight: "Wide-Grip Push-ups (Advanced)"
          },
          'preseason': {
            full: "DB Flyes (Controlled Speed)",
            commercial: "Cable Flyes (Smooth)",
            minimal: "DB Flyes (Quality)",
            bodyweight: "Wide-Grip Push-ups (Explosive)"
          },
          'inseason': {
            full: "DB Flyes (Maintenance)",
            commercial: "DB Flyes (Moderate)",
            minimal: "DB Flyes (Consistent)",
            bodyweight: "Standard Wide Push-ups"
          }
        },
        
        variations: [
          "Flat DB Flyes",
          "Incline DB Flyes",
          "Decline DB Flyes",
          "Cable Flyes"
        ],
        features: ["isolation"],
        requires: [],
        coachingCues: [
          "Slight bend in elbows throughout",
          "Feel stretch across chest",
          "Don't go too heavy",
          "Squeeze at the top"
        ],
        athleticCarryover: "Builds chest isolation and pec endurance",
        indicator: { isIndicator: false }
      }
    };

    if (typeof loadExerciseModule === 'function') {
        loadExerciseModule('repetitionUpper', repetitionUpper);
    } else {
        console.error('loadExerciseModule function not available when loading repetitionUpper');
    }
})();
