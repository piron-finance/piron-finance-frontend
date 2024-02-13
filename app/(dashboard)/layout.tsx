import React from "react";
import Navigation from "./_components/Navigation";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="flex items-center h-screen dark:bg-[#0e0e0e]"
      suppressHydrationWarning
    >
      <Navigation />

      <main className="flex flex-col w-full   h-screen overflow-y-scroll ">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
