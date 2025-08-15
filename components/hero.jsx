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
      className="relative w-full flex-col item-center"
      >
        <div className="absolute flex- items-center
        mr-12 
         inset-0 bg-gradient-to-t flex items-center  from-gray-500  via-black-350 to-transprent
            md:flex-row md:flex-col ">
            
                <div className="flex-col py-2 mx-10 md:flex md:items-center justify-center  "> 
                <h3 className=" text-red-500 text-xl"> Stay in Comfort, Wake up to Luxury</h3>
                <p className="text-white font-bold text-sm">Designed for you<br></br>
                             Stay with us, and turn moments into lasting memories</p>
              </div>
           

            <Link href={'/contact'}>  
             <button className="bg-gradient-to-r 
             from-red-500 to-red-200 text-xl px-12 px-4
             opacity-100  
             rounded-full text-white py-1 md:px-6 md:py-1
          
             transform transition-transform duration-100 hover:scale-125 hover:cursor-pointer
             ">Contact us</button>
             </Link>
       
        </div>
  
    </section>
  )
}

export default Hero