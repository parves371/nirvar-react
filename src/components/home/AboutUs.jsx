import React from "react";
import { TitleBack } from "../home/tittle-back";

export const AboutUs = () => {
  return (
    <div className="bg-white my-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-[50%]">
            <img
              src="https://images.unsplash.com/photo-1584467735815-f778f274e296?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZG9jdG9yfGVufDB8fDB8fHww"
              alt="Doctor and Patient"
              className="w-[500px] h-[500px] object-cover rounded-lg"
            />
          </div>
          <div className="w-full md:w-[50%] mt-8 md:mt-0 md:ml-8 px-4 ">
            <h2 className="text-[#1b8677] mb-8 text-3xl mt-16 font-bold">
              Introducing Nirvar:
              <br/> Your All-in-One Medical App
            </h2>
            <p className="text-[#1b0d1c] mb-16 text-xl mt-8 font-medium">
              Your health, simplified. Nirvar is the all-in-one medical app that
              connects you with doctors, offers a range of tests, delivers
              medicine right to your doorstep, and stores your complete medical
              history securely in one place. With features like BPM monitoring
              and diabetes tracking, we empower you to take charge of your
              well-being. Plus, our blood bank ensures lifesaving donations are
              just a tap away. Experience convenience and care at your
              fingertips with Nirvar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
