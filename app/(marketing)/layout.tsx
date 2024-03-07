import React from "react";
import Navbar from "./_components/Navbar";


const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="flex flex-col h-screen dark:bg-[#0e0e0e]"
      suppressHydrationWarning
    >
      <Navbar />
      <main className="flex flex-col w-full   h-screen overflow-y-scroll ">
       {children}
      </main>
    </div>
  );
};

export default MarketingLayout;
