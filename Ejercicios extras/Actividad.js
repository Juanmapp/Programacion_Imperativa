/*Dejo Desafío para quien quiera practicar,                                                                                                                                                                                                                                    - En caso de resolverlo sin problemas reaccionar con :white_check_mark: ,                                                                                                                                                                                                                        - Caso  contrario,  consultar en este canal la duda acompañada con algo  código, *`Buen código`*```js

A - Nivel 1

1 - Desarrollar una función que reciba 2 numeros y retorne la suma de ambos*/

function suma(a,b) {
    let sumaFinal = a + b
    return sumaFinal
}
console.log(suma(3,8))

/*2 - Desarrollar una función que reciba 2 numeros y 
     retorne la suma de ambos, si el primer parametro es mayor, 
     caso contrario retornar la resta.*/

function sumaoResta(a,b) { 
    if (a > b) {
        let suma = a + b
        return suma
    }
    else {
        let resta = a - b
        return resta
    }
}
console.log(sumaoResta(5,6))



/* 3 - Desarrollar una función que reciba 4 numeros y calcular la suma de total
     si el el resultado es mayor o igual a 7, retornar 'Aprobado', 
     caso contrario retornar 'otra chance '.*/

function nota(a,b,c,d) {
    let suma = a + b + c + d
    if (suma >= 7 ) {
        return "Aprobado"
    }
    else {
        return "otra chance"
    }
}
console.log(nota(3,2,1,1))

/*4 - Desarrollar una función que reciba 4 numeros y calcular la suma de total
     si el el resultado es par, retornar la mitad del total,  
     caso contrario retornar el doble del total.*/
    
function paroImpar(a,b,c,d) {
    let suma = a + b + c + d
    let paroImp = suma%2
    if (paroImp == 0 ) {
        return suma /2
    }
    else {
        return suma * 2
    }
}
console.log(paroImpar(2,2,2,11))

/*B  Nivel 2
- Declarar 3 arrays de edades por ejemplo -> [10, 9, 8, 22, 55, 80, 5, 63, 29, 9] , luego desarrollar las siguientes funciones:
*/
// 1 - Funcion que reciba un array de edades y retorne el promedio

let edades = [10, 9, 8, 22, 55, 80, 5, 63, 29, 9]

function total(array) {
    let sum = 0
    for (let i = 0 ; i < array.length; i++) { 
        sum = sum + array[i]
    }
    return sum / array.length
}
console.log(total(edades))

// 2 - Funcion que reciba un array de edades y retorne el mayor elemento // 80

function mayorElemento(array) {
    return Math.max(...array)
}
console.log(mayorElemento(edades))

// 3 - Funcion que reciba un array de edades y retorne el menor elemento // 5

function minElemento(array) {
    return Math.min(...array)
}
console.log(minElemento(edades))


// 4 - Funcion que reciba un array de edades y retorne true si encuentra algun elemento repetido o false caso contrario
let duplicados = []
function repe(array) { 
    
    for (let i = 0; i< array.length;i++) { 
        

    }
    
}
console.log(repe(edades))

// 

let tempArray = [...edades].sort();

for (let i = 0; i < tempArray.length; i++) {
  if (tempArray[i + 1] === tempArray[i]) {
    duplicados.push(tempArray[i]);
  }
}
 
console.log(duplicados);
/*

5 - Funcion que reciba un array de edades y una edad a buscar, retorne el primer índice si encuentra coincidencia o null caso contrario*/

function busquedaNum (array, edad) {
    buscando = array.indexOf(edad)
    if (buscando == -1) {
        console.log("null")
    }
    else {
        console.log("El primer indice es : " + buscando)
    }
}
busquedaNum(edades,111)



/*6 - Funcion que reciba un array de edades y retorne un objeto literal con dos propiedades que contengan un array
   {
      edadesMenor : "// edades menor a 18",  
      edadesMayor : "// edades menor a 18"
   } */

function MayoroMenor(array) {
    let mayores = []
    let menores = []
    // let buscandoEdad = array[i]
    for (let i = 0 ; i < array.length; i++) { 
        if ( array[i] < 18) {
            menores.push(array[i])
        }
        else if ( array[i] > 18 && array[i] >= 0 ) {
            mayores.push(array[i])
        }
        else {
            console.log("ingrese una edad valida")
        }
    
    }
console.log(" Las edades mayores a 18 años son : " + mayores)
console.log(" Las edades menores a 18 años son : "  + menores)
}
MayoroMenor(edades)


/*C  Nivel 3

1 - Desarrollar un objeto literal que contenga 5 propiedades que sean del siguiente tipo:
   - 2 String   
   - 1 Boolean
   - 1 Number
   - 1 Array
   - 1 Metodo que retorne un saludito
    * por ejemplo:*/
    
let canHijo = {
    nombre : 'Negrito',
    color  : 'Negrito',
    staVacunado : true,
    edad : 10,
    vacunas : ['Leptospirosis', 'Hepatitis', 'Parvovirus'],
    saludo: function(){
        return 'wouf wouf wouf..'
    } 
    }
    
/* - Luego desarrollar una funcion que liste individualmente los elementos de la propiedad del tipo Array */


function listaArray(objeto) {    
    
    for (let i = 0; i < objeto.vacunas.length ; i++) {
      console.log(objeto.vacunas[i])
    
    
    }
}


listaArray(canHijo,)



// console.log(canHijo.vacunas[0])





let personas = [
    {
      id: 0,
      isProgrammer: true,
      age: 28,
      name: "Harrington Curry",
      company: "TRANSLINK",
      favoriteFruit: "strawberry"
    },
    {
      id: 1,
      isProgrammer: false,
      age: 38,
      name: "Greta Morton",
      company: "PYRAMI",
      favoriteFruit: "apple"
    },
    {
      id: 2,
      isProgrammer: false,
      age: 32,
      name: "Hester Bowen",
      company: "TURNABOUT",
      favoriteFruit: "apple"
    },
    {
      id: 3,
      isProgrammer: false,
      age: 25,
      name: "Melendez Mcfarland",
      company: "XSPORTS",
      favoriteFruit: "strawberry"
    },
    {
      id: 4,
      isProgrammer: false,
      age: 31,
      name: "Kimberly Matthews",
      company: "KNOWLYSIS",
      favoriteFruit: "banana"
    },
    {
      id: 5,
      isProgrammer: false,
      age: 36,
      name: "Hardin Sims",
      company: "SEALOUD",
      favoriteFruit: "banana"
    },
    {
      id: 6,
      isProgrammer: false,
      age: 29,
      name: "Natalia Huff",
      company: "ENERSOL",
      favoriteFruit: "apple"
    }
  ]
function nombres(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i].name)
    }
}
nombres(personas)

function programadores(array) {
    let hayProgramadores = []
    for (let i = 0; i < array.length; i++) {
        if (personas[i].isProgrammer === true) {
            hayProgramadores.push(array[i].name)
        }
    
    }
console.log(hayProgramadores)
}
programadores(personas)

function buscarId(array, ident) {
    for (let i = 0; i < array.length; i++) {
        if (ident === array[i].id) {
            console.log(array[i].name)
        }
        else {
            console.log("null") /* aca como hacemos para que no este dentro del loop?*/
        }
    }
}
buscarId(personas, 6)

/* 2 - Dado el Siguiente array de personas desarrollar funciones:
  - Funcion que reciba el array de personas y liste el nombre de cada una. 
  - Funcion que reciba el array de personas y retorne en un array los que son programadores.
  - Funcion que reciba el array de personas y un id a buscar, 
       retorne la persona en caso de encontrar, 
       caso contrario retorne null
  - Funcion que reciba el array de personas y un id a buscar, 
       retorne la persona en caso de encontrar, 
       caso contrario retorne null */

// Tips

// * Es para que practiquen sintaxis ademas del pensamiento computacional, piensen tipo de datos posibles.
// * Desarrollen y lean enunciados en voz alta, utilicen abstracción, vean las alternativas de llegar al mismo resultado de diferentes formas


// nota : Se recomienda utilizar estructuras y conceptos vistos en la materia */
