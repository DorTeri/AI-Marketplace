"use server"
import prisma from "@/lib/prismaDb";

interface Props {
    rating: number;
    comment: string;
    promptId: string;
    userId: string;
}

export const newReview = async ({ rating, comment, promptId, userId }: Props) => {
    try {
        const review = prisma.reviews.create({
            data: {
                rating,
                comment,
                promptId,
                userId
            }
        })
        return review
    } catch (error) {
        console.log('newReview error', error)
    }
}