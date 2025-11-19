// method que chama o findbyemail para verificar se exsite um user com esse email e então, se o user existir, armazena ele 
// numa const e então verifica sua senha, se for válida, por fim, autentica ele com login method e então retorna o userEncontrado

class VerificarLogin {
    static verficarAutenticacao(email, senha) {
        if(!Database.findByEmail(email)) return null
        const userEncontrado = Database.findByEmail(email)
        if(userEncontrado.senha !== senha) return null
        Database.login(userEncontrado)
        return userEncontrado
    }
}