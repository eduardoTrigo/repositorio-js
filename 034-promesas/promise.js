
let miPrimeraPromesa = new Promise(function (resolve, reject) {
    let validacion = false;
    setTimeout(function(){
        if (validacion) {
            resolve("se ejecuto correctamente")
        } else {
            reject({
                mensajeErroneo:"falla en el server",
                motivo: "faltan datos de crdenciales"
            })
        }
    },500)
})

miPrimeraPromesa
        .then((mensajeExitoso) => alert(mensajeExitoso))
        .catch((objetoError) =>{
            alert(objetoError.mensajeErroneo)
            console.log(objetoError.motivo)
        })
