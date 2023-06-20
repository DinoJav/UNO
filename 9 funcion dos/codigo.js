//Ejercicio con interfaz
comprobarCadena =()=>{
    let cadena = document.getElementById('cadena').value;
    let respuesta = document.getElementById('respuesta');
    if(cadena == ""){
        respuesta.innerHTML = "No se ha ingresado nada";
    }else if(cadena == cadena.toUpperCase()){
        respuesta.innerHTML = "la cadena esta compuesta por mayusculas";
    }else if(cadena == cadena.toLowerCase()){
        respuesta.innerHTML = "la cadena esta compuesta por minusculas"
    }
    else{
        respuesta.innerHTML= "la cadena esta conformada por ambas"
    }
}


//Ejercicio Ejecutado por consola
comprobar = ( cadena) =>{
    if(cadena == cadena.toUpperCase() ){
        console.log(`${cadena} esta conformado solo por mayusculas`);
    }else if(cadena == cadena.toLowerCase()){
        console.log(`${cadena} esta conformado solo por minusculas`);
    }else{
        console.log(`${cadena} esta conformado mayusculas y minusculas`);
    }

    console.log(typeof(cadena));
}

comprobar("Ejercicio 9")