import Header from "./_components/Header";
import { Input } from "@/components/ui/input";
import { ChevronRight, Filter, Search, Zap } from "lucide-react";
import { cardItem } from "./_components/dummy";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Footer from "../../_components/Footer";

const getBgColorClass = (poolStatus: string) => {
  switch (poolStatus) {
    case "Open":
      return "bg-[#0F973D]";
    case "coming soon":
      return "bg-[#EF841F]";
    default:
      return "bg-[#91A0A1]";
  }
};

const getTextColorClass = (poolStatus: string) => {
  switch (poolStatus) {
    case "Open":
      return "text-[#0E8938]";
    case "coming soon":
      return "text-[#D9781C]";
    default:
      return "text-[#76888A]";
  }
};

const page = () => {
  return (
    <div className="flex flex-col h-full">
      <Header />

      <div>
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
              <Search size="16" className="hidden md:block -ml-6" />
            </div>

            <div className="flex items-center gap-2 ">
              <h2 className="text-gray-500 text-sm">Filter</h2>
              <Filter size="18" className="text-gray-400" />
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3  gap-2  mx-4">
          {cardItem.map((item, index) => (
            <div
              className="flex flex-col gap-4 p-3 my-8 border border-[#B0D6D9] rounded-lg hover:cursor-pointer"
              key={index}
            >
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
                    "flex items-center gap-2 bg-opacity-20 rounded-full p-2",
                    getBgColorClass(item.poolStatus)
                  )}
                >
                  <Zap
                    className={cn("", getTextColorClass(item.poolStatus))}
                    size="16"
                  />
                  <h1
                    className={cn(
                      "text-sm font-medium text-[#F6921E]",
                      getTextColorClass(item.poolStatus)
                    )}
                  >
                    {item.poolStatus}
                  </h1>
                </span>
              </div>

              <div className="flex items-center justify-between mt-6">
                <div className="flex flex-col gap-5">
                  <h1 className="text-xl font-medium text-gray-700">
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
      </div>

      <Footer />
    </div>
  );
};

export default page;
