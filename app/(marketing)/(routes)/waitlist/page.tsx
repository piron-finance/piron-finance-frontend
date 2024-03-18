"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { data } from "./_components/dummy";
import Footer from "../../_components/Footer";
import WaitlistModal from "./_components/WaitlistModal";
import { Undo2 } from "lucide-react";
import SuccessPage from "./_components/SuccessPage";

const WaitlistPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleWaitlistModal = () => {
    setIsOpen(true);
  };
  return (
    <div className="flex flex-col h-screen ">
      {!subscribed ? (
        <>
          <div
            style={{
              backgroundImage: `url("/waitlistbg.svg")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "500px",
            }}
            className=" flex flex-col md:flex-row  items-center px-8  py-8 justify-around "
          >
            <div className="mt-3 md:mt-0">
              <Image
                src="/waitlistHeader.svg"
                className="w-[222px] h-[225px] md:w-[380px] md:h-[380px] "
                alt="logo"
                width={380}
                height={380}
              />
            </div>
            <div className="flex flex-col gap-3 max-w-xl">
              <h1 className=" text-2xl md:text-4xl text-[#EF841F]">Access</h1>
              <h1 className=" text-3xl md:text-5xl font-semibold text-gray-700 ">
                Real-World Opportunities{" "}
                <span className="text-[#007A86]"> On-Chain </span>{" "}
              </h1>
              <p className="max-w-sm text-muted-foreground">
                We unlock a world of possibilities for both investors and asset
                originators.
              </p>
              <div className="my-4">
                <Button
                  onClick={handleWaitlistModal}
                  size="lg"
                  className="bg-[#007A86] rounded-full"
                >
                  Join the Waitlist
                </Button>
                {isOpen && (
                  <WaitlistModal
                    setSubscribed={setSubscribed}
                    setIsOpen={setIsOpen}
                  />
                )}
              </div>
            </div>
          </div>

          <div className=" flex flex-col items-center bg-[#E6F2F3] px-4 md:px-0">
            <div className="flex flex-col md:items-center gap-4 my-12">
              <h1 className="text-2xl  md:text-4xl text-[#76888A] max-w-xl font-semibold">
                Whether you are an{" "}
                <span className="text-[#007A86]"> Investor </span> or{" "}
                <span className="text-[#EF841F]"> Business </span> Looking For
                Capital
              </h1>
              <p className="text-muted-foreground md:text-lg">
                Piron is being built for you
              </p>
            </div>

            <div className=" grid grid-cols-3 md:grid-cols-6 items-center px-4 md:px-0 gap-12 pb-12 ">
              {data.map((item, index) => (
                <div className="flex flex-col gap-3" key={index}>
                  <div>
                    <Image
                      src={item.icon}
                      width={24}
                      height={24}
                      className="w-[18px] h-[18px] md:w-[24px] md:h-[24px]"
                      alt="header"
                    />
                  </div>
                  <div>
                    <h2 className="text-muted-foreground text-xs md:text-sm font-semibold max-w-36 ">
                      {item.title}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center  justify-center my-16 px-4 md:px-0 ">
            <div className="flex flex-col gap-8">
              <h1 className="text-xl md:text-3xl max-w-xs font-semibbold text-[#76888A]">
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
        </>
      ) : (
        <SuccessPage />
      )}

      <Footer />
    </div>
  );
};

export default WaitlistPage;
