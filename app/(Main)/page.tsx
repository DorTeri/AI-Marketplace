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
import axios from "axios"
import Loader from "@/utils/Loader"

type Props = {}

const Page = (props: Props) => {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true)
    }
  }, [isMounted])

  useEffect(() => {
    setLoading(true)
    axios.get("/api/me").then((res) => {
      setUser(res.data.user)
      setLoading(false)
    }).catch((error) => {
      console.log(error)
      setLoading(false)
    })
  }, [])

  if (!isMounted) {
    return null
  }



  return (
    <>
      {
        loading ? (
          <>
          <Loader />
          </>
        ) : (
          <div>
            <div className="banner">
              <Header activeItem={0} user={user} />
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
                  <PromptCard />
                  <PromptCard />
                  <PromptCard />
                  <PromptCard />
                  <PromptCard />
                  <PromptCard />
                  <PromptCard />
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
        )
      }
    </>
  )
}

export default Page