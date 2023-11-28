'use client'
import React, { useEffect, useState } from 'react'
import { User } from "@clerk/nextjs/server";
import Footer from '@/components/Layout/Footer';
import { Chip, Divider } from '@nextui-org/react';
import ShopBanner from '@/components/Shop/ShopBanner';
import Header from '@/components/Layout/Header';
import Image from "next/image"
import defaultImage from "@/public/Assets/image4.png"
import OpenAI from "openai";
import { styles } from '@/utils/styles';
import { Button, Input } from "@nextui-org/react";
import { IoSend } from "react-icons/io5";
import about from '@/public/Assets/about.png'


const OpenaiImageGenerator = ({
    user,
    isSellerExist,
    apiKey
}: {
    user: User | undefined;
    isSellerExist: boolean;
    apiKey: string | undefined;
}) => {

    const [isMounted, setisMounted] = useState(false);
    const [imageUrl, setImageUrl] = useState<any>(defaultImage);
    const [prompt, setPrompt] = useState("")
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        if (!isMounted) {
            setisMounted(true);
        }
    }, [isMounted]);

    const generateImage = async (e: React.MouseEvent) => {
        e.preventDefault()
        setIsLoading(true)
        if (!prompt) return

        try {
            const openai = new OpenAI({
                apiKey: apiKey,
                dangerouslyAllowBrowser: true
            });

            const image: any = await openai.images.generate({
                model: "dall-e-2",
                prompt: prompt
            });

            setImageUrl(image.data[0].url);
            setIsLoading(false)
        } catch (error) {
            console.error("Error generating image:", error);
            setIsLoading(false)
        }
    }

    const downloadTextFile = () => {
        const textToSave = prompt;
        const blob = new Blob([textToSave], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'prompt.txt';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


    if (!isMounted) {
        return null;
    }

    return (
        <>
            <div className="shop-banner">
                <Header activeItem={3} user={user} isSellerExist={isSellerExist} />
                <ShopBanner title="Image generator" />
            </div>
            <div className="w-[95%] md:w-[90%] xl:w-[85%] 2xl:w-[80%] m-auto">
                <div className='w-full relative grid md:grid-cols-2 md:py-8'>
                    <div className='col-span-1 w-full md:w-[60%] md:mt-5 px-5 md:px-[unset]'>
                        <Chip className={`${styles.button} mb-[30px] h-[37px] bg-[#12211f]`}>
                            AI Image
                        </Chip>
                        <h5 className={`${styles.heading} mb-5 !leading-[50px]`}>
                            Crafting Tomorrow&apos;s Images With Artificial Intelligence
                        </h5>
                        <p className={`${styles.paragraph} pb-5`}>
                            AI image generation tools have emerged as powerful resources in the
                            realm of digital art and design. These cutting-edge tools leverage
                            advanced.
                        </p>
                    </div>
                    <div className="col-span-1 my-10 md:mt-[unset]">
                        <Image
                            src={about}
                            alt='about'
                            width={600}
                            height={600}
                            priority
                        />
                    </div>
                </div>
                <div className="w-full mt-9 md:flex justify-center items-center py-12">
                    <div className='p-5'>
                        <label className={`${styles.label}`}>
                            What image do you have on your mind?
                        </label>
                        <div className='flex m-auto pt-3'>
                            <Input
                                isRequired
                                type="text"
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                                label="Your prompt"
                                size="sm"
                                variant="bordered"
                            />
                            <div className={`flex justify-center items-center pl-5`}
                                onClick={(e) => generateImage(e)}>
                                {
                                    isLoading ? (
                                        <Image
                                            src="https://pixner.net/aikeu/assets/images/category/chat.png"
                                            width={25}
                                            height={25}
                                            alt=""
                                            className='rotate'
                                        />
                                    ) : (
                                        <div className='cursor-pointer hover:text-[#64ff4b]'>
                                            <IoSend />
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className='md:pl-10'>
                        <Image
                            src={imageUrl}
                            alt=''
                            width={350}
                            height={350}
                            className='m-auto'
                        />
                        <div className="mt-4 flex justify-center">
                            <a href={imageUrl?.src} download="generated_image.png">
                                <Button disabled={!imageUrl || imageUrl === defaultImage} variant="bordered">
                                    Download image
                                </Button>
                            </a>
                            <Button onClick={downloadTextFile} disabled={!prompt || imageUrl === defaultImage} variant="bordered" className="ml-2">
                                Download prompt
                            </Button>
                        </div>
                    </div>
                </div>
                <Divider className="bg-[#ffffff14] mt-5" />
                <Footer />
            </div>
        </>
    )
}

export default OpenaiImageGenerator