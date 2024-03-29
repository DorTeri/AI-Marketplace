import {prisma} from "@/lib/prismaDb";
import { clerkClient } from "@clerk/nextjs";

export const getShopOrders = async ({ sellerId }: { sellerId: string }) => {
    try {
        const orders: any = await prisma.orders.findMany({
            where: {
                prompt: {
                    sellerId,
                }
            },
            include: {
                prompt: true,
            }
        })

        for (const order of orders) {
            const userId = order?.userId
            if (userId) {
                const user = await clerkClient.users.getUser(userId)
                order.user = user
            }
        }

        return JSON.parse(JSON.stringify(orders))
    } catch (error) {
        console.log('getShopOrders error', error)
    }
}