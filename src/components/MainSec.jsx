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
          Real Madrid Vs Barcelona
        </h1>
        <p className="text-white text-base sm:text-lg md:text-xl mt-4">
          Date : 27 Oct 2024
        </p>
        <p className="text-white text-base sm:text-lg md:text-xl mt-4">
          Time : 20:00
        </p>
        <p className="text-white text-base sm:text-lg md:text-xl mt-4">
          Stadium : Santiago Bernabeu
        </p>
        <p className="text-white text-base sm:text-lg md:text-xl mt-4">
          Live Score 0 : 0
        </p>
      </div>
    </div>
  );
};

export default MainSec;
