import React, {useState} from 'react'
import { Button } from 'react-bootstrap'
import { deleteProduct } from "../services";
import Botton from './Botton'
import {Modal} from 'react-bootstrap'
import Form from './Form2'

const ListProducts = ({ products }) => {

    const [show,setShow] = useState(false)
    const handleClose = () => setShow(false);

    return (
        <div className="Container mt-5">
            
            <div className="row">

                {products.map((item, index) => (

                    <div key={index} className="col mb-3">

                        <div className="card" style={{ width: "18rem" }}>
                            <img src={item.imgUrl} className="card" alt="" />
                            <div className="car-body p-2">
                                <h5 className="card-text" style={{ textAlign: 'center' }}>{item.name}</h5>
                                <hr />
                                <p style={{ textAlign: 'center' }}>Descripción: {item.description} </p>
                                <hr />
                                <p style={{ textAlign: 'center' }}>Precio: {item.UnitaryPrice} </p>
                                <div className='d-flex justify-content-between'>
                                    <Button variant="info" onClick={() => deleteProduct(item._id)}>Eliminar</Button>
                                    <Botton onClick={()=> setShow(true) }/>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}
                <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Actualizar Productos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form />
            
        </Modal.Body>
        <Modal.Footer>
         
        </Modal.Footer>
      </Modal>
            </div>
        </div>
    )
}

export default ListProducts