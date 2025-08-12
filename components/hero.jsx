

const Hero = () => {
  return (
    <section
    style={{
        backgroundImage: "url('/bgImage.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh'
        
      }} 
      className="relative w-full flex-col items-center"
      >
        <div className="absolute inset-0 bg-gradient-to-t  from-gray-500  via-black-350 to-transprent flex items-center justify-start md:flex-cols">
            <div className="flex flex-start mx-12 ">
                <div> 
                <h3 className=" text-white text-2xl"> Stay in Comfort, Wake up to Luxury</h3>
                <p className="text-red-600 font-bold text-md">Designed for you<br></br>
                             Stay with us, and turn moments into lasting memories</p>
 </div>
           

            </div>
             <button className="bg-gradient-to-r from-red-500 to-red-200 text-xl px-10 py-3  rounded-full text-white py-3 ">Contact us</button>
       
        </div>
  
    </section>
  )
}

export default Hero