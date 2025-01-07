const express=require("express")
const buyerRouter=express.Router()
const jwtcheck =require("../middlewares/jwtcheck")
const uploadimg =require('../middlewares/uplodeimg')
const addorder=require("../Controllers/addorder.cont")
const buyerorderhistory=require("../Controllers/buyerorderhistory.cont")

buyerRouter.post("/addorder",jwtcheck,addorder)
buyerRouter.get("/getbuyerorderhistory",jwtcheck,buyerorderhistory)
module.exports=buyerRouter