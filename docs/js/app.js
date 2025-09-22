// app.js
document.addEventListener('DOMContentLoaded', () => {
  const testOutput = document.getElementById('test-output');
  if (!testOutput) return;

  const hypertrophyTemplate = trainingTemplates["Hypertrophy Upper"];

  testOutput.textContent = `Loaded Template: ${hypertrophyTemplate.name}`;
});

