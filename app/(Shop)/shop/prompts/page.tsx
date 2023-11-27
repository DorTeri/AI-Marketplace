import ShopSidebar from "@/components/Shop/ShopSidebar"
import AllPrompts from "@/components/Prompts/AllPrompts"
import { getAllPromptsByShop } from "@/actions/shop/getAllPromptsByShop"

type Props = {}

const Page = async (props: Props) => {
    const promptsData = await getAllPromptsByShop()
    return (
        <div className="flex w-full">
            <div className="h-screen sticky top-0 left-0 z-20 flex p-2 bg-[#111C42] md:w-[32%] 2xl:w-[17%]">
                <ShopSidebar active={2} />
            </div>
            <div className="md:w-[68%] 2xl:w-[83%] p-5">
                <AllPrompts promptsData={promptsData}/>
            </div>
        </div>
    )
}

export default Page