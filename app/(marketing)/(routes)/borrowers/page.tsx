import React from "react";
import Footer from "../../_components/Footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import data from "./_components/dummy";
import Card from "./_components/card";

const page = () => {
  return (
    <div className="flex flex-col  h-screen ">
      <div className="flex items-start justify-between my-16 mx-8">
        <div className="flex flex-col gap-8 mt-8 max-w-2xl">
          <h1 className="text-5xl text-gray-700 font-semibold">
            Access Untapped Liquidity For your Business As an{" "}
            <span className="text-[#007A86]"> Asset Originator</span>{" "}
          </h1>
          <p className="text-muted-foreground text-lg">
            Convert your business assets/credit to tokenized assets on chain and
            attract a new set of investors
          </p>
          <div className="">
            <Button size="lg" className="bg-[#007A86] rounded-full">
              Become an Asset Originator
            </Button>
          </div>
        </div>
        <div>
          <Image
            src="borrowersHeader.svg"
            width={500}
            height={500}
            alt="header"
          />
        </div>
      </div>

      <div className="bg-[#003338] flex flex-col items-center my-6 ">
        <div className="flex flex-col items-center text-[#F3FBFB] gap-4 my-10">
          <h1 className="text-4xl font-medium ">
            Revolutionize Your Fundrasing
          </h1>
          <p className="text-sm font-light text-center max-w-md">
            Harness the power of Piron to efficiently connect with a global
            network of eager investors and raise capital seamlessly
          </p>
        </div>
        <div className="grid  grid-cols-3 items-center justify-center  gap-6    mx-8 my-16">
          {data.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              index={index}
              color={item.color}
              description={item.description}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
      </div>

      <div className="flex items-end justify-center gap-16 my-12">
        <div>
          <Image
            src="borrowersFooter.svg"
            width={500}
            height={500}
            alt="header"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl max-w-sm front-semibold text-[#32393A]">
            Let&apos;s help you achieve your business funding goals today
          </h1>
          <div>
            <Button size="lg" className="bg-[#007A86] rounded-full">
              Get Started
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
