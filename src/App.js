import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Article from "./views/Article";
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
        <Route path="/article/:id" Component={Article}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
