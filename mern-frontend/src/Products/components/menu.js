import React from 'react'
import { Navbar, Container, Nav, NavDropdown, Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons'

const MenuInicial = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Tienda-Virtual</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Productos"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1" className='d-flex justify-content-center' ><div className='p-1'><box-icon name='user-voice' ></box-icon></div>Bebidas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1" className='d-flex justify-content-center' ><div className='p-1'><box-icon name='user-voice' ></box-icon></div>Bebidas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.1" className='d-flex justify-content-center' ><div className='p-1'><box-icon name='user-voice' ></box-icon></div>Bebidas</NavDropdown.Item>
              
              
            </NavDropdown>
            <Nav.Link href="#pricing">Home</Nav.Link>

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
  )
};

export default MenuInicial