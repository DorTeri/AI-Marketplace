"use client";

import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import ShopBanner from "@/components/Shop/ShopBanner";
import { User } from "@clerk/nextjs/server";
import { Divider, Pagination } from "@nextui-org/react";
import { useEffect, useState } from "react";
import FilterPrompts from "@/components/Prompts/FilterPrompts";
import PromptCard from "@/components/Prompts/PromptCard";
import { useRouter } from "next/navigation";

const MarketPlaceRouter = ({
  user,
  isSellerExist,
  promptsData,
  totalPrompts
}: {
  user: User | undefined;
  isSellerExist: boolean;
  promptsData: any;
  totalPrompts: any
}) => {
  const [isMounted, setisMounted] = useState(false);
  const [initialPage , setInitialPage] = useState(1)
  const router = useRouter()



  useEffect(() => {
    if (!isMounted) {
      setisMounted(true);
    }
  }, [isMounted]);

  useEffect(() => {
    if(initialPage) {
      router.push(`/marketplace?page=${initialPage}`)
    }
  }, [initialPage , router])


  if (!isMounted) {
    return null;
  }

  const paginationPages = totalPrompts && Math.ceil(totalPrompts.length / 8)


  return (
    <>
      <div className="shop-banner">
        <Header activeItem={2} user={user} isSellerExist={isSellerExist} />
        <ShopBanner title="Our Shop" />
      </div>
      <div>
        <div className="w-[95%] md:w-[90%] xl:w-[85%] 2xl:w-[80%] m-auto">
          <div>
            <div className="w-full">
              <FilterPrompts
                totalPrompts={totalPrompts}
              />
            </div>
            <div className="w-full flex flex-wrap mt-5">
              {promptsData && promptsData.map((item: any) => (
                <PromptCard prompt={item} key={item.id} />
              ))}
            </div>
            <div className="w-full flex items-center justify-center mt-5">
              <Pagination
                loop
                showControls
                total={paginationPages}
                initialPage={initialPage}
                classNames={{
                  wrapper: "mx-2",
                  item: "mx-2",
                }}
                onChange={setInitialPage}
              />
            </div>
            <Divider className="bg-[#ffffff14] mt-5" />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketPlaceRouter;