const Product=require("../Model/product.model");
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken');
// registration
exports.registerProduct=async(req,res)=>{
    try{
        let imagePath="";
        let product= await Product.findOne({email:req.body.email,isDelete:false});
        if(product){
            return res.status(400).json({message:"Data already exists...."})
        }
        if(req.file){
            imagePath=req.file.path.replace(/\\/g,"/");
        }
        let hashPassword=await bcrypt.hash(req.body.password,10);
        // console.log(hashPassword);
        product=await Product.create({...req.body,password:hashPassword,profileImage:imagePath});
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
        let token=await jwt.sign({productId:product._id},process.env.jwt_secret);
        res.status(201).json({product,message:"Login Successful",token});
    }
    catch(err){
        console.log(err);
        res.status(500).json({message:'internal server error'});
    }
};

exports.userProfile =async (req,res)=>{
    try {
        res.status(200).json(req.product);
    } 
    catch (error) {
      console.log(error); 
      res.status(500).json({message:'internal server error'}); 
    }
}

exports.updateData=async(req,res)=>{
        try {
            let product=req.product;
            product=await Product.findByIdAndUpdate(
                product._id,
                {$set:req.body},
                {new:true}
            );
            res.status(202).json({product,message:'updated successfully..'});
        } catch (error) {
            console.log(error); 
            res.status(500).json({message:'internal server error'});
        }
    };
    
    exports.DeleteData=async(req,res)=>{
        try {
            let product=req.product;
            product=await Product.findByIdAndUpdate(
                product._id,
                {$set:req.body,isDelete:true},
                {new:true}
            );
            res.status(202).json({product,message:'updated successfully..'});
        } catch (error) {
            console.log(error); 
            res.status(500).json({message:'internal server error'});
        }
    };

    exports.specialProduct=async(req,res)=>{
        try {
            let product={
                firstname:"sagar",
                lastname:"gamit",
                email:"sagar123@gmail.com",
                password:"sagu123",
                mobileNo:9876543210,
                address:{
                    line1:"surat",
                    line2:"yogichowk"
                }
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({message:"internal server error"});
        }
    };

        