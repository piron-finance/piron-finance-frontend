import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { DM_Sans } from "next/font/google";
import { cn } from "@/lib/utils";

const NavItems = [
  {
    name: "Features",
    path: "/",
  },
  {
    name: "For Businesses",
    path: "/",
  },
  {
    name: "Blog",
    path: "/",
  },
  {
    name: "FAQs",
    path: "/",
  },
];

const font = DM_Sans({ weight: "300", subsets: ["latin"] });

const Navbar = () => {
  return (
    <div className="flex items-center justify-between mx-8 mt-4">
      <div>
        <Image src="/logo6.svg" alt="logo" width={100} height={100} />
      </div>

      <div className="flex items-center gap-6">
        <ul className="flex gap-5">
          {NavItems.map((item, index) => (
            <li
              key={index}
              className={cn("text-md text-[#546162]", font.className)}
            >
              {item.name}
            </li>
          ))}
        </ul>

        <Button className="bg-[#007A86] rounded-full px-4" size="lg">
          Launch App
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
