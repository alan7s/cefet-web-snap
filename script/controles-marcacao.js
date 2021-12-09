let marcacaoNodeList = document.querySelectorAll('.marcacao');
const checkbox = document.querySelector('#visibilidade-das-marcacoes');

checkbox.addEventListener('change', (e) => {
    for (marcacaoEl of marcacaoNodeList) {
        marcacaoEl.classList.toggle('marcacoes-ocultas');
    }
});

for (marcacaoEl of marcacaoNodeList) {
    marcacaoEl.addEventListener('click', (e) => {
        let atualMarcacaoEl = document.querySelector('.marcacao.selecionada');
        atualMarcacaoEl.classList.remove('selecionada');
        atualMarcacaoEl = e.currentTarget;
        atualMarcacaoEl.classList.add('selecionada');
        atualizaControles(atualMarcacaoEl);
    });
}

function atualizaControles(marcacaoSelecionadaEl) {
    let xInput = document.querySelector('#x-da-marcacao');
    xInput.value = parseInt(marcacaoSelecionadaEl.style.left);

    let yInput = document.querySelector('#y-da-marcacao');
    yInput.value = parseInt(marcacaoSelecionadaEl.style.top);

    let widthInput = document.querySelector('#largura-da-marcacao');
    widthInput.value = parseInt(marcacaoSelecionadaEl.style.width);

    let heightInput = document.querySelector('#altura-da-marcacao');
    heightInput.value = parseInt(marcacaoSelecionadaEl.style.height)

    let titleInput = document.querySelector('#titulo-da-marcacao');
    titleInput.value = marcacaoSelecionadaEl.dataset.titulo;

    let contentInput = document.querySelector('#conteudo-da-marcacao');
    contentInput.value = marcacaoSelecionadaEl.dataset.conteudo;

    let colorInput = document.querySelector('#cor-da-marcacao');
    colorInput.value = marcacaoSelecionadaEl.dataset.cor;

    let formatoOvalInput = document.querySelector('input[value="formato-oval"]');
    let formatoRetangularInput = document.querySelector('input[value="formato-retangular"]');
    if(marcacaoSelecionadaEl.dataset.formato === 'formato-oval'){
        formatoOvalInput.checked = true;
        formatoRetangularInput.checked = false;
    }else{
        formatoOvalInput.checked = false;
        formatoRetangularInput.checked = true;
    }
}