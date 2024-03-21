"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { DM_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "usehooks-ts";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const NavItems = [
  {
    name: "Investment Clubs",
    path: "/club",
  },
  {
    name: "Blog",
    path: "https://mirror.xyz/0x6fE7fBbD0Bbb6f51A02613F4e00895511FA26457",
  },
  {
    name: "Docs",
    path: "https://piron-finance.gitbook.io/piron-finance/",
  },
];

const navItems2 = [
  {
    name: "Investors",
    path: "/investors",
  },
  {
    name: "Asset Originators",
    path: "/borrowers",
  },
];

const font = DM_Sans({ weight: "500", subsets: ["latin"] });

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const isMobile = useMediaQuery("(max-width: 1024px)");

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {!isMobile ? (
        <>
          <div className="flex items-center justify-between mx-8 my-4 ">
            <div className="flex items-center gap-x-12">
              <Link href="/">
                <Image
                  className="w-full hover:cursor-pointer"
                  src="/logo66.svg"
                  alt="logo"
                  width={100}
                  height={100}
                />
              </Link>

              <div>
                <ul className="flex  gap-5">
                  <Link href={navItems2[0].path}>
                    <li
                      className={cn(
                        "font-medium  text-[#32393A] hover:cursor-pointer hover:text-[#007A86]",
                        font.className
                      )}
                    >
                      {navItems2[0].name}
                    </li>
                  </Link>

                  <div className="border-r-2 border-gray-400" />

                  <Link href={navItems2[1].path}>
                    <li
                      className={cn(
                        "font-medium  text-[#32393A] hover:cursor-pointer hover:text-[#007A86]",
                        font.className
                      )}
                    >
                      {navItems2[1].name}
                    </li>
                  </Link>
                </ul>
              </div>
            </div>

            <div className="flex items-center gap-x-6">
              <ul className="flex gap-5">
                {NavItems.map((item, index) => (
                  <Link key={index} href={item.path}>
                    <li
                      className={cn(
                        "font-medium text-[#32393A] hover:cursor-pointer hover:text-[#007A86]",
                        font.className
                      )}
                    >
                      {item.name}
                    </li>
                  </Link>
                ))}
              </ul>

              <Button className="bg-[#007A86] rounded-full px-6" size="lg">
                Launch App
              </Button>
            </div>
          </div>
          <Separator />
        </>
      ) : (
        /// fix nav content for mobile view. fix also: suspending laoding the page till usemedia hook is done. ie, until ismobile is valid, page stays loading
        // feat: implement lazy loading and newsletter. fix footer hover color
        <>
          <div className="flex items-center justify-between mx-8 py-4">
            <Link href="/">
              <Image
                className=""
                src="/logo66.svg"
                alt="logo"
                width={100}
                height={100}
              />
            </Link>
            <div>
              <Menu className="hover:cursor-pointer" onClick={toggle} />
            </div>
          </div>
          <Separator />
        </>
      )}

      {isOpen && (
        <div
          className="flex flex-col gap-12 fixed w-full h-full pt-8 px-8 bg-white z-10"
          style={{
            opacity: "1",
            transition: "all 0.5s",
          }}
        >
          <div className="flex items-center justify-between">
            <div>
              <Image
                className=""
                src="/logo66.svg"
                alt="logo"
                width={100}
                height={100}
              />
            </div>

            <X size={28} className="hover:cursor-pointer" onClick={toggle} />
          </div>

          <div className="flex flex-col ">
            <ul className="flex flex-col gap-5">
              <Link href="/investors">
                <li onClick={toggle}>Investors</li>
              </Link>

              <Link href="/borrowers">
                <li onClick={toggle}>Asset Originators</li>
              </Link>
              <Separator />

              {NavItems.map((item, index) => (
                <Link href={item.path} key={index}>
                  <li onClick={toggle}>{item.name}</li>
                </Link>
              ))}
            </ul>

            <Button className="bg-[#007A86] rounded-lg  mt-8 px-6" size="lg">
              Launch App
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
