import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import  "./svg.css";
import Sidebar from './sidebar';
import AbtDrop from './abtdrop';
import AbtDrop1 from './abtdrop1';
import AbtDrop2 from './abtdrop2';
import Dropdown from './dropdown';
import Dropdown1 from './dropdown1';
import Dropdown2 from './dropdown2';
import Dropdown3 from './dropdown3';
import AbtDrop3 from './abtdrop3';

	const Services = () => {
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
				                                <li className="dropdown current">
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
				                                <li className="dropdown">
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
				                        <span className="item-quantity">1 x <span className="item-amount">$50.00</span></span>
				                        
				                        <button className="remove">Remove</button>
				                    </li>

				                    <li className="cart-item">
				                        <img src="assets/images/resource/products/product-thumb-2.jpg" alt="#" className="thumb"  />
				                        <span className="item-name">Vitamin Tablet</span>
				                        <span className="item-quantity">1 x <span className="item-amount">$25.00</span></span>
				                        
				                        <button className="remove">Remove</button>
				                    </li>

				                    <li className="cart-item">
				                        <img src="assets/images/resource/products/product-thumb-3.jpg" alt="#" className="thumb"  />
				                        <span className="item-name">Zinc Tablet</span>
				                        <span className="item-quantity">1 x <span className="item-amount">$15.00</span></span>
				                        
				                        <button className="remove">Remove</button>
				                    </li>
				                </ul>

				                <div className="cart-footer">
				                    <div className="shopping-cart-total"><strong>Subtotal:</strong> $90.00</div>
				                    <a href="shopping-cart" className="theme-btn btn-style-three"><span className="btn-title">View Cart</span></a>
				                    <a href="checkout" className="theme-btn btn-style-one"><span className="btn-title">Checkout</span></a>
				                </div>
				            </div> 
				        </div>
				    </header>

				     <section className="page-title" style={{backgroundImage: `url("assets/images/contact/header.jpg")`}}>
				        <div className="auto-container">
				            <div className="title-outer">
				                <h1>24 x 7 Services</h1>
				                <ul className="page-breadcrumb">
				                    <li><a href="/">Home</a></li>
				                    <li>Patient Care Services</li>
				                    <li>24 x 7 Services</li>
				                </ul> 
				            </div>
				        </div>
				    </section>

			<section className="services-section pt-5">
				        <div className="auto-container">
				            <div className="sec-title text-center">
				                
				                <h2>24 x 7 Services</h2>
				                <img className="svg" src="assets/images/svgimage.png" alt=""/>
				            </div>

				            <div className="row">
				                <div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/emergencycall.png" alt=""/></span>
				                        <h5><a href="/#">Emergency Casuality</a></h5>
				                    </div>
				                </div>
				                <div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/pharmacy.png" alt=""/></span>
				                        <h5><a href="/#">Pharmacy</a></h5>
				                    </div>
				                </div>

				                <div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/ambulance.png" alt=""/></span>
				                        <h5><a href="/#">Ambulance With Mobile ICU & Ventilator Facility</a></h5>
				                    </div>
				                </div>
				                <div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/lab.png" alt=""/></span>
				                        <h5><a href="/#">Advanced Computerised Laboratory</a></h5>
				                    </div>
				                </div>
				                <div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/mri.png" alt=""/></span>
				                        <h5><a href="/#">MRI SCAN (1.5 Tesla)</a></h5>
				                    </div>
				                </div>
				                <div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/tomo.png" alt=""/></span>
				                        <h5><a href="/#">CT SCAN (256Slice & 64 Slice)</a></h5>
				                    </div>
				                </div>
				            </div>
				        </div>
				        <div className="auto-container">
				            <div className="row">
				                <div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/xray.png" alt=""/></span>
				                        <h5><a href="/#">Digital X-Ray</a></h5>
				                    </div>
				                </div>
				                <div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/ecg.png" alt=""/></span>
				                        <h5><a href="/#">ECG</a></h5>
				                    </div>
				                </div>

				                <div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/c-arm.png" alt=""/></span>
				                        <h5><a href="/#">Digital C-ARM</a></h5>
				                    </div>
				                </div>
				                <div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/mobilexray.png" alt=""/></span>
				                        <h5><a href="/#">Digital Mobile X-RAY</a></h5>
				                    </div>
				                </div>
				                <div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/bloodbank.png" alt=""/></span>
				                        <h5><a href="/#">Blood Bank</a></h5>
				                    </div>
				                </div>
				                <div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/cathlab.png" alt=""/></span>
				                        <h5><a href="/#">CathLab</a></h5>
				                    </div>
				                </div>
				                {/*<div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/eeg.png" alt=""/></span>
				                        <h5><a href="/#">EEG</a></h5>
				                    </div>
				                </div>
				                <div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/ecg.png" alt=""/></span>
				                        <h5><a href="/#">ECG</a></h5>
				                    </div>
				                </div>*/}
				            </div>
				        </div>
				        <div className="auto-container">
				            <div className="row">
				                {/*<div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/echo.png" alt=""/></span>
				                        <h5><a href="/#">ECHO – Pediatric / Adult / TEE </a></h5>
				                    </div>
				                </div>*/}
				                {/*<div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/tmt.png" alt=""/></span>
				                        <h5><a href="/#">TMT</a></h5>
				                    </div>
				                </div>*/}

				                {/*<div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/endoscopy.png" alt=""/></span>
				                        <h5><a href="/#">Endoscopy</a></h5>
				                    </div>
				                </div>
				                <div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/colonoscopy.png" alt=""/></span>
				                        <h5><a href="/#">Colonoscopy</a></h5>
				                    </div>
				                </div>
				                <div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/laporoscopy.png" alt=""/></span>
				                        <h5><a href="/#">Laproscopy</a></h5>
				                    </div>
				                </div>*/}
				                
				            </div>
				        </div>

				        <div className="auto-container">
				            <div className="row">
				                <div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/trauma.png" alt=""/></span>
				                        <h5><a href="/#">Emergency & Trauma care</a></h5>
				                    </div>
				                </div>
				                <div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/dialysi.png" alt=""/></span>
				                        <h5><a href="/#">Dialysis Unit (Negative / B- Positive / C- Positive) </a></h5>
				                    </div>
				                </div>

				                <div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/endoscopy.png" alt=""/></span>
				                        <h5><a href="/#">Modular Operation Theatre – With Lab</a></h5>
				                    </div>
				                </div>
				                
				                {/*<div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/laporoscopy.png" alt=""/></span>
				                        <h5><a href="/#">Radiology</a></h5>
				                    </div>
				                </div>*/}
				                
				            </div>
				        </div>

				        <div className="auto-container">
				            <div className="row">
				            <div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/icu1.png" alt=""/></span>
				                        <h5><a href="/#">Intensive Care Unit (ICU)</a></h5>
				                    </div>
				                </div>
				                <div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/icu.png" alt=""/></span>
				                        <h5><a href="/#">General Intensive Care Unit (GICU)</a></h5>
				                    </div>
				                </div>
				                <div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/speciality/cardiothoracic.png" alt=""/></span>
				                        <h5><a href="/#">Cardiothoracic Intensive Care Unit (CTICU)</a></h5>
				                    </div>
				                </div>

				                <div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/micu.png" alt=""/></span>
				                        <h5><a href="/#">Medical Intensive Care Unit (MICU)</a></h5>
				                    </div>
				                </div>
				                <div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/speciality/surgery.png" alt=""/></span>
				                        <h5><a href="/#">Surgical Intensive Care Unit (SICU)</a></h5>
				                    </div>
				                </div>
				                {/*<div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/laporoscopy.png" alt=""/></span>
				                        <h5><a href="/#">Neonatal Intensive Care Unit (NICU)</a></h5>
				                    </div>
				                </div>*/}
				                <div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/cicu.png" alt=""/></span>
				                        <h5><a href="/#">Coronary Care Unit (CCU)</a></h5>
				                    </div>
				                </div>
				            </div>
				        </div>

				        <div className="auto-container">
				            <div className="row">
				                {/*<div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/echo.png" alt=""/></span>
				                        <h5><a href="/#">Dietary</a></h5>
				                    </div>
				                </div>
				                <div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/tmt.png" alt=""/></span>
				                        <h5><a href="/#">Canteen</a></h5>
				                    </div>
				                </div>

				                <div className="service-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon"><img src="assets/images/services/endoscopy.png" alt=""/></span>
				                        <h5><a href="/#">Endoscopy</a></h5>
				                    </div>
				                </div>*/}
				                </div>
				                </div>
				               

			</section>
			<footer className="main-footer">
			        <div className="widgets-section" style={{backgroundImage: `url("assets/images/background/7.jpg")`}}>
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

				                            <li><a href="https://www.youtube.com/channel/UCDRHhVdtq1OhYv894_Bzg9A/" target="_blank"><span className="fab fa-youtube"></span></a></li>
				                            <li><a href="https://www.facebook.com/profile.php?id=100064183981136/" target="_blank"><span className="fab fa-facebook"></span></a></li>
				                            <li><a href="https://twitter.com/devakiShospital" target="_blank"><span className="fab fa-twitter"></span></a></li>
				                            <li><a href="https://www.instagram.com/devakispecialityhospital/" target="_blank"><i className="fab fa-instagram"></i></a></li>
				                            <li><a href="mailto:mail@devakihospital.com"><span className="fab flaticon-email"></span></a></li>
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
			                                <div className="footer-widget recent-posts">
			                                    <h2 className="widget-title">Latest News</h2>
			                                    <div className="widget-content">
			                                        <div className="post">
			                                            <div className="thumb"><a><img src="assets/images/favicon.png" alt=""/></a></div>
			                                            <h4><a>Integrative Medicine <br></br>& Cancer Treatment.</a></h4>
			                                            <span className="date">July 11, 2020</span>
			                                        </div>

			                                        <div className="post">
			                                            <div className="thumb"><a><img src="assets/images/favicon.png" alt=""/></a></div>
			                                            <h4><a>Achieving Better <br></br>Health Care Time.</a></h4>
			                                            <span className="date">August 1, 2020</span>
			                                        </div>

			                                        <div className="post">
			                                            <div className="thumb"><a><img src="assets/images/favicon.png" alt=""/></a></div>
			                                            <h4><a>Great Health Care <br></br>For Patients.</a></h4>
			                                            <span className="date">August 1, 2020</span>
			                                        </div>
			                                    </div>
			                                </div>
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
			            <a href="services"><div className="scroll-to-top scroll-to-target" data-target="html"><span className="fa fa-angle-up"></span></div></a>
			            
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

export default Services;