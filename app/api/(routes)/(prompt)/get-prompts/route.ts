import { prisma, waitForConnection } from "@/lib/prismaDb";
import { NextRequest, NextResponse } from "next/server";
import { parse } from "url";


export async function GET(req: NextRequest) {

  try {
    await waitForConnection();
    const { query } = parse(req.url, true);
    const pageNumber = query.page ? parseInt(query.page.toString(), 10) : 1;

    const pageSize = 8;

    console.log('pageSize', pageSize)
    console.log('prisma', prisma)

    const prompts: any = await prisma.prompts.findMany({
      include: {
        orders: true,
        images: true,
        reviews: true,
        promptUrl: true,
      },
      where: {
        status: "Live",
      },
      take: pageSize,
      skip: (pageNumber - 1) * pageSize,
      orderBy: {
        createdAt: "desc",
      },
    });

    const totalPrompts: any = await prisma.prompts.findMany({
      where: {
        status: "Live",
      },
      include: {
        images: true,
      },
    });

    if (prompts) {
      for (const prompt of prompts) {
        const shop = await prisma.shops.findUnique({
          where: {
            userId: prompt.sellerId,
          },
        });
        prompt.shop = shop;
      }

      for (const prompt of totalPrompts) {
        const shop = await prisma.shops.findUnique({
          where: {
            userId: prompt.sellerId,
          },
        });
        prompt.shop = shop;
      }
    }

    console.log('prompts', prompts)
    console.log('totalPrompts', totalPrompts)

    return NextResponse.json({ prompts, totalPrompts });
  } catch (error) {
    console.error("Error in GET request:", error);

    // Check if the response is HTML
    if (error instanceof Response && error.headers.get("content-type")?.includes("text/html")) {
      return new NextResponse("Internal Error", { status: 500 });
    }

    return new NextResponse("Error processing request", { status: 500 });
  }
}