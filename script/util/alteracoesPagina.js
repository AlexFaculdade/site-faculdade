// Função para adicionar mensagens de erro nos paragrafos onde deve exibir erros. Passa uma string com o que deve ser o texto
// do erro e o elemento html 
class AlteracoesPagina {
    static mensagemErroRegistrar(erro, elementoErro) {
        elementoErro.textContent = erro
        elementoErro.style.display = "block"
    }
}