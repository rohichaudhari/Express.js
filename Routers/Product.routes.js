const express = require('express')
const productRoutes = express.Router();

const {
    addNewProduct,
    getAllProduct,
    getProduct

}=require("../Controller/Product.controller.js");


productRoutes.post("/",addNewProduct);
productRoutes.get("/",getAllProduct);
productRoutes.get("/get-product",getProduct);

module.exports=productRoutes;