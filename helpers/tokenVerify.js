// const jwt=require('jsonwebtoken');
// const Product=require('../Model/product.model');

// exports.verifyToken=async(req,res,next)=>{
//     try {
//         let authorization=req.headers['authorization'];
//         if(!authorization){
//             return res.json({message:'not authorized...'});
//         }
//         let token=authorization.split(" ")[1];
//         let payload=await jwt.verify(token,process.env.jwt_secret);
//         if(!payload){
//             return res.status(401).json({message:'unauthorized..'});
//         }
//         let product= await Product.findOne({_id:payload.productId,isDelete:false});
//         if(!product){
//             return res.status(404).json({message:'user not found'});
//         }
//         req.product=product;
//         next();
//     } 
//     catch (error) {
//       console.log(error); 
//       res.status(500).json({message:'internal server error'});
//     }
// };

const jwt = require('jsonwebtoken');

const User = require('../Model/user.model');

exports.VerifyToken = async (req,res,next) =>{
    try {
        let authorization = req.headers['authorization'];
        if(!authorization){
            return res.json({message:'Not Authorized'});
        }
        let token = authorization.split(" ")[1];
        let payload = await jwt.verify(token,process.env.JWT_SECRET);
        if(!payload){
            return res.status(401).json({message:'unauthorized'});
        }
        let user = await User.findOne({_id:payload.userId,isDelete:false});
        console.log(user);
        if(!user){
            return res.status(404).json({message:'user not found'});
        }
        req.user = user;
        next();
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Internal server error'})
    }
}
