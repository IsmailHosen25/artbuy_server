const { unlink } = require("fs")
const arts=require("../models/arts.mod")
const deleteart=async(req,res)=>{
    try{
        
        const deleteart=await arts.findOneAndDelete({_id:req.params.id})
         unlink(
                    `I:\\10th semester\\CSC455(WA)\\Artbuy\\artbuy_server\\images\\${deleteart.file.filename}`,(err)=>{
                        
                        if(err){
                            res.json({"request":"error found"})
                        }
                    }
                )
        res.json({
            "request":"Accepted"
        })


    }catch(e){
        res.json({
            "error":e.message
        })
    }
}
module.exports=deleteart