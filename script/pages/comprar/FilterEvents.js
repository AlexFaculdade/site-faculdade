class FilterEvents {
  static anuncios = [...Object.values(Database.anuncios)];
  static filtro = document.getElementById("filtro");

  static searchLocalizacao = document.getElementById("localizacao");
  static containerMarcas = document.querySelector(
    ".container-marcas"
  );
  static anoMinimo = document.getElementById("minimoAno");
  static anoMaximo = document.getElementById("maximoAno");
  static anoEspecifico = document.querySelectorAll(".anoEspecifico");
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

  static handleInputSearchLocalizacao() {
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

    renderizarCarros(resultadosFinais);
  }
}

FilterEvents.searchLocalizacao.addEventListener("input", (e) => {
  FilterEvents.handleInputSearchLocalizacao(e);
});

FilterEvents.containerMarcas.addEventListener("click", (e) => {
    // Usa closest para garantir que pegamos o container pai, não o <img> ou <p>
    const marcaElemento = e.target.closest('.container-marcas--individual');

    if (marcaElemento) {
        // Alterna a classe de seleção
        marcaElemento.classList.toggle('selecionada');
    }
});

FilterEvents.filtro.addEventListener("click", () => {
  FilterEvents.aplicarTodosFiltros();
});
