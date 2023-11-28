import OpenaiImageGenerator from './_page'
import { getUser } from "@/actions/user/getUser";

const page = async () => {
    const data = await getUser();
    const apiKey = process.env.OPENAI_API_KEY
    

    return (
        <div>
            <OpenaiImageGenerator
                user={data?.user}
                isSellerExist={data?.shop ? true : false}
                apiKey={apiKey} 
                />
        </div>
    )
}

export default page