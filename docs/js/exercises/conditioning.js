// exercises/conditioning.js - Conditioning Exercises with Equipment-Focused Mapping
(function() {
    const conditioning = {
      // SELECTIVE PHASE SPECIFICITY - Key conditioning exercises with some phase awareness
      
      prowlerPush: {
        name: "Prowler Push",
        classification: "conditioning",
        effort: "Conditioning", 
        category: "conditioning",
        movementPattern: "horizontal-push-conditioning",
        warmupProtocol: "conditioning-prep",
        
        equipmentMap: {
          'early-offseason': {
            full: "Prowler Push (Aerobic Base Building)",
            commercial: "Sled Push or Heavy Carry (Volume)",
            minimal: "Weighted Carry or Push-ups (Endurance)",
            bodyweight: "Bear Crawls (Endurance Pattern)"
          },
          'mid-offseason': {
            full: "Heavy Prowler Push (Strength-Endurance)",
            commercial: "Heavy Sled Push (Power Endurance)",
            minimal: "Heavy Carry Variations (Strength)",
            bodyweight: "Explosive Bear Crawls (Power)"
          },
          'preseason': {
            full: "Prowler Sprint Push (Alactic Power)",
            commercial: "Sled Sprint Push (Competition Speed)",
            minimal: "Sprint Carries (Game Speed)",
            bodyweight: "Bear Crawl Sprints (Sport Speed)"
          },
          'inseason': {
            full: "Prowler Push (Recovery/Activation)",
            commercial: "Light Sled Push (Neural Prime)",
            minimal: "Light Carries (Active Recovery)",
            bodyweight: "Bear Crawls (Movement Quality)"
          }
        },
        
        variations: [
          "High Prowler Push",
          "Low Prowler Push", 
          "Reverse Prowler Drag",
          "Lateral Prowler Push"
        ],
        features: ["anaerobic", "total-body"],
        requires: ["prowler"],
        coachingCues: [
          "Keep low driving position",
          "Drive through whole foot",
          "Maintain forward lean",
          "Short, powerful steps"
        ],
        athleticCarryover: "Builds anaerobic power and total-body conditioning",
        indicator: { isIndicator: false }
      },
    
      sledDrags: {
        name: "Sled Drags",
        classification: "conditioning",
        effort: "Conditioning",
        category: "conditioning", 
        movementPattern: "drag-conditioning",
        warmupProtocol: "conditioning-prep",
        
        equipmentMap: {
          'early-offseason': {
            full: "Sled Drags (Aerobic Development)",
            commercial: "Sled Drags or Carries (Volume)",
            minimal: "Heavy Rope Drags or Carries (Endurance)",
            bodyweight: "Backward Running (Pattern)"
          },
          'mid-offseason': {
            full: "Heavy Sled Drags (Strength-Endurance)",
            commercial: "Heavy Sled Drags (Power)",
            minimal: "Heavy Rope/Tire Drags",
            bodyweight: "Backward Hill Runs (Power)"
          },
          'preseason': {
            full: "Sled Drags (Sport-Specific Intensity)",
            commercial: "Competition-Speed Sled Drags",
            minimal: "Sprint Drags (Game Pace)",
            bodyweight: "Backward Sprints (Competition)"
          },
          'inseason': {
            full: "Sled Drags (Recovery/Maintenance)",
            commercial: "Light Sled Drags (Active Recovery)",
            minimal: "Light Drags (Movement Quality)",
            bodyweight: "Easy Backward Jogging"
          }
        },
        
        variations: [
          "Forward Sled Drag",
          "Backward Sled Drag",
          "Lateral Sled Drag", 
          "Harness Sled Drag"
        ],
        features: ["posterior-chain", "conditioning"],
        requires: ["sled"],
        coachingCues: [
          "Stay low and drive",
          "Use arms for rhythm", 
          "Keep consistent pace",
          "Focus on leg drive"
        ],
        athleticCarryover: "Develops posterior chain endurance and work capacity",
        indicator: { isIndicator: false }
      },
    
      battleRopes: {
        name: "Battle Ropes",
        classification: "conditioning",
        effort: "Conditioning",
        category: "conditioning",
        movementPattern: "wave-conditioning",
        warmupProtocol: "upper-body-conditioning",
        
        equipmentMap: {
          'early-offseason': {
            full: "Battle Ropes (Aerobic Intervals)",
            commercial: "Battle Ropes (Endurance Focus)",
            minimal: "Heavy Rope Waves or Band Waves",
            bodyweight: "Arm Circles (High Volume)"
          },
          'mid-offseason': {
            full: "Heavy Battle Ropes (Power Endurance)",
            commercial: "Battle Ropes (Higher Intensity)",
            minimal: "Explosive Band Waves (Power)",
            bodyweight: "Explosive Arm Patterns (Power)"
          },
          'preseason': {
            full: "Battle Ropes (Alactic Intervals)",
            commercial: "Competition Battle Ropes (Peak)",
            minimal: "Max Effort Band Waves",
            bodyweight: "Maximum Speed Arm Patterns"
          },
          'inseason': {
            full: "Battle Ropes (Active Recovery)",
            commercial: "Light Battle Ropes (Recovery)",
            minimal: "Easy Band Waves (Active Recovery)",
            bodyweight: "Gentle Arm Circles (Movement)"
          }
        },
        
        variations: [
          "Alternating Waves",
          "Simultaneous Waves",
          "Spirals",
          "Slams"
        ],
        features: ["upper-body", "cardio"],
        requires: ["battle-ropes"],
        coachingCues: [
          "Keep core tight",
          "Use whole body", 
          "Maintain rhythm",
          "Don't let ropes touch"
        ],
        athleticCarryover: "Builds upper body conditioning and core stability",
        indicator: { isIndicator: false }
      },
    
      // SIMPLE EQUIPMENT MAPPING - Basic cardio equipment substitutions
      
      treadmillRunning: {
        name: "Treadmill Running",
        classification: "conditioning",
        effort: "Conditioning",
        category: "conditioning",
        movementPattern: "running",
        warmupProtocol: "cardio-warmup",
        
        // Simple equipment substitution hierarchy
        equipmentMap: {
          full: "Treadmill Running",
          commercial: "Treadmill or Track Running",
          minimal: "Outdoor Running", 
          bodyweight: "Running in Place or Outdoor Running"
        },
        
        variations: [
          "Steady-State Running",
          "Interval Running",
          "Hill Running",
          "Tempo Running"
        ],
        features: ["aerobic"],
        requires: [],
        coachingCues: [
          "Land on midfoot",
          "Quick cadence",
          "Relaxed shoulders",
          "Controlled breathing"
        ],
        athleticCarryover: "Builds aerobic base and running economy",
        indicator: { isIndicator: false }
      },
    
      stationaryBike: {
        name: "Stationary Bike",
        classification: "conditioning", 
        effort: "Conditioning",
        category: "conditioning",
        movementPattern: "cycling",
        warmupProtocol: "cardio-warmup",
        
        // Simple equipment mapping
        equipmentMap: {
          full: "Stationary Bike or Assault Bike",
          commercial: "Stationary Bike",
          minimal: "Outdoor Cycling",
          bodyweight: "High Knees or Mountain Climbers"
        },
        
        variations: [
          "Steady-State Cycling",
          "HIIT Cycling",
          "Assault Bike Intervals",
          "Spin Class Style"
        ],
        features: ["low-impact", "aerobic"],
        requires: [],
        coachingCues: [
          "Adjust seat height properly",
          "Use both legs evenly",
          "Maintain cadence",
          "Keep upper body relaxed"
        ],
        athleticCarryover: "Low-impact cardiovascular conditioning",
        indicator: { isIndicator: false }
      },
    
      rowing: {
        name: "Rowing",
        classification: "conditioning",
        effort: "Conditioning", 
        category: "conditioning",
        movementPattern: "rowing",
        warmupProtocol: "total-body-warmup",
        
        // Simple equipment mapping
        equipmentMap: {
          full: "Rowing Machine (Concept2)",
          commercial: "Rowing Machine",
          minimal: "Resistance Band Rowing (High Rep)",
          bodyweight: "Bent-Over Row Pattern (High Rep)"
        },
        
        variations: [
          "Steady-State Rowing",
          "Rowing Intervals", 
          "Sprint Rows",
          "Long Distance Rows"
        ],
        features: ["total-body", "low-impact"],
        requires: [],
        coachingCues: [
          "Legs, back, then arms",
          "Keep back straight",
          "Drive through heels",
          "Full extension on drive"
        ],
        athleticCarryover: "Total-body cardiovascular and strength endurance",
        indicator: { isIndicator: false }
      },
    
      elliptical: {
        name: "Elliptical",
        classification: "conditioning",
        effort: "Conditioning",
        category: "conditioning",
        movementPattern: "elliptical",
        warmupProtocol: "cardio-warmup",
        
        // Simple equipment mapping  
        equipmentMap: {
          full: "Elliptical Machine",
          commercial: "Elliptical Machine",
          minimal: "Cross-Country Skiing Motion (bodyweight)",
          bodyweight: "Running with Arm Swings"
        },
        
        variations: [
          "Forward Elliptical",
          "Reverse Elliptical",
          "High Resistance", 
          "Interval Training"
        ],
        features: ["low-impact", "total-body"],
        requires: [],
        coachingCues: [
          "Use full range of motion",
          "Engage upper body",
          "Keep feet flat on pedals",
          "Maintain upright posture"
        ],
        athleticCarryover: "Low-impact total-body conditioning",
        indicator: { isIndicator: false }
      },
    
      stairClimber: {
        name: "Stair Climber",
        classification: "conditioning",
        effort: "Conditioning",
        category: "conditioning",
        movementPattern: "stair-climbing",
        warmupProtocol: "cardio-warmup",
        
        // Simple equipment mapping
        equipmentMap: {
          full: "Stair Climber Machine", 
          commercial: "Stair Climber or Step Mill",
          minimal: "Actual Stairs or Step-ups",
          bodyweight: "Step-ups on Platform (High Rep)"
        },
        
        variations: [
          "Steady Climbing",
          "Interval Climbing",
          "Side Steps",
          "Sprint Climbing"
        ],
        features: ["lower-body", "high-intensity"],
        requires: [],
        coachingCues: [
          "Full range of motion",
          "Don't lean on handles", 
          "Drive through whole foot",
          "Maintain rhythm"
        ],
        athleticCarryover: "Lower body power endurance",
        indicator: { isIndicator: false }
      },
    
      farmersWalk: {
        name: "Farmer's Walk",
        classification: "conditioning",
        effort: "Conditioning",
        category: "conditioning", 
        movementPattern: "loaded-carry",
        warmupProtocol: "carry-prep",
        
        // Simple equipment mapping
        equipmentMap: {
          full: "Farmer's Walk Handles or Heavy DBs",
          commercial: "Heavy Dumbbells",
          minimal: "Any Heavy Objects (DBs, KBs, bags)",
          bodyweight: "Bear Crawl or Crab Walk"
        },
        
        variations: [
          "Traditional Farmer's Walk",
          "Single-Arm Carry",
          "Front-Loaded Carry",
          "Overhead Carry"
        ],
        features: ["grip", "total-body", "functional"],
        requires: [],
        coachingCues: [
          "Keep shoulders back",
          "Walk tall",
          "Don't let weights touch legs", 
          "Breathe normally"
        ],
        athleticCarryover: "Builds grip strength and total-body stability",
        indicator: { isIndicator: false }
      },
    
      circuitTraining: {
        name: "Circuit Training",
        classification: "conditioning",
        effort: "Conditioning",
        category: "conditioning",
        movementPattern: "multi-station", 
        warmupProtocol: "circuit-prep",
        
        // Simple equipment mapping
        equipmentMap: {
          full: "Multi-Station Circuit (various equipment)",
          commercial: "Gym Circuit (machines/free weights)",
          minimal: "Minimal Equipment Circuit (DBs/bands)",
          bodyweight: "Bodyweight Circuit Training"
        },
        
        variations: [
          "Strength Circuit",
          "Cardio Circuit", 
          "Mixed Modal Circuit",
          "Time-Based Circuit"
        ],
        features: ["versatile", "time-efficient"],
        requires: [],
        coachingCues: [
          "Maintain intensity throughout",
          "Focus on movement quality",
          "Control rest periods",
          "Stay hydrated"
        ],
        athleticCarryover: "Builds work capacity and movement variety",
        indicator: { isIndicator: false }
      },
    
      burpees: {
        name: "Burpees",
        classification: "conditioning",
        effort: "Conditioning",
        category: "conditioning",
        movementPattern: "total-body-conditioning",
        warmupProtocol: "bodyweight-prep",
        
        // Minimal equipment variation since it's primarily bodyweight
        equipmentMap: {
          full: "Burpees (various surfaces)",
          commercial: "Standard Burpees",
          minimal: "Burpees (any space)",
          bodyweight: "Standard Burpees"
        },
        
        variations: [
          "Standard Burpees", 
          "Burpee Box Jumps",
          "Burpee Pull-ups",
          "Half Burpees (no push-up)"
        ],
        features: ["bodyweight", "total-body", "high-intensity"],
        requires: [],
        coachingCues: [
          "Full range of motion",
          "Jump feet back together",
          "Complete push-up",
          "Jump with arms overhead"
        ],
        athleticCarryover: "Total-body conditioning and mental toughness",
        indicator: { isIndicator: false }
      },
    
      mountainClimbers: {
        name: "Mountain Climbers",
        classification: "conditioning", 
        effort: "Conditioning",
        category: "conditioning",
        movementPattern: "core-conditioning",
        warmupProtocol: "core-prep",
        
        // Minimal equipment variation - primarily bodyweight
        equipmentMap: {
          full: "Mountain Climbers (various surfaces)",
          commercial: "Standard Mountain Climbers",
          minimal: "Mountain Climbers (any space)",
          bodyweight: "Standard Mountain Climbers"
        },
        
        variations: [
          "Standard Mountain Climbers",
          "Cross-Body Mountain Climbers",
          "Slow Mountain Climbers",
          "Mountain Climber Push-ups"
        ],
        features: ["bodyweight", "core", "cardio"],
        requires: [],
        coachingCues: [
          "Keep plank position",
          "Drive knees to chest",
          "Keep hips level",
          "Maintain rhythm"
        ],
        athleticCarryover: "Core stability and cardiovascular conditioning",
        indicator: { isIndicator: false }
      },
    
      jumpingJacks: {
        name: "Jumping Jacks",
        classification: "conditioning",
        effort: "Conditioning",
        category: "conditioning",
        movementPattern: "total-body-coordination",
        warmupProtocol: "dynamic-warmup",
        
        // Purely bodyweight - minimal equipment variation
        equipmentMap: {
          full: "Jumping Jacks",
          commercial: "Jumping Jacks", 
          minimal: "Jumping Jacks",
          bodyweight: "Jumping Jacks"
        },
        
        variations: [
          "Standard Jumping Jacks",
          "Star Jumps",
          "Seal Jacks",
          "Cross Jacks"
        ],
        features: ["bodyweight", "coordination", "warm-up"],
        requires: [],
        coachingCues: [
          "Land softly",
          "Full range of motion",
          "Coordinate arms and legs", 
          "Maintain rhythm"
        ],
        athleticCarryover: "Coordination and light cardiovascular conditioning",
        indicator: { isIndicator: false }
      }
    };
    
    if (typeof loadExerciseModule === 'function') {
        loadExerciseModule('conditioning', conditioning);
    } else {
        console.error('loadExerciseModule function not available when loading conditioning');
    }
})();
