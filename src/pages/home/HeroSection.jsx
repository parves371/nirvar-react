import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-[url('https://images.unsplash.com/photo-1730138056313-dc4b284d8dd4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center p-8 md:p-20 text-white">
        {/* Left Text Section */}
        <div className="flex-1 md:pr-10">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Reduce redundancy <br /> and improve your <br /> Healthcare
            experience.
          </h1>
          <p className="text-lg mb-8">
            Empowering your health journey, one tap at a time. Nirvar is the
            ultimate medical app that seamlessly connects you with doctors,
            offers a range of medical tests, delivers your prescribed
            medication, and securely stores your complete medical history.
          </p>
          <button className="px-16 py-3 bg-white text-teal-500 font-semibold rounded-full hover:bg-gray-200">
            Learn More
          </button>
        </div>

        {/* Right  Section */}
        <div className="flex-1 mt-10 md:mt-0 md:pl-10 flex justify-center"></div>
      </div>
    </section>
  );
};

export default HeroSection;
