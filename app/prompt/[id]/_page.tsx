'use client'
import Header from "@/components/Layout/Header"
import ShopBanner from "@/components/Shop/ShopBanner"
import { User } from "@clerk/nextjs/server"
import { useEffect, useState } from "react"


const PromptDetailsPage = ({ user, isSellerExist }: { user: User | undefined, isSellerExist: boolean }) => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        if (!isMounted) {
            setIsMounted(true)
        }
    }, [isMounted])

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
        </div>
    )
}

export default PromptDetailsPage