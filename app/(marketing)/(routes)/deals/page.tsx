import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import Footer from "../../_components/Footer";
import { dealFlow } from "./_components/dummy";

const DealPage = () => {
  return (
    <div className="flex flex-col h-screen ">
      {/* header */}
      <div className="flex items-center justify-between mx-12 my-16 ">
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
          <Image src="dealsHeader.svg" width={500} height={500} alt="header" />
        </div>
      </div>
      {/* header end */}

      <div className="flex flex-col items-center gap-2  bg-[#00434A]">
        <div className="flex flex-col items-center gap-8 my-12">
          <h1 className="p-3 rounded-full text-xs uppercase bg-[#003338]  text-[#8AC2C7]">
            Diversity is the spice of finance
          </h1>
          <h1 className="text-3xl text-center max-w-xl font-medium text-white">
            Get into the wide array of assets kept hidden by TradFi Gatekeepers
            through Piron Deals
          </h1>
        </div>

        <div className="py-6">
          <Image
            src="testr.svg"
            className="w-full h-full"
            width={750}
            height={366}
            alt="header"
          />
        </div>
      </div>
      {/* end */}

      {/* how it works */}

      <div className="flex flex-col items-center gap-8 my-12">
        <div className="flex flex-col items-center">
          <h1 className="text-sm text-[#007A86] font-medium">How it works</h1>
          <h1 className="text-4xl font-semibold text-gray-600 max-w-xs text-center">
            Taking Advantage of Piron Deals
          </h1>
        </div>

        <div className="grid grid-cols-2 items-center gap-16">
          {dealFlow.map((item, index) => (
            <div key={index} className="flex flex-col items-center max-w-lg">
              <h1 className="text-4xl text-muted-foreground my-4">
                {item.num}
              </h1>
              <Image src={item.image} width={114} height={110} alt="icon" />
              <div className="my-3 flex flex-col items-center">
                <h1 className="text-2xl font-medium text-gray-600 my-1 ">
                  {item.title}
                </h1>
                <h2 className="text-xs text-[#54A6AE] font-medium">
                  {item.subTitle}
                </h2>
              </div>
              <p className="text-sm text-center text-[#546162] max-w-xs">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* end */}

      <Footer />
    </div>
  );
};

export default DealPage;
