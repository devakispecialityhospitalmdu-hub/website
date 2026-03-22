import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import  "./svg.css";
import ReadMoreReact from 'read-more-react';

export default function SliderCardio() {
return (
    <div style={{ display: 'block' }}>
    <Carousel>
        <Carousel.Item >
        <img
            className="d-block w-100"
src="assets/images/carousel/1.jpg"
            alt="Image One"
        />
        </Carousel.Item>
        <Carousel.Item >
        <img
            className="d-block w-100"
src="assets/images/carousel/2.jpg"
            alt="Image Two"
        />
        
        </Carousel.Item>
    </Carousel>
    </div>
);
}

                        