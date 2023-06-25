import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Articles from "./views/Articles";
import FAQ from "./views/FAQ";
import { Footer } from "./containers";
import Home from "./views/Home";
import { Navbar } from "./components";
import PrivacyPolicy from "./views/PrivacyPolicy";
import TermsConditions from "./views/TermsConditions";

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
        <Route path="/faq" Component={FAQ} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
