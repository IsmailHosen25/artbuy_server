const login=async(req,res)=>{
 try{
   console.log(req.body)
    res.send("hello login")
 }catch(e){
    res.json({"error": e.message})
 }
}
module.exports=login