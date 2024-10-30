import React from "react";
import { TitleBaack } from "./tittle-back";

const DoctorConsultationAd = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center p-6 my-8">
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img
            src="https://images.unsplash.com/photo-1584467735815-f778f274e296?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZG9jdG9yfGVufDB8fDB8fHww"
            alt="Doctor and Patient"
            className="w-[600px] h-[600px] object-cover rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-8 text-center md:text-left">
          <TitleBaack back={"Doctor Consultation"} front={"Doctor Consultation"} />
          <p className="text-lg text-gray-600 mb-4 mx-auto md:mx-0 w-[80%] md:w-full">
            With Nirvar, connecting with a doctor has never been easier. Say
            goodbye to long waiting times and endless phone calls. With just a
            few taps on your smartphone, you can book an appointment with a
            qualified healthcare professional who suits your needs.
          </p>
          <button className="bg-teal-500 text-white px-8 py-2 rounded-full hover:bg-teal-600 transition duration-300">
            Make An Appointment
          </button>
        </div>
      </div>
    </section>
  );
};

export default DoctorConsultationAd;
