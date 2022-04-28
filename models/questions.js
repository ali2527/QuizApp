let mongoose = require('mongoose');
const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId


const questionSchema = new Schema({
    text:{
        type:String,
        required:true,
        minlength:3,
        unique:true,
        dropDups: true,
    },
    category_id:{
        type:ObjectId,
        ref:"Categories",
        required:true
    },
    correctAnswer:{
        type:String,
        required:true,
        minlength:3
    },
    incorrectAnswer:{
        type:Array,
        required:true,
        minlength:3
    },
    points:{
        type:Number,
        required:true,
    },
    type:{
        type:String,
        required:true,
    },
    difficulty:{
        type:String,
        required:true,
        default:'Easy'
    }
},{timestamps:true})

module.exports = mongoose.model("Question",questionSchema );