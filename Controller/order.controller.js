const order=require('../Model/order.model')
const cart=require('../Model/card.model');
const cardModel = require('../Model/card.model');

exports.addNewOrder=async(req,res)=>{
    try {
        let carts=await cardModel.find({
            user:req.user._id,
            isDelete:false
        }).populate("productId")
        console.log(carts);
        let orderItems=carts.map((item)=>({
            productId:item.productId._id,
            qauntity:item.qauntity,
            price:item.productId.price,
            totalAmt:item.qauntity*item.productId.price,
        }))
        console.log(orderItems);
        let amount=orderItems.reduce((total,item)=>(total+=item.totalAmt),0);
        console.log("Amount:===>",amount)

        await cart.updateMany(
            {
                user:req.user._id,
                isDelete:false,
            },
            {isDelete:true}
        );
        res.json({message:"order Placed",order})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"server error"});
    }
};