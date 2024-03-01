import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { DM_Sans } from "next/font/google";
import Image from "next/image";
import React from "react";

const font = DM_Sans({ weight: "700", subsets: ["latin"] });

const Heading = () => {
  return (
    <div
      style={{
        backgroundImage: `url("/bg-Grid.svg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        width: "100%",
        height: "100%",
      }}
      className="flex flex-col items-center "
    >
      <div className="flex flex-col justify-center items-center gap-4  px-8 lg:px-32 py-20 text-[#323536]">
        <div className="flex flex-col items-center gap-8 justify-center max-w-5xl ">
          <div className="flex flex-col items-center gap-4 max-w-4xl">
            <h1
              className={cn(
                "text-center text-3xl md:text-4xl lg:text-5xl   ",
                font.className
              )}
            >
              Decentralized Asset Management for the{" "}
              <span className="text-[#007A86]"> Next-gen Investor. </span>
            </h1>
            <p className="text-center text-sm md:text-base  text-muted-foreground ">
              Piron brings asset originators and investors together, while
              ensuring a transparent, secured, and enhanced liquidity for
              financial and real-world assets.
            </p>

            <div>
              <Button size="lg" className="bg-[#007A86] rounded-full ">
                Get Started
              </Button>
            </div>
          </div>

          <div>
            <Image src="/newHero.svg" alt="hero" width={724} height={100} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
