import { NextRequest, NextResponse } from "next/server";
import {prisma} from "@/lib/prismaDb";

export async function GET(req: NextRequest) {
  try {
    const sellers = await prisma.shops.findMany({
      take: 4,
      orderBy: {
        allProducts: "desc",
      },
    });

    return NextResponse.json(sellers);
  } catch (error) {
    console.log("GET error", error);
  }
}