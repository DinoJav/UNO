
//Clase persona
class Persona{
    constructor(nombre, edad, genero){
        this.nombre = nombre;
        this.edad = edad;
        this.genero= genero;
    }

    obtDetalles(){
        console.log(`${this.nombre}, ${this.edad}, ${this.genero} `)
    }
}

class Estudiante extends Persona{
    constructor(nombre, curso, grupo){
        super(nombre)
        this.curso = curso;
        this.grupo = grupo;
    }
 
    registrar(){
        console.log(`El estudiante ${this.nombre} ha sido registrado en el curso: ${this.curso} al grupo:${this.grupo}`)
    }

}

class Profesor  extends Persona{
    constructor(nombre, asignatura , nivel){
        super(nombre)
        this.asignatura = asignatura;
        this.nivel = nivel;
    }

    asignar(){
        console.log(`El profesor ${this.nombre} a sido asignado a la materia de ${this.asignatura} nivel: ${this.nivel}`)
    }

}

//Personas
let  persona1 = new Persona("Javier","22","Masculino");
let  persona2 = new Persona("Jaquelin","15","Femenino");
let  persona3 = new Persona("Sami","17","Femenino");

persona1.obtDetalles();

//Registrar Primer Estudiante
let registarEstudiante = new Estudiante(persona2.nombre, "Primero", "A" );

registarEstudiante.registrar();

//Asignar profesor

let profersorAsignado = new Profesor(persona3.nombre, "Inglés", "A1.1")

profersorAsignado.asignar();