import React from "react";
import Navbar from "../components/layout/Navbar";
import { HeroSection } from "../components/home/HeroSection";
import { AboutUs } from "../components/home/AboutUs";
import { Services } from "../components/home/Services";
import { DoctorConsultationAd } from "../components/home/DoctorConsultationAd";
import { Testimonials } from "../components/home/Testimonial";
import { NirvarPromo } from "../components/home/NirvarPromo";
import FAQSection from "../components/home/FAQSection";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Services />
      <DoctorConsultationAd />
      <Testimonials />
      <NirvarPromo />
      <FAQSection />
    </>
  );
};

export default Home;
