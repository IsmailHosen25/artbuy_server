const user  =require("../models/user.mod")
const bcrypt =require("bcrypt")
const jwt =require("jsonwebtoken")
require("dotenv").config()
const login=async(req,res)=>{
 try{
   const validuser=await user.findOne({email:req.body.email})
   if(validuser===null){
      res.json({
         "requst":"not valid user"
      })
   }
   else{
         const passwordvalid= await bcrypt.compare(req.body.password,validuser.password)
         if(passwordvalid){
            const payload={
               username:validuser.username,
               usertype:validuser.usertype
            }
            const token=jwt.sign(payload,process.env.JWT,{expiresIn:"4hr"})
            res.cookie("token",token)
            .json({
               "request":"Accepted",
               "data":{
                    "username":validuser.username,
                    "usertype":validuser.usertype
                }
            })
         }
         else{
            res.json({"request":"Not athurizrd"})
         }
   }
 }catch(e){
    res.json({"error": e.message})
 }
}
module.exports=login