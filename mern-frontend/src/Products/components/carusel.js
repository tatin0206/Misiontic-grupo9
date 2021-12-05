import React from 'react';
import image1 from './imgenes/Coca-Cola.png'
import image2 from './imgenes/pepsi.jpg'
import image3 from './imgenes/sprite.png'
import image4 from './imgenes/colombiana.png'
import image5 from './imgenes/cuatro2.jpg'
import { Carousel } from 'react-bootstrap'



const Carrusel = () => {
    return (

        <Carousel>
            <Carousel.Item>
                <img style={{ height: '500px', width: '300px' }}
                    className="d-block w-100 text-center"
                    src={image1}
                    alt="First slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: '500px', width: '100%' }}
                    className="d-block w-100 text-center"
                    src={image3}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: '500px', width: '100%' }}
                    className="d-block w-100 text-center"
                    src={image2}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: '500px', width: '100%' }}
                    className="d-block w-100 text-center"
                    src={image4}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: '500px', width: '100%' }}
                    className="d-block w-100 text-center"
                    src={image5}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>

    )
}

export default Carrusel