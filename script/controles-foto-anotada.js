let filtroDaFoto = document.querySelector('#filtro-da-foto');
let fotoEl = document.querySelector('.foto-anotada > img');

filtroDaFoto.addEventListener('change', (e) => {
    fotoEl.style.filter = filtroDaFoto.value;
});

let imgEl = document.querySelector('#imagem');
imgEl.addEventListener('change', readImg);

function readImg(e){
    const file = e.target.files[0];
    if(file.type && !file.type.startsWith('image/')){
        console.log('File is not an image.', file.type, file);
        return;
    }
    const reader = new FileReader();
    reader.addEventListener('load', (e) => {
        fotoEl.src = e.target.result;
    });
    reader.readAsDataURL(file);
}