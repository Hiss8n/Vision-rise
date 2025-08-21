'use client'
import Link from 'next/link'
import { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { IoHeartSharp, IoMenuSharp } from "react-icons/io5";
import Image from 'next/image';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';





const Navbar = () => {



  const [toggleMenu, setToggleMenu] = useState(false);

  useGSAP(()=>{
    gsap.to("#heart",{
      rotationY:180,
      yoyo:true,
      repeat:-1,
      duration:3,
      
    })
  })


  return <nav className='w-full  py-2 px-2 z-1  bg-slate-100 border-b-1 border-red-700 fixed   '>
    
    <div className='flex items-center  justify-between px-0 lg:px-2 w-full'>
     
      <div className='  pl-5 flex justify-between items-center  lg:ml-8 '>
       <Image src='/VRAfrica.png' width={50} height={50} alt='logo' className='rounded-full md:w-20  ' />
       </div>

      <div className='flex  items-center '>

        <div className='hidden flex  items-center  md:block md:gap-3'>
          <ul className='flex gap-4'>
            <li> 
               <Link href={"/"} className='navbar__links relative mr-4  font-bold'>HOME</Link>
            </li>
            <li>
                        <Link href={"/about"} className='navbar__links relative mr-4 text-gray-150 font-bold'>ABOUT</Link>

            </li>
            <li>
              <Link href={"/contact"} className='navbar__links relative mr-4 text-gray-150 font-bold'>CONTACT</Link>

            </li>
            <li>
              
          <Link href={"#"} className='navbar__links relative mr-4 text-white bg-red-500 border-5-red-400 px-6 py-3 text-gray-150 font-bold flex items-center gap-4'> <IoHeartSharp size={30} color='white' id='heart'/>   DONATE</Link>
            

            </li>
          </ul>

         

          
         

        </div>
        {/* humbarugar menu */}
        <div className='md:hidden' >


          {/*  { toggleMenu ?  ( <RxCross2 size={16}/>):(<IoMenuSharp size={16}/>) } */}
          <Sheet>
            <Sheet>
              <SheetTrigger><IoMenuSharp size={22} color='#464343ff' /></SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle><p className='text-sm text-green-500 font-bold pl-0 -ml-2 font-bold'>Tunda</p></SheetTitle>
                  <SheetDescription>

                    <ul className='flex-col gap-6 h-[70%]'>

                      <li className='flex justify-between mb-2  mt-3'>
                        <Link href={"/"} className=' text-red-700 font-bold'>HOME</Link>
                        <IoIosArrowForward size={16} color='#807d7dff' />

                      </li>
                      <li className='flex justify-between mb-2'>
                        <Link href={"#"} className='text-gray-150 font-bold'>ABOUT</Link>
                        <IoIosArrowForward size={16} />

                      </li>
                      <li className='flex justify-between mb-2'>
                        <Link href={"/contact"} className='text-gray-150 font-bold'>CONTACT</Link>
                        <IoIosArrowForward size={16} />

                      </li>
                      <li className='flex justify-between '>
                        <Link href={"#"} className='text-gray-150 font-bold'>LOCATION</Link>
                        <IoIosArrowForward size={16} />


                      </li>

                    </ul>





                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </Sheet>


          {/* <div className='w-[70px] h-[100vh]'>

              <ul>
                <li><Link href={'/'}>HOME</Link></li>
                <li><Link href={'/'}>ABOUT</Link></li>
                <li><Link href={'/'}>CONTACT</Link></li>
                <li><Link href={'/'}>LOCATION</Link></li>
              </ul>
            </div> */}



        </div>

      </div>

    </div>

  </nav>
}

export default Navbar