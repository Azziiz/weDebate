'use client'
import Article from '@/app/components/Article'
import Header from '@/app/components/Header'
import PlusButton from '@/app/components/PlusButton'
import { db } from '@/firebase'
import { collection, doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'

function page({params}) {

    const {id} = params
    const docRef = doc(collection(db, 'articles'), id)
    const [article, setArticle] = useState()
    useEffect(() => {

        const fetchData = async() => {
            const getdoc = await getDoc(docRef)
            setArticle(getdoc.data())
    
        }
    
        fetchData()

    }, [])

  return (
    <>
    <Header />
    <Article />
  <PlusButton />
    </>
  )
}

export default page