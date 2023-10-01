import React from 'react'
import { context } from '../../context/Context'

export default function LinkProduction() {
  const { user, link } = context()
  console.log(user, link);
  return (
    <div>LinkProduction</div>
  )
}
