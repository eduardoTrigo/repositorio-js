fetch("https://rickandmortyapi.com/api/character/1")
.then((repuestaExitosa)=>{
    return repuestaExitosa.json()
})
.then((respuestaJson)=>{
    console.log(respuestaJson)
})
.catch((respuestaNegativa)=> {
    console.log(respuestaNegativa)
})