import React from 'react'
import { useState } from 'react'

const Punto3 = () => {

    const [msj , setmsj] = useState("")

    function handleClick() {
        setmsj("(Change State)")
    }

    return (
        <div>
            <h1>Hola Mundo {msj}</h1>
            <button onClick={handleClick}>Click</button>
        </div>
  )
}

export default Punto3