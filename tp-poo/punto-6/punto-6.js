class Libro{
    isbn;
    titulo;
    autor;
    numeroPaginas;

    constructor(isbn, titulo, autor, numeroPaginas){
        this.isbn = isbn
        this.titulo = titulo
        this.autor = autor
        this.numeroPaginas = numeroPaginas
    }

    set cambioIsbn(nuevoIsbn){
        this.isbn = nuevoIsbn
    }

    set cambioTitulo(nuevoTitulo){
        this.titulo = nuevoTitulo
    }

    set cambioAutor(nuevoAutor){
        this.isbn = nuevoAutor
    }

    set cambioPaginas(nuevoPag){
        this.numeroPaginas = nuevoPag
    }

    mostrarLibro(){
        return document.write( `<h2>El Libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene ${this.numeroPaginas} paginas</h2>`)
    }
}

let libros = []

let libro1 = new Libro(9786074572520, "Burlar al Diablo", "Napoleon Hill", 305)
let libro2 = new Libro(5236074576985, "el codigo de las mentes", "vishen lakiane", 345)

libros.push(libro1)
libros.push(libro2)

for (let i = 0; i < libros.length; i++) {
    libros[i].mostrarLibro()
    
}

