import React,{ useState ,useEffect} from 'react';
import { Button } from 'react-bootstrap'
import { deleteProduct } from "../services";


const Mostrarproducts = () => {
    const [mostrar, setMostrar] = useState([]);

    useEffect(()=>{
        fetchMostrar()
    },[]);


const fetchMostrar = async () =>{
    const data = await fetch('http://localhost:8080/v1/products');
    console.log(data)
    const mostrarList = data.json();
    setMostrar(mostrarList);
}

return (
    <div className="Container mt-5">
        
        <div className="row">

            {mostrar.map((item, index) => (

                <div key={index} className="col mb-3">

                    <div className="card" style={{ width: "18rem" }}>
                        <img src={item.imgUrl} className="card" alt="" />
                        <div className="car-body p-2">
                            <h5 className="card-text" style={{ textAlign: 'center' }}>{item.name}</h5>
                            <hr />
                            <p style={{ textAlign: 'center' }}>Descripción: {item.description} </p>
                            <div className='d-flex justify-content-between'>
                                <Button variant="info" onClick={() => deleteProduct(item._id)}>Eliminar</Button>
                                <Button variant="dark">Actualizar</Button>
                            </div>
                        </div>
                    </div>
                </div>

            ))}
        </div>
    </div>
)

}

export default Mostrarproducts;
