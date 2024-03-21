import React from 'react'
import Circle from '../components/Circle'
import Header from '../components/Header'
import PlusButton from '../components/PlusButton'

function page() {
  return (
    <div className=''>
        <Header className='bg-third' />
        <Circle />
        <PlusButton />
    </div>
  )
}

export default page