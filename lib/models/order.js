
import { Schema,model, models } from "mongoose";

const customerOrderSchema= new Schema({
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

  const customerOrder=models.order || model('order',customerOrderSchema)

  export default customerOrder;




