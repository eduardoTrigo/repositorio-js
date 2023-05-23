import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Nav1() {
    const [isLogged] = useState(false)

    return (
        <>
            <Navbar bg="danger" expand="lg" >
                <Container>
                    <Navbar.Brand href="/inicio" className='text-white'>MovieApp</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/inicio">inicio</Nav.Link>
                            <Nav.Link href="/Admin">Administracion</Nav.Link>
                            <NavDropdown title="Resetas" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    {
                        (isLogged)?(
                            <Nav.Link className='btn btn-light p-1' href="/logout">Logout</Nav.Link>
                        ):(
                        <>
                            <Nav.Link className='btn btn-light p-1 me-1' href="/login">Login</Nav.Link>
                            <Nav.Link className='btn btn-light p-1' href="/register">Register</Nav.Link>
                        </>
                        )
                        
                    }
                    
                </Container>
            </Navbar>
        </>
    )
}

export default Nav1