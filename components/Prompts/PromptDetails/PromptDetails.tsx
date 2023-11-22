import SellersBanner from '@/components/Shop/SellersBanner'
import { styles } from '@/utils/styles'
import PromptDetailsCard from "./PromptDetailsCard"

type Props = {}

const PromptDetails = (props: Props) => {
    return (
        <div>
            <PromptDetailsCard />
            <br />
            <br />
            {/* {PromptInformation} */}
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