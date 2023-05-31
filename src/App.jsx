import { Features, Footer, HeroSlider, Navbar } from "./components/index";

function App() {
  return (
    <div className=" w-full overflow-hidden">
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
