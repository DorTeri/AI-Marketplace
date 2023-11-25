import {prisma} from "@/lib/prismaDb";
import { currentUser } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";

export const getUserOrders = async () => {
    try {
        const user: User | null = await currentUser()

        const orders = await prisma.orders.findMany({
            where: {
                userId: user?.id
            },
            include: {
                prompt: {
                    include: {
                        promptUrl: true,
                        reviews: true,
                    }
                }
            }
        })

        return orders
    } catch (error) {
        console.log('get user orders error', error)
    }
}