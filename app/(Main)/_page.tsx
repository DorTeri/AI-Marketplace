'use client'
import React, { useState, useEffect } from "react"
import Header from "@/components/Layout/Header"
import Hero from "@/components/Route/Hero"
import Image from "next/image"
import shape from "@/public/Assets/shape.png"
import About from "@/components/Route/About"
import PromptCard from "@/components/Prompts/PromptCard"
import BestSellers from "@/components/Shop/BestSellers"
import Future from "@/components/Route/Future"
import Partners from "@/components/Route/Partners"
import SellersBanner from "@/components/Shop/SellersBanner"
import Footer from "@/components/Layout/Footer"
import { styles } from "@/utils/styles"
import { Divider } from "@nextui-org/react"
import { User } from "@clerk/nextjs/server"

type Props = {
    user: User | undefined;
    isSellerExist: boolean | undefined;
    promptsData: any;
}

const RoutePage = ({ user, isSellerExist, promptsData }: Props) => {

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
        <>
            <div>
                <div className="banner">
                    <Header activeItem={0} user={user} isSellerExist={isSellerExist} />
                    <Hero />
                </div>
                <Image
                    src={shape}
                    width={120}
                    height={120}
                    alt="shape"
                    className="absolute right-[-30px]"
                />
                <br />
                <div className="w-[95%] md:w-[90%] xl:w-[80%] 2xl:w-[75%] m-auto">
                    <About />
                    <div>
                        <h1 className={`${styles.heading} p-2 font-Montserrat`}>
                            Latest Prompts
                        </h1>
                        <div className="flex flex-wrap">
                            {
                                promptsData && promptsData.map((prompt: any) => (
                                    <PromptCard key={prompt.id} prompt={prompt} />
                                ))
                            }
                        </div>
                        <br />
                        <BestSellers />
                        <Future />
                        <Partners />
                        <SellersBanner />
                        <br />
                        <br />
                        <Divider className="bg-[#ffffff23]" />
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    )
}

export default RoutePage