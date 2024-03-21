'use client'
import { currentUser, useUser } from "@clerk/nextjs";
import { TiPin } from "react-icons/ti";
import { FaUserPlus } from "react-icons/fa";
import { FaUserMinus } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { useEffect, useState } from "react";
import { addDoc, collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase";

function Hero() {

    const {user} = useUser()
    const [hero, setHero] = useState()

    useEffect(() => {

      const getDOCS = async() => {
        const snapshot = await getDocs(query(collection(db, 'heros'), orderBy('createdAt', 'desc'), limit(1)))
        setHero(snapshot.docs[0].data())
      }
      getDOCS()
    },[])


 
    return (
        <div className="flex flex-col items-center justify-center min-h-96 text-justify m-4 ">
          <div className="w-full sm:w-4/5 md:w-3/5 lg:w-2/3 xl:w-1/2 bg-third shadow-lg rounded-lg p-6 relative ">

            {/* Pin icon in the top right corner */}
            <div className="absolute top-0 right-0  -mr-3 -mt-3 text-orange-500">
              <TiPin size={30}  />
            </div>
    
            {/* Profile Avatar and Name */}
            <div className="flex items-center gap-2">
              {/* Replace these with your actual icon components or images */}
              <div className="flex items-center" >
                <FaUserPlus className="mx-2 text-secondry hover:scale-110 transition-transform hover:cursor-pointer" size={15}/>
                <p className="pr-1 font-normal  text-xs">0/3</p>
              </div>
              <div className="flex items-center">
                <FaUserMinus className="mx-2 text-secondry hover:scale-110 transition-transform hover:cursor-pointer" size={15}/>
                <p className="pr-1 font-normal  text-xs">0/3</p>
              </div>
              <div className="flex items-center">
                <FaUserTie  className="mx-2 text-secondry hover:scale-110 transition-transform hover:cursor-pointer" size={13}/>
                <p className="pr-1 font-normal  text-xs">0/1</p>
              </div>
            </div>
    
            {/* Text in the middle */}
            <div className="my-6">
              <p className="text-md">
                {hero?.content}
              </p> 
            </div>
    
            {/* Three icons always at the bottom right corner */}


            <div className="flex  items-center flex-row justify-end">
              <div className="text-center ml-1">
                <p className="font-normal text-sm">{hero?.maker}</p>
              </div>
            </div>
  
          </div>
        </div>
      );
    
}

export default Hero