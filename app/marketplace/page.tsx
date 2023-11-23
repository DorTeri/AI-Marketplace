import { getAllPrompts } from "@/actions/prompts/getAllPrompts";
import MarketPlaceRouter from "./_page";
import { getUser } from "@/actions/user/getUser";

const Page = async () => {
  const data = await getUser();
  const promptsData = await getAllPrompts()  

  return (
    <div>
      <MarketPlaceRouter
        user={data?.user}
        isSellerExist={data?.shop ? true : false}
        promptsData={promptsData?.prompts}
        totalPrompts={promptsData?.totalPrompts}
      />
    </div>
  );
};

export default Page;