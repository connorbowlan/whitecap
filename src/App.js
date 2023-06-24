import "./App.css";

import {
  Benefits,
  Blog,
  Footer,
  Header,
  Possibility,
  Welcome,
} from "./containers";
import { Brand, CTA, Navbar } from "./components";

import React from "react";

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    {/* <Brand /> */}
    <Welcome />
    <Benefits />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
  </div>
);

export default App;
