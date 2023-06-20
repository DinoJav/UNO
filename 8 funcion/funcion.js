//EN PANTALLA CON BOTON Y UN INPUT

enviarValor = () => {
  let numero = document.getElementById("num").value;
  let resultado = document.getElementById("resultado");
  numeroNuevo = numero % 2;
  if (numero == "") {
    resultado.innerHTML = "no se ingreso ningun número";
  } else if (numero >= 0) {
    if (numeroNuevo == 0) {
      resultado.innerHTML = numero + ": es un número par";
    } else {
      resultado.innerHTML = numero + ": es un número impar";
    }
  } else {
    resultado.innerHTML = numero + ": es un número negativo";
  }
};

//POR CONSOLA

enviarValorConsola = (numero) => {
  numeroNuevo = numero % 2;
  if (numeroNuevo == 0) {
    console.log(`${numero} el número es par`);
  } else {
    console.log(`${numero} el número es impar`);
  }
};

enviarValorConsola(2);
enviarValorConsola(1);
