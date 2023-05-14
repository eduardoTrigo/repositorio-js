// Clases
class Contact{
    nombre;
    numTelefono;

    constructor (name, phoneNumber){
        this.nombre = name
        this.numTelefono = phoneNumber
    }
}

class Agenda {
    contactos;
    constructor () {
        this.contactos = []
    }

    agregarContactos(contacto){
        this.contactos.push(contacto)
    }
}

// VARIABLES
const agenda = new Agenda()
const form = document.getElementById("form")
const limpiar = document.getElementById("limpiar")
const nombreInput = document.getElementById("nombre")
const numeroInput = document.getElementById("numero")
const mostrar = document.getElementById("mostrar")

// FUNCIONES
function GuardarAgenda(){
    const agendaJson = JSON.stringify(agenda)
    localStorage.setItem("agenda" , agendaJson)
}

function mostrarAgenda(event) {
    event.preventDefault()

    const agendaJson = localStorage.getItem("agenda")
    const agendaParseada = JSON.parse(agendaJson)

    console.log(agendaParseada)
}

function limpiarInput() {

    nombreInput.value = ""
    numeroInput.value = ""
}

function crearContacto(event) {
    event.preventDefault()

    const nombre = nombreInput.value
    const numero = numeroInput.value

    const nuevoContacto = new Contact(nombre,numero)

    agenda.agregarContactos(nuevoContacto)

    GuardarAgenda()

    limpiarInput()
}

function botonLimpiar(event){
    event.preventDefault()

    limpiarInput()
}

// EVENTOS
form.addEventListener("submit",crearContacto)
limpiar.addEventListener('click',botonLimpiar)
mostrar.addEventListener('click',mostrarAgenda)