'use client'
import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Header from '../components/Header';

const PageFlip = dynamic(() => import('react-pageflip'));

function BookFlip() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center">
        <h1>NOT READY</h1>
      </div>
    </>
  );
}

export default BookFlip;