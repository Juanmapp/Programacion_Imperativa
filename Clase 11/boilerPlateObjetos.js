//la lista de clientes.
let arrayCuentas = [
  {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 27771,
    titularCuenta: "Abigael Natte",
  },
  {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 8675,
    titularCuenta: "Ramon Connell",
  },
  {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "Jarret Lafuente",
  },
  {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "Ansel Ardley",
  },
  {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 18789,
    titularCuenta: "Jacki Shurmer",
  },
];
// podes continuar tu codigo a partir de aca!

// 3. Al objeto “banco”, crearle un método llamado consultarCliente, el cual recibirá un
// nombre (titular) por parámetro, deberá buscarlo en la lista de cuentas y retornar el
// objeto cliente que corresponda con ese nombre ingresado.
// Ayuda: let clienteEncontrado = banco.consultarCliente(“Ramon Connell”);

// let banco = {
//   clientes: arrayCuentas,
//   consultarClientes: function(titular) {
//     for (let i = 0; i < arrayCuentas.length; i++) {
//       if (arrayCuentas[i].titularCuenta === titular) {
//         console.log(arrayCuentas[i])
//       }
//     }
//   },
  
//   deposito: function(titular, dineroaDep) {
//     for (let i = 0; i < arrayCuentas.length; i++) {
//       if (arrayCuentas[i].titularCuenta === titular) {
//         let total = arrayCuentas[i].saldoEnPesos + dineroaDep
//         console.log("deposito realizado, su nuevo saldo es : " + total)
//       }
//     }
//   },
//   extraccion: function(titular, dineroaRetirar) {
//     for (let i = 0; i < arrayCuentas.length; i++) {
//       if (arrayCuentas[i].titularCuenta === titular) {
//         let totalRetiro = arrayCuentas[i].saldoEnPesos - dineroaRetirar
//         if (totalRetiro < 0) {
//           console.log("Fondos insuficientes")
//         } 
//         else {
//           console.log("Extracción realizada correctamente, su nuevo saldo es: " + totalRetiro)
//         }
//       }
//     }
//   },

// }

// banco.consultarClientes("Ansel Ardley")
// banco.deposito("Ansel Ardley",30000)
// banco.extraccion("Jacki Shurmer", 1000)

// 4. Crear otro método llamado depósito que recibirá dos parámetros: el titular de
// cuenta y una cantidad de dinero a depositar. El método debe obtener la cuenta
// correspondiente y luego sumar la cantidad de dinero a depositar a saldo en pesos.
// Luego, deberá dar un aviso por la consola con el mensaje “Depósito realizado, su
// nuevo saldo es: XXXX”.


let arrayNombres = [ 
  { nombre: "Lean", 
  edad: 27 }, 
{ nombre: "Eze", 
edad: 49},
{nombre: "Mariano",
edad: 42},
{ nombre: "Juan",
edad: 28},
]
let ejercicio = {
propiedadUnica: function (array,edadN) {
  for (let i = 0; i < arrayNombres.length ; i++) {
    array = arrayNombres
    edadN = arrayNombres[i].edad
    console.log(arrayNombres[i].edadN)
  }
}
}
ejercicio.propiedadUnica(arrayNombres[i],edad)
// ejercicio.propiedadUnica(array[i],edadN)

// console.log(array.propiedadUnica(array,edad))

