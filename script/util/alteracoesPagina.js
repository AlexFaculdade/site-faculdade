class AlteracoesPagina {
    static mensagemErroRegistrar(erro, elementoErro) {
        elementoErro.textContent = erro
        elementoErro.style.display = "block"
    }
}