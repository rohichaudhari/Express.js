const Product=require("../Model/product.model");
const bcrypt=require('bcrypt')
// registration
exports.registerProduct=async(req,res)=>{
    try{
        let product= await Product.findOne({email:req.body.email,isDelete:false});
        if(product){
            return res.status(400).json({message:"Data already exists...."})
        }
        let hashPassword=await bcrypt.hash(req.body.password,10);
        // console.log(hashPassword);
        product=await Product.create({...req.body,password:hashPassword});
        product.save();
        res.status(201).json({product,message:'Registration successfulll.......'});
    }
    catch (err){
        console.log(err);
        res.status(500).json({message:'internal server error'});
    }
};
//login 
exports.loginUser=async(req,res)=>{
    try{
        let product= await Product.findOne({email:req.body.email,isDelete:false});
        if(!product){
            return res.status(404).json({message:"User not found..."})
        }
        let matchPassword= await bcrypt.compare(req.body.password,product.password);
        // console.log(matchPassword);
        if(!matchPassword){
            return res.status(400).json({message:'email or password not matched..'});
        }
        res.status(201).json({product,message:"Login Successful"})
    }
    catch(err){
        console.log(err);
        res.status(500).json({message:'internal server error'});
    }
}


        