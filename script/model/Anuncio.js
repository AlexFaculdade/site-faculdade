class Anuncio {
    id
    car
    price
    imgens
    titulo
    localizacao
    constructor(car, price, imagens, titulo, localizacao) {
        this.id = Database.incrementAnuncioId()
        this.car = car
        this.price = price
        this.imagens = imagens
        this.titulo = titulo
        this.localizacao = localizacao
    }

    static cardAnuncio(id) {
        Database.setAnuncioId(id)
        window.location.href="./paginaproduto.html"
    }
}