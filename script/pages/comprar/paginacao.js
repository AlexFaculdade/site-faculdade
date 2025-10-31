const listaDeCarrosParaTeste = [
    new Car("Mitsubishi", "Eclipse", "Sedã", "Branca", "93YZZZ765BT014588", 2019, 2020, 50000, "1.5 Turbo", 125000, "Automático", 4, true, true, true, true, true, true, true, true, true, "Couro", true, true),

    new Car("Hyundai", "HB20", "Sedã", "Cinza", "9BWZZZ377VT004251", 2020, 2021, 45000, "1.6 Flex", 65000, "Automático", 3, true, true, true, true, true, false, true, true, true, "Tecido", true, true),

    new Car("Chevrolet", "Astra", "Hatch", "Prata", "9BGZZZ123ST065487", 2011, 2012, 120000, "2.0 Flex", 35000, "Manual", 3, true, true, true, true, true, false, false, false, true, "Tecido", true, false),

    new Car("Toyota", "Corolla", "Sedã", "Branco", "9BRZZZ377JT054871", 2020, 2021, 38000, "2.0 Flex", 115000, "Automático", 2, true, true, true, true, true, true, true, true, true, "Couro", true, true),

    new Car("Renault", "Duster", "SUV", "Prata", "93YZZZ765BT014587", 2019, 2020, 60000, "1.6 Flex", 78000, "Manual", 4, true, true, true, true, true, false, true, true, true, "Tecido", true, false),

    new Car("Ford", "Ka", "Preto", "Hatch", "9FDZZZ347FT008911", 2012, 2012, 95000, "1.0 Flex", 29000, "Manual", 2, true, true, true, true, false, false, false, false, true, "Tecido", true, false),

    new Car("Volkswagen", "Golf GTI", "Hatch", "Branco", "WVWZZZ1KZPW456789", 2019, 2020, 35000, "2.0 Turbo", 180000, "Automático", 4, true, true, true, true, true, true, true, true, true, "Couro", true, true),

    new Car("Fiat", "Cronos", "Branco", "Sedã", "9BDZZZ1GZKW123456", 2022, 2023, 25000, "1.3 Flex", 85000, "Manual", 2, true, true, true, true, true, true, true, true, true, "Tecido", true, true),

    new Car("BMW", "M6", "Azul", "Sedã", "WBSZZZ987HT034113", 2022, 2023, 15000, "4.4 V8 Twin Turbo", 780000, "Automático", 2, true, true, true, true, true, true, true, true, true, "Couro", true, true),

    new Car("Porsche", "Taycan", "SUV", "Branco", "WP0ZZZJ123A045891", 2023, 2024, 5000, "Elétrico 761cv", 1100000, "Automático", 4, true, true, true, true, true, true, true, true, true, "Couro", true, true),

    new Car("Honda", "Civic Type R","Hatch", "Branco", "8ADZZZ478KT009322", 2023, 2024, 8000, "2.0 Turbo 310cv", 310000, "Manual", 2, true, true, true, true, true, true, true, true, true, "Couro", true, true),
    
    new Car("Audi", "RS6 Avant", "Perua/Wagon", "Cinza Nardo", "WAUZZZ4G8EN012345", 2023, 2024, 5500,"4.0 V8 Biturbo 600cv", 1150000, "Automático", 4, true, true, true, true, false, true, true, true, true, "Couro", true, true)
];

for(let i = 0; i < listaDeCarrosParaTeste.length; i++) {
    try {
        let anuncio
        switch(i) {
            case 0:
                anuncio = new Anuncio(listaDeCarrosParaTeste[i], [
                    "../../img/comprar/carros/eclipse/mitsubishi-eclipse-1.jpg",
                    "../../img/comprar/carros/eclipse/mitsubishi-eclipse-2.jpg",
                    "../../img/comprar/carros/eclipse/mitsubishi-eclipse-3.jpg",
                    "../../img/comprar/carros/eclipse/mitsubishi-eclipse-4.jpg",
                ], "", ["Paraná", "Curitiba"]);
                break;
    
            case 1:
                anuncio = new Anuncio(listaDeCarrosParaTeste[i], [
                    "../../img/comprar/carros/hb20/hyundai-hb20-1.webp",
                    "../../img/comprar/carros/hb20/hyundai-hb20-2.webp",
                    "../../img/comprar/carros/hb20/hyundai-hb20-3.webp",
                    "../../img/comprar/carros/hb20/hyundai-hb20-4.webp",
                ], "", ["Santa Catarina", "Florianópolis"]);
                break;
        
            case 2:
                anuncio = new Anuncio(listaDeCarrosParaTeste[i], [
                    "../../img/comprar/carros/astra/chevrolet-astra-1.jpg",
                    "../../img/comprar/carros/astra/chevrolet-astra-2.jpg",
                    "../../img/comprar/carros/astra/chevrolet-astra-3.jpg",
                    "../../img/comprar/carros/astra/chevrolet-astra-4.jpg",
                ], "", ["Paraná", "Londrina"]);
                break;
        
            case 3:
                anuncio = new Anuncio(listaDeCarrosParaTeste[i], [
                    "../../img/comprar/carros/corolla/toyota-corolla-1.jpg",
                    "../../img/comprar/carros/corolla/toyota-corolla-2.jpg",
                    "../../img/comprar/carros/corolla/toyota-corolla-3.jpg",
                    "../../img/comprar/carros/corolla/toyota-corolla-4.jpg",
                ], "", ["São Paulo", "São Paulo"]);
                break;
        
            case 4:
                anuncio = new Anuncio(listaDeCarrosParaTeste[i], [
                    "../../img/comprar/carros/duster/renault-duster-1.jpg",
                    "../../img/comprar/carros/duster/renault-duster-2.jpg",
                    "../../img/comprar/carros/duster/renault-duster-3.jpg",
                    "../../img/comprar/carros/duster/renault-duster-4.jpg",
                ], "", ["Rio de Janeiro", "Rio de Janeiro"]);
                break;
        
            case 5:
                anuncio = new Anuncio(listaDeCarrosParaTeste[i], [
                    "../../img/comprar/carros/ka/ford-ka-1.jpg",
                    "../../img/comprar/carros/ka/ford-ka-2.jpg",
                    "../../img/comprar/carros/ka/ford-ka-3.jpg",
                    "../../img/comprar/carros/ka/ford-ka-4.jpg",
                ], "", ["Santa Catarina", "Balneario Camboirú"]);
                break;
        
            case 6:
                anuncio = new Anuncio(listaDeCarrosParaTeste[i], [
                    "../../img/comprar/carros/golf gti/volkswagen-gti-1.jpg",
                    "../../img/comprar/carros/golf gti/volkswagen-gti-2.jpg",
                    "../../img/comprar/carros/golf gti/volkswagen-gti-3.jpg",
                    "../../img/comprar/carros/golf gti/volkswagen-gti-4.jpg",
                ], "", ["Amazonas", "Manaus"]);
                break;
        
            case 7:
                anuncio = new Anuncio(listaDeCarrosParaTeste[i], [
                    "../../img/comprar/carros/cronos/fiat-cronos-1.jpg",
                    "../../img/comprar/carros/cronos/fiat-cronos-2.jpg",
                    "../../img/comprar/carros/cronos/fiat-cronos-3.jpg",
                    "../../img/comprar/carros/cronos/fiat-cronos-4.jpg",
                ], "", ["Minas Gerais", "Belo Horizonte"]);
                break
            case 8:
                anuncio = new Anuncio(listaDeCarrosParaTeste[i], [
                    "../../img/comprar/carros/m6/bmw-m6-1.jpg",
                    "../../img/comprar/carros/m6/bmw-m6-2.jpg",
                    "../../img/comprar/carros/m6/bmw-m6-3.jpg",
                    "../../img/comprar/carros/m6/bmw-m6-4.jpg",
                ], "", ["Tocantins", "Palmas"]);
                break;
            case 9:
                anuncio = new Anuncio(listaDeCarrosParaTeste[i], [
                    "../../img/comprar/carros/porsche taycan/porsche-taycan-1.jpg",
                    "../../img/comprar/carros/porsche taycan/porsche-taycan-3.jpg",
                    "../../img/comprar/carros/porsche taycan/porsche-taycan-3.jpg",
                    "../../img/comprar/carros/porsche taycan/porsche-taycan-4.jpg",
                ], "", ["Bahia", "Salvador"]);
                break;
            case 10:
                anuncio = new Anuncio(listaDeCarrosParaTeste[i], [
                    "../../img/comprar/carros/type r/honda-typeR-1.jpg",
                    "../../img/comprar/carros/type r/honda-typeR-2.jpg",
                    "../../img/comprar/carros/type r/honda-typeR-3.jpg",
                    "../../img/comprar/carros/type r/honda-typeR-4.jpg",
                ], "", ["Rio Grande do Sul", "Porto Alegre"]);
                break;
            case 11:
                anuncio = new Anuncio(listaDeCarrosParaTeste[i], [
                    "../../img/comprar/carros/rs6/audi-rs6-1.jpg",
                    "../../img/comprar/carros/rs6/audi-rs6-2.jpg",
                    "../../img/comprar/carros/rs6/audi-rs6-3.jpg",
                    "../../img/comprar/carros/rs6/audi-rs6-4.jpg",
                ], "", ["Pernambuco", "Recife"]);
                break;
        }
        Database.addAnuncio(anuncio);
    } catch(err) {
        console.error("Erro ao criar anúncio de teste:", err);
    }
}

const itensPorPagina = 60
let paginaAtual = 1
const cardContainer = document.querySelector('.grid-cards-car')
const paginationContainer = document.createElement('div')
paginationContainer.id = 'pagination-controls'


function renderizarCarroCard(anuncio) {
    const imageUrl = `../../img/comprar/${anuncio.car.marca}-${anuncio.car.modelo}.webp`
    const precoFormatado = anuncio.car.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    // cria o formato do card
    return `
        <div class="card-car" onclick="Anuncio.cardAnuncio('${anuncio.id}')">
            <div class="card-car--image">
                <img src="${anuncio.imagens[0]}" alt="${anuncio.car.marca} ${anuncio.car.modelo}">
            </div>
            <div class="card-car--content">
                <div>
                    <h2>${anuncio.car.marca} ${anuncio.car.modelo}</h2>
                </div>
                <p>${anuncio.car.motor} - ${anuncio.car.cambio}</p>
                <div class="card-car--content--info">
                    <div>
                        <i class="fa-solid fa-calendar"></i>
                        <p>${anuncio.car.anoFabricacao}/${anuncio.car.anoModelo}</p> 
                    </div>
                    <div>
                        <i class="fa-solid fa-gauge"></i>
                        <p>${anuncio.car.quilometragem} Km</p>
                    </div>
                </div>
                <h2>${precoFormatado}</h2>
                <button>Ver Parcelas</button>
            </div>
        </div>
    `
}


function renderizarCarros(anuncios) {
    const inicio = (paginaAtual - 1) * itensPorPagina
    const fim = inicio + itensPorPagina
    const carrosDaPagina = anuncios.slice(inicio, fim)
    cardContainer.innerHTML = ''
    const htmlCarros = carrosDaPagina.map(anuncio => renderizarCarroCard(anuncio)).join('')
    cardContainer.innerHTML = htmlCarros
    gerarBotoesPaginacao(anuncios.length)
}


function gerarBotoesPaginacao(totalItens) {
    const totalPaginas = Math.ceil(totalItens / itensPorPagina) // Faz os anunciiso do database / dividido pela quantidade de itens por pag
    paginationContainer.innerHTML = ''
    for (let i = 1; i <= totalPaginas; i++) {
        const button = document.createElement('button')
        button.textContent = i
        button.dataset.pagina = i 
        if (i === paginaAtual) {
            button.classList.add('active-page')
        }
        
        paginationContainer.appendChild(button)
    }
    if (!paginationContainer.parentNode) {
        cardContainer.parentNode.appendChild(paginationContainer) 
    }
}


function mudarPagina(e) {
    const target = e.target
    if (target.tagName === 'BUTTON' && target.dataset.pagina) {
        paginaAtual = parseInt(target.dataset.pagina)
        
        renderizarCarros(FilterEvents.anuncios)
        
        cardContainer.scrollIntoView({ behavior: 'smooth' })
    }
}

paginationContainer.addEventListener('click', mudarPagina)

