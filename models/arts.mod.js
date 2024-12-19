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

    },
    price:{

    },
    available:{

    },
    about:{

    },
    userid:{
        type:mongoose.Types.ObjectId,
        ref:"users"
    },
    likes:{
        email:{
            type:String,
            default:""
        }
    }
})
const arts=new mongoose.model("arts",artSchema)
module.exports=arts