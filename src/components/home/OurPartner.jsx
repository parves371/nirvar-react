import React from "react";
import OurPartnerSlider from "../slider/OurPartnerSlider";
import { TitleBaack } from "./tittle-back";

const OurPartner = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-center items-center mb-32">
        <TitleBaack front={"Our Partner"} back={"Our Partner"} />
      </div>

      <OurPartnerSlider />
    </div>
  );
};

export default OurPartner;
