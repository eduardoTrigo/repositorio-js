// import React from 'react'
// // import { Card } from 'react-bootstrap'


//         <Card>
//             <Card.Body>{texto}</Card.Body>
//         </Card>
// export default FormList

import React from 'react'
import { useState } from 'react'

const FormList = () => { 
    const [listaTareas , setListaTareas] = useState("")
    const [tareas , setTarea] = useState("")   

    const handleSubmit = (event) => {
        event.preventDefault();
        setListaTareas([...listaTareas,tareas])
        setTarea("")
    }

    const deleteTarea = ()=>{
        
    }
  return (
    <div>FormList</div>
  )
}

export default FormList