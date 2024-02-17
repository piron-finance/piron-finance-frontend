"use client";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

interface Props {
  page: string;
}

const Navbar = ({ page }: Props) => {
  const pagesWithInitialActiveItem: Record<string, string> = {
    portfolio: "Assets",
    deals: "Explore",
    trade: "SomeTradeItem", // Replace with the desired default for "trade"
    clubs: "SomeClubItem", // Replace with the desired default for "clubs"
  };

  const initialActiveItem = pagesWithInitialActiveItem[page] || "";
  const [activeItem, setActiveItem] = useState<string>(initialActiveItem);
  // const [activeItem, setActiveItem] = useState<string>("Explore");

  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };

  return (
    <div className="flex flex-col my-4  ">
      {page === "deals" && (
        <div className="flex flex-col mx-6 ml-16 md:ml-12">
          <div className="">
            <h1 className=" text-2xl md:text-4xl">Deals</h1>
          </div>
          <div className="mt-10 ">
            <ul className="flex items-center h-full  gap-5 my-2">
              <li
                className={cn(
                  "flex flex-col h-full  text-gray-500 hover:text-green-800 hover:cursor-pointer ",
                  activeItem === "Explore" && "text-[#007A86]"
                )}
                onClick={() => handleItemClick("Explore")}
              >
                Explore
                {activeItem === "Explore" && (
                  <span className=" h-1/5 border-b border-[#007A86]  " />
                )}
              </li>
              <li
                className={cn(
                  "flex flex-col h-full  text-gray-500 hover:text-green-800 hover:cursor-pointer ",
                  activeItem === "My Deals" && "text-[#007A86]"
                )}
                onClick={() => handleItemClick("My Deals")}
              >
                My Deals
                {activeItem === "My Deals" && (
                  <span className=" h-1/5 border-b border-[#007A86] " />
                )}
              </li>
            </ul>
          </div>
        </div>
      )}

      {page === "portfolio" && (
        <div className="flex flex-col mx-6 ml-16 md:ml-12">
          <div className="">
            <h1 className=" text-2xl md:text-4xl">Portfolio</h1>
          </div>
          <div className="mt-10 ">
            <ul className="flex items-center h-full  gap-5 my-2">
              <li
                className={cn(
                  "flex flex-col h-full  text-gray-500 hover:text-green-800 hover:cursor-pointer ",
                  activeItem === "Assets" && "text-[#007A86]"
                )}
                onClick={() => handleItemClick("Assets")}
              >
                Assets
                {activeItem === "Assets" && (
                  <span className=" h-1/5 border-b border-[#007A86]  " />
                )}
              </li>
              <li
                className={cn(
                  "flex flex-col h-full  text-gray-500 hover:text-green-800 hover:cursor-pointer ",
                  activeItem === "Transaction History" && "text-[#007A86]"
                )}
                onClick={() => handleItemClick("Transaction History")}
              >
                Transaction History
                {activeItem === "Transaction History" && (
                  <span className=" h-1/5 border-b border-[#007A86] " />
                )}
              </li>
            </ul>
          </div>
        </div>
      )}

      <div>
        <Separator />
      </div>
    </div>
  );
};

export default Navbar;
