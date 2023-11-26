'use client'
import Header from '@/components/Layout/Header'
import ShopBanner from '@/components/Shop/ShopBanner'
import { User } from '@clerk/nextjs/server'
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import imageUrl from "@/public/Assets/image3.png"
import { styles } from '@/utils/styles'
import Footer from '@/components/Layout/Footer'


const AboutPage = ({ user, isSellerExist }: { user: User, isSellerExist: boolean }) => {

    const [isMounted, setisMounted] = useState(false);

    useEffect(() => {
        if (!isMounted) {
            setisMounted(true);
        }
    }, [isMounted]);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <div className="shop-banner">
                <Header activeItem={1} user={user} isSellerExist={isSellerExist} />
                <ShopBanner title="About us" />
            </div>
            <div className='w-[95%] md:w-[90%] xl:w-[85%] 2xl:w-[80%] m-auto'>
                <div className='md:flex'>
                    <div className='w-full m-auto'>
                        <p className={`${styles.paragraph} p-5`}>
                            Our platform is a commitment to unlocking the boundless potential of artificial intelligence in the realm of visual creativity.
                            We have cultivated a vibrant community of artists, developers,
                            and enthusiasts who share a common passion for pushing the boundaries of what is possible.
                        </p>
                    </div>
                    <div className='w-full'>
                        <Image
                            src={imageUrl}
                            alt=''
                            width={350}
                            height={350}
                            className='m-auto rounded-xl p-5'
                        />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default AboutPage