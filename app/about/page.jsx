import React from 'react'
import Link from 'next/link'

import Image from 'next/image'

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Cover Section */}
      <div className="relative w-full h-[100vh]">
        <Image 
          src="/image05.jpg" 
          alt="About Cover" 
          width={600}
          height={650}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center top-90">
          <h1 className="text-2xl md:text-6xl font-bold text-white">
            ABOUT US
          </h1>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 py-10 space-y-6">
        <span className='border-5-red-400 border-top-4'>
             <h4 className='sub__title relative text-3xl py-8'>WHAT WE DO</h4> 
             </span>
       
        <p>
           <span className='text-lg text-black font-semibold' > We support women entrepreneurship </span>in Kakuma, helping women build sustainable businesses and create 
           opportunities for themselves and their families.
        </p>
        <p>
             <span className='text-lg text-black font-semibold' > We teach digital skills to the youth </span>   , empowering them with knowledge and tools that open doors to innovation, 
              employment, and a brighter future.
        </p>
        <p>
            <span className='text-lg text-black font-semibold' >  We provide a safe learning environment</span> We provide a safe learning environment for refugees, displaced persons, and war-affected children in Sudan and the Kakuma refugee camp, 
            ensuring that education remains a source of hope and resilience.
        </p>
      </div>

    
      <div className="max-w-3xl mx-auto px-4 py-10 space-y-6">
        <span className='border-5-red-400 border-top-4'>
             <h4 className='sub__title relative text-3xl py-8'>WHERE WE ARE LOCATED</h4> 
             </span>
       
        <p>
           📌 We are proud to have a presence in Kakuma, Juba, and Sudan, where we work closely with communities to bring meaningful solutions that create real impact.
           Our journey began with the belief that growth and 
          opportunities should be accessible to everyone, no matter where they are.
        </p>
        <p>
              📌In Kakuma Refugee Camp, our work focuses on uplifting and supporting communities through innovation, empowerment, and collaboration.
          In Juba, we continue to expand our initiatives by building strong partnerships that foster creativity, resilience, and sustainable progress.
        </p>
        <p>
            📌Across Sudan, we are committed to driving positive change, creating opportunities, and making a difference in people’s lives.
           Every step we take is guided by our mission to serve, grow, and contribute to a brighter future for the communities we call home.
        </p>
      </div>
      
            
    </div>


           
       
         
  )
}

export default AboutPage