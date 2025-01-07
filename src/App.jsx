import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const About_Us = lazy(() => import("./pages/About-Us"));
const Service = lazy(() => import("./pages/Service"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));

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
