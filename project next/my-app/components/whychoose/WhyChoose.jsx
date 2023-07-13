import React from 'react'
import Image from 'next/image'

const WhyChoose = () => {
    return (
        <>
            <div className='mt-10 font-abc bg-[#050d28] text-white shadow-xl shadow-red-500'>
                <h1 className='m-10 text-center font-bold text-3xl'>Why Choose Webratron For Custom <br />
                    Web Design And Development:</h1>
                <p className=' text-xl font-normal text-center'>A responsive website design unique to your product, service, or business is key to your <br /> success. We, with our exceptional and glitchless web design and development services, <br /> completely ensure your success. Webratron works best to develop a distinctive, efficient, and <br /> user-friendly website just for you.</p>

            </div>
            <div className='shadow-xl shadow-red-500 flex justify-center space-x-28 font-abc bg-[#050d28] text-white '>
                <div>
                    <Image  src="/assets/web-development-2.png" alt='pic' height={248} width={300} />
                    <h1 className='text-2xl text-center mt-8'>WEB DEVELOPMENT</h1>
                </div>
                <div>
                    <Image src="/assets/LOGO DESIGNING.png" alt='pic' height={260} width={276} />
                    <h1 className='text-2xl text-center mt-8'>LOGO DESIGNING</h1>

                </div>
                <div>
                    <Image src="/assets/APP DEVELOPMENT.webp" alt='pic' height={266} width={300} />
                    <h1 className='text-2xl text-center mt-8'>APP DEVELOPMENT</h1>

                </div>
            </div>
        </>
    )
}

export default WhyChoose