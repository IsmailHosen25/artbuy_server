const arts=require("../models/arts.mod")
const getarts=async(req,res)=>{
try{
    if(req.username===req.params.username){
        const artsobj=await arts.find({userid:req.userid}).select({
            __v:0,
            userid:0
        })
        res.json({
            "request":"Accepted",
            "data":artsobj
        })
    }
    else{
        res.json({
            "request":"token expired"
        })
    }

    
}catch(e){
    res.json({
        "error":e.message
    })
}
}
module.exports=getarts