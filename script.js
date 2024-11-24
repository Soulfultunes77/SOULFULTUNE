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
    document.getElementById('loginModal').style.display = 'none';
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