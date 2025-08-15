'use client'
import Link from 'next/link'
import { useState } from 'react';
import { IoMenuSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import Image from 'next/image';





const Navbar = () => {
    const [toggleMenu,setToggleMenu]=useState(false)
  return<nav className='w-full h-[54px] py-4 px-2 mb-2 bg-transparent border-b-2 border-red-600 '>
    <div className='flex justify-between px-1 lg:px-2'>
        <div className='w-10 h-10  ml-1 flex items-center justify-center pb-3 lg:ml-3'>
        
        <img src='/logo.png'  alt='logo' width={54} height={54} className='w-10 h-10'/> 
        <p className='text-sm text-green-600 font-bold pl-0 ml-1'>Tunda</p>
          

        </div>

        <div className='flex justify-end'>             
       
        <div className=' hidden flex justify-between  md:block md:gap-3'>
            <Link href={"/"}className='navbar__links relative mr-4 text-red-700'>HOME</Link>
            <Link href={"#"}className='navbar__links relative mr-4'>ABOUT</Link>
            <Link href={"/contact"}className='navbar__links relative mr-4'>CONTACT</Link>
            <Link href={"#"}className='navbar__links relative mr-4'>LOCATION</Link>
          
            
        </div>
        {/* humbarugar menu */}
        <div className='md:hidden'>
            { toggleMenu ?  ( <RxCross2 size={16}/>):(<IoMenuSharp size={16}/>) }
            
            
        </div>
        </div>

    </div>

  </nav>
}

export default Navbar