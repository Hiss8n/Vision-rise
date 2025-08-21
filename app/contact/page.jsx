'use client'
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "",phone: "", message: "" });
 /*  const [status, setStatus] = useState("");  */
  const [isLoading,setIsLoading]=useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
 setIsLoading(true)
   try {
     const res = await fetch("http://localhost:3000/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setStatus(data.message);

    if (res.ok) {
       setIsLoading(false)
      setForm({ name: "", email: "",phone: "", message: "" });
       toast.success('Message sent successfully!');
    }
     
     
    
   } catch (error) {
    console.log('Error',error)
    return 
    
   } finally{
    setIsLoading(false)
    return
   }
  
    
  };

  return (
    <div className="max-w-lg mx-auto p-6    top-20 py-28">
      <h1 className="text-md font-bold mb-4 text-center text-red-400 md:text-2xl">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
         <input
          name="phone"
          type="text"
          placeholder="Your phone number"
          value={form.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-red-400 text-white p-2 rounded hover:bg-red-700"
        >
          {isLoading ? (
            <span>Loading...</span>

          ):( <span> Send</span>)}
        </button>
      </form>
      {/* {isLoading && toast.success('Message send successfull')} */}
    </div>
  );
}
