// Loop de pares
// Deberás crear una función llamada loopDePares que reciba como parámetro un número y haga un loop de 0 a 100 mostrando en la consola cada número del loop. En caso de que el número de la iteración sumado con el número pasado por parámetro sea par, mostrará en la consola: “El número X es par”.

function nuevoArreglo(numero){
    let arreglo = []
    for(let i = 1; i<=numero; i++){
        arreglo.push(i)
    }
    return arreglo
}

console.log(nuevoArreglo(10))


/* parcial del jueves, posible ejercicio


let paises = [
    {
      nombre: "Argentina",
      continente: "Sudamerica",
      copaMundial: true,
      clima: "nublado",
      },
    {
      nombre: "brasil",
      continente: "Sudamerica",
      copaMundial: true,
      clima: "soleado"
    },
    {
      nombre: "venezuela",
      continente: "Sudamerica",
      copaMundial: true,
      clima: "nublado"
    },
    {
      nombre: "chile",
      continente: "Sudamerica",
      copaMundial: false,
      clima: "lluvioso"
    },
    {
      nombre: "australia",
      continente: "oceania",
      copaMundial: false,
      clima: "soleado"
    },
    {
      nombre: "nueva zelanda",
      continente: "oceania",
      copaMundial: true,
      clima: "lluvioso"
    },
  ];
  /*Crear una función que reciba como parámetro un
   arreglo de objetos, continente y un país. 
   La función deberá retornar un nuevo arreglo que 
   contenga solo los países que sean del continente 
   pasado por parámetro, y además, que dicho país tenga una copaMundial.*/

function buscando(array, pais) {
    for(let i = 0; i<array.length; i++){
      if(paises[i].continente === arrayCuentas[i].titularCuenta && montoExtraccion <= arrayCuentas[i].saldoEnPesos){
        arrayCuentas[i].saldoEnPesos = arrayCuentas[i].saldoEnPesos - montoExtraccion;
        console.log("Extraccion realizada, su nuevo saldo es: " + arrayCuentas[i].saldoEnPesos)
        }else if(titular === arrayCuentas[i].titularCuenta){
          console.log("Su saldo es insuficiente")
        }
    }


   let banco = {

    clientes: arrayCuentas,
    consultarCliente: function(titular){
      for(let i = 0; i<arrayCuentas.length; i++){
        if(titular === arrayCuentas[i].titularCuenta){
          console.log(arrayCuentas[i])
        }
      }
    },
  deposito: function(titular, cantidadDinero){
      for(let i = 0; i<arrayCuentas.length; i++){
        if(titular === arrayCuentas[i].titularCuenta){
          arrayCuentas[i].saldoEnPesos = arrayCuentas[i].saldoEnPesos + cantidadDinero;
          console.log("deposito realizado, su nuevo saldo es: " + arrayCuentas[i].saldoEnPesos)
        }
      }
    },
   }

   extraccion: function(titular, montoExtraccion){
    for(let i = 0; i<arrayCuentas.length; i++){
      if(titular === arrayCuentas[i].titularCuenta && montoExtraccion <= arrayCuentas[i].saldoEnPesos){
        arrayCuentas[i].saldoEnPesos = arrayCuentas[i].saldoEnPesos - montoExtraccion;
        console.log("Extraccion realizada, su nuevo saldo es: " + arrayCuentas[i].saldoEnPesos)
        }else if(titular === arrayCuentas[i].titularCuenta){
          console.log("Su saldo es insuficiente")
        }
        
      }
    }
    let clienteEncontrado = banco.consultarCliente("Jacki Shurmer")

    let nuevoDeposito = banco.deposito("Jacki Shurmer", 1000)
    
    let extracciones = banco.extraccion("Ansel Ardley", 32415)
    
