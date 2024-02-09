import { Separator } from "@/components/ui/separator";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-col  my-4">
      <div className="flex flex-col mx-6">
        <div>
          <h1 className="text-4xl">Deals</h1>
        </div>
        <div className="mt-10">
          <ul className="flex items-center gap-5 my-2">
            <li className="  text-gray-600 hover:text-green-800  hover:cursor-pointer ">
              Explore
            </li>
            <li className="text-gray-600">My Deals</li>
          </ul>
        </div>
      </div>
      <Separator />
    </div>
  );
};

export default Navbar;
