//array con letras asignadas para el calculo del DNI.
const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

//convertinos a un número entero el valor ingresado por el usuario.
let dni = parseInt(prompt("Introduzca du dni"));

//realizamos el calculo para la asinacion de la respectiva letra.
let letraAsignada = dni % 23;

//validamos que el DNI no sea menor que cero ni mayor a 10 digitos.
if(dni > 0 && dni < 9999999999){

    //Con un for in recorremos cada posicion del array letras
    for( letraPosicion in letras){

        //validamos que el resto del calculo de la divison sea igual
        //a cada una de las posiciones que le pertenece a cada letra en el array
        if(letraAsignada == letraPosicion){

            //recorremos el array con el resto de la divison y muestra por pantalla la letra asignada
            alert(`${letras[letraAsignada]} es su letra asignada a su DNI`);    

            // volvemos a pedir  al usuario la letra asignada para verificar si es correcta
            let letraUsuario = prompt("Escriba la letra asignada").toUpperCase();

            //validamos que la letra insertada por el uaurio se igual al
            //elemento del array letras segun la posicion del resto de la division
            if(letraUsuario == letras[letraAsignada]){

                //mostramos la letra insertada y su expliacion
                alert(`letra ${letraUsuario} de DNI es correcta, por la división del DNI: ${dni} para 23 se asigna dicha letra`);
                
            }else{
                //si la letra no es la indicada da un mensaje de error
                alert(`La letra escrita ${letraUsuario} no es la indicada`);
            }

        }
    }

}else{
    //si el DNI es menor o mayor a 10 digitos devuelve un error;
    alert(`El número proporcionado no es valido`);
}
