import React from 'react';
import {Row , Col }  from 'react-bootstrap';
import List2 from  "./tabcardio";	
import BasicModal from "./modal";
import Sidebar from './sidebar';
import AbtDrop from './abtdrop';
import AbtDrop1 from './abtdrop1';
import AbtDrop2 from './abtdrop2';
import Dropdown from './dropdown';
import Dropdown1 from './dropdown1';
import Dropdown2 from './dropdown2';
import Dropdown3 from './dropdown3';
import AbtDrop3 from './abtdrop3';
	const Familymedicine = () => {
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
				                                <li className="dropdown current">
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
				                                <li className="dropdown current">
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
				                <h1>Family Medicine</h1>
				                <ul className="page-breadcrumb">
				                    <li><a href="/">Home</a></li>
				                    <li><a href="specialities">Specialities</a></li>
				                    <li><a href="familymedicine">Family Medicine</a></li>
				                </ul> 
				            </div>
				        </div>
				    </section>
				    <div className="sidebar-page-container">
				        <div className="auto-container">
				            <div className="row clearfix">

				                <div className="content-side col-xl-9 col-lg-8 col-md-12 col-sm-12 order-2">
				                    <div className="service-detail">
				                       {/*} <div className="images-box">
				                            <figure className="image wow fadeIn"><a href="assets/images/resource/service-single.jpg" className="lightbox-image" data-fancybox="services"><img src="assets/images/cardiology/cardiology.jpg" alt=""/></a></figure>
				                        </div>*/}

				                        <div className="content-box">
				                            <div className="title-box">
				                                <h2>Family Medicine</h2>
				                                <h4>Overview</h4>
				                                        <p>The Family Medicine department at Devaki Specialty Hospital is one of the pioneers in Madurai providing continuing, comprehensive family health needs in any setting: urban and rural. We maintain a strong commitment to community involvement and diversity guided by our core values: accessibility, accountability and compassion. We work on well established international standards set forth by the Royal College of general practitioners, the Americal association of family physicians and the Academy of family physicians in India in providing wholesome care.</p>
				                            </div>
				                                <div>
				                                <div className="row">
				                                	<div className="text-column col-xl-6 col-lg-12 col-md-12">
				                                        
				                                        <h4>Procedures & Treatments</h4>
				                                        <ul className="list-style-one">
				                                            <li>Executive preventive health check ups</li>
															<li>Home care and geriatric services</li>
															<li>Palliative care</li>
															<li>Regular Family medicine outpatient clinics; encompassing primary pediatric care/ geriatric care in Devaki Specialty Hospital </li>
															<li>Immunization clinics</li>
															<li>Adult vaccination services</li>
															<li>Regular community medical camps</li>
															<li>Post graduate training as per NBE curriculum and conducting regular CME programmes.</li>
															<li>Preemployment check ups for all new Devaki Specialty Hospital staffs</li>
															<li>Annual medical check ups for all Devaki Specialty Hospital staffs</li>
															<li>Undertaking reserch activities on life style diseases and preventive care: reproductive and womens health, disbility health and global primary care.</li>
				                                        </ul>
				                                    </div>

				                                    <div className="image-column col-xl-6 col-lg-12 col-md-12">
				                                        <figure className="image"><a className="lightbox-image"><img src="assets/images/cardiology/cardiology_2.jpg" alt=""/></a></figure>
				                                    </div>
				                                    
				                                </div>
				                            </div>
				                            
				                            {/*<List2></List2>*/}
				                            
				                        </div>
				                
				                    </div>
				                </div>
				                

				                <div className="sidebar-side col-xl-3 col-lg-4 col-md-12 col-sm-12">
				                    <aside className="sidebar services-sidebar">
				                        
				                        <div className="sidebar-widget categories scrolllist">
				                            <div className="widget-content">
				                                <ul className="services-categories">
				                                	
				                                    <li><a href="ent">ENT</a></li>
				                                    <li className="active"><a href="familymedicine">Family Medicine</a></li>
				                                    <li><a href="gasteroenterology">Gasteroenterology</a></li>
				                                    <li><a href="generalmedicine">General Medicine</a></li>
				                                    <li><a href="generalsurgery">General Surgery</a></li>
				                                    <li><a href="imagingscience">Imaging Science & Intervention Radiology</a></li> 
				                                    <li><a href="oncology">Medical Oncology</a></li>
				                                    <li><a href="nephrology">Nephrology</a></li>
				                                    <li><a href="neurosurgery">Neuro Surgery</a></li>
				                                    <li><a href="neurology">Neurology</a></li>
				                                    <li><a href="obstetrics">Obstetrics & Gynecology</a></li>
				                                    <li><a href="orthopedics">Orthopedics</a></li>
				                                    <li><a href="pediatric">Pediatric Surgery</a></li>
				                                    <li><a href="pharmacy">Pharmacy</a></li>
				                                    <li><a href="physcatric">Physcatric & Counselling</a></li>
				                                    <li><a href="physicalmedicine">Physical Medicine & Rehabilitation</a></li>
				                                    <li><a href="preventivemedicine">Preventive Medicine</a></li>
				                                    <li><a href="pulmonology">Pulmonology</a></li>
				                                    <li><a href="radiationnco">Radiation Oncology</a></li>
				                                    <li><a href="surgery">Surgery & Surgical Gastroenterology</a></li>
				                                    <li><a href="surgicalonco">Surgical Oncology</a></li>
				                                    <li><a href="urology">Urology</a></li>
				                                    <li><a href="vasucular">Vascular Surgery</a></li>
				                                    <li><a href="accidentemergency">Accident and Emergency</a></li>
				                                    <li><a href="anaesthesiology">Anaesthesiology</a></li>
				                                    <li><a href="bariatric">Bariatric Surgery</a></li>
				                                    <li><a href="cardiology">Cardiology</a></li>
				                                    <li><a href="cardiothoracic">Cardiothoracic and Vascular Surgery</a></li>
				                                    <li><a href="criticalcare">Critical Care & Toxicology</a></li>
				                                    <li><a href="dental">Dental</a></li>
				                                    <li><a href="diabetology">Diabetology</a></li>
				                                </ul>
				                            </div>
				                        </div>
				                        <div className="brochures-box">
				                            <div className="inner">
				                                <h4>Download Brochures</h4>
				                                <a className="hover theme-btn btn-style-two hover" href="/#"><span className="btn-title"><i className="fa fa-file-pdf"></i> Info Company</span></a>
				                                <a className="hover theme-btn btn-style-two hover" href="/#"><span className="btn-title"><i className="fa fa-file-pdf"></i> Brochure Newest</span></a>
				                            </div>
				                        </div>

				                        <div className="help-box text-center">
				                            <span className="text-center">Quick Contact</span>
				                            <h4 className="text-center">Get Solution</h4>
				                            <a href="contact" className="text-center hover theme-btn btn-style-two"><span className="btn-title  text-center">Contact</span></a>
				                        </div>
				                    </aside>
				                </div>
				            </div>
				        </div>
				    </div>
				    {/*<Row>
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
	                    
							                
					</Row>*/}
				   {/*} <section className="clients-section alternate">
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
				    </section>  */}
				    <section className="team-section">
				        <div className="auto-container">
				            
				        <h4 className="text-center">Our Doctor</h4><br></br>
				            <div className="row">

				                <div className="team-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
				                    {/*<div className="inner-box">
				                        <figure className="image"><img src="assets/images/maledr.png" alt=""/></figure>
				                        <ul className="social-links">
				                            <li><a href="/#"><span className="fab fa-facebook"></span></a></li>
				                            <li><a href="/#"><span className="fab fa-linkedin-in"></span></a></li>
				                            <li><a href="/#"><span className="fab fa-twitter"></span></a></li>
				                            <li><a href="/#"><span className="fab fa-pinterest"></span></a></li>
				                        </ul>
				                        <div className="info-box">
				                            <h4 className="name"><a>Dr.S.Balasubramanian M.D., D.M</a></h4>
				                            <span className="designation">Consultant Cardiologist</span>
				                        </div>
				                    </div>*/}
				                </div>

				                <div className="team-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
				                    <div className="inner-box">
				                        <figure className="image"><img src="assets/images/maledr.png" alt=""/></figure>
				                        <ul className="social-links">
				                            <li><a href="/#"><span className="fab fa-facebook"></span></a></li>
				                            <li><a href="/#"><span className="fab fa-linkedin-in"></span></a></li>
				                            <li><a href="/#"><span className="fab fa-twitter"></span></a></li>
				                            <li><a href="/#"><span className="fab fa-pinterest"></span></a></li>
				                        </ul>
				                        <div className="info-box">
				                            <h4 className="name"><a>Dr.P.S.Nagendran, M.B.B.S </a></h4>
				                        	 <span className="designation">Founder & Chairman – Family Physician </span>
				                        </div>
				                    </div>
				                </div>
				            <div className="team-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
			                    {/*<div className="inner-box">
			                        <figure className="image"><img src="assets/images/maledr.png" alt=""/></figure>
			                        <ul className="social-links">
			                            <li><a href="/#"><span className="fab fa-facebook"></span></a></li>
			                            <li><a href="/#"><span className="fab fa-linkedin-in"></span></a></li>
			                            <li><a href="/#"><span className="fab fa-twitter"></span></a></li>
			                            <li><a href="/#"><span className="fab fa-pinterest"></span></a></li>
			                        </ul>
			                        <div className="info-box">
			                            <h4 className="name"><a>Dr.M.Basaldeen M.D., D.M</a></h4>
			                         <span className="designation">Consultant Cardiologist</span>
			                        </div>
			                    </div>*/}
			                </div>
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

export default Familymedicine;