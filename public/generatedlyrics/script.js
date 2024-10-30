document.addEventListener('DOMContentLoaded', () => {
    // Icon buttons functionality
    const helpButton = document.querySelector('.help-icon');
    const hamburgerMenuButton = document.querySelector('.hamburger-menu');

    helpButton.addEventListener('click', () => {
        // Display help functionality
        console.log('Help button clicked');
    });

    hamburgerMenuButton.addEventListener('click', () => {
        // Open navigation menu functionality
        console.log('Hamburger menu button clicked');
    });

    // Bottom navigation functionality
    const newSongButton = document.querySelector('.new-song');
    const projectsButton = document.querySelector('.projects');

    newSongButton.addEventListener('click', () => {
        // Redirect or initiate new song functionality
        console.log('New Song button clicked');
    });

    projectsButton.addEventListener('click', () => {
        // Redirect to projects page functionality
        console.log('Projects button clicked');
    });

    // Go Back and Save button functionality
    const goBackButton = document.querySelector('.go-back-button');
    const saveButton = document.querySelector('.save-button');

    goBackButton.addEventListener('click', () => {
        // Go back to the previous page functionality
        console.log('Go Back button clicked');
    });

    saveButton.addEventListener('click', () => {
        // Save the generated lyrics functionality
        console.log('Save button clicked');
    });

    // Lyrics box functionality (for editing and regenerating)
    const regenerateButton = document.querySelector('.regenerate-icon');
    const editButton = document.querySelector('.edit-icon');

    regenerateButton.addEventListener('click', () => {
        // Regenerate lyrics functionality
        console.log('Regenerate button clicked');
    });

    editButton.addEventListener('click', () => {
        // Edit lyrics functionality
        console.log('Edit button clicked');
    });
});
