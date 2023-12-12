import React, { useState } from 'react';
import Affiliate from '../mocks/affiliate.json';

export default function SectionToAffiliate() {
  const [currentAffiliateIndex, setCurrentAffiliateIndex] = useState(0);
  const company = ["public/images/logo-company.avif", "/images/logo-company1.avif", "/images/logo-company2.avif", "/images/logo-company3.avif", "/images/logo-company4.avif"]

  const nextAffiliate = () => {
    setCurrentAffiliateIndex((prevIndex) => (prevIndex + 1) % Affiliate.length);
  };

  const prevAffiliate = () => {
    setCurrentAffiliateIndex((prevIndex) =>
      prevIndex === 0 ? Affiliate.length - 1 : prevIndex - 1
    );
  };

  const currentAffiliate = Affiliate[currentAffiliateIndex];

  return (
    <div className='bg-gray-300 container-xl mx-auto'>
      <div>
        <p className='text-4xl font-bold text-center'>As Feature in...</p> 
        <div className='flex justify-center mt-10'>
          { company.map((data, index) => (
            <div key={index} className='rounded-full bg-white px-8 py-4 mx-4'>
              <img src={data} alt='company' width={"100%"}/>
            </div>
          ))}
        </div>    
      </div>

      <div className='w-4/6 h-96 mb-12 mx-auto mt-24'>
        <img
          src={currentAffiliate.img}
          className='rounded-full w-full h-full object-cover'
          alt='img-affiliate'
        />
      </div>
      <div>
        <p className='text-4xl font-bold text-center mb-4'>
          {currentAffiliate.content}
        </p>
        <p className='text-gray text-center text-medium font-semibold text-gray-600'>
          {currentAffiliate.name},
        </p>
        <p className='text-gray text-center text-medium font-semibold text-gray-600'>
          {currentAffiliate.work}
        </p>
      </div>
      
      <div className='flex justify-center mt-10'>
        <button
          className='px-4 py-2 border border-black rounded-lg me-4'
          onClick={prevAffiliate}
        >
          <i className='fa-solid fa-arrow-left'></i>
        </button>
        <button
          className='px-4 py-2 border border-black rounded-lg'
          onClick={nextAffiliate}
        >
          <i className='fa-solid fa-arrow-right'></i>
        </button>
      </div>
    </div>
  );
}
