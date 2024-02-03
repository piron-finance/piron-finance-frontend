import React from "react";
import Navigation from "./_components/Navigation";
import Navbar from "./_components/Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="flex items-center    h-full dark:bg-[#0e0e0e]"
      suppressHydrationWarning
    >
      <Navigation />

      <main className="flex flex-col w-full  bg-[#f2eae4]  h-full overflow-y-auto ">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
