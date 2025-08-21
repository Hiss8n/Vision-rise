'use client'
import Image from "next/image";
import Link from "next/link";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { IoArrowForward } from "react-icons/io5";

export default function Testimonials() {

  useGSAP(()=>{
    gsap.to("#test2",{
      x:0,
      //rotate:360,
      skewX:180,
      duration:10,
      repeat:-1,
      stagger:.5,
      stagger:{
        amount:0.5,
        grid:[2,1],
        axis:'x',
        from:'edges',
        ease:'in.Out'
      }
    })
  },[])
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      image: "/image01.jpg",
      comment: "Absolutely loved my stay! The ocean view was breathtaking and the staff was incredibly friendly.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Lee",
      image: "/image02.jpg",
      comment: "Best hotel experience I've had. The room was spotless, and breakfast was delicious.",
      rating: 4
    },
    {
      id: 3,
      name: "Emily Carter",
      image: "/p1.jpg",
      comment: "Perfect location, cozy rooms, and great service. Highly recommend for a relaxing getaway.",
      rating: 5
    }
  ];

 

  return (
    <section className="px-12">
              <div className='text-center text-sm text-red-600  py-12 md:flex-left md:text-xl py-6 bg-slate-100'>
            SUPPORT WOMEN ENTREPRENUERSHIP
        </div>
       
 
      <div className="w-full md:flex md:items-center md:justify-center">
           
      
            <div className="w-1/2 bg-blue-700 flex justify-center pt-3 w-full h-[405px] md:flex-col">
            <div className="grid items-center px-10">
               <h2 className="text-xl font-lg text-white text-center mb-4 ">HOW TO HELP WOMEN AND GIRLS</h2>
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
            <div className="w-1/2 flex items-center w-full h-[200px]">
            <Image
            src='/women.jpg'
            width={540}
            height={580}
      
            />
      
            </div>
      
      
          </div>
             </section>
   
  
  );
}
