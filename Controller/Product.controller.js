// const Product=require("../Model/product.model");
// const bcrypt=require('bcrypt')
// const jwt=require('jsonwebtoken');
// // registration
// exports.registerProduct=async(req,res)=>{
//     try{
//         let imagePath="";
//         let product= await Product.findOne({email:req.body.email,isDelete:false});
//         if(product){
//             return res.status(400).json({message:"Data already exists...."})
//         }
//         if(req.file){
//             imagePath=req.file.path.replace(/\\/g,"/");
//         }
//         let hashPassword=await bcrypt.hash(req.body.password,10);
//         // console.log(hashPassword);
//         product=await Product.create({...req.body,password:hashPassword,profileImage:imagePath});
//         product.save();
//         res.status(201).json({product,message:'Registration successfulll.......'});
//     }
//     catch (err){
//         console.log(err);
//         res.status(500).json({message:'internal server error'});
//     }
// };
// //login 
// exports.loginUser=async(req,res)=>{
//     try{
//         let product= await Product.findOne({email:req.body.email,isDelete:false});
//         if(!product){
//             return res.status(404).json({message:"User not found..."})
//         }
//         let matchPassword= await bcrypt.compare(req.body.password,product.password);
//         // console.log(matchPassword);
//         if(!matchPassword){
//             return res.status(400).json({message:'email or password not matched..'});
//         }
//         let token=await jwt.sign({productId:product._id},process.env.jwt_secret);
//         res.status(201).json({product,message:"Login Successful",token});
//     }
//     catch(err){
//         console.log(err);
//         res.status(500).json({message:'internal server error'});
//     }
// };

// exports.userProfile =async (req,res)=>{
//     try {
//         res.status(200).json(req.product);
//     } 
//     catch (error) {
//       console.log(error); 
//       res.status(500).json({message:'internal server error'}); 
//     }
// }

// exports.updateData=async(req,res)=>{
//         try {
//             let product=req.product;
//             product=await Product.findByIdAndUpdate(
//                 product._id,
//                 {$set:req.body},
//                 {new:true}
//             );
//             res.status(202).json({product,message:'updated successfully..'});
//         } catch (error) {
//             console.log(error); 
//             res.status(500).json({message:'internal server error'});
//         }
//     };
    
//     exports.DeleteData=async(req,res)=>{
//         try {
//             let product=req.product;
//             product=await Product.findByIdAndUpdate(
//                 product._id,
//                 {$set:req.body,isDelete:true},
//                 {new:true}
//             );
//             res.status(202).json({product,message:'updated successfully..'});
//         } catch (error) {
//             console.log(error); 
//             res.status(500).json({message:'internal server error'});
//         }
//     };

//     exports.specialProduct=async(req,res)=>{
//         try {
//             let product={
//                 firstname:"sagar",
//                 lastname:"gamit",
//                 email:"sagar123@gmail.com",
//                 password:"sagu123",
//                 mobileNo:9876543210,
//                 address:{
//                     line1:"surat",
//                     line2:"yogichowk"
//                 }
//             }
//         } catch (error) {
//             console.log(error);
//             res.status(500).json({message:"internal server error"});
//         }
//     };

        
const Product = require("../Model/product.model");

// Add New User
exports.addNewProduct = async (req, res) => {
    try {
        // console.log(req.body);
        const { title, description, category, price, discountPercentage, brand, 
            sku, weight, rating, stock, tags, dimensions, reviews, returnPolicy, 
            minimumOrderQuantity, meta, images, thumbnail, warrantyInformation, 
            shippingInformation, availabilityStatus } = req.body;
        let product = await Product.findOne({sku,isDelete:false});
        if(product)
            return res.status(400).json({message:"Product already exists"});
        product = await Product.create({
            title,
            description,
            category,
            price,
            discountPercentage,
            brand,
            sku,
            weight,
            rating,
            stock,
            tags,
            dimensions, // Make sure this is an object with width, height, and depth
            reviews, 
            images,
            thumbnail,
            warrantyInformation,
            shippingInformation,
            availabilityStatus,
            meta: {
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
                barcode: "your-barcode-here",
                qrCode: "your-qrCode-here"
            }

        });
        product.save();
        res.status(201).json({product,message:"Product Added"});
    } catch(error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error"});
    }
};

// Get All Users
exports.getAllProduct = async(req,res) =>{
    try {
        let products = await Product.find();
        res.status(200).json(products);
    } 
    catch(error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error"})
    }
}

// Get User by ID
exports.getProduct = async(req,res)=>{
    try{
        // let user = await User.findOne({_id:req.query.userId});
        let product = await Product.findById(req.query.productId);
        if(!product)
            return res.status(404).json({message:"Product not found"});
        res.status(200).json(product);
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:"Internal Server Error"})
    }
};

// Update product
exports.updateProduct = async(req,res)=>{
    try {
        let product = await Product.findById(req.query.productId);
        // console.log(user);
        if(!product){
            return res.status(404).json({message:"Product not found"});
        }
        // user = await User.updateOne({_id:req.query.userId},{$set:req.body},{new:true}); 
        product = await Product.findByIdAndUpdate(req.query.productId,{$set:req.body},{new:true}); 
        product.save();
        res.status(200).json({product,message:"Product update success"});
} 
catch (error) {
    console.log(error);
    res.status(500).json({message:"Internal Server Error"})
    }
}

// Delete product
exports.deleteProduct = async(req,res)=>{
    try{
        let product = await Product.findById(req.query.productId);
        if(!product){
            return res.status(404).json({message:"Product not found"});
        }
        // product = await Product.deleteOne({_id:product._id});
        product = await Product.findByIdAndDelete(product._id);
        // product = await Product.findOneAndDelete(product._id);
        res.status(200).json({product,message:"Product deleted successfully"});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:"Internal Server Error"})
    }
}
