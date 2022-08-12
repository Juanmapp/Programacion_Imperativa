const prompt = require("prompt-sync")({ sigint: true });

function sumar (a, b) {
    return a + b ; 
}
let resultadoSuma = sumar (parseInt(prompt("ingrese su num")), parseInt(prompt("ingrese su 2num")));
console.log(resultadoSuma);

// function restar (c, d) {
//     return c - d ; 
// }
// let resultadoResta = restar (prompt("ingrese su num"), prompt("ingrese su 2num"));
// console.log(resultadoResta);

// function multiplicar (e,f) {
//     return e * f;
// }
// let resultadoMultiplicacion = multiplicar(prompt("ingrese su num"), prompt("ingrese su 2num"));
// console.log(resultadoMultiplicacion);

function division (g,h) {
    return g/h ;
}
let resultadoDiv = division(prompt("ingrese su num"), prompt("ingrese su 2num"));
console.log(resultadoDiv);


console.log("Testeo de Operaciones");

// let resultadoSuma();
// let resultadoResta();

// console.log (sumar(3,5));
// console.log (restar(10,2));
// console.log (multiplicar(2,2));
// console.log (division(10,2));
// console.log (division(2,0))

// function cuadrado(n) {
//     return multiplicar(n,n) ;
// }
// let resultadoCuadrado = cuadrado(prompt("ingrese numero al caudrado: "));
// console.log(resultadoCuadrado);

// function promedio(a,b,c) {
//     let sumar + c ; 
//     let resultadoSumar3 = 
//     return division ;
// }

function promedio (a,b,c,d) {
    return division((sumar(sumar(a,b),c)),d);
}
let resultadoProm = promedio(parseInt(prompt("ingrese su num1 :")), parseInt(prompt("ingrese su num2")), parseInt(prompt("ingrese su num3 :")),3) ;
console.log(resultadoProm);






