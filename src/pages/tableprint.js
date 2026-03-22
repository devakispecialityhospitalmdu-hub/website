import React from 'react';
import {Row , Col }  from 'react-bootstrap';
import List2 from  "./tabcardio";   
import BasicModal from "./modal";
import Sidebar from './sidebar';
import AbtDrop from './abtdrop';
import AbtDrop1 from './abtdrop1';
import AbtDrop2 from './abtdrop2';
import Dropdown from './dropdown';
import Dropdown1 from './dropdown1';
import Dropdown2 from './dropdown2';
    const Table= () => {
        return (
          
            <>
<section className="doctor-detail-section">
        <div className="auto-container">
            <div className="row">
                <div className="content-side col-lg-8 col-md-12 col-sm-12 order-2">
                    <div className="docter-detail">
                        <h3 className="name">Patient Token</h3>
                       
                        <ul className="doctor-info-list">
                            <li>
                                <strong>Token No</strong>
                                <p>PD1</p>
                            </li>
                            <li>
                                <strong>Hospital No</strong>
                                <p>DSH2110108/OPDN673</p>
                            </li>
                            <li>
                                <strong>Patient Name</strong>
                                <p>Pandi.K</p>
                            </li>
                            <li>
                                <strong>Age/Gender</strong>
                                <p>27/Male</p>
                            </li>
                            <li>
                                <strong>Height</strong>
                                <p>172</p>
                            </li>
                            <li>
                                <strong>Weight</strong>
                                <p>80</p>
                            </li>
                            <li>
                                <strong>bp</strong>
                                <p>120</p>
                            </li>
                            <li>
                                <strong>Symptoms</strong>
                                <p>Null</p>
                            </li>
                        </ul>
                        <button type="button" id="updatetoken" style={{marginleft: "199px"}}   onClick={() => window.print()}className="btn btn-info" autocomplete="off">Print Token</button>
                    </div>
                </div>

               
                <div className="sidebar-side col-lg-4 col-md-12 col-sm-12">
                    <div className="sidebar"> 
                        <div className="team-block wow fadeInUp">
                           
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
        );
    };

export default Table;