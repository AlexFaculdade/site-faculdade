// Classe para mapear o que deve poder ser possível de alterar na página home
class HeaderAlteravel {
    // aqui diz respeito ao nome do perfil
    nomePerfilHeader = document.getElementById("nomePerfilHeader")

    // setter para alterar o texto do nome do perfil
    static setNomePerfilHeader(novoNome) {
        if(!Util.validName(novoNome)) return
        nomePerfilHeader.textContent = novoNome
    }

    // getter para pegar o nome do perfil
    static getNomePerfilHeader() {
        return nomePerfil.value
    }

}