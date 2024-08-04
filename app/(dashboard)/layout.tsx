"use client";
import React from "react";
import Navigation from "./_components/Navigation";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import Web3ModalProvider from "./contexts/Web3modal";
import { useMediaQuery } from "usehooks-ts";
import { useState } from "react";
import { cn } from "@/lib/utils";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isCollapsed, setIsCollapsed] = useState(isMobile);

  const handleSidebarToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className="flex items-center h-screen dark:bg-[#0e0e0e]"
      suppressHydrationWarning
    >
      <Web3ModalProvider>
        <nav className=" no-scrollbar   ">
          <Navigation
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
          />
        </nav>

        <main
          className={cn(
            "flex flex-col w-full   h-full bg-slate-100 overflow-y-scroll ",
            isMobile && !isCollapsed ? "opacity-0" : ""
          )}
        >
          {children}
        </main>
      </Web3ModalProvider>
    </div>
  );
};

export default MainLayout;
