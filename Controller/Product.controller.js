// const products=require("../Product.json");

// exports.addNewProduct=(req,res)=>{
//     products.push(req.body);
//     res.json({product:req.body,message:"product added sucessfully"});
// };

// exports.getAllProduct=(req,res)=>{
//     res.json(products);
// };

// exports.getProduct=(req,res)=>{
//     let id =  +req.params.id;
//     let item = products.find((product)=>product.id ===  id)
//     res.json(item)
// }
 
// exports.replaceProduct=(req,res)=>{
//     let id=+req.params.id;
//     let productindex=products.findIndex((product)=>product.id===id);
//     console.log(productindex);
//     products.splice(productindex,1,{...req.body});
//     res.json({message:"product replace sucessfully"})

// };

// exports.updateProduct=(req,res)=>{
//     let id = +req.params.id;
//     let productIndx = products.findIndex((product)=> product.id === id);
//     console.log(productIndx);
//     const product = products[proIndx];
//     console.log(product);
//     products.splice(proIndx,1,{...product,...req.body});
//     res.json({message:'update succesfully'});
// }

// exports.deleteProduct=(req,res)=>{
//     let id = +req.params.id;
//         let productIndx = products.findIndex((product)=>product.id === id);
//         console.log(proIndx);
//         products.splice(productIndx,2);
//         res.json({products,message:"delete successfully"});
// }


// const Product=require('../Model/product.model');
// exports.addNewproduct= async (req,res)=>{
//     try{
//         console.log(req.body);
//         const product= await Product.create({...req.body});
//         // Product.save();
//         res.status(201).json({product,message:"user added"});
//     }
//     catch(err){
//         console.log(err);
//         res.status(500).json({message:"Internal server error"});

//     }
// };


const product=require("../Model/product.model");
// add new Product
exports.addNewProduct=async(req,res)=>
    {
    try{
        console.log(req.body);
        const {firstname ,lastname,email,age,hobbies,address}=req.body;
        let Product =await product.findOne({email:email,isDelete:false});
        if(Product)
        {
            return res.status(400).json({message:"product already exists......"});
        }
            
            Product=await product.create({
            firstname ,lastname,email,age,hobbies,address,
            });
            // Product.save();
            res.status(201).json({message:"product Added"});
    }
    catch(err){
        console.log(err);
        res.status(500).json({message:"Internal server error"})
    }
};

// Get all product
exports.getAllProduct=async(req,res)=>
{
    try{
        let Products=await product.find({isDelete:false});
        res.status(200).json(Products);
    }
    catch(error)
    {
        console.log(error)
        res.status(500).json({message:"Internal server error"});
    }
};

//get product
exports.getProduct=async (req,res)=>{
    try{
        let Product= await product.findOne({firstname:req.query.firstname});
        if(!Product){
            return res.status(404).json({message:"Product not Found.."})
        }
        res.status(200).json(Product);
    }
        catch(error)
        {
            console.log(error);
            res.status(500).json({message:"Internal server error"});
        }
        
    }

    // update product
    exports.updateProduct=async(req,res)=>{
        try{
            let Product=await product.findById(req.query.productId);
            if(!Product){
                return res.status(404).json({message:"Product not found......"});
            }
            Product=await product.updateOne({_id:req.query.productId},{$set:req.body},{new:true});
            // product.save();
            res.status(202).json({message:"product update successfully"});
        }
        catch(error){
                console.log(error);
                res.status(500).json({message:"internal server error"});
        }
    };

    //Delete Product
    exports.deleteProduct=async(req,res)=>{
        try{
            // let Product=await product.findById(req.query.productId);
            let Product=await product.findOne({_id:req.query.userId,isDelete:false});
            if(!Product){
                return res.status(404).json({message:"Product not Found"});
            }
            Product=await product.deleteOne({_id:product._id});
            res.status(200).json({message:"Product deleted sucessfully...."})
        }
        catch(error){
            console.log(error);
            res.status(500).json({message:"Internal server error"});
        }
    };
        
    