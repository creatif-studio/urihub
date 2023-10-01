import React from 'react'

export default function Card({ img, content }) {
  return (
    <div className='grid p-8 w-80 bg-white h-96 rounded-lg '>
      <div className='grid content-center h-48 p-8'>
        <img src={img} alt="card-friend" width={"100%"} />
      </div>
      <div className='h-20 mt-10'>
        <p className='text-center'>{content}</p>
      </div>
    </div>
  )
}

// className='w-100% h-32 flex item-center'