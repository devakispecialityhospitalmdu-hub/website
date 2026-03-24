import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import  "./svg.css"
import Sidebar from './sidebar';
import AbtDrop from './abtdrop';
import AbtDrop1 from './abtdrop1';
import AbtDrop2 from './abtdrop2';
import Dropdown from './dropdown';
import Dropdown1 from './dropdown1';
import Dropdown2 from './dropdown2';
import Dropdown3 from './dropdown3';
import AbtDrop3 from './abtdrop3';
	const Insurance = () => {
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
				                <h1>Insurance Providers</h1>
				                <ul className="page-breadcrumb">
				                    <li><a href="/">Home</a></li>
				                    <li>Patient Care Services</li>
				                    <li>Insurance Providers</li>
				                </ul> 
				            </div>
				        </div>
				    </section>
				            
				<section className="services-section pt-5">
			        <div className="auto-container">
			            

			            <div className="row">
			            	<div className="service-block col-lg-4 col-md-6 col-sm-12">
			                    <div className="inner-box">
			                        <span className="icon"><img src="assets/images/tpa/apollomunich.png" alt=""/></span>
			                        <h5>Apollo Munich Insurance</h5>
			                    </div>
			                </div>
			                <div className="service-block col-lg-4 col-md-6 col-sm-12">
			                    <div className="inner-box">
			                        <span className="icon"><img src="assets/images/tpa/bajaj.png" alt=""/></span>
			                        <h5>Bajaj Allianz General Insurance</h5>
			                    </div>
			                </div>
			                <div className="service-block col-lg-4 col-md-6 col-sm-12">
			                    <div className="inner-box">
			                        <span className="icon"><img src="assets/images/tpa/cmscheme.png" alt=""/></span>
			                        <h5>Chief Minister's Comprehensive Health Insurance Scheme</h5>
			                    </div>
			                </div>
			                <div className="service-block col-lg-4 col-md-6 col-sm-12">
			                    <div className="inner-box">
			                        <span className="icon"><img src="assets/images/tpa/carehealth.png" alt=""/></span>
			                        <h5>Care Insurance</h5>
			                    </div>
			                </div>
			                <div className="service-block col-lg-4 col-md-6 col-sm-12">
			                    <div className="inner-box">
			                        <span className="icon"><img src="assets/images/tpa/cholamandalam.png" alt=""/></span>
			                        <h5>Cholamandalam General Insurance</h5>
			                    </div>
			                </div>
			                <div className="service-block col-lg-4 col-md-6 col-sm-12">
			                    <div className="inner-box">
			                        <span className="icon"><img src="assets/images/tpa/emedi.png" alt=""/></span>
			                        <h5>E-Meditek TPA</h5>
			                    </div>
			                </div>
			                <div className="service-block col-lg-4 col-md-6 col-sm-12">
			                    <div className="inner-box">
			                        <span className="icon"><img src="assets/images/tpa/ericson.png" alt=""/></span>
			                        <h5>Ericson Insurance</h5>
			                    </div>
			                </div>
			                <div className="service-block col-lg-4 col-md-6 col-sm-12">
			                    <div className="inner-box">
			                        <span className="icon"><img src="assets/images/tpa/familyhealth.png" alt=""/></span>
			                        <h5>Family Health Plan Insurance</h5>
			                    </div>
			                </div>
			                <div className="service-block col-lg-4 col-md-6 col-sm-12">
			                    <div className="inner-box">
			                        <span className="icon"><img src="assets/images/tpa/futuregenral.png" alt=""/></span>
			                        <h5>Future Generali Insurance</h5>
			                    </div>
			                </div>
			                <div className="service-block col-lg-4 col-md-6 col-sm-12">
			                    <div className="inner-box">
			                        <span className="icon"><img src="assets/images/tpa/genins.png" alt=""/></span>
			                        <h5>Genins India TPA</h5>
			                    </div>
			                </div>
			                <div className="service-block col-lg-4 col-md-6 col-sm-12">
			                    <div className="inner-box">
			                        <span className="icon"><img src="assets/images/tpa/goodhealth.png" alt=""/></span>
			                        <h5>Good Health Plan TPA</h5>
			                    </div>
			                </div>
			                <div className="service-block col-lg-4 col-md-6 col-sm-12">
			                    <div className="inner-box">
			                        <span className="icon"><img src="assets/images/tpa/healthindia.png" alt=""/></span>
			                        <h5>Health India TPA</h5>
			                    </div>
			                </div>
			                <div className="service-block col-lg-4 col-md-6 col-sm-12">
			                    <div className="inner-box">
			                        <span className="icon"><img src="assets/images/tpa/healthinsurance.png" alt=""/></span>
			                        <h5>Health Insurance TPA</h5>
			                    </div>
			                </div>
			                <div className="service-block col-lg-4 col-md-6 col-sm-12">
			                    <div className="inner-box">
			                        <span className="icon"><img src="assets/images/tpa/heritagehealth.png" alt=""/></span>
			                        <h5>Heritage Tpa</h5>
			                    </div>
			                </div>
			                <div className="service-block col-lg-4 col-md-6 col-sm-12">
			                    <div className="inner-box">
			                        <span className="icon"><img src="assets/images/tpa/liberty.png" alt=""/></span>
			                        <h5>Liberty General Insurance</h5>
			                    </div>
			                </div>
			                <div className="service-block col-lg-4 col-md-6 col-sm-12">
			                    <div className="inner-box">
			                        <span className="icon"><img src="assets/images/tpa/mdi.png" alt=""/></span>
			                        <h5>MDI India Health Care TPA</h5>
			                    </div>
			                </div>
			                <div className="service-block col-lg-4 col-md-6 col-sm-12">
			                    <div className="inner-box">
			                        <span className="icon"><img src="assets/images/tpa/medsave.png" alt=""/></span>
			                        <h5>Med Save Insurance</h5>
			                    </div>
			                </div>
			                <div className="service-block col-lg-4 col-md-6 col-sm-12">
			                    <div className="inner-box">
			                        <span className="icon"><img src="assets/images/tpa/medi.png" alt=""/></span>
			                        <h5>Medi Assists TPA</h5>
			                    </div>
			                </div>
			                <div className="service-block col-lg-4 col-md-6 col-sm-12">
			                    <div className="inner-box">
			                        <span className="icon"><img src="assets/images/tpa/medicare.png" alt=""/></span>
			                        <h5>Medicare Insurance TPA</h5>
			                    </div>
			                </div>
			                <div className="service-block col-lg-4 col-md-6 col-sm-12">
			                    <div className="inner-box">
			                        <span className="icon"><img src="assets/images/tpa/paramount.png" alt=""/></span>
			                        <h5>Paramount Health Care TPA</h5>
			                    </div>
			                </div>
			                <div className="service-block col-lg-4 col-md-6 col-sm-12">
			                    <div className="inner-box">
			                        <span className="icon"><img src="assets/images/tpa/raksha.png" alt=""/></span>
			                        <h5>Raksha TPA</h5>
			                    </div>
			                </div>
			                <div className="service-block col-lg-4 col-md-6 col-sm-12">
			                    <div className="inner-box">
			                        <span className="icon"><img src="assets/images/tpa/reliancehealth.png" alt=""/></span>
			                        <h5>Reliance Health Insurance</h5>
			                    </div>
			                </div>
			                <div className="service-block col-lg-4 col-md-6 col-sm-12">
			                    <div className="inner-box">
			                        <span className="icon"><img src="assets/images/tpa/starhealth.png" alt=""/></span>
			                        <h5>Star Health TPA</h5>
			                    </div>
			                </div>
			                <div className="service-block col-lg-4 col-md-6 col-sm-12">
			                    <div className="inner-box">
			                        <span className="icon"><img src="assets/images/tpa/tataaig.png" alt=""/></span>
			                        <h5>TATA AIG General Insurance</h5>
			                    </div>
			                </div>
			                <div className="service-block col-lg-4 col-md-6 col-sm-12">
			                    <div className="inner-box">
			                        <span className="icon"><img src="assets/images/tpa/unitedhealthcare.png" alt=""/></span>
			                        <h5>United Health Care TPA</h5>
			                    </div>
			                </div>
			                <div className="service-block col-lg-4 col-md-6 col-sm-12">
			                    <div className="inner-box">
			                        <span className="icon"><img src="assets/images/tpa/universalsompo.png" alt=""/></span>
			                        <h5>Universal Sompo Insurance</h5>
			                    </div>
			                </div>
			                <div className="service-block col-lg-4 col-md-6 col-sm-12">
			                    <div className="inner-box">
			                        <span className="icon"><img src="assets/images/tpa/vidal.png" alt=""/></span>
			                        <h5>Vidal Health TPA</h5>
			                    </div>
			                </div>
			                <div className="service-block col-lg-4 col-md-6 col-sm-12">
			                    <div className="inner-box">
			                        <span className="icon"><img src="assets/images/tpa/vipulmedcare.png" alt=""/></span>
			                        <h5>Vipul Med Corp TPA</h5>
			                    </div>
			                </div>
			            </div>
			        </div>
				</section>
				 <div className="row">
				 <div className="col-lg-3 col-md-6 col-sm-12"></div>
				 <div className="col-lg-6 col-md-6 col-sm-12">
				 <br></br><br></br>
				<div className="text">
                    <p>Our Insurance Department has tie-ups with all major insurance companies and Third Party Administrators (TPA). The TPAs have rated our hospital as a prestigious preferred provider network hospital. 
					For further details, please contact our 24x7 helpline</p>
                </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12"></div>
                </div>
				<div className="contact-box">
				                <div className="row">
				                <div className="col-lg-3 col-md-6 col-sm-12"></div>
				<div className="contact-info-block col-lg-3 col-md-6 col-sm-12">
				                        <div className="inner">
				                            <span className="icon flaticon-email"></span> 
				                            <h4><strong>Email</strong></h4>
				                            <p><a href="mailto:claims@devakihospital.com">claims@devakihospital.com</a></p>
				                            <p><a href="mailto:mail@devakihospital.com">mail@devakihospital.com</a></p>
				                        </div>
				                    </div>
				                   
				                    <div className="contact-info-block col-lg-3 col-md-6 col-sm-12">
				                        <div className="inner">
				                            <span className="icon flaticon-phone"></span> 
				                            <h4><strong>Phone</strong></h4>
				                            <p><a href="/#">Phone: 0452-2288830</a></p>
				                            <p><a href="/#">Mobile: +91 97863 23915</a></p>
				                        </div>
				                    </div>
				                    <div className="col-lg-3 col-md-6 col-sm-12"></div>
				                    </div>
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

export default Insurance;