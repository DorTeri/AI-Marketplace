import Header from "@/components/Layout/Header";
import ShopBanner from "@/components/Shop/ShopBanner";
import { styles } from "@/utils/styles";
import React from "react";
import AboutPage from "./_page";
import { getUser } from "@/actions/user/getUser";

const Page = async () => {
  const data = await getUser();

  return (
    <div>
      <AboutPage user={data?.user}
        isSellerExist={data?.shop ? true : false} />
    </div>
  );
};

export default Page;