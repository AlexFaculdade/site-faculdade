const carrosMaisBuscados = document.querySelectorAll(".carros-mais-buscados")
const marcasMaisBuscadas = document.querySelectorAll(".marcas-mais-buscadas")
const chassi = document.querySelectorAll(".card-maisbuscados")


carrosMaisBuscados.forEach((carro) => {
    carro.addEventListener("click", (e) => {
        e.preventDefault()
        filtroModelo(carro)
    }) 
})

marcasMaisBuscadas.forEach((marca) => {
    marca.addEventListener("click", (e) => {
        e.preventDefault()
        filtroMarca(marca)
    })
})

chassi.forEach((chassi) => {
    chassi.addEventListener("click", (e) => {
        e.preventDefault()
        filtroCategoria(chassi)
    })
})

function filtroCategoria(chassi) {
    const identificadorCategoriaCard = chassi.children[1].children[0].textContent
    console.log(identificadorCategoriaCard)
    Database.setCategoriaValor(CHASSI_INICIO_CLICADO, identificadorCategoriaCard)
    window.location.href = "./pages/negocios/comprar.html"
}

function filtroMarca(marca) {
    const identificadorCategoriaCard = marca.dataset.marca
    Database.setCategoriaValor(MARCA_INICIO_CLICADA, identificadorCategoriaCard)
    window.location.href = "./pages/negocios/comprar.html"
}

function filtroModelo(carro) {
    const identificadorCategoriaCard = carro.children[0].children[1].children[1].textContent
    Database.setCategoriaValor(CATEGORIA_CLICADA, identificadorCategoriaCard)
    window.location.href = "./pages/negocios/comprar.html"
}