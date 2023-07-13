import React from 'react';
import './Tests.css';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '../Hero/Hero';

function Tests() {
  return (
   <>
   <div>
   <header className="bg-[#061030]  text-white font-abc body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Image className='space-x-10' src="/assets/logo-final.png" width={220} height={35} alt='pic' />
    <nav className="md:mr-auto space-x-20 md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <Link href="/" className="mr-5 hover:text-gray-900">+1(516)386 4254</Link>
      <Link href="/" className="mr-5 hover:text-gray-900">Chat To Avail 50% Of</Link>
      <button className="inline-flex items-center text-white bg-blue-950 border-0 py-4 px-5 focus:outline-none  rounded text-base mt-4 md:mt-0">Get A Quote
    </button>
      <Link href="/" className="mr-5 hover:text-gray-900">Suppot@webraton.com</Link>
      
    </nav>
    
  </div>
</header>
<header className="text-white bg-[#040a22] body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 space-x-10 	flex flex-wrap items-center text-base justify-center">
      <Link href="/" className="mr-5 hover:text-gray-900">Home</Link>
      <Link href="/" className="mr-5 hover:text-gray-900">About</Link>
      <Link href="/" className="mr-5 hover:text-gray-900">Portfolio</Link>
      <Link href="/" className="mr-5 hover:text-gray-900">Services</Link>
      <Link href="/" className="mr-5 hover:text-gray-900">Contact</Link>
    </nav>
    
  </div>
</header>
   <div className='hero-section font-fam bg-black text-white'>
      <div className='hero-bg-image'></div>
      <div className='hero-content'>
        <Hero />
      </div>
    </div>
   </div>
   </>
  );
}

export default Tests;