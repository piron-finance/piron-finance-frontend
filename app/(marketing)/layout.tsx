import React from "react";
import Navbar from "./_components/Navbar";
import { PageTransitionLayout } from "@/components/providers/PageTransitionLayout";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="flex flex-col h-screen dark:bg-[#0e0e0e]"
      suppressHydrationWarning
    >
      <Navbar />
      <main className="flex flex-col w-full   h-screen overflow-y-scroll ">
        <PageTransitionLayout>{children}</PageTransitionLayout>
      </main>
    </div>
  );
};

export default MarketingLayout;
