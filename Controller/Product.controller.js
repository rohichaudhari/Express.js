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

const Product=require('../Model/product.model');
exports.addNewproduct= async (req,res)=>{
    try{
        console.log(req.body);
        const product= await Product.create({...req.body});
        // Product.save();
        res.status(201).json({product,message:"user added"});
    }
    catch(err){
        console.log(err);
        res.status(500).json({message:"Internal server error"});

    }
};