import Image from 'next/image'
import React from 'react'
import line from "@/public/Assets/line.png"
import Marquee from 'react-fast-marquee'
import image1 from "@/public/Assets/image1.png"
import image2 from "@/public/Assets/image2.png"
import image3 from "@/public/Assets/image3.png"
import image4 from "@/public/Assets/image4.png"
import image5 from "@/public/Assets/image5.png"
import image6 from "@/public/Assets/image6.png"
import image7 from "@/public/Assets/image7.png"
import image8 from "@/public/Assets/image8.png"
import image9 from "@/public/Assets/image9.png"
import image10 from "@/public/Assets/image10.png"


type Props = {}

const rowOneImages = [
    {
        src: image1,
    },
    {
        src: image2,
    },
    {
        src: image3,
    },
    {
        src: image4,
    },
    {
        src: image5,
    },
]

const rowTwoImages = [
    {
      src: image6,
    },
    {
      src: image7,
    },
    {
      src: image8,
    },
    {
      src: image9,
    },
    {
      src: image10,
    },
  ];

const Hero = (props: Props) => {
    return (
        <div className='w-full md:min-h-screen flex items-center justify-center'>
            <div>
                <h1 className='font-Montserrat text-4xl py-5 xl:text-7xl
                 2xl:text-8xl font-[700] text-center xl:leading=[80px] 
                 2xl:leading-[100px] sm:mt-20'>
                    Make <span className='text-[#64ff4b]'>Ai Image</span> <br />
                    With your <br /> Imagination
                </h1>
                <div className='md:mt-5'>
                    <Image
                        src={line}
                        alt='line'
                        className='absolute hidden md:block'
                        width={2000}
                        height={2}
                    />
                </div>
                <div className="w-[100vw] mb-5 md:mb-20 relative">
                    <div className="rotate-[-4deg] mt-10 md:mt-[6.5rem]">
                        <Marquee>
                            {rowOneImages.map((i, index) => (
                                <Image
                                    src={i.src}
                                    key={index}
                                    alt='images'
                                    className='md:m-4 w-[200px] m-2 md:w-[500px] rounded-[20px]'
                                    width={500}
                                    height={300}
                                />
                            ))}
                        </Marquee>
                        <Marquee>
                            {rowTwoImages.map((i, index) => (
                                <Image
                                    src={i.src}
                                    key={index}
                                    alt='images'
                                    className='md:m-4 w-[200px] m-2 md:w-[500px] rounded-[20px]'
                                    width={500}
                                    height={300}
                                />
                            ))}
                        </Marquee>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero