import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import  "./svg.css"
import Sidebar from './sidebar';  
import $ from 'jquery'
import "./abtdrop.css";

  const AbtDrop2 = () => {
    return ( 
      <>
      <div className="dropdown">
          <div className="ruby-menu1-demo-header">
            <div className="ruby-wrapper1">
              <ul className="ruby-menu1">                        
                <li className="ruby-menu1-mega"><a href=" "><span >Our Services</span></a>
                
                  <ul style={{marginTop : "20px" }}>
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
export default AbtDrop2;