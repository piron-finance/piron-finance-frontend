import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const ClubPage = () => {
  return (
    <div className="flex flex-col h-screen ">
      {/* header */}
      <div className="flex items-center justify-between mx-8 my-16">
        <div className="flex flex-col gap-8 max-w-lg">
          <h1 className="text-5xl font-semibold">
            <span className="text-[#007A86]">Join an Investment Club </span> -{" "}
            <span className="text-gray-400"> Collaborate, Invest, Grow </span>
          </h1>
          <p className=" text-muted-foreground max-w-md">
            Discover the power of collective investment. Team up with peers,
            share insights and amplify your investment portfolio.
          </p>
          <span>
            <Button className="bg-[#007A86] rounded-full">Explore Clubs</Button>
          </span>
        </div>

        <div>
          <Image
            src="clubHeader.svg"
            className="w-full"
            width={803}
            height={379}
            alt="header"
          />
        </div>
      </div>
      {/* end */}

      {/* section */}
    </div>
  );
};

export default ClubPage;
