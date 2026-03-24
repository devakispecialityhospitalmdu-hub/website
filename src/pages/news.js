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

	const News = () => {
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
				                                <AbtDrop3></AbtDrop3>

				                                 <li className="p-3">
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
				    <section className="page-title" style={{backgroundImage: `url("assets/images/contact/header.jpg")`}}>
				        <div className="auto-container">
				            <div className="title-outer">
				                <h1>News & Media</h1>
				                <ul className="page-breadcrumb">
				                    <li><a href="/">Home</a></li>
				                    <li>News & Media</li>
				                    <li>Article</li>
				                </ul> 
				            </div>
				        </div>
				    </section>
				    <div className="sidebar-page-container">
				        <div className="auto-container">
				            <div className="row clearfix">

				                <div className="content-side col-xl-12 col-lg-12 col-md-12 col-sm-12 order-2">
				                    <div className="service-detail">
				                       {/*} <div className="images-box">
				                            <figure className="image wow fadeIn"><a href="assets/images/resource/service-single.jpg" className="lightbox-image" data-fancybox="services"><img src="assets/images/cardiology/cardiology.jpg" alt=""/></a></figure>
				                        </div>*/}

				                        <div className="content-box">
				                            <div className="title-box">
				                                <h4>டாக்டர்.  சே.ரூஃபஸ் டிமல் (MBBS.,MD(Gen Medicine) DNB (Cardiology).,FNB  (Interventional Cardiology).,)</h4>
				                            </div>
				                            <div className="two-column">
				                                <div className="row">		                              
				                                    <div className="image-column col-xl-6 col-lg-12 col-md-12">
				                                        <figure className="image"><a  className="lightbox-image"><img src="assets/images/news/rufus.png" alt=""/></a></figure>
				                                    </div>
				                                    <div className="image-column col-xl-6 col-lg-12 col-md-12">
				                                    <h3>இளவயதினரும், மாரடைப்பும்.</h3>
				                                    <p>மாரடைப்பால் ஏற்படும் உயிரிழப்புகள் நாளுக்கு நாள் அதிகரித்துக் கொண்டிருப்பதுடன், சராசரி வயதும் குறைந்து கொண்டிருக்கின்றன. ஒவ்வொரு வருடமும் 28% மனிதர்கள் மாரடைப்பால் இறக்கின்றனர் 48% மனிதர்கள் இதயதமணி நோய், மாரடைப்பு, உயர் ரத்தஅழுத்த நோயினால் இறக்கின்றனர். மாரடைப்புக்கான காரணிகளாவது புகைப்பிடித்தல், சர்க்கரைநோய், உயர் ரத்தஅழுத்தம், குடிப்பழக்கம், அதிக கொழுப்புசத்து, மனஅழுத்தம் ஆகிய நோய்கள் யாருக்கு இருந்தாலும் வயது வித்தியாசமின்றி மாரடைப்பு ஏற்படுகின்றது. இளவயதினருக்கு மாரடைப்புக்கு முக்கிய காரணியாக போதை பழக்கம், குடிப்பழக்கம் மற்றும் மனஅழுத்தம் காரணமாக அமைகிறது.</p>
				                                    <p>மாரடைப்பின் அறிகுறிகளாக நெஞ்சு வலி, நெஞ்சை அழுத்துவது, அதிகப்படியான வியர்வை, இடது கை தோள்பட்டை, கழுத்து , முதுகு போன்ற இடங்களுக்கு தாங்க முடியாத வலி பரவும், சர்க்கரை நோயாளிக்கு நெஞ்சுவலி அல்லது வயிற்று வலியாகவோ, மூச்சுதிணறல்  வெளிப்படலாம். அவர்களுக்கு நெஞ்சுவலிக்காமலேயே மாரடைப்பு வரும் அபாயமும் உண்டு.</p>
				                                    <p>அனைத்து நெஞ்சு வலிக்கும் ஈ.சி.ஜியின் மூலம் கண்டறிவது கடிணம், அதனால் ரத்த பரிசோதனனை மூலமும் மாரடைப்பை கண்டறியலாம். மேற்க்கண்ட அறிகுறிகள் தெண்பட்டால் உடனடியாக மருத்துவரை அணுகி ஈ.சி.ஜி, ரத்த பரிசோதனை செய்து தடுக்க வேண்டும் அல்லது மருத்துவரின் ஆலோசனைபெயரில் அஞ்சியோகிராம் செய்து  கொள்ள வேண்டும், அவ்வாறின்றி சுயமருத்துவமோ, சோசியல்  மீடியாக்களில் கூறப்படும் இலவச அறிவுறைகளோ பின்பற்றினால் உயிர் காக்கும் உண்ணதமான "கோல்டன் ஹவர்" கடந்து சிகிச்சையை கடினமாக்குவதுடன், உயிரிழப்பையும் சந்திக்க நேரிடும்.  தற்போதுள்ள நவீன வதிகளான கேத்லேப், ஆஞ்சியோகிராம், உதவியுடன் ஸ்டென்ட் வைப்பதன் மூலம் அறுவைச்கிச்சையின்றி மாரடைப்பை சரி செய்யலாம். 30 நிமிடங்களுக்குள் "கேத் லேப்" வசதி இல்லாத நிலையில் அருகிலுள்ள மருத்துவமனைக்கு சென்று ரத்தக் கட்டியினை கரைக்கும் முதலுதவி பெற்று, தற்காலிக மருந்துகளை எடுத்துக்</p>

				                                    </div>
				                                </div>
				                            </div>
				                            <p> கொண்டு உடனடியாக மேல் சிகிச்சை பெறலாம்.  மேற்படி சிகிச்சை எடுத்தவர்கள் இருவாரங்கள் ஓய்வுக்கு பின்பு தங்களது பழைய வாழ்க்கை முறைக்கு மாறலாம். அதன்பிறகு  நீச்சல், மிதிவண்டி ஓட்டுதல், வாரத்திற்க்கு 150 நிமிட நடை பயிற்சி அவசியம், துரித உணவு, எண்ணெயில் பொறித்த உணவுகள், பதப்படுத்தப்பட்ட உணவு வகைகள், தவிர்பது நல்லது. புகைப்பிடித்தல், மது, போதை முற்றிலுமாக தவிர்க்க வேண்டும். சர்க்கரை நோய், உயர் ரத்தஅழுத்தம், தைராய்டு போன்ற நோய்களை கட்டுப்பாட்டுக்குள் வைப்பது அவசியம். தினந்தோறும் காய்கறிகள், பழங்கள், பயிறுவகைகள், மீன், அளவான இறைச்சி போன்றவற்றை சரிவிகித உணவாக உண்டு நலமுடம் வாழலாம்.</p>
				                                    <p>மதுரை தேவகி சிறப்பு மருத்துவமனையில் இருதய சிகிச்சை பிரிவு 24 மணி நேரமும் செயல்படுகிறது. பிரைமரி  PCI (அஞ்சியோபிளாஸ்ட்டி). இருதய நோயால் பாதிக்கப்பட்டவர்களுக்கு அனைத்து பரிசோதனைகளையும், சிகிச்சையும் அளிக்க ஆஞ்சியோகிராம் பரிசோதனை (Angiogram), இரத்தநாள அடைப்பிற்கு 'ஸ்டென்ட்' (Angioplasty) சிகிச்சை, இருதய வால்வு சுருக்கத்திற்கு பலூன் சிகிச்சை (BMV, TAVI), பேஸ்மேக்கர் கருவி பொருத்தும் சிகிச்சை, இருதய துவாரங்களை கருவி கொண்டு மூடும் சிகிச்சை, OCT, IVUS, Endovascular Interventions like (TEVAR,EVAR), Peripheral vascular interventions, உலக தரம் வாய்ந்த அதி நவீன கேத்லேப் வசதி, மற்றும் அதி நவீன ICCU, மருத்துவ அவசர ஊர்தி (Ambulance), நவீன இரத்த பரிசோதனை ஆய்வகம், ECG, ECHO, TMT, HOLTER Monitor வசதிகள் உள்ளன.</p>
				                                    <p>ஏழை எளிய மக்கள் பயன்பெரும் வகையில் தமிழக முதலமைச்சரின் விரிவான காப்பீடு திட்டத்தில் இலவச சிகிச்சை, தமிழக அரசு பணியாளர்கள் மற்றும் குடும்பத்தினருக்கும், ஓய்வு பெற்ற அரசு பணியாளர்கள், E .S .I  பயனாளிகள், BSNL பணியாளர்கள் மற்றும் அனைத்து தனியார் இன்சூரன்ஸ் நிறுவனங்களின் பயனாளிகளுக்கு கட்டணமில்லா சிகிச்சை அளிக்கப்படுகிறது என்பதனை தேவகி சிறப்பு மருத்துவமனையின் சிறப்பு இருதய சிகிச்சை நிபுணர், டாக்டர்  சே.ரூஃபஸ் டிமல் தெரிவித்தார்.</p>
				                                    <p><b>டாக்டர்.  சே.ரூஃபஸ் டிமல் (MBBS.,MD(Gen Medicine) DNB (Cardiology)., 
														FNB  (Interventional Cardiology).,)
														சிறப்பு இருதய சிகிச்சை நிபுணர்
														Consultant Interventional Cardiologist & 
														Endovascular Specialist TAVI Operator
														தேவகி சிறப்பு மருத்துவமனை, அரசரடி, மதுரை -16
														முன்பதிவிற்கு - 0452 2288841 அவசர சிகிச்சைக்கு - 81900 34500 
														மேலும் தகவல்களுக்கு - 9600 600 888</b>
														</p>
				                           
					                        
				                        </div>
				                    </div>
				                </div>


				                <div className="content-side col-xl-12 col-lg-12 col-md-12 col-sm-12 order-2">
				                    <div className="service-detail">
				                       {/*} <div className="images-box">
				                            <figure className="image wow fadeIn"><a href="assets/images/resource/service-single.jpg" className="lightbox-image" data-fancybox="services"><img src="assets/images/cardiology/cardiology.jpg" alt=""/></a></figure>
				                        </div>*/}

				                        <div className="content-box">
				                            <div className="title-box">
				                                <h2>Dr. N. ராஜாராம் MD;RT's Article </h2>
				                            </div>
				                            <div className="two-column">
				                                <div className="row">		                              
				                                    <div className="image-column col-xl-6 col-lg-12 col-md-12">
				                                        <figure className="image"><a  className="lightbox-image"><img src="assets/images/news/cancer.jpg" alt=""/></a></figure>
				                                    </div>
				                                    <div className="image-column col-xl-6 col-lg-12 col-md-12">
				                                    <h3>உலக புற்று நோய் விழிப்புணர்வு தினம் </h3>
				                                    <p>புற்றுநோய்  பற்றிய விழிப்புணர்வையும், சரியான புரிதலையும் மக்களிடம் ஏற்படுத்த பிப்ரவரி 4ம் தேதி உலக புற்றுநோய் விழிப்புணர்வு தினமாக கடைபிடிக்கப்படுகிறது.</p>
				                                    <p>இந்திய நாட்டில் ஒவ்வொரு வருடமும் 13 முதல் 14 லட்சம் பேர் புற்றுநோயினால் பாதிக்கப்படுகின்றனர். இவற்றில் பெரும்பாலான வகை புற்றுநோய்கள் ஆரம்ப நிலையில் கண்டறியப்பட்டு சிகிச்சை அளிக்கப்பட்டால் முழுமையாக குணமாக கூடிய வாய்ப்பு உள்ளவை. பெண்களுக்கு மார்பக புற்றுநோய், கர்ப்பப்பை வாய் புற்றுநோய், கருமுட்டை புற்றுநோய் போன்றவை அதிகளவில் ஏற்படுகின்றன. ஆண்களுக்கு வாய், தொண்டை பகுதி புற்றுநோய்கள் மற்றும் நுரையீரல் புற்றுநோய் அதிகளவில் ஏற்படுகின்றது.</p>
				                                    <p>புகையிலை மற்றும் மது பழக்கத்தை கைவிடுவதின் மூலம் 50% புற்றுநோயிகளை தவிர்த்து விடமுடியும். மேலும் முறையான உணவு பழக்கங்கள் நம்மை புற்றுநோயில் இருந்து காத்துக்கொள்ள பெரிதும் உதவுகின்றது. உடம்பில் எந்த பகுதிகளிலும் கட்டி ஏற்படுதல், ஆராத புண்கள் ஏற்படுதல், உணவு உன்ன முடியாத சூழ்நிலை, வயிறு பகுதி வீங்குதல், காரணம் இன்றி உடல் எடை குறைதல், தொடர் பசியின்மை, தீராத இருமல் சளி தொந்தரவு போன்றவை புற்றுநோயின் அறிகுறியாக இருக்கலாம். அவ்வாறு ஏற்படும் பொது மருத்துவரிடம் ஆலோசனை செய்வது அவசியம்.</p>
				                                    <p>கர்ப்பப்பை வாய் புற்றுநோய் ஏற்படாமல் இருக்க 9 முதல் 25 வயது வரை உள்ள பெண்களுக்கு தடுப்பூசி போட்டுக்கொள்ளலாம். புற்றுநோய் ஏற்பட்டவர்களுக்கு அறுவை சிகிச்சை, கதிர்விச்சு சிகிச்சை, மருந்தியல் சிகிச்சை, போன்றவற்றில் அந்த நோயின் நிலைக்கு ஏற்ப சிகிச்சை அளிக்க வேண்டும். </p>
				                                    <p>இதனை மனதில் வைத்துக்கொண்டு 18 வருடங்களுக்கு முன் நம் முன்னாள் குடியரசு தலைவர் மேதகு டாக்டர் APJ அப்துல் கலாம் ஐயா அவர்களால் தொடக்கி வைக்கப்பட்ட நம் தேவகி புற்றுநோய் சிகிச்சை மையத்தில் புற்றுநோய் சிகிச்சையில் நவீனமான உறுப்பு அகற்றா அறுவை சிகிச்சை பக்கவிளைவுகள் இல்ல மருத்துவ சிகிச்சை இலக்கை துல்லியமாக தாக்கக்கூடிய கதிர்விச்சு சிகிச்சை பல்வேறு மருத்துவ காப்பீட்டு கீழ் இலவசமாக வழங்கி வருகிறது.</p>
				                                    <p></p>
				                                    <p></p>
				                                    <p></p>
				                                    <p></p>
				                                    </div>
				                                </div>
				                            </div>
				                                    <p><b>Dr. ஹரிஷ் MD;DM புற்றுநோய் சிகிச்சை நிபுணர்   <br></br>
				                                     Dr. N. ராஜாராம் MD;RT கதிர்விச்சு புற்றுநோய் சிகிச்சை நிபுணர்</b>
														</p>
				                           
				                        </div>
				                    </div>
				                </div>


				                <div className="content-side col-xl-12 col-lg-12 col-md-12 col-sm-12 order-2">
				                    <div className="service-detail">
				                       {/*} <div className="images-box">
				                            <figure className="image wow fadeIn"><a href="assets/images/resource/service-single.jpg" className="lightbox-image" data-fancybox="services"><img src="assets/images/cardiology/cardiology.jpg" alt=""/></a></figure>
				                        </div>*/}

				                        <div className="content-box">
				                            <div className="title-box">
				                                <h2>தேவகி மருத்துவமனை டாக்டர் டால்பின் சாலமோன் தகவல்</h2>
				                            </div>
				                            <div className="two-column">
				                                <div className="row">		                              
				                                    <div className="image-column col-xl-6 col-lg-12 col-md-12">
				                                        <figure className="image"><a  className="lightbox-image"><img src="assets/images/news/dolpin.jpg" alt=""/></a></figure>
				                                    </div>
				                                    <div className="image-column col-xl-6 col-lg-12 col-md-12">
				                                    <h3>சிறுநீரக செயல் இழப்புக்கு நவீன டயாலிசிஸ் </h3>
				                                    <p>உடலின் கழிவுகளை சுத்திகரித்து வெளியேற்றும் சிறுநீரகம் சில காரணங்களால் செயலிழக்கிறது. சிறுநீரக பாதிப்பு மற்றும் சிகிச்சை குறித்து மதுரை அரசரடியில் இயங்கும் தேவகி மருத்துவமனையின் சிறுநீரக சிகிச்சை நிபுணர் டால்பின் சால மோன் அளித்து விளக்கம் உள்ளார். இது குறித்து அவர் கூறிய தாவது:-</p>
				                                    <p><b>சிறுநீரகங்களின் பணி</b><br></br><br></br>சிறுநீரகங்கள் ரத்தம் மற்றும் உடலின் திரவங்களில் உள்ள யூரியா எனும் நைட்ரஜன், கிரியேட்டினின் எனும் உறுப்புகளின் கழிவுகள், அமிலங் களை சுத்திகரிப்பது இதன் பணி. சிறுநீரகத்தின் மிக நுண்ணிய ரத்தக்குழாய்கள் ரத்தத்தை வடிகட்டும் நுட்ப்பமான வேலையை செய்கின்றன.இவை வடிகட்டி மீத முள்ள நீர் சிறுநீர் பையில் தேங்கி பின்னர் சிறுநீராக </p>
				                                    </div>
				                                </div>
				                            </div>
				                            <p>வெளியேறுகிறது.இந்த கழிவு நீக்க செயல்பாடு மூலம் உடலின் கார அமில நிலை, சர்க்கரை அளவு சரி செய்யப்படுகிறது. உடல் சுண்ணாம்பு சத்தை கிரகிக்க உதவுகிறது. அதிக சர்க்கரை சத்து மற்றும் உயர்ரத்த அழுத்தம் சிறு நீரக பாதிப்புக்கு முக்கிய காரணங்கள்.</p>
				                           			<p><b>அறிகுறிகள்</b> <br></br><br></br>சிறுநீரகம் பழுதடைந்து 3 மாதங்களுக்கு மேல் ஆகி விட்டால் அது நிரந்தர செயலி முப்பு ஆகும். இந்த கூட்டத்தில் உடலின் கழிவுநீர் வெளியேறாமல் உடலில் தேங்க தொடங்கும். சிறுநீரில் புரதம் வெளியேறுவதால் சிறுநீரில் நுரை, ரத்தம், உடல் அரிப்பு, கண்களை சுற்றி வீக்கம், கால் வீக்கம், சோர்வு, பசியின்மை, மூச்சுத் திணறல் ஆகிய அறி குறிகள் தென்படும்.மேற்கண்ட அறிகுறிகள் இருந்தால் மருத்துவரை அணுக வேண்டும்.பரிசோதனையில், யூரியா, கிரியேட்டினின் அளவுகள் மற்றும் வேறு சில பரிசோதனைகள் மூலம் பாதிப்பு நிலையை மருத்துவர் கண்டறிவார்.</p>
				                                    <p><b>சிகிச்சை முறை</b> <br></br><br></br>சிறுநீரக செயலிழப்புதற்காலிக மற்றும் நிரந்தர செயலிழப்பு என்று இரண்டு வகைப்படும். சிறுநீரகத்தில் கிருமி தொற்று, கற்கள், கட்டிகளால் ஏற்படும் தற்காலிக செயலிழப்பு மருந்துகளால் சரி செய்யலாம். கட்டுப்படுத்தப்படாத சர்க்கரை, உயர் ரத்த அழுத்தத்தால் ஏற்படும் நிரந்தர சிறுநீரக செயலிழப்புக்கு டயாலிசிஸ் மட்டுமே தீர்வு.</p>
				                                    <p><b>எளிதான டயாலிசிஸ்</b> <br></br><br></br>10 ஆண்டுகளுக்கு முன்பு டயாலிசிஸ் கடினமான சிகிச்சையாகவும், டயாலிசிஸ் செய்யும் போது ஒருவர் 6 மாதங்கள் உயிர் வாழும் நிலை இருந்தது.இன்று, உயர் நுட்ப டயாலிசிஸ் எந்திரங்க ளின் உதவியால் எளிதாக டயாலிசிஸ் செய்ய முடிகிறது. டயாலிசிஸ் செய்வோர் பல ஆண்டுகளுக்கு ஆரோக்கிய மான வாழ்க்கை வாழ முடி யும். காப்பீடு திட்டங்கள் இருப்பதால் எந்த செலவும் கிடையாது.</p>
				                                    <p><b>தடுப்பு முறை</b> <br></br><br></br>சிறுநீரகங்களை பாதுகாக்க போதிய அளவு தண்ணீர் குடிக்கவேண்டும்.ரத்த அழுத் தம் சர்க்கரை அளவை கட் டுக்குள் வைக்க வேண்டும். மது புகை, வறுத்த பொரித்த உப்பு உணவுகள், அசைவ உணவுகளை தவிர்க்க வேண்டும்.6 மாதங்களுக்கு ஒரு முறை மருத்துவ பரிசோதனை அவசியம்.சிறுநீரக செயலிழப்பு பாதிப்பு உள்ளவர்கள் பொட்டாசியம் சத்து அதிகமுள்ள வாழை,மாம்பழம், பப்பாளி, திராட்சை பழங்களை தவிர்க்க வேண்டும். பொட்டாசியம் சத்து குறைந்த கொய்யா, ஆப்பிள், அன்னாசி பழங்களை உண்ணலாம். இவ்வாறு அவர் கூறினார். </p>
				                                    <p><b>தேவகி சிறப்பு மருத்துமனையில் தமிழக அரசு காப்பீட்டு திட்டத்தின் கீழ்  ICU வசதியுடன் 24 மணி நேர இயங்க கூடிய சிறப்பு டயாலிசிஸ் சிகிச்சை பிரிவு செயல்பட்டு வருகிறது.தொடர்புக்கு :- 0452 22 888 49/ 50 / 90478 88421</b>
														</p>
				                           
				                        </div>
				                    </div>
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
				   {/* <section className="clients-section alternate">
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
				   {/* <section className="team-section">
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
				                            <h4 className="name"><a >Dr.S.Chandrasekar M.D., D.A.</a></h4>
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
				                            <h4 className="name"><a >Dr.Rammohan M.D.,D.M.,</a></h4>
				                        </div>
				                    </div>
				                </div>
				                <div className="col-lg-3 col-md-6 col-sm-12"></div>
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

export default News;