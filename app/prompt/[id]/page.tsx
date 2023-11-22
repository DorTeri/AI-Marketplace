import { getUser } from "@/actions/user/getUser"
import PromptDetailsPage from "./_page"
import { getPromptById } from "@/actions/prompts/getPromptById"
import { getPromptsByCategory } from "@/actions/prompts/getPromptsByCategory"


const Page = async ({ params }: { params: any }) => {
  const data = await getUser()
  const promptData = await getPromptById(params.id)
  const relatedPromptsData = await getPromptsByCategory(promptData? promptData?.category : "")

  const relatedPrompts = relatedPromptsData && relatedPromptsData.filter((prompt) => prompt.id !== promptData?.id)

  return (
    <div>
      <PromptDetailsPage
        user={JSON.parse(JSON.stringify(data?.user))}
        isSellerExist={data?.shop ? true : false}
        promptData={promptData}
        relatedPrompts={relatedPrompts}
      />
    </div>
  )
}

export default Page