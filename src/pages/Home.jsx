import React from "react";
import Navbar from "../components/layout/Navbar";
import { HeroSection } from "../components/home/HeroSection";
import { AboutUs } from "../components/home/AboutUs";
import { Services } from "../components/home/Services";
import { DoctorConsultationAd } from "../components/home/DoctorConsultationAd";
import { Testimonials } from "../components/home/Testimonial";


const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Services />
      <DoctorConsultationAd />
      <Testimonials />
    </>
  );
};

export default Home;
