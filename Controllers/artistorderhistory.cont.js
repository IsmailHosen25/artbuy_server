const order=require("../models/order.mod")
const artistorderhistory=async (req,res)=>{
try{
        const orderhistory=await order.find({userid:req.userid}).select({
            __v:0,
        })
        res.json({
            "request":"Accepted",
            "data":orderhistory
        })
    }
catch(e){
    res.json({
        "error":e.message
    })
 }
}
module.exports=artistorderhistory