import React from 'react'
import { context } from '../../context/Context'

export default function ItemsListLink({ id }) {
  const { deleteLink } = context()

  return (
    <div className="flex justify-between">
      <div>
        <button className="relative group me-8">
          <i className="fa-solid fa-location-arrow text-center block text-gray-600"></i>
          <div className="absolute text-center opacity-0 group-hover:opacity-100 text-white bg-black text-sm px-2 py-1 mt-2 rounded shadow transition-opacity duration-200 ease-in-out left-1/2 transform -translate-x-1/2">
            Redirect
          </div>
        </button>
        
        <button className="relative group me-8">
          <i className="fa-regular fa-image text-center block text-gray-600"></i>
          <div className="absolute text-center opacity-0 group-hover:opacity-100 text-white bg-black text-sm px-2 py-1 mt-2 rounded shadow transition-opacity duration-200 ease-in-out left-1/2 transform -translate-x-1/2">
            Thumbnail
          </div>
        </button>
        
        <button className="relative group me-8">
          <i className="fa-regular fa-star text-center block text-gray-600"></i>
          <div className="absolute text-center opacity-0 group-hover:opacity-100 text-white bg-black text-sm px-2 py-1 mt-2 rounded shadow transition-opacity duration-200 ease-in-out left-1/2 transform -translate-x-1/2">
            Prioritize
          </div>
        </button>
        
        <button className="relative group me-8">
          <i className="fa-regular fa-calendar text-center block text-gray-600"></i>
          <div className="absolute text-center opacity-0 group-hover:opacity-100 text-white bg-black text-sm px-2 py-1 mt-2 rounded shadow transition-opacity duration-200 ease-in-out left-1/2 transform -translate-x-1/2">
            Schedule
          </div>
        </button>
        
        <button className="relative group me-8">
          <i className="fa-solid fa-lock text-center block text-gray-600"></i>
          <div className="absolute text-center opacity-0 group-hover:opacity-100 text-white bg-black text-sm px-2 py-1 mt-2 rounded shadow transition-opacity duration-200 ease-in-out left-1/2 transform -translate-x-1/2">
            Lock
          </div>
        </button>
        
        <button className="relative group me-8">
          <i className="fa-solid fa-chart-simple text-center block text-gray-600"></i>
          <div className="absolute text-center opacity-0 group-hover:opacity-100 text-white bg-black text-sm px-2 py-1 mt-2 rounded shadow transition-opacity duration-200 ease-in-out left-1/2 transform -translate-x-1/2">
            Analytics
          </div>
        </button>
      </div>
      
      <div>
        <i
          className="fa-solid fa-trash-can cursor-pointer"
          onClick={() => deleteLink(id)}
        ></i>
      </div>
    </div>
  )
}
