let mongoose = require('mongoose');
const Schema = mongoose.Schema


const questionSchema = new Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    }
},{timestamps:true})

module.exports = questionSchema;