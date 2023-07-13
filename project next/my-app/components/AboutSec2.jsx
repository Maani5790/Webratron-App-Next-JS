import React from 'react';
import Image from 'next/image';

const AboutSec2 = () => {
  return (
    <>
    <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 mb-10 md:mb-0">
      <Image class="object-cover object-center rounded" width={717} height={543} alt="hero" src="/assets/about_sec-1.jpg"/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">OUR ASPIRATIONS
      </h1>
      <p class="mb-8 leading-relaxed">Getting hands-on opportunities and sharing them with the team is what <br /> Webratron believes in. Letting our team unlock their potential by sharing <br /> options is the secret to our constant improvement.</p>
    </div>
  </div>
</section>
    </>
  )
}

export default AboutSec2