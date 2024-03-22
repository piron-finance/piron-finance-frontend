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

interface Props {
  poolStatus: string;
}

const StatusCard = ({ poolStatus }: Props) => {
  return (
    <span
      className={cn(
        "flex items-center gap-2 bg-opacity-20 max-w-[80px]  rounded-full  p-2",
        getBgColorClass(poolStatus)
      )}
    >
      <Zap className={cn("", getTextColorClass(poolStatus))} size="16" />
      <h1
        className={cn(
          "text-sm font-medium text-[#F6921E]",
          getTextColorClass(poolStatus)
        )}
      >
        {poolStatus}
      </h1>
    </span>
  );
};

export default StatusCard;
