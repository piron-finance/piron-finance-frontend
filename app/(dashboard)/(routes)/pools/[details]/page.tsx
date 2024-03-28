"use client";
import Navbar from "@/app/(dashboard)/_components/Navbar";
import Header from "./_components/header";
import { Button } from "@/components/ui/button";
import TeamCard from "./_components/TeamCard";
import Offchain from "./_components/Offchain";
import Footer from "@/app/(dashboard)/_components/Footer";
import InvestModal from "./_components/InvestModal";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useParams } from "next/navigation";
import { Id } from "@/convex/_generated/dataModel";

// todo: disable invest button till wallet is connected. figure pool title and launch date

const PoolDetailsPage = () => {
  const params = useParams();
  const pool = useQuery(api.pools.getPoolsById, {
    poolId: params.details as Id<"pools">,
  });

  const assetOriginator = useQuery(api.pools.getAssetOriginatorByPoolId, {
    poolId: params.details as Id<"pools">,
  });

  if (pool === undefined) {
    return <div>Loading...</div>;
  }

  if (pool === null) {
    return <div>Not found</div>;
  }

  // todo: ensure only the asset originator section loads when the pool details are available

  if (assetOriginator === undefined) {
    return <div>Loading...</div>;
  }

  if (assetOriginator === null) {
    return <div>Not found</div>;
  }

  return (
    <div className="flex flex-col h-full ">
      <Navbar status={pool.poolStatus} page={pool.poolName} dynamic />
      <Header />

      <div className="flex  ">
        <div className="mx-2 p-8 my-4 bg-white rounded-xl shadow-sm w-3/4 ">
          <h1 className="text-lg text-muted-foreground font-medium mb-8">
            Details
          </h1>
          <div className="flex flex-col gap-4">
            {pool.details.map((item: any, index) => (
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
              Outstanding Principal{" "}
              <span className="ml-1 text-gray-700 font-semibold">
                {" "}
                {pool.outstandingPrincipal} USDC{" "}
              </span>
            </p>
            <p className="text-muted-foreground text-sm">
              Outstanding Interest{" "}
              <span className="ml-1 text-gray-700 font-semibold">
                {pool.outstandingInterest} USDC{" "}
              </span>
            </p>
            <p className="text-muted-foreground text-sm">
              Total Repayment{" "}
              <span className="ml-1 text-gray-700 font-semibold">
                {pool.totalRepayment} USDC{" "}
              </span>{" "}
            </p>
            <p className="text-muted-foreground text-sm">
              Health Status{" "}
              <span className="ml-1 text-gray-700 font-semibold">
                {pool.health}
              </span>{" "}
            </p>
          </div>

          <div className="flex flex-col gap-3 bg-white rounded-xl shadow-sm p-8">
            <h1 className="text-[#546162] font-medium">Timelines</h1>
            <p className="text-muted-foreground text-sm">
              Launch Date{" "}
              <span className="ml-1 text-gray-700 font-semibold">
                {pool.launchDate}
              </span>
            </p>
            <p className="text-muted-foreground text-sm">
              Close Date{" "}
              <span className="ml-1 text-gray-700 font-semibold">
                {pool.closeDate}
              </span>
            </p>
            <p className="text-muted-foreground text-sm">
              Maturity Date{" "}
              <span className="ml-1 text-gray-700 font-semibold">
                {pool.maturityDate}
              </span>
            </p>
            <p className="text-muted-foreground text-sm">
              Offering Term{" "}
              <span className="ml-1 text-gray-700 font-semibold">
                {pool.duration} days
              </span>
            </p>
          </div>

          <div className="flex flex-col gap-3 bg-white rounded-xl shadow-sm p-8">
            <h1 className="text-[#546162] font-medium">
              Requirements for Investors
            </h1>
            {pool.requirements.map((item: any, index) => (
              <p key={index} className="text-muted-foreground text-sm">
                {item}
              </p>
            ))}
          </div>

          <div className="flex flex-col gap-3 bg-white rounded-xl shadow-sm p-8">
            <h1 className="text-[#546162] font-medium">Fees</h1>
            <p className="text-muted-foreground text-sm">
              Protocol Fee{" "}
              <span className="ml-1 text-gray-700 font-semibold">
                {pool.fees.map((item) => item.protocol)}%
              </span>
            </p>
            <p className="text-muted-foreground text-sm">
              Management Fee{" "}
              <span className="ml-1 text-gray-700 font-semibold">
                {pool.fees.map((item) => item.management)}%
              </span>
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
                {assetOriginator.description}
              </p>
            </div>

            <div className="flex flex-col gap-3 ">
              <h1 className="text-xl font-medium text-[#546162]">Numbers</h1>
              <div className="flex items-center gap-12">
                <div className="flex flex-col gap-2">
                  <h1 className="text-sm text-muted-foreground">
                    Total raised{" "}
                    <span className="font-semibold text-gray-600">
                      {assetOriginator.totalRaised}
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
                    <span className="font-semibold text-gray-600">
                      {assetOriginator.dealsLaunched}
                    </span>
                  </h1>
                  <h1 className="text-sm text-muted-foreground">
                    Health Status{" "}
                    <span className="font-semibold text-gray-600">
                      {assetOriginator.health}
                    </span>
                  </h1>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-medium text-[#546162]">Contact</h1>
              {assetOriginator.contact.map((item, index) => (
                <div key={index} className="text-muted-foreground text-sm">
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 w-1/2">
            <h1 className="text-[#546162] text-2xl font-semibold ">Team</h1>
            <p className="text-muted-foreground text-sm">
              {assetOriginator.teamDesc}
            </p>
            <div className="grid grid-cols-3 gap-3 max-w-lg">
              {assetOriginator.team.map((item, index) => (
                <TeamCard
                  key={index}
                  img={item.image}
                  role={item.title}
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

export default PoolDetailsPage;
