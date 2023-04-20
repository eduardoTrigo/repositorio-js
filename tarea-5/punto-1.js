class Auto {
    color;
    marca;
    modelo;

    constructor(color, marca, modelo){
        this.color = color
        this.marca = marca
        this.modelo = modelo
    }

    Encender(){
        console.log(`Auto Encendido`)
    }
    Apagar(){
        console.log(`El auto se apago`)
    }

}

const reno = new Auto ("gris", "renault 12", 1992);