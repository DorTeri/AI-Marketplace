'use server'

import {prisma} from "@/lib/prismaDb"

export async function getAllPrompts(pageNumber = 1, pageSize = 8) {
    try {
        const prompts:any = await prisma.prompts.findMany({
            include: {
                orders: true,
                images: true,
                reviews: true,
                promptUrl: true,
            },
            where: {
                status: "Live"
            },
            take: pageSize,
            skip: (pageNumber - 1) * pageSize,
            orderBy: {
                createdAt: 'desc'
            }
        })

        if (prompts) {
            for (const prompt of prompts) {
                const shop = await prisma.shops.findUnique({
                    where: {
                        userId: prompt.sellerId,
                    }
                })
                prompt.shop = shop
            }
        }

        const totalPrompts = await prisma.prompts.findMany({
            where: {
                status: "Live"
            }
        })

        return { prompts, totalPrompts }
    } catch (error) {
        console.log('get All prompts error', error)
    }
}