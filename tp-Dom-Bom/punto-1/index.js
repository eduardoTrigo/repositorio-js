// variables
let numeroAleatorio = 0

// funciones
function adivinarNumero(e){
    e.preventDefault()

    if (numeroAleatorio == 0) {
        alert("INICIE EL JUEGO")
        return
    }

    if (numeroAleatorio > numeroElegido.value) {
        alert("mas")
    }else if(numeroAleatorio < numeroElegido.value){
        alert("menos")
    }else{
        alert("gano")
    }
} 

function comenzarJuego(e){
    alert("numero ALEATORIO creado")
    numeroAleatorio = Math.round(Math.random()*10)
}

// elementos html
const btnInicio = document.getElementById("inicio")
const form = document.getElementById("form")
const numeroElegido = document.getElementById("numero")
// eventos
btnInicio.addEventListener("click",comenzarJuego)
form.addEventListener("submit",adivinarNumero)
