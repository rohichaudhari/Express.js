// const express = require('express')
// const productRoutes = express.Router();
// const {verifyToken}= require('../helpers/tokenVerify.js')
// const {upload} = require('../helpers/ImageUpload.js');
// const {registerProduct,loginUser,userProfile,updateData,DeleteData,specialProduct }=require("../Controller/Product.controller.js");

// productRoutes.post("/register",upload.single('profileImage'), registerProduct);
// productRoutes.post("/login",loginUser);
// productRoutes.get("/me",verifyToken,userProfile);
// productRoutes.put("/update-profile",verifyToken,updateData );
// productRoutes.delete("/me",verifyToken,DeleteData );
// productRoutes.get("/",specialProduct );
// module.exports=productRoutes;

const express = require('express');
const productRoutes = express.Router();
const {
    addNewProduct,
    getAllProduct,
    getProduct,
    updateProduct,
    deleteProduct
} = require("../Controller/Product.controller");
// const { updateUser } = require('../Controller/user.controller');

//  add new product - create
productRoutes.post("/post",addNewProduct);
productRoutes.get("/",getAllProduct);
productRoutes.get("/get-product",getProduct);
productRoutes.put("/",updateProduct);
productRoutes.delete("/",deleteProduct)

module.exports = productRoutes;

