import React, {useState,setState} from 'react';
import BasicModal from "./modal";
import axios from 'axios';
import { Alert } from 'react-alert'
import Sidebar from './sidebar';
import AbtDrop from './abtdrop';
import AbtDrop1 from './abtdrop1';
import AbtDrop2 from './abtdrop2';
import Dropdown from './dropdown';
import Dropdown1 from './dropdown1';
import Dropdown2 from './dropdown2';
import validator from 'validator';
import { useFormik } from 'formik';
import PhoneInput from 'react-phone-number-input';
import Dropdown3 from './dropdown3';
import AbtDrop3 from './abtdrop3';

export default function Contact() {

const [username, setUsername] = useState('');   
const [email, setEmail] = useState('');
const [phoneNo, setPhoneNo] = useState('');
    
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const [errorMessage, setErrorMessage] = useState('')

const [emailError, setEmailError] = useState('')
  const validateEmail = (e) => {
    var email = e.target.value
  
    if (validator.isEmail(email)) {
      setEmailError('Valid Email :)')
    } else {
      setEmailError('Enter valid Email!')
    }
  }
  const [phoneNoError, setPhonenoError] = useState('')

  const validatePhoneNumber = (e) => {
  	 var phoneNo = e.target.value
  	 
 if(validator.isMobilePhone(phoneNo)){
 setPhonenoError('Valid Email :)')
    } else {
      setPhonenoError('Enter valid Email!')
    }
}

const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "username"){
            setUsername(value);
        }
        if(id === "phoneNo"){
            setPhoneNo(value);
        }
        if(id === "email"){
            setEmail(value);
        }

    }

    const handleSubmit  = (e) => { 
 
    if (username === '' || phoneNo === '' || email === '' ) {
      setError(true);
      if (validateEmail === true) {
        setSubmitted(true);
      setError(false);
      }
    } else {
      setSubmitted(true);
      setError(false);
    }

    console.log(username,phoneNo,email);
    
    	setUsername('');
        setPhoneNo('');
        setEmail('');
        setErrorMessage('');
        setEmailError('');
  };
    const successMessage = () => {
    return (
      <div
        className="success text-center pb-2"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h4>Message recieved our team will contact you shortly!!</h4>
      </div>
    );
  };
 
  // Showing error message if error is true
  const errorMessages = () => {
    return (
      <div
        className="error text-center pb-2"
        style={{
          display: error ? '' : 'none',
          
        }}>
        <h4>Please enter all the mandatory( <span className="color"> * </span> )fields</h4>
      </div>
    );
  };

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
				                        	<li style={{color: "red"}}><i style={{color: "red"}} className="icon flaticon-phone"></i>Emergency Casualty: +91 8190034500</li>
				                            <li style={{color: "#25D366"}}><a href="https://wa.me/+919600600888" class="whatsapp_float" target="_blank" rel="noopener noreferrer" style={{color: "#25D366"}}><i style={{color: "#25D366"}} className="fab fa-whatsapp"></i>Enquiry: + 91 9600600888</a></li>

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
				                                <li >
				                                    <a href="career"><span>Career</span></a>
				                                </li>
				                                
				                                <li className="current">
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
				                                <li >
				                                    <a href="career"><span>Career</span></a>
				                                </li>
				                                
				                                <li className="current">
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
				                <form method="post" action="mailer.php">
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
				                <h1>Contact Us</h1>
				                <ul className="page-breadcrumb">
				                    <li><a href="/">Home</a></li>
				                    <li>Contact</li>
				                </ul> 
				            </div>
				        </div>
				    </section>

				    {/*<section className="map-section">
				        <div className="auto-container">
				            <div className="map-outer">
				                <div className="map-canvas"
				                    data-zoom="12"
				                    data-lat="-37.817085"
				                    data-lng="144.955631"
				                    data-type="roadmap"
				                    data-hue="#ffc400"
				                    data-title="Envato"
				                    data-icon-path="assets/images/icons/map-marker.png"
				                    data-content="Melbourne VIC 3000, Australia<br></br><a href='mailto:info@youremail.com'>info@youremail.com</a>">
				                </div>
				            </div>
				        </div>
				    </section>*/}

				    <section className="contact-section" id="contact">
				        <div className="small-container">
				            <div className="sec-title text-center">
				                <h2  className="pt-5">Contact</h2>
				                <img className="svg" src="assets/images/svgimage.png" alt=""/>
				            </div>

				            <div className="contact-box">
				                <div className="row">
				                <div className="contact-info-block col-lg-2 col-md-6 col-sm-12">
				                        
				                    </div>
				                    <div className="contact-info-block col-lg-4 col-md-6 col-sm-12">
				                        <div className="inner">
				                            <span className="icon flaticon-phone"></span>
				                            <h4><strong>24*7 Casualty</strong></h4>
				                            <p><a href="/#">Mobile: +91 8190034500</a></p>
				                        </div>
				                    </div>

				                    <div className="contact-info-block col-lg-4 col-md-6 col-sm-12">
				                        <div className="inner">
				                            <span className="icon flaticon-phone"></span> 
				                            <h4><strong>Emergency Enquiry</strong></h4>
				                            <p><a href="/#">Mobile: +91 9600600888</a></p>
				                        </div>
				                    </div>
				                    <div className="contact-info-block col-lg-2 col-md-6 col-sm-12">
				                        
				                    </div>
				                </div>
				            </div>

				            <div className="contact-box">
				                <div className="row">
				                    <div className="contact-info-block col-lg-4 col-md-6 col-sm-12">
				                        <div className="inner">
				                            <span className="icon flaticon-worldwide"></span> 
				                            <h4><strong>Address</strong></h4>
				                            <p>26, Theni Main Road, Arasaradi, Madurai</p>
				                        </div>
				                    </div>

				                    <div className="contact-info-block col-lg-4 col-md-6 col-sm-12">
				                        <div className="inner">
				                            <span className="icon flaticon-phone"></span> 
				                            <h4><strong>Phone</strong></h4>
				                            <p><a href="/#">Phone: 0452-2288800/31/41</a></p>
				                            <p><a href="/#">Mobile: +91 9790018411</a></p>
				                        </div>
				                    </div>
				                    


				                    <div className="contact-info-block col-lg-4 col-md-6 col-sm-12">
				                        <div className="inner">
				                            <span className="icon flaticon-email"></span> 
				                            <h4><strong>Email</strong></h4>
				                            <p><a href="mailto:mail@devakihospital.com">mail@devakihospital.com</a></p>
				                        </div>
				                    </div>
				                </div>
				            </div>
				            <h4 className="text-center ">Our Branches</h4><br></br>
				            <div className="contact-box">
				                <div className="row">

				                    <div className="contact-info-block col-lg-4 col-md-6 col-sm-12">
				                        <div className="inner">
				                            <span className="icon flaticon-worldwide"></span> 
				                            <h4><strong>DEVAKI SCANS</strong></h4>
				                            <p > 204, East Veli Street, <br></br>Opposite Chinthamani Theater, Madurai, Tamil Nadu 625001.</p>
				                            <h4 className="pt-2"><strong>Phone</strong></h4>
				                            <p><a href="/#">Phone:  0452-2330034</a></p>
				                            <p><a href="/#">Mobile: +91 97900 18415</a></p>
				                        </div>
				                    </div>

				                    <div className="contact-info-block col-lg-4 col-md-6 col-sm-12">
				                        <div className="inner">
				                            <span className="icon flaticon-worldwide"></span> 
				                            <h4><strong>DEVAKI SCANS</strong></h4>
				                            <p>100, Railway Feeder Road, Sivagami Puram, Virudhunagar, TamilNadu 626001.</p>
				                            <h4 className="pt-2"><strong>Phone</strong></h4>
				                            <p><a href="/#">Phone: +91 97900 18413</a></p>
				                            <p><a href="/#">Mobile: +91 94423 22995</a></p>
				                        </div>
				                    </div>

				                    <div className="contact-info-block col-lg-4 col-md-6 col-sm-12">
				                        <div className="inner">
				                            <span className="icon flaticon-worldwide"></span> 
				                            <h4><strong>SEVA SCANS</strong></h4>
				                            <p>No. 22, Vaidyanatha, Sivarama Iyer Street, Senaynagar, Madurai, Tamil Nadu <br></br>625020.</p>
				                            <h4 className="pt-2"><strong>Phone</strong></h4>
				                            <p><a href="/#">Phone: 0452-2535182</a></p>
				                            <p><a href="/#">Mobile: +91 9790018414</a></p>
				                        </div>
				                    </div>
				                </div>
				            </div>

				            {/*<div className="form-box">
				                <div className="contact-form">
				                	<span className="sub-title text-center">Contact Now</span>
						                <h2>Write us a Message !</h2>
						                <img className="svg" src="assets/images/svgimage.png" alt=""/>
				                    <div className ="form">
				                    <div className="messages">
							        {errorMessages ()}
							        {successMessage()}
							      </div>
				                             
				                        <div className="row">
				                            <div className="form-group col-lg-12">
				                                <div className="response"></div>
				                            </div>

				                            <div className="col-lg-6 col-md-12">
				                                <div className="form-group">
				                                    <label>Name<span className="color"> * </span></label>
				                                    <input type="text" name="username" className="username" id ="username" value={username} onChange = {(e) => handleInputChange(e)}/>
				                                </div>

				                                <div className="form-group">
												<label>E-Mail<span className="color"> * </span></label>
				                                    <input type="email" name="email" className="email" id="email"  value={email} onChange = {(e) => handleInputChange(e)|| validateEmail(e)}/>
				                                    <span style={{
											          fontWeight: 'bold',
											          color: 'red',
											        }}>{emailError}</span>				                                   
				                                </div>

				                                <div className="form-group">
				                                    <label>Phone<span className="color"> * </span></label>
				                                    <PhoneInput type="text" name="phoneNo" className="phoneNo" id="phoneNo"   value={phoneNo} onChange = {(e) => handleInputChange(e)|| validatePhoneNumber(e)}/> 
				                                </div>
				                            </div>
				                            
				                            <div className="col-lg-6 col-md-12">
				                                <div className="form-group">
				                                <label>Message</label>
				                                <textarea name="contact_message" className="message" placeholder="Message"rows="5" id="message"/>
				                                
				                                </div>
				                                
				                            </div>

				                            <div className="form-group col-lg-12 text-center pt-3">
				                                <button  onClick={()=>handleSubmit()} type="submit" className="hover theme-btn btn-style-two" ><span className="btn-title">Send Message</span></button>
				                                
				                            </div>
				                        </div>
				                    </div>
				                </div>
				            </div>*/}

				           
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
			                                        <p>Devaki specialty hospital was established by Dr. P. S. Nagendiran, M.B.B.S. & Dr. K. Devaki M.B.B.S. D.M.R.D. We can provide the following facilities: 100 bedded hospitals, an airconditioned operation theatre, pharmacy attached to the hospital, ECG & clinical laboratory facilities.</p>
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
			                                                <a href="tel:+91 9790018411"><strong>Mobile:+91 9790018411 Phone:0452-2288800,31,41</strong></a>
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
			                        <p>Copyright © 2022 <a href="/#">Devaki Hospital    </a> All Rights Reserved.</p>
			                    </div>
			                </div>
			            </div>
			        </div>
				</footer>

			    </div>

			</>
		)
	};
	