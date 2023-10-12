import React from 'react'
import Logos from '../assets/logos-sm.png'
import { Link } from 'react-router-dom'
import Button from '../elements/Button'

export default function NavbarUser() {
  return (
    <>
      <nav className="rounded-full bg-white border-gray-200 p-4 px-6 w-full">
        <div className="flex flex-wrap items-center justify-between">
          <div>
            <ul className="flex items-center">
              <li className='w-6 h-7 me-6'>
                <Link to="/">
                  <img src={Logos} alt="Logo" className='w-full h-full'/>
                </Link>
              </li>

              <li className='me-3'>
                <a 
                  href="#" 
                  className="block p-2 text-gray-700 rounded hover-bg-gray-100 hover-text-gray-700 hover-py-2" aria-current="page"
                >
                  Template
                </a>
              </li>
              
              <li className='me-3'>
                <a 
                  href="#" 
                  className="block p-2 text-gray-700 rounded hover-bg-gray-100 hover-text-gray-700 hover-py-2"
                >
                  Marketplace
                </a>
              </li>
              <li className='me-3'>
                <a 
                  href="#" 
                  className="block p-2 text-gray-700 rounded hover-bg-gray-100 hover-text-gray-700 hover-py-2"
                >
                  Discover
                </a>
              </li>
              <li className='me-3'>
                <a 
                  href="#" 
                  className="block p-2 text-gray-700 rounded hover-bg-gray-100 hover-text-gray-700 hover-py-2"
                >
                  Pricing
                </a>
              </li>
              <li className='me-3'>
                <a 
                  href="#" 
                  className="block p-2 text-gray-700 rounded hover-bg-gray-100 hover-text-gray-700 hover-py-2"
                >
                  <span className="fa-solid fa-magnifying-glass"></span>
                  {" "}Pricing
                </a>
              </li>
            </ul>
          </div>

          <div className="flex items-center">
            <Link to='/login'>
              <Button>Log in</Button>
            </Link>
            <Link to='/register' className='ms-3'>
              <Button isFourth>Sign up free</Button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}
