import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { clubFeatures, clubFeatures2 } from "./_components/dummy";
import { cn } from "@/lib/utils";
import { Arrow } from "@radix-ui/react-dropdown-menu";
import { ArrowRight } from "lucide-react";
import Footer from "../../_components/Footer";

const ClubPage = () => {
  return (
    <div className="flex flex-col  h-screen ">
      {/* header */}
      <div className="flex items-center justify-between mx-8 my-28">
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

      <div className="flex mx-8 my-20">
        <div className="w-1/3">
          <h1 className="text-5xl font-semibold max-w-md text-gray-600">
            Powerful investing tools, right out of the box
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-8 items-start w-2/3">
          {clubFeatures.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 border border-[#B0D6D9] p-3 rounded-xl"
            >
              <Image src={item.image} alt="icon" width={40} height={40} />
              <h1 className="text-2xl text-gray-800 max-w-sm">{item.title}</h1>
              <p className="text-muted-foreground max-w-xs font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* end */}

      {/* how it works */}
      <div className="flex flex-col items-center my-20 ">
        <h1 className="text-4xl text-gray-600 font-semibold">How it works</h1>
        <div className="my-12 w-full">
          {clubFeatures2.map((item, index) => (
            <div
              key={index}
              className={cn(
                "flex items-center justify-between py-6 px-28",
                index % 2 == 0 ? "flex-row" : "flex-row-reverse",
                index == 0
                  ? "bg-[#E7F5EC]"
                  : index == 1
                  ? "bg-[#FDF3E9]"
                  : "bg-[#E9F3FD]"
              )}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <h1
                    className={cn(
                      "px-3 text-white py-1 rounded-lg bg-[#003338]",
                      index == 0
                        ? "bg-[#003338]"
                        : index == 1
                        ? "bg-[#64370D]"
                        : "bg-[#000938]"
                    )}
                  >
                    {item.no}
                  </h1>
                  <h1
                    className={cn(
                      "px-3 text-white py-1 rounded-lg bg-[#003338]",
                      index == 0
                        ? "bg-[#003338]"
                        : index == 1
                        ? "bg-[#64370D]"
                        : "bg-[#000938]"
                    )}
                  >
                    {item.head}
                  </h1>
                </div>
                <h1
                  className={cn(
                    "text-2xl font-medium text-[#003338]",
                    index == 0
                      ? "text-[#003338]"
                      : index == 1
                      ? "text-[#64370D]"
                      : "text-[#000938]"
                  )}
                >
                  {item.title}
                </h1>
                <p className="text-lg text-muted-foreground max-w-lg">
                  {item.desc}
                </p>
              </div>

              <div>
                <Image src={item.image} alt="icon" width={400} height={300} />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* end */}

      <div className="flex flex-col items-center">
        <div className="flex items-end gap-16 my-12">
          <div>
            <Image
              src="/clubIcons/clubMar4.svg"
              width={603}
              height={400}
              alt="header"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl text-muted-foreground font-medium max-w-sm">
              Friends who invest together, stay together
            </h1>
            <div>
              <Button className="bg-[#007A86] inline-flex gap-2 rounded-full">
                Create a Club <ArrowRight size="20" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ClubPage;
