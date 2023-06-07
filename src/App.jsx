import "./css/index.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Features, Footer, HeroSlider, Navbar } from "./components";

import HomePage from "./HomePage";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <HeroSlider />
      <div className="container mx-auto mt-4 expand-vpy">
        <Features />
        <HomePage />
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
