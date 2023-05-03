class rectangulo{
    alto;
    ancho;
    constructor(alto=0 , ancho=0){
        this.alto = alto
        this.ancho = ancho
    }

    get altoRectangulo(){
        return this.alto
    }

    get anchoRectangulo(){
        return this.ancho
    }

    get perimetro(){
        const perimetro = this.alto*2 + this.ancho*2
        return perimetro
    }

    get area(){
        const area = this.alto * this.ancho
        return area
    }

    set cambioAlto(value){
        this.alto = value
    }

    set cambioAncho(value){
        this.ancho = value
    }

    detalle(){
        return `<p>el rectangulo tiene un alto de ${this.altoRectangulo}cm y ancho de ${this.anchoRectangulo}</p>`
    }



}
let figura1 = new rectangulo ( 20 , 30)
let figura2 = new rectangulo ( 15 , 45)