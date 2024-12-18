import React from "react";

export const HeroSection = () => {
  return (
    <>
      <section className="bg-[url('https://images.unsplash.com/photo-1730138056313-dc4b284d8dd4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat relative">
        <div className="container mx-auto flex flex-col md:flex-row p-8 md:p-20 text-white">
          {/* Left Text Section */}
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Reduce redundancy <br /> and improve your <br /> healthcare
              experience.
            </h1>
            <p className="text-lg mb-8">
              Empowering your health journey, one tap at a time. Nirvar is the
              ultimate medical app that seamlessly connects you with doctors,
              offers a range of medical tests, delivers your prescribed
              medication, and securely stores your complete medical history.
            </p>
            <button className="px-10 py-3 bg-white text-teal-500 font-semibold rounded-full hover:bg-gray-100 transition duration-300">
              Learn More
            </button>
          </div>

          {/* Right Section */}
          <div className="mt-10 md:mt-0 md:pl-10 flex justify-center md:w-1/2">
            {/* Image placeholder for right section */}
            {/* Uncomment and add image source here if needed */}
            {/* <img className="w-64 h-96" src="IMAGE_SOURCE" alt="home hero" /> */}
          </div>
        </div>
        <div className="pt-56" />

        {/* Wave SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute bottom-[-1px] md:bottom-[-30px] lg:bottom-[-50px] w-full"
        >
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,160L60,181.3C120,203,240,245,360,245.3C480,245,600,203,720,154.7C840,107,960,53,1080,37.3C1200,21,1320,43,1380,53.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </section>
    </>
  );
};
