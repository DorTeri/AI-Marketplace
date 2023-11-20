import Link from 'next/link'
import React, { useState } from 'react'
import Navigation from './Navigation'

type Props = {
    activeItem: number,
}

const Header = ({activeItem}: Props) => {
    const [active, setActive] = useState(false)

    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setActive(true)
            } else {
                setActive(false)
            }
        })
    }
    return (
        <div className={`w-full p-5 border-b min-h-[60px] border-b-[#ffffff32]
         transition-opacity ${active && 'fixed top-0- left-0 bg-[#00000] z-[9999]'}`}>
            <div className="hidden md:w-[90%] mx-auto md:flex items-center justify-between">
                <div>
                    <Link href={"/"}>
                        <h1 className='font-Inter text-3xl cursor-pointer'>
                            <span className='text-[#64ff4c]'>Bit</span>prompt
                        </h1>
                    </Link>
                </div>
                <div className='flex'>
                    <Navigation activeItem={activeItem} />
                </div>
            </div>
        </div>
    )
}

export default Header