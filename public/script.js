/* script.js */

document.addEventListener('DOMContentLoaded', function () {
    console.log('Page Loaded');

    // Example feature: Click on the main title to log a message
    const mainTitle = document.querySelector('.main-title');
    mainTitle.addEventListener('click', function () {
        console.log('PEN title clicked');
    });

    // Example animation: Fade in the pen image
    const penImage = document.querySelector('.pen-image');
    penImage.style.opacity = 0;
    setTimeout(() => {
        penImage.style.transition = 'opacity 2s';
        penImage.style.opacity = 1;
    }, 500);
});
