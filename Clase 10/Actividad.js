const prompt = require("prompt-sync")({ sigint: true });

// En este ejercicio deberás pensar qué devuelven estos códigos sin probarlos en la
// consola.
// let numbers =[22, 33, 54, 66, 72]
// console.log(numbers[numbers.length])

// Devuelve undefined ya que al no ser un string sino un number no devuelve la cantidad de caracteres


// 2. let grupoDeAmigos = [ "Harry", "Ron", "Hermione", "Spiderman", "Hulk",
// "Ironman","Penélope Glamour", "Pierre Nodoyuna","Patán" ]
// console.log(grupoDeAmigos[5])

// Devuelve "Pierre Nodoyuna" ya que se encuentra en el punto 5 del array

// 1

// let str = "un string cualquiera"
// let arrayAleatorio= ["Digital", "House", "true", "string", "123","false", "54", str ]
// console.log(arrayAleatorio[arrayAleatorio.length - 1])

// Devuelve el valor de str ya que al llamaron con el lenght -1 empieza por el final en vez del principio

let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]

// console.log(peliculas[1])

// function pelisEnMayus (peliculas) { 
//     return peliculas.toUpperCase()
// }
// console.log(pelisEnMayus(peliculas[3]))

// let nuevasPelis = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]

peliculas.push("toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite")
// function todasLasPelis (a,b) {
//     // b.toUpperCase()
//     a.push(b)

console.log(peliculas)


