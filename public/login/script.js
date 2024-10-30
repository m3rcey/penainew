document.addEventListener('DOMContentLoaded', () => {
    // Help icon functionality
    const helpIcon = document.querySelector('.help-icon');
    helpIcon.addEventListener('click', () => {
        // Add your help modal or tooltip logic here
        alert('Help information will be displayed here');
    });

    // Google sign up button
    const googleButton = document.querySelector('.google-button');
    googleButton.addEventListener('click', () => {
        // Add your Google sign up logic here
        console.log('Google sign up clicked');
    });

    // Facebook sign up button
    const facebookButton = document.querySelector('.facebook-button');
    facebookButton.addEventListener('click', () => {
        // Add your Facebook sign up logic here
        console.log('Facebook sign up clicked');
    });

    // Create account button
    const createAccountButton = document.querySelector('.create-account-button');
    createAccountButton.addEventListener('click', () => {
        // Add your create account logic here
        console.log('Create account clicked');
    });

    // Login link
    const loginLink = document.querySelector('.login-link');
    loginLink.addEventListener('click', (e) => {
        e.preventDefault();
        // Add your login redirect logic here
        console.log('Login clicked');
    });
});