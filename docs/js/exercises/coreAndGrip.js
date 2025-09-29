// exercises/coreAndGrip.js - Core and Grip Training Exercises with Phase-Specific Equipment Mapping
(function() {
    const coreAndGrip = {
      // WEIGHTED ABDOMINAL EXERCISES - Phase-specific focus

        weightedAbs: {
          name: "Weighted Abdominals",
          classification: "assistance",
          effort: "RE",
          category: "core",
          movementPattern: "weighted-core",
          warmupProtocol: "core-activation",
          
          equipmentMap: {
            full: "Weighted Ab Exercises",
            commercial: "DB/Plate Ab Exercises",
            minimal: "Light Weight Ab Exercises",
            bodyweight: "Bodyweight Ab Exercises"
          },
          
          variations: [
            "Weighted Crunches",
            "Weighted Sit-ups", 
            "Weighted Russian Twists",
            "Weighted Leg Raises"
          ],
          features: ["weighted", "core-strength"],
          requires: [],
          coachingCues: [
            "Add weight progressively",
            "Maintain proper form",
            "Control the movement",
            "Focus on core engagement"
          ],
          athleticCarryover: "Builds weighted core strength for power sports",
          indicator: { isIndicator: false }
        },
        
        plank: {
          name: "Plank",
          classification: "assistance", 
          effort: "RE",
          category: "core",
          movementPattern: "isometric-hold",
          warmupProtocol: "core-activation",
          
          equipmentMap: {
            full: "Plank Variations",
            commercial: "Plank Variations",
            minimal: "Basic Plank",
            bodyweight: "Standard Plank"
          },
          
          variations: [
            "Standard Plank",
            "Side Planks",
            "Plank Up-Downs",
            "Weighted Planks"
          ],
          features: ["isometric", "core-stability"],
          requires: [],
          coachingCues: [
            "Straight line from head to heels",
            "Engage core throughout",
            "Don't let hips sag",
            "Breathe normally"
          ],
          athleticCarryover: "Builds core stability and endurance",
          indicator: { isIndicator: false }
        },
        
      dbSideBends: {
        name: "Dumbbell Side Bends",
        classification: "assistance",
        effort: "RE",
        category: "core",
        movementPattern: "lateral-flexion",
        warmupProtocol: "core-activation",
        
        equipmentMap: {
          'early-offseason': {
            full: "DB Side Bends (Volume/Mobility Focus)",
            commercial: "DB Side Bends (Higher Volume)",
            minimal: "DB Side Bends (Form Development)",
            bodyweight: "Bodyweight Side Bends (Pattern Learning)"
          },
          'mid-offseason': {
            full: "Heavy DB Side Bends (Strength)",
            commercial: "Heavy DB Side Bends",
            minimal: "Heavy DB Side Bends (Max Load)",
            bodyweight: "Weighted Side Bends (Advanced)"
          },
          'preseason': {
            full: "DB Side Bends (Controlled/Quality)",
            commercial: "DB Side Bends (Sharp Execution)",
            minimal: "DB Side Bends (Perfect Form)",
            bodyweight: "Dynamic Side Bends"
          },
          'inseason': {
            full: "DB Side Bends (Maintenance)",
            commercial: "DB Side Bends (Consistent)",
            minimal: "DB Side Bends (Health)",
            bodyweight: "Bodyweight Side Bends (Maintenance)"
          }
        },
        
        variations: [
          "Standing DB Side Bends",
          "Seated DB Side Bends",
          "Cable Side Bends",
          "Offset Barbell Side Bends"
        ],
        features: ["unilateral", "core-stability"],
        requires: [],
        coachingCues: [
          "Keep one hand on your hip",
          "Lean directly to the side",
          "Don't lean forward or back",
          "Control both directions"
        ],
        athleticCarryover: "Builds lateral core strength for rotational sports",
        indicator: { isIndicator: false }
      },

      barbellRussianTwists: {
        name: "Barbell Russian Twists",
        classification: "assistance",
        effort: "RE",
        category: "core",
        movementPattern: "rotation",
        warmupProtocol: "core-rotation",
        
        equipmentMap: {
          'early-offseason': {
            full: "Barbell Russian Twists (Volume Focus)",
            commercial: "Plate Russian Twists (Higher Volume)",
            minimal: "DB Russian Twists (Form Development)",
            bodyweight: "Bodyweight Russian Twists (Learning)"
          },
          'mid-offseason': {
            full: "Heavy Barbell Russian Twists (Strength)",
            commercial: "Heavy Plate Russian Twists",
            minimal: "Heavy DB Russian Twists",
            bodyweight: "Advanced Russian Twists"
          },
          'preseason': {
            full: "Barbell Russian Twists (Controlled Speed)",
            commercial: "Plate Russian Twists (Quality)",
            minimal: "DB Russian Twists (Perfect Form)",
            bodyweight: "Explosive Russian Twists"
          },
          'inseason': {
            full: "Barbell Russian Twists (Maintenance)",
            commercial: "Russian Twists (Consistent)",
            minimal: "DB Russian Twists (Health)",
            bodyweight: "Russian Twists (Movement Quality)"
          }
        },
        
        variations: [
          "Seated Barbell Russian Twists",
          "Standing Barbell Russian Twists",
          "Medicine Ball Russian Twists",
          "Cable Russian Twists"
        ],
        features: ["rotation", "core-power"],
        requires: [],
        coachingCues: [
          "Keep chest up throughout",
          "Rotate from the core",
          "Don't just move arms",
          "Control the movement"
        ],
        athleticCarryover: "Develops rotational power for throwing and striking sports",
        indicator: { isIndicator: false }
      },

      hangingLegRaises: {
        name: "Hanging Leg Raises",
        classification: "assistance",
        effort: "RE",
        category: "core",
        movementPattern: "hip-flexion",
        warmupProtocol: "hanging-prep",
        
        equipmentMap: {
          'early-offseason': {
            full: "Hanging Leg Raises (Volume Focus)",
            commercial: "Hanging Leg Raises (Higher Volume)",
            minimal: "Hanging Knee Raises (Progression)",
            bodyweight: "Lying Leg Raises (Building Strength)"
          },
          'mid-offseason': {
            full: "Weighted Hanging Leg Raises (Strength)",
            commercial: "Advanced Hanging Leg Raises",
            minimal: "Hanging Leg Raises (Max Reps)",
            bodyweight: "L-Sits (Advanced Core)"
          },
          'preseason': {
            full: "Hanging Leg Raises (Quality/Control)",
            commercial: "Hanging Leg Raises (Perfect Form)",
            minimal: "Controlled Hanging Leg Raises",
            bodyweight: "Toes-to-Bar (Dynamic)"
          },
          'inseason': {
            full: "Hanging Leg Raises (Maintenance)",
            commercial: "Hanging Leg Raises (Consistent)",
            minimal: "Hanging Knee Raises (Health)",
            bodyweight: "Leg Raises (Core Maintenance)"
          }
        },
        
        variations: [
          "Straight Leg Raises",
          "Hanging Knee Raises",
          "Toes to Bar",
          "L-Sits"
        ],
        features: ["hanging", "grip-challenge"],
        requires: [],
        coachingCues: [
          "Dead hang position",
          "Raise legs to 90 degrees",
          "Control the descent",
          "Don't swing or use momentum"
        ],
        athleticCarryover: "Builds hanging strength and core power",
        indicator: { isIndicator: false }
      },

      weightedSwissBallCrunches: {
        name: "Weighted Swiss Ball Crunches",
        classification: "assistance",
        effort: "RE",
        category: "core",
        movementPattern: "spinal-flexion",
        warmupProtocol: "core-activation",
        
        equipmentMap: {
          'early-offseason': {
            full: "Weighted Swiss Ball Crunches (Volume)",
            commercial: "Swiss Ball Crunches (Higher Volume)",
            minimal: "Weighted Crunches (Basic)",
            bodyweight: "Swiss Ball Crunches (Learning)"
          },
          'mid-offseason': {
            full: "Heavy Swiss Ball Crunches (Strength)",
            commercial: "Heavy Weighted Crunches",
            minimal: "Heavy Weighted Crunches",
            bodyweight: "Advanced Swiss Ball Crunches"
          },
          'preseason': {
            full: "Swiss Ball Crunches (Controlled)",
            commercial: "Weighted Crunches (Quality)",
            minimal: "Weighted Crunches (Perfect Form)",
            bodyweight: "Swiss Ball Crunches (Stability)"
          },
          'inseason': {
            full: "Swiss Ball Crunches (Maintenance)",
            commercial: "Weighted Crunches (Consistent)",
            minimal: "Standard Weighted Crunches",
            bodyweight: "Swiss Ball Crunches (Health)"
          }
        },
        
        variations: [
          "DB Swiss Ball Crunches",
          "Plate Swiss Ball Crunches",
          "Swiss Ball Oblique Crunches",
          "Swiss Ball Reverse Crunches"
        ],
        features: ["stability-challenge", "weighted"],
        requires: ["swiss-ball"],
        coachingCues: [
          "Full range of motion on ball",
          "Hold weight across chest",
          "Crunch up, not forward",
          "Control both directions"
        ],
        athleticCarryover: "Builds core strength with stability challenge",
        indicator: { isIndicator: false }
      },

      spreadEagleSitUps: {
        name: "Spread-Eagle Sit-ups",
        classification: "assistance",
        effort: "RE",
        category: "core",
        movementPattern: "spinal-flexion",
        warmupProtocol: "core-activation",
        
        // Simple equipment map - exercise is fairly consistent across phases
        equipmentMap: {
          full: "DB Spread-Eagle Sit-ups",
          commercial: "Weighted Spread-Eagle Sit-ups",
          minimal: "DB Spread-Eagle Sit-ups",
          bodyweight: "Bodyweight Spread-Eagle Sit-ups"
        },
        
        variations: [
          "DB Spread-Eagle Sit-ups",
          "Plate Spread-Eagle Sit-ups",
          "Medicine Ball Spread-Eagle Sit-ups",
          "Bodyweight Spread-Eagle Sit-ups"
        ],
        features: ["weighted", "full-range"],
        requires: [],
        coachingCues: [
          "Hold weight over chest",
          "Legs spread wide",
          "Full sit-up motion",
          "Control the descent"
        ],
        athleticCarryover: "Builds weighted core strength and stability",
        indicator: { isIndicator: false }
      },

      standingSitUps: {
        name: "Standing Sit-ups",
        classification: "assistance",
        effort: "RE",
        category: "core",
        movementPattern: "standing-flexion",
        warmupProtocol: "core-activation",
        
        // Simple equipment map
        equipmentMap: {
          full: "Cable/Band Standing Sit-ups",
          commercial: "High Pulley Standing Sit-ups",
          minimal: "Band Standing Sit-ups",
          bodyweight: "Standing Crunches"
        },
        
        variations: [
          "Cable Standing Sit-ups",
          "Band Standing Sit-ups",
          "High Pulley Crunches",
          "Standing Cable Crunches"
        ],
        features: ["standing", "functional"],
        requires: [],
        coachingCues: [
          "Start standing upright",
          "Crunch down toward knees",
          "Use core, not arms",
          "Full range of motion"
        ],
        athleticCarryover: "Functional core strength in standing position",
        indicator: { isIndicator: false }
      },

      cablePullIns: {
        name: "Cable/Band Pull-ins",
        classification: "assistance",
        effort: "RE",
        category: "core",
        movementPattern: "hip-flexion",
        warmupProtocol: "core-activation",
        
        // Simple equipment map
        equipmentMap: {
          full: "Low Cable Pull-ins",
          commercial: "Cable or Machine Pull-ins",
          minimal: "Band Pull-ins",
          bodyweight: "Knee-to-Chest"
        },
        
        variations: [
          "Low Cable Pull-ins",
          "Band Pull-ins",
          "Cable Knee Raises",
          "Seated Cable Crunches"
        ],
        features: ["constant-tension"],
        requires: [],
        coachingCues: [
          "Pull knees to chest",
          "Focus on lower abs",
          "Control the return",
          "Don't let weight stack touch"
        ],
        athleticCarryover: "Builds lower abdominal strength with constant tension",
        indicator: { isIndicator: false }
      },

      // GRIP AND FOREARM EXERCISES

      wristRoller: {
        name: "Wrist Roller",
        classification: "assistance",
        effort: "RE",
        category: "grip",
        movementPattern: "wrist-flexion-extension",
        warmupProtocol: "wrist-prep",
        
        // Simple equipment map
        equipmentMap: {
          full: "Wrist Roller Device",
          commercial: "Wrist Roller or Cable Setup",
          minimal: "DIY Wrist Roller (PVC + rope + weight)",
          bodyweight: "Wrist Circles and Flexion"
        },
        
        variations: [
          "Standard Wrist Roller",
          "Reverse Wrist Roller",
          "Single-Arm Wrist Roller",
          "Cable Wrist Roller"
        ],
        features: ["grip-endurance", "forearm-specific"],
        requires: ["wrist-roller"],
        coachingCues: [
          "Arms extended in front",
          "2-3 sets of 2-3 full reps",
          "Roll weight up and down slowly",
          "Control both directions"
        ],
        athleticCarryover: "Builds exceptional grip endurance and forearm strength",
        indicator: { isIndicator: false }
      },

      farmersWalks: {
        name: "Farmer's Walks/Heavy Holds",
        classification: "assistance",
        effort: "RE",
        category: "grip",
        movementPattern: "static-hold",
        warmupProtocol: "grip-prep",
        
        equipmentMap: {
          'early-offseason': {
            full: "Farmer's Walks (Distance Focus)",
            commercial: "Heavy DB Holds (Time Focus)",
            minimal: "DB Holds (Building Capacity)",
            bodyweight: "Dead Hangs (Grip Building)"
          },
          'mid-offseason': {
            full: "Heavy Farmer's Walks (Max Weight)",
            commercial: "Max Weight DB Holds",
            minimal: "Heavy DB Holds (Max Load)",
            bodyweight: "Weighted Dead Hangs"
          },
          'preseason': {
            full: "Farmer's Walks (Competition Prep)",
            commercial: "Heavy Holds (Quality)",
            minimal: "DB Holds (Consistent)",
            bodyweight: "Dead Hangs (Maintenance)"
          },
          'inseason': {
            full: "Farmer's Walks (Maintenance)",
            commercial: "DB Holds (Health)",
            minimal: "Light DB Holds",
            bodyweight: "Dead Hangs (Basic)"
          }
        },
        
        variations: [
          "Farmer's Walks",
          "Heavy DB Holds",
          "Thick Bar Holds",
          "Suitcase Carries"
        ],
        features: ["functional-strength", "full-body"],
        requires: [],
        coachingCues: [
          "2-3 sets of max time",
          "Maintain posture throughout",
          "Don't let grip fail completely",
          "Walk with control"
        ],
        athleticCarryover: "Builds functional grip strength and total-body stability",
        indicator: { isIndicator: false }
      },

      platePinchGrip: {
        name: "Plate Pinch Gripping",
        classification: "assistance",
        effort: "RE",
        category: "grip",
        movementPattern: "pinch-grip",
        warmupProtocol: "finger-prep",
        
        // Simple equipment map
        equipmentMap: {
          full: "Multiple Plate Pinch Gripping",
          commercial: "Plate Pinch Gripping",
          minimal: "Single Plate Pinch",
          bodyweight: "Finger Strengthening Exercises"
        },
        
        variations: [
          "Two 45lb Plate Pinch",
          "Multiple Plate Pinch",
          "Single Plate Pinch",
          "Pinch Block Training"
        ],
        features: ["pinch-strength", "finger-specific"],
        requires: ["plates"],
        coachingCues: [
          "2-3 sets of 2-3 reps",
          "Pinch plates smooth side out",
          "Hold for max time",
          "Use thumb and fingers only"
        ],
        athleticCarryover: "Develops crushing grip strength and finger power",
        indicator: { isIndicator: false }
      },

      gripperTraining: {
        name: "Gripper Training",
        classification: "assistance",
        effort: "RE",
        category: "grip",
        movementPattern: "crushing-grip",
        warmupProtocol: "hand-prep",
        
        // Simple equipment map
        equipmentMap: {
          full: "Captains of Crush Grippers",
          commercial: "Heavy Duty Grippers",
          minimal: "Basic Hand Grippers",
          bodyweight: "Fist Clenching Exercises"
        },
        
        variations: [
          "Captains of Crush Grippers",
          "Heavy Duty Hand Grippers",
          "Adjustable Grippers",
          "Stress Ball Squeezes"
        ],
        features: ["crushing-strength", "hand-specific"],
        requires: ["grippers"],
        coachingCues: [
          "3 sets of max reps each hand",
          "Full closure if possible",
          "Control both squeeze and release",
          "Progress gripper resistance gradually"
        ],
        athleticCarryover: "Builds crushing grip strength for grappling and handling",
        indicator: { isIndicator: false }
      },

      riceDigs: {
        name: "Rice Digs",
        classification: "assistance",
        effort: "RE",
        category: "grip",
        movementPattern: "finger-dexterity",
        warmupProtocol: "wrist-prep",
        
        // Simple equipment map
        equipmentMap: {
          full: "Rice Bucket Training",
          commercial: "Rice Bucket Training",
          minimal: "Rice Bucket Training",
          bodyweight: "Finger Exercises"
        },
        
        variations: [
          "Rice Digs",
          "Rice Grabs",
          "Rice Squeezes",
          "Sand Training"
        ],
        features: ["rehabilitation", "dexterity"],
        requires: ["rice-bucket"],
        coachingCues: [
          "3 timed sets (30-60 seconds)",
          "Dig hands deep into rice",
          "Make fists and open hands",
          "Focus on finger strength and flexibility"
        ],
        athleticCarryover: "Improves finger dexterity and forearm endurance",
        indicator: { isIndicator: false }
      },

      // HIGH-REP ABDOMINAL CIRCUITS

      abCircuitBasic: {
        name: "Basic Ab Circuit",
        classification: "assistance",
        effort: "RE",
        category: "core-circuit",
        movementPattern: "circuit-training",
        warmupProtocol: "dynamic-core",
        
        // Simple equipment map
        equipmentMap: {
          full: "Ground-Based Ab Circuit",
          commercial: "Ground-Based Ab Circuit",
          minimal: "Bodyweight Ab Circuit",
          bodyweight: "Basic Ab Circuit"
        },
        
        variations: [
          "Sprinter Sit-ups",
          "V-ups", 
          "Toe Touches",
          "Hip Thrusts"
        ],
        features: ["circuit", "high-rep", "bodyweight"],
        requires: [],
        coachingCues: [
          "10-20 reps each exercise",
          "Go through circuit 2-3 times",
          "Rest 1-2 minutes between circuits",
          "Focus on form over speed"
        ],
        athleticCarryover: "Builds core endurance and muscular stamina",
        indicator: { isIndicator: false }
      },

      abCircuitAdvanced: {
        name: "Advanced Ab Circuit",
        classification: "assistance",
        effort: "RE",
        category: "core-circuit",
        movementPattern: "circuit-training",
        warmupProtocol: "dynamic-core",
        
        // Simple equipment map
        equipmentMap: {
          full: "Advanced Ab Circuit",
          commercial: "Advanced Ab Circuit",
          minimal: "Modified Advanced Circuit",
          bodyweight: "Advanced Bodyweight Circuit"
        },
        
        variations: [
          "Bicycle Crunches",
          "Russian Twists",
          "Mountain Climbers",
          "Plank Variations"
        ],
        features: ["circuit", "high-rep", "advanced"],
        requires: [],
        coachingCues: [
          "15-25 reps each exercise",
          "Continuous movement",
          "2-4 circuits depending on fitness",
          "Minimal rest between exercises"
        ],
        athleticCarryover: "Develops core power endurance and stability",
        indicator: { isIndicator: false }
      }
    };

    if (typeof loadExerciseModule === 'function') {
        loadExerciseModule('coreAndGrip', coreAndGrip);
    } else {
        console.error('loadExerciseModule function not available when loading coreAndGrip');
    }
})();
