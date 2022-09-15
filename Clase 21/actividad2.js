/*1. Crear una función que imprima todos los dígitos decimales, del 0 al 9,
usando un ciclo For.
https://codesandbox.io/s/mesa-ejercicio-1-bvthk?file=/src/index.js*/



/*2. Crear una función que imprima los números entre el 5 y el 20, saltando de
tres en tres. https://codesandbox.io/s/mesa-21-ejercicio-2-3n0np*/

function deCinco() {
    for ( let i = 5 ; i <=20; i+=3) {
        console.log(i)
    }
}
deCinco()

/*3. Crear una función que imprima la sumatoria de todos los números entre el
0 y el 100.
https://codesandbox.io/s/mesa-21-ejercicio-3-zw962?file=/src/index.js*/

function todosLosNum() {
    acumulando = 0
    for (let i = 0 ; i <= 100; i++){
        acumulando = acumulando + i
    }
    return acumulando
}
console.log(todosLosNum())
/*4. Crear una función que reciba un string y luego imprimir la cantidad de
vocales que se encuentran en dicha frase.
https://codesandbox.io/s/mesa-21-ejercicio-4-x9frm?file=/src/index.js*/

let vocales = "Esto es un tring y tambien tenemos otras cosas"

function cantVocales(string) { 
    cuantasVocalesHay = 0
    for (let i = 0; i <= string.length ; i++) {
        if (string[i] === "a" || string[i] === "e"|| string[i] === "i" || string[i] === "o" ||string[i] === "u" || string[i] === "E") {
            cuantasVocalesHay = cuantasVocalesHay + 1
        }
    }return cuantasVocalesHay
}
console.log(cantVocales(vocales))

/*5. Realizar una función que, dada una lista, devuelva una nueva lista cuyo
contenido sea igual a la original pero invertida.
https://codesandbox.io/s/mesa-21-ejercicio-5-812tw?file=/src/index.js*/


let lista = [3,7,5,9,8,3,45,6,6,7,7]

function alReves(array) { 
    for (let i = 1; i <= array.length; i++) { 
        for (let j = 0 ; j <array.length - i; j++) {
        let temporal = array[j]
        array[j] = array[j+1]
        array[j+1] = temporal
        }
    } return array
}
console.log(alReves(lista))

/*6. Realizar una función que escriba una pirámide del 1 al 30 de la siguiente
forma :
1
22
333
4444
55555
666666
.......
https://codesandbox.io/s/mesa-21-ejercicio-6-x10rx?file=/src/index.js*/


function piramide() {

    for (let i = 1 ; i <= 30; i++) {
        let acumulando = ""
        
        for (let j = 0 ; j < i; j++) {
            acumulando = acumulando + "" + i
            
        }
        console.log(acumulando)
    }
}

piramide()


