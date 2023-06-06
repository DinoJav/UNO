let mensaje = "hola mundo";
//alert(mensaje);

let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
//recorrer los elementos del array meses con un bucle
document.write(`<h3>Meses del año</h3> <hr>`)
for(mes of meses){
    document.write(`${mes} </br>`);
} 

var valores = [true, 5, false, "hola", "adios", 2];


//CONTANDO DENAS
document.write(`<h3>CONTANDO CADENAS</h3> <hr>`)

if(valores[3].length > valores[4].length ){
    document.write(`${valores[3]} tiene ${valores[3].length} letras, asi que es mayor <br>`)
}else{
    document.write(`${valores[4]} tiene ${valores[4].length} letras, asi que es mayor <br>`)
}

//CALCULADORA CON UNA CLASE
document.write(`<h3>Calculadora</h3> <hr>`)

let nunme1= valores[1];
let nunme2 = valores[5];

document.write(`Números para los calculos ${nunme1} y ${nunme2} <br><br>`)


class Calcu {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    sumar(num1,num2){
        document.write(` la suma da ${num1 + num2} <br>`);
    };

    restar(num1, num2){
        document.write(` la resta da ${num1 - num2} <br>`);
    }

    multipicar(num1,num2){
        document.write(` la multiplicacion da ${num1 * num2} <br>`);
    };

    dividir(num1, num2){
        document.write(` la division da ${num1 / num2} <br>`);
    }
    modulo(num1, num2){
        document.write(` el modulo da ${num1 % num2} <br>`);
    }

}

let calcular = new Calcu;

calcular.sumar(nunme1, nunme2);
calcular.restar(nunme1, nunme2);
calcular.multipicar(nunme1, nunme2);
calcular.dividir(nunme1, nunme2);
calcular.modulo(nunme1, nunme2);