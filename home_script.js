document.getElementById('logoutBtn').addEventListener('click', function() {
    // Redireciona de volta para a página de login
    window.location.href = 'index.html';
});

document.getElementById('saveMessageBtn').addEventListener('click', function() {
    const userMessage = document.getElementById('userMessage').value;
    const messageStatus = document.getElementById('messageStatus');

    if (userMessage.trim() !== '') {
        // Simula o salvamento da mensagem (em um ambiente real, você enviaria isso para um servidor)
        messageStatus.textContent = 'Mensagem salva com sucesso!';
        messageStatus.style.color = '#28a745'; // Cor verde para sucesso
        console.log('Mensagem do usuário salva:', userMessage);

        // Opcional: Limpar a mensagem após alguns segundos
        setTimeout(() => {
            messageStatus.textContent = '';
            document.getElementById('userMessage').value = ''; // Limpa o campo
        }, 3000);
    } else {
        messageStatus.textContent = 'Por favor, digite uma mensagem para salvar.';
        messageStatus.style.color = '#ffc107'; // Cor amarela para aviso
    }
});