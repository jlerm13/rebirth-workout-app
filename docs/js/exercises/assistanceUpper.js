// exercises/assistanceUpper.js - Assistance Upper Body Exercises with Selective Phase-Specific Equipment Mapping
(function() {
    const assistanceUpper = {
      // HIGH PHASE SPECIFICITY - These exercises have significant variation in focus/execution across phases
      
      facePulls: {
        name: "Face Pulls",
        classification: "assistance",
        effort: "RE", 
        category: "assistance",
        movementPattern: "horizontal-pull",
        warmupProtocol: "light-activation",
        
        equipmentMap: {
          'early-offseason': {
            full: "Cable Face Pulls (Postural Restoration)",
            commercial: "Cable Face Pulls (Higher Volume)",
            minimal: "Band Face Pulls (Movement Quality)",
            bodyweight: "Prone Y-Raises (Postural Learning)"
          },
          'mid-offseason': {
            full: "Cable Face Pulls (Strength Building)",
            commercial: "Heavy Cable Face Pulls",
            minimal: "Heavy Band Face Pulls",
            bodyweight: "Prone Y-T-W Raises (Strength)"
          },
          'preseason': {
            full: "Cable Face Pulls (Pre-hab/Performance)",
            commercial: "Cable Face Pulls (Sharp Execution)",
            minimal: "Band Face Pulls (Quality)",
            bodyweight: "Dynamic Y-T-W (Activation)"
          },
          'inseason': {
            full: "Cable Face Pulls (Injury Prevention)",
            commercial: "Cable Face Pulls (Maintenance)",
            minimal: "Band Face Pulls (Consistent)",
            bodyweight: "Y-T-W Raises (Maintenance)"
          }
        },
        
        variations: [
          "High Cable Face Pull",
          "Mid Cable Face Pull", 
          "Low Cable Face Pull",
          "Single-Arm Face Pull"
        ],
        features: ["postural", "shoulder-health"],
        requires: [],
        coachingCues: [
          "Pull to face level",
          "Squeeze shoulder blades together", 
          "Keep elbows high",
          "Focus on rear delts"
        ],
        athleticCarryover: "Essential for shoulder health and postural balance",
        indicator: { isIndicator: false }
      },

      rearDeltFlyes: {
        name: "Rear Delt Flyes",
        classification: "assistance",
        effort: "RE",
        category: "assistance", 
        movementPattern: "rear-delt-isolation",
        warmupProtocol: "light-activation",
        
        equipmentMap: {
          'early-offseason': {
            full: "Rear Delt Flyes (Postural Volume)",
            commercial: "Cable/DB Rear Flyes (Higher Volume)",
            minimal: "DB Rear Flyes (Movement Quality)",
            bodyweight: "Prone T-Raises (Learning Pattern)"
          },
          'mid-offseason': {
            full: "Heavy Rear Delt Flyes (Strength)",
            commercial: "Heavy DB Rear Flyes",
            minimal: "Heavy DB Rear Flyes (Max Load)",
            bodyweight: "Prone T-Raises (Advanced)"
          },
          'preseason': {
            full: "Rear Delt Flyes (Pre-activation)",
            commercial: "Cable Rear Flyes (Controlled)",
            minimal: "DB Rear Flyes (Quality)",
            bodyweight: "Dynamic T-Raises (Activation)"
          },
          'inseason': {
            full: "Rear Delt Flyes (Health Maintenance)",
            commercial: "Rear Delt Flyes (Consistent)",
            minimal: "DB Rear Flyes (Maintenance)",
            bodyweight: "T-Raises (Shoulder Care)"
          }
        },
        
        variations: [
          "Bent-Over DB Rear Flyes",
          "Seated Rear Flyes",
          "Cable Rear Flyes",
          "Prone Rear Flyes"
        ],
        features: ["isolation", "postural"],
        requires: [],
        coachingCues: [
          "Slight bend in elbows",
          "Lead with pinkies",
          "Squeeze at the top",
          "Don't use momentum"
        ],
        athleticCarryover: "Builds rear delt strength for postural balance and shoulder health",
        indicator: { isIndicator: false }
      },

      bandPullAparts: {
        name: "Band Pull-Aparts",
        classification: "assistance", 
        effort: "RE",
        category: "assistance",
        movementPattern: "horizontal-pull",
        warmupProtocol: "activation",
        
        equipmentMap: {
          'early-offseason': {
            full: "Band Pull-Aparts (Movement Restoration)",
            commercial: "Band Pull-Aparts (Higher Volume)",
            minimal: "Band Pull-Aparts (Pattern Learning)",
            bodyweight: "Arm Circles (Movement Prep)"
          },
          'mid-offseason': {
            full: "Heavy Band Pull-Aparts (Strength)",
            commercial: "Thick Band Pull-Aparts",
            minimal: "Heavy Band Pull-Aparts",
            bodyweight: "Resistance Arm Patterns"
          },
          'preseason': {
            full: "Band Pull-Aparts (Activation Focus)",
            commercial: "Band Pull-Aparts (Pre-Competition)",
            minimal: "Band Pull-Aparts (Neural Prime)",
            bodyweight: "Dynamic Arm Circles"
          },
          'inseason': {
            full: "Band Pull-Aparts (Maintenance/Warm-up)",
            commercial: "Band Pull-Aparts (Consistent)",
            minimal: "Band Pull-Aparts (Game Day Prep)",
            bodyweight: "Arm Circles (Preparation)"
          }
        },
        
        variations: [
          "Horizontal Pull-Aparts",
          "High Pull-Aparts", 
          "Low Pull-Aparts",
          "Overhead Pull-Aparts"
        ],
        features: ["activation", "high-rep"],
        requires: ["bands"],
        coachingCues: [
          "Pull band apart to chest",
          "Squeeze shoulder blades",
          "Control the return",
          "Keep shoulders down"
        ],
        athleticCarryover: "Universal shoulder activation and postural exercise",
        indicator: { isIndicator: false }
      },

      externalRotations: {
        name: "External Rotations",
        classification: "assistance",
        effort: "RE",
        category: "assistance",
        movementPattern: "shoulder-rotation",
        warmupProtocol: "shoulder-prep",
        
        equipmentMap: {
          'early-offseason': {
            full: "Cable External Rotations (Rehab Focus)",
            commercial: "Cable/DB External Rotations (Volume)",
            minimal: "Band External Rotations (Learning)",
            bodyweight: "Wall External Rotations (Pattern)"
          },
          'mid-offseason': {
            full: "Heavy External Rotations (Strength)",
            commercial: "DB External Rotations (Heavy)",
            minimal: "Heavy Band External Rotations",
            bodyweight: "Isometric External Rotations"
          },
          'preseason': {
            full: "External Rotations (Pre-hab Sharp)",
            commercial: "Cable External Rotations (Quality)",
            minimal: "Band External Rotations (Consistent)",
            bodyweight: "Dynamic External Rotation Pattern"
          },
          'inseason': {
            full: "External Rotations (Injury Prevention)",
            commercial: "External Rotations (Maintenance)",
            minimal: "Band External Rotations (Health)",
            bodyweight: "Wall External Rotations (Care)"
          }
        },
        
        variations: [
          "Side-lying External Rotation",
          "Standing Cable External Rotation",
          "90/90 External Rotation",
          "Band External Rotation"
        ],
        features: ["shoulder-health", "isolation"],
        requires: [],
        coachingCues: [
          "Keep elbow at 90 degrees",
          "Don't let elbow drift",
          "Slow and controlled",
          "Feel it in back of shoulder"
        ],
        athleticCarryover: "Critical for overhead athletes and shoulder injury prevention",
        indicator: { isIndicator: false }
      },

      // MODERATE PHASE SPECIFICITY - Some variation but less dramatic than above
      
      pullups: {
        name: "Pull-ups/Chin-ups",
        classification: "assistance",
        effort: "RE",
        category: "assistance",
        movementPattern: "vertical-pull",
        warmupProtocol: "bodyweight-progression",
        
        equipmentMap: {
          'early-offseason': {
            full: "Pull-ups/Chin-ups (Volume Building)",
            commercial: "Assisted Pull-ups (Volume Focus)",
            minimal: "Band-Assisted Pull-ups (Pattern)",
            bodyweight: "Negative Pull-ups (Strength Building)"
          },
          'mid-offseason': {
            full: "Weighted Pull-ups (Strength)",
            commercial: "Heavy Pull-ups/Chin-ups",
            minimal: "Advanced Pull-up Variations",
            bodyweight: "Archer Pull-ups (Unilateral)"
          },
          'preseason': {
            full: "Pull-ups (Quality/Consistency)",
            commercial: "Pull-ups (Sharp Execution)",
            minimal: "Pull-ups (Form Perfect)",
            bodyweight: "Strict Pull-ups (Competition)"
          },
          'inseason': {
            full: "Pull-ups (Maintenance Volume)",
            commercial: "Pull-ups (Consistent)",
            minimal: "Pull-ups (Health Maintenance)",
            bodyweight: "Pull-ups (Relative Strength)"
          }
        },
        
        variations: [
          "Pull-ups (overhand)",
          "Chin-ups (underhand)", 
          "Neutral-Grip Pull-ups",
          "Wide-Grip Pull-ups"
        ],
        features: ["relative-strength"],
        requires: [],
        coachingCues: [
          "Full hang at bottom",
          "Chin over bar",
          "No kipping",
          "Control the descent"
        ],
        athleticCarryover: "Builds relative strength and pulling endurance",
        indicator: { isIndicator: true, type: "relative" }
      },

      // LOW PHASE SPECIFICITY - Consistent role across phases, simple equipment mapping

      shrugs: {
        name: "Shrugs",
        classification: "assistance",
        effort: "RE",
        category: "assistance", 
        movementPattern: "shoulder-elevation",
        warmupProtocol: "light-trap",
        
        // Simple equipment map - role is consistent across phases
        equipmentMap: {
          full: "Barbell or DB Shrugs",
          commercial: "DB or Cable Shrugs", 
          minimal: "DB Shrugs",
          bodyweight: "Shoulder Blade Squeezes"
        },
        
        variations: [
          "Barbell Shrugs",
          "Dumbbell Shrugs",
          "Cable Shrugs", 
          "Behind-the-Back Shrugs"
        ],
        features: ["isolation"],
        requires: [],
        coachingCues: [
          "Straight up and down",
          "Don't roll shoulders",
          "Squeeze at the top",
          "Control the negative"
        ],
        athleticCarryover: "Builds trap mass and neck stability",
        indicator: { isIndicator: false }
      },

      barbellCurls: {
        name: "Barbell Curls",
        classification: "assistance",
        effort: "RE",
        category: "assistance",
        movementPattern: "elbow-flexion", 
        warmupProtocol: "light-isolation",
        
        // Simple equipment map - consistent role
        equipmentMap: {
          full: "Barbell Curls",
          commercial: "Barbell or EZ-Bar Curls",
          minimal: "DB Curls",
          bodyweight: "Chin-ups (bicep focus)"
        },
        
        variations: [
          "Standing Barbell Curls",
          "EZ-Bar Curls",
          "Preacher Curls",
          "21s (7-7-7 method)"
        ],
        features: ["isolation"],
        requires: [],
        coachingCues: [
          "Keep elbows at sides",
          "Don't swing or cheat",
          "Full range of motion",
          "Squeeze at the top"
        ],
        athleticCarryover: "Builds bicep size and arm strength",
        indicator: { isIndicator: false }
      },

      dbCurls: {
        name: "Dumbbell Curls", 
        classification: "assistance",
        effort: "RE",
        category: "assistance",
        movementPattern: "elbow-flexion",
        warmupProtocol: "light-isolation",
        
        // Simple equipment map
        equipmentMap: {
          full: "Dumbbell Curls",
          commercial: "Dumbbell Curls",
          minimal: "Dumbbell Curls", 
          bodyweight: "Chin-ups (bicep emphasis)"
        },
        
        variations: [
          "Standing DB Curls",
          "Seated DB Curls",
          "Hammer Curls",
          "Alternating DB Curls"
        ],
        features: ["isolation", "unilateral"],
        requires: [],
        coachingCues: [
          "One arm at a time or together",
          "Don't let DBs touch body",
          "Full contraction at top",
          "Control the eccentric"
        ],
        athleticCarryover: "Builds bicep strength and prevents imbalances",
        indicator: { isIndicator: false }
      },

      lateralRaises: {
        name: "Lateral Raises",
        classification: "assistance", 
        effort: "RE",
        category: "assistance",
        movementPattern: "shoulder-abduction",
        warmupProtocol: "light-isolation",
        
        // Simple equipment map - shoulder width/health is consistent need
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
          "Leaning Lateral Raises"
        ],
        features: ["isolation"],
        requires: [],
        coachingCues: [
          "Lead with pinkies",
          "Don't go above shoulder height",
          "Slight forward lean",
          "Control the descent"
        ],
        athleticCarryover: "Builds shoulder width and medial deltoid strength",
        indicator: { isIndicator: false }
      },

      tricepDips: {
        name: "Tricep Dips",
        classification: "assistance",
        effort: "RE",
        category: "assistance",
        movementPattern: "elbow-extension",
        warmupProtocol: "bodyweight-tricep",
        
        // Simple equipment map - tricep strength role is consistent
        equipmentMap: {
          full: "Weighted Tricep Dips",
          commercial: "Assisted Tricep Dips or Machine",
          minimal: "Tricep Dips on Bench/Chair",
          bodyweight: "Tricep Dips (bodyweight)"
        },
        
        variations: [
          "Parallel Bar Dips",
          "Bench Dips",
          "Ring Dips", 
          "Weighted Dips"
        ],
        features: ["bodyweight-base"],
        requires: [],
        coachingCues: [
          "Keep elbows close to body",
          "Full range of motion",
          "Lean slightly forward",
          "Don't go too low if shoulder issues"
        ],
        athleticCarryover: "Builds tricep strength for pushing movements",
        indicator: { isIndicator: false }
      },

      hammerCurls: {
        name: "Hammer Curls",
        classification: "assistance",
        effort: "RE", 
        category: "assistance",
        movementPattern: "elbow-flexion",
        warmupProtocol: "light-isolation",
        
        // Simple equipment map
        equipmentMap: {
          full: "DB Hammer Curls",
          commercial: "DB Hammer Curls",
          minimal: "DB Hammer Curls",
          bodyweight: "Neutral-Grip Chin-ups"
        },
        
        variations: [
          "Standing Hammer Curls",
          "Seated Hammer Curls", 
          "Cross-Body Hammer Curls",
          "Rope Hammer Curls"
        ],
        features: ["isolation", "forearm-emphasis"],
        requires: [],
        coachingCues: [
          "Keep neutral grip throughout",
          "Don't twist wrists",
          "Control the movement", 
          "Focus on bicep and forearm"
        ],
        athleticCarryover: "Builds bicep and forearm strength, grip support",
        indicator: { isIndicator: false }
      }
    };

    if (typeof loadExerciseModule === 'function') {
        loadExerciseModule('assistanceUpper', assistanceUpper);
    } else {
        console.error('loadExerciseModule function not available when loading assistanceUpper');
    }
})();
