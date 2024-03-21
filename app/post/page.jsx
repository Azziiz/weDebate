import React from 'react'
import Post from '../components/Post'
import Header from '../components/Header'
import PlusButton from '../components/PlusButton'

function page() {
  return (
    <div className='mt-32'>
        <Header />
        <Post className='m-4'/>
        <PlusButton />
    </div>
  )
}

export default page