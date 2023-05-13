//class
class contacto{
    nombre;
    numeroTel;

    constructor(nombre, numeroTel){
        this.nombre = nombre
        this.numeroTel = numeroTel
    }
}

class Agenda{
    contactos;

    constructor(){
        this.contactos = []
    }
    //agregar contactos a agenda
    agregarContacto(contacto){
        this.contactos.push(contacto)
    }

    contactosIguales(nombreContacto){
        const contactoExist = this.contactos.find(function(value){
            if (value.nombre === nombreContacto) {
                return true
            }else{
                return false
            }
        })
    }
}

//Variables iniciales
const agenda = new Agenda()
const form = document.getElementById("form")
const nombreInput = document.getElementById("nombre")
const numeroInput = document.getElementById("numeroTel")
const limpiar = document.getElementById("limpiar")
const mostrar = document.getElementById("mostrar")
const agendaContainer = document.getElementById("agendaContainer")


//funciones
function guardarAgenda(){
    const agendaSerializada = JSON.stringify(agenda)
    localStorage.setItem("agenda" , agendaSerializada)
}

function limpiarInput() {

    nombreInput.value = ""
    numeroInput.value = ""
}

function agregarContacto(event){
    event.preventDefault()

    const nombre = nombreInput.value
    const numero = numeroInput.value

    const nuevocontact = new contacto(nombre, numero)

    agenda.agregarContacto(nuevocontact)

    guardarAgenda()

    limpiarInput()

    //crear la linea
    const nuevaLinea = document.createElement("li")
    const textoLinea = document.createTextNode(`Nombre: ${nombre} ; Numero: ${numero}`)
    nuevaLinea.appendChild(textoLinea)

    //agrego la linea al contenedor
    agendaContainer.appendChild(nuevaLinea)
}

function botonlimpiar(event) {
    event.preventDefault()

    limpiarInput()
}

function botonMostrar(event){
    event.preventDefault()

    const agendaSerializada = localStorage.getItem("agenda")

    const agendaParseada =JSON.parse(agendaSerializada) 
    console.log(agendaParseada)
}



// Eventos
form.addEventListener("submit", agregarContacto)
limpiar.addEventListener("click",botonlimpiar)
mostrar.addEventListener("click",botonMostrar)