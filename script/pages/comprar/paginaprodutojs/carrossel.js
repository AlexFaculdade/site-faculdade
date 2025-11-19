const imagens = document.querySelector('.buy-carrossel-img');
const anterior = document.getElementById('previous');
const proximo = document.getElementById('next');

let index = 0;

proximo.addEventListener('click', () => {
  index++;
  if (index > imagens.children.length - 1) index = 0;
  atualizarCarrossel();
});

anterior.addEventListener('click', () => {
  index--;
  if (index < 0) index = imagens.children.length - 1;
  atualizarCarrossel();
});

function atualizarCarrossel() {
  const largura = imagens.children[0].clientWidth;
  imagens.style.transform = `translateX(${-index * largura}px)`;
}
