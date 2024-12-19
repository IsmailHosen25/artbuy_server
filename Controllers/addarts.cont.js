const arts=require("../models/arts.mod")
const addarts=async(req,res)=>{
try{
    const {path,filename}=req.file
    const newart=new arts({
        file:{
            path:path,
            filename:filename
          },
          name:req.body.name,
          price:req.body.price,
          available:req.body.available,
          category:req.body.category,
          about:req.body.about,
          userid:req.userid,
    })
    await newart.save()
    res.json({"request":"Accepted"})

}catch(e){
    res.json({"error":e.message})
}
}
module.exports=addarts