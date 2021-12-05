import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Card, FloatingLabel } from 'react-bootstrap';
import 'boxicons'
import Button from '@restart/ui/esm/Button';
const FormContacto = () => {

    return (
        <footer className='bg-dark text-white'>
            <div className=' container'>
               
                <nav className='row'>
                    <ul className='col-8 list-unstyled '>
                        <li className='d-flex justify-content-between'>
                            <li>
                                <h6>Siguenos en redes sociales</h6>
                                <a href='#####'><box-icon name='whatsapp' type='logo' color='white'></box-icon></a>
                                <a href='#####'><box-icon name='telegram' type='logo' color='white'></box-icon></a>
                                <a href='#####'><box-icon name='facebook-circle' type='logo' color='white'></box-icon></a>
                                <a href='#####'><box-icon name='pinterest-alt' type='logo' color='white'></box-icon></a>

                            </li>
                            
                        </li>
                    </ul>
                    <Card style={{ width: '18rem' }} className='d-block mx-auto bg-dark text-white'>
                    <Card.Body>
                        <Card.Title className='text-center m-4'>Deja tu Contacto</Card.Title>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="Nombre" />
                                <br />
                                <Form.Control type="email" placeholder="Correo electrónico" />
                                <br />
                                <Form.Control type="text" placeholder="Teléfono" />
                                <br />
                                <FloatingLabel controlId="floatingTextarea" label="Comments" className="mb-3">
                                    <Form.Control as="textarea" placeholder="Leave a comment here" />
                                </FloatingLabel>
                                <Button>Enviar</Button>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
                </nav>
                
            </div>
        </footer>
    )
}

export default FormContacto
