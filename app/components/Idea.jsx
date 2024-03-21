import { db } from '@/firebase'
import { useUser } from '@clerk/nextjs'
import { addDoc, collection, deleteDoc, getDocs } from 'firebase/firestore'
import Image from 'next/image'
import React from 'react'
import { TiPin } from 'react-icons/ti'

 function Idea({name, content}) {

  const {user} = useUser()

  const makeHero = async (idea, maker) => {

    const docRef = await addDoc(collection(db, "heros"), {
      content: content,
      maker: maker,
      createdAt: new Date()
    });
    return docRef;
  };


  return (
    <div className="max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl bg-third shadow-lg rounded-lg p-6 text-justify m-2 flex flex-col mb-5 relative">
      {user?.publicMetadata?.admin === true &&
              <div className="absolute top-0 left-0 w-full h-full -mr-3 -mt-3 text-orange-500 flex justify-end opacity-0 hover:opacity-100 transition-opacity duration-200 ">
                <TiPin size={30}  className='-mr-3 hover:scale-110 duration-200' onClick={() => {makeHero(content, name)}}/>
              </div>
      }
    <p className="mb-4">{content}</p>
    <div className="flex items-center  justify-end">
      <span className="font-normal text-sm ">{name}</span>
    </div>

  </div>
  )
}

export default Idea