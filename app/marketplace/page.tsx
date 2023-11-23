import { getAllPrompts } from "@/actions/prompts/getAllPrompts";
import MarketPlaceRouter from "./_page";
import { getUser } from "@/actions/user/getUser";

const Page = async ({ searchParams }: { searchParams: { [key: string]: string | undefined } }) => {
  const page = searchParams["page"] ?? "1"
  const pageNumber = parseInt(page)
  const data = await getUser();
  const promptsData = await getAllPrompts(pageNumber)

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