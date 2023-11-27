import ShopSidebar from "@/components/Shop/ShopSidebar"
import ShopAllOrders from "@/components/Shop/ShopAllOrders"
import { getUser } from "@/actions/user/getUser"
import { getShopOrders } from "@/actions/orders/getShopOrders"

const Page = async () => {
    const sellerId = await getUser()

    const ordersData = await getShopOrders({ sellerId: sellerId?.user.id! })

    return (
        <div className="flex w-full">
            <div className="h-screen sticky top-0 left-0 z-20 flex p-2 bg-[#111C42] md:w-[32%] 2xl:w-[17%]">
                <ShopSidebar active={3} />
            </div>
            <div className="md:w-[68%] 2xl:w-[83%] p-5">
                <ShopAllOrders isDashboard={false} ordersData={ordersData} />
            </div>
        </div>
    )
}

export default Page