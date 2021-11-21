import React, { useState, useRef } from "react";
import { Form, Button, FloatingLabel } from 'react-bootstrap'

const Formulario = ({ handleSubmit }) => {
    const [formValues, setValues] = useState({
        name: '',
        UnitaryPrice: '',
        size: '',
        description: ''
    })

    const inputFileRef = useRef()

    const handleChange = (e) => {
        const { name, value } = e.target
        console.log(name, value)
        setValues({ ...formValues, [name]: value })
    }
    /* variables privadas se coloca una barra al piso */
    const handleSubmits = (e) => {
        e.preventDefault()
        console.log({...formValues, image: inputFileRef.current.files})
        handleSubmit({...formValues, image: inputFileRef.current.files[0]})
        
    }

    return (
        <>
            <Form onSubmit={handleSubmits}>
                <Form.Group className="mb-3" >
                    <Form.Label>Name product</Form.Label>
                    <Form.Control size="lg" type="text" placeholder=""
                        name='name'
                        value={formValues.name}
                        onChange={handleChange} />
                    <Form.Text className="text-muted" >
                        Nombre del producto
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Size</Form.Label>
                    <Form.Control size="lg" type="number" placeholder=""
                        name='size'
                        value={formValues.size}
                        onChange={handleChange} />
                    <Form.Text className="text-muted" >
                        Precio unitario del producto
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Unitary Price</Form.Label>
                    <Form.Control size="lg" type="number" placeholder=""
                        name='UnitaryPrice'
                        value={formValues.UnitaryPrice}
                        onChange={handleChange} />
                    <Form.Text className="text-muted" >
                        Precio unitario del producto
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control type="file"  ref={inputFileRef} />
                </Form.Group>
                <FloatingLabel controlId="floatingTextarea" 
                label="Description" className="mb-3">
                    <Form.Control as="textarea" placeholder="Leave a comment here"
                    name='description'
                    value={formValues.description}
                    onChange={handleChange} />
                </FloatingLabel>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default Formulario