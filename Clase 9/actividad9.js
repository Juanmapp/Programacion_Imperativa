const prompt = require("prompt-sync")({ sigint: true });

// const nombres = ["Pedro",
// "Pablo", "Maria", "Juan", "Diana"];

// console.log(nombres[0])
// console.log(nombres[1])
// console.log(nombres[2])
// console.log(nombres[3])
// console.log(nombres[4])

// function elemento(n,s,i) {
//     i = 3
//     return i

// }
// console.log(elemento())

// let Fibonacci = n => {
// if (n <= 1) {
//     return n;
// }
// let a = 0, b = 1, c = 1, result = 1;

// while (c < n) {
//     c = a + b;
//     a = b;
//     b = c;
//     result++;
// }

// return result;
// };

// const getFibonacciIndex = n => {
//     if (n <= 1) {
//     return n;
//     }
    
//     let a = 0, b = 1, c = 1, result = 1;
    
//     while (c < n) {
//     c = a + b;
//     a = b;
//     b = c;
//     result++;
//     }
    
//     return result;
// };
// console.log(getFibonacciIndex(100))

// let fib = function(n) {
//     if (n <= 1) return n;

//     return fib(n-1) + fib(n-2);
// }
// console.log(fib(10))

// 2. Más tarde, de producción dieron el aviso de que las películas deberían estar todas
// en mayúsculas. Para esto solicitan que crees una función que reciba por
// parámetro un array y convierta el contenido de cada elemento a mayúsculas.
// Pista: revisá qué hace el método de strings .toUpperCase().

let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]

function upperCase(x) {

    return x.toUpperCase;
}

console.log(upperCase(peliculas[]))