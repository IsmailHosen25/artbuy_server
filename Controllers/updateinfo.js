const user=require("../models/user.mod")
const updateinfo=async(req,res)=>{
  try{
    const updateuser=await user.findOneAndUpdate({username:req.body.username},{
        $set:{
            name:req.body.name,
            mobile:req.body.mobile,
            address:req.body.address,
            bio:req.body.bio,
            socialmedia:req.body.socialmedia

        }},{
            new:true
        })
    res.json({"request":"Accepted"})
  }catch(e){
    res.json({"error":e.message})
  }
}
module.exports=updateinfo