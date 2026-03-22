import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import  "./svg.css";
import ReadMoreReact from 'read-more-react';

export default function Slider1() {
return (
    <div style={{ display: 'block' }}>
    <Carousel>
        <Carousel.Item >
        <a href="/cardiothoracic" target="_blank" rel="noreferrer">
        <img
            className="d-block w-100"
src="assets/images/carousel/1.jpg"
            alt="Image One"
        />
        </a>
        
        </Carousel.Item>
        <Carousel.Item >
        <a href="/cardiology" target="_blank" rel="noreferrer">
        <img
            className="d-block w-100"
src="assets/images/carousel/2.jpg"
            alt="Image Two"
        />
        </a>
        </Carousel.Item>
        <Carousel.Item >
        <a href="/oncology" target="_blank" rel="noreferrer">
        <img
            className="d-block w-100"
src="assets/images/carousel/3.jpg"
            alt="Image One"
        />
        </a>
        </Carousel.Item>
        {/*<Carousel.Item >
        <a href="/" target="_blank" rel="noreferrer">
        <img
            className="d-block w-100"
src="assets/images/carousel/1.png"
            alt="Image Two"
        />
        </a>
        </Carousel.Item>
        <Carousel.Item >
        <a href="/" target="_blank" rel="noreferrer">
        <img
            className="d-block w-100"
src="assets/images/carousel/2.png"
            alt="Image Two"
        />
        </a>
        </Carousel.Item>
        <Carousel.Item >
        <a href="/" target="_blank" rel="noreferrer">
        <img
            className="d-block w-100"
src="assets/images/carousel/3.png"
            alt="Image Two"
        />
        </a>
        </Carousel.Item>
        <Carousel.Item >
        <a href="/nephrology" target="_blank" rel="noreferrer">
        <img
            className="d-block w-100"
src="assets/images/carousel/4.png"
            alt="Image Two"
        />
        </a>
        </Carousel.Item>*/}
    </Carousel>
    </div>
);
}

