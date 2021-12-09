let filtroDaFoto = document.querySelector('#filtro-da-foto');
let fotoEl = document.querySelector('.foto-anotada > img');

filtroDaFoto.addEventListener('change', (e) => {
    fotoEl.style.filter = filtroDaFoto.value;
});