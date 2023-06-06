let mensaje = "hola mundo";
//alert(mensaje);

let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
//recorrer los elementos del array meses con un bucle
for(mes of meses){
    document.write(`${mes} </br>`);
} 

//imprimir por consola los elementos del array
console.log(meses);


var valores = [true, 5, false, "hola", "adios", 2];

if(valores[3].length > valores[4].length ){
    console.log(`${valores[3]} tiene ${valores[3].length} letras, asi que es mayor`)
}else{
    console.log(`${valores[4]} tiene ${valores[4].length} letras, asi que es mayor`)
}

let numero1 = valores[1];
let numero2 = valores[5];

class Calcu {
    constructor(num1, num2) {
        this.numero1 = num1;
        this.numero2 = num2;
    }

    sumar(num1,num2){
        console.log(` la suma da ${num1 + num2}`);
    };

    restar(num1, num2){
        console.log(` la resta da ${num1 + num2}`);
    }

    multipicar(num1,num2){
        console.log(` la multiplicacion da ${num1 + num2}`);
    };

    dividir(num1, num2){
        console.log(` la division da ${num1 + num2}`);
    }
    modulo(num1, num2){
        console.log(` el modulo da ${num1 + num2}`);
    }

}

let calcular = new Calcu;

calcular.sumar(numero1, numero2);
calcular.restar(numero1, numero2);
calcular.multipicar(numero1, numero2);
calcular.dividir(numero1, numero2);
calcular.modulo(numero1, numero2);