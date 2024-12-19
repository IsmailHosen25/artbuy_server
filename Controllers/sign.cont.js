const user =require("../models/user.mod")
const bcrypt= require("bcrypt")
const jwt=require("jsonwebtoken")
require("dotenv").config()
const sign = async(req,res)=>{
try{
    const validuser=await user.findOne({email:req.body.email})
    if(validuser===null){
        const validusername=await user.findOne({username:req.body.username})
        if(validusername===null){
            const hashedpassword=await bcrypt.hash(req.body.password,10)
            const newuser=new user({
                username:req.body.username,
                email:req.body.email,
                password:hashedpassword,
                usertype:req.body.usertype
            })
            await newuser.save()
            const payload={
                userid:newuser.id,
                username:newuser.username,
                usertype:newuser.usertype
             }
            const token=jwt.sign(payload,process.env.JWT,{expiresIn:"2d"})
                        res.cookie("token",token)
                        .json({
                           "request":"Accepted",
                           "data":{
                                "username":req.body.username,
                                "usertype":req.body.usertype
                            }
                        })
        }
        else{
            res.json({
                "request":"User name already exist"
            })
        }
    }
    else{
        res.json({
            "request":"User already exist"
        })
    }
}catch(e){
    res.json({"error": e.message})
}
}
module.exports=sign