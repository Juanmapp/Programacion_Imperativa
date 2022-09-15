// A partir de él siguiente array de edades nos solicitan realizar lo siguiente
const edades = [33, 27, 34, 30, 34, 25];



// a. Desarrollar una función que ordene internamente de forma ascendente las
// edades, la misma deberá retornar él array ordenado , es decir deberíamos
// obtener resultado como él siguiente.
// [25, 27, 30, 33, 34, 34]

function orden(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) { 
            if ( array[j] > array[j + 1]) {
                let ordenando = array[j]
                array[j] = array[j + 1]
                array[j + 1] = ordenando
                
            }
        }
    }
    return array
}

console.log(orden(edades))


// b. Desarrollar una función que ordene internamente de forma descendente
// las edades, la misma deberá retornar él array ordenado , es decir
// deberíamos obtener resultado como él siguiente.
// [34, 34, 33, 30, 27, 25]

function orden2(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) { 
            if ( array[j] < array[j + 1]) {
                let ordenando = array[j]
                array[j] = array[j + 1]
                array[j + 1] = ordenando
                
            }
        }
    }
    return array
}

console.log(orden2(edades))

// Dado un array de strings:
const letras = ["C", "A", "D", "E", "H", "Z", "J", "L"]
// ¿Cómo pudieras ordenar el array anterior, alfabéticamente?

function ordenAlf(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) { 
            if ( array[j] > array[j + 1]) {
                let ordenando = array[j]
                array[j] = array[j + 1]
                array[j + 1] = ordenando
                
            }
        }
    }
    return array
}

console.log(ordenAlf(letras))

function ordenAlf2(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) { 
            if ( array[j] < array[j + 1]) {
                let ordenando = array[j]
                array[j] = array[j + 1]
                array[j + 1] = ordenando
                
            }
        }
    }
    return array
}

console.log(ordenAlf2(letras))

/* A partir del siguiente array de Objetos Literales se solicita realizar lo siguiente:*/
const arrayCuentas =
[
{
titular: "Arlene Barr",
estaHabilitada: false,
saldo: 3253.40,
edadTitular: 33,
tipoCuenta: "sueldo"
},
{
titular: "Roslyn Torres",
estaHabilitada: false,
saldo: 3229.45,
edadTitular: 27,
tipoCuenta: "sueldo"
},
{
titular: "Cleo Lopez",
estaHabilitada: true,
saldo: 1360.19,
edadTitular: 34,
tipoCuenta: "corriente"
},
{
titular: "Daniel Malone",
estaHabilitada: false,
saldo: 3627.12,
edadTitular: 30,
tipoCuenta: "sueldo"
},
{
titular: "Ethel Leon",
estaHabilitada: true,
saldo: 1616.52,
edadTitular: 34,
tipoCuenta: "sueldo"
},
{
titular: "Harding Mitchell",
estaHabilitada: true,
saldo: 1408.68,
edadTitular: 25,
tipoCuenta: "corriente"
}
]
/*
a. Desarrollar una función que ordene internamente de forma ascendente según él
saldo de cada cuenta, la misma deberá retornar él array ordenado .*/

function ordenCuentas(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) { 
            if ( array[j].saldo > array[j + 1].saldo) {
                let ordenando = array[j]
                array[j] = array[j + 1]
                array[j + 1] = ordenando
                
            }
        }
    }
    return array
}

console.log(ordenCuentas(arrayCuentas))
/*b. Desarrollar una función que ordene internamente de forma ascendente según la
edad del titular de cada cuenta, la misma deberá retornar él array ordenado*/

function ordenCuentas2(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) { 
            if ( array[j].edadTitular > array[j + 1].edadTitular) {
                let ordenando = array[j]
                array[j] = array[j + 1]
                array[j + 1] = ordenando
                
            }
        }
    }
    return array
}

console.log(ordenCuentas2(arrayCuentas))


