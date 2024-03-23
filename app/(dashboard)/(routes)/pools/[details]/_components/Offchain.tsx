import { MoveUpRight } from "lucide-react";
import Link from "next/link";

const OffchainData = [
  {
    key: "1",
    title: "Seal of agreement.pdf",
    link: "",
  },
  {
    key: "2",
    title: "Seal of agreement.pdf",
    link: "",
  },
  {
    key: "3",
    title: "Seal of agreement.pdf",
    link: "",
  },
];
const Offchain = () => {
  return (
    <div>
      <h1 className="text-lg text-muted-foreground font-medium mb-8">
        Offchain Documents
      </h1>
      <div className="flex gap-4">
        {OffchainData.map((item, index) => (
          <Link href={item.link} key={index}>
            <h1 className="flex items-center text-[#546162] gap-2 text-sm underline my-3">
              {item.title}
              <MoveUpRight size="16" />
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Offchain;
