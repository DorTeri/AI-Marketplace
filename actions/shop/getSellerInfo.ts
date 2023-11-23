import prisma from "@/lib/prismaDb";
import { User, currentUser } from "@clerk/nextjs/server";

export const getSellerInfo = async () => {
  try {
    const user: User | null = await currentUser();

    if (!user) {
      return;
    }

    const shopWithBank = await prisma.shops.findUnique({
      where: {
        userId: user.id,
      },
      include: {
        bank: true,
      },
    });

    const orders = await prisma.orders.findMany({
      where: {
        prompt: {
          sellerId: shopWithBank?.userId,
        },
      },
      include: {
        prompt: {
          include: {
            images: true,
            reviews: true,
            promptUrl: true,
            orders: true,
          },
        },
      },
    });

    return { shop: shopWithBank, orders };
  } catch (error) {
    console.log(error);
  }
};
