import connectDb from "@/lib/db";
import { USERCONTACT_EMAIL_TEMPLETE, USERCONTACT_EMAIL_TEMPLETE_AUTO_REPLY} from "@/lib/mailing/EmailTemplete";
import {sendEmailOrder,sendAutomaticResponseEmail} from "@/lib/mailing/mail.config";
import customerOrder from "@/lib/models/order";
import { NextResponse } from "next/server";




export const GET =async()=>{
    try {
         await connectDb();

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
        await connectDb()
        if(!name || !email || !phone || !message){
            return new NextResponse('Kinldy add a message')
        }
        /* const order =await customerOrder.create(body); */
       const newOrder =  new customerOrder({name,email,phone,message});

       await newOrder.save();

       //sendEmail to Tunda office
        try {
          await sendEmailOrder({
            from:newOrder.email,
            to:process.env.EMAIL_USER,
            subject:newOrder.name,
            html:USERCONTACT_EMAIL_TEMPLETE.replace("{message}",newOrder.message).replace("{phone}",newOrder.phone)
            
        })
       
         
        
       } catch (error) {
        console.log('Error',error)
        return new NextResponse('Could not send order email',{status:500})
        
       } 
/// send automatic reply messages
       try {
         await sendAutomaticResponseEmail({
            from:process.env.EMAIL_USER,
            to:newOrder.email,
            subject:'We received your email',
            html:USERCONTACT_EMAIL_TEMPLETE_AUTO_REPLY.replace("{name}",newOrder.name)
        }) 
        
       } catch (error) {
         console.log('Error',error)
        return new NextResponse('Could not automatice email response ',{status:500})
        
       }

       return new NextResponse(newOrder);
    } catch (error) {
        console.log('Error in adding order',error)
        return new NextResponse('Error in adding an order',error)
        
    }
}