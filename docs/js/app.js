// ==================== STATE MANAGEMENT ====================
let userData = {
    experience: null,      // beginner, intermediate, advanced
    phase: null,           // early-offseason, mid-offseason, preseason, inseason
    context: null,         // franchise, remote, team, meathead
    equipment: null,       // full, commercial, minimal, bodyweight
    currentWeek: 1,
    currentTemplate: '4day'
};

// ==================== UI FUNCTIONS ====================
function startOnboarding() {
    document.getElementById('welcomeScreen').classList.add('hidden');
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

function goBack(screen) {
    document.querySelectorAll('.card').forEach(card => {
        card.parentElement.classList.add('hidden');
    });

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

// ==================== SELECTION FUNCTIONS ====================
function selectExperience(level) {
    userData.experience = level;
    document.querySelectorAll('#experienceScreen .option-card').forEach(opt => opt.classList.remove('selected'));
    event.target.closest('.option-card').classList.add('selected');
    document.getElementById('experienceContinue').classList.remove('hidden');
}

function showPhaseScreen() {
    document.getElementById('experienceScreen').classList.add('hidden');
    document.getElementById('phaseScreen').classList.remove('hidden');
    updateProgressTracker(2);
}

function selectPhase(phase) {
    userData.phase = phase;
    document.querySelectorAll('#phaseScreen .option-card').forEach(opt => opt.classList.remove('selected'));
    event.target.closest('.option-card').classList.add('selected');
    document.getElementById('phaseContinue').classList.remove('hidden');
}

function showContextScreen() {
    document.getElementById('phaseScreen').classList.add('hidden');
    document.getElementById('contextScreen').classList.remove('hidden');
    updateProgressTracker(3);
}

function selectContext(context) {
    userData.context = context;
    document.querySelectorAll('#contextScreen .option-card').forEach(opt => opt.classList.remove('selected'));
    event.target.closest('.option-card').classList.add('selected');
    document.getElementById('contextContinue').classList.remove('hidden');
}

function showEquipmentScreen() {
    document.getElementById('contextScreen').classList.add('hidden');
    document.getElementById('equipmentScreen').classList.remove('hidden');
    updateProgressTracker(4);
}

function selectEquipment(equipment) {
    userData.equipment = equipment;
    document.querySelectorAll('#equipmentScreen .option-card').forEach(opt => opt.classList.remove('selected'));
    event.target.closest('.option-card').classList.add('selected');
    document.getElementById('equipmentContinue').classList.remove('hidden');
}

// ==================== PROGRAM GENERATION ====================
function generateProgram() {
    document.getElementById('equipmentScreen').classList.add('hidden');
    document.getElementById('progressTracker').classList.add('hidden');
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
        `${experienceNames[userData.experience]} - ${phaseNames[userData.phase]} Program`;

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
        'mid-offseason': 'Maximum strength and muscle building phase. Highest volume.',
        'preseason': 'Convert strength to power, sport-specific.',
        'inseason': 'Maintenance focus, staying sharp.'
    };

    const contextNotes = {
        'franchise': 'Adapted for group training with time constraints',
        'remote': 'Flexible programming for variable equipment',
        'team': 'Designed for team training with mixed abilities',
        'meathead': 'Former athlete focus - strength with health consideration'
    };

    overview.innerHTML = `
        <h4>Your Program Overview</h4>
        <ul>
            <li><strong>Phase Focus:</strong> ${phaseGuidelines[userData.phase]}</li>
            <li><strong>Context:</strong> ${contextNotes[userData.context]}</li>
            <li><strong>Equipment Level:</strong> ${userData.equipment}</li>
            <li><strong>Weekly Volume:</strong> ${userData.currentTemplate === '4day' ? '4 training days' :
        userData.currentTemplate === '3day' ? '3 training days' : '2-3 flexible days'}</li>
        </ul>
    `;
}

// ==================== RENDER WORKOUTS ====================
function renderWorkouts() {
    const container = document.getElementById('workoutDays');
    const weekKey = `week${userData.currentWeek}`;

    const templates = workoutTemplates[userData.experience]?.[userData.phase]?.[userData.currentTemplate];
    const currentWeek = templates?.[weekKey];

    if (!currentWeek) {
        container.innerHTML = `<p>No workouts found for ${weekKey}. Try Week 1.</p>`;
        return;
    }

    let html = '';
    Object.entries(currentWeek).forEach(([dayKey, workoutDay]) => {
        html += `
            <div class="workout-day">
                <div class="workout-header">
                    <div class="workout-title">${dayKey.charAt(0).toUpperCase() + dayKey.slice(1)}: ${workoutDay.title}</div>
                    <div class="workout-badge">${dayKey}</div>
                </div>
        `;

        workoutDay.exercises.forEach(exercise => {
            const exerciseData = exerciseDatabase[exercise.exercise];
            let exerciseName = exercise.exercise;
            let isSubstituted = false;

            if (exerciseData && exerciseData.equipmentMap) {
                exerciseName = exerciseData.equipmentMap[userData.equipment] || exerciseData.name;
                if (exerciseName !== exerciseData.name) isSubstituted = true;
            }

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

        html += `</div>`; // close workout-day
    });

    container.innerHTML = html;
}

// ==================== TEMPLATE / WEEK CONTROLS ====================
function selectTemplate(template) {
    userData.currentTemplate = template;
    document.querySelectorAll('.template-tab').forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');
    renderWorkouts();
}

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
    if (confirm('Start over with a new program setup?')) {
        userData = {
            experience: null,
            phase: null,
            context: null,
            equipment: null,
            currentWeek: 1,
            currentTemplate: '4day'
        };

        document.querySelectorAll('.card').forEach(card => card.parentElement.classList.add('hidden'));
        document.getElementById('welcomeScreen').classList.remove('hidden');
        document.getElementById('progressTracker').classList.add('hidden');
    }
}

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', () => {
    console.log('Athletic Development System Loaded');
    document.getElementById('prevWeekBtn').disabled = true;
});
