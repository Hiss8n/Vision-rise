import Image from "next/image";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";

export default function Gallery() {
/*   const items = [
    {
      id: 1,
      src: "/food.jpg", // stored in /public folder
      alt: "Nyama choma",
      description: "Delicous mouth watering beef."
    },
    {
      id: 2,
      src: "/rooms.jpg",
      alt: "Family Suite",
      description: "Perfect for families, includes 2 bedrooms and a lounge."
    },
    {
      id: 3,
      src: "/confy.jpg",
      alt: "Honeymoon Suite",
      description: "Romantic suite with a private balcony and jacuzzi."
    },
    {
      id: 4,
      src: "/staf.jpg",
      alt: "Professional Staff",
      description: "High class professional staff and managemant board"
    }
    , {
      id: 5,
      src: "/security.jpg",
      alt: "Professional Security",
    description: "High class Security team staff and CCTV cameras"
    }
  ];
 */
  return (
  <div className="w-full md:flex md:items-center md:justify-center">
      <div className="w-1/2 flex items-center w-full h-[200px]">
      <Image
      src='/children.jpg'
      width={580}
      height={590}

      />

      </div>

      <div className="w-1/2 bg-blue-700 flex justify-center pt-3 w-full h-[388px] md:flex-col">
      <div className="grid items-center px-10">
         <h2 className="text-xl font-lg text-white text-center mb-4 ">STOP CUTTING AIDS</h2>
         <p className="mb-8 text-yellow-400 text-md font-semibold">Governments globally are slashing foreign aid budgets that millions of vulnerable children  and refugees depend on. 
          Join us in calling on leaders to put children first.</p>

     
       <Link href={'/contact'}>  
                   <button className="bg-gradient-to-r 
                   from-white-500 to-slate-200 text-sm
                    px-6 
                   opacity-100  
                   rounded-sm text-white py-3
                   flex items-center gap-2
                   mb-6
                
                   transform transition-transform duration-100 hover:scale-125 hover:cursor-pointer
                   ">ADD YOUR NAME <IoArrowForward size={17}/>  </button>
                   </Link>
                    </div>
     
    
        
     </div>


    </div>
  
  );
}
