class Filter {
    static filterLocalizacao(anuncios, localizacao) {
    if (localizacao === '') {
        return anuncios;
    }
    const termoBusca = localizacao.toLowerCase();

    return anuncios.filter(anuncio => {
        const localizacaoArray = anuncio.localizacao;
        
        return localizacaoArray.some(item => 
            item.toLowerCase().includes(termoBusca)
        );
    });
}

    static filterModelo(anuncios, modelo) {
        // Retorna os anúncios que correspondem à localização fornecida (case insensitive)
        if(modelo == '') {
            return anuncios
        }
        return anuncios.filter(anuncio => anuncio.car.modelo.toLowerCase().includes(modelo.toLowerCase()));
    }

    static filterModeloCategoria(anuncios, modelo) {
        if (!modelo || typeof modelo !== 'string' || modelo.trim() === "") {
            return anuncios;
        }   
        const termoBusca = modelo.toLowerCase().trim();
        const regexModelo = new RegExp(`^${termoBusca}(\\s|$)`, 'i');

        return anuncios.filter(anuncio => {
            // Checagem de robustez
            if (!anuncio.car || !anuncio.car.modelo) {
                return false; 
            }

            const modeloAnuncio = anuncio.car.modelo.trim();
            
            // Testa se a Regex encontra a palavra principal no início do modelo do anúncio.
            return regexModelo.test(modeloAnuncio);
        });
    }

    static filterModelo(anuncios, modelo) {
        // Retorna os anúncios que correspondem à localização fornecida (case insensitive)
        if(modelo == '') {
            return anuncios
        }
        return anuncios.filter(anuncio => anuncio.car.modelo.toLowerCase().includes(modelo.toLowerCase()));
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
        if(anoInicio == "" && anoFim != "") {
            return anuncios.filter(anuncio => anuncio.car.anoFabricacao <= anoFim);
        } else if(anoFim == "" && anoInicio != "") {
            return anuncios.filter(anuncio => anuncio.car.anoFabricacao >= anoInicio);
        }
        return anuncios.filter(anuncio => anuncio.car.anoFabricacao >= anoInicio && anuncio.car.anoFabricacao <= anoFim);
    }

    static filterAno(anuncios, ano){
        // Retorna os anúncios que correspondem ao ano fornecido
        return anuncios.filter(anuncio => anuncio.car.anoFabricacao === ano);
    }

    static filterIntervaloPreco(anuncios, precoMinimo, precoMaximo) {
        // Retorna os anúncios que estão dentro do intervalo de preço fornecido
        if(precoMinimo == "" && precoMaximo != "") {
            return anuncios.filter(anuncio => anuncio.car.valor <= precoMaximo);
        } else if(precoMaximo == "" && precoMinimo != "") {
            return anuncios.filter(anuncio => anuncio.car.valor >= precoMinimo);
        }
        return anuncios.filter(anuncio => anuncio.car.valor >= precoMinimo && anuncio.car.valor <= precoMaximo);
    }

    static filterPreco(anuncios, preco) {
        // Retorna os anúncios até a faixa de preço fornecida
        return anuncios.filter(anuncio => anuncio.car.valor <= preco)
    }

    static filterIntervaloQuilometragem(anuncios, quilometragemMinima, quilometragemMaxima) {
        // Retorna os anúncios no intervalo da quilometragem fornecida
        if(quilometragemMinima == "" && quilometragemMaxima != "") {
            return anuncios.filter(anuncio => anuncio.car.quilometragem <= quilometragemMaxima);
        } else if(quilometragemMaxima == "" && quilometragemMinima != "") {
            return anuncios.filter(anuncio => anuncio.car.quilometragem >= quilometragemMinima);
        }
        return anuncios.filter(anuncio => anuncio.car.quilometragem >= quilometragemMinima && anuncio.car.quilometragem <= quilometragemMaxima)
    }

    static filterCambio(anuncios, cambio) {
        // Retorna os anúncios que correspondem ao câmbio (case insensitive)
        if (!cambio) return anuncios;
        const cambioMinusc = cambio.toLowerCase();
        
        return anuncios.filter(anuncio => anuncio.car.cambio.toLowerCase() === cambioMinusc);
    }

    static filterCor(anuncios, coresSelecionadas) {
        // Retorna os anúncios que correspondem a UMA das cores selecionadas (case insensitive)
        if (!coresSelecionadas || coresSelecionadas.length === 0) return anuncios;
        const coresSelecionadasMinsculo = coresSelecionadas.map(cor => cor.toLowerCase());

        return anuncios.filter(anuncio => 
            coresSelecionadasMinsculo.includes(anuncio.car.cor.toLowerCase())
        );
    }

    static filterCarroceria(anuncios, carroceriasSelecionadas) {
        // Retorna os anúncios que correspondem a UMA das carrocerias selecionadas (case insensitive)
        if (!carroceriasSelecionadas || carroceriasSelecionadas.length === 0) return anuncios;
        const carroceriasMinusc = carroceriasSelecionadas.map(c => c.toLowerCase());
        
        return anuncios.filter(anuncio => 
            carroceriasMinusc.includes(anuncio.car.carroceria.toLowerCase())
        );
    }
    
    static filterPortas(anuncios, portasSelecionadas) {
        // Retorna os anúncios que correspondem a UM dos números de portas selecionados (números)
        if (!portasSelecionadas || portasSelecionadas.length === 0) return anuncios;
        
        // portasSelecionadas já são números graças ao .map(Number) em FilterEvents
        return anuncios.filter(anuncio => 
            portasSelecionadas.includes(anuncio.car.portas)
        );
    }
}