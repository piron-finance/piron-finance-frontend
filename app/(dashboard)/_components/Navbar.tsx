import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface Props {
  page: string;
}

const Navbar = ({ page }: Props) => {
  return (
    <div className="mb-3 bg-white shadow-sm">
      <div className="flex items-center justify-between mx-8 my-5">
        <div>
          <h1 className="text-2xl ">{page}</h1>
        </div>
        <div>
          <Button className="rounded-full bg-[#007A86]" size="lg">
            Connect Wallet
          </Button>
        </div>
      </div>
      <Separator />
    </div>
  );
};

export default Navbar;
