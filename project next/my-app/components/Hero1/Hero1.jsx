import React from 'react';
import "./Hero1.css";
import Script from 'next/script';
import Image from 'next/image';

const Hero1 = () => {
  return (

<>
<Script
        src="/scripts/script1.js"
        strategy="lazyOnload"
      ></Script>
<ul className="gallery">
            <li>
                <div>
                  <Image src="/assets/1.png" width={219} height={98} alt="pic" />
                </div>
            </li>
            <li>
                <div>
                <Image src="/assets/1.png" width={219} height={98} alt="pic" />

                </div>
            </li>
            <li>
                <div>
                <Image src="/assets/1.png" width={219} height={98} alt="pic" />

                </div>
            </li>
            <li>
                <div>
                <Image src="/assets/1.png" width={219} height={98} alt="pic" />

                </div>
            </li>
        </ul>

</>
    )
}

export default Hero1