class Anuncio {
    id
    car
    imagens
    titulo
    localizacao
    constructor(car, imagens, titulo, localizacao) {
        this.id = Database.incrementAnuncioId()
        this.car = car
        this.imagens = imagens
        this.titulo = titulo
        this.localizacao = localizacao
    }

    static cardAnuncio(id) {
        Database.setAnuncioId(id)
        window.location.href="./paginaproduto.html"
    }
}