const numbers = [50, 77, 45, 87, 65, 51, 63, 92, 78, 66, 23, 97, 75, 88, 91, 39, 81, 70, 99];

const boton = document.querySelector('#boton');

boton.onclick = () => {
    document.querySelector('#pizarra').textContent = colorAleatorio();
}

const sumatoria = (lista) => {
    let resultado = 0;
    lista.forEach(numero => {
        resultado = numero + resultado;
    });
    return resultado;
}

const promedio = (lista) => {
    return sumatoria(lista) / lista.length;
}

const filtroMayor = (mayor) => {
    const mayores = numbers.filter(numero => numero > mayor);
    return mayores;
}

const filtroMenor = (menor) => {
    const menores = numbers.filter(numero => numero < menor);
    const reporte = {
        cantidadDeMenores: menores.length,
        sumaDeMenores: sumatoria(menores),
        promedio: promedio(menores)
    }
    return JSON.stringify(reporte, null, 4);
}

const programas = ['HOUSE MD', 'BREAKING BAD', 'THE OFFICE', 'DEXTER', 'RICK AND MORTY', 'NARUTO', 'HANNIBAL'];


const colors = ['black', 'silver', 'gray', 'maroon', 'red', 'purple', 'fuchsia', 'green', 'lime', 'olive', 'yellow', 'navy', 'blue', 'teal', 'aqua', 'orange', 'aliceblue', 'antiquewhite', 'aquamarine', 'azure', 'beige', 'bisque', 'blanchedalmond', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgreen', 'darkgrey', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'greenyellow', 'grey', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgreen', 'lightgrey', 'lightpink', 'lightsalmon'];


const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const traerProgramaAleatorio = () => {
    const programa = programas[getRandomInt(0, programas.length)];
    return programa.toLowerCase();
}

const colorAleatorio = () => {
    const color = colors[getRandomInt(0, colors.length)];
    return color;
}


document.querySelector('body').setAttribute('style', 'background-color:#41bd0e')

console.log(`la cantidad de rojo que quiero es ${(getRandomInt(0,256)).toString(16)}`);
console.log(`la cantidad de verde que quiero es ${(getRandomInt(0,256)).toString(16)}`);
console.log(`la cantidad de azul que quiero es ${(getRandomInt(0,256)).toString(16)}`);

/*
RGB
red green blue

00
1
2
3
4
5
6
7
8
9
A
B
C
D
E
FF
*/



const letras = ['a', 'g', 'h', 'u', 't', 'j', 'p', 'l', 'a', 'e', 'v', 'a', 'm', 'q', 'w', 'i', 'a', 'p', 'f', 's', 'l', 'v', ];

//Buscar cuantas veces se repite la letra a
//Buscar cuantas veces se repite cualquier caracter
//Buscar cuantas letras del alfabeto faltan