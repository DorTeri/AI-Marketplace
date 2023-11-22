import { getAllPrompts } from "@/actions/prompts/getAllPrompts"
import { getUser } from "@/actions/user/getUser"
import PromptDetailsPage from "./_page"


const Page = async () => {
  const data = await getUser()
  const promptsData = await getAllPrompts()
  return (
    <div>
      <PromptDetailsPage
        user={JSON.parse(JSON.stringify(data?.user))}
        isSellerExist={data?.shop ? true : false}
      />
    </div>
  )
}

export default Page