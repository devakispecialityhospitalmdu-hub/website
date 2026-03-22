import React from 'react';
import  "./svg.css";
	const Footer = () => {

		return (
		  
			<>
				
<footer className="main-footer">
        <div className="widgets-section" style={{backgroundImage: `url("assets/images/background/7.jpg")`}}>
            <div className="auto-container">
                <div className="row">
                    <div className="big-column col-xl-6 col-lg-12 col-md-12 col-sm-12">
                        <div className="row">
                            <div className="footer-column col-xl-7 col-lg-6 col-md-6 col-sm-12">
                                <div className="footer-widget about-widget">
                                    <div className="logo">
                                         <a href=" / "><img className="logoheader" src="assets/images/logodev.png" alt="" /></a>
                                    </div>
                                    <div className="text">
                                        <p>Devaki Speciality Hospital was established by DR. P. S. NAGENDIRAN, M.B.B.S. & DR. K. DEVAKI M.B.B.S. D.M.R.D. We are able to provide the following facilities: 100 Beded Hospital, Airconditioned Operation theatre, Pharmacy attached with the Hospital, ECG & Clinical Laboratory facilities.</p>
                                    </div>
                                    <ul className="social-icon-three">
                                        <li><a href="https://www.youtube.com/channel/UCDRHhVdtq1OhYv894_Bzg9A/"> <i className="fab fa-youtube"></i></a></li>
                                        <li><a href="https://www.instagram.com/devaki_speciality_mdu/"><i className="fab fa-instagram"></i></a></li>
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
                                        <li><a href="news">News and Media</a></li>
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
                                            <div className="thumb"><a href="blog-post-image.html"><img src="assets/images/favicon.png" alt=""/></a></div>
                                            <h4><a href="blog-post-image.html">Integrative Medicine <br></br>& Cancer Treatment.</a></h4>
                                            <span className="date">July 11, 2020</span>
                                        </div>

                                        <div className="post">
                                            <div className="thumb"><a href="blog-post-image.html"><img src="assets/images/favicon.png" alt=""/></a></div>
                                            <h4><a href="blog-post-image.html">Achieving Better <br></br>Health Care Time.</a></h4>
                                            <span className="date">August 1, 2020</span>
                                        </div>

                                        <div className="post">
                                            <div className="thumb"><a href="blog-post-image.html"><img src="assets/images/favicon.png" alt=""/></a></div>
                                            <h4><a href="blog-post-image.html">Great Health Care <br></br>For Patients.</a></h4>
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
                           <li><a href="about">AboutUs</a></li> 
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
		    </>
		);
	};

export default Footer;