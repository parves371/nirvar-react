import React from "react";
import Navbar from "../components/layout/Navbar";
import { HeroSection } from "../components/about-us/HeroSection";
import { AboutUs } from "../components/home/AboutUs";
import { Services } from "../components/home/Services";
import { NirvarPromo } from "../components/home/NirvarPromo";
import OurPartner from "../components/home/OurPartner";
import Footer from "../components/layout/Footer";

const About_Us = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Services />
      <NirvarPromo />
      <OurPartner page="about-us" />
      <Footer page="about-us" />
    </>
  );
};

export default About_Us;
