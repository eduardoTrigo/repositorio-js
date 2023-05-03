class Productos{
    codigo;
    nombre;
    precio;
    constructor(codigo, nombre, precio){
        this.codigo = codigo
        this.nombre = nombre
        this.precio = precio
    }

    get mostrarCodigo(){
        return this.codigo
    }

    get mostrarNombre(){
        return this.nombre
    }

    get mostrarPrecio(){
        return this.precio
    }

    set cambioCodigo(nuevoCodigo){
        this.codigo = nuevoCodigo
    }

    set cambioNombre(nuevoNombre){
        this.nombre = nuevoNombre
    }

    set cambioPrecio(nuevoPrecio){
        this.precio = nuevoPrecio
    }

    imprimirDatos(){
        document.write(
        `<ul>
            <li>Codigo: ${this.codigo}</li>
            <li>Nombre: ${this.nombre}</li>
            <li>Precio: $${this.precio}</li>
        </ul>`)
    }
}

let productos = []

let galleta = new Productos("ad502","Galletas de avena",350)
let dulceLeche = new Productos("cf259","dulce de leche",525)
let mermelada = new Productos("lk167","mermeladad de durazno",470)

productos.push(galleta)
productos.push(dulceLeche)
productos.push(mermelada)

for (let i = 0; i < productos.length; i++) {
    productos[i].imprimirDatos();    
}
