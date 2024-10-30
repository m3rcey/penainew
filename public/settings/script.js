document.addEventListener('DOMContentLoaded', function() {
    // Event listener for the close icon to go back to the previous page
    const closeIcon = document.querySelector('.close-icon');
    closeIcon.addEventListener('click', function() {
        window.history.back();
    });

    // Event listener for the help icon (optional)
    const helpIcon = document.querySelector('.help-icon');
    helpIcon.addEventListener('click', function() {
        alert('Help information goes here.');
    });

    // Event listener for navigation items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // Placeholder for navigation actions
            const action = item.getAttribute('data-action');
            alert(`You clicked on ${action}`);
        });
    });
});
