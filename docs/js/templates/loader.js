<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Template Structure Implementation Guide</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            line-height: 1.6;
        }
        .file-structure {
            background: #f5f5f5;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
        }
        .file-content {
            background: #1e1e1e;
            color: #d4d4d4;
            padding: 20px;
            border-radius: 8px;
            margin: 10px 0;
            overflow-x: auto;
        }
        .file-name {
            color: #4CAF50;
            font-weight: bold;
            margin-bottom: 10px;
        }
        code {
            font-family: 'Courier New', monospace;
        }
        .step {
            background: #e3f2fd;
            border-left: 4px solid #2196F3;
            padding: 15px;
            margin: 15px 0;
        }
        .warning {
            background: #fff3e0;
            border-left: 4px solid #ff9800;
            padding: 15px;
            margin: 15px 0;
        }
    </style>
</head>
<body>
    <h1>Modular Template System Implementation</h1>
    
    <p>Here's how we'll restructure your workout app to be more maintainable and error-resistant. This approach eliminates the syntax error problems by breaking the massive object into smaller, manageable pieces.</p>

    <div class="file-structure">
        <h2>📁 New File Structure</h2>
        <pre>
docs/
├── js/
│   ├── templates/
│   │   ├── template-loader.js    (Main loader - coordinates everything)
│   │   ├── beginner.js           (All beginner templates)
│   │   ├── intermediate.js       (All intermediate templates)
│   │   ├── advanced.js           (All advanced templates)
│   │   └── special.js            (Washed-up meathead and other special templates)
│   ├── exercises.js              (Unchanged)
│   └── app.js                    (Modified to use new structure)
├── css/
│   └── styles.css               (Unchanged)
└── index.html                   (Updated script loading)
        </pre>
    </div>

    <div class="step">
        <h3>Step 1: Create the Template Loader</h3>
        <p>This file will coordinate loading all the template modules and combine them into a single workoutTemplates object that your app expects.</p>
    </div>

    <div class="file-content">
        <div class="file-name">📄 js/templates/template-loader.js</div>
        <code><pre>/**
 * Template Loader Module
 * Combines all template modules into a single workoutTemplates object
 * This approach prevents syntax errors in one module from breaking everything
 */

// Initialize the global workoutTemplates object
window.workoutTemplates = {};

// Track loading status
window.templateLoadingStatus = {
    beginner: false,
    intermediate: false,
    advanced: false,
    special: false,
    errors: []
};

/**
 * Safely load a template module
 * If one module fails, others still load
 */
function loadTemplateModule(moduleName, moduleData) {
    try {
        if (moduleData && typeof moduleData === 'object') {
            // Merge the module data into workoutTemplates
            Object.assign(window.workoutTemplates, moduleData);
            window.templateLoadingStatus[moduleName] = true;
            console.log(`✅ Loaded ${moduleName} templates`);
            return true;
        } else {
            throw new Error(`Invalid module data for ${moduleName}`);
        }
    } catch (error) {
        console.error(`❌ Failed to load ${moduleName} templates:`, error);
        window.templateLoadingStatus.errors.push({
            module: moduleName,
            error: error.message
        });
        return false;
    }
}

/**
 * Check if all required templates are loaded
 */
function validateTemplateLoading() {
    const required = ['beginner', 'intermediate', 'advanced'];
    const loaded = required.filter(m => window.templateLoadingStatus[m]);
    
    if (loaded.length === 0) {
        console.error('❌ No templates loaded successfully!');
        // Provide a fallback empty structure
        window.workoutTemplates = {
            beginner: {},
            intermediate: {},
            advanced: {}
        };
    } else if (loaded.length < required.length) {
        console.warn(`⚠️ Only partially loaded: ${loaded.join(', ')}`);
        // Fill in missing structures
        required.forEach(level => {
            if (!window.workoutTemplates[level]) {
                window.workoutTemplates[level] = {};
            }
        });
    } else {
        console.log('✅ All templates loaded successfully!');
    }
    
    // Display any errors
    if (window.templateLoadingStatus.errors.length > 0) {
        console.group('Template Loading Errors:');
        window.templateLoadingStatus.errors.forEach(err => {
            console.error(`${err.module}: ${err.error}`);
        });
        console.groupEnd();
    }
}

// Helper functions that were previously at the bottom of templates.js
window.TemplateHelpers = {
    getWorkoutTemplate: function(experience, phase, templateType, week) {
        try {
            const weekKey = `week${week}`;
            
            // Handle special cases
            if (experience === 'washed-up-meathead') {
                return window.workoutTemplates['washed-up-meathead']?.['3day']?.[weekKey];
            }
            
            // Check if template exists with safe navigation
            const experienceTemplates = window.workoutTemplates[experience];
            if (!experienceTemplates) {
                console.warn(`No templates for experience level: ${experience}`);
                return null;
            }
            
            const phaseTemplates = experienceTemplates[phase];
            if (!phaseTemplates) {
                console.warn(`No templates for phase: ${phase} at ${experience} level`);
                return null;
            }
            
            const template = phaseTemplates[templateType];
            if (!template) {
                console.warn(`No ${templateType} template for ${experience} ${phase}`);
                // Try fallback to 4day template
                const fallback = phaseTemplates['4day'];
                if (fallback) {
                    console.log(`Using 4day template as fallback`);
                    return fallback[weekKey] || fallback['week1'];
                }
                return null;
            }
            
            return template[weekKey] || template['week1']; // Default to week 1
            
        } catch (error) {
            console.error('Error getting workout template:', error);
            return null;
        }
    },
    
    getAvailableTemplates: function(phase) {
        const templateAvailability = {
            'early-offseason': ['4day', '3day'],
            'mid-offseason': ['4day', '3day'],
            'preseason': ['4day', '3day', 'speed'],
            'inseason': ['2day']
        };
        
        return templateAvailability[phase] || ['4day', '3day'];
    }
};

// This will be called after all template files are loaded
window.initializeTemplates = function() {
    validateTemplateLoading();
    console.log('Template system initialized');
    console.log('Available templates:', Object.keys(window.workoutTemplates));
};</pre></code>
    </div>

    <div class="step">
        <h3>Step 2: Create Individual Template Files</h3>
        <p>Each file will contain templates for one experience level. This makes them much easier to edit and debug.</p>
    </div>

    <div class="file-content">
        <div class="file-name">📄 js/templates/beginner.js</div>
        <code><pre>/**
 * Beginner Templates
 * All workout templates for beginner experience level
 */

(function() {
    const beginnerTemplates = {
        beginner: {
            'early-offseason': {
                '4day': {
                    week1: {
                        monday: {
                            title: "Max-Effort Upper Body",
                            exercises: [
                                { type: "max-effort", exercise: "benchPress", sets: "Work up to 5RM", intensity: "Conservative (RPE 7-8)", note: "Leave 2 reps in tank" },
                                { type: "supplemental", exercise: "dbBenchPress", sets: "2 × 15-20", note: "Same weight both sets" },
                                { type: "assistance", exercise: "barbellRows", sets: "3 × 8-12", note: "Focus on form" },
                                { type: "assistance", exercise: "rearDeltFlyes", sets: "3 × 12-15" },
                                { type: "assistance", exercise: "shrugs", sets: "3 × 8-15" },
                                { type: "assistance", exercise: "barbellCurls", sets: "3 × 8-12" }
                            ]
                        },
                        tuesday: {
                            title: "Dynamic-Effort Lower Body",
                            exercises: [
                                { type: "dynamic", exercise: "boxJump", sets: "5 × 3", note: "20-24 inch box, focus on landing" },
                                { type: "assistance", exercise: "bulgarianSplitSquat", sets: "2 × 8 each", note: "Bodyweight only" },
                                { type: "assistance", exercise: "romanianDeadlift", sets: "3 × 10-12", note: "Light weight, feel stretch" },
                                { type: "assistance", exercise: "weightedAbs", sets: "3 × 15-20" }
                            ]
                        },
                        thursday: {
                            title: "Repetition Upper Body",
                            exercises: [
                                { type: "repetition", exercise: "dbInclinePress", sets: "3 × max reps", intensity: "65% effort", note: "90 sec rest" },
                                { type: "assistance", exercise: "pullups", sets: "3 × 5-8", note: "Use band if needed" },
                                { type: "assistance", exercise: "facePulls", sets: "3 × 15-20" },
                                { type: "assistance", exercise: "lateralRaises", sets: "3 × 12-15" },
                                { type: "assistance", exercise: "dbCurls", sets: "3 × 10-12" }
                            ]
                        },
                        friday: {
                            title: "Max-Effort Lower Body",
                            exercises: [
                                { type: "max-effort", exercise: "boxSquat", sets: "Work up to 5RM", intensity: "Conservative", note: "12-14 inch box" },
                                { type: "assistance", exercise: "walkingLunges", sets: "3 × 10 each", note: "Bodyweight" },
                                { type: "assistance", exercise: "hyperextensions", sets: "3 × 10-15" },
                                { type: "core", exercise: "plank", sets: "3 × 30-45 seconds" }
                            ]
                        }
                    }
                    // Add week2, week3, week4 here...
                },
                '3day': {
                    // Add 3-day template here...
                }
            },
            'mid-offseason': {
                // Add mid-offseason templates here...
            },
            'preseason': {
                // Add preseason templates here...
            },
            'inseason': {
                // Add inseason templates here...
            }
        }
    };
    
    // Load this module into the main templates
    if (typeof loadTemplateModule === 'function') {
        loadTemplateModule('beginner', beginnerTemplates);
    } else {
        // Fallback for direct loading
        window.beginnerTemplates = beginnerTemplates;
    }
})();</pre></code>
    </div>

    <div class="step">
        <h3>Step 3: Update index.html</h3>
        <p>Load the template files in the correct order. The loader must come first, then the individual template files.</p>
    </div>

    <div class="file-content">
        <div class="file-name">📄 index.html (script section)</div>
        <code><pre>&lt;!-- Script Loading - Updated for modular templates --&gt;
&lt;script src="js/exercises.js"&gt;&lt;/script&gt;

&lt;!-- Template System - Load in correct order --&gt;
&lt;script src="js/templates/template-loader.js"&gt;&lt;/script&gt;
&lt;script src="js/templates/beginner.js"&gt;&lt;/script&gt;
&lt;script src="js/templates/intermediate.js"&gt;&lt;/script&gt;
&lt;script src="js/templates/advanced.js"&gt;&lt;/script&gt;
&lt;script src="js/templates/special.js"&gt;&lt;/script&gt;

&lt;!-- Initialize templates after all are loaded --&gt;
&lt;script&gt;
    // Initialize the template system
    if (typeof initializeTemplates === 'function') {
        initializeTemplates();
    }
&lt;/script&gt;

&lt;!-- Main app logic --&gt;
&lt;script src="js/app.js" defer&gt;&lt;/script&gt;</pre></code>
    </div>

    <div class="step">
        <h3>Step 4: Update app.js</h3>
        <p>Make small modifications to use the new template structure.</p>
    </div>

    <div class="file-content">
        <div class="file-name">📄 js/app.js (modifications)</div>
        <code><pre>// At the top of app.js, add error checking
function checkTemplatesLoaded() {
    if (!window.workoutTemplates || Object.keys(window.workoutTemplates).length === 0) {
        console.error('Templates not loaded!');
        showError('Workout templates failed to load. Please refresh the page.');
        return false;
    }
    return true;
}

// In renderWorkouts function, add safety check:
function renderWorkouts() {
    if (!checkTemplatesLoaded()) {
        const container = document.getElementById('workoutDays');
        container.innerHTML = `
            &lt;div class="workout-day"&gt;
                &lt;p style="color: red;"&gt;Error: Templates not loaded. Please refresh the page.&lt;/p&gt;
            &lt;/div&gt;
        `;
        return;
    }
    
    // Rest of your existing renderWorkouts code...
    const container = document.getElementById('workoutDays');
    const weekKey = `week${userData.currentWeek}`;
    
    // Use the new TemplateHelpers if available
    const getTemplate = window.TemplateHelpers?.getWorkoutTemplate || getWorkoutTemplate;
    
    // Continue with existing logic...
}</pre></code>
    </div>

    <div class="warning">
        <h3>⚠️ Important Migration Notes</h3>
        <ul>
            <li><strong>Start with one template file first:</strong> Create just the beginner.js file with a few weeks to test the system works</li>
            <li><strong>Use the browser console:</strong> The new system provides detailed logging about what loads and what fails</li>
            <li><strong>Gradual migration:</strong> You can migrate one experience level at a time</li>
            <li><strong>Syntax errors are isolated:</strong> If intermediate.js has an error, beginner and advanced still work</li>
        </ul>
    </div>

    <div class="step">
        <h3>Step 5: Testing the New Structure</h3>
        <p>After implementing, check the console for these success messages:</p>
        <pre>
✅ Loaded beginner templates
✅ Loaded intermediate templates  
✅ Loaded advanced templates
✅ All templates loaded successfully!
Template system initialized
Available templates: beginner,intermediate,advanced
        </pre>
    </div>

</body>
</html>
