import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <section> 
    <footer className="bg-gray-900 text-white py-2 flex  w-full  max-auto py-12 ">
      <div className="w-full mx-auto px-4  flex items-center  justify-between gap-2 md:gap-3">
        {/* Hotel Name */}
        <div className='h-10 rounded-full flex justify-center items-center'>
        
        <img src='/VRAfrica.png'  alt='logo' width={44} height={44} className='w-8 h-8'/> 
         <p className="text-xs font-semibold ml-3 md:text-sm">Vision Rise</p>
          

        </div>
       

        {/* Social Icons */}
        <div className="flex gap-4 text-xs">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition-colors"
          >
            <FaTwitter />
          </a>
        </div>

        {/* Copyright */}
        <div> 
        <p className="text-xs text-gray-400 md:text-sm">
          © {new Date().getFullYear()} Vision Rise. All rights reserved.
        </p>
        </div>
      </div>
    </footer>
     </section>
  );
}
