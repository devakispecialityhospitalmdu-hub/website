import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import  "./svg.css"
import Sidebar from './sidebar';  
import $ from 'jquery'
import "./dropdown.css";

  const Dropdown1 = () => {
    return (
      
      <>
      <div className="dropdown">
          <div className="ruby-menu-demo-header">
            <div className="ruby-wrapper">
              <ul className="ruby-menu">                        
                <li className="ruby-menu-mega"><a href=" "><span >Patient Care Services</span></a>
                
                        <ul>
                        <li><a href="services">24*7 Services</a></li>
                        <li><a href="masterhc">Master Health Check-up</a></li>
                        <li><a href="tpa">Insurance Providers</a></li>
                        <li><a href="pg">Patient Guidelines</a></li>
                        <li><a href="bed">Categories Of Bed</a></li>
                  <li><a href="adminpolicy">Admission Policy</a></li>
                  <li><a href="billpolicy">Billing Policy</a></li>
                  <li><a href="visitorinfo">Visitors & Care Takers Info</a></li>
                    </ul>
                      </li>
                      </ul>
                      </div>
                      </div>
                      </div>



  </>
    );
  };
  export default Dropdown1;




