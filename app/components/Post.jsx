'use client'
import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { FieldValue, addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase";
import {useRouter} from 'next/navigation'

const addIdea = async (name, photo, content) => {
  const docRef = await addDoc(collection(db, "ideas"), {
    userName: name,
    content: content,

  });
  return docRef;
};

const addArticle = async (name, content, title, intro) => {
  const docRef = await addDoc(collection(db, "articles"), {
    userName: name,
    intro: intro,
    content: content,
    title: title
  });
  return docRef;
};

export default function Post() {
  const [type, setType] = useState('article');
  const [title, setTitle] = useState('');
  const [intro, setIntro] = useState('')
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const {user} = useUser()

  const router = useRouter()

  const handleTypeChange = (newType) => {
    setType(newType);
  };

  

  return (
    <div className="min-h-screen flex flex-col items-center p-4" >
      <div className="bg-third p-8 rounded-md shadow-md  w-full max-w-md">
        <div className="mb-4">
          <label className="block text-white font-normal text-sm mb-2">
            Type:
          </label>
          <div className="flex my-4 gap-4">
            <label className={` font-normal text-sm uppercase px-1 hover:text-secondry  ${type === 'article' ? ' text-secondry border-b-2 border-secondry border-solid' : 'text-white'}`}  onClick={() => setType('article')}>
              Article
            </label>
            <label className={` font-normal text-sm uppercase px-1 hover:text-secondry  ${type === 'idea' ? ' text-secondry border-b-2 border-secondry border-solid' : 'text-white'}`} onClick={() => setType('idea')}>
              Debate Idea
            </label>
          </div>
        </div>

        {type === 'article' ? (
          <>
            <div className="mb-4">
              <label className="block text-white font-normal text-sm mb-2">
                Title:
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded-md bg-third "
                maxLength={100}
                
              />
              <p className="text-right text-white font-normal  text-sm">
                {title.length}/100
              </p>
            </div>

            <div className="mb-4">
              <label className="block text-white font-normal text-sm mb-2">
                Introduction:
              </label>
              <textarea
                value={intro}
                onChange={(e) => setIntro(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded-md h-40 bg-third"
                
              />
            </div>

            <div className="mb-4"><label className="block text-white font-normal text-sm mb-2">
                Content:
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded-md h-40 bg-third"
                
              />
            </div>

            <div className="mb-4">
              <label className="block text-white font-normal text-sm mb-2">
                Image URL:
              </label>
              <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded-md bg-third"
              />
              <button
                className="border border-secondry bg-secondry text-white py-2 px-4 mt-4 rounded-md hover:border-white hover:bg-transparent transition-all w-full"
                onClick={() =>  {addArticle(user.fullName, content, title, intro); router.push('/articles')}}
              >
                Submit
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="mb-4">
              <label className="block text-white font-normal text-sm mb-2">
                Content:
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded-md h-40 bg-third"
                maxLength={500}
              />
              <p className="text-right text-white font-normal text-sm">
                {content.length}/500
              </p>
              <button
                className="border border-secondry bg-secondry text-white py-2 px-4 mt-4 rounded-md hover:border-white hover:bg-transparent transition-all w-full"
                onClick={() =>  {addIdea(user?.fullName, user?.imageUrl, content); router.push('/nextDebate')}}

              >
                Submit
              </button>
            </div>
          </>
        )}

 
      </div>
    </div>
  );
}

