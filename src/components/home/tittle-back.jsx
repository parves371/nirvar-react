import React from "react";

export const TitleBaack = ({ back, front }) => {
  return (
    <div className="relative">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#666666] mb-4 z-10 absolute left-[-10px] lg:bottom-[-50px] bottom-[-40px]">
        {back}
      </h2>
      <h2 className="text-4xl md:text-5xl lg:text-6xl z-0 font-bold text-[#a9d3ca] mb-4">
        {front}
      </h2>
    </div>
  );
};
