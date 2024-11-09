import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About_Us from "./pages/About-Us";
import Home from "./pages/Home";
import Service from "./pages/service";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About_Us />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </Router>
  );
};

export default App;
