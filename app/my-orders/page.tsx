import { getUserOrders } from "@/actions/orders/getUserOrders"
import UserAllOrders from "./_page"
import { getUser } from "@/actions/user/getUser"

const Page = async () => {
    const data = await getUserOrders()
    const userData = await getUser()
    return (
        <div>
            <UserAllOrders
                data={data}
                user={userData.user}
                isSellerExist={userData?.shop ? true : false}
            />
        </div>
    )
}

export default Page