class Util {
    // Method com regex para validar senha
    static validEmail(email) {
        const regexEmail = new RegExp("^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})$")
        return regexEmail.test(email)
    }

    // Method para validar email, busca o email de tentativa de cadastro do user, se existir, não permite criar uma conta
    // já que o email deve ser único
    static usuarioDuplicado(email){
        if(!Database.findByEmail(email)) return true
        return null
    }

    // valida se o nome do user não está vazio
    static validName(nome) {
        if(!nome) return false

        const nomeLimpo = nome.trim()
        if(nomeLimpo.length === 0) return false

        return true
    }

    // valida a senha do user com uma regex
    static validPassword(senha) {
        const regexSenhaForte = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\\-=\\[\\]{};\':"\\\\|.<>\\/?]).{8,30}$')
        return regexSenhaForte.test(senha)
    }


    // valida igualdade das senhas na hora de criar a conta do user
    static passwordEqual(senha, confirmaSenha) {
        if(senha !== confirmaSenha) return false
        return true
    }

    static extrairValorInputPreco(texto) {
        if (texto.toLowerCase().includes('mil')) {
        // Remove 'Até', 'mil', e espaços, e converte para número
        const num = texto.toLowerCase().replace('até', '').replace('mil', '').trim();
        return parseInt(num) * 1000; 
        }
        return null;
    }

    static removerSelecaoEspecifica(elementosNodeList) {
        elementosNodeList.forEach(elemento => {
            elemento.classList.remove("selecionada")
        })
    }

    // Utiliza uma Regex para validar as placas conforme o formato da mercosul
    static validarPlacaMercoSul(placa) {
        const RegexPlacaMercoSul = new RegExp('^[A-Z]{3}[0-9][A-Z][0-9]{2}$')
        return RegexPlacaMercoSul.test(placa)
    }

    // Valida o telefone fornecido com uma regex
    static validaTelefoneBr(telefone) {
        const regexBR = new RegExp('^[1-9]{2}(?:[2-9][0-9]{7}|[6-9][0-9]{8})$')
        const numeroLimpo = telefone.replace(/[^\d]/g, '');
        return regexBR.test(numeroLimpo);
    }
}
