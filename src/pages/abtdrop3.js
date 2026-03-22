import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import  "./svg.css"
import Sidebar from './sidebar';  
import $ from 'jquery'
import "./abtdrop.css";

  const AbtDrop3 = () => {
    return ( 
      <>
      <div className="dropdown">
          <div className="ruby-menu1-demo-header">
            <div className="ruby-wrapper1">
              <ul className="ruby-menu1">                        
                <li className="ruby-menu1-mega"><a href=" "><span >News & Media</span></a>
                
                  <ul style={{marginTop : "20px" }}>
                      <li><a href="/news">Article</a></li>
                      <li><a href="/story">Success Story</a></li>
                  </ul>
                      </li>
                      </ul>
                      </div>
                      </div>
                      </div>
      </>
    );
  };
export default AbtDrop3;