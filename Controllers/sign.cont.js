const user =require("../models/user.mod")
const bcrypt= require("bcrypt")
const jwt=require("jsonwebtoken")
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
            res.json({
                "message":"Accepted",
                "data":{
                    "username":req.body.username,
                    "usertype":req.body.usertype
                }
            })
        }
        else{
            res.json({
                "message":"User name already exit"
            })
        }
    }
    else{
        res.json({
            "message":"User already exit"
        })
    }
}catch(e){
    res.json({"error": e.message})
}
}
module.exports=sign