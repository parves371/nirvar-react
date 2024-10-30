import React from "react";

export const HeroSection = () => {
  return (
    <section className="bg-[url('https://images.unsplash.com/photo-1730138056313-dc4b284d8dd4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center h-[85vh] relative">
      <div className="container mx-auto flex flex-col md:flex-row items-center p-8 md:p-20 text-white ">
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

      {/* Wave SVG you can customize the color and size as needed */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-40"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffffff"
            d="M0,192L60,192C120,192,240,192,360,186.7C480,181,600,171,720,165.3C840,160,960,160,1080,160C1200,160,1320,160,1380,160L1440,160V320H1380C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320H0Z"
          />
        </svg>
      </div>
    </section>
  );
};

