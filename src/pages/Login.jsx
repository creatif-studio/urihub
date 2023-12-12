import React, { useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { context } from '../context/Context'
import LogoColor from '../assets/logos-color.png'


const Login = () => {
  const {user, loginUser} = context()
  const navigate = useNavigate()

  const loginForm = useRef(null)

  useEffect(() => {
    if (user){
      navigate('/')
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const email = loginForm.current.email.value
    const password = loginForm.current.password.value
    
    const userInfo = {email, password}

    loginUser(userInfo)
  }

  return (
    <div>
      <div className='absolute w-32 ms-10 mt-10'>
        <Link to="/">
          <img src={LogoColor} alt='logo-color' />
        </Link>
      </div>

      <div className="flex">
        <div className='w-4/6 flex flex-col justify-center items-center'>
          <div className='mt-32 mb-6'>
            <p className='text-4xl font-bold text-center'>Welcome Back</p>
            <p className='text-gray-800 text-center mt-2'>Log in to your Linktree</p>
          </div>

          <form onSubmit={handleSubmit} ref={loginForm}> 
            <div className="w-96 mt-2">
              <input 
                required
                className="w-full rounded rounded-lg border-0 bg-gray-100 text-xs italic py-3 px-4"
                type="email" 
                name="email"
                placeholder="email"
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

            <div className='mt-4'>
              <Link 
                to="/login" 
                className='underline text-sm'
              >
                Forgot password?
              </Link>
              {"  .  "}
              <Link 
                to="/login" 
                className='underline text-sm'
              >
                Forgot username?
              </Link>
            </div>

            <div className="my-4">
              <button 
                type="submit"
                className="w-96 mt-2 font-semibold text-gray-500 bg-gray-300 p-2 rounded rounded-full"
              >Log in</button>
            </div>
          </form>
          
          <div className='w-96'>
            <p className='text-center mb-4 text-gray-800'>OR</p>
          </div>

          <div className='w-96'>
            <div className='flex'>
              <a 
                href='www.google.com'
                className='flex font-semibold border border-2 border-gray-300 w-full rounded-full p-2 justify-center items-center hover:bg-gray-300'
              >
                <img 
                  className='w-6 h-6 me-2'
                  src='/images/google-icon.png' 
                  alt='google-icon'
                />

                Continue with Google
              </a>
            </div>
            
            <div className='flex mt-2'>
              <a 
                href='www.google.com'
                className='flex font-semibold border border-2 border-gray-300 w-full rounded-full p-2 justify-center items-center hover:bg-gray-300'
              >
                <img 
                  className='w-6 h-6 me-2'
                  src='/images/apple-icon.png' 
                  alt='google-icon'
                />

                Continue with Apple
              </a>
            </div>

            <div className='mt-10 mb-20'>
              <p 
                className='text-gray-800 text-sm text-center'
              >
                Don't have an account? {" "} 
                <Link to="/register" className='underline'>
                  Sign up
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
          <img className='h-full' src='/images/mockup2.jpg' alt='register' />
        </div>
      </div>
    </div>
  )
}

export default Login
