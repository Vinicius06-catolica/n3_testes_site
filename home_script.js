document.getElementById('logoutBtn').addEventListener('click', function() {
    window.location.href = 'index.html';
});

document.getElementById('saveMessageBtn').addEventListener('click', function() {
    const userMessage = document.getElementById('userMessage').value;
    const messageStatus = document.getElementById('messageStatus');

    if (userMessage.trim() !== '') {
        messageStatus.textContent = 'Mensagem salva com sucesso!';
        messageStatus.style.color = '#28a745'; 
        console.log('Mensagem do usuário salva:', userMessage);

        setTimeout(() => {
            messageStatus.textContent = '';
            document.getElementById('userMessage').value = ''; 
        }, 3000);
    } else {
        messageStatus.textContent = 'Por favor, digite uma mensagem para salvar.';
        messageStatus.style.color = '#ffc107'; 
    }
});