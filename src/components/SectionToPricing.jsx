import React from 'react'
import Card from '../elements/Card'
import FakeBenefit from "../mocks/benefit.json"
import Button from '../elements/Button'

export default function SectionToPricing() {
  return (
    <div className='bg-gray-300 py-10'>
      <div className='grid justify-items-center mb-16'>
        <p className='text-4xl text-center font-bold mb-10'>The fast, friendly and powerful link in bio tool.</p>
        <Button isPrimary>Explore all plants</Button>
      </div>

      <div className='grid grid-cols-3 justify-items-center content-center'>
        {FakeBenefit.map((data, index) => (
          <div className='mx-3' key={index}>
            <Card img={data.img} content={data.content}/>
          </div>
        ))}
      </div>
    </div>
  )
}
