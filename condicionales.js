//EJERCICIOS DE CONDICIONALES
//RELIZAR LAS COMPARACIONES PARA MOSTRAR LOS MENSAJES

//COMPARAR SI UN NUMERO ES MENOR QUE EL OTRO

let numero1 = 6;
let numero2 = 8;

if (numero1 < numero2) {
  console.log(`El nímero: ${numero1} no es mayor que el número ${numero2}`);
}

//DEVUELVE 1 SI EL NUMERO ES POSITIVO
//DEVUELVE -1 SI EL NUMERO ES NEGATIVO
//DEVUELVE 0 SI EL NUMERO ES CERO POSITIVO
//DEVUELVE -0 SI EL NUMERO ES CERO NEGATIVO
//DEVUELVE NaN si no es un número

let signo = Math.sign(numero2, numero1);

if (signo == 1) {
  console.log(`el número: ${numero2} es positivo`);
} else if (signo == -1) {
  console.log(`el número: ${numero2} es negativo`);
} else if (signo == 0) {
  console.log(`el número: ${numero2} es cero positivo`);
} else if (signo == -0) {
  console.log(`el número: ${numero2} es cero negativo`);
} else {
  console.log(`Esto ${numero2} no es un número`);
}

//DEVUELVE SI EL NÚMERO ES NEGATIVO O DISTINTO DE CERO

if (signo == -1 || signo != 0) {
  console.log(`El número: ${numero1} es negativo o distinto de cero`);
}

//INCREMENTAR EN 1 UNIDAD EL VALOR DE NUMERO1 NO LO HACE MAYOR O IGUAL QUE NUMERO2

if (numero1 < numero2) {
  console.log(`número 1 tiene un valor de ${numero1}`);
  numero1++;
  if (numero1 < numero2) {
    console.log(
      `numero 1 mas una unidad ahora es ${numero1} no es mayor ni igual a ${numero2}`
    );
  }else{
    console.log(
        `numero 1 mas una unidad ahora es ${numero1} es mayor o igual a ${numero2}`
      );
  }
}


let nuevonumero1 = numero1++

if(nuevonumero1 < numero2 && nuevonumero1 !=numero2){
    console.log(
        `nuevo número 1 mas una unidad ahora es ${nuevonumero1} no es mayor ni igual a ${numero2}`
      );
}else{
    console.log(
        `nuevo número 1 mas una unidad ahora es ${nuevonumero1} y es mayor o igual a ${numero2}`
      );
}
