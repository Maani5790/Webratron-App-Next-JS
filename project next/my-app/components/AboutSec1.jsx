import React from 'react';
import Image from 'next/image';

const AboutSec1 = () => {
  return (
    <>
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-2xl mb-4 font-bold text-gray-900">Why Must Webratron Be Your Ultimate <br /> Solution for Web Designing?
      </h1>
      <p className="mb-8 font-medium">When converting website visitors into paying clients, it is crucial to have a <br /> well-designed, fully-functional website. Our staff is well-versed in creating <br /> unique e-commerce platforms, CMSs, website layouts, and rich responsive <br /> websites. Webratron has exceptional members with decades of combined <br /> expertise in various web solution areas. Webratron's staff is committed to <br /> bringing your ideas to life via our customized online solutions, and we have <br /> the skills to do it by maximizing the satisfaction of your end customers.</p>
      <p className="mb-8 font-medium">At Webratron, we believe that a great website should do more than just look <br />pretty. It should tell your story, engage your audience, and drive results.<br /> That's why we are the best choice for your web design needs.</p>
      
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2">
      <Image className="object-cover object-center rounded" width={717} height={543} alt="hero" src="/assets/about_sec.jpg"/>
    </div>
  </div>
</section>
    </>
  )
}

export default AboutSec1