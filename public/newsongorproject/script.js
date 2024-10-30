document.addEventListener('DOMContentLoaded', () => {
    // Help icon functionality
    const helpIcon = document.querySelector('.help-icon');
    helpIcon.addEventListener('click', () => {
        // Add your help modal or tooltip logic here
        alert('Help information will be displayed here');
    });

    // New Song button
    const newSongBtn = document.getElementById('newSongBtn');
    newSongBtn.addEventListener('click', () => {
        // Add your new song logic here
        console.log('New Song clicked');
    });

    // Projects button
    const projectsBtn = document.getElementById('projectsBtn');
    projectsBtn.addEventListener('click', () => {
        // Add your projects logic here
        console.log('Projects clicked');
    });
});