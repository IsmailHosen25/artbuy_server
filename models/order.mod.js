const mongoose=require("mongoose")
const orderSchema=mongoose.Schema({
    buyerid:{
        type:mongoose.Types.ObjectId,
        ref:"users"
    },
    address:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    file:{
            path:{
                type:String,
                required:true
            }
            ,
            filename:{
                    type:String,
                    required:true
                }
    
        },
    name:{
            type:String,
            required:true
        },
    category:{
            type:String,
            required:true
    
        },
    price:{
            type:Number,
            required:true
    
        },
    available:{
            type:String,
            required:true
    
        },
    about:{
            type:String,
            required:true
    
        },
    quantity:{
            type:Number,
            default:1
        },
    userid:{
            type:mongoose.Types.ObjectId,
            ref:"users"
        },
    likes:[]
    
       
})
const order=new mongoose.model("orders",orderSchema)
module.exports=order