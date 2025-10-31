// Espera o HTML carregar antes de executar o script
document.addEventListener('DOMContentLoaded', () => {

    // Pega os elementos do HTML
    const form = document.getElementById('form-anuncio');
    const mensagemSucesso = document.getElementById('mensagem-sucesso');

    // Adiciona um "ouvinte" para o evento de 'submit' do formulário
    form.addEventListener('submit', (event) => {
        
        // 1. Impede o comportamento padrão do formulário
        event.preventDefault();

        // 2. Simula o envio
        console.log("Formulário pronto para enviar!");

        // 3. Mostra a mensagem de sucesso
        mensagemSucesso.style.display = 'block';

        // 4. Limpa o formulário
        form.reset();

        // 5. Esconde a mensagem após 4 segundos
        setTimeout(() => {
            mensagemSucesso.style.display = 'none';
        }, 4000);
    });

});