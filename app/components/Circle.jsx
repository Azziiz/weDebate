import Link from 'next/link'
import React from 'react'

function Circle() {
  return (
    <div className=" h-[130vh]">
      <div className="flex flex-col relative h-full lg:flex-row  bg-third">
          <div className="lg:flex-1 block relative  bg-third bg-cover bg-center self-center mb-10">
            <div className="relative inset-0 flex lg:items-center justify-center mt-10 sm:flex-col">
              <div className="text-white text-start  w-full lg:w-4/6 p-4 mt-14 ">
                <p className="text-sm font-normal mb-[10px] uppercase">the famous</p>
                <p className="text-5xl font-black uppercase mb-[40px]">circle</p>
                <p className="text-base font-normal mb-[30px]">The circle is a public speaking competition in which participants should speak for 3 to 5 minutes on any topic of their choice.</p>
                <p className="text-base font-normal mb-[50px]">This event is organized yearly. It is one of the most famous events of our club and it reflects our hard work and the effort we put in developing our skills</p>
                <Link href='sign-in'>
                  <button className="uppercase text-secondry text-sm font-normal bg-transparent border-secondry border   w-[165px] h-[50px] hover:border-white hover:text-white transition-all duration-300">join the club</button>                
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:flex-1 block relative bg-cover bg-center cursor-pointer h-full" style={{ backgroundImage: 'url("/cover3.jpg")' }}>
            <div className="relative inset-0 bg-black opacity-50"></div>
          </div>
      </div>
    </div>
  )
}

export default Circle