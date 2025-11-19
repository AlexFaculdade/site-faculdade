class VerificacaoCamposVenda {
    static marca = document.getElementById("marca")
    static modelo = document.getElementById("modelo")
    static carroceria = document.getElementById("carroceria")
    static cor = document.getElementById("cor")
    static chassiNumero = document.getElementById("chassi")
    static placa = document.getElementById("placa")
    static anoFabricacao = document.getElementById("anoFabricacao")
    static anoModelo = document.getElementById("anoModelo")
    static km = document.getElementById("km")
    static motor = document.getElementById("motor")
    static cambio = document.getElementById("cambio")
    static portas = document.getElementById("portas")
    static valor = document.getElementById("valor")
    static bancosMaterial = document.getElementById("bancosMaterial")
    static licenciado = document.getElementById("licenciado")
    static ipvaPago = document.getElementById("ipvaPago")
    static aceitaTroca = document.getElementById("aceitaTroca")
    static airbag = document.getElementById("airbag")
    static freiosAbs = document.getElementById("freios")
    static tetoSolar = document.getElementById("tetoSolar")
    static travasEletricas = document.getElementById("travasEletricas")
    static vidrosEletricos = document.getElementById("vidrosEletricos")
    static arCondicionado = document.getElementById("arCondicionado")
    static alarme = document.getElementById("alarme")
    static retrovisorEletrico = document.getElementById("retrovisorEletrico")

    // imagens do carro
    static img1 = document.getElementById("foto1")
    static img2 = document.getElementById("foto2")
    static img3 = document.getElementById("foto3")
    static img4 = document.getElementById("foto4")

    //titulo
    static titulo = document.getElementById("titulo")

    // Localização
    static estado = document.getElementById("estado")
    static cidade = document.getElementById("cidade")

    // Telefone
    static telefone = document.getElementById("telefone")
    static vendedor = document.getElementById("username")
    
    static errorParagraph = document.getElementById("erro")

    static validarCampos() {
        if(!VerificacaoCamposVenda.marca.value ) {
            AlteracoesPagina.mensagemErroRegistrar("A marca deve ser selecionada", VerificacaoCamposVenda.errorParagraph)
            return false
        }

        if(!VerificacaoCamposVenda.modelo.value ) {
            AlteracoesPagina.mensagemErroRegistrar("O modelo deve ser colocado", VerificacaoCamposVenda.errorParagraph)
            return false
        }
        if(!VerificacaoCamposVenda.carroceria.value ) {
            AlteracoesPagina.mensagemErroRegistrar("A carroceria deve ser selecionada", VerificacaoCamposVenda.errorParagraph)
            return false
        }
        if(!VerificacaoCamposVenda.cor.value ) {
            AlteracoesPagina.mensagemErroRegistrar("A cor deve ser selecionada", VerificacaoCamposVenda.errorParagraph)
            return false
        }
        if(VerificacaoCamposVenda.chassiNumero.value) {
            if(VerificacaoCamposVenda.chassiNumero.value.length != 17) {
                AlteracoesPagina.mensagemErroRegistrar("O chassi deve ter 17 dígitos", VerificacaoCamposVenda.errorParagraph)
                return false
            }
        }
        if(!VerificacaoCamposVenda.placa.value) {
            if(VerificacaoCamposVenda.km.value != 0) {
                AlteracoesPagina.mensagemErroRegistrar("A placa deve ser fornecida (Para carros novos, a quilometragem deve estar 0", VerificacaoCamposVenda.errorParagraph)
                return false
            }
        } else {
            if(!Util.validarPlacaMercoSul(VerificacaoCamposVenda.placa.value)) {
                AlteracoesPagina.mensagemErroRegistrar("A placa deve seguir o formato LLLNLNN", VerificacaoCamposVenda.errorParagraph)
                return false
            }
        }
        if(!VerificacaoCamposVenda.anoFabricacao.value) {
            AlteracoesPagina.mensagemErroRegistrar("O ano de fabricação deve ser colocado", VerificacaoCamposVenda.errorParagraph)
            return false
        }
        if(!VerificacaoCamposVenda.anoModelo.value) {
            AlteracoesPagina.mensagemErroRegistrar("O ano do modelo deve ser colocado", VerificacaoCamposVenda.errorParagraph)
            return false
        }
        if(!VerificacaoCamposVenda.km.value) {
            AlteracoesPagina.mensagemErroRegistrar("O km deve ser colocado", VerificacaoCamposVenda.errorParagraph)
            return false
        }
        if(!VerificacaoCamposVenda.km.value) {
            AlteracoesPagina.mensagemErroRegistrar("O km deve ser colocado", VerificacaoCamposVenda.errorParagraph)
            return false
        }
        if(!VerificacaoCamposVenda.motor.value) {
            AlteracoesPagina.mensagemErroRegistrar("O motor deve ser colocado", VerificacaoCamposVenda.errorParagraph)
            return false
        }
        if(!VerificacaoCamposVenda.motor.value) {
            AlteracoesPagina.mensagemErroRegistrar("O motor deve ser colocado", VerificacaoCamposVenda.errorParagraph)
            return false
        }
        if(!VerificacaoCamposVenda.cambio.value) {
            AlteracoesPagina.mensagemErroRegistrar("O cambio deve ser colocado", VerificacaoCamposVenda.errorParagraph)
            return false
        }
        if(!VerificacaoCamposVenda.portas.value) {
            AlteracoesPagina.mensagemErroRegistrar("As portas devem ser colocadas", VerificacaoCamposVenda.errorParagraph)
            return false
        }
        if(!VerificacaoCamposVenda.valor.value) {
            AlteracoesPagina.mensagemErroRegistrar("O preço deve ser colocado", VerificacaoCamposVenda.errorParagraph)
            return false
        }
        if(!VerificacaoCamposVenda.bancosMaterial.value) {
            AlteracoesPagina.mensagemErroRegistrar("O material do banco deve ser colocado", VerificacaoCamposVenda.errorParagraph)
            return false
        }
        if(!VerificacaoCamposVenda.titulo.value) {
            AlteracoesPagina.mensagemErroRegistrar("O título não pode estar vazio", VerificacaoCamposVenda.errorParagraph)
            return false
        }
        if(!VerificacaoCamposVenda.estado.value) {
            AlteracoesPagina.mensagemErroRegistrar("O Estado da localizacação do carro não pode estar vazio", VerificacaoCamposVenda.errorParagraph)
            return false
        }
        if(!VerificacaoCamposVenda.cidade.value) {
            AlteracoesPagina.mensagemErroRegistrar("A cidade da localização do carro não pode estar vazia", VerificacaoCamposVenda.errorParagraph)
            return false
        }
        if(!VerificacaoCamposVenda.telefone.value) {
            AlteracoesPagina.mensagemErroRegistrar("O telefone deve ser preenchido", VerificacaoCamposVenda.errorParagraph)
            return false
        } else {
            if(!Util.validaTelefoneBr(VerificacaoCamposVenda.telefone.value)) {
                AlteracoesPagina.mensagemErroRegistrar("O telefone está num formato inválido. Ex: 41987654321", VerificacaoCamposVenda.errorParagraph)
                return false
            }
        }

        return true
    }

    static criarAnuncioCarro() {
        let marca = VerificacaoCamposVenda.marca.value
        let modelo = VerificacaoCamposVenda.modelo.value
        let carroceria = VerificacaoCamposVenda.carroceria.value
        let cor = VerificacaoCamposVenda.cor.value
        let chassi = VerificacaoCamposVenda.chassiNumero.value ? VerificacaoCamposVenda.chassiNumero.value : "Chassi não fornecido"
        let placa = VerificacaoCamposVenda.placa.value
        let anoFabricacao = VerificacaoCamposVenda.anoFabricacao.value
        let anoModelo = VerificacaoCamposVenda.anoModelo.value
        let quilometragem = VerificacaoCamposVenda.km.value
        let motor = VerificacaoCamposVenda.motor.value
        let valor = VerificacaoCamposVenda.valor.value
        let cambio = VerificacaoCamposVenda.cambio.value
        let portas = VerificacaoCamposVenda.portas.value

        let airbag = VerificacaoCamposVenda.airbag.checked
        let freiosAbs = VerificacaoCamposVenda.freiosAbs.checked
        let travasEletricas = VerificacaoCamposVenda.travasEletricas.checked
        let licenciado = VerificacaoCamposVenda.licenciado.checked
        let aceitaTroca = VerificacaoCamposVenda.aceitaTroca.checked
        let ipvaPago = VerificacaoCamposVenda.ipvaPago.checked
        let tetoSolar = VerificacaoCamposVenda.tetoSolar.checked
        let vidrosEletricos = VerificacaoCamposVenda.vidrosEletricos.checked
        let arCondicionado = VerificacaoCamposVenda.arCondicionado.checked
        let bancosMaterial = VerificacaoCamposVenda.bancosMaterial.checked
        let alarme = VerificacaoCamposVenda.alarme.checked
        let retrovisorEletrico = VerificacaoCamposVenda.retrovisorEletrico.checked
        let carroObjeto = {
                marca,
                modelo,
                carroceria,
                cor,
                chassi,
                placa,
                anoFabricacao: parseInt(anoFabricacao),
                anoModelo: parseInt(anoModelo),
                quilometragem: parseFloat(quilometragem),
                motor,
                valor: parseFloat(valor),
                cambio,
                portas: parseInt(portas),

                opcionais: {
                    airbag,
                    freiosAbs,
                    travasEletricas,
                    tetoSolar,
                    vidrosEletricos,
                    arCondicionado,
                    alarme,
                    retrovisorEletrico,
                    bancosMaterial // Ajustando para string se necessário
                },
                situacao: {
                    licenciado,
                    ipvaPago,
                    aceitaTroca
                }
    }
        return new Car(
            carroObjeto.marca,
            carroObjeto.modelo,
            carroObjeto.carroceria,
            carroObjeto.cor,
            carroObjeto.chassi,
            carroObjeto.placa,
            carroObjeto.anoFabricacao,
            carroObjeto.anoModelo,
            carroObjeto.quilometragem,
            carroObjeto.motor,
            carroObjeto.valor,
            carroObjeto.cambio,
            carroObjeto.portas,

            carroObjeto.opcionais.airbag,
            carroObjeto.opcionais.freiosAbs,
            carroObjeto.opcionais.travasEletricas,

            carroObjeto.situacao.licenciado,
            carroObjeto.situacao.aceitaTroca,
            carroObjeto.situacao.ipvaPago,

            carroObjeto.opcionais.tetoSolar,
            carroObjeto.opcionais.vidrosEletricos,
            carroObjeto.opcionais.arCondicionado,
            carroObjeto.opcionais.bancosMaterial,
            carroObjeto.opcionais.alarme,
            carroObjeto.opcionais.retrovisorEletrico,
        )
}
            

}