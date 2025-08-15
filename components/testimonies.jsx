import Image from "next/image";
import Footer from "./footer";

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      image: "/p3.jpg",
      comment: "Absolutely loved my stay! The ocean view was breathtaking and the staff was incredibly friendly.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Lee",
      image: "/p2.jpg",
      comment: "Best hotel experience I've had. The room was spotless, and breakfast was delicious.",
      rating: 4
    },
    {
      id: 3,
      name: "Emily Carter",
      image: "/p1.jpg",
      comment: "Perfect location, cozy rooms, and great service. Highly recommend for a relaxing getaway.",
      rating: 5
    }
  ];

  // Helper function to render stars
  const renderStars = (count) => {
    return Array(count)
      .fill("★")
      .map((star, i) => (
        <span key={i} className="text-yellow-500 text-lg">
          {star}
        </span>
      ));
  };

  return (
       <div className="w-full flex-cols items-center">  

  <div className='text-center text-sm text-red-600 md:flex-left md:text-xl'>
             Testimonials
    </div> 

    <div className="justify-between items-center py-12 px-6 max-auto">
      

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-xl  p-6 text-center"
          >
            <Image
              src={review.image}
              alt={review.name}
              width={50}
              height={50}
              className="mx-auto rounded-full object-cover w-[50px] h-[50px]"
            />

            <h2 className="text-md font-md mt-4">{review.name}</h2>

            {/* Rating Stars */}
            <div className="mt-2">{renderStars(review.rating)}</div>

            <p className="text-gray-600 mt-3 text-sm lg:text-lg">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>

   </div>
   
  
  );
}
