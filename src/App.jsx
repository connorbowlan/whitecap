import React from "react";
import { Features, Footer, HeroSlider, Navbar } from "./components";

function App() {
  return (
    <div className="w-full overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <HeroSlider />

      {/* Features */}
      <Features />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;


