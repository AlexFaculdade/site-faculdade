if(!Database.sessionUser()) {
    alert("Você precisa estar logado para acessar essa página")
    window.location.href = "../../auth/login.html"
}