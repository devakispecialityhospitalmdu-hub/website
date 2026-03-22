import React from 'react';
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
          <Route  path='/career'  element={<Career />} />
          <Route  path='/services'  element={<Services />} />
          <Route  path='/specialities'  element={<Specialities />} />
          <Route  path='/tpa'  element={<Insurance />} />
          <Route  path='/doctors'  element={<Doctors />} />
        </Routes>
      </Router>
    );

  }

export default App;
