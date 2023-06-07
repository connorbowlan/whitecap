import './css/index.css';
import './css/custom-styles.css';

import { Features, Footer, HeroSlider, Navbar } from './components';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import React from 'react';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSlider />} />
        <Route path="/features" element={<Features />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;