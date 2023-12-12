import React, { useEffect, useState } from 'react'
import { getUserUrl } from '../hooks/GetUserUrl'
import { context } from '../context/Context'
import CardToPhone from '../elements/CardToPhone'

export default function LinkProduction() {
  const { user } = context()
  const [dataLink, setDataLink] = useState(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getUserUrl()
        const findUserLink = response.documents.find(data => data.$id == user.$id)
        setDataLink(findUserLink.links)
      } catch (error) {
        throw error
      }
    }

    fetchData()
  }, [])
  
  return (
    <div className='flex justify-center  h-screen md:w-full bg-gray-500 items-start'>
      <div className='flex flex-col w-96 p-4  h-full justify-center bg-red-900'>
        <div className='flex justify-end'>
          <div className='flex items-center justify-center w-10 h-10 bg-white pb-3 rounded rounded-full'>
            <p>...</p>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center mt-4'>
          <div className='flex items-center justify-center w-20 h-20 bg-white rounded rounded-full'>
            <p className='font-bold text-2xl'>D</p>
          </div>
          <div>
            <p className='font-bold text-xl mt-4 text-white'>{user?.name}</p>
          </div>
          { dataLink?.length > 0 ? (
            dataLink?.map((data, index) => (
              <div className='w-full my-1' key={index}>
                <CardToPhone name={data.name} url={data.url} />
              </div>
            ))
          ) : ""}
        </div>
        <div className='mt-32 items-baseline'>
          <p className='font-semibold text-lg mt-4 text-white text-center'>Linktree</p>
        </div>
      </div>
    </div>
  )
}
