import React, {useState, useEffect} from 'react'
import AddButton from './AddButton'
import MenuInicial from './menu'
import Carrusel from './carusel'
import FormContacto from './Contacto'
import ListProducts from './ListProducts'
import {Modal} from 'react-bootstrap'
import Form from './Form'
import { saveProducts, getProducts} from '../services'
import Loading from "./Loading";
import 'boxicons'

const ProductLayout = () => {
    
    const [show,setShow] = useState(false)
    const handleClose = () => setShow(false);

    const [isLoading, setIsLoading]= useState(true)
    const [products, setProducts] = useState([])

    async function loadProducts () {
      const response = await getProducts()

      if (response.status === 200){
          setProducts(response.data.products)
      } 

      setIsLoading(false)
  }

    useEffect( () => {
        
        loadProducts()
    },[])

    const handleSubmit =  async (data)=>{
      await saveProducts(data)
      loadProducts()
      setShow(false)
    }
    
    return (
      
    <>

    <MenuInicial/>
    <div className="container m-5">
    <Carrusel/>
    <AddButton onClick={()=> setShow(true)}/>
        
    {
      isLoading && <Loading/>
    }
    {
      !isLoading && !products.length && ( 
      <h2 className="title has-text-centered">
        You don't have products
      </h2>)
    }
    {
      !isLoading && products.length && <ListProducts products={products} />
    }    
    
    <FormContacto/>
    
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form handleSubmit={handleSubmit}/>
            
        </Modal.Body>
        <Modal.Footer>
         
        </Modal.Footer>
      </Modal> 
   </div>
    </>
    
    )}

export default ProductLayout