import { getUser } from "@/actions/user/getUser"
import PromptDetailsPage from "./_page"
import { getPromptById } from "@/actions/prompts/getPromptById"


const Page = async ({ params }: { params: any }) => {
  const data = await getUser()
  const promptData = await getPromptById(params.id)

  return (
    <div>
      <PromptDetailsPage
        user={JSON.parse(JSON.stringify(data?.user))}
        isSellerExist={data?.shop ? true : false}
        promptData={promptData}
      />
    </div>
  )
}

export default Page