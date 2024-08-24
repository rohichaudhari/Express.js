const express = require('express')
const productRoutes = express.Router();
const {verifyToken}= require('../helpers/tokenVerify.js')
const {upload} = require('../helpers/ImageUpload.js');
const {registerProduct,loginUser,userProfile,updateData,DeleteData }=require("../Controller/Product.controller.js");

productRoutes.post("/register",upload.single('profileImage'), registerProduct);
productRoutes.post("/login",loginUser);
productRoutes.get("/me",verifyToken,userProfile);
productRoutes.put("/update-profile",verifyToken,updateData );
productRoutes.delete("/me",verifyToken,DeleteData );
module.exports=productRoutes;


