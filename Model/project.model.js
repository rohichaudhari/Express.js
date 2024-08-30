const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    firstName :  String,
    lastName:{
        type: String
    },
    email:{
        type:String,
    },
    password:{
        type:String
    }
})

module.exports = mongoose.model("project",projectSchema)