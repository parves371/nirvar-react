import React from "react";
import { TitleBack } from "../home/tittle-back";

export const AboutUs = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-[50%]">
            <img
              src="https://images.unsplash.com/photo-1584467735815-f778f274e296?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZG9jdG9yfGVufDB8fDB8fHww"
              alt="Doctor and Patient"
              className="w-[500px] h-[500px] object-cover rounded-lg"
            />
          </div>
          <div className="w-full md:w-[50%] mt-8 md:mt-0 md:ml-8 px-4">
            <TitleBack back={"About us"} front={"About us"} />
            <p className="text-gray-600 mb-8 text-xl mt-16">
              Your health, simplified. Nirvar is the all-in-one medical app that
              connects you with doctors, offers a range of tests, delivers
              medicine right to your doorstep, and stores your complete medical
              history securely in one place. With features like BPM monitoring
              and diabetes tracking, we empower you to take charge of your
              well-being. Plus, our blood bank ensures lifesaving donations are
              just a tap away. Experience convenience and care at your
              fingertips with Nirvar.
            </p>
            <button className="bg-teal-500 text-white px-16 py-2 rounded-full hover:bg-teal-600 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
