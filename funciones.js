// boton.onclick = () => {
//     const a = parseInt(document.querySelector('#campo1').value, 10);
//     let b = document.querySelector('#campo2').value;
//     b = parseInt(b, 10);
//     const resultado = suma(a, b);
//     document.querySelector('#pizarra').textContent = resultado;
// }

const boton = document.querySelector('#boton');
const boton2 = document.querySelector('#boton2');

const listaValores = [];

const suma = (valor1, valor2) => {
    return valor1 + valor2;
}

const multiplicacion = (valor1, valor2) => {
    return valor1 * valor2;
}

boton.onclick = () => {
    traerValores();
    const x = sumaTodos();
    document.querySelector('#pizarra').textContent = x;
}

boton2.onclick = () => {
    traerValores();
    const x = multiTodos();
    document.querySelector('#pizarra').textContent = x;
}


const traerValores = () => {
    document.querySelectorAll('input[type=text]').forEach((campo) => {
        listaValores.push(parseInt(campo.value));
    });
}

const sumaTodos = () => {
    let resultado = 0;
    listaValores.forEach((valor) => {
        resultado = suma(resultado, valor);
    });
    return resultado;
}

const multiTodos = () => {
    let resultado = 1;
    listaValores.forEach((valor) => {
        resultado = multiplicacion(resultado, valor);
    });
    return resultado;
}