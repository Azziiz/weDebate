import Link from 'next/link'
import React from 'react'

function RegularDebates() {
  return (
    <div className=" h-[140vh]  mt-[90px] ">
      <div className="flex flex-col relative h-[80%] lg:flex-row  justify-center">
          <div className="lg:flex-1 block relative bg-cover bg-center cursor-pointer bg-third ">
            <div className="relative inset-0 flex lg:items-center lg:justify-center mt-10 mb-10">
              <div className="text-white text-start w-full lg:w-4/6 p-4">
                <p className="text-sm font-normal mb-[10px] uppercase">it’s called</p>
                <p className="text-[40px] font-black uppercase mb-[20px]">we debate</p>
                <p className="text-base font-normal mb-[20px]">Debating is our weekly activity in which we practice our speaking skills.</p>
                <p className="text-base font-normal mb-[20px]">This activity is so crucial because in life you must convince a person or a group of people to get what you want ( scores, money, help ). When debating weekly and constantly trying to convince he judge, you gain precious speaking skills, and you become a master at convincing and winning people to your side.</p>
                <p className="text-base font-normal mb-[40px]">This is the game we play and we love it, because we see its impact on our lives.</p>
                <Link href='sign-in'>
                  <button className="uppercase text-secondry text-sm font-normal bg-transparent border-secondry border   w-[165px] h-[50px] hover:border-white hover:text-white transition-all duration-300">join the club</button>                
                </Link>
              </div>
            </div>
          </div>

          <div className="flex-1  relative bg-cover bg-center cursor-pointer" style={{ backgroundImage: 'url("/cover3.jpg")' }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
      </div>

      <div className="flex flex-col relative h-[70%] lg:flex-row  justify-center">
          <div className="flex-1 relative bg-cover bg-center cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center mt-10">
              <div className="text-white text-start w-1/2 ">
                <p className="text-[40px] font-black uppercase mb-[40px]">The rules of our debates</p>
              </div>
            </div>
          </div>

          <div className="lg:flex-1 block relative bg-cover bg-center bg-third">
            <div className="relative inset-0 flex items-center justify-center mt-10">
              <div className="text-white text-start w-full lg:w-4/6  pb-0 p-4 ">
                <p className="text-base font-normal mb-[20px]">we chose a topic.</p>
                <p className="text-base font-normal mb-[20px]">we form 2 groups (government and opponent) of three speakers, each group has an opinion to protect.</p>
                <p className="text-base font-normal mb-[20px]">we pick a judge, and someone for the timer.</p>
                <p className="text-base font-normal mb-[20px]">Speaker 1 of the government home stands up to introduce himself and his group, then he starts to present his arguments for 5 minutes.</p>
                <p className="text-base font-normal mb-[20px]">The opponent home can not interrupt him unless someone asks for a point of information to ask a question or make a comment in 10 seconds. The speaker has the choice to refuse the request.</p>
                <p className="text-base font-normal mb-[20px]">And the cycle repeats with the opponent home.</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default RegularDebates