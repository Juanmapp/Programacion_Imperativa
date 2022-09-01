// A partir de el siguiente array de edades nos solicitan realizar lo siguiente:


const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

const edadesGrupo1 = [21, 12, 15, 18, 25];
const edadesGrupo2 = [2, 11, 54, 63, 24];
// Obtener en un nuevo array las edades menores a 18.
function edadesMenores(array) {
    let menores = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 18 ) {
            menores.push(array[i])
        }
    }
    return menores

}
console.log(edadesMenores(edades))

// Obtener en un nuevo array las edades mayor o igual a 18.

function edadesMayores(array) {
    let mayores = []
    for (let i = 0; i < array.length; i++) {
        if (array[i]>= 18) {
            mayores.push(array[i])
        }
    }
    return mayores
}
console.log(edadesMayores(edades))

// Obtener en un nuevo array las edades igual a 18.

function edades18(array) {
    let edad18 = []
    for (let i = 0; i < array.length; i++){
        if (array[i] === 18) {
            edad18.push(array[i])
        }
    }
    return edad18
}
console.log(edades18(edades))

// Obtener el menor.

function edadMenor(array) {
    return Math.min(...array)
}
console.log(edadMenor(edades))

// Obtener el mayor. 

function edadMayor(array) {
    return Math.max(...array)
}
console.log(edadMayor(edades))

// Obtener el promedio de edades.

function promedio(array) {
    let promediando = 0
    for (let i = 0; i < array.length; i++) {
        promediando = promediando + array[i]
    }
    return promediando / array.length
}
console.log(promedio(edades))

// Incrementar en 1 todas las edades.

function edadesIncrem(array) {
    let incrementadas = []
    for (let i = 0 ; i < array.length; i++) {
        incrementadas.push(array[i] + 1 )
    }
    return incrementadas
}
console.log(edadesIncrem(edades))
console.log("--------------------------------")
console.log("--------------------------------")
console.log("--------------------------------")



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
      estaHabilitada: true,
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

    // Obtener un nuevo array de cuentas cuyas edades sean menores a 30.

function cuentasMenoresA30(array) {
    let cuentasM30 = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].edadTitular < 30) {
            cuentasM30.push(array[i])
        }
    }
    return cuentasM30
}
console.log("--------------------------------")
console.log(cuentasMenoresA30(arrayCuentas))

    // Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30.
function cuentasMayoresA30(array) {
    let cuentasMay30 = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].edadTitular >= 30) {
            cuentasMay30.push(array[i])
        }
    }
    return cuentasMay30
}
console.log("--------------------------------")
console.log(cuentasMayoresA30(arrayCuentas))
    // Obtener un nuevo array de cuentas cuyas edades sean igual a 30.

    function cuentasIgualesA30(array) {
        let cuentasIgu30 = []
        for (let i = 0; i < array.length; i++) {
            if (array[i].edadTitular === 30) {
                cuentasIgu30.push(array[i])
            }
        }
        return cuentasIgu30
    }
console.log("--------------------------------")
console.log(cuentasIgualesA30(arrayCuentas))
console.log("--------------------------------")
    // Obtener la cuenta con el titular de la misma más joven.

function masJoven(array) {
        let edadMasJoven = []
    for (let i = 0; i < array.length; i++ ) {
        edadMasJoven.push(array[i].edadTitular)
    }
    for (let i = 0; i < array.length; i++ ) {
        if (array[i].edadTitular === Math.min(...edadMasJoven)){    
    return array[i]
}
}
}
    
console.log(masJoven(arrayCuentas))
console.log("ejerciciooo")
    // Obtener un nuevo array por cada tipo de cuenta.

function tiposDeCta(array) {
    let sueldo = []
    let corriente = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].tipoCuenta === "sueldo") {
            sueldo.push(array[i])
        }
        
        else if (array[i].tipoCuenta === "corriente") {
            corriente.push(array[i])
        }
    }
    console.log(sueldo)
    console.log(corriente)
    
}
tiposDeCta(arrayCuentas)

    // Obtener un nuevo array con las cuentas habilitadas.
    console.log("ejerciciooo")
    console.log("ejerciciooo")
    console.log("ejerciciooo")

function cuentaHabilitada(array) {
    let cuentaHab = []
    for (let i = 0; i < array.length; i++) { 
        if (array[i].estaHabilitada === true) {
            cuentaHab.push(array[i])
        }
    }
    return cuentaHab
}
console.log(cuentaHabilitada(arrayCuentas))
console.log("ejerciciooo")

    // Obtener un nuevo array con las cuentas deshabilitadas.

function cuentaDeshabilitada(array) {
    let cuentaDesH = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].estaHabilitada === false) {
            cuentaDesH.push(array[i])
        }
    }
    return cuentaDesH
}
console.log(cuentaDeshabilitada(arrayCuentas))
console.log("probando probando")
    // Obtener la cuenta con el menor saldo.

    function menorSaldo(array) {
        let cuentaMenorSaldo = []
    for (let i = 0; i < array.length; i++ ) {
        cuentaMenorSaldo.push(array[i].saldo)
    }
    for (let i = 0; i < array.length; i++ ) {
        if (array[i].saldo === Math.min(...cuentaMenorSaldo)){    
    return array[i]
}
}
}
console.log(menorSaldo(arrayCuentas))
console.log("MAYOR")

    // Obtener la cuenta con el mayor saldo.
function mayorSaldo(array) {
    let saldo = array[0].saldo
    let cuenta = array[0]
    for(let i = 0; i < array.length; i++) {
        if (array[i].saldo > saldo) {
            saldo = array[i].saldo 
            cuenta = array[i]
        }
    }
    return cuenta
}
console.log(mayorSaldo(arrayCuentas))

    // Extras:
    // Desarrollar una función llamada generarID que reciba como parámetro el array de cuentas y agregue a cada elemento (objeto literal) una propiedad llamada id con un valor Numérico

    



// console.log(arrayCuentas)
// function generarId(array) {
//     let buscando = array[i]
//     array[i].id = 1
//     for (let i = 0; i < array.length; i++) {
//         array[i].id = array[i].id + 1
//     }
//     return buscando
// }
// console.log(generarId(arrayCuentas))

    
    // Desarrollar una función llamada buscarPorId que reciba como parámetro el array de cuentas y un id, en caso de encontrar retornar la cuenta (él objeto literal completo), caso contrario retornar null
    
    // Desarrollar una funcións llamada filtrarPorSaldos que reciba como parámetro el array de cuentas y un saldo (Number), deberá retornar un array que se cuyas cuentas se encuentren por debajo del saldo enviado por parámetro
    
    // Desarrollar una función llamada incrementarSaldo que reciba como parámetro el array de cuentas, un id y un saldo, deberá incrementar él saldo de la cuenta, en caso de encontrar, caso contrario retornar undefined 
    // Reutilizando la función  buscarPorId   
      

