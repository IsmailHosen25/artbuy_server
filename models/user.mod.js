const mongoose =require("mongoose")
const userSchema=mongoose.Schema({
       username:{
        type:String,
        required:true
       },
       email:{
        type:String,
        required:true
       },
       password:{
        type:String,
        required:true
       },
       usertype:{
        type:String,
        required:true
       },
       name:{
        type:String
       },
       mobile:{
        type:String
       },
       address:{
        type:String
       },
       bio:{
        type:String
       }
})
const user=new mongoose.model("users",userSchema)
module.exports=user