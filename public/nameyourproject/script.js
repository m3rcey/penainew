/* script.js */

document.getElementById('next-btn').addEventListener('click', function () {
    const projectName = document.getElementById('project-name').value.trim();
    if (projectName) {
        alert(`Your project name is: ${projectName}`);
    } else {
        alert('Please enter a project name.');
    }
});

document.getElementById('menu-btn').addEventListener('click', function () {
    // Handle menu button click
    alert('Menu button clicked');
});

document.getElementById('help-btn').addEventListener('click', function () {
    // Handle help button click
    alert('Help button clicked');
});
