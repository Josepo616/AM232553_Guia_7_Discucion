var imagenes = [
    "img/imagen1.jpg",
    "img/imagen2.jpg",
    "img/imagen3.jpg",
    "img/imagen4.jpg",
    "img/imagen5.jpg",
    "img/imagen6.jpg",
    "img/imagen7.jpg",
    "img/imagen8.jpg",
    "img/imagen9.jpg",
    "img/imagen10.jpg"
];
var indiceActual = 0;

function cambiarImagen(direccion) {
    var nuevoIndice = indiceActual + direccion;

    if (nuevoIndice >= 0 && nuevoIndice < imagenes.length) {
        indiceActual = nuevoIndice;
        document.getElementById("imagen").src = imagenes[indiceActual];
    }
}

document.getElementById("atrasBtn").addEventListener("click", function() {
    cambiarImagen(-1);
});

document.getElementById("adelanteBtn").addEventListener("click", function() {
    cambiarImagen(1);
});

document.addEventListener('keydown', function(event) {
    if (event.keyCode == 37) { // Flecha izquierda
        cambiarImagen(-1);
    } else if (event.keyCode == 39) { // Flecha derecha
        cambiarImagen(1);
    }
});

