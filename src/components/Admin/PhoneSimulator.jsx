import React, { useEffect, useState } from 'react'
import { getUserUrlById } from '../../hooks/GetUserUrl'
import { context } from "../../context/Context"
import CardToPhone from '../../elements/CardToPhone'

export default function PhoneSimulator() {
  const { user } = context()
  const [cekUser, setCekUser] = useState()
  const [dataLink, setDataLink] = useState()

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    fetchData();
  }, [dataLink]);


  async function fetchData() {
    try {
      const response = await getUserUrlById(user.$id)
      setCekUser(response?.username);
      setDataLink(response?.links);
    } catch (err) {
      throw err
    }
  }
  
  return (
    <div className='flex flex-col w-72 bg-gray-500 border border-8 border-black p-4' style={{borderRadius: "30px", height: "480px"}}>
      <div className='flex justify-end'>
        <div className='flex items-center justify-center w-6 h-6 bg-white pb-3 rounded rounded-full'>
          <p>...</p>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center mt-4'>
        <div className='flex items-center justify-center w-16 h-16 bg-white rounded rounded-full'>
          <p className='font-bold text-2xl'>{cekUser ? cekUser[0].toUpperCase() : ""}</p>
        </div>
        <div>
          <p className='font-bold text-xl mt-4 text-white'>@{cekUser}</p>
        </div>
        { dataLink ? (
          dataLink.map((data, index) => (
            data.isShow ? (
              <div className='w-full my-1' key={index}>
                <CardToPhone name={data.name} url={data.url} isShow={data.isShow}/>
              </div>
            ) : null
          ))
        ) : ""}
      </div>
      <div className='mt-32'>
        <p className='font-semibold text-lg mt-4 text-white text-center position-fixed'>Linktree</p>
      </div>
    </div>
  )
}
