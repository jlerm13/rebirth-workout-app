// exercises/dynamicUpper.js - Dynamic Upper Body Exercises with Phase-Specific Equipment Mapping

export const dynamicUpper = {
  mbChestPass: {
    name: "Medicine Ball Chest Pass",
    classification: "primary",
    effort: "DE",
    category: "dynamic",
    movementPattern: "explosive-push",
    warmupProtocol: "throw-progression",
    
    equipmentMap: {
      'early-offseason': {
        full: "MB Chest Pass 8-12lb (Form Learning)",
        commercial: "MB Chest Pass 6-10lb (Pattern Development)",
        minimal: "Light MB Chest Pass (Movement Quality)",
        bodyweight: "Clap Push-ups (Power Learning)"
      },
      'mid-offseason': {
        full: "MB Chest Pass 12-20lb (Power Building)",
        commercial: "MB Chest Pass 10-15lb (Strength-Power)",
        minimal: "Heavy MB Chest Pass (Max Available)",
        bodyweight: "Weighted Clap Push-ups"
      },
      'preseason': {
        full: "MB Chest Pass 8-15lb (Max Velocity)",
        commercial: "MB Chest Pass (Competition Speed)",
        minimal: "MB Chest Pass (Peak Velocity)",
        bodyweight: "Maximum Speed Clap Push-ups"
      },
      'inseason': {
        full: "MB Chest Pass (Neural Activation)",
        commercial: "MB Chest Pass (Sharp & Quick)",
        minimal: "MB Chest Pass (Quality)",
        bodyweight: "Clap Push-ups (Neural Maintenance)"
      }
    },
    
    variations: [
      "Standing Chest Pass",
      "Seated Chest Pass", 
      "Chest Pass from Knees",
      "Partner Chest Pass"
    ],
    features: ["ballistic", "horizontal"],
    requires: ["medicine-ball"],
    coachingCues: [
      "Explosive extension through arms",
      "Follow through with fingers",
      "Step into the throw",
      "Maximum intent on every rep"
    ],
    athleticCarryover: "Develops horizontal pushing power for sports contact",
    indicator: { isIndicator: false }
  },

  mbOverheadThrow: {
    name: "Medicine Ball Overhead Throw",
    classification: "primary",
    effort: "DE", 
    category: "dynamic",
    movementPattern: "explosive-overhead",
    warmupProtocol: "throw-progression",
    
    equipmentMap: {
      'early-offseason': {
        full: "MB Overhead Throw 8-12lb (Form Focus)",
        commercial: "MB Overhead Throw 6-10lb (Learning)",
        minimal: "Light MB Overhead Throw (Pattern)",
        bodyweight: "Explosive Pike Push-ups (Power Learning)"
      },
      'mid-offseason': {
        full: "MB Overhead Throw 12-20lb (Power)",
        commercial: "MB Overhead Throw 10-15lb (Strength)",
        minimal: "Heavy MB Overhead Throw",
        bodyweight: "Handstand Push-ups (Explosive)"
      },
      'preseason': {
        full: "MB Overhead Throw 10-15lb (Max Velocity)",
        commercial: "MB Overhead Throw (Peak Speed)",
        minimal: "MB Overhead Throw (Competition)",
        bodyweight: "Maximum Speed Pike Push-ups"
      },
      'inseason': {
        full: "MB Overhead Throw (Neural Prime)",
        commercial: "MB Overhead Throw (Activation)",
        minimal: "MB Overhead Throw (Sharp)",
        bodyweight: "Pike Push-ups (Neural Maintenance)"
      }
    },
    
    variations: [
      "Standing Overhead Throw",
      "Kneeling Overhead Throw",
      "Seated Overhead Throw", 
      "Overhead Slam"
    ],
    features: ["ballistic", "vertical"],
    requires: ["medicine-ball"],
    coachingCues: [
      "Full body extension",
      "Release at highest point",
      "Use legs and core",
      "Follow through overhead"
    ],
    athleticCarryover: "Builds overhead throwing power and total-body coordination",
    indicator: { isIndicator: false }
  },

  mbRotationalThrow: {
    name: "Medicine Ball Rotational Throw",
    classification: "primary",
    effort: "DE",
    category: "dynamic", 
    movementPattern: "rotational-power",
    warmupProtocol: "rotational-progression",
    
    equipmentMap: {
      'early-offseason': {
        full: "MB Rotational Throw 8-12lb (Form)",
        commercial: "MB Rotational Throw 6-10lb (Learning)",
        minimal: "Light MB Rotational Throw (Pattern)",
        bodyweight: "Russian Twists (Explosive)"
      },
      'mid-offseason': {
        full: "MB Rotational Throw 12-20lb (Power)",
        commercial: "MB Rotational Throw 10-15lb (Strength)",
        minimal: "Heavy MB Rotational Throw",
        bodyweight: "Explosive Russian Twists (Weighted)"
      },
      'preseason': {
        full: "MB Rotational Throw 10-15lb (Max Velocity)",
        commercial: "MB Rotational Throw (Peak Speed)",
        minimal: "MB Rotational Throw (Competition)",
        bodyweight: "Maximum Speed Rotational Movements"
      },
      'inseason': {
        full: "MB Rotational Throw (Neural Sharp)",
        commercial: "MB Rotational Throw (Activation)",
        minimal: "MB Rotational Throw (Quality)",
        bodyweight: "Russian Twists (Neural Maintenance)"
      }
    },
    
    variations: [
      "Standing Rotational Throw",
      "Split-Stance Rotational Throw",
      "Seated Rotational Throw",
      "Rotational Slam"
    ],
    features: ["ballistic", "rotational"],
    requires: ["medicine-ball"],
    coachingCues: [
      "Generate power from hips",
      "Keep eyes on target",
      "Full rotation through core",
      "Equal work both directions"
    ],
    athleticCarryover: "Essential for rotational sports - baseball, tennis, golf, combat",
    indicator: { isIndicator: false }
  },

  mbSlam: {
    name: "Medicine Ball Slam",
    classification: "primary",
    effort: "DE",
    category: "dynamic",
    movementPattern: "explosive-slam",
    warmupProtocol: "slam-progression",
    
    equipmentMap: {
      'early-offseason': {
        full: "MB Slam 10-15lb (Form Learning)",
        commercial: "MB Slam 8-12lb (Pattern Development)",
        minimal: "Slam Ball (Any Weight Available)",
        bodyweight: "Explosive Mountain Climbers"
      },
      'mid-offseason': {
        full: "MB Slam 15-25lb (Power Building)",
        commercial: "MB Slam 12-20lb (Strength Focus)",
        minimal: "Heavy Slam Ball (Max Available)",
        bodyweight: "Burpee Slams (Explosive)"
      },
      'preseason': {
        full: "MB Slam 12-20lb (Max Velocity)",
        commercial: "MB Slam (Peak Speed)",
        minimal: "Slam Ball (Competition Speed)",
        bodyweight: "Maximum Speed Burpee Slams"
      },
      'inseason': {
        full: "MB Slam (Neural Activation)",
        commercial: "MB Slam (Sharp & Quick)",
        minimal: "Slam Ball (Quality Reps)",
        bodyweight: "Explosive Mountain Climbers"
      }
    },
    
    variations: [
      "Overhead Slam",
      "Side Slam",
      "Rotational Slam",
      "Single-Arm Slam"
    ],
    features: ["ballistic", "total-body"],
    requires: ["slam-ball"],
    coachingCues: [
      "Full body engagement",
      "Slam through the ball",
      "Hip hinge on pickup",
      "Maximum violence on slam"
    ],
    athleticCarryover: "Develops total-body power and aggression",
    indicator: { isIndicator: false }
  },

  clapPushups: {
    name: "Clap Push-ups",
    classification: "primary",
    effort: "DE",
    category: "dynamic",
    movementPattern: "plyometric-push",
    warmupProtocol: "plyometric-progression",
    
    equipmentMap: {
      'early-offseason': {
        full: "Clap Push-ups (Learning)",
        commercial: "Clap Push-ups (Form Development)",
        minimal: "Incline Clap Push-ups (Progression)",
        bodyweight: "Explosive Push-ups (Building to Clap)"
      },
      'mid-offseason': {
        full: "Clap Push-ups (Power Building)",
        commercial: "Weighted Clap Push-ups",
        minimal: "Advanced Clap Push-ups",
        bodyweight: "Multiple Clap Push-ups"
      },
      'preseason': {
        full: "Clap Push-ups (Max Height)",
        commercial: "Competition Clap Push-ups",
        minimal: "Peak Clap Push-ups",
        bodyweight: "Maximum Explosive Clap Push-ups"
      },
      'inseason': {
        full: "Clap Push-ups (Neural Sharp)",
        commercial: "Clap Push-ups (Quality)",
        minimal: "Consistent Clap Push-ups",
        bodyweight: "Clap Push-ups (Neural Maintenance)"
      }
    },
    
    variations: [
      "Standard Clap Push-ups",
      "Behind-the-Back Clap",
      "Triple Clap Push-ups",
      "Single-Arm Clap Push-ups"
    ],
    features: ["plyometric", "bodyweight"],
    requires: [],
    coachingCues: [
      "Explosive push off ground",
      "Land softly",
      "Maintain plank position",
      "Full extension at bottom"
    ],
    athleticCarryover: "Develops upper body reactive strength and power",
    indicator: { isIndicator: false }
  },

  explosivePushups: {
    name: "Explosive Push-ups",
    classification: "primary",
    effort: "DE",
    category: "dynamic",
    movementPattern: "explosive-push",
    warmupProtocol: "push-progression",
    
    equipmentMap: {
      'early-offseason': {
        full: "Explosive Push-ups (Speed Learning)",
        commercial: "Explosive Push-ups (Form)",
        minimal: "Incline Explosive Push-ups",
        bodyweight: "Fast Push-ups (Building Speed)"
      },
      'mid-offseason': {
        full: "Explosive Push-ups (Power)",
        commercial: "Weighted Explosive Push-ups",
        minimal: "Advanced Explosive Push-ups",
        bodyweight: "Maximum Speed Push-ups"
      },
      'preseason': {
        full: "Explosive Push-ups (Max Velocity)",
        commercial: "Competition Speed Push-ups",
        minimal: "Peak Explosive Push-ups",
        bodyweight: "Maximum Explosive Push-ups"
      },
      'inseason': {
        full: "Explosive Push-ups (Neural)",
        commercial: "Explosive Push-ups (Sharp)",
        minimal: "Quality Explosive Push-ups",
        bodyweight: "Consistent Explosive Push-ups"
      }
    },
    
    variations: [
      "Standard Explosive Push-ups",
      "Staggered Explosive Push-ups",
      "Wide-Grip Explosive",
      "Diamond Explosive Push-ups"
    ],
    features: ["explosive", "bodyweight"],
    requires: [],
    coachingCues: [
      "Accelerate up as fast as possible",
      "Don't leave ground",
      "Control the descent",
      "Maximum intent every rep"
    ],
    athleticCarryover: "Bridge between strength and plyometric power",
    indicator: { isIndicator: false }
  },

  dbJumpSquatPress: {
    name: "DB Jump Squat to Press",
    classification: "primary",
    effort: "DE",
    category: "dynamic",
    movementPattern: "total-body-power",
    warmupProtocol: "combination-progression",
    
    equipmentMap: {
      'early-offseason': {
        full: "DB Jump Squat Press (Light DBs)",
        commercial: "DB Jump Squat Press (Learning)",
        minimal: "DB Jump Squat Press (Form)",
        bodyweight: "Jump Squat to Pike (Pattern)"
      },
      'mid-offseason': {
        full: "DB Jump Squat Press (Heavy DBs)",
        commercial: "DB Jump Squat Press (Power)",
        minimal: "DB Jump Squat Press (Max Weight)",
        bodyweight: "Explosive Jump Squat to Pike"
      },
      'preseason': {
        full: "DB Jump Squat Press (Speed)",
        commercial: "DB Jump Squat Press (Max Velocity)",
        minimal: "DB Jump Squat Press (Competition)",
        bodyweight: "Maximum Speed Jump to Pike"
      },
      'inseason': {
        full: "DB Jump Squat Press (Neural)",
        commercial: "DB Jump Squat Press (Sharp)",
        minimal: "DB Jump Squat Press (Quality)",
        bodyweight: "Jump Squat Pike (Maintenance)"
      }
    },
    
    variations: [
      "DB Thruster (no jump)",
      "DB Jump Squat to Press",
      "Single-DB Jump Squat Press",
      "Alternating DB Jump Press"
    ],
    features: ["total-body", "combination"],
    requires: [],
    coachingCues: [
      "Fluid transition from squat to press",
      "Land softly from jump",
      "Full extension overhead",
      "Use leg drive for press"
    ],
    athleticCarryover: "Total-body power coordination and athletic movement",
    indicator: { isIndicator: false }
  },

  kettlebellSwings: {
    name: "Kettlebell Swings",
    classification: "primary",
    effort: "DE", 
    category: "dynamic",
    movementPattern: "ballistic-hinge",
    warmupProtocol: "ballistic-progression",
    
    equipmentMap: {
      'early-offseason': {
        full: "KB Swings (Form Learning)",
        commercial: "KB Swings (Technique Focus)",
        minimal: "DB Swings (Pattern Learning)",
        bodyweight: "Explosive Hip Bridges"
      },
      'mid-offseason': {
        full: "Heavy KB Swings (Power)",
        commercial: "KB Swings (Heavier Weight)",
        minimal: "Heavy DB Swings",
        bodyweight: "Jump Squats (Hip Power)"
      },
      'preseason': {
        full: "KB Swings (Max Power)",
        commercial: "KB Swings (Peak Performance)",
        minimal: "DB Swings (Competition)",
        bodyweight: "Explosive Hip Movements"
      },
      'inseason': {
        full: "KB Swings (Neural Activation)",
        commercial: "KB Swings (Sharp & Quick)",
        minimal: "DB Swings (Quality)",
        bodyweight: "Hip Bridges (Neural Prime)"
      }
    },
    
    variations: [
      "Two-Handed KB Swing",
      "Single-Arm KB Swing",
      "American KB Swing (overhead)",
      "Russian KB Swing (chest height)"
    ],
    features: ["ballistic", "posterior-chain"],
    requires: [],
    coachingCues: [
      "Drive with hips, not arms",
      "Snap hips forward",
      "Keep back straight",
      "Breathe out on drive"
    ],
    athleticCarryover: "Develops hip power and posterior chain explosiveness",
    indicator: { isIndicator: false }
  },

  bandPullAparts: {
    name: "Explosive Band Pull-Aparts",
    classification: "auxiliary",
    effort: "DE",
    category: "dynamic", 
    movementPattern: "explosive-pull",
    warmupProtocol: "band-activation",
    
    equipmentMap: {
      'early-offseason': {
        full: "Explosive Band Pull-Aparts (Learning)",
        commercial: "Band Pull-Aparts (Speed Focus)",
        minimal: "Band Pull-Aparts (Available Bands)",
        bodyweight: "Explosive Arm Circles"
      },
      'mid-offseason': {
        full: "Heavy Band Pull-Aparts (Power)",
        commercial: "Thick Band Pull-Aparts",
        minimal: "Heavy Band Pull-Aparts",
        bodyweight: "Resistance Arm Movements"
      },
      'preseason': {
        full: "Band Pull-Aparts (Max Speed)",
        commercial: "Band Pull-Aparts (Peak Velocity)",
        minimal: "Band Pull-Aparts (Competition)",
        bodyweight: "Maximum Speed Arm Circles"
      },
      'inseason': {
        full: "Band Pull-Aparts (Neural Activation)",
        commercial: "Band Pull-Aparts (Activation)",
        minimal: "Band Pull-Aparts (Sharp)",
        bodyweight: "Arm Circles (Neural Prime)"
      }
    },
    
    variations: [
      "Horizontal Pull-Aparts",
      "High Pull-Aparts",
      "Low Pull-Aparts",
      "Single-Arm Band Pulls"
    ],
    features: ["activation", "explosive"],
    requires: ["bands"],
    coachingCues: [
      "Explosive pull apart",
      "Squeeze shoulder blades",
      "Control the return",
      "Maximum speed on pull"
    ],
    athleticCarryover: "Activates posterior deltoids and improves shoulder health",
    indicator: { isIndicator: false }
  }
};
