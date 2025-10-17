const formLogin = document.getElementById("form-login")
const email = document.getElementById("email")
const senha = document.getElementById("senha")
const erroContainer = document.getElementById("erro")

// só de carregar a página garante que o user seja deslogado
Database.logout()

formLogin.addEventListener("submit", (e) => {
    e.preventDefault() // bloqueia o reload da página do form

    let emailValue = email.value 
    let senhaValue = senha.value
    const user = VerificarLogin.verficarAutenticacao(emailValue, senhaValue) // valida se as info enviada pelo user
    // estão corretas para fazer login
    if(user) {
        window.location.href = "../index.html" // se estiver correto, redireciona para o inicio
    } else {
        return AlteracoesPagina.mensagemErroRegistrar("Credenciais inválidas, verifique novamente.", erroContainer)
    }
})