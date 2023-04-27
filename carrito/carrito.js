const carrito = []

const form = document.getElementById("form")
const producto = document.getElementById("producto")
const precio = document.getElementById("imagen")
const imagen = document.getElementById("imagen")

function handleSubmit(event){
    //evitamos recargar la pagina
    event.preventdefault()

    const objetoProducto = {
        nombre: producto.value,
        precio: precio.value,
        imagen: imagen.value, 
    }

    carrito.push(objetoProducto)

    // console.log("el usuario agrego el siguiente producto")
    // cosole.log(objetoProducto)
}

form.addEventListener('submit', handleSubmit)