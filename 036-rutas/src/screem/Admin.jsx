import Nav1 from './Nav1'
import { Container, Form, Button, FloatingLabel, Col } from "react-bootstrap"
import { useState } from 'react'

function Admin() {

    // Estado del Input
const [ name, setName ] = useState("")
const [ descripcion, setDescripcion ] = useState("")


// funciones
    const limpiarInput = () => {
        setName("")
        setDescripcion("")
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        alert("reseta creada")
        limpiarInput()
    }
    // funcion que detecta el cambio del input
    const handleChangeName = (event) => {
        setName(event.target.value)
    }

    const handleChangeDescripcion = (event) => {
        setDescripcion(event.target.value)
    }

    return (
        <div>
            <Nav1 />
            <Container className='mt-3 text-white d-flex justify-content-center'>
                <Col xs={12} md={8} lg={6}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Titulo</Form.Label>
                            <Form.Control type="text"
                                        placeholder="titulo"
                                        // definir la funcion que se encarga de almacenar los change o cambios
                                        onChange={handleChangeName}
                                        // definir value
                                        value={name}
                                        required
                                        />
                            <Form.Text className="text-white">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Publicado?" />
                        </Form.Group>
                        <FloatingLabel controlId="floatingTextarea2" label="Comments">
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '150px' }}
                                onChange={handleChangeDescripcion}
                                value={descripcion}
                                required
                            />
                        </FloatingLabel>
                        <div className='d-flex justify-content-center'>
                            <Button variant="danger" type="submit" className='mt-3 px-5'>
                                Cargar
                            </Button>
                        </div>
                    </Form>
                </Col>

            </Container>
        </div>
    )
}

export default Admin
