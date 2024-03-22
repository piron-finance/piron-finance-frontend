import Navbar from "@/app/(dashboard)/_components/Navbar";
import React from "react";
import Header from "./_components/header";

const page = () => {
  return (
    <div className="flex flex-col h-full ">
      <Navbar status="Open" page="Piron Credit Deal 1" dynamic />
      <Header />
    </div>
  );
};

export default page;
