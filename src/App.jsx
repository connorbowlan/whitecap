import "./css/index.css";
import "./css/custom-styles.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Features, Footer, HeroSlider, Navbar } from "./components";

import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <HeroSlider />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
