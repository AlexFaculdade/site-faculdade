class FilterEvents {
  static anuncios = [...Object.values(Database.anuncios)];
  static filtro = document.getElementById("filtro");

  static searchLocalizacao = document.getElementById("localizacao");
  static containerMarcas = document.querySelector(
    ".container-marcas"
  );
  static anoMinimo = document.getElementById("minimoAno");
  static anoMaximo = document.getElementById("maximoAno");
  static anoEspecifico = document.querySelectorAll(".anoEspecifico")
  static precoMinimo = document.getElementById("precoMinimo");
  static precoMaximo = document.getElementById("precoMaximo");
  static precoEspecifico = document.querySelectorAll(".precoEspecifico");
  static quilometragemMinima = document.getElementById("quilometragemMinima");
  static quilometragemMaxima = document.getElementById("quilometragemMaxima");

  static refreshDatabase() {
    FilterEvents.anuncios = [...Object.values(Database.anuncios)];
  }

  static getSearchLocalizacao() {
    return FilterEvents.searchLocalizacao.value;
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

  static aplicarTodosFiltros() {
    FilterEvents.refreshDatabase();
    let resultadosFinais = FilterEvents.anuncios;

    const localizacao = FilterEvents.getSearchLocalizacao();
    if (localizacao) {
      resultadosFinais = Filter.filterLocalizacao(
        resultadosFinais,
        localizacao
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

    renderizarCarros(resultadosFinais);
  }
}

FilterEvents.searchLocalizacao.addEventListener("input", ()=> {
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

FilterEvents.filtro.addEventListener("click", () => {
  FilterEvents.aplicarTodosFiltros();
});
