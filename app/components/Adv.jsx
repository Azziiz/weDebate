import Link from 'next/link'
import React from 'react'

function Adv() {
  return (
    <div className=" h-[130vh]  ">
    <div className="flex flex-col relative h-full lg:flex-row  justify-center bg-third">
        <div className="lg:flex-1 block relative bg-cover bg-center cursor-pointer self-center mb-10">
          <div className="relative inset-0 flex lg:items-center lg:justify-center mt-10">
            <div className="text-white text-start w-full lg:w-4/6 p-4 mt-14">
              <p className="text-[40px] font-black uppercase mb-[25px]">What you get</p>
              <p className="text-base font-normal mb-[30px]">Humans speak everyday, and we judge others by how well they speak and how they present themselves.</p>
              <p className="text-base font-normal mb-[30px]">That’s why speaking is so crucial for a successful life. Speaking can make or break your overall image depending on how well you speak.</p>
              <p className="text-base font-normal mb-[26px]">The goal of WE DEBATE is to make you that charismatic speaker who people perceive as an important and confident person.</p>
              <Link href='sign-in'>
                <button className="uppercase text-secondry text-sm font-normal bg-transparent border-secondry border   w-[165px] h-[50px] hover:border-white hover:text-white transition-all duration-300">join the club</button>                
              </Link>
            </div>
          </div>
        </div>

        <div className="flex-1 relative bg-cover bg-center cursor-pointer" style={{ backgroundImage: 'url("/cover3.jpg")' }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
    </div>
  </div>
  )
}

export default Adv