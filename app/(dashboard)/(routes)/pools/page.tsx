"use client";
import Header from "./_components/Header";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

import Footer from "../../_components/Footer";
import Navbar from "../../_components/Navbar";
import FilterSelector from "./_components/FilterSelector";
import { Switch } from "@/components/ui/switch";
import PoolCard from "./_components/PoolCard";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

const page = () => {
  const pools = useQuery(api.pools.getPools);

  if (pools === undefined) {
    return <div>Loading...</div>;
  }

  if (pools === null) {
    return <div>Not found</div>;
  }

  return (
    <div className="flex flex-col h-full ">
      <Navbar page="Deals" />
      <Header />

      <div className="rounded-xl bg-white shadow-md mx-2 mt-4 ">
        <div className="flex flex-col mx-4 my-4">
          <div className="flex flex-col my-4 ml-8">
            <h1 className="text-lg font-medium">All Deals</h1>
            <p className="text-sm text-muted-foreground">
              Get access to all deals across different asset classes
            </p>
          </div>

          <div className="flex items-center justify-between mx-6">
            <div className="flex gap-8 w-4/6">
              <div className="flex items-center w-full ">
                <Input
                  className=" border-slate-300 rounded-full  w-full"
                  placeholder="search here..."
                />
                <Search
                  size="16"
                  className="hidden text-slate-500 md:block -ml-6"
                />
              </div>

              <div>
                <FilterSelector title="Status" />
              </div>

              <div>
                <FilterSelector title="Asset Type" />
              </div>
            </div>

            <div className="flex items-center  gap-2 ">
              <h1 className="text-gray-500 text-sm">My deals</h1>
              <Switch />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10 my-8  mx-9 ">
          {pools.map((item, index) => (
            <PoolCard item={item} index={index} key={index} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
