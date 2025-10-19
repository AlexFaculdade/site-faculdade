document.addEventListener('DOMContentLoaded', () => { // Quando o DOM constroi, ele inicializa
    // 1. Seleção de Elementos
    const slidesWrapper = document.getElementById('slides')
    const btnPrev = document.getElementById('btnPrev')
    const btnNext = document.getElementById('btnNext')
    
    const slides = document.querySelectorAll('.slide')
    const totalSlides = slides.length // Conta quantidade de imagens
    let slideAtual = 0

    let autoSlideTimer
    const intervalo = 5000 // 5 segundos

    // Função para reiniciar o slide automático. É chamada quando o user automaticamente clica para passar a imagem
    // É uma forma de garantir que não vá duas imagens pro lado
    function resetAutoSlide() {
        // Limpa o timer anterior (zera a contagem)
        clearInterval(autoSlideTimer)
        
        // Inicia um novo timer com o intervalo definido
        autoSlideTimer = setInterval(proximoSlide, intervalo)
    }

    // Função para mover o carrossel
    function moverCarrossel() {
        // O valor do deslocamento (em 'vw') é:
        // - 0vw para o slide 0
        // - -100vw para o slide 1
        // - -200vw para o slide 2, e assim por diante.
        const deslocamento = slideAtual * -100
        
        // Aplica a transformação CSS para mover o wrapper
        slidesWrapper.style.transform = `translateX(${deslocamento}vw)`
    }

    // Função do botão próximo
    function proximoSlide(isManual = false) {
        slideAtual++
        // Se for o último slide, volta para o primeiro (loop infinito)
        if (slideAtual >= totalSlides) {
            slideAtual = 0
        }
        moverCarrossel()

        if(isManual) {
            resetAutoSlide()
        }
    }

    // 4. Função para o botão "Anterior"
    function slideAnterior() {
        slideAtual--
        // Se estiver no primeiro slide, vai para o último
        if (slideAtual < 0) {
            slideAtual = totalSlides - 1
        }
        moverCarrossel()
        resetAutoSlide()
    }

    btnNext.addEventListener('click', () => proximoSlide(true))
    btnPrev.addEventListener('click', slideAnterior)

    resetAutoSlide()
});