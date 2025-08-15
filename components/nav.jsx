'use client'
import Link from 'next/link'
import { useState } from 'react';
import { IoMenuSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import Image from 'next/image';





const Navbar = () => {
    const [toggleMenu,setToggleMenu]=useState(false)

  return<nav className='w-full h-[54px] py-4 px-2 mb-2 z-1  bg-slate-100 border-b-1 border-red-700 fixed '>
    <div className='flex justify-between px-1 lg:px-2'>
        <div className='w-10 h-10 pl-3  flex items-center justify-center pb-3 lg:ml-8'>
        
        <img src='/logo.png'  alt='logo' width={54} height={54} /> 
        <p className='text-sm text-green-500 font-bold pl-0 -ml-2 font-bold'>Tunda</p>
          

        </div>

        <div className='flex justify-end'>             
       
        <div className=' hidden flex justify-between  md:block md:gap-3'>
            <Link href={"/"}className='navbar__links relative mr-4 text-red-700 font-bold'>HOME</Link>
            <Link href={"#"}className='navbar__links relative mr-4 text-gray-150 font-bold'>ABOUT</Link>
            <Link href={"/contact"}className='navbar__links relative mr-4 text-gray-150 font-bold'>CONTACT</Link>
            <Link href={"#"}className='navbar__links relative mr-4  text-gray-150 font-bold'>LOCATION</Link>
          
            
        </div>
        {/* humbarugar menu */}
        <div className='md:hidden' >
           
            <button
            onClick={()=>setToggleMenu((prev)=>!prev)}
            >
               { toggleMenu ?  ( <RxCross2 size={16}/>):(<IoMenuSharp size={16}/>) }

            </button>
            <div className='w-[70px] h-[100vh]'>

              <ul>
                <li><Link href={'/'}>HOME</Link></li>
                <li><Link href={'/'}>ABOUT</Link></li>
                <li><Link href={'/'}>CONTACT</Link></li>
                <li><Link href={'/'}>LOCATION</Link></li>
              </ul>
            </div>
            
            
        </div>
        </div>

    </div>

  </nav>
}

export default Navbar