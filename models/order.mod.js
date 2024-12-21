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
    arts:[ 
        {

        art:{
        quntity:{
           type:Number,
           required:true
        },
        artid:{
        type:mongoose.Types.ObjectId,
        ref:"arts"
        }
            }

        }
    ]
})