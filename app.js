const express =require("express")
const app=express()
const cors=require('cors')
const cookieparser=require("cookie-parser")
const userRouter =require("./routers/users.route")
const artistRouter = require("./routers/artist.route")
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(cookieparser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/users",userRouter)
app.use("/artist",artistRouter)


app.use((errors,req,res,next)=>{
    if(errors.message){
        res.json({"error":errors.message})
    }
    else{
        res.json({"error":errors})
    }

})

module.exports = app;