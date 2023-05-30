import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const NavBarMenu = () => {
  return (
    <Navbar  bg="dark" expand="lg">
      <Container >
        <Navbar.Brand className='text-white' href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link text-danger" to="/">Home</NavLink>
            <NavLink className="nav-link text-danger" to="/About">About</NavLink>
            <NavLink className="nav-link text-danger" to="/Punto1">Punto1</NavLink>
            <NavLink className="nav-link text-danger" to="/Punto2">Punto2</NavLink>
            <NavLink className="nav-link text-danger" to="/Punto3">Punto3</NavLink>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBarMenu