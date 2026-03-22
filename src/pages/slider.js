import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import  "./svg.css";
import ReadMoreReact from 'read-more-react';

export default function Slider() {
return (
    <div style={{ display: 'block' }}>
    <Carousel>
        <Carousel.Item >
        <img
            className="d-block w-100"
src="assets/images/main-slider/1.jpg"
            alt="Image One"
        />
        <Carousel.Caption>
        
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-5 " >
                <div className="row textslider mb-5 d-none d-lg-block">
                        <p className="titleheading">Welcome To Devaki Speciality Hospital,</p>
                        <h2 className="titlesub">We take care our patients health<br></br></h2>
                        <div className="slidetext">Devaki Speciality Hospital was established by DR. P. S. NAGENDIRAN, M.B.B.S. & DR. K. DEVAKI M.B.B.S. D.M.R.D. We are able to provide the following facilities: 100 Beded Hospital, Airconditioned Operation theatre, Pharmacy attached with the Hospital, ECG & Clinical Laboratory facilities.</div><br></br>
                        </div>
                        
                    </div>
                    <div className="btn-box buttoncss d-none d-lg-block">
                            <a href="about" className="theme-btn btn-style-one hover1  "><span className="btn-title">About Us</span></a>
                            <a href="services" className="theme-btn btn-style-two hover buttonspace1"><span className="btn-title">Our Services</span></a>
                        </div>
                    <div className="col-lg-6 col-md-6 col-sm-12"></div>
                
                                        
                                    
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
        <img
            className="d-block w-100"
src="assets/images/main-slider/2.jpg"
            alt="Image Two"
        />
        <Carousel.Caption>
            <div className="col-lg-6 col-md-6 col-sm-12 mb-5 " >
                <div className="row textslider mb-5 d-none d-lg-block">
                        <p className="titleheading">Welcome To Devaki Speciality Hospital,</p>
                        <h2 className="titlesub">We take care our patients health<br></br></h2>
                        <div className="slidetext"><b>Vision</b><br></br>Providing safest & highest Quality Healthcare to our community at an Affordable cost. <br></br><b>Mission </b> <br></br>Quality Healthcare with Humanity</div><br></br>
                        </div>
                        
                    </div>
                    <div className="btn-box buttoncss d-none d-lg-block">
                            <a href="about" className="theme-btn btn-style-one hover1 "><span className="btn-title">About Us</span></a>
                            <a href="services" className="theme-btn btn-style-two hover buttonspace1 "><span className="btn-title">Our Services</span></a>
                        </div>
                    <div className="col-lg-6 col-md-6 col-sm-12"></div>
        </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    </div>
);
}

                        