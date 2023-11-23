import React from 'react'
import RoutePage from './_page'
import { getUser } from '@/actions/user/getUser'
import { getAllPrompts } from '@/actions/prompts/getAllPrompts'

const Page = async () => {
  const data = await getUser()
  const promptsData = await getAllPrompts()

  console.log("promptsDatass" , promptsData);
  

  return (
    <div>
      <RoutePage user={JSON.parse(JSON.stringify(data?.user))}
        isSellerExist={data?.shop ? true : false} promptsData={JSON.parse(JSON.stringify(promptsData?.prompts))} />
    </div>
  )
}

export default Page