import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import  "./svg.css"
import Sidebar from './sidebar';  
import $ from 'jquery'
import "./abtdrop.css";

  const AbtDrop = () => {
    return ( 
      <>
      <div className ="row">
        <div className="dropdown">
          <div className="ruby-menu1-demo-header">
            <div className="ruby-wrapper1">
              <ul className="ruby-menu1">                        
                <li className="ruby-menu1-mega navspace"><a href="specialities"><span >specialities</span></a>
                  <div className="ruby-grid1 ruby-grid-lined1">
                    <div className="ruby-row1">
                      <div className="ruby-col-3">
                        <ul>
                          <li><a href="accidentemergency">Accident & Emergency</a></li>
                            <li><a href="anaesthesiology">Anaesthesiology</a></li>
                            <li><a href="bariatric">Bariatric Surgery</a></li>
                            <li><a href="cardiology">Cardiology</a></li>
                            <li><a href="cardiothoracic">Cardiothoracic and Vascular Surgery</a></li>
                            <li><a href="criticalcare">Critical Care & Toxicology</a></li>
                            <li><a href="dental">Dental</a></li>
                            <li><a href="diabetology">Diabetology</a></li>
                        </ul>
                      </div>
                      <div className="ruby-col-3 hidden-md1 vl">
                        <ul>
                          <li><a href="ent">ENT</a></li>
                            <li><a href="familymedicine">Family Medicine</a></li>
                            <li><a href="gasteroenterology">Gasteroenterology</a></li>
                            <li><a href="generalsurgery">General Surgery</a></li>
                            <li><a href="generalmedicine">General Medicine</a></li>
                            <li><a href="imagingscience">Imaging Science & Intervention Radiology</a></li> 
                            <li><a href="oncology">Medical Oncology</a></li>
                            <li><a href="nephrology">Nephrology</a></li>
                            
                        </ul>
                      </div>
                      <div className="ruby-col-3 hidden-md1 vl">
                        <ul>
                        <li><a href="neurosurgery">Neuro Surgery</a></li>
                          <li><a href="neurology">Neurology</a></li>
                          <li><a href="obstetrics">Obstetrics & Gynecology</a></li>
                          <li><a href="orthopedics">Orthopedics</a></li>
                          <li><a href="pediatric">Pediatric Surgery</a></li>
                          <li><a href="pharmacy">Pharmacy</a></li>
                          <li><a href="physcatric">Physcatric & Counselling</a></li>
                          <li><a href="physicalmedicine">Physical Medicine & Rehabilitation</a></li>
                         
                        </ul>
                      </div>
                      <div className="ruby-col-3 hidden-md1 vl">
                        <ul>
                         <li><a href="preventivemedicine">Preventive Medicine</a></li>
                          <li><a href="pulmonology">Pulmonology</a></li>
                          <li><a href="radiationnco">Radiation Oncology</a></li>
                          <li><a href="surgery">Surgery & Surgical Gastroenterology</a></li>
                          <li><a href="surgicalonco">Surgical Oncology</a></li>
                          <li><a href="urology">Urology</a></li>
                          <li><a href="vasucular">Vascular Surgery</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                <span className="ruby-dropdown1-toggle"></span></li>

              </ul>
            </div>
          </div>
        </div>
        </div>






        
      </>
    );
  };
export default AbtDrop;




