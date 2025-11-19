class PaginaProdutoModel {
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
    static imgs = document.querySelectorAll(".buy-image")

    // Complementos
    static airbag = document.getElementById("carro-airbag")
    static freio = document.getElementById("carro-freio")
    static trava = document.getElementById("carro-trava")
    static licenciado = document.getElementById("carro-licenciado")
    static troca = document.getElementById("carro-troca")
    static ipva = document.getElementById("carro-ipva")
    static tetoSolar = document.getElementById("carro-tetoSolar")
    static vidrosEletricos = document.getElementById("carro-vidrosEletricos")
    static arCondicionado = document.getElementById("carro-arCondicionado")
    static bancoEmCouro = document.getElementById("carro-bancoEmCouro")
    static alarme = document.getElementById("carro-alarme")
    static retrovisorEletrico = document.getElementById("carro-retrovisorEletrico")

    // Localizacação
    static estado = document.getElementById("estado")
    static cidade = document.getElementById("cidade")

    // vendedor
    static vendedor = document.getElementById("vendedor")
    static telefone = document.getElementById("telefone")

    static renderizarCarroPagina() {
        let anuncio = Database.anuncioClicado
        console.log(anuncio)
        PaginaProdutoModel.marca.textContent = anuncio.car.marca
        PaginaProdutoModel.modelo.textContent = anuncio.car.modelo
        PaginaProdutoModel.motor.textContent = anuncio.car.motor
        PaginaProdutoModel.preco.textContent = "R$ " + anuncio.car.valor + ",00"
        PaginaProdutoModel.quilometragem.textContent = anuncio.car.quilometragem
        PaginaProdutoModel.cor.textContent =  anuncio.car.cor
        PaginaProdutoModel.carroceria.textContent = "sedan"
        PaginaProdutoModel.anoModelo.textContent =  anuncio.car.anoModelo
        PaginaProdutoModel.anoFabricado.textContent =  anuncio.car.anoFabricacao
        PaginaProdutoModel.cambio.textContent =  anuncio.car.cambio
        PaginaProdutoModel.combustivel.textContent =  "gasolina"

        PaginaProdutoModel.imgs[0].src = anuncio.imagens[0]
        PaginaProdutoModel.imgs[1].src = anuncio.imagens[1]
        PaginaProdutoModel.imgs[2].src = anuncio.imagens[2] 
        PaginaProdutoModel.imgs[3].src = anuncio.imagens[3] 

        PaginaProdutoModel.airbag.textContent = anuncio.car.airbag ? "sim" : "não"
        PaginaProdutoModel.freio.textContent = anuncio.car.freios ? "sim" : "não"
        PaginaProdutoModel.trava.textContent = anuncio.car.travasEletricas ? "sim" : "não"
        PaginaProdutoModel.licenciado.textContent = anuncio.car.licenciado ? "sim" : "não"
        PaginaProdutoModel.troca.textContent = anuncio.car.aceitaTroca ? "sim" : "não"
        PaginaProdutoModel.ipva.textContent = anuncio.car.ipvaPago ? "sim" : "não"
        PaginaProdutoModel.tetoSolar.textContent = anuncio.car.tetoSolar ? "sim" : "não"
        PaginaProdutoModel.vidrosEletricos.textContent = anuncio.car.vidrosEletricos ? "sim" : "não"
        PaginaProdutoModel.arCondicionado.textContent = anuncio.car.arCondicionado ? "sim" : "não"
        PaginaProdutoModel.bancoEmCouro.textContent = anuncio.car.bancosMaterial ? "sim" : "não"
        PaginaProdutoModel.alarme.textContent = anuncio.car.alarme ? "sim" : "não"
        PaginaProdutoModel.retrovisorEletrico.textContent = anuncio.car.retrovisorEletrico ? "sim" : "não"

        PaginaProdutoModel.cidade.textContent = anuncio.localizacao[1]
        PaginaProdutoModel.estado.textContent = anuncio.localizacao[0]

        PaginaProdutoModel.vendedor.textContent = anuncio.vendedor
        PaginaProdutoModel.telefone.textContent = anuncio.telefone
    }

}