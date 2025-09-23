// Template Loading System
window.workoutTemplates = {};

function safeLoadTemplates(name, data) {
    try {
        if (data && typeof data === 'object') {
            Object.assign(window.workoutTemplates, data);
            console.log(`✅ Loaded ${name} templates`);
            return true;
        }
    } catch (error) {
        console.error(`❌ Failed to load ${name}:`, error);
        return false;
    }
}

window.safeLoadTemplates = safeLoadTemplates;
