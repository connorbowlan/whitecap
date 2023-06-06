// import React from "react";
// import { Features, Footer, HeroSlider, Navbar } from "./components";
// import './css/index.css';
// import './css/custom-styles.css';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';




// function App() {
//   return (
//     <div className="w-full overflow-hidden">
//       {/* Navbar */}
//       <Navbar />

//       {/* Hero */}
//       <HeroSlider />

//       {/* Features */}
//       <Features />

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// }

// export default App;





import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Features, Footer, HeroSlider, Navbar } from './components';
import './css/index.css';
import './css/custom-styles.css';

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



