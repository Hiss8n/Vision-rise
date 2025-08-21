
import { Schema,model, models } from "mongoose";

const userContactSchema = new Schema({
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

  const userContact = models.order || model('contact',userContactSchema)

  export default userContact;




