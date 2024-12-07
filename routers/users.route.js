const express=require("express")
const userRouter=express.Router()
const sign=require("../Controllers/sign.cont")
const login=require("../Controllers/login.cont")

userRouter.post("/sign",sign)
userRouter.post("/login",login)

module.exports=userRouter