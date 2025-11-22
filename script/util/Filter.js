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
            if (!anuncio.car || !anuncio.car.modelo) {
                return false; 
            }

            const modeloAnuncio = anuncio.car.modelo.trim();
            
            return regexModelo.test(modeloAnuncio);
        });
    }

    static filterModelo(anuncios, modelo) {
        if(modelo == '') {
            return anuncios
        }
        return anuncios.filter(anuncio => anuncio.car.modelo.toLowerCase().includes(modelo.toLowerCase()));
    }

    static filterMarca(anuncios, marcasSelecionadas) {
        if (!marcasSelecionadas || marcasSelecionadas.length === 0) return anuncios; 
        const marcasEmMinusculo = marcasSelecionadas.map(marca => marca.toLowerCase());

        return anuncios.filter(anuncio => 
            marcasEmMinusculo.includes(anuncio.car.marca.toLowerCase())
        );
    }

    static filterIntervaloAno(anuncios, anoInicio, anoFim){
        if(anoInicio == "" && anoFim != "") {
            return anuncios.filter(anuncio => anuncio.car.anoFabricacao <= anoFim);
        } else if(anoFim == "" && anoInicio != "") {
            return anuncios.filter(anuncio => anuncio.car.anoFabricacao >= anoInicio);
        }
        return anuncios.filter(anuncio => anuncio.car.anoFabricacao >= anoInicio && anuncio.car.anoFabricacao <= anoFim);
    }

    static filterAno(anuncios, ano){
        return anuncios.filter(anuncio => anuncio.car.anoFabricacao === ano);
    }

    static filterIntervaloPreco(anuncios, precoMinimo, precoMaximo) {
        if(precoMinimo == "" && precoMaximo != "") {
            return anuncios.filter(anuncio => anuncio.car.valor <= precoMaximo);
        } else if(precoMaximo == "" && precoMinimo != "") {
            return anuncios.filter(anuncio => anuncio.car.valor >= precoMinimo);
        }
        return anuncios.filter(anuncio => anuncio.car.valor >= precoMinimo && anuncio.car.valor <= precoMaximo);
    }

    static filterPreco(anuncios, preco) {
        return anuncios.filter(anuncio => anuncio.car.valor <= preco)
    }

    static filterIntervaloQuilometragem(anuncios, quilometragemMinima, quilometragemMaxima) {
        if(quilometragemMinima == "" && quilometragemMaxima != "") {
            return anuncios.filter(anuncio => anuncio.car.quilometragem <= quilometragemMaxima);
        } else if(quilometragemMaxima == "" && quilometragemMinima != "") {
            return anuncios.filter(anuncio => anuncio.car.quilometragem >= quilometragemMinima);
        }
        return anuncios.filter(anuncio => anuncio.car.quilometragem >= quilometragemMinima && anuncio.car.quilometragem <= quilometragemMaxima)
    }

    static filterCambio(anuncios, cambio) {
        if (!cambio) return anuncios;
        const cambioMinusc = cambio.toLowerCase();
        
        return anuncios.filter(anuncio => anuncio.car.cambio.toLowerCase() === cambioMinusc);
    }

    static filterCor(anuncios, coresSelecionadas) {
        if (!coresSelecionadas || coresSelecionadas.length === 0) return anuncios;
        const coresSelecionadasMinsculo = coresSelecionadas.map(cor => cor.toLowerCase());

        return anuncios.filter(anuncio => 
            coresSelecionadasMinsculo.includes(anuncio.car.cor.toLowerCase())
        );
    }

    static filterCarroceria(anuncios, carroceriasSelecionadas) {
        if (!carroceriasSelecionadas || carroceriasSelecionadas.length === 0) return anuncios;
        const carroceriasMinusc = carroceriasSelecionadas.map(c => c.toLowerCase());
        
        return anuncios.filter(anuncio => 
            carroceriasMinusc.includes(anuncio.car.carroceria.toLowerCase())
        );
    }
    
    static filterPortas(anuncios, portasSelecionadas) {

        if (!portasSelecionadas || portasSelecionadas.length === 0) return anuncios;

        return anuncios.filter(anuncio => 
            portasSelecionadas.includes(anuncio.car.portas)
        );
    }
}