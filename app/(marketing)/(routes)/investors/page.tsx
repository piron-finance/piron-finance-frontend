import { Button } from "@/components/ui/button";
import Image from "next/image";
import Footer from "../../_components/Footer";
import { dealFlow } from "./_components/dummy";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { isMobile } from "react-device-detect";

const DealPage = () => {
  return (
    <div className="flex flex-col h-screen ">
      {/* header */}
      <div className="flex flex-col-reverse lg:flex-row lg:items-center justify-between mx-4 lg:mx-8 my-16 ">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-5 items-start md:max-w-lg">
            <h1 className=" text-3xl  lg:text-5xl font-semibold text-gray-700">
              Achieve Your Financial Goals By Participating in
              <span className="text-[#007A86]"> Deals </span>
            </h1>
            <h2 className="text-muted-foreground font-light lg:text-lg">
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

      <div className="flex flex-col items-center gap-2  bg-[#00434A]">
        <div className="flex flex-col items-center gap-4 md:gap-8 my-12">
          <h1 className=" p-2 md:p-3 rounded-full text-xs  bg-[#003338]  text-[#8AC2C7]">
            Diversity is the spice of finance
          </h1>
          <h1 className=" text-xl md:text-3xl text-center max-w-xl font-semibold md:font-medium text-white">
            Get into the wide array of assets kept hidden by TradFi Gatekeepers
            through Piron Deals
          </h1>
        </div>

        <div className="py-3 md:py-6 mx-3 md:mx-0">
          <Image
            src="diversityImg.svg"
            className="w-full h-full"
            width={750}
            height={366}
            alt="header"
          />
        </div>
      </div>

      {/* how it works */}

      <div className="flex flex-col items-center gap-8 my-12">
        <div className="flex flex-col items-center">
          <h1 className="text-sm text-[#007A86] font-semibold md:font-medium py-2">
            How it works
          </h1>
          <h1 className=" text-2xl md:text-4xl font-semibold text-gray-600 max-w-xs text-center">
            Taking Advantage of Piron Deals
          </h1>
        </div>

        <div
          className={cn(
            " flex flex-col  md:grid md:grid-cols-2 items-center gap-28 mx-4 lg:mx-0"
          )}
        >
          {dealFlow.map((item, index) => (
            <div key={index} className="flex flex-col items-start ">
              <h1 className=" text-4xl md:text-6xl font-semibold text-gray-400 my-4">
                {item.num}
              </h1>
              <Image
                className={cn("h-3/5", index == 1 && "w-full")}
                src={item.image}
                width={343}
                height={331}
                alt="icon"
              />
              <div className="my-4 flex flex-col items-start">
                <h1 className="text-2xl md:text-4xl font-semibold text-gray-700 my-1  max-w-sm ">
                  {item.title}
                </h1>
                <h2 className="text-xl md:text-2xl text-[#54A6AE] max-w-md">
                  {item.subTitle}
                </h2>
              </div>
              <p className=" text-xs md:text-base   text-[#546162] md:max-w-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className=" flex flex-col items-center my-20 ">
        <div
          style={{
            backgroundImage: `url("/backdrop.png")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "90%",
            height: "300px",
          }}
          className=" flex flex-col-reverse md:flex-row justify-center bg-[#D8FCFF] rounded-lg mx-12 md:gap-10"
        >
          <div>
            <Image
              className="w-[235px] lg:w-[470px]"
              src="bgDrop2.svg"
              width={470}
              height={370}
              alt="header"
            />
          </div>
          <div className="flex flex-col mx-4 gap-6 md:gap-20 md:my-12">
            <h1 className="text-2xl md:text-3xl text-muted-foreground font-medium md:font-semibold max-w-sm">
              Piron is used by people like yourself.
            </h1>
            <div>
              <Button className="bg-[#007A86] inline-flex gap-2 rounded-full">
                Start Now <ArrowRight size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DealPage;
