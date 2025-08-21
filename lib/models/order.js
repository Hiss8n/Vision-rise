
import { Schema,model, models } from "mongoose";

const userContact= new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:false
    },
    phone:{
        type:Number,
        required:true
    },
    message:{
        type:String,
        required:true
      
    }
},{timestamps:true})

  const contact=models.order || model('contact',userContact)

  export default userContact;




