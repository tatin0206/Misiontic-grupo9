import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown, Accordion } from 'react-bootstrap';

import Mostrarproducts from './productos'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons'


const MenuInicial = () => {
  return (

    <BrowserRouter>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#####">Tienda-virtual</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home">contacto</Nav.Link>
              <Nav.Link href="/product">productos</Nav.Link>
              <Nav.Link href="/product">promociones</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">
                <Accordion >
                  <Nav>
                    <NavDropdown
                      id="nav-dropdown-dark-example"
                      title="Mi cuenta"
                      menuVariant="dark"
                    >

                      <NavDropdown.Item href="#action/3.1" className='d-flex justify-content-start' ><div className='m-1'><box-icon name='log-in-circle' color='white'></box-icon></div>Iniciar sesión</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Accordion>
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <box-icon name='cart' color='white' size='md'></box-icon>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
      <Routes>

        <Route exact path="/product" element={<Mostrarproducts />} />
      </Routes>

    </BrowserRouter>

  )
};

export default MenuInicial