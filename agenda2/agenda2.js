class Contact {
    nombre;
    munTelefono;

    constructor (name,numTel){
        this.nombre = name
        this.munTelefono = numTel

    }
}

class Agenda{
    contactos;
    constructor(){
        this.contactos = []
    }

    agregarContacto(contacto){
        this.contactos.push(contacto)
    }
}

// variables
const agenda = new Agenda()
const form = document.getElementById("form")
const nombreInput = document.getElementById("nombre")
const numeroInput = document.getElementById("numero")
const limpiarbtn = document.getElementById("limpiar")
const btnMostrar = document.getElementById("mostrar")
const tableCont = document.getElementById("tbody")
let contadorCelda = 1
// funciones

function limpiarInput(){
    nombreInput.value = ""
    numeroInput.value = ""
}

function GuardarAgenda(){
    const agendaJson = JSON.stringify(agenda)
    localStorage.setItem("agenda2",agendaJson)
}

function mostrarAgenda(event){
    event.preventDefault()
    
    const agendaJson = localStorage.getItem("agenda2")
    const agendaParse = JSON.parse(agendaJson)

    console.log(agendaParse)
}

function crearContacto(event){
    event.preventDefault()

    const nombre = nombreInput.value
    const numero = numeroInput.value
    
    const nuevoContacto = new Contact(nombre,numero)
    agenda.agregarContacto(nuevoContacto)

    GuardarAgenda()

    limpiarInput()

    const newFila = document.createElement("tr")

    const celdaNum = document.createElement("th")
    const contCelNum = document.createTextNode(contadorCelda.toString())
    celdaNum.appendChild(contCelNum)
    newFila.appendChild(celdaNum)

    const celda1 = document.createElement("td")
    const contenidoCelda = document.createTextNode(nombre) 
    celda1.appendChild(contenidoCelda)
    newFila.appendChild(celda1)

    const celda2 = document.createElement("td")
    const contenidoCelda2 = document.createTextNode(numero) 
    celda2.appendChild(contenidoCelda2)
    newFila.appendChild(celda2)

    tableCont.appendChild(newFila)

    contadorCelda++
}

function btnLimpiar(event){
    event.preventDefault()

    limpiarInput()
}

// eventos
form.addEventListener("submit",crearContacto)
limpiarbtn.addEventListener('click',btnLimpiar)
btnMostrar.addEventListener('click',mostrarAgenda)