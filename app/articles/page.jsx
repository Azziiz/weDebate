'use client'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import PlusButton from '../components/PlusButton'
import Articles from '../components/Articles'
import MasonryLayout from '../components/MasonryLayout'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/firebase'
function page() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'articles'));
        const documents = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setData(documents);
} catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div >
      <Header />
      <div className='mt-32 m-2 ml-8'>
        <MasonryLayout>
          {data.map(article => 
            <Articles name={article.userName} title={article.title} content={article.content} intro={article.intro} id={article.id} key={article.id}/>
          )}

        </MasonryLayout>
      </div>
      <PlusButton />
    </div>
  )
}

export default page