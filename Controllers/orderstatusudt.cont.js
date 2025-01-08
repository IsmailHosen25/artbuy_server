const order=require("../models/order.mod")
const orderstatusudt=async(req,res)=>{
try{
    const updatestatus=await order.findOneAndUpdate({_id:req.body.id},{
        $set:{
            status:req.body.status,

        }},{
            new:true
        })
   res.json({
       "request":"Accepted"
   })
}catch(e){
    res.json({
        "error":e.message
    })
 }
}
module.exports=orderstatusudt