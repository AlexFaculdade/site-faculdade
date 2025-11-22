const formLogin = document.getElementById("form-login")
const email = document.getElementById("email")
const senha = document.getElementById("senha")
const erroContainer = document.getElementById("erro")

Database.logout()

formLogin.addEventListener("submit", (e) => {
    e.preventDefault() 

    let emailValue = email.value 
    let senhaValue = senha.value
    const user = VerificarLogin.verficarAutenticacao(emailValue, senhaValue) 
    
    if(user) {
        window.location.href = "../index.html" 
    } else {
        return AlteracoesPagina.mensagemErroRegistrar("Credenciais inválidas, verifique novamente.", erroContainer)
    }
})