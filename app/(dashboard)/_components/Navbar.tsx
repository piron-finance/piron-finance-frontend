"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MoveLeft } from "lucide-react";
import StatusCard from "../(routes)/pools/_components/StatusCard";
import { useRouter } from "next/navigation";

interface Props {
  page: string;
  status?: any;
  dynamic?: boolean;
}

const Navbar = ({ page, status, dynamic }: Props) => {
  const router = useRouter();
  return (
    <div className="mb-3 bg-white shadow-sm ">
      <div className="flex items-center justify-between mx-8 my-5">
        {!dynamic ? (
          <div>
            <h1 className="text-2xl ">{page}</h1>
          </div>
        ) : (
          <div className="flex gap-4 items-center">
            <MoveLeft
              className=" hover:cursor-pointer"
              onClick={() => router.back()}
              size="24"
            />
            <h1 className="text-xl font-medium text-[#32393A]">{page}</h1>
            <StatusCard poolStatus={status} />
          </div>
        )}
        <div className="flex gap-2 items-center">
          <Button className="rounded-full bg-[#007A86]" size="lg">
            Connect Wallet
          </Button>

          <Button className="rounded-full bg-[#007A86]" size="lg">
            Add a Pool
          </Button>
        </div>
      </div>
      <Separator />
    </div>
  );
};

export default Navbar;
