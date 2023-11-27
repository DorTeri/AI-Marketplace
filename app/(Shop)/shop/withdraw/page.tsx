import ShopSidebar from "@/components/Shop/ShopSidebar";
import WithDrawEarning from "./_page";
import { getSellerInfo } from "@/actions/shop/getSellerInfo";
import { sellerInvoices } from "@/actions/withdraws/sellerInvoices";

const Page = async () => {
  const data = await getSellerInfo();
  const invoices = await sellerInvoices({ sellerId: data?.shop?.id! });

  return (
    <div className="flex w-full">
      <div className="h-screen sticky top-0 left-0 z-20 flex p-2 bg-[#111C42] md:w-[32%] 2xl:w-[17%]">
        <ShopSidebar active={5} />
      </div>
      <div className="md:w-[68%] 2xl:w-[83%] p-5">
        <WithDrawEarning
          shop={data?.shop}
          orders={data?.orders}
          invoices={invoices}
        />
      </div>
    </div>
  );
};

export default Page;