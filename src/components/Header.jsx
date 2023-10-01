import React from 'react'
import { Link } from 'react-router-dom'
import { context } from '../context/Context'
import LogoColor from '../assets/logos-color.png'

const Header = () => {
  const { user, logoutUser } = context()
  
  return (
    <div className="header">
        

        <div className="links--wrapper">
          { user ? (
            <>
              <Link to="/" className="header--link">Home</Link>
              <Link to="/profile" className="header--link">Profile</Link>

              <button onClick={logoutUser} className="btn">Logout</button>
            </>
          ) : (
            <>
              <div className=''>
                <img src={LogoColor} alt='logo-color' />
              </div>
            </> 
          )}
            
            
        </div>
    </div>
  )
}

export default Header
