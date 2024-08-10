const express =  require('express');
const app = express();
const products = require('./product.json');
const morgan = require('morgan');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

app.get('/',(req,res)=>{
    res.send('welcome to express js');
  
})
app.post('/product',(req,res)=>{
    products.push(req.body);
    res.json({product:req.body,msg:'product add successfully'});
});

app.get('/product',(req,res)=>{
    res.json(products);
});

app.get('product/:id',(req,res)=>{
    let id =  +req.params.id;
    let item = products.find((product)=>product.id ===  id)
    res.json(item);
});
app.listen(3001,(req,res)=>{
    console.log('server start at http://localhost:3001');
})



