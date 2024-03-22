import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronsDown } from "lucide-react";

interface Props {
  title: string;
}

const StatusData = [
  {
    name: "Open",
    value: "",
  },
  {
    name: "Coming Soon",
    value: "",
  },
  {
    name: "Closed",
    value: "",
  },
];

const AssetTypeData = [
  {
    name: "Fixed Income",
    value: "",
  },
  {
    name: "credit ",
    value: "",
  },
  {
    name: "asset backed",
    value: "",
  },
];

const FilterSelector = ({ title }: Props) => {
  const data = title === "status" ? StatusData : AssetTypeData;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="gap-3 rounded-full p-4">
          <span>{title}</span>
          <ChevronsDown size="16" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <div className="flex flex-col gap-1 my-4">
          {data.map((item, index) => (
            <h1
              className="px-4 py-2 text-sm text-muted-foreground rounded-lg hover:text-[#007A86] hover:bg-gray-200"
              key={index}
            >
              {item.name}
            </h1>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FilterSelector;
