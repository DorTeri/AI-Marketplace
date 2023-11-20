import { styles } from '@/utils/styles'
import { Button } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

type Props = {}

const SellersBanner = (props: Props) => {
    return (
        <div className='w-full 2xl:w-[80%] 2xl:m-auto h-[30vh] flex items-center justify-center
     sellers-banner rounded-xl md:m-2'>
            <div className="text-center">
                <h1 className={`${styles.heading} !text-indigo-950 font-Montserrat`}>
                    Start to selling with us
                    <br />
                    <br />
                    <Link href={"/create-shop"}>
                        <Button className='mb-3 p-6 rounded-md text-xl bg-black text-white font-Inter'>
                            <span>Get started</span>
                        </Button>
                    </Link>
                </h1>
            </div>
        </div>
    )
}

export default SellersBanner