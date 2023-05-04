class Persona{
    nombre;
    dni;
    sexo;
    peso;
    altura;
    anioNac;
    constructor(nombre, sexo, peso, altura, anioNac){
        this.nombre = nombre
        this.dni = this.generarDni()
        this.sexo = sexo
        this.peso = peso
        this.altura = altura
        this.anioNac = anioNac
    }

    mostrarGeneracionDetalle(generacion, lapso, circunstancia, rasgo){        
        return `<ul>
            <li>Generacion: ${generacion}</li>
            <li>Marco temporal: ${lapso}</li>
            <li>Circunstancia Historica: ${circunstancia}</li>
            <li>Rasgo Caracteristico: ${rasgo}</li>
        </ul>`
    }

    mostrarGeneracion(){
        if (this.anioNac >= 1994 && this.anioNac <= 2010) {
            return this.mostrarGeneracionDetalle("Generacion Z",
                                                "1994 - 2010",
                                                "expansion Masiva de Internet",
                                                "Irreverencia")
            
        }else if (this.anioNac >= 1981 && this.anioNac <=1993) {
            return this.mostrarGeneracionDetalle("Generacion Y",
                                                "1981 - 1993",
                                                "Inicio Digitalizacion",
                                                "Frustracion")
        }else if (this.anioNac >= 1969 && this.anioNac <=1980) {
            return this.mostrarGeneracionDetalle("Generacion X",
                                                "1969 - 1980",
                                                "Crisis del 73 transicion española",
                                                "Obsesion por el exito");
        }else if (this.anioNac >= 1949 && this.anioNac <=1968) {
            return this.mostrarGeneracionDetalle("Baby Boom",
                                                "1949 - 1968",
                                                "Paz y explosion demografica",
                                                "Ambicion")
        }else if (this.anioNac >= 1930 && this.anioNac <=1948) {
            return this.mostrarGeneracionDetalle("Silent Generation",
                                                "1930 - 2048",
                                                "Conflictos belicos",
                                                "Austeridad")
        }
    }

    generarDni(){
        return Math.round(Math.random()*1_00_000_000)
    }

    mostrarDatos(){
        return `<ul>
                    <li>Nombre: ${this.nombre}</li>
                    <li>Dni: ${this.dni}</li>
                    <li>Genero: ${this.sexo}</li>
                    <li>Peso: ${this.peso}</li>
                    <li>Altura: ${this.altura}</li>
                    <li>Año de Nacimiento: ${this.anioNac}</li>
                </ul>`
    }
}

let nombre = prompt("ingese nombre")
let sexo = prompt("Ingrese genero")
let peso = prompt("ingrese peso")
let altura = prompt("ingrese altura")
let anio = prompt("ingrese año nacimiento")
let personaNueva = new Persona(nombre,sexo,peso,altura,anio)
document.write(personaNueva.mostrarDatos())
document.write(personaNueva.mostrarGeneracion())

