'use client'
import { useEffect, useState } from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Idea from "../components/Idea"
import MasonryLayout from "../components/MasonryLayout"
import PlusButton from "../components/PlusButton"
import { collection, getDocs } from "firebase/firestore"
import { db } from "@/firebase"


function page() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'ideas'));
        const documents = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setData(documents);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mt-32">
      <Header />
      <h1 className="text-sm  font-normal mb-9 text-center text-secondry  uppercase mt-10">the choosen topic</h1>
      <Hero className=' '/>
      <div className="min-h-screen bg-primary  flex items-center flex-col mt-5 m-2 ml-8 ">
        <h1 className="text-sm  font-normal mb-9 mt-12 text-secondry  uppercase">Debate Ideas</h1>
        <MasonryLayout>
          {data.map(article => 
            <Idea name={article.userName}   content={article.content} id={article.id} key={article.id}/>
          )}
        </MasonryLayout>
      </div>
      <PlusButton />
    </div>
  )
}

export default page