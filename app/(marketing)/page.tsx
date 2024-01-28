import React from "react";
import Heading from "./_components/Heading";
import Image from "next/image";
import { DM_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { userClass } from "./constants/dummy";
import { Button } from "@/components/ui/button";

const font = DM_Sans({ subsets: ["latin"] });

const MarketingPage = () => {
  return (
    <div className="min-h-full flex flex-col items-center">
      {/* Hero */}
      <Heading />

      {/* why piron */}
      <div className="flex flex-col lg:flex-row items-center gap-10 xl:gap-20 my-16 mx-8 ">
        <h1 className={cn("text-4xl font-bold text-[#546162]", font.className)}>
          Why Piron?
        </h1>
        <Image
          src="/why6.svg"
          layout="responsive"
          alt="why"
          width={834}
          height={91}
        />
      </div>

      {/* user class */}

      <div className="flex flex-col w-full items-center  bg-[#E6F2F3]">
        <h1
          className={cn(
            " text-2xl px-4 md:px-0 md:text-4xl font-semibold text-[#546162] text-center max-w-lg pt-12",
            font.className
          )}
        >
          Piron for those who are shaping the future
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-10">
          {userClass.map((item, index) => (
            <div
              key={index}
              className={cn(
                "flex flex-col items-center gap-3 w-[350px] lg:w-[480px] xl:w-[563px] bg-[#FFFFFF] p-4 rounded-xl",
                index == 1 && "bg-[#007A86]"
              )}
            >
              <Image src={item.icon} alt="user" width={100} height={100} />
              <h1 className={cn("text-3xl", index == 1 && "text-white")}>
                {item.title}
              </h1>
              <p
                className={cn(
                  "text-center text-muted-foreground font-light text-md max-w-64",
                  index == 1 && "text-white"
                )}
              >
                {item.desc}
              </p>
              <Button
                className={cn(
                  "px-5 rounded-full bg-[#007A86]",
                  index == 1 && "text-[#007A86] bg-white"
                )}
              >
                {item.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketingPage;
