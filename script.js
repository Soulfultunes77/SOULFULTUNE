// Open Login Modal
function openModal() {
    document.getElementById('loginModal').style.display = 'flex';
}

// Close Login Modal
function closeModal() {
    document.getElementById('loginModal').style.display = 'none';
}

// Show Sign Up Form inside the modal
function showSignUp() {
    // Close the Login Modal if open
    document.getElementById('loginModal').style.display = 'none';
    // Open the Sign Up Modal
    document.getElementById('signUpModal').style.display = 'flex';
}

// Close Sign Up Modal
function closeSignUpModal() {
    document.getElementById('signUpModal').style.display = 'none';
}

// Close modal when clicking outside of the content
window.onclick = function(event) {
    const loginModal = document.getElementById('loginModal');
    const signUpModal = document.getElementById('signUpModal');
    if (event.target === loginModal) {
        closeModal();
    } 
    if (event.target === signUpModal) {
        closeSignUpModal();
    }
};

// Function to handle the loading screen visibility
window.onload = function() {
    setTimeout(() => {
        document.getElementById('loadingScreen').style.display = 'none'; // Hide loading screen after loading
    }, 3000);  // Adjust this time based on your loading duration
}

// Forgot Password Modal ওপেন করার ফাংশন
function ForgotPasswordModal() {
    document.getElementById('forgotPasswordModal').style.display = 'flex';
}

// Forgot Password Modal বন্ধ করার ফাংশন
function closeForgotPasswordModal() {
    document.getElementById('forgotPasswordModal').style.display = 'none';
}