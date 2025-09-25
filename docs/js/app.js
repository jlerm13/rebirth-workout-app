// ==================== ERROR CHECKING AND UTILITIES ====================
function checkTemplatesLoaded() {
    if (!window.workoutTemplates || Object.keys(window.workoutTemplates).length === 0) {
        console.error('Templates not loaded!');
        showError('Workout templates failed to load. Please refresh the page.');
        return false;
    }
    return true;
}

// Utility: log and display errors
function showError(message) {
    console.error(message);
    const box = document.getElementById('errorBox');
    if (box) {
        box.classList.remove('hidden');
        box.innerHTML += `<div class="error-message">⚠️ ${message}</div>`;
    }
}

// ==================== STATE MANAGEMENT ====================
let userData = {
    experience: null,
    phase: null,
    context: null,
    equipment: null,
    currentWeek: 1,
    currentTemplate: '4day',
    exerciseVariations: {} // Store user's exercise variation selections
};

// ==================== UI FLOW ====================
function startOnboarding() {
    hideAllScreens();
    document.getElementById('progressTracker').classList.remove('hidden');
    showExperienceScreen();
    updateProgressTracker(1);
}

function showExperienceScreen() {
    const screen = document.getElementById('experienceScreen');
    screen.innerHTML = `
        <div class="card">
            <h2>What's your training experience?</h2>
            <div class="options-grid">
                <div class="option-card" onclick="selectExperience('beginner')">
                    <div class="option-title">Beginner</div>
                    <div class="option-desc">Less than 2 years of structured training</div>
                </div>
                <div class="option-card" onclick="selectExperience('intermediate')">
                    <div class="option-title">Intermediate</div>
                    <div class="option-desc">2-5 years of consistent training</div>
                </div>
                <div class="option-card" onclick="selectExperience('advanced')">
                    <div class="option-title">Advanced</div>
                    <div class="option-desc">5+ years, competitive background</div>
                </div>
            </div>
            <div class="btn-group">
                <button class="btn btn-secondary" onclick="goBack('welcome')">Back</button>
                <button class="btn hidden" id="experienceContinue" onclick="showPhaseScreen()">Continue</button>
            </div>
        </div>
    `;
    screen.classList.remove('hidden');
}

function showPhaseScreen() {
    hideAllScreens();
    const screen = document.getElementById('phaseScreen');
    screen.innerHTML = `
        <div class="card">
            <h2>What training phase are you in?</h2>
            <div class="options-grid">
                <div class="option-card" onclick="selectPhase('early-offseason')">
                    <div class="option-title">Early Off-Season</div>
                    <div class="option-desc">Recovery & base building</div>
                </div>
                <div class="option-card" onclick="selectPhase('mid-offseason')">
                    <div class="option-title">Mid Off-Season</div>
                    <div class="option-desc">Maximum strength & muscle building</div>
                </div>
                <div class="option-card" onclick="selectPhase('preseason')">
                    <div class="option-title">Pre-Season</div>
                    <div class="option-desc">Convert strength to power</div>
                </div>
                <div class="option-card" onclick="selectPhase('inseason')">
                    <div class="option-title">In-Season</div>
                    <div class="option-desc">Maintain & perform</div>
                </div>
            </div>
            <div class="btn-group">
                <button class="btn btn-secondary" onclick="goBack('experience')">Back</button>
                <button class="btn hidden" id="phaseContinue" onclick="showContextScreen()">Continue</button>
            </div>
        </div>
    `;
    screen.classList.remove('hidden');
    updateProgressTracker(2);
}

function showContextScreen() {
    hideAllScreens();
    const screen = document.getElementById('contextScreen');
    screen.innerHTML = `
        <div class="card">
            <h2>What's your training context?</h2>
            <div class="options-grid">
                <div class="option-card" onclick="selectContext('franchise')">
                    <div class="option-title">Franchise Gym</div>
                    <div class="option-desc">Commercial gym with group training</div>
                </div>
                <div class="option-card" onclick="selectContext('remote')">
                    <div class="option-title">Remote/Traveling</div>
                    <div class="option-desc">Variable equipment access</div>
                </div>
                <div class="option-card" onclick="selectContext('team')">
                    <div class="option-title">Team Setting</div>
                    <div class="option-desc">Coaching athletes with mixed abilities</div>
                </div>
                <div class="option-card" onclick="selectContext('meathead')">
                    <div class="option-title">Washed-Up Meathead</div>
                    <div class="option-desc">Former athlete, health-conscious</div>
                </div>
            </div>
            <div class="btn-group">
                <button class="btn btn-secondary" onclick="goBack('phase')">Back</button>
                <button class="btn hidden" id="contextContinue" onclick="showEquipmentScreen()">Continue</button>
            </div>
        </div>
    `;
    screen.classList.remove('hidden');
    updateProgressTracker(3);
}

function showEquipmentScreen() {
    hideAllScreens();
    const screen = document.getElementById('equipmentScreen');
    screen.innerHTML = `
        <div class="card">
            <h2>What equipment do you have access to?</h2>
            <div class="options-grid">
                <div class="option-card" onclick="selectEquipment('full')">
                    <div class="option-title">Full Facility</div>
                    <div class="option-desc">Power racks, specialty bars, sleds, etc.</div>
                </div>
                <div class="option-card" onclick="selectEquipment('commercial')">
                    <div class="option-title">Commercial Gym</div>
                    <div class="option-desc">Standard equipment, machines</div>
                </div>
                <div class="option-card" onclick="selectEquipment('minimal')">
                    <div class="option-title">Minimal Equipment</div>
                    <div class="option-desc">Dumbbells, bands, basic setup</div>
                </div>
                <div class="option-card" onclick="selectEquipment('bodyweight')">
                    <div class="option-title">Bodyweight Only</div>
                    <div class="option-desc">No equipment, creativity required</div>
                </div>
            </div>
            <div class="btn-group">
                <button class="btn btn-secondary" onclick="goBack('context')">Back</button>
                <button class="btn hidden" id="equipmentContinue" onclick="generateProgram()">Generate Program</button>
            </div>
        </div>
    `;
    screen.classList.remove('hidden');
    updateProgressTracker(4);
}

function updateProgressTracker(step) {
    document.querySelectorAll('.progress-step').forEach((el, idx) => {
        if (idx < step - 1) {
            el.classList.add('completed');
            el.classList.remove('active');
        } else if (idx === step - 1) {
            el.classList.add('active');
            el.classList.remove('completed');
        } else {
            el.classList.remove('active', 'completed');
        }
    });
}

function hideAllScreens() {
    const screens = ['welcomeScreen', 'experienceScreen', 'phaseScreen', 'contextScreen', 'equipmentScreen', 'programScreen'];
    screens.forEach(screenId => {
        document.getElementById(screenId).classList.add('hidden');
    });
}

function goBack(screen) {
    hideAllScreens();
    switch (screen) {
        case 'welcome':
            document.getElementById('welcomeScreen').classList.remove('hidden');
            document.getElementById('progressTracker').classList.add('hidden');
            break;
        case 'experience':
            showExperienceScreen();
            updateProgressTracker(1);
            break;
        case 'phase':
            showPhaseScreen();
            updateProgressTracker(2);
            break;
        case 'context':
            showContextScreen();
            updateProgressTracker(3);
            break;
    }
}

// ==================== SELECTORS ====================
function selectExperience(level) {
    userData.experience = level;
    selectCard('#experienceScreen', 'experienceContinue');
}

function selectPhase(phase) {
    userData.phase = phase;
    selectCard('#phaseScreen', 'phaseContinue');
}

function selectContext(context) {
    userData.context = context;
    selectCard('#contextScreen', 'contextContinue');
}

function selectEquipment(equipment) {
    userData.equipment = equipment;
    selectCard('#equipmentScreen', 'equipmentContinue');
}

function selectCard(screenSelector, continueBtnId) {
    document.querySelectorAll(`${screenSelector} .option-card`).forEach(opt => opt.classList.remove('selected'));
    event.target.closest('.option-card').classList.add('selected');
    document.getElementById(continueBtnId).classList.remove('hidden');
}

// ==================== PROGRAM GENERATION ====================
function generateProgram() {
    hideAllScreens();
    document.getElementById('programScreen').classList.remove('hidden');
    updateProgressTracker(5);

    const phaseNames = {
        'early-offseason': 'Early Off-Season',
        'mid-offseason': 'Mid Off-Season',
        'preseason': 'Pre-Season',
        'inseason': 'In-Season'
    };
    const experienceNames = {
        'beginner': 'Beginner',
        'intermediate': 'Intermediate',
        'advanced': 'Advanced'
    };

    document.getElementById('programTitle').textContent =
        `${experienceNames[userData.experience] || 'Unknown'} - ${phaseNames[userData.phase] || 'Phase'} Program`;

    generateProgramOverview();

    // Set default template based on phase and context
    if (userData.phase === 'inseason') {
        userData.currentTemplate = '2day';
    } else if (userData.context === 'meathead') {
        userData.currentTemplate = '3day';
    } else {
        userData.currentTemplate = '4day';
    }

    // Generate appropriate template tabs
    generateTemplateTabs();
    
    renderWorkouts();
}

function generateTemplateTabs() {
    const container = document.querySelector('.template-tabs');
    const availableTemplates = getAvailableTemplatesForPhase(userData.phase);
    
    let tabsHTML = '';
    availableTemplates.forEach((template, index) => {
        const isActive = template.key === userData.currentTemplate ? 'active' : '';
        tabsHTML += `<div class="template-tab ${isActive}" onclick="selectTemplate('${template.key}')">${template.name}</div>`;
    });
    
    container.innerHTML = tabsHTML;
}

function getAvailableTemplatesForPhase(phase) {
    // Special case for washed-up meathead
    if (userData.context === 'meathead') {
        return [{ key: '3day', name: 'Meathead 3-Day' }];
    }
    
    const templateOptions = {
        'early-offseason': [
            { key: '4day', name: '4-Day' },
            { key: '3day', name: '3-Day' }
        ],
        'mid-offseason': [
            { key: '4day', name: '4-Day' },
            { key: '3day', name: '3-Day' },
            { key: 'speed', name: 'With Speed' }
        ],
        'preseason': [
            { key: '4day', name: '4-Day' },
            { key: '3day', name: '3-Day' },
            { key: 'speed', name: 'With Speed' }
        ],
        'inseason': [
            { key: '2day', name: 'In-Season (2-Day)' }
        ]
    };
    
    return templateOptions[phase] || templateOptions['early-offseason'];
}

function generateProgramOverview() {
    const overview = document.getElementById('programOverview');
    const phaseGuidelines = {
        'early-offseason': 'Focus on recovery, movement quality, and building base strength.',
        'mid-offseason': 'Maximum strength and muscle building. High training volume.',
        'preseason': 'Convert strength to power. Sport-specific prep.',
        'inseason': 'Maintenance, manage fatigue, stay game-ready.'
    };
    const contextNotes = {
        'franchise': 'Adapted for group training environment.',
        'remote': 'Flexible for variable equipment access.',
        'team': 'Designed for teams with mixed ability levels.',
        'meathead': 'Strength-focused with health consideration.'
    };

    overview.innerHTML = `
        <h4>Your Program Overview</h4>
        <ul>
            <li><strong>Phase Focus:</strong> ${phaseGuidelines[userData.phase] || 'N/A'}</li>
            <li><strong>Context:</strong> ${contextNotes[userData.context] || 'N/A'}</li>
            <li><strong>Equipment Level:</strong> ${userData.equipment || 'N/A'}</li>
            <li><strong>Weekly Volume:</strong> ${userData.currentTemplate}</li>
        </ul>
    `;
}

function selectTemplate(template) {
    userData.currentTemplate = template;
    generateTemplateTabs(); // Regenerate tabs to update active state
    renderWorkouts();
}

// ==================== IMPROVED WORKOUT RENDERING WITH VARIATIONS ====================
function renderWorkouts() {
    if (!checkTemplatesLoaded()) {
        const container = document.getElementById('workoutDays');
        container.innerHTML = `
            <div class="workout-day">
                <p style="color: red;">Error: Templates not loaded. Please refresh the page.</p>
            </div>
        `;
        return;
    }

    const container = document.getElementById('workoutDays');
    const weekKey = `week${userData.currentWeek}`;
    let templates;

    if (userData.context === 'meathead') {
        templates = window.workoutTemplates?.['washed-up-meathead']?.['3day'];
    } else {
        templates = window.workoutTemplates?.[userData.experience]?.[userData.phase]?.[userData.currentTemplate];
    }

    if (!templates) {
        showError(`No templates found for ${userData.experience} ${userData.phase} ${userData.currentTemplate}`);
        container.innerHTML = `<div class="workout-day"><p>No templates found. Please try a different combination.</p></div>`;
        return;
    }

    const currentWeek = templates?.[weekKey];
    if (!currentWeek) {
        showError(`No workouts found for ${weekKey} in ${userData.currentTemplate} template.`);
        container.innerHTML = `<div class="workout-day"><p>No workouts found for ${weekKey}. Try Week 1 or a different template.</p></div>`;
        return;
    }

    let html = '';
    Object.entries(currentWeek).forEach(([dayKey, workoutDay]) => {
        if (dayKey === 'title' || dayKey === 'notes') return;
        
        html += `
            <div class="workout-day">
                <div class="workout-header">
                    <div class="workout-title">${dayKey.charAt(0).toUpperCase() + dayKey.slice(1)}: ${workoutDay.title || ''}</div>
                    <div class="workout-badge">${dayKey}</div>
                </div>
        `;
        
        if (workoutDay.exercises) {
            workoutDay.exercises.forEach((exercise, index) => {
                const exerciseData = exerciseDatabase?.[exercise.exercise];
                let exerciseName = exercise.exercise;
                let isSubstituted = false;

                // Check if user has selected a variation for this exercise
                if (userData.exerciseVariations && userData.exerciseVariations[exercise.exercise]) {
                    exerciseName = userData.exerciseVariations[exercise.exercise];
                } else {
                    // Handle equipment adaptation
                    if (exerciseData && exerciseData.equipmentMap) {
                        exerciseName = exerciseData.equipmentMap[userData.equipment] || exerciseData.name;
                        if (exerciseName !== exerciseData.name) isSubstituted = true;
                    } else if (exerciseData) {
                        exerciseName = exerciseData.name;
                    }
                }

                if (!exerciseData) {
                    showError(`Missing exercise data: ${exercise.exercise}`);
                    exerciseName = exercise.exercise;
                }

                const exerciseId = `${exercise.exercise}-${dayKey}-${index}`;

                html += `
                    <div class="exercise-block">
                        <div class="exercise-header">
                            <span class="exercise-category category-${exercise.type}">${exercise.type.toUpperCase()}</span>
                            ${exerciseData?.variations ? `<button class="variation-btn" onclick="showVariations('${exerciseId}', this)">Variations</button>` : ''}
                        </div>
                        <div class="exercise-name" id="exercise-${exerciseId}-name">${exerciseName}</div>
                        <div class="exercise-details">Sets/Reps: ${exercise.sets}</div>
                        ${exercise.intensity ? `<div class="exercise-details">Intensity: ${exercise.intensity}</div>` : ''}
                        ${exercise.note ? `<div class="exercise-details">Note: ${exercise.note}</div>` : ''}
                        ${isSubstituted && userData.equipment !== 'full' ? `<div class="substitution-notice">Equipment adaptation: ${userData.equipment}</div>` : ''}
                        
                        ${exerciseData?.variations ? `
                            <div class="variations-dropdown hidden" id="variations-${exerciseId}">
                                <div class="variations-header">Choose Variation:</div>
                                ${exerciseData.variations.map(variation => 
                                    `<div class="variation-option" onclick="selectVariation('${exercise.exercise}', '${variation}', '${exerciseId}')">${variation}</div>`
                                ).join('')}
                                <div class="variation-option default-option" onclick="selectVariation('${exercise.exercise}', '${exerciseData.name}', '${exerciseId}')">← Back to ${exerciseData.name}</div>
                            </div>
                        ` : ''}
                    </div>
                `;
            });
        }
        html += `</div>`;
    });
    
    container.innerHTML = html;
}

// ==================== VARIATIONS FUNCTIONALITY ====================
function showVariations(exerciseId, buttonElement) {
    const dropdown = document.getElementById(`variations-${exerciseId}`);
    const allDropdowns = document.querySelectorAll('.variations-dropdown');
    
    // Close all other dropdowns
    allDropdowns.forEach(dd => {
        if (dd.id !== `variations-${exerciseId}`) {
            dd.classList.add('hidden');
        }
    });
    
    // Reset all other buttons
    document.querySelectorAll('.variation-btn').forEach(btn => {
        if (btn !== buttonElement) {
            btn.textContent = 'Variations';
        }
    });
    
    // Toggle current dropdown
    dropdown.classList.toggle('hidden');
    
    // Update button text
    if (dropdown.classList.contains('hidden')) {
        buttonElement.textContent = 'Variations';
    } else {
        buttonElement.textContent = 'Close';
    }
}

function selectVariation(exerciseKey, variationName, exerciseId) {
    const nameElement = document.getElementById(`exercise-${exerciseId}-name`);
    const dropdown = document.getElementById(`variations-${exerciseId}`);
    
    // Update the displayed exercise name
    nameElement.textContent = variationName;
    
    // Close the dropdown
    dropdown.classList.add('hidden');
    
    // Reset button text
    const button = dropdown.parentElement.querySelector('.variation-btn');
    if (button) button.textContent = 'Variations';
    
    // Store user's selection
    if (!userData.exerciseVariations) userData.exerciseVariations = {};
    userData.exerciseVariations[exerciseKey] = variationName;
}

// ==================== WEEK NAVIGATION ====================
function previousWeek() {
    if (userData.currentWeek > 1) {
        userData.currentWeek--;
        document.getElementById('weekDisplay').textContent = `Week ${userData.currentWeek}`;
        renderWorkouts();
    }
}

function nextWeek() {
    if (userData.currentWeek < 12) {
        userData.currentWeek++;
        document.getElementById('weekDisplay').textContent = `Week ${userData.currentWeek}`;
        renderWorkouts();
    }
}

// ==================== RESET ====================
function resetApp() {
    if (!confirm('Start over with a new program setup?')) return;
    userData = { 
        experience: null, 
        phase: null, 
        context: null, 
        equipment: null, 
        currentWeek: 1, 
        currentTemplate: '4day',
        exerciseVariations: {}
    };
    hideAllScreens();
    document.getElementById('welcomeScreen').classList.remove('hidden');
    document.getElementById('progressTracker').classList.add('hidden');
    document.getElementById('programOverview').innerHTML = '';
    document.getElementById('workoutDays').innerHTML = '';
    const errorBox = document.getElementById('errorBox');
    if (errorBox) {
        errorBox.innerHTML = '';
        errorBox.classList.add('hidden');
    }
}

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', () => {
    console.log('Athletic Development System Loaded');
    console.log('Exercise Database:', typeof exerciseDatabase !== 'undefined' ? 'Loaded' : 'Not Found');
    console.log('Workout Templates:', typeof window.workoutTemplates !== 'undefined' ? 'Loaded' : 'Not Found');
});
