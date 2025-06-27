const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

// Sliding Animation Control
signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

// Basic Registration & Login Memory
let registeredUser = "";

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('registerUsername').value.trim();
    const password = document.getElementById('registerPassword').value.trim();

    if (username && password) {
        registeredUser = { username, password };
        alert('Registration Successful! You can now login.');
        document.getElementById('registerForm').reset();
        signInButton.click();
    }
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value.trim();

    if (registeredUser && username === registeredUser.username && password === registeredUser.password) {
        alert('Login Successful!');
    } else {
        alert('Invalid username or password!');
    }
});
