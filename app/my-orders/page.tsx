import { getUserOrders } from "@/actions/orders/getUserOrders"

const Page = async () => {
    const data = await getUserOrders()
    return (
        <div>

        </div>
    )
}

export default Page