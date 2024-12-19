const mongoose =require("mongoose")
const artSchema=mongoose.Schema({
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
    userid:{
        type:mongoose.Types.ObjectId,
        ref:"users"
    },
    likes:[]
})
const arts=new mongoose.model("arts",artSchema)
module.exports=arts