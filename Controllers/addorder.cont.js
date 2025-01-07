const order=require("../models/order.mod")
const addorder =async(req,res)=>{
 try{
      const buyerid=req.userid
      const address=req.body.address
      const mobile=req.body.mobile
      const status="waiting for Confirmation"
    for (let i = 0; i < req.body.arts.length; i++) {
        const new_order=new order({
            buyerid:buyerid,
            address:address,
            mobile:mobile,
            status:status,
            file:{
                path: req.body.arts[i].file.path,
                filename:req.body.arts[i].file.filename
                },
            name:req.body.arts[i].name,
            price:req.body.arts[i].price,
            available:req.body.arts[i].available,
            category:req.body.arts[i].category,
            about:req.body.arts[i].about,
            userid:req.body.arts[i]._id,
            quantity:req.body.arts[i].quantity

        })
        await new_order.save()
        
      }
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