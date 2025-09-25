// exercises/assistanceLower.js - Assistance Lower Body Exercises with Selective Phase-Specific Equipment Mapping

export const assistanceLower = {
  // HIGH PHASE SPECIFICITY - These exercises have significant variation in focus/execution across phases
  
  bulgarianSplitSquat: {
    name: "Bulgarian Split Squat",
    classification: "assistance",
    effort: "RE",
    category: "assistance",
    movementPattern: "unilateral-squat",
    warmupProtocol: "unilateral-progression",
    
    equipmentMap: {
      'early-offseason': {
        full: "Bulgarian Split Squat (Volume Focus)",
        commercial: "Bulgarian Split Squat (Higher Volume)",
        minimal: "Rear-Foot-Elevated Split Squat (Form)",
        bodyweight: "Split Squats (Movement Learning)"
      },
      'mid-offseason': {
        full: "Weighted Bulgarian Split Squat (Strength)",
        commercial: "Heavy DB Bulgarian Split Squat",
        minimal: "Heavy DB Split Squat (Max Load)",
        bodyweight: "Jump Split Squats (Advanced)"
      },
      'preseason': {
        full: "Bulgarian Split Squat (Quality/Explosive)",
        commercial: "DB Bulgarian Split Squat (Controlled)",
        minimal: "Split Squat (Perfect Form)",
        bodyweight: "Explosive Split Squats"
      },
      'inseason': {
        full: "Bulgarian Split Squat (Maintenance)",
        commercial: "DB Bulgarian Split Squat (Consistent)",
        minimal: "Split Squat (Quality)",
        bodyweight: "Split Squats (Injury Prevention)"
      }
    },
    
    variations: [
      "Rear-Foot-Elevated Split Squat",
      "Bulgarian Split Squat with DBs",
      "Deficit Bulgarian Split Squat",
      "Jump Split Squats"
    ],
    features: ["unilateral", "balance"],
    requires: [],
    coachingCues: [
      "Most weight on front leg",
      "Straight up and down",
      "Don't push off back foot",
      "Control the descent"
    ],
    athleticCarryover: "Builds unilateral leg strength and addresses imbalances",
    indicator: { isIndicator: false }
  },

  walkingLunges: {
    name: "Walking Lunges",
    classification: "assistance",
    effort: "RE",
    category: "assistance",
    movementPattern: "unilateral-lunge",
    warmupProtocol: "unilateral-progression",
    
    equipmentMap: {
      'early-offseason': {
        full: "Walking Lunges (Volume Focus)",
        commercial: "Walking Lunges (Higher Volume)",
        minimal: "DB Walking Lunges (Form Development)",
        bodyweight: "Bodyweight Walking Lunges (Pattern)"
      },
      'mid-offseason': {
        full: "Heavy Walking Lunges (Strength)",
        commercial: "Heavy DB Walking Lunges",
        minimal: "Heavy DB Walking Lunges (Max Load)",
        bodyweight: "Jump Lunges (Power)"
      },
      'preseason': {
        full: "Walking Lunges (Athletic/Dynamic)",
        commercial: "DB Walking Lunges (Quality)",
        minimal: "Walking Lunges (Form Perfect)",
        bodyweight: "Dynamic Lunges (Sport-Specific)"
      },
      'inseason': {
        full: "Walking Lunges (Maintenance)",
        commercial: "DB Walking Lunges (Consistent)",
        minimal: "Walking Lunges (Quality)",
        bodyweight: "Lunge Pattern (Movement Quality)"
      }
    },
    
    variations: [
      "Forward Walking Lunges",
      "Reverse Walking Lunges",
      "Lateral Walking Lunges",
      "Jump Lunges"
    ],
    features: ["unilateral", "dynamic"],
    requires: [],
    coachingCues: [
      "Step out into lunge",
      "Both knees at 90 degrees",
      "Keep torso upright",
      "Push through front heel"
    ],
    athleticCarryover: "Develops dynamic unilateral strength and movement patterns",
    indicator: { isIndicator: false }
  },

  stepUps: {
    name: "Step-ups",
    classification: "assistance", 
    effort: "RE",
    category: "assistance",
    movementPattern: "unilateral-step",
    warmupProtocol: "step-progression",
    
    equipmentMap: {
      'early-offseason': {
        full: "Step-ups (Volume Focus)",
        commercial: "Step-ups (Higher Volume)",
        minimal: "Step-ups on Available Platform (Form)",
        bodyweight: "Bodyweight Step-ups (Pattern Learning)"
      },
      'mid-offseason': {
        full: "Weighted Step-ups (Strength)",
        commercial: "Heavy DB Step-ups",
        minimal: "Heavy DB Step-ups (Max Load)",
        bodyweight: "Single-Leg Step-ups (Advanced)"
      },
      'preseason': {
        full: "Step-ups (Explosive/Athletic)",
        commercial: "DB Step-ups (Quality)",
        minimal: "Step-ups (Perfect Execution)",
        bodyweight: "Explosive Step-ups (Power)"
      },
      'inseason': {
        full: "Step-ups (Maintenance)",
        commercial: "DB Step-ups (Consistent)",
        minimal: "Step-ups (Quality Movement)",
        bodyweight: "Step-ups (Functional Pattern)"
      }
    },
    
    variations: [
      "High Box Step-ups",
      "Lateral Step-ups",
      "Step-up with Knee Drive",
      "Explosive Step-ups"
    ],
    features: ["unilateral", "functional"],
    requires: [],
    coachingCues: [
      "Step up with one leg only",
      "Don't push off bottom leg",
      "Control the descent",
      "Full hip extension at top"
    ],
    athleticCarryover: "Builds unilateral strength and mimics athletic movements",
    indicator: { isIndicator: false }
  },

  gluteHamRaise: {
    name: "Glute Ham Raise",
    classification: "assistance",
    effort: "RE", 
    category: "assistance",
    movementPattern: "posterior-chain",
    warmupProtocol: "posterior-progression",
    
    equipmentMap: {
      'early-offseason': {
        full: "Glute Ham Raise (Volume Focus)",
        commercial: "GHR or Nordic Curls (Volume)",
        minimal: "Single-Leg RDL (Pattern Learning)",
        bodyweight: "Nordic Curl Negatives (Learning)"
      },
      'mid-offseason': {
        full: "Weighted Glute Ham Raise (Strength)",
        commercial: "Heavy GHR or Nordics",
        minimal: "Heavy Single-Leg RDL",
        bodyweight: "Full Nordic Curls (Advanced)"
      },
      'preseason': {
        full: "GHR (Hamstring Health/Performance)",
        commercial: "GHR (Quality Execution)",
        minimal: "Single-Leg RDL (Perfect Form)",
        bodyweight: "Nordic Curls (Controlled)"
      },
      'inseason': {
        full: "GHR (Injury Prevention)",
        commercial: "GHR (Maintenance)",
        minimal: "Single-Leg RDL (Consistent)",
        bodyweight: "Nordic Curl Negatives (Health)"
      }
    },
    
    variations: [
      "Glute Ham Raise",
      "Nordic Hamstring Curls",
      "Russian Ham Curls", 
      "Stability Ball Ham Curls"
    ],
    features: ["posterior-chain", "eccentric"],
    requires: [],
    coachingCues: [
      "Initiate with hamstrings",
      "Keep straight line from knees to head",
      "Control the eccentric",
      "Don't rely on glutes only"
    ],
    athleticCarryover: "Critical for hamstring strength and injury prevention",
    indicator: { isIndicator: false }
  },

  singleLegRDL: {
    name: "Single-Leg RDL",
    classification: "assistance",
    effort: "RE",
    category: "assistance",
    movementPattern: "unilateral-hinge",
    warmupProtocol: "balance-progression",
    
    equipmentMap: {
      'early-offseason': {
        full: "Single-Leg RDL (Balance/Pattern Focus)",
        commercial: "Single-Leg RDL (Form Development)",
        minimal: "DB Single-Leg RDL (Learning)",
        bodyweight: "Bodyweight Single-Leg RDL (Pattern)"
      },
      'mid-offseason': {
        full: "Weighted Single-Leg RDL (Strength)",
        commercial: "Heavy DB Single-Leg RDL",
        minimal: "Heavy Single-Leg RDL (Max Load)",
        bodyweight: "Advanced Single-Leg RDL Variations"
      },
      'preseason': {
        full: "Single-Leg RDL (Athletic/Stability)",
        commercial: "DB Single-Leg RDL (Quality)",
        minimal: "Single-Leg RDL (Perfect Balance)",
        bodyweight: "Dynamic Single-Leg RDL"
      },
      'inseason': {
        full: "Single-Leg RDL (Maintenance/Health)",
        commercial: "Single-Leg RDL (Consistent)",
        minimal: "Single-Leg RDL (Quality)",
        bodyweight: "Single-Leg RDL (Injury Prevention)"
      }
    },
    
    variations: [
      "Bodyweight Single-Leg RDL",
      "DB Single-Leg RDL",
      "KB Single-Leg RDL",
      "Single-Leg RDL to Row"
    ],
    features: ["unilateral", "balance", "posterior-chain"],
    requires: [],
    coachingCues: [
      "Hinge at hip, not knee",
      "Keep back straight",
      "Reach back with non-standing leg",
      "Feel stretch in hamstring"
    ],
    athleticCarryover: "Builds unilateral hip hinge pattern and balance",
    indicator: { isIndicator: false }
  },

  lateralLunges: {
    name: "Lateral Lunges",
    classification: "assistance",
    effort: "RE",
    category: "assistance", 
    movementPattern: "lateral-lunge",
    warmupProtocol: "lateral-progression",
    
    equipmentMap: {
      'early-offseason': {
        full: "Lateral Lunges (Mobility/Volume Focus)",
        commercial: "Lateral Lunges (Movement Quality)",
        minimal: "DB Lateral Lunges (Pattern Learning)",
        bodyweight: "Bodyweight Lateral Lunges (Mobility)"
      },
      'mid-offseason': {
        full: "Weighted Lateral Lunges (Strength)",
        commercial: "Heavy DB Lateral Lunges",
        minimal: "Heavy DB Lateral Lunges",
        bodyweight: "Jump Lateral Lunges (Power)"
      },
      'preseason': {
        full: "Lateral Lunges (Athletic/Dynamic)",
        commercial: "DB Lateral Lunges (Sport-Specific)",
        minimal: "Lateral Lunges (Perfect Form)",
        bodyweight: "Dynamic Lateral Movements"
      },
      'inseason': {
        full: "Lateral Lunges (Maintenance/Mobility)",
        commercial: "Lateral Lunges (Consistent)",
        minimal: "Lateral Lunges (Quality)",
        bodyweight: "Lateral Lunges (Movement Health)"
      }
    },
    
    variations: [
      "Bodyweight Lateral Lunges",
      "DB Lateral Lunges",
      "Lateral Lunge to Curtsy",
      "Jump Lateral Lunges"
    ],
    features: ["lateral-movement", "mobility"],
    requires: [],
    coachingCues: [
      "Step wide to the side",
      "Sit back into hip",
      "Keep other leg straight",
      "Push off to return to center"
    ],
    athleticCarryover: "Develops lateral movement patterns for sports",
    indicator: { isIndicator: false }
  },

  // MODERATE PHASE SPECIFICITY - Some variation but consistent core role

  romanianDeadlift: {
    name: "Romanian Deadlift", 
    classification: "assistance",
    effort: "RE",
    category: "assistance",
    movementPattern: "hip-hinge",
    warmupProtocol: "hinge-progression",
    
    equipmentMap: {
      'early-offseason': {
        full: "Romanian Deadlift (Volume/Form Focus)",
        commercial: "RDL (Higher Volume)",
        minimal: "DB Romanian Deadlift (Pattern)",
        bodyweight: "Good Morning (Learning Hinge)"
      },
      'mid-offseason': {
        full: "Heavy Romanian Deadlift (Strength)",
        commercial: "Heavy RDL",
        minimal: "Heavy DB RDL",
        bodyweight: "Single-Leg RDL (Advanced)"
      },
      'preseason': {
        full: "Romanian Deadlift (Quality)",
        commercial: "RDL (Controlled)",
        minimal: "DB RDL (Perfect Form)",
        bodyweight: "Good Morning (Dynamic)"
      },
      'inseason': {
        full: "Romanian Deadlift (Maintenance)",
        commercial: "RDL (Consistent)",
        minimal: "DB RDL (Quality)",
        bodyweight: "Good Morning (Health)"
      }
    },
    
    variations: [
      "Barbell Romanian Deadlift",
      "Dumbbell Romanian Deadlift",
      "Single-Leg Romanian Deadlift",
      "Deficit Romanian Deadlift"
    ],
    features: ["posterior-chain"],
    requires: [],
    coachingCues: [
      "Hinge at hips, not knees",
      "Keep bar close to body",
      "Feel stretch in hamstrings",
      "Drive hips forward to return"
    ],
    athleticCarryover: "Builds posterior chain strength and hip hinge pattern",
    indicator: { isIndicator: false }
  },

  // LOW PHASE SPECIFICITY - Consistent role across phases, simple equipment mapping

  calfRaises: {
    name: "Calf Raises",
    classification: "assistance",
    effort: "RE",
    category: "assistance",
    movementPattern: "plantar-flexion",
    warmupProtocol: "light-calf",
    
    // Simple equipment map - calf development role is consistent
    equipmentMap: {
      full: "Standing Calf Raises (machine or barbell)",
      commercial: "Calf Raise Machine or DB",
      minimal: "DB Calf Raises or Single-Leg",
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
    athleticCarryover: "Builds calf strength for jumping and running",
    indicator: { isIndicator: false }
  },

  legCurls: {
    name: "Leg Curls",
    classification: "assistance",
    effort: "RE",
    category: "assistance",
    movementPattern: "knee-flexion",
    warmupProtocol: "light-hamstring",
    
    // Simple equipment map - hamstring isolation role is consistent
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
    athleticCarryover: "Builds hamstring strength and mass",
    indicator: { isIndicator: false }
  },

  legExtensions: {
    name: "Leg Extensions",
    classification: "assistance",
    effort: "RE", 
    category: "assistance",
    movementPattern: "knee-extension",
    warmupProtocol: "light-quad",
    
    // Simple equipment map - quad isolation role is consistent
    equipmentMap: {
      full: "Leg Extension Machine",
      commercial: "Leg Extension Machine",
      minimal: "Single-Leg Bodyweight Extensions",
      bodyweight: "Wall Sit with Extensions"
    },
    
    variations: [
      "Bilateral Leg Extensions",
      "Single-Leg Extensions",
      "Negative-Emphasis Extensions",
      "Partial Range Extensions"
    ],
    features: ["isolation"],
    requires: [],
    coachingCues: [
      "Full extension at top",
      "Squeeze quads hard",
      "Control the negative",
      "Don't swing the weight"
    ],
    athleticCarryover: "Builds quad strength and knee stability",
    indicator: { isIndicator: false }
  },

  hyperextensions: {
    name: "Hyperextensions",
    classification: "assistance",
    effort: "RE",
    category: "assistance", 
    movementPattern: "spinal-extension",
    warmupProtocol: "light-back",
    
    // Simple equipment map - lower back health role is consistent
    equipmentMap: {
      full: "45-degree Hyperextensions",
      commercial: "Hyperextension Bench or Machine",
      minimal: "Stability Ball Hyperextensions",
      bodyweight: "Superman Holds"
    },
    
    variations: [
      "45-degree Hyperextensions",
      "90-degree Back Extensions",
      "Weighted Hyperextensions", 
      "Superman/Bird Dog"
    ],
    features: ["spinal-health"],
    requires: [],
    coachingCues: [
      "Neutral spine throughout",
      "Don't hyperextend excessively",
      "Control both directions",
      "Feel it in lower back"
    ],
    athleticCarryover: "Builds lower back strength and spinal health",
    indicator: { isIndicator: false }
  },

  hipThrusts: {
    name: "Hip Thrusts",
    classification: "assistance",
    effort: "RE",
    category: "assistance",
    movementPattern: "hip-extension",
    warmupProtocol: "glute-activation",
    
    // Simple equipment map - glute development role is consistent
    equipmentMap: {
      full: "Barbell Hip Thrusts",
      commercial: "Barbell or DB Hip Thrusts", 
      minimal: "Single-Leg Hip Thrusts",
      bodyweight: "Bodyweight Hip Thrusts"
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
    athleticCarryover: "Builds glute strength for power and injury prevention",
    indicator: { isIndicator: false }
  }
};
