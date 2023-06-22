//Ejercicio por consola

let palindromo = "La ruta nos aporto otro paso natural";

esPalindromo=(palindromo)=>{

    palindromo = palindromo.toLocaleLowerCase().replace(/\s+/g, '');

    let cadenaPosicionIzquierda = 0; 
    let cadenaPosicionDerecha = palindromo.length-1
    
    while (cadenaPosicionDerecha >= cadenaPosicionIzquierda) {
    
        if( palindromo[cadenaPosicionIzquierda] != palindromo[cadenaPosicionDerecha]){
            console.log("No es un palindromo")
            break;
        }

        console.log("es un palindromo")
        
        cadenaPosicionDerecha -= 1
        cadenaPosicionIzquierda += 1

    } 
}

esPalindromo(palindromo)