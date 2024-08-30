const projectModel =  require('../Model/project.model');
exports.getdata = async (req,res)=>{
    const project= await projectModel.find();
    res.send(project)
}


exports.savedata =  (req,res)=>{
   const project= req.body;
   projectModel.create(project)
   .then(data =>{
    console.log("save successfully");
    res.status(201).send(data)
   })
   .catch(err=>{
    console.log(err);
    res.send({error:err,msg:"something went wrong"});
   });
}

exports.updatedata =  (req,res)=>{
    const {id} = req.params
    const project= req.body;
    toDoModel.findByIdAndUpdate(id,project)
    .then(()=>{
       
        res.send("update successfully")
       })
       .catch(err=>{
        console.log(err);
        res.send({error:err,msg:"something went wrong"});
       });
 }


 exports.deletedata=  (req,res)=>{
    const {id} = req.params
  
    projectModel.findByIdAndDelete(id)
    .then(()=>{
       
        res.send("update successfully")
       })
       .catch(err=>{
        console.log(err);
        res.send({error:err,msg:"something went wrong"});
       });
}
