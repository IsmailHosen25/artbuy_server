const getimg=(req,res)=>{
    res.download(`./images/${req.query.name}`)
}
module.exports=getimg