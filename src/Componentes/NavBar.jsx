import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import {StyleSheet} from 'react-native';
import NavDropdown from 'react-bootstrap/NavDropdown';


export const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Anne Decor</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="Ventas">Ventas</Nav.Link>
            <Nav.Link href="CrearVenta">Crear Venta</Nav.Link>
            <NavDropdown title="Seguimiento Estaciones" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Tela</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Caño</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Armado</NavDropdown.Item>
              </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
  )
};
