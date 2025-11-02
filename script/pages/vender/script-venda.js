document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("form-anuncio")
    const buttonAnunciar = document.getElementById("buttonAnunciar");
    const mensagemSucesso = document.getElementById('mensagem-sucesso');
    buttonAnunciar.addEventListener('click', (event) => {
        
        event.preventDefault();
        if(!VerificacaoCamposVenda.validarCampos()) {
            return
        }
        let car
        try {
            car = VerificacaoCamposVenda.criarAnuncioCarro()
            let anuncio = new Anuncio(car, 
            ["https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202510/20251030/volkswagen-jetta-2-0-350-tsi-gasolina-gli-dsg-wmimagem12464915726.webp?s=fill&w=1920&h=1440&q=75", 
            "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202510/20251030/volkswagen-jetta-2-0-350-tsi-gasolina-gli-dsg-wmimagem12464922614.webp?s=fill&w=1920&h=1440&q=75", 
            "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202510/20251030/volkswagen-jetta-2-0-350-tsi-gasolina-gli-dsg-wmimagem12464935844.webp?s=fill&w=1920&h=1440&q=75",
            "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202510/20251030/volkswagen-jetta-2-0-350-tsi-gasolina-gli-dsg-wmimagem12464947932.webp?s=fill&w=1920&h=1440&q=75"],
            "",  ["Paraná", "Curitiba"]
            )
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