document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Credenciais corretas
    const correctEmail = 'teste@teste.com';
    const correctPassword = 'teste123';

    if (emailInput === correctEmail && passwordInput === correctPassword) {
        errorMessage.textContent = ''; // Limpa qualquer mensagem de erro anterior
        window.location.href = 'home.html'; // Redireciona para a nova página de sucesso
    } else {
        errorMessage.textContent = 'Email ou senha incorretos. Tente novamente.';
    }
});