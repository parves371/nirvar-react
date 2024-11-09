import React from "react";
import Navbar from "../components/layout/Navbar";
import { HeroSection } from "../components/about-us/HeroSection";
import NirvarApp from "../components/services/NirvarApp";

const service = () => {
  return (
    <>
      <Navbar />
      <HeroSection name={"Why Nirvar?"} />
      <NirvarApp />
    </>
  );
};

export default service;
