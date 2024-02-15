import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col gap-6  mx-4">
      <h1 className="text-2xl font-light">Overview</h1>

      <div
        style={{
          backgroundImage: `url("/bg-dasj.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "280px",
        }}
        className=" bg-[#D8FCFF] rounded-lg  gap-10"
      >
        <div className="flex flex-col gap-4 md:gap-0 md:flex-row justify-between  bg-opacity-60 p-20 items-center rounded-lg bg-[#D8FCFF] w-full h-full">
          <div className="flex flex-col items-center">
            <h1 className="text-[#1E1E1E] text-xl  md:text-3xl  font-medium">
              $20,000,000
            </h1>
            <p className="text-muted-foreground text-xs md:text-sm">
              Total Amount Raised
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h1 className="text-[#1E1E1E] text-xl md:text-3xl  font-medium">
              $500,000
            </h1>
            <p className="text-muted-foreground text-xs md:text-sm">
              Total Dividend Payed Out
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h1 className="text-[#1E1E1E] text-xl md:text-3xl  font-medium">
              450
            </h1>
            <p className="text-muted-foreground text-xs md:text-sm">
              Total Deals
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
