import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import BasicModal from "./modal";

	const Review = () => {
		return (
		  
			<>
				<div className="page-wrapper">
				    <div className="preloader"></div>
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
				                            <li><a href="/#"><span className="fab fa-facebook-f"></span></a></li>
				                            <li><a href="/#"><span className="fab fa-twitter"></span></a></li>
				                            <li><a href="/#"><span className="fab fa-skype"></span></a></li>
				                            <li><a href="/#"><span className="fab fa-linkedin-in"></span></a></li>
				                        </ul>
				                        <div className="btn-box">
				                          { /*<BasicModal></BasicModal>*/ }
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
				                                <li >
				                                    <a href="/"><span>Home</span></a>
				                                </li>

				                                <li>
				                                    <a href="about"><span>About</span></a>
				                                </li>
				                                <li className="dropdown">
				                                    <span>Facilities</span>
				                                    <ul>
				                                    	<li><a href="services">Services</a></li>
				                                    	<li><a href="doctors">Doctors</a></li>
				                                        <li><a href="cardiology">Departments</a></li>
				                                        <li><a href="tpa">Insurance/TPA</a></li>
				                                        <li><a href="specialities">Specialities</a></li>
				                                        <li><a href="divisions">Divisions</a></li>
				                                    </ul>
				                                </li>
				                                <li>
				                                    <a href="gallery"><span>Gallery</span></a>
				                                </li>
				                                <li className="current">
				                                    <a href="review"><span>Review</span></a>
				                                </li>

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
				                                <li className="dropdown">
				                                    <span>Facilities</span>
				                                    <ul>
				                                    	<li><a href="services">Services</a></li>
				                                    	<li><a href="doctors">Doctors</a></li>
				                                        <li><a href="cardiology">Departments</a></li>
				                                        <li><a href="tpa">Insurance/TPA</a></li>
				                                        <li><a href="specialities">Specialities</a></li>
				                                        <li><a href="divisions">Divisions</a></li>
				                                    </ul>
				                                </li>
				                                <li>
				                                    <a href="gallery"><span>Gallery</span></a>
				                                </li>
				                                <li  className="current">
				                                    <a href="review"><span>Review</span></a>
				                                </li>

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
				            <div className="logo"><a href="/"><img src="assets/images/logodevaki.png" alt="" title=""/></a></div>

				            <div className="nav-outer clearfix">

				                <div className="outer-box">
				                    <div className="search-box">
				                        <button className="search-btn mobile-search-btn"><i className="flaticon-magnifying-glass"></i></button>
				                    </div>
				                    <button className="cart-btn"><i className="icon flaticon-shopping-cart"></i><span className="count">3</span></button>

				                    <a href="#nav-mobile" className="mobile-nav-toggler navbar-trigger"><span className="fa fa-bars"></span></a>
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
				    <section className="page-title" style={{backgroundImage: `url("assets/images/background/8.jpg")`}}>
				        <div className="auto-container">
				            <div className="title-outer">
				                <h1>Dedicated Doctors</h1>
				                <ul className="page-breadcrumb">
				                    <li><a href="/">Home</a></li>
				                    <li>Doctors</li>
				                </ul> 
				            </div>
				        </div>
				    </section>
				    <section className="team-section-two alternate alternate2">
				        <div className="auto-container">
				            <div className="row">
				                <div className="team-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
				                    <div className="inner-box">
				                        <div className="image-box">
				                           <figure className="image"><a href="doctor-detail"><img src="assets/images/resource/team-5.jpg" alt=""/></a></figure>
				                            <ul className="social-links">
				                                <li><a href="/#"><span className="fab fa-facebook-f"></span></a></li>
				                                <li><a href="/#"><span className="fab fa-twitter"></span></a></li>
				                                <li><a href="/#"><span className="fab fa-instagram"></span></a></li>
				                                <li><a href="/#"><span className="fab fa-linkedin-in"></span></a></li>
				                            </ul>
				                        </div>
				                        <div className="info-box">
				                            <h5 className="name"><a href="doctor-detail">Emily Haden</a></h5>
				                            <span className="designation">Dental Surgeon</span>
				                        </div>
				                    </div>
				                </div>
				                <div className="team-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="400ms">
				                    <div className="inner-box">
				                        <div className="image-box">
				                           <figure className="image"><a href="doctor-detail"><img src="assets/images/resource/team-6.jpg" alt=""/></a></figure>
				                            <ul className="social-links">
				                                <li><a href="/#"><span className="fab fa-facebook-f"></span></a></li>
				                                <li><a href="/#"><span className="fab fa-twitter"></span></a></li>
				                                <li><a href="/#"><span className="fab fa-instagram"></span></a></li>
				                                <li><a href="/#"><span className="fab fa-linkedin-in"></span></a></li>
				                            </ul>
				                        </div>
				                        <div className="info-box">
				                            <h5 className="name"><a href="doctor-detail">Hellen Hill</a></h5>
				                            <span className="designation">Dental Surgeon</span>
				                        </div>
				                    </div>
				                </div>

				                <div className="team-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="800ms">
				                    <div className="inner-box">
				                        <div className="image-box">
				                           <figure className="image"><a href="doctor-detail"><img src="assets/images/resource/team-7.jpg" alt=""/></a></figure>
				                            <ul className="social-links">
				                                <li><a href="/#"><span className="fab fa-facebook-f"></span></a></li>
				                                <li><a href="/#"><span className="fab fa-twitter"></span></a></li>
				                                <li><a href="/#"><span className="fab fa-instagram"></span></a></li>
				                                <li><a href="/#"><span className="fab fa-linkedin-in"></span></a></li>
				                            </ul>
				                        </div>
				                        <div className="info-box">
				                            <h5 className="name"><a href="doctor-detail">Audrey Button</a></h5>
				                            <span className="designation">Dental Surgeon</span>
				                        </div>
				                    </div>
				                </div>

				                <div className="team-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
				                    <div className="inner-box">
				                        <div className="image-box">
				                           <figure className="image"><a href="doctor-detail"><img src="assets/images/resource/team-8.jpg" alt=""/></a></figure>
				                            <ul className="social-links">
				                                <li><a href="/#"><span className="fab fa-facebook-f"></span></a></li>
				                                <li><a href="/#"><span className="fab fa-twitter"></span></a></li>
				                                <li><a href="/#"><span className="fab fa-instagram"></span></a></li>
				                                <li><a href="/#"><span className="fab fa-linkedin-in"></span></a></li>
				                            </ul>
				                        </div>
				                        <div className="info-box">
				                            <h5 className="name"><a href="doctor-detail">Emily Haden</a></h5>
				                            <span className="designation">Dental Surgeon</span>
				                        </div>
				                    </div>
				                </div>

				                <div className="team-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="400ms">
				                    <div className="inner-box">
				                        <div className="image-box">
				                           <figure className="image"><a href="doctor-detail"><img src="assets/images/resource/team-9.jpg" alt=""/></a></figure>
				                            <ul className="social-links">
				                                <li><a href="/#"><span className="fab fa-facebook-f"></span></a></li>
				                                <li><a href="/#"><span className="fab fa-twitter"></span></a></li>
				                                <li><a href="/#"><span className="fab fa-instagram"></span></a></li>
				                                <li><a href="/#"><span className="fab fa-linkedin-in"></span></a></li>
				                            </ul>
				                        </div>
				                        <div className="info-box">
				                            <h5 className="name"><a href="doctor-detail">Hellen Hill</a></h5>
				                            <span className="designation">Dental Surgeon</span>
				                        </div>
				                    </div>
				                </div>

				                <div className="team-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="800ms">
				                    <div className="inner-box">
				                        <div className="image-box">
				                           <figure className="image"><a href="doctor-detail"><img src="assets/images/resource/team-10.jpg" alt=""/></a></figure>
				                            <ul className="social-links">
				                                <li><a href="/#"><span className="fab fa-facebook-f"></span></a></li>
				                                <li><a href="/#"><span className="fab fa-twitter"></span></a></li>
				                                <li><a href="/#"><span className="fab fa-instagram"></span></a></li>
				                                <li><a href="/#"><span className="fab fa-linkedin-in"></span></a></li>
				                            </ul>
				                        </div>
				                        <div className="info-box">
				                            <h5 className="name"><a href="doctor-detail">Audrey Button</a></h5>
				                            <span className="designation">Dental Surgeon</span>
				                        </div>
				                    </div>
				                </div>
				            </div>

				            <div className="sec-bottom-text">Don’t hesitate, contact us for better help and services. <a href="/#">Explore all Dr. Team</a></div>
				        </div>
				    </section>
				    <section className="testimonial-section">
				        <div className="auto-container">
				            <div className="sec-title text-center">
				                <span className="title">HAPPY Patient</span>
				                <h2>What Says Our Patients</h2>
				                <img className="svg" src="assets/images/svgimage.png" alt=""/>
				            </div>

					            <Carousel>
					            	<Carousel.Item>
								            <div className="testimonial-outer testimonial-block">
						                        <div className="inner-box client-testimonial-carousel">
						                            <div className="text">Medical Centre is a great place to get all of your medical needs. I came in for a check up and did not wait more than 5 minutes before I was seen. I can only imagine the type of service you get for more serious issues. Thanks!</div>
						                        </div>
						                    </div>
						            		<div className="client-thumb-outer">
					                            <figure className="client-thumb-outer thumb-box"><img src="assets/images/resource/testi-thumb-1.jpg" alt=""/></figure>
		                            		</div>
		                            		<div className="client-thumb-outer author-info text-center">
					                                <div className="author-name">Lara Croft</div>
					                                <div className="designation">Restaurant Owner</div>
			                            		</div>
							        </Carousel.Item>
							        <Carousel.Item>
								            <div className="testimonial-outer testimonial-block">
						                        <div className="inner-box client-testimonial-carousel">
						                            <div className="text">Medical Centre is a great place to get all of your medical needs. I came in for a check up and did not wait more than 5 minutes before I was seen. I can only imagine the type of service you get for more serious issues. Thanks!</div>
						                        </div>
						                    </div>
						            		<div className="client-thumb-outer">
					                            <figure className="client-thumb-outer thumb-box"><img src="assets/images/resource/testi-thumb-2.jpg" alt=""/></figure>
		                            		</div>
		                            		<div className="client-thumb-outer author-info text-center">
					                                <div className="author-name">Lara Croft</div>
					                                <div className="designation">Restaurant Owner</div>
			                            		</div>
							        </Carousel.Item>
							        <Carousel.Item>
								            <div className="testimonial-outer testimonial-block">
						                        <div className="inner-box client-testimonial-carousel">
						                            <div className="text">Medical Centre is a great place to get all of your medical needs. I came in for a check up and did not wait more than 5 minutes before I was seen. I can only imagine the type of service you get for more serious issues. Thanks!</div>
						                        </div>
						                    </div>
						            		<div className="client-thumb-outer">
					                            <figure className="client-thumb-outer thumb-box"><img src="assets/images/resource/testi-thumb-3.jpg" alt=""/></figure>
		                            		</div>
		                            		<div className="client-thumb-outer author-info text-center">
					                                <div className="author-name">Lara Croft</div>
					                                <div className="designation">Restaurant Owner</div>
			                            		</div>
							        </Carousel.Item>     
							    </Carousel>


						    
				            
				            
				        </div>
				    </section>
				    <section className="clients-section">
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
				        <div className="widgets-section" style={{backgroundImage: `url("assets/images/background/7.jpg")`}}>
				            <div className="auto-container">
				                <div className="row">
				                    <div className="big-column col-xl-6 col-lg-12 col-md-12 col-sm-12">
				                        <div className="row">
				                            <div className="footer-column col-xl-7 col-lg-6 col-md-6 col-sm-12">
				                                <div className="footer-widget about-widget">
				                                    <div className="logo">
				                                        <a href=" / "><img className="logoheader" src="assets/images/logodevaki.png" alt="" /></a>
				                                    </div>
				                                    <div className="text">
				                                        <p>Devaki Speciality Hospital was established by DR. P. S. NAGENDIRAN, M.B.B.S. & DR. K. DEVAKI M.B.B.S. D.M.R.D. We are able to provide the following facilities: 100 Beded Hospital, Airconditioned Operation theatre, Pharmacy attached with the Hospital, ECG & Clinical Laboratory facilities.</p>
				                                    </div>
				                                    <ul className="social-icon-three">
				                                        <li><a href="/#"><i className="fab fa-facebook-f"></i></a></li>
				                                        <li><a href="/#"><i className="fab fa-pinterest"></i></a></li>
				                                        <li><a href="/#"><i className="fab fa-twitter"></i></a></li>
				                                        <li><a href="/#"><i className="fab fa-skype"></i></a></li>
				                                        <li><a href="/#"><i className="fab fa-linkedin-in"></i></a></li>
				                                    </ul>
				                                </div>
				                            </div>

				                            <div className="footer-column col-xl-5 col-lg-6 col-md-6 col-sm-12">
				                                <div className="footer-widget">
				                                    <h2 className="widget-title">Pages</h2>
				                                    <ul className="user-links">
				                                        <li><a href="about">About</a></li>
				                                        <li><a href="services">Services</a></li>
				                                        <li><a href="cardiology">Departments</a></li>
				                                        <li><a href="pg">Patients Guidelines</a></li>
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
				                                            <div className="thumb"><a href="blog-post-image"><img src="assets/images/resource/post-thumb-1.jpg" alt=""/></a></div>
				                                            <h4><a href="blog-post-image">Integrative Medicine <br></br>& Cancer Treatment.</a></h4>
				                                            <span className="date">July 11, 2020</span>
				                                        </div>

				                                        <div className="post">
				                                            <div className="thumb"><a href="blog-post-image"><img src="assets/images/resource/post-thumb-2.jpg" alt=""/></a></div>
				                                            <h4><a href="blog-post-image">Achieving Better <br></br>Health Care Time.</a></h4>
				                                            <span className="date">August 1, 2020</span>
				                                        </div>

				                                        <div className="post">
				                                            <div className="thumb"><a href="blog-post-image"><img src="assets/images/resource/post-thumb-3.jpg" alt=""/></a></div>
				                                            <h4><a href="blog-post-image">Great Health Care <br></br>For Patients.</a></h4>
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
				            <a href="review"><div className="scroll-to-top scroll-to-target" data-target="html"><span className="fa fa-angle-up"></span></div></a>
				            
				            <div className="auto-container">
				                <div className="inner-container clearfix">
				                    <div className="footer-nav">
				                        <ul className="clearfix">
				                           <li><a href="about">AboutUs</a></li> 
				                           <li><a href="contact">Contact</a></li> 
				                           <li><a href="career">Career</a></li>  
				                        </ul>
				                    </div>
				                    
				                    <div className="copyright-text">
				                        <p>Copyright © 2026 <a href="/#">Devaki Hospital 	</a> All Rights Reserved.</p>
				                    </div>
				                </div>
				            </div>
				        </div>
				    </footer>
    			</div>
			</>
		);
	};

export default Review;