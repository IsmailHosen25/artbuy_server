const addorder =async(req,res)=>{
 try{
     console.log(req.body.arts.length)
     res.json({
        "request":"Accepted"
     })
 }catch(e){
    res.json({
        "error":e.message
    })
 }
}
module.exports=addorder