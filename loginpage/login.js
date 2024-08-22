// Function to toggle forms
document.getElementById('showSignUp').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('loginBox').style.display = 'none';
    document.getElementById('signUpBox').style.display = 'block';
});

document.getElementById('showLogin').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('signUpBox').style.display = 'none';
    document.getElementById('loginBox').style.display = 'block';
});

// Login form validation
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    
    // Simple password validation
    if (!validatePassword(password)) {
        alert('Password must be at least 8 characters long and include a number and a special character.');
        return;
    }
    
    alert('Login successful!'); // Dummy action, replace with real login logic
    // Here you would typically send the data to a server for authentication
});

// Sign-up form validation
document.getElementById('signUpForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
    const username = document.getElementById('signUpUsername').value;
    const password = document.getElementById('signUpPassword').value;
    const passwordConfirm = document.getElementById('signUpPasswordConfirm').value;
    
    // Validate passwords match
    if (password !== passwordConfirm) {
        alert('Passwords do not match.');
        return;
    }

    // Simple password validation
    if (!validatePassword(password)) {
        alert('Password must be at least 8 characters long and include a number and a special character.');
        return;
    }
    
    alert('Sign-up successful!'); // Dummy action, replace with real sign-up logic
    // Here you would typically send the data to a server for account creation
});

// Function to validate password strength
function validatePassword(password) {
    // Password must be at least 8 characters, include a number and a special character
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return regex.test(password);
}
