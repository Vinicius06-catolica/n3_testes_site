document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');


    const correctEmail = 'teste@teste.com';
    const correctPassword = 'teste123';

    if (emailInput === correctEmail && passwordInput === correctPassword) {
        errorMessage.textContent = '';
        window.location.href = 'home.html'; 
    } else {
        errorMessage.textContent = 'Email ou senha incorretos. Tente novamente.';
    }
});