const express = require('express')
const productRoutes = express.Router();

const {
    addNewProduct,
    getAllProduct,
    getProduct,
    replaceProduct,
    updateProduct,
    deleteProduct
}=require("../Controller/Product.controller.js");

// Add new product =>create
productRoutes.post("/",addNewProduct);

// Get all product=> read
productRoutes.get("/", getAllProduct);

// get single product =>read
productRoutes.get("/:id",  getProduct);

// replace data =>put
productRoutes.put("/:id", replaceProduct);

// update data=>patch
productRoutes.patch("/:id", updateProduct);

// delete data=>delete
productRoutes.patch("/:id", deleteProduct);

module.exports=productRoutes;