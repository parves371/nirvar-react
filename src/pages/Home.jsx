import React from "react";
import Navbar from "../components/layout/Navbar";

// import { AboutUs } from "../components/about-us/AboutUs";
import { DoctorConsultationAd } from "../components/home/DoctorConsultationAd";
import FAQSection from "../components/home/FAQSection";
import { HeroSection } from "../components/home/HeroSection";
import { Services } from "../components/home/Services";
import Testimonial from "../components/home/Testimonial";
import Footer from "../components/layout/Footer";
import OurPartner from "../components/home/OurPartner";
import { NirvarPromo } from "../components/home/NirvarPromo";
import { AboutUs } from "../components/home/AboutUs";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Services />
      <DoctorConsultationAd />
      <Testimonial />
      <NirvarPromo />
      <FAQSection />
      <OurPartner />
      <Footer />
    </>
  );
};

export default Home;
