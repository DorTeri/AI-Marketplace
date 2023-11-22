'use client'
import Footer from "@/components/Layout/Footer"
import Header from "@/components/Layout/Header"
import ShopBanner from "@/components/Shop/ShopBanner"
import { User } from "@clerk/nextjs/server"
import { Divider } from "@nextui-org/react"
import { useEffect, useState } from "react"
import PromptDetails from "@/components/Prompts/PromptDetails/PromptDetails"
import { stripePaymentIntent } from "@/actions/payment/paymentAction"
import { loadStripe } from "@stripe/stripe-js"

const PromptDetailsPage = ({
    user,
    isSellerExist,
    promptData,
    relatedPrompts,
    publishableKey
}: {
    user: User | undefined,
    isSellerExist: boolean,
    promptData: any,
    relatedPrompts: any,
    publishableKey: string
}) => {
    const [isMounted, setIsMounted] = useState(false)
    const [stripePromise, setStripePromise] = useState<any>()
    const [clientSecret, setClientSecret] = useState("")

    useEffect(() => {
        if (!isMounted) {
            setIsMounted(true)
        }
    }, [isMounted])

    useEffect(() => {
        if (publishableKey) {
            const amount = Math.round(promptData?.price * 100)
            newPaymentIntent({ amount })

            setStripePromise(loadStripe(publishableKey))
        }
    }, [publishableKey, promptData])

    const newPaymentIntent = async ({ amount }: { amount: Number }) => {
        const paymentIntent = await stripePaymentIntent({ amount })
        setClientSecret(paymentIntent?.client_secret)
    }

    if (!isMounted) {
        return null
    }

    return (
        
        <div>
            <div className="shop-banner">
                <Header
                    activeItem={2}
                    user={JSON.parse(JSON.stringify(user))}
                    isSellerExist={isSellerExist}
                />
                <ShopBanner title={"Animal Prompt"} />
            </div>
            <div>
                <div className="w-[95%] md:w-[80%] xl:w-[85%] 2xl:w-[80%] m-auto">
                    <PromptDetails
                        promptData={promptData}
                        relatedPrompts={relatedPrompts}
                        stripePromise={stripePromise}
                        clientSecret={clientSecret}
                    />
                    <Divider className="bg-[#ffffff14] mt-5" />
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default PromptDetailsPage