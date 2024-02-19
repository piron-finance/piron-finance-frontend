import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const DealPage = () => {
  return (
    <div className="flex flex-col h-screen mx-4">
      {/* header */}
      <div className="flex items-center justify-between mx-6 mt-16 ">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-5 items-start max-w-lg">
            <h1 className="text-5xl font-semibold text-gray-700">
              Achieve Your Financial Goals By Participating in
              <span className="text-[#007A86]"> Deals </span>
            </h1>
            <h2 className="text-muted-foreground font-light text-lg">
              Explore a new world of asset backed opportunities, seamlessly{" "}
              <span className="italic text-[#EF841F]"> powered by Piron.</span>
            </h2>
          </div>
          <div className="flex gap-4">
            <Button className="bg-[#007A86] rounded-full" color="">
              View Demo
            </Button>
            <Button variant="outline" className="rounded-full">
              Read Docs
            </Button>
          </div>
        </div>
        <div>
          <Image src="dealsHeader.svg" width={400} height={400} alt="header" />
        </div>
      </div>
      {/* header end */}
    </div>
  );
};

export default DealPage;
