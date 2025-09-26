// exercise-loader.js
window.exerciseDatabase = {};

function loadExerciseModule(moduleName, moduleData) {
    Object.assign(window.exerciseDatabase, moduleData);
    console.log(`✅ Loaded ${moduleName} exercises`);
}

// Initialize after all modules load
function initializeExercises() {
    console.log('Exercise database initialized');
    console.log('Available exercises:', Object.keys(window.exerciseDatabase));
}
