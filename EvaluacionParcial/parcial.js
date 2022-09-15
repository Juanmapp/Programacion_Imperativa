// ejercicio 1


let num1 = 3
let num2 = 3
let num3 = 3

function ejercicioUno(a,b,c) {
    let sumaDeNum = a + b + c
    if (a > b) {
        return b * c
    }
    else if (b%2 === 0) {
        return b + " es par"
    }
    else if ( sumaDeNum%3 == 0) {
        return "La suma de estos tres numeros (" + a + " + " + b + " + " + c + ") es multiplo de 3"
    }
}

console.log(ejercicioUno(num1,num2,num3))


// ejercicio 2


let empleado = {
    nombre: "Lautaro",
    apellido: "Sanchez",
    edad: 20,
    estaEmpleado: true
}

function ejercicioDos(objeto) { 
    if (objeto.edad > 18 && objeto.estaEmpleado === true) {
        return objeto.nombre + " " + objeto.apellido + " está empleado y es mayor de edad."
    }
    else if (objeto.edad > 18 && objeto.estaEmpleado === false) {
        return objeto.nombre + " " + objeto.apellido + " NO está empleado y es mayor de edad."
    }
    else if(objeto.edad < 18 && objeto.estaEmpleado !==true) {
        return objeto.nombre + " " + objeto.apellido + " NO está empleado y NO es mayor de edad."
    }
}
console.log(ejercicioDos(empleado))


// ejercicio 3


let autos = [{
    marca: 'Toyota',
    anio: 2022,
    color: 'rojo'
},
{
    marca: 'Renault',
    anio: 2020,
    color: 'gris'
},
{
    marca: 'Peugeot',
    anio: 2021,
    color: 'rojo'
},
{
    marca: 'Fiat',
    
    anio: 2019,
    color: 'negro'
}]

let autosSinFiat = autos.pop()
console.log(autosSinFiat)
console.log(autos)


function ejercicioTres(array) {
    let autosNuevos = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].anio > 2019 ) { 
            autosNuevos.push(array[i])
        }
    }
    return autosNuevos
}
console.log(ejercicioTres(autos))

let array = [
    [1,2,3,4,5],
    [6,7,8,9,0],
    [11,12,13,14,15]
]



// function diasDelMes(numeroMes) {
//     if (numeroMes % 2 === 0) {
//       return 30;
//       }
//       else if (numeroMes == 2 ) {
//           return 28;
//       }
//        else {
//       return 31;
//     }
// }

// function alReves(a) {
//     let numeros = "";
//     for (let i = -1; i < a.length; i++) {
//       numeros.push(a)
//     }
//     return numeros;
//   }
  
//   console.log(alReves("34563"));



// function revertir (valor){
// console.log(valor);
//   reversed = (valor.toString().split('').reverse().join(''));
//   console.log(reversed);

let array1 = 32443

function revertir (valor){
console.log(valor);
  reversed = (valor.toString().split('').reverse().join(''));
  console.log(reversed);
}
revertir(array1)

/**
 * Escribir una función que reciba una array
 *  y solo imprima los valores que se repiten.
 *  Por ejemplo, dada la siguiente array e índice,
 *  la función imprimirá '6,23,33,100'.*/
let array11 = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];

function repetidos(a) {

    let numerosRepetidos = []
    for (let i = 0 ; i < a.length; i++) { 
        if (a[i] == i) {
            numerosRepetidos.push(a[i])
        }
        return numerosRepetidos

    }
}
console.log(repetidos(array11))


