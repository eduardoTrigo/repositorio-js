// 1-ESTRUCTURAS
// VARIABLES DONDE SE ALMACENAN LOS DATOS
const carrito = []

// 2-OBJETOS DE INTERACCION
const form = document.getElementById("form")
const btnLimpiar = document.getElementById("btn-limpiar")
const producto = document.getElementById("producto")
const precio = document.getElementById("precio")
const imagen = document.getElementById("imagen")
const card = document.getElementById("card")


// 3-FUNCIONES
function limpiarInput(){
    // limpiar inputs//
    producto.value = ""
    precio.value = ""
    imagen.value = ""
}

function generarCard(){
    // AGREGAR LAS CARDS AL HTML
    console.log("generar")

    card.innerHTML = ""

    for (let i = 0; i < carrito.length; i++) {
        card.innerHTML += `<li class="col-4 mt-3">
        <div class="card">
            <img src="${carrito[i].imagen}" class="card-img-top" >
            <div class="card-body">
                <h6 class="card-title">${carrito[i].nombre}</h6>
                <h3 class="card-title">${carrito[i].precio}</h3>
            </div>
        </div>
    </li>`
        
    }
}

function recargaForm(event){
    // evita recargar la pagina
    event.preventDefault()
    
    // crear objeto
    const productPro = {
        nombre: producto.value,
        precio: precio.value,
        imagen: imagen.value

    }
    // agrego el producto al carrito
    carrito.push(productPro)

    // limpiar inputs//
    limpiarInput()

    // GENERA LAS CARDS
    generarCard()     

}

form.addEventListener("submit", recargaForm )
btnLimpiar.addEventListener("click", limpiarInput)