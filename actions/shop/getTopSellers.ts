"use server";
import {prisma} from "@/lib/prismaDb";

export const getTopSellers = async () => {
  try {
    const sellers = await prisma.shops.findMany({
      orderBy: {
        allProducts: 'desc',
      },
    });

    return sellers;
  } catch (error) {
    console.log(error);
  }
};