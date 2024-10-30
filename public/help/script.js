// JavaScript to handle the functionality of the help page

document.addEventListener("DOMContentLoaded", function() {
    // Close button functionality
    const closeButton = document.querySelector(".close-icon");
    closeButton.addEventListener("click", function() {
        window.history.back(); // Go back to the previous page
    });

    // Video section functionality
    const videoSection = document.querySelector(".video-section");
    videoSection.addEventListener("click", function() {
        // Toggle video embedding
        const videoEmbed = document.querySelector(".video-embed");
        if (videoEmbed.style.display === "none" || !videoEmbed.style.display) {
            videoEmbed.style.display = "block";
        } else {
            videoEmbed.style.display = "none";
        }
    });

    // FAQ and Contact buttons
    const faqButton = document.querySelector(".button:nth-of-type(1)");
    const contactButton = document.querySelector(".button:nth-of-type(2)");

    faqButton.addEventListener("click", function() {
        window.location.href = "faqs.html"; // Navigate to FAQ page
    });

    contactButton.addEventListener("click", function() {
        window.location.href = "contact.html"; // Navigate to Contact page
    });
});
