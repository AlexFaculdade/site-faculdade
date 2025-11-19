class FilterEvents {
  static anuncios = [...Object.values(Database.anuncios)];
  static filtro = document.getElementById("filtro");

  static searchLocalizacao = document.getElementById("localizacao");
  static searchModelo = document.getElementById("modelo");
  static containerMarcas = document.querySelector(".container-marcas");
  static anoMinimo = document.getElementById("minimoAno");
  static anoMaximo = document.getElementById("maximoAno");
  static anoEspecifico = document.querySelectorAll(".anoEspecifico")
  static precoMinimo = document.getElementById("precoMinimo");
  static precoMaximo = document.getElementById("precoMaximo");
  static precoEspecifico = document.querySelectorAll(".precoEspecifico");
  static quilometragemMinima = document.getElementById("quilometragemMinima");
  static quilometragemMaxima = document.getElementById("quilometragemMaxima");
  
  static selectCambio = document.getElementById("select-cambio");
  static checkboxesCor = document.querySelectorAll(".checkbox-cor");
  static checkboxesCarroceria = document.querySelectorAll(".carroceria");
  static checkboxesPortas = document.querySelectorAll(".portas");

  static refreshDatabase() {
    FilterEvents.anuncios = [...Object.values(Database.anuncios)];
  }

  static getCambioSelecionado() {
    const valor = FilterEvents.selectCambio.value;
    if (valor === 'valor1') {
        return null; 
    }
    return FilterEvents.selectCambio.options[FilterEvents.selectCambio.selectedIndex].textContent.trim();
  }

  static getCheckboxValues(checkboxList) {
    const valores = [];
    checkboxList.forEach(checkbox => {
        if (checkbox.checked) {
            // Pega o texto do parágrafo vizinho (ex: 'Amarelo', 'Hatch', '4')
            const texto = checkbox.nextElementSibling.textContent.trim();
            valores.push(texto);
        }
    });
    return valores;
  }

  static getCoresSelecionadas() {
      return FilterEvents.getCheckboxValues(FilterEvents.checkboxesCor);
  }

  static getCarroceriasSelecionadas() {
      return FilterEvents.getCheckboxValues(FilterEvents.checkboxesCarroceria);
  }

  static getPortasSelecionadas() {
      // Os valores das portas são números, vamos convertê-los aqui
      return FilterEvents.getCheckboxValues(FilterEvents.checkboxesPortas).map(Number);
  }

  static getSearchLocalizacao() {
    return FilterEvents.searchLocalizacao.value;
  }

  static getSearchModelo() {
    return FilterEvents.searchModelo.value;
  }

  static getAnoMinimo() {
    return FilterEvents.anoMinimo.value;
  }

  static getAnoMaximo() {
    return FilterEvents.anoMaximo.value;
  }

  static getPrecoMinimo() {
    return FilterEvents.precoMinimo.value
  }

  static getPrecoMaximo() {
    return FilterEvents.precoMaximo.value
  }

  static getQuilometragemMinima() {
    return FilterEvents.quilometragemMinima.value
  }
  static getQuilometragemMaxima() {
    return FilterEvents.quilometragemMaxima.value
  }

  static handleInputSearch() {
    FilterEvents.aplicarTodosFiltros()
  }


  static getMarcasSelecionadas() {
    let marcas = []
    const elementosSelecionados = document.querySelectorAll('.container-marcas--individual.selecionada');
    elementosSelecionados.forEach(elemento => {
            const nomeMarca = elemento.querySelector('p').textContent.trim();
            marcas.push(nomeMarca);
    });
    return marcas
  }

  static forcarSelecaoMarca(marcaNome) {
    FilterEvents.containerMarcas.querySelectorAll('.container-marcas--individual')
        .forEach(el => el.classList.remove('selecionada'));
        
    let marcaEncontrada = null;

    FilterEvents.containerMarcas.querySelectorAll('.container-marcas--individual').forEach(elemento => {
        const nomeMarca = elemento.querySelector('p').textContent.trim();
        
        if (nomeMarca.toLowerCase() === marcaNome.toLowerCase()) {
            elemento.classList.add('selecionada');
            marcaEncontrada = true;
            
        }
    });
}

static forcarSelecaoCarroceria(valorCarroceria) {
    if (!valorCarroceria || typeof valorCarroceria !== 'string' || valorCarroceria.trim() === "") {
        return;
    }
    
    const valorBusca = valorCarroceria.toLowerCase().trim();

    FilterEvents.checkboxesCarroceria.forEach(checkbox => {
        const textoCarroceria = checkbox.nextElementSibling.textContent.trim().toLowerCase();
        
        if (textoCarroceria === valorBusca) {
            checkbox.checked = true;
        } else {
            checkbox.checked = false;
        }
    });
}

  static aplicarTodosFiltros() {
    FilterEvents.refreshDatabase();
    let resultadosFinais = FilterEvents.anuncios;

    if(Database.categoriaClicada) {
      FilterEvents.searchModelo.value = Database.categoriaClicada
      resultadosFinais = Filter.filterModeloCategoria(
        resultadosFinais, 
        FilterEvents.searchModelo.value)
        Database.limparCategoriaChave(CATEGORIA_CLICADA, 0)
    }

    if(Database.marcaInicioClicada) {
      FilterEvents.forcarSelecaoMarca(Database.marcaInicioClicada)
      Database.limparCategoriaChave(MARCA_INICIO_CLICADA, 1)
    }

    if(Database.chassiCarro) {
      FilterEvents.forcarSelecaoCarroceria(Database.chassiCarro)
      Database.limparCategoriaChave(CHASSI_INICIO_CLICADO, 2)
    }


    const localizacao = FilterEvents.getSearchLocalizacao();
    if (localizacao) {
      resultadosFinais = Filter.filterLocalizacao(
        resultadosFinais,
        localizacao
      );

    }

    const modelo = FilterEvents.getSearchModelo();
    if (modelo) {
      resultadosFinais = Filter.filterModelo(
        resultadosFinais,
        modelo
      );
    }

    const marcasAtivas = FilterEvents.getMarcasSelecionadas();
        if (marcasAtivas.length > 0) {
            // Filtra o resultado da localização
            resultadosFinais = Filter.filterMarca(resultadosFinais, marcasAtivas);
    }
    
    const anoMin = FilterEvents.getAnoMinimo();
    const anoMax = FilterEvents.getAnoMaximo();
    if (anoMin != "" || anoMax != "") {
      resultadosFinais = Filter.filterIntervaloAno(
        resultadosFinais,
        anoMin,
        anoMax
      );
    }


    const precoMin = FilterEvents.getPrecoMinimo();
    const precoMax = FilterEvents.getPrecoMaximo();
    if (precoMin != "" || precoMax != "") {
      resultadosFinais = Filter.filterIntervaloPreco(
        resultadosFinais,
        precoMin,
        precoMax
      );
    }

    const quilometragemMin = FilterEvents.getQuilometragemMinima();
    const quilometragemMax = FilterEvents.getQuilometragemMaxima();
    if (quilometragemMin != "" || quilometragemMax != "") {
      resultadosFinais = Filter.filterIntervaloQuilometragem(
        resultadosFinais,
        quilometragemMin,
        quilometragemMax
      );
    }

    // NOVO: FILTRO DE CÂMBIO
    const cambio = FilterEvents.getCambioSelecionado();
    if (cambio) {
      resultadosFinais = Filter.filterCambio(resultadosFinais, cambio);
    }

    const coresAtivas = FilterEvents.getCoresSelecionadas();
    if (coresAtivas.length > 0) {
      resultadosFinais = Filter.filterCor(resultadosFinais, coresAtivas);
    }
    
    const carroceriasAtivas = FilterEvents.getCarroceriasSelecionadas();
    if (carroceriasAtivas.length > 0) {
      resultadosFinais = Filter.filterCarroceria(resultadosFinais, carroceriasAtivas);
    }

    const portasAtivas = FilterEvents.getPortasSelecionadas();
    if (portasAtivas.length > 0) {
      resultadosFinais = Filter.filterPortas(resultadosFinais, portasAtivas);
    }

    renderizarCarros(resultadosFinais);
  }
}

FilterEvents.searchLocalizacao.addEventListener("input", ()=> {
  FilterEvents.handleInputSearch();
});

FilterEvents.searchModelo.addEventListener("input", ()=> {
  FilterEvents.handleInputSearch();
});

FilterEvents.anoMinimo.addEventListener("input",() => {
  FilterEvents.handleInputSearch()
})

FilterEvents.anoMaximo.addEventListener("input",() => {
  FilterEvents.handleInputSearch()
})

FilterEvents.precoMinimo.addEventListener("input",() => {
  FilterEvents.handleInputSearch()
})

FilterEvents.precoMaximo.addEventListener("input",() => {
  FilterEvents.handleInputSearch()
})

FilterEvents.quilometragemMinima.addEventListener("input",() => {
  FilterEvents.handleInputSearch()
})

FilterEvents.quilometragemMaxima.addEventListener("input",() => {
  FilterEvents.handleInputSearch()
})

FilterEvents.containerMarcas.addEventListener("click", (e) => {
    // Usa closest para garantir que pegamos o container pai, não o <img> ou <p>
    const marcaElemento = e.target.closest('.container-marcas--individual');

    if (marcaElemento) {
        // Alterna a classe de seleção
        marcaElemento.classList.toggle('selecionada');
    }
    FilterEvents.aplicarTodosFiltros()
});

FilterEvents.anoEspecifico.forEach((elementoAno) => {
  elementoAno.addEventListener("click", (e) => {
    // Pega o texto do botão de ano clicado
    const ano = elementoAno.textContent.trim();
    // Pega o texto do botão de ano clicado
    const isSelecionadoAtualmente = elementoAno.classList.contains('selecionada');
    Util.removerSelecaoEspecifica(FilterEvents.anoEspecifico);

    if(isSelecionadoAtualmente) {
      elementoAno.classList.remove('selecionada');
        // Zera os inputs de intervalo
        FilterEvents.anoMinimo.value = "";
        FilterEvents.anoMaximo.value = "";
    } else {
        elementoAno.classList.add('selecionada');
        // Escreva nos inputs
        FilterEvents.anoMinimo.value = ano;
        FilterEvents.anoMaximo.value = ano;
    }
    
    FilterEvents.aplicarTodosFiltros();
  });
});

FilterEvents.precoEspecifico.forEach((elementoPreco) => {
  elementoPreco.addEventListener("click", () => {
    const textoPreco = elementoPreco.textContent.trim();
    
    const precoMaximo = Util.extrairValorInputPreco(textoPreco); 
    
    // Zera o mínimo e coloca o máximo
    FilterEvents.precoMinimo.value = ""; 
    FilterEvents.precoMaximo.value = precoMaximo;
    
    // Lógica visual (opcional)
    FilterEvents.precoEspecifico.forEach(el => el.classList.remove('selecionada'));
    elementoPreco.classList.add('selecionada');

    FilterEvents.aplicarTodosFiltros();
  });
});

FilterEvents.selectCambio.addEventListener("change", () => {
  FilterEvents.aplicarTodosFiltros();
});

const todosCheckboxes = [
    ...FilterEvents.checkboxesCor,
    ...FilterEvents.checkboxesCarroceria,
    ...FilterEvents.checkboxesPortas
];

todosCheckboxes.forEach(checkbox => {
    checkbox.addEventListener("change", () => {
        FilterEvents.aplicarTodosFiltros();
    });
});

FilterEvents.filtro.addEventListener("click", () => {
  FilterEvents.aplicarTodosFiltros();
});
