import React from "react";
import AboutPage from "./_page";
import { getUser } from "@/actions/user/getUser";

const Page = async () => {
  const data = await getUser();



  return (
    <div>
      <AboutPage user={data?.user}
        isSellerExist={data?.shop ? true : false} 
        />
    </div>
  );
};

export default Page;