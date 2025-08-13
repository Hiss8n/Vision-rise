import connectDb from "@/lib/db";
import customerOrder from "@/lib/models/order";
import { NextResponse } from "next/server";

export const GET =async()=>{
    try {
         await connectDb()
         const users=await  customerOrder.find();
         if(!users) return {message:'No user found!!'}
         return new NextResponse(JSON.stringify(users),{status:200})
        
    } catch (error) {
        console.log("error in server",error);
        return new NextResponse("Error,in server getting users" + error.message,{status:500})
       
        
    }
}

export const POST=async(req)=>{

    const {name,email,phone,message}= await req.json();

    try {
        if(!name || !email || !phone || !message){
            return new NextResponse('Kinldy add a message')
        }
        /* const order =await customerOrder.create(body); */
       const newOrder = await customerOrder.create({name,email,phone,message});

       return new NextResponse(newOrder);
    } catch (error) {
        console.log('Error in adding order',error)
        return new NextResponse('Error in adding an order',error)
        
    }
}