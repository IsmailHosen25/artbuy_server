const express=require("express")
const userRouter=express.Router()
const sign=require("../Controllers/sign.cont")
const login=require("../Controllers/login.cont")
const updateinfo=require("../Controllers/updateinfo")
userRouter.post("/sign",sign)
userRouter.post("/login",login)
userRouter.put("/updateinfo",updateinfo)

module.exports=userRouter