let mongoose = require('mongoose');
const Schema = mongoose.Schema


const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        unique:true,
        dropDups: true,
    }
}, { timestamps: true })


module.exports = mongoose.model('Categories', categorySchema);


