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

interface Props {
  assetImg: string;
  assetName: string;
  value: string;
  type: string;
  performance: string;
  dividend: string;
  maturity: string;
}

const DashTable = ({
  assetImg,
  assetName,
  value,
  type,
  performance,
  dividend,
  maturity,
}: Props) => {
  return (
    <div>
      {" "}
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Asset</TableHead>
            <TableHead>Value</TableHead>
            <TableHead>Type</TableHead>
            <TableHead className="text-right">Profit/Loss</TableHead>
            <TableHead className="text-right">Next Payout</TableHead>
            <TableHead className="text-right">Maturity Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* // <TableRow key={index}>
            //   <TableCell className="font-medium">{item.assetName}</TableCell>
            //   <TableCell>{invoice.paymentStatus}</TableCell>
            //   <TableCell>{invoice.paymentMethod}</TableCell>
            //   <TableCell className="text-right">
            //     {invoice.totalAmount}
            //   </TableCell>
            // </TableRow>
            */}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default DashTable;
