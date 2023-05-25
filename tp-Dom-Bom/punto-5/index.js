let segundos = 0
let intervalo = 0

// funciones
function iniciarCronometro(e){
    intervalo = setInterval(sumarSegundos, 1000)
}

function pausarCronometro(e){
    clearInterval(intervalo)
}

function reiniciarCronometro(e){
    segundos = 0
    clearInterval(intervalo)
}

function sumarSegundos(){
    //segundos = seg + 1
    segundos++
    console.log(segundos)
}

//elementos html
const botonInicio = document.getElementById("btn-inicio")
const botonReiniciar = document.getElementById("btn-reiniciar")
const botonPausar = document.getElementById("btn-pausar")

//eventos
botonInicio.addEventListener("click",iniciarCronometro)
botonReiniciar.addEventListener("click",reiniciarCronometro)
botonPausar.addEventListener("click",pausarCronometro)