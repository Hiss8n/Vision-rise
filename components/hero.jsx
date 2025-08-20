import Link from "next/link"


const Hero = () => {
  return (
    <section
    style={{
        backgroundImage: "url('/hero.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh'
        
        
      }} 
      className="relative w-full flex justify-center item-center bg-slate-100"
      >
         
          
                 

        <div className="absolute flex-col justify-center top-70 px-10 
         inset-0 bg-gradient-to-t  px-12  from-gray-500  via-black-350 to-transprent md:flex-row ">

          <div className="mb-1">  
          <h3 className=" text-cyan-400 text-2xl shadow-xl shadow-black-600">Hundreds of Thousand of Refugees and Children<br></br> are starving due to war and displacement</h3>
          <p className="text-yellow-400 font-bold text-sm">See beyond, with us,Rise above</p> 
            </div>

            <div className=" w-full flex items-center py-4 lg:items-right"> 

            <Link href={'/contact'}>  
             <button className="bg-gradient-to-r 
             from-blue-500 to-blue-200 text-sm
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