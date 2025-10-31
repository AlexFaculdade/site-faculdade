// Chama o method sessionUser (method que busca no localStorage do user atualmente logado), se retorna null,
// mostra um alert e redireciona o user para login. Funciona como filter para rotas protegidas
if(!Database.sessionUser()) {
    alert("Você precisa estar logado para acessar essa página")
    window.location.href = "../../auth/login.html"
}