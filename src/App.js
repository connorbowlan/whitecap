import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Articles from "./views/Articles";
import { Footer } from "./containers";
import Home from "./views/Home";
import { Navbar } from "./components";

function App() {
  return (
    <BrowserRouter>
      <div className="gradient-bg">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/articles/:id" Component={Articles}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
