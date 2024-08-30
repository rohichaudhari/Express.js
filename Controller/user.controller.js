const User = require('../Model/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.RegisterUser = async (req,res) =>{
    try {
        let imagepath = "";
        let user = await User.findOne({email:req.body.email,isDelete:false});
        if(user){
            return res.status(400).json({message:'User already exist..'});
        }
        if(req.file){
            console.log(req.file.path);
            imagepath = req.file.path.replace(/\\/g,"/");
        }
        let hasPassword = await bcrypt.hash(req.body.password,10);
        console.log(hasPassword);
        user = await User.create({...req.body,password: hasPassword,profileImage:imagepath});
        user.save();
        res.status(201).json({user,message:'user registration successfully'});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Internav server error'})
    }
};

exports.loginUser = async (req,res) =>{
    try {
        let user = await User.findOne({email: req.body.email,isDelete: false});
        if(!user){
            return res.status(404).json({message:'user not found'});
        }
        let matchPassword = await bcrypt.compare(req.body.password,user.password);
        console.log(matchPassword);
        if(!matchPassword){
            return res.status(404).json({message:'email and password not match'});
        }
        let token = await jwt.sign({userId: user._id},process.env.JWT_SECRET);
        res.status(200).json({message:'Login success',token});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Internav server error'})
    }
};

exports.userProfile = async (req,res) =>{
    try {
        res.status(200).json(req.user);
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'internav server error'});
    }
};

exports.updateUser = async (req,res) =>{
    try {
        let user =  req.user;
        user = await User.findByIdAndUpdate(
            user._id,
            {$set:req.body},
            {new:true}
        );
        res.status(202).json({user,message:'user update successfully'});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Internal server error'})
    }
};

exports.deleteUser = async (req,res) =>{
    try {
        let user =  req.user;
        user = await User.findByIdAndUpdate(user._id,
            {$set:{isDelete:true}},
            {new:true}
        );
        res.status(202).json({message:'user delete successfully'});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Internal server error'})
    }
};

exports.specialUser = async (req,res) =>{
    try {
        let user = {
            firstName:'akshra',
            lastName:'Gavit',
            email:'akshra@gmail.com'
        }

     user = await User.findOne({firstName:req.query.name,isDelete:false});
     if(!user)
     {
        return res.render('NotFound.ejs');
     }
     res.render('user.ejs',{user})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Internal server Error'});
    }
}

