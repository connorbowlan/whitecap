import "./App.css";

import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  Whitecap,
} from "./containers";
import { Brand, CTA, Navbar } from "./components";

import React from "react";

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <Whitecap />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
  </div>
);

export default App;
