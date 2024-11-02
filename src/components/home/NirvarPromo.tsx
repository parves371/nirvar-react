import React from "react";
import { Link } from "react-router-dom";
import { TitleBaack } from "./tittle-back";

export const NirvarPromo = () => {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          {/* Left Side Image */}
          <div className="flex-1 w-full md:w-1/2 mb-8 md:mb-0">
            <div className="grid grid-cols-1 gap-4">
              <img
                src="path/to/patient-info.png"
                alt="Patient Info"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
          
          {/* Right Side Text Content */}
          <div className="flex-1 w-full md:w-1/2 mt-8 md:mt-0 md:ml-8">
            <TitleBaack back={"why nirvar"} front={"why nirvar"} />
            <ul className="pt-8 space-y-4">
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">✔</span>
                <p>
                  Easily book appointments with qualified healthcare
                  professionals, eliminating long waiting times and phone calls.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">✔</span>
                <p>
                  Securely store and access your complete medical history in one
                  place, eliminating the need for paper documents and enabling
                  easy retrieval of past diagnoses and treatments.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">✔</span>
                <p>
                  Stay informed about the latest healthcare advancements and
                  gain valuable insights into leading a healthier lifestyle
                  through informative medical blogs and tips within the app.
                </p>
              </li>
            </ul>
            
            {/* Learn More Button */}
            <button className="mt-8 bg-teal-500 text-white py-3 px-10 rounded-full shadow-lg hover:bg-teal-600 transition duration-300">
              Learn More
            </button>

            {/* Download Section */}
            <div className="mt-6">
              <p className="text-gray-600">Download The App Now:</p>
              <div className="flex items-center mt-3 flex-wrap">
                <Link to="/download" className="mr-4">
                  <img
                    src="path/to/google-play.png"
                    alt="Google Play"
                    className="h-10 mr-4"
                  />
                </Link>
                <img src="path/to/qr-code.png" alt="QR Code" className="h-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
