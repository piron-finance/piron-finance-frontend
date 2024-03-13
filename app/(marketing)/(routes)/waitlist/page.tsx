import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { data } from "./_components/dummy";
import Footer from "../../_components/Footer";

const WaitlistPage = () => {
  return (
    <div className="flex flex-col h-screen ">
      <div
        style={{
          backgroundImage: `url("/waitlistbg.svg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "500px",
        }}
        className=" flex  items-center px-8  py-8 justify-around "
      >
        <div className="">
          <Image
            src="/waitlistHeader.svg"
            className=""
            alt="logo"
            width={380}
            height={380}
          />
        </div>
        <div className="flex flex-col gap-3 max-w-xl">
          <h1 className="text-4xl text-[#EF841F]">Access</h1>
          <h1 className="text-5xl font-semibold text-gray-700 ">
            Real-World Opportunities{" "}
            <span className="text-[#007A86]"> On-Chain </span>{" "}
          </h1>
          <p className="max-w-sm text-muted-foreground">
            We unlock a world of possibilities for both investors and asset
            originators.
          </p>
          <div className="my-4">
            <Button size="lg" className="bg-[#007A86] rounded-full">
              Join the Waitlist
            </Button>
          </div>
        </div>
      </div>

      <div className=" flex flex-col items-center bg-[#E6F2F3] ">
        <div className="flex flex-col items-center gap-4 my-12">
          <h1 className="text-4xl text-[#76888A] max-w-xl font-semibold">
            Whether you are an{" "}
            <span className="text-[#007A86]"> Investor </span> or{" "}
            <span className="text-[#EF841F]"> Business </span> Looking For
            Capital
          </h1>
          <p className="text-muted-foreground text-lg">
            Piron is being built for you
          </p>
        </div>

        <div className="flex justify-center items-center gap-12 pb-12 ">
          {data.map((item, index) => (
            <div className="flex flex-col gap-3" key={index}>
              <div>
                <Image src={item.icon} width={24} height={24} alt="header" />
              </div>
              <div>
                <h2 className="text-muted-foreground text-sm font-semibold max-w-36 ">
                  {item.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center  justify-center my-16">
        <div className="flex flex-col gap-8">
          <h1 className="text-3xl max-w-xs font-semibbold text-[#76888A]">
            Be the first to hear when we launch
          </h1>
          <div>
            <Button size="lg" className="bg-[#007A86] rounded-full">
              {" "}
              Join the Waitlist
            </Button>
          </div>
        </div>
        <div>
          <Image
            src="/waitlistFooter.svg"
            width={328}
            height={280}
            alt="header"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WaitlistPage;
