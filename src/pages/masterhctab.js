import React from 'react';
import ReactDOM from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "./masterhctab.css";

function Listmhc1() {
  return (
    <div className="mhcapp">
      <h3 className="text-center pt-3 pb-5">Health Check-Up</h3>
      <Tabs>
        <TabList>
          <Tab>
           <h6>Primary Health Check Up</h6>
          </Tab>
          <Tab>
            <h6>Preventive Health Check up </h6>                    
          </Tab>
          <Tab>
            <h6>Diabetic Medical Health Check up (DMHC)</h6>                  
          </Tab>
          <Tab>
            <h6>Cardiac Basic Health Check Up</h6>
          </Tab>
          <Tab>
            <h6>Executive Cardiac Master Health Check Up </h6>
          </Tab>
          <Tab>
            <h6>Whole Body Health Check up </h6>
          </Tab>
          <Tab>
            <h6>Pre-Employment Health Check Up</h6>
          </Tab>
          <Tab>
            <h6>Cancer Screening Check up</h6>
          </Tab>
          <Tab>
            <h6>Devaki Kidney Check up</h6>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="panel-content">
          <h5 className="pb-3">Primary Health Check Up</h5>
          </div>
          <div className="panel-content1">
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
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
          <h5  className="pb-3">Preventive Health Check up </h5>
          </div>
          <div className="panel-content1">
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
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
          <h5 className="pb-3">Diabetic Medical Health Check up (DMHC)</h5>
          </div>
          <div className="panel-content1">
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
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
          <h5 className="pb-3">Cardiac Basic Health Check Up</h5>
          </div>
          <div className="panel-content1">
             <ul className="list-style-one">
             
                <li>Physical Examination by Physician</li>
                <li>Complete Urine Analysis</li>
                <li>Stool Routine(Ova Cyst, Occult Blood)</li>
                <li>Complete Blood Count</li>
                <li>Lipid Profile</li>
                <li>FBS & PP Blood Sugar</li>
                <li>HbA1c</li>
                <li>Blood Urea & Serum Creatinine</li>
                <li>Serum Uric Acid</li>
                <li>Urine Micro Albumin</li>
                <li>Electrolytes</li>
                <li>VDRL</li>
                <li>sAg, HCV</li>
                <li>Thyroid Profile – FT4, T3, TSH</li>
                <li>Blood grouping & Rh typing</li>
                <li>LFT (Liver Function Test)</li>
                <li>X-ray Chest</li>
                <li>ECG</li>
                <li>Echo (Echo Cardiogram)</li>
                <li>TMT</li>
                <li>Ultrasound Scan (abdomen)</li>
                <li>General Consultation</li>
                <li>Cardiologist Consultation</li>
                <li>Diet & Life Style Counselling</li>
            </ul>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
          <h5 className="pb-3">Executive Cardiac Master Health Check Up</h5>
          </div>
          <div className="panel-content1">
             <ul className="list-style-one">
             
                <li>Physical Examination by Physician</li>
                <li>FBS & PP Blood Sugar</li>
                <li>HbA1c</li>
                <li>Complete Urine Analysis</li>
                <li>Stool Routine</li>
                <li>Complete Blood Count</li>
                <li>Lipid Profile</li>
                <li>Blood Urea</li>
                <li>Serum Creatinine</li>
                <li>Serum Uric Acid</li>
                <li>Urine Micro Albumin</li>
                <li>Electrolytes</li>
                <li>VDRL</li>
                <li>HBsAg, HCV</li>
                <li>HIV 1&2</li>
                <li>PSA (For Men)</li>
                <li>Thyroid Profile – FT4, T3, TSH</li>
                <li>PFT</li>
                <li>Blood grouping & Rh typing</li>
                <li>LFT (Liver Function Test)</li>
                <li>X-ray Chest</li>
                <li>ECG</li>
                <li>Echo (Echo Cardiogram)</li>
                <li>TMT</li>
                <li>Coagulation Profile</li>
                <li>Ultrasound Scan (abdomen)</li>
                <li>Pap Smear (for Women)</li>
                <li>Gynaecologist Consultation</li>
                <li>Ophthalmology Consultation</li>
                <li>ENT & Dental Consultation</li>
                <li>Cardiologist Consultation</li>
                <li>General Physician Consultation</li>
                <li>Diet & Life Style Counselling</li>
            </ul>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
          <h5 className="pb-3">Whole Body Health Check upp</h5>
          </div>
          <div className="panel-content1">
            <ul className="list-style-one">
            
                <li>Physical Examination by Physician</li>
                <li>Complete Blood Count</li>
                <li>Stool Routine(Ova Cyst, Occult Blood)</li>
                <li>Blood Urea & Serum Creatinine</li>
                <li>Electrolytes</li>
                <li>Complete Urine Analysis</li>
                <li>FBS & PP Blood Sugar</li>
                <li>HbA1c</li>
                <li>Lipid Profile</li>
                <li>HIV, HBsAg, HCV</li>
                <li>LFT (Liver Function Test)</li>
                <li>Thyroid Profile – FT4, T3, TSH</li>
                <li>Blood grouping & Rh typing</li>
                <li>ECG – All Leads</li>
                <li>X-ray Chest</li>
                <li>Ultrasound Scan (abdomen)</li>
                <li>Pap Smear (for Women)</li>
                <li>Uric Acid</li>
                <li>Urine Micro Albumin</li>
                <li>Echo (Echo Cardiogram)</li>
                <li>Gynaecology Consultation for Women</li>
                <li>General Physician Consultation</li>
                <li>Dental Consultation</li>
                <li>Ophthalmology Consultation</li>
                <li>ENT Consultation</li>
                <li>Cardiologist Consultation</li>
            </ul>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
          <h5 className="pb-3">Pre-Employment Health Check Up</h5>
          </div>
          <div className="panel-content1">
            <ul className="list-style-one">
            
              <li>Physical Examination by Physician</li>
              <li>Complete Urine Analysis</li>
              <li>Stool Routine</li>
              <li>Complete Blood Count</li>
              <li>FBS & PP Blood Sugar</li>
              <li>HIV / HBsAg</li>
              <li>Blood Urea & Serum Creatinine</li>
              <li>SGOT, SGPT</li>
              <li>Serum Cholesterol</li>
              <li>X-Ray Chest</li>
              <li>Blood Grouping & Rh Typing</li>
              <li>ECG</li>
              <li>Gynaecologist Consultation for women</li>
              <li>Ophthalmology Consultation</li>
              <li>ENT Consultation</li>
              <li>Dental Consultation</li>
              <li>General Physician Consultation</li>
              <li>Diet & Lifestyle Counselling</li>
          </ul>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
          <h5 className="pb-3">Cancer Screening Check up</h5>
          </div>
          <div className="panel-content1">
          <ul className="list-style-one">
          
             <li>Physical Examination by Physician</li>
              <li>Complete Blood Count</li>
              <li>Stool Routine(Ova Cyst, Occult Blood)</li>
              <li>Blood Urea & Serum Creatinine</li>
              <li>Electrolytes</li>
              <li>Complete Urine Analysis</li>
              <li>FBS & PP Blood Sugar</li>
              <li>Hemoglobin </li>
              <li>E.S.R</li>
              <li>ECG</li>
              <li>Total WBC </li>
              <li>WBC Differential count</li>
              <li>Peripheral smear</li>
              <li>Alkaline Phosphatase </li>
              <li>Blood grouping & Rh typing</li>
              <li>X-ray Chest</li>
              <li>Ultrasound Scan (abdomen)</li>
              <li>Pap Smear (for Women)</li>
              <li>Mammography </li>
              <li>Breast Examination </li>
              <li>General Physician Consultation</li>
              <li>Oncologist Consultation</li>
              </ul>
          </div>
        </TabPanel>
        <TabPanel>

          <div className="panel-content">
          <h4 className="pb-3">Devaki Kidney Check up</h4>
          </div>
          <div className="panel-content1">
          <ul className="list-style-one">

             <li>Physical Examination by Physician</li>
              <li>Complete Blood Count</li>
              <li>Stool Routine(Ova Cyst, Occult Blood)</li>
              <li>Blood Urea & Serum Creatinine</li>
              <li>Electrolytes</li>
              <li>Complete Urine Analysis</li>
              <li>FBS & PP Blood Sugar</li>
              <li>Cholesterol </li>
              <li>Hemoglobin </li>
              <li>Serum Creatinine </li>
              <li>Urea</li>
              <li>Uric Acid </li>
              <li>Serum Electrolytes</li>
              <li>X-ray Chest</li>
              <li>Ultrasound Scan (abdomen)</li>
              <li>General Physician Consultation</li>
              <li>Nephrologist  Consultation</li>
              </ul>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}
export default Listmhc1;
