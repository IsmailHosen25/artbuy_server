const express=require("express")
const buyerRouter=express.Router()
const jwtcheck =require("../middlewares/jwtcheck")
const uploadimg =require('../middlewares/uplodeimg')
const addorder=require("../Controllers/addorder.cont")
const buyerorderhistory=require("../Controllers/buyerorderhistory.cont")
const orderstatusudt=require("../Controllers/orderstatusudt.cont")
buyerRouter.post("/addorder",jwtcheck,addorder)
buyerRouter.get("/getbuyerorderhistory",jwtcheck,buyerorderhistory)
buyerRouter.put("/orderstatusudt/:id",jwtcheck,orderstatusudt)
module.exports=buyerRouter