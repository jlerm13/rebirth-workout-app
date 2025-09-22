// ==================== STATE MANAGEMENT ====================
let userData = {
    experience: null,
    phase: null,
    context: null,
    equipment: null,
    currentWeek: 1,
    currentTemplate: '4day'
};

// Utility: log and display errors
def showError(message) {
    console.error(message);
    const box = document.getElementById('errorBox');
    if (box) box.innerHTML += `<div class="error-message">⚠️ ${message}</div>`;
}

// ==================== UI FLOW ====================
function startOnboarding() {
    hideAllScreens();
    document.getElementById('progressTracker').classList.remove('hidden');
    document.getElementById('experienceScreen').classList.remove('hidden');
    updateProgressTracker(1);
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
    document.querySelectorAll('.card').forEach(card => {
        card.parentElement.classList.add('hidden');
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
            document.getElementById('experienceScreen').classList.remove('hidden');
            updateProgressTracker(1);
            break;
        case 'phase':
            document.getElementById('phaseScreen').classList.remove('hidden');
            updateProgressTracker(2);
            break;
        case 'context':
            document.getElementById('contextScreen').classList.remove('hidden');
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

    if (userData.phase === 'inseason') {
        userData.currentTemplate = 'inseason';
    } else if (userData.context === 'meathead') {
        userData.currentTemplate = '3day';
    } else {
        userData.currentTemplate = '4day';
    }

    renderWorkouts();
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
    document.querySelectorAll('.template-tab').forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');
    renderWorkouts();
}

function renderWorkouts() {
    const container = document.getElementById('workoutDays');
    const weekKey = `week${userData.currentWeek}`;

    const templates = workoutTemplates?.[userData.experience]?.[userData.phase]?.[userData.currentTemplate];
    const currentWeek = templates?.[weekKey];

    if (!currentWeek) {
        showError(`No workouts found for ${weekKey}.`);
        container.innerHTML = `<p>No workouts found for ${weekKey}. Try Week 1.</p>`;
        return;
    }

    let html = '';
    Object.entries(currentWeek).forEach(([dayKey, workoutDay]) => {
        html += `
            <div class="workout-day">
                <div class="workout-header">
                    <div class="workout-title">${dayKey}: ${workoutDay.title || ''}</div>
                    <div class="workout-badge">${dayKey}</div>
                </div>
        `;
        workoutDay.exercises.forEach(exercise => {
            const exerciseData = exerciseDatabase?.[exercise.exercise];
            let exerciseName = exercise.exercise;
            let isSubstituted = false;

            if (exerciseData && exerciseData.equipmentMap) {
                exerciseName = exerciseData.equipmentMap[userData.equipment] || exerciseData.name;
                if (exerciseName !== exerciseData.name) isSubstituted = true;
            }

            if (!exerciseData) showError(`Missing exercise: ${exercise.exercise}`);

            html += `
                <div class="exercise-block">
                    <span class="exercise-category">${exercise.type}</span>
                    <div class="exercise-name">${exerciseName}</div>
                    <div class="exercise-details">Sets/Reps: ${exercise.sets}</div>
                    ${exercise.note ? `<div class="exercise-details">Note: ${exercise.note}</div>` : ''}
                    ${isSubstituted ? `<div class="substitution-notice">Adapted for ${userData.equipment}</div>` : ''}
                </div>
            `;
        });
        html += `</div>`;
    });
    container.innerHTML = html;
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
    userData = { experience: null, phase: null, context: null, equipment: null, currentWeek: 1, currentTemplate: '4day' };
    hideAllScreens();
    document.getElementById('welcomeScreen').classList.remove('hidden');
    document.getElementById('progressTracker').classList.add('hidden');
    document.getElementById('programOverview').innerHTML = '';
    document.getElementById('workoutDays').innerHTML = '';
    document.getElementById('errorBox').innerHTML = '';
}

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', () => {
    console.log('Athletic Development System Loaded');
    const box = document.createElement('div');
    box.id = 'errorBox';
    box.style.color = 'red';
    document.body.appendChild(box);
});
