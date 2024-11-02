import React from "react";
import MedicalHistoryTracking from "./services-left";
import { TitleBaack } from "./tittle-back";

export const Services = () => {
  return (
    <section className="bg-white py-10">
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#E0FFFF"
          fill-opacity="1"
          d="M0,160L60,181.3C120,203,240,245,360,245.3C480,245,600,203,720,154.7C840,107,960,53,1080,37.3C1200,21,1320,43,1380,53.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <div className="w-full bg-[#E0FFFF]">
        <div className=" container mx-auto px-4">
          <TitleBaack back="services" front="Services" />

          <div className="flex flex-col lg:flex-row lg:space-x-10 justify-between items-center pt-8">
            {/* Content Section */}
            <div className="lg:w-1/2 w-full">
              <div className="flex flex-col gap-y-4">
                <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
                  <MedicalHistoryTracking
                    imgink={""}
                    title="Medical History Tracking"
                    description="Nirvar's advanced medical history tracking capability. Gone are the days of having to manually track and manage medical history. Nirvar's AI-powered system can automatically track and analyze medical history, providing valuable insights and recommendations for better health outcomes."
                  />
                  <MedicalHistoryTracking
                    imgink={""}
                    title="Medical History Tracking"
                    description="Nirvar's advanced medical history tracking capability. Gone are the days of having to manually track and manage medical history. Nirvar's AI-powered system can automatically track and analyze medical history, providing valuable insights and recommendations for better health outcomes."
                  />
                </div>
                <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
                  <MedicalHistoryTracking
                    imgink={""}
                    title="Medical History Tracking"
                    description="Nirvar's advanced medical history tracking capability. Gone are the days of having to manually track and manage medical history. Nirvar's AI-powered system can automatically track and analyze medical history, providing valuable insights and recommendations for better health outcomes."
                  />
                  <MedicalHistoryTracking
                    imgink={""}
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
      </div>
      <svg
        className=""
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#E0FFFF"
          fill-opacity="1"
          d="M0,160L60,181.3C120,203,240,245,360,245.3C480,245,600,203,720,154.7C840,107,960,53,1080,37.3C1200,21,1320,43,1380,53.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
    </section>
  );
};
