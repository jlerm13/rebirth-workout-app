// blockPeriodization.js - Block Periodization Utility Functions
// Implements concentrated loading principles and wave progressions for athletic development

// ==================== CORE BLOCK PERIODIZATION CONSTANTS ====================

const BLOCK_TYPES = {
    ACCUMULATION: 'volume',      // Early off-season: Volume wave progression
    TRANSMUTATION: 'intensity',  // Mid off-season: Intensity wave progression  
    REALIZATION: 'specificity',  // Pre-season: Specificity wave progression
    MAINTENANCE: 'maintenance'   // In-season: Maintenance protocols
};

const PHASE_TO_BLOCK_MAP = {
    'early-offseason': BLOCK_TYPES.ACCUMULATION,
    'mid-offseason': BLOCK_TYPES.TRANSMUTATION,
    'preseason': BLOCK_TYPES.REALIZATION,
    'inseason': BLOCK_TYPES.MAINTENANCE
};

// ==================== WAVE PROGRESSION CALCULATIONS ====================

/**
 * Determines which type of wave progression to use based on training phase
 * @param {string} phase - Training phase (early-offseason, mid-offseason, preseason, inseason)
 * @returns {string} Block type (volume, intensity, specificity, maintenance)
 */
function getBlockWaveType(phase) {
    return PHASE_TO_BLOCK_MAP[phase] || BLOCK_TYPES.MAINTENANCE;
}

/**
 * Calculates volume progression for accumulation blocks
 * @param {number} week - Week number (1-4)
 * @param {number} baseVolume - Base volume value (100 = baseline)
 * @returns {number} Adjusted volume percentage
 */
function calculateVolumeWave(week, baseVolume = 100) {
    const volumeMultipliers = {
        1: 0.90,  // Start conservative: movement prep, aerobic capacity
        2: 1.00,  // Build to baseline: volume build, skill exposure  
        3: 1.10,  // Peak volume: systemic overload
        4: 0.75   // Deload: mobility, tempo work, low CNS stress
    };
    return Math.round(baseVolume * volumeMultipliers[week]);
}

/**
 * Calculates intensity progression for transmutation blocks
 * @param {number} week - Week number (1-4)
 * @param {number} baseIntensity - Base intensity percentage (e.g., 85)
 * @returns {number} Adjusted intensity percentage
 */
function calculateIntensityWave(week, baseIntensity = 85) {
    const intensityMultipliers = {
        1: 0.94,  // 80%: Strength-focused technique, sprint/jump prep
        2: 1.00,  // 85%: Peak strength-speed work, reduced accessories
        3: 1.06,  // 90%: Top-end work, neural efficiency
        4: 0.82   // 70%: Deload both stressors, prep for power work
    };
    return Math.round(baseIntensity * intensityMultipliers[week]);
}

/**
 * Calculates specificity focus for realization blocks
 * @param {number} week - Week number (1-4)
 * @returns {object} Volume, intensity, and focus specifications
 */
function calculateSpecificityWave(week) {
    const specificityProgression = {
        1: { 
            volume: 80, 
            intensity: 85, 
            focus: 'Power-focused efforts (jumps, medballs, sprints)' 
        },
        2: { 
            volume: 70, 
            intensity: 95, 
            focus: 'Sharpest neural outputs, minimal fatigue' 
        },
        3: { 
            volume: 60, 
            intensity: 95, 
            focus: 'Game-day simulation, low volume + high intent' 
        },
        4: { 
            volume: 50, 
            intensity: 80, 
            focus: 'Taper: maintain neural sharpness, maximize readiness' 
        }
    };
    return specificityProgression[week] || specificityProgression[1];
}

// ==================== EXPERIENCE-BASED REP RANGE PROGRESSIONS ====================

/**
 * Gets appropriate rep range/RM target based on experience, phase, and week
 * @param {string} experience - Athlete experience level (beginner, intermediate, advanced)
 * @param {string} phase - Training phase
 * @param {number} week - Week number (1-4)
 * @returns {string} Rep range or RM target (e.g., "5RM", "1-3RM")
 */
function getPhaseRM(experience, phase, week) {
    const waveType = getBlockWaveType(phase);
    
    const repRangeMatrix = {
        beginner: {
            volume: { 
                1: '8-10RM', 2: '8-10RM', 3: '8RM', 4: '10RM',
                note: 'Building work capacity and movement learning'
            },
            intensity: { 
                1: '5-8RM', 2: '5RM', 3: '5RM', 4: '8RM',
                note: 'Strength building with conservative loads'
            },
            specificity: { 
                1: '3-5RM', 2: '3RM', 3: '3RM', 4: '5RM',
                note: 'Strength expression and power introduction'
            },
            maintenance: {
                1: '5RM', 2: '5RM', 3: '5RM', 4: '5RM',
                note: 'Neural maintenance without excessive fatigue'
            }
        },
        intermediate: {
            volume: { 
                1: '5-8RM', 2: '5RM', 3: '5RM', 4: '8RM',
                note: 'Strength endurance development'
            },
            intensity: { 
                1: '3-5RM', 2: '3RM', 3: '1-3RM', 4: '5RM',
                note: 'Maximal strength development'
            },
            specificity: { 
                1: '1-3RM', 2: 'Power PRs', 3: 'Competition Simulation', 4: '3RM',
                note: 'Strength to power conversion'
            },
            maintenance: {
                1: '3-5RM', 2: '3-5RM', 3: '3-5RM', 4: '3-5RM',
                note: 'Strength maintenance with moderate loads'
            }
        },
        advanced: {
            volume: { 
                1: '5RM', 2: '5RM', 3: '5RM', 4: '5RM',
                note: 'Strength maintenance during base building'
            },
            intensity: { 
                1: '1-3RM', 2: '1RM', 3: 'Max Testing', 4: '3RM',
                note: 'Maximum strength development and testing'
            },
            specificity: { 
                1: 'Power PRs', 2: 'Competition Performance', 3: 'Peak Performance', 4: 'Maintenance',
                note: 'Power expression and competition readiness'
            },
            maintenance: {
                1: '3RM', 2: '3RM', 3: '3RM', 4: '3RM',
                note: 'Strength maintenance with power expression'
            }
        }
    };
    
    const experienceData = repRangeMatrix[experience] || repRangeMatrix.beginner;
    const waveData = experienceData[waveType] || experienceData.volume;
    
    return waveData[week] || waveData[1];
}

/**
 * Gets intensity guidelines for the current phase and week
 * @param {string} experience - Athlete experience level
 * @param {string} phase - Training phase  
 * @param {number} week - Week number (1-4)
 * @returns {string} Intensity guideline (e.g., "85-90%", "RPE 8-9")
 */
function getPhaseIntensity(experience, phase, week) {
    const waveType = getBlockWaveType(phase);
    
    const intensityMatrix = {
        beginner: {
            volume: { 1: 'RPE 7-8', 2: 'RPE 8', 3: 'RPE 8-9', 4: 'RPE 6-7' },
            intensity: { 1: 'RPE 8-9', 2: 'RPE 9', 3: 'RPE 9', 4: 'RPE 7-8' },
            specificity: { 1: 'RPE 8-9', 2: 'RPE 9', 3: 'RPE 9', 4: 'RPE 7-8' },
            maintenance: { 1: 'RPE 7-8', 2: 'RPE 7-8', 3: 'RPE 7-8', 4: 'RPE 7-8' }
        },
        intermediate: {
            volume: { 1: '75-80%', 2: '80-85%', 3: '85%', 4: '70-75%' },
            intensity: { 1: '85-90%', 2: '90-95%', 3: '95%+', 4: '80-85%' },
            specificity: { 1: '85-90%', 2: '90-95%', 3: '95%+', 4: '80-85%' },
            maintenance: { 1: '80-85%', 2: '80-85%', 3: '80-85%', 4: '80-85%' }
        },
        advanced: {
            volume: { 1: '80-85%', 2: '85%', 3: '85%', 4: '75-80%' },
            intensity: { 1: '90-95%', 2: '95%+', 3: '100%+', 4: '85-90%' },
            specificity: { 1: '90-95%', 2: '95%+', 3: '100%+', 4: '85-90%' },
            maintenance: { 1: '85-90%', 2: '85-90%', 3: '85-90%', 4: '85-90%' }
        }
    };
    
    const experienceData = intensityMatrix[experience] || intensityMatrix.beginner;
    const waveData = experienceData[waveType] || experienceData.volume;
    
    return waveData[week] || waveData[1];
}

// ==================== CONCENTRATED LOADING PRINCIPLES ====================

/**
 * Gets concentrated loading distribution for training qualities
 * @param {string} phase - Training phase
 * @param {number} week - Week number (1-4)
 * @returns {object} Training quality allocations and focus
 */
function getConcentratedLoading(phase, week) {
    const waveType = getBlockWaveType(phase);
    
    const loadingSchemes = {
        volume: {
            primary: { quality: 'Volume/Hypertrophy', allocation: 100, focus: 'Work capacity, movement quality, muscle mass' },
            secondary: { quality: 'Basic Strength', allocation: 60, focus: 'Technique refinement, moderate loads' },
            tertiary: { quality: 'Power', allocation: 20, focus: 'Movement pattern maintenance only' }
        },
        intensity: {
            primary: { quality: 'Maximal Strength', allocation: 100, focus: 'Neural efficiency, heavy loads, competition lifts' },
            secondary: { quality: 'Volume', allocation: 40, focus: 'Reduced due to sport practice demands' },
            tertiary: { quality: 'Power', allocation: 60, focus: 'Building toward realization phase' }
        },
        specificity: {
            primary: { quality: 'Power Expression', allocation: 100, focus: 'Speed, agility, sport-specific power' },
            secondary: { quality: 'Strength', allocation: 60, focus: 'Maintenance without interference' },
            tertiary: { quality: 'Volume', allocation: 20, focus: 'Minimal due to high sport demands' }
        },
        maintenance: {
            primary: { quality: 'Competition', allocation: 100, focus: 'Game performance, recovery, readiness' },
            secondary: { quality: 'Strength', allocation: 40, focus: 'Neural maintenance, injury prevention' },
            tertiary: { quality: 'Power', allocation: 30, focus: 'Sport-specific expression only' }
        }
    };
    
    return loadingSchemes[waveType] || loadingSchemes.maintenance;
}

// ==================== WEEKLY FOCUS AND COACHING NOTES ====================

/**
 * Gets weekly focus description for coaching context
 * @param {string} phase - Training phase
 * @param {number} week - Week number (1-4)
 * @returns {string} Weekly focus description
 */
function getWeeklyFocus(phase, week) {
    const waveType = getBlockWaveType(phase);
    
    const weeklyFocusMap = {
        volume: {
            1: 'Movement prep, aerobic capacity, technical GPP',
            2: 'Volume build, mild overreach, skill exposure', 
            3: 'Peak volume, systemic overload',
            4: 'Deload: mobility, tempo work, low CNS stress'
        },
        intensity: {
            1: 'Strength-focused technique, sprint/jump prep',
            2: 'Peak strength-speed work, reduced accessories',
            3: 'Top-end work, neural efficiency', 
            4: 'Deload: reduce both stressors, prep for power work'
        },
        specificity: {
            1: 'Power-focused efforts (jumps, medballs, sprints)',
            2: 'Sharpest neural outputs, minimal fatigue',
            3: 'Game-day simulation, low volume + high intent',
            4: 'Taper: maintain neural sharpness, maximize readiness'
        },
        maintenance: {
            1: 'Competition focus, recovery emphasis',
            2: 'Game performance, maintain readiness',
            3: 'Peak competition, minimal interference', 
            4: 'Active recovery, preparation for next cycle'
        }
    };
    
    const focusData = weeklyFocusMap[waveType] || weeklyFocusMap.maintenance;
    return focusData[week] || focusData[1];
}

/**
 * Gets comprehensive phase notes for coaching guidance
 * @param {string} experience - Athlete experience level
 * @param {string} phase - Training phase
 * @returns {string} Phase-specific coaching note
 */
function getPhaseNote(experience, phase) {
    const waveType = getBlockWaveType(phase);
    
    const phaseNotes = {
        beginner: {
            volume: 'Focus on movement learning and work capacity. Leave 2 reps in tank.',
            intensity: 'Conservative strength building. Emphasize perfect technique.',
            specificity: 'Introduction to power movements. Quality over quantity.',
            maintenance: 'Simple maintenance. Avoid fatigue accumulation.'
        },
        intermediate: {
            volume: 'Build work capacity while maintaining strength gains.',
            intensity: 'True strength focus. Push loading while managing recovery.',
            specificity: 'Convert strength to power. Sport-specific preparation.',
            maintenance: 'Balance competition demands with training maintenance.'
        },
        advanced: {
            volume: 'Maintain strength while building other qualities.',
            intensity: 'Maximum strength development. Peak neural efficiency.',
            specificity: 'Peak power expression. Competition readiness.',
            maintenance: 'Minimal effective dose. Competition performance priority.'
        }
    };
    
    const experienceNotes = phaseNotes[experience] || phaseNotes.beginner;
    return experienceNotes[waveType] || experienceNotes.maintenance;
}

// ==================== INDICATOR EXERCISE TRACKING ====================

/**
 * Gets indicator exercises for tracking training effectiveness
 * @param {string} phase - Training phase
 * @returns {array} List of key indicator exercises to track
 */
function getIndicatorExercises(phase) {
    const waveType = getBlockWaveType(phase);
    
    const indicators = {
        volume: [
            { exercise: 'Bodyweight Chin-ups', metric: 'max reps', target: 'increase' },
            { exercise: 'Push-ups', metric: 'max reps', target: 'increase' },
            { exercise: 'Wall Sit', metric: 'time', target: 'increase' }
        ],
        intensity: [
            { exercise: 'Box Squat', metric: '1RM', target: 'increase' },
            { exercise: 'Bench Press', metric: '1RM', target: 'increase' },
            { exercise: 'Weighted Chin-ups', metric: 'max weight', target: 'increase' }
        ],
        specificity: [
            { exercise: 'Vertical Jump', metric: 'height', target: 'increase' },
            { exercise: '10-Yard Sprint', metric: 'time', target: 'decrease' },
            { exercise: '40-Yard Sprint', metric: 'time', target: 'decrease' }
        ],
        maintenance: [
            { exercise: 'Movement Quality', metric: 'subjective', target: 'maintain' },
            { exercise: 'Vertical Jump', metric: 'height', target: 'maintain' },
            { exercise: 'Bench Press', metric: '3RM', target: 'maintain' }
        ]
    };
    
    return indicators[waveType] || indicators.maintenance;
}

// ==================== PUBLIC API ====================

// Export all functions for use in other modules
window.BlockPeriodization = {
    // Core wave functions
    getBlockWaveType,
    calculateVolumeWave,
    calculateIntensityWave, 
    calculateSpecificityWave,
    
    // Rep range and intensity functions
    getPhaseRM,
    getPhaseIntensity,
    
    // Concentrated loading
    getConcentratedLoading,
    
    // Coaching support
    getWeeklyFocus,
    getPhaseNote,
    getIndicatorExercises,
    
    // Constants for reference
    BLOCK_TYPES,
    PHASE_TO_BLOCK_MAP
};

// Console log for debugging
console.log('✅ Block Periodization System Loaded');
console.log('Available functions:', Object.keys(window.BlockPeriodization));
