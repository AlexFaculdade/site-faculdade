document.addEventListener('DOMContentLoaded', () => { 
    const slidesWrapper = document.getElementById('slides')
    const btnPrev = document.getElementById('btnPrev')
    const btnNext = document.getElementById('btnNext')
    
    const slides = document.querySelectorAll('.slide')
    const totalSlides = slides.length 
    let slideAtual = 0

    let autoSlideTimer
    const intervalo = 5000 
    function resetAutoSlide() {
        clearInterval(autoSlideTimer)
        
        autoSlideTimer = setInterval(proximoSlide, intervalo)
    }


    function moverCarrossel() {
        const deslocamento = slideAtual * -100
        
        slidesWrapper.style.transform = `translateX(${deslocamento}vw)`
    }

    function proximoSlide(isManual = false) {
        slideAtual++
        if (slideAtual >= totalSlides) {
            slideAtual = 0
        }
        moverCarrossel()

        if(isManual) {
            resetAutoSlide()
        }
    }

    function slideAnterior() {
        slideAtual--
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