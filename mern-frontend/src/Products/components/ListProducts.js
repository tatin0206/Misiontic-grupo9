import React from "react";

const ListProducts = ({ products }) => {

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
                            </div>
                        </div>

                    </div>

                ))}
            </div>
        </div>
    )
}

export default ListProducts