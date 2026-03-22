import React , {Component}from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route}
  from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Cardiology from './pages/cardiology';
import Oncology from './pages/oncology';
import Diagnostic from './pages/diagnostic';
import Gallery from './pages/gallery';
import Review from './pages/review';
import Contact from './pages/contact';
import Career from './pages/career';
import Services from './pages/services';
import Specialities from './pages/specialities';
import Insurance from './pages/tpa';
import Doctors from './pages/doctors';
import Policy from './pages/policy';
import Billingpolicy from './pages/billingpolicy';
import Masterhc from './pages/masterhc';
import Pg from './pages/pg';
import Rooms from './pages/bed';
import Adminpolicy from './pages/adminpolicy';
import Billpolicy from './pages/billpolicy';
import Visitorinfo from './pages/visitorinfo';
import Accidentemergency from './pages/accidentemergency';
import Anaesthesiology from './pages/anaesthesiology';
import Bariatric from './pages/bariatric';
import Facilities from './pages/facilities';
import Cardiothoracic from './pages/cardiothoracic';
import Criticalcare from './pages/criticalcare';
import Dental from './pages/dental';
import Diabetology from './pages/diabetology';
import Ent from './pages/ent';
import Familymedicine from './pages/familymedicine';
import Gasteroenterology from './pages/gasteroenterology';
import Generalmedicine from './pages/generalmedicine';
import Generalsurgery from './pages/generalsurgery';
import Imagingscience from './pages/imagingscience';
import Nephrology from './pages/nephrology';
import Neurosurgery from './pages/neurosurgery';
import Neurology from './pages/neurology';
import Obstetrics from './pages/obstetrics';
import Orthopedics from './pages/orthopedics';
import Pediatric from './pages/pediatric';
import Pharmacy from './pages/pharmacy';
import Physcatric from './pages/physcatric';
import Physicalmedicine from './pages/physicalmedicine';
import Preventivemedicine from './pages/preventivemedicine';
import Pulmonology from './pages/pulmonology';
import Radiationonco from './pages/radiationnco';
import Surgery from './pages/surgery';
import Surgicalonco from './pages/surgicalonco';
import Urology from './pages/urology';
import Vasucular from './pages/vasucular';
import Lab from './pages/lab';
import News from './pages/news';
import Story from './pages/story';
  function App() {
    return (
      <Router>
        <Routes>
          <Route  path='/'  element={<Home />} />
          <Route  path='/about'  element={<About />} />
          <Route  path='/cardiology'  element={<Cardiology />} />
          <Route  path='/oncology'  element={<Oncology />} />
          <Route  path='/diagnostic'  element={<Diagnostic />} />
          <Route  path='/gallery'  element={<Gallery />} />
          <Route  path='/review'  element={<Review />} />
          <Route  path='/contact'  element={<Contact />} />
          <Route  path='/news'  element={<News />} />
          <Route  path='/career'  element={<Career />} />
          <Route  path='/services'  element={<Services />} />
          <Route  path='/specialities'  element={<Specialities />} />
          <Route  path='/tpa'  element={<Insurance />} />
          <Route  path='/doctors'  element={<Doctors />} />
          <Route  path='/policy'  element={<Policy />} />
          <Route  path='/masterhc'  element={<Masterhc />} />
          <Route  path='/pg'  element={<Pg />} />
          <Route  path='/bed'  element={<Rooms />} />
          <Route  path='/adminpolicy'  element={<Adminpolicy />} />
          <Route  path='/billpolicy'  element={<Billpolicy />} />
          <Route  path='/visitorinfo'  element={<Visitorinfo />} />
          <Route  path='/accidentemergency'  element={<Accidentemergency />} />
          <Route  path='/anaesthesiology'  element={<Anaesthesiology />} />
          <Route  path='/bariatric'  element={<Bariatric />} />
          <Route  path='/facilities'  element={<Facilities />} />
          <Route  path='/cardiothoracic'  element={<Cardiothoracic />} />
          <Route  path='/criticalcare'  element={<Criticalcare />} />
          <Route  path='/dental'  element={<Dental />} />
          <Route  path='/diabetology'  element={<Diabetology />} />
          <Route  path='/ent'  element={<Ent />} />
          <Route  path='/familymedicine'  element={<Familymedicine />} />
          <Route  path='/gasteroenterology'  element={<Gasteroenterology />} />
          <Route  path='/generalmedicine'  element={<Generalmedicine />} />
          <Route  path='/generalsurgery'  element={<Generalsurgery />} />
          <Route  path='/imagingscience'  element={<Imagingscience />} />
          <Route  path='/nephrology'  element={<Nephrology />} />
          <Route  path='/neurosurgery'  element={<Neurosurgery />} />
          <Route  path='/neurology'  element={<Neurology />} />
          <Route  path='/obstetrics'  element={<Obstetrics />} />
          <Route  path='/orthopedics'  element={<Orthopedics />} />
          <Route  path='/pediatric'  element={<Pediatric />} />
          <Route  path='/pharmacy'  element={<Pharmacy />} />
          <Route  path='/physcatric'  element={<Physcatric />} />
          <Route  path='/physicalmedicine'  element={<Physicalmedicine />} />
          <Route  path='/preventivemedicine'  element={<Preventivemedicine />} />
          <Route  path='/pulmonology'  element={<Pulmonology />} />
          <Route  path='/radiationnco'  element={<Radiationonco />} />
          <Route  path='/surgery'  element={<Surgery />} />
          <Route  path='/surgicalonco'  element={<Surgicalonco />} />
          <Route  path='/urology'  element={<Urology />} />
          <Route  path='/vasucular'  element={<Vasucular />} />
          <Route  path='/lab'  element={<Lab />} />
          <Route  path='/story'  element={<Story />} />
        </Routes>
      </Router>
    );

  }

export default App;
