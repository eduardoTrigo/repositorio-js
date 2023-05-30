import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Form } from 'react-bootstrap'
import FormList from './coponents/FormList'
// import {  } from 'react-router-dom'

const Punto4 = () => {
    return (
        <div className='mt-3'>
            <Container>
                <Row >
                    <Col className='bg-dark mx-auto px-5 py-3' md={6}>
                        <h1 className='text-white text-center'>Biembenidos</h1>
                        <FormList/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Punto4