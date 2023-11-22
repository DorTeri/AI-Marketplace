'use server'
import prisma from "@/lib/prismaDb";

interface Props {
    userId: string,
    promptId: string,
    payment_method: string,
    payment_id: string
}

export const newOrder = async ({ userId, promptId, payment_method, payment_id }: Props) => {
    try {
        const newOrderData = {
            userId,
            promptId,
            payment_id,
            payment_method: "visa",
            promptName: "a",
        }
        const order = await prisma.orders.create({
            data: newOrderData,
        })
        return order
    } catch (error) {
        console.log('new order error', error)
    }
}