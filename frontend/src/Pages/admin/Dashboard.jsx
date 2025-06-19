import { dashboardListService } from "@/api";
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
import { CircleCheckBig, X } from "lucide-react";
import { useEffect, useState } from "react";

const Dashboard = () => {
  



const [dataList, setdataList] = useState([]);

 const totalRevenue = dataList.reduce((accumulator, currentOrder) => {
  return accumulator + currentOrder.totalAmount;
}, 0);

  const handleListItem =async ()=>{
    const {data} = await dashboardListService();

    setdataList(data)
  }

  useEffect(()=>{
    handleListItem()
  },[])

  return (
    <div className="flex">
        <div className="border-r border-2 h-[100vh] shadow-xl w-2/3">
        <h1 className="mx-4 my-10 font-bold text-3xl">Dashboard</h1>

        <div className="px-4">
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">InvoiceId</TableHead>
                <TableHead>PaymentStatus</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dataList && dataList.length && dataList.map((invoice) => (
                <TableRow key={invoice._id}>
                  <TableCell className="font-medium">
                    {invoice?._id.slice(0,7)}
                  </TableCell>
                  <TableCell>{invoice?.paymentStatus? <X className="text-red-500"/>: <CircleCheckBig className="text-green-500"/>}</TableCell>
                  <TableCell>{invoice?.customerPhone}</TableCell>
                  <TableCell className="text-right">
                    {invoice.totalAmount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell className="text-right">{totalRevenue}</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </div>
      <div className="h-full py-14 px-5 w-1/3">
       
      </div>
      
    </div>
  );
};

export default Dashboard;


