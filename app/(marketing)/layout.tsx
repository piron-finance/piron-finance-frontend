import React from "react";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="flex flex-col  relative h-screen dark:bg-[#0e0e0e]"
      suppressHydrationWarning
    >
      <Navbar />
      <main className=" ">{children}</main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
