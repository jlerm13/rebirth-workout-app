// exercises/maxEffortUpper.js - Max-Effort Upper Body Exercises with Phase-Specific Equipment Mapping

export const maxEffortUpper = {
  benchPress: {
    name: "Bench Press",
    classification: "primary",
    effort: "ME",
    category: "max-effort",
    movementPattern: "horizontal-push",
    warmupProtocol: "heavy-barbell",
    
    equipmentMap: {
      'early-offseason': {
        full: "Barbell Bench Press (Volume Focus)",
        commercial: "DB Bench Press (Higher Volume)",
        minimal: "DB Floor Press (Form Development)",
        bodyweight: "Push-ups (Volume Building)"
      },
      'mid-offseason': {
        full: "Barbell Bench Press (Strength Focus)",
        commercial: "Heavy DB Bench Press",
        minimal: "Single-Arm DB Floor Press",
        bodyweight: "Weighted Push-ups (Heavy)"
      },
      'preseason': {
        full: "Barbell Bench Press (Speed Focus)",
        commercial: "DB Bench Press (Explosive Tempo)",
        minimal: "Explosive Push-up Variations",
        bodyweight: "Clap Push-ups"
      },
      'inseason': {
        full: "Barbell Bench Press (Maintenance)",
        commercial: "DB Bench Press (Moderate)",
        minimal: "Standard Push-ups (Quality)",
        bodyweight: "Push-ups (Consistent Form)"
      }
    },
    
    variations: [
      "Competition Bench Press",
      "Wide-Grip Bench Press",
      "Touch-and-Go Bench Press",
      "Paused Bench Press (2-3 second pause)"
    ],
    features: [],
    requires: [],
    coachingCues: [
      "Maintain tight upper back throughout",
      "Drive feet into floor",
      "Control eccentric, explosive concentric",
      "Touch chest at nipple line"
    ],
    athleticCarryover: "Develops pushing power for blocking, checking, and grappling",
    indicator: { isIndicator: true, type: "absolute" }
  },

  floorPress: {
    name: "Floor Press",
    classification: "primary",
    effort: "ME",
    category: "max-effort",
    movementPattern: "horizontal-push",
    warmupProtocol: "heavy-barbell",
    
    equipmentMap: {
      'early-offseason': {
        full: "Barbell Floor Press (Volume Focus)",
        commercial: "DB Floor Press (Form Development)",
        minimal: "DB Floor Press (Higher Volume)",
        bodyweight: "Push-ups with Pause (Form)"
      },
      'mid-offseason': {
        full: "Barbell Floor Press (Strength Focus)",
        commercial: "Heavy DB Floor Press",
        minimal: "Single-Arm DB Floor Press",
        bodyweight: "Weighted Push-ups with Pause"
      },
      'preseason': {
        full: "Barbell Floor Press (Explosive)",
        commercial: "DB Floor Press (Speed)",
        minimal: "Explosive Floor Push-ups",
        bodyweight: "Clap Push-ups from Floor"
      },
      'inseason': {
        full: "Barbell Floor Press (Maintenance)",
        commercial: "DB Floor Press (Moderate)",
        minimal: "Standard Floor Push-ups",
        bodyweight: "Controlled Push-ups with Pause"
      }
    },
    
    variations: [
      "Barbell Floor Press",
      "DB Floor Press (neutral grip)",
      "Floor Press with Chains",
      "Close-Grip Floor Press"
    ],
    features: ["partial-ROM"],
    requires: [],
    coachingCues: [
      "Upper arms touch floor, brief pause",
      "Eliminate leg drive completely",
      "Focus on lockout strength",
      "Keep core tight throughout"
    ],
    athleticCarryover: "Builds lockout strength and teaches tension without momentum",
    indicator: { isIndicator: false }
  },

  boardPress: {
    name: "Board Press",
    classification: "primary",
    effort: "ME",
    category: "max-effort",
    movementPattern: "horizontal-push",
    warmupProtocol: "heavy-barbell",
    
    equipmentMap: {
      'early-offseason': {
        full: "3-Board Press (Volume Focus)",
        commercial: "Pin Press Mid-Range (Volume)",
        minimal: "Elevated Push-ups (Form)",
        bodyweight: "Partial ROM Push-ups (Volume)"
      },
      'mid-offseason': {
        full: "2-Board Press (Strength Focus)",
        commercial: "Pin Press Lower (Heavy)",
        minimal: "Single-Arm Elevated Push-ups",
        bodyweight: "Weighted Partial Push-ups"
      },
      'preseason': {
        full: "Board Press (Explosive)",
        commercial: "Pin Press (Speed Focus)",
        minimal: "Explosive Elevated Push-ups",
        bodyweight: "Clap Push-ups from Elevation"
      },
      'inseason': {
        full: "Board Press (Maintenance)",
        commercial: "Pin Press (Moderate)",
        minimal: "Standard Elevated Push-ups",
        bodyweight: "Consistent Partial Push-ups"
      }
    },
    
    variations: [
      "3-Board Press",
      "2-Board Press",
      "4-Board Press",
      "1-Board Press"
    ],
    features: ["partial-ROM", "boards"],
    requires: ["boards"],
    coachingCues: [
      "Maintain same form as full bench",
      "Control descent to boards",
      "Explosive drive off boards",
      "Progress by removing boards over time"
    ],
    athleticCarryover: "Strengthens specific sticking points in pressing pattern",
    indicator: { isIndicator: false }
  },

  inclineBench: {
    name: "Incline Bench Press",
    classification: "primary",
    effort: "ME",
    category: "max-effort",
    movementPattern: "incline-push",
    warmupProtocol: "heavy-barbell",
    
    equipmentMap: {
      'early-offseason': {
        full: "Barbell Incline Press (Volume)",
        commercial: "DB Incline Press (Higher Volume)",
        minimal: "Incline Push-ups (Form Development)",
        bodyweight: "Pike Push-ups (Volume Building)"
      },
      'mid-offseason': {
        full: "Barbell Incline Press (Strength)",
        commercial: "Heavy DB Incline Press",
        minimal: "Single-Arm Incline Push-ups",
        bodyweight: "Weighted Pike Push-ups"
      },
      'preseason': {
        full: "Barbell Incline Press (Speed)",
        commercial: "DB Incline Press (Explosive)",
        minimal: "Explosive Incline Push-ups",
        bodyweight: "Handstand Push-ups (if able)"
      },
      'inseason': {
        full: "Barbell Incline Press (Maintenance)",
        commercial: "DB Incline Press (Moderate)",
        minimal: "Standard Incline Push-ups",
        bodyweight: "Pike Push-ups (Consistent)"
      }
    },
    
    variations: [
      "45-Degree Incline Press",
      "30-Degree Incline Press",
      "60-Degree Incline Press",
      "Incline Press with Bands"
    ],
    features: ["incline"],
    requires: [],
    coachingCues: [
      "Set bench between 30-45 degrees",
      "Bar path slightly back toward face",
      "Keep shoulders down and back",
      "Don't let elbows flare excessively"
    ],
    athleticCarryover: "Develops upper chest and shoulder strength for overhead movements",
    indicator: { isIndicator: false }
  },

  closeGripBench: {
    name: "Close-Grip Bench Press",
    classification: "primary",
    effort: "ME",
    category: "max-effort",
    movementPattern: "horizontal-push",
    warmupProtocol: "heavy-barbell",
    
    equipmentMap: {
      'early-offseason': {
        full: "Close-Grip Barbell Press (Volume)",
        commercial: "Close-Grip DB Press (Higher Volume)",
        minimal: "Diamond Push-ups (Form Development)",
        bodyweight: "Triangle Push-ups (Volume)"
      },
      'mid-offseason': {
        full: "Close-Grip Barbell Press (Strength)",
        commercial: "Heavy Close-Grip DB Press",
        minimal: "Single-Arm Diamond Push-ups",
        bodyweight: "Weighted Diamond Push-ups"
      },
      'preseason': {
        full: "Close-Grip Barbell Press (Speed)",
        commercial: "Close-Grip DB Press (Explosive)",
        minimal: "Explosive Diamond Push-ups",
        bodyweight: "Clap Diamond Push-ups"
      },
      'inseason': {
        full: "Close-Grip Barbell Press (Maintenance)",
        commercial: "Close-Grip DB Press (Moderate)",
        minimal: "Standard Diamond Push-ups",
        bodyweight: "Consistent Triangle Push-ups"
      }
    },
    
    variations: [
      "Index Finger on Smooth",
      "Shoulder-Width Grip",
      "Close-Grip with Chains",
      "Close-Grip Incline Press"
    ],
    features: ["triceps-bias"],
    requires: [],
    coachingCues: [
      "Grip just inside shoulder width",
      "Keep elbows tucked to sides",
      "Touch lower on chest than regular bench",
      "Focus on tricep engagement"
    ],
    athleticCarryover: "Builds tricep-dominant pushing for sports-specific arm action",
    indicator: { isIndicator: false }
  },

  overheadPress: {
    name: "Overhead Press",
    classification: "primary",
    effort: "ME",
    category: "max-effort",
    movementPattern: "vertical-push",
    warmupProtocol: "moderate-barbell",
    
    equipmentMap: {
      'early-offseason': {
        full: "Barbell Military Press (Volume)",
        commercial: "DB Overhead Press (Higher Volume)",
        minimal: "Single DB Press (Form Development)",
        bodyweight: "Pike Push-ups (Volume Building)"
      },
      'mid-offseason': {
        full: "Barbell Military Press (Strength)",
        commercial: "Heavy DB Overhead Press",
        minimal: "Single-Arm DB Press (Heavy)",
        bodyweight: "Handstand Push-ups (Advanced)"
      },
      'preseason': {
        full: "Push Press (Explosive)",
        commercial: "DB Push Press (Speed)",
        minimal: "Explosive Pike Push-ups",
        bodyweight: "Handstand Push-ups (Speed)"
      },
      'inseason': {
        full: "Military Press (Maintenance)",
        commercial: "DB Overhead Press (Moderate)",
        minimal: "Standard Pike Push-ups",
        bodyweight: "Wall Handstand Push-ups"
      }
    },
    
    variations: [
      "Military Press (strict)",
      "Push Press",
      "Behind-the-Neck Press",
      "Z-Press (seated, no back support)"
    ],
    features: [],
    requires: [],
    coachingCues: [
      "Squeeze glutes and core throughout",
      "Press slightly back, not straight up",
      "Full lockout with biceps by ears",
      "Control the negative portion"
    ],
    athleticCarryover: "Essential for overhead athletes and contact sports",
    indicator: { isIndicator: false }
  },

  weightedChins: {
    name: "Weighted Chin-ups",
    classification: "primary",
    effort: "ME",
    category: "max-effort",
    movementPattern: "vertical-pull",
    warmupProtocol: "bodyweight-progression",
    
    equipmentMap: {
      'early-offseason': {
        full: "Weighted Chin-ups (Volume Focus)",
        commercial: "Weighted Chin-ups with DB",
        minimal: "Band-Resisted Chin-ups (Volume)",
        bodyweight: "Chin-ups (High Volume)"
      },
      'mid-offseason': {
        full: "Weighted Chin-ups (Strength Focus)",
        commercial: "Heavy Weighted Chin-ups",
        minimal: "Heavy Band-Resisted Chin-ups",
        bodyweight: "Archer Chin-ups (Single-Arm)"
      },
      'preseason': {
        full: "Weighted Chin-ups (Speed Focus)",
        commercial: "Explosive Weighted Chin-ups",
        minimal: "Explosive Band Chin-ups",
        bodyweight: "Kipping Chin-ups (Controlled)"
      },
      'inseason': {
        full: "Weighted Chin-ups (Maintenance)",
        commercial: "Moderate Weighted Chin-ups",
        minimal: "Band-Assisted Chin-ups",
        bodyweight: "Strict Chin-ups (Quality)"
      }
    },
    
    variations: [
      "Weighted Pull-ups (overhand)",
      "Weighted Chin-ups (underhand)",
      "Weighted Neutral-Grip",
      "Weighted Wide-Grip"
    ],
    features: ["relative-strength"],
    requires: [],
    coachingCues: [
      "Full hang at bottom",
      "Chin clearly over bar",
      "No kipping or swinging",
      "Control the descent"
    ],
    athleticCarryover: "Indicator exercise for relative strength and pulling power",
    indicator: { isIndicator: true, type: "relative" }
  },

  rackLockouts: {
    name: "Rack Lockouts",
    classification: "primary",
    effort: "ME",
    category: "max-effort",
    movementPattern: "horizontal-push",
    warmupProtocol: "heavy-partial",
    
    equipmentMap: {
      'early-offseason': {
        full: "Pin Press Mid-Range (Volume)",
        commercial: "Smith Machine Partial (Volume)",
        minimal: "Top-Half Push-ups (Volume)",
        bodyweight: "Wall Push-up Lockouts (Volume)"
      },
      'mid-offseason': {
        full: "Pin Press High (Strength)",
        commercial: "Smith Machine Partial (Heavy)",
        minimal: "Single-Arm Top Push-ups",
        bodyweight: "Weighted Partial Push-ups"
      },
      'preseason': {
        full: "Pin Press (Explosive)",
        commercial: "Smith Machine (Speed)",
        minimal: "Explosive Partial Push-ups",
        bodyweight: "Clap Push-ups (Partial)"
      },
      'inseason': {
        full: "Pin Press (Maintenance)",
        commercial: "Smith Machine (Moderate)",
        minimal: "Standard Partial Push-ups",
        bodyweight: "Wall Push-ups (Consistent)"
      }
    },
    
    variations: [
      "High Pin Press (4-6 inch ROM)",
      "Mid-Range Lockouts (8-10 inch)",
      "Suspended Chain Lockouts",
      "Reverse Band Lockouts"
    ],
    features: ["partial-ROM", "chains", "bands"],
    requires: ["power-rack"],
    coachingCues: [
      "Set pins at sticking point",
      "Can handle 120-140% of 1RM",
      "Focus on speed off pins",
      "Maintain full-body tension"
    ],
    athleticCarryover: "Overloads nervous system and builds confidence with heavy loads",
    indicator: { isIndicator: false }
  }
};
