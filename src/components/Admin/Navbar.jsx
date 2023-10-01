import React from 'react';
import Logos from '../../assets/logos-sm.png'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="rounded-full bg-white border-gray-200 p-4 px-6">
      <div className="flex flex-wrap items-center justify-between">
        <div>
          <ul className="flex items-center">
            <li className='w-6 h-7 me-6'>
              <Link to="/admin">
                <img src={Logos} alt="Logo" className='w-full h-full'/>
              </Link>
            </li>

            <li className='me-3'>
              <a href="#" className="block p-2  text-gray-700 rounded hover:bg-gray-100 hover:text-gray-700 hover:py-2" aria-current="page">Links</a>
            </li>
            
            <li className='me-3'>
              <a href="#" className="block p-2  text-gray-700 rounded hover:bg-gray-100 hover:text-gray-700 hover:py-2">Appearance</a>
            </li>
            <li className='me-3'>
              <a href="#" className="block p-2  text-gray-700 rounded hover:bg-gray-100 hover:text-gray-700 hover:py-2">Analytics</a>
            </li>
            <li className='me-3'>
              <a href="#" className="block p-2  text-gray-700 rounded hover:bg-gray-100 hover:text-gray-700 hover:py-2">Settings</a>
            </li>
          </ul>
        </div>

        <div className="flex items-center">
          <div>
            <button className='me-4'>
              <i className="fa-solid fa-volume-low"></i>
            </button>
          </div>
          <div>
            <button className='bg-gray-200 py-2 px-4 rounded rounded-full me-4 font-semibold'>
              <i className="fa-solid fa-bolt me-2"></i>
              Try Pro for free
            </button>
          </div>
          <div>
            <button className='border border-1 py-2 px-4 rounded rounded-full me-4 font-semibold'>
              <i className="fa-solid fa-share-nodes me-2"></i>Share
            </button>
          </div>
          <div>
            <button className='bg-gray-200 flex items-center justify-center w-10 h-10 rounded rounded-full '>D</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
