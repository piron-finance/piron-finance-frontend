"use client";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { ChevronsLeft, MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, ElementRef, useEffect, SetStateAction } from "react";
import { useMediaQuery } from "usehooks-ts";

const NavItems = [
  {
    name: "Portfolio",
    icon: "/icon1.svg",
    path: "/portfolio",
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

interface PageProps {
  isCollapsed: boolean;
  setIsCollapsed: any;
}
const Navigation = ({ isCollapsed, setIsCollapsed }: PageProps) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const sidebarRef = useRef<ElementRef<"aside">>(null);
  const navbarRef = useRef<ElementRef<"div">>(null);

  const [isResetting, setIsResetting] = useState(false);

  useEffect(() => {
    if (isMobile) collapse();
  }, [isMobile]);

  const collapse = () => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(true);
      setIsResetting(true);
      sidebarRef.current.style.width = "0";
      navbarRef.current.style.setProperty("left", "0");
      navbarRef.current.style.setProperty("width", "100%");

      setTimeout(() => {
        setIsResetting(false);
      }, 300);
    }
  };

  const resetWidth = () => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(false);
      setIsResetting(true);
      sidebarRef.current.style.width = isMobile ? "100%" : "240px";
      navbarRef.current.style.setProperty("left", isMobile ? "100%" : "240px");
      navbarRef.current.style.setProperty(
        "width",
        isMobile ? "0" : "calc(100% - 240px)"
      );

      setTimeout(() => {
        setIsResetting(false);
      }, 300);
    }
  };
  return (
    <>
      <aside
        ref={sidebarRef}
        className={cn(
          " group/sidebar h-screen bg-teal overflow-y-auto  relative flex  w-[240px] flex-col  no-scrollbar",
          isResetting && "transition-all ease-in-out duration-300",
          isMobile && "w-0",
          isCollapsed && "w-0"
        )}
      >
        {/* Logo */}
        <div className="flex items-center justify-between my-8 mx-6">
          <Image src="/dashLogo.svg" alt="logo" width={150} height={150} />

          <div
            onClick={collapse}
            role="button"
            className={cn(
              "h-6 w-6 text-muted-foreground rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 absolute top-3 right-2 opacity-0 group-hover/sidebar:opacity-100 transition",
              isMobile && "opacity-100"
            )}
          >
            <ChevronsLeft className="h-6 w-6 text-gray-300 hover:text-gray-600" />
          </div>
        </div>

        {/* dash routes */}
        <div className="flex flex-col items-center my-20">
          <ul className="flex flex-col gap-4 w-full ">
            {NavItems.map((item, index) => (
              <Link href={item.path} key={item.name}>
                <li className="flex items-center gap-5 ml-5  text-gray-600 hover:text-[#007A86]  hover:bg-gray-100 p-3 rounded-l-full cursor-pointer">
                  <Image src={item.icon} alt="icon" width={16} height={16} />
                  <span className="text-sm  font-light">{item.name}</span>
                </li>
              </Link>
            ))}
          </ul>
        </div>

        {/* governance & settings */}
        <div className="flex flex-col items-center my-24">
          <ul className="flex flex-col gap-4 w-full">
            {utilsNavItems.map((item, index) => (
              <div key={item.name}>
                <li className="flex items-center gap-5 ml-5  text-gray-600 hover:text-[#007A86]  hover:bg-gray-100 p-3 rounded-l-full cursor-pointer">
                  <Image src={item.icon} alt="icon" width={16} height={16} />
                  <span className="text-sm  font-light">{item.name}</span>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </aside>

      <Separator orientation="vertical" className="z-[99999] " />

      {/* mobile */}
      <div
        ref={navbarRef}
        className={cn(
          "absolute top-0 z-[99999] left-56 w-[calc(100%-240px)]  ",
          isResetting && "transition-all ease-in-out duration-300",
          isMobile && "left-0 w-full px-4"
        )}
      >
        <nav className="bg-transparent px-3 py-2 w-full">
          {isCollapsed && (
            <MenuIcon
              onClick={resetWidth}
              role="button"
              className="h-6 w-6 mt-2 text-muted-foreground"
            />
          )}
        </nav>
      </div>
    </>
  );
};

export default Navigation;
