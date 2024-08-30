// const express =  require('express');
// const app = express();
// const products = require('./product.json');
// const morgan = require('morgan');

// app.use(express.json());
// app.use(express.urlencoded({extended: true}));
// app.use(morgan('dev'));

// app.get('/',(req,res)=>{
//     res.send('welcome to express js');
  
// })
// app.post('/product',(req,res)=>{
//     products.push(req.body);
//     res.json({product:req.body,msg:'product add successfully'});
// });

// app.get('/product',(req,res)=>{
//     res.json(products);
// });

// app.get('/product/:id',(req,res)=>{
//     let id =  +req.params.id;
//     let item = products.find((product)=>product.id ===  id)
//     res.json(item);
// });

// // replace data=> put
// app.put("/product/:id",(req,res)=>{
//     let id=+req.params.id;
//     let productindex=products.findIndex((product)=>product.id===id);
//     console.log(productindex);
//     products.splice(productindex,1,{...req.body});
//     res.json({message:"product replace sucessfully"})

// })

// // update data=>patch
// app.patch('/product/:id',(req,res)=>{
//     let id = +req.params.id;
//     let productIndx = products.findIndex((product)=> product.id === id);
//     console.log(productIndx);
//     const product = products[proIndx];
//     console.log(product);
//     products.splice(proIndx,1,{...product,...req.body});
//     res.json({message:'update succesfully'});
// });e
// //Delete Data=>DELETE
// app.delete('/product/:id',(req,res)=>{
//     let id = +req.params.id;
//     let productIndx = products.findIndex((product)=>product.id === id);
//     console.log(proIndx);
//     products.splice(productIndx,2);
//     res.json({products,message:"delete successfully"});
// });
// app.listen(3001,(req,res)=>{
//     console.log('server start at http://localhost:3001');
// })

// Day-8
// const express =  require('express');
// const app = express();
// const morgan = require('morgan');

// const productRoutes=require('./Routers/Product.routes.js');
// app.use(express.json());
// app.use(express.urlencoded({extended: true}));
// app.use(morgan('dev'));

// app.get("/",(req,res)=>{
//     res.send("welcome to Express server");
// });

// app.use("/api/product",productRoutes);

// app.listen(3001,()=>{
//     console.log("server start");
// });

// Day-9
require("dotenv").config()
const express =  require('express');
const app = express();
const morgan = require('morgan');
const mongoose=require("mongoose")
const port=process.env.PORT;
const path=require('path')
const ejs=require('ejs');
// const passport=require("passport");
// database connection

app.set("view engine","ejs")
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use('/Images',express.static(path.join(__dirname,'Images'))) 

app.get("/",(req,res)=>{
    res.send("welcome to Express server");
});


//  const router=require('./Routers/project.routes');
// app.use("/api/project",router);


// const productRoutes=require('./Routers/Product.routes');
// app.use("/api/product",productRoutes);



// card routes
const cartRoutes =  require('./Routers/card.routes');
app.use('/api/cart',cartRoutes);



// Product routes
const productRoutes = require("./Routers/Product.routes");
app.use("/api/product",productRoutes);

//user routes
const userRoutes = require('./Routers/user.router');
app.use('/api/user',userRoutes);


// app.use("/api/user",userRoutes);
app.listen(port,()=>{
    mongoose
.connect(process.env.MONGODB_URI)
.then(()=>console.log(`Database connection sucessfull.....`))
.catch(err=>console.log(err));
    console.log("server start");
});






