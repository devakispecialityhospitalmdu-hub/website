import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import  "./svg.css";
import Sidebar from './sidebar';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import AbtDrop from './abtdrop';
import AbtDrop1 from './abtdrop1';
import AbtDrop2 from './abtdrop2';
import Dropdown from './dropdown';
import Dropdown1 from './dropdown1';
import Dropdown2 from './dropdown2';
import Dropdown3 from './dropdown3';
import AbtDrop3 from './abtdrop3';

	const Facilities = () => {
		return (
		  
			<>

			<div className="page-wrapper">
					{/*<div className="preloader"></div>*/}
			<header className="main-header header-style-two">
				        <div className="header-top-two">
				            <div className="auto-container">
				                <div className="inner-container">
				                    <div className="top-left">
				                        <ul className="contact-list clearfix">
				                            <li><i className="flaticon-hospital-1"></i>26, Theni Main Road, <br></br> Arasaradi, Madurai </li>
				                            <li><i className="flaticon-back-in-time"></i>24*7<br></br></li>
				                        </ul>
				                    </div>
				                    <div className="top-right">
				                        <ul className="social-icon-one">
				                            <li><a href="https://www.youtube.com/channel/UCDRHhVdtq1OhYv894_Bzg9A/" target="_blank"><span className="fab fa-youtube"></span></a></li>
				                            <li><a href="https://www.facebook.com/profile.php?id=100064183981136/" target="_blank"><span className="fab fa-facebook"></span></a></li>
				                            <li><a href="https://twitter.com/devakiShospital" target="_blank"><span className="fab fa-twitter"></span></a></li>

				                            <li><a href="https://www.instagram.com/devakispecialityhospital/" target="_blank"><i className="fab fa-instagram"></i></a></li>

				                           

				                            <li><a href="mailto:mail@devakihospital.com"><span className="fab flaticon-email"></span></a></li>
				                        </ul>
				                        <div className="btn-box">

				        					{/*<BasicModal></BasicModal>*/}
				                            
				                        </div>
				                    </div>
				                </div>
				            </div>
				        </div>
				        <div className="header-lower ">
				            <div className="auto-container"> 
				                <div className="main-box">
				                    <div className="logo-box">
				                        <div className="logo"><a href=" /"><img  className="logoheader" src="assets/images/logodev.png" alt="" title=""/></a></div>
				                    </div>

				                    <div className="nav-outer headernav">
				                        <nav className="nav main-menu">
				                            <ul className="navigation" id="navbar">

				                                {/*<li >
				                                    <a href="/"><specialities>Home</span></a>
				                                </li>*/}

				                                <li >
				                                    <a href="about"><span>About</span></a>
				                                </li>
				                                <li className="dropdown">
				                                    <AbtDrop></AbtDrop>
				                                </li>
				                                <li className="dropdown">
				                                    {/*<span>Patient Care Services</span>
				                                    <ul>
				                                        <li><a href="services">24*7 Services</a></li>
				                                        <li><a href="masterhc">Master Health Check-up</a></li>
				                                        <li><a href="tpa">Insurance Providers</a></li>
				                                        <li><a href="pg">Patient Guidelines</a></li>
				                                        <li><a href="bed">Categories Of Bed</a></li>
											          	<li><a href="adminpolicy">Admission Policy</a></li>
											          	<li><a href="billpolicy">Billing Policy</a></li>
											          	<li><a href="visitorinfo">Visitors & Care Takers Info</a></li>  
				                                    </ul>*/}
				                                    <AbtDrop1></AbtDrop1>
				                                </li>
				                                
				                                {/*<li>
				                                    <a href="gallery"><span>Gallery</span></a>
				                                </li>
				                                <li>
				                                    <a href="review"><span>Review</span></a>
				                                </li>*/}
				                                <li className="dropdown current">
				                                    {/*<span>Our Services</span>
				                                    <ul>
				                                        <li><a href="facilities">Facilities</a></li>
				                                        <li><a href="lab">Laboratory</a></li>
				                                    </ul>*/}
				                                    <AbtDrop2></AbtDrop2>
				                                </li>
				                                {/*<li>
				                                    <a href="news"><span>News & Media</span></a>
				                                </li>*/}
				                                    <AbtDrop3></AbtDrop3>
				                                <li>
				                                    <a href="career"><span>Career</span></a>
				                                </li>
				                                <li>
				                                    <a href="contact"><span>Contact</span></a>
				                                </li>
				                            </ul>
				                        </nav>

				                        <div className="outer-box">
				                            { /*<button className="search-btn"><span className="fa fa-search"></span></button>*/ }
				                            { /*<BasicModal></BasicModal>*/ }
				                            
				                        </div>
				                    </div>
				                </div>
				            </div>
				        </div>

				        <div className="sticky-header animated slideInDown">
				            <div className="auto-container">    
				                <div className="main-box">
				                    <div className="logo-box">
				                        <div className="logo"><a href=" "><img className="logoscroll"  src="assets/images/logodev.png" alt="" title=""/></a></div>
				                    </div>
				                    <div className="col-lg-2"></div>
			                    	<nav className="nav main-menu">
				                            <ul className="navigation" id="navbar">
				                                {/*<li className="current">
				                                    <a href="/"><specialities>Home</span></a>
				                                </li>*/}

				                                <li>
				                                    <a href="about"><span>About</span></a>
				                                </li>
				                                <li className="dropdown">
				                                    <Dropdown></Dropdown>
				                                    
				                                </li>
				                                <li className="dropdown">
				                                    {/*<span>Patient Care Services</span>
				                                    <ul>
				                                        <li><a href="services">24*7 Services</a></li>
				                                        <li><a href="masterhc">Master Health Check-up</a></li>
				                                        <li><a href="tpa">Insurance Providers</a></li>
				                                        <li><a href="pg">Patient Guidelines</a></li>
				                                        <li><a href="bed">Categories Of Bed</a></li>
											          	<li><a href="adminpolicy">Admission Policy</a></li>
											          	<li><a href="billpolicy">Billing Policy</a></li>
											          	<li><a href="visitor+xjkkinfo">Visitors & Care Takers Info</a></li>
				                                    </ul>*/}
				                                    <Dropdown1></Dropdown1>
				                                </li>
				                                
				                                {/*<li>
				                                    <a href="gallery"><span>Gallery</span></a>
				                                </li>
				                                <li>
				                                    <a href="review"><span>Review</span></a>
				                                </li>*/}
				                                <li className="dropdown">
				                                    {/*<span>Our Services</span>
				                                    <ul>
				                                        <li><a href="facilities">Facilities</a></li>
				                                        <li><a href="lab">Laboratory</a></li>
				                                    </ul>*/}
				                                    <Dropdown2></Dropdown2>
				                                </li>
				                               {/*<li>
				                                    <a href="news"><span>News & Media</span></a>
				                                </li>*/}
				                                    <Dropdown3></Dropdown3>
				                                <li>
				                                    <a href="career"><span>Career</span></a>
				                                </li>
				                                <li>
				                                    <a href="contact"><span>Contact</span></a>
				                                </li>
				                            </ul>
				                        </nav>
				                </div>
				            </div>
				        </div>
				        <div className="mobile-header">
				            <div className="logo"><a href="/"><img  className="logoheader" src="assets/images/logodev.png" alt="" title=""/></a></div>
				           <div className="nav-outer text-center">
				                {/*<div className="outer-box">
				                    <div className="search-box">
				                        <button className="search-btn mobile-search-btn"><i className="flaticon-magnifying-glass"></i></button>
				                    </div>
				                    <a href="#nav-mobile" className="mobile-nav-toggler navbar-trigger"><span className="fa fa-bars"></span></a>
				                </div>*/}
				                <div id="outer-container">
      								<div id="page-wrap">
				                <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
				                </div>
				                </div>
				            </div>
				        </div>
				        <div id="nav-mobile"></div>
				        <div className="search-popup">
				            <span className="search-back-drop"></span>
				            <button className="close-search"><span className="fa fa-times"></span></button>
				            
				            <div className="search-inner">
				                <form method="post" action="blog-showcase">
				                    <div className="form-group">
				                        <input type="text" name="search-field" placeholder="Search..." required=""/>
				                        <button type="submit"><i className="flaticon-magnifying-glass"></i></button>
				                    </div>
				                </form>
				            </div>
				        </div>
				        <div className="sidebar-cart">
				            <span className="cart-back-drop"></span>
				            <div className="shopping-cart">
				                <div className="cart-header">
				                    <div className="title">Shopping Cart <span>(3)</span></div>
				                    <button className="close-cart"><span className="flaticon-add"></span></button>
				                </div>
				                <ul className="shopping-cart-items">
				                    <li className="cart-item">
				                        <img src="assets/images/resource/products/product-thumb-1.jpg" alt="#" className="thumb" />
				                        <span className="item-name">First Aid Kit</span>
				                        <span className="item-quantity">1 x <span className="item-amount">50.00</span></span>
				                        
				                        <button className="remove">Remove</button>
				                    </li>

				                    <li className="cart-item">
				                        <img src="assets/images/resource/products/product-thumb-2.jpg" alt="#" className="thumb"  />
				                        <span className="item-name">Vitamin Tablet</span>
				                        <span className="item-quantity">1 x <span className="item-amount">25.00</span></span>
				                        
				                        <button className="remove">Remove</button>
				                    </li>

				                    <li className="cart-item">
				                        <img src="assets/images/resource/products/product-thumb-3.jpg" alt="#" className="thumb"  />
				                        <span className="item-name">Zinc Tablet</span>
				                        <span className="item-quantity">1 x <span className="item-amount">15.00</span></span>
				                        
				                        <button className="remove">Remove</button>
				                    </li>
				                </ul>

				                <div className="cart-footer">
				                    <div className="shopping-cart-total"><strong>Subtotal:</strong> 90.00</div>
				                    <a href="shopping-cart" className="theme-btn btn-style-three"><span className="btn-title">View Cart</span></a>
				                    <a href="checkout" className="theme-btn btn-style-one"><span className="btn-title">Checkout</span></a>
				                </div>
				            </div> 
				        </div>
				    </header>
				    <section className="page-title" style={{backgroundImage: `url("assets/images/contact/header.jpg")`}}>
				        <div className="auto-container">
				            <div className="title-outer">
				                <h1>Facilities</h1>
				                <ul className="page-breadcrumb">
				                    <li><a href="/">Home</a></li>
				                    <li>Our Services</li>
				                    <li>Facilities</li>
				                </ul> 
				            </div>
				        </div>
				    </section>

				    <section className="services-section pt-5">
				        <div className="auto-container">
				            <div className="row">
				            	<div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/usg.png" alt=""/></span>
				                        <h5>4D Ultra Sound Sonogram - USG</h5>
				                    </div>
				                </div>	
				                <div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/doppler.png" alt=""/></span>
				                        <h5>2.M-Mode, 2-D / 3-D Color Doppler</h5>
				                    </div>
				                </div>
				                <div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/mri.png" alt=""/></span>
				                        <h5>MRI (1.5 TESLA)</h5>
				                    </div>
				                </div>
				                <div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/cathlab.png" alt=""/></span>
				                        <h5>Cath Lab</h5>
				                    </div>
				                </div>
				                <div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/tomo.png" alt=""/></span>
				                        <h5>CT Scan ( 128 SLICE)</h5>
				                    </div>
				                </div>
				                <div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/tomo.png" alt=""/></span>
				                        <h5>CT Scan ( 64 SLICE)</h5>
				                    </div>
				                </div>
				                <div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/ecg.png" alt=""/></span>
				                        <h5>ECG</h5>
				                    </div>
				                </div>
				                <div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/echo.png" alt=""/></span>
				                        <h5>ECHO – Pediatric / Adult / TEE </h5>
				                    </div>
				                </div>
				                <div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/tmt.png" alt=""/></span>
				                        <h5>Tread Mill Exercise Stress Test - TMT</h5>
				                    </div>
				                </div>
				                <div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/holter.png" alt=""/></span>
				                        <h5>Holter Monitor</h5>
				                    </div>
				                </div>
				                <div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/pacemaker.png" alt=""/></span>
				                        <h5>PaceMaker Facility With C-Arm</h5>
				                    </div>
				                </div>
				                <div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/bronchoscopy.png" alt=""/></span>
				                        <h5>Bronchoscopy</h5>
				                    </div>
				                </div>
				                <div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/endoscopy.png" alt=""/></span>
				                        <h5>Endoscopy</h5>
				                    </div>
				                </div>
				                <div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/colonoscopy.png" alt=""/></span>
				                        <h5>Colonoscopy</h5>
				                    </div>
				                </div>
				                <div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/cyst.png" alt=""/></span>
				                        <h5>Cystoscopy</h5>
				                    </div>
				                </div>
				                <div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/uretero.png" alt=""/></span>
				                        <h5>Ureteroscopy</h5>
				                    </div>
				                </div>
				                <div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/laminar.png" alt=""/></span>
				                        <h5>Laminar Flow Operation Theatres</h5>
				                    </div>
				                </div>
				                <div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/eeg.png" alt=""/></span>
				                        <h5>EEG/EMG</h5>
				                    </div>
				                </div>
				                <div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/xray.png" alt=""/></span>
				                        <h5>Fluoroscopy</h5>
				                    </div>
				                </div>
				                <div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/mammogram.png" alt=""/></span>
				                        <h5>Digital Mammogram</h5>
				                    </div>
				                </div>
				                <div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/ercp.png" alt=""/></span>
				                        <h5>ERCP</h5>
				                    </div>
				                </div>
				                <div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/laporoscopy.png" alt=""/></span>
				                        <h5>Laparoscopy (3D – HD)</h5>
				                    </div>
				                </div>
				                <div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/litho.png" alt=""/></span>
				                        <h5>Lithotripsy</h5>
				                    </div>
				                </div>
				                <div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/c-arm.png" alt=""/></span>
				                        <h5>C-Arm</h5>
				                    </div>
				                </div>
				                <div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/physio.png" alt=""/></span>
				                        <h5>PhysioTherapy</h5>
				                    </div>
				                </div>
				                <div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/dental.png" alt=""/></span>
				                        <h5>Dental</h5>
				                    </div>
				                </div>
				                <div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/ent.png" alt=""/></span>
				                        <h5>ENT</h5>
				                    </div>
				                </div>
				                <div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/pulmono.png" alt=""/></span>
				                        <h5>Pulmonary Function Test</h5>
				                    </div>
				                </div>
				                <div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/mobilexray.png" alt=""/></span>
				                        <h5>Digital Mobile X-Ray</h5>
				                    </div>
				                </div>
				                <div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/xray.png" alt=""/></span>
				                        <h5>Digital X-Ray</h5>
				                    </div>
				                </div>
				                <div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/brachy.png" alt=""/></span>
				                        <h5>Brachy Treatment</h5>
				                    </div>
				                </div>
				                <div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/chemo.png" alt=""/></span>
				                        <h5>Chemotherapy</h5>
				                    </div>
				                </div>
				                <div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/radiation.png" alt=""/></span>
				                        <h5>Radiation Therapy</h5>
				                    </div>
				                </div>
				                <div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/dialysi.png" alt=""/></span>
				                        <h5>Dialysis Unit – Negative / B - Positive / C-Positive</h5>
				                    </div>
				                </div>
				                <div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/sterile.png" alt=""/></span>
				                        <h5>Central Sterile Service Department (CSSD)</h5>
				                    </div>
				                </div>
				                <div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/oxygen.png" alt=""/></span>
				                        <h5>Centralised Oxygen Generator Plant </h5>
				                    </div>
				                </div>
				                <div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/bmw.png" alt=""/></span>
				                        <h5>Biomedical Waste Management (BMW)</h5>
				                    </div>
				                </div>
				            </div>
				        </div>
					</section>
				                
				            <div className="facilities">
				        <h4 className="text-center mt-3">General Facilities Avail at Devaki Specialty Hospital</h4><br></br>
				            <ul className="social-icon-four mt-3">
				                    {['top'].map((placement) => (
								        <OverlayTrigger key={placement} placement={placement} overlay={<Tooltip id={`tooltip-${placement}`}>
								            <strong>Help Desk /Enquiry</strong>
								        </Tooltip>
									}
        							>
          							<li><img src="assets/images/facilities/help.png" alt=""/></li>
        								</OverlayTrigger>
      								))}
      								{['top'].map((placement) => (
								        <OverlayTrigger key={placement} placement={placement} overlay={<Tooltip id={`tooltip-${placement}`}>
								            <strong>R.O Drinking Water</strong>
								        </Tooltip>
									}
        							>
          							<li><img src="assets/images/facilities/water.png" alt=""/></li>
        								</OverlayTrigger>
      								))}
      								{['top'].map((placement) => (
								        <OverlayTrigger key={placement} placement={placement} overlay={<Tooltip id={`tooltip-${placement}`}>
								            <strong>Solar Water Heater</strong>
								        </Tooltip>
									}
        							>
          							<li><img src="assets/images/facilities/solar.png" alt=""/></li>
        								</OverlayTrigger>
      								))}
      								{['top'].map((placement) => (
								        <OverlayTrigger key={placement} placement={placement} overlay={<Tooltip id={`tooltip-${placement}`}>
								            <strong>Fire Hydrant & Extinguisher</strong>
								        </Tooltip>
									}
        							>
          							<li><img src="assets/images/facilities/fire.png" alt=""/></li>
        								</OverlayTrigger>
      								))}
      								{['top'].map((placement) => (
								        <OverlayTrigger key={placement} placement={placement} overlay={<Tooltip id={`tooltip-${placement}`}>
								            <strong>Parking</strong>
								        </Tooltip>
									}
        							>
          							<li><img src="assets/images/facilities/parking.png" alt=""/></li>
        								</OverlayTrigger>
      								))}
      								{['top'].map((placement) => (
								        <OverlayTrigger key={placement} placement={placement} overlay={<Tooltip id={`tooltip-${placement}`}>
								            <strong>CCTV Surveillance</strong>
								        </Tooltip>
									}
        							>
          							<li><img src="assets/images/facilities/cctv.png" alt=""/></li>
        								</OverlayTrigger>
      								))}
      								{['top'].map((placement) => (
								        <OverlayTrigger key={placement} placement={placement} overlay={<Tooltip id={`tooltip-${placement}`}>
								            <strong>Lift</strong>
								        </Tooltip>
									}
        							>
          							<li><img src="assets/images/facilities/lift.png" alt=""/></li>
        								</OverlayTrigger>
      								))}
      								{['top'].map((placement) => (
								        <OverlayTrigger key={placement} placement={placement} overlay={<Tooltip id={`tooltip-${placement}`}>
								            <strong>Ramp Access</strong>
								        </Tooltip>
									}
        							>
          							<li><img src="assets/images/facilities/ramp.png" alt=""/></li>
        								</OverlayTrigger>
      								))}
      								{['top'].map((placement) => (
								        <OverlayTrigger key={placement} placement={placement} overlay={<Tooltip id={`tooltip-${placement}`}>
								            <strong>A/C Rooms / Lounges</strong>
								        </Tooltip>
									}
        							>
          							<li><img src="assets/images/facilities/ac.png" alt=""/></li>
        								</OverlayTrigger>
      								))}
      								{['top'].map((placement) => (
								        <OverlayTrigger key={placement} placement={placement} overlay={<Tooltip id={`tooltip-${placement}`}>
								            <strong>TV Provisions</strong>
								        </Tooltip>
									}
        							>
          							<li><img src="assets/images/facilities/tv.png" alt=""/></li>
        								</OverlayTrigger>
      								))}
      								{['top'].map((placement) => (
								        <OverlayTrigger key={placement} placement={placement} overlay={<Tooltip id={`tooltip-${placement}`}>
								            <strong>Wi-Fi Access</strong>
								        </Tooltip>
									}
        							>
          							<li><img src="assets/images/facilities/wifi.png" alt=""/></li>
        								</OverlayTrigger>
      								))}
      								{['top'].map((placement) => (
								        <OverlayTrigger key={placement} placement={placement} overlay={<Tooltip id={`tooltip-${placement}`}>
								            <strong>Accommodation Assistance</strong>
								        </Tooltip>
									}
        							>
          							<li><img src="assets/images/facilities/accomodation.png" alt=""/></li>
        								</OverlayTrigger>
      								))}
      								{['top'].map((placement) => (
								        <OverlayTrigger key={placement} placement={placement} overlay={<Tooltip id={`tooltip-${placement}`}>
								            <strong>Travel Assistance’s</strong>
								        </Tooltip>
									}
        							>
          							<li><img src="assets/images/facilities/travel.png" alt=""/></li>
        								</OverlayTrigger>
      								))}
      								{['top'].map((placement) => (
								        <OverlayTrigger key={placement} placement={placement} overlay={<Tooltip id={`tooltip-${placement}`}>
								            <strong>Appointment scheduling</strong>
								        </Tooltip>
									}
        							>
          							<li><img src="assets/images/facilities/appoinment.png" alt=""/></li>
        								</OverlayTrigger>
      								))}
      								{['top'].map((placement) => (
								        <OverlayTrigger key={placement} placement={placement} overlay={<Tooltip id={`tooltip-${placement}`}>
								            <strong>Personal escort appointments</strong>
								        </Tooltip>
									}
        							>
          							<li><img src="assets/images/facilities/medical.png" alt=""/></li>
        								</OverlayTrigger>
      								))}
      								{['top'].map((placement) => (
								        <OverlayTrigger key={placement} placement={placement} overlay={<Tooltip id={`tooltip-${placement}`}>
								            <strong>Personalized care</strong>
								        </Tooltip>
									}
        							>
          							<li><img src="assets/images/facilities/care.png" alt=""/></li>
        								</OverlayTrigger>
      								))}
      								{['top'].map((placement) => (
								        <OverlayTrigger key={placement} placement={placement} overlay={<Tooltip id={`tooltip-${placement}`}>
								            <strong>Follow-ups scheduling</strong>
								        </Tooltip>
									}
        							>
          							<li><img src="assets/images/facilities/followup.png" alt=""/></li>
        								</OverlayTrigger>
      								))}
      								{['top'].map((placement) => (
								        <OverlayTrigger key={placement} placement={placement} overlay={<Tooltip id={`tooltip-${placement}`}>
								            <strong>Insurance Payment processing</strong>
								        </Tooltip>
									}
        							>
          							<li><img src="assets/images/facilities/insurance.png" alt=""/></li>
        								</OverlayTrigger>
      								))}
      								{['top'].map((placement) => (
								        <OverlayTrigger key={placement} placement={placement} overlay={<Tooltip id={`tooltip-${placement}`}>
								            <strong>Financial Counselling</strong>
								        </Tooltip>
									}
        							>
          							<li><img src="assets/images/facilities/finance.png" alt=""/></li>
        								</OverlayTrigger>
      								))}
      								{['top'].map((placement) => (
								        <OverlayTrigger key={placement} placement={placement} overlay={<Tooltip id={`tooltip-${placement}`}>
								            <strong>Leave Letters</strong>
								        </Tooltip>
									}
        							>
          							<li><img src="assets/images/facilities/letter.png" alt=""/></li>
        								</OverlayTrigger>
      								))}
      								{['top'].map((placement) => (
								        <OverlayTrigger key={placement} placement={placement} overlay={<Tooltip id={`tooltip-${placement}`}>
								            <strong>Canteen</strong>
								        </Tooltip>
									}
        							>
          							<li><img src="assets/images/facilities/canteen.png" alt=""/></li>
        								</OverlayTrigger>
      								))}
      								{['top'].map((placement) => (
								        <OverlayTrigger key={placement} placement={placement} overlay={<Tooltip id={`tooltip-${placement}`}>
								            <strong>Laundry</strong>
								        </Tooltip>
									}
        							>
          							<li><img src="assets/images/facilities/washing.png" alt=""/></li>
        								</OverlayTrigger>
      								))}
      								{['top'].map((placement) => (
								        <OverlayTrigger key={placement} placement={placement} overlay={<Tooltip id={`tooltip-${placement}`}>
								            <strong>Housekeeping and Janitors</strong>
								        </Tooltip>
									}
        							>
          							<li><img src="assets/images/facilities/housekeeping.png" alt=""/></li>
        								</OverlayTrigger>
      								))}
      								{['top'].map((placement) => (
								        <OverlayTrigger key={placement} placement={placement} overlay={<Tooltip id={`tooltip-${placement}`}>
								            <strong>Security service</strong>
								        </Tooltip>
									}
        							>
          							<li><img src="assets/images/facilities/security.png" alt=""/></li>
        								</OverlayTrigger>
      								))}
								</ul>
								</div>
								
								<footer className="main-footer">
			        <div className="widgets-section" >
			            <div className="auto-container">
			                <div className="row">
			                    <div className="big-column col-xl-6 col-lg-12 col-md-12 col-sm-12">
			                        <div className="row">
			                            <div className="footer-column col-xl-7 col-lg-6 col-md-6 col-sm-12">
			                                <div className="footer-widget about-widget">
			                                    <div className="logo">
			                                         <a href=" / "><img className="logoheader1" src="assets/images/logodev.png" alt="" /></a>
			                                    </div>
			                                    <div className="text">
			                                        <p>Devaki specialty hospital was established by Dr. P. S. Nagendiran, M.B.B.S. & Dr. K. Devaki M.B.B.S. D.M.R.D. We can provide the following facilities: 150 bedded hospitals, an airconditioned operation theatre, pharmacy attached to the hospital, ECG & clinical laboratory facilities.</p>
			                                    </div>
			                                    <ul className="social-icon-three">
			                                        <li><a href="https://www.youtube.com/channel/UCDRHhVdtq1OhYv894_Bzg9A/" target="_blank"> <i className="fab fa-youtube"></i></a></li>
			                                        <li><a href="https://www.instagram.com/devaki_speciality_mdu/" target="_blank"><i className="fab fa-instagram"></i></a></li>
			                                        <li><a href="https://www.facebook.com/profile.php?id=100064183981136/" target="_blank"><i className="fab fa-facebook"></i></a></li>
				                            		<li><a href="https://twitter.com/devakiShospital" target="_blank"><i className="fab fa-twitter"></i></a></li>
			                                        <li><a href="mailto:mail@devakihospital.com"><i className="fab flaticon-email"></i></a></li>
			                                    </ul>
			                                </div>
			                            </div>
			                            <div className="footer-column col-xl-5 col-lg-6 col-md-6 col-sm-12">
			                                <div className="footer-widget">
			                                   <h2 className="widget-title">Pages</h2>
			                                    <ul className="user-links">
			                                        <li><a href="about">About</a></li>
			                                        <li><a href="specialities">Specialities</a></li>
			                                        <li><a href="services">Patient Care Services</a></li>
			                                        <li><a href="facilities">Our Services</a></li>
			                                        
			                                        <li><a href="career">Career</a></li>
			                                        <li><a href="contact">Contact</a></li>
			                                    </ul>
			                                </div>
			                            </div>
			                        </div>
			                    </div>
			                    <div className="big-column col-xl-6 col-lg-12 col-md-12 col-sm-12">
			                        <div className="row">
			                            <div className="footer-column col-lg-6 col-md-6 col-sm-12">
			                                {/*<div className="footer-widget recent-posts">
			                                    <h2 className="widget-title">Latest News</h2>
			                                    <div className="widget-content">
			                                        <div className="post">
			                                            <div className="thumb"><a ><img src="assets/images/favicon.png" alt=""/></a></div>
			                                            <h4><a >Integrative Medicine <br></br>& Cancer Treatment.</a></h4>
			                                            <span className="date">July 11, 2020</span>
			                                        </div>

			                                        <div className="post">
			                                            <div className="thumb"><a ><img src="assets/images/favicon.png" alt=""/></a></div>
			                                            <h4><a >Achieving Better <br></br>Health Care Time.</a></h4>
			                                            <span className="date">August 1, 2020</span>
			                                        </div>

			                                        <div className="post">
			                                            <div className="thumb"><a ><img src="assets/images/favicon.png" alt=""/></a></div>
			                                            <h4><a >Great Health Care <br></br>For Patients.</a></h4>
			                                            <span className="date">August 1, 2020</span>
			                                        </div>
			                                    </div>
			                                </div>*/}
			                            </div>
			                            <div className="footer-column col-lg-6 col-md-6 col-sm-12">
			                                <div className="footer-widget contact-widget">
			                                    <h2 className="widget-title">Contact Us</h2>
			                                    <div className="widget-content">
			                                        <ul className="contact-list">
			                                            <li>
			                                                <span className="icon flaticon-placeholder"></span>
			                                                <div className="text">26, Theni Main Road, Arasaradi, Madurai</div>
			                                            </li>

			                                            <li>
			                                                <span className="icon flaticon-call-1"></span>
			                                                <a href="tel:+91 9600600888"><strong>Mobile:+91 9600600888 Phone:0452-2288800,31,41</strong></a>
			                                            </li>

			                                            <li>
			                                                <span className="icon flaticon-email"></span>
			                                                <div className="text">Do you have a Question?<br></br>
			                                                <a href="mailto:mail@devakihospital.com"><strong>mail@devakihospital.com</strong></a></div>
			                                            </li>

			                                            <li>
			                                                <span className="icon flaticon-back-in-time"></span>
			                                                <div className="text">Working hours:<br></br>
			                                                <strong>24*7</strong></div>
			                                            </li>
			                                        </ul>
			                                    </div>
			                                </div>
			                            </div>
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </div>
			        <div className="footer-bottom">
			            <a href="/#"><div className="scroll-to-top scroll-to-target" data-target="html"><span className="fa fa-angle-up"></span></div></a>
			            
			            <div className="auto-container">
			                <div className="inner-container clearfix">
			                    <div className="footer-nav">
			                        <ul className="clearfix">
			                           <li><a href="about">About</a></li> 
			                           <li><a href="contact">Contact</a></li> 
			                           <li><a href="career">Career</a></li>  
			                        </ul>
			                    </div>
			                    
			                    <div className="copyright-text">
			                        <p>Copyright © 2026 <a href="/#">Devaki Hospital    </a> All Rights Reserved.</p>
			                    </div>
			                </div>
			            </div>
			        </div>
				</footer>
				    </div>
</>
		);
	};

export default Facilities;