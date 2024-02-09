import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";

const NavItems = [
  {
    name: "Portfolio",
    icon: "/icon1.svg",
    path: "/pools",
  },
  {
    name: "Deals",
    icon: "/icon2.svg",
    path: "/pools",
  },
  {
    name: "Trade Assets",
    icon: "/icon3.svg",
    path: "/pools",
  },
  {
    name: "Clubs",
    icon: "/icon4.svg",
    path: "/pools",
  },
];

const utilsNavItems = [
  {
    name: "Governance",
    icon: "/icon5.svg",
    path: "/pools",
  },
  {
    name: "Settings",
    icon: "/settings.svg",
    path: "/pools",
  },
  {
    name: "Settings",
    icon: "/icon7.svg",
    path: "/pools",
  },
];

const Navigation = () => {
  return (
    <>
      <aside className="flex relative flex-col  w-[240px] bg-white group/sidebar h-screen ">
        {/* Logo */}
        <div className="my-8 mx-6">
          <Image src="/dashLogo.svg" alt="logo" width={150} height={150} />
        </div>

        {/* dash routes */}
        <div className="flex flex-col items-center my-20">
          <ul className="flex flex-col gap-4 w-full ">
            {NavItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-5 ml-5  text-gray-600 hover:text-[#007A86]  hover:bg-gray-100 p-3 rounded-l-full cursor-pointer"
              >
                <Image src={item.icon} alt="icon" width={16} height={16} />
                <span className="text-sm  font-light">{item.name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* governance & settings */}
        <div className="flex flex-col items-center my-24">
          <ul className="flex flex-col gap-4 w-full">
            {utilsNavItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-5 ml-5  text-gray-600 hover:text-[#007A86]  hover:bg-gray-100 p-3 rounded-l-full cursor-pointer"
              >
                <Image src={item.icon} alt="icon" width={16} height={16} />
                <span className="text-sm  font-light">{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <Separator orientation="vertical" className="z-[99999] " />
    </>
  );
};

export default Navigation;
