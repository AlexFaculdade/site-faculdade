// arquivo para preencher com as info do user a página home
const userLogado = Database.sessionUser()
HomeAlteravel.setNomePerfilHeader(userLogado.nome)