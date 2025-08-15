import Link from "next/link"


const Hero = () => {
  return (
    <section
    style={{
        backgroundImage: "url('/bgImage.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh'
        
      }} 
      className="relative w-full flex justify-center item-center"
      >
         
          
                 

        <div className="absolute flex-col justify-center top-70 px-10 
         inset-0 bg-gradient-to-t  px-12  from-gray-500  via-black-350 to-transprent md:flex-row ">

          <div className="mb-1">  
          <h3 className=" text-red-500 text-xl"> Stay in Comfort, Wake up to Luxury</h3>
          <p className="text-white font-bold text-xs">Stay with us, and turn moments into lasting memories</p> 
            </div>

            <div className=" w-full flex items-center py-4 lg:items-right">          
            <Link href={'/contact'}>  
             <button className="bg-gradient-to-r 
             from-red-500 to-red-200 text-sm
              px-6 
             opacity-100  
             rounded-full text-white py-3
          
             transform transition-transform duration-100 hover:scale-125 hover:cursor-pointer
             ">Contact us</button>
             </Link>
             </div>

       
        </div>
        
             
  
    </section>
  )
}

export default Hero