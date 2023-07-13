import React from 'react';
import './AboutSec.css';
import Navbar from '../Navbar/Navbar';

function Hero() {
  return (
 <>
 <div>
 <Navbar />
 <div className='hero-section font-abc bg-black text-white'>
      <div className='hero-bg-image'></div>
      <div className='hero-content'>
        <h1>ABOUT US</h1>
        <p>With A Focus On Clean, Modern, And User-Friendly Designs, And A Commitment <br /> To Ongoing Support And Maintenance, You Can Trust Us To Help You Achieve <br /> Your Online Goals And Make A Lasting Impression On Your Audience.</p>
      </div>
    </div>
 </div>
 </>
  );
}

export default Hero;