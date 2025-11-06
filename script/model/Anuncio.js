class Anuncio {
    id
    car
    imagens
    titulo
    localizacao
    vendedor
    telefone
    constructor(car, imagens, titulo, localizacao, vendedor, telefone) {
        this.id = Database.incrementAnuncioId()
        this.car = car
        this.imagens = imagens
        this.titulo = titulo
        this.localizacao = localizacao
        this.vendedor = vendedor
        this.telefone = telefone
    }

    static cardAnuncio(id) {
        console.log("clicado")
        Database.setAnuncioId(id)
        window.location.href="./paginaproduto.html"
    }
}