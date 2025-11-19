document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("form-anuncio")
    const buttonAnunciar = document.getElementById("buttonAnunciar");
    const mensagemSucesso = document.getElementById('mensagem-sucesso');
    VerificacaoCamposVenda.vendedor.textContent = Database.sessionUser().nome
    console.log(VerificacaoCamposVenda.aceitaTroca.checked)
    buttonAnunciar.addEventListener('click', (event) => {
        
        event.preventDefault();
        if(!VerificacaoCamposVenda.validarCampos()) {
            return
        }
        let car
        try {
            car = VerificacaoCamposVenda.criarAnuncioCarro()
            let anuncio = new Anuncio(car, 
            [VerificacaoCamposVenda.img1.value, VerificacaoCamposVenda.img2.value, VerificacaoCamposVenda.img3.value, VerificacaoCamposVenda.img4.value],
            VerificacaoCamposVenda.titulo.value,  [VerificacaoCamposVenda.estado.value, VerificacaoCamposVenda.cidade.value], Database.sessionUser().nome, VerificacaoCamposVenda.telefone.value
            )
            console.log(anuncio)
            Database.addAnuncio(anuncio);
        } catch(error) {
            console.error("Não foi possível anunciar o carro")
            AlteracoesPagina.mensagemErroRegistrar("Não foi possível anunciar o carro", VerificacaoCamposVenda.errorParagraph)
            return
        }
        
        

    
        console.log("Formulário pronto para enviar!");

        mensagemSucesso.style.display = 'block';
        form.reset();

        setTimeout(() => {
            mensagemSucesso.style.display = 'none';
        }, 4000);
    });

});