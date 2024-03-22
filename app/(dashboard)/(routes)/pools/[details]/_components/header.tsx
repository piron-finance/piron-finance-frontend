import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex flex-col gap-6 bg-white mx-2 rounded-2xl shadow-sm  ">
      <div className=" ml-10 mt-6">
        <h1 className="text-lg font-medium">Overview</h1>
      </div>

      <div className="flex items-center justify-around  my-12 ">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-2xl font-medium text-[#32393A]">5.32%</h1>
          <h1 className="text-4xl font-medium text-[#414B4C]">Est. Yield</h1>
        </div>

        <div className="flex flex-col items-center gap-4">
          <h1 className="text-2xl font-medium text-[#32393A]">$8,649,560.23</h1>
          <h1 className="text-4xl font-medium text-[#414B4C]">Target Raise</h1>
        </div>

        <div className="flex flex-col items-center gap-4">
          <h1 className="text-2xl font-medium text-[#32393A]">5,649,560.23</h1>
          <h1 className="text-4xl font-medium text-[#414B4C]">Current Raise</h1>
        </div>

        <div className="flex flex-col items-center gap-4">
          <h1 className="text-2xl font-medium text-[#32393A]">Real Estate</h1>
          <h1 className="text-4xl font-medium text-[#414B4C]">Asset Type</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
