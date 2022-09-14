
function mes() {
    let mesCompleto = []
    let semana = []
    let dia = 0
    for (let i = 0 ; i < 4; i++) {
        for (let j = 0; j < 7 ; j++) {
            dia = dia + Math.ceil(Math.random()*1000);
            semana.push(dia)
            dia = 0
            if (semana.length === 7) {
                mesCompleto.push(semana)
                semana = []
            }
    }
    
}return mesCompleto
}
let gastoMes = mes()



console.table(gastoMes)

// ejercicio a , opcion 1

function gastoSemanal(meses, semana) {
    let gasto = 0
    for ( let i = 0 ; i < meses.length ; i++) {
        if (i === semana - 1 ) {
            for ( let j = 0; j < meses[i].length ; j++) {
            gasto = gasto + meses[i][j]
        }
    }
}
return gasto
}
console.log(gastoSemanal(gastoMes, 3))

// ejercicio a , opcion 2

function probando1(meses, semana) {
    let gasto = 0
    for (let j = 0; j < meses[0].length; j++ ) {
        gasto = gasto + meses[semana - 1][j]

    }
    return gasto
}
console.log(probando1(gastoMes,3))


// ejercicio b , opcion 1

function gastodeDiaX(meses, dia) {
    let diaX = 0
    for (let i = 0 ; i < meses[0].length; i++) {
    if ( i === dia -1) {
        for (let j = 0 ; j < meses.length; j++) { 
            diaX = diaX + meses[j][i]
        }
    }
}return diaX
}
console.log(gastodeDiaX(gastoMes,6))

// ejercicio b , opcion 2

function probando2(meses, dia) {
    let columna = 0
    for (let i = 0; i < meses.length; i++ ) {
        columna = columna + meses[i][dia - 1]

    }
    return columna
}
console.log(probando2(gastoMes,6))

// ejercicio c , por filas

function gastoTotalMes(meses) {
    let sumaTotal = 0
    for (let i = 0 ; i < meses.length; i++) {
        for (let j = 0 ; j < meses[i].length; j++) {
            sumaTotal += meses[i][j]
        }
    }return sumaTotal
}
console.log(gastoTotalMes(gastoMes))

// ejercicio c , por columnas

function gastoTotalMes2(meses) {
    let sumaTotal = 0
    for (let i = 0 ; i < meses[0].length; i++) {
        for (let j = 0 ; j < meses.length; j++) {
            sumaTotal += meses[j][i]
        }
    }return sumaTotal 
}
console.log(gastoTotalMes2(gastoMes))

// ejercicio d (no lo termine)

function semanaMasGastos(meses) {
    let gasto = 0
    let gasto2 = 0
    for ( let i = 0 ; i < meses.length ; i++) {
        if (i === semana - 1 ) {
            for ( let j = 0; j < meses[i].length ; j++) {
            gasto = gasto + meses[i][j]
        }
    }
}
return gasto
}

// mesas de trabajo

// actividad 1

let numeros = [
    [10, 3, 2, 1, 4, 7],
    [5, 5, 10, 100, 4],
    [5, 125, 10, 1020, 4],
    [5, 5, 5097, 100, 4]
];


function suma(matriz) {
    let acumulando = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] >= 10 && matriz[i][j] < 1000) {
                acumulando = acumulando + matriz[i][j];
        }
    }
    }
    return acumulando;
}
console.log(suma(numeros));
