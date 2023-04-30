const datos = [
    {
        nombre: "jose"
    },
    {
        nombre: "juan"
    },
    {
        nombre: "pedro"
    },
    {
        nombre: "eduardo"
    },
]

const botonVivo = document.getElementById("boton-vivo")
const botonDesconectar = document.getElementById("boton-desconectar")
const botonActualizar = document.getElementById("boton-actualizar")
let intervalo = undefined

function refresh(){
    console.log(datos)
}

function activar() {
    console.log("activar")
    intervalo = setInterval(refresh, 3000)
}

function Desconectar(){
    console.log("desconectar")
    clearInterval(intervalo)
}

function actualizar(){
    console.log("actualizar")
    setTimeout(refresh,1000)
}

botonVivo.addEventListener("click", activar)
botonDesconectar.addEventListener("click",Desconectar)
botonActualizar.addEventListener("click",actualizar)
