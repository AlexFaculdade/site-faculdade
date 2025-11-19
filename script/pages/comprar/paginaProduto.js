document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById("video")
    if(Database.anuncioClicado.car.modelo === "Civic EG") {
        video.style.display = "flex"
    }
    PaginaProdutoModel.renderizarCarroPagina()
})