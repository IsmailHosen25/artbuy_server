const express=require("express")
const userRouter=express.Router()
const sign=require("../Controllers/sign.cont")
const login=require("../Controllers/login.cont")
const updateinfo=require("../Controllers/updateinfo")
const getuser=require("../Controllers/getuser.cont")
const jwtcheck =require("../middlewares/jwtcheck")
userRouter.post("/sign",sign)
userRouter.post("/login",login)
userRouter.get("/profile/:username",jwtcheck,getuser)
userRouter.put("/updateinfo",updateinfo)

module.exports=userRouter