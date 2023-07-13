import React from 'react';
import Image from 'next/image';

const Aboutsec3 = () => {
  return (
    <>
    <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">OUR INNOVATIVE AND TECHNOLOGICAL <br /> CAPABILITIES

      </h1>
      <p class="mb-8 leading-relaxed">Creativity and innovation are the key winning elements in which Webratron <br /> takes pride. Being an innovator, our technological capabilities primarily lie in <br /> complete website design to a more sophisticated, business-oriented <br /> software application development.</p>
      <p>We are technology solutions providers that help our clients improve their <br />performance with our applications and website development.</p>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image class="object-cover object-center rounded" width={717} height={543} alt="hero" src="/assets/about_sec-2.jpg"/>
    </div>
  </div>
</section>
    </>
  )
}

export default Aboutsec3