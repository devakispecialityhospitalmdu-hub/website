import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import  "./svg.css";
import Sidebar from './sidebar';

	const cardio = () => {
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
				                            <li><a href="/#"><span className="fab fa-facebook-f"></span></a></li>
				                            <li><a href="/#"><span className="fab fa-twitter"></span></a></li>
				                            <li><a href="/#"><span className="fab fa-skype"></span></a></li>
				                            <li><a href="/#"><span className="fab fa-linkedin-in"></span></a></li>
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
				                                <li >
				                                    <a href="/"><span>Home</span></a>
				                                </li>

				                                <li >
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
				                <h1>Billing Policy</h1>
				                <ul className="page-breadcrumb">
				                    <li><a href="/">Home</a></li>
				                    <li>Patient Care Services</li>
				                    <li>Billing Policy</li>
				                </ul> 
				            </div>
				        </div>
				    </section>
  					
				    <section className="terms-and-condition  ">
        				<div className="auto-container" style={{backgroundImage: `url("assets/images/icons/pattern-1.png")`, backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat',width: 'auto',height: 'auto'}}>
               				<div className="row">
               				<div className="col-xl-2 col-lg-2 col-md-12 col-sm-12"></div>
                    			<div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                            
                                <h4 className="pt-5">cardio</h4><br></br>
                                <h4>Overview</h4><br></br>
                                <p>At Devaki Specialty Hospital, we have a team of well trained anesthesiologists who are able to cater to the surgical demands of different surgical specialties ranging from the simple to the complex ones. Our Operation Theaters have state of the art Anesthesia work stations, patient monitoring devices and other equipment which enables us to administer anesthesia in a safe manner to all patients.</p><br></br>
                                <p>The Anesthesia Department is the cornerstone of good surgical outcomes. We have a team of highly qualified experts in the field of anesthesia who are trained in prestigious institutions in India & abroad. We have state of the art equipments for administering & monitoring Anesthesia. Being one of the primary healthcare providers in Madurai, we offer different kinds of anesthetic procedures, resulting in quality patient care and successful surgeries.</p><br></br>
                                <p>Being a tertiary care hospital, we regularly get patients with multiple medical diseases, who at times require essential surgery for certain other medical conditions. Our Anesthesiology team, with a good interdisciplinary team approach, has been successful in taking care of such “high risk” patients.</p><br></br>
                                <p>We strive to maintain patient comfort through the entire duration of the surgery, and also ensure patient safety at all times during surgical procedures.</p><br></br>
                                <h4>Procedures & Treatments</h4><br></br>
                                <ul className="list-style-one">
	                                <li>General Anesthesia for all kinds of Elective & Emergency Surgical Procedures</li>
	                                <li>Regional anesthesia for all surgical procedures</li>
	                                <li>Ultrasound-guided Regional Anesthesia</li>
	                                <li>Anesthesia for the complex spine ( including Scoliosis) & neurological surgery (including Awake Craniotomy)</li>
	                                <li>Anesthesia for solid organ transplant( Renal & Hepatic) surgeries</li>
	                                <li>Anesthesia for complex Onco surgeries ( including HIPEC)</li>
	                                <li>Anesthesia for Cardiovascular & thoracic Surgery ( including VATS)</li>
	                                <li>Obstetric ( including Labor Analgesia) & Gynecological surgeries</li>
	                                <li>Anesthesia for patients with difficult airway</li>
	                                <li>Anesthesia for Peadiatrics – from newborn to grown-up children</li>
	                                <li>Total Intravenous Anesthesia ( for patients with neuromuscular disorders or those in whom GA is contraindicated)</li>
	                                <li>24-hour Acute Pain Services ( provides PCA & PCEA)</li>
	                                <li>Round the clock consultant Anesthesia Services</li>
	                                <li>State of the art Surgical & Trauma ICU</li>
	                            </ul>
		                        <br></br>
		                        <h4>Service and Facilities</h4><br></br>
		                        <ul className="list-style-one">
	                                <li>Pre Anesthesia check</li>
	                                <li>Anesthesia services in operation theaters, endoscopy suite, Cath lab, MRI suite</li>
	                                <li>Post Anesthesia care</li>
	                                <li>Intra operative and post operative pain management</li>
	                                <li>Educational activities</li>
	                            </ul>
		                        <br></br>
                                <div className=" col-xl-2 col-lg-2 col-md-12 col-sm-12"></div><br></br>
			                </div>
			                
			            </div>
			        </div>
			    </section>
			    <section className="team-section">
				        <div className="auto-container">
				            
				        <h4 className="text-center">Our Doctors</h4><br></br>
				            <div className="row">

				            <div className="col-lg-3 col-md-6 col-sm-12"></div>
				                <div className="team-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
				                    <div className="inner-box">
				                        <figure className="image"><img src="assets/images/maledr.png" alt=""/></figure>
				                        <ul className="social-links">
				                            <li><a href="/#"><span className="fab fa-facebook"></span></a></li>
				                            <li><a href="/#"><span className="fab fa-linkedin-in"></span></a></li>
				                            <li><a href="/#"><span className="fab fa-twitter"></span></a></li>
				                            <li><a href="/#"><span className="fab fa-pinterest"></span></a></li>
				                        </ul>
				                        <div className="info-box">
				                            <h4 className="name"><a href="doctor-detail">Dr.S.Chandrasekar M.D., D.A.</a></h4>
				                            <span className="designation">Anesthetist</span>
				                        </div>
				                    </div>
				                </div>

				                <div className="team-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
				                    <div className="inner-box">
				                        <figure className="image"><img src="assets/images/maledr.png" alt=""/></figure>
				                        <ul className="social-links">
				                            <li><a href="/#"><span className="fab fa-facebook"></span></a></li>
				                            <li><a href="/#"><span className="fab fa-linkedin-in"></span></a></li>
				                            <li><a href="/#"><span className="fab fa-twitter"></span></a></li>
				                            <li><a href="/#"><span className="fab fa-pinterest"></span></a></li>
				                        </ul>
				                        <div className="info-box">
				                            <h4 className="name"><a href="doctor-detail">Dr.Rammohan M.D.,D.M.,</a></h4>
				                        </div>
				                    </div>
				                </div>
				                <div className="col-lg-3 col-md-6 col-sm-12"></div>
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

export default cardio;