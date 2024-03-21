'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const PlusButton = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);

      // Clear the timeout to reset the spinning when scrolling
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => setIsScrolling(false), 200); // Adjust the timeout as needed
    };

    let scrollTimeout;

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Link href='/post'
      className={`fixed flex items-center justify-center bottom-8 right-8 w-10 h-10 rounded-md bg-secondry text-white text-lg hover:scale-110 transition-all cursor-pointer ${
        isScrolling ? 'rotate-12' : ''
      }`}
    >
      +
    </Link>
  );
};

export default PlusButton;