import { styles } from '@/utils/styles'
import React from 'react'
import Marquee from 'react-fast-marquee'
import partner1 from '@/public/Assets/partner1.png'
import partner2 from '@/public/Assets/partner2.png'
import partner3 from '@/public/Assets/partner3.png'
import partner4 from '@/public/Assets/partner4.png'
import partner5 from '@/public/Assets/partner5.png'
import Image from 'next/image'

const partners = [
  {
    src: partner1
  },
  {
    src: partner2
  },
  {
    src: partner3
  },
  {
    src: partner4
  },
  {
    src: partner5
  },
  {
    src: partner1
  },
  {
    src: partner2
  },
  {
    src: partner3
  },
  {
    src: partner4
  },
  {
    src: partner5
  },
]

type Props = {}

const Partners = (props: Props) => {
  return (
    <div className='py-10'>
      <h1 className={`${styles.heading} font-Montserrat text-center`}>
      Our Partner&rsquo;s
      </h1>
      <div className='w-full flex justify-center pt-3'>
        <div className='w-[50px] h-[2px] bg-[#64ff4b]' />
      </div>
      <Marquee className='w-full my-10'>
        {partners.map((i , index) => (
          <Image 
          src={i.src}
          alt=''
          width={100}
          height={100}
          key={index}
          className='mx-14 grayscale-[100%] w-[120px] h-[120px]
           object-contain hover:grayscale-0 transition-opacity cursor-pointer'
          />
        ))}
      </Marquee>
    </div>
  )
}

export default Partners