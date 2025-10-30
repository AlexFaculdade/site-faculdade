const listaDeCarrosParaTeste = [
    new Car("232Volkswagen", "Gol", "Prata", "9BWZZZ...", 2018, 2019, 45000, "1.0 MPI", 55000, "Manual"),
    new Car("2323Chevrolet", "Onix Plus", "Branco", "9BRZZZ...", 2022, 2022, 12500, "1.0 Turbo", 92000, "Automático"),
    new Car("2323Hyundai", "HB20", "Vermelho", "9BHZZZ...", 2017, 2018, 68000, "1.6 Flex", 48500, "Manual"),
    new Car("232Toyota", "Corolla", "Preto", "9TCZZZ...", 2021, 2022, 22000, "2.0 VVTi", 135000, "Automático"),
    new Car("Fiat", "Argo", "Azul", "9FZBZZ...", 2020, 2020, 31000, "1.3 Firefly", 61900, "Manual"),
    new Car("Honda", "HR-V", "Cinza", "93HSY...", 2019, 2019, 38000, "1.8 FlexOne", 105000, "Automático"),
    new Car("Ford", "Ka", "Branco", "9BFZZZ...", 2015, 2015, 91000, "1.0 TiVCT", 35000, "Manual"),
    new Car("Renault", "Kwid", "Laranja", "93RZB...", 2023, 2023, 5000, "1.0 SCe", 59900, "Manual"),
    new Car("Volkswagen", "T-Cross", "Verde", "9BWZZZ...", 2022, 2023, 18000, "1.4 TSI", 128000, "Automático"),
    new Car("Chevrolet", "Tracker", "Azul", "9BRZZZ...", 2021, 2021, 29000, "1.2 Turbo", 110500, "Automático"),
    new Car("Hyundai", "Creta", "Preto", "9BHZZZ...", 2018, 2019, 52000, "2.0 Flex", 85000, "Automático"),
    new Car("Hyundai", "Creta", "Preto", "9BHZZZ...", 2018, 2019, 52000, "2.0 Flex", 85000, "Automático"),
]

for(let i = 0; i < listaDeCarrosParaTeste.length; i++) {
    try {
        let anuncio;
        if(i == 1) {
            anuncio = new Anuncio(listaDeCarrosParaTeste[i], 25000, "","",["São Paulo","São Paulo"]);
        } else {
            anuncio = new Anuncio(listaDeCarrosParaTeste[i], 25000, [
                "../../../img/comprar/carros/rs6/audi-rs6-4.0-v8-tfsi-mhev-avant-performance-tiptronic-wmimagem10362353129.jpg",
                "../../../img/comprar/carros/rs6/audi-rs6-4.0-v8-tfsi-mhev-avant-performance-tiptronic-wmimagem10362481340.jpg",
                "../../../img/comprar/carros/rs6/audi-rs6-4.0-v8-tfsi-mhev-avant-performance-tiptronic-wmimagem10362570020.jpg",
                "../../../img/comprar/carros/rs6/audi-rs6-4.0-v8-tfsi-mhev-avant-performance-tiptronic-wmimagem10362746632.jpg"],"",["São Paulo","São Paulo"]);
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
                <img src="${"https://neonseguros.com.br/wp-content/uploads/2023/10/86a6220be134881c1ddcf2b43bc542df299e62ec-edited.png"}" alt="${anuncio.car.marca} ${anuncio.car.modelo}">
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
        
        renderizarCarros(anuncios)
        
        cardContainer.scrollIntoView({ behavior: 'smooth' })
    }
}

paginationContainer.addEventListener('click', mudarPagina)

