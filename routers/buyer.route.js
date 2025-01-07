const express=require("express")
const buyerRouter=express.Router()
const jwtcheck =require("../middlewares/jwtcheck")
const uploadimg =require('../middlewares/uplodeimg')
const addorder=require("../Controllers/addorder.cont")


buyerRouter.post("/addorder",jwtcheck,addorder)
module.exports=buyerRouter