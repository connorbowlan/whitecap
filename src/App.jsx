import "./css/index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Features, Footer, HeroSlider, Navbar } from "./components";
import HomePage from "./HomePage";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <HeroSlider />
        <div className="container mx-auto mt-4 flex-grow">
          <Features />
          <HomePage />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

