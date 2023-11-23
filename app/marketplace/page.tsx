import { getAllPrompts } from "@/actions/prompts/getAllPrompts";
import MarketPlaceRouter from "./_page";
import { getUser } from "@/actions/user/getUser";

const Page = async () => {
  const data = await getUser();
  const promptsData = await getAllPrompts()

  console.log("promptsData",promptsData);
  

  return (
    <div>
      <MarketPlaceRouter
        user={data?.user}
        isSellerExist={data?.shop ? true : false}
        promptsData={promptsData?.prompts}
      />
    </div>
  );
};

export default Page;