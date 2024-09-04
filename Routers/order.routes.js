const express=require("express");
const orderRoutes=express.Router();
const {addNewOrder}=require('../Controller/order.controller');
const {VerifyToken}=require('../helpers/tokenVerify');

orderRoutes.post('/',VerifyToke,addNewOrder);
module.exports=orderRoutes;