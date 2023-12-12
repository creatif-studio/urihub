import React from 'react'
import Headline from '../elements/Headline'

export default function SecondJumbotron() {
  return (
    <div className='pt-14 w-full justify-center flex items-center' style={{height: 600}}>
      <div className='h-96'>
        <img className="h-full" src='/images/phone.png' alt='phone' />
      </div>

      <div className='w-1/2'>
        <div>
          <Headline 
            className="isSecondary"
            heading="Everything you are. In one, simple link in bio."
          /> 
        </div>

        <div className='mt-4'>
          <Headline
            className="isSecondary"
            content="Join 40M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles."
          />
        </div>
      </div>
    </div>
  )
}
