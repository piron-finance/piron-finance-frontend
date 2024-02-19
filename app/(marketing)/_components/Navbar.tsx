"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { DM_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "usehooks-ts";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Menu } from "lucide-react";
import Link from "next/link";

const NavItems = [
  {
    name: "Deals",
    path: "/deals",
  },
  {
    name: "Clubs",
    path: "/club",
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
  const isMobile = useMediaQuery("(max-width: 1024px)");
  return (
    <>
      {!isMobile ? (
        <div className="flex items-center justify-between mx-8 mt-4">
          <div>
            <Image
              className="w-full"
              src="/logo66.svg"
              alt="logo"
              width={100}
              height={100}
            />
          </div>

          <div className="flex items-center gap-6">
            <ul className="flex gap-5">
              {NavItems.map((item, index) => (
                <Link href={item.path}>
                  <li
                    key={index}
                    className={cn(
                      "text-md text-[#546162] hover:cursor-pointer hover:text-[#007A86]",
                      font.className
                    )}
                  >
                    {item.name}
                  </li>
                </Link>
              ))}
            </ul>

            <Link href="/portfolio">
              <Button className="bg-[#007A86] rounded-full px-4" size="lg">
                Launch App
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        /// fix nav content for mobile view. fix also: suspending laoding the page till usemedia hook is done. ie, until ismobile is valid, page stays loading
        // feat: implement lazy loading and newsletter. fix footer hover color
        <div className="flex items-center justify-between mx-8 mt-6">
          <div>
            <Image
              className="w-full"
              src="/logo66.svg"
              alt="logo"
              width={100}
              height={100}
            />
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Menu />
              </DropdownMenuTrigger>

              <DropdownMenuContent
                className="w-120 m-4"
                align="start"
                alignOffset={16}
                forceMount
              >
                <div>
                  <div className="flex items-center justify-between">
                    <h1 className="font-bold text-gray-600 dark:text-gray-200 text-xl p-4 ">
                      Features
                    </h1>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
