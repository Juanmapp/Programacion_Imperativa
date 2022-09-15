 let mes = [
    [1135,2500,900,1600,2800,3650,1100],   
    [1750,1890,1900,1300,898,1750,2800],
    [1700,1150,1690,1900,1770,4500,2560],
    [800,1250,1430,2100,1900,1270,950]   
    ]

function gastoSemanal(array) {
    let seGasto = 0
    for(let columna = 0; columna < array.length; columna++) {
    SeGasto = seGasto + columna
    }
    return seGasto
    
}
console.log(gastoSemanal(mes))


function sumPairs(numbers, result) {
    let numeross = []
    for (let i = 0; i < numbers.length; i++) {
      for (let b = i+1; b < numbers.length; b++) {
        if(numbers[i] + numbers[b] === result ) {
            numeross.push(numbers[i])
            numeross.push(numbers[b])
            return numeross
        }
  
      }
    }
    return null
  }

console.log(sumPairs([0, 2, 2, 3, -1, 1, 5], 6))



let arrayMatriz = []
let arrayX=["x0","x1","x2"]
let arrayY=["y0","y1","y2"]
arrayMatriz[0] = arrayX
arrayMatriz[1] = arrayY
console.log(arrayMatriz)
// console.table(arrayMatriz.length)
// console.log(arrayMatriz[0][1])
// function recorriendo(array) {
    for(let i=0; i<arrayMatriz.length; i++) {
        for (let j = 0; j < arrayMatriz[i].length; j++) {
            console.log(arrayMatriz[i][i])
        }
    }
    
// }
// recorriendo(arrayMatriz)


/*----Mesas de trabajo---*/

// ejercicio 1

let numerosEnteros = [
    [4, 6, 2, 3, 5],
    [1, 7, 9, 2, 3],
    [4, 1, 7, 9, 8],
    [3, 6, 8, 9, 0],
    [6, 6, 5, 1, 2]
  ];

function sumando(array) {
    let resultado = 0;
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length ; j++) {
        resultado = resultado + array[i][j];
      }
    }
    return resultado;
  }
  console.log(sumando(numerosEnteros));

// Ejercicio 2 , forma 1

  function generarMatriz10por10() {
    let matriz = [[],[],[],[],[],[],[],[],[],[]];
    let numero = 0;
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10 ; j++) {
        numero = numero + 1;
        matriz[i].push(numero);
      }
    }
    return matriz;
  }
  
  let matriz10por10 = generarMatriz10por10();
  console.log(matriz10por10);

// Ejercicio 2 , forma 2

function generarMatriz2() {
    let matriz = []
    let array = []
    let numero = 0
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10 ; j++) {
            numero = numero + 1;
            array.push(numero)
            
            if (array.length === 10 ) {
            matriz.push(array)
            array = []
            }
        }
    }return matriz
    
}
console.table(generarMatriz2())

/*ejercicio 3*/

function resultados(array) { 
    let rojo = 0
    let verde = 0
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length;j++) {
            if ( j === i) {
                rojo = rojo + array[i][j]
            }
            else if (j === 9 - i) {
                verde = verde + array[i][j]
            }
        }
    }
    console.log(rojo)
    console.log(verde)
}

resultados(matriz10por10)
