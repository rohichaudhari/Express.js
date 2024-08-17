const express = require('express')
const productRoutes = express.Router();

const {
    addNewProduct,
    getAllProduct,
    getProduct,
    updateProduct,
    deleteProduct

}=require("../Controller/Product.controller.js");


productRoutes.post("/",addNewProduct);
productRoutes.get("/",getAllProduct);
productRoutes.get("/get-product",getProduct);
productRoutes.put("/", updateProduct);
productRoutes.delete("/", deleteProduct);
module.exports=productRoutes;