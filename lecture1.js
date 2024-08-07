var express = require('express')
const server=express();
// var app = express()

// app.get('/', function (req, res) {
//   res.send('hello world learn expressjs lecture1')
// })

// app.listen(3000 ,(req ,res)=>{
//     console.log("server start at http://localhost:3000");
// })

// Day-3
// const fs=require('fs');
// const data=fs.readFileSync('./friend.json','utf-8')

// server.get("/friend",(req,res)=>{
//   res.status(200);
//   res.json(JSON.parse(data));
// })


// const server=express();
// server.get("/",(req,res)=>{
//   res.write('welcome to Express server');
//   res.end();
// })

// middleware
// let middleware=(req,res,next)=>{
//   console.log(req.query);
// }
// server.use(middleware);

let middleware=(req,res,next)=>{
  // console.log(req.query);
  if(req.query.password==='1234'){
    console.log('sucess');
    next();
  }
  else{
    return res.json({message:'incorect password'})
  }
}

server.get("/user",middleware,(req,res)=>{
  res.status(200);
  res.json({message:'use GET method'});
})
// Day 3 end
// server.post("/user",(req,res)=>{
//   res.status(201);
//   res.json({message:'use GET method'});
// })
// server.put("/user",(req,res)=>{
//   res.status(200);
//   res.json({message:'use put method'});
// })
// server.patch("/admin",(req,res)=>{
//   res.status(200);
//   res.json({message:'use patch method'});
// })
// server.delete("/admin",(req,res)=>{
//   res.status(200);
//   res.json({message:'use delete method'});
// })
server.listen(1034,()=>{
  console.log(`server start at http://localhost:1034`);
})