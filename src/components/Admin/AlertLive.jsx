import React from 'react'

export default function AlertLive() {
  return (
    <div className='flex items-center justify-between bg-red-200 p-4 rounded rounded-xl'>
      <p>
        <span className='border border-black px-2 rounded rounded-full me-2'>
        <i className="text-sm fa-solid fa-exclamation"></i>
        </span>
        
        <span className='font-semibold'>Your Linktree is not live.</span> 
        To publish, click on the verification link we sent you.
      </p>
      <div>
        <button className='bg-white font-semibold px-6 py-2 hover:bg-gray-200 rounded rounded-xl'>Resend link</button>
      </div>
    </div>
  )
}
