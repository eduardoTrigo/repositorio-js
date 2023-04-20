class PersonaDni {
    nombreCompleto;   
    edad;
    dni;
    genero;
    peso;
    altura;
    anioNacimiento

    constructor(nombre,apellido ,edad , genero, peso, altura, anioNacimiento){
        this.nombreCompleto= nombre + " " + apellido
        this.edad = edad
        this.genero = genero
        this.peso = peso
        this.altura = altura
        this.anioNacimiento = anioNacimiento
        this.generarDNI()
    }

    mostrarGeneracion(){
        if(this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010){
            console.log("GEN Z")
        }else if(this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993){
            console.log("GEN Y")
        }else if(this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980){
            console.log("GEN X")
        }else if(this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968){
            console.log("BABY BOOM")
        }else if(this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948){
            console.log("GEN SILENT")
        }else{
            console.log("NO GEN")
        }
    }

    mostrarDatos(){
        return this
    }

    generarDNI(){
        this.dni = Math.round(Math.random()*100_000_000) 
    }

    mayorEdad(){
        if (this.anioNacimiento > 2015) {
            console.log("es menor de edad")
        }else{
            console.log("es mayor de edad") 
        }
    }
}
const eduardo = new PersonaDni("Eduardo","Trigo", 38, "M", 85, 1.75, 1985)