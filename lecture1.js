const morgan =  require('morgan');

server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use('/hello',express.static('public'));
server.use(morgan('tiny'));

let middleware = (req,res,next)=>{
    console.log(req.body);
    if(req.body.age >=18){
        console.log('success');
        next();
    }
    else
    {
        return res.json({message:'incorrect way!!!!!!!!'});
    }
}
server.get('/',middleware ,(req,res)=>{
    res.write('welcome to express js');
    res.end();
})

server.listen(3000,(req,res)=>{
  console.log(`server start at http://localhost:3000`)
})
