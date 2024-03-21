import React from 'react'
import Header from '../components/Header'
import PlusButton from '../components/PlusButton'
import RegularDebates from '../components/RegularDebates'

function page() {
  return (
    <div className=''>
        <Header />
        <RegularDebates />
        <PlusButton />
    </div>
  )
}

export default page