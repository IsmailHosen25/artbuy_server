const order=require("../models/order.mod")
const buyerorderhistory=async (req,res)=>{
try{
        const orderhistory=await order.find({buyerid:req.userid}).select({
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
module.exports=buyerorderhistory