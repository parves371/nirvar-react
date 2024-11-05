import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/About-Us";
import About_Us from "./pages/About-Us";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About_Us />} />
      </Routes>
    </Router>
  );
};

export default App;
