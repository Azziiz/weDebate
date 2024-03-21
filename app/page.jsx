import Image from "next/image";
import Header from "./components/Header";
import PlusButton from "./components/PlusButton";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-0 h-screen  ">
      <Header className='bg-transparent'/>
      {/*first col*/}
      <div className="relative h-full bg-cover bg-center" style={{ backgroundImage: 'url("/cover.jpg")' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-center flex flex-col gap-6 items-center">
              <h1 className="text-xl font-black uppercase">THE MOST FUN WAY TO IMPROVE</h1>
              <Link href='/sign-in'>
               <button className="uppercase text-secondry text-sm font-normal bg-transparent border-secondry border   w-[165px] h-[50px] hover:border-white hover:text-white transition-all duration-300">join the club</button>
              </Link>            
            </div>
        </div>
      </div>
      {/*second col*/}
      <div className="flex flex-col relative h-5/6 lg:flex-row lg:h-[74%] ">
        <div className="flex-1 relative bg-cover bg-center cursor-pointer" style={{ backgroundImage: 'url("/circle-cover.png")' }} >
          <Link href='the-circle'>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-center">
                <h1 className="text-xl font-black uppercase hover:scale-105  transition-all ">the circle</h1>
              </div>
            </div>
          </Link>
        </div>

      <div className="flex-1 relative bg-cover bg-center cursor-pointer" style={{ backgroundImage: 'url("/cover3.jpg")' }}>
        <Link href='regular-debates'>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-center">
              <h1 className="text-xl font-black uppercase hover:scale-105  transition-all">the regular debates</h1>
            </div>
          </div>
        </Link>
      </div>
      </div>
      {/*third col*/}
      <div className="flex flex-col relative h-5/6 lg:flex-row lg:h-[74%]">
      {/* Left Image with Text */}
      <div className="flex-1 relative bg-cover bg-center cursor-pointer" style={{ backgroundImage: 'url("/magazine-cover.png")' }}>
        <Link href='/magazine'>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-center">
            <h1 className="text-xl font-black uppercase hover:scale-105  transition-all">the magazine</h1>

            </div>
          </div>
        </Link>
      </div>

      {/* Right Image with Text */}
      <div className="flex-1 relative bg-cover bg-center cursor-pointer" style={{ backgroundImage: 'url("/articles-cover.png")' }}>
        <Link href='/articles'>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-center">
              <h1 className="text-xl font-black uppercase hover:scale-105  transition-all">articles</h1>
            </div>
          </div>
        </Link>
      </div>
      </div>
      {/*forth col*/}
      <div className="relative h-[74%] bg-cover bg-center bg-primary" >
        <div className="absolute inset-0"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            
            <div className="text-white text-center">
              <p className="mb-[11px] text-sm font-normal uppercase">what’s in it</p>
              <p className="mb-[12px] text-[40px] font-black uppercase">for you.</p>
              <p className="mb-[20px] text-base font-normal ">what you gain from joining we debate</p>
              <Link href='/adv'>
                <button className="uppercase text-secondry text-sm font-normal bg-transparent border-secondry border   w-[165px] h-[50px] hover:border-white hover:text-white transition-all duration-300">learn more</button>
              </Link>
            </div>
        </div>
      </div>
      {/*fifth col*/}
      <div className="flex flex-col relative h-5/6 lg:flex-row lg:h-4/6">
      <div className="flex-1 relative bg-cover bg-center" style={{ backgroundImage: 'url("/cover2.png")' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="flex-1 relative bg-cover bg-center bg-third">
        <div className="absolute inset-0"></div>
        <div className="absolute inset-0 flex items-center justify-start p-12">
        <div className="text-white">
              <p className="mb-[11px] text-sm font-normal uppercase">what we think about</p>
              <p className="mb-[12px] text-[40px] font-black uppercase">the club</p>
              <p className="mb-[20px] text-base font-normal ">Take a look at our experiences inside the club</p>
              <button className="uppercase text-secondry text-sm font-normal bg-transparent border-secondry border   w-[165px] h-[50px] hover:border-white hover:text-white transition-all duration-300">learn more</button>
            </div>
        </div>
      </div>
      </div>
      <PlusButton />
    </div>
  );
}
