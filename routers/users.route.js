const express=require("express")
const userRouter=express.Router()
const sign=require("../Controllers/sign.cont")
const login=require("../Controllers/login.cont")
const updateinfo=require("../Controllers/updateinfo")
const getuser=require("../Controllers/getuser.cont")
const jwtcheck =require("../middlewares/jwtcheck")
const uploadimg =require('../middlewares/uplodeimg')
const updateprofileimg =require("../Controllers/updprofileimg")
const getimg =require("../Controllers/getimg")
const addarts=require("../Controllers/addarts.cont")
userRouter.post("/sign",sign)
userRouter.post("/login",login)
userRouter.get("/profile/:username",jwtcheck,getuser)
userRouter.put("/updateinfo",updateinfo)
userRouter.put("/updateprofileimg",jwtcheck,uploadimg.single("file"),updateprofileimg)
userRouter.post("/addarts",jwtcheck,uploadimg.single("artimg"),addarts)
userRouter.get("/img", getimg)

module.exports=userRouter