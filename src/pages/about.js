import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import {
  Form,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
} from "react-bootstrap";
import "./svg.css";
import Carousel from "react-bootstrap/Carousel";
import BasicModal from "./modal";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import timeline from "./time_line.png";
import Sidebar from "./sidebar";
import AbtDrop from "./abtdrop";
import AbtDrop1 from "./abtdrop1";
import AbtDrop2 from "./abtdrop2";
import Dropdown from "./dropdown";
import Dropdown1 from "./dropdown1";
import Dropdown2 from "./dropdown2";
import Dropdown3 from "./dropdown3";
import AbtDrop3 from "./abtdrop3";
const About = () => {
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
                    <li>
                      <i className="flaticon-hospital-1"></i>26, Theni Main
                      Road, Arasaradi, Madurai{" "}
                    </li>
                    <li>
                      <i className="flaticon-back-in-time"></i>24*7<br></br>
                    </li>
                    <li style={{ color: "red" }}>
                      <i
                        style={{ color: "red" }}
                        className="icon flaticon-phone"
                      ></i>
                      Emergency Casualty : 8190034500
                    </li>
                    <li style={{ color: "#25D366" }}>
                      <a
                        href="https://wa.me/+919600600888"
                        class="whatsapp_float"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#25D366" }}
                      >
                        <i
                          style={{ color: "#25D366" }}
                          className="fab fa-whatsapp"
                        ></i>
                        Enquiry: 9600600888
                      </a>
                    </li>
                    <div className="contact-info-block col-lg-3 col-md-6 col-sm-12"></div>
                  </ul>
                </div>
                <div className="top-right">
                  <ul className="social-icon-one">
                    <li>
                      <a
                        href="https://www.youtube.com/channel/UCDRHhVdtq1OhYv894_Bzg9A/"
                        target="_blank"
                      >
                        <span className="fab fa-youtube"></span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/profile.php?id=100064183981136/"
                        target="_blank"
                      >
                        <span className="fab fa-facebook"></span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/devakiShospital"
                        target="_blank"
                      >
                        <span className="fab fa-twitter"></span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/devakispecialityhospital/"
                        target="_blank"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="mailto:mail@devakihospital.com">
                        <span className="fab flaticon-email"></span>
                      </a>
                    </li>
                  </ul>
                  <div className="btn-box">{/*<BasicModal></BasicModal>*/}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-lower ">
            <div className="auto-container">
              <div className="main-box">
                <div className="logo-box">
                  <div className="logo">
                    <a href=" /">
                      <img
                        className="logoheader"
                        src="assets/images/logodev.png"
                        alt=""
                        title=""
                      />
                    </a>
                  </div>
                </div>

                <div className="nav-outer headernav">
                  <nav className="nav main-menu">
                    <ul className="navigation" id="navbar">
                      {/*<li >
				                                    <a href="/"><specialities>Home</span></a>
				                                </li>*/}

                      <li className="current">
                        <a href="about">
                          <span>About</span>
                        </a>
                      </li>
                      <li className="dropdown">
                        {/*<a href="specialities"><span>specialities</span></a>*/}
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
                        <AbtDrop2></AbtDrop2>

                        {/*<span>Our Services</span>
				                                    <ul>
				                                        <li><a href="facilities">Facilities</a></li>
				                                        <li><a href="lab">Laboratory</a></li>
				                                    </ul>*/}
                      </li>
                      {/*<li>
				                                    <a href="news"><span>News & Media</span></a>
				                                </li>*/}

                      <AbtDrop3></AbtDrop3>
                      <li className="p-3">
                        <a href="career">
                          <span>Career</span>
                        </a>
                      </li>

                      <li>
                        <a href="contact">
                          <span>Contact</span>
                        </a>
                      </li>
                    </ul>
                  </nav>

                  <div className="outer-box">
                    {/*<button className="search-btn"><span className="fa fa-search"></span></button>*/}
                    {/*<BasicModal></BasicModal>*/}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="sticky-header animated slideInDown">
            <div className="auto-container">
              <div className="main-box">
                <div className="logo-box">
                  <div className="logo">
                    <a href=" ">
                      <img
                        className="logoscroll"
                        src="assets/images/logodev.png"
                        alt=""
                        title=""
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-2"></div>
                <nav className="nav main-menu">
                  <ul className="navigation" id="navbar">
                    {/*<li className="current">
				                                    <a href="/"><specialities>Home</span></a>
				                                </li>*/}

                    <li className="current">
                      <a href="about">
                        <span>About</span>
                      </a>
                    </li>
                    <li>
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
                    <li className="p-3">
                      <a href="career">
                        <span>Career</span>
                      </a>
                    </li>

                    <li>
                      <a href="contact">
                        <span>Contact</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="mobile-header">
            <div className="logo">
              <a href="/">
                <img
                  className="logoheader"
                  src="assets/images/logodev.png"
                  alt=""
                  title=""
                />
              </a>
            </div>
            <div className="nav-outer text-center">
              {/*<div className="outer-box">
				                    <div className="search-box">
				                        <button className="search-btn mobile-search-btn"><i className="flaticon-magnifying-glass"></i></button>
				                    </div>
				                    <a href="#nav-mobile" className="mobile-nav-toggler navbar-trigger"><span className="fa fa-bars"></span></a>
				                </div>*/}
              <div id="outer-container">
                <div id="page-wrap">
                  <Sidebar
                    pageWrapId={"page-wrap"}
                    outerContainerId={"outer-container"}
                  />
                </div>
              </div>
            </div>
          </div>
          <div id="nav-mobile"></div>
          <div className="search-popup">
            <span className="search-back-drop"></span>
            <button className="close-search">
              <span className="fa fa-times"></span>
            </button>

            <div className="search-inner">
              <form method="post" action="blog-showcase">
                <div className="form-group">
                  <input
                    type="text"
                    name="search-field"
                    placeholder="Search..."
                    required=""
                  />
                  <button type="submit">
                    <i className="flaticon-magnifying-glass"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="sidebar-cart">
            <span className="cart-back-drop"></span>
            <div className="shopping-cart">
              <div className="cart-header">
                <div className="title">
                  Shopping Cart <span>(3)</span>
                </div>
                <button className="close-cart">
                  <span className="flaticon-add"></span>
                </button>
              </div>
              <ul className="shopping-cart-items">
                <li className="cart-item">
                  <img
                    src="assets/images/resource/products/product-thumb-1.jpg"
                    alt="#"
                    className="thumb"
                  />
                  <span className="item-name">First Aid Kit</span>
                  <span className="item-quantity">
                    1 x <span className="item-amount">$50.00</span>
                  </span>

                  <button className="remove">Remove</button>
                </li>

                <li className="cart-item">
                  <img
                    src="assets/images/resource/products/product-thumb-2.jpg"
                    alt="#"
                    className="thumb"
                  />
                  <span className="item-name">Vitamin Tablet</span>
                  <span className="item-quantity">
                    1 x <span className="item-amount">$25.00</span>
                  </span>

                  <button className="remove">Remove</button>
                </li>

                <li className="cart-item">
                  <img
                    src="assets/images/resource/products/product-thumb-3.jpg"
                    alt="#"
                    className="thumb"
                  />
                  <span className="item-name">Zinc Tablet</span>
                  <span className="item-quantity">
                    1 x <span className="item-amount">$15.00</span>
                  </span>

                  <button className="remove">Remove</button>
                </li>
              </ul>

              <div className="cart-footer">
                <div className="shopping-cart-total">
                  <strong>Subtotal:</strong> $90.00
                </div>
                <a href="shopping-cart" className="theme-btn btn-style-three">
                  <span className="btn-title">View Cart</span>
                </a>
                <a href="checkout" className="theme-btn btn-style-one">
                  <span className="btn-title">Checkout</span>
                </a>
              </div>
            </div>
          </div>
        </header>
        <section
          className="page-title"
          style={{ backgroundImage: `url("assets/images/about/header.jpg")` }}
        >
          <div className="auto-container">
            <div className="title-outer">
              <h1>About Us</h1>
              <ul className="page-breadcrumb">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>About</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="about-section">
          <div className="auto-container">
            <div className="row">
              <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                <div className="inner-column">
                  <div className="sec-title">
                    <span className="sub-title">ABOUT</span>
                    <h2>
                      We're setting Standards in Research what's more, Clinical
                      Care.
                    </h2>
                    <img
                      className="svg1"
                      src="assets/images/svgimage.png"
                      alt=""
                    />
                    <p>
                      Dr. P. S. Nagendiran, Registered Medical Practitioner
                      qualified from Stanley medical college, Chennai, in the
                      year 1985. He had trained at London university college
                      hospital in the United Kingdom, returned back to his
                      hometown Madurai , and started his general practice in the
                      year 1991 at Arasaradi. Got married to Dr. Devaki , MBBS,
                      DMRD Now Senior Consultant Radiologist and Director of
                      Devaki Scans . Blessed with two sons. Dr. Naveen MBBS
                      MDRD, Dr. Jai Praveen MBBS MD, Dr. Karthika Nandhini MBBS
                      MD ( Daughter in law )
                    </p>
                    <p>
                      His parents are retired government teachers, father is a
                      state and central government best teacher awardee. In the
                      year 1991 Dr. P. S. Nagendiran got married to Dr. Devaki,
                      the radiologist, and was blessed with two sons doing
                      M.B.B.S.
                    </p>
                  </div>
                  <br></br>
                  <div className="sec-title">
                    <span className="sub-title">VISION</span>
                    <p>
                      Providing the safest and highest quality healthcare to our
                      community at an affordable cost.
                    </p>
                  </div>
                  <br></br>
                  <div className="sec-title">
                    <span className="sub-title">MISSION</span>
                    <p>Quality healthcare with humanity</p>
                  </div>
                  <br></br>
                  <div className="sec-title">
                    <span className="sub-title">AWARDS</span>
                    <p>
                      Dr. P. S.Nagendiran was awarded district gov’t, state
                      gov’t, and central gov’t awards - for the best performance
                      of Devaki cancer institute. “The Best Doctor Award” from
                      the Dr. M. G. R. Medical university, Chennai.
                    </p>
                  </div>
                  <br></br>
                  <div className="sec-title">
                    <span className="sub-title">APPRECIATION AWARDS</span>
                    <p>
                      Appreciation award from Dr. A. P. J. Abdul Kalam, while
                      president of India, at Rashtrapati Bhavan, New Delhi Dr.
                      Manmohan Singh now prime minister of India, this year more
                      than 100 awards were received for our best service and
                      performance from various organizations.
                    </p>
                  </div>
                  <br></br>
                </div>
              </div>

              <div className="images-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="video-link">
                    <a
                      href="https://www.youtube.com/watch?v=4UvS3k8D4rs"
                      className="play-btn lightbox-image"
                      data-fancybox="images"
                    >
                      <span className="flaticon-play-button-1"></span>
                    </a>
                  </div>
                  <figure className="image-1">
                    <img src="assets/images/resource/image-1.png" alt="" />
                  </figure>
                  <figure className="image-2">
                    <img src="assets/images/resource/image-2.png" alt="" />
                  </figure>
                  <figure className="image-3">
                    <span className="hex"></span>
                    <img src="assets/images/resource/image-3.png" alt="" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="fun-fact-section-two">
          <div className="auto-container">
            <div className="row">
              <div className="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
                <div className="count-box">
                  <div className="icon-box">
                    <span className="icon flaticon-user-experience"></span>
                  </div>
                  <h4 className="counter-title">Years of Experience</h4>
                  <span className="count-text" data-speed="3000" data-stop="25">
                    25+
                  </span>
                </div>
              </div>

              <div
                className="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp"
                data-wow-delay="400ms"
              >
                <div className="count-box">
                  <div className="icon-box">
                    <span className="icon flaticon-team"></span>
                  </div>
                  <h4 className="counter-title">Medical Specialities</h4>
                  <span
                    className="count-text"
                    data-speed="3000"
                    data-stop="470"
                  >
                    30+
                  </span>
                </div>
              </div>
              <div
                className="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp"
                data-wow-delay="1200ms"
              >
                <div className="count-box">
                  <div className="icon-box">
                    <span className="icon flaticon-add-friend"></span>
                  </div>
                  <h4 className="counter-title">Happy Patients</h4>
                  <span
                    className="count-text"
                    data-speed="3000"
                    data-stop="9036"
                  >
                    10 M+
                  </span>
                </div>
              </div>
              <div
                className="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp"
                data-wow-delay="800ms"
              >
                <div className="count-box">
                  <div className="icon-box">
                    <span className="icon flaticon-hospital"></span>
                  </div>
                  <h4 className="counter-title">Beds</h4>
                  <span
                    className="count-text"
                    data-speed="3000"
                    data-stop="689"
                  >
                    150+
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="model ">
          <VerticalTimeline
            className="line"
            style={{ width: "100% !important" }}
          >
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="1998"
              icon={<img src={timeline} alt="myLogo" />}
            >
              <h6 className="vertical-timeline-element-subtitle">
                BLACK AND WHITE SCALING SCAN WAS INTRODUCED
              </h6>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="1999"
              icon={<img src={timeline} alt="myLogo" />}
            >
              <h6 className="vertical-timeline-element-subtitle">
                WHOLE BODY COLOUR DOPPLER SCAN WAS INTRODUCED
              </h6>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2000"
              icon={<img src={timeline} alt="myLogo" />}
            >
              <h6 className="vertical-timeline-element-subtitle">
                WHOLE BODY CT SCAN (SIEMENS ART MACHINE)
              </h6>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2001"
              icon={<img src={timeline} alt="myLogo" />}
            >
              <h6 className="vertical-timeline-element-subtitle">
                TMT, EEG, EMG, PFT. ECG & COMPUTERIZED LAB
              </h6>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2002"
              icon={<img src={timeline} alt="myLogo" />}
            >
              <h6 className="vertical-timeline-element-subtitle">
                WHOLE BODY MRI SCAN SIEMEN'S CONCERTO - 0.2 T LATEST VERSION
                MACHINE AND INDIA'S FIRST MAMMOMAT 1000 MAMMOGRAPHY MACHINE
              </h6>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2003"
              icon={<img src={timeline} alt="myLogo" />}
            >
              <h6 className="vertical-timeline-element-subtitle">
                ACUSON ASPEN ULTRASOUND SCAN – ASIA’S FIRST MACHINE
              </h6>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2004"
              icon={<img src={timeline} alt="myLogo" />}
            >
              <h6 className="vertical-timeline-element-subtitle">
                FIRST TIME IN SOUTH TAMILNADU WITH DIGITAL X-RAYS & MULTISLICE
                CT SCAN – EAST VELI BRANCH
              </h6>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2005"
              icon={<img src={timeline} alt="myLogo" />}
            >
              <h6 className="vertical-timeline-element-subtitle">
                SEVA SCANS WAS INTRODUCED WITH ALL KIND OF FACILITIES
              </h6>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2006"
              icon={<img src={timeline} alt="myLogo" />}
            >
              <h6 className="vertical-timeline-element-subtitle">
                INAUGURATION DEVAKI SCANS – SIVAKASI BRANCH
              </h6>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2007"
              icon={<img src={timeline} alt="myLogo" />}
            >
              <h6 className="vertical-timeline-element-subtitle">
                DEVAKI CANCER INSTITUTE WITH SIEMENS LINEAR ACCELERATOR, HIGH
                DOSE RATE BRACHYTHERAPY AND TREATMENT PLANNING SYSTEM
              </h6>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2008"
              icon={<img src={timeline} alt="myLogo" />}
            >
              <h6 className="vertical-timeline-element-subtitle">
                TRUST ACTIVITIES HAVE ENTERED INTO SELF HELP GROUPS AMONG WOMEN
                TO IMPROVE THEIR LIFE STYLE
              </h6>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2009"
              icon={<img src={timeline} alt="myLogo" />}
            >
              <h6 className="vertical-timeline-element-subtitle">
                FAMILY HEALTH CARD FOR SELF HELP GROUPS. MORE THAN 1000 UNDER
                PRIVILEGED FAMILIES BENEFITED BY THIS SCHEME
              </h6>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2010"
              icon={<img src={timeline} alt="myLogo" />}
            >
              <h6 className="vertical-timeline-element-subtitle">
                TAMIL NADU FIRST MACHINE S2000 IMPORTED FROM USA
              </h6>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2011"
              icon={<img src={timeline} alt="myLogo" />}
            >
              <h6 className="vertical-timeline-element-subtitle">
                SOUTH INDIA'S FIRST MACHINE CT 128 - SOMATOM IMPORTED FROM USA
              </h6>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
        {/*<section  style={{backgroundImage: `url("assets/images/background/2.jpg")`}}>
				    	<div className="timetable-info">
				        	<div className="appointment-section-three content-column col-lg-12 col-md-12 col-sm-12 order-2 text-center">
			                    <div className="inner-column">
				                    <div className=" ms-5">
				                        <span className="text">Need a Doctor for Check-up?</span>
				                        <h3>Just Make an Appointment and You’re Done!</h3>
				                        <div className="text">Get Your Quote or Call:<br></br> Mobile:+91 9600600888 <br></br> Phone:0452-2288800/31/41</div>
			                        </div>
		                        </div>
	                        </div>
                        </div>
				       <div className="model">
                    		<div className="contact-form-two">
                        		<div className="title-box">
				        			<div className="row timeline2">
                        				<form method="post" action="setappointment.php" id="contact-form">
                            				<div className="row clearfix">
                                				<div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                					<div className="label">
                               							<label for="username">Patient Name</label><br></br>
                                					</div>
                                    				<input type="text" name="username" placeholder="Your Name" required=""/>
                                				</div>
                                				<div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                					<div className="label">
                                						<label for="phone">Phone Number</label><br></br>
                               						</div>
	                                    			<input type="text" name="phone" placeholder="Your Phone" required=""/>
	                                			</div>
	                                 			<div className="col-lg-6 col-md-6 col-sm-12 form-group">
	                                 				<div className="label">
	                                 					<label for="doctors">Select Doctor</label><br></br>
	                                 				</div>
				                                    <select name="doctors" id="doctors" onchange="appointment();" required>
				                                        <option value="default" selected disabled>Doctors</option>
				                                        <option value="Cardiology">Doctor1</option>
				                                        <option value="Neurology">Doctor2</option>
				                                        <option value="Urology">Doctor3</option>
				                                        <option value="Gynecological">Doctor4</option>
				                                        <option value="Pediatrical">Doctor5</option>
				                                        <option value="Laboratory">Doctor6</option>
				                                    </select>
	                                			</div>
	                                			<div className="col-lg-6 col-md-6 col-sm-12 form-group">
	                                				<div className="label">
	                                					<label for="departments">Select Department</label><br></br>
	                                				</div>
				                                    <select name="departments" id="departments" onchange="appointment();" required>
				                                        <option value="default" selected disabled>Select Departments</option>
				                                        <option value="Cardiology">Cardiology</option>
				                                        <option value="Neurology">Neurology</option>
				                                        <option value="Urology">Urology</option>
				                                        <option value="Gynecological">Gynecological</option>
				                                        <option value="Pediatrical">Pediatrical</option>
				                                        <option value="Laboratory">Laboratory</option>
				                                    </select>
				                                </div>
	                                			<div className="col-lg-6 col-md-6 col-sm-12 form-group">
	                                				<div className="label">
	                                					<label for="date">Select Date</label><br></br>
	                                				</div>
	                                    			<input type="date" name="date" placeholder="Select Date" required="" />
                                				</div>
                                				<div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                					<div className="label">
                                						<label for="timing">Select Time</label><br></br>
                                					</div>
				                                    <select name="time" required id="timing">
				                                        <option value="" selected disabled>Select Time</option>
				                                        <option value="" data-value="default" disabled>Please select a department</option>
				                                        <option value="10:00AM - 12:00AM" data-value="Cardiology">10:00AM - 12:00AM</option>
				                                        <option value="12:00AM - 02:00AM" data-value="Cardiology">12:00AM - 02:00AM</option>
				                                        <option value="02:00PM - 04:00PM" data-value="Neurology">02:00PM - 04:00PM</option>
				                                        <option value="04:00PM - 06:00PM" data-value="Neurology">04:00PM - 06:00PM</option>
				                                        <option value="06:00PM - 08:00PM" data-value="Urology">06:00PM - 08:00PM</option>
				                                        <option value="10:00AM - 12:00AM" data-value="Urology">10:00AM - 12:00AM</option>
				                                        <option value="12:00AM - 02:00AM" data-value="Gynecological">12:00AM - 02:00AM</option>
				                                        <option value="02:00PM - 04:00PM" data-value="Gynecological">02:00PM - 04:00PM</option>
				                                        <option value="04:00PM - 06:00PM" data-value="Pediatrical">04:00PM - 06:00PM</option>
				                                        <option value="06:00PM - 08:00PM" data-value="Pediatrical">06:00PM - 08:00PM</option>
				                                        <option value="10:00AM - 12:00AM" data-value="Laboratory">10:00AM - 12:00AM</option>
				                                        <option value="12:00AM - 02:00AM" data-value="Laboratory">12:00AM - 02:00AM</option>
				                                    </select>
                            					</div>
                            					<div className="col-lg-12 col-md-12 col-sm-12 form-group">
                            						<div className="label">
                            							<label for="message">Leave a Message</label><br></br>
                            						</div>
                                					<textarea name="message" maxlength="50" placeholder="Message"></textarea>
                            					</div>
                            					<div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                					<button className="theme-btn btn-style-three small" type="submit" name="submit-form"><span className="btn-title">Submit Now</span></button>
                            					</div>
                        					</div>
                    					</form>
                					</div>
      							</div>
        					</div>
    					</div>
					</section>*/}

        <section className="team-section">
          <div className="auto-container">
            <div className="sec-title text-center">
              <span className="sub-title">Our Doctor</span>
              <h2>Our Dedicated Doctors Team</h2>
              <img className="svg" src="assets/images/svgimage.png" alt="" />
            </div>

            <div className="row">
              <div className="team-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
                <div className="inner-box">
                  <figure className="image">
                    <img src="assets/images/maledr.png" alt="" />
                  </figure>
                  <ul className="social-links">
                    <li>
                      <a href="/#">
                        <span className="fab fa-facebook"></span>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <span className="fab fa-linkedin-in"></span>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <span className="fab fa-twitter"></span>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <span className="fab fa-pinterest"></span>
                      </a>
                    </li>
                  </ul>
                  <div className="info-box">
                    <h4 className="name">
                      <a>Dr.P.S.Nagendiran, M.B.B.S</a>
                    </h4>
                    <span className="designation">
                      Founder & Chairman – Family Physician
                    </span>
                  </div>
                </div>
              </div>

              <div className="team-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
                <div className="inner-box">
                  <figure className="image">
                    <img src="assets/images/maledr.png" alt="" />
                  </figure>
                  <ul className="social-links">
                    <li>
                      <a href="/#">
                        <span className="fab fa-facebook"></span>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <span className="fab fa-linkedin-in"></span>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <span className="fab fa-twitter"></span>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <span className="fab fa-pinterest"></span>
                      </a>
                    </li>
                  </ul>
                  <div className="info-box">
                    <h4 className="name">
                      <a>Dr.N.Jaipraveen, M.D.</a>
                    </h4>
                    <span className="designation">
                      Associate Managing Director - Consultant General Medicine
                    </span>
                  </div>
                </div>
              </div>
              <div className="team-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
                <div className="inner-box">
                  <figure className="image">
                    <img src="assets/images/maledr.png" alt="" />
                  </figure>
                  <ul className="social-links">
                    <li>
                      <a href="/#">
                        <span className="fab fa-facebook"></span>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <span className="fab fa-linkedin-in"></span>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <span className="fab fa-twitter"></span>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <span className="fab fa-pinterest"></span>
                      </a>
                    </li>
                  </ul>
                  <div className="info-box">
                    <h4 className="name">
                      <a>Dr.Manoj Prabhakar M.D.</a>
                    </h4>
                    <span className="designation">
                      Consultant General Medicine
                    </span>
                  </div>
                </div>
              </div>

              <div className="team-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
                <div className="inner-box">
                  <figure className="image">
                    <img src="assets/images/femaledr.png" alt="" />
                  </figure>
                  <ul className="social-links">
                    <li>
                      <a href="/#">
                        <span className="fab fa-facebook"></span>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <span className="fab fa-linkedin-in"></span>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <span className="fab fa-twitter"></span>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <span className="fab fa-pinterest"></span>
                      </a>
                    </li>
                  </ul>
                  <div className="info-box">
                    <h4 className="name">
                      <a>Dr.K.Devaki DMRD.</a>
                    </h4>
                    <span className="designation">Consultant Radiologist</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="skill-section">
          <div className="outer-container clearfix">
            <div className="skill-column">
              <div className="inner-column">
                <div className="sec-title">
                  <span className="sub-title">BEST OF THE BEST</span>
                  <h2>High End Equipments.</h2>
                  <div className="text">
                    Surgery of the respiratory tract is generally performed by
                    specialists in cardiothoracic surgery (or thoracic surgery)
                    though minor procedures may be performed by pulmonologists.
                    Pulmonology is closely.
                  </div>
                </div>

                <div className="btn-box">
                  <a
                    href="specialities"
                    className="theme-btn btn-style-four hover2"
                  >
                    <span className="btn-title">Learn More</span>
                  </a>
                </div>
              </div>
            </div>

            <div
              className="image-column"
              style={{
                backgroundImage: `url("assets/images/about/highendequipments.jpg")`,
              }}
            >
              <div className="image-box">
                <figure className="image">
                  <img src="assets/images/resource/image-7.jpg" alt="" />
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/*<section className="about-section">
				        <div className="auto-container">
				            <div className="row">
				                <div className="content-column col-lg-12 col-md-12 col-sm-12 order-2">
				                    <div className="inner-column">
				                        <div className="sec-title">
				                            <span className="sub-title">Info</span>
				                            <h2>Visitor's Information</h2>
				                            <img className="svg" src="assets/images/svgimage.png" alt=""/>
				                            <p>The visiting regulations have been formulated in the interest of the patient’s well-being. You are requested to adhere to the regulations laid down by the management.</p>

											<p><b>Visitors are permitted entry into the ward only during visiting hours
												Visitors should carry their visitor’s pass on entry to the ward
												Flowers and cameras are not allowed in the hospital
												Visiting Hours: Between 4.00 pm and 6.00 pm</b></p>
				                        </div>
				                        <br></br>
				                        <div className="sec-title">
				                            <span className="sub-title">Information for Care Takers</span>
				                            <p>Certain regulations are laid down by the hospital management for the security and convenience of the patients as well as the staff. Your cooperation in this regard is very much appreciated.</p>
				                            <p><b>Only one Caretaker is permitted to be with the patient
												Entry into the ICU is restricted except during visiting hours
												Caretakers should carry their visitor’s pass on entry to the ward
												Flowers and cameras are not allowed in the hospital.</b></p>

				                        </div>
				                        <br></br>
				                    </div>
				                </div>

				              
				            </div>
				        </div>

				    </section>

				    <section className="fun-fact-section-two">
				        <div className="auto-container">
				        <span className="sub-title"><b>The following facilities are available for the convenience of the visitors / Care Takers</b></span>
				    <br></br><br></br>
				            <div className="row">
				                <div className="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
				                    <div className="count-box">
				                        <div className="icon-box"><span className="icon"><img src="assets/images/services/canteen.png" alt=""/></span></div>
				                        <h4 className="counter-title">Restaurants/canteens</h6>
				                    </div>
				                </div>

				                <div className="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="400ms">
				                    <div className="count-box">
				                        <div className="icon-box"><span className="icon"><img src="assets/images/services/pharmacy.png" alt=""/></span></div>
				                        <h4 className="counter-title">24-hr pharmacy</h6>
				                    </div>
				                </div>

				                <div className="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="800ms">
				                    <div className="count-box">
				                        <div className="icon-box"><span className="icon"><img src="assets/images/services/accomodation.png" alt=""/></span></div>
				                        <h4 className="counter-title">Accommodation</h6>
				                    </div>
				                </div>

				                <div className="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="1200ms">
				                    <div className="count-box">
				                        <div className="icon-box"><span className="icon"><img src="assets/images/services/parking.png" alt=""/></span></div>
				                        <h4 className="counter-title">Parking</h6>
				                    </div>
				                </div>
				            </div>
				        </div>
				    </section>*/}

        {/*<section className="testimonial-section">
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
				    </section>*/}

        {/*<section className="time-table-section">
				        <div className="auto-container">
				            <div className="table-outer">
				                <table className="doctors-time-table">
				                    <thead>
				                        <tr> 
				                            <th className="dark">Time Table</th>
				                            <th>Monday</th>
				                            <th>Tuesday</th>
				                            <th>Wednesday</th>
				                            <th>Thrusday</th>
				                            <th>Friday</th>
				                            <th>Saturday</th>
				                            <th>Sunday</th>
				                        </tr>
				                    </thead>

				                    <tbody>
				                        <tr>
				                            <th>08:00am</th>
				                            <td>
				                                <strong>Dental Care</strong>
				                                <p> 8:00 am - 9:00 am <br></br> Room: 303</p>
				                                <div className="doctor-info">
				                                    <figure className="thumb"><img src="assets/images/resource/doctor-thumb.jpg" alt=""/></figure>
				                                    <h4 className="name">Dr. Tania Riham</h6>
				                                    
				                                    <a href="/#" className="theme-btn btn-style-one "><span className="btn-title">Appointment</span></a>
				                                </div>
				                            </td>
				                            <td className="empty"></td>
				                            <td>
				                                <strong>Orthopaedics</strong>
				                                <p> 8:00 am - 9:00 am <br></br> Room: 303</p>
				                                <div className="doctor-info">
				                                    <figure className="thumb"><img src="assets/images/resource/doctor-thumb.jpg" alt=""/></figure>
				                                    <h4 className="name">Dr. Tania Riham</h6>
				                                    <a href="/#" className="theme-btn btn-style-one"><span className="btn-title">Appointment</span></a>
				                                </div>
				                            </td>
				                            <td className="empty"></td>
				                            <td>
				                                <strong>Medicine</strong>
				                                <p> 8:00 am - 9:00 am <br></br> Room: 303</p>
				                                <div className="doctor-info">
				                                    <figure className="thumb"><img src="assets/images/resource/doctor-thumb.jpg" alt=""/></figure>
				                                    <h4 className="name">Dr. Tania Riham</h6>
				                                    <a href="/#" className="theme-btn btn-style-one"><span className="btn-title">Appointment</span></a>
				                                </div>
				                            </td>
				                            <td className="empty"></td>
				                            <td>
				                                <strong>Orthopaedics</strong>
				                                <p> 8:00 am - 9:00 am <br></br> Room: 303</p>
				                                <div className="doctor-info">
				                                    <figure className="thumb"><img src="assets/images/resource/doctor-thumb.jpg" alt=""/></figure>
				                                    <h4 className="name">Dr. Tania Riham</h6>
				                                    <a href="/#" className="theme-btn btn-style-one"><span className="btn-title">Appointment</span></a>
				                                </div>
				                            </td>
				                        </tr>

				                        <tr>
				                            <th>10:00am</th>
				                            <td className="empty"></td>
				                            <td>
				                                <strong>Gynecology</strong>
				                                <p> 9:00 am - 10:00 am <br></br> Room: 301</p>
				                                <div className="doctor-info">
				                                    <figure className="thumb"><img src="assets/images/resource/doctor-thumb.jpg" alt=""/></figure>
				                                    <h4 className="name">Dr. Tania Riham</h6>
				                                    <a href="/#" className="theme-btn btn-style-one"><span className="btn-title">Appointment</span></a>
				                                </div>
				                            </td>
				                            <td className="empty"></td>
				                            <td>
				                                <strong>Cardiology</strong>
				                                <p> 9:00 am - 10:00 am <br></br> Room: 301</p>
				                                <div className="doctor-info">
				                                    <figure className="thumb"><img src="assets/images/resource/doctor-thumb.jpg" alt=""/></figure>
				                                    <h4 className="name">Dr. Tania Riham</h6>
				                                    <a href="/#" className="theme-btn btn-style-one"><span className="btn-title">Appointment</span></a>
				                                </div>
				                            </td>
				                            <td className="empty"></td>
				                            <td>
				                                <strong>Dental Care</strong>
				                                <p> 9:00 am - 10:00 am <br></br> Room: 301</p>
				                                <div className="doctor-info">
				                                    <figure className="thumb"><img src="assets/images/resource/doctor-thumb.jpg" alt=""/></figure>
				                                    <h4 className="name">Dr. Tania Riham</h6>
				                                    <a href="/#" className="theme-btn btn-style-one"><span className="btn-title">Appointment</span></a>
				                                </div>
				                            </td>
				                            <td className="empty"></td>
				                        </tr>

				                        <tr>
				                            <th>11:00am</th>
				                            <td>
				                                <strong>Dental Care</strong>
				                                <p> 8:00 am - 9:00 am <br></br> Room: 303</p>
				                                <div className="doctor-info">
				                                    <figure className="thumb"><img src="assets/images/resource/doctor-thumb.jpg" alt=""/></figure>
				                                    <h4 className="name">Dr. Tania Riham</h6>
				                                    <a href="/#" className="theme-btn btn-style-one"><span className="btn-title">Appointment</span></a>
				                                </div>
				                            </td>
				                            <td className="empty"></td>
				                            <td>
				                                <strong>Orthopaedics</strong>
				                                <p> 8:00 am - 9:00 am <br></br> Room: 303</p>
				                                <div className="doctor-info">
				                                    <figure className="thumb"><img src="assets/images/resource/doctor-thumb.jpg" alt=""/></figure>
				                                    <h4 className="name">Dr. Tania Riham</h6>
				                                    <a href="/#" className="theme-btn btn-style-one"><span className="btn-title">Appointment</span></a>
				                                </div>
				                            </td>
				                            <td className="empty"></td>
				                            <td>
				                                <strong>Medicine</strong>
				                                <p> 8:00 am - 9:00 am <br></br> Room: 303</p>
				                                <div className="doctor-info">
				                                    <figure className="thumb"><img src="assets/images/resource/doctor-thumb.jpg" alt=""/></figure>
				                                    <h4 className="name">Dr. Tania Riham</h6>
				                                    <a href="/#" className="theme-btn btn-style-one"><span className="btn-title">Appointment</span></a>
				                                </div>
				                            </td>
				                            <td className="empty"></td>
				                            <td>
				                                <strong>Orthopaedics</strong>
				                                <p> 8:00 am - 9:00 am <br></br> Room: 303</p>
				                                <div className="doctor-info">
				                                    <figure className="thumb"><img src="assets/images/resource/doctor-thumb.jpg" alt=""/></figure>
				                                    <h4 className="name">Dr. Tania Riham</h6>
				                                    <a href="/#" className="theme-btn btn-style-one"><span className="btn-title">Appointment</span></a>
				                                </div>
				                            </td>
				                        </tr>

				                        <tr>
				                            <th>11:30am</th>
				                            <td className="empty"></td>
				                            <td>
				                                <strong>Gynecology</strong>
				                                <p> 9:00 am - 10:00 am <br></br> Room: 301</p>
				                                <div className="doctor-info">
				                                    <figure className="thumb"><img src="assets/images/resource/doctor-thumb.jpg" alt=""/></figure>
				                                    <h4 className="name">Dr. Tania Riham</h6>
				                                    <a href="/#" className="theme-btn btn-style-one"><span className="btn-title">Appointment</span></a>
				                                </div>
				                            </td>
				                            <td className="empty"></td>
				                            <td>
				                                <strong>Cardiology</strong>
				                                <p> 9:00 am - 10:00 am <br></br>Room: 301</p>
				                                <div className="doctor-info">
				                                    <figure className="thumb"><img src="assets/images/resource/doctor-thumb.jpg" alt=""/></figure>
				                                    <h4 className="name">Dr. Tania Riham</h6>
				                                    <a href="/#" className="theme-btn btn-style-one"><span className="btn-title">Appointment</span></a>
				                                </div>
				                            </td>
				                            <td className="empty"></td>
				                            <td>
				                                <strong>Dental Care</strong>
				                                <p> 9:00 am - 10:00 am <br></br> Room: 301</p>
				                                <div className="doctor-info">
				                                    <figure className="thumb"><img src="assets/images/resource/doctor-thumb.jpg" alt=""/></figure>
				                                    <h4 className="name">Dr. Tania Riham</h6>
				                                    <a href="/#" className="theme-btn btn-style-one"><span className="btn-title">Appointment</span></a>
				                                </div>
				                            </td>
				                            <td className="empty"></td>
				                        </tr>

				                        <tr>
				                            <th>12:00am</th>
				                            <td>
				                                <strong>Dental Care</strong>
				                                <p> 8:00 am - 9:00 am <br></br> Room: 303</p>
				                                <div className="doctor-info">
				                                    <figure className="thumb"><img src="assets/images/resource/doctor-thumb.jpg" alt=""/></figure>
				                                    <h4 className="name">Dr. Tania Riham</h6>
				                                    <a href="/#" className="theme-btn btn-style-one"><span className="btn-title">Appointment</span></a>
				                                </div>
				                            </td>
				                            <td className="empty"></td>
				                            <td>
				                                <strong>Orthopaedics</strong>
				                                <p> 8:00 am - 9:00 am <br></br> Room: 303</p>
				                                <div className="doctor-info">
				                                    <figure className="thumb"><img src="assets/images/resource/doctor-thumb.jpg" alt=""/></figure>
				                                    <h4 className="name">Dr. Tania Riham</h6>
				                                    <a href="/#" className="theme-btn btn-style-one"><span className="btn-title">Appointment</span></a>
				                                </div>
				                            </td>
				                            <td className="empty"></td>
				                            <td>
				                                <strong>Medicine</strong>
				                                <p> 8:00 am - 9:00 am <br></br>Room: 303</p>
				                                <div className="doctor-info">
				                                    <figure className="thumb"><img src="assets/images/resource/doctor-thumb.jpg" alt=""/></figure>
				                                    <h4 className="name">Dr. Tania Riham</h6>
				                                    <a href="/#" className="theme-btn btn-style-one"><span className="btn-title">Appointment</span></a>
				                                </div>
				                            </td>
				                            <td className="empty"></td>
				                            <td>
				                                <strong>Orthopaedics</strong>
				                                <p> 8:00 am - 9:00 am <br></br> Room: 303</p>
				                                <div className="doctor-info">
				                                    <figure className="thumb"><img src="assets/images/resource/doctor-thumb.jpg" alt=""/></figure>
				                                    <h4 className="name">Dr. Tania Riham</h6>
				                                    <a href="/#" className="theme-btn btn-style-one"><span className="btn-title">Appointment</span></a>
				                                </div>
				                            </td>
				                        </tr>

				                        <tr>
				                            <th>01:00pm</th>
				                            <td className="empty"></td>
				                            <td>
				                                <strong>Gynecology</strong>
				                                <p> 9:00 am - 10:00 am <br></br> Room: 301</p>
				                                <div className="doctor-info">
				                                    <figure className="thumb"><img src="assets/images/resource/doctor-thumb.jpg" alt=""/></figure>
				                                    <h4 className="name">Dr. Tania Riham</h6>
				                                    <a href="/#" className="theme-btn btn-style-one"><span className="btn-title">Appointment</span></a>
				                                </div>
				                            </td>
				                            <td className="empty"></td>
				                            <td>
				                                <strong>Cardiology</strong>
				                                <p> 9:00 am - 10:00 am <br></br>Room: 301</p>
				                                <div className="doctor-info">
				                                    <figure className="thumb"><img src="assets/images/resource/doctor-thumb.jpg" alt=""/></figure>
				                                    <h4 className="name">Dr. Tania Riham</h6>
				                                    <a href="/#" className="theme-btn btn-style-one"><span className="btn-title">Appointment</span></a>
				                                </div>
				                            </td>
				                            <td className="empty"></td>
				                            <td>
				                                <strong>Dental Care</strong>
				                                <p> 9:00 am - 10:00 am <br></br> Room: 301</p>
				                                <div className="doctor-info">
				                                    <figure className="thumb"><img src="assets/images/resource/doctor-thumb.jpg" alt=""/></figure>
				                                    <h4 className="name">Dr. Tania Riham</h6>
				                                    <a href="/#" className="theme-btn btn-style-one"><span className="btn-title">Appointment</span></a>
				                                </div>
				                            </td>
				                            <td className="empty"></td>
				                        </tr>

				                        <tr>
				                            <th>02:00pm</th>
				                            <td>
				                                <strong>Dental Care</strong>
				                                <p> 8:00 am - 9:00 am <br></br> Room: 303</p>
				                                <div className="doctor-info">
				                                    <figure className="thumb"><img src="assets/images/resource/doctor-thumb.jpg" alt=""/></figure>
				                                    <h4 className="name">Dr. Tania Riham</h6>
				                                    <a href="/#" className="theme-btn btn-style-one"><span className="btn-title">Appointment</span></a>
				                                </div>
				                            </td>
				                            <td className="empty"></td>
				                            <td>
				                                <strong>Orthopaedics</strong>
				                                <p> 8:00 am - 9:00 am <br></br> Room: 303</p>
				                                <div className="doctor-info">
				                                    <figure className="thumb"><img src="assets/images/resource/doctor-thumb.jpg" alt=""/></figure>
				                                    <h4 className="name">Dr. Tania Riham</h6>
				                                    <a href="/#" className="theme-btn btn-style-one"><span className="btn-title">Appointment</span></a>
				                                </div>
				                            </td>
				                            <td className="empty"></td>
				                            <td>
				                                <strong>Medicine</strong>
				                                <p> 8:00 am - 9:00 am <br></br> Room: 303</p>
				                                <div className="doctor-info">
				                                    <figure className="thumb"><img src="assets/images/resource/doctor-thumb.jpg" alt=""/></figure>
				                                    <h4 className="name">Dr. Tania Riham</h6>
				                                    <a href="/#" className="theme-btn btn-style-one"><span className="btn-title">Appointment</span></a>
				                                </div>
				                            </td>
				                            <td className="empty"></td>
				                            <td>
				                                <strong>Orthopaedics</strong>
				                                <p> 8:00 am - 9:00 am <br></br> Room: 303</p>
				                                <div className="doctor-info">
				                                    <figure className="thumb"><img src="assets/images/resource/doctor-thumb.jpg" alt=""/></figure>
				                                    <h4 className="name">Dr. Tania Riham</h6>
				                                    <a href="/#" className="theme-btn btn-style-one"><span className="btn-title">Appointment</span></a>
				                                </div>
				                            </td>
				                        </tr>
				                    </tbody>
				                </table>
				            </div>
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
				    </section>*/}
        <footer className="main-footer">
          <div className="widgets-section">
            <div className="auto-container">
              <div className="row">
                <div className="big-column col-xl-6 col-lg-12 col-md-12 col-sm-12">
                  <div className="row">
                    <div className="footer-column col-xl-7 col-lg-6 col-md-6 col-sm-12">
                      <div className="footer-widget about-widget">
                        <div className="logo">
                          <a href=" / ">
                            <img
                              className="logoheader1"
                              src="assets/images/logodev.png"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="text">
                          <p>
                            Devaki specialty hospital was established by Dr. P.
                            S. Nagendiran, M.B.B.S. & Dr. K. Devaki M.B.B.S.
                            D.M.R.D. We can provide the following facilities:
                            150 bedded hospitals, an airconditioned operation
                            theatre, pharmacy attached to the hospital, ECG &
                            clinical laboratory facilities.
                          </p>
                        </div>
                        <ul className="social-icon-three">
                          <li>
                            <a
                              href="https://www.youtube.com/channel/UCDRHhVdtq1OhYv894_Bzg9A/"
                              target="_blank"
                            >
                              {" "}
                              <i className="fab fa-youtube"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.instagram.com/devaki_speciality_mdu/"
                              target="_blank"
                            >
                              <i className="fab fa-instagram"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.facebook.com/profile.php?id=100064183981136/"
                              target="_blank"
                            >
                              <i className="fab fa-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://twitter.com/devakiShospital"
                              target="_blank"
                            >
                              <i className="fab fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="mailto:mail@devakihospital.com">
                              <i className="fab flaticon-email"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="footer-column col-xl-5 col-lg-6 col-md-6 col-sm-12">
                      <div className="footer-widget">
                        <h2 className="widget-title">Pages</h2>
                        <ul className="user-links">
                          <li>
                            <a href="about">About</a>
                          </li>
                          <li>
                            <a href="specialities">Specialities</a>
                          </li>
                          <li>
                            <a href="services">Patient Care Services</a>
                          </li>
                          <li>
                            <a href="facilities">Our Services</a>
                          </li>

                          <li>
                            <a href="career">Career</a>
                          </li>
                          <li>
                            <a href="contact">Contact</a>
                          </li>
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
                              <div className="text">
                                26, Theni Main Road, Arasaradi, Madurai
                              </div>
                            </li>

                            <li>
                              <span className="icon flaticon-call-1"></span>
                              <a href="tel:+91 9600600888">
                                <strong>
                                  Mobile:+91 9600600888 Phone:
                                  0452-2288800,31,41
                                </strong>
                              </a>
                            </li>

                            <li>
                              <span className="icon flaticon-email"></span>
                              <div className="text">
                                Do you have a Question?<br></br>
                                <a href="mailto:mail@devakihospital.com">
                                  <strong>mail@devakihospital.com</strong>
                                </a>
                              </div>
                            </li>

                            <li>
                              <span className="icon flaticon-back-in-time"></span>
                              <div className="text">
                                Working hours:<br></br>
                                <strong>24*7</strong>
                              </div>
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
            <a href="/#">
              <div
                className="scroll-to-top scroll-to-target"
                data-target="html"
              >
                <span className="fa fa-angle-up"></span>
              </div>
            </a>

            <div className="auto-container">
              <div className="inner-container clearfix">
                <div className="footer-nav">
                  <ul className="clearfix">
                    <li>
                      <a href="about">About</a>
                    </li>
                    <li>
                      <a href="contact">Contact</a>
                    </li>
                    <li>
                      <a href="career">Career</a>
                    </li>
                  </ul>
                </div>

                <div className="copyright-text">
                  <p>
                    Copyright © 2026 <a href="/#">Devaki Hospital </a> All
                    Rights Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default About;
