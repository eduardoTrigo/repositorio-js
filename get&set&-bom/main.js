class persona{
    nombre;
    apellido;
    dni;
    edad;
    genero;
    profesion;

    constructor(nombre,apellido,dni,edad,genero,profesion){
        this.nombre = nombre
        this.apellido = apellido
        this.dni = dni
        this.edad = edad
        this.genero = genero
        this.profesion = profesion
    }

    get nombreCompleto(){
        return (this.nombre+" "+this.apellido)
    }

    saludo(){
        console.log(`hola mi nombre es ${this.nombreCompleto} y tengo ${this.edad} años`)
    }
}

const eduardo = new persona("eduardo","trigo",31030627,38,"M","Comerciante")

class rectangulo {
    constructor(ancho=0 , altura=0){
        this.ancho = ancho
        this.altura = altura
    }

    get perimetro(){
        const perimetro = this.ancho *2 + this.altura *2
        return perimetro
    }

    set cambioAncho(value){
        this.ancho = value
    }

    set cambioAltura(value){
        this.altura = value
    }
}

const figura1 =new rectangulo(10,30)
const figura2 =new rectangulo(15,50)