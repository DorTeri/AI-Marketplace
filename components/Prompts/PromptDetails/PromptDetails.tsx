import SellersBanner from '@/components/Shop/SellersBanner'
import { styles } from '@/utils/styles'
import PromptDetailsCard from "./PromptDetailsCard"
import PromptInformation from "./PromptInformation"
import PromptCard from '../PromptCard'

type Props = {}

const PromptDetails = ({
    promptData,
    relatedPrompts,
    clientSecret,
    stripePromise
}: {
    promptData: any;
    relatedPrompts: any;
    clientSecret: string;
    stripePromise: any;
}) => {
    return (
        <div>
            <PromptDetailsCard promptData={promptData} clientSecret={clientSecret} stripePromise={stripePromise} />
            <br />
            <br />
            <PromptInformation promptData={promptData} />
            <br />
            <h1 className={`${styles.heading} px-2 pb-2`}>
                Related Prompts
            </h1>
            <div className="flex flex-wrap">
                {
                    relatedPrompts && relatedPrompts.map((prompt: any) => (
                        <PromptCard prompt={prompt} key={prompt} />
                    ))
                }
            </div>
            {
                relatedPrompts?.length === 0 && (
                    <p className={`${styles.label} text-center block my-5`}>
                        No prompts found with this category!
                    </p>
                )
            }
            <br />
            <br />
            <SellersBanner />
            <br />
        </div>
    )
}

export default PromptDetails