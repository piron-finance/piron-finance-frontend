import React from "react";
import Header from "./_components/Header";
import { Input } from "@/components/ui/input";
import { ChevronRight, Filter, Search, Zap } from "lucide-react";
import { cardItem } from "./_components/dummy";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { cn } from "@/lib/utils";

const page = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />

      {/* pool selection */}
      <section>
        {/* pool utils */}
        <div className="flex flex-col mx-4 my-12">
          <div className="flex flex-col my-4">
            <h1 className="text-2xl  text-gray-600">All Deals</h1>
            <p className="text-sm text-muted-foreground">
              Get access to all deals
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center w-2/6 ">
              <Input
                className="border-x-0 border-t-0 bg-green-800 bg-opacity-5 border-[#54A6AE] rounded-none "
                placeholder="Search Deals"
              />
              <Search size="16" className="-ml-6" />
            </div>

            <div className="flex items-center gap-2 ">
              <h2 className="text-gray-500 text-sm">Filter</h2>
              <Filter size="18" className="text-gray-400" />
            </div>
          </div>
        </div>
        {/* done */}

        <div className="grid grid-cols-3 gap-2  mx-4">
          {cardItem.map((item, index) => (
            <div className="flex flex-col gap-4 p-2 my-8 " key={index}>
              <div className="flex items-center justify-between ">
                <Image
                  className="rounded-full"
                  src={item.companyLogo}
                  alt="card"
                  width={40}
                  height={40}
                />

                <span
                  className={cn(
                    "flex items-center gap-2 bg-opacity-20 bg-[#EF841F] rounded-full p-2",
                    item.poolStatus === "open"
                      ? "bg-green-500"
                      : item.poolStatus === ""
                  )}
                >
                  <Zap className="text-[#F6921E]" size="16" />
                  <h1 className="text-sm font-medium text-[#F6921E]">
                    {item.poolStatus}
                  </h1>
                </span>
              </div>

              <div className="flex items-center justify-between mt-6">
                <div className="flex flex-col gap-5">
                  <h1 className="text-2xl font-medium text-gray-700">
                    {item.poolTtile}
                  </h1>
                  <span>
                    <p className="text-sm text-muted-foreground">
                      Amount To Raise: {item.amountToRaise}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Minimum Investment: {item.minimumInvestment}
                    </p>
                  </span>
                </div>
                <ChevronRight color="#007A86" size="30" />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span>
                  <h1 className="text-muted-foreground">Asset Type</h1>
                  <p
                    className={cn(
                      "text-sm",
                      index % 2 ? "text-green-600" : "text-[#F29D4C]"
                    )}
                  >
                    {item.assetType}
                  </p>
                </span>
                <span>
                  <h1 className="text-muted-foreground">Yield</h1>
                  <p className="text-sm">{item.yield}</p>
                </span>
                <span>
                  <h1 className="text-muted-foreground">Duration</h1>
                  <p className="text-sm">{item.duration}</p>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default page;
