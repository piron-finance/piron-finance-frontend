import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Link from "next/link";
import StatusCard from "./StatusCard";
import { Doc, Id } from "@/convex/_generated/dataModel";

interface PoolCardProps {
  item: Doc<"pools">;
  index: number;
}

const PoolCard = ({ item, index }: PoolCardProps) => {
  return (
    <Link href={`/pools/${item._id}`}>
      <div className="flex flex-col gap-6 p-6 shadow-sm  border rounded-xl hover:cursor-pointer">
        <StatusCard poolStatus={item.poolStatus} />

        <div className="flex items-center justify-between my-6">
          <h1 className="text-3xl font-medium text-[#32393A]">
            {item.poolName}
          </h1>

          <h1 className="text-lg text-[#546162]">
            <span className="text-gray-400">by</span> {item.assetOriginatorName}
          </h1>
        </div>

        <Separator />

        <div className="flex items-center justify-between">
          <span className="flex flex-col gap-1">
            <h1 className="text-[#414B4C] font-medium">N{item.targetRaise}</h1>
            <p className="text-xs text-muted-foreground">Target Raise</p>
          </span>

          <span className="flex flex-col gap-1">
            <h1 className="text-[#414B4C] font-medium">N{item.totalRaised}</h1>
            <p className="text-xs text-muted-foreground">Total Raised</p>
          </span>

          <span className="flex flex-col gap-1">
            <h1 className="text-[#414B4C] font-medium">{item.duration} days</h1>
            <p className="text-xs text-muted-foreground">Offering Term</p>
          </span>

          <span>
            <h1 className="text-muted-foreground text-sm">Estimated Yield</h1>
            <p className="text-[#0E8938] font-medium">{item.yield}%</p>
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
            <p className="text-[#414B4C] font-medium">{item.launchDate}</p>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default PoolCard;
