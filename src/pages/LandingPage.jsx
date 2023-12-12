import React from 'react'
import NavbarUser from '../components/NavbarUser'
import FirstJumbotron from '../components/FirstJumbotron'
import SecondJumbotron from '../components/SecondJumbotron'

export default function Home() {
  return (
    <div style={{backgroundColor: "rgb(37, 79, 26)",  marginTop: 0}}>
      <div>
        <div className='fixed mt-4 w-full px-8'>
          <NavbarUser />
        </div>

        <div>
          <FirstJumbotron />
        </div>
        
        <div style={{backgroundColor: "rgb(233, 192, 233)"}}>
          <SecondJumbotron />
        </div>
      </div>
    </div>

  )
}


