import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About_Us from "./pages/About-Us";
import Home from "./pages/Home";
import Service from "./pages/service";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About_Us />} />
        <Route path="/service" element={<Service />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
};

export default App;
