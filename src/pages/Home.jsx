import React from "react";
import HeroSection from "../components/home/HeroSection";
import Navbar from "../components/layout/Navbar";
import AboutUs from "../components/home/AboutUs";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutUs />
    </>
  );
};

export default Home;
