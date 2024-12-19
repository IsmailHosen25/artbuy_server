const arts=require("../models/arts.mod")
const updateart=async(req,res)=>{
  try{
    await arts.findOneAndUpdate({_id:req.body.id},{
        $set:{
            name:req.body.name,
            price:req.body.price,
            available:req.body.available,
            about:req.body.about,

        }},{
            new:true
        })
    res.json({"request":"Accepted"})

  }catch(e){
    res.json({"error":e.message})
  }
}
module.exports=updateart