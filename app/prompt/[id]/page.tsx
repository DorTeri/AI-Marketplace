import { getUser } from "@/actions/user/getUser"
import PromptDetailsPage from "./_page"


const Page = async ({ params }: { params: any }) => {
  const data = await getUser()
  
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