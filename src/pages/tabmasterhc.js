import React,{ useState } from "react";
import "./tabs.css";

function Listmhc() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
        Primary Health Check Up
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Preventive Health Check up
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Diabetic Medical Health Check up (DMHC)
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          Preventive Health Check up
        </button>
        <button
          className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(5)}
        >
          Preventive Health Check up
        </button>
        <button
          className={toggleState === 6 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(6)}
        >
          Preventive Health Check up
        </button>
        
        
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
         <ul className="list-style-one">
            <li>Physical Examination by Physician</li>
            <li>Complete Urine Analysis</li>
            <li>Stool Routine (ova, cyst, occult blood)</li>
            <li>Complete Blood Count</li>
            <li>FBS & PP Sugar</li>
            <li>Blood Urea & Serum Creatinine</li>
            <li>Blood grouping & Rh typing</li>
            <li>Lipid Profile</li>
            <li>ECG</li>
            <li>Ultrasound Scan (abdomen)</li>
            <li>X-ray Chest</li>
            <li>Pap Smear (for Women)</li>
            <li>General Physician Consultation</li>
            <li>Gynaecology Consultation for Women</li>
            <li>Dental Consultation</li>
            <li>Ophthalmology Consultation</li>
            <li>ENT Consultation</li>
            <li>Diet & Lifestyle Counselling</li>
        </ul>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        > 
        <ul className="list-style-one">
          <li>Physical Examination by Physician</li>
          <li>Complete Urine Analysis</li>
          <li>Urine Micro Albumin</li>
          <li>Stool Routine</li>
          <li>Complete Blood Count</li>
          <li>Lipid Profile</li>
          <li>FBS & PP Sugar</li>
          <li>HbA1C</li>
          <li>Blood Urea & Serum Creatinine</li>
          <li>Serum Uric Acid</li>
          <li>Electrolytes</li>
          <li>VDRL</li>
          <li>Liver Function Test (LFT)</li>
          <li>Blood grouping & Rh typing</li>
          <li>X-ray Chest</li>
          <li>ECG</li>
          <li>Ultrasound Scan (abdomen)</li>
          <li>Pap Smear (for Women)</li>
          <li>Gynaecology Consultation for Women</li>
          <li>General Physician Consultation</li>
          <li>Dental Consultation</li>
          <li>Ophthalmology Consultation</li>
          <li>ENT Consultation</li>
          <li>Diet & Lifestyle Counselling</li>
      </ul>
        </div>
        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        > 
        <ul className="list-style-one">
                                    <li>Physical Examination by Physician</li>
                                    <li>CBC - Profile</li>
                                    <li>E.S.R.</li>
                                    <li>Sugar Fasting</li>
                                    <li>Sugar PP</li>
                                    <li>RFT - Profile</li>
                                    <li>LIPID Profile</li>
                                    <li>LFT Profile</li>
                                    <li>HbA1C</li>
                                    <li>Blood Grouping And RH Typing</li>
                                    <li>Vitamin - D</li>
                                    <li>Vitamin B 12</li>
                                    <li>Serum Calcium</li>
                                    <li>Serum Phosphorus</li>
                                    <li>Serum Electrolyte</li>
                                    <li>Uric Acid</li>
                                    <li>TSH</li>
                                    <li>Micro albumin</li>
                                    <li>Urine Analysis Complete</li>
                                    <li>Biothiesimeter</li>
                                    <li>Chest  X-RAY </li>
                                    <li>Ultrasound Abdomen </li>
                                    <li>Diet & Lifestyle Counselling</li>
                                </ul>
        </div>
          <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        > 
        </div>
          <div
          className={toggleState === 5 ? "content  active-content" : "content"}
        > 
        </div>
          <div
          className={toggleState === 6 ? "content  active-content" : "content"}
        > 
        </div>


      
      </div>
    </div>
    </>
  );
}

export default Listmhc;