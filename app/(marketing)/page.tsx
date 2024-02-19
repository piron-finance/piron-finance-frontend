import React from "react";
import Heading from "./_components/Heading";
import Image from "next/image";
import { DM_Sans, EB_Garamond } from "next/font/google";
import { cn } from "@/lib/utils";
import { userClass, features } from "./constants/dummy";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { BsDiscord, BsX } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Input } from "@/components/ui/input";
import Footer from "./_components/Footer";

const font = DM_Sans({ subsets: ["latin"] });
const font2 = EB_Garamond({ weight: "500", subsets: ["latin"] });

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
        <Image src="/why6.svg" alt="why" width={834} height={91} />
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

      {/* explore section */}
      <div className="flex flex-col items-center justify-center mx-8">
        <div className="my-16">
          <h1 className=" text-2xl text-center lg:text-4xl text-[#546162] font-semibold">
            Explore DeFi for the Real World
          </h1>
        </div>

        <div className="flex flex-col items-center gap-28">
          {features.map((item, index) => (
            <div
              key={index}
              className={cn(
                "flex items-center gap-20",
                index % 2 == 0 ? "flex-row" : "flex-row-reverse"
              )}
            >
              <div>
                <Image src={item.icon} alt="icon" width={294} height={100} />
              </div>

              <div className="flex flex-col items-start gap-6">
                <h1
                  className={cn(
                    " text-xl lg:text-2xl text-[#3d4445] text-start font-medium lg:max-w-xs",
                    font.className
                  )}
                >
                  {item.title}
                </h1>
                <p
                  className={cn(
                    "text-start text-muted-foreground text-xs lg:text-sm max-w-md text-[#91A0A1]",
                    font.className
                  )}
                >
                  {" "}
                  {item.desc}
                </p>
                <span
                  className={cn(
                    "flex items-center",
                    index == 0
                      ? "text-[#007A86]"
                      : index == 1
                      ? "text-[#EF841F]"
                      : "text-[#1F83F9]"
                  )}
                >
                  <h1 className=" text-md lg:text-lg hover:cursor-pointer ">
                    {item.buttonText}
                  </h1>
                  <ArrowUpRight className="" size={24} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* newsletter */}

      <div className="flex flex-col items-center gap-8 my-16 mx-6 lg:my-28">
        <div className="flex  items-center gap-2 lg:gap-10">
          <h1 className="text-2xl text-[#32393A] font-semibold">
            Say GM, we&apos;re listening
          </h1>
          <span className="flex items-center gap-5">
            <BsDiscord className="hover:cursor-pointer" size={24} />
            <FaSquareXTwitter className="hover:cursor-pointer" size={24} />
          </span>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 bg-[#E6F2F3] rounded-xl p-8">
          <div className="flex flex-col items-center">
            <h2 className="text-lg font-medium text-[#32393A]">
              Suscribe to our newsletter
            </h2>
            <p className=" text-center lg:text-start lg:max-w-sm text-muted-foreground">
              Get insights, updates, and community highlights delivered straight
              to your inbox.
            </p>
          </div>

          <div className="flex items-center">
            <Input
              className="flex-1 px-4  lg:px-12 py-5 md:py-7 rounded-full  focus-visible:border-0 focus-visible:ring-0"
              placeholder="me@example.com"
            />
            <Button className="rounded-full bg-[#007A86] py-5 md:py-7 -ml-12">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MarketingPage;
