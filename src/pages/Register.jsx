import React, {  useRef } from 'react'
import { Link } from 'react-router-dom'
import { context } from '../context/Context'
import LogoColor from '../assets/logos-color.png'

const Register = () => {
  const { registerUser } = context()
  const registerForm = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    const name = registerForm.current.name.value
    const username = registerForm.current.username.value
    const email = registerForm.current.email.value    
    const password = registerForm.current.password.value    
    const userInfo = {name, email, username, password}

    registerUser(userInfo)
  }

  return (
    <div>
      <div className='absolute w-32 ms-10 mt-10'>
        <img src={LogoColor} alt='logo-color' />
      </div>

      <div className="flex">
        <div className='w-4/6 flex flex-col justify-center items-center'>
          <div className='mt-32 mb-6'>
            <p className='text-4xl font-bold text-center'>Join Linktree</p>
            <p className='text-gray-800 text-center mt-4'>Sign up for free!</p>
          </div>

          <form ref={registerForm} onSubmit={handleSubmit}>
            <div className="w-96 mt-2">
              <input 
                required
                className='w-full rounded rounded-lg border-0 bg-gray-100 text-xs italic py-3 px-4'
                type="text" 
                name="name"
                placeholder="name"
              />
            </div>
              
            <div className="w-96 mt-2">
              <input 
                required
                className='w-full rounded rounded-lg border-0 bg-gray-100 text-xs italic py-3 px-4'
                type="email" 
                name="email"
                placeholder="email"
              />
            </div>

            <div className="w-96 mt-2">
              <input 
                required
                className='w-full rounded rounded-lg border-0 bg-gray-100 text-xs italic py-3 px-4'
                type="text" 
                name="username"
                placeholder="username"
                />
            </div>

            <div className="w-96 mt-2">
              <input 
                required
                className='w-full rounded rounded-lg border-0 bg-gray-100 text-xs italic py-3 px-4'
                type="password" 
                name="password"
                placeholder="password"
                />
            </div>
            
            <div className="my-4">
              <button 
                type="submit"
                className="w-96 mt-2 font-semibold text-gray-500 bg-gray-300 p-2 rounded rounded-full"
              >Create account</button>
            </div>
          </form>

          <div className='w-96'>
            <p className='whitespace-normal text-gray-800 text-sm text-center'>
              By clicking Create account, you agree to Linktree's Terms and Conditions and confirm you have read our Privacy Notice. You may receive offers, news and updates from us.
            </p>
            <p className='text-center my-4 text-gray-800'>OR</p>
          </div>

          <div className='w-96'>
            <div className='flex'>
              <a 
                href='www.google.com'
                className='flex border border-2 border-gray-300 w-full rounded-full p-2 justify-center items-center hover:bg-gray-300'
              >
                <img 
                  className='w-6 h-6 me-2'
                  src='/images/google-icon.png' 
                  alt='google-icon'
                />

                Sign up with Google
              </a>
            </div>
            
            <div className='flex mt-2'>
              <a 
                href='www.google.com'
                className='flex border border-2 border-gray-300 w-full rounded-full p-2 justify-center items-center hover:bg-gray-300'
              >
                <img 
                  className='w-6 h-6 me-2'
                  src='/images/apple-icon.png' 
                  alt='google-icon'
                />

                Sign up with Apple
              </a>
            </div>

            <div className='mt-10 mb-20'>
              <p 
                className='text-gray-800 text-sm text-center'
              >
                Already have an account? {" "} 
                <Link to="/login" className='underline'>
                  Log in
                </Link>
              </p>

              <p
                className='mt-20 text-gray-800 text-xs text-center'
              >
                This site is protected by reCAPTCHA and the{" "}
                <a 
                  className='underline'
                  href="https://policies.google.com/privacy?hl=en"
                >
                  Google Privacy Policy
                </a> 

                {" "}and{" "} 

                <a 
                  className='underline'
                  href="https://policies.google.com/terms?hl=en"
                >
                  Terms of Service
                </a>

                {" "}apply.

              </p>
            </div>
          </div>          
        </div>

        <div  className='w-2/6 flex-grow'>
          <img className='h-full' src='/images/mockup.jpg' alt='register' />
        </div>
      </div>
    </div>
  )
}

export default Register
