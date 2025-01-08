const arts=require("../models/arts.mod")
const getallarts=async(req,res)=>{
  try{
      const allarts=await arts.find().populate("userid","username _id")
      res.json({
        "request":"Accepted",
        "data":allarts
      })
  }
  catch(e){
    res.json({"error":e.message})
  }
}
module.exports=getallarts