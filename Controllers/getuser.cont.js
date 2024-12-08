const user =require("../models/user.mod")
const getuser=async(req,res)=>{
    try{
        const validuser=await user.findOne({username:req.params.username})
        if(validuser===null){
            res.json({
                "message":"Not Validuser"
            })
        }
        else{
            if(req.params.username===req.username){
                res.json({
                    "request":"Accepted",
                    "data":{
                        "username": validuser.username,
                        "email": validuser.email,
                        "usertype": validuser.usertype,
                        "address": validuser.address,
                        "bio": validuser.bio,
                        "mobile": validuser.mobile,
                        "name": validuser.name,
                        "socialmedia":validuser.socialmedia,
                        "file":validuser.file
                    }
            })
            }
            else{
                res.json({"request":"token error"})
            }
            }
    }catch(e){
        res.json({"error":e.message})
    }
}
module.exports=getuser