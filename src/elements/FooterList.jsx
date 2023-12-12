import React from 'react';
import FooterListJson from '../mocks/footer.json';
import Button from './Button'

export default function FooterList() {
  return (
    <div className='bg-white w-full rounded-lg p-10' >
      <div className='flex justify-between'>
        {FooterListJson.map((section, index) => (
          <div key={index} className=' mx-4'>
            <p className='text-xl font-bold'>{section[Object.keys(section)[0]].name}</p>
            {section[Object.keys(section)[0]].content.map((data, indexList) => (
              <p className='text-xs mt-3 text-gray-500' key={indexList}>
                {data.name}
              </p>
            ))}
          </div>
        ))}
      </div>

      <div className='flex mt-14 justify-between'>
        <div className='mb-2'>
          <Button className="me-4">Login</Button>
          <Button isTertiary>Get started for free</Button>
        </div>
        <div>
          <Button isFourth className="ms-1 w-36 p-10">
            <img src='/images/app-store-icon.png' alt='gplay-icon' />
          </Button>
          <Button isFourth className="ms-1 w-36 p-10">
            <img src='/images/google-play-icon.png' alt='gplay-icon' />
          </Button>
          <button className='ms-1 bg-slate-950 text-white border-none rounded-full py-3 px-4'>
            <i className="ms-1  fa-brands fa-twitter"></i>
          </button>
          <button className='ms-1 bg-slate-950 text-white border-none rounded-full py-3 px-4'>
            <i className="ms-1  fa-brands fa-tiktok"></i>
          </button>
          <button className='ms-1 bg-slate-950 text-white border-none rounded-full py-3 px-4'>
            <i className=" fa-brands fa-instagram"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
