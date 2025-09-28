// Exercise Loader Module - Combines all modular exercise files into exerciseDatabase
window.exerciseDatabase = {};
window.exerciseLoadingStatus = {
    maxEffortUpper: false,
    maxEffortLower: false,
    dynamicUpper: false,
    dynamicLower: false,
    repetitionUpper: false,
    repetitionLower: false,
    assistanceUpper: false,
    assistanceLower: false,
    athleticMovements: false,
    conditioning: false,
    errors: []
};

function loadExerciseModule(moduleName, moduleData) {
    try {
        if (moduleData && typeof moduleData === 'object') {
            // Merge the module data into the global exercise database
            Object.assign(window.exerciseDatabase, moduleData);
            window.exerciseLoadingStatus[moduleName] = true;
            console.log(`✅ Loaded ${moduleName} exercises (${Object.keys(moduleData).length} exercises)`);
            return true;
        } else {
            throw new Error(`Invalid module data for ${moduleName}`);
        }
    } catch (error) {
        console.error(`❌ Failed to load ${moduleName} exercises:`, error);
        window.exerciseLoadingStatus.errors.push({
            module: moduleName,
            error: error.message
        });
        return false;
    }
}

function validateExerciseLoading() {
    const required = ['maxEffortUpper', 'maxEffortLower', 'assistanceUpper', 'assistanceLower'];
    const loaded = required.filter(m => window.exerciseLoadingStatus[m]);
    
    if (loaded.length === 0) {
        console.error('❌ No exercise modules loaded successfully!');
        // Create minimal fallback
        window.exerciseDatabase = {
            benchPress: {
                name: "Bench Press",
                classification: "primary",
                effort: "ME",
                category: "max-effort",
                movementPattern: "horizontal-push",
                equipmentMap: {
                    full: "Barbell Bench Press",
                    commercial: "DB Bench Press", 
                    minimal: "Push-ups",
                    bodyweight: "Push-ups"
                },
                coachingCues: ["Maintain tight upper back", "Drive feet into floor"],
                athleticCarryover: "Develops pushing power",
                indicator: { isIndicator: true, type: "absolute" }
            }
        };
    } else if (loaded.length < required.length) {
        console.warn(`⚠️ Only partially loaded exercise modules: ${loaded.join(', ')}`);
    } else {
        console.log('✅ All core exercise modules loaded successfully!');
    }
    
    // Report any errors
    if (window.exerciseLoadingStatus.errors.length > 0) {
        console.group('Exercise Loading Errors:');
        window.exerciseLoadingStatus.errors.forEach(err => {
            console.error(`${err.module}: ${err.error}`);
        });
        console.groupEnd();
    }
}

// Exercise helper functions
window.ExerciseHelpers = {
    /**
     * Get exercise data by key with equipment and phase adaptation
     */
    getExercise: function(exerciseKey, equipmentLevel = 'full', trainingPhase = null) {
        const exercise = window.exerciseDatabase[exerciseKey];
        if (!exercise) {
            console.warn(`Exercise ${exerciseKey} not found in database`);
            return null;
        }
        
        // Clone the exercise to avoid modifying original
        const adaptedExercise = { ...exercise };
        
        // Apply equipment adaptation
        if (exercise.equipmentMap) {
            if (trainingPhase && exercise.equipmentMap[trainingPhase]) {
                // Phase-specific equipment mapping
                adaptedExercise.adaptedName = exercise.equipmentMap[trainingPhase][equipmentLevel] ||
                                            exercise.equipmentMap[trainingPhase].commercial ||
                                            exercise.equipmentMap[trainingPhase].minimal ||
                                            exercise.equipmentMap[trainingPhase].bodyweight ||
                                            exercise.name;
            } else {
                // Simple equipment mapping  
                adaptedExercise.adaptedName = exercise.equipmentMap[equipmentLevel] ||
                                            exercise.equipmentMap.commercial ||
                                            exercise.equipmentMap.minimal ||
                                            exercise.equipmentMap.bodyweight ||
                                            exercise.name;
            }
            adaptedExercise.isSubstituted = adaptedExercise.adaptedName !== exercise.name;
        } else {
            adaptedExercise.adaptedName = exercise.name;
            adaptedExercise.isSubstituted = false;
        }
        
        return adaptedExercise;
    },

    /**
     * Get all exercises by category
     */
    getExercisesByCategory: function(category) {
        return Object.entries(window.exerciseDatabase)
            .filter(([key, exercise]) => exercise.category === category)
            .reduce((acc, [key, exercise]) => {
                acc[key] = exercise;
                return acc;
            }, {});
    },

    /**
     * Get all indicator exercises for progress tracking
     */
    getIndicatorExercises: function() {
        return Object.entries(window.exerciseDatabase)
            .filter(([key, exercise]) => exercise.indicator && exercise.indicator.isIndicator)
            .reduce((acc, [key, exercise]) => {
                acc[key] = exercise;
                return acc;
            }, {});
    },

    /**
     * Search exercises by name or movement pattern
     */
    searchExercises: function(searchTerm) {
        const term = searchTerm.toLowerCase();
        return Object.entries(window.exerciseDatabase)
            .filter(([key, exercise]) => 
                exercise.name.toLowerCase().includes(term) ||
                exercise.movementPattern.toLowerCase().includes(term) ||
                key.toLowerCase().includes(term)
            )
            .reduce((acc, [key, exercise]) => {
                acc[key] = exercise;
                return acc;
            }, {});
    }
};

/**
 * Initialize the exercise system after all modules have loaded
 */
window.initializeExercises = function() {
    validateExerciseLoading();
    console.log('Exercise system initialized');
    console.log(`Total exercises loaded: ${Object.keys(window.exerciseDatabase).length}`);
    console.log('Exercise categories:', [...new Set(Object.values(window.exerciseDatabase).map(e => e.category))]);
    
    // Test key exercises that templates will need
    const keyExercises = ['benchPress', 'boxSquat', 'dbBenchPress', 'facePulls', 'pullups'];
    const missing = keyExercises.filter(ex => !window.exerciseDatabase[ex]);
    if (missing.length > 0) {
        console.warn('⚠️ Missing key exercises:', missing);
    }
};

/**
 * Exercise database statistics for debugging
 */
window.ExerciseStats = {
    getTotalCount: () => Object.keys(window.exerciseDatabase).length,
    getByCategory: () => {
        const stats = {};
        Object.values(window.exerciseDatabase).forEach(ex => {
            stats[ex.category] = (stats[ex.category] || 0) + 1;
        });
        return stats;
    },
    getByClassification: () => {
        const stats = {};
        Object.values(window.exerciseDatabase).forEach(ex => {
            stats[ex.classification] = (stats[ex.classification] || 0) + 1;
        });
        return stats;
    },
    getPhaseSpecificCount: () => {
        return Object.values(window.exerciseDatabase).filter(ex => 
            ex.equipmentMap && typeof ex.equipmentMap === 'object' && 
            Object.keys(ex.equipmentMap).some(key => key.includes('-'))
        ).length;
    }
};

// Make functions available globally for module loading
window.loadExerciseModule = loadExerciseModule;

console.log('Exercise Loader System Ready');
console.log('Waiting for exercise modules to load...');
