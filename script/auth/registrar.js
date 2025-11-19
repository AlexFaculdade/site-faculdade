const formRegistrar = document.getElementById("form-registrar") // html do form
const nome = document.getElementById("nome") // html do input do nome
const email = document.getElementById("email") // html do input do email
const senha = document.getElementById("senha") // html do input da senha
const confirmaSenha = document.getElementById("confirmaSenha") // html do input do confirma senha
const erroContainer = document.getElementById("erro") // html do paragrafo de erro

// adiciona um event listener para quando o form for enviado
formRegistrar.addEventListener("submit", (e) => {
    e.preventDefault() // bloqueia o comportamento de reload da página do form

    

    let nomeValue = nome.value // pega o valor do input do nome
    let emailValue = email.value // pega o valor do input do email
    let senhaValue = senha.value // pega o valor do input da senha
    let confirmaSenhaValue = confirmaSenha.value // pega o valor do input do confirma senha

    // valida o formato do email
    if(!Util.validEmail(emailValue)) {
        AlteracoesPagina.mensagemErroRegistrar("O email deve seguir o formato: teste@teste.com", erroContainer)
        return
    }

    // valida se o email não é duplicado
    if(!Util.usuarioDuplicado(emailValue)) {
        AlteracoesPagina.mensagemErroRegistrar("Já existe um usuário com esse email.", erroContainer)
        return
    }

    // valida o nome
    if(!Util.validName(nomeValue)) {
        AlteracoesPagina.mensagemErroRegistrar("O nome não pode ser nulo", erroContainer)
        return
    }

    // valida a senha
    if(!Util.validPassword(senhaValue)) {
        AlteracoesPagina.mensagemErroRegistrar("A senha deve ter 8-30 caracteres e incluir: maiúscula, minúscula, número e símbolo", erroContainer)
        return
    }

    // verifica se a senha e o confirma senha são iguais
    if(!Util.passwordEqual(senhaValue, confirmaSenhaValue)) {
        AlteracoesPagina.mensagemErroRegistrar("A confirmação da senha deve ser igual à senha", erroContainer)
        return
    }
    // faz a tentativa de criar o objeto do user, de adicionar o user e então redirecionar o user para a página inicial
    // se não for possível, exibe no console um erro e mostra uma mensagem de erro no parágrafo de erro
    try {
        let user = new User(nomeValue, emailValue, senhaValue)
        Database.addUser(user)
        window.location.href = "../index.html"
    } catch(err) {
        console.error("Não foi possível criar o usuário")
        AlteracoesPagina.mensagemErroRegistrar("Não foi possível criar o usuário. Erro interno", erroContainer)
    }
    
})