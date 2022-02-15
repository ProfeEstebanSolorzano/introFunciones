const cuadro = document.querySelector('#cuadro');

const boton1 = document.createElement('button');
boton1.textContent = 'azul';
boton1.onclick = () => {
    cuadro.setAttribute('style', 'background-color: blue;');
}

const boton2 = document.createElement('button');
boton2.textContent = 'amarillo';

boton2.onclick = () => {
    cuadro.setAttribute('style', 'background-color: yellow;');
}

const boton3 = document.createElement('button');
boton3.textContent = 'anaranjado';
boton3.onclick = () => {
    cuadro.setAttribute('style', 'background-color: orange;');
}

document.querySelector('body').appendChild(boton1);
document.querySelector('body').appendChild(boton2);
document.querySelector('body').appendChild(boton3);