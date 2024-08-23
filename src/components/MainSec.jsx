import React from "react";
import Main from "../assets/1.png";

const MainSec = () => {
  return (
    <div className="relative w-full h-[92.8vh] flex justify-center items-center">
      <img
        src={Main}
        className="w-full h-full object-cover brightness-50 "
        alt="Background"
      />
      <div className="absolute left-4 sm:left-8 md:left-12 top-1/2 transform -translate-y-1/2">
        <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-bold">
          Danish
        </h1>
        <p className="text-white text-base sm:text-lg md:text-xl mt-4">
          This is a sample paragraph text.
        </p>
      </div>
    </div>
  );
};

export default MainSec;
