import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Articles from "./pages/Articles";
import { Footer } from "./containers";
import Home from "./pages/Home";
import { Navbar } from "./components";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";

function App() {
  return (
    <BrowserRouter>
      <div className="gradient-bg">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/articles/:id" Component={Articles}></Route>
        <Route path="/t&c" Component={TermsConditions} />
        <Route path="/privacy-policy" Component={PrivacyPolicy} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
