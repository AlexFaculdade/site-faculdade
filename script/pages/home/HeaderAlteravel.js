
class HeaderAlteravel {
    nomePerfilHeader = document.getElementById("nomePerfilHeader")

    static setNomePerfilHeader(novoNome) {
        if(!Util.validName(novoNome)) return
        nomePerfilHeader.textContent = novoNome
    }

    static getNomePerfilHeader() {
        return nomePerfil.value
    }

}