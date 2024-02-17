import { Eye } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col gap-6  mx-4">
      <h1 className="text-2xl font-light">Hello 👋 </h1>

      <div
        style={{
          backgroundImage: `url("/portfolioImg.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "280px",
        }}
        className=" bg-[#D8FCFF] rounded-lg  gap-10"
      >
        <div className="flex flex-col gap-4  items-center  bg-opacity-60 p-20 items-center rounded-lg bg-[#D8FCFF] w-full h-full">
          <div className="flex flex-col gap-4 items-center ">
            <span className="flex items-center gap-4 text-muted-foreground">
              <h1 className="text-sm">Total Balance</h1>
              <Eye />
            </span>

            <h1 className="text-6xl text-[#32393A] ">$4000.00</h1>
          </div>

          <div className="flex items-center gap-2">
            <h1 className="text-[#0E8938]">+$403.40</h1>
            <h1 className="p-1 rounded-full bg-[#0E8938] text-white">10.59%</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
