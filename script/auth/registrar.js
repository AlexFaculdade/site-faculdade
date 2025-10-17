import Util from "../util/util.js"

const formRegistrar = document.getElementById("form-registrar")
const nome = document.getElementById("nome")
const email = document.getElementById("email")
const senha = document.getElementById("senha")
const confirmaSenha = document.getElementById("confirmaSenha")


formRegistrar.addEventListener("submit", (e) => {
    e.preventDefault() 
    const util = new Util();

    let nomeValue = nome.value
    let emailValue = email.value
    let senhaValue = senha.value
    let confirmaSenhaValue = confirmaSenha.value
    if(!util.validEmail(emailValue)) {
        alert("Email inválido")
        return
    }

    if(!util.validName(nome)) {
        alert("Deve haver um nome")
        return
    }

})