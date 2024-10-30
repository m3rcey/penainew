/* script.js */

document.addEventListener('DOMContentLoaded', function () {
    console.log('Page Loaded');

    // Handle form submission
    const form = document.querySelector('.input-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Form submitted successfully!');
        form.reset(); // Reset the form after submission for better user experience
    });

    // Handle navigation buttons
    const newSongButton = document.getElementById('new-song');
    const projectsButton = document.getElementById('projects');

    newSongButton.addEventListener('click', function () {
        alert('Navigating to New Song');
    });

    projectsButton.addEventListener('click', function () {
        alert('Navigating to Projects');
    });

    // Handle help icon click
    const helpIcon = document.querySelector('.help-icon');
    helpIcon.addEventListener('click', function () {
        alert('How can we help you?');
    });

    // Scroll adjustments to ensure Next button is visible
    window.addEventListener('resize', function () {
        document.body.style.overflowY = 'scroll';
    });
});
