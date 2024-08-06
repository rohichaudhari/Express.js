var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('hello world learn expressjs lecture1')
})

app.listen(3000 ,(req ,res)=>{
    console.log("server start at http://localhost:3000");
})