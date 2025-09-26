// exercises/maxEffortLower.js - Max-Effort Lower Body Exercises with Phase-Specific Equipment Mapping
(function() {
    const maxEffortLower = {
        boxSquat: {
          name: "Box Squat",
          classification: "primary",
          effort: "ME",
          category: "max-effort",
          movementPattern: "squat",
          warmupProtocol: "heavy-barbell",
          
          equipmentMap: {
            'early-offseason': {
              full: "Barbell Box Squat (Volume Focus)",
              commercial: "Goblet Box Squat (Form Development)",
              minimal: "DB Box Squat (Higher Volume)",
              bodyweight: "Box Squat to Stand (Movement Learning)"
            },
            'mid-offseason': {
              full: "Barbell Box Squat (Strength Focus)",
              commercial: "Heavy Goblet Box Squat",
              minimal: "Single DB Box Squat (Heavy)",
              bodyweight: "Jump Squat to Box (Explosive)"
            },
            'preseason': {
              full: "Box Squat (Speed Focus)",
              commercial: "Goblet Box Squat (Explosive)",
              minimal: "DB Box Squat to Jump",
              bodyweight: "Box Squat Jump (Max Power)"
            },
            'inseason': {
              full: "Box Squat (Maintenance)",
              commercial: "Goblet Box Squat (Moderate)",
              minimal: "DB Box Squat (Quality)",
              bodyweight: "Controlled Box Squats"
            }
          },
          
          variations: [
            "Wide Stance Box Squat",
            "Close Stance Box Squat",
            "Box Squat with Bands",
            "Box Squat with Chains"
          ],
          features: ["bands", "chains"],
          requires: ["box"],
          coachingCues: [
            "Sit back, not down",
            "Maintain tight arch",
            "Pause on box without relaxing",
            "Drive knees out on ascent"
          ],
          athleticCarryover: "Teaches proper hip loading and explosive starts from static position",
          indicator: { isIndicator: true, type: "absolute" }
        },
      
        deadlift: {
          name: "Deadlift",
          classification: "primary",
          effort: "ME",
          category: "max-effort",
          movementPattern: "hinge",
          warmupProtocol: "heavy-barbell",
          
          equipmentMap: {
            'early-offseason': {
              full: "Conventional Deadlift (Volume Focus)",
              commercial: "Trap Bar Deadlift (Form Development)",
              minimal: "Heavy DB Deadlift (Higher Volume)",
              bodyweight: "Single-Leg RDL (Movement Quality)"
            },
            'mid-offseason': {
              full: "Conventional Deadlift (Strength Focus)",
              commercial: "Heavy Trap Bar Deadlift",
              minimal: "Suitcase Deadlift (Heavy Single)",
              bodyweight: "Single-Leg Deadlift (Advanced)"
            },
            'preseason': {
              full: "Deadlift (Speed Focus)",
              commercial: "Trap Bar Jump Squats",
              minimal: "Explosive DB Deadlift",
              bodyweight: "Broad Jump (Power Expression)"
            },
            'inseason': {
              full: "Deadlift (Maintenance)",
              commercial: "Trap Bar Deadlift (Moderate)",
              minimal: "DB Deadlift (Quality)",
              bodyweight: "Single-Leg RDL (Stability)"
            }
          },
          
          variations: [
            "Conventional Deadlift",
            "Sumo Deadlift",
            "Deadlift from 2-inch Blocks",
            "Deficit Deadlift (2-inch deficit)"
          ],
          features: [],
          requires: [],
          coachingCues: [
            "Engage lats before pull",
            "Push floor away with feet",
            "Maintain neutral spine",
            "Lock out hips and knees together"
          ],
          athleticCarryover: "Foundation for all pulling movements and posterior chain power",
          indicator: { isIndicator: false }
        },
      
        frontSquat: {
          name: "Front Squat",
          classification: "primary",
          effort: "ME",
          category: "max-effort",
          movementPattern: "squat",
          warmupProtocol: "moderate-barbell",
          
          equipmentMap: {
            'early-offseason': {
              full: "Barbell Front Squat (Volume Focus)",
              commercial: "Goblet Squat (Form Development)",
              minimal: "Double DB Front Squat (Higher Volume)",
              bodyweight: "Jump Squat (Volume Building)"
            },
            'mid-offseason': {
              full: "Barbell Front Squat (Strength Focus)",
              commercial: "Heavy Goblet Squat",
              minimal: "Single DB Goblet Squat (Heavy)",
              bodyweight: "Pistol Squat Progression"
            },
            'preseason': {
              full: "Front Squat (Speed Focus)",
              commercial: "Goblet Squat (Explosive)",
              minimal: "DB Squat to Press (Power)",
              bodyweight: "Jump Squats (Max Height)"
            },
            'inseason': {
              full: "Front Squat (Maintenance)",
              commercial: "Goblet Squat (Moderate)",
              minimal: "DB Front Squat (Quality)",
              bodyweight: "Controlled Jump Squats"
            }
          },
          
          variations: [
            "Clean Grip Front Squat",
            "Cross-Arm Front Squat",
            "Front Squat with Straps",
            "Zombie Front Squat (no hands)"
          ],
          features: [],
          requires: [],
          coachingCues: [
            "Elbows high throughout",
            "Maintain upright torso",
            "Knees track over toes",
            "Full depth if mobility allows"
          ],
          athleticCarryover: "Builds quad dominance and upright posture strength",
          indicator: { isIndicator: false }
        },
      
        trapBarDeadlift: {
          name: "Trap Bar Deadlift",
          classification: "primary",
          effort: "ME",
          category: "max-effort",
          movementPattern: "hinge",
          warmupProtocol: "heavy-barbell",
          
          equipmentMap: {
            'early-offseason': {
              full: "Trap Bar Deadlift (Volume Focus)",
              commercial: "Trap Bar or Heavy DB Squat",
              minimal: "DB Suitcase Deadlift (Both Hands)",
              bodyweight: "Broad Jump (Power Learning)"
            },
            'mid-offseason': {
              full: "Trap Bar Deadlift (Strength Focus)",
              commercial: "Heavy Trap Bar or DB Squat",
              minimal: "Heavy DB Suitcase Deadlift",
              bodyweight: "Single-Leg Broad Jump"
            },
            'preseason': {
              full: "Trap Bar Jump Squats (Explosive)",
              commercial: "DB Squat to Jump",
              minimal: "Explosive DB Suitcase Lift",
              bodyweight: "Consecutive Broad Jumps"
            },
            'inseason': {
              full: "Trap Bar Deadlift (Maintenance)",
              commercial: "Trap Bar (Moderate Load)",
              minimal: "DB Suitcase Deadlift (Quality)",
              bodyweight: "Broad Jump (Technique)"
            }
          },
          
          variations: [
            "High Handle Trap Bar",
            "Low Handle Trap Bar",
            "Trap Bar with Bands",
            "Trap Bar Jump Squats (lighter load)"
          ],
          features: ["bands"],
          requires: ["trap-bar"],
          coachingCues: [
            "Center yourself in trap bar",
            "Drive through whole foot",
            "Keep chest up throughout",
            "Can be more quad-dominant than conventional"
          ],
          athleticCarryover: "Safer spine position for athletes, great for vertical power development",
          indicator: { isIndicator: false }
        },
      
        rackPulls: {
          name: "Rack Pulls",
          classification: "primary",
          effort: "ME",
          category: "max-effort",
          movementPattern: "hinge",
          warmupProtocol: "heavy-partial",
          
          equipmentMap: {
            'early-offseason': {
              full: "Rack Pull Below Knee (Volume)",
              commercial: "Elevated Trap Bar Pull (Volume)",
              minimal: "Heavy DB from Blocks (Volume)",
              bodyweight: "Single-Leg RDL (High Volume)"
            },
            'mid-offseason': {
              full: "Rack Pull Above Knee (Strength)",
              commercial: "Heavy Elevated Trap Bar",
              minimal: "Single DB from High Block",
              bodyweight: "Single-Leg RDL (Advanced)"
            },
            'preseason': {
              full: "Rack Pull (Speed Focus)",
              commercial: "Explosive Trap Bar from Blocks",
              minimal: "Explosive DB from Blocks",
              bodyweight: "Explosive Hip Hinge"
            },
            'inseason': {
              full: "Rack Pull (Maintenance)",
              commercial: "Moderate Trap Bar from Blocks",
              minimal: "DB from Blocks (Quality)",
              bodyweight: "Controlled Hip Hinge"
            }
          },
          
          variations: [
            "Below Knee Rack Pull",
            "Above Knee Rack Pull",
            "Mid-Shin Rack Pull",
            "Rack Pull with Bands"
          ],
          features: ["partial-ROM", "bands"],
          requires: ["power-rack"],
          coachingCues: [
            "Set pins at desired height",
            "Same setup as regular deadlift",
            "Can handle 110-130% of deadlift 1RM",
            "Focus on lockout strength"
          ],
          athleticCarryover: "Builds tremendous back and grip strength, confidence with heavy loads",
          indicator: { isIndicator: false }
        },
      
        safetySquat: {
          name: "Safety Squat Bar Squat",
          classification: "primary",
          effort: "ME",
          category: "max-effort",
          movementPattern: "squat",
          warmupProtocol: "heavy-barbell",
          
          equipmentMap: {
            'early-offseason': {
              full: "SSB Box Squat (Volume Focus)",
              commercial: "High Bar Back Squat (Volume)",
              minimal: "Zercher Squat with DB",
              bodyweight: "Bulgarian Split Squats (Volume)"
            },
            'mid-offseason': {
              full: "SSB Free Squat (Strength Focus)",
              commercial: "Heavy High Bar Back Squat",
              minimal: "Heavy Zercher Squat",
              bodyweight: "Pistol Squat Progression"
            },
            'preseason': {
              full: "SSB (Speed Focus)",
              commercial: "High Bar Squat (Explosive)",
              minimal: "Explosive Zercher Squat",
              bodyweight: "Jump Squats (Max Power)"
            },
            'inseason': {
              full: "SSB (Maintenance)",
              commercial: "High Bar Squat (Moderate)",
              minimal: "Zercher Squat (Quality)",
              bodyweight: "Bulgarian Split Squats (Quality)"
            }
          },
          
          variations: [
            "SSB Box Squat",
            "SSB Good Mornings",
            "SSB Front Squat (handles forward)",
            "SSB with Chains"
          ],
          features: ["chains", "shoulder-friendly"],
          requires: ["safety-squat-bar"],
          coachingCues: [
            "Allows squatting with shoulder issues",
            "More upright torso than back squat",
            "Harder on upper back",
            "Great for building brute strength"
          ],
          athleticCarryover: "Reduces shoulder stress while building leg and back strength",
          indicator: { isIndicator: false }
        },
      
        goodMorning: {
          name: "Good Morning",
          classification: "primary",
          effort: "ME",
          category: "max-effort",
          movementPattern: "hinge",
          warmupProtocol: "moderate-barbell",
          
          equipmentMap: {
            'early-offseason': {
              full: "Barbell Good Morning (Volume)",
              commercial: "DB Good Morning (Form Focus)",
              minimal: "Single DB Good Morning (Volume)",
              bodyweight: "Bodyweight Good Morning (High Volume)"
            },
            'mid-offseason': {
              full: "Barbell Good Morning (Strength)",
              commercial: "Heavy DB Good Morning",
              minimal: "Heavy Single DB Good Morning",
              bodyweight: "Single-Leg Good Morning"
            },
            'preseason': {
              full: "Good Morning (Speed Focus)",
              commercial: "DB Good Morning (Explosive)",
              minimal: "Explosive DB Good Morning",
              bodyweight: "Explosive Hip Hinge"
            },
            'inseason': {
              full: "Good Morning (Maintenance)",
              commercial: "DB Good Morning (Moderate)",
              minimal: "DB Good Morning (Quality)",
              bodyweight: "Controlled Good Morning"
            }
          },
          
          variations: [
            "Cambered Bar Good Morning",
            "Safety Squat Bar Good Morning",
            "Seated Good Morning",
            "Good Morning with Bands"
          ],
          features: ["bands"],
          requires: [],
          coachingCues: [
            "Maintain arch in lower back",
            "Push hips back, not down",
            "Keep knees slightly bent",
            "Feel stretch in hamstrings"
          ],
          athleticCarryover: "Builds posterior chain strength and hip hinge pattern",
          indicator: { isIndicator: false }
        },
      
        singleLegSquat: {
          name: "Single-Leg Squat",
          classification: "primary",
          effort: "ME",
          category: "max-effort",
          movementPattern: "unilateral-squat",
          warmupProtocol: "bodyweight-progression",
          
          equipmentMap: {
            'early-offseason': {
              full: "Barbell Single-Leg Squat (Volume)",
              commercial: "DB Single-Leg Squat (Form)",
              minimal: "Pistol Squat Progression (Volume)",
              bodyweight: "Assisted Pistol Squat (Learning)"
            },
            'mid-offseason': {
              full: "Heavy Single-Leg Squat (Strength)",
              commercial: "Heavy DB Single-Leg Squat",
              minimal: "Full Pistol Squat",
              bodyweight: "Advanced Pistol Variations"
            },
            'preseason': {
              full: "Single-Leg Squat (Explosive)",
              commercial: "DB Single-Leg Squat Jump",
              minimal: "Explosive Pistol Squat",
              bodyweight: "Single-Leg Jump Squat"
            },
            'inseason': {
              full: "Single-Leg Squat (Maintenance)",
              commercial: "DB Single-Leg Squat (Moderate)",
              minimal: "Pistol Squat (Quality)",
              bodyweight: "Controlled Pistol Squat"
            }
          },
          
          variations: [
            "Pistol Squat",
            "Shrimp Squat",
            "Single-Leg Box Squat",
            "Cossack Squat"
          ],
          features: ["unilateral"],
          requires: [],
          coachingCues: [
            "Maintain balance throughout",
            "Keep non-working leg straight",
            "Full range of motion",
            "Control the descent"
          ],
          athleticCarryover: "Builds unilateral strength and balance for sports",
          indicator: { isIndicator: false }
        }
      };

      if (typeof loadExerciseModule === 'function') {
          loadExerciseModule('maxEffortLower', maxEffortLower);
      }else {
          console.error('loadExerciseModule function not available when loading maxEffortLower');
      }
  })();
 
