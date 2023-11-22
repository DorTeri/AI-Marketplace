'use server'

import prisma from "@/lib/prismaDb"

export async function getPromptById(promptId: string) {
    try {
        const prompt = await prisma.prompts.findUnique({
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

        return prompt
    } catch (error) {
        console.log('get All prompts error', error)
    }
}