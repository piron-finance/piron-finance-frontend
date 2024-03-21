import React from "react";
import { headerData } from "./dummy";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex flex-col gap-6 bg-white mx-6 rounded-2xl shadow-sm  ">
      <div className=" ml-10 mt-6">
        <h1 className="text-lg font-medium">Protocol Overview</h1>
      </div>

      <div className="flex items-center justify-around  my-12 ">
        {headerData.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <Image src={item.icon} alt="icon" width={59} height={59} />
            <h1 className="text-xl font-semibold">{item.amount}</h1>
            <h1 className="text-muted-foreground">{item.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
