class Cursos {
    id
    nombre
    descripcion
    publicado

    constructor(id, nombre, descripcion, publicado){
        this.id = id
        this.nombre = nombre
        this.descripcion = descripcion
        this.publicado = publicado
    }
}

class ColeccionCursos{
    cursos
    constructor(){
        this.cursos = []
    }
    agregarCursos(curso){
        this.cursos.push(curso)
    }
}

const curso1 = new ColeccionCursos()
const cursoJavascript = new Cursos(1 , "javascript" , "curso javascript", true)
const cursoHtmlCss = new Cursos(1 , "Html Css" , "curso Html y Css", false)
