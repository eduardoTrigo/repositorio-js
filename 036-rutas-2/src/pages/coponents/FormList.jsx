
import { Form, Button, Card } from 'react-bootstrap'


//         <Card>
//             <Card.Body>{texto}</Card.Body>
//         </Card>
// export default FormList

import React from 'react'
import { useState } from 'react'


const FormList = () => {
    const [listaTareas, setListaTareas] = useState([])
    const [tareas, setTarea] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        setListaTareas([...listaTareas, tareas])

        setTarea("")

    }

    const handleChangeName = (event) => {
        setTarea(event.target.value)
    }

    const deleteLista = (nombreTarea) => {
        let nuevaLista = listaTareas.filter((item) => {
            return item !== nombreTarea
        })
        setListaTareas(nuevaLista)
    }

    return (
        <>
            <Form className="text-center " onSubmit={handleSubmit}>
                <Form.Label className='text-white '>Tareas</Form.Label>
                <Form.Control className='my-2' placeholder="Ingrese una Tarea"
                    onChange={handleChangeName}
                    value={tareas} required />
                <Button variant={tareas ? "primary" : "danger"}
                    disabled={!tareas}
                    type='submit'>Agregar</Button>
            </Form>
            <div>
                
                    {listaTareas.map(( tarea) => (
                    <Card className='my-2 '>
                        <Card.Body className=' d-flex justify-content-between'>{tarea}<Button variant='danger' onClick={() => deleteLista(tarea)}>x</Button></Card.Body>
                    </Card>
                    ))}
                
            </div>
        </>

    )

}

export default FormList