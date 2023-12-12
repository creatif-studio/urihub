import React from 'react'

export default function ItemProfileDrop({title, content}) {
  return (
    <div>
      <div className='mt-6 mb-3 font-bold'>
        <p>{title}</p>
      </div>
      {content.map((item, index) => (
        <div key={index} className='flex items-center mb-2 p-2 hover:bg-gray-100 rounded cursor-pointer'>
          <i className={item.icon}></i>
          <p className='ms-4'>{item.name}</p>
        </div>
      ))}
    </div>
  )
}
