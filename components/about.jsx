import React from 'react'
import Link from 'next/link'
import { IoArrowForward } from 'react-icons/io5'

const About = () => {
  return (
    <div className="w-1/2 bg-blue-700 flex justify-center pt-3 w-full h-[405px] md:flex-col">
            <div className="grid items-center px-10">
               <h2 className="text-xl font-lg text-white text-center mb-4 ">WE CREATE CHANGE FOR REFUGEE YOUTH AND CHILDREN</h2>
               <p className="mb-8 text-yellow-400 text-md font-semibold">Behind every successful woman is a community that believes in her vision — we’re proud to be that support</p>
      
           
             <Link href={'/contact'}>  
                         <button className="bg-gradient-to-r 
                         from-white-500 to-slate-200 text-sm
                          px-6 
                         opacity-100  
                         rounded-sm text-white py-3
                         flex items-center gap-2
                         mb-6
    
                         transform transition-transform duration-100 hover:scale-125 hover:cursor-pointer
                         ">GET INVOLVED<IoArrowForward size={17}/>  </button>
                         </Link>
                          </div>
           
          
              
           </div>
  )
}

export default About