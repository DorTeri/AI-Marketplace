'use server'

import {prisma} from "@/lib/prismaDb"

export async function getPromptById(promptId: any) {
    try {
        const prompt:any = await prisma.prompts.findUnique({
            include: {
                orders: true,
                images: true,
                reviews: true,
                promptUrl: true,
            },
            where: {
                id: promptId
            },
        })

        if (prompt) {
            const shop = await prisma.shops.findUnique({
                where: {
                    userId: prompt.sellerId
                }
            })
            prompt.shop = shop
        }

        return prompt
    } catch (error) {
        console.log('get All prompts error', error)
    }
}