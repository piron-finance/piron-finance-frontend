import React from "react";
import Navbar from "../../_components/Navbar";
import Header from "./_components/Header";
import DashTable from "../../_components/dashTable";
import { portfolioData } from "./_components/dummy";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import Footer from "../../_components/Footer";

const page = () => {
  return (
    <div className="flex flex-col h-full">
      <Navbar page="portfolio" />
      <Header />

      <div className="my-8 mx-4">
        <h1 className="text-xl my-4">Asset Breakdown</h1>
        <div>
          {" "}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-left w-[324px] ">Asset</TableHead>
                <TableHead className="">Value</TableHead>
                <TableHead className="">Type</TableHead>
                <TableHead className="text-right">Profit/Loss</TableHead>
                <TableHead className="text-right">Next Payout</TableHead>
                <TableHead className="text-right">Maturity Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {portfolioData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium flex items-center gap-2">
                    <Image
                      width={24}
                      height={24}
                      className=""
                      alt="assetImage"
                      src={item.assetImg}
                    />
                    <h1> {item.assetName}</h1>
                  </TableCell>
                  <TableCell>{item.value}</TableCell>
                  <TableCell>{item.type}</TableCell>
                  <TableCell className="text-right">
                    {item.performance}
                  </TableCell>
                  <TableCell className="text-right">{item.dividend}</TableCell>
                  <TableCell className="text-right">{item.maturity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell className="text-right">$2,500.00</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
