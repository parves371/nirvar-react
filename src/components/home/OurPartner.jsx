import React from "react";
import OurPartnerSlider from "../slider/OurPartnerSlider";
import { TitleBack } from "./tittle-back";

const OurPartner = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-center items-center mb-32">
        <TitleBack front={"Our Partner"} back={"Our Partner"} />
      </div>

      <OurPartnerSlider />
    </div>
  );
};

export default OurPartner;
