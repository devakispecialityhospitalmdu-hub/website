import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./svg.css";
import BasicModal from "./modal";
import RevSlider, { Slide, Caption } from 'react-rev-slider';
import Slider from "./slider";
import Slider1 from "./slider1";
import Slider2 from "./slider2";
import Sidebar from './sidebar';
import Dropdown from './dropdown';
import Dropdown1 from './dropdown1';
import Dropdown2 from './dropdown2';
import Dropdown3 from './dropdown3';
import BasicModal1 from './modalnew';
import Button from '@mui/material/Button';
const Home = () => {

	return (

		<>

			<div className="page-wrapper">
				{/*<div className="preloader"></div>*/}

				<header className="main-header header-style-one">
					<div className="header-top">
						<div className="auto-container">
							<div className="inner-container">
								<div className="top-left">
									<ul className="contact-list clearfix">
										<li><i className="flaticon-hospital-1"></i>26, Theni Main Road, Arasaradi, Madurai</li>
										<li><i className="flaticon-back-in-time"></i>24*7</li>
										<li style={{ color: "red" }}><i style={{ color: "red" }} className="icon flaticon-phone"></i>Emergency Casualty: +91 8190034500</li>
										<li style={{ color: "#25D366" }}><a href="https://wa.me/+919600600888" class="whatsapp_float" target="_blank" rel="noopener noreferrer" style={{ color: "#25D366" }}><i style={{ color: "#25D366" }} className="fab fa-whatsapp"></i>Enquiry: + 91 9600600888</a></li>
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
								</div>	                </div>
						</div>
					</div>
					<div className="header-lower">
						<div className="auto-container">

							<div className="main-box" >
								<div className="logo-box">
									<div className="logo"><a href=" /"><img className="logoheader1" src="assets/images/logodev.png" alt="" title="" /></a></div>
								</div>

								<div className="nav-outer ">
									<nav className="nav main-menu">
										<ul className="navigation" id="navbar">

											{/*<li className="current">
				                                    <a href="/"><specialities>Home</span></a>
				                                </li>*/}

											<li className="ms-5">
												<a href="about"><span>About</span></a>
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
											          	<li><a href="visitorinfo">Visitors & Care Takers Info</a></li>
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
												<a href="career"><span>Career</span></a>
											</li>

											<li>
												<a href="contact"><span>Contact</span></a>
											</li>
										</ul>
									</nav>


									<div className="outer-box">
										{/*<BasicModal></BasicModal>*/}

										{/*<BasicModal1></BasicModal1>*/}

										<BasicModal1></BasicModal1>

									</div>
								</div>
							</div>
						</div>
					</div>


					<div className="sticky-header animated slideInDown">
						<div className="auto-container">
							<div className="main-box">
								<div className="logo-box">
									<div className="logo"><a href=" "><img className="logoscroll" src="assets/images/logodev.png" alt="" title="" /></a></div>
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
						<div className="logo"><a href="/"><img className="logoheader" src="assets/images/logodev.png" alt="" title="" /></a></div>
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
									<input type="text" name="search-field" placeholder="Search..." required="" />
									<button type="submit"><i className="flaticon-magnifying-glass"></i></button>
								</div>
							</form>
						</div>
					</div>
				</header>

				<Slider1></Slider1>

				{/*<Slider></Slider>*/}
				{/*<section className="top-features d-lg-none">
				        <div className="auto-container">
				            <div className="row">
				            <div className="feature-block col-lg-3 col-md-6 col-sm-12"></div>
				                <div className="feature-block col-lg-6 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <p className="titleheading">Welcome To Devaki Speciality Hospital,</p>
				                        <h4>We take care our patients health<br></br></h4>
                        				<p><b>Vision</b><br></br>Providing safest & highest Quality Healthcare to our community at an Affordable cost.<br></br><b>Mission </b> <br></br>Quality Healthcare with Humanity.</p>
				                    	<a href="about" className="theme-btn btn-style-two hover mt-3 buttonspace"><span className="btn-title">About Us</span></a>
                            			<a href="services" className="theme-btn btn-style-two hover mt-3 ms-5"><span className="btn-title">Our Services</span></a>
				                    </div>
				                </div>
				                <div className="feature-block col-lg-3 col-md-6 col-sm-12"></div>
				            </div>
				        </div>
				    </section>
				    <section className="top-features">
				        <div className="auto-container">
				            <div className="row">
				                <div className="feature-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon flaticon-charity"></span>
				                        <h4><a href="/#">Quality & Safety</a></h4>
				                    </div>
				                </div>

				                <div className="feature-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon flaticon-lifeline"></span>
				                        <h4><a href="/#">Leading Technology</a></h4>
				                    </div>
				                </div>

				                <div className="feature-block col-lg-4 col-md-6 col-sm-12">
				                    <div className="inner-box">
				                        <span className="icon flaticon-doctor"></span>
				                        <h4><a href="/#">Experts by Experience</a></h4>
				                    </div>
				                </div>
				            </div>
				        </div>
				    </section>*/}
				<section className="about-section">
					<div className="auto-container">
						<div className="row">
							<div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
								<div className="inner-column">
									<div className="sec-title">
										<span className="sub-title">OUR MEDICAL</span>
										<h2>We're setting Standards in Research what's more, Clinical Care.</h2>
										<img className="svg1" src="assets/images/svgimage.png" alt="" />
										<p>Devaki specialty hospital is a multispeciality hospital which is situated at 26, theni main road Madurai.</p>
										<p>Devaki specialty hospital was established by dr. P. S. Nagendiran, m.B.B.S. & dr. K. Devakim.B.B.S. D.M.R.D. We are able to provide the following facilities:
											100 bedded hospital, airconditioned operation theatre, pharmacy attached with the hospital, ECG & clinical laboratory facilities.</p>
									</div>
									<div className="link-box mb-5">
										<a href="about" className="hover theme-btn btn-style-two hover"><span className="btn-title">More About</span></a>
									</div>

								</div>


							</div>

							<div className="images-column col-lg-6 col-md-12 col-sm-12">
								<div className="inner-column">
									<div className="video-link">
										<a href="https://www.youtube.com/watch?v=UALaUm9yN8U" className="play-btn lightbox-image" data-fancybox="images"><span className="flaticon-play-button-1"></span></a>
									</div>
									<figure className="image-1"><img src="assets/images/resource/image-1.png" alt="" /></figure>
									<figure className="image-2"><img src="assets/images/resource/image-2.png" alt="" /></figure>
									<figure className="image-3">
										<span className="hex"></span>
										<img src="assets/images/resource/image-3.png" alt="" />
									</figure>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/*<div className="auto-container text-center">
				    <h2 className="p-2">Our Success Story!!</h2>
				    <img className="svg" src="assets/images/svgimage.png" alt=""/>
				    <Slider2></Slider2>
				    </div>*/}
				<section className="services-section">
					<div className="auto-container">
						<div className="sec-title text-center">
							<span className="sub-title">OUR SERVICES</span>
							<h2>We Care Our Patients.</h2>
							<img className="svg" src="assets/images/svgimage.png" alt="" />
						</div>

						<div className="row">
							<div className="service-block col-lg-4 col-md-6 col-sm-12">
								<div className="inner-box">
									<span className="icon flaticon-heartbeat"></span>
									<h5><a href="/#">Regular Health Checks</a></h5>
									<div className="text">You don’t get sick in a day, we provide daily check-ups to keep your health in check.</div>
								</div>
							</div>
							<div className="service-block col-lg-4 col-md-6 col-sm-12">
								<div className="inner-box">
									<span className="icon flaticon-surgery-room"></span>
									<h5><a href="/#">Emergency Services</a></h5>
									<div className="text">We have the right tools and teams with progressive and secure services to maneuver you into a healthy state.</div>
								</div>
							</div>

							<div className="service-block col-lg-4 col-md-6 col-sm-12">
								<div className="inner-box">
									<span className="icon flaticon-pharmacy"></span>
									<h5><a href="/#">Round-the-clock Pharmacy</a></h5>
									<div className="text">All medicines will be provided to you by our in-house pharmacy with 100% availability and alternatives at all times.</div>
								</div>
							</div>
							<div className="service-block col-lg-4 col-md-6 col-sm-12">
								<div className="inner-box">
									<span className="icon flaticon-transport"></span>
									<h5><a href="/#">Ambulance Services</a></h5>
									<div className="text">Our hotlines and hospital phone numbers respond immediately and our ambulances have strong support systems built to catch and save every breath.</div>
								</div>
							</div>
							<div className="service-block col-lg-4 col-md-6 col-sm-12">
								<div className="inner-box">
									<span className="icon flaticon-lab"></span>
									<h5><a href="/#">Pathology</a></h5>
									<div className="text">Accurate, accessible, and all-inclusive lab tests with skilled diagnosticians to help you understand your health better.</div>
								</div>
							</div>
							<div className="service-block col-lg-4 col-md-6 col-sm-12">
								<div className="inner-box">
									<span className="icon flaticon-first-aid"></span>
									<h5><a href="/#">Intensive Care</a></h5>
									<div className="text">No stone is left unturned to nurture and save a life, we give our everything and anything with 24/7 supervision.</div>
								</div>
							</div>

						</div>

					</div>
					<div className="row">
						<div className="service-block col-lg-4 col-md-6 col-sm-12">

						</div>
						<div className="service-block col-lg-4 col-md-6 col-sm-12">
							<div className="inner-box">
								<div className="link-box">
									<a href="facilities" className="theme-btn btn-style-two hover"><span className="btn-title">Read More</span></a>
								</div>
							</div>
						</div>
						<div className="service-block col-lg-4 col-md-6 col-sm-12">

						</div>
					</div>
				</section>
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
									<figure className="image"><img src="assets/images/maledr.png" alt="" /></figure>
									<ul className="social-links">
										<li><a href="/#"><span className="fab fa-facebook"></span></a></li>
										<li><a href="/#"><span className="fab fa-linkedin-in"></span></a></li>
										<li><a href="/#"><span className="fab fa-twitter"></span></a></li>
										<li><a href="/#"><span className="fab fa-pinterest"></span></a></li>
									</ul>
									<div className="info-box">
										<h4 className="name"><a href="doctor-detail">Dr.P.S.Nagendiran, M.B.B.S</a></h4>
										<span className="designation">Founder & Chairman – Family Physician</span>
									</div>
								</div>
							</div>

							<div className="team-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
								<div className="inner-box">
									<figure className="image"><img src="assets/images/maledr.png" alt="" /></figure>
									<ul className="social-links">
										<li><a href="/#"><span className="fab fa-facebook"></span></a></li>
										<li><a href="/#"><span className="fab fa-linkedin-in"></span></a></li>
										<li><a href="/#"><span className="fab fa-twitter"></span></a></li>
										<li><a href="/#"><span className="fab fa-pinterest"></span></a></li>
									</ul>
									<div className="info-box">
										<h4 className="name"><a href="doctor-detail">Dr.N.Jaipraveen, M.D.</a></h4>
										<span className="designation">Associate Managing Director - Consultant General Medicine</span>
									</div>
								</div>
							</div>
							<div className="team-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
								<div className="inner-box">
									<figure className="image"><img src="assets/images/maledr.png" alt="" /></figure>
									<ul className="social-links">
										<li><a href="/#"><span className="fab fa-facebook"></span></a></li>
										<li><a href="/#"><span className="fab fa-linkedin-in"></span></a></li>
										<li><a href="/#"><span className="fab fa-twitter"></span></a></li>
										<li><a href="/#"><span className="fab fa-pinterest"></span></a></li>
									</ul>
									<div className="info-box">
										<h4 className="name"><a href="doctor-detail">Dr.Manoj Prabhakar M.D.</a></h4>
										<span className="designation">Consultant General Medicine</span>
									</div>
								</div>
							</div>

							<div className="team-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
								<div className="inner-box">
									<figure className="image"><img src="assets/images/femaledr.png" alt="" /></figure>
									<ul className="social-links">
										<li><a href="/#"><span className="fab fa-facebook"></span></a></li>
										<li><a href="/#"><span className="fab fa-linkedin-in"></span></a></li>
										<li><a href="/#"><span className="fab fa-twitter"></span></a></li>
										<li><a href="/#"><span className="fab fa-pinterest"></span></a></li>
									</ul>
									<div className="info-box">
										<h4 className="name"><a href="doctor-detail">Dr.K.Devaki DMRD.</a></h4>
										<span className="designation">Consultant Radiologist</span>
									</div>
								</div>
							</div>
						</div>

					</div>
				</section>
				<section className="services-section">
					<div className="auto-container mt-5">
						<div className="row">
							<div className="content-column col-lg-3 col-md-12 col-sm-12 order-2"></div>
							<div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
								<div className="inner-column">
									<div className="sec-title">
										<h3 className="pt-5">Why to Choose Devaki Speciality Hospital?</h3>
										<img className="svg text-center" src="assets/images/svgimage.png" alt="" />
										<ul className="list-style-one">
											<li>CMCHIS scheme available in namai kakkum 48, cardiology & cardiothoracic surgery, oncology, nephrology, CT, MRI.</li>
											<li>Best doctors in the city</li>
											<li>International standard health care at an affordable cost.</li>
											<li>State-of-the-art modular operation theatres with lafs.</li>
											<li>One of the biggest dialysis departments in the district.</li>
											<li>All specialties available under one roof.</li>
											<li>High-end equipment with advanced leading technology.</li>
											<li>24/7 emergency department.</li>
											<li>Highly advanced radiology/radiation department.</li>
											<li>Medical gastroenterology department which provides all procedures.</li>
										</ul>
										<br></br>
									</div>
								</div>
							</div>
							<div className="content-column col-lg-3 col-md-12 col-sm-12 order-2"></div>

						</div>
					</div>
				</section>
				{/*<section className="appointment-section">
				        <div className="image-layer" style={{backgroundImage: `url("assets/images/background/2.jpg")`}}></div>
				        <div className="auto-container">
				            <div className="row">
				                <div className="content-column col-lg-6 col-md-12 col-sm-12">
				                    <div className="inner-column">
				                        <span className="title">Need a Doctor for Check-up?</span>
				                        <h2>Just Make an Appointment  <br></br>and You’re Done!</h2>
				                        <div className="number">Get Your Quote or Call:<br></br> Mobile:+91 9600600888 <br></br> Phone:0452-2288800,31,41</div>
				                        <a href="appointment" className="theme-btn btn-style-three"><span className="btn-title">Get an Appointment</span></a>
				                    </div>
				                </div>
				                <div className="image-column col-lg-6 col-md-12 col-sm-12">
				                    <figure className="image"><img src="assets/images/resource/image-4.png" alt=""/></figure>
				                </div>
				            </div>

				            <div className="fun-fact-section">
				                <div className="row">
				                    <div className="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
				                        <div className="count-box">
				                            <div className="icon-box"><span className="icon flaticon-user-experience"></span></div>
				                            <h4 className="counter-title">Years of Experience</h4>
				                            <span className="count-text" data-speed="3000" data-stop="25">0</span>
				                        </div>
				                    </div>
				                    <div className="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="400ms">
				                        <div className="count-box">
				                            <div className="icon-box"><span className="icon flaticon-team"></span></div>
				                            <h4 className="counter-title">Medical Spesialities</h4>
				                            <span className="count-text" data-speed="3000" data-stop="470">0</span>
				                        </div>
				                    </div>
				                    <div className="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="800ms">
				                        <div className="count-box">
				                            <div className="icon-box"><span className="icon flaticon-hospital"></span></div>
				                            <h4 className="counter-title">Medical Spesialities</h4>
				                            <span className="count-text" data-speed="3000" data-stop="689">0</span>
				                        </div>
				                    </div>
				                    <div className="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="1200ms">
				                        <div className="count-box">
				                            <div className="icon-box"><span className="icon flaticon-add-friend"></span></div>
				                            <h4 className="counter-title">Happy Patients</h4>
				                            <span className="count-text" data-speed="3000" data-stop="9036">0</span>
				                        </div>
				                    </div>
				                </div>
				            </div>
				        </div>
				    </section>*/}
				{/*<section className="testimonial-section">
				        <div className="auto-container">
				            <div className="sec-title text-center">
				                <span className="title">HAPPY Patient</span>
				                <h2>What Our Patients Think About Our Services</h2>
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
				{/*<section className="news-section">
				        <div className="auto-container">
				            <div className="sec-title text-center">
				                <span className="title">OUR BLOG</span>
				                <h2>Recent Articles and News</h2>
				                <img className="svg" src="assets/images/svgimage.png" alt=""/>
				            </div>

				            <div className="row">
				                <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
				                    <div className="inner-box">
				                        <div className="image-box">
				                            <figure className="image"><a href="blog-post-image"><img src="assets/images/resource/news-1.jpg" alt=""/></a></figure>
				                            <a href="/#" className="date">Sep 19, 2020</a>
				                        </div>
				                        <div className="lower-content">
				                            <h4><a href="blog-post-image">What is The Success rate<br></br> of a root canel?</a></h4>
				                            <div className="text">Nullam mauris vitae tortor sodales efficitur. Quisque orci ante. Proin amet turpis</div>
				                            <div className="post-info">
				                                <div className="post-author">By Admin Rose</div>
				                                <ul className="post-option">
				                                    <li><a href="/#">0 <i className="far fa-heart"></i></a></li>
				                                    <li><a href="/#">0 <i className="far fa-comments"></i></a></li>
				                                </ul>
				                            </div>
				                        </div>
				                    </div>
				                </div>

				                <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
				                    <div className="inner-box">
				                        <div className="image-box">
				                            <figure className="image"><a href="blog-post-image"><img src="assets/images/resource/news-2.jpg" alt=""/></a></figure>
				                            <a href="/#" className="date">Sep 19, 2020</a>
				                        </div>
				                        <div className="lower-content">
				                            <h4><a href="blog-post-image">How to handle your kids’ <br></br>mystery ailments?</a></h4>
				                            <div className="text">Nullam mauris vitae tortor sodales efficitur. Quisque orci ante. Proin amet turpis</div>
				                            <div className="post-info">
				                                <div className="post-author">By Admin Rose</div>
				                                <ul className="post-option">
				                                    <li><a href="/#">0 <i className="far fa-heart"></i></a></li>
				                                    <li><a href="/#">0 <i className="far fa-comments"></i></a></li>
				                                </ul>
				                            </div>
				                        </div>
				                    </div>
				                </div>

				                <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
				                    <div className="inner-box">
				                        <div className="image-box">
				                            <figure className="image"><a href="blog-post-image"><img src="assets/images/resource/news-3.jpg" alt=""/></a></figure>
				                            <a href="/#" className="date">Sep 19, 2020</a>
				                        </div>
				                        <div className="lower-content">
				                            <h4><a href="blog-post-image">How to help the cardiology <br></br>department</a></h4>
				                            <div className="text">Nullam mauris vitae tortor sodales efficitur. Quisque orci ante. Proin amet turpis</div>
				                            <div className="post-info">
				                                <div className="post-author">By Admin Rose</div>
				                                <ul className="post-option">
				                                    <li><a href="/#">0 <i className="far fa-heart"></i></a></li>
				                                    <li><a href="/#">0 <i className="far fa-comments"></i></a></li>
				                                </ul>
				                            </div>
				                        </div>
				                    </div>
				                </div>

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
													<li><a href="news">News</a></li>
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

export default Home;