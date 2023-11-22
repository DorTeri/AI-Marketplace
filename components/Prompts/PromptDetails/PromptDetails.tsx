import SellersBanner from '@/components/Shop/SellersBanner'
import { styles } from '@/utils/styles'
import PromptDetailsCard from "./PromptDetailsCard"
import PromptInformation from "./PromptInformation"

type Props = {}

const PromptDetails = ({ promptData }: { promptData: any }) => {
    return (
        <div>
            <PromptDetailsCard promptData={promptData} />
            <br />
            <br />
            <PromptInformation promptData={promptData} />
            <br />
            <h1 className={`${styles.heading} px-2 pb-2`}>
                Related Prompts
            </h1>
            <div className="flex flex-wrap">
                {/* PromptCard */}
            </div>
            <br />
            <br />
            <SellersBanner />
            <br />
        </div>
    )
}

export default PromptDetails