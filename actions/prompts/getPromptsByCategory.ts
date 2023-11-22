'use server'

import prisma from "@/lib/prismaDb"

export async function getPromptsByCategory(promptCategory: string) {
    try {
        const prompt = await prisma.prompts.findMany({
            include: {
                orders: true,
                images: true,
                reviews: true,
                promptUrl: true,
            },
            where: {
                category: promptCategory
            },
        })

        return prompt
    } catch (error) {
        console.log('get All prompts error', error)
    }
}