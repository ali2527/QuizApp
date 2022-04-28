const Category = require("../models/category")

exports.addCategory = (req, res) => {
    const category = new Category(req.body)
    category.save((err, data) => {
        res.send("OK saved")
    })
}

exports.getAllCategories = (req, res) => {
    Category.find({},(err,data)=>{
        if(!err){
            res.send(data)
        }
    })
}