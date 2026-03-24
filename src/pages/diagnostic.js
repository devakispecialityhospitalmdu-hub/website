import React from 'react';
import List from  "./tabs";
import {Row , Col }  from 'react-bootstrap';
import BasicModal from "./modal";
import Sidebar from './sidebar';
import AbtDrop from './abtdrop';
import AbtDrop1 from './abtdrop1';
import AbtDrop2 from './abtdrop2';
import Dropdown from './dropdown';
	const Diagnostic = () => {
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
				                            <li><i className="flaticon-hospital-1"></i>234 Triumph, Los Angeles, <br></br>California, US </li>
				                            <li><i className="flaticon-back-in-time"></i>Mon - Sat 8.00 - 18.00. <br></br>Sunday CLOSED</li>
				                        </ul>
				                    </div>
				                    <div className="top-right">
				                        <ul className="social-icon-one">
				                            <li><a href="/#"><span className="fab fa-facebook-f"></span></a></li>
				                            <li><a href="/#"><span className="fab fa-twitter"></span></a></li>
				                            <li><a href="/#"><span className="fab fa-skype"></span></a></li>
				                            <li><a href="/#"><span className="fab fa-linkedin-in"></span></a></li>
				                        </ul>
				                        <div className="btn-box">
				                           <BasicModal></BasicModal>
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
				                                <li>
				                                    <a href="/"><span>Home</span></a>
				                                </li>

				                                <li>
				                                    <a href="about"><span>About</span></a>
				                                </li>
				                                <li className="dropdown current">
				                                    <span>Facilities</span>
				                                    <ul>
				                                    	<li><a href="services">Our Services</a></li>
				                                    	<li><a href="doctors">Our Doctors</a></li>
				                                        <li><a href="cardiology">Our Departments</a></li>
				                                        <li><a href="tpa">Insurance/TPA</a></li>
				                                        <li><a href="specialities">Our Specialities</a></li>
				                                        {/*<li><a href="divisions">Our Divisions</a></li>*/}
				                                        <li><a href="policy">Policy</a></li>
				                                    </ul>
				                                </li>
				                                {/*<li>
				                                    <a href="gallery"><span>Gallery</span></a>
				                                </li>
				                                <li>
				                                    <a href="review"><span>Review</span></a>
				                                </li>*/}

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
			                    	<nav className="nav main-menu stickyheadernav">
				                            <ul className="navigation" id="navbar">
				                                <li>
				                                    <a href="/"><span>Home</span></a>
				                                </li>

				                                <li>
				                                    <a href="about"><span>About</span></a>
				                                </li>
				                                <li className="dropdown current">
				                                    <span>Facilities</span>
				                                    <ul>
				                                    	<li><a href="services">Our Services</a></li>
				                                    	<li><a href="doctors">Our Doctors</a></li>
				                                        <li><a href="cardiology">Our Departments</a></li>
				                                        <li><a href="tpa">Insurance/TPA</a></li>
				                                        <li><a href="specialities">Our Specialities</a></li>
				                                        {/*<li><a href="divisions">Our Divisions</a></li>*/}
				                                        <li><a href="policy">Policy</a></li>
				                                    </ul>
				                                </li>
				                                {/*<li>
				                                    <a href="gallery"><span>Gallery</span></a>
				                                </li>
				                                <li>
				                                    <a href="review"><span>Review</span></a>
				                                </li>*/}

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
				                        <input type="search" name="search-field" placeholder="Search..." required=""/>
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
				    <section className="page-title"style={{backgroundImage: `url("assets/images/department.jpg")`}}>
				        <div className="auto-container">
				            <div className="title-outer">
				                <h1>Departments</h1>
				                <ul className="page-breadcrumb">
				                    <li><a href="/">Home</a></li>
				                    <li>Departments</li>
				                </ul> 
				            </div>
				        </div>
				    </section>
				    <div className="sidebar-page-container">
				        <div className="auto-container">
				            <div className="row clearfix">

				                <div className="content-side col-xl-9 col-lg-8 col-md-12 col-sm-12 order-2">
				                    <div className="service-detail">
				                        <div className="images-box">
				                            <figure className="image wow fadeIn"><a href="assets/images/resource/service-single.jpg" className="lightbox-image" data-fancybox="services"><img src="assets/images/diagnostic/diagnostic-1.jpg" alt=""/></a></figure>
				                        </div>

				                        <div className="content-box">
				                            <div className="title-box">
				                                <h2>Department of Diagnostics</h2>
				                            </div>
				                            <p>“DHEVAKI DIAGNOSTIC PRIVATE LIMITED” is the unique centre for complete Medical Imaging & Diagnostics.

												We are able to provide the following facilities: Whole body MRI scan, 3D Muliti slice spiral CT scan, Color doppler scan, CR (Digital X-Ray), Mammaography, Spirometer, Computerised lab, Echo cardiogram, Stress ECG (TMT), Computerised ECG, etc.,</p>
						                            <div className="two-column">
				                                <div className="row">
				                                    <div className="image-column col-xl-6 col-lg-12 col-md-12">
				                                        <figure className="image"><a href="images/resource/post-img.jpg" className="lightbox-image"><img src="assets/images/diagnostic/diagnostic-2.jpg" alt=""/></a></figure>
				                                    </div>
				                                    <div className="text-column col-xl-6 col-lg-12 col-md-12">
				                                        <p>Complete account of the systems and expound the actually teachings of the great explorer of the truth, the master-builder of human uts happiness.</p>
				                                        <ul className="list-style-one">
				                                            <li>Enhancing Your Vision sit ametcon sec tetur</li>
				                                            <li>adipisicing eiusmod tempor tread depth sit tread</li>
				                                            <li>eiusmod Your Vision sit ametcon sec tetur sec</li>
				                                            <li>adipisicing eiusmod tempor tread depth sit </li>
				                                            <li>tread Your Vision sit ametcon sec tetur</li>
				                                        </ul>
				                                    </div>
				                                </div>
				                            </div>

				                            <h3>Why Choose This Service</h3>

				                            <p>Complete account of the systems and expound the actually teachings of the great explorer of the truth, the master-builder of human uts happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful anyone who loves or pursues.</p>
				                            <div className="sidebar-side col-xl-6 col-lg-6 col-md-12 col-sm-12">

				                          <List></List>

				                           </div>

				                        </div>
				                    </div>
				                </div>
				                <div className="sidebar-side col-xl-3 col-lg-4 col-md-12 col-sm-12">
				                    <aside className="sidebar services-sidebar">
				                        
				                        <div className="sidebar-widget categories">
				                            <div className="widget-content">
				                                <ul className="services-categories">
				                                    <li><a href="cardiology">Cardiology</a></li>
				                                    <li><a href="oncology">Oncology</a></li>
				                                    <li className="active"><a href="diagnostic">Diagnostic</a></li>
				                                </ul>
				                            </div>
				                        </div>
				                        <div className="brochures-box">
				                            <div className="inner">
				                                <h4>Download Brochures</h4>
				                                <div className="text">Etiam tortor lorem, auctor ut orci ut, vehicula ultricies mauris. scelerisque gravida.</div>
				                                <a className="hover theme-btn btn-style-one" href="/#"><span className="btn-title"><i className="fa fa-file-pdf"></i> Info Company</span></a>
				                                <a className="hover theme-btn btn-style-one" href="/#"><span className="btn-title"><i className="fa fa-file-pdf"></i> Brochure Newest</span></a>
				                            </div>
				                        </div>

				                        <div className="help-box">
				                            <span>Quick Contact</span>
				                            <h4>Get Solution</h4>
				                            <p>Contact us at the Medicoz office nearest to you or submit a business inquiry online.</p>
				                            <a href="contact" className="hover theme-btn btn-style-one"><span className="btn-title">Contact</span></a>
				                        </div>
				                    </aside>
				                </div>
				            </div>
				        </div>
				    </div>
			      	<Row>
    					<Col xs={6} md={4}>
	    					<div className=" service-block-two ">
	                            <div className="inner-box">
	                                <div className="image-box">
	                                    <figure className="image"><a href="cardiology"><img src="assets/images/cardiology/cardiology-department.jpg" alt=""/></a></figure>
	                                </div>
	                                <div className="lower-content">
	                                    <div className="title-box">
	                                        <span className="icon flaticon-heart-2"></span>
	                                        <h4><a href="cardiology">Cardiology Department</a></h4> 
	                                    </div>
	                                    <div className="text">Introduction. Cardiology is the study heart conditions. The Consultant with whom you have an appointment is a specialist.</div>
	                                    <span className="icon-right flaticon-heart-2"></span>
	                                </div>
	                            </div>
	                        </div>
	                    </Col>		
	                    <Col xs={6} md={4}>
	    					<div className=" service-block-two ">
	                            <div className="inner-box">
	                                <div className="image-box">
	                                    <figure className="image"><a href="oncology"><img src="assets/images/cardiology/oncology-department.jpg" alt=""/></a></figure>
	                                </div>
	                                <div className="lower-content">
	                                    <div className="title-box">
	                                        <span className="icon flaticon-heart-2"></span>
	                                        <h4><a href="oncology">Oncology</a></h4> 
	                                    </div>
	                                    <div className="text">Introduction. Cardiology is the study heart conditions. The Consultant with whom you have an appointment is a specialist.</div>
	                                    <span className="icon-right flaticon-heart-2"></span>
	                                </div>
	                            </div>
	                        </div>
	                    </Col>
	                    <Col xs={6} md={4}>
	    					<div className=" service-block-two ">
	                            <div className="inner-box">
	                                <div className="image-box">
	                                    <figure className="image"><a href="diagnostic"><img src="assets/images/cardiology/Diagnostic-department.jpg" alt=""/></a></figure>
	                                </div>
	                                <div className="lower-content">
	                                    <div className="title-box">
	                                        <span className="icon flaticon-heart-2"></span>
	                                        <h4><a href="diagnostic">Diagnostic Department</a></h4> 
	                                    </div>
	                                    <div className="text">Introduction. Cardiology is the study heart conditions. The Consultant with whom you have an appointment is a specialist.</div>
	                                    <span className="icon-right flaticon-heart-2"></span>
	                                </div>
	                            </div>
	                        </div>
	                    </Col>
					</Row>
				    
				    <section className="clients-section alternate">
				        <div className="auto-container">
				            <div className="sponsors-outer">
				                <ul className="clients-carousel owl-carousel owl-theme">
				                    <li className="slide-item"> <a href="/#"><img src="assets/images/clients/1.png" alt=""/></a> </li>
				                    <li className="slide-item"> <a href="/#"><img src="assets/images/clients/2.png" alt=""/></a> </li>
				                    <li className="slide-item"> <a href="/#"><img src="assets/images/clients/3.png" alt=""/></a> </li>
				                    <li className="slide-item"> <a href="/#"><img src="assets/images/clients/4.png" alt=""/></a> </li>
				                    <li className="slide-item"> <a href="/#"><img src="assets/images/clients/5.png" alt=""/></a> </li>
				                </ul>
				            </div>
				        </div>
				    </section>
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

export default Diagnostic;


