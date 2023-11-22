import { getUserOrders } from "@/actions/orders/getUserOrders"
import UserAllOrders from "./_page"

const Page = async () => {
    const data = await getUserOrders()
    return (
        <div>
            <UserAllOrders 
            data={data}
            />
        </div>
    )
}

export default Page