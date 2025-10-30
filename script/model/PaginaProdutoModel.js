class PaginaProdutoModel {
    //tituloPagina = document.getElementById("tituloPagina")
    static marca = document.getElementById("marca-carro")
    static modelo = document.getElementById("modelo-carro")
    static motor = document.getElementById("motor-carro")
    static preco = document.getElementById("preco-carro")
    static cidade = document.getElementById("cidade")
    static quilometragem = document.getElementById("quilometragem-carro")
    static cor = document.getElementById("cor-carro")
    static carroceria = document.getElementById("carroceria-carro")
    static anoModelo = document.getElementById("ano-fabricado-carro")
    static anoFabricado = document.getElementById("ano-modelo-carro")
    static cambio = document.getElementById("cambio-carro")
    static combustivel = document.getElementById("combustivel-carro")
    static blindado = document.getElementById("blindado-carro")


    static renderizarCarroPagina() {
        let anuncio = Database.anuncioClicado
        console.log(anuncio)
        //tituloPagina.textContent =  anuncio.carro.marca + " " + anuncio.carro.modelo
        PaginaProdutoModel.marca.textContent = anuncio.car.marca
        PaginaProdutoModel.modelo.textContent = anuncio.car.modelo
        PaginaProdutoModel.motor.textContent = anuncio.car.motor
        PaginaProdutoModel.preco.textContent = "R$ " + anuncio.car.valor + ",00"
        PaginaProdutoModel.cidade.textContent = "curitiba pr"
        PaginaProdutoModel.quilometragem.textContent = anuncio.car.quilometragem
        PaginaProdutoModel.cor.textContent =  anuncio.car.cor
        PaginaProdutoModel.carroceria.textContent = "sedan"
        PaginaProdutoModel.anoModelo.textContent =  anuncio.car.anoModelo
        PaginaProdutoModel.anoFabricado.textContent =  anuncio.car.anoFabricacao
        PaginaProdutoModel.cambio.textContent =  anuncio.car.cambio
        PaginaProdutoModel.combustivel.textContent =  "gasolina"
        PaginaProdutoModel.blindado.textContent = "sim"

    }

}