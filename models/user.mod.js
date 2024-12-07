const mongoose =require("mongoose")
const userSchema=mongoose.Schema({
       username:{
        type:String,
        required:true,
        unique:true
       },
       email:{
        type:String,
        required:true
       },
       password:{
        type:String,
        required:true,
        unique:true
       },
       usertype:{
        type:String,
        required:true
       },
       name:{
        type:String,
        default: ''
       },
       mobile:{
        type:String,
        default: ''
       },
       address:{
        type:String,
        default: ''
       },
       bio:{
        type:String,
        default: ''
       }
})
const user=new mongoose.model("users",userSchema)
module.exports=user