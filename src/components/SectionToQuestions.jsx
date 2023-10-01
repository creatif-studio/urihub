import React, { useState } from 'react';
import Questions from '../mocks/questions.json';

export default function InputDropdown() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  return (
    <div className='bg-red-700 container mx-auto px-32'>
      <p className='text-4xl font-bold text-center text-red-300 mb-10'>Got questions?</p>
      {Questions.map((data, index) => (
        <div key={index} className="mb-4">
          <button
            id={`dropdownButton-${index}`}
            onClick={() => toggleDropdown(index)}
            className={`font-bold text-white bg-red-800 text-lg px-5 py-2.5 text-center inline-flex items-center w-full ${
              activeDropdown === index ? 'rounded-t-lg' : 'rounded-lg'
            }`}
            type="button"
          >
            <div className="flex justify-between w-full">
              <span>{data.title}</span>
              <svg
                className={`w-2.5 h-2.5 transform ${activeDropdown === index ? 'rotate-180' : ''}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </div>
          </button>

          <div
            id={`dropdown-${index}`}
            className={`z-10 transition-max-height ease-in-out duration-300 max-h-0 overflow-hidden bg-red-800 divide-y divide-red-700 ${
              activeDropdown === index ? 'rounded-b-lg' : 'hidden'
            } shadow w-full ${activeDropdown === index ? 'max-h-screen' : ''}`}
          >
            <ul className="py-2 text-sm text-white" aria-labelledby={`dropdownButton-${index}`}>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2"
                >
                  {data['first-content']}
                </a>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
