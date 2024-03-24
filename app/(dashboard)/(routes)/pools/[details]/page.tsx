import Navbar from "@/app/(dashboard)/_components/Navbar";
import Header from "./_components/header";
import { TeamData, detailsData } from "./_components/dummy";
import { Button } from "@/components/ui/button";
import TeamCard from "./_components/TeamCard";
import Offchain from "./_components/Offchain";
import Footer from "@/app/(dashboard)/_components/Footer";
import { useState } from "react";
import InvestModal from "./_components/InvestModal";

// todo: disable invest button till wallet is connected

const page = () => {
  return (
    <div className="flex flex-col h-full ">
      <Navbar status="Open" page="Piron Credit Deal 1" dynamic />
      <Header />

      <div className="flex  ">
        <div className="mx-2 p-8 my-4 bg-white rounded-xl shadow-sm w-3/4 ">
          <h1 className="text-lg text-muted-foreground font-medium mb-8">
            Details
          </h1>
          <div className="flex flex-col gap-4">
            {detailsData.map((item, index) => (
              <div className="" key={index}>
                <h1 className="text-2xl text-[#546162] font-semibold my-3">
                  {item.title}
                </h1>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col mx-2 my-4 gap-4  w-1/4 ">
          <div className="flex flex-col gap-3 bg-white rounded-xl shadow-sm p-8">
            <h1 className="text-[#546162] font-medium">Your Statistics</h1>
            <h2 className="text-muted-foreground text-sm">
              Balance <span className=""> 0.00 USDC </span>
            </h2>
            <h2 className="text-muted-foreground text-sm">
              Interest Earned <span className=""> 0.00 USDC </span>
            </h2>
            <InvestModal>
              <Button size="lg" className="rounded-full bg-[#007A86]">
                Login to Invest
              </Button>
            </InvestModal>
          </div>

          <div className="flex flex-col gap-3 bg-white rounded-xl shadow-sm p-8">
            <h1 className="text-[#546162] font-medium">Deal Health</h1>
            <p className="text-muted-foreground text-sm">
              Outstanding Principal N/A
            </p>
            <p className="text-muted-foreground text-sm">
              Outstanding Interest N/A
            </p>
            <p className="text-muted-foreground text-sm">Total Repayment N/A</p>
            <p className="text-muted-foreground text-sm">Health Status Good</p>
          </div>

          <div className="flex flex-col gap-3 bg-white rounded-xl shadow-sm p-8">
            <h1 className="text-[#546162] font-medium">Timelines</h1>
            <p className="text-muted-foreground text-sm">
              Launch Date{" "}
              <span className="ml-1 text-gray-700 font-semibold">
                23rd February 2024
              </span>
            </p>
            <p className="text-muted-foreground text-sm">
              Close Date{" "}
              <span className="ml-1 text-gray-700 font-semibold">
                23rd March 2024
              </span>
            </p>
            <p className="text-muted-foreground text-sm">
              Maturity Date{" "}
              <span className="ml-1 text-gray-700 font-semibold">
                23rd Dec 2024
              </span>
            </p>
            <p className="text-muted-foreground text-sm">
              Offering Term{" "}
              <span className="ml-1 text-gray-700 font-semibold">180 days</span>
            </p>
          </div>

          <div className="flex flex-col gap-3 bg-white rounded-xl shadow-sm p-8">
            <h1 className="text-[#546162] font-medium">
              Requirements for Investors
            </h1>
            <p className="text-muted-foreground text-sm">
              Verified Identity (KYC)
            </p>
            <p className="text-muted-foreground text-sm">
              Non-US Investors only
            </p>
            <p className="text-muted-foreground text-sm">
              $100 minimum Investment
            </p>
          </div>

          <div className="flex flex-col gap-3 bg-white rounded-xl shadow-sm p-8">
            <h1 className="text-[#546162] font-medium">Fees</h1>
            <p className="text-muted-foreground text-sm">
              Protocol Fee{" "}
              <span className="ml-1 text-gray-700 font-semibold">0%</span>
            </p>
            <p className="text-muted-foreground text-sm">
              Management Fee{" "}
              <span className="ml-1 text-gray-700 font-semibold">3%</span>
            </p>
          </div>

          <div className="flex flex-col gap-3 bg-white rounded-xl shadow-sm p-8">
            <h1 className="text-[#546162] font-medium">Funding Strategy</h1>
            <p className="text-muted-foreground text-sm">Immediate Funding</p>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-sm mx-2 rounded-xl p-8">
        <h1 className="text-lg text-muted-foreground font-medium mb-8">
          Asset Originator
        </h1>
        <div className="flex ">
          <div className="flex flex-col gap-4 w-1/2">
            <div className="flex flex-col gap-3 ">
              <h1 className="text-[#546162] text-2xl font-semibold ">
                Description
              </h1>
              <p className="text-muted-foreground text-sm">
                Adapt3r Digital LLC (“Adapt3r Digital”) is a U.S.-based fund
                manager specializing in short-term U.S. Treasury Bills. Our team
                combines multifaceted expertise in the asset management
                industry, spanning private credit, securitization, and digital
                assets.
              </p>
            </div>

            <div className="flex flex-col gap-3 ">
              <h1 className="text-xl font-medium text-[#546162]">Numbers</h1>
              <div className="flex items-center gap-12">
                <div className="flex flex-col gap-2">
                  <h1 className="text-sm text-muted-foreground">
                    Total raised{" "}
                    <span className="font-semibold text-gray-600">
                      $17,100,000
                    </span>
                  </h1>
                  <h1 className="text-sm text-muted-foreground">
                    View on-chain reputation{" "}
                    <span className="font-semibold text-gray-600">
                      0xdc01...5d476a
                    </span>
                  </h1>
                </div>
                <div>
                  <h1 className="text-sm text-muted-foreground">
                    Deals Launched{" "}
                    <span className="font-semibold text-gray-600">2</span>
                  </h1>
                  <h1 className="text-sm text-muted-foreground">
                    Health Status{" "}
                    <span className="font-semibold text-gray-600">good</span>
                  </h1>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-medium text-[#546162]">Contact</h1>
              <div className="text-muted-foreground text-sm">
                <p>Email: ir@adapt3r.com</p>
                <p>Website: adapt3r.com</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-1/2">
            <h1 className="text-[#546162] text-2xl font-semibold ">Team</h1>
            <p className="text-muted-foreground text-sm">
              Our team combines multifaceted expertise in the asset management
              industry, spanning private credit, securitization, and digital
              assets.
            </p>
            <div className="grid grid-cols-3 gap-3 max-w-lg">
              {TeamData.map((item, index) => (
                <TeamCard
                  key={index}
                  img={item.img}
                  role={item.role}
                  name={item.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-sm mx-2 rounded-xl p-8 my-4">
        <Offchain />
      </div>

      <Footer />
    </div>
  );
};

export default page;
