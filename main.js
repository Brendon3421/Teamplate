document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const showRegisterButton = document.getElementById('showRegister');
    const showLoginButton = document.getElementById('showLogin');

    showRegisterButton.addEventListener('click', function () {
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
    });

    showLoginButton.addEventListener('click', function () {
        registerForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
    });
});
