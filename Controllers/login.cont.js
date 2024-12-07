const user  =require("../models/user.mod")
const bcrypt =require("bcrypt")
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
            res.json({
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