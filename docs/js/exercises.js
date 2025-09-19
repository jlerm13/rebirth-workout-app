/**
 * exercises.js - Complete Exercise Database for WS4SB3 Athletic Development System
 * 
 * This module contains all exercises used in the WS4SB3 system, including:
 * - Equipment adaptations for different training contexts
 * - Exercise variations for progression
 * - Warm-up protocol references
 * - Athletic movement integration patterns
 */

const exerciseDatabase = {
    // ======================== MAX-EFFORT UPPER BODY EXERCISES ========================
    
    benchPress: {
        name: "Bench Press",
        category: "max-effort",
        movementPattern: "horizontal-push",
        warmupProtocol: "heavy-barbell",
        variations: [
            "Competition Bench Press",
            "Wide-Grip Bench Press", 
            "Touch-and-Go Bench Press",
            "Paused Bench Press (2-3 second pause)"
        ],
        equipmentMap: {
            full: "Barbell Bench Press",
            commercial: "Dumbbell Bench Press",
            minimal: "Heavy DB Floor Press",
            bodyweight: "Weighted Push-ups (backpack/vest)"
        },
        coachingCues: [
            "Maintain tight upper back throughout",
            "Drive feet into floor",
            "Control eccentric, explosive concentric",
            "Touch chest at nipple line"
        ],
        athleticCarryover: "Develops pushing power for blocking, checking, and grappling"
    },

    floorPress: {
        name: "Floor Press",
        category: "max-effort",
        movementPattern: "horizontal-push",
        warmupProtocol: "heavy-barbell",
        variations: [
            "Barbell Floor Press",
            "DB Floor Press (neutral grip)",
            "Floor Press with Chains",
            "Close-Grip Floor Press"
        ],
        equipmentMap: {
            full: "Barbell Floor Press",
            commercial: "DB Floor Press",
            minimal: "DB Floor Press",
            bodyweight: "Bottom-Position Push-ups (3-second pause)"
        },
        coachingCues: [
            "Upper arms touch floor, brief pause",
            "Eliminate leg drive completely",
            "Focus on lockout strength",
            "Keep core tight throughout"
        ],
        athleticCarryover: "Builds lockout strength and teaches tension without momentum"
    },

    boardPress: {
        name: "Board Press",
        category: "max-effort",
        movementPattern: "horizontal-push",
        warmupProtocol: "heavy-barbell",
        variations: [
            "3-Board Press",
            "2-Board Press",
            "4-Board Press",
            "1-Board Press"
        ],
        equipmentMap: {
            full: "3-Board Press",
            commercial: "Pin Press (rack at equivalent height)",
            minimal: "Elevated Push-ups (hands on blocks)",
            bodyweight: "Partial ROM Push-ups"
        },
        coachingCues: [
            "Maintain same form as full bench",
            "Control descent to boards",
            "Explosive drive off boards",
            "Progress by removing boards over time"
        ],
        athleticCarryover: "Strengthens specific sticking points in pressing pattern"
    },

    inclineBench: {
        name: "Incline Bench Press",
        category: "max-effort",
        movementPattern: "incline-push",
        warmupProtocol: "heavy-barbell",
        variations: [
            "45-Degree Incline Press",
            "30-Degree Incline Press",
            "60-Degree Incline Press",
            "Incline Press with Bands"
        ],
        equipmentMap: {
            full: "Barbell Incline Press",
            commercial: "DB Incline Press",
            minimal: "Adjustable Bench DB Press",
            bodyweight: "Pike Push-ups"
        },
        coachingCues: [
            "Set bench between 30-45 degrees",
            "Bar path slightly back toward face",
            "Keep shoulders down and back",
            "Don't let elbows flare excessively"
        ],
        athleticCarryover: "Develops upper chest and shoulder strength for overhead movements"
    },

    closeGripBench: {
        name: "Close-Grip Bench Press",
        category: "max-effort",
        movementPattern: "horizontal-push",
        warmupProtocol: "heavy-barbell",
        variations: [
            "Index Finger on Smooth",
            "Shoulder-Width Grip",
            "Close-Grip with Chains",
            "Close-Grip Incline Press"
        ],
        equipmentMap: {
            full: "Close-Grip Barbell Press",
            commercial: "Close-Grip DB Press",
            minimal: "Diamond Push-ups",
            bodyweight: "Diamond Push-ups"
        },
        coachingCues: [
            "Grip just inside shoulder width",
            "Keep elbows tucked to sides",
            "Touch lower on chest than regular bench",
            "Focus on tricep engagement"
        ],
        athleticCarryover: "Builds tricep-dominant pushing for sports-specific arm action"
    },

    overheadPress: {
        name: "Overhead Press",
        category: "max-effort",
        movementPattern: "vertical-push",
        warmupProtocol: "moderate-barbell",
        variations: [
            "Military Press (strict)",
            "Push Press",
            "Behind-the-Neck Press",
            "Z-Press (seated, no back support)"
        ],
        equipmentMap: {
            full: "Barbell Military Press",
            commercial: "DB Overhead Press",
            minimal: "Single DB Press",
            bodyweight: "Handstand Push-ups (or Pike Push-ups)"
        },
        coachingCues: [
            "Squeeze glutes and core throughout",
            "Press slightly back, not straight up",
            "Full lockout with biceps by ears",
            "Control the negative portion"
        ],
        athleticCarryover: "Essential for overhead athletes and contact sports"
    },

    weightedChins: {
        name: "Weighted Chin-ups",
        category: "max-effort",
        movementPattern: "vertical-pull",
        warmupProtocol: "bodyweight-progression",
        variations: [
            "Weighted Pull-ups (overhand)",
            "Weighted Chin-ups (underhand)",
            "Weighted Neutral-Grip",
            "Weighted Wide-Grip"
        ],
        equipmentMap: {
            full: "Weighted Chin-ups (belt/vest)",
            commercial: "Weighted Chin-ups (DB between feet)",
            minimal: "Band-Resisted Chin-ups",
            bodyweight: "Strict Chin-ups (slow tempo)"
        },
        coachingCues: [
            "Full hang at bottom",
            "Chin clearly over bar",
            "No kipping or swinging",
            "Control the descent"
        ],
        athleticCarryover: "Indicator exercise for relative strength and pulling power"
    },

    rackLockouts: {
        name: "Rack Lockouts",
        category: "max-effort",
        movementPattern: "horizontal-push",
        warmupProtocol: "heavy-partial",
        variations: [
            "High Pin Press (4-6 inch ROM)",
            "Mid-Range Lockouts (8-10 inch)",
            "Suspended Chain Lockouts",
            "Reverse Band Lockouts"
        ],
        equipmentMap: {
            full: "Pin Press in Power Rack",
            commercial: "Smith Machine Partial Press",
            minimal: "Top-Half Push-ups",
            bodyweight: "Wall Push-up Lockouts"
        },
        coachingCues: [
            "Set pins at sticking point",
            "Can handle 120-140% of 1RM",
            "Focus on speed off pins",
            "Maintain full-body tension"
        ],
        athleticCarryover: "Overloads nervous system and builds confidence with heavy loads"
    },

    // ======================== MAX-EFFORT LOWER BODY EXERCISES ========================

    boxSquat: {
        name: "Box Squat",
        category: "max-effort",
        movementPattern: "squat",
        warmupProtocol: "heavy-barbell",
        variations: [
            "Wide Stance Box Squat",
            "Close Stance Box Squat",
            "Box Squat with Bands",
            "Box Squat with Chains"
        ],
        equipmentMap: {
            full: "Barbell Box Squat",
            commercial: "Goblet Squat to Box",
            minimal: "DB Box Squat",
            bodyweight: "Box Pistol Squats"
        },
        coachingCues: [
            "Sit back, not down",
            "Maintain tight arch",
            "Pause on box without relaxing",
            "Drive knees out on ascent"
        ],
        athleticCarryover: "Teaches proper hip loading and explosive starts from static position"
    },

    frontSquat: {
        name: "Front Squat",
        category: "max-effort",
        movementPattern: "squat",
        warmupProtocol: "moderate-barbell",
        variations: [
            "Clean Grip Front Squat",
            "Cross-Arm Front Squat",
            "Front Squat with Straps",
            "Zombie Front Squat (no hands)"
        ],
        equipmentMap: {
            full: "Barbell Front Squat",
            commercial: "Goblet Squat",
            minimal: "Double DB Front Squat",
            bodyweight: "Jump Squats"
        },
        coachingCues: [
            "Elbows high throughout",
            "Maintain upright torso",
            "Knees track over toes",
            "Full depth if mobility allows"
        ],
        athleticCarryover: "Builds quad dominance and upright posture strength"
    },

    deadlift: {
        name: "Deadlift",
        category: "max-effort",
        movementPattern: "hinge",
        warmupProtocol: "heavy-barbell",
        variations: [
            "Conventional Deadlift",
            "Sumo Deadlift",
            "Deadlift from 2-inch Blocks",
            "Deficit Deadlift (2-inch deficit)"
        ],
        equipmentMap: {
            full: "Barbell Deadlift",
            commercial: "Trap Bar Deadlift",
            minimal: "Heavy DB Deadlift",
            bodyweight: "Single-Leg RDL (unweighted)"
        },
        coachingCues: [
            "Engage lats before pull",
            "Push floor away with feet",
            "Maintain neutral spine",
            "Lock out hips and knees together"
        ],
        athleticCarryover: "Foundation for all pulling movements and posterior chain power"
    },

    trapBarDeadlift: {
        name: "Trap Bar Deadlift",
        category: "max-effort",
        movementPattern: "hinge",
        warmupProtocol: "heavy-barbell",
        variations: [
            "High Handle Trap Bar",
            "Low Handle Trap Bar",
            "Trap Bar with Bands",
            "Trap Bar Jump Squats (lighter load)"
        ],
        equipmentMap: {
            full: "Trap Bar Deadlift",
            commercial: "Trap Bar or Heavy DB Squat",
            minimal: "DB Suitcase Deadlift",
            bodyweight: "Broad Jumps (explosive alternative)"
        },
        coachingCues: [
            "Center yourself in trap bar",
            "Drive through whole foot",
            "Keep chest up throughout",
            "Can be more quad-dominant than conventional"
        ],
        athleticCarryover: "Safer spine position for athletes, great for vertical power development"
    },

    rackPulls: {
        name: "Rack Pulls",
        category: "max-effort",
        movementPattern: "hinge",
        warmupProtocol: "heavy-partial",
        variations: [
            "Below Knee Rack Pull",
            "Above Knee Rack Pull",
            "Mid-Shin Rack Pull",
            "Rack Pull with Bands"
        ],
        equipmentMap: {
            full: "Barbell Rack Pull",
            commercial: "Elevated Trap Bar Pull",
            minimal: "Heavy DB from Blocks",
            bodyweight: "N/A - use full deadlift variation"
        },
        coachingCues: [
            "Set pins at desired height",
            "Same setup as regular deadlift",
            "Can handle 110-130% of deadlift 1RM",
            "Focus on lockout strength"
        ],
        athleticCarryover: "Builds tremendous back and grip strength, confidence with heavy loads"
    },

    safetySquat: {
        name: "Safety Squat Bar Squat",
        category: "max-effort",
        movementPattern: "squat",
        warmupProtocol: "heavy-barbell",
        variations: [
            "SSB Box Squat",
            "SSB Good Mornings",
            "SSB Front Squat (handles forward)",
            "SSB with Chains"
        ],
        equipmentMap: {
            full: "Safety Squat Bar Squat",
            commercial: "High Bar Back Squat",
            minimal: "Zercher Squat with DB",
            bodyweight: "Bulgarian Split Squats"
        },
        coachingCues: [
            "Allows squatting with shoulder issues",
            "More upright torso than back squat",
            "Harder on upper back",
            "Great for building brute strength"
        ],
        athleticCarryover: "Reduces shoulder stress while building leg and back strength"
    },

    // ======================== DYNAMIC-EFFORT EXERCISES ========================

    boxJump: {
        name: "Box Jump",
        category: "dynamic",
        movementPattern: "explosive-jump",
        warmupProtocol: "jump-progression",
        variations: [
            "Standard Box Jump",
            "Seated Box Jump",
            "Box Jump with Weight Vest",
            "Single-Leg Box Jump"
        ],
        equipmentMap: {
            full: "Box Jump (24-42 inch box)",
            commercial: "Box Jump (available heights)",
            minimal: "Jump to Stable Platform",
            bodyweight: "Max Vertical Jump"
        },
        coachingCues: [
            "Full arm swing for momentum",
            "Land softly in athletic position",
            "Step down, don't jump down",
            "Focus on jump height, not box height"
        ],
        athleticCarryover: "Directly improves vertical jump and explosive hip extension"
    },

    broadJump: {
        name: "Broad Jump",
        category: "dynamic",
        movementPattern: "explosive-jump",
        warmupProtocol: "jump-progression",
        variations: [
            "Standing Broad Jump",
            "3-Jump Series (consecutive)",
            "Broad Jump to Vertical",
            "Single-Leg Broad Jump"
        ],
        equipmentMap: {
            full: "Broad Jump on Turf/Track",
            commercial: "Broad Jump (find space)",
            minimal: "Broad Jump",
            bodyweight: "Broad Jump"
        },
        coachingCues: [
            "Load hips back before jump",
            "Drive arms forward aggressively",
            "Extend fully through hips",
            "Stick the landing"
        ],
        athleticCarryover: "Develops horizontal power for sprinting and direction changes"
    },

    verticalJump: {
        name: "Vertical Jump",
        category: "dynamic",
        movementPattern: "explosive-jump",
        warmupProtocol: "jump-progression",
        variations: [
            "Countermovement Jump",
            "Jump and Reach",
            "Non-Countermovement Jump",
            "Approach Jump (with steps)"
        ],
        equipmentMap: {
            full: "Vertical Jump (Vertec or marked wall)",
            commercial: "Vertical Jump",
            minimal: "Vertical Jump",
            bodyweight: "Max Effort Vertical Jump"
        },
        coachingCues: [
            "Quick dip and drive",
            "Full triple extension",
            "Reach at peak height",
            "Land in same spot you took off"
        ],
        athleticCarryover: "Key indicator exercise for lower body power"
    },

    depthJump: {
        name: "Depth Jump",
        category: "dynamic",
        movementPattern: "explosive-jump",
        warmupProtocol: "advanced-jump",
        variations: [
            "Depth Jump to Vertical",
            "Depth Jump to Broad",
            "Depth Drop (landing only)",
            "Depth Jump to Box"
        ],
        equipmentMap: {
            full: "Depth Jump from 12-24 inch box",
            commercial: "Drop from Low Platform",
            minimal: "Altitude Landings",
            bodyweight: "Repeated Squat Jumps"
        },
        coachingCues: [
            "Advanced athletes only",
            "Minimize ground contact time",
            "Land and immediately explode up",
            "Start with lower heights"
        ],
        athleticCarryover: "Develops reactive strength and stretch-shortening cycle"
    },

    hurdleJump: {
        name: "Hurdle Jump",
        category: "dynamic",
        movementPattern: "explosive-jump",
        warmupProtocol: "jump-progression",
        variations: [
            "Single Hurdle Jump",
            "Continuous Hurdle Jumps",
            "Lateral Hurdle Jumps",
            "Single-Leg Hurdle Hops"
        ],
        equipmentMap: {
            full: "6-12 inch Hurdles",
            commercial: "Mini Hurdles or Cones",
            minimal: "Jump over Objects",
            bodyweight: "Imaginary Hurdle Jumps"
        },
        coachingCues: [
            "Quick ground contacts",
            "Knees to chest on jump",
            "Land ready to jump again",
            "Maintain rhythm in series"
        ],
        athleticCarryover: "Improves jumping rhythm and repeated power output"
    },

    boxSquatJump: {
        name: "Box Squat into Jump",
        category: "dynamic",
        movementPattern: "explosive-jump",
        warmupProtocol: "combination",
        variations: [
            "Bodyweight Box Squat Jump",
            "Weighted Box Squat Jump",
            "Box Squat to Broad Jump",
            "Box Squat to Sprint"
        ],
        equipmentMap: {
            full: "Box Squat to Vertical Jump",
            commercial: "Seated Jump from Bench",
            minimal: "Pause Squat Jump",
            bodyweight: "Pause Squat Jump"
        },
        coachingCues: [
            "Pause eliminates stretch reflex",
            "Explode from dead stop",
            "Maximum intent on each rep",
            "Full recovery between reps"
        ],
        athleticCarryover: "Builds starting strength and power from static positions"
    },

    // ======================== SUPPLEMENTAL EXERCISES ========================

    dbBenchPress: {
        name: "DB Bench Press",
        category: "supplemental",
        movementPattern: "horizontal-push",
        warmupProtocol: "moderate-dumbbell",
        variations: [
            "Flat DB Press",
            "Alternating DB Press",
            "DB Press with Rotation",
            "Single-Arm DB Press"
        ],
        equipmentMap: {
            full: "Heavy DB Bench Press",
            commercial: "DB Bench Press",
            minimal: "Floor Press with DBs",
            bodyweight: "Push-ups to Failure"
        },
        coachingCues: [
            "Full range of motion",
            "Control the eccentric",
            "Can use neutral or pronated grip",
            "Keep shoulder blades retracted"
        ],
        athleticCarryover: "Allows for greater ROM and addresses imbalances"
    },

    dbInclinePress: {
        name: "DB Incline Press",
        category: "supplemental",
        movementPattern: "incline-push",
        warmupProtocol: "moderate-dumbbell",
        variations: [
            "30-Degree DB Incline",
            "45-Degree DB Incline",
            "Neutral Grip DB Incline",
            "Alternating DB Incline"
        ],
        equipmentMap: {
            full: "DB Incline Press",
            commercial: "DB Incline Press",
            minimal: "Incline Push-ups",
            bodyweight: "Incline Push-ups"
        },
        coachingCues: [
            "Press up and back slightly",
            "Don't let elbows flare",
            "Touch DBs to outer chest",
            "Maintain arch in back"
        ],
        athleticCarryover: "Builds upper chest and anterior deltoid strength"
    },

    barbellPushups: {
        name: "Barbell Push-ups",
        category: "supplemental",
        movementPattern: "horizontal-push",
        warmupProtocol: "bodyweight-progression",
        variations: [
            "Weighted Vest Push-ups",
            "Band-Resisted Push-ups",
            "Chain Push-ups",
            "Feet-Elevated Push-ups"
        ],
        equipmentMap: {
            full: "Barbell on Back Push-ups",
            commercial: "Weighted Push-ups",
            minimal: "Band-Resisted Push-ups",
            bodyweight: "Max Rep Push-ups"
        },
        coachingCues: [
            "Maintain rigid plank position",
            "Full range of motion",
            "Can elevate feet for difficulty",
            "Add weight progressively"
        ],
        athleticCarryover: "Builds pushing endurance and core stability simultaneously"
    },

    dbFloorPress: {
        name: "DB Floor Press",
        category: "supplemental",
        movementPattern: "horizontal-push",
        warmupProtocol: "moderate-dumbbell",
        variations: [
            "Neutral Grip Floor Press",
            "Single-Arm Floor Press",
            "Alternating Floor Press",
            "Floor Press with Pause"
        ],
        equipmentMap: {
            full: "Heavy DB Floor Press",
            commercial: "DB Floor Press",
            minimal: "Light DB Floor Press",
            bodyweight: "Close-Grip Push-ups"
        },
        coachingCues: [
            "Upper arms touch floor",
            "Brief pause at bottom",
            "Press straight up",
            "Keep core engaged"
        ],
        athleticCarryover: "Eliminates leg drive and builds pure pressing strength"
    },

    // ======================== ASSISTANCE EXERCISES - UPPER BODY PULL ========================

    pullups: {
        name: "Pull-ups/Chin-ups",
        category: "assistance",
        movementPattern: "vertical-pull",
        warmupProtocol: "bodyweight-progression",
        variations: [
            "Wide-Grip Pull-ups",
            "Close-Grip Chin-ups",
            "Neutral-Grip Pull-ups",
            "Commando Pull-ups"
        ],
        equipmentMap: {
            full: "Weighted Pull-ups",
            commercial: "Pull-ups/Lat Pulldown",
            minimal: "Band-Assisted Pull-ups",
            bodyweight: "Inverted Rows"
        },
        coachingCues: [
            "Full dead hang at bottom",
            "Chin over bar at top",
            "Control the descent",
            "No kipping unless specified"
        ],
        athleticCarryover: "Key indicator of relative strength"
    },

    barbellRows: {
        name: "Barbell Rows",
        category: "assistance",
        movementPattern: "horizontal-pull",
        warmupProtocol: "moderate-barbell",
        variations: [
            "Bent-Over Barbell Row",
            "Pendlay Row",
            "Yates Row",
            "Underhand Barbell Row"
        ],
        equipmentMap: {
            full: "Barbell Row",
            commercial: "DB Row",
            minimal: "Band Row",
            bodyweight: "Inverted Row"
        },
        coachingCues: [
            "Hip hinge position",
            "Pull to lower chest/upper abdomen",
            "Squeeze shoulder blades together",
            "Don't use momentum"
        ],
        athleticCarryover: "Builds back thickness and pulling strength"
    },

    dbRows: {
        name: "DB Rows",
        category: "assistance",
        movementPattern: "horizontal-pull",
        warmupProtocol: "moderate-dumbbell",
        variations: [
            "Single-Arm DB Row",
            "Chest-Supported DB Row",
            "Kroc Rows (high reps)",
            "Two-Arm DB Row"
        ],
        equipmentMap: {
            full: "Heavy DB Row",
            commercial: "DB Row",
            minimal: "Band Row",
            bodyweight: "Table Rows"
        },
        coachingCues: [
            "Keep core tight",
            "Pull elbow back, not out",
            "Full stretch at bottom",
            "Don't rotate torso excessively"
        ],
        athleticCarryover: "Addresses imbalances and builds unilateral strength"
    },

    cableRows: {
        name: "Cable/Seated Rows",
        category: "assistance",
        movementPattern: "horizontal-pull",
        warmupProtocol: "light-cable",
        variations: [
            "Wide-Grip Cable Row",
            "Close-Grip Cable Row",
            "Single-Arm Cable Row",
            "Face-Away Cable Row"
        ],
        equipmentMap: {
            full: "Cable Row Station",
            commercial: "Cable or Machine Row",
            minimal: "Band Row",
            bodyweight: "Inverted Row"
        },
        coachingCues: [
            "Sit tall, chest out",
            "Pull to lower chest",
            "Don't lean back excessively",
            "Full protraction and retraction"
        ],
        athleticCarryover: "Constant tension builds muscular endurance"
    },

    latPulldowns: {
        name: "Lat Pulldowns",
        category: "assistance",
        movementPattern: "vertical-pull",
        warmupProtocol: "light-cable",
        variations: [
            "Wide-Grip Pulldown",
            "Close-Grip Pulldown",
            "Neutral-Grip Pulldown",
            "Behind-the-Neck Pulldown"
        ],
        equipmentMap: {
            full: "Cable Lat Pulldown",
            commercial: "Lat Pulldown Machine",
            minimal: "Band Pulldowns",
            bodyweight: "Negative Pull-ups"
        },
        coachingCues: [
            "Pull to upper chest",
            "Keep chest up",
            "Don't swing or use momentum",
            "Squeeze lats at bottom"
        ],
        athleticCarryover: "Builds vertical pulling pattern when pull-ups aren't possible"
    },

    // ======================== ASSISTANCE EXERCISES - SHOULDERS/REAR DELTS ========================

    facePulls: {
        name: "Face Pulls",
        category: "assistance",
        movementPattern: "horizontal-pull",
        warmupProtocol: "light-cable",
        variations: [
            "Cable Face Pull",
            "Band Face Pull",
            "High Cable Face Pull",
            "Face Pull with External Rotation"
        ],
        equipmentMap: {
            full: "Cable Face Pull",
            commercial: "Cable or Band Face Pull",
            minimal: "Band Face Pull",
            bodyweight: "Prone Y-T-W Raises"
        },
        coachingCues: [
            "Pull to face height",
            "Elbows high throughout",
            "Separate hands at face",
            "Focus on rear delts"
        ],
        athleticCarryover: "Critical for shoulder health and posture"
    },

    rearDeltFlyes: {
        name: "Rear Delt Flyes",
        category: "assistance",
        movementPattern: "horizontal-pull",
        warmupProtocol: "light-dumbbell",
        variations: [
            "Bent-Over DB Flyes",
            "Cable Rear Delt Flyes",
            "Machine Rear Delt Flyes",
            "Incline Bench Rear Flyes"
        ],
        equipmentMap: {
            full: "Cable Rear Delt Flyes",
            commercial: "DB Rear Delt Flyes",
            minimal: "Band Pull-Aparts",
            bodyweight: "Prone Y-Raises"
        },
        coachingCues: [
            "Slight bend in elbows",
            "Lead with pinkies",
            "Squeeze shoulder blades",
            "Control the negative"
        ],
        athleticCarryover: "Balances pressing volume and prevents shoulder injuries"
    },

    bandPullAparts: {
        name: "Band Pull-Aparts",
        category: "assistance",
        movementPattern: "horizontal-pull",
        warmupProtocol: "band",
        variations: [
            "High Pull-Aparts",
            "Low Pull-Aparts",
            "Diagonal Pull-Aparts",
            "Behind-the-Neck Pull-Aparts"
        ],
        equipmentMap: {
            full: "Band Pull-Aparts",
            commercial: "Band Pull-Aparts",
            minimal: "Band Pull-Aparts",
            bodyweight: "Wall Handstand Scap Pulls"
        },
        coachingCues: [
            "Arms straight throughout",
            "Pull band to chest",
            "Think about pulling band apart",
            "High reps (15-30)"
        ],
        athleticCarryover: "Great for warm-ups and shoulder health maintenance"
    },

    lateralRaises: {
        name: "Lateral Raises",
        category: "assistance",
        movementPattern: "lateral-raise",
        warmupProtocol: "light-dumbbell",
        variations: [
            "DB Lateral Raises",
            "Cable Lateral Raises",
            "Band Lateral Raises",
            "Leaning Lateral Raises"
        ],
        equipmentMap: {
            full: "Cable Lateral Raises",
            commercial: "DB Lateral Raises",
            minimal: "Band Lateral Raises",
            bodyweight: "Wall Handstand Holds"
        },
        coachingCues: [
            "Lead with elbows",
            "Slight forward lean",
            "Don't go above shoulder height",
            "Control the weight"
        ],
        athleticCarryover: "Builds shoulder width and stability"
    },

    // ======================== ASSISTANCE EXERCISES - LOWER BODY ========================

    bulgarianSplitSquat: {
        name: "Bulgarian Split Squat",
        category: "assistance",
        movementPattern: "unilateral-squat",
        warmupProtocol: "bodyweight-progression",
        variations: [
            "Bodyweight Bulgarian",
            "DB Bulgarian Split Squat",
            "Barbell Bulgarian Split Squat",
            "Front-Foot Elevated Bulgarian"
        ],
        equipmentMap: {
            full: "Barbell Bulgarian Split Squat",
            commercial: "DB Bulgarian Split Squat",
            minimal: "Bodyweight Bulgarian",
            bodyweight: "Bodyweight Bulgarian"
        },
        coachingCues: [
            "Rear foot on bench",
            "Vertical torso",
            "Drive through front heel",
            "Don't let knee cave in"
        ],
        athleticCarryover: "Builds single-leg strength and addresses imbalances"
    },

    walkingLunges: {
        name: "Walking Lunges",
        category: "assistance",
        movementPattern: "unilateral-squat",
        warmupProtocol: "bodyweight-progression",
        variations: [
            "Barbell Walking Lunges",
            "DB Walking Lunges",
            "Overhead Walking Lunges",
            "Reverse Lunges"
        ],
        equipmentMap: {
            full: "Barbell Walking Lunges",
            commercial: "DB Walking Lunges",
            minimal: "Bodyweight Walking Lunges",
            bodyweight: "Jump Lunges"
        },
        coachingCues: [
            "Long stride length",
            "Knee tracks over toes",
            "Push off front heel",
            "Keep torso upright"
        ],
        athleticCarryover: "Develops dynamic single-leg strength and balance"
    },

    stepUps: {
        name: "Step-Ups",
        category: "assistance",
        movementPattern: "unilateral-squat",
        warmupProtocol: "bodyweight-progression",
        variations: [
            "High Box Step-Ups",
            "Lateral Step-Ups",
            "Weighted Step-Ups",
            "Explosive Step-Ups"
        ],
        equipmentMap: {
            full: "Barbell Step-Ups",
            commercial: "DB Step-Ups",
            minimal: "Bodyweight Step-Ups",
            bodyweight: "Bodyweight Step-Ups"
        },
        coachingCues: [
            "Box at knee height or higher",
            "Drive through top foot only",
            "Don't push off bottom foot",
            "Control the descent"
        ],
        athleticCarryover: "Mimics sprinting action and builds power"
    },

    romanianDeadlift: {
        name: "Romanian Deadlift",
        category: "assistance",
        movementPattern: "hinge",
        warmupProtocol: "moderate-barbell",
        variations: [
            "Barbell RDL",
            "DB RDL",
            "Single-Leg RDL",
            "Snatch-Grip RDL"
        ],
        equipmentMap: {
            full: "Barbell RDL",
            commercial: "DB RDL",
            minimal: "Single DB RDL",
            bodyweight: "Single-Leg RDL (bodyweight)"
        },
        coachingCues: [
            "Push hips back",
            "Maintain slight knee bend",
            "Feel stretch in hamstrings",
            "Squeeze glutes at top"
        ],
        athleticCarryover: "Builds posterior chain and teaches hip hinge pattern"
    },

    gluteHamRaise: {
        name: "Glute-Ham Raise",
        category: "assistance",
        movementPattern: "knee-flexion",
        warmupProtocol: "bodyweight-progression",
        variations: [
            "GHR Machine",
            "Nordic Curls",
            "Razor Curls",
            "Swiss Ball Leg Curls"
        ],
        equipmentMap: {
            full: "Glute-Ham Raise Machine",
            commercial: "Nordic Curls",
            minimal: "Swiss Ball Leg Curls",
            bodyweight: "Nordic Curl Negatives"
        },
        coachingCues: [
            "Control the eccentric",
            "Drive knees into pad",
            "Full hip extension at top",
            "Very challenging exercise"
        ],
        athleticCarryover: "Prevents hamstring injuries and builds eccentric strength"
    },

    hyperextensions: {
        name: "Back Extensions",
        category: "assistance",
        movementPattern: "hinge",
        warmupProtocol: "bodyweight-progression",
        variations: [
            "45-Degree Back Extension",
            "Reverse Hyperextensions",
            "Weighted Hyperextensions",
            "Single-Leg Back Extensions"
        ],
        equipmentMap: {
            full: "45-Degree Hyperextension",
            commercial: "Back Extension Machine",
            minimal: "Superman",
            bodyweight: "Superman"
        },
        coachingCues: [
            "Don't hyperextend spine",
            "Squeeze glutes at top",
            "Control the movement",
            "Can hold weight for resistance"
        ],
        athleticCarryover: "Builds erector strength and endurance"
    },

    // ======================== SLED/CARRY EXERCISES ========================

    sledDrags: {
        name: "Sled Drags",
        category: "assistance",
        movementPattern: "locomotion",
        warmupProtocol: "light-sled",
        variations: [
            "Forward Sled Drag",
            "Backward Sled Drag",
            "Lateral Sled Drag",
            "Sled Pull (rope)"
        ],
        equipmentMap: {
            full: "Weight Sled",
            commercial: "Sled or Prowler",
            minimal: "Band Walks",
            bodyweight: "Bear Crawls"
        },
        coachingCues: [
            "Maintain forward lean",
            "Drive through balls of feet",
            "Keep core tight",
            "Start light, progress load"
        ],
        athleticCarryover: "Low-impact conditioning that builds work capacity"
    },

    prowlerPush: {
        name: "Prowler Push",
        category: "assistance",
        movementPattern: "locomotion",
        warmupProtocol: "light-sled",
        variations: [
            "High Handle Push",
            "Low Handle Push",
            "Sprint Push",
            "Heavy Grind Push"
        ],
        equipmentMap: {
            full: "Prowler Sled",
            commercial: "Prowler or Plate Push",
            minimal: "Car Push (parking lot)",
            bodyweight: "Sprint Intervals"
        },
        coachingCues: [
            "Drive through entire foot",
            "Keep arms locked out",
            "Maintain neutral spine",
            "Match breathing to steps"
        ],
        athleticCarryover: "Brutal conditioning that transfers to sport"
    },

    farmersWalk: {
        name: "Farmer's Walk",
        category: "assistance",
        movementPattern: "carry",
        warmupProtocol: "moderate-weight",
        variations: [
            "Heavy Farmer's Walk",
            "Single-Arm Carry (suitcase)",
            "Overhead Carry",
            "Mixed Carry (one up, one down)"
        ],
        equipmentMap: {
            full: "Farmer's Walk Handles",
            commercial: "Heavy Dumbbells",
            minimal: "Water Jugs or Bags",
            bodyweight: "Bear Crawl"
        },
        coachingCues: [
            "Tall posture",
            "Shoulders back and down",
            "Take normal steps",
            "Breathe throughout"
        ],
        athleticCarryover: "Builds grip, core, and total-body stability"
    },

    // ======================== CORE EXERCISES ========================

    weightedAbs: {
        name: "Weighted Abs",
        category: "assistance",
        movementPattern: "core",
        warmupProtocol: "core",
        variations: [
            "Cable Crunches",
            "Weighted Sit-ups",
            "Decline Weighted Sit-ups",
            "Weighted Russian Twists"
        ],
        equipmentMap: {
            full: "Cable Crunches",
            commercial: "Weighted Sit-ups",
            minimal: "Band Crunches",
            bodyweight: "V-Ups"
        },
        coachingCues: [
            "Control the movement",
            "Don't pull with arms",
            "Focus on flexing spine",
            "Higher reps (10-20)"
        ],
        athleticCarryover: "Builds trunk flexion strength"
    },

    hangingLegRaises: {
        name: "Hanging Leg Raises",
        category: "assistance",
        movementPattern: "core",
        warmupProtocol: "core",
        variations: [
            "Bent-Knee Raises",
            "Straight-Leg Raises",
            "Windshield Wipers",
            "Toes-to-Bar"
        ],
        equipmentMap: {
            full: "Hanging from Pull-up Bar",
            commercial: "Captain's Chair",
            minimal: "Lying Leg Raises",
            bodyweight: "Lying Leg Raises"
        },
        coachingCues: [
            "Control the swing",
            "Raise legs to 90 degrees minimum",
            "Don't use momentum",
            "Engage lats for stability"
        ],
        athleticCarryover: "Builds lower ab strength and hip flexor control"
    },

    // ======================== ARM EXERCISES ========================

    barbellCurls: {
        name: "Barbell Curls",
        category: "assistance",
        movementPattern: "elbow-flexion",
        warmupProtocol: "light-barbell",
        variations: [
            "Straight Bar Curls",
            "EZ-Bar Curls",
            "Wide-Grip Curls",
            "Close-Grip Curls"
        ],
        equipmentMap: {
            full: "Barbell Curls",
            commercial: "EZ-Bar or DB Curls",
            minimal: "Band Curls",
            bodyweight: "Chin-up Holds"
        },
        coachingCues: [
            "Keep elbows at sides",
            "Don't swing weight",
            "Full range of motion",
            "Control the negative"
        ],
        athleticCarryover: "Builds arm strength for pulling movements"
    },

    dbCurls: {
        name: "DB Curls",
        category: "assistance",
        movementPattern: "elbow-flexion",
        warmupProtocol: "light-dumbbell",
        variations: [
            "Alternating DB Curls",
            "Hammer Curls",
            "Incline DB Curls",
            "Preacher Curls"
        ],
        equipmentMap: {
            full: "Heavy DB Curls",
            commercial: "DB Curls",
            minimal: "Band Curls",
            bodyweight: "Isometric Chin Hold"
        },
        coachingCues: [
            "Can rotate wrist during curl",
            "Keep core tight",
            "Don't lean back",
            "Focus on bicep squeeze"
        ],
        athleticCarryover: "Allows for unilateral work and varied grips"
    },

    // ======================== ATHLETIC MOVEMENTS - SPRINTS ========================

    sprint10yd: {
        name: "10-Yard Sprint",
        category: "sprint",
        movementPattern: "acceleration",
        warmupProtocol: "sprint-prep",
        variations: [
            "3-Point Start Sprint",
            "Standing Start Sprint",
            "Falling Start Sprint",
            "Push-up Start Sprint"
        ],
        equipmentMap: {
            full: "10-Yard Sprint on Turf",
            commercial: "Treadmill Sprint 8% Incline",
            minimal: "Hill Sprints",
            bodyweight: "Wall Drive Drill"
        },
        coachingCues: [
            "Drive phase for first 5 yards",
            "45-degree forward lean",
            "Aggressive arm action",
            "Push ground back forcefully"
        ],
        athleticCarryover: "Pure acceleration development"
    },

    sprint20yd: {
        name: "20-Yard Sprint",
        category: "sprint",
        movementPattern: "acceleration",
        warmupProtocol: "sprint-prep",
        variations: [
            "Build-up Sprint (gradual acceleration)",
            "Flying 20s (10yd run-in)",
            "Resisted Sprint (band/sled)",
            "Assisted Sprint (band pull)"
        ],
        equipmentMap: {
            full: "20-Yard Sprint on Track",
            commercial: "Treadmill Sprint",
            minimal: "Parking Lot Sprint",
            bodyweight: "High Knees Sprint"
        },
        coachingCues: [
            "Transition to upright by 10 yards",
            "Maintain acceleration through line",
            "Relax face and shoulders",
            "Full recovery between reps"
        ],
        athleticCarryover: "Develops transition from acceleration to max velocity"
    },

    // ======================== ATHLETIC MOVEMENTS - THROWS ========================

    mbChestPass: {
        name: "Medicine Ball Chest Pass",
        category: "throw",
        movementPattern: "horizontal-push",
        warmupProtocol: "throw-prep",
        variations: [
            "Standing Chest Pass",
            "Kneeling Chest Pass",
            "Seated Chest Pass",
            "Single-Arm Push Pass"
        ],
        equipmentMap: {
            full: "6-10lb Medicine Ball",
            commercial: "Medicine Ball",
            minimal: "Basketball or Light DB",
            bodyweight: "Explosive Push-ups"
        },
        coachingCues: [
            "Triple extension on release",
            "Follow through with arms",
            "Release at chest height",
            "Maximum velocity intent"
        ],
        athleticCarryover: "Develops upper body power and rate of force development"
    },

    mbSlam: {
        name: "Medicine Ball Slam",
        category: "throw",
        movementPattern: "vertical-slam",
        warmupProtocol: "throw-prep",
        variations: [
            "Overhead Slam",
            "Rotational Slam",
            "Single-Arm Slam",
            "Slam to Box Jump"
        ],
        equipmentMap: {
            full: "10-15lb Slam Ball",
            commercial: "Medicine Ball",
            minimal: "Light DB or Sandbag",
            bodyweight: "Explosive Burpees"
        },
        coachingCues: [
            "Reach full extension overhead",
            "Slam through the floor",
            "Use entire body",
            "Watch for ball bounce"
        ],
        athleticCarryover: "Total body power development"
    },

    mbRotationalThrow: {
        name: "Rotational Medicine Ball Throw",
        category: "throw",
        movementPattern: "rotational",
        warmupProtocol: "throw-prep",
        variations: [
            "Side Toss to Wall",
            "Shotput Throw",
            "Tornado Ball Slam",
            "Scoop Toss"
        ],
        equipmentMap: {
            full: "6-10lb Medicine Ball",
            commercial: "Medicine Ball",
            minimal: "Band Rotations",
            bodyweight: "Explosive Rotations"
        },
        coachingCues: [
            "Rotate from hips, not arms",
            "Load back hip",
            "Explosive rotation through core",
            "Release at chest height"
        ],
        athleticCarryover: "Develops rotational power for sports"
    }
};

/**
 * Helper function to get exercises by category
 */
function getExercisesByCategory(category) {
    return Object.entries(exerciseDatabase)
        .filter(([key, exercise]) => exercise.category === category)
        .reduce((acc, [key, exercise]) => {
            acc[key] = exercise;
            return acc;
        }, {});
}

/**
 * Helper function to get exercises by movement pattern
 */
function getExercisesByMovementPattern(pattern) {
    return Object.entries(exerciseDatabase)
        .filter(([key, exercise]) => exercise.movementPattern === pattern)
        .reduce((acc, [key, exercise]) => {
            acc[key] = exercise;
            return acc;
        }, {});
}

/**
 * Helper function to adapt exercise based on equipment availability
 */
function adaptExerciseForEquipment(exerciseKey, equipmentLevel) {
    const exercise = exerciseDatabase[exerciseKey];
    if (!exercise) return null;
    
    return {
        name: exercise.equipmentMap[equipmentLevel] || exercise.equipmentMap.bodyweight,
        originalExercise: exercise.name,
        category: exercise.category,
        coachingCues: exercise.coachingCues,
        isSubstituted: exercise.equipmentMap[equipmentLevel] !== exercise.name
    };
}

// Export for use in other modules (Node.js style for build tools)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        exerciseDatabase,
        getExercisesByCategory,
        getExercisesByMovementPattern,
        adaptExerciseForEquipment
    };
}

// Export for ES6 modules
if (typeof window !== 'undefined') {
    window.ExerciseDB = {
        exerciseDatabase,
        getExercisesByCategory,
        getExercisesByMovementPattern,
        adaptExerciseForEquipment
    };
}
