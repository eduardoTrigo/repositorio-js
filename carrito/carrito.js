const carrito = []

const form = document.getElementById("form")
const producto = document.getElementById("producto")
const precio = document.getElementById("precio")
const imagen = document.getElementById("imagen")
const cart = document.getElementById("cart")

// limpiar imput
function limpiar(){
    producto.value = ""
    precio.value = ""
    imagen.value = ""
}

function renderCard(objetoProducto){
    // agregar a la lista

    for (let i = 0; i < carrito.length; i++) {
        cart.innerHTML += `<li class="col-4">
        <div class="card">
            <img src="${carrito[i].imagen}" class="img-fluid" alt=""></img>
            <div class="card-body">
                <h3 class="">${carrito[i].nombre}</h3>
                <h6 class="">${carrito[i].price}</h6>
            </div>
        </div>
    </li>`
    }
}
    

function handleSubmit(event) {
    //evitamos recargar la pagina
    event.preventDefault()
    //genero diccionario
    const objetoProducto = {
        nombre: producto.value,
        price: precio.value,
        foto: imagen.value
    }

    carrito.push(objetoProducto)

    // limpioImput
    limpiar()

    renderCard(objetoProducto)

    //creo las card
    // console.log("el usuario agrego el siguiente producto")
    // cosole.log(objetoProducto)

    
}



form.addEventListener('submit', handleSubmit)