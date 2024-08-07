var express = require('express')
// var app = express()

// app.get('/', function (req, res) {
//   res.send('hello world learn expressjs lecture1')
// })

// app.listen(3000 ,(req ,res)=>{
//     console.log("server start at http://localhost:3000");
// })

const server=express();
server.get("/",(req,res)=>{
  res.write('welcome to Express server');
  res.end();
})

server.get("/user",(req,res)=>{
  res.status(200);
  res.json({message:'use GET method'});
})

server.post("/user",(req,res)=>{
  res.status(201);
  res.json({message:'use GET method'});
})
server.put("/user",(req,res)=>{
  res.status(200);
  res.json({message:'use put method'});
})
server.patch("/admin",(req,res)=>{
  res.status(200);
  res.json({message:'use patch method'});
})
server.delete("/admin",(req,res)=>{
  res.status(200);
  res.json({message:'use delete method'});
})
server.listen(9876,()=>{
  console.log(`server start at http://localhost:9876`);
})