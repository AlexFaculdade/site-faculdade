class Filter {
    static filterLocalizacao(anuncios, localizacao) {
        // Retorna os anúncios que correspondem à localização fornecida (case insensitive)
        if(localizacao == '') {
            return anuncios
        }
        return anuncios.filter(anuncio => anuncio.car.modelo.toLowerCase().includes(localizacao.toLowerCase()));
    }

    static filterMarca(anuncios, marcasSelecionadas) {
        // Retorna os anúncios que correspondem à marca fornecida (case insensitive)
        if (!marcasSelecionadas || marcasSelecionadas.length === 0) return anuncios; // Retorna tudo se a lista de filtros estiver vazia
        const marcasEmMinusculo = marcasSelecionadas.map(marca => marca.toLowerCase());

        // Filtra os anúncios. O anúncio será mantido se a sua marca
        // estiver INCLUÍDA no array de marcasEmMinusculo.
        return anuncios.filter(anuncio => 
            marcasEmMinusculo.includes(anuncio.car.marca.toLowerCase())
        );
    }

    static filterIntervaloAno(anuncios, anoInicio, anoFim){
        // Retorna os anúncios que estão dentro do intervalo de ano fornecido
        return anuncios.filter(anuncio => anuncio.car.anoFabricacao >= anoInicio && anuncio.car.anoFabricacao <= anoFim);
    }

    static filterAno(anuncios, ano){
        // Retorna os anúncios que correspondem ao ano fornecido
        return anuncios.filter(anuncio => anuncio.car.anoFabricacao === ano);
    }

    static filterIntervaloPreco(anuncios, precoMinimo, precoMaximo) {
        // Retorna os anúncios que estão dentro do intervalo de preço fornecido
        return anuncios.filter(anuncio => anuncio.car.valor >= precoMinimo && anuncio.car.valor <= precoMaximo);
    }

    static filterPreco(anuncios, preco) {
        // Retorna os anúncios até a faixa de preço fornecida
        return anuncios.filter(anuncio => anuncio.car.valor <= preco)
    }

    static filterIntervaloQuilometragem(anuncios, quilometragemMinima, quilometragemMaxima) {
        // Retorna os anúncios no intervalo da quilometragem fornecida
        return anuncios.filter(anuncio => anuncio.car.quilometragem >= quilometragemMinima && anuncio.car.quilometragem <= quilometragemMaxima)
    }

    static filterCambio(anuncios, cambio) {
        // Retorna os anúncios que correspondem ao câmbio
        return anuncios.filter(anuncio => anuncio.car.cambio === cambio)
    }

    static filterCor
}