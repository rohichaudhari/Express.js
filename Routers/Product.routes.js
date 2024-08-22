const express = require('express')
const productRoutes = express.Router();
const {registerProduct,loginUser}=require("../Controller/Product.controller.js");

productRoutes.post("/register",registerProduct);
productRoutes.post("/login",loginUser);
module.exports=productRoutes;


