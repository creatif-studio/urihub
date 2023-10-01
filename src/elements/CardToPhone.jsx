import React from 'react'
import { Link } from 'react-router-dom'

export default function CardToPhone({name, url}) {
  return (
    <div className='bg-white text-center p-1'>
      <Link to={url} target="_blank">
        <p>{name}</p>
      </Link>
    </div>
  )
}
