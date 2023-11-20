'use client'
import React, { useState, useEffect } from "react"
import Header from "@/components/Header"
import Hero from "@/components/Route/Hero"
import Image from "next/image"
import shape from "@/public/Assets/shape.png"
import About from "@/components/Route/About"
import PromptCard from "@/components/Prompts/PromptCard"
import { styles } from "@/utils/styles"

type Props = {}

const Page = (props: Props) => {

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
      <div className="banner">
        <Header activeItem={0} />
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
            <PromptCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page