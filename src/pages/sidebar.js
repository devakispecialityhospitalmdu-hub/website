import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './sidebar.css';


export default props => {
  return (
    
    <Menu>
    <div className="logo"><a href="/"><img className="Logoheader"  src="assets/images/logodev.png" alt="" title=""/></a></div><br></br><br></br>
      <a className="menu-item" href="about">
        About
      </a>
      <a className="menu-item" href="specialities">
        Specialities
      </a>
      <a className="menu-item dropdown" href="/#">
        Patient Care Services
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
      </a>
      <a className="menu-item" href="/#">
        Our Services
        <ul>
            <li><a href="facilities">Facilities</a></li>
            <li><a href="Lab">Laboratory</a></li>
        </ul>
      </a>
      <a className="menu-item" href=" ">
        News & Media
      </a>
      <a className="menu-item" href="career">
        Career
      </a>
      <a className="menu-item" href="contact">
        Contact
      </a>
    </Menu>
  );
};
                                     