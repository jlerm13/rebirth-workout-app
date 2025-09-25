// exercises-test.js - Condensed test version to validate new structure
// Replace your existing exercises.js temporarily to test the new phase-specific mapping

const exerciseDatabase = {
  // Max-Effort Upper (condensed for testing)
  benchPress: {
    name: "Bench Press",
    classification: "primary",
    effort: "ME",
    category: "max-effort",
    movementPattern: "horizontal-push",
    
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
    
    coachingCues: [
      "Maintain tight upper back throughout",
      "Drive feet into floor",
      "Control eccentric, explosive concentric",
      "Touch chest at nipple line"
    ],
    athleticCarryover: "Develops pushing power for blocking, checking, and grappling",
    indicator: { isIndicator: true, type: "absolute" }
  },

  // Max-Effort Lower (condensed for testing)
  boxSquat: {
    name: "Box Squat",
    classification: "primary",
    effort: "ME",
    category: "max-effort",
    movementPattern: "squat",
    
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
    
    coachingCues: [
      "Sit back, not down",
      "Maintain tight arch",
      "Pause on box without relaxing",
      "Drive knees out on ascent"
    ],
    athleticCarryover: "Teaches proper hip loading and explosive starts from static position",
    indicator: { isIndicator: true, type: "absolute" }
  },

  // Dynamic Lower (condensed for testing)
  boxJump: {
    name: "Box Jump",
    classification: "primary",
    effort: "DE",
    category: "dynamic",
    movementPattern: "explosive-jump",
    
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
    
    coachingCues: [
      "Full arm swing for momentum",
      "Land softly in athletic position",
      "Step down, don't jump down",
      "Focus on jump height, not box height"
    ],
    athleticCarryover: "Directly improves vertical jump and explosive hip extension",
    indicator: { isIndicator: true, type: "power" }
  },

  // Legacy exercise for backward compatibility testing
  barbellRows: {
    name: "Barbell Rows",
    classification: "assistance",
    effort: "RE",
    category: "assistance",
    movementPattern: "horizontal-pull",
    
    // Old-style equipmentMap to test backward compatibility
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
    athleticCarryover: "Builds back thickness and pulling strength",
    indicator: { isIndicator: false }
  }
};

// Updated adaptExerciseForEquipment function to handle both formats
function adaptExerciseForEquipment(exerciseKey, equipmentLevel, trainingPhase = null) {
  const e = exerciseDatabase[exerciseKey];
  if (!e) {
    console.warn(`Exercise ${exerciseKey} not found in database`);
    return null;
  }

  let name;
  
  // Check if this exercise has phase-specific mappings
  if (e.equipmentMap && typeof e.equipmentMap === 'object' && 
      trainingPhase && e.equipmentMap[trainingPhase]) {
    
    console.log(`Using phase-specific mapping for ${exerciseKey} in ${trainingPhase} phase`);
    
    // Use phase-specific mapping
    name = e.equipmentMap[trainingPhase][equipmentLevel] ??
           e.equipmentMap[trainingPhase].commercial ??
           e.equipmentMap[trainingPhase].minimal ??
           e.equipmentMap[trainingPhase].bodyweight;
           
  } else if (e.equipmentMap && e.equipmentMap[equipmentLevel]) {
    // Fall back to simple equipment mapping for exercises without phase specificity
    console.log(`Using simple equipment mapping for ${exerciseKey}`);
    
    name = e.equipmentMap[equipmentLevel] ??
           e.equipmentMap.commercial ??
           e.equipmentMap.minimal ??
           e.equipmentMap.bodyweight;
  } else {
    // Final fallback to exercise name
    console.log(`No equipment mapping found for ${exerciseKey}, using exercise name`);
    name = e.name;
  }

  return {
    name,
    originalExercise: e.name,
    category: e.category,
    classification: e.classification,
    effort: e.effort,
    coachingCues: e.coachingCues,
    isSubstituted: name !== e.name
  };
}

// Test function to validate the functionality
function testPhaseSpecificMapping() {
  console.log("=== Testing Phase-Specific Exercise Mapping ===");
  
  const phases = ['early-offseason', 'mid-offseason', 'preseason', 'inseason'];
  const equipment = ['full', 'commercial', 'minimal', 'bodyweight'];
  
  // Test new format exercises
  console.log("\n--- Testing New Format (benchPress) ---");
  phases.forEach(phase => {
    equipment.forEach(eq => {
      const result = adaptExerciseForEquipment('benchPress', eq, phase);
      console.log(`${phase} + ${eq}: ${result?.name || 'ERROR'}`);
    });
  });
  
  // Test backward compatibility
  console.log("\n--- Testing Backward Compatibility (barbellRows) ---");
  equipment.forEach(eq => {
    const result = adaptExerciseForEquipment('barbellRows', eq, 'early-offseason');
    console.log(`${eq}: ${result?.name || 'ERROR'}`);
  });
  
  // Test missing exercise
  console.log("\n--- Testing Missing Exercise ---");
  const missing = adaptExerciseForEquipment('nonExistentExercise', 'full', 'early-offseason');
  console.log(`Missing exercise result: ${missing || 'null (expected)'}`);
}

// Browser compatibility
if (typeof window !== "undefined") {
  window.exerciseDatabase = exerciseDatabase;
  window.adaptExerciseForEquipment = adaptExerciseForEquipment;
  window.testPhaseSpecificMapping = testPhaseSpecificMapping;
}

// Export for module systems (if needed)
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    exerciseDatabase,
    adaptExerciseForEquipment,
    testPhaseSpecificMapping
  };
}
