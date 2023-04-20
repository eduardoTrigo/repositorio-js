class Persona {
    nombreCompleto;
    dni;
    edad;
    domicilio;
    hijos;
    profesion;

    constructor (nombre, apellido, dni, edad, domicilio, hijos, profesion){
        this.nombreCompleto = nombre + "" + apellido
        this.dni = dni
        this.edad = edad
        this.domicilio = domicilio
        this.hijos = hijos
        this.profesion = profesion
    }
    Salud(){
        console.log(`hola, mi nombre es ${this.nombreCompleto}y tengo ${this.edad}`)
    }
    Listar(){
        document.write(`<p>Nombre: ${this.nombreCompleto}</p>`)
        document.write(`<p>Dni: ${this.dni}</p>`)
        document.write(`<p>Edad: ${this.edad}</p>`)
        document.write(`<p>Domicilio: ${this.domicilio}</p>`)
        document.write(`<p>Hijos: ${this.hijos}</p>`)
        document.write(`<p>Profesion: ${this.profesion}</p>`)
    }
}

const eduardo = new Persona("Eduardo", "Trigo", 31030627, 38, "pje montserrat 3090", 1, "comerciante");