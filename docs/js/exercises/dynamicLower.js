// exercises/dynamicLower.js - Dynamic Lower Body Exercises with Phase-Specific Equipment Mapping

export const dynamicLower = {
  boxJump: {
    name: "Box Jump",
    classification: "primary",
    effort: "DE",
    category: "dynamic",
    movementPattern: "explosive-jump",
    warmupProtocol: "jump-progression",
    
    equipmentMap: {
      'early-offseason': {
        full: "Box Jump 20-24\" (Landing Focus)",
        commercial: "Box Jump Available Heights (Form)",
        minimal: "Jump to Low Platform (12-18\")",
        bodyweight: "Vertical Jump (Movement Learning)"
      },
      'mid-offseason': {
        full: "Box Jump 24-36\" (Height Building)",
        commercial: "Box Jump Higher Heights (Strength)",
        minimal: "Jump to Higher Platform (18-24\")",
        bodyweight: "Max Effort Vertical Jump"
      },
      'preseason': {
        full: "Box Jump 30-42\" (Max Height)",
        commercial: "Box Jump Maximum Available",
        minimal: "Explosive Jump to Platform",
        bodyweight: "Maximum Vertical Jump"
      },
      'inseason': {
        full: "Box Jump 24-30\" (Neural Maintenance)",
        commercial: "Box Jump Moderate Height",
        minimal: "Consistent Jump to Platform",
        bodyweight: "Quality Vertical Jumps"
      }
    },
    
    variations: [
      "Standard Box Jump",
      "Seated Box Jump",
      "Box Jump with Weight Vest",
      "Single-Leg Box Jump"
    ],
    features: ["plyometric"],
    requires: ["box"],
    coachingCues: [
      "Full arm swing for momentum",
      "Land softly in athletic position",
      "Step down, don't jump down",
      "Focus on jump height, not box height"
    ],
    athleticCarryover: "Directly improves vertical jump and explosive hip extension",
    indicator: { isIndicator: true, type: "power" }
  },

  verticalJump: {
    name: "Vertical Jump",
    classification: "primary",
    effort: "DE",
    category: "dynamic",
    movementPattern: "explosive-jump",
    warmupProtocol: "jump-progression",
    
    equipmentMap: {
      'early-offseason': {
        full: "Vertical Jump (Form Focus)",
        commercial: "Vertical Jump with Reach",
        minimal: "Vertical Jump (Basic)",
        bodyweight: "Countermovement Jump (Learning)"
      },
      'mid-offseason': {
        full: "Vertical Jump (Power Building)",
        commercial: "Vertical Jump with Measurement",
        minimal: "Max Effort Vertical Jump",
        bodyweight: "Approach Jump (with steps)"
      },
      'preseason': {
        full: "Vertical Jump (Max Height Testing)",
        commercial: "Vertical Jump Maximum Effort",
        minimal: "Peak Vertical Jump Performance",
        bodyweight: "Competition-Style Vertical"
      },
      'inseason': {
        full: "Vertical Jump (Neural Maintenance)",
        commercial: "Vertical Jump Quality Reps",
        minimal: "Consistent Vertical Jumps",
        bodyweight: "Vertical Jump (Maintenance)"
      }
    },
    
    variations: [
      "Countermovement Jump",
      "Jump and Reach",
      "Non-Countermovement Jump",
      "Approach Jump (with steps)"
    ],
    features: ["plyometric"],
    requires: [],
    coachingCues: [
      "Quick dip and drive",
      "Full triple extension",
      "Reach at peak height",
      "Land in same spot you took off"
    ],
    athleticCarryover: "Key indicator exercise for lower body power",
    indicator: { isIndicator: true, type: "power" }
  },

  broadJump: {
    name: "Broad Jump",
    classification: "primary",
    effort: "DE",
    category: "dynamic",
    movementPattern: "explosive-jump",
    warmupProtocol: "jump-progression",
    
    equipmentMap: {
      'early-offseason': {
        full: "Broad Jump on Turf (Form Focus)",
        commercial: "Broad Jump (Find Space)",
        minimal: "Broad Jump (Any Surface)",
        bodyweight: "Standing Broad Jump (Learning)"
      },
      'mid-offseason': {
        full: "Broad Jump on Track (Distance Focus)",
        commercial: "Broad Jump Measured Space",
        minimal: "Broad Jump Max Effort",
        bodyweight: "3-Jump Series (consecutive)"
      },
      'preseason': {
        full: "Broad Jump Competition Style",
        commercial: "Broad Jump Maximum Distance",
        minimal: "Peak Broad Jump Performance",
        bodyweight: "Single-Leg Broad Jump"
      },
      'inseason': {
        full: "Broad Jump (Maintenance)",
        commercial: "Broad Jump Quality Reps",
        minimal: "Consistent Broad Jumps",
        bodyweight: "Broad Jump (Neural Maintenance)"
      }
    },
    
    variations: [
      "Standing Broad Jump",
      "3-Jump Series (consecutive)",
      "Broad Jump to Vertical",
      "Single-Leg Broad Jump"
    ],
    features: ["plyometric"],
    requires: [],
    coachingCues: [
      "Load hips back before jump",
      "Drive arms forward aggressively",
      "Extend fully through hips",
      "Stick the landing"
    ],
    athleticCarryover: "Develops horizontal power for sprinting and direction changes",
    indicator: { isIndicator: false }
  },

  depthJump: {
    name: "Depth Jump",
    classification: "primary",
    effort: "DE",
    category: "dynamic",
    movementPattern: "explosive-jump",
    warmupProtocol: "advanced-jump",
    
    equipmentMap: {
      'early-offseason': {
        full: "Depth Drop 12\" (Landing Only)",
        commercial: "Drop from Low Platform (Learning)",
        minimal: "Altitude Landing (8-12\")",
        bodyweight: "Controlled Landing Practice"
      },
      'mid-offseason': {
        full: "Depth Jump 18-24\" (Reactive Strength)",
        commercial: "Depth Jump Available Height",
        minimal: "Drop and Jump (12-18\")",
        bodyweight: "Repeated Jump Squats"
      },
      'preseason': {
        full: "Depth Jump 24-30\" (Max Reactive)",
        commercial: "Depth Jump Maximum Height",
        minimal: "Explosive Drop and Jump",
        bodyweight: "Advanced Reactive Jumps"
      },
      'inseason': {
        full: "Depth Jump 18-24\" (Neural Sharp)",
        commercial: "Depth Jump Moderate Height",
        minimal: "Quality Drop and Jump",
        bodyweight: "Controlled Reactive Jumps"
      }
    },
    
    variations: [
      "Depth Jump to Vertical",
      "Depth Jump to Broad",
      "Depth Drop (landing only)",
      "Depth Jump to Box"
    ],
    features: ["reactive", "advanced"],
    requires: ["box"],
    coachingCues: [
      "Advanced athletes only",
      "Minimize ground contact time",
      "Land and immediately explode up",
      "Start with lower heights"
    ],
    athleticCarryover: "Develops reactive strength and stretch-shortening cycle",
    indicator: { isIndicator: false }
  },

  hurdleJump: {
    name: "Hurdle Jump",
    classification: "primary",
    effort: "DE",
    category: "dynamic",
    movementPattern: "explosive-jump",
    warmupProtocol: "jump-progression",
    
    equipmentMap: {
      'early-offseason': {
        full: "6-12\" Hurdles (Rhythm Learning)",
        commercial: "Mini Hurdles or Cones (Form)",
        minimal: "Jump over Objects (6-10\")",
        bodyweight: "Imaginary Hurdle Jumps (Pattern)"
      },
      'mid-offseason': {
        full: "12-18\" Hurdles (Power Building)",
        commercial: "Higher Hurdles/Cones (Strength)",
        minimal: "Jump over Higher Objects",
        bodyweight: "High Knee Jumps (Advanced)"
      },
      'preseason': {
        full: "15-24\" Hurdles (Competition)",
        commercial: "Maximum Available Hurdles",
        minimal: "Explosive Object Jumps",
        bodyweight: "Maximum High Knee Jumps"
      },
      'inseason': {
        full: "12-18\" Hurdles (Maintenance)",
        commercial: "Moderate Hurdle Height",
        minimal: "Consistent Object Jumps",
        bodyweight: "Quality High Knee Patterns"
      }
    },
    
    variations: [
      "Single Hurdle Jump",
      "Continuous Hurdle Jumps",
      "Lateral Hurdle Jumps",
      "Single-Leg Hurdle Hops"
    ],
    features: ["plyometric", "reactive"],
    requires: ["hurdles"],
    coachingCues: [
      "Quick ground contacts",
      "Knees to chest on jump",
      "Land ready to jump again",
      "Maintain rhythm in series"
    ],
    athleticCarryover: "Improves jumping rhythm and repeated power output",
    indicator: { isIndicator: false }
  },

  boxSquatJump: {
    name: "Box Squat into Jump",
    classification: "primary",
    effort: "DE",
    category: "dynamic",
    movementPattern: "explosive-jump",
    warmupProtocol: "combination",
    
    equipmentMap: {
      'early-offseason': {
        full: "Box Squat to Vertical (Learning)",
        commercial: "Seated Jump from Bench (Form)",
        minimal: "Pause Squat Jump (Pattern)",
        bodyweight: "Pause Squat Jump (Basic)"
      },
      'mid-offseason': {
        full: "Box Squat to Box Jump (Power)",
        commercial: "Seated to Box Jump (Strength)",
        minimal: "Weighted Pause Jump (Heavy)",
        bodyweight: "Advanced Pause Jump"
      },
      'preseason': {
        full: "Box Squat to Max Jump (Explosive)",
        commercial: "Seated to Max Jump (Peak)",
        minimal: "Explosive Pause Jump (Max)",
        bodyweight: "Maximum Pause Jump"
      },
      'inseason': {
        full: "Box Squat to Jump (Neural)",
        commercial: "Seated Jump (Quality)",
        minimal: "Consistent Pause Jump",
        bodyweight: "Quality Pause Jump Pattern"
      }
    },
    
    variations: [
      "Bodyweight Box Squat Jump",
      "Weighted Box Squat Jump",
      "Box Squat to Broad Jump",
      "Box Squat to Sprint"
    ],
    features: ["plyometric", "static-to-dynamic"],
    requires: ["box"],
    coachingCues: [
      "Pause eliminates stretch reflex",
      "Explode from dead stop",
      "Maximum intent on each rep",
      "Full recovery between reps"
    ],
    athleticCarryover: "Builds starting strength and power from static positions",
    indicator: { isIndicator: false }
  },

  singleLegJump: {
    name: "Single-Leg Jump",
    classification: "primary",
    effort: "DE",
    category: "dynamic",
    movementPattern: "unilateral-jump",
    warmupProtocol: "unilateral-progression",
    
    equipmentMap: {
      'early-offseason': {
        full: "Single-Leg Jump (Form Learning)",
        commercial: "Single-Leg Jump Basic",
        minimal: "Single-Leg Hop (Pattern)",
        bodyweight: "Single-Leg Vertical (Learning)"
      },
      'mid-offseason': {
        full: "Single-Leg Jump Series (Strength)",
        commercial: "Single-Leg Jump Progression",
        minimal: "Single-Leg Hop Series",
        bodyweight: "Advanced Single-Leg Jump"
      },
      'preseason': {
        full: "Single-Leg Jump Max (Power)",
        commercial: "Single-Leg Jump Maximum",
        minimal: "Explosive Single-Leg Hop",
        bodyweight: "Peak Single-Leg Performance"
      },
      'inseason': {
        full: "Single-Leg Jump (Maintenance)",
        commercial: "Single-Leg Jump Quality",
        minimal: "Consistent Single-Leg Hop",
        bodyweight: "Single-Leg Jump Pattern"
      }
    },
    
    variations: [
      "Single-Leg Vertical Jump",
      "Single-Leg Broad Jump",
      "Single-Leg Lateral Jump",
      "Single-Leg Triple Jump"
    ],
    features: ["plyometric", "unilateral"],
    requires: [],
    coachingCues: [
      "Maintain balance throughout",
      "Full extension of jumping leg",
      "Control the landing",
      "Equal work both legs"
    ],
    athleticCarryover: "Builds unilateral power for sport-specific movements",
    indicator: { isIndicator: false }
  },

  reactiveBoundingBox: {
    name: "Reactive Bounding",
    classification: "primary",
    effort: "DE",
    category: "dynamic",
    movementPattern: "reactive-bound",
    warmupProtocol: "reactive-progression",
    
    equipmentMap: {
      'early-offseason': {
        full: "Basic Bounding 20-30 yards (Form)",
        commercial: "Bounding Available Space (Learning)",
        minimal: "Bounding Short Distance (Pattern)",
        bodyweight: "Alternating Jump Pattern"
      },
      'mid-offseason': {
        full: "Power Bounding 30-50 yards (Strength)",
        commercial: "Extended Bounding (Power)",
        minimal: "Longer Bounding Sequence",
        bodyweight: "Advanced Bounding Pattern"
      },
      'preseason': {
        full: "Competition Bounding (Max Distance)",
        commercial: "Maximum Bounding Effort",
        minimal: "Explosive Bounding Series",
        bodyweight: "Peak Bounding Performance"
      },
      'inseason': {
        full: "Reactive Bounding (Neural Sharp)",
        commercial: "Quality Bounding (Maintenance)",
        minimal: "Consistent Bounding Pattern",
        bodyweight: "Bounding (Neural Maintenance)"
      }
    },
    
    variations: [
      "Alternating Leg Bounds",
      "Single-Leg Bounds",
      "Double-Leg Bounds",
      "Lateral Bounds"
    ],
    features: ["reactive", "horizontal"],
    requires: [],
    coachingCues: [
      "Maximum horizontal distance each bound",
      "Quick ground contacts",
      "Drive forward, not up",
      "Maintain rhythm throughout"
    ],
    athleticCarryover: "Develops horizontal power and elastic energy utilization",
    indicator: { isIndicator: false }
  },

  weightedJumpSquat: {
    name: "Weighted Jump Squat",
    classification: "primary", 
    effort: "DE",
    category: "dynamic",
    movementPattern: "loaded-jump",
    warmupProtocol: "loaded-progression",
    
    equipmentMap: {
      'early-offseason': {
        full: "Barbell Jump Squat 20-30% (Learning)",
        commercial: "DB Jump Squat Light (Form)",
        minimal: "Vest Jump Squat (Basic)",
        bodyweight: "Bodyweight Jump Squat (High Volume)"
      },
      'mid-offseason': {
        full: "Barbell Jump Squat 30-50% (Power)",
        commercial: "DB Jump Squat Heavy (Strength)",
        minimal: "Heavy Vest Jump Squat",
        bodyweight: "Advanced Jump Squat Variations"
      },
      'preseason': {
        full: "Barbell Jump Squat 20-40% (Speed)",
        commercial: "DB Jump Squat Explosive (Speed)",
        minimal: "Light Vest Jump Squat (Speed)",
        bodyweight: "Maximum Speed Jump Squat"
      },
      'inseason': {
        full: "Light Jump Squat (Neural)",
        commercial: "DB Jump Squat (Maintenance)",
        minimal: "Light Vest Jump Squat (Quality)",
        bodyweight: "Jump Squat (Neural Maintenance)"
      }
    },
    
    variations: [
      "Barbell Jump Squat",
      "Dumbbell Jump Squat", 
      "Weighted Vest Jump Squat",
      "Medicine Ball Jump Squat"
    ],
    features: ["loaded", "explosive"],
    requires: [],
    coachingCues: [
      "Leave ground on every rep",
      "Full extension through hips",
      "Land softly, immediately jump again",
      "Optimal load for maximum power"
    ],
    athleticCarryover: "Bridges strength training and explosive power expression",
    indicator: { isIndicator: false }
  }
};
