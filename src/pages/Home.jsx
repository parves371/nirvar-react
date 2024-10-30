import React from "react";
import HeroSection from "../components/home/HeroSection";
import Navbar from "../components/layout/Navbar";
import AboutUs from "../components/home/AboutUs";
import Services from "../components/home/Services";
import DoctorConsultationAd from "../components/home/DoctorConsultationAd";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Services />
      <DoctorConsultationAd />
    </>
  );
};

export default Home;
