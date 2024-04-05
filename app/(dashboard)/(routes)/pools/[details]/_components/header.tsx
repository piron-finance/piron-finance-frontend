import { Doc } from "@/convex/_generated/dataModel";
import React from "react";

interface HeaderProps {
  pool: Doc<"pools">;
}

const Header = ({ pool }: HeaderProps) => {
  return (
    <div className="flex flex-col gap-6 bg-white mx-2 rounded-2xl shadow-sm  ">
      <div className="ml-10 mt-6">
        <h1 className="text-lg font-medium">Overview</h1>
      </div>

      <div className="flex justify-evenly gap-5 mx-6 my-12 ">
        <div className="flex flex-col items-center justify-center gap-4 bg-[#FFF9F2] py-10 px-12 flex-grow rounded-md shadow-sm">
          <h1 className="text-xl font-medium text-[#32393A]">{pool.yield}%</h1>
          <h1 className="text-sm font-medium text-[#414B4C]">Est. Yield</h1>
        </div>

        <div className="flex flex-col items-center gap-4 bg-[#FFF2FA] py-10 px-12 flex-grow rounded-md shadow-sm">
          <h1 className="text-xl font-medium text-[#32393A]">
            ${pool.targetRaise}
          </h1>
          <h1 className="text-sm font-medium text-[#414B4C]">Target Raise</h1>
        </div>

        <div className="flex flex-col items-center gap-4 bg-[#F2FFF4] py-10 px-12 flex-grow rounded-md shadow-sm">
          <h1 className="text-xl font-medium text-[#32393A]">
            {pool.totalRaised}
          </h1>
          <h1 className="text-sm font-medium text-[#414B4C]">Current Raise</h1>
        </div>

        <div className="flex flex-col items-center gap-4 bg-[#F2F4FF] py-10 px-12 flex-grow rounded-md shadow-sm">
          <h1 className="text-xl font-medium text-[#32393A]">
            {pool.assetType}
          </h1>
          <h1 className="text-sm font-medium text-[#414B4C]">Asset Type</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
