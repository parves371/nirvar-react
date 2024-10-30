import React from "react";

export const TitleBaack = ({back,front}) => {
  return (
    <div className="relative">
      <h2 className="text-[60px] font-bold text-gray-800 mb-4 z-10 absolute left-[-10px] bottom-[-30px] ">
      {back}
      </h2>
      <h2 className="text-[80px] z-0 font-bold text-blue-100 mb-4 ">{front}</h2>
    </div>
  );
};
