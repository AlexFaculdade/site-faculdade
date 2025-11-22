const formRegistrar = document.getElementById("form-registrar") 
const nome = document.getElementById("nome") 
const email = document.getElementById("email") 
const senha = document.getElementById("senha") 
const confirmaSenha = document.getElementById("confirmaSenha")
const erroContainer = document.getElementById("erro")


formRegistrar.addEventListener("submit", (e) => {
    e.preventDefault() 

    

    let nomeValue = nome.value 
    let emailValue = email.value 
    let senhaValue = senha.value 
    let confirmaSenhaValue = confirmaSenha.value 


    if(!Util.validEmail(emailValue)) {
        AlteracoesPagina.mensagemErroRegistrar("O email deve seguir o formato: teste@teste.com", erroContainer)
        return
    }

    
    if(!Util.usuarioDuplicado(emailValue)) {
        AlteracoesPagina.mensagemErroRegistrar("Já existe um usuário com esse email.", erroContainer)
        return
    }

  
    if(!Util.validName(nomeValue)) {
        AlteracoesPagina.mensagemErroRegistrar("O nome não pode ser nulo", erroContainer)
        return
    }

    
    if(!Util.validPassword(senhaValue)) {
        AlteracoesPagina.mensagemErroRegistrar("A senha deve ter 8-30 caracteres e incluir: maiúscula, minúscula, número e símbolo", erroContainer)
        return
    }

    
    if(!Util.passwordEqual(senhaValue, confirmaSenhaValue)) {
        AlteracoesPagina.mensagemErroRegistrar("A confirmação da senha deve ser igual à senha", erroContainer)
        return
    }
    
    try {
        let user = new User(nomeValue, emailValue, senhaValue)
        Database.addUser(user)
        window.location.href = "../index.html"
    } catch(err) {
        console.error("Não foi possível criar o usuário")
        AlteracoesPagina.mensagemErroRegistrar("Não foi possível criar o usuário. Erro interno", erroContainer)
    }
    
})