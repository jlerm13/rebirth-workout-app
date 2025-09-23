

const workoutTemplates = {

  // ======================== ADVANCED TEMPLATES ========================
  

  // ======================== SPECIAL TEMPLATES ========================
  'washed-up-meathead': {
    '3day': {
      week1: {
        monday: {
          title: "Max-Effort Upper Body",
          exercises: [
            { type: "max-effort", exercise: "benchPress", sets: "Work up to 5RM", note: "Leave ego at door" },
            { type: "supplemental", exercise: "dbBenchPress", sets: "3 × 10-12" },
            { type: "assistance", exercise: "rows", sets: "4 × 10" },
            { type: "assistance", exercise: "facePulls", sets: "3 × 15", note: "Shoulder health" },
            { type: "assistance", exercise: "curls", sets: "3 × 10", note: "For the guns" }
          ]
        },
        wednesday: {
          title: "Max-Effort Lower Body",
          exercises: [
            { type: "max-effort", exercise: "trapBarDeadlift", sets: "Work up to 5RM", note: "Safer on back" },
            { type: "assistance", exercise: "lunges", sets: "3 × 8 each", note: "Knee-friendly" },
            { type: "assistance", exercise: "hyperextensions", sets: "3 × 12" },
            { type: "core", exercise: "plank", sets: "3 × 45 seconds" }
          ]
        },
        friday: {
          title: "Repetition Upper Body",
          exercises: [
            { type: "repetition", exercise: "dbInclinePress", sets: "3 × 10-12" },
            { type: "assistance", exercise: "pullups", sets: "3 × max", note: "Band assist if needed" },
            { type: "assistance", exercise: "lateralRaises", sets: "3 × 12" },
            { type: "assistance", exercise: "arms superset", sets: "3 × 12 each" },
            { type: "conditioning", exercise: "bike or row", sets: "10 minutes", note: "Easy pace" }
          ]
        },
        saturday_optional: {
          title: "Vanity Day (Optional)",
          exercises: [
            { type: "arms", exercise: "bicep work", sets: "4 × 10-12" },
            { type: "shoulders", exercise: "shoulder work", sets: "4 × 12-15" },
            { type: "calves", exercise: "calf raises", sets: "3 × 15-20" },
            { type: "abs", exercise: "ab circuit", sets: "10 minutes" },
            { type: "conditioning", exercise: "walk", sets: "20-30 minutes" }
          ]
        }  // closes saturday_optional
      }    // closes week1
    }      // closes '3day'
  }        // closes 'washed-up-meathead'
};         // closes workoutTemplates - CRITICAL LINE!

/* ======================== TEMPLATE HELPERS ======================== */

/**
 * Get a specific workout template
 * @param {string} experience - beginner, intermediate, advanced
 * @param {string} phase - early-offseason, mid-offseason, preseason, inseason
 * @param {string} templateType - 4day, 3day, speed, 2day
 * @param {number} week - Week number (1-4 typically)
 * @returns {object} The workout template for the specified parameters
 */
function getWorkoutTemplate(experience, phase, templateType, week) {
  try {
    const weekKey = `week${week}`;
    
    // Handle special cases
    if (experience === 'washed-up-meathead') {
      return workoutTemplates['washed-up-meathead']['3day'][weekKey];
    }
    
    // Check if template exists
    if (!workoutTemplates[experience]) {
      console.warn(`No templates for experience level: ${experience}`);
      return null;
    }
    
    if (!workoutTemplates[experience][phase]) {
      console.warn(`No templates for phase: ${phase} at ${experience} level`);
      return null;
    }
    
    if (!workoutTemplates[experience][phase][templateType]) {
      console.warn(`No ${templateType} template for ${experience} ${phase}`);
      // Try fallback to 4day template
      if (workoutTemplates[experience][phase]['4day']) {
        return workoutTemplates[experience][phase]['4day'][weekKey];
      }
      return null;
    }
    
    return workoutTemplates[experience][phase][templateType][weekKey] || 
           workoutTemplates[experience][phase][templateType]['week1']; // Default to week 1
    
  } catch (error) {
    console.error('Error getting workout template:', error);
    return null;
  }
}

/**
 * Get exercise rotation schedule based on experience level
 * @param {string} experience - beginner, intermediate, advanced
 * @returns {object} Rotation schedule with weeks between rotations
 */
function getExerciseRotationSchedule(experience) {
  const rotationSchedules = {
    beginner: {
      maxEffort: 3,  // Rotate every 3 weeks
      dynamic: 2,    // Change jump variations every 2 weeks
      repetition: 4  // Change rep schemes every 4 weeks
    },
    intermediate: {
      maxEffort: 2,  // Rotate every 2 weeks
      dynamic: 2,    // Change jumps every 2 weeks
      repetition: 3  // Change rep schemes every 3 weeks
    },
    advanced: {
      maxEffort: 1,  // Weekly rotation
      dynamic: 1,    // Weekly variation
      repetition: 2  // Bi-weekly changes
    }
  },
  
  return rotationSchedules[experience] || rotationSchedules.beginner;
}

/**
 * Get recommended loading parameters for a specific phase
 * @param {string} phase - Training phase
 * @param {string} experience - Experience level
 * @returns {object} Loading recommendations
 */
function getLoadingParameters(phase, experience) {
  const loadingParams = {
    'early-offseason': {
      beginner: { intensity: '70-85%', volume: 'moderate', focus: 'technique' },
      intermediate: { intensity: '75-90%', volume: 'moderate-high', focus: 'building' },
      advanced: { intensity: '80-90%', volume: 'high', focus: 'restoration' }
    },
    'mid-offseason': {
      beginner: { intensity: '75-90%', volume: 'high', focus: 'strength' },
      intermediate: { intensity: '80-95%', volume: 'high', focus: 'max strength' },
      advanced: { intensity: '85-100%', volume: 'very high', focus: 'overload' }
    },
    'preseason': {
      beginner: { intensity: '70-85%', volume: 'low-moderate', focus: 'power' },
      intermediate: { intensity: '75-85%', volume: 'moderate', focus: 'speed-strength' },
      advanced: { intensity: '80-90%', volume: 'moderate', focus: 'peaking' }
    },
    'inseason': {
      beginner: { intensity: '70-85%', volume: 'low', focus: 'maintenance' },
      intermediate: { intensity: '75-87%', volume: 'low', focus: 'maintenance' },
      advanced: { intensity: '80-90%', volume: 'minimal', focus: 'neural' }
    }
  },
  
  return loadingParams[phase]?.[experience] || loadingParams['early-offseason']['beginner'];
}

/**
 * Get available template types for a specific phase
 * @param {string} phase - Training phase
 * @returns {array} Available template types
 */
function getAvailableTemplates(phase) {
  const templateAvailability = {
    'early-offseason': ['4day', '3day'],
    'mid-offseason': ['4day', '3day'],
    'preseason': ['4day', '3day', 'speed'],
    'inseason': ['2day']
  };
  
  return templateAvailability[phase] || ['4day', '3day'];
}

/* =============== EXPORTS (Node & Browser) =============== */
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    workoutTemplates,
    getWorkoutTemplate,
    getExerciseRotationSchedule,
    getLoadingParameters,
    getAvailableTemplates
  };
}

if (typeof window !== "undefined") {
  window.TemplateDB = {
    workoutTemplates,
    getWorkoutTemplate,
    getExerciseRotationSchedule,
    getLoadingParameters,
    getAvailableTemplates
  };
}
