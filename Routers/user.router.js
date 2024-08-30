// const express = require('express');
// const {addNewUser,getAllUser,getUser} = require('../Controller/user.controller');
// const userRoutes = express.Router();
// userRoutes.post('/',addNewUser);
// userRoutes.get('/',getAllUser);
// userRoutes.get('/getUser',getUser);
// module.exports =userRoutes;


const express = require('express');
const {RegisterUser,loginUser, userProfile,updateUser,deleteUser,specialUser} = require('../controller/user.controller');
const {VerifyToken} = require('../helpers/tokenVerify');
const {upload} = require('../helpers/imageUpload');
// addNewUser,getAllUser,getUser, updateUser,deleteUser
const userRoutes = express.Router();
// userRoutes.post('/',addNewUser);
// userRoutes.get('/',getAllUser);
// userRoutes.get('/getUser',getUser);
// userRoutes.put('/',updateUser);
// userRoutes.delete('/',deleteUser);
userRoutes.post('/register',upload.single('profileImage'),RegisterUser);
userRoutes.post('/login',loginUser);
userRoutes.get('/verifyuser',VerifyToken,userProfile);
userRoutes.put('/userprofile',VerifyToken,updateUser);
// userRoutes.delete('/',deleteUser);
userRoutes.get('/ejs',specialUser);
module.exports =userRoutes;
