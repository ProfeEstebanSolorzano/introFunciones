const cambiarColor = (color) => {
    document
        .querySelector('#cuadro')
        .setAttribute('style', `background-color: ${color};`);
}

const crearBoton = (color) => {
    const boton = document.createElement('button');
    boton.textContent = color;
    boton.onclick = () => {
        cambiarColor(color);
    }
    document.querySelector('body').appendChild(boton);
}

const listaColores = ['red', 'yellow', 'orange', 'blue', 'navy', 'olive', 'pink'];

listaColores.forEach((color) => {
    crearBoton(color);
});