import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Zap } from "lucide-react";

const getBgColorClass = (poolStatus: string) => {
  switch (poolStatus) {
    case "Open":
      return "bg-[#0F973D]";
    case "coming soon":
      return "bg-[#EF841F] max-w-[140px]";
    default:
      return "bg-[#91A0A1] max-w-[90px]";
  }
};

const getTextColorClass = (poolStatus: string) => {
  switch (poolStatus) {
    case "Open":
      return "text-[#0E8938]";
    case "coming soon":
      return "text-[#D9781C] ";
    default:
      return "text-[#76888A]";
  }
};

interface PoolCardProps {
  item: {
    poolStatus: string;
    poolTtile: string;
    assetType: string;
    yield: string;
    duration: string;
  };
  index: number;
}

const PoolCard = ({ item, index }: PoolCardProps) => {
  return (
    <div className="flex flex-col gap-6 p-6 shadow-sm  border rounded-xl hover:cursor-pointer">
      <span
        className={cn(
          "flex items-center gap-2 bg-opacity-20 max-w-[80px]  rounded-full  p-2",
          getBgColorClass(item.poolStatus)
        )}
      >
        <Zap className={cn("", getTextColorClass(item.poolStatus))} size="16" />
        <h1
          className={cn(
            "text-sm font-medium text-[#F6921E]",
            getTextColorClass(item.poolStatus)
          )}
        >
          {item.poolStatus}
        </h1>
      </span>

      <div className="flex items-center justify-between my-6">
        <h1 className="text-3xl font-medium text-[#32393A]">
          {item.poolTtile}
        </h1>

        <h1 className="text-lg text-[#546162]">
          <span className="text-gray-400">by</span> Piron Capital
        </h1>
      </div>

      <Separator />

      <div className="flex items-center justify-between">
        <span className="flex flex-col gap-1">
          <h1 className="text-[#414B4C] font-medium">$5,000,000</h1>
          <p className="text-xs text-muted-foreground">Target Raise</p>
        </span>

        <span className="flex flex-col gap-1">
          <h1 className="text-[#414B4C] font-medium">$230,945.56</h1>
          <p className="text-xs text-muted-foreground">Total Raised</p>
        </span>

        <span className="flex flex-col gap-1">
          <h1 className="text-[#414B4C] font-medium">180 days</h1>
          <p className="text-xs text-muted-foreground">Offering Term</p>
        </span>

        <span>
          <h1 className="text-muted-foreground text-sm">Estimated Yield</h1>
          <p className="text-[#0E8938] font-medium">9.12%</p>
        </span>

        <span>
          <h1 className="text-muted-foreground text-sm ">Asset Type</h1>
          <p
            className={cn(
              "font-medium",
              index % 2 ? "text-green-600" : "text-[#F29D4C]"
            )}
          >
            {item.assetType}
          </p>
        </span>

        <span>
          <h1 className="text-muted-foreground text-sm">Launch Date</h1>
          <p className="text-[#414B4C] font-medium">12-01-2024</p>
        </span>
      </div>
    </div>
  );
};

export default PoolCard;
