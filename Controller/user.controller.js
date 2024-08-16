exports.getUser = async (req,res)=>{
    try {
        // let user = await User.findOne({firstName : req.query.firstName});
        let user = await User.findOne({_id : req.query.user_id})
        if(!user){
            res.status(404).json({message:'User not Found'});
        }
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Internal server Error'})
    }
};