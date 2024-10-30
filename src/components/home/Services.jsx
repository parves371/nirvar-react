import React from "react";
import MedicalHistoryTracking from "./services-left";
import { TitleBaack } from "./tittle-back";

const Services = () => {
  return (
    <section className="bg-cyan-100 py-10">
  <div className="container mx-auto px-4">
    <TitleBaack back="services" front="Services" />

    <div className="flex flex-col lg:flex-row lg:space-x-10 justify-between items-center pt-8">
      {/* Content Section */}
      <div className="lg:w-1/2 w-full">
        <div className="flex flex-col gap-y-4">
          <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
            <MedicalHistoryTracking
              title="Medical History Tracking"
              description="Nirvar's advanced medical history tracking capability. Gone are the days of having to manually track and manage medical history. Nirvar's AI-powered system can automatically track and analyze medical history, providing valuable insights and recommendations for better health outcomes."
            />
            <MedicalHistoryTracking
              title="Medical History Tracking"
              description="Nirvar's advanced medical history tracking capability. Gone are the days of having to manually track and manage medical history. Nirvar's AI-powered system can automatically track and analyze medical history, providing valuable insights and recommendations for better health outcomes."
            />
          </div>
          <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
            <MedicalHistoryTracking
              title="Medical History Tracking"
              description="Nirvar's advanced medical history tracking capability. Gone are the days of having to manually track and manage medical history. Nirvar's AI-powered system can automatically track and analyze medical history, providing valuable insights and recommendations for better health outcomes."
            />
            <MedicalHistoryTracking
              title="Medical History Tracking"
              description="Nirvar's advanced medical history tracking capability. Gone are the days of having to manually track and manage medical history. Nirvar's AI-powered system can automatically track and analyze medical history, providing valuable insights and recommendations for better health outcomes."
            />
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
        <img
          src="https://img.freepik.com/premium-photo/close-up-portrait-his-he-nice-attractive-content-experienced-cheerful-cheery-bearded-guy-ceo-boss-chief-director-med-expert-visit-folded-arms-isolated-light-white-gray-pastel-color_274222-20798.jpg?semt=ais_siglip"
          alt=""
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  </div>
</section>

  );
};

export default Services;
