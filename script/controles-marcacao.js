let marcacaoNodeList = document.querySelectorAll('.marcacao');
const checkbox = document.querySelector('#visibilidade-das-marcacoes');

checkbox.addEventListener('change', (e) => {
    for (marcacaoEl of marcacaoNodeList) {
        marcacaoEl.classList.toggle('marcacoes-ocultas');
    }
});