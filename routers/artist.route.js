const express=require("express")
const artistRouter=express.Router()
const jwtcheck =require("../middlewares/jwtcheck")
const uploadimg =require('../middlewares/uplodeimg')
const addarts=require("../Controllers/addarts.cont")
const getarts=require("../Controllers/getarts.cont")
const deleteart=require("../Controllers/deleteart.cont")
const updateart=require("../Controllers/updateart.cont")

artistRouter.post("/addarts",jwtcheck,uploadimg.single("artimg"),addarts)
artistRouter.get("/getarts/:username",jwtcheck,getarts)
artistRouter.delete("/deleteart/:id",jwtcheck,deleteart)
artistRouter.put("/updateart",jwtcheck,updateart)
module.exports=artistRouter