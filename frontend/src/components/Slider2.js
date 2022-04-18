import React from 'react';
import {Carousel} from 'react-bootstrap';
import img1 from '../assets/featured4.png';
import img2 from '../assets/featured5.png';

function Slider() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slider;