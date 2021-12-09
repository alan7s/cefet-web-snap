let balaozinhoEl = document.querySelector('#balaozinho');
let imgMarcacaoNodeList = document.querySelectorAll('.marcacao');

for (imgMarcacaoEl of imgMarcacaoNodeList) {
    imgMarcacaoEl.addEventListener('mouseover', (e) => {
        balaozinhoEl.innerHTML = `<h2>${e.currentTarget.dataset.titulo}</h2>
        <p>${e.currentTarget.dataset.conteudo}</p>`
        balaozinhoEl.style.color = e.currentTarget.dataset.cor;
    });

    imgMarcacaoEl.addEventListener('mouseout', (e) => {
        balaozinhoEl.innerHTML = '';
    });

    imgMarcacaoEl.addEventListener('mousemove', (e) => {
        balaozinhoEl.style.left = `${e.pageX}px`
        balaozinhoEl.style.top = `${e.pageY}px`;
    });
}