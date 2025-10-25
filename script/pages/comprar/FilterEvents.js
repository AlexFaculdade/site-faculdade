class FilterEvents {
    static anuncios = [...Object.values(Database.anuncios)]
    static filtro = document.getElementById("filtro")

    static searchLocalizacao = document.getElementById("localizacao")
    static containerMarcas = document.querySelectorAll(".container-marcas--individual")
    static anoMinimo = document.getElementById("minimoAno")
    static anoMaximo = document.getElementById("maximoAno")
    static anoEspecifico = document.querySelectorAll(".anoEspecifico")
    static precoMinimo = document.getElementById("precoMinimo")
    static precoMaximo = document.getElementById("precoMaximo")
    static precoEspecifico = document.querySelectorAll(".precoEspecifico")
    static quilometragemMinima = document.getElementById("quilometragemMinima")
    static quilometragemMaxima = document.getElementById("quilometragemMaxima")

    static getAnuncios() {
        window.location.reload()
        return FilterEvents.anuncios
    }

    static getSearchLocalizacao() {
        return FilterEvents.searchLocalizacao.value
    }
}

FilterEvents.filtro.addEventListener("click",() => {
    if(FilterEvents.searchLocalizacao.value != "") {
        console.log("teste")
        Filter.filterLocalizacao(FilterEvents.anuncios, FilterEvents.searchLocalizacao.value)
    }

})