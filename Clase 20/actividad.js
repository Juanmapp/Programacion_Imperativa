let personas = [
    {
      nombre: "Dua",
      apellido: "Lipa",
      ocupacion: "cantante",
      estatura: 173
    },
    {
      nombre: "Ariana",
      apellido: "Grande",
      ocupacion: "cantante",
      estatura: 160
    },
    {
      nombre: "Taylor",
      apellido: "Swift",
      ocupacion: "cantante",
      estatura: 180
    }
  ];
  
  function personasOrd(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j].estatura > array[j + 1].estatura) {
        let estaturas = array[j];
        array[j] = array[j + 1];
        array[j + 1] = estaturas;
      }
    }
  } return array
  }
  
  console.log(personasOrd(personas));

//  mesas de trabajo

/*Ejercicio 1
En un concurso de fotografía, donde los usuarios publican una fotografía y obtienen
likes, se registra la cantidad de likes obtenidos por cada usuario en un array. Ordenar
los valores para poder indicar cuál fue la mayor cantidad de likes obtenidos, cuánto
obtuvo el segundo, cuánto el tercero y cuánto el que menos likes obtuvo —suponer
que participaron 15 usuarios y suponer para cada uno, una cantidad de likes—.*/


const usuarios = [
    {
        id: 1,
        likes: 50
    },
    {
        id: 2,
        likes: 83
    },
    {
        id: 3,
        likes: 8
    },
    {
        id: 4,
        likes: 6
    },
    {
        id: 5,
        likes: 63
    },
    {
        id: 6,
        likes: 94
    },
    {
        id: 7,
        likes: 23
    },
    {
        id: 8,
        likes: 15
    },
    {
        id: 9,
        likes: 150
    },
    {
        id: 10,
        likes: 70
    },
    {
        id: 11,
        likes: 1
    },
    {
        id: 12,
        likes: 21
    },
    {
        id: 13,
        likes: 58
    },
    {
        id: 14,
        likes: 75
    },
    {
        id: 15,
        likes: 100
    },
]

console.log(usuarios)

function usuariosLikes(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length -1; j++) {
            if (array[j].likes < array[j + 1].likes) {
                let orden = array[j]
                array[j] = array[j + 1]
                array[j + 1] = orden
            }
        }
    } 
    for (let x = 0 ; x < array.length; x++) {
        if (x === 0 ) { 
                console.log("El usuario con mas likes es el id " + array[x].id + " con " + array[x].likes + " likes")
            }
            else if ( x > 0 && x <= 2) {
                console.log("La " + x + 1 + " posicion con mas likes es para el id " + array[x].id  + " con " + array[x].likes + " likes")
            }
            else if ( x === 14) {
                console.log("La ultima posicion es para el id " + array[x].id  + " con " + array[x].likes + " likes")
            }
            else {}
}
}
console.log(usuariosLikes(usuarios))



/*Ejercicio 2
El servicio meteorológico, para llevar el control diario de temperatura, utiliza un
objeto temperatura donde registra día —valor numérico del día—, mes —valor
numérico—, temperatura máxima y temperatura mínima, correspondiente a dicho
día. Las temperaturas —objeto temperatura— están cargados en un array.
a) Ordenar por temperatura mínima de menor a mayor.
b) Ordenar por temperatura máxima de mayor a menor.*/

let servicioMet = [
    temperatura: 
]
 