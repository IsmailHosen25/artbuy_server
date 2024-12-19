const addarts=(req,res)=>{
try{
    console.log(req.body)
    console.log(req.file)

}catch(e){
    res.json({"error":e.message})
}
}
module.exports=addarts