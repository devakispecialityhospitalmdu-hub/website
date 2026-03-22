import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import  "./svg.css"
import Sidebar from './sidebar';  
import $ from 'jquery'
import "./dropdown.css";

  const Dropdown2 = () => {
    return (
      
      <>
      <div className="dropdown">
          <div className="ruby-menu-demo-header">
            <div className="ruby-wrapper">
              <ul className="ruby-menu">                        
                <li className="ruby-menu-mega"><a href=" "><span >Our Services</span></a>
                
                        <ul style={{marginTop : "10px" }}>
                      <li><a href="facilities">Facilities</a></li>
                      <li><a href="lab">Laboratory</a></li>
                  </ul>
                      </li>
                      </ul>
                      </div>
                      </div>
                      </div>



  </>
    );
  };
  export default Dropdown2;




