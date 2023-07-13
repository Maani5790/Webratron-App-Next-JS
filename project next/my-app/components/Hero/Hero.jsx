import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
  <>
  <section className="text-white hero-bg-image bg-[#050d28]  font-abc body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-4xl mb-4 font-medium text-white">PERSONALIZE YOUR WEBSITE WITH WEBRATRON,
      </h1>
      <h1 className="text-6xl font-extrabold">Exceptional services <br />
      delivered timely</h1>
      <p className='mt-10 mb-10'>Experience A Glitchless Process With Webratron, Where Our Experts Deliver Your Customized Web Design Services In 24 Hours, Be It An E-Commerce Store, Portfolio, Blog, Or Informative Website.</p>
      <div className='flex justify-between space-x-20'>
        <div>
          <ul className='main-point '>
            <li className='mb-3'>User-friendly design</li>
            <li className='mt-3'>Business Website for just $599.9</li>
            <li className='mt-3'>Attractive UI and UX</li>
            <li className='mt-3'>Revenue-boosting strategies from <br /> experts</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className='mb-3'>Web mobile browsing interface <br /> adaptability and universal support</li>
            <li className='mt-3'>Every OS supported</li>
            <li className='mt-3'>100% customer satisfaction</li>
            <li className='mt-3'>Custom website development</li>
          </ul>
        </div>
      </div>
      <div className='flex  justify-center space-x-10 mt-10 mb-10'>
      <Image  src="/assets/1.webp" width={200} height={50} alt='pic' />
      <Image src="/assets/2.webp" width={300} height={85} alt='pic' />
      <Image src="/assets/3.webp" width={260} height={85} alt='pic' />
      <Image src="/assets/4.webp" width={259} height={84} alt='pic' />
     
    </div>
    </div>
   
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image  className="object-cover object-center rounded" width={1122} height={1208} alt="hero" src="/assets/banner_af.webp"/>
    </div>
  </div>
</section>
  </>
  )
}

export default Hero