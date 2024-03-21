'use client'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { UserButton } from '@clerk/nextjs';

function Header() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const pathname = usePathname();
  const navRef = useRef(null);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  // Add a useEffect hook to listen for scroll events
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Update isTop state based on scroll position
      setIsTop(scrollY === 0);
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);


 

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };


  }, []);


  

  return (
    <nav
    className={`${ pathname == '/the-circle' || pathname == '/adv' || pathname == '/regular-debates' || pathname == '/magazine'? 'bg-third' :
      isTop ? 'bg-transparent p-2' : 'bg-third'
    } p-4 fixed top-0 w-full z-50 transition-all duration-300 `}
    ref={navRef}
  >
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Section: Logo */}
        <Link href='/'>
          <div className="flex items-center">
            <Image src="/logo.png" alt="Logo" width={60} height={60}  />
          </div>
        </Link>

        {/* Center Section: Pages Names (Hidden on small screens) */}
        <div className="hidden lg:flex flex-grow items-center justify-center gap-6 uppercase">
          <Link href="/" className={` px-1 hover:text-secondry  ${pathname == '/' ?  'text-secondry border-b-2 border-secondry border-solid' : 'text-white'}`}>
            Home
          </Link>
          <Link href="/articles" className={` px-1  hover:text-secondry  ${pathname == '/articles' ? ' text-secondry border-b-2 border-secondry border-solid' : 'text-white'}`}>Articles</Link>
          <Link href="/nextDebate" className={` px-1 hover:text-secondry  ${pathname == '/nextDebate' ? ' text-secondry border-b-2 border-secondry border-solid' : 'text-white'}`}>Next debate</Link>
        </div>

        {/* Right Section: Sign In Button (Always Visible) */}
        <div className='flex items-center'>
          <button className="lg:hidden text-white mr-4" onClick={toggleSidebar}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          
          <UserButton />
                  </div>
      </div>

      {/* Sidebar (Visible on small screens when toggled) */}
      {showSidebar && (
        <div className="lg:hidden fixed inset-0 bg-primary bg-opacity-90 z-50 flex flex-col">
          <div className="flex justify-end p-4">
            <button className="text-white" onClick={toggleSidebar}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center h-screen gap-4 justify-center mb-28">
            <Link href="/" className={` px-1 hover:text-secondry  ${pathname == '/' ? 'text-secondry border-b-2 border-secondry border-solid' : 'text-white'}`}>
              Home
            </Link>
            <Link href="/articles" className={` px-1 hover:text-secondry  ${pathname == '/articles' ? 'text-secondry border-b-2 border-secondry border-solid' : 'text-white'}`}>Articles</Link>
            <Link href="/nextDebate" className={` px-1 hover:text-secondry  ${pathname == '/nextDebate' ? 'text-secondry border-b-2 border-secondry border-solid' : 'text-white'}`}>Next debate</Link>
            {/* Add more links as needed */}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;