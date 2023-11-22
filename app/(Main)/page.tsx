import React from 'react'
import RoutePage from './_page'
import { getUser } from '@/actions/user/getUser'
import { getAllPrompts } from '@/actions/prompts/getAllPrompts'

const Page = async () => {
  const data = await getUser()
  const promptsData = await getAllPrompts()

  return (
    <div>
      <RoutePage user={JSON.parse(JSON.stringify(data?.user))}
        isSellerExist={data?.shop ? true : false} promptsData={JSON.parse(JSON.stringify(promptsData))} />
    </div>
  )
}

export default Page