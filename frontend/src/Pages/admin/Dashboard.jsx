import { dashboardListService, getCustomerByIdAdminService } from "@/api";
import OrderCard from "@/components/Layout/AdminOrderCard";
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
import { customer, sidebarItems } from "@/config";
import { CircleCheckBig, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const Dashboard = () => {
  const [dataList, setdataList] = useState([]);
  const [getCurrentCustomerDetails, setGetCurrentCustomerDetails] =
    useState(null);

  const totalRevenue = dataList.reduce((accumulator, currentOrder) => {
    return accumulator + currentOrder.totalAmount;
  }, 0);

  const handleListItem = async () => {
    const { data } = await dashboardListService();

    setdataList(data);
  };

  useEffect(() => {
    handleListItem();
  }, []);

  const handleClickById = async (id) => {
    const { data } = await getCustomerByIdAdminService(id);
    setGetCurrentCustomerDetails(data);
  };

  return (
    <div className="flex">
      {/* <div className="h-[100vh] w-[20vw] border-r">
        <h1
          className="font-bold text-rose-500 text-3xl text-center mt-4"
          style={{ fontFamily: "'Caveat', cursive" }}
        >
          the Masala Story
        </h1>

        <div className="mt-14">
          {sidebarItems?.map((item, index) => (
            <Link key={index} className="flex items-center px-2 gap-2 py-5 border-b hover:bg-rose-100 duration-200 font-medium text-gray-700" to={item?.path}>
              <item.icon></item.icon>
              {item?.label}
            </Link>
          ))}
        </div>
      </div> */}
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
                <TableHead>Email</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="">
              {dataList.length > 0 ? (
                dataList.map((invoice) => (
                  <TableRow
                    key={invoice._id}
                    onClick={() => handleClickById(invoice._id)}
                  >
                    <TableCell className="font-medium">
                      {invoice?._id.slice(0, 7)}
                    </TableCell>
                    <TableCell>
                      {invoice?.paymentStatus ? (
                        <X className="text-red-500" />
                      ) : (
                        <CircleCheckBig className="text-green-500" />
                      )}
                    </TableCell>
                    <TableCell>{invoice?.customerPhone}</TableCell>
                    <TableCell>{invoice?.customerEmail}</TableCell>
                    <TableCell className="text-right">
                      {invoice.totalAmount}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={4}
                    className="text-center py-6 text-muted-foreground"
                  >
                    No invoices found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={4}>Total</TableCell>
                <TableCell className="text-right">{totalRevenue}</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </div>
      <div className="h-full py-14 px-5 w-1/3">
        <OrderCard customer={getCurrentCustomerDetails} />
      </div>
    </div>
  );
};

export default Dashboard;
