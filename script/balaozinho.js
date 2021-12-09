let balaozinhoEl = document.querySelector('#balaozinho');
let imgMarcacaoNodeList = document.querySelectorAll('.marcacao');

for (imgMarcacaoEl of imgMarcacaoNodeList) {
    imgMarcacaoEl.addEventListener('mouseover', (e) => {
        balaozinhoEl.innerHTML = `<h2>${imgMarcacaoEl.dataset.titulo}</h2>
        <p>${imgMarcacaoEl.dataset.conteudo}</p>`
        balaozinhoEl.style.color = imgMarcacaoEl.dataset.cor;
    });

    imgMarcacaoEl.addEventListener('mouseout', (e) => {
        balaozinhoEl.innerHTML = '';
    });

    imgMarcacaoEl.addEventListener('mousemove', (e) => {
        balaozinhoEl.style.left = `${e.pageX}px`
        balaozinhoEl.style.top = `${e.pageY}px`;
    });
}