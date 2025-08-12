import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <section> 
    <footer className="bg-gray-900 text-white py-8 flex  w-full h-[40px] max-auto">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between md:flex-row gap-2">
        {/* Hotel Name */}
        <div className='w-[30%] h-10 rounded-full ml-12 flex justify-center items-center'>
        
        <img src='/logo.png'  alt='logo' width={44} height={44} className='contained'/> 
         <p className="text-md font-semibold">Tunda Hotels</p>
          

        </div>
       

        {/* Social Icons */}
        <div className="flex gap-4 text-xl">
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
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Tunda Hotels. All rights reserved.
        </p>
      </div>
    </footer>
     </section>
  );
}
