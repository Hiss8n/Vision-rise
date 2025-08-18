import Image from "next/image";

export default function Gallery() {
  const items = [
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

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 hover:transition-opacity-100 cursor bg-slate-100">
      {items.map((item) => (
        <div key={item.id} className="bg-white rounded-xl opacity:100 shadow-lg overflow-hidden 
        group hover:opacity-200  transform transition-transform duration-300 hover:scale-95 hover:bg-red-400 hover:duration-200">
          <Image
            src={item.src}
            alt={item.alt}
            width={400}
            height={250}
            className="w-full h-64 object-coverw-full h-64 object-cover group-hover:opacity-80 transition "
          />
          <div className="p-4">
            <p className="text-gray-700 text-xs rounded opacity-200 group-hover:opacity-100 transition md:text-md">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
