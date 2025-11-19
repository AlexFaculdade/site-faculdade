class FinalizarPagamentoModel {
    static carImg = document.getElementById("car-img")
    static marca = document.getElementById("marca")
    static modelo = document.getElementById("modelo")
    static motor = document.getElementById("motor")
    static price = document.getElementById("price")
    static cidade = document.getElementById("cidade")
    static estado = document.getElementById("estado")
    static anoFabricacao = document.getElementById("anoFabricacao")
    static anoModelo = document.getElementById("anoModelo")
    static km = document.getElementById("km")
    static cambio = document.getElementById("cambio")

    static renderizarCarroPagina() {
        let anuncio = Database.anuncioClicado
        FinalizarPagamentoModel.carImg.src = anuncio.imagens[0]
        FinalizarPagamentoModel.marca.textContent = anuncio.car.marca
        FinalizarPagamentoModel.modelo.textContent = anuncio.car.modelo
        FinalizarPagamentoModel.motor.textContent = anuncio.car.motor
        FinalizarPagamentoModel.price.textContent = "R$ " + anuncio.car.valor + ",00"

        FinalizarPagamentoModel.cidade.textContent = anuncio.localizacao[1]
        FinalizarPagamentoModel.estado.textContent = anuncio.localizacao[0]

        FinalizarPagamentoModel.anoModelo.textContent =  anuncio.car.anoModelo
        FinalizarPagamentoModel.anoFabricacao.textContent =  anuncio.car.anoFabricacao

        FinalizarPagamentoModel.km.textContent = anuncio.car.quilometragem
        
        FinalizarPagamentoModel.cambio.textContent =  anuncio.car.cambio
        
    }

}