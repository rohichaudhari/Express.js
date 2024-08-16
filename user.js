// const express=require("express");
// const app=express();
// const user=require('./user.json');
// const morgan = require('morgan');


// app.use(express.json());
// app.use(express.urlencoded({extended: true}));
// app.use(morgan('dev'));

// // app.get('/',(req,res)=>{
// //     res.send('welcome to home page');
// // })
// app.get('/user',(req,res)=>{
//     res.json(user);
// });

// app.get('/user/:id',(req,res)=>{
//     let id =  +req.params.id;
//     let item = user.find((user)=>user.id ===  id)
//     res.json(item);
// });

// app.post('/user',(req,res)=>{
//     user.push(req.body);
//     res.json({user:req.body,msg:'product add successfully'})
// })
// app.put("/user/:id",(req,res)=>{
//     let id=+req.params.id;
//     let userIndex=user.findIndex((user)=>user.id===id);
//     console.log(userIndex);
//     user.splice(userIndex,1,{...req.body});
//     res.json({message:"user sucessfull replaced"})
// })

// app.patch('/user/:id',(req,res)=>{
//     let id=+req.params.id;
//     let userIndex=user.findIndex((user)=>user.id===id);
//     console.log(userIndex);
//     const users=user[userIndex];
//     console.log(users)
//     user.splice(userIndex,1,{...users,...req.body});
//     res.json({message:'user updated sucessfull'});
// })
// app.delete('/user/:id',(req,res)=>{
//     let id=+req.params.id;
//     let userIndex=user.findIndex((user)=>user.id===id);
//     console.log(userIndex);
//     user.splice(userIndex,2);
//     res.json({user,message:"user data is deleted sucessfully"});
// })

// app.listen(3004,(req,res)=>{
//     console.log(`server start at http://localhost:3004`);
// })


const express = require('express');

const user = express();

const users = require('./user.json');
const morgan = require('morgan');

user.use(express.json());
user.use(express.urlencoded({extended:true}));
user.use(morgan('dev'));

user.get('/',(req,res)=>{
    res.send('welcome to users');
});

user.post('/user',(req,res)=>{
    // console.log(req.body);
        users.push(req.body);
        res.json({user:req.body,msg:'user add successfully'});
});

user.get('/user',(req,res)=>{
    res.json(users);
});

user.get('/user/:id',(req,res)=>{
    let id = +req.params.id;
    let list = users.find((emplist)=>emplist.id === id);
    res.json(list)
});

user.put('/user/:id',(req,res)=>{
    let id = +req.params.id;
    let empindx = users.findIndex((emplist)=> emplist.id === id);
    console.log(empindx);
    products.splice(empindx,1,{...req.body});
    res.json({message:"replace successfully"});
});

user.patch('/user/:id',(req,res)=>{
    let id = +req.params.id;
    let empindx = users.findIndex((emplistt)=> emplistt.id === id);
    console.log(empindx);
    const list = users[proIndx];
    console.log(list);
    products.splice(empindx,1,{...user,...req.body});
    res.json({message:'update succesfully'});
});

user.delete('/user/:id',(req,res)=>{
    let id = +req.params.id;
    let empindx = users.findIndex((emplist)=>emplist.id === id);
    console.log(empindx);
    products.splice(empindx,2);
    res.json({users,message:"delete successfully"});
});

user.listen(3004,()=>{
    console.log('server start at http://localhost:3004');
})
