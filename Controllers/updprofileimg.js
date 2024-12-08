const { unlink } = require("fs")
const user=require("../models/user.mod")
const updprofileimg=async (req,res)=>{
 try{
    const validuser=await user.findOne({username:req.username})
    const {path,filename}=req.file
    if(validuser===null){
      res.json({
        "request":"token expired"
      })
    }else{
        unlink(
            `I:\\10th semester\\CSC455(WA)\\Artbuy\\artbuy_server\\images\\${validuser.file.filename}`,(err)=>{
                
                if(err){
                    res.json({"request":"error found"})
                }
            }
        )
        const updateuser=await user.findOneAndUpdate({username:req.username},{
            $set:{
                file:{
                    path:path,
                    filename:filename
                  }
    
            }},{
                new:true
            })
            await updateuser.save()
            res.json({"request":"Accepted"})
    }
 }catch(e){
    res.json({"request":e.message})
 }
}
module.exports=updprofileimg